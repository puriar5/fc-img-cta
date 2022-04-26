// import $ from "jquery";
import gsap from "gsap";
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);


class chartC {
    constructor() {
        this.pieChartC();
    }

    pieChartC() {
        gsap.set(".chart-c circle", {
            drawSVG: 0,
            rotation: 0,
            duration: 1.5,
            transformOrigin: "center center"
        });
          
        gsap
        .timeline({
            defaults: { duration: 1, ease: "sine.inOut" },
        })

        .to("#target10", { drawSVG: "0% 22%" })
        .to("#target11", { drawSVG: "22% 100%" }, 0)

        const anim = gsap.to(".piechartc", {
            drawSVG: 0,
            rotation: 187,
            transformOrigin: "center center",
            duration: 1.5
        });
        
        ScrollTrigger.create({
            trigger: ".piechartc",
            animation: anim,
        });


        // Counter Third
        var startCount = 0;
        var numb = {var:startCount};

        gsap.timeline({
            scrollTrigger: {
                trigger: "#counterthird",
            }
        })
        .set(numb, {var: 0})
        .to(numb, {var: 54, duration: 2, ease:"power2.out", onUpdate: changeNumberThird})


        function changeNumberThird() {
            counterthird.innerHTML = (numb.var).toFixed();
        }


        // Counter Fourth
        gsap.timeline({
            scrollTrigger: {
                trigger: "#counterfourth",
            }
        })
        .set(numb, {var: 0})
        .to(numb, {var: 89, duration: 2, ease:"power2.out", onUpdate: changeNumberFourth})


        function changeNumberFourth() {
            counterfourth.innerHTML = (numb.var).toFixed();
        }


  
    }

}

export default chartC;
new chartC();

