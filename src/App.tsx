import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as styles from './App.module.scss';
import { Navigation } from './components/Navigation';
import { Centrality } from './section/Centrality';
import { Communities } from './section/Communities';
import { Data } from './section/Data';
import { Discussion } from './section/Discussion';
import { Introduction } from './section/Introduction';
import { LongestShortestPath } from './section/LongestShortestPath';
import { Network } from './section/Network';
import { Sentiment } from './section/Sentiment';

class App extends Component {
    public render() {
        return (
            <BrowserRouter basename='/'>
                <div className={styles.App}>
                    <Navigation />

                    <div className={styles.titleContainer}>
                        <img src={`${process.env.PUBLIC_URL}/images/graphrendering.gif`} className={styles.imageGif} />

                        <h1 className={styles.title}>Airport Network Analysis</h1>
                    </div>

                    <Introduction />
                    <Data />
                    <Network />
                    <Centrality />
                    <Communities />
                    <LongestShortestPath />
                    <Sentiment />
                    <Discussion />

                    <footer>
                        <a href='https://nbviewer.jupyter.org/github/OliverFlecke/02805-Social-Graphs-and-Interactions-Project/blob/master/ExplainerNotebook.ipynb'>
                            Find more details in the explainer notebook.
                        </a>

                        <a href='https://github.com/OliverFlecke/02805-Social-Graphs-and-Interactions-Project/blob/master/README.md'>
                            Get the data and play around yourself.
                        </a>
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
