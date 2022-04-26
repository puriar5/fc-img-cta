// import $ from "jquery";
import gsap from "gsap";
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);


class chartB {
    constructor() {
        this.pieChartB();
    }

    pieChartB() {
        gsap.set(".chart-b circle", {
            drawSVG: 0,
            rotation: 0,
            duration: 1.5,
            transformOrigin: "center center"
        });
          
        gsap
        .timeline({
            defaults: { duration: 1, ease: "sine.inOut" },
        })

        .to("#target6", { drawSVG: "0% 58%" })
        .to("#target7", { drawSVG: "58% 100%" }, 0)
        .to("#target8", { drawSVG: "0% 29%" }, 0)
        .to("#target9", { drawSVG: "29% 100%" }, 0);

        const anim = gsap.to(".piechartb", {
            drawSVG: 0,
            rotation: 60,
            transformOrigin: "center center",
            duration: 1.5
        });
        
        ScrollTrigger.create({
            trigger: ".piechartb",
            animation: anim,
        });


        // Chart B Right Panel
        const rightPanel = gsap.to(".chart-b__panel__right", {
            x: -100,
            rotation: 0,
            duration: 1.5
        });
        
        ScrollTrigger.create({
            trigger: ".chart-b__panel__right",
            animation: rightPanel,
        });



        // Counter 1
        var startCount = 0;
        var numb = {var:startCount};

        gsap.timeline({
            scrollTrigger: {
                trigger: "#counter",
            }
        })
        .set(numb, {var: 0})
        .to(numb, {var: 35, duration: 2, ease:"power2.out", onUpdate: changeNumber})


        function changeNumber() {
            counter.innerHTML = (numb.var).toFixed();
        }


        // Counter 2
        gsap.timeline({
            scrollTrigger: {
                trigger: "#countertwo",
            }
        })
        .set(numb, {var: 0})
        .to(numb, {var: 70, duration: 2, ease:"power2.out", onUpdate: changeNumberTwo})


        function changeNumberTwo() {
            countertwo.innerHTML = (numb.var).toFixed();
        }


        // Counter 3
        gsap.timeline({
            scrollTrigger: {
                trigger: "#counterthree",
            }
        })
        .set(numb, {var: 0})
        .to(numb, {var: 73, duration: 2, ease:"power2.out", onUpdate: changeNumberThree})


        function changeNumberThree() {
            counterthree.innerHTML = (numb.var).toFixed();
        }


  
    }





   
}

export default chartB;
new chartB();

