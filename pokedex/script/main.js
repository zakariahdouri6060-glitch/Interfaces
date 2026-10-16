console.log("Catalog de pokemones")

const pokemons = [
    {
        nombre: "Bulbasaur",
        tipo: ["Planta", "Veneno"],
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
        tipo: ["Bicho", "Volador"],
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
            principal: ["Fuga", "Agallas"],
            oculta: "Entusiasmo"
        },
        categoria: "Ratón"
    },
    {
        nombre: "Spearow",
        tipo: ["Normal", "Volador"],
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
        tipo: ["Bicho", "Veneno"],
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
            principal: ["Mudar", "Intimidación"],
            oculta: "Nerviosismo"
        },
        categoria: "Serpiente"
    },
    {
        nombre: "Jigglypuff",
        tipo: []
    }
    
] 