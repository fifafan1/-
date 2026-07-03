import urllib.request
import json
import urllib.parse

def search(query):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&utf8=&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        resp = urllib.request.urlopen(req).read()
        data = json.loads(resp)
        for res in data['query']['search']:
            title = res['title']
            url2 = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json"
            try:
                resp2 = urllib.request.urlopen(urllib.request.Request(url2, headers={'User-Agent': 'Mozilla/5.0'})).read()
                data2 = json.loads(resp2)
                pages = data2['query']['pages']
                for page_id in pages:
                    print(pages[page_id]['imageinfo'][0]['url'])
            except Exception as e2:
                pass
    except Exception as e:
        print(e)

search("File:raw pork chop board")
print("===")
search("File:raw pork board")
