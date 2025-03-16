import { useRef } from "react";

const Layout = (props) => {
    const nav=useRef();
     const transparent_div=useRef();

  
    return (
      
        <div  className="m-0 p-0 box-border">
        <header className=" shadow w-full fixed top-0 lef flex items-center justify-between bg-green-500 z-30">
            <figure className="">
                <img src="/signature-solid-svgrepo-com.svg" alt="logo" width={50} className="w-14 h-14 p-1"/>
            </figure>
            <div className="flex items-center justify-end ">
                <ul ref={nav} className="absolute md:relative top-14 md:top-0 left-0 m-10 md:m-0 w-[calc(100%-80px)] h-[calc(100vh-56px-80px)] md:w-full md:h-fit
                rounded-xl shadow-lg md:rounded-none md:shadow-none 
                flex-col md:flex-row   items-center  bg-yellow-200 justify-around md:justify-end 
               flex  clip-start md:[clip-path:none] opacity-0 md:opacity-100 
               transition-all duration-[2000ms] ease-in-out z-40">
               <li> <a href="#" >Home</a></li>
                 <li> <a href="#" >Skill</a></li>
                 <li> <a href="#" >Services</a></li>
            </ul>
            <button className="">
            <img src="/light-mode-svgrepo-com.svg" alt="dark" width={40} height={40} className="p-1"/></button>
            <button onClick={()=>{
                console.log("Button Clicked");
               nav.current.classList.toggle("clip-end-dup");
               document.body.classList.toggle("no-scroll");
               nav.current.classList.toggle("opacity_full");


               transparent_div.current.classList.toggle("active_dropdown");
               let value=document.body.scrollHeight;
               console.log("Value: ",value);
               let value_string=value.toString();
               value_string=value_string.concat("px");
              transparent_div.current.style.height=value_string;
             
              
            }} className="relative">
            <img  src="/menu-dots-svgrepo-com.svg" alt="dark" width={40} height={40} className="p-1 md:hidden"/></button>
       
            </div>
            </header>
            <div ref={transparent_div} className="absolute hidden top-0 left-0 w-full h-16  bg-emerald-300 z-10">abcdefgh</div>
        {props.children}
        </div>
     
        
    );
};

export default Layout;