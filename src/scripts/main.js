document.addEventListener("DOMContentLoaded", async function () {
    AOS.init();

    console.log("🚀 Iniciando script...");

    // 🎨 Animação da seção Hero
    const hero = document.querySelector(".hero");
    const left = document.querySelector(".split.left");
    const right = document.querySelector(".split.right");
    const overlay = document.querySelector(".overlay");

    if (hero && left && right && overlay) {
        hero.addEventListener("mousemove", (e) => {
            let percentage = (e.clientX / window.innerWidth) * 100;
            left.style.width = `${percentage}%`;
            right.style.width = `${100 - percentage}%`;
            overlay.style.left = `${percentage}%`;
        });
    }

    // 🗂️ Tabs na seção "Sobre"
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

    // 🌍 Carregar traduções de arquivos JSON
    const translations = {};

    async function loadTranslations(lang) {
        try {
            console.log(`🔄 Carregando JSON: ${lang}`);
            const response = await fetch(`./dist/locales/${lang}.json`);
            if (!response.ok) throw new Error(`❌ Erro ao carregar ${lang}.json`);
            translations[lang] = await response.json();
            console.log(`✅ ${lang}.json carregado com sucesso!`);
            return translations[lang];
        } catch (error) {
            console.error(`❌ Erro ao carregar traduções (${lang}):`, error);
            return null;
        }
    }

    async function translatePage(lang) {
        console.log(`🌍 Aplicando tradução para: ${lang}`);

        if (!translations[lang]) {
            await loadTranslations(lang);
        }

        if (!translations[lang]) {
            console.error(`⚠️ Traduções para '${lang}' não carregadas.`);
            return;
        }

        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            const translation = key.split('.').reduce((o, i) => (o ? o[i] : null), translations[lang]);
            if (translation) {
                element.innerHTML = translation;
                console.log(`✅ Traduzido: ${key} -> ${translation}`);
            } else {
                console.warn(`⚠️ Chave '${key}' não encontrada no JSON`);
            }
        });

        localStorage.setItem("language", lang);
        console.log(`💾 Idioma salvo no localStorage: ${lang}`);
    }

    // 🔹 Define o idioma padrão como "pt" caso não tenha um salvo
    let savedLanguage = localStorage.getItem("language") || "pt";

    console.log(`🌍 Idioma detectado: ${savedLanguage}`);

    // 🔄 Aguarda a tradução antes de exibir a página
    await translatePage(savedLanguage);

    // 🌍 Alternar idioma ao clicar nos botões
    document.getElementById("btn-en")?.addEventListener("click", () => translatePage("en"));
    document.getElementById("btn-it")?.addEventListener("click", () => translatePage("it"));
    document.getElementById("btn-pt")?.addEventListener("click", () => translatePage("pt"));

    // 🌙 Alternar Tema Claro/Escuro
    const themeToggleBtn = document.querySelector(".theme-btn");
    const body = document.body;

    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark-theme");
        } else {
            body.classList.remove("dark-theme");
        }
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const newTheme = body.classList.contains("dark-theme") ? "light" : "dark";
            applyTheme(newTheme);
            localStorage.setItem("theme", newTheme);
        });
    }

    console.log("✅ Script carregado com sucesso!");
});
