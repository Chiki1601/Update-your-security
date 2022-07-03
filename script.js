var 
key = document.getElementById('key')
safe = document.getElementById('safe')
safeDoor = document.getElementById('safe-door')
lock = document.getElementById('lock')
badgeGroup = document.getElementById('badge-group')
badge = document.getElementById('badge')
blast = document.getElementById('blast')
doorlight = document.getElementById('door-light')
shade = document.getElementById('shade')
hinge = document.getElementById('hinge')


gsap.set(blast, { scale: 0, transformOrigin: "50% 50%"})
gsap.set(doorlight, { opacity: 0})
gsap.set(badge, { scale: 0.8, transformOrigin: "50% 50%"})

keyTlm = new gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.2});
blastTlm = new gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1});

keyTlm.to(key, { rotate: -190, transformOrigin: "50% 50%", y: 250, x: -150, fill: 'FFF100'})
keyTlm.to(badgeGroup, { x: -140, y: 80, scale: 1.5, ease: 'elastic.inOut(1,1)' }, 0)
keyTlm.to(lock, { transformOrigin: "50% 50%", rotate: 28, scale: 0.65, x: 205, y: -20 }, 0)
keyTlm.to(safe, { scale: 0.45, transformOrigin: "50% 50%", x: 120, y: 90, ease: 'elastic.out(1,1)' }, 0)


keyTlm.to(key, { x: 10, y: 180, ease: 'elastic.inOut(1,1)' })
keyTlm.to(badge.firstElementChild, { fill:'FFF100', scale: 0.94, transformOrigin: "50% 50%" },'-=0.8')
keyTlm.to(badge, { scale: 0.8 }, '-=0.5')
keyTlm.to(badge.firstElementChild, { scale: 1.1, transformOrigin: "50% 50%" }, '-=0.1')
keyTlm.to(badge.lastElementChild, { fill: '#44A0FF'}, '-=0.5')
keyTlm.to(blast, { scale: 1, transformOrigin: "50% 50%"}, '-=0.4')
keyTlm.to(blast, { opacity: 0, transformOrigin: "50% 50%"}, '-=0.3')

keyTlm.to(safeDoor, {  transformOrigin: "100% 100%", scaleX: 0.5 }, '-=0.5')
keyTlm.to(shade, { x: 72 }, '-=0.5')
keyTlm.to('#safe-beepers > * > *', {  fill: 'lightgreen', stagger: 0.1 }, "-=1.5")
keyTlm.to(hinge, {  transformOrigin: "50% 33%", rotate: 90 }, '-=1')
keyTlm.to(doorlight, {opacity: 1}, '-=0.5')
keyTlm.to(lock.children, {fill: 'FFF100'}, '-=1.2')
keyTlm.to(lock.firstElementChild, { y: -20, x: -10 }, 1)