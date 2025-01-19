class Book {

  constructor(bookId, title, author){

    this.bookId = bookId;
    this.title =title;
    this.author = author;
    this.isAvailable = true;
  }

  updateAvailability(status){
    this.isAvailable = status;
  }

}


class Member {

  constructor(memberId, name){
    this.memberId = memberId;
    this.name = name;
    this.borrowedBooks=[];
  }


  borrowBook(book){

      if(book.isAvailable){
        this.borrowedBooks.push(book);
        book.updateAvailability(false);
        console.log(`${this.name} borrowed '${book.title}'.`)
      }
  }


  returnBook(book){
    const index = this.borrowedBooks.indexOf(book);
    if(index !==-1){
      this.borrowedBooks.splice(index, 1);
      book.updateAvailability(true);
      console.log(`${this.name} does not have  '${book.title}'.`)
    }
  }
}


class Librarian {
  constructor (liberianId, name){
      this.liberianId = liberianId;
      this.name = name;
  }

  addBook(library, book){
    library.books.push(book);
    console.log(` Book ${this.name} added to the library '${book.title}'.`)
  }


  manageMember(library, member){
    library.members.push(member);
    console.log(` Member ${this.name} added to the library.`)
  }

}

class Library {

  constructor(){
    this.books =[];
    this.members=[];

  }

  searchBook(title){
    return this.books.find(book => book.title.toLowerCase() ===title.toLowerCase()) || null;
  }
}


// Example Usage
const library = new Library();
const librarian = new Librarian(1, "Alice");

// Adding books
const book1 = new Book(101, "1984", "George Orwell");
const book2 = new Book(102, "To Kill a Mockingbird", "Harper Lee");
librarian.addBook(library, book1);
librarian.addBook(library, book2);

// Adding a member
const member = new Member(201, "John Doe");
librarian.manageMember(library, member);



// Borrowing a book
const searchedBook = library.searchBook("1984");
if (searchedBook) {
    member.borrowBook(searchedBook);
}


// Returning a book
member.returnBook(book1);


// Trying to borrow an unavailable book
member.borrowBook(book1);