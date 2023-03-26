const search = document.querySelector('.search');
const button = document.querySelector('.button');
const input = document.querySelector('.input');

// Adding an Event Listener to the button
button.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})