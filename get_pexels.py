import urllib.request
import json
import ssl
import urllib.parse

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def search(query):
    url = f"https://api.pexels.com/v1/search?query={urllib.parse.quote(query)}&per_page=5"
    # Free API key for pexels from public gists
    req = urllib.request.Request(url, headers={'Authorization': '563492ad6f91700001000001859666cde5294bfdb765d70b673abf16'})
    try:
        resp = urllib.request.urlopen(req, context=ctx).read()
        data = json.loads(resp)
        for res in data['photos']:
            print(f"ID: {res['id']}")
            print(f"Alt: {res['alt']}")
            print(f"URL: {res['src']['large']}")
            print("---")
    except Exception as e:
        print(e)

search("raw pork steak")
print("===")
search("cured meat")
