import { g as gsapWithCSS, S as ScrollTrigger, a as ScrollToPlugin, T as TextPlugin, F as Flip, D as Draggable, R as RoughEase, E as ExpoScaleEase, b as SlowMo, c as SplitText } from "./app.min.js";
import "./marquee.min.js";
/* empty css          */
gsapWithCSS.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  TextPlugin,
  Flip,
  Draggable,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  SplitText
);
ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
gsapWithCSS.killTweensOf(".block-working__body");
gsapWithCSS.from(".block-working__body", {
  scrollTrigger: {
    trigger: ".working",
    // контейнер, що тригерить анімацію
    start: "top 80%",
    // коли секція з'являється
    end: "bottom top",
    // поки не вийде з екрану
    toggleActions: "play none none none"
  },
  y: 100,
  opacity: 0,
  rotateX: 30,
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.7
  // затримка між елементами
});
