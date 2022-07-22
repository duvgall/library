const newBtn = document.getElementById('new-btn');
const form = document.getElementById('form');
const addBtn = document.getElementById('add-book');
let libraryContainer = document.getElementById('library-container');
let deleteBtn;
let toggleReadBtn;
let tile;

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
    createLibraryEntry();

    
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

function createLibraryEntry() {
    let tile;
    let titleBox;
    let authorBox;
    let pagesBox;
    let readBox;
    let deleteBtn;
    for(let i = 0; i < myLibrary.length; i++) {
        tile = document.createElement('div');
        tile.setAttribute('id', `book'${i}`)
        titleBox = document.createElement('p');
        authorBox = document.createElement('p');
        pagesBox = document.createElement('p');
        readBox = document.createElement('p');
        toggleReadBtn = document.createElement('button');
        deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('id', 'deleteBtn');
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
        console.log(titleBox.textContent);
        console.log(authorBox.textContent);


        deleteBtn.addEventListener('click', deleteTile, false)

        toggleReadBtn.addEventListener('click', toggleReadStatus);

    }
}

function deleteTile(e) {
    this.parentNode.remove();
    myLibrary.splice(myLibrary.indexOf(this.parentNode, 1));
}

function toggleReadStatus() {
    
    if(readbox.textContent === 'read') {
        readbox.textContent === 'not read';
    } else {
        readbox.textContent === 'read';
    }
}


