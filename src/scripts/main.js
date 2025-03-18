document.addEventListener("DOMContentLoaded", async function () {
    AOS.init();
});

const hero = document.querySelector(".hero");
const left = document.querySelector(".split.left");
const right = document.querySelector(".split.right");
const overlay = document.querySelector(".overlay");

// Função de tradução
const translations = {
    pt: {
        "title": "Portfólio - Michael de Lima",
        "hero.welcome": "Olá, meu nome é <span class='highlight'>Michael de Lima Rocha</span>",
        "hero.portfolio": "Bem-vindo ao meu Portfólio",
        "nav.inicio": "Inicio",
        "nav.sobre": "Sobre",
        "nav.habilidades": "Habilidades",
        "nav.portifolio": "Portfólio",
        "nav.contato": "Contato",
        "sobre.title": "Sobre",
        "sobre.subtitle": "Um pouco sobre mim",
        "habilidades.title": "Competências & Habilidades",
        "portifolio.frontend": "Front-end",
        "portifolio.backend": "Back-end",
        "portifolio.mobile": "Mobile",
        "footer.copyright": "&copy; 2023 Michael de Lima Rocha | Desenvolvedor Fullstack",
        "contato.address-text": "Rua Exemplo, 123, Cidade, Estado",
        "contato.address": "Endereço",
        "contato.submit": "Enviar",
        "contato.message": "Mensagem",
        "contato.email": "Email",
        "contato.name": "Nome",
        "contato.subtitle": "Fique à vontade para entrar em contato",
        "contato.title": "Contato",
        "portifolio.mobile": "Mobile",
        // Outras traduções em português...
    },
    en: {
        "title": "Portfolio - Michael de Lima",
        "hero.welcome": "Hello, my name is <span class='highlight'>Michael de Lima Rocha</span>",
        "hero.portfolio": "Welcome to my Portfolio",
        "nav.inicio": "Home",
        "nav.sobre": "About",
        "sobre.description": "My professional journey began in another field, where I worked as a production manager, but my passion and dedication to studies led me to a career transition into development. Today, my mission is to transform ideas into efficient solutions, creating scalable and impactful applications. My experience includes JavaScript, Python, ReactJS, React Native, SCSS, LESS, Bootstrap, Git, GitHub, HTML, and CSS, as well as a strong knowledge in organizing and optimizing code. I constantly seek to improve my skills and explore new technologies to always deliver the best result. Outside of Code, when I'm not developing, I enjoy camping with my family, playing video games with my son, and watching series and movies. I'm a fan of suspense and comedy, with my favorite series being The Office, and my favorite movie being Shutter Island. I'm also a passionate fan of Santos FC and really value outdoor moments. I'm always open to new opportunities, challenges, and connections. Let's chat? 🚀",
        "nav.habilidades": "Skills",
        "nav.portifolio": "Portfolio",
        "nav.contato": "Contact",
        "sobre.title": "About",
        "sobre.subtitle": "A little about me",
        "habilidades.title": "Competencies & Skills",
        "portifolio.frontend": "Front-end",
        "portifolio.backend": "Back-end",
        "portifolio.mobile": "Mobile",
        "footer.copyright": "&copy; 2023 Michael de Lima Rocha | Fullstack Developer",
        "contato.address-text": "Via Esempio, 123, Citta, Stato",
        "contato.address": "My Address",
        "contato.submit": "Send",
        "contato.message": "Message",
        "contato.email": "Email",
        "contato.name": "Name",
        "contato.subtitle": "Feel free to contact me",
        "contato.title": "Contact",
        "portifolio.mobile": "Mobile",
        "portifolio.title": "Portfolio",
        // Other translations in English...
    },
    it: {
        "title": "Portfolio - Michael de Lima",
        "hero.welcome": "Ciao, mi chiamo <span class='highlight'>Michael de Lima Rocha</span>",
        "hero.portfolio": "Benvenuto nel mio Portfolio",
        "nav.inicio": "Inizio",
        "nav.sobre": "Chi sono",
        "sobre.description": "Il mio percorso professionale è iniziato in un altro settore, dove ho lavorato come responsabile della produzione, ma la mia passione e dedizione agli studi mi hanno portato a una transizione di carriera verso lo sviluppo. Oggi, la mia missione è trasformare le idee in soluzioni efficienti, creando applicazioni scalabili e impattanti. La mia esperienza include JavaScript, Python, ReactJS, React Native, SCSS, LESS, Bootstrap, Git, GitHub, HTML e CSS, oltre a una solida conoscenza nell'organizzazione e nell'ottimizzazione del codice. Cerco costantemente di migliorare le mie abilità ed esplorare nuove tecnologie per offrire sempre il miglior risultato. Fuori dal codice, quando non sto sviluppando, mi piace fare campeggio con la mia famiglia, giocare ai videogiochi con mio figlio e guardare serie e film. Sono un fan del thriller e della commedia, con la mia serie preferita che è The Office e il mio film preferito, Shutter Island. Sono anche un appassionato tifoso del Santos FC e apprezzo molto i momenti all'aria aperta. Sono sempre aperto a nuove opportunità, sfide e connessioni. Parliamone? 🚀",
        "nav.habilidades": "Competenze",
        "nav.portifolio": "Portfolio",
        "nav.contato": "Contatto",
        "sobre.title": "Chi sono",
        "sobre.subtitle": "Un po' su di me",
        "habilidades.title": "Competenze & Abilità",
        "portifolio.frontend": "Front-end",
        "portifolio.backend": "Back-end",
        "portifolio.mobile": "Mobile",
        "footer.copyright": "&copy; 2025 Michael de Lima Rocha | Sviluppatore Fullstack",
        "contato.address-text": "Via Esempio, 123, Citta, Stato",
        "contato.address": "Indirizzo",
        "contato.submit": "Invia",
        "contato.message": "Messaggio",
        "contato.email": "Email",
        "contato.name": "Nome",
        "contato.subtitle": "Sei libero di contattarmi",
        "contato.title": "Contatto",
        "portifolio.mobile": "Mobile",
        "portifolio.title": "Portfolio",
        // Other translations in Italian...
    }
};

// Função para alterar o idioma da página
function translatePage(language) {
    const elementsToTranslate = document.querySelectorAll("[data-translate]");

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[language] && translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });

    // Também atualize o título da página
    document.title = translations[language]["title"];
}

// Função para alternar entre os idiomas
document.getElementById("btn-en").addEventListener("click", () => {
    translatePage("en");
});

document.getElementById("btn-it").addEventListener("click", () => {
    translatePage("it");
});

document.addEventListener("DOMContentLoaded", () => {
    translatePage("pt"); // Idioma padrão é o Português

    const tabs = document.querySelectorAll(".tab-link");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tabPanes.forEach(p => p.classList.remove("active"));

            tab.classList.add("active");
            document.getElementById(tab.dataset.tab).classList.add("active");
        });
    });

    // AOS Initialization
    AOS.init();
});

hero.addEventListener("mousemove", (e) => {
    let percentage = (e.clientX / window.innerWidth) * 100;
    left.style.width = `${percentage}%`;
    right.style.width = `${100 - percentage}%`;
    overlay.style.left = `${percentage}%`;
});
