import React from 'react';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';

export class LongestShortestPath extends React.Component {
    public render() {
        return (
            <section>
                <div id={Section.Paths} />
                <div className={'sectionContainer'}>
                    <Markdown filename='LongestShortestPath.md' />
                    <img
                        src={`${process.env.PUBLIC_URL}/images/longest_shortest_path.png`}
                        style={{ boxShadow: 'none' }}
                    />
                    <Markdown filename='LongestShortestPath_text.md' />
                </div>
            </section>
        );
    }
}
