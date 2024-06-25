var sun = document.querySelector(".sun")
var moon = document.querySelector(".moon")
var body = document.querySelector("body")
var lastleft = document.querySelector(".lastleft")
var lastright = document.querySelector(".lastright")
var lasttop = document.querySelector(".lasttop")
var lastbottom = document.querySelector(".lastbottom")

var flag=0
sun.addEventListener("click",function(){
   
    if(flag===0){
        sun.style.backgroundColor = "black"
        sun.style.color ="white"
        body.style.backgroundColor ="whitesmoke" 
    lastleft.style.color = "black"
    lastright.style.color ="black"
    lasttop.style.color ="black"
    lastbottom.style.color ="black"
    flag=1

    }else{
       sun.style.backgroundColor = ""
        sun.style.color =""
    body.style.backgroundColor="black"
    lastleft.style.color = "white"
    lastright.style.color ="white"
    lasttop.style.color ="white"
    lastbottom.style.color ="white"
    sun.classList.add = "hidden"
        flag=0
    }
    
})
