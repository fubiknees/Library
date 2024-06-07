//ties variables to DOM. Allow for btn driven display for form
let newBookbtn = document.querySelector('#new-book-btn');
newBookbtn.addEventListener('click', function(){
    // alert('Hello World');
    let newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display = "block"; //reveals form
})
let submitBtn = document.querySelector('#new-book-form');
submitBtn.addEventListener('submit', function(event){
    event.preventDefault();
    alert('hello world');
    addBookToLibrary();
})

const myLibrary = [];


//new book construct
function Book(title,author,pages,read) {
  this.title = title;
  this.author = author; 
  this.pages = pages;
  this.read = read;
}

function create() {
    let libraryBook = document.querySelector("library");
    for( let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}

//called to add books to cards
function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked; 
  let newBook = new Book(title,author,pages,read);
  myLibrary.push(newBook);
  console.table(myLibrary);
  create();
}
 