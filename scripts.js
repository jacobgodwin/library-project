let myLibrary = [];

const bookCardContainer = document.getElementById("book-cards");
const addBookButton = document.getElementById("add_book");

addBookButton.addEventListener("click", addBookToLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  myLibrary.push(this);
}

const theWayofKings = new Book(
  "The Way of Kings",
  "Brandon Sanderson",
  1007,
  "Read"
);

const recursion = new Book("Recursion", "Blake Crouch", 337, "Read");

function addBookToLibrary() {
  const inputs = document.querySelectorAll(
    "#title, #author, #pages, #read_status"
  );
  console.log(inputs);
  new Book(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
  displayBook();
  inputs.forEach((input) => {
    console.log(input.value);
    input.value = "";
  });
}

function displayBook() {
  bookCardContainer.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCardContainer.appendChild(bookCard);
    let bookInfo = myLibrary[i];
    Object.values(bookInfo).forEach((val) => {
      let bookCardText = document.createElement("div");
      bookCard.appendChild(bookCardText);
      bookCardText.textContent = val;
    });
  }
}

displayBook();
