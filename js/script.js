const cardContainer = document.querySelector("#cardContainer");

const cardsArray = [
  {
    id: 1,
    title: "Batman™: Arkham Origins",
    description:
      "Teniendo lugar antes del surgimiento de los criminales más peligrosos de Gotham \
    City, el juego presenta a un Batman joven y poco refinado mientras enfrenta un \
    momento definitorio en su carrera temprana como luchador contra el crimen que \
    marca su camino para convertirse en el Caballero Oscuro.",
    price: 599,
    categories: ["Acción", "Aventura"],
    img: "images/game_cover/batman-arkham-origins.jpg",
  },
  {
    id: 2,
    title: "Borderlands 3",
    description:
      "¡Vuelve el padre de los shooter-looter con miles de armas y una nueva aventura \
    caótica! Ábrete paso por nuevos mundos y enemigos con uno de los cuatro \
    buscacámaras nuevos, cada uno con su profuso árbol de habilidades y opciones \
    de personalización.",
    price: 1499,
    categories: ["Acción", "Rol", "Multijugador Cooperativo"],
    img: "images/game_cover/borderlands3.jpg",
  },
  {
    id: 3,
    title: "Bread & Fred",
    description:
      "Coge a tu mejor amigo para ayudarte en este nuevo desafío cooperativo para \
    ayudar a dos adorables pingüinos, Bread y Fred, a llegar a la cima nevada. \
    Calcula tus saltos, aférrate a las paredes y balanceate sobre los huecos para \
    ver qué tan lejos puedes llegar antes de caer rodando todo el camino de vuelta \
    por la montaña.",
    price: 455,
    categories: ["Action", "Adventure", "Casual", "Indie"],
    img: "images/game_cover/bread&fred.jpg",
  },
  {
    id: 4,
    title: "Sid Meier's Civilization® V",
    description:
      "¡Crea, descubre y descarga nuevos mapas, escenarios, interfaces y más creados \
    por jugadores!",
    price: 606,
    categories: ["Estrategia"],
    img: "images/game_cover/civilization.jpg",
  },
  {
    id: 5,
    title: "Coffee Caravan",
    description:
      "¡Alimenta tu pasión por el café en Coffee Caravan! Como gerente de café, \
    prepara, experimenta con deliciosas recetas y construye tu negocio de café \
    soñado sobre ruedas. Atiende a los clientes, desbloquea nuevos sabores, compra \
    electrodomésticos y disfruta de tu viaje por carretera generado \
    procedimentalmente en esta experiencia roguelite.",
    price: 369,
    categories: ["Acción", "Casual", "Indie", "Simuladores", "Estrategia"],
    img: "images/game_cover/coffee-caravan.jpg",
  },
  {
    id: 6,
    title: "DAVE THE DIVER",
    description:
      "DAVE THE DIVER es un RPG de aventuras casual para un solo jugador que presenta \
    exploración en alta mar y pesca durante el día, y gestión de un restaurante de \
    sushi por la noche. Únete a Dave y sus amigos peculiares mientras intentan \
    descubrir los secretos del misterioso Blue Hole.",
    price: 595,
    categories: ["Aventura", "Casual", "Rol", "Simuladores"],
    img: "images/game_cover/dave-the-diver.jpg",
  },
  {
    id: 7,
    title: "Duck Detective: The Secret Salami",
    description:
      "Resolver crímenes no es precisamente un paseo en el estanque. Eres un detective \
    con mala suerte que además resulta ser un pato. Utiliza tus poderes de de-pato- \
    ducción para inspeccionar evidencias, llenar los vacíos y resolver el caso de \
    una vez por todas, en una aventura narrativa de misterio donde nada es lo que \
    parece.",
    price: 310,
    categories: ["Aventura", "Casual", "Indie"],
    img: "images/game_cover/duck-detective.jpg",
  },
  {
    id: 8,
    title: "Euro Truck Simulator 2",
    description:
      "Viaja por Europa como rey de la carretera, un camionero que entrega carga \
    importante a través de distancias impresionantes. Con docenas de ciudades para \
    explorar, tu resistencia, habilidad y velocidad serán puestas a prueba al \
    máximo.",
    price: 595,
    categories: ["Indie", "Simuladores"],
    img: "images/game_cover/euro-truck-simulator.jpg",
  },
  {
    id: 9,
    title: "Grand Theft Auto IV: The Complete Edition",
    description:
      "Niko Bellic, Johnny Klebitz y Luis Lopez tienen una cosa en común: viven en la \
    peor ciudad de Estados Unidos. Liberty City adora el dinero y el estatus, y es \
    el paraíso para quienes los tienen y una pesadilla viviente para quienes no.",
    price: 759,
    categories: ["Acción", "Aventura"],
    img: "images/game_cover/grand-theft-auto-iv.jpg",
  },
  {
    id: 10,
    title: "Lies of P",
    description:
      "Lies of P es un emocionante soulslike que toma la historia de Pinocho, la \
    voltea y la sitúa contra el oscuro y elegante telón de fondo de la era Belle \
    Époque.",
    price: 1800,
    categories: ["Acción", "Aventura", "Rol"],
    img: "images/game_cover/lies-of-p.jpg",
  },
  {
    id: 11,
    title: "Metro Exodus",
    description:
      "Huye de las ruinas desoladas del Metro de Moscú y emprende un épico viaje que \
    atraviesa todo el continente a través de los desolados parajes de la Rusia \
    post-apocalíptica. Explora niveles vastos y no lineales, sumérgete en una \
    experiencia inmersiva de supervivencia en un mundo abierto y sigue una \
    emocionante trama argumental.",
    price: 1049,
    categories: ["Acción"],
    img: "images/game_cover/metro-exodus.jpg",
  },
  {
    id: 12,
    title: "Moonstone Island",
    description:
      "Moonstone Island es un juego de simulación de vida y coleccionismo de criaturas \
    ambientado en un mundo abierto con más de 100 islas que explorar. Haz amigos, \
    prepara pociones, colecciona espíritus y pon a prueba tu fuerza en peleas de \
    cartas para completar tu formación como alquimista.",
    price: 595,
    categories: ["Aventura", "Indie", "Rol"],
    img: "images/game_cover/moonstone-island.jpg",
  },
  {
    id: 13,
    title: "Portal",
    description:
      "Portal™ es un nuevo juego para un solo jugador de Valve. Ambientado en los \
    misteriosos Laboratorios de Ciencia Aperture, Portal ha sido llamado uno de los \
    juegos más innovadores en el horizonte y ofrecerá a los jugadores horas de \
    jugabilidad única.",
    price: 310,
    categories: ["Acción"],
    img: "images/game_cover/portal.jpg",
  },
  {
    id: 14,
    title: "Tom Clancy's Rainbow Six® Siege",
    description:
      "Tom Clancy's Rainbow Six® Siege es un shooter táctico basado en equipos de élite \
    donde la planificación y ejecución superiores triunfan.",
    price: 849,
    categories: ["Acción", "Multijugador"],
    img: "images/game_cover/rainbow-siege.jpg",
  },
  {
    id: 15,
    title: "Ready or Not",
    description:
      "Ready or Not es un shooter en primera persona intenso y táctico que representa \
    un mundo actual en el que las unidades de policía SWAT son llamadas para \
    desactivar situaciones hostiles y confrontativas.",
    price: 999,
    categories: ["Acción", "Aventura", "Indie"],
    img: "images/game_cover/ready-or-not.jpg",
  },
  {
    id: 16,
    title: "The Elder Scrolls V: Skyrim Special Edition",
    description:
      "Ganador de más de 200 Premios al Juego del Año, The Elder Scrolls V: Skyrim \
    Special Edition da vida a la fantasía épica con impresionante detalle. La \
    Edición Especial incluye el juego aclamado por la crítica y complementos con \
    funciones completamente nuevas.",
    price: 1199,
    categories: ["Rol"],
    img: "images/game_cover/skyrim.jpg",
  },
  {
    id: 17,
    title: "South Park™: The Stick of Truth™",
    description:
      "Desde los peligrosos campos de batalla del patio de recreo de cuarto grado, un \
    joven héroe surgirá, destinado a ser el salvador de South Park. De los \
    creadores de South Park, Trey Parker y Matt Stone, llega una búsqueda épica \
    para volverse... cool. Presentamos South Park™: The Stick of Truth™. Por mil \
    años, la batalla ha sido librada.",
    price: 999,
    categories: ["Acción", "Aventura", "Rol"],
    img: "images/game_cover/south-park-the-stick-of-truth.jpg",
  },
  {
    id: 18,
    title: "Stray",
    description:
      "Perdido, solo y separado de la familia, un gato callejero debe desentrañar un \
    misterio antiguo para escapar de una ciber-ciudad olvidada y encontrar el \
    camino a casa. ",
    price: 799,
    categories: ["Aventura", "Indie"],
    img: "images/game_cover/stray.jpg",
  },
  {
    id: 19,
    title: "Valheim",
    description:
      "Un juego brutal de exploración y supervivencia para 1-10 jugadores, ambientado \
    en un purgatorio generado de forma procedural inspirado en la cultura vikinga. \
    ¡Lucha, construye y conquista tu camino hacia una saga digna del patrocinio de \
    Odín!",
    price: 429,
    categories: [
      "Acción",
      "Aventura",
      "Indie",
      "Rol",
      "Acceso anticipado",
      "Multijugador Cooperativo",
    ],
    img: "images/game_cover/valhheim-ashlands.jpg",
  },
  {
    id: 20,
    title: "WRC 7 FIA World Rally Championship",
    description:
      "Acepta todos los desafíos del Campeonato Mundial de Rally 2017: los coches y \
    pilotos oficiales, 13 países, 52 tramos especiales, todo tipo de superficies, \
    coches más potentes, física más exigente, carreras más largas y un modo \
    eSports para mantenerte al borde de tu asiento durante todo el año.",
    price: 619,
    categories: ["Carreras", "Multijugador"],
    img: "images/game_cover/wrc7.jpg",
  },
];

function createCard(id, title, img) {
  const card = document.createElement("div"); //creo un div por cada loop
  cardContainer.appendChild(card); //meto el div recien creado dentro del cardContainer
  card.id = id; // le asigno una id a ese div
  card.classList = 'hover:cursor-pointer';

  const image = document.createElement("img");
  card.appendChild(image); //meto el img recien creado dentro del div recien creado
  image.src = img; //creo un img y le paso la ruta de la imagen del elemento actual
  image.alt = "image";

  const infoContainer = document.createElement("div");
  card.appendChild(infoContainer);

  const gameTitle = document.createElement("h3");
  infoContainer.appendChild(gameTitle);
  gameTitle.innerText = title;
}

//uso {id, title, description, price, categories, img} en lugar de ===> (elemento) elemento.id, elemento.img, etc...
//para hacerlo mas intuitivo, se le llama destructurar
const cardsList = cardsArray.forEach(
  ({ id, title, description, price, categories, img }) => createCard(id, title, img),
); //uso forEach para loopear a traves de cardsArray

document.addEventListener("DOMContentLoaded", function() {
  cardsList;
});
