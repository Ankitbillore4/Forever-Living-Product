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




gsap.from(".sweet",{
    y:80,
    delay:2,
    duration:1.8,
    opacity:0,
    stagger:0.4
})

gsap.from(".rightimg",{
    y:80,
    delay:2,
    duration:1.8,
    opacity:0,
    stagger:0.4
})


gsap.from(".leftimg",{
    y:80,
    delay:2,
    duration:1.8,
    opacity:0,
    stagger:0.4
})

gsap.from(".start",{
    y:80,
    delay:2.1,
    duration:1.9,
    opacity:0,
    stagger:0.4
})
gsap.from(".egallogo",{
    delay:0.9,
    duration:2,
    opacity:-1,
})
gsap.from(".aelovera",{
    y:100,
    duration:2,
    delay:1,
    opacity:-1,
})
gsap.from(".rexbox",{
    y:80,
    duration:3,
    delay:3,opacity:0,

})
gsap.from(".rex",{
    y:80,
    duration:2,
    delay:2,
    opacity:0,
    stagger:0.5
})
gsap.from(".rexxx",{
    y:80,
    duration:2.5,
    delay:2,
    opacity:0,
    stagger:0.5
})
gsap.from(".cards",{
    y:100,
    duration:3,
    opacity:0,
    delay:4,
})