import urllib.request
import re

url = "https://en.wikipedia.org/wiki/Pork_chop"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    images = re.findall(r'src="(//upload\.wikimedia\.org/wikipedia/commons/thumb/[^"]+)"', html)
    for img in images:
        if "Pork" in img or "chop" in img or "porc" in img:
            print("https:" + img)
except Exception as e:
    print(e)
