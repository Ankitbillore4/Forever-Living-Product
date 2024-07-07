var sun = document.querySelector(".sun")
var moon = document.querySelector(".moon")
var body = document.querySelector("body")
var lastleft = document.querySelector(".lastleft")
var lastright = document.querySelector(".lastright")
var lasttop = document.querySelector(".lasttop")
var lastbottom = document.querySelector(".lastbottom")
var nav = document.querySelector(".nav")
var h1 = document.querySelector(".navpart2 h1")
var black2 = document.querySelector(".black2")
var black1 = document.querySelector(".black1")
var  page1part1 = document.querySelector(".page1part1")
var  page1part2 = document.querySelector(".page1part2")
var bg =  document.querySelector(".page1part1 h1")

var flag=0
sun.addEventListener("click",function(){
    console.log(flag)
   
    if(flag===0){
        flag=1
        sun.style.backgroundColor = "black"
        black1.style.color = "black"
        black2.style.color = "black"
        sun.style.color ="white"
        body.style.backgroundColor ="whitesmoke" 
        nav.style.backgroundColor ="whitesmoke"
        lastleft.style.color = "black"
        lastright.style.color ="black"
        lasttop.style.color ="black"
        lastbottom.style.color ="black"
        h1.style.color ="black"
        page1part1.style.backgroundColor ="#FFC500"
        page1part2.style.backgroundColor ="#F0F0F2"
        bg.style.backgroundColor="#3C3C3C"
        bg.style.color = "white"
        
        
        
    }else{
    black2.style.color = "white"
    black1.style.color = "white"
        h1.style.color ="white"
        flag=0
       sun.style.backgroundColor = "white"
        sun.style.color ="black"
    body.style.backgroundColor="black"
    nav.style.backgroundColor ="#000"
    lastleft.style.color = "white"
    lastright.style.color ="white"
    lasttop.style.color ="white"
    lastbottom.style.color ="white"
    sun.classList.add = "hidden"
    page1part1.style.backgroundColor ="#F0F0F2"
     page1part2.style.backgroundColor ="#FFC500"
     bg.style.backgroundColor="#FFC500"
     bg.style.color = "black"
    }
 
})

nav.addEventListener("mouseenter",function(){
    cursor.classList.remove(".cursor")
})
nav.addEventListener("mouseleave",function(){
    cursor.classList.add(".cursor")
})

var cursor = document.querySelector(".cursor")
var body = document.querySelector("body")

body.addEventListener("mousemove",function(dets){
    cursor.style.left =dets.x+"px" 
    cursor.style.top =dets.y+"px"
})

var tl = gsap.timeline()

tl.from(".nav .navpart1",{
    x:-200,
    duration:1.8,
    opacity:-1,
})
tl.from(".nav .naavpart2",{
    y:-100,
    duration:2,
    opacity:-1,
    stagger:0.2

},"-=1.9")
tl.from(".nav .navpart3",{
    y:-20,
    duration:2,
    opacity:0,

},"-=1.5")



var timeline = gsap.timeline()


timeline.from(".page1part2",{
    width:"100%",
    duration:2,
    delay:0.9,
},"anime")

timeline.from(".page1part1",{
    width:"0%",
    duration:2,
    delay:0.9,
},"anime")

timeline.from(".page1part1 h1",{
    x:-300,
    duration:2,
    opacity:-1,
    stagger:0.4,
},"-=1.6")


gsap.to(".photoss img",{
    transform:"translateX(100%)",
    repeat:-1,
    duration:3,
    ease:"none"
 })

gsap.from(".leftimg",{
              x:-130,
            duration:1.8,
            opacity:0,
            stagger:0.4,
            scrollTrigger:{
                trigger:".leftimg",
                scroller:".main",
                
                start:"top 70%",
            }
})

gsap.from(".rightimg",{
    x:130,
    duration:1.8,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:".rightimg",
        scroller:".main",
        
        start:"top 70%",
    }
})
gsap.from(".aelovera",{
        y:100,
        duration:2,
        opacity:0,
        scrollTrigger:{
            trigger:".aelovera",
            scroller:".main",
            start:"top 85%"
           
        }
    })
    
    gsap.from(".rexboxleft",{
        x:-150,
        duration:1.6,
        opacity:0,
        scrollTrigger:{
            trigger:".rexboxleft",
            scroller:".main",
            
            start:"top 85%"

        }
    })

    gsap.from(".rexboxright",{
        x:150,
        duration:1.6,
        opacity:0,
        scrollTrigger:{
            trigger:".rexboxright",
            scroller:".main",
            
            start:"top 85%"

        }
    })

    gsap.from(".cards .card1",{
        x:200,
        duration:2,
        opacity:-1,
        scrollTrigger:{
            trigger:".cards .card1",
            scroller:".main",
            
            start:"top 80%"
        }
    })
    gsap.from(".cards .card2",{
        y:200,
        duration:1.6,
        opacity:-1,
        scrollTrigger:{
            trigger:".cards .card2",
            scroller:".main",
            
         start:"top 93%",
        }

    })
    gsap.from(".cards .card3",{
        x:-200,
        duration:2,
        opacity:-1,
        scrollTrigger:{
            trigger:".cards .card3",
            scroller:".main",
            
            start:"top 70%"

        }
    })

    gsap.from(".boxleft",{
        x:-200,
        opacity:0,
        duration:2,
        scrollTrigger:{
            trigger:".boxleft",
            scroller:".main",
            
            start:"top 60%"
        }
    })
    gsap.from(".boxright",{
        x:350,
        opacity:0,
        duration:2,
        scrollTrigger:{
            trigger:".boxright",
            scroller:".main",
            
            start:"top 62%"
        }
    })

    
    gsap.from(".secondleftbox",{
        x:-200,
        opacity:0,
        duration:2,
        scrollTrigger:{
            trigger:".secondleftbox",
            scroller:".main",
            
            start:"top 62%"
        }
    })


    gsap.from(".secondrightbox",{
        x:200,
        opacity:0,
        duration:2,
        scrollTrigger:{
            trigger:".secondrightbox",
            scroller:".main",
            
            start:"top 62%"
        }
    })


    gsap.from(".lastbigbox",{
        y:300,
        opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:".lastbigbox",
            scroller:".main",
            

        }
    })


gsap.to(".pageleftimg",{
   transform:"translateY(-100%)",
   duration:2,
   repeat:-1,
   ease:"none",

})

gsap.from(".pagerightimg",{
    transform:"translateY(-100%)",
    duration:2.5,
    repeat:-1,
    ease:"none",
 
 })

 const textWidth = document.querySelector('.forever').scrollWidth;

 gsap.to(".forever", {
   x: `-${textWidth}px`,
   duration: 40,
   repeat: -1,
   ease: "none",
   onRepeat: function() {
     gsap.set(this.targets(), { x: window.innerWidth });
   }
 });

        