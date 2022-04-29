const jeu = {

    blague: function () {
        document.querySelectorAll('.petite_blague').removeAttribute('hidden');
    }
};

document.querySelectorAll('.petite_blague').addEventListener('keydown', function() {
   jeu.blague();
});