import React from 'react';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';

export class Conclusion extends React.Component {
    public render() {
        return (
            <section id={Section.Conclusion}>
                <Markdown filename={'Conclusion.md'} />
            </section>
        );
    }
}
