document.addEventListener("DOMContentLoaded", async function () {
    AOS.init();
});

const hero = document.querySelector(".hero");
const left = document.querySelector(".split.left");
const right = document.querySelector(".split.right");
const overlay = document.querySelector(".overlay");

hero.addEventListener("mousemove", (e) => {
    let percentage = (e.clientX / window.innerWidth) * 100;
    left.style.width = `${percentage}%`;
    right.style.width = `${100 - percentage}%`;
    overlay.style.left = `${percentage}%`;
});

document.addEventListener("DOMContentLoaded", () => {
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
});
