import { CarouselImage } from '@components/carousel/carouselItem/carouselImage';
import type { Slide } from '@flavor/assets/types';
import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
export const CarouselItem: React.FC<Slide> = ({ midia, subtitle, textButton, title, captionStyle }) => {
    return (
        <>
            <CarouselImage className='w-100' src={midia} />
            <Carousel.Caption className='d-none d-md-block' style={captionStyle ? { ...captionStyle.desktop } : {}}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{subtitle}</Card.Text>
                <Button variant='success'>
                    {textButton}
                </Button>
            </Carousel.Caption>
            <Carousel.Caption className='d-block d-md-none' style={captionStyle ? { ...captionStyle?.mobile } : {}}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{subtitle}</Card.Text>
                <Button variant='success'>
                    {textButton}
                </Button>
            </Carousel.Caption>
        </>
    )
}