
function addNewFields() {
    const form = document.getElementById('registrationForm');
    const newFieldsContainer = document.createElement('div');
    newFieldsContainer.classList.add('new-fields');

    const newMidLabel = document.createElement('label');
    newMidLabel.textContent = 'New MID:';
    newFieldsContainer.appendChild(newMidLabel);

    const newMidInput = document.createElement('input');
    newMidInput.type = 'text';
    newMidInput.placeholder = 'Enter New MID';
    newFieldsContainer.appendChild(newMidInput);

    const newQuantityLabel = document.createElement('label');
    newQuantityLabel.textContent = 'New Quantity:';
    newFieldsContainer.appendChild(newQuantityLabel);

    const newQuantityInput = document.createElement('input');
    newQuantityInput.type = 'number';
    newQuantityInput.placeholder = 'Enter New Quantity';
    newFieldsContainer.appendChild(newQuantityInput);

    // Todo Add a clear button for each new field
    const clearButton = document.createElement('input');
    clearButton.type = 'button';
    clearButton.value = 'Clear';
    clearButton.addEventListener('click', function () {
        newMidInput.value = ''; // clear new MID input
        newQuantityInput.value = ''; // Clear new quantity input
        newFieldsContainer.remove(); // Remove the entire new-fields div
    });
    newFieldsContainer.appendChild(clearButton);

    form.insertBefore(newFieldsContainer, form.lastElementChild.previousElementSibling);
}

document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    alert('Form submitted!');

    //Todo Refresh the page
    location.reload();
});
