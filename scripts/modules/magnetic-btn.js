import {magnetic} from "./variables.js";

export default function magneticBtn () {
    magnetic.forEach((link) => {
      link.addEventListener("mousemove", function(e){
        const position = link.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        link.children[0].style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
      });
    });

    magnetic.forEach((link) => {
      link.addEventListener("mouseout", function(e){
        link.children[0].style.transform = "translate(0px, 0px)";
      });
    });
}