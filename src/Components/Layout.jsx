import React, { useRef } from 'react';

const Layout = (props) => {
  let dropdown_div=useRef();
  let linked_div=useRef();
  let parent_div=useRef();
    return (
        <div ref={parent_div} className='box-border m-0 p-0 bg-gradient-to-br from-green-200 from-10% via-sky-200 via-30% to-orange-100 to-90%'>
       <img src="/portfolio-svgrepo-com.svg" alt="logo" width={40} height={40} 
      className='fixed top-4 left-4 ' />

      <button onClick={()=>{
        linked_div.current.classList.toggle("active_linked");
        dropdown_div.current.classList.toggle("active_dropdown");
         }}
          className='md:hidden fixed top-4 right-4'>
          <img src="/button-circle-round-arrow-down-svgrepo-com.svg" alt="dropdown" width={40} height={40} className='p-1' />
        </button>

      
  {/* linked div start */}
  <div className='fixed top-20 right-4 h-full flex flex-col items-center justify-start 
       md:top-4 md:left-4 md:items-start '>

          <div ref={linked_div} className='border md:border-none flex-col md:flex-col  md:flex md:h-full  md:justify-center'>
         <img src="/experience.svg" alt="Experience" width={40} height={40} className='my-2'/>
          <img src="/contact-svgrepo-com.svg" alt="Contact" width={40} height={40} className='my-2'/>
          <img src="/resume-portfolio-svgrepo-com.svg" alt="Resume" width={40} height={40} className='my-2'/>
          
          </div>
        </div>
  {/* linked div end */}
       
        <div className='fixed top-20 md:top-4 right-4 h-full flex flex-col items-center justify-start 
        md:h-fit md:flex-row md:w-full md:justify-end
       '>
          <div ref={dropdown_div} className='hidden border flex-col md:flex-row  md:flex md:basis-3/4  md:justify-around'>
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