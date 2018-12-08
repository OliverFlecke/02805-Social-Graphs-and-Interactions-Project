import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as styles from './App.module.scss';
import { Navigation } from './components/Navigation';
import AirportGraph from './images/airportgraph.png';
import { Centrality } from './section/Centrality';
import { Communities } from './section/Communities';
import { Conclusion } from './section/Conclusion';
import { Data } from './section/Data';
import { Introduction } from './section/Introduction';
import { Network } from './section/Network';
import { Sentiment } from './section/Sentiment';

class App extends Component {
    public render() {
        return (
            <BrowserRouter basename='/'>
                <div className={styles.App}>
                    <Navigation />

                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>
                            The global airport network
                        </h1>

                        <img src={AirportGraph} />
                    </div>

                    <Introduction />
                    <Data />
                    <Network />
                    <Centrality />
                    <Communities />
                    <Sentiment />
                    <Conclusion />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
