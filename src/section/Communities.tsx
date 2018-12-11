import React from 'react';
import { ImageSlider } from '../components/ImageSlider';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';

export class Communities extends React.Component {
    public render() {
        return (
            <section id={Section.Communities}>
                <div className={'sectionContainer'}>
                    <Markdown filename={'Communities.md'} />
                    Below we can see various ways of seperating the different airports around the world into
                    communities. The best division of nodes into communities has no clear structure. The reason for the
                    "lack" of structure does make sense. Large airports with many routes tend to add all the small
                    airports that have links to the larger airport to the same community. These smaller airports might be near or far away, which makes it look random.
                    <ImageSlider
                        images={[
                            {
                                image: 'airportgraph_communities.png',
                                title: 'Optimal communities in the graph',
                                text: `Each color represents a different community. It is clear that there isn't any apparent pattern in the community partition.`,
                            },
                            {
                                image: 'airportgraph_continent_communities.png',
                                title: 'Communities based on continents',
                                text: 'Each color represents a different community (continent).',
                            },
                            {
                                image: 'airportgraph_country_communities.png',
                                title: 'Communities based on countries',
                                text: 'Each color represents a different community (country).',
                            },
                        ]}
                    />
                    By creating communities based on what continent the airports are placed on, we get a community
                    structure that makes more sense to the human eye. Communities based on countries were also done, but
                    this doesn't really create good communities since many flights are international and therefore the
                    modularity will not be very high.
                    <img
                        src={`${process.env.PUBLIC_URL}/images/airportgraph_with_high_degree_hubs.png`}
                        style={{ boxShadow: 'none' }}
                    />
                    It turned out that the modularity of the best community partition was not very good. The continent
                    community partition was almost as good as the best one. In the above figure, the top ten hubs are marked
                    as red nodes and only flights involving these can be seen as links. It is clear that it is hard to get good
                    communities due the large connectivity between airports. What was found out was that connectivity around the world is heavily influenced by the large hubs. 
                </div>
            </section>
        );
    }
}
