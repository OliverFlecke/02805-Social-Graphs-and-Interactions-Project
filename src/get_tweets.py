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
        f.write('\n'.join(tweets))

if __name__ == '__main__':
    for row in tqdm(list(airports.itertuples())):
        airport_id = row[1]
        name = row[2]
        latitude = row[7]
        longitude = row[8]
        tweets = searchLocation(name, latitude, longitude)
        tweets = map(lambda x: x.text, tweets)

        saveTweets(airport_id, tweets)
