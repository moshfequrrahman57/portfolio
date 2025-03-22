

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
  }

  if (touchendX > touchstartX) {
      console.log('Swiped Right');
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