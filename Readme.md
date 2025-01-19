
Actors:
  - Librarian 
  - Member 
  
Cases:
  - AddBooks
  - BorrowBooks
  - ReturnBooks
  - SearchBooks
  - ManageMembers


Class: Book:
Attributes:
  - bookId (String)
  - title (String)
  - author (String)
  - isAvailable (Boolean)
Methods:
  - updateAvailability()


Class: Member:
Attributes:
  - memberId (String)
  - name (String)
  - borrowedBooks (Array)
Methods:
  - borrowBook()
  - returnBook()

Class: Librarian:
Attributes:
  - liberianId (String)
  - name (String)
Methods:
  - addBook()
  - manageMember()


Class: Library:
Attributes:
  - books (String)
  - members (String)
Methods:
  - searchBook()
  - returnBook()
