import React from 'react';

const Profile = () => {
    return (
        <div className='mx-5  w-[calc(100%-40px] h-screen flex flex-col items-start md:items-center justify-start mt-24 md:mt-0  md:justify-center'>
            <div className='hidden gap-8 items-center'>
                <img src="/hand-with-fingers-splayed-svgrepo-com.svg" alt="Hi" className='w-6 md:w-7 h-6 md:h-7 mr-1 float-left' />
                <span className='text-2xl font-semibold'> My name is</span>
                
            </div>
            <p className='tracking-wider text-4xl md:text-6xl font-extrabold webkit-text-outline dark:webkit-text-outline-dark'>Md. Moshfequr Rahman.</p>
            <p className='text-3xl md:text-5xl font-bold mt-2'>Frontend develper</p>
            
            <div className='text-2xl md:text-2xl font-bold mt-2'>
                <p>Expert in <img src="/react-svgrepo-com.svg" alt="react" className='w-8 h-8 inline-block' /> React  <span> & </span>
                 <img src="/tailwind-svgrepo-com.svg" alt="react" className='w-8 h-8 inline-block' /> Tailwindcss </p>
            </div>
            <div className="flex items-center justify-start mt-5">
              <a href="#"> <img src="/github-svgrepo-com.svg" alt="github" className="important_link_in_profile" /></a>
              <a href="#"> <img src="/facebook-svgrepo-com (1).svg" alt="facebook" className="important_link_in_profile" /></a>
              <a href="#"> <img src="/linkedin-round-svgrepo-com.svg" alt="linkedIn" className="important_link_in_profile" /></a>
              <a href="#"> <img src="/instagram-rounded-svgrepo-com.svg" alt="insta" className="important_link_in_profile" /></a>
              </div>
              <div className='flex gap-10 mt-5 md:mt-8'>
              <div className="flex items-center justify-start">
                  <button  className="my-1 px-5 py-2 font-semibold text-base inline-block rounded-lg bg-blue-400 hover:bg-cyan-200 
                hover:transition-colors text-white hover:text-black
                ring-2 ring-offset-2 ring-blue-400"><a href="#">Resume</a></button>
              </div>
              <div className="flex items-center justify-start ">
                  <button  className="my-1 px-5 py-2 font-semibold text-base inline-block rounded-lg bg-blue-400 hover:bg-cyan-200 
                hover:transition-colors text-white hover:text-black
                ring-2 ring-offset-2 ring-blue-400"><a href="#">My projects</a></button>
              </div>
              </div>
             
            
        </div>
    );
};

export default Profile;