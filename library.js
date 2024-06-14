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
    // alert('hello world');
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

//function to create cards. Goes over myLibrary array and displays all books
function create() {
    //attaches js variable to footer div for book elements
    let libraryDiv = document.querySelector(".library");
    // clears unecessary data so output is clean
    libraryDiv.innerHTML="";
    //grabs all elements within myLibrary array and assigns to book variable
    for( let i = 0; i < myLibrary.length; i++) {
        // console.log(myLibrary[i]);
        let book = myLibrary[i];
        //creates divs per book submitted
        let bookDiv = document.createElement("div");
        //layout for book displayed
        bookDiv.innerHTML = `
          <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">${book.author}</h5>
          </div>
          <div class="card-body">
              <p>${book.pages} pages</p>
              <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
          </div>
          <button class="removeBtn" onclick="removeBook(${i})">Remove Book</button>
        `;
        libraryDiv.appendChild(bookDiv);
    }
}

//called to add books to cards by adding to array 
function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked; 
  let newBook = new Book(title,author,pages,read);
  myLibrary.push(newBook);
//   console.table(myLibrary);
  create();
}

function removeBook(index){
  myLibrary.splice(index,1);
  create();
}
 