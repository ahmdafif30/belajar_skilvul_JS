// ============= DOM ===================

// let hello = document.getElementsByTagName("h1");

// let greeting = document.getElementById("greeting");
// console.log(hello);

// let greetingNode = document.querySelector("#greeting");
// console.log(greetingNode);

let listHewan = document.getElementById("list-hewan");
listHewan.innerHTML = `<h1>Ini di dalam div list hewan</h1>`;

let hewan = ["Badak", "Gajah", "Biawak", "Jerapah", "Kambing"];

listBuah = document.getElementById("list-buah");
let buah = ["Apel", "Mangga", "Anggur", "Jeruk", "Semangka"];

for (let i = 0; i < buah.length; i++) {
  let cardBuah = `
      <div class= "card">
          <img />
          <p>${buah[i]}</p>
      </div>
  //     `;
  //   listBuah.innerHTML += cardBuah;

  //   let card = document.createElement("div");
  //   let isi = document.createTextNode(buah[i]);
  //   card.append(isi);
  //   card.classList.add("card");
  //   listBuah.append(card);
}
let digimon = [
  {
    name: "Koromon",
    img: "https://digimon.shadowsmith.com/img/koromon.jpg",
    level: "In Training",
  },
  {
    name: "Tsunomon",
    img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
    level: "In Training",
  },
  {
    name: "Yokomon",
    img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
    level: "In Training",
  },
  {
    name: "Motimon",
    img: "https://digimon.shadowsmith.com/img/motimon.jpg",
    level: "In Training",
  },
  {
    name: "Tanemon",
    img: "https://digimon.shadowsmith.com/img/tanemon.jpg",
    level: "In Training",
  },
  {
    name: "Bukamon",
    img: "https://digimon.shadowsmith.com/img/bukamon.jpg",
    level: "In Training",
  },
  {
    name: "Tokomon",
    img: "https://digimon.shadowsmith.com/img/tokomon.jpg",
    level: "In Training",
  },
  {
    name: "Agumon",
    img: "https://digimon.shadowsmith.com/img/agumon.jpg",
    level: "Rookie",
  },
  {
    name: "Gabumon",
    img: "https://digimon.shadowsmith.com/img/gabumon.jpg",
    level: "Rookie",
  },
  {
    name: "Biyomon",
    img: "https://digimon.shadowsmith.com/img/biyomon.jpg",
    level: "Rookie",
  },
  {
    name: "Tentomon",
    img: "https://digimon.shadowsmith.com/img/tentomon.jpg",
    level: "Rookie",
  },
  {
    name: "Palmon",
    img: "https://digimon.shadowsmith.com/img/palmon.jpg",
    level: "Rookie",
  },
  {
    name: "Gomamon",
    img: "https://digimon.shadowsmith.com/img/gomamon.jpg",
    level: "Rookie",
  },
  {
    name: "Patamon",
    img: "https://digimon.shadowsmith.com/img/patamon.jpg",
    level: "Rookie",
  },
  {
    name: "Kuwagamon",
    img: "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
    level: "Champion",
  },
  {
    name: "Greymon",
    img: "https://digimon.shadowsmith.com/img/greymon.jpg",
    level: "Champion",
  },
  {
    name: "Shellmon",
    img: "https://digimon.shadowsmith.com/img/shellmon.jpg",
    level: "Champion",
  },
  {
    name: "Garurumon",
    img: "https://digimon.shadowsmith.com/img/garurumon.jpg",
    level: "Champion",
  },
  {
    name: "Seadramon",
    img: "https://digimon.shadowsmith.com/img/seadramon.jpg",
    level: "Champion",
  },
  {
    name: "Monochromon",
    img: "https://digimon.shadowsmith.com/img/monochromon.jpg",
    level: "Champion",
  },
  {
    name: "Birdramon",
    img: "https://digimon.shadowsmith.com/img/birdramon.jpg",
    level: "Champion",
  },
  {
    name: "Meramon",
    img: "https://digimon.shadowsmith.com/img/meramon.jpg",
    level: "Champion",
  },
  {
    name: "Kabuterimon",
    img: "https://digimon.shadowsmith.com/img/kabuterimon.jpg",
    level: "Champion",
  },
  {
    name: "Andromon",
    img: "https://digimon.shadowsmith.com/img/andromon.jpg",
    level: "Ultimate",
  },
  {
    name: "Togemon",
    img: "https://digimon.shadowsmith.com/img/togemon.jpg",
    level: "Champion",
  },
  {
    name: "Numemon",
    img: "https://digimon.shadowsmith.com/img/numemon.jpg",
    level: "Champion",
  },
  {
    name: "Monzaemon",
    img: "https://digimon.shadowsmith.com/img/monzaemon.jpg",
    level: "Ultimate",
  },
  {
    name: "Ikkakumon",
    img: "https://digimon.shadowsmith.com/img/ikkakumon.jpg",
    level: "Champion",
  },
  {
    name: "Unimon",
    img: "https://digimon.shadowsmith.com/img/unimon.jpg",
    level: "Champion",
  },
  {
    name: "Leomon",
    img: "https://digimon.shadowsmith.com/img/leomon.jpg",
    level: "Champion",
  },
  {
    name: "Ogremon",
    img: "https://digimon.shadowsmith.com/img/ogremon.jpg",
    level: "Champion",
  },
  {
    name: "Devimon",
    img: "https://digimon.shadowsmith.com/img/devimon.jpg",
    level: "Champion",
  },
  {
    name: "Frigimon",
    img: "https://digimon.shadowsmith.com/img/frigimon.jpg",
    level: "Champion",
  },
  {
    name: "Mojyamon",
    img: "https://digimon.shadowsmith.com/img/mojyamon.jpg",
    level: "Champion",
  },
  {
    name: "Sukamon",
    img: "https://digimon.shadowsmith.com/img/sukamon.jpg",
    level: "Champion",
  },
  {
    name: "Centarumon",
    img: "https://digimon.shadowsmith.com/img/centarumon.jpg",
    level: "Champion",
  },
  {
    name: "Bakemon",
    img: "https://digimon.shadowsmith.com/img/bakemon.jpg",
    level: "Champion",
  },
  {
    name: "Elecmon",
    img: "https://digimon.shadowsmith.com/img/elecmon.jpg",
    level: "Rookie",
  },
  {
    name: "Botamon",
    img: "https://digimon.shadowsmith.com/img/botamon.jpg",
    level: "Fresh",
  },
  {
    name: "Punimon",
    img: "https://digimon.shadowsmith.com/img/punimon.jpg",
    level: "Fresh",
  },
  {
    name: "Poyomon",
    img: "https://digimon.shadowsmith.com/img/poyomon.jpg",
    level: "Fresh",
  },
];

let listDigimon = document.getElementById("list-digimon")
let textDigimon = document.getElementById('text-digimon')

for (let i = 0; i < digimon.length; i++) {
  let cardDigimon = `
  <div class= "card" onclick="getCard('${digimon[i].name}')">
  <img src =${digimon[i].img} />
  <p>${digimon[i].name}</p>
  </div>
  `
  listDigimon.innerHTML += cardDigimon
  
}


function getCard (text) {
  console.log(text)
  textDigimon.innerText = text
}

// listDigimon.addEventListener("click", (event) => {
//   if (event.target.className == "card") {
//     console.log(event.target);
//     // console.log("Ini target");
//   }
// });

// function handleClick () {
//   console.log("Ini card pokemon")
// }
// let textPokemon = document.getElementById("text-pokemon")

// textPokemon.addEventListener('click', handleClick)

// textPokemon.onclick = handleClick

// let kartuPokemon = document.getElementById("list-pokemon")

// kartuPokemon.addEventListener('click', handleClick)
