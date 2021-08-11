function changeTitle() {
  const message = 'Wróć na 3D3Miasto!';
  let original;

  window.addEventListener('focus', function () {
    if (original) {
      document.title = original;
    }
  })

  window.addEventListener('blur', function () {
    const title = document.title;
    if (title != message) {
      original = title;
    }
    document.title = message;
  })
}

function showHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navigation');
  const navigationLinks = document.querySelectorAll('.navigation__link');

  const handleClick = function () {
    hamburger.classList.toggle('hamburger--active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
    nav.classList.toggle('navigation--active');
  }

  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function () {
      hamburger.classList.remove('hamburger--active');
      nav.classList.remove('navigation--active');
    })
  }

  hamburger.addEventListener('click', handleClick);
}

function showAnswer() {
  const buttons = document.querySelectorAll('.path__btn');
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      let panel = this.nextElementSibling;

      if(panel.style.display === 'block') {
        panel.style.display = 'none';
        this.setAttribute('aria-expanded', 'false');
        this.firstElementChild.classList.remove('fa-caret-up');
        this.firstElementChild.classList.add('fa-caret-down');
      } else {
        panel.style.display = 'block';
        this.setAttribute('aria-expanded', 'true');
        this.firstElementChild.classList.add('fa-caret-up');
      }
    })
  }
}

function showPhoto() {
  const photos = document.querySelectorAll(".photo");

  for (let i = 0; i < photos.length; i++) {
    photos[i].addEventListener("click", function(e) {
      e.preventDefault();
      const modal = this.querySelector(".modal");

      this.querySelector(".modal").classList.toggle("show-modal");

      window.addEventListener("click", function(e) {
        if (e.target == modal) {
          modal.classList.toggle("show-modal");
        }
      })
    })
  }
}

const init = function () {
  changeTitle();
  showHamburgerMenu();
  showAnswer();
  showPhoto();
};

document.addEventListener('DOMContentLoaded', init);