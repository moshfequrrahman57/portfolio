import React, { useEffect, useRef, useState } from 'react';

const Services = () => {


  const one=useRef();
  const two=useRef();
  const three=useRef();
  const four=useRef();
  const five=useRef();
  const six=useRef();
  const slider=useRef();
  const slider_item=useRef();
  



  const [slidePosition,setSlidePosition]=useState(1);
 const [scrollValue,setScrollValue]=useState(0);
 const [maxSlidePosition,setMaxSlidePosition]=useState(null);
  useEffect(()=>{
   // console.dir(`In use effect slider current: ${scrollValue}`);
    console.log("Render in use effect");
    console.log(`Scroll Value: ${scrollValue}`);
    console.log(`Slide Position: ${slidePosition}`);
    console.log(`Max: ${maxSlidePosition}`);


    ///pagination start in useEffect

    if(slidePosition===1){
      one.current.style.backgroundColor="black";
      two.current.style.backgroundColor="yellow";
    }
    else if(slidePosition===2){
      one.current.style.backgroundColor="yellow";
      two.current.style.backgroundColor="black";
      three.current.style.backgroundColor="yellow";
    }
    else if(slidePosition===3){
      two.current.style.backgroundColor="yellow";
      three.current.style.backgroundColor="black";
      four.current.style.backgroundColor="yellow";
    }
    else if(slidePosition===4){
      three.current.style.backgroundColor="yellow";
      four.current.style.backgroundColor="black";
      five.current.style.backgroundColor="yellow";
    }
    else if(slidePosition===5){
      four.current.style.backgroundColor="yellow";
      five.current.style.backgroundColor="black";
      six.current.style.backgroundColor="yellow";
    }
    else if(slidePosition===6){
      five.current.style.backgroundColor="yellow";
      six.current.style.backgroundColor="black";

    }
///pagination end in useEffect



  },[scrollValue,maxSlidePosition,slidePosition])
////iife starts
  {
    (
      ()=>{
        console.log("Render in IIFE");
      }
    )()
  }
//// iife ends
/////Scroll Button Starts

  const scrollOneColumnLeft=()=>{
    console.log(`Left Button Clicked`);

    if(slidePosition>1){
      let temp;
      slider.current.scrollLeft=scrollValue-(slider_item.current.clientWidth+20);
      temp=scrollValue-(slider_item.current.clientWidth+20);
      console.log(`temp: ${temp}`);
      setSlidePosition(slidePosition-1);
     // setPaginationColor();
      setScrollValue(temp);
    }


  }
  const scrollOneColumnRight=()=>{
    console.log(`Right Button Clicked`);

    if(slidePosition<maxSlidePosition){
      let temp;
      slider.current.scrollLeft=slidePosition*(slider_item.current.clientWidth+20);
      temp=slidePosition*(slider_item.current.clientWidth+20);
      console.log(`temp: ${temp}`);
      setSlidePosition(slidePosition+1);
     // setPaginationColor();
      setScrollValue(temp);
    }

  }
///// scroll button ends

/// window onload resize event starts

window.onload=()=>{
  console.log("Window load first time");
  getBreakPoint();
 
}

window.onresize=()=>{
  console.log("Window resizing");
  getBreakPoint();
  slider.current.scrollLeft=0;
  setScrollValue(0);
  setSlidePosition(1);
  
}

/// window onload resize event ends

/// break point start
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
        if(breakpoint==='sm'){setMaxSlidePosition(5);}
        else if(breakpoint==='xs'){setMaxSlidePosition(6); }
        else if(breakpoint==='md' || breakpoint==='lg' || breakpoint==='xl'){
         setMaxSlidePosition(4);
        }
       
        // break;
    }
  }
}
/// breakpoint end




    return (
  <div className='flex flex-col items-center justify-around h-[50vh] bg-green-300 mx-12   relative my-20'>
          
        <img onClick={scrollOneColumnLeft} src="/button-circle-round-arrow-left-svgrepo-com.svg" alt="arrow_left" className='w-10 h-10 absolute top-[calc(50% -20px)] left-2' />
        <img onClick={scrollOneColumnRight} src="/button-circle-round-arrow-left-svgrepo-com.svg" alt="arrow right" className='w-10 h-10 absolute top-[calc(50% -20px)] right-2 rotate-180' />
          
           <ul  ref={slider} className='list-none bg-white rounded-lg 
           grid grid-flow-col grid_columns_1 sm:grid_columns_2 md:grid_columns_3 gap-4 scroll-smooth overflow-hidden'>
            
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
          <div ref={five} className=' md:hidden w-10 h-2 border border-black bg-violet-500 mx-2'></div>
          <div ref={six} className=' sm:hidden w-10 h-2 border border-black bg-green-500 mx-2'></div>
         </div>
        
  </div>
    );
};

export default Services;