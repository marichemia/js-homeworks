/* Objects Task 1 */

function readingStatus(books) {
  
  for (let i = 0; i < books.length; i++) {
    if (books[i].haveRead) {
      console.log(`${books[i].author} has read ${books[i].title}`);
    } else {
      console.log(`${books[i].author} hasn't read ${books[i].title} yet`);
    }
  }
  
}

/* Objects Task 2 */

function readingStatus(books) {

  
  
  for (let i = 0; i < books.length; i++) {

    Object.defineProperty(books[i], 'daysAgo', {
      get: function() {
        let currentDate = new Date();
        let readDate = this.dateOfRead;
        let substract = currentDate.getTime() - readDate.getTime();
        let days = Math.floor(substract/ (1000 * 60 * 60 * 24));
        
        return `${ days } days ago`;
      }
    })

    if (books[i].haveRead) {
      console.log(`${books[i].author} has read ${books[i].title} ${books[i].daysAgo}`);
    } else {
      console.log(`${books[i].author} hasn't read ${books[i].title} yet`);
    }
  }

}
