tl=gsap.timeline({defaults: {duration: 1}})

tl.to(".curtain", {
  opacity: 0,
  duration: 1,
  ease: "power2.inOut",
})
tl.from(".navbar", {
  opacity: 0,
  y: -20,
  duration: 0.8,
},"<0.5" )
tl.from(".home h1", {
  y: 50,
  opacity: 0,
  duration: 0.8,
},"<0.3" )

tl.from(".home p", {
  y: 50,
  opacity: 0,
  duration: 0.8,
},"<0.3" )

tl.from(".box1", {
  x: 150,
  opacity: 0,
  duration: 0.7,

},"<0.3" )
tl.from(".box2", {
  y: -180,
  opacity: 0,
  duration: 0.5,
},"<0.4" )
/*
tl.from(".box3", {
  y: 200,
  opacity: 0,
  duration: 0.6,
})
*/
tl.from(".box4", {
  x: -150,
  y: 150,
  opacity: 0,
  duration: 0.8,
},"<0.3" )
tl.from(".box5", {
  x: 150,
  y: -150,
  opacity: 0,
    duration: 0.8,
},"<0.4" )

gsap.to(".box1 img", {
  y: 20,
  rotation: -2,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
})

gsap.to(".box2 img", {
  y: -20,
  rotation: -5,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
})
/*
gsap.to(".box3 img", {
  x: 15,
  duration: 5,
  repeat: -1,
  yoyo: true
})
*/
gsap.to(".box4 img", {
  rotation: 5,
  duration: 4,
  repeat: -1,
  yoyo: true
})

gsap.to(".box5 img", {
  rotation: -7,
  duration: 4,
  repeat: -1,
  yoyo: true
})
/*
document.addEventListener("mousemove", (e) => {

gsap.to(".box1", {
    x: (e.clientX - window.innerWidth/2) * 0.02
})

gsap.to(".box2", {
    x: (e.clientX - window.innerWidth/2) * -0.02
})

})
*/

const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const navbar = document.querySelector(".navbar")
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    navbar.classList.toggle("active")
})