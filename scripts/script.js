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

const cursor = document.querySelector('.cursor');
      document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 16)+"px; left: "+(e.pageX - 16)+"px;")
        document.querySelector(".fade").classList.remove('invisible');
  })



window.onscroll = function() {
  scrolling();
};
function scrolling() {
      document.querySelector(".fade").classList.add('invisible');
      // cursor.classList.remove('transition')
}
