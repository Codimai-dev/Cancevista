const navList = document.querySelector('.nav-list');
const toggleBtn = document.querySelector('header button');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('show');
});
