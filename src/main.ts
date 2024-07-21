import './style.css'
import whiteTeaSet from '/images/white_tea_set.jpeg';
import whiteTeaSet2 from '/images/white_tea_set_2.jpeg';
import pouringHotWaterInCup from '/images/pouring_hot_water_in_cup.jpeg';
import blueTeaSet from '/images/blue_tea_set.jpeg';
import Lenis from 'lenis'
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()
// const lenis = new Lenis({
//   lerp: 0.1,
//   smooth: true,
// });
// const scrollFn = () => {
// 	lenis.raf();
// 	requestAnimationFrame(scrollFn);
// };
// requestAnimationFrame(scrollFn);

lenis.on('scroll', (e: any) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

const buildSection = (imageSrc: string) => {
  const image = document.createElement('img');
  image.src = imageSrc;
  const section = document.createElement('div');
  section.className = "section center-content";
  section.appendChild(image);
  return [section, image];
}

const allImages = [
  whiteTeaSet,
  whiteTeaSet2,
  pouringHotWaterInCup,
  blueTeaSet,
];

const app = document.querySelector<HTMLDivElement>('#app')!;

for (let imageSrc of allImages) {
  const [section, image] = buildSection(imageSrc);
  app.appendChild(section);

  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      scrub: true,
      pin: true,
    }
  })

    .from(image, {
      ease: 'none',
      scale: 0.5,
      borderRadius: '50%'
    });
}

