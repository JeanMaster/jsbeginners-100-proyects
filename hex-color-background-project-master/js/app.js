//declarando los elementos 
const button = document.getElementById("btn");
const body = document.querySelector("body");
const hexprint = document.getElementById("hex-value");
//event listener
button.addEventListener("click", changeBackground);
//array de los valores para estructurar el hexadecimal
let hexValues = [ 0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

//funcion que hace la magia y se llama al hacer click
function changeBackground() {
    let hexchange = "#" //declaramos el hex con el valor unico que no cambia el #
    for (let i=0; i <=5; i++) {  //este for lo que haces estructurar un hexadecimal random
        random = Math.floor(Math.random() * hexValues.length)
        hexchange = hexchange + hexValues[random]
    }
    hexprint.innerHTML = hexchange  //imprime el valor del hexadecimal 
    body.style.backgroundColor = String(hexchange); //cambia el bakcground de la pagina por el valor hexaecimal.
                                    //puede que el string no sea necesario pero no em funciono sin el.
}

