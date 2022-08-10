'use strict';

window.addEventListener("load", function() {
    setTimeout(function() {
        openModal();
      }, 1000);
})

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const win = document.getElementsByTagName("BODY")[0];

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    win.classList.add('overflow_block');
  };
  
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    win.classList.add('overflow_open');
  };

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

