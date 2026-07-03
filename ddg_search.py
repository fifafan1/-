import urllib.request
import urllib.parse
import re

url = "https://html.duckduckgo.com/html/?q=site:unsplash.com+raw+pork+steak"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    links = re.findall(r'href="//duckduckgo\.com/l/\?uddg=([^"]+)"', html)
    for l in links:
        decoded = urllib.parse.unquote(l)
        print(decoded)
except Exception as e:
    print(e)
