const main = document.querySelector("main");

class Book {
  constructor(title, genre, author, isRead, img) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead || false;
    console.log(img);
    this.img = img;
  }
}

class BookList {
  constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }

  add = (book) => {
    this.books.push(book);

    const newBook = document.createElement("div");
    newBook.setAttribute("class", "bookDiv");
    const newBookImg = document.createElement("img");
    const newBookTitle = document.createElement("h2");
    const newBookGenre = document.createElement("p");
    const newBookAuthor = document.createElement("p");
    const newBookIsRead = document.createElement("p");
    const newBookDetails = document.createElement("div");
    newBookDetails.setAttribute("class", "details");

    newBookTitle.innerText = `${book.title}`;
    newBookGenre.innerText = `Genre: ${book.genre}`;
    newBookAuthor.innerText = `Author: ${book.author}`;
    let readStatus = false;
    if (book.isRead === true) {
      readStatus = "Finished it!";
    } else {
      readStatus = "Looking forward to reading it.";
    }
    newBookIsRead.innerText = `${readStatus}`;
    console.log(book.img);
    console.log(book);
    newBookImg.src = `${book.img}`;
    main.appendChild(newBook);
    newBook.appendChild(newBookTitle);
    newBook.appendChild(newBookImg);
    newBook.appendChild(newBookDetails);
    newBookDetails.appendChild(newBookGenre);
    newBookDetails.appendChild(newBookAuthor);
    newBookDetails.appendChild(newBookIsRead);
    if (!this.currentlyReading) {
      this.currentlyReading = book;
      newBook.setAttribute("class", "current");
      newBookIsRead.innerText = "Currently reading!";
    }
  };

  getNumRead = (book) => {
    return this.books.filter((book) => {
      return book.isRead;
    }).length;
  };

  getNumUnread = (book) => {
    return this.books.filter((book) => {
      return !book.isRead;
    }).length;
  };

  startReading = (title) => {
    const book = this.books.find((book) => book.title === title);
    this.currentlyReading = book;
  };

  finishReading = (title) => {
    const book = this.books.find((book) => book.title === title);
    this.lastRead = book;
    this.currentlyReading = null;
    book.isRead = true;
  };
}

const homeLibrary = new BookList();

homeLibrary.add(
  new Book(
    "The Shining",
    "Horror",
    "Stephen King",
    false,
    "assets\\the-shining.jpg"
  )
);
homeLibrary.add(
  new Book(
    "American Gods",
    "Fiction",
    "Neil Gaiman",
    true,
    "assets\\american-gods.jpg"
  )
);
homeLibrary.add(
  new Book(
    "Eloquent JavaScript",
    "Programming",
    "Marijn Haverbeke",
    true,
    "assets\\eloquent-javascript.jpg"
  )
);
homeLibrary.add(
  new Book(
    "The Eyre Affair",
    "Fantasy",
    "Jasper Fforde",
    false,
    "assets\\eyre-affair.jpg"
  )
);
homeLibrary.add(
  new Book(
    "The Revisionists",
    "Science-fiction",
    "Thomas Mullen",
    true,
    "assets\\the-revisionists.jpg"
  )
);

console.log(homeLibrary);
