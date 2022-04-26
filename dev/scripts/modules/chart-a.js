// import $ from "jquery";
import gsap from "gsap";
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);


class chartA {
    constructor() {
        this.pieChartA();
    }

    pieChartA() {
        gsap.set(".chart-a circle", {
            drawSVG: 0,
            rotation: 0,
            transformOrigin: "center center"
        });
          
        gsap
        .timeline({
            defaults: { duration: 1, ease: "sine.inOut" },
        })
          
        .to("#target1", { drawSVG: "0% 16%" })
        .to("#target2", { drawSVG: "16% 100%" }, 0)
        .to("#target3", { drawSVG: "0% 19%" }, 0)
        .to("#target4", { drawSVG: "19% 100%" }, 0);

        const anim = gsap.to(".piecharta", {
            drawSVG: 0,
            rotation: 213,
            transformOrigin: "center center",
            duration: 1.5
        });
        
        ScrollTrigger.create({
            trigger: ".piecharta",
            animation: anim,
        });


        // Chart A Right Panel
        const rightPanel = gsap.to(".chart-a__panel__right", {
            x: -100,
            rotation: 0,
            duration: 1.5
        });
        
        ScrollTrigger.create({
            trigger: ".chart-a__panel__right",
            animation: rightPanel,
        });


        
        // Counter First
        var startCount = 0;
        var numb = {var:startCount};

        gsap.timeline({
            scrollTrigger: {
                trigger: "#counterfirst",
            }
        })
        .set(numb, {var: 0})
        .to(numb, {var: 81, duration: 2, ease:"power2.out", onUpdate: changeNumberFirst})


        function changeNumberFirst() {
            counterfirst.innerHTML = (numb.var).toFixed();
        }


        // Counter Second
        gsap.timeline({
            scrollTrigger: {
                trigger: "#countersecond",
            }
        })
        .set(numb, {var: 0})
        .to(numb, {var: 84, duration: 2, ease:"power2.out", onUpdate: changeNumberSecond})


        function changeNumberSecond() {
            countersecond.innerHTML = (numb.var).toFixed();
        }
        
        


    }
   
}

export default chartA;
new chartA();

