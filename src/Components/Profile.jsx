import React, { useEffect, useRef, useState } from 'react';

const Profile = ({ sendDataToParent }) => {
const main_div=useRef();
const [clicked,isClicked]=useState(false);
const moveToProject=()=>{
  console.log(`Button clicked`);
  isClicked(true);
  sendDataToParent(clicked);
}
const scrollChange=(event)=>{
   console.log("Profile Scrolling");
}


useEffect(()=>{
  (
    ()=>{
      const name=document.querySelectorAll("#main > p");
    //  console.log(name);
console.log("Ok");
//console.dir(texts);
 const observer=new IntersectionObserver((items)=>{
  items.forEach((item)=>{
    if(item.isIntersecting){
      console.dir("add");
     item.target.classList.add('anim');
    }
    else{
      console.log(`remove`);
      item.target.classList.remove('anim');
    }
  })
 },
{threshold:0.1});
name.forEach(name=> observer.observe(name));
// observer.observe(name);


 
    }
  )()
},[])
    return (
        <div id='main' ref={main_div} onScroll={scrollChange}   className='overflow-y-auto scroll-smooth mx-5 my-32 py-16 w-[calc(100%-40px] h-fit flex flex-col items-start md:items-center justify-start  md:justify-start'>
           
            <p id='name' className=' text-4xl md:text-6xl font-extrabold animation_before mx-2'>Md. Moshfequr Rahman.</p>
            <p className='text-3xl md:text-5xl font-bold mt-2 animation_before delay-500 mx-2 '>Frontend developer</p>
            
            <div className='text-2xl md:text-2xl font-bold mt-2 '>
                <p className='animation_before delay-1000 mx-2'>Expert in <img src="/react-svgrepo-com.svg" alt="react" className='w-8 h-8 inline-block' /> React  <span> & </span>
                 <img src="/tailwind-svgrepo-com.svg" alt="react" className='w-8 h-8 inline-block' /> Tailwindcss </p>
            </div>
            <div className="flex items-center justify-start mt-5 mx-2 ">
              <a href="#"> <img src="/github-svgrepo-com.svg" alt="github" className="important_link_in_profile" /></a>
              <a href="#"> <img src="/facebook-svgrepo-com (1).svg" alt="facebook" className="important_link_in_profile" /></a>
              <a href="#"> <img src="/linkedin-round-svgrepo-com.svg" alt="linkedIn" className="important_link_in_profile" /></a>
              <a href="#"> <img src="/instagram-rounded-svgrepo-com.svg" alt="insta" className="important_link_in_profile" /></a>
              </div>
              <div className='flex gap-10 mt-5 md:mt-8 '>
              <div className="flex items-center justify-start mx-2">
                  <button  className="my-1 px-5 py-2 font-semibold text-base inline-block rounded-lg bg-blue-400 hover:bg-cyan-200 
                hover:transition-colors text-white hover:text-black
                ring-2 ring-offset-2 ring-blue-400"><a href="#">Resume</a></button>
              </div>
              <div className="flex items-center justify-start ">
                  <button onClick={moveToProject} className="my-1 px-5 py-2 font-semibold text-base inline-block rounded-lg bg-blue-400 hover:bg-cyan-200 
                hover:transition-colors text-white hover:text-black
                ring-2 ring-offset-2 ring-blue-400"><a href="#">Checkout y Projects</a></button>
              </div>
              </div> 
        </div>
    );
};

export default Profile;