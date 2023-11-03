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
import FotoBestElectronisShop from "../images/Project/Best-Electronic-shop.JPG";
import PokemonGoCad from "../images/Project/Pokemon-go-card.JPG";
import RandomPersonApi from "../images/Project/Random-person-api.JPG";
import TheWeatherApp from "../images/Project/The-weather-app.JPG";
import TheWitcher from "../images/Project/The-witcher.JPG";
import MainProgress from "../images/Project/Main-progress.JPG";
import LovelyDays from "../images/Project/Lovely-days.JPG";
import PasswordGenerator from "../images/Project/Password-generator.JPG";
import PcEshopJS from "../images/Project/PC-eshop-js.JPG";
import ShopFilter from "../images/Project/Shop-Filter.JPG";
import ActiveNavbarScroll from "../images/Project/Active-navbar-scroll.JPG";
import Zoo from "../images/Project/Zoo.JPG";
import Anglictina from "../images/Project/Anglictina.JPG";

const projects = [
  {
    id: 1,
    heading: "Best Electronic shop",
    url: "https://karelstastny.github.io/react-best-electronics/",
    mainFoto: FotoBestElectronisShop,
    mainTechnology: REACT,
    category: "react",
    quality: "best",
    text: "Tento projekt představuje můj nejrozsáhlejší úspěch v oblasti Reactu. Vytvořil jsem komplexní elektronický obchod spojený s interaktivní databází na platformě Firebase. Projekt poskytuje možnost přidávání nových produktů, obsahuje funkční objednávkový formulář a další pokročilé funkce. Podrobný popis projektu lze nalézt na webové stránce v sekci Projekty. Projekt je hostován na GitHubu a v tuto chvíli je po načtení nutno kliknout na název stránky a obnovit ho pro úplně načtení.",

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
    text: "Tento projekt je zasvěcen fanouškům Pokémonů. Využívá veřejného API k získání informací o různých typech pokémonů a umožňuje procházet a filtrovat tato data. Můžete si nastavit počet pokémonů, které se načtou z databáze, a také filtrovat podle jejich jména. Projekt zahrnuje funkci pro výběr pokémonů s tzv. 'shiny' variantami, které mají odlišné obrázky.",

    secondTechnology: [{ tech: HTML }, { tech: CSS }, { tech: GITHUB }],
  },
  {
    id: 3,
    heading: "Random Person API",
    url: "https://karelstastny.github.io/Random-person-api/",
    mainFoto: RandomPersonApi,
    mainTechnology: JS,
    category: "js",
    quality: "normal",
    text: "Tento projekt přináší zajímavý pohled na práci s veřejným API, kde získává informace o náhodných osobách a zobrazuje je na stránce. Můžete prozkoumat různé detaily o osobách a podle jména filtrovat výsledky. Tento projekt nabízí krátký, avšak zábavný pohled na práci s daty z internetu.",

    secondTechnology: [{ tech: HTML }, { tech: CSS }, { tech: GITHUB }],
  },
  {
    id: 4,
    heading: "The Weather App",
    url: "https://karelstastny.github.io/The-Weather-App/",
    mainFoto: TheWeatherApp,
    mainTechnology: JS,
    category: "js",
    quality: "normal",
    text: "Podívejte se na aktuální počasí ve vaší oblíbené lokalitě díky spojení s externím API. Snadno a rychle zjistíte, jaké je venku počasí, ať už jste kdekoli. Stačí zadat název místa a aplikace vám okamžitě zobrazí informace o počasí.",

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
    text: "Vstupte do světa The Witcher s tímto nádherným projektem. Tato stránka, vyvinutá v JavaScriptu, vám představí nejlepší zážitek ze stránkového designu. Nabízí působivé efekty, plynulé přechody, pokročilé filtry a dokonce i interaktivní fotogalerii. Samozřejmostí je plně responzivní desigen.",

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
    quality: "bad",
    text: "Jednoduchý projekt s praktickou funkcí. Obsahuje tlačítko, které umožňuje rychlý návrat na začátek stránky, a pruh, který ukazuje váš pokrok na stránce. I přes jednoduchost má užitečné využití a může sloužit jako základ pro další rozšíření.",

    secondTechnology: [{ tech: HTML }, { tech: CSS }, { tech: GITHUB }],
  },
  {
    id: 7,
    heading: "Lovely Days",
    url: "https://karelstastny.github.io/Lovely-Days/",
    mainFoto: LovelyDays,
    mainTechnology: JS,
    category: "css",
    quality: "bad",
    text: "Jednoduchá aplikace s praktickou funkcí. Po zadaní data vám ukáže, kolik dní uplynulo od té doby. Ačkoliv je nápad základní, byla vyvíjena opravdu v začátku mé kariéry a odpovídají tomu i vzhledy..., ale je plně funkční.",

    secondTechnology: [{ tech: HTML }, { tech: CSS }, { tech: GITHUB }],
  },
  {
    id: 8,
    heading: "Password generator",
    url: "https://karelstastny.github.io/Password-random-generator-easy/",
    mainFoto: PasswordGenerator,
    mainTechnology: JS,
    category: "js",
    quality: "normal",
    text: "Jednoduchá aplikace pro rychlé vytvoření náhodného hesla. Stačí nastavit požadovanou délku hesla a aplikace vám okamžitě vygeneruje nové heslo. Dále můžete heslo snadno zkopírovat do schránky a použít ho, kde je potřeba.",

    secondTechnology: [
      { tech: HTML },
      { tech: CSS },
      { tech: SCSS },
      { tech: GITHUB },
    ],
  },
  {
    id: 9,
    heading: "PC Eshop JS",
    url: "https://karelstastny.github.io/PC-Shop/",
    mainFoto: PcEshopJS,
    mainTechnology: JS,
    category: "js",
    quality: "normal",
    text: "Jeden z mých úspěšných projektů v JavaScriptu. Tato funkční eshopová aplikace umožňuje načítání produktů ze souboru, přidávání zboží do košíku a zobrazení celkové ceny objednávky. Pokročilá funkcionalita a interaktivní design dělají z tohoto projektu skvělý příklad, jak vytvořit  eshop v rámci webové aplikace.",

    secondTechnology: [{ tech: HTML }, { tech: CSS }, { tech: GITHUB }],
  },
  {
    id: 10,
    heading: "Shop Filter",
    url: "https://karelstastny.github.io/PC-E-shop-filter/",
    mainFoto: ShopFilter,
    mainTechnology: JS,
    category: "js",
    quality: "normal",
    text: "Jednoduchý projekt v JavaScriptu, který zpracovává a zobrazuje data ze souboru. Aplikace umožňuje filtrovat zboží podle názvu a rychle najít to, co hledáte. I přes svou jednoduchost nabízí užitečnou funkci a pomáhá uživatelům nalézt požadované produkty snadno a rychle.",

    secondTechnology: [{ tech: HTML }, { tech: CSS }, { tech: GITHUB }],
  },
  {
    id: 11,
    heading: "Active Navbar Scroll",
    url: "https://karelstastny.github.io/Active-navbar-scroll/",
    mainFoto: ActiveNavbarScroll,
    mainTechnology: JS,
    category: "js",
    quality: "normal",
    text: "Jednoduchý projekt v JavaScriptu, který vytváří plynulou navigaci na jednostránkovém webu. Po kliknutí na položku navigačního menu se stránka automaticky posune ke správné sekci obsahu. Tento projekt zajišťuje pohodlnou a intuitivní navigaci na dlouhých webových stránkách.",

    secondTechnology: [{ tech: HTML }, { tech: CSS }, { tech: GITHUB }],
  },  {
    id: 12,
    heading: "Zoo Web",
    url: "https://react-zoo-web.vercel.app/",
    mainFoto: Zoo,
    mainTechnology: REACT,
    category: "react",
    quality: "best",
    text: "Jedná se o jeden z mých větších projektů v Reactu, kde jsem se pokusil vytvořit webové stránky pro fiktivní zoologickou zahradu. Na těchto stránkách jsem se snažil zahrnout mnoho prvků, které jsou typické pro reálnou zoologickou zahradu. Zejména jsem se zaměřil na sekci s různými zvířaty, pro kterou jsem vytvořil vlastní databázi pomocí JavaScriptu. Dále jsem implementoval oblíbené položky, které ukládám pomocí Local Storage, což přispívá k uživatelskému pohodlí.",

    secondTechnology: [{ tech: HTML }, { tech: CSS }, { tech: SCSS },{ tech: GITHUB }],
  },
   {
    id: 13,
    heading: "Aplikace Angličtina",
    url: "https://karelstastny.github.io/anglictina/",
    mainFoto: Anglictina,
    mainTechnology: REACT,
    category: "react",
    quality: "best",
    text: "Rozpracovaný !!!!!!!!!!!!!!!!!!!!!!!!!!",

    secondTechnology: [{ tech: HTML }, { tech: TALWIND },{ tech: GITHUB },{ tech: JS }],
  },
];

export default projects;
