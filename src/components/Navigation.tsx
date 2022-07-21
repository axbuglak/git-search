import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center h-12 px-5 shadow-md bg-gray-600 text-white">
            <h2 className="text-xl">GitHub Search</h2>

            <span>
                <Link
                    to="/"
                    className='after:ease-linear after:duration-150 hover:after:scale-x-[100%] after:content-[""] mr-3 relative after:absolute after:bg-white after:bottom-[-3px] after:right-0 after:h-[1.5px] after:w-[100%] after:rounded-md after:scale-x-0'
                >
                    Home
                </Link>
                <Link
                    className='after:ease-linear after:duration-150 hover:after:scale-x-[100%] after:content-[""] relative after:absolute after:bg-white after:bottom-[-3px] after:right-0 after:h-[1.5px] after:w-[100%] after:rounded-md after:scale-x-0'
                    to="/favorites"
                >
                    Favorites
                </Link>
            </span>

        </nav>
    );
};

export default Navigation;
