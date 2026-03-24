import React, { useState } from 'react';
import useApps from '../Hook/useApps';
import AppCard from './AppCard';
import { Link } from 'react-router';

const Application = () => {
    const {apps}=useApps()
    const [search,setSearch]=useState('')
    const term=search.trim().toLocaleLowerCase()
    const forSearch=term?
    apps.filter(app=>app.title.toLocaleLowerCase().includes(term)):apps
    return (
        <div className=' min-h-screen pb-0'>
            <div className='text-center mb-5'>
                <h2 className='text-3xl font-bold pt-10'>Our All Applications</h2>
                <p className='mt-2 text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 px-4 md:px-8 lg:px-16">
                <h3 className="font-bold text-base md:text-lg">
                    <span>({forSearch.length})</span> Apps Found
                </h3>

                <div className="w-full md:w-auto">
                    <label className="input flex items-center gap-2 w-full md:w-80 bg-base-100 border border-gray-300 rounded-md px-3 py-2">
                        <svg
                            className="h-5 w-5 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search Apps"
                            required
                            className="w-full outline-none bg-transparent"
                        />
                    </label>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 pb-10'>
                {
                    forSearch.map(app => (
                        <Link key={app.id} to={`/app/${app.id}`}>
                            <AppCard app={app}></AppCard>
                        </Link>
                    ))
                }
            </div>
        </div>

    );
};

export default Application;