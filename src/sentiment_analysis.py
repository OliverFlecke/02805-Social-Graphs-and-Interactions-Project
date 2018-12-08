import nltk
from nltk.corpus import stopwords
from nltk import FreqDist
import string
import pickle
from wordcloud import WordCloud
import os
import pandas as pd
import requests
from tqdm import tqdm

import matplotlib.pyplot as plt
plt.style.use('dark_background')
plt.style.use('seaborn-deep')

from typing import List

data_path = 'data'

airports = pd.read_csv(os.path.join(data_path, 'airports.csv'))
airports.set_index('Airport Id', inplace=True)

print('Loading tweets')
tweets = {
    row['Name']: ''.join(open(
        os.path.join(data_path, 'tweets', str(index)), 'r', encoding='utf-8'
    ).readlines())
    for index, row in airports.iterrows()
}
print('Loaded the tweets')

blacklisted_tokens = [
    'rt',
    'amp'
]
def tokenize(text: str, names: set = []) -> List[str]:
    sw = stopwords.words('english')
    text = text.lower()
    text = text.translate(str.maketrans('', '', string.punctuation))
    tokens = nltk.word_tokenize(text)
    tokens = [token for token in tokens
                  if token not in names
                  and token not in sw
                  and not token.isdigit()
                  and token not in blacklisted_tokens
         ]
    return tokens

print('Tokensize')
tokens = { airport: tokenize(document) for airport, document in tqdm(tweets.items()) }

tokens_set = { airport: set(document) for airport, document in tokens.items() }

def calculate_n_ts(tokens: list, documents: list) -> set:
    ''' Calculate the n_ts for a list of tokens given a list of documents
    '''
    return {
        word: sum(1 for document in documents if word in document)
           for word in set(tokens)
    }

print('Calculating n_ts')
n_ts = {
    airport: calculate_n_ts(ts, tokens_set.values())
    for airport, ts in tqdm(tokens.items())
}

with open('n_ts.data', 'wb') as f:
    pickle.dump(n_ts, f)