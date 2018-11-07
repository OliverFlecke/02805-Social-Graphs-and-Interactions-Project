
import twitter
import json

with open('twitter_config.json', 'r') as f:
    config = json.load(f)

api = twitter.Api(consumer_key=config['consumer_key'],
    consumer_secret=config['consumer_secret'],
    access_token_key=config['access_token'],
    access_token_secret=config['access_secret'])


def searchLocation(airport: str, latitude: float, longitude: float,
    radius: int = 4, count: int = 100) -> list:
    '''Search of the tweets near a loctation

    @param airpart: Name of the airport
    @param latitude: The latitude of the airport
    @param longitude: The longitude of the airport
    @param radius: The radius to search for tweets near the given coordinates in km. Defaults to 4
    @param count: The maximum number of tweets to return. At most 100

    @returns: Up to a hundred of the latest tweets near the airport
    '''

    query = 'q={0}&qeocode={1},{2},{3}km&count={4}&result_type=recent&lang=en'.format(
        'airport', latitude, longitude, radius, count)

    return api.GetSearch(raw_query=query)
