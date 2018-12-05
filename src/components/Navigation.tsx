import * as React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Section } from '../section/Section';
import * as styles from './Navigation.module.scss';

export class Navigation extends React.PureComponent {
    public render() {
        return (
            <div>
                <nav className={styles.nav}>
                    <div className={styles.container}>
                        {Object.keys(Section).map((section: string) => (
                            <HashLink
                                key={section}
                                smooth={true}
                                to={`#${section}`}
                            >
                                {section}
                            </HashLink>
                        ))}
                    </div>
                </nav>
                <div className={styles.placeholder} />
            </div>
        );
    }
}
