import React from 'react';
import Layout from '../Components/Layout';
import { useRef,useState } from 'react';



const Homepages = () => {
    let div_width=300;
   const [scroll_position,setScroll_position]=useState(0);
    const scroll_div=useRef();

   const handle_scrolling=(scroll_amount)=>{
        let newScroolPosition=scroll_position+scroll_amount;
        if(newScroolPosition<0){newScroolPosition=0;}
        if(newScroolPosition>2100){newScroolPosition=2100;}
    setScroll_position(newScroolPosition);
    scroll_div.current.scrollLeft=newScroolPosition;
    console.log(newScroolPosition);
    
   }

let div_array=[1,2,3,4,5,6,7,8];

//touch event
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
      console.log('Swiped Left');
      handle_scrolling(div_width);
  }

  if (touchendX > touchstartX) {
      console.log('Swiped Right');
      handle_scrolling(-div_width);
  }

  if (touchendY < touchstartY) {
      console.log('Swiped Up');
  }

  if (touchendY > touchstartY) {
      console.log('Swiped Down');
  }

  if (touchendY === touchstartY) {
      console.log('Tap');
  }

  }

    return (
       <Layout>
        <div className='bg-red-500 p-8 md:p-10 w-full h-screen  '>
            <div ref={scroll_div} className='bg-emerald-300 flex justify-start items-center w-full h-2/3 
            overflow-x-scroll scroll-smooth '>
                {
                    div_array.map((item,index)=>{
                        return(
                            <div onTouchStart={touch_start} onTouchEnd={touch_end} className='mx-2 bg-yellow-200 flex items-center justify-center font-bold
                            text-lg h-4/5 w-[300px] flex-shrink-0  '>{item.toString()}</div>
                        )
                    })
                }
                
               
            </div>
            <div className='flex mt-4 justify-center items-center gap-6'>
                    <button className='rounded-lg  border p-2 bg-fuchsia-400 font-bold'
                    onClick={()=>{handle_scrolling(-div_width)}}>Left Scrool</button>
                    <button className='rounded-lg border p-2 bg-fuchsia-400 font-bold'
                    onClick={()=>{handle_scrolling(div_width)}}>Right Scroll</button>
                </div>
        </div>
       </Layout>
    );
};

export default Homepages;