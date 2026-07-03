import urllib.request
import re

url = "https://html.duckduckgo.com/html/?q=site:unsplash.com+1615937657715-bc7b4b7962c1"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    text = re.sub('<[^<]+>', '', html)
    print(text[:1000])
except Exception as e:
    print(e)
