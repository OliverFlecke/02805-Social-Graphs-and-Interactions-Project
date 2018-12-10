import React from 'react';
import { ImageSlider } from '../components/ImageSlider';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';

export class Centrality extends React.Component {
    public render() {
        return (
            <section>
                <div id={Section.Centrality} />
                <div className={'sectionContainer'}>
                    <Markdown filename={'Centrality.md'} />

                    <ImageSlider
                        images={[
                            {
                                image: 'graph_degree_size.png',
                                title: 'Degree size',
                                text:
                                    'Determining the node sizes based on node degrees gives an idea of how busy an airport is or at least number of different flight paths that connects the airport to the rest of the world. ',
                            },
                            {
                                image: 'graph_betweeness_centrality.png',
                                title: 'Betweenness centrality',
                                text:
                                    'Determining the node sizes based on the betweenness centrality measures gives an idea of which airports which most often is used for connecting flights',
                            },
                            {
                                image: 'graph_eigenvector_centrality.png',
                                title: 'Eigenvector centrality',
                                text:
                                    'With the node sizes depending on the eigenvector centrality measurements it takes into perspective how well the connected airports are connected to eachother.',
                            },
                        ]}
                    />
                </div>
            </section>
        );
    }
}
