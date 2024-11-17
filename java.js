document.addEventListener('DOMContentLoaded', function() {
   
    var stavke = ["Misevi", "Tastatura", "Stolice", "Slusalice", "Monitori"];

    
    var lista = document.getElementById('lista');

   
    stavke.forEach(function(stavka) {
        var li = document.createElement('li');
        li.textContent = stavka;
        lista.appendChild(li);
    });
});

var inputField = document.getElementById('polje2');
inputField.addEventListener('keyup', function() {
    this.value = this.value.toLowerCase();
});


function showMessage() {
    alert("Trenutno kupovina nije u funkciji");
}


function showMessage1(event) {
    event.preventDefault(); 
    var polje1 = document.getElementById("polje1").value;
    var polje2 = document.getElementById("polje2").value;
    var polje3 = document.getElementById("polje3").value;
    if (polje1 === "" || polje2 === "" ) {
        alert("Morate popuniti polja sa emailom i licnim podacima");
    } else {
        alert("Poruka je poslata");
        document.getElementById("polje1").value = "";
        document.getElementById("polje2").value = "";
        document.getElementById("polje3").value = "";
    }
}

let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 3000);
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}


window.onload = function() {
    showSlides();
};

