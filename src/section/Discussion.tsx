import React from 'react';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';

export class Discussion extends React.Component {
    public render() {
        return (
            <section>
                <div id={Section.Discussion} />
                <div className={'sectionContainer'}>
                    <Markdown filename={'Discussion.md'} />
                </div>
            </section>
        );
    }
}
