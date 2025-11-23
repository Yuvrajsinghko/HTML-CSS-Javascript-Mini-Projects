let videocom = document.querySelector("#video-container");

let playbtn = document.querySelector("#play");
videocom.addEventListener("mouseenter", () => {
  gsap.to(playbtn, {
    scale: 1,
    opacity: 1,
  });
});
videocom.addEventListener("mouseleave", () => {
  gsap.to(playbtn, {
    scale: 0,
    opacity: 0,
  });
});

videocom.addEventListener("mousemove", (event) => {
  gsap.to(playbtn, {
    left:event.x,
    top:event.y

});
});
