import "./style.css";


const imageSources = [
  '/image4.png', '/image2.png', '/image3.png',
  '/image1.png', '/image5.png', '/image6.png',
  '/image7.png', '/image8.png', '/image9.png',
  '/image10.png', '/image11.png', '/image1.png',
  '/image3.png', '/image4.png', '/image5.png',
  '/image2.png', '/image7.png', '/image9.png'
]

const COLUMN_BASE = [7,44,74];
const CLUSTER_GAP=720
const COLUMN_STAGGER=[20,160,80]

const pupil = document.getElementById("pupil");
const eyeContainer = document.getElementById("eye");

if (pupil && eyeContainer) {
  window.addEventListener("mousemove", (e) => {
    const rect = eyeContainer.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    const deltaX = e.clientX - eyeCenterX;
    const deltaY = e.clientY - eyeCenterY;

    const dist = Math.hypot(deltaX,deltaY);

    const maxMove=6;
    const moveX = dist>0?(deltaX/dist)*Math.min(dist*0.05,maxMove):0
    const moveY = dist>0?(deltaY/dist)*Math.min(dist*0.05,maxMove):0


    pupil.style.transform=`translate(${moveX}px,${moveY}px)`

    
  });
}
