import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def search(query):
    url = f"https://unsplash.com/napi/search/photos?query={urllib.parse.quote(query)}&per_page=5"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        resp = urllib.request.urlopen(req, context=ctx).read()
        data = json.loads(resp)
        for res in data['results']:
            print(f"ID: {res['id']}")
            print(f"Alt: {res['alt_description']}")
            print(f"URL: {res['urls']['regular']}")
            print("---")
    except Exception as e:
        print(e)

import urllib.parse
search("raw pork steak board")
print("===")
search("cured meat spices")
