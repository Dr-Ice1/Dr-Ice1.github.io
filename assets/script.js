document.addEventListener("DOMContentLoaded", function () {
    // Recent articles array (modify as needed)
    const articles = [
        { title: "Understanding JavaScript Closures", url: "articles/article1.html", date: "Jan 10, 2025" },
        { title: "Introduction to CSS Flexbox", url: "articles/article2.html", date: "Jan 5, 2025" },
        { title: "How to Deploy a Website on GitHub Pages", url: "articles/article3.html", date: "Dec 30, 2024" }
    ];

    // Populate recent articles dynamically
    const list = document.getElementById("recent-articles");
    if (list) {
        articles.forEach(article => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${article.url}">${article.title}</a> - ${article.date}`;
            list.appendChild(li);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Optional: Mobile menu toggle (if you have a mobile-friendly menu)
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }
});
