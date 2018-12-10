import React from 'react';
import { ImageSlider } from '../components/ImageSlider';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';

export class Communities extends React.Component {
    public render() {
        return (
            <section id={Section.Communities}>
                <Markdown filename={'Communities.md'} />

                <ImageSlider
                    images={[
                        {
                            image: 'airportgraph_communities.png',
                            title: 'Optimal communities in the graph',
                            text:
                                'hello this is some textoeudonasethuoeasuhaoenthutsnoeh unsoeahnu oeanuhntoeh usntoehutnh oeasntuh noetah unsoae hustnoeh ustnoeh unthaoenstuhtnaoeudhnstaod usntoehnushoae suh ntsoahustnoe hu nsdiudsunso h untohuntoea h tunhaoesuhanotsuhnvtaoehuntaoehsu ohetnsu hsoaenvh',
                        },
                        {
                            image: 'airportgraph_continent_communities.png',
                            title: 'Communities based on continents',
                            text: 'tuhostuh',
                        },
                        { image: 'airportgraph_country_communities.png', title: 'Communities based on countries' },
                    ]}
                />
            </section>
        );
    }
}
