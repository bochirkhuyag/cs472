usertxt="";
var speed= 250;
var frames;
var play;
function startAnimation(){

    let e = document.getElementById("animation");
    let selected=e.options[e.selectedIndex].value;
    frames=ANIMATIONS[selected].split("=====\n");
    lenArr=0;
    document.getElementById("stop").disabled=false;
    usertxt=document.getElementById("text-area").value;

    document.getElementById("start").disabled=true;
    document.getElementById("animation").disabled=true;
    play=setInterval(playFrames,speed,frames);

}
function playFrames(a){
    let txtArea=document.getElementById("text-area");
    if(lenArr==a.length-1){
            txtArea.value=a[lenArr];
            lenArr=0;
        }
        else{
            txtArea.value=a[lenArr];
            lenArr++;
        }

    }

function stopAnimation(){
    clearInterval(play);
    document.getElementById("text-area").value=usertxt;
    document.getElementById("start").disabled=false;
    document.getElementById("animation").disabled=false;
}
function fontChange(){
let a = document.getElementById("fontsize");
let selected = a.options[a.selectedIndex].value;
let font;
if (selected =="Tiny") font = "7pt";
   else if (selected =="Small") font = "10pt";
   else if (selected =="Medium") font = "12pt";
   else if (selected =="Large") font = "16pt";
    else if (selected =="Extra Large") font = "24pt";
    else if (selected =="XXL") font = "32pt";

document.getElementById("text-area").style.fontSize=font;

}
function turbo(){
    if(!document.getElementById("stop").disabled){
        if(document.getElementById("turbo").checked==true) {
            speed = 50;
        }
        else {
            speed = 250;
        }
        clearInterval(play);
        play=setInterval(playFrames,speed,frames);

    }
  }
function init(){
 document.getElementById("start").onclick = startAnimation;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("fontsize").onchange=fontChange;
    document.getElementById("turbo").onchange=turbo;
}
window.onload=init;