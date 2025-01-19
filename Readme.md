# Library Management System

This project simulates a library management system where members can borrow and return books, librarians can manage members and books, and all interactions are tracked within a central `Library` class.

## Actors
- **Librarian**: Manages books and members.
- **Member**: Borrows and returns books.

## Use Cases
1. **AddBooks**: Add books to the library.
2. **BorrowBooks**: Borrow books from the library.
3. **ReturnBooks**: Return borrowed books to the library.
4. **SearchBooks**: Search for books in the library.
5. **ManageMembers**: Manage library members (add, remove, update).

## Classes

### Class: Book
Attributes:
- `bookId` (String): Unique identifier for the book.
- `title` (String): The title of the book.
- `author` (String): The author of the book.
- `isAvailable` (Boolean): Indicates whether the book is available for borrowing.

Methods:
- `updateAvailability()`: Updates the availability status of the book.

### Class: Member
Attributes:
- `memberId` (String): Unique identifier for the member.
- `name` (String): The member's name.
- `borrowedBooks` (Array): A list of books borrowed by the member.

Methods:
- `borrowBook(bookId)`: Borrows a book by its ID.
- `returnBook(bookId)`: Returns a borrowed book by its ID.

### Class: Librarian
Attributes:
- `librarianId` (String): Unique identifier for the librarian.
- `name` (String): The librarian's name.

Methods:
- `addBook(book)`: Adds a book to the library.
- `manageMember(memberId, action)`: Manages members in the library.

### Class: Library
Attributes:
- `books` (Array of Book objects): A list of books in the library.
- `members` (Array of Member objects): A list of members registered with the library.

Methods:
- `searchBook(query)`: Searches for books in the library.
- `borrowBook(memberId, bookId)`: Facilitates borrowing a book.
- `returnBook(memberId, bookId)`: Facilitates returning a book.
