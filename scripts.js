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
    title = '';
    author = '';
    pages = '';
    form.style.display = 'none';
    resetForm();
    createLibraryEntry();

    
});

class Book {
    
    constructor(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
    }
    
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
        titleBox = document.createElement('div');
        authorBox = document.createElement('div');
        pagesBox = document.createElement('div');
        readBox = document.createElement('div');
        readStatus = document.createElement('div');
        toggleBtnContainer = document.createElement('div');
        titleBox.classList.add('tile-container');
        authorBox.classList.add('tile-container');
        pagesBox.classList.add('tile-container');
        readBox.classList.add('read-box');
        readBox.setAttribute('id', `readBox${i}`)
        toggleReadBtn = document.createElement('button');
        toggleReadBtn.classList.add('book-btn');
        toggleReadBtn.setAttribute('id', 'toggleBtn');
        toggleReadBtn.setAttribute('type', 'button');
        deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('id', 'deleteBtn');
        deleteBtn.classList.add('book-btn');
        readBox.appendChild(toggleReadBtn);
        libraryContainer.appendChild(tile);
        tile.classList.add('book');
        tile.appendChild(titleBox);
        tile.appendChild(authorBox);
        tile.appendChild(pagesBox);
        tile.appendChild(readBox);
        tile.appendChild(deleteBtn);
        deleteBtn.textContent = 'Delete';
        toggleReadBtn.textContent = "Read?"
        titleBox.textContent = (myLibrary[i].title);
        authorBox.textContent = (myLibrary[i].author);
        pagesBox.textContent = (myLibrary[i].pages);
        readStatus.textContent = (myLibrary[i].finished);

        deleteBtn.addEventListener('click', deleteTile, false)

        toggleReadBtn.addEventListener('click', toggleReadStatus, false);


    }
}

function deleteTile(e) {
    this.parentNode.remove();
    myLibrary.splice(myLibrary.indexOf(this.parentNode, 1));
}

function toggleReadStatus(e) {
    
    if(this.textContent === 'Read') {
        this.textContent = 'Not read';
    } else {
        this.textContent = 'Read';
    }
}


