import { useRef } from "react";

const Layout = (props) => {
    const nav=useRef();
    // const transparent_div=useRef();

  
    return (
      
        <div  className="m-0 p-0 box-border">
        <header className=" shadow-lg m-3 w-[calc(100%-24px)] fixed top-0 left-0 rounded-lg border
        flex items-center justify-between bg-gradient-to-r from-slate-400 to-[#FBF9AC] z-30">
            <figure className="">
                <img src="/signature-solid-svgrepo-com.svg" alt="logo" width={50} className="w-14 h-14 p-1"/>
            </figure>
            <div className="flex md:w-1/2 items-center justify-around">
                <ul ref={nav} className="absolute md:relative top-[68px] md:top-0 right-0 
                md:m-0 w-[calc(100%-80px)] min-h-[calc(100vh-80px)] md:min-h-fit md:w-full md:h-fit
                rounded-t-lg shadow-sm md:rounded-none md:shadow-none 
                flex-col md:flex-row   md:items-center  bg-gradient-to-l from-[#FBF9AC] to-slate-300 
                justify-start md:bg-none 
               flex  clip-start md:[clip-path:none] 
               transition-all duration-[2000ms] md:duration-0 ease-in-out z-40">
              <div className="md:hidden w-full flex items-center justify-around">
                  <button  className="my-3 px-5 py-2 font-semibold text-lg inline-block rounded-lg bg-blue-400 hover:bg-cyan-200 
                hover:transition-colors text-white hover:text-black
                ring-2 ring-offset-2 ring-blue-400">Resume</button>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center">
              <li className="md:mx-3"> <a href="#" >Home</a></li>
                 <li className="md:mx-3"> <a href="#" >Skill</a></li>
                 <li className="md:mx-3"> <a href="#" >Services</a></li>
              </div>
              <div className="md:hidden"></div>
            </ul>
            <button className="rounded-full hover:bg-slate-100 md:hover:bg-transparent">
            <img src="/light-mode-svgrepo-com.svg" alt="dark" width={40} height={40} className="p-1 mx-1 md:mx-14"/></button>
            <button onClick={()=>{
                console.log("Button Clicked");
               nav.current.classList.toggle("clip-end-dup");
               document.body.classList.toggle("no-scroll");
            // nav.current.classList.toggle("opacity_full");

            }} className="relative rounded-full hover:bg-slate-100 md:hover:bg-transparent">
            <img  src="/menu-dots-svgrepo-com.svg" alt="dark" width={40} height={40} className="p-1 mx-1 md:mx-14 md:hidden"/></button>
       
            </div>
            </header>
        {props.children}
        </div>
     
        
    );
};

export default Layout;