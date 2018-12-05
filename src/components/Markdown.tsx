import axios from 'axios';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import * as styles from './Markdown.module.scss';

export interface IMarkdownProps {
    filename: string;
}

export interface IMarkdownState {
    data?: string;
}

export class Markdown extends React.Component<IMarkdownProps, IMarkdownState> {
    public constructor(props: IMarkdownProps) {
        super(props);

        axios
            .get('text/' + this.props.filename)
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
