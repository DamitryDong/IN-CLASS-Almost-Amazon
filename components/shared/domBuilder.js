import renderToDOM from '../../utils/renderToDom';

// Needs to add a loop to populate the Dom and also attch dom events ID to this.
const domBuilder = () => {
  const domString = `<div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
    <button type="button" class="btn btn-success" id="delete-book">Delete</button>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
