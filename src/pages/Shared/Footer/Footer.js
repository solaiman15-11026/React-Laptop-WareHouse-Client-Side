import React, { useEffect, useState } from 'react';
import { } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import facebook from '../../../images/facebook.png'
import whatsapp from '../../../images/whatsapp.png'
import instagram from '../../../images/instgram.jpg'
import linkdin from '../../../images/linkdin.png'
import github from '../../../images/github.png'
import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'
import './Footer.css'

const Footer = () => {
    const [date, setDate] = useState();
    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])
    return (
        <div>
            <footer className="text-center text-lg-start pt-3 bg-dark text-muted">
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4 text-white">
                                    INFORMATION
                                </h6>
                                <p className='text-white'>
                                    Plans & pricing
                                </p>
                                <p className='text-white'>
                                    About us
                                </p>
                                <p className='text-white'>
                                    Jobs
                                </p>
                                <p className='text-white'>
                                    Sell your content

                                </p>

                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase text-white fw-bold mb-3">
                                    Products
                                </h6>
                                <p>
                                    <Link to='/blogs' className=" text-white text-decoration-none hover-link">Blogs</Link>
                                </p>
                                <p>
                                    <Link to='/inventory' className=" text-white text-decoration-none hover-link">Manage Inventory</Link>
                                </p>
                                <p>
                                    <Link to='/login' className=" text-white text-decoration-none hover-link">Login</Link>
                                </p>
                                <p>
                                    <Link to='/TermsCondition' className=" text-white text-decoration-none hover-link">Terms & Condition</Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4 text-white">
                                    Contact US
                                </h6>
                                <p className='text-white'> <LocationMarkerIcon style={{ width: '16px', height: '16px' }} className='me-2'></LocationMarkerIcon>
                                    150/4-Tejgau,Farmgate, Dhaka</p>
                                <p className='text-white'>
                                    <MailIcon style={{ width: '16px', height: '16px' }} className='me-2'></MailIcon>
                                    Solaimansheik49@gmail.com
                                </p>
                                <p className='text-white'>
                                    <PhoneIcon style={{ width: '16px', height: '16px' }} className='me-2'></PhoneIcon>
                                    +880-1732801336</p>
                                <p className='text-white'>
                                    <PhoneIcon style={{ width: '16px', height: '16px' }} className='me-2'></PhoneIcon>
                                    +880-1305272861</p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase text-white fw-bold mb-3">
                                    SOCIAL MEDIA
                                </h6>
                                <div className='d-inline-flex '>
                                    <Link to='/facebook'><img src={facebook} className='me-3' style={{ width: '26px', height: '26px' }} alt="" srcset="" /></Link>
                                    <Link to='/whatsapp'><img src={whatsapp} className='me-3' style={{ width: '26px', height: '26px' }} alt="" srcset="" /></Link>
                                    <Link to='/instagram'><img src={instagram} className='me-3' style={{ width: '26px', height: '26px' }} alt="" srcset="" /></Link>
                                    <Link to='/linkdin'><img src={linkdin} className='me-3' style={{ width: '26px', height: '26px' }} alt="" srcset="" /></Link>
                                    <Link to='/github'><img src={github} className='me-3' style={{ width: '26px', height: '26px' }} alt="" srcset="" /></Link>


                                </div>
                            </div>

                        </div>


                    </div>
                </section>

                <div className="text-center text-white p-3">
                    Copyright  &copy; Labtop WareHouse - {date}  All rights reserved.
                </div>

            </footer>

        </div>
    );
};

export default Footer;