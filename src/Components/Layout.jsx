import { useRef } from "react";

const Layout = (props) => {
    const nav=useRef();
    // const transparent_div=useRef();
    
  
    return (
      
        <div  className="m-0 p-0 box-border">
        <header className=" shadow-lg m-3 w-[calc(100%-24px)] fixed top-0 left-0 rounded-lg border
        flex items-center justify-between bg-gradient-to-r from-slate-400 dark:from-slate-900 to-orange-100 z-30 dark:to-slate-400">
            <figure className="">
                <img src="/signature-solid-svgrepo-com.svg" alt="logo" width={50} className="w-14 h-14 p-1 dark:filter_color_semi_white"/>
            </figure>
            <div className="flex md:w-3/4 items-center justify-around">
                <ul ref={nav} className="absolute md:relative top-[68px] md:top-0 right-0 
                md:m-0 w-full h-[calc(100vh-80px)] md:w-full md:h-fit
                rounded-t-lg shadow-lg md:rounded-none md:shadow-none 
                flex-col md:flex-row   md:items-center  bg-gradient-to-r from-slate-400 dark:from-slate-900 to-orange-100 dark:to-slate-400 
                justify-between md:bg-none overflow-auto md:overflow-hidden
               flex  clip-start md:[clip-path:none] 
               transition-all duration-[1000ms] md:duration-0 ease-in-out z-40">
              <div className="md:hidden h-fit">
                <img src="/moshfequr.jpg" alt="moshfequr" className="w-full h-24  rounded-t-lg object-cover  " />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center m-4 pb-3 md:pb-0 md:m-0 border-b-2 border-slate-500 md:border-none">
                   <a href="#" className="nav_item" >
                    <img src="/home-svgrepo-com.svg" alt="home" className="ul_svg" />
                    <span className="ml-2 md:px-1 dark:text-white">Home</span>
                   </a>
                   <a href="#" className="nav_item" >
                    <img src="/skill.svg" alt="skill" className="ul_svg" />
                    <span className="ml-2 md:px-1 dark:text-white">Skill</span>
                   </a>
                   <a href="#" className="nav_item" >
                    <img src="/services.svg" alt="services" className="ul_svg" />
                    <span className="ml-2 md:px-1 dark:text-white">Services</span>
                   </a>
                   <a href="#" className="nav_item" >
                    <img src="/project-21.svg" alt="projects" className="ul_svg" />
                    <span className="ml-2 md:px-1 dark:text-white">Projects</span>
                   </a>
                   <a href="#" className="nav_item" >
                    <img src="/about-successful-man-svgrepo-com.svg" alt="about" className="ul_svg" />
                    <span className="ml-2 md:px-1 dark:text-white">About Me</span>
                   </a>
                   <a href="#" className="nav_item" >
                    <img src="/contact-svgrepo-com.svg" alt="contact" className="ul_svg" />
                    <span className="ml-2 md:px-1 dark:text-white">Contact</span>
                   </a>  
                
              </div>
              <div className="md:hidden w-[calc[100%-32px]] flex items-center justify-start ml-4 ">
                  <button  className="my-1 px-5 py-1 font-semibold text-base inline-block rounded-lg bg-blue-400 hover:bg-cyan-200 
                hover:transition-colors text-white hover:text-black
                ring-2 ring-offset-2 ring-blue-400"><a href="#">Resume</a></button>
              </div>
              
              <a href="#" className="md:hidden font-bold text-orange-800 dark:text-white text-wrap font-mono mx-4 w-[calc(100%-32px)] 
               hover:text-blue-600 dark:hover:text-red-100 flex items-center justify-start mt-3">
                <img src="/gmail-svgrepo-com.svg" alt="gmail" className="w-5 h-5 mr-2 dark:filter_color_blue" />
                <span>moshfequrrahman57@gmail.com</span>
                </a>
                <a href="#" className="md:hidden font-bold text-gray-600 dark:text-slate-300 text-wrap font-mono mx-4 w-[calc(100%-32px)] 
                 hover:text-gray-700 dark:hover:text-red-100 flex items-center justify-start mt-3">
                <img src="/contact-svgrepo-com.svg" alt="gmail" className="w-5 h-5 mr-2 dark:filter_color_blue" />
                <span>+88-01744975767</span>
                </a>
              <div className="md:hidden mx-4 flex items-center justify-start mb-3 mt-3">
              <a href="#"> <img src="/github-svgrepo-com.svg" alt="github" className="important_link_design" /></a>
              <a href="#"> <img src="/facebook-svgrepo-com (1).svg" alt="facebook" className="important_link_design" /></a>
              <a href="#"> <img src="/linkedin-round-svgrepo-com.svg" alt="linkedIn" className="important_link_design" /></a>
              <a href="#"> <img src="/instagram-rounded-svgrepo-com.svg" alt="insta" className="important_link_design" /></a>
              </div>
              
            </ul>
            <button className="rounded-full hover:bg-slate-100 dark:hover:bg-emerald-200  mx-1 md:mx-14">
            <img src="/light-mode-svgrepo-com.svg" alt="dark" width={40} height={40} className="p-1"/></button>
            <button onClick={()=>{
                console.log("Button Clicked");
               nav.current.classList.toggle("clip-end-dup");
            }} className="relative rounded-full  hover:bg-slate-100 dark:hover:bg-emerald-200 md:hover:bg-transparent mx-1 md:hidden">
            <img  src="/menu-dots-svgrepo-com.svg" alt="dark" width={40} height={40} className="p-1  md:mx-14 "/></button>
       
            </div>
            </header>
        {props.children}
        </div>
     
        
    );
};

export default Layout;