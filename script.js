
$(document).ready(() => {
    const storeFields = () => {
        const clientName = $('#clientName').val()
        const clientAddress = $('#clientAddress').val()
        const clientPhone = $('#clientPhone').val()
        const clientMail = $('#clientMail').val()
        let clientInfo = [clientName, clientAddress, clientPhone, clientMail]

        localStorage.setItem('clientDetails', JSON.stringify(clientInfo))
    }

    $('#saveClientInfo').click(()=>{
        storeFields()
        let data = JSON.parse(localStorage.getItem('clientDetails'))
        console.log(data)
    })


    const printClientData = () => {
        let data = JSON.parse(localStorage.getItem('clientDetails'));
        if (data) {
            $('#clientNameOutput').text(`שם: ${data[0]}`);
            $('#clientAddressOutput').text(`כתובת: ${data[1]}`);
            $('#clientPhoneOutput').text(`טלפון: ${data[2]}`);
            $('#clientMailOutput').text(`אימייל: ${data[3]}`);
        } else {
            $('#clientNameOutput').text('אין פרטים שמורים');
            $('#clientAddressOutput').text('');
            $('#clientPhoneOutput').text('');
            $('#clientMailOutput').text('');
        }
    };
    
    $('#printClientData').click(() => {
        printClientData();
    });


    $('#copyCode').click(() => {
        // Get the HTML content of the #test div
        const htmlToCopy = $('#test').html();

        // Copy the HTML content to the clipboard
        navigator.clipboard.writeText(htmlToCopy).then(function() {
            // Show feedback message
            $('#feedback').show().delay(2000).fadeOut();
        }, function(err) {
            console.error('Error copying text: ', err);
        });
    });


})