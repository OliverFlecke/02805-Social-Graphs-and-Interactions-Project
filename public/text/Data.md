# Data

The data used in the project is based on [OpenFlights](https://openflights.org/data) and [Twitter](https://twitter.com).
OpenFlights has collected a dataset of all the airports in the world, along with the routes between them.
This have been the basis for creating a network of the airtraffic spanning the world.
The dataset for airports contain several interesting datapoints for each airport, such as the city and country it is located in, along with the airport's longitude and latitude.
The routes dataset simply describes where all the flights begin and end, along with which airline that are flying this route.

Along with this, we have extracted the latest 100 tweets from each of the airports in an effort to capture the mood at each of them.
This was done through Twitter's developer API, using the longitude and latitude from each of the airports to only find tweets in the airports.
Depending on the size of the airport, it was sometimes possible to get 100 tweets from the last 24 hours, while it was necessary for some of the smaller ones to go several months back.
And for the smallest of the smallest, there did not exists 100 tweets to download, so here we used those that existed.
