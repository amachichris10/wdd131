const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const sign = document.querySelector("#sign")
let count = Number(localStorage.getItem("count") || 0)

// Nav Menu
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

count += 1

localStorage.setItem("count", JSON.stringify(count))

sign.innerHTML = `Thank you! You've sent your sign up request #${count}`

