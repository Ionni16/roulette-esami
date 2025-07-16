const profArr = [
    "Ha mandato l'assistente",
    "Non si è presentato",
    "Ha letto il giornale tutto il tempo",
    "Ha sorriso solo una volta",
    "Era più agitato di me"
];

const domandeArr = [
    "Solo sugli appunti che non ho",
    "Domande trabocchetto",
    "Solo sulle parti che non ho studiato",
    "Domande casuali di vita",
    "Sul titolo della tesi (che non ho)"
];

const statoArr = [
    "Motivazione finta",
    "Panico interiore mascherato",
    "Sto sudando più dell'esame di guida",
    "Faccia da esperto, cuore in fuga",
    "Ho risposto a caso"
];

const esitoArr = [
    "30 e lode (ma era un sogno)",
    "Rimandato, con stile",
    "20 pieno di vergogna",
    "Chiamato il giorno dopo",
    "Sufficienza ottenuta con miracolo"
];

function generaRisultato() {
    // Animazione di uscita (fade out)
    const card = document.getElementById('cardBox');
    if (card) {
        card.classList.remove('show');
        card.classList.add('hide');
        setTimeout(() => {
            // Cambio dati
            document.getElementById('prof').textContent = profArr[Math.floor(Math.random() * profArr.length)];
            document.getElementById('domande').textContent = domandeArr[Math.floor(Math.random() * domandeArr.length)];
            document.getElementById('stato').textContent = statoArr[Math.floor(Math.random() * statoArr.length)];
            document.getElementById('esito').textContent = esitoArr[Math.floor(Math.random() * esitoArr.length)];
            // Animazione di entrata (fade in + "zoom")
            card.classList.remove('hide');
            card.classList.add('show');

            // Audio
            const audio = document.getElementById('audioWin');
            if (audio) {
                audio.currentTime = 0;
                audio.play();
            }
        }, 450); // <--- questa parentesi chiude il setTimeout!
    }
}

// Solo nella pagina roulette.html
if (document.getElementById('giraBtn')) {
    // Mostra un risultato casuale subito
    setTimeout(() => {
        const card = document.getElementById('cardBox');
        if (card) card.classList.add('show');
        generaRisultato();
    }, 100);

    document.getElementById('giraBtn').addEventListener('click', generaRisultato);
}
