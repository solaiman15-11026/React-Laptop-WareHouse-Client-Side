import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Reviews.css'

const Reviews = () => {
    return (
        < div className='my-5 container pb-4 bg-color' >
            <h1 className='mt-5 text-primary pt-5 mb-2 text-center text-uppercase '>Reviews</h1>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4' />
            <div className="card-group text-center">
                <div className="card m-3 border-0 shadow rounded">
                    <img style={{ width: "200px" }} className="card-img-top mx-auto rounded-circle mt-3" src="https://i.ibb.co/wr33zYt/francis-angelyn-logo2020.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title">Risa Leo</h3>
                        <p className='reviwe'>
                            This information is mostly requested in an employment biodata. Employers usually ask applicants to highlight relevant skills in a job application.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                        </small>
                    </div>
                </div>
                <div className="card m-3 border-0 shadow rounded">
                    <img style={{ width: "213px" }} className="card-img-top mx-auto rounded-circle mt-3" src="https://i.ibb.co/qg5j58J/istockphoto-1148380353-612x612.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title">David John</h3>
                        <p className='reviwe'>
                            This information is mostly requested in an employment biodata. Employers usually ask applicants to highlight relevant skills in a job application.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                        </small>
                    </div>
                </div>
                <div className="card m-3 border-0 shadow rounded">
                    <img style={{ width: "213px" }} className="card-img-top mx-auto rounded-circle mt-3" src="https://i.ibb.co/sKBdJg6/photo-1438761681033-6461ffad8d80.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title">Ema Jahan</h3>
                        <p className='reviwe'>
                            This information is mostly requested in an employment biodata. Employers usually ask applicants to highlight relevant skills in a job application.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-primary' icon={faStar}></FontAwesomeIcon>
                        </small>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Reviews;