import urllib.request
import re

url = "https://commons.wikimedia.org/w/index.php?search=pastirma+sliced&title=Special:MediaSearch&go=Go&type=image"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    images = re.findall(r'src="(https://upload\.wikimedia\.org/wikipedia/commons/thumb/[^"]+)"', html)
    for img in set(images):
        print(img)
except Exception as e:
    pass

url = "https://commons.wikimedia.org/w/index.php?search=cured+meat+spices&title=Special:MediaSearch&go=Go&type=image"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    images = re.findall(r'src="(https://upload\.wikimedia\.org/wikipedia/commons/thumb/[^"]+)"', html)
    for img in set(images):
        print(img)
except Exception as e:
    pass

