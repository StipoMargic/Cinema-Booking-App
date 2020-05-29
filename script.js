const container = document.querySelector('.cinema-container'),
  seats = document.querySelectorAll('.row .seat:not(.taken)'),
  count = document.querySelector('#count'),
  total = document.querySelector('#total'),
  movieSelect = document.querySelector('#movie');
let ticketPrice = +movieSelect.value;

const selectedCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  total.innerText = selectedSeats.length * ticketPrice;
  count.innerText = selectedSeats.length;
};

container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('taken')
  ) {
    e.target.classList.toggle('selected');
  }
  selectedCount();
});

movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
});
