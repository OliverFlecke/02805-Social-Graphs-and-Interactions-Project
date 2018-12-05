import Axios from 'axios';
import React from 'react';
import Slider from 'react-slick';
import { Histogram } from '../components/Histogram';
import { Markdown } from '../components/Markdown';
import AllTokens from '../images/All tokens.png';
import NegativeWordCloud from '../images/Negative tweets.png';
import PositiveWordCloud from '../images/Positive tweets.png';
import '../styles/Slick.scss';
import { Section } from './Section';
import * as styles from './Sentiment.module.scss';

interface ISentiment {
    data?: number[];
}

export class Sentiment extends React.Component<{}, ISentiment> {
    public constructor(props: any) {
        super(props);

        this.state = {};

        Axios.get('data/sentiment_all.txt').then((x: any) =>
            this.setState({
                data: x.data.split('\n').map((value: string) => Number(value)),
            }),
        );
    }

    public render() {
        return (
            <section id={Section.Sentiment}>
                <Markdown filename={'sentiment.md'} />

                {this.renderSlick()}

                {this.state.data ? (
                    <Histogram
                        data={this.state.data}
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
                        <img src={AllTokens} />
                    </div>
                    <div>
                        <img src={PositiveWordCloud} />
                    </div>
                    <div>
                        <img src={NegativeWordCloud} />
                    </div>
                </Slider>
            </div>
        );
    }
}
