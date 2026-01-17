var leBouton = document.querySelector('.btn');
let number = document.querySelector('#counter');
let count = Number(number.textContent);
leBouton.addEventListener('click', function() {
    leBouton.classList.toggle('clicked');
    if (leBouton.classList.contains('clicked')) {
        count++;
        number.textContent = count;
    }
});