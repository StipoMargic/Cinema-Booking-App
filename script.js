const container = document.querySelector('.cinema-container'),
  seats = document.querySelectorAll('.row .seat:not(.taken)'),
  count = document.querySelector('#count'),
  total = document.querySelector('#total'),
  movieSelect = document.querySelector('#movie'),
  ticketPrice = +movieSelect.nodeValue;

container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('taken')
  ) {
    e.target.classList.toggle('selected');
  }
});
