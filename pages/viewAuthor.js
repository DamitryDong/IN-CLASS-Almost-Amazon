/* eslint-disable */
import { render } from 'sass';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';


const viewAuthor = (obj) => {
    const makeAuthorDom = (obj) => {
        clearDom()
        const authorDetails = `
        <div class="mt-5 d-flex flex-wrap">
            <div class="d-flex flex-column" id='>
            <h5 class="card-title">${obj.authorObject.first_name} ${obj.authorObject.last_name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${obj.authorObject.email}</h6>
            <p class='author-star'>
                ${obj.authorObject.favorite ? `<span class='badge text-bg-warning'>★</span>` : ''}
            </p>
            <i id="edit-author-btn--${obj.authorObject.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-author-btn--${obj.authorObject.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
            </div>
        </div>
        `;

        const viewAuthorBooks = obj.books.map(
        (book) => `
      <div class="card">
        <img class="card-img-top" src=${book.image} alt=${book.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${book.title}</h5>
            <p class="card-text bold">${book.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${book.price}` : `$${book.price}`}</p>
            <hr>
            <i id="edit-book-btn--${book.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${book.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`
        ).join('');

    return `
    ${authorDetails}
    <div class="d-flex flex-wrap">
    ${viewAuthorBooks}
    </div>`;
    }
    console.log(obj);

    const content = makeAuthorDom(obj);
    renderToDOM('#view',content)
    
}  
  export default viewAuthor;