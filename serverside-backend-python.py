class Library:
    def __init__(self, listOfBooks):
        self.books = listOfBooks

    def displayAvailableBooks(self):
        print("Books present in this library are: ")
        for book in self.books: 
            print(" *" + book)
    
    def borrowBook(self, bookName):
        if bookName in self.books:
            print(f"You have been issued {bookName}. Please keep it safe and return it within 30 days")
            self.books.remove(bookName)
            return True
        else:
            print("Sorry, This book is either not available or has already been issued to someone else. Please wait until the book is available")
            return False

    def newLibCard(self):
	  print("Thank you for choosing us, please fill this form for a new library card")
#to be added in the next push

    def returnBook(self, bookName):
        self.books.append(bookName)
        print("Thanks for returning this book! Hope you enjoyed reading it. Have a great day ahead!")

class Student: 
    def requestBook(self):
        self.book = input("Enter the name of the book you want to borrow: ")
        return self.book

    def returnBook(self):
        self.book = input("Enter the name of the book you want to return: ")
        return self.book
         

if __name__ == "__main__":
    centraLibrary = Library(["Algorithms", "Django", "Clrs", "Python Notes"])
    student = Student()
    # centraLibrary.displayAvailableBooks()
    while(True):
        welcomeMsg = '''\n ====== Welcome to the Grand Central Library ======
        Please choose an option from below:
        1. List all the books available
        2. Request a book from the shelf
        3. Add/Return a book
        4. Exit the Library
	  5. Create a new library card
	  6. Lost/Renew your library card
        '''
        print(welcomeMsg)
        a = int(input("Enter a choice: "))
        if a == 1:
            centraLibrary.displayAvailableBooks()
        elif a == 2:
            centraLibrary.borrowBook(student.requestBook())
        elif a == 3:
            centraLibrary.returnBook(student.returnBook())
        elif a == 4:
            print("Thanks for choosing Central Library. Have a great day ahead!")
            exit()
	  elif a == 5:
            centraLibrary.newLibCard(student.createLibCard())
		print("Your library card is in process, please be patient for the next 2-3 days!")
            exit()
	  elif a == 6:
		print("Currently we do not support renewal. Please fill out the form for a new library card. A minimal fee of $10 will be charged")
            exit()
        else:
            print("Invalid Choice, please input the correct number!")       

