import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL AUTHORS
const getAuthors = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/author.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// CREATE AUTHOR FIXME: MIGHT NEED FIXING
const createAuthor = (newAuthor) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/author.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newAuthor) // this adds our new author in
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET SINGLE AUTHOR
const getSingleAuthor = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/author/${id}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// DELETE AUTHOR
const deleteSingleAuthor = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/author/${id}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => { // HERE THE RESPONSE WILL SHOW DIFFERENT THINGS DEPENDING ON ERROR
      if (!response.ok) {
        throw new Error(`Failed to delete author: ${response.statusText}`);
      }
      resolve({ message: 'Author deleted successfully' });
    })
    .catch((error) => reject(error));
}); // NOTICE WE DETELED THE DATA RETURN LINE (.then((data))) because delete returns no data

// UPDATE AUTHOR
const updateAuthor = (id, newContent) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/author/${id}.json`, {
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

// TODO: GET A SINGLE AUTHOR'S BOOKS
const getAuthorBooks = () => {};

export {
  getAuthors,
  createAuthor,
  getSingleAuthor,
  deleteSingleAuthor,
  updateAuthor,
  getAuthorBooks,
};
