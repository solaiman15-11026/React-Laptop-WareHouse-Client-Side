import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container '>
            <h1 className=' mt-4 text-uppercase text-danger text-center'>Blogs</h1>

            <div>
                <div className='p-4 mt-4 shadow rounded-3'>
                    <h3 className='py-2  text-center text-primary'>Different Between Javascript VS Nodejs?</h3>
                    <p className='pb-2 text-center rr'>NodeJS is a cross-platform, open-source Javascript runtime environment that enables server-side javascript execution. Javascript code can now execute outside of the browser thanks to Nodejs. Nodejs has a large number of modules and is primarily used in web development.<br />
                        A scripting language is Javascript. JS is the most common abbreviation. Javascript might be considered an updated version of the ECMA script. Javascript is a high-level programming language that is built on prototype inheritance and employs the Oops notion.
                    </p>
                </div>
                <div className='p-4 mt-4 shadow rounded-3'>
                    <h3 className='py-2 text-center text-primary'>  When should you use mongodb and when should you use nodejs?</h3>
                    <p className='pb-2 text-center rr'>Node.js is an open-source and cross-platform runtime environment built on Chrome's V8 JavaScript engine for executing JavaScript code outside of a browser. You need to recollect that NodeJS isn't a framework, and it's not a programing language. It provides an event-driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript. <br />
                        MongoDB can be used in places that require simple queries, easy and fast integration of data and have data whose structure changes constantly with time.
                    </p>
                </div>
                <div className=' p-4 mt-4 shadow rounded-3'>
                    <h3 className=' py-3  text-center text-primary' >Different Between  Sql VS Nosql? </h3>
                    <p className='pb-3 text-center rr'>SQL refers to relational databases, whereas NoSQL refers to non-relational databases. SQL databases use structured query language and have a defined schema. NoSQL databases use dynamic schemas for unstructured data. NoSQL databases scale horizontally, whereas SQL databases scale vertically. SQL databases are table-based, whereas NoSQL databases are document, key-value, graph, or wide-column stores. Multi-row transactions are a strength of SQL databases,
                        whereas unstructured data like documents and JSON is a strength of NoSQL databases.
                    </p>
                </div>
                <div className='p-4 mt-4 shadow rounded-3'>
                    <h3 className='py-2  text-center text-primary'> What is the purpose of jwt and how does it work?</h3>
                    <p className='pb-2 text-center rr'>JWT (JSON Web Token) is an open standard that allows two parties — a client and a server — to share security information. JSON items, containing a set of claims, are encoded in each JWT. JWTs use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued. <br />
                        Authentication is the primary use of JWT. When a user logs in to an application, the app generates a JWT and sends it to the user. The JWT will be included in the user's subsequent requests. The token informs the server about the routes, services, and resources that the user is permitted to use.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;