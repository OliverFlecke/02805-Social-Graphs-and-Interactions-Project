import React from 'react';
import { ImageSlider } from '../components/ImageSlider';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';

export class Centrality extends React.Component {
    public render() {
        return (
            <section id={Section.Centrality}>
                <Markdown filename={'Centrality.md'} />

                <ImageSlider
                    images={[
                        {
                            image: 'graph_degree_size.png',
                            title: 'Degree size',
                        },
                        {
                            image: 'graph_betweeness_centrality.png',
                            title: 'Betweenness centrality',
                        },
                        {
                            image: 'graph_eigenvector_centrality.png',
                            title: 'Eigenvector centrality',
                        },
                    ]}
                />
            </section>
        );
    }
}
