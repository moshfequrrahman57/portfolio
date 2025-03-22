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

 getBreakPoint();

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
  <div className='flex flex-col items-center justify-center w-[calc(100%-40px)] h-fit mx-5 my-20'>
         
           <ul onTouchStart={touch_start} onTouchEnd={touch_end} ref={slider} className='list-none  rounded-lg 
           grid grid-flow-col grid_columns_1 sm:grid_columns_2 md:grid_columns_3 gap-4 scroll-smooth overflow-hidden  h-fit w-full
           '>
            
             

            <li>
            <div ref={slider_item} className='border bg-gray-300 shadow-sm w-full min-h-72  flex flex-col p-4 rounded-lg'>
            <img src="/design-systems-svgrepo-com.svg" alt="frontend" className='w-16 h-16' />
           <p className='font-semibold text-2xl'>Frontend website Devlopment</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta modi quos id cumque. Ducimus placeat distinctio quo praesentium beatae quasi!</p>
            </div>
            </li>
            <li>
            <div ref={slider_item} className='border bg-gray-300 shadow-sm w-full min-h-72  flex flex-col p-4 rounded-lg'>
            <img src="/responsive-svgrepo-com.svg" alt="responsive" className='w-16 h-16' />
           <p className='font-semibold text-2xl'>Responsive Design</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta modi quos id cumque. Ducimus placeat distinctio quo praesentium beatae quasi!</p>
            </div>
            </li>
            <li>
            <div ref={slider_item} className='border bg-gray-300 shadow-sm w-full min-h-72  flex flex-col p-4 rounded-lg'>
            <img src="/api-svgrepo-com.svg" alt="api" className='w-16 h-16' />
           <p className='font-semibold text-2xl'>API Integration</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta modi quos id cumque. Ducimus placeat distinctio quo praesentium beatae quasi!</p>
            </div>
            </li>
            <li>
            <div ref={slider_item} className='border bg-gray-300 shadow-sm w-full min-h-72  flex flex-col p-4 rounded-lg'>
            <img src="/photoshop-svgrepo-com.svg" alt="ps" className='w-16 h-16' />
           <p className='font-semibold text-2xl'>Work with photoshop</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta modi quos id cumque. Ducimus placeat distinctio quo praesentium beatae quasi!</p>
            </div>
            </li>
            <li>
            <div ref={slider_item} className='border bg-gray-300 shadow-sm w-full min-h-72  flex flex-col p-4 rounded-lg'>
            <img src="/key-7-svgrepo-com.svg" alt="authen" className='w-16 h-16' />
           <p className='font-semibold text-2xl'>Data Authentication</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta modi quos id cumque. Ducimus placeat distinctio quo praesentium beatae quasi!</p>
            </div>
            </li>
            <li>
            <div ref={slider_item} className='border bg-gray-300 shadow-sm w-full min-h-72  flex flex-col p-4 rounded-lg'>
            <img src="/datastore-svgrepo-com.svg" alt="backend" className='w-16 h-16' />
           <p className='font-semibold text-2xl'>Backend Service</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta modi quos id cumque. Ducimus placeat distinctio quo praesentium beatae quasi!</p>
            </div>
            </li>
            
           </ul>
        <div className=' bottom-0  left-[50%-96px] md:left- flex items-center mb-3 mt-3'>
        <img onClick={scrollOneColumnLeft} src="/button-circle-round-arrow-left-svgrepo-com.svg" alt="arrow_left" className=' w-10 h-10   rounded-full border-2 cursor-pointer hover:filter_color_blue' />
        <div ref={one} className='w-3 md:w-5 h-1 border bg-[#CBD5E1]  mx-1 '></div>
          <div ref={two} className='w-3 md:w-5 h-1 border bg-[#CBD5E1] mx-1'></div>
          <div ref={three} className='w-3 md:w-5 h-1 border bg-[#CBD5E1]  mx-1'></div>
          <div ref={four} className='w-3 md:w-5 h-1 border bg-[#CBD5E1]  mx-1'></div>
          <div ref={five} className=' md:hidden w-3 md:w-5 h-1 border bg-[#CBD5E1]  mx-1'></div>
          <div ref={six} className=' sm:hidden w-3 md:w-5 h-1 border bg-[#CBD5E1]  mx-1'></div>
          <img onClick={scrollOneColumnRight} src="/button-circle-round-arrow-left-svgrepo-com.svg" alt="arrow right" className=' w-10 h-10  rotate-180 rounded-full border-2 cursor-pointer hover:filter_color_blue' />
         </div>
        
  </div>
    );
};

export default Services;