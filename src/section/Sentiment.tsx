import React from 'react';
import { Histogram } from '../components/Histogram';
import { ImageSlider } from '../components/ImageSlider';
import { Markdown } from '../components/Markdown';
import '../styles/Slick.scss';
import { Section } from './Section';

export class Sentiment extends React.Component {
    public render() {
        return (
            <section id={Section.Sentiment}>
                <Markdown filename={'Sentiment.md'} />

                <ImageSlider images={['wordcloud.png', 'wordcloud_negative.png', 'wordcloud_positive.png']} />

                <Histogram
                    title='Sentiment distribution'
                    dataFile='data/sentiment_normalized.json'
                    normalDistributionFile='data/normal_distribution.json'
                    isBinned={true}
                />
            </section>
        );
    }
}
