import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css'
import { faLock, faArrowRotateLeft, faHeadset, faShippingFast } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        < div className='mb-5' >
            <h2 className='mt-3 mb-2 text-center text-uppercase text-primary'> Services</h2>
            <hr style={{ width: '40%', margin: '0  auto', color: 'green' }} className='mb-4' />
            <div class="container mt-3">
                <div class="row mt-4 my-5">
                    <div class=" mt-4 col-12 col-md-3 mx-auto">
                        <span className='icons'> <FontAwesomeIcon icon={faShippingFast}></FontAwesomeIcon> </span>
                        <div className='top'>

                            <h4>free shipping</h4>
                            <p>order over $100</p>
                        </div>
                    </div>
                    <div class=" mt-4 col-12 col-md-3 mx-auto">
                        <span className='icons'> <FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon></span>
                        <div className='top'>
                            <h4>24/7 support</h4>
                            <p>call us anytime</p>
                        </div>

                    </div>
                    <div class=" mt-4 col-12 col-md-3 mx-auto">
                        <span className='icons'><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></span>
                        <div className='top'>
                            <h4>secure payment</h4>
                            <p>100 secure payment</p>
                        </div>
                    </div>
                    <div class=" mt-4 col-12 col-md-3 mx-auto">
                        <span className='icons'><FontAwesomeIcon icon={faArrowRotateLeft}></FontAwesomeIcon></span>

                        <div className='top'>
                            <h4>easy returns</h4>
                            <p>10 days returns </p>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Services;