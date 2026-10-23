console.log("Catalog de pokemones")

const pokemons = [
    {
        nombre: "Bulbasaur",
        tipo: ["Planta", " Veneno"],
        altura: 0.7,
        peso: 6.9,
        sexo: "Ambos",
        descripcion: "Lleva una semilla en su espalda desde que nace. A medida que crece, la semilla se hace más grande y absorbe nutrientes del sol.",
        imagen: "assets/bulbasaur.jpg",
        region: "Kanto",
        habilidad: {
            principal: "Espesura", 
            oculta: "Clorofila"
        },
        categoria: "Semilla"
    },
    {
        nombre: "Butterfree",
        tipo: ["Bicho", " Volador"],
        altura: 1.1,
        peso: 32.0,
        sexo: "ambos",
        descripcion: "Onocido como el Pokémon Mariposa. Evoluciona de Metapod y se caracteriza por sus grandes alas cubiertas de escamas venenosas que le permiten volar incluso bajo la lluvia.",
        imagen: "assets/butterfree.png",
        region: "Kanto",
        habilidad: {
            principal: "Ojo Compuesto", 
            oculta: "Cromolente"
        },
        categoria: "Mariposa"
    },
    {
        nombre: "Rattata",
        tipo: "Normal",
        altura: 0.3,
        peso: 3.5,
        sexo: "ambos",
        descripcion: "Una pequeña rata, con un cuerpo principalmente violeta y un vientre blanco. Es conocido por su velocidad y su capacidad para adaptarse a diversos entornos, lo que le permite vivir cerca de las viviendas humanas y en la naturaleza.",
        imagen: "assets/rattata.png",
        region: "Alola",
        habilidad: {
            principal: ["Fuga", " Agallas"],
            oculta: "Entusiasmo"
        },
        categoria: "Ratón"
    },
    {
        nombre: "Spearow",
        tipo: ["Normal", " Volador"],
        altura: 0.3,
        peso: 2.0,
        sexo: "ambos",
        descripcion: "A diferencia de Pidgey, Spearow tiene un carácter terrible. Es muy salvaje y a veces ataca a otros Pokémon y a los humanos.",
        imagen: "assets/spearow.png",
        region: "América",
        habilidad: {
            principal: "Vista Lince",
            oculta: "Francotirador"
        },
        categoria: "Pajarito"
    },
    {
        nombre: "Charmander",
        tipo: "Fuego",
        altura: 0.6,
        peso: 8.5,
        sexo: "ambos",
        descripcion: "Es uno de los tres Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región de Kanto",
        imagen: "assets/charmander.png",
        region: "Kanto",
        habilidad: {
            principal: "Mar Llamas",
            oculta: "Poder Solar"
        },
        categoria: "Lagartija "
    },
    {
        nombre: "Squirtle",
        tipo: "Agua",
        altura: 0.5,
        peso: 9.0,
        sexo: "ambos",
        descripcion: "Se esconde dentro de su caparazón cuando está en peligro. Después, dispara chorros de agua a presión contra su enemigo.",
        imagen: "assets/squirtle.png",
        region: "Kanto",
        habilidad: {
            principal: "Torrente",
            oculta: "Cura Lluvia"
        },
        categoria: "Tortuguita"
    },
    {
        nombre: "Caterpie",
        tipo: "Bicho",
        altura: 0.3,
        peso: 2.9,
        sexo: "ambos",
        descripcion: "Tiene unas patas con ventosas que le permiten trepar por los árboles. Cuando se siente amenazado, saca unas antenas rojas que huelen muy mal.",
        imagen: "assets/caterpie.png",
        region: "Kanto",
        habilidad: {
            principal: "Polvo Escudo",
            oculta: "Fuga"
        },
        categoria: "Gusano"
    },
    {
        nombre: "Weedle",
        tipo: ["Bicho", " Veneno"],
        altura: 0.3,
        peso: 3.2,
        sexo: "ambos",
        descripcion: "Vive en bosques y praderas. Tiene un aguijón venenoso en la cabeza y otro en la cola, y los usa para defenderse.",
        imagen: "assets/weedle.png",
        region: "Kanto",
        habilidad: {
            principal: "Polvo Escudo",
            oculta: "Fuga"
        },
        categoria: "Oruga"
    },
    {
        nombre: "Pikachu",
        tipo: "Eléctrico",
        altura: 0.4,
        peso: 6.0,
        sexo: "ambos",
        descripcion: "Guarda electricidad en las bolsas de sus mejillas. Cuando se enfada, la suelta toda de golpe en forma de descarga.",
        imagen: "assets/pikachu.png",
        region: "Kanto",
        habilidad: {
            principal: "Electricidad Estática",
            oculta: "Pararrayos"
        },
        categoria: "Ratón"
    },
    {
        nombre: "Ekans",
        tipo: "Veneno",
        altura: 2.0,
        peso: 6.9,
        sexo: "ambos",
        descripcion: "Es una serpiente que se enrosca para descansar. Se mueve sin hacer ruido y muerde a su presa con colmillos venenosos.",
        imagen: "assets/ekans.png",
        region: "Kanto",
        habilidad: {
            principal: ["Mudar", " Intimidación"],
            oculta: "Nerviosismo"
        },
        categoria: "Serpiente"
    },
    {
        nombre: "Jigglypuff",
        tipo: ["Normal"," Hada"],
        altura: 0.5,
        peso: 5.5,
        sexo: "ambos",
        descripcion: "Canta una melodía que hace dormir a quien la escucha. Si el rival se duerme, Jigglypuff se enfada y le dibuja la cara con un rotulador.",
        imagen: "assets/jigglypuff.png",
        region: "Kanto",
        habilidad: {
            principal: ["Gran Encanto", " Tenacidad"],
            oculta: "Compiescolta"
        },
        categoria: "Globo"
    },
    {
        nombre: "Zubat",
        tipo: ["Veneno", " Volador"],
        altura: 0.8,
        peso: 7.5,
        sexo: "ambos",
        descripcion: "No tiene ojos. Se mueve en la oscuridad con ondas ultrasónicas que salen de su boca. Vive en cuevas y sale de noche.",
        imagen: "assets/zubat.png",
        region: "Kanto",
        habilidad: {
            principal: "Fuerza Mental",
            oculta: "Allanamiento"
        },
        categoria: "Murciélago"
    },
    {
        nombre: "Psyduck",
        tipo: "Agua",
        altura: 0.8,
        peso: 19.6,
        sexo: "ambos",
        descripcion: "Sufre dolores de cabeza casi siempre. Cuando el dolor es muy fuerte, usa poderes psíquicos sin darse cuenta.",
        imagen: "assets/psyduck.png",
        region: "Kanto",
        habilidad: {
            principal: ["Humedad", " Aclimatación"],
            oculta: "Nado Rápido"
        },
        categoria: "Pato"
    },
    {
        nombre: "Geodude",
        tipo: ["Roca", "Tierra"],
        altura: 0.4,
        peso: 20.0,
        sexo: "ambos",
        descripcion: "Parece una piedra en el suelo, y por eso mucha gente lo pisa sin querer. Se enfada y ataca si alguien lo molesta.",
        imagen: "assets/geodude.png",
        region: "Kanto",
        habilidad: {
            principal: ["Cabeza Roca", " Robustez"],
            oculta: "Velo Arena"
        },
        categoria: "Roca"
    },
    {
        nombre: "Machop",
        tipo: "Lucha",
        altura: 0.8,
        peso: 19.5,
        sexo: "ambos",
        descripcion: "Es muy fuerte aunque es pequeño. Entrena todos los días y puede levantar a cien personas sin cansarse.",
        imagen: "assets/machop.png",
        region: "Kanto",
        habilidad: {
            principal: ["Agallas", " Indefenso1"],
            oculta: "Impasible"
        },
        categoria: "Superpoder"
    }
    
]

const lista = document.querySelector("#list");


pokemons.forEach(pokemon => {
    
    const parafo = document.createElement("p");

    //añadir el style a elementos parafo
    parafo.style.cssText = "cursor: pointer; transition: all 0.3 ease";
z
    
    parafo.innerText = pokemon.nombre;

    lista.appendChild(parafo);

    parafo.addEventListener('click', function() {
        const detalles = document.querySelector("#list_content");

        detalles.style.backgroundColor = "#ffb2b2";

        detalles.innerHTML = '';
        const photo = document.createElement("img");
        const nombre = document.createElement("p");
        const tipo = document.createElement("p");
        const altura = document.createElement("p");
        const peso = document.createElement("p");
        const sexo = document.createElement("p");
        const descripcion = document.createElement("p");
        const region = document.createElement("p");
        const habilidadA = document.createElement("p");
        const habilidadB = document.createElement("p");
        const categoria = document.createElement("p");


        photo.src = pokemon.imagen;
        nombre.innerHTML = "<b>Nombre:</b> " + pokemon.nombre;
        tipo.innerHTML = "<b>Tipo:</b> " + pokemon.tipo;
        altura.innerHTML = "<b>Altura:</b> " + pokemon.altura;
        peso.innerHTML = "<b>Peso:</b> " + pokemon.peso;
        sexo.innerHTML = "<b>Sexo:</b> " + pokemon.sexo;
        descripcion.innerHTML = "<b>Descripcion:</b> " + pokemon.descripcion;
        region.innerHTML = "<b>Region:</b> " + pokemon.region;
        habilidadA.innerHTML = "<p><b>Habilidades:</b><p> <b>->Principal:</b> " + pokemon.habilidad.principal;
        habilidadB.innerHTML = "<b>->Oculta:</b> " + pokemon.habilidad.oculta;
        categoria.innerHTML = "<b>categoria:</b> " + pokemon.categoria;

        detalles.appendChild(photo);
        detalles.appendChild(nombre);
        detalles.appendChild(tipo);
        detalles.appendChild(altura);
        detalles.appendChild(peso);
        detalles.appendChild(sexo);
        detalles.appendChild(descripcion);
        detalles.appendChild(region);
        detalles.appendChild(habilidadA);
        detalles.appendChild(habilidadB)
        detalles.appendChild(categoria);



        /*Object.keys(pokemon).forEach(key => {
            if (key === 'imagen') return;
            
            if (typeof value === 'object' && ) {
                
            }
            const p = document.createElement('p');
            const pa = document.createElement('p');

            p.innerText = pokemon[key];
            

            detalles.appendChild(p);
        })*/
    })
});