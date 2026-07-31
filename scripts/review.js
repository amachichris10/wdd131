let reviews = Number(localStorage.getItem('reviews')) || 0

reviews += 1

localStorage.setItem('reviews', JSON.stringify(reviews))