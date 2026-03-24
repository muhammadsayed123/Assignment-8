import React from 'react';
import Banner from './Banner';
import useApps from '../Hook/useApps';
import AppCard from './AppCard';
import { Link } from 'react-router';

const Home = () => {
    const {apps}=useApps()
    // console.log(apps)
    const featuredApps = apps.slice(0, 8);

    return (
        <div className=''>
            <Banner></Banner>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Trending Apps</h1>
                <p className='mt-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mb-10'>
                {
                    featuredApps.map(app => (
                        <Link key={app.id} to={`/app/${app.id}`}>
                            <AppCard app={app}></AppCard>
                        </Link>
                    ))
                }
            </div>
             <div className='text-center pb-10'>
                <Link to='/apps' className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-5 py-2 rounded-md hover:bg-purple-500 transition'>Show All</Link>
            </div>
        </div>
    );
};

export default Home;