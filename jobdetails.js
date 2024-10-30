$(document).ready(() => {
    let inputCounter = 1;
    let title = '';
    let dataTitles = JSON.parse(localStorage.getItem('dataTitles')) || []; // Load existing titles from localStorage
    let tag = ''

    // Populate the select options and #result initially
    function populateSelect() {
        $('#dataDelete').empty(); // Clear existing options
        dataTitles.forEach(title => {
            $('#dataDelete').append(`<option>${title}</option>`);
        });
    }

    const cleanFields = () => {
        $('#headListDetails').val('');
        $('.fields').remove();
    };

    function addNewInput() {
        const inputClass = `listItemNew${inputCounter}`;
        $('#jobDetailsDiv').append(`<input type="text" class="${inputClass} fields" placeholder="פריט נוסף">`);
        inputCounter++;
        $(`.${inputClass}`).focus();
    }

    $('#btn3').click(() => {
        addNewInput();
    });

    $('#headListDetails').on('change', () => {
        const selectType = $('#type').val()
        if (selectType === 'list') {
            tag = 'ul'
        }
        if (selectType === 'numbers') {
            tag = 'ol'
        }

        title = $('#headListDetails').val();
        let newDiv = $(`
            <div id="${title}"><h3>${title}</h3>
                <${tag} class="theList"></${tag}>
            </div>`);
        newDiv.addClass('headListTitle');
        $('#test').html(newDiv.prop('outerHTML'));
    });

    $('#saveList').click(() => {
        // Clear existing list items
        $('.theList').empty();

        for (let i = 1; i < inputCounter; i++) {
            let value = $(`.listItemNew${i}`).val();
            if (value) {

                let newListItem = $(`<li>${value}</li>`);
                $('.theList').append(newListItem);
            }
        }

        // Create the new title and save it
        if (title && !dataTitles.includes(`JobDetails_${title}`)) { // Check for duplicates
            dataTitles.push(`JobDetails_${title}`); // Add new title to the array
            localStorage.setItem('dataTitles', JSON.stringify(dataTitles)); // Update local storage
            populateSelect(); // Refresh the dropdown
        }

        let data = $('.headListTitle').prop('outerHTML');
        console.log(data);
        localStorage.setItem(`JobDetails_${title}`, JSON.stringify(data));

        cleanFields();
    });

    // Initial population of the select element
    populateSelect();
});
