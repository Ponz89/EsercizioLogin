$(() => {

    let utente = localStorage.getItem('utente')
    $('#utente').text(utente);

$('#creaCorso').on('click', function () {

    let nomeCorso = $('#nomeCorso').val();
    let durataCorso = $('#durataCorso').val();
    let corso = $('#corso').val();
    let flag = true;

    if (nomeCorso == '') {
        $('#nomeErr').html('Inserisci ');
        flag = false;
    }
    
    if (durataCorso == '') {
        $('#durataErr').html('Inserisci ');
        flag = false;       
    }

    if (corso == '') {
        alert('Seleziona un corso!');
        flag = false;
    }
    
    if (flag == true) {
    $('#nuovoCorso').html(`<h3>Hai creato il corso: "${nomeCorso}" della durata di ${durataCorso} ore, al termine del quale diventerai un EPICO <br> ${corso} developer </h3>`);
    
}

});

$('#logout').on('click', function () {
    localStorage.clear();
    location.href = 'index.html';
});

});

