
$(() => {

    let utente = localStorage.getItem('utente')
    $('#utente').text(utente);

});

$('#logout').on('click', function () {
    localStorage.clear();
    location.href = 'index.html';

});