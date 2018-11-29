import axios from 'axios';
import * as React from 'react';

const ReactMarkdown = require('react-markdown');

export interface ISectionProps {
    filename: string;
}

export interface ISectionState {
    data?: string;
}

export class Section extends React.Component<ISectionProps, ISectionState> {
    public constructor(props: ISectionProps) {
        super(props);

        axios
            .get(this.props.filename)
            .then(x => this.setState({ data: x.data }));

        this.state = {};
    }

    public render() {
        if (!this.state.data) {
            return null;
        }

        return <ReactMarkdown source={this.state.data} />;
    }
}
