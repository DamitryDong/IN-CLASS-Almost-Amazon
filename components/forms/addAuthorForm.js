import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addAuthorForm = (obj = {}) => {
  clearDom(); // the submit form id is basically split into a id name "submit-author" and also a check if there's alread a object key
  const domString = ` 
    <form id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="mb-4">
      <div class="form-group">
        <label for="image" id="firstName">First Name</label>
        <input type="text" class="form-control" id="first_name" placeholder="${obj.first_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="image" id="lastName">Last Name</label>
        <input type="text" class="form-control" id="last_name" placeholder="${obj.last_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="title" id="authorEmail">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="${obj.email || ''}" required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favoriteAuthor" ${obj.favorite ? 'checked' : ''}>
        <label class="form-check-label" for="sale">favorite?</label>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Author</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addAuthorForm;
