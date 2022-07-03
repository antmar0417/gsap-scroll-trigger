const doubleDownDiv = document.querySelector(".double-down");
const doubleDownIcon = document.getElementById("down");

doubleDownDiv.addEventListener("mouseover", () => {
  doubleDownIcon.style.fontSize = "300%";
});

doubleDownDiv.addEventListener("mouseout", () => {
  doubleDownIcon.style.fontSize = "100%";
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".dark",
  },
});

tl.from("img", { x: -200, opacity: 0, duration: 1.5 }, "+=0.5").from(
  ".content",
  { y: 300, opacity: 0, duration: 1.5 },
  "-=1"
);
