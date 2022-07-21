const newBtn = document.getElementById('new-btn');
const form = document.getElementById('form');
const addBtn = document.getElementById('add-book');

newBtn.addEventListener('click', () => form.style.display = 'block');

addBtn.addEventListener('click', addBookToLibrary);

class Book {
    constructor(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
    }
}

let myLibrary = []
let newBook;

function addBookToLibrary() {
    let newBook = new Book(title, author, pages, finished);
    myLibrary.push(newBook);
    console.log(myLibrary);
}
