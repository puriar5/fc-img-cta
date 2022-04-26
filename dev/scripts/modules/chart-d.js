// import $ from "jquery";
import gsap from "gsap";
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);


class chartD {
    constructor() {
        this.pieChartD();
    }

    pieChartD() {
        gsap.set(".column-text-fixed-scroll circle", {
            drawSVG: 0,
            rotation: 0,
            transformOrigin: "center center"
        });
          
        gsap
        .timeline({
            defaults: { duration: 1, ease: "sine.inOut" },
        })
          
        .to("#targetd", { drawSVG: "0% 35%" })
        .to("#targete", { drawSVG: "35% 100%" }, 0)

        const anim = gsap.to(".piechartd", {
            drawSVG: 0,
            rotation: 90,
            transformOrigin: "center center",
            duration: 1.5
        });
        
        ScrollTrigger.create({
            trigger: ".piechartd",
            animation: anim,
        });

        
        // Counter Fourth
        var startCount = 0;
        var numb = {var:startCount};

        gsap.timeline({
            scrollTrigger: {
                trigger: "#countercolscroll",
            }
        })
        .set(numb, {var: 0})
        .to(numb, {var: 65, duration: 2, ease:"power2.out", onUpdate: changeNumberFourth})


        function changeNumberFourth() {
            countercolscroll.innerHTML = (numb.var).toFixed();
        }


    }
   
}

export default chartD;
new chartD();

