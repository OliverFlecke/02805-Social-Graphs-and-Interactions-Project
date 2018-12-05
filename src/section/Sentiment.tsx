import Axios from 'axios';
import React from 'react';
import { Histogram } from '../components/Histogram';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';

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
                {this.state.data ? (
                    <Histogram
                        data={this.state.data}
                        title='Sentiment distribution'
                    />
                ) : null}
            </section>
        );
    }
}
