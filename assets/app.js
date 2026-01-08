const toggleBtn = document.querySelector('.menu-toggle');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', () => {
  links.classList.toggle('active');
});