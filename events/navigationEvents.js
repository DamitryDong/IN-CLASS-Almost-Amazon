import { getAuthors } from '../api/authorData';
import { signOut } from '../utils/auth';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    console.warn('CLICKED SALE BOOKS');
  });

  // TODO: ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    console.warn('CLICKED ALL BOOKS');
  });

  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
  document.querySelector('#authors').addEventListener('click', async (e) => {
    e.preventDefault();
    console.warn('CLICKED AUTHORS');

    try {
      const authors = await getAuthors();// WE HAVE TO AWAIT TO LET DATA BECOME ARRAY

      if (Array.isArray(authors)) { // USED FOR DEBUGGING (you can use console log to see data returned too)
        const authorsCard = authors.map((indivAuthor) => `
          <div class="projCard" style="width: 18rem;">
            <div class="card-body" id="project-card">
              <h5 class="card-title">
                <b>${indivAuthor.first_name} ${indivAuthor.last_name}</b>
              </h5>
            </div>
          </div>
        `).join('');
        document.querySelector('#app').innerHTML = authorsCard;
      } else {
        console.error('Authors is not an array:', authors);
      }
    } catch (error) {
      console.error('Failed to fetch authors:', error);
    }
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
