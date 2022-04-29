const jeu = {
    let b = document.querySelectorAll('.petite_blague');
    blague: function () {

    }
};

demo = {
    intClics: 0,
    tagSpanNombreClics: document.querySelector('.clics'),
    ajouterClic: function (objetEvent) {
        if (objetEvent.keyCode == 32) {
            this.intClics++;
            this.afficherClics();
        }
    }
};

document.querySelectorAll('.petite_blague').addEventListener('keydown', function() {
   jeu.blague();
});
document.querySelector('body').addEventListener('keyup', function (objEvenement) {
    demo.ajouterClic(objEvenement);
});