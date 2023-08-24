// Icon
import HTML from "../images/icon/html.png";
import CSS from "../images/icon/css.png";
import SCSS from "../images/icon/scss.png";
import TALWIND from "../images/icon/talwind.png";
import JS from "../images/icon/js.png";
import REACT from "../images/icon/react.png";
import FIREABSE from "../images/icon/firebase.png";
import GITHUB from "../images/icon/github.png";


// Foto Project
import FotoBestElectronisShop from "../images/Project/Best-Electronic-shop.JPG"
import PokemonGoCad from "../images/Project/Pokemon-go-card.JPG"
import RandomPersonApi from "../images/Project/Random-person-api.JPG"
import TheWeatherApp from "../images/Project/The-weather-app.JPG"
import TheWitcher from "../images/Project/The-witcher.JPG"
import MainProgress from "../images/Project/Main-progress.JPG"

const projects = [
    {
        id: 1,
        heading: "Best Electronic shop",
        url: "https://karelstastny.github.io/react-best-electronics/",
        mainFoto: FotoBestElectronisShop,
        mainTechnology: REACT,
        category: "react",
        quality: "best",
        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",

        secondTechnology: [
            { tech: HTML },
            { tech: TALWIND },
            { tech: FIREABSE },
            { tech: GITHUB },
          ],
    },
    {
        id: 2,
        heading: "Pokemon Go card",
        url: "https://karelstastny.github.io/Pokemon-Go-card/",
        mainFoto: PokemonGoCad,
        mainTechnology: JS,
        category: "js",
        quality: "normal",
        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",

         secondTechnology: [
            { tech: HTML },
            { tech: CSS },
            { tech: GITHUB },
          ],
    },
    {
        id: 3,
        heading: "Random Person API",
        url: "https://karelstastny.github.io/Random-person-api/",
        mainFoto: RandomPersonApi,
        mainTechnology: JS,
        category: "js",
        quality: "normal",
        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",

        secondTechnology: [
            { tech: HTML },
            { tech: CSS },
            { tech: GITHUB },
          ],
    },
    {
        id: 4,
        heading: "The Weather App",
        url: "https://karelstastny.github.io/The-Weather-App/",
        mainFoto: TheWeatherApp,
        mainTechnology: JS,
        category: "js",
        quality: "normal",
        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",

        secondTechnology: [
            { tech: HTML },
            { tech: CSS },
            { tech: SCSS },
            { tech: GITHUB },
          ],
    },
    {
        id: 5,
        heading: "The Witcher",
        url: "https://karelstastny.github.io/The-Witcher-Web/",
        mainFoto: TheWitcher,
        mainTechnology: JS,
        category: "js",
        quality: "best",
        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",

        secondTechnology: [
            { tech: HTML },
            { tech: SCSS },
            { tech: CSS },
            { tech: GITHUB },
          ],
    },
    {
        id: 6,
        heading: "Scrol up and Progress",
        url: "https://karelstastny.github.io/Scroll-up-and-progress/",
        mainFoto: MainProgress,
        mainTechnology: JS,
        category: "css",
        quality: "style",
        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",

        secondTechnology: [
            { tech: HTML },
            { tech: CSS },
            { tech: GITHUB },
          
          ],
    },
]


export default projects