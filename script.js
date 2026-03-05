tl=gsap.timeline({defaults: {duration: 1}})

tl.to(".curtain", {
  opacity: 0,
  duration: 1.1,
  ease: "power2.inOut",
})
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

tl.from(".box3", {
  y: 200,
  opacity: 0,
  duration: 0.6,
})

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