import "./style.css";


import {gsap, ScrollTrigger, MotionPathPlugin} from "../clipboard-landing-page/node_modules/gsap/all.js";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.from("#header > *", {scrollTrigger: "#header > *", duration: 1.5, opacity: 0, y: -20, stagger: 0.3});
gsap.from("#computer > *", {scrollTrigger: "#computer > *", duration: 1.5, opacity: 0, y: -20, stagger: 0.3});
gsap.from("#device > *", {scrollTrigger: "#device > *", duration: 1.5, opacity: 0, y: -20, stagger: 0.3});
gsap.from("#brand > *", {scrollTrigger: "#brand > *", duration: 1.5, opacity: 0, y: -20, stagger: 0.3});
gsap.from("#starup-brand > *", {scrollTrigger: "#starup-brand > *", duration: 1.5, opacity: 0, y: -20, stagger: 0.3});
gsap.from("#last-cta > *", {scrollTrigger: "#last-cta > *", duration: 1.5, opacity: 0, y: -20, stagger: 0.3});

console.log("haloo, sya depploty lohh dsdsds");
