
import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='mb-5'>
                    <h4 className='text-uppercase '>Brand New Labtop</h4>
                    <p style={{ fontSize: '18px' }}>Buy it Quickly and booking first</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='mb-5'>
                    <h4 className='text-uppercase '>Compotable labtop with good features</h4>
                    <p style={{ fontSize: '18px' }}>Best features labtop and good price</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='mb-5'>
                    <h4 className='text-uppercase'>Low budget laptop</h4>
                    <p style={{ fontSize: '18px' }}>
                        Low budget but good features
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;