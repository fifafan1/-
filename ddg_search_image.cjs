const https = require('https');
https.get('https://html.duckduckgo.com/html/?q=site:unsplash.com+"raw+meat"', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /unsplash\.com\/photos\/([a-zA-Z0-9_-]+)/g;
    let match;
    const ids = [];
    while ((match = regex.exec(data)) !== null) {
      ids.push(match[1]);
    }
    console.log("IDs:", Array.from(new Set(ids)));
  });
});
