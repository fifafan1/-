import urllib.request
import re
urls = [
    "https://unsplash.com/photos/1615937657715-bc7b4b7962c1",
    "https://unsplash.com/photos/1602491453631-e2a5ad90a131",
    "https://unsplash.com/photos/1608889175123-8ee362201f81",
    "https://unsplash.com/photos/1542826438-bd32f43d626f",
    "https://unsplash.com/photos/1607623814075-e51df1bdc82f",
    "https://unsplash.com/photos/1558030006-450675393462"
]
for url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        m = re.search(r'<title>(.*?)</title>', html)
        print(url, m.group(1) if m else "No title")
    except Exception as e:
        print(url, e)
