import React from 'react';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';

export class Communities extends React.Component {
    public render() {
        return (
            <section id={Section.Communities}>
                <Markdown filename={'Communities.md'} />
            </section>
        );
    }
}
