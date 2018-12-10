import React from 'react';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';

export class LongestShortestPath extends React.Component {
    public render() {
        return (
            <section id={Section.Paths}>
                <Markdown filename='LongestShortestPath.md' />
                <img src={`${process.env.PUBLIC_URL}/images/longest_shortest_path.png`} style={{ boxShadow: 'none' }} />
                <Markdown filename='LongestShortestPath_text.md' />
            </section>
        );
    }
}
