window.addEventListener("scroll", function () {
    // Trova la posizione corrente dello scroll
    var scrollY = window.scrollY;
  
    // Trova l'elemento su cui desideri simulare il click (sostituiscilo con il tuo selettore)
    var elemento = document.querySelector(".elemento-da-cliccare");
  
    // Calcola la posizione desiderata in cui vuoi simulare il click (ad esempio, quando l'elemento è a 80% dello schermo)
    var posizioneDesiderata = window.innerHeight * 0.8;
  
    // Calcola la posizione corrente dell'elemento rispetto al top del documento
    var elementoTop = elemento.getBoundingClientRect().top + scrollY;
  
    // Controlla se l'elemento è nella posizione desiderata
    if (elementoTop < scrollY + posizioneDesiderata) {
      // Simula un click sull'elemento
      elemento.click();
    }
  });
