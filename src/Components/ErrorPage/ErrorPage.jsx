import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center items-center'>
            <h2>Oops!!</h2>
            <Link to='/'><button className='bg-slate-800'>Go back to home</button></Link>
        </div>
    );
};

export default ErrorPage;