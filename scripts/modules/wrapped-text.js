import {textItems} from "./variables.js";

export default function textWrapper() {
    console.log(textItems);

    textItems.forEach(item => {
        const span = document.createElement('span');
        span.style.overflow = 'hidden';
        item.after(span);
        span.appendChild(item);
        console.log(item);
    })
};

