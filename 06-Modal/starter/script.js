'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

for (const btnOpenModalElement of btnOpenModal) {
  btnOpenModalElement.addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// add event listeners to the input element
document.addEventListener('keydown', (e) => {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal();
  }
});


