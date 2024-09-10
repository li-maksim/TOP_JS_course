const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() { 
      if (this.read == true) {
            console.log(`${this.title} by ${this.author}, ${this.pages} pages, read.`);
      } else {
            console.log(`${this.title} by ${this.author}, ${this.pages} pages, not read yet.`);
      }
    };
  };

const TheHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', '304', false);
const TheIdiot = new Book('The Idiot', 'F. M. Dostoevsky', 650, true);

function addBookToLibrary(book) {
    const updLibrary = myLibrary.push(book);
}

addBookToLibrary(TheHobbit);
addBookToLibrary(TheIdiot);

const cards = document.querySelector('.cards');

const createCard = function(obj) {
    const cardItem = document.createElement('div');
    cardItem.setAttribute('class', 'card_item');
    cards.appendChild(cardItem);
    const newUL = document.createElement('ul');
    const titleLI = document.createElement('li');
    titleLI.textContent = 'Title: ' + obj.title;
    newUL.appendChild(titleLI);
    const authorLI = document.createElement('li');
    authorLI.textContent = 'Author: ' + obj.author;
    newUL.appendChild(authorLI);
    const pagesLI = document.createElement('li');
    pagesLI.textContent = 'Pages: ' + obj.pages;
    newUL.appendChild(pagesLI);
    const readLI = document.createElement('li');
    if (obj.read == true) {
        readLI.textContent = 'Read'
    } else {
        readLI.textContent = 'Not read yet'
    };
    newUL.appendChild(readLI);
    cardItem.appendChild(newUL);
};

function clearDisplay() {
    while (cards.lastElementChild) {
        cards.removeChild(cards.lastElementChild);
    };
};

function displayBooks() {
    clearDisplay();
    myLibrary.forEach(createCard);
};

const form = document.querySelector('dialog');

const newBookBtn = document.querySelector('.new');
newBookBtn.addEventListener('click', () => form.showModal());

const inputs = [
    document.querySelector('#title'),
    document.querySelector('#author'),
    document.querySelector('#pages'),
    document.querySelector('#read')
];
    
const addBookBtn = document.querySelector('.add_btn');
function addBook(evt) {
    evt.preventDefault();
    const newBook = new Book(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
    addBookToLibrary(newBook);
    displayBooks();
    form.close();
}
addBookBtn.addEventListener('click', addBook);
