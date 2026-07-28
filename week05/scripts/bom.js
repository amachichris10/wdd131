const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter((item) => item != chapter)
    setChapterList()
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray))
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.ariaLabel = 'Delete';
    li.textContent = item;
    list.appendChild(li);
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
        deleteChapter(item)
    })
}

button.addEventListener('click', function () {

    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus()





    } else {
        input.focus();
    }
})