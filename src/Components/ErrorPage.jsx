import React from 'react';
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center '>
            <img src="https://i.ibb.co.com/Y7Mm9vZX/App-Error.png" alt="" />
            <h2 className='text-3xl text-center mt-20'>Oops, page not found!</h2>
            <p className='text-sm text-center mt-5 text-gray-500'>The page you are looking for is not available.</p>
            <Link className='p-10'>
                <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button>
            </Link>
        </div>
    );
};

export default ErrorPage;