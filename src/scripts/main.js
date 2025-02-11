document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    const hero = document.querySelector(".hero");
    const left = document.querySelector(".split.left");
    const right = document.querySelector(".split.right");
    const overlay = document.querySelector(".overlay");

    if (hero) {
        hero.addEventListener("mousemove", (e) => {
            let percentage = (e.clientX / window.innerWidth) * 100;
            left.style.width = `${percentage}%`;
            right.style.width = `${100 - percentage}%`;
            overlay.style.left = `${percentage}%`;
        });
    }

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

    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        const project = button.getAttribute('data-project');
        const likeCount = button.nextElementSibling;
        let count = localStorage.getItem(`like-count-${project}`) || 0;
        likeCount.textContent = count;

        button.addEventListener('click', function() {
            count++;
            localStorage.setItem(`like-count-${project}`, count);
            likeCount.textContent = count;
        });
    });

    // Lógica de tradução
    const translations = {
        en: {
            "Inicio": "Home",
            "Sobre": "About",
            "Habilidades": "Skills",
            "Portifolio": "Portfolio",
            "Contato": "Contact",
            "Olá meu nome é": "Hello, my name is",
            "Bem vindo ao meu Portifolio": "Welcome to my Portfolio",
            "Um pouco sobre mim": "A little about me",
            "Desenvolvedor Fullstack": "Fullstack Developer"
        },
        it: {
            "Inicio": "Inizio",
            "Sobre": "Chi sono",
            "Habilidades": "Competenze",
            "Portifolio": "Portfolio",
            "Contato": "Contatto",
            "Olá meu nome é": "Ciao, mi chiamo",
            "Bem vindo ao meu Portifolio": "Benvenuto nel mio Portfolio",
            "Um pouco sobre mim": "Un po' su di me",
            "Desenvolvedor Fullstack": "Sviluppatore Fullstack"
        },
        pt: {
            "Inicio": "Inicio",
            "Sobre": "Sobre",
            "Habilidades": "Habilidades",
            "Portifolio": "Portifolio",
            "Contato": "Contato",
            "Olá meu nome é": "Olá meu nome é",
            "Bem vindo ao meu Portifolio": "Bem vindo ao meu Portifolio",
            "Um pouco sobre mim": "Um pouco sobre mim",
            "Desenvolvedor Fullstack": "Desenvolvedor Fullstack"
        }
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            translatePage(lang);
        });
    });

    function translatePage(lang) {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[lang][key];
        });
    }

    // Definir idioma padrão como português
    translatePage('pt');
});