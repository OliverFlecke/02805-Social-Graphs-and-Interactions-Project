import axios from 'axios';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import * as styles from './Section.module.scss';

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
            .get('section/' + this.props.filename)
            .then((x) => this.setState({ data: x.data }));

        this.state = {};
    }

    public render() {
        if (!this.state.data) {
            return null;
        }

        return (
            <div className={styles.container}>
                <ReactMarkdown source={this.state.data} />
            </div>
        );
    }
}
