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

                <ImageSlider
                    images={[
                        { image: 'wordcloud.png', title: 'Words used in all of the tweets' },
                        { image: 'wordcloud_negative.png', title: 'Words used in negative tweets' },
                        { image: 'wordcloud_positive.png', title: 'Words used in the positive tweets' },
                    ]}
                />

                <Histogram
                    title='Sentiment distribution'
                    dataFile='data/sentiment_normalized.json'
                    normalDistributionFile='data/normal_distribution.json'
                    isBinned={true}
                />

                <ImageSlider
                    images={[
                        { image: 'graph_absolute_sentiment.png', title: 'Absolute sentiment' },
                        { image: 'graph_negative_sentiment_airports.png', title: 'Negative sentiment' },
                        { image: 'graph_positive_sentiment_airports.png', title: 'Positive sentiment' },
                    ]}
                />
            </section>
        );
    }
}
