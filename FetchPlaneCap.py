import pandas as pd
import urllib2
import json
import re

planes = pd.read_csv('./data/planes.csv')
routes = pd.read_csv('./data/routes.csv')

baseurl = "http://en.wikipedia.org/w/api.php/?"
action = "action=query"
title = "titles=List_of_ICAO_aircraft_type_designators"
content = "prop=revisions"
rvprop ="rvprop=timestamp|content"
dataformat = "format=json"
rvdir = "rvdir=older" #sort revisions from newest to oldest
start = "rvend=2000-01-03T00:00:00Z" #start of my time period
end = "rvstart=2018-11-03T00:00:00Z" #end of my time period
limit = "rvlimit=1" #consider only the first revision

query = "%s%s&%s&%s&%s&%s&%s&%s&%s&%s" % (baseurl, action, title, content, rvprop, dataformat, rvdir, end, start, limit)

response = urllib2.urlopen(query)
html = response.read()
jsn = json.loads(html)

rev = jsn["query"]["pages"].itervalues().next()["revisions"]

regex = r'{\| class="wikitable sortable" \N* Model\\n\|-\\n\|(\N*)\\n\|}'

uniqs = []
for i in routes.Equipment.unique():
    uniqs.extend(re.findall(r'\S+', str(i)))
    
uniqs = set([i for i in uniqs if i != 'nan'])

print len(uniqs)