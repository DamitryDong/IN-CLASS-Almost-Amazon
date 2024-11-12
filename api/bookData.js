// import client from '../utils/client';
// API CALLS FOR BOOKS

// const endpoint = client.databaseURL;

// TODO: GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
// TODO: DELETE BOOK
const deleteBook = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/author/${id}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => { // HERE THE RESPONSE WILL SHOW DIFFERENT THINGS DEPENDING ON ERROR
      if (!response.ok) {
        throw new Error(`Failed to delete book: ${response.statusText}`);
      }
      resolve({ message: 'Author deleted successfully' });
    })
    .catch((error) => reject(error));
});
// TODO: GET SINGLE BOOK
const getSingleBook = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${id}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
// TODO: CREATE BOOK
const createBook = (newBook) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook) // this adds our new author in
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// TODO: UPDATE BOOK
const updateBook = (id, newContent) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newContent)
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: FILTER BOOKS ON SALE
const booksOnSale = () => {};

// TODO: STRETCH...SEARCH BOOKS

export {
  getBooks,
  createBook,
  booksOnSale,
  deleteBook,
  getSingleBook,
  updateBook
};
