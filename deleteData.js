$(document).ready(() => {
    function populateDeleteDropdown() {
        const data = JSON.parse(localStorage.getItem('dataTitles')) || []; // Load titles from localStorage
        $('#dataDelete').empty(); // Clear existing options

        data.forEach(title => {
            $('#dataDelete').append(`<option>${title}</option>`); // Populate dropdown
        });
    }

    // Populate dropdown on page load
    populateDeleteDropdown();

    $('#deleteBtn').click(() => {
        const selectedTitle = $('#dataDelete').val();

        if (!selectedTitle) {
            alert("Please select a title to delete."); // Alert if nothing is selected
            return;
        }

        let data = JSON.parse(localStorage.getItem('dataTitles')) || []; // Load titles from localStorage
        const updatedData = data.filter(title => title !== selectedTitle);
        localStorage.removeItem(selectedTitle)
        localStorage.setItem('dataTitles', JSON.stringify(updatedData)); // Update local storage

        // Re-populate the dropdown
        populateDeleteDropdown();

        console.log(`Deleted title: ${selectedTitle}`);
    });
});
