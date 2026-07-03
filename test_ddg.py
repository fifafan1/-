import urllib.request
import re

url = "https://html.duckduckgo.com/html/?q=site:unsplash.com+raw+pork+meat"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    images = re.findall(r'unsplash\.com/photos/([A-Za-z0-9_-]+)', html)
    for img in set(images):
        print(img)
except Exception as e:
    pass
