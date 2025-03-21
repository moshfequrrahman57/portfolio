import React, { useEffect, useRef, useState } from 'react';

const Services = () => {


const slider=useRef();
const slider_item=useRef();
let slidePosition=1;
let scrollValue=null;
let maxSlidePosition=null;
console.log("Head");

useEffect(()=>{

  (
    ()=>{
      setPaginationColor();
      getBreakPoint();
      console.log("Effect")
    }
  )()

},[]);


  const scrollOneColumnLeft=()=>{
    console.log(`left arrow click`);
  //  console.dir(slider.current);
   // console.dir(slider_item.current);
    if(slidePosition>1){
      slider.current.scrollLeft=scrollValue-(slider_item.current.clientWidth+20);
      slidePosition=slidePosition-1;
      setPaginationColor();
    //  console.log(`Slide Position: ${slidePosition}`);
      scrollValue=slider.current.scrollLeft;
      console.log(`Scroll Val: ${scrollValue}`);
    }

  }
  const scrollOneColumnRight=()=>{
    console.log(`Right arrow click`);
  //  console.dir(slider.current);
   // console.dir(slider_item.current);
   if(slidePosition<maxSlidePosition){
    slider.current.scrollLeft=slidePosition*(slider_item.current.clientWidth+20);
    slidePosition=slidePosition+1;
    setPaginationColor();
  //  console.log(`Slide Position: ${slidePosition}`);
    scrollValue=slider.current.scrollLeft;
    console.log(`Scroll value: ${scrollValue}`);
   }
  
  }

  function setPaginationColor(){
    console.log(`Slider pagination : ${slidePosition}`);
    if(slidePosition===1){
      console.dir(one.current.style);
      one.current.style.backgroundColor="green";
      two.current.style.backgroundColor="orange";
    }
    else if(slidePosition===2){
      console.dir(two.current.style);
      two.current.style.backgroundColor="green";
      one.current.style.backgroundColor="orange";
      three.current.style.backgroundColor="orange";
    }
    else if(slidePosition===3){
      console.dir(three.current.style);
      three.current.style.backgroundColor="green";
      two.current.style.backgroundColor="orange";
      four.current.style.backgroundColor="orange";
    }
    else if(slidePosition===4){
      console.dir(four.current.style);
      four.current.style.backgroundColor="green";
      three.current.style.backgroundColor="orange";
      five.current.style.backgroundColor="orange";
    }
    else if(slidePosition===5){
      console.dir(five.current.style);
      five.current.style.backgroundColor="green";
      four.current.style.backgroundColor="orange";
      six.current.style.backgroundColor="orange";
    }
    else if(slidePosition===6){
      console.dir(six.current.style);
      six.current.style.backgroundColor="green";
      five.current.style.backgroundColor="orange";
    }
  }



  window.onresize=()=>{
  //  console.log("Window resizing");
    slider.current.scrollLeft=(slidePosition-1)*(slider_item.current.clientWidth+20);
    getBreakPoint();
    setPaginationColor();
    
  }

  function getBreakPoint(){
    console.log("Break point function");
    const breakpoints = {
      'xs': '(max-width: 639px)',
      'sm': '(min-width: 640px) and (max-width: 767px)',
      'md': '(min-width: 768px) and (max-width: 1023px)',
      'lg': '(min-width: 1024px) and (max-width: 1279px)',
      'xl': '(min-width: 1280px)',
    };

   
    for(const breakpoint in breakpoints){
      if (window.matchMedia(breakpoints[breakpoint])
				.matches){
          console.log(`${breakpoint}`);
          console.log(`${window.innerWidth} px`);
          if(breakpoint==='sm'){maxSlidePosition=5;}
          else if(breakpoint==='xs'){maxSlidePosition=6; }
          else if(breakpoint==='md' || breakpoint==='lg' || breakpoint==='xl'){
            maxSlidePosition=4;
          }
          console.log(`Max: ${maxSlidePosition}`);
          break;
      }
    }
  }

  const one=useRef();
  const two=useRef();
  const three=useRef();
  const four=useRef();
  const five=useRef();
  const six=useRef();



    return (
  <div className='flex flex-col items-center justify-around h-[50vh] bg-green-300 mx-5 relative my-16'>
          
        <img onClick={scrollOneColumnLeft} src="/button-circle-round-arrow-left-svgrepo-com.svg" alt="arrow_left" className='w-10 h-10 absolute top-[calc(50% -20px)] left-2' />
        <img onClick={scrollOneColumnRight} src="/button-circle-round-arrow-left-svgrepo-com.svg" alt="arrow right" className='w-10 h-10 absolute top-[calc(50% -20px)] right-2 rotate-180' />
          
           <ul ref={slider} className='list-none bg-white rounded-lg 
           grid grid-flow-col grid_columns_1 sm:grid_columns_2 md:grid_columns_3 gap-4 overflow-hidden'>
            
            <li>
            <div ref={slider_item} className='border bg-red-500 flex flex-col items-center justify-center'>
            <img src="/linkedin-round-svgrepo-com.svg" alt="ln" className='rounded-full w-40 h-40 object-cover' />
           <p>1 In</p>
           <p>Lorem ipsum dolor sit amet.</p>
            </div>
            </li>
            <li>
            <div className='border bg-red-500 flex flex-col items-center justify-center'>
            <img src="/linkedin-round-svgrepo-com.svg" alt="ln" className='rounded-full w-40 h-40 object-cover' />
           <p>2 In</p>
           <p>Lorem ipsum dolor sit amet.</p>
            </div>
            </li>
            <li>
            <div className='border bg-red-500 flex flex-col items-center justify-center'>
            <img src="/linkedin-round-svgrepo-com.svg" alt="ln" className='rounded-full w-40 h-40 object-cover' />
           <p>3 In</p>
           <p>Lorem ipsum dolor sit amet.</p>
            </div>
            </li>
            <li>
            <div className='border bg-red-500 flex flex-col items-center justify-center'>
            <img src="/linkedin-round-svgrepo-com.svg" alt="ln" className='rounded-full w-40 h-40 object-cover' />
           <p>4 In</p>
           <p>Lorem ipsum dolor sit amet.</p>
            </div>
            </li>
            <li>
            <div className='border bg-red-500 flex flex-col items-center justify-center'>
            <img src="/linkedin-round-svgrepo-com.svg" alt="ln" className='rounded-full w-40 h-40 object-cover' />
           <p>5 In</p>
           <p>Lorem ipsum dolor sit amet.</p>
            </div>
            </li>
            <li>
            <div className='border bg-red-500 flex flex-col items-center justify-center'>
            <img src="/linkedin-round-svgrepo-com.svg" alt="ln" className='rounded-full w-40 h-40 object-cover' />
           <p>6 In</p>
           <p>Lorem ipsum dolor sit amet.</p>
            </div>
            </li>
            
            
           </ul>
        <div className='flex items-center'>
          <div ref={one} className='w-10 h-2 border border-black bg-orange-400 mx-2 '></div>
          <div ref={two} className='w-10 h-2 border border-black bg-orange-400 mx-2'></div>
          <div ref={three} className='w-10 h-2 border border-black bg-orange-400 mx-2'></div>
          <div ref={four} className='w-10 h-2 border border-black bg-orange-400 mx-2'></div>
          <div ref={five} className=' md:hidden w-10 h-2 border border-black bg-orange-400 mx-2'></div>
          <div ref={six} className=' sm:hidden w-10 h-2 border border-black bg-orange-400 mx-2'></div>
         </div>
        
  </div>
    );
};

export default Services;