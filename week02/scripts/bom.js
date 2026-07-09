const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.ariaLabel = 'Delete';
        li.textContent = input.value;
        list.appendChild(li);
        li.appendChild(deleteBtn);
        input.value = '';

        deleteBtn.addEventListener('click', function () {
            li.remove();
            input.focus();
        })
    } else {
        input.focus();
    }
})