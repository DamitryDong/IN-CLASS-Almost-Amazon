// for merged promises
/* eslint-disable */
import { getSingleAuthor, getAuthorBooks, deleteSingleAuthor } from './authorData';
import { getSingleBook, deleteBook } from './bookData';

const getBookDetails = async (firebaseKey) => { // the async keyword let's JS know this is asynchronous function (promise)
  const bookObject = await getSingleBook(firebaseKey); // await stops the code in this function and waits for the response. This is like using .then
  const authorObject = await getSingleAuthor(bookObject.author_id); // this function uses the data response from the bookObject
  return { ...bookObject, authorObject };
};

const getAuthorDetail = async (firebaseKey) => { // the async keyword let's JS know this is asynchronous function (promise)
    const authorObject = await getSingleAuthor(firebaseKey); // await stops the code in this function and waits for the response. This is like using .then
    const bookObject = await getAuthorBooks(authorObject.firebaseKey); // this function uses the data response from the bookObject
    return { books: bookObject, authorObject };
  };

const deleteAuthorBooksRelationship = (firebaseKey) => new Promise((resolve, reject) => { // this is used to delete books as the author is deleted
  getAuthorBooks(firebaseKey).then((authorBooksArray) => {
    const deleteBookPromises = authorBooksArray.map((book) => deleteBook(book.firebaseKey));

    Promise.all(deleteBookPromises).then(() => {
      deleteSingleAuthor(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export {getBookDetails,getAuthorDetail,deleteAuthorBooksRelationship}

// we can also use this:
//   const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
//     fetch(`${endpoint}/books/${firebaseKey}.json`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => resolve(data)) // will resolve a single object
//       .catch(reject);
//   });
