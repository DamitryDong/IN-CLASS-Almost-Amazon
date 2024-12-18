import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { getBooks } from '../api/bookData';
import { showBooks } from '../pages/books';

/* eslint-disable */

const startApp = (user) => {
  console.log("User UID:", user.uid)
  domBuilder(); // ADD USER SO THAT YOU CAN UPDATE CALLS
  domEvents(user); // ADD USER SO THAT YOU CAN UPDATE CALLS
  formEvents(user); // ADD USER SO THAT YOU CAN UPDATE CALLS
  navBar(); 
  logoutButton(); 
  navigationEvents(user); 

  // TODO: Put all books on the DOM on App load
  getBooks(user.uid).then((books) => showBooks(books));
};

export default startApp;
