let myLibrary = [];

const bookCardContainer = document.getElementById("book-cards");
const addBookButton = document.getElementById("add_book");

addBookButton.addEventListener("click", addBookToLibrary);

function Book(Title, Author, Pages, Status) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Status = Status;
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
    // bookCard.setAttribute("data-index", `${i}`);
    bookCardContainer.appendChild(bookCard);
    let statusIcon = document.createElement("i");
    statusIcon.classList.add("bi", "bi-bookmark");
    statusIcon.addEventListener("click", readStatus);
    bookCard.appendChild(statusIcon);
    let bookInfo = myLibrary[i];
    Object.entries(bookInfo).forEach(([key, value]) => {
      let bookCardText = document.createElement("div");
      bookCardText.setAttribute("id", `${key}`.toLowerCase());
      bookCard.appendChild(bookCardText);
      bookCardText.textContent = `${key}: ${value}`;
    });
    let closeIcon = document.createElement("i");
    closeIcon.classList.add("bi", "bi-x-lg");
    closeIcon.addEventListener("click", removeBook);
    bookCard.appendChild(closeIcon);
  }
}

function removeBook() {
  this.parentElement.remove();
}

function readStatus() {
  let statusChange = window.prompt("Current Reading Status:", "Read");

  if (statusChange == null || statusChange == "") {
    return;
  } else {
    this.parentElement.querySelector("#status").innerHTML =
      "Status: " + statusChange;
  }
}

window.onload = displayBook();
