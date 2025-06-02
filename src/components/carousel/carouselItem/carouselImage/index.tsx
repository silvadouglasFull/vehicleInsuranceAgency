import { styles } from '@components/carousel/carouselItem/carouselImage/styles';
import type { CarouselImageProps, ImageProps } from '@components/carousel/carouselItem/carouselImage/types';
import React from 'react';
import Image from 'react-bootstrap/Image';
export const CarouselImage: React.FC<CarouselImageProps & ImageProps> = ({
    src,
    ...props
}) => (
    <Image
        {...props}
        src={src}
        style={styles}
    />
);

