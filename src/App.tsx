import React, { Component } from 'react';
import * as styles from './App.module.scss';
import { Section } from './Section';

class App extends Component {
    public render() {
        return (
            <div className={styles.App}>
                <Section filename={'test.md'} />
            </div>
        );
    }
}

export default App;
