import * as React from 'react';
import * as styles from './Navigation.module.scss';
import { HashLink } from 'react-router-hash-link';

export class Navigation extends React.PureComponent {
    public render() {
        return (
            <nav className={styles.container}>
                <HashLink to='#Conclusion'>Conclusion</HashLink>
            </nav>
        );
    }
}
