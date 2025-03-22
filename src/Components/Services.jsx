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

///touch section starts

let touchstartX,touchstartY,touchendX,touchendY;

 const touch_start=(event)=>{
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
    console.log(touchstartX,touchstartY);
  }
  const touch_end=(event)=>{
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    console.log(touchendX,touchendY);
    handle_gesture();
  }

 function handle_gesture(){
    if (touchendX < touchstartX) {
      if(Math.abs(touchendX-touchstartX)>20){
        console.log('Swiped Left');
        
        scrollOneColumnRight();
      }
  }
  if (touchendX > touchstartX) {
    if(Math.abs(touchendX-touchstartX)>20){
      console.log('Swiped Right');
      scrollOneColumnLeft();
    }
  }

  }

///touch section end



    return (
  <div className='flex flex-col items-center justify-around h-[50vh] mx-12   relative my-20'>
          
        <img onClick={scrollOneColumnLeft} src="/button-circle-round-arrow-left-svgrepo-com.svg" alt="arrow_left" className='w-12 h-12 absolute top-[calc(50% -20px)] left-1 md:left-2  rounded-full border-2 cursor-pointer hover:filter_color_blue' />
        <img onClick={scrollOneColumnRight} src="/button-circle-round-arrow-left-svgrepo-com.svg" alt="arrow right" className='w-12 h-12 absolute top-[calc(50% -20px)] right-1 md:right-2 rotate-180 rounded-full border-2 cursor-pointer hover:filter_color_blue' />
          
           <ul onTouchStart={touch_start} onTouchEnd={touch_end} ref={slider} className='list-none bg-white rounded-lg 
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
        <div className='absolute bottom-0  left-[50%-96px] md:left- flex items-center mb-3'>
          <div ref={one} className='w-6 md:w-10 h-1 border border-black bg-yellow-400  mx-1 '></div>
          <div ref={two} className='w-6 md:w-10 h-1 border border-black bg-yellow-400 mx-1'></div>
          <div ref={three} className='w-6 md:w-10 h-1 border border-black bg-yellow-400 mx-1'></div>
          <div ref={four} className='w-6 md:w-10 h-1 border border-black bg-yellow-400 mx-1'></div>
          <div ref={five} className=' md:hidden w-6 md:w-10 h-1 border border-black bg-yellow-400 mx-1'></div>
          <div ref={six} className=' sm:hidden w-6 md:w-10 h-1 border border-black bg-yellow-400 mx-1'></div>
         </div>
        
  </div>
    );
};

export default Services;