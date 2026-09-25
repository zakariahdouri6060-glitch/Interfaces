console.log("Hola mundo 😁");
console.warn("Dont do that");
console.error("Error did it");

var hola = 'Saludo';
let quetal = "Saludo 2";
const comoEstas = 'Bien 1';

console.log("ANA" + hola + " " + quetal + " " + comoEstas);

saludarBien();

function saludarBien(x, y, z) {
    console.log(x);
    console.log(hola)
}

const header = document.getElementsByTagName('h1');

const container = document.getElementsByClassName('container');

const formulario = document.getElementById('formulario');

const rellenaForm = document.getElementById('rellenaForm');

const nombre = document.getElementById('name');

const surName = document.getElementById('surname');

// const sexo = document.getElementById('sex');


console.log(header);

console.log(container);

console.log(formulario);

console.log(rellenaForm);

console.log(nombre);

console.log(surName);

// console.log(sexo);


formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surName = document.getElementById('surname').value;
    const sexo = document.getElementsByName('sex').value;
    const email = document.getElementById('email').value;
    const niek = document.getElementById('niek').value;
    const comment = document.getElementById('comment').value;

    console.log(name);
    console.log(surName);
    // console.log(sexo);
    console.log(email);
    console.log(niek);
    console.log(comment);
    
    let datos = document.getElementById('datos');

    datos.innerHTML = `Hola soy ${name} ${surName},  responsable me correo es ${email}`

    datos.className = 'datos-resultado'

    

})


