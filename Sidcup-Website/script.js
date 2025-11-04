let crsr = document.querySelector("#cursor");
let crsrBg = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (event) {
  crsr.style.left = event.x+30 + "px";
  crsr.style.top = event.y + "px";
  crsrBg.style.left = event.x - 250 + "px";
  crsrBg.style.top = event.y - 250 + "px";
});


let h4all =  document.querySelectorAll("#nav h4");
h4all.forEach(function(a){
  a.addEventListener("mouseenter",function(){
    crsr.style.scale=3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor ="transparent";
  });
  a.addEventListener("mouseleave",function(){
    crsr.style.scale=1;
    crsr.style.border = "0px solid #95c11e";
    crsr.style.backgroundColor ="#95c11e";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    
    start: "top -30%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.from("#about-us img,#about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    markers:true,
    start:"top 60%",
    end:"top 58%",
    scrub:3
  }
  
});
