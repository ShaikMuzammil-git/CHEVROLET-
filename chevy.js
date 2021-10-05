function menu1(){
  document.getElementById("menu").style.animationName="menuSlide1";
      document.getElementById("trucksBtn").style.display="none";
      document.getElementById("backBtn").style.display="block";   
}
function menu2(){
  document.getElementById("menu").style.animationName="menuSlide2";
    document.getElementById("trucksBtn").style.display="block";
    document.getElementById("backBtn").style.display="none";
}

function topNotch1(){
  document.getElementById("topNotchPhoto").style.animationName="topNotchF";
  document.getElementById("topNotchPhotoText").style.animationName="topNotchTextF";
}
function topNotch2(){
  document.getElementById("topNotchPhoto").style.animationName="topNotchR";
  document.getElementById("topNotchPhotoText").style.animationName="topNotchTextR";
}

function cargoSpace1(){
  document.getElementById("cargoSpacePhoto").style.animationName="cargospaceF";
  document.getElementById("cargoSpacePhotoText").style.animationName="topNotchTextF";
}
function cargoSpace2(){
  document.getElementById("cargoSpacePhoto").style.animationName="cargospaceR";
  document.getElementById("cargoSpacePhotoText").style.animationName="topNotchTextR";
}

function meetFamily(){ 
  document.getElementById("meetWhite").style.animationName="meetWhite";
  document.getElementById("meetRed").style.animationName="meetRed";
}
function byeFamily(){
  document.getElementById("meetWhite").style.animationName="byeWhite";
document.getElementById("meetRed").style.animationName="byeRed";  
}



function bodyColor(){
  const carBody = document.getElementById("customize");

const input = document.getElementById("colorPicker"); 

setColor();
input.addEventListener("input", setColor);

function setColor() {
	carBody.style.backgroundColor = input.value;
}
}

function topColor(){
  const carTop1 = document.getElementById("goliathTopColor1");
  const carTop2 = document.getElementById("goliathTopColor2");
const input = document.getElementById("colorPicker2"); 

setColor();
input.addEventListener("input", setColor);

    function setColor() {
	carTop1.style.backgroundColor = input.value;
  carTop2.style.backgroundColor = input.value;
    }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var me = document.getElementById("hood");
output.innerHTML = slider.value;

slider.oninput = function() {
  var b = output.innerHTML = this.value;
   me.style.height = b + "vw" ;
}



function mechanicalSpec(){
  document.getElementById("goliathHighlights2").style.opacity="0";
  document.getElementById("goliathHighlights3").style.opacity="1";
  document.getElementById("mechanicalSpecsBox").style.backgroundColor="rgb(243 242 242)";
  document.getElementById("electricalSpecsBox").style.backgroundColor="#f0e7e7";
  document.getElementById("specifications").style.height="66vmin";
}

function electricalSpecs(){
  document.getElementById("goliathHighlights2").style.opacity="1";
  document.getElementById("goliathHighlights3").style.opacity="0";
  document.getElementById("electricalSpecsBox").style.backgroundColor="rgb(243 242 242)";
  document.getElementById("mechanicalSpecsBox").style.backgroundColor="#f0e7e7";
  document.getElementById("specifications").style.height="91vmin";
}
/* for black trucks*/
function blackAngle1S(){
  document.getElementById("blackAngle3").style.opacity="0";
  document.getElementById("blackAngle1").style.animationName="blackChev";
  document.getElementById("blackAngle2").style.animationName="";
  document.getElementById("blackAngle3").style.animationName="";
  document.getElementById("blackAngle4").style.animationName="";
  document.getElementById("blackAngle5").style.animationName="";
}
function blackAngle2S(){
  document.getElementById("blackAngle3").style.opacity="0";
  document.getElementById("blackAngle1").style.animationName="";
  document.getElementById("blackAngle2").style.animationName="blackChev";
  document.getElementById("blackAngle3").style.animationName="";
  document.getElementById("blackAngle4").style.animationName="";
  document.getElementById("blackAngle5").style.animationName="";
}
function blackAngle3S(){
  document.getElementById("blackAngle3").style.opacity="0";
  document.getElementById("blackAngle1").style.animationName="";
  document.getElementById("blackAngle2").style.animationName="";
  document.getElementById("blackAngle3").style.animationName="blackChev";
  document.getElementById("blackAngle4").style.animationName="";
  document.getElementById("blackAngle5").style.animationName="";
}
function blackAngle4S(){
  document.getElementById("blackAngle3").style.opacity="0";
  document.getElementById("blackAngle1").style.animationName="";
  document.getElementById("blackAngle2").style.animationName="";
  document.getElementById("blackAngle3").style.animationName="";
  document.getElementById("blackAngle4").style.animationName="blackChev";
  document.getElementById("blackAngle5").style.animationName="";
}
function blackAngle5S(){
  document.getElementById("blackAngle3").style.opacity="0";
  document.getElementById("blackAngle1").style.animationName="";
  document.getElementById("blackAngle2").style.animationName="";
  document.getElementById("blackAngle3").style.animationName="";
  document.getElementById("blackAngle4").style.animationName="";
  document.getElementById("blackAngle5").style.animationName="blackChev";
}

/* for white trucks */
 function whiteAngle1S(){
   document.getElementById("whiteAngle5").style.opacity="0";
   document.getElementById("whiteAngle1").style.animationName="whiteChev";
   document.getElementById("whiteAngle2").style.animationName="";
   document.getElementById("whiteAngle3").style.animationName="";
   document.getElementById("whiteAngle4").style.animationName="";
   document.getElementById("whiteAngle5").style.animationName="";
 }
 function whiteAngle2S(){
   document.getElementById("whiteAngle5").style.opacity="0";
   document.getElementById("whiteAngle1").style.animationName="";
   document.getElementById("whiteAngle2").style.animationName="whiteChev";
   document.getElementById("whiteAngle3").style.animationName="";
   document.getElementById("whiteAngle4").style.animationName="";
   document.getElementById("whiteAngle5").style.animationName="";
 }
 function whiteAngle3S(){
   document.getElementById("whiteAngle5").style.opacity="0";
   document.getElementById("whiteAngle1").style.animationName="";
   document.getElementById("whiteAngle2").style.animationName="";
   document.getElementById("whiteAngle3").style.animationName="whiteChev";
   document.getElementById("whiteAngle4").style.animationName="";
   document.getElementById("whiteAngle5").style.animationName="";
 }
 function whiteAngle4S(){
   document.getElementById("whiteAngle5").style.opacity="0";
   document.getElementById("whiteAngle1").style.animationName="";
   document.getElementById("whiteAngle2").style.animationName="";
   document.getElementById("whiteAngle3").style.animationName="";
   document.getElementById("whiteAngle4").style.animationName="whiteChev";
   document.getElementById("whiteAngle5").style.animationName="";
 }
 function whiteAngle5S(){
   document.getElementById("whiteAngle1").style.animationName="";
   document.getElementById("whiteAngle2").style.animationName="";
   document.getElementById("whiteAngle3").style.animationName="";
  document.getElementById("whiteAngle4").style.animationName="";
  document.getElementById("whiteAngle5").style.animationName="whiteChev";
}

/* */ 
function redAngle1S(){
  document.getElementById("redAngle5").style.opacity="0";
  document.getElementById("redAngle1").style.animationName="whiteChev";
  document.getElementById("redAngle2").style.animationName="";
  document.getElementById("redAngle3").style.animationName="";
  document.getElementById("redAngle4").style.animationName="";
  document.getElementById("redAngle5").style.animationName="";
}
function redAngle2S(){
  document.getElementById("redAngle5").style.opacity="0";
  document.getElementById("redAngle1").style.animationName="";
  document.getElementById("redAngle2").style.animationName="whiteChev";
  document.getElementById("redAngle3").style.animationName="";
  document.getElementById("redAngle4").style.animationName="";
  document.getElementById("redAngle5").style.animationName="";
}
function redAngle3S(){
  document.getElementById("redAngle5").style.opacity="0";
  document.getElementById("redAngle1").style.animationName="";
  document.getElementById("redAngle2").style.animationName="";
  document.getElementById("redAngle3").style.animationName="whiteChev";
  document.getElementById("redAngle4").style.animationName="";
  document.getElementById("redAngle5").style.animationName="";
}
function redAngle4S(){
  document.getElementById("redAngle5").style.opacity="0";
  document.getElementById("redAngle1").style.animationName="";
  document.getElementById("redAngle2").style.animationName="";
  document.getElementById("redAngle3").style.animationName="";
  document.getElementById("redAngle4").style.animationName="whiteChev";
  document.getElementById("redAngle5").style.animationName="";
}
function redAngle5S(){
  document.getElementById("redAngle1").style.animationName="";
  document.getElementById("redAngle2").style.animationName="";
  document.getElementById("redAngle3").style.animationName="";
  document.getElementById("redAngle4").style.animationName="";
  document.getElementById("redAngle5").style.animationName="whiteChev";
}


/*  switching betwwen truck colors */

function whiteColorTRucks(){
  document.getElementById("whiteAngle5").style.opacity="1";
  document.getElementById("white").style.display="block";
  document.getElementById("black").style.display="none";
  document.getElementById("red").style.display="none";
  document.getElementById("whiteAngles").style.zIndex="4";
  document.getElementById("blackAngles").style.zIndex="3";
  document.getElementById("redAngles").style.zIndex="1";
}
function blackColorTRucks(){
  document.getElementById("white").style.display="none";
  document.getElementById("red").style.display="none";
  document.getElementById("black").style.display="block";
  document.getElementById("whiteAngles").style.zIndex="2";
  document.getElementById("blackAngles").style.zIndex="4";
  document.getElementById("redAngles").style.zIndex="1";
}
function redColorTRucks(){
  document.getElementById("redAngle5").style.opacity="1";
  document.getElementById("red").style.display="block";
  document.getElementById("white").style.display="none";
  document.getElementById("black").style.display="none";
  document.getElementById("whiteAngles").style.zIndex="2";
  document.getElementById("blackAngles").style.zIndex="3";
  document.getElementById("redAngles").style.zIndex="4";
}

/* customize functions */

function carriage(){
var a=document.getElementById("carriage");
   if(a.style.display===("block")){
    document.getElementById("carriage").style.display="none";
   }
   else{
     document.getElementById("carriage").style.display="block";

   }
}
  /* functions for switching grillGuards */
function grill1(){
  var a=document.getElementById("grillGuard1");
     if(a.style.display===("block")){
      document.getElementById("grillGuard1").style.display="none";
      document.getElementById("grillGuard2").style.display="none";
     }
     else{
       document.getElementById("grillGuard1").style.display="block";
       document.getElementById("grillGuard2").style.display="none";
  
     }
  }
  function grill2(){
    var a=document.getElementById("grillGuard2");
       if(a.style.display===("block")){
        document.getElementById("grillGuard2").style.display="none";
        document.getElementById("grillGuard1").style.display="none";
       }
       else{
         document.getElementById("grillGuard2").style.display="block";
         document.getElementById("grillGuard1").style.display="none";
       }
    }
   /* functions for switching wheel Rims */
   function wheel1(){
    var a=document.getElementById("goliathTyre1");
       if(a.style.display===("block")){
        document.getElementById("goliathTyre1").style.display="none";
        document.getElementById("goliathTyre2").style.display="none";
       }
       else{
         document.getElementById("goliathTyre1").style.display="block";
         document.getElementById("goliathTyre2").style.display="none";
    
       }
    }
    function wheel2(){
      var a=document.getElementById("goliathTyre2");
         if(a.style.display===("block")){
          document.getElementById("goliathTyre2").style.display="none";
          document.getElementById("goliathTyre1").style.display="none";
         }
         else{
           document.getElementById("goliathTyre2").style.display="block";
           document.getElementById("goliathTyre1").style.display="none";
         }
      }

function testRide1(){
  var a=document.getElementById("testRideBottomBar");
  if(a.style.animationName===("bookRideBarF")){             // added this coz i wanted animation to run even when click ( in touchscreen devices) coz they have no hover
        console.log("click");
  }
  else{
    document.getElementById("testRideBottomBar").style.animationName="";
  document.getElementById("testRideBottomBarCar").style.animationName="";
  setTimeout(() => {
      document.getElementById("testRideBottomBar").style.animationName="bookRideBarF";
      document.getElementById("testRideBottomBarCar").style.animationName="bookRideBarCarF";

    }, 10);
  
  }
}

function testRide2(){
  document.getElementById("testRideBottomBar").style.animationName="";
  document.getElementById("testRideBottomBarCar").style.animationName="";
  setTimeout(() => {
    document.getElementById("testRideBottomBar").style.animationName="bookRideBarR";
    document.getElementById("testRideBottomBarCar").style.animationName="bookRideBarCarR";
  }, 10);

}
