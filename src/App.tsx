import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as styles from './App.module.scss';
import { Markdown } from './components/Markdown';
import { Navigation } from './components/Navigation';
import { Section } from './section/Section';
import { Sentiment } from './section/Sentiment';

class App extends Component {
    public render() {
        return (
            <BrowserRouter basename='/'>
                <div className={styles.App}>
                    <Navigation />

                    <section id={Section.Introduction}>
                        <Markdown filename={'Introduction.md'} />
                    </section>
                    <section id={Section.Data}>
                        <Markdown filename={'Data.md'} />
                    </section>
                    <section id={Section.Network}>
                        <Markdown filename={'Network.md'} />
                    </section>
                    <section id={Section.Centrality}>
                        <Markdown filename={'Centrality.md'} />
                    </section>
                    <section id={Section.Communities}>
                        <Markdown filename={'Communities.md'} />
                    </section>

                    <Sentiment />

                    <section id={Section.Conclusion}>
                        <Markdown filename={'Conclusion.md'} />
                    </section>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
