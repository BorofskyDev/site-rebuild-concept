import './style.scss'
import './styles/navbar/navbar.scss'
import './styles/navbar/animation.scss'
import './styles/navbar/media.scss'


// STICKY NAVBAR

const header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});