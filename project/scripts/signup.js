const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// Nav Menu
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});