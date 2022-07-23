const newBtn = document.getElementById('new-btn');
const form = document.getElementById('form');
const addBtn = document.getElementById('add-book');
let libraryContainer = document.getElementById('library-container');
let deleteBtn;
let toggleReadBtn;
let tile;
let readBox;

newBtn.addEventListener('click', () => form.style.display = 'block');

addBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const books = document.querySelectorAll('.book')

    books.forEach(book => libraryContainer.removeChild(book));

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let finished = document.getElementById('finished');

    if (finished.checked === true) {
        finished.value = 'Read';
    } else {
        finished.value = 'Not read';
    }; 
    finished = finished.value;
    const newBook = new Book(title, author, pages, finished)
    myLibrary.push(newBook);
    console.log(myLibrary);
    title = '';
    author = '';
    pages = '';
    form.style.display = 'none';
    resetForm();
    createLibraryEntry();

    
});

function Book(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
    
};

let myLibrary = []


function resetForm() {
    form.reset();
}

function createLibraryEntry() {
    let titleBox;
    let authorBox;
    let pagesBox;
    for(let i = 0; i < myLibrary.length; i++) {
        tile = document.createElement('div');
        tile.setAttribute('id', `book'${i}`)
        titleBox = document.createElement('p');
        authorBox = document.createElement('p');
        pagesBox = document.createElement('p');
        readBox = document.createElement('p');
        titleBox.classList.add('tile-container');
        authorBox.classList.add('tile-container');
        pagesBox.classList.add('tile-container');
        readBox.classList.add('tile-container');
        toggleReadBtn = document.createElement('button');
        toggleReadBtn.classList.add('book-btn');
        deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('id', 'deleteBtn');
        deleteBtn.classList.add('book-btn');
        libraryContainer.appendChild(tile);
        tile.classList.add('book');
        tile.appendChild(titleBox);
        tile.appendChild(authorBox);
        tile.appendChild(pagesBox);
        tile.appendChild(readBox);
        tile.appendChild(toggleReadBtn);
        tile.appendChild(deleteBtn);
        deleteBtn.textContent = 'Delete';
        toggleReadBtn.textContent = "Read/ Not Yet"
        titleBox.textContent = (myLibrary[i].title);
        authorBox.textContent = (myLibrary[i].author);
        pagesBox.textContent = (myLibrary[i].pages);
        readBox.textContent = (myLibrary[i].finished);

        deleteBtn.addEventListener('click', deleteTile, false)

        toggleReadBtn.addEventListener('click', toggleReadStatus, false);

    }
}

function deleteTile(e) {
    this.parentNode.remove();
    myLibrary.splice(myLibrary.indexOf(this.parentNode, 1));
}

function toggleReadStatus(e) {
    
    if(readBox.textContent === 'Read') {
        readBox.textContent = 'Not read';
    } else {
        readBox.textContent = 'Read';
    }
}


