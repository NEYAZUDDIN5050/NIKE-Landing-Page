function timelineOne() {
    gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        scrub: 1,
        markers: true, // Remove this after testing
        pin: true,
        end:"bottom -250%"
    }
});

// **Corrected Animations**
tl.to("#circle #btm img", {
    scale:1,
    rotate: "-180deg",
    duration: 1,
    stagger: .1,
    ease: Power1
}, "hello")

.to("#circle #top img", {
    scale:1,
    duration: 1,
    stagger: .1,
    ease: Power1
}, "hello")

.to("#cimg img", {
    scale: 0, // Removed quotes around 0
    duration: 1,
    stagger: 0.1,
    ease: Power1
}, "hello")

.to("#centerimg h5", {
    opacity: 0,
    stagger: 0.1, // Fixed typo (staggerr → stagger)
    ease: Power1
}, "hello")

.to("#circle", {
    scale: 0.6,
    ease: Power1
}, "hello")

.to("#overlay #gallery",{
    bottom:"-50%",
    ease: Power1
})


.to("#gola", {
    top:"150%",
    scale:2,
    ease: Power1,
    opacity:0
}, "hello")

.to("#gola", {
    opacity:0,
    ease: Power1
})

.to("#overlay>h1", {
    bottom: "-50%",
    ease: Power1
}, "hello")

.to("#smcircle", {
    scale: 0,
    ease: Power1
}, "hello2")

.to("#circle", {
    scale: 0,
    ease: Power1
}, "hello2")

.to("#overlay #BF", {
    rotation:0,
    bottom:"2%",
    ease: Power1,
}, "hello")

}

function timelineTwo() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            scrub: 1,
            start: "top top",
            markers: true, // Fixed `marker: true` to `markers: true`
            end: "bottom -150%",
            pin: true
        }
    });

    tl2.to(".circle", {
        top: "50%",
        stagger: 0.1,
        duration: 1,
        ease: "power1.out"
    })
    .to(".circle", {
        left: "50%",
        stagger: 0.1,
        duration: 1,
        ease: "power1.out"
    })
    .to(".pi", {
        scale: 10,
        stagger: 0.1,
        ease: "power1.out"
    })
    .to("#stop #gradient", {
        left:"-150%",
        duration:8,
        ease:Power1
    })
    .to("#sbtm #one", {
        opacity:2,
        ease:Power1,
        duration:2
    },"a")
    .to("#sbtm #two",{
        opacity:1,
        ease:"Power1.out"
    },)
}

// **Ensure elements are positioned correctly in CSS**
// `.circle` and `.pi` must have `position: absolute` or `fixed` to animate `top` and `left`

timelineOne();
timelineTwo();