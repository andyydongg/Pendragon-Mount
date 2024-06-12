function clearInputFields() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('email').value = '';
    document.getElementById('streetNumber').value = '';
    document.getElementById('Town').value = '';
    document.getElementById('state').value = '';
    document.getElementById('zipCode').value = '';
    document.getElementById('preferPhone').checked = false;
    document.getElementById('preferEmail').checked = false;
    document.getElementById('comment').value = '';
}

function handleDuplicateEntry(existingData, formData) {
    const duplicateEntry = existingData.find(data => data.email === formData.email || data.phoneNumber === formData.phoneNumber);

    // Clear input fields
    clearInputFields();

    // Remove the corresponding input line from formDataDisplay
    const formDataDisplay = document.getElementById('formDataDisplay');
    const newContent = existingData.map(data =>
        `<div>
            ${data.firstName}, ${data.lastName}, ${data.phoneNumber}, ${data.email}, ${data.streetNumber}, ${data.Town}, ${data.state}, ${data.zipCode}, ${data.preferPhone || data.preferEmail}, ${data.comment}
        </div>`
    ).join('');

    formDataDisplay.innerHTML = newContent;

    // Display alert for duplicate entry
    alert(`Sorry, we cannot accept your entry as your ${duplicateEntry.email === formData.email ? 'email' : 'phone number'} is already in the database, and you are already signed up for this sweepstake.`);
}

function handleNewEntry(existingData, formData) {
    // Save data to localStorage
    existingData.push(formData);
    localStorage.setItem('formData', JSON.stringify(existingData));

    // Display success message
    const successMessage = document.getElementById('successMessage');
    successMessage.innerText = 'Thanks for entering into the Sweepstake. We will contact you if you win a car.';

    // Convert form data to a comma-separated string
    const formDataString = `<div>
    ${formData.firstName}, ${formData.lastName}, ${formData.phoneNumber}, ${formData.email}, ${formData.streetNumber}, ${formData.Town}, ${formData.state}, ${formData.zipCode}, ${formData.preferPhone || formData.preferEmail}, ${formData.comment}
    </div>`;

    // Append the data to the existing file content
    const formDataDisplay = document.getElementById('formDataDisplay');
    formDataDisplay.innerHTML += formDataString;

    // Reset the form to clear inputs
    document.getElementById('signupForm').reset();

    alert('Success, thank you for your entry :)');
}

function clearSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.innerText = ''; // Clear success message
}

function clearLocalStorage() {
    localStorage.clear();
    alert('All sweepstakes entries cleared.');
}

function formDataDisplay() {
    const existingDataString = localStorage.getItem('formData');
    const existingData = existingDataString ? JSON.parse(existingDataString) : [];

    // Display form data as needed on the page
    const formDataDisplay = document.getElementById('formDataDisplay');
    const newContent = existingData.map(data =>
        `<div>
            ${data.firstName}, ${data.lastName}, ${data.phoneNumber}, ${data.email}, ${data.streetNumber}, ${data.Town}, ${data.state}, ${data.zipCode}, ${data.preferPhone || data.preferEmail}, ${data.comment}
        </div>`
    ).join('');

    formDataDisplay.innerHTML = newContent;
}

function displaySelectedWinners() {
    const selectedWinnersDiv = document.getElementById('displaySelectedWinners');
    selectedWinnersDiv.innerHTML = '<h4>Selected Winners:</h4>';

    // Get selected winners from local storage
    const storedWinners = localStorage.getItem('selectedWinners');
    const selectedWinners = storedWinners ? JSON.parse(storedWinners) : [];

    // Iterate through selected Winners array and add each winner to the display
    selectedWinners.forEach(winner => {
        const winnerElement = document.createElement('p');
        winnerElement.textContent = winner;
        selectedWinnersDiv.appendChild(winnerElement);
    });
}





