//Acticity 01
//Task 01 - Object creation and access
let objBook = { 
    title:"happyLifeWithSadLife",
    author:"hanish",
    year:2049,
}
console.log(objBook)

//Task 02 - Access and log the title and author

console.log(objBook.author)
console.log(objBook.title)

//Activity 02
//Task 03 - Add a method to the book object that returns a string with the books title and author and log the reusult by log in it.

objBook.getAuthorandTitle = function(){
    return `author name - ${objBook.author} and title - ${objBook.title}`
}

console.log(objBook.getAuthorandTitle())

//Task 04 - Add a method to the book object that takes parameter as year and updates book year properly then log updated object.
objBook.updateYear = function(year){
    return `${objBook.year} and ${objBook}`
    
}

console.log(objBook.updateYear(2002))

//Activity 03
//Task 05 - create a nested loop representing library with properties like names and books

const library = {
    name: "Central Library",
    location: "Downtown",
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949
      },
    ]
  };
  
  console.log(library);
  

//Task 06 -Access and log the name of the library and the titles of all the books in the library

// Accessing and logging the name of the library
console.log("Library Name:", library.name);

// Accessing and logging the titles of all the books
library.books.forEach(book => {
  console.log("Book Title:", book.title);
});


//Activity 04
//Task 07 -add a method to the book object that uses the this keyword to return  the string with the books title and year and log the result of calling this method

const library2 = {
    name: "Central Library",
    location: "Downtown",
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        getTitleAndYear: function() {
          return `${this.title} (${this.year})`;
        }
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        getTitleAndYear: function() {
          return `${this.title} (${this.year})`;
        }
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        getTitleAndYear: function() {
          return `${this.title} (${this.year})`;
        }
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        getTitleAndYear: function() {
          return `${this.title} (${this.year})`;
        }
      }
    ]
  };
  
  // Calling the getTitleAndYear method for each book and logging the result
  library2.books.forEach(book => {
    console.log(book.getTitleAndYear());
  });


//ACTIVITY 05
//Task-08 use a for in loop to iterate over the properties of the book object and log each property and its value

const library3 = {
    name: "Central Library",
    location: "Downtown",
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        getTitleAndYear: function() {
          return `${this.title} (${this.year})`;
        }
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        getTitleAndYear: function() {
          return `${this.title} (${this.year})`;
        }
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        getTitleAndYear: function() {
          return `${this.title} (${this.year})`;
        }
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        getTitleAndYear: function() {
          return `${this.title} (${this.year})`;
        }
      }
    ]
  };
  
  // Using a for...in loop to iterate over the properties of each book object
  library3.books.forEach(book => {
    for (let property in book) {
      if (book.hasOwnProperty(property)) {
        console.log(`${property}: ${book[property]}`);
      }
    }
    console.log('---'); // Separator for better readability
  });
  

  //Task - 09
  //use object.keys and object.values methods to log all the keys and values of the object
  const library4= {
    name: "Central Library",
    location: "Downtown",
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        getTitleAndYear: function() {
          return `${this.title} (${this.year})`;
        }
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        getTitleAndYear: function() {
          return `${this.title} (${this.year})`;
        }
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        getTitleAndYear: function() {
          return `${this.title} (${this.year})`;
        }
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        getTitleAndYear: function() {
          return `${this.title} (${this.year})`;
        }
      }
    ]
  };
  
  // Using Object.keys() and Object.values() to log all the keys and values of each book object
  library4.books.forEach(book => {
    console.log('Keys:', Object.keys(book));
    console.log('Values:', Object.values(book));
    console.log('---'); // Separator for better readability
  });
  

  
