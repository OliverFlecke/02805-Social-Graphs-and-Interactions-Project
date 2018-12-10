import React from 'react';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';

interface DataState {
    expanded: boolean;
}

export class Data extends React.Component<{}, DataState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            expanded: false,
        };
    }

    public render() {
        return (
            <section id={Section.Data}>
                <Markdown filename={'Data.md'} />
                <p>
                    <button onClick={this.onClickExpand}>{this.state.expanded ? 'Hide ' : 'Show '}</button> the full,
                    more technical, description of the airport and routes data set.
                </p>
                {this.state.expanded ? (
                    <div>
                        <Markdown filename={'Airports.md'} />
                        <Markdown filename={'Routes.md'} />
                    </div>
                ) : null}
            </section>
        );
    }

    private onClickExpand = () => {
        this.setState({ expanded: !this.state.expanded });
    };
}
