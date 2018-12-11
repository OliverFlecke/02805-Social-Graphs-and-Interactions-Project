import React from 'react';
import { Histogram } from '../components/Histogram';
import { ImageSlider } from '../components/ImageSlider';
import { Markdown } from '../components/Markdown';
import '../styles/Slick.scss';
import { Section } from './Section';

export class Sentiment extends React.Component {
    public render() {
        return (
            <section>
                <div id={Section.Sentiment} />
                <div className={'sectionContainer'}>
                    <Markdown filename={'Sentiment.md'} />

                    <ImageSlider
                        images={[
                            {
                                image: 'wordcloud.png',
                                title: 'Words used in all of the tweets',
                                text: <Markdown filename={'Wordcloud.md'} />,
                            },
                            {
                                image: 'wordcloud_negative.png',
                                title: 'Words used in negative tweets',
                                text: <Markdown filename={'Wordcloud_negative.md'} />,
                            },
                            {
                                image: 'wordcloud_positive.png',
                                title: 'Words used in the positive tweets',
                                text: <Markdown filename={'Wordcloud_positive.md'} />,
                            },
                        ]}
                    />

                    <Markdown filename={'SentimentDistribution.md'} />

                    <Histogram
                        title='Sentiment distribution'
                        dataFile='data/sentiment_normalized.json'
                        normalDistributionFile='data/normal_distribution.json'
                        isBinned={true}
                    />

                    <ImageSlider
                        images={[
                            { image: 'graph_absolute_sentiment.png', title: 'Absolute sentiment', text: <Markdown filename={'Sentiment_plot_abs.md'}/> },
                            { image: 'graph_negative_sentiment_airports.png', title: 'Negative sentiment', text: <Markdown filename={'Sentiment_plot_min.md'}/> },
                            { image: 'graph_positive_sentiment_airports.png', title: 'Positive sentiment', text: <Markdown filename={'Sentiment_plot_max.md'}/> },
                        ]}
                    />
                </div>
            </section>
        );
    }
}
