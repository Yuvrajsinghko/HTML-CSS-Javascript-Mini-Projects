import { animate, stagger } from "animejs";

const box = document.querySelector(".box");
box.addEventListener("click", () => {
  animate(".box", {
    x: "-=50",
    duration: 2000,
    ease: "outExpo",
  });
});

animate(".ball", {
  y: { from: 100, to: 300 },
  duration: 8000,
  width: "150",
  loop: 4,
  height: "150",
});

// animate('.box', {
//   opacity: {
//     to: 1,
//     duration: 400
//   },
//   x: {
//     to: [100,300],
//     duration: 5000,
//     ease: 'outElastic'
//   },
//   delay:stagger(100, { from: 'last' })// fallback used only if a property doesn't specify its own
// });

animate(".item",{
  opacity:{
    from:0,
    to:1,
    // duration:2000
  },
  x:[20,0],
  delay:stagger(400,{from:"random"}),
  ease: 'outQuad'

})
