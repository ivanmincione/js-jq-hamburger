// seleziono la classe e l'icona dell'hamburger menu e al CLICK genero una funzione anonima che applica .SHOW alla lista dei link del menu ---- show con effetto transizione
$(".header-right a i").click(function() {
    $(".hamburger-menu").show(1500);
    // in CSS è presente una classe active che imposta il display block quindi basta agingere la classe
    // $(".hamburger-menu").addClass("active");
});

// seleziono l'icona dell'hamburger menu una volta esploso e sempre dopo il CliCK genero una funzione anonima che con .HIDE nasconde la lista dei link del menu ---- hide con effetto dissolvenza
$(".hamburger-menu a i").click(function() {
    $(".hamburger-menu").hide(1000);
    // se utilizzo add.class in contropartita devo usare remove.class
    // $(".hamburger-menu").removeClass("active");
});
