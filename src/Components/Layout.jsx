import React from 'react';

const Layout = (props) => {
    return (
        <div className='w-full bg-gradient-to-br from-green-200 from-10% via-sky-200 via-30% to-orange-100 to-90%'>
       <img src="/portfolio-svgrepo-com.svg" alt="logo" width={40} height={40} 
      className='fixed top-4 left-4 ' />
        <div className='fixed bottom-0 left-0 w-full md:w-fit md:h-full
       md:flex md:flex-col md:justify-center md:items-center'>
        <div className='bg-slate-400 md:bg-transparent flex items-center justify-around md:flex-col py-4 '>
        <img src="/linkedin-round-svgrepo-com.svg" alt="linkedin" width={40} height={40} className=' md:my-2 md:ml-4 md:p-0' />
      <img src="/facebook-svgrepo-com (1).svg" alt="facebook" width={40} height={40} className=' md:my-2 md:ml-4 md:p-0 ' />
      <img src="/gmail-svgrepo-com.svg" alt="gmail" width={40} height={40} className=' md:my-2 md:ml-4 md:p-0' />
      <img src="/instagram-rounded-svgrepo-com.svg" alt="insta" width={40} height={40} className=' md:my-2 md:ml-4 md:p-0' />
      <img src="/github-svgrepo-com.svg" alt="github" width={40} height={40} className=' md:my-2 md:ml-4 md:p-0' />
        </div>
        </div>
        <div className='fixed top-4 right-4 h-full flex flex-col items-center justify-start 
        md:h-fit md:flex-row md:w-full md:justify-end
       '>
          <div className=' md:flex md:basis-3/4 bg-yellow-200  md:justify-around'>
          <img src="home-svgrepo-com.svg" alt="Home" width={40} height={40} className='my-2'/>
          <img src="/about-successful-man-svgrepo-com.svg" alt="about" width={40} height={40} className='my-2'/>
          <img src="/education-svgrepo-com.svg" alt="edu" width={40} height={40} className='my-2'/>
          <img src="/skill.svg" alt="skill" width={40} height={40} className='my-2'/>
          <img src="/project-21.svg" alt="projects" width={40} height={40} className='my-2'/>
          <img src="/experience.svg" alt="Experience" width={40} height={40} className='my-2'/>
          <img src="/contact-svgrepo-com.svg" alt="Contact" width={40} height={40} className='my-2'/>
          <img src="/resume-portfolio-svgrepo-com.svg" alt="Resume" width={40} height={40} className='my-2'/>
          
          </div>
        </div>
        {props.children}
        </div>
     
        
    );
};

export default Layout;