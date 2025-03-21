// const slider=useRef();
// const slider_item=useRef();
// let slidePosition=1;
// let scrollValue=0;
// let maxSlidePosition;
// console.log("Head");

// useEffect(()=>{

//   (
//     ()=>{
//      // setPaginationColor();
//       getBreakPoint();
//       console.log("Effect")
//     }
//   )()

// },[]);


//   const scrollOneColumnLeft=()=>{
//     console.log(`left arrow click`);
//   //  console.dir(slider.current);
//    // console.dir(slider_item.current);
    // if(slidePosition>1){
    //   slider.current.scrollLeft=scrollValue-(slider_item.current.clientWidth+20);
    //   slidePosition=slidePosition-1;
    //  // setPaginationColor();
    //   console.log(`Slide Position: ${slidePosition}`);
    //   scrollValue=slider.current.scrollLeft;
    //   console.log(`left Scroll Val: ${scrollValue}`);
    // }

//   }
//   const scrollOneColumnRight=()=>{
//     console.log(`Right arrow click`);
//     console.dir(slider.current);
//    console.dir(slider_item.current);
//    if(slidePosition<maxSlidePosition){
//     slider.current.scrollLeft=slidePosition*(slider_item.current.clientWidth+20);
//     slidePosition=slidePosition+1;
//    // setPaginationColor();
//     console.log(`Slide Position: ${slidePosition}`);
//     scrollValue=slider.current.scrollLeft;
//     console.log(`right Scroll value: ${scrollValue}`);
//    }
  
//   }

//   function setPaginationColor(){
//     console.log(`Slider pagination : ${slidePosition}`);
//     if(slidePosition===1){
//       console.dir(one.current.style);
//       one.current.style.backgroundColor="green";
//       two.current.style.backgroundColor="orange";
//     }
//     else if(slidePosition===2){
//       console.dir(two.current.style);
//       two.current.style.backgroundColor="green";
//       one.current.style.backgroundColor="orange";
//       three.current.style.backgroundColor="orange";
//     }
//     else if(slidePosition===3){
//       console.dir(three.current.style);
//       three.current.style.backgroundColor="green";
//       two.current.style.backgroundColor="orange";
//       four.current.style.backgroundColor="orange";
//     }
//     else if(slidePosition===4){
//       console.dir(four.current.style);
//       four.current.style.backgroundColor="green";
//       three.current.style.backgroundColor="orange";
//       five.current.style.backgroundColor="orange";
//     }
//     else if(slidePosition===5){
//       console.dir(five.current.style);
//       five.current.style.backgroundColor="green";
//       four.current.style.backgroundColor="orange";
//       six.current.style.backgroundColor="orange";
//     }
//     else if(slidePosition===6){
//       console.dir(six.current.style);
//       six.current.style.backgroundColor="green";
//       five.current.style.backgroundColor="orange";
//     }
//   }



//   window.onresize=()=>{
//   //  console.log("Window resizing");
//     slider.current.scrollLeft=(slidePosition-1)*(slider_item.current.clientWidth+20);
//     getBreakPoint();
//    // setPaginationColor();
    
//   }

//   function getBreakPoint(){
//     console.log("Break point function");
//     const breakpoints = {
//       'xs': '(max-width: 639px)',
//       'sm': '(min-width: 640px) and (max-width: 767px)',
//       'md': '(min-width: 768px) and (max-width: 1023px)',
//       'lg': '(min-width: 1024px) and (max-width: 1279px)',
//       'xl': '(min-width: 1280px)',
//     };

   
//     for(const breakpoint in breakpoints){
//       if (window.matchMedia(breakpoints[breakpoint])
//                 .matches){
//           console.log(`${breakpoint}`);
//           console.log(`${window.innerWidth} px`);
//           if(breakpoint==='sm'){maxSlidePosition=5;}
//           else if(breakpoint==='xs'){maxSlidePosition=6; }
//           else if(breakpoint==='md' || breakpoint==='lg' || breakpoint==='xl'){
//             maxSlidePosition=4;
//           }
//           console.log(`Max: ${maxSlidePosition}`);
//           break;
//       }
//     }
//   }

