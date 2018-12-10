import React from 'react';
import Slider from 'react-slick';
import { Image } from '../shared/Image';
import '../styles/Slick.scss';
import * as styles from './ImageSlider.module.scss';

interface ImageSliderProps {
    images: Image[];
}

export class ImageSlider extends React.Component<ImageSliderProps> {
    constructor(props: ImageSliderProps) {
        super(props);
    }

    public render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div className={styles.sliderContainer}>
                <Slider {...settings}>
                    {this.props.images.map((image: Image) => (
                        <div key={image.image} className={styles.itemContainer}>
                            <h2 className={styles.title}>{image.title}</h2>
                            <img src={`${process.env.PUBLIC_URL}/images/${image.image}`} />
                            {image.text}
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
