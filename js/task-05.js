const inputRef = document.querySelector('#name-input');
const textToShow = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
    textToShow.textContent = event.currentTarget.value;
}
)