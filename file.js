let btn = document.querySelector(".btn");
let btn_go = document.querySelector(".btn-go");
let btn_reset = document.querySelector(".btn-reset");
let se = document.querySelector(".s");
se.innerHTML = 0 ;         
// let counter = setInterval(countdown, 1000);
function countdown(){
    se.innerHTML++;
if(se.innerHTML === "60"){
se.innerHTML = 0 ; 
}
}
let mi = document.querySelector(".m");
mi.innerHTML = 0 ;         
// let co = setInterval(count, 60000);
function count(){
    mi.innerHTML++;
if(mi.innerHTML === "60"){
se.innerHTML = 0 ; 
}
}
let mil = document.querySelector(".mil");
mil.innerHTML = 0 ;         
// let num = setInterval(fady, 10);
function fady(){
    mil.innerHTML++;
if(mil.innerHTML === "60"){
mil.innerHTML = 0 ; 
}
}
btn.onclick = function(){
clearInterval(num);
clearInterval(co);
clearInterval(counter);
}
btn_go.onclick = function(){
num = setInterval(fady, 10);
co = setInterval(count, 60000);
counter = setInterval(countdown, 1000);
}
btn_reset.onclick = function(){
mil.innerHTML = 0;
mi.innerHTML = 0 ;
se.innerHTML = 0 ;
clearInterval(num);
clearInterval(co);
clearInterval(counter);
}