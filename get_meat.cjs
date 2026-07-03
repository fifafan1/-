const https = require('https');

https.get('https://unsplash.com/s/photos/raw-pork', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const ids = data.match(/"id":"([a-zA-Z0-9_-]{11})"/g);
    if(ids) console.log(Array.from(new Set(ids)).slice(0, 10));
    else console.log("No IDs found. Status:", res.statusCode);
  });
});
