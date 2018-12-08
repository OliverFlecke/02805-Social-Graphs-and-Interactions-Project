import Axios from 'axios';
import React from 'react';
import Slider from 'react-slick';
import { Histogram } from '../components/Histogram';
import { Markdown } from '../components/Markdown';
import '../styles/Slick.scss';
import { Section } from './Section';
import * as styles from './styles/Sentiment.module.scss';

interface ISentiment {
    data?: any;
    normal?: any;
}

export class Sentiment extends React.Component<{}, ISentiment> {
    public constructor(props: any) {
        super(props);

        this.state = {};

        Axios.get('data/sentiment_normalized.json').then((response: any) =>
            this.setState({
                data: response.data.series,
            }),
        );
        Axios.get('data/normal_distribution.json').then((response: any) =>
            this.setState({ normal: response.data.series }),
        );
    }

    public render() {
        return (
            <section id={Section.Sentiment}>
                <Markdown filename={'Sentiment.md'} />

                {this.renderSlick()}

                {this.state.data && this.state.normal ? (
                    <Histogram
                        data={this.state.data}
                        normalDistribution={this.state.normal}
                        title='Sentiment distribution'
                    />
                ) : null}
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
