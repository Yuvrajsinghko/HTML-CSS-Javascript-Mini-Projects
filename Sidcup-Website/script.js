let crsr = document.querySelector("#cursor");
let crsrBg = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (event) {
  crsr.style.left = event.x + "px";
  crsr.style.top = event.y + "px";
  crsrBg.style.left = event.x - 250 + "px";
  crsrBg.style.top = event.y - 250 + "px";
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
    markers: true,
    start: "top -30%",
    end: "top -70%",
    scrub: 2,
  },
});
