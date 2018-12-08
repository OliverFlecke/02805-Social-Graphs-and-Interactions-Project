import React from 'react';
import Slider from 'react-slick';
import { Histogram } from '../components/Histogram';
import { Markdown } from '../components/Markdown';
import '../styles/Slick.scss';
import { Section } from './Section';
import * as styles from './styles/Sentiment.module.scss';

export class Sentiment extends React.Component {
    public render() {
        return (
            <section id={Section.Sentiment}>
                <Markdown filename={'Sentiment.md'} />

                {this.renderSlick()}

                <Histogram
                    title='Sentiment distribution'
                    dataFile='data/sentiment_normalized.json'
                    normalDistributionFile='data/normal_distribution.json'
                    isBinned={true}
                />
            </section>
        );
    }

    private renderSlick() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div className={styles.sliderContainer}>
                <Slider {...settings}>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/wordcloud.png`} />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/wordcloud_negative.png`} />
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/wordcloud_positive.png`} />
                    </div>
                </Slider>
            </div>
        );
    }
}
