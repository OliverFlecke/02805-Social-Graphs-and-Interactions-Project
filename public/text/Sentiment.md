# Sentiment

By looking at the tweets downloaded from Twitter, it is possible to determine the sentiment or mood at each of the individual airports.
This is done by extracting the most telling words from each tweet, removing stopwords and punctuation.
Every tweet is scored on a scale from one to ten, based on [Temporal Patterns of Happiness and Information in a Global Social Network: Hedonometrics and Twitter](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0026752).
In this article, they have taken 10,000 unique words and used many different people give them a rating based on how happy they think the word is.
Using the average score from all of these people has allowed us to calculate how happy or sad each of the airport tweets is.

In the visualizations below, the tweets have been partitioned into three different parts: all of the tweets together, only the negative tweets, and only the positive tweets.
