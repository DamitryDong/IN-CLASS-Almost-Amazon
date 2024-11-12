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

// GET SINGLE AUTHOR FIXME:
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
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// FILTER AUTHOR FOR FAVORITE
const favoriteAuthor = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/author.json?orderBy="favorite"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// UPDATE AUTHOR FIXME:
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
  favoriteAuthor,
};
