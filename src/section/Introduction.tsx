import React from 'react';
import YouTube from 'react-youtube';
import { Markdown } from '../components/Markdown';
import { Section } from './Section';
import * as styles from './styles/Introduction.module.scss';

export class Introduction extends React.Component {
    public render() {
        return (
            <section id={Section.Introduction}>
                <Markdown filename={'Introduction.md'} />
                <div className={styles.videoContainer}>
                    <YouTube
                        videoId='pDUjlGqFPuQ'
                        className={styles.video}
                        opts={{
                            playerVars: {
                                iv_load_policy: 3,
                            },
                        }}
                    />
                </div>
            </section>
        );
    }
}
