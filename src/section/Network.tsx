import React from 'react';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';
import './styles/Network.module.scss';

export class Network extends React.Component {
    public render() {
        return (
            <section id={Section.Network}>
                <Markdown filename={'Network.md'} />
            </section>
        );
    }
}
