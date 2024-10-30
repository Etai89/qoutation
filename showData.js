$(document).ready(() => {
    
    const data = JSON.parse(localStorage.getItem('dataTitles'))
    data.map(title => {
        const titleDetail = JSON.parse(localStorage.getItem(title))
        $('#test').append(titleDetail)
    })
})