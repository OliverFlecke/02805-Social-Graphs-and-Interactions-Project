import React from 'react';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';

export class Centrality extends React.Component {
    public render() {
        return (
            <section id={Section.Centrality}>
                <Markdown filename={'Centrality.md'} />
            </section>
        );
    }
}
