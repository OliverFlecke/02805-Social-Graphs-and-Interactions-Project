# Data

The data used in this project is based on [OpenFlights](https://openflights.org/data) and [Twitter](https://twitter.com).
OpenFlights has collected a data set of all the airports in the world, along with the flights between them.
This have been the basis for creating a network of the airtraffic spanning the globe.
The data set for airports contain several interesting datapoints for each airport, such as the city and country it is located in, along with the airport's longitude and latitude.
The flight route data set describes where all the flights source and destination airport, along with which airline that are flying this route.

On top of this, we have extracted the latest 100 tweets from each of the airports in an effort to capture the mood at each of them.
This was done through Twitter's developer API, using the longitude and latitude from each of the airports to find the tweets at each the airports.
Depending on the size of the airport, it was sometimes possible to get 100 tweets from the last 24 hours, while for some of the smaller ones, it was necessary to go several months back.
