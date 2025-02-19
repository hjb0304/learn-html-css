const btn = document.querySelector('.flip-button');
const card = document.querySelector('.card');

btn.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
});
