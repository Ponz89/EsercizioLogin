$(() => {

    localStorage.clear();
    $('#entra').on('click', function () {
        let utente = $('#email').val().trim();
        let password = $('#password').val().trim();
        let flag1 = true;
        let flag2 = true;
        const regexEmail = new RegExp('[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}');
        const regexPass = new RegExp('(?=.*?[0-9])');

        if (utente == '') {
            $('#emailErr').html('Inserisci ');
            flag1 = false;
        } else if (!regexEmail.test(utente)) {
            $('#emailErr').html('inserisci una ');
            flag1 = false;
        } else {
            $('#emailErr').html('');
            flag1 = true;
        }

        if (password == '') {
            $('#passErr').html('Inserisci ');
            flag2 = false;
        } else if (password.length < 6) {
            $('#passErr').html('la password deve essere di almeno 6 caratteri');
            flag2 = false;
        } else if (!regexPass.test(password)) {
            $('#passErr').html('la password deve essere di almeno 6 caratteri');
            flag2 = false;
        }
        else {
            $('#passErr').html('');
            flag2 = true;
        }

        if (flag1 && flag2) {
            caricamento();
            setTimeout(login, 1000);
        }

        function caricamento() {
            $('.modal-overlay').addClass('open-modal');
        }

        function login() {
            localStorage.setItem('utente', utente);
            location.href = 'elenco.html';
        }

    });
});