#!/usr/bin/env python3
"""
Icon Generator for Trader AI PWA
Generates PWA icons in multiple sizes using Python PIL
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Icon sizes needed for PWA
ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

# Colors for the icon
PRIMARY_COLOR = "#0066ff"
ACCENT_COLOR = "#00f5ff" 
BACKGROUND_COLOR = "#1a1a2e"

def create_gradient_background(size):
    """Create a gradient background"""
    image = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    
    # Create gradient effect
    for i in range(size):
        # Calculate color interpolation
        ratio = i / size
        r = int(0 + (26 - 0) * ratio)
        g = int(102 + (26 - 102) * ratio)  
        b = int(255 + (46 - 255) * ratio)
        
        draw.line([(0, i), (size, i)], fill=(r, g, b, 255))
    
    return image

def create_chart_path(size, draw):
    """Create a simple trading chart path"""
    margin = size // 8
    chart_width = size - 2 * margin
    chart_height = size // 2
    
    # Chart points (relative to chart area)
    points = [
        (0, 0.8),
        (0.2, 0.6),
        (0.4, 0.3),
        (0.6, 0.4),
        (0.8, 0.1),
        (1.0, 0.2)
    ]
    
    # Convert to actual coordinates
    coords = []
    for x_ratio, y_ratio in points:
        x = margin + int(x_ratio * chart_width)
        y = margin + int(y_ratio * chart_height)
        coords.append((x, y))
    
    # Draw the chart line
    line_width = max(2, size // 80)
    for i in range(len(coords) - 1):
        draw.line([coords[i], coords[i + 1]], 
                 fill=ACCENT_COLOR, width=line_width)
    
    # Draw points
    point_radius = max(2, size // 50)
    for x, y in coords:
        draw.ellipse([x - point_radius, y - point_radius, 
                     x + point_radius, y + point_radius], 
                    fill=ACCENT_COLOR)

def create_icon(size):
    """Create a single icon of the specified size"""
    # Create base image with gradient
    image = create_gradient_background(size)
    draw = ImageDraw.Draw(image)
    
    # Add rounded rectangle background
    corner_radius = size // 8
    background_margin = size // 20
    draw.rounded_rectangle(
        [background_margin, background_margin, 
         size - background_margin, size - background_margin],
        radius=corner_radius,
        fill=BACKGROUND_COLOR + "E6"  # Semi-transparent
    )
    
    # Add chart
    create_chart_path(size, draw)
    
    # Add "AI" text if icon is large enough
    if size >= 128:
        try:
            # Try to use a system font
            font_size = size // 6
            font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size)
        except:
            # Fallback to default font
            font = ImageFont.load_default()
        
        text = "AI"
        
        # Get text bounding box
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        # Position text at bottom
        x = (size - text_width) // 2
        y = size - text_height - size // 8
        
        # Add text shadow
        shadow_offset = max(1, size // 100)
        draw.text((x + shadow_offset, y + shadow_offset), text, 
                 fill="#000000", font=font)
        draw.text((x, y), text, fill=ACCENT_COLOR, font=font)
    
    return image

def generate_all_icons():
    """Generate all required PWA icons"""
    # Ensure icons directory exists
    os.makedirs('icons', exist_ok=True)
    
    print("Generating Trader AI PWA icons...")
    
    for size in ICON_SIZES:
        print(f"Creating {size}x{size} icon...")
        icon = create_icon(size)
        filename = f"icons/icon-{size}x{size}.png"
        icon.save(filename, "PNG")
        print(f"Saved: {filename}")
    
    # Also create favicon
    print("Creating favicon...")
    favicon = create_icon(32)
    favicon.save("icons/icon-32x32.png", "PNG")
    print("Saved: icons/icon-32x32.png")
    
    # Create Apple touch icon
    print("Creating Apple touch icon...")
    apple_icon = create_icon(180)
    apple_icon.save("icons/apple-touch-icon.png", "PNG")
    print("Saved: icons/apple-touch-icon.png")
    
    print("\n✅ All icons generated successfully!")
    print("Icons created:")
    for size in ICON_SIZES + [32, 180]:
        size_name = f"{size}x{size}"
        if size == 180:
            print(f"  - apple-touch-icon.png ({size_name})")
        else:
            print(f"  - icon-{size_name}.png")

if __name__ == "__main__":
    try:
        generate_all_icons()
    except ImportError:
        print("❌ PIL (Pillow) is required to generate icons.")
        print("Install it with: pip install Pillow")
        print("\nAlternatively, you can:")
        print("1. Use an online icon generator")
        print("2. Create icons manually using design software")
        print("3. Use placeholder icons for development")
    except Exception as e:
        print(f"❌ Error generating icons: {e}")
        print("You can use placeholder icons for development.") 