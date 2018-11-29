import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import * as styles from './App.module.scss';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';

class App extends Component {
    public render() {
        return (
            <BrowserRouter basename='/'>
                <div className={styles.App}>
                    <Navigation />
                    <HashLink smooth={true} to='#end'>
                        to end
                    </HashLink>

                    <Section filename={'test.md'} />
                    <Section filename={'test.md'} />
                    <div id='end'>
                        <Section filename={'test.md'} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
