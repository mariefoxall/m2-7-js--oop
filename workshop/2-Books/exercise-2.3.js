// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2.
// Paste them right here:

class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead || false;
  }
}

// const book1 = new Book("The Goldfinch", "adventure", "Donna Tartt", true);
// const book2 = new Book("Surfacing", "intrigue", "Margaret Atwood");
// const book3 = new Book("Outliers", "non-fiction", "Malcolm Gladwell", false);
// const book4 = new Book("My Brilliant Friend", "drama", "Elena Ferrante", true);
// const book5 = new Book("The Testaments", "sci-fi", "Margaret Atwood", true);

// console.log(book1, book2, book3, book4, book5);

class BookList {
  constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }

  add = (book) => {
    this.books.push(book);
    if (!this.currentlyReading) {
      this.currentlyReading = book;
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
}

// Exercise 2.3
//
// We want to be able to add books to our BookList, so that we can start a
// collection!
//
// Let's create an `add` method in our BookList class. It should take a book
// as a parameter. When we call `.add`, it should push that new book into the
// `books` array on the `BookList` class. Also, if no Book is being currently read
// we should set currentlyReading to point to this newly added Book.
//
// Books have an `isRead` property, to indicate if we've read it or not.
// Let's also add two new methods:
// - getNumRead
// - getNumUnread
//
// These methods should return the number of books which are read and unread,
// respectively.
//
// The following code will fail by default. Your goal is to get it to run, and output the values specified at the end:

const homeLibrary = new BookList();

// Books are unread by default:
homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));

// But, we can specify that we've read it:
homeLibrary.add(
  new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke", true)
);

// At this point, we should have 2 unread books, and 1 read book:
console.log(homeLibrary.getNumUnread()); // 2
console.log(homeLibrary.getNumRead()); // 1
