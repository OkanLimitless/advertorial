export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Get affiliate URL from environment variable
  const affiliateUrl = process.env.AFFILIATE_URL || 'https://exl-redircd.com/?a=25528&c=395863';
  
  // Add tracking parameters
  const url = new URL(affiliateUrl);
  url.searchParams.set('utm_source', 'bitcoin360ai-pwa');
  url.searchParams.set('utm_medium', 'elon-musk-landing');
  url.searchParams.set('utm_campaign', 'tesla-ai-trading');
  url.searchParams.set('t', Date.now());

  // Return the affiliate URL
  res.status(200).json({ 
    url: url.toString(),
    timestamp: new Date().toISOString()
  });
} 