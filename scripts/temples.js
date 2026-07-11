const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const headerLabel = document.querySelector('#header-label');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    headerLabel.classList.toggle('open');
});