const newBtn = document.getElementById('new-btn');
const form = document.getElementById('form');
const addBtn = document.getElementById('add-book');

newBtn.addEventListener('click', () => form.style.display = 'block');

addBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let finished = document.getElementById('finished');

    if (finished.checked === true) {
        finished.value = 'read';
    } else {
        finished.value = 'not read';
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
});

function Book(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
    
};

let myLibrary = []

/*function addBookToLibrary() {
    let newBook = new Book(title, author, pages, finished);
    myLibrary.push(newBook);
    console.log(myLibrary);
}*/

/*function addBook() {
   
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let finished = document.getElementById('finished').value;

    const newBook = new Book(title, author, pages, finished)
    myLibrary.push(newBook);
    console.log(myLibrary);
}*/

function resetForm() {
    form.reset();
}
