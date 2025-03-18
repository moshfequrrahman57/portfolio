import React from 'react';

const Profile = () => {
    return (
        <div className='mt-24 mx-3  w-[calc(100%-24px]'>
            <div className='flex items-center'>
                <img src="/hand-with-fingers-splayed-svgrepo-com.svg" alt="Hi" className='w-6 md:w-7 h-6 md:h-7 mr-1 float-left' />
                <span className='text-2xl font-semibold'> My name is</span>
            </div>
            <p className='text-4xl md:text-6xl font-extrabold mt-3'>Md. Moshfequr Rahman.</p>
            <p className='text-3xl md:text-5xl font-bold mt-2'>Frontend develper</p>
            <div>
            <p className='text-2xl md:text-2xl font-bold mt-2'>Expert in React - Tailwindcss</p>
             
            </div>
        </div>
    );
};

export default Profile;