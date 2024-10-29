const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    };

    info() {
        if (this.read == true) {
            console.log(`${this.title} by ${this.author}, ${this.pages} pages, read.`);
        } else {
            console.log(`${this.title} by ${this.author}, ${this.pages} pages, not read yet.`);
        };

    };

    toggleRead() {
        if (this.read == true) {
            this.read = false;
        } else {
            this.read = true;
        };
    };
};

const TheHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 304, false);
const TheIdiot = new Book('The Idiot', 'F. M. Dostoevsky', 650, true);

const LibManagement = (() => {
    function addBookToLibrary(book) {
        const updLibrary = myLibrary.push(book);
    };
    function delFromLibrary(a) {
        myLibrary.splice(a, 1);
    };

    return { addBookToLibrary, delFromLibrary }
})();

const Display = (() => {
    let indexNum = -1;

    const cards = document.querySelector('.cards');

    const createCard = function (obj) {
        const cardItem = document.createElement('div');
        indexNum += 1;
        cardItem.setAttribute('class', 'card_item');
        cardItem.setAttribute('data-index', indexNum);
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
        const toggleBtn = document.createElement('button');
        if (obj.read == true) {
            toggleBtn.textContent = 'Not read';
            toggleBtn.style["background-color"] = 'grey';
        } else {
            toggleBtn.textContent = 'Read';
            toggleBtn.style["background-color"] = 'white';
        }
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete Book';
        function delBook() {
            LibManagement.delFromLibrary(cardItem.dataset.index);
            displayBooks();
        };
        const toggle = function () {
            obj.toggleRead();
            displayBooks();
        }
        toggleBtn.addEventListener('click', toggle);
        delBtn.addEventListener('click', delBook);
        newUL.appendChild(readLI);
        cardItem.appendChild(newUL);
        cardItem.appendChild(toggleBtn);
        cardItem.appendChild(delBtn);
    };

    function clearDisplay() {
        while (cards.lastElementChild) {
            cards.removeChild(cards.lastElementChild);
        };
        indexNum = -1;
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
        let input3 = '';
        if (inputs[3].checked == true) {
            input3 = true;
        } else {
            input3 = false;
        };

        if (inputs[0].checkValidity() == false ||
            inputs[1].checkValidity() == false ||
            inputs[1].checkValidity() == false) {
            alert('Error')
        } else {
            const newBook = new Book(inputs[0].value, inputs[1].value, parseInt(inputs[2].value), input3);
            LibManagement.addBookToLibrary(newBook);
            displayBooks();
            form.close();
        }
    };
    addBookBtn.addEventListener('click', addBook);

    return { displayBooks };
})();

LibManagement.addBookToLibrary(TheHobbit);
LibManagement.addBookToLibrary(TheIdiot);
Display.displayBooks();
