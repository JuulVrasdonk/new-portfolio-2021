// ************* Image reveal on hover ************* //


if (screen.width < 800) {
    // uit met de buis
  } else {
    // get case items to hover over
    // get empty img tag
    const caseItems = document.querySelectorAll('.myworkitem');
    const image = document.querySelector('.placeholder-img');
    const body = document.querySelector('.body');
  
    // iterate on all case items with forEach
    caseItems.forEach((element) => {
      // when mouse enters case item, add image to empty img tag
      element.addEventListener('mouseenter', (event) => {
        imgData = event.target.getAttribute('data-image')
        event.target.style.zIndex = 99
        image.setAttribute('src', imgData)
        image.style.opacity = 1
      })
  
      // set mouse position on mouse move
      element.addEventListener('mousemove', (event) => {
        const x = event.clientX - 185;
        const y = event.clientY - 225;
        image.style.left = x + 'px';
        image.style.top = y + 'px';
      })
  
      // clear everything
      element.addEventListener('mouseleave', (event) => {
        event.target.style.zIndex = 1
        image.setAttribute('src', '')
        image.style.opacity = 0
      })
    });
}


// ************* Custom cursor ************* //


const cursor = document.querySelector('.cursor');
const cursorIcon = document.querySelector('.cursoricon')
const cursorBorder = document.querySelector('.cursorborder')


document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 16)+"px; left: "+(e.pageX - 16)+"px;")
        document.querySelector(".fade").classList.remove('invisible');
        document.querySelector(".cursor-text").classList.remove('invisible');
  })
  document.addEventListener('mousemove', function() {
    document.querySelector(".fade").classList.remove('invisible');
    document.querySelector(".cursor-text").classList.remove('invisible');
  })
  

window.onscroll = function() {
  scrolling();
};
function scrolling() {
      document.querySelector(".fade").classList.add('invisible');
      document.querySelector(".cursor-text").classList.add('invisible');
}


// ************* Hover cursor text ************* //


const aboutMeLink = document.querySelector(".about-me-link");


aboutMeLink.addEventListener("mouseover", function (){
  document.querySelector(".cursor-text").textContent = "- Click to get to know me!";
  document.querySelector(".cursor-text").classList.add('text-fade-in')
});

function removeText() {
  document.querySelector(".cursor-text").textContent = " ";
  document.querySelector(".cursor-text").classList.remove('text-fade-in')
}

aboutMeLink.addEventListener("mouseleave", removeText);


// ************* Work item cursor ************* //


const workLink = document.querySelectorAll(".myworkitem");

workLink.forEach((element) => {
  element.addEventListener("mouseover", function (){
    cursorBorder.style.opacity = "0";
    cursorIcon.style.opacity = "0";
  })
})

workLink.forEach((element) => {
  element.addEventListener("mouseleave", function (){
    cursorBorder.style.opacity = "1";
    cursorIcon.style.opacity = "1";
  })
})


// ************* Clickable cursor ************* //


aboutMeLink.addEventListener("mouseover", function (){
  cursorBorder.classList.add('clickable')
});

aboutMeLink.addEventListener("mouseleave", function (){
  cursorBorder.classList.remove('clickable')
});

