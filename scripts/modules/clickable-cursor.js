import {aboutMeLink, cursorBorder,  cursorDot} from "./variables.js";

export default function clickableCursor () {
    aboutMeLink.addEventListener("mouseover",() => {
        cursorBorder.classList.add('clickable');
        cursorDot.classList.add('clickabledot');
    });
    aboutMeLink.addEventListener("mouseleave",() => {
        cursorBorder.classList.remove('clickable');
        cursorDot.classList.remove('clickabledot');

    });
}

