function textAnimation(element) {
    const textTl = gsap.timeline();
    textTl.from(element, {
        duration: .8,
        y: -120,
        stagger: .2,
        ease: "power4.out",
        opacity: 1,
        scale: .9
    })
}

export{textAnimation}