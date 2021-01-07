
var enviarCorreo = document.getElementById('enviarCorreo');
enviarCorreo.addEventListener("click", function(){
    alert('"El correo fue enviado correctamente..."');
});




var colorIngredientes = document.getElementById('colorIngredientes');
    colorIngredientes.addEventListener('dblclick', function(){
        colorIngredientes.classList.toggle("cambioColor");
});

var colorPreparacion = document.getElementById('colorPreparacion');
    colorPreparacion.addEventListener('dblclick', function(){
        colorPreparacion.classList.toggle("cambioColor");
});




var cardTitle1 = document.getElementById("cardTitle1");
var cardText1 = document.getElementById("cardText1");
var cardText2 = document.getElementById("cardText2");
var cardText3 = document.getElementById("cardText3");

    cardTitle1.addEventListener("click", function(){
        cardText1.classList.toggle("desaparecer");
        cardText2.classList.toggle("desaparecer");
        cardText3.classList.toggle("desaparecer");        
});

var cardTitle2 = document.getElementById("cardTitle2");
var cardText1 = document.getElementById("cardText1");
var cardText2 = document.getElementById("cardText2");
var cardText3 = document.getElementById("cardText3");

    cardTitle2.addEventListener("click", function(){
        cardText1.classList.toggle("desaparecer");
        cardText2.classList.toggle("desaparecer");
        cardText3.classList.toggle("desaparecer");        
});

var cardTitle3 = document.getElementById("cardTitle3");
var cardText1 = document.getElementById("cardText1");
var cardText2 = document.getElementById("cardText2");
var cardText3 = document.getElementById("cardText3");

    cardTitle3.addEventListener("click", function(){
        cardText1.classList.toggle("desaparecer");
        cardText2.classList.toggle("desaparecer");
        cardText3.classList.toggle("desaparecer");        
});