function videoConAnimation() {
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
      left: event.x-80,
      top: event.y-80,
    });
  });
}

videoConAnimation();

function loadingAnimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 #video-container", {
    y:100,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
    
  });
}
loadingAnimation();
