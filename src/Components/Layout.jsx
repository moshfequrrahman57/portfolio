import React from 'react';

const Layout = (props) => {
    return (
        <div className='w-full bg-gradient-to-br from-green-200 from-10% via-sky-200 via-30% to-orange-100 to-90%'>
       <img src="/portfolio-svgrepo-com.svg" alt="logo" width={40} height={40} 
      className='absolute top-4 left-4 ' />
        <div className='absolute bottom-0 left-0 w-full md:w-fit md:h-full
       md:flex md:flex-col md:justify-center md:items-center'>
        <div className='bg-slate-400 md:bg-transparent flex items-center justify-around md:flex-col py-4 '>
        <img src="/linkedin-round-svgrepo-com.svg" alt="linkedin" width={40} height={40} className=' md:my-2 md:ml-4 md:p-0' />
      <img src="/facebook-svgrepo-com (1).svg" alt="facebook" width={40} height={40} className=' md:my-2 md:ml-4 md:p-0 ' />
      <img src="/gmail-svgrepo-com.svg" alt="gmail" width={40} height={40} className=' md:my-2 md:ml-4 md:p-0' />
      <img src="/instagram-rounded-svgrepo-com.svg" alt="insta" width={40} height={40} className=' md:my-2 md:ml-4 md:p-0' />
      <img src="/github-svgrepo-com.svg" alt="github" width={40} height={40} className=' md:my-2 md:ml-4 md:p-0' />
        </div>
        </div>
        {props.children}
        </div>
     
        
    );
};

export default Layout;