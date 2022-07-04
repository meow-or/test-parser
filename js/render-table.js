const tableRowTemplate = document.querySelector('#table-row').content.querySelector('.table__row');
const tableRowContainer = document.querySelector('.table');
const listOfRowsFragment = document.createDocumentFragment();


const addRowData = (
  {procedureNumber, oos, link, email, documents}) => {
  
  const rowData = tableRowTemplate.cloneNode(true);

  rowData.querySelector('.table__row-item_number').textContent = procedureNumber;
  rowData.querySelector('.table__row-item_oos').textContent = oos;
  rowData.querySelector('.table__row-item_link').textContent = link;
  rowData.querySelector('.table__row-item_email').textContent = email;
  rowData.querySelector('.table__row-item_documents').textContent = documents;

  listOfRowsFragment.appendChild(rowData);
}


const clearRowsContainer = () => {
  const renderedRows = tableRowContainer.querySelectorAll('.table__row-rendered-list');
  renderedRows.forEach(row => row.remove());
}

export const renderTable = (data) => {

  data
  .slice()
  .forEach(
    ({procedureNumber, oos, link, email, documents}) => {

    addRowData(
      {procedureNumber, oos, link, email, documents})
  })

  clearRowsContainer();
  tableRowContainer.appendChild(listOfRowsFragment);
}


