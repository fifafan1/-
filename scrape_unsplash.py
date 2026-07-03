import urllib.request
import re
import json

url = "https://unsplash.com/s/photos/raw-meat-board"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # find next data
    m = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', html)
    if m:
        data = json.loads(m.group(1))
        # drill down
        # usually data['props']['pageProps']['initialState'] etc.
        # let's just regex all photo ids directly from html
        ids = re.findall(r'"id":"([a-zA-Z0-9_-]{11})"', html)
        # get unique
        ids = list(set(ids))
        print("Found IDs:", ids[:10])
except Exception as e:
    print(e)
