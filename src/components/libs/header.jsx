import React from 'react';

const Header = ({ title, user }) => {
    return (

        <div className="flex justify-between bg-white shadow ">
            {/* label */}
            <div className='flex items-center ml-[11.5em]'>
                <h1 className="text-base text-black">{title}</h1>
            </div>

            {/* profile details */}
            <div className="flex items-center space-x-4">
                <div>
                    <h2 className="text-xl">{user.name}</h2>
                    <p className="text-gray-500">{user.email}</p>
                </div>
            </div>
        </div>

    );
};

export default Header;
