import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Reviews.css'

const Reviews = () => {
    return (
        < div className='my-5 container pb-4 bg-color' >
            <h1 className='mt-5 text-white pt-5 mb-2 text-center text-uppercase '>What our Customer Saying</h1>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4' />
            <div className="card-group text-center">
                <div className="card m-3 border-0 shadow rounded">
                    <img style={{ width: "150px" }} className="card-img-top mx-auto rounded-circle mt-3" src="https://i.ibb.co/1KCJQ9R/arif.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title">Md Arif Hossain</h3>
                        <FontAwesomeIcon className='fs-2 text-secondary me-3' icon={faQuoteLeft}></FontAwesomeIcon>
                        <span className="card-text">Buying experience is awesome and Dealer also helped us to find the correct model as per requirement. The riding experience is just freaking fantastic and ride quality is awesome as well.</span>
                        <FontAwesomeIcon className='fs-2 text-secondary ms-3' icon={faQuoteRight}></FontAwesomeIcon>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                        </small>
                    </div>
                </div>
                <div className="card m-3 border-0 shadow rounded">
                    <img style={{ width: "150px" }} className="card-img-top mx-auto rounded-circle mt-3" src="https://i.ibb.co/LhQC3rY/jilani.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title">Ahmed Akash</h3>
                        <FontAwesomeIcon className='fs-2 text-secondary me-3' icon={faQuoteLeft}></FontAwesomeIcon>
                        <span className="card-text">I driven this car and feels awesome and comfortable drive, Mileage is superb, really value for money. Even in long drive can't feel tired of sitting and driving. Love to buy this car as my new upcoming car.</span>
                        <FontAwesomeIcon className='fs-2 text-secondary ms-3' icon={faQuoteRight}></FontAwesomeIcon>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                        </small>
                    </div>
                </div>
                <div className="card m-3 border-0 shadow rounded">
                    <img style={{ width: "150px" }} className="card-img-top mx-auto rounded-circle mt-3" src="https://i.ibb.co/fCJKKMq/prince.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title">Hamidul Islam</h3>

                        <FontAwesomeIcon className='fs-2 text-secondary me-3' icon={faQuoteLeft}></FontAwesomeIcon>
                        <span className="card-text"> have drive my friend's car and believe me the experience was fantastic. Silent Car though powerful. Interiors are just so rich and decent. Exterior is just awesome. Definitely a tough competition to Honda City.</span>
                        <FontAwesomeIcon className='fs-2 text-secondary ms-3' icon={faQuoteRight}></FontAwesomeIcon>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                        </small>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Reviews;