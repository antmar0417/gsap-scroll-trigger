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
