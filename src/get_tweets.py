from twitterAPI import searchLocation
import pandas as pd
import os
from tqdm import tqdm

airports = pd.read_csv('data/airports.csv')
tweets_directory = 'data/tweets/'

if not os.path.exists(tweets_directory):
    os.makedirs(tweets_directory)

def saveTweets(airport_id: int, tweets: list):
    with open(os.path.join(tweets_directory, str(airport_id)), 'w', encoding='utf-8') as f:
        f.write(';;;\n\n'.join(tweets))


print('Starting retreiving tweets')

for i, row in enumerate(airports.itertuples()):
    airport_id = row[1]
    name = row[2]
    latitude = row[7]
    longitude = row[8]
    tweets = searchLocation(name, latitude, longitude)
    tweets = map(lambda x: x.text, tweets)

    saveTweets(airport_id, tweets)

    if (i + 1) % 100 == 0:
        print('{0} airports retreived'.format(i + 1))

print('Finished retreiving tweets')
