import Axios from 'axios';
import React from 'react';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';
import { Histogram } from '../components/Histogram';

interface ISentiment {
    data?: number[];
}

export class Sentiment extends React.Component<{}, ISentiment> {
    public constructor(props: any) {
        super(props);

        this.state = {};

        Axios.get('data/sentiment_all.txt').then((x) =>
            this.setState({
                data: x['data'].split('\n').map((x: string) => Number(x)),
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
