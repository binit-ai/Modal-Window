'use strict';

// Storing the classes in variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const modalShowBtns = document.querySelectorAll('.show-modal');

//Function to hide the modal window
function hidemodal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Function to display the modal window
function showmodal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < modalShowBtns.length; i++)
  modalShowBtns[i].addEventListener('click', showmodal);

closeBtn.addEventListener('click', hidemodal);

overlay.addEventListener('click', hidemodal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    hidemodal();
});
