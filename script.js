const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const navItemEls = document.querySelectorAll('.nav__item');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open');
});

navItemEls.forEach(navItemEl => {
  navItemEl.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger--open');
  });
});

const counters = document.querySelectorAll("#value");
const animationSpeed = 300;

counters.forEach((count) => {
  const incrementCount = () => {
    const finalValue = Number(count.getAttribute("data-target"));
    const currentCount = Number(count.innerText);

    const incrementValue = finalValue / animationSpeed;

    if (currentCount < finalValue) {
      count.innerText = Math.ceil(currentCount + incrementValue);
      setTimeout(incrementCount, 1);
    } else {
      currentCount.innerText = finalValue;
    }
  };

  incrementCount();
});






let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


