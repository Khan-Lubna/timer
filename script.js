function decrement(){
    console.log(IntervalId,"abc");
    var x,y,z;
    z=document.getElementById("hours");
    x=document.getElementById("seconds");
    y=document.getElementById("minutes");
     x.value=parseInt(x.value)-1;
     if(x.value==0 && y.value==0 && z.value==0)
      { 
        document.getElementById('music').play();
        if (confirm("Time is over!")){
          //console.log("hh")
        document.getElementById('music').pause();
        }
        stop(IntervalId);
      }
      else if(x.value==0 ){
        x.value=59;
        if (y.value!=0)
        {
          y.value=parseInt(y.value)-1;
        }
        else if (y.value==0){
          y.value=59;
        }
      }
      else 
        if (z.value!=0)
        {z.value=parseInt(z.value)-1;}
}
var IntervalId;
function countdown(){
   IntervalId = setInterval(decrement,1000);
}
function stop(IntervalId){
    clearInterval(IntervalId);
}
var pause;
 function countover(){
 pause = clearInterval(countdown);
}
function pauseClock(){
  clearInterval(IntervalId);
}