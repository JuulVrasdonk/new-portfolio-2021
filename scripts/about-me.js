// ************* Custom cursor ************* //


const cursor = document.querySelector('.cursor');
const cursorIcon = document.querySelector('.cursoricon')
const cursorBorder = document.querySelector('.cursorborder')

gsap.set(cursor, {
  xPercent: -10,
  yPercent: -33
});

// window.addEventListener("mousemove", moveCursor);

// function moveCursor(e) {
//   gsap.to(cursor, {
//     x: e.clientX,
//     y: e.clientY,
//     ease: Power0.easeNone
//   });
// }


// document.addEventListener('mousemove', e => {
//         cursor.setAttribute("style", "top: "+(e.pageY - 16)+"px; left: "+(e.pageX - 16)+"px;")
//   })

document.body.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});

window.addEventListener('scroll', function() {
  document.querySelector(".fade").classList.add('invisible');
  document.querySelector(".cursor-text").classList.add('invisible');
}) 

document.addEventListener('mousemove', function() {
  document.querySelector(".fade").classList.remove('invisible');
  document.querySelector(".cursor-text").classList.remove('invisible');
})


// ************* Hover cursor text ************* //


const aboutMeLink = document.querySelector(".about-me-link");


aboutMeLink.addEventListener("mouseover", function (){
    document.querySelector(".cursor-text").textContent = "- Me, Mont Blanc, France.";
    document.querySelector(".cursor-text").classList.add('text-fade-in')
  });
  
  function removeText() {
    document.querySelector(".cursor-text").textContent = " ";
    document.querySelector(".cursor-text").classList.remove('text-fade-in')
  }
  
  aboutMeLink.addEventListener("mouseleave", removeText);


// ************* Clickable cursor ************* //

function clickableCursor () {
  aboutMeLink.addEventListener("mouseover", function (){
    cursorBorder.classList.add('clickable')
  });
  
  aboutMeLink.addEventListener("mouseleave", function (){
    cursorBorder.classList.remove('clickable')
  });

  function clickable() {
  cursorBorder.classList.add('clickable')
  }
}
