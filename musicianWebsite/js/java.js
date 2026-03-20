document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.set("#wordfull", { visibility: "visible"});

   // gsap.from("#wordfull path", 2, { drawSVG: 0 });

    let tl = gsap.timeline();
    tl.from("#wordfull path", 2, { drawSVG: 0 })
    .to("#coloredfill", 1, { autoAlpha: 1 });
});