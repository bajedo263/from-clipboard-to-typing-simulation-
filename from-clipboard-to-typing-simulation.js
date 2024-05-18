// ==UserScript==
// @name PressPapierSimulation
// @namespace http://www.exemple.com/
// @version 0.1
// @description Simule l'écriture humaine du press-papier
// @author Bajedo263
// @match *://*/*
// @grant none
// ==/UserScript==

(function() {
    'use strict';

    // Définit la vitesse de frappe
    var typingSpeed = 50;

    // Définit la fonction de collage
    document.addEventListener('paste', function (e) {
        var text = e.clipboardData.getData('text/plain');

        // Désactive le collage par défaut
        e.preventDefault();

        // Simule l'écriture humaine
        typeWriter(text);
    });

    function typeWriter(text) {
        if (text.length > 0) {
            document.execCommand('insertText', false, text[0]);
            setTimeout(function () {
                typeWriter(text.slice(1));
            }, typingSpeed);
        }
    }
})();
