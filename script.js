var sun = document.querySelector(".sun")
var moon = document.querySelector(".moon")
var body = document.querySelector("body")
var lastleft = document.querySelector(".lastleft")
var lastright = document.querySelector(".lastright")
var lasttop = document.querySelector(".lasttop")
var lastbottom = document.querySelector(".lastbottom")
var nav = document.querySelector(".nav")

var flag=0
sun.addEventListener("click",function(){
   
    if(flag===0){
        sun.style.backgroundColor = "black"
        sun.style.color ="white"
        body.style.backgroundColor ="whitesmoke" 
        nav.style.backgroundColor ="whitesmoke"
    lastleft.style.color = "black"
    lastright.style.color ="black"
    lasttop.style.color ="black"
    lastbottom.style.color ="black"
    flag=1

    }else{
       sun.style.backgroundColor = ""
        sun.style.color =""
    body.style.backgroundColor="black"
    nav.style.backgroundColor ="#FFC500"
    lastleft.style.color = "white"
    lastright.style.color ="white"
    lasttop.style.color ="white"
    lastbottom.style.color ="white"
    sun.classList.add = "hidden"
        flag=0
    }
 
})

nav.addEventListener("mouseenter",function(){
    cursor.style.backgroundColor="#3C3C3C"
})
nav.addEventListener("mouseleave",function(){
    cursor.style.backgroundColor = "#FFC500"
})

var cursor = document.querySelector(".cursor")
var body = document.querySelector("body")
body.addEventListener("mousemove",function(dets){
    cursor.style.left =dets.x+"px" 
    cursor.style.top =dets.y+"px"
})


var tl = gsap.timeline()

tl.from(".shop",{
    x:-300,
    duration:3,
})
tl.from(".join",{
    x:-300,
    duration:,
})
tl.from(".about",{
    x:-300,
    duration:1,
})