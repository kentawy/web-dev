// 1) Дані
const articles = [
  {
    id: 1,
    title: "Основи JavaScript",
    author: "Olha Shutylieva",
    date: "2025-10-10",
    category: "JavaScript",
    tags: ["JavaScript", "Basics", "ES6"],
    content:
      "Коротко про синтаксис, змінні та типи даних. З чого почати роботу з JS.",
  },
  {
    id: 2,
    title: "Гнучкі макети з Flexbox",
    author: "Dmytro Kovalenko",
    date: "2025-10-08",
    category: "CSS",
    tags: ["CSS", "Flexbox", "Layout"],
    content:
      "Flexbox допомагає будувати адаптивні макети з мінімумом коду.",
  },
  {
    id: 3,
    title: "Семантика HTML5",
    author: "Iryna Chorna",
    date: "2025-10-05",
    category: "HTML",
    tags: ["HTML", "Semantic"],
    content:
      "Навіщо використовувати &lt;header&gt;, &lt;main&gt;, &lt;article&gt; та інші семантичні теги.",
  },
  {
    id: 4,
    title: "Методи масивів у JavaScript",
    author: "Roman Hrytsenko",
    date: "2025-10-13",
    category: "JavaScript",
    tags: ["JavaScript", "Array", "map", "filter", "find"],
    content:
      "Практика з map, filter, reduce, find, sort на реальних прикладах.",
  },
];

// 2) Елементи DOM
const postsContainer = document.querySelector("#blog-posts");
const counterEl = document.querySelector("#counter");
const toolbar = document.querySelector("#toolbar");
const btnAll = document.querySelector("#btnAll");
const searchInput = document.querySelector("#searchTitle");
const searchBtn = document.querySelector("#searchBtn");

// 3) Рендер поста (з хештегами)
const renderArticle = ({ title, author, date, category, tags = [], content }) => `
  <article class="post" data-category="${category}">
    <h2>${title}</h2>
    <p class="meta">
      Автор: <b>${author}</b> | Категорія: <i>${category}</i> |
      ${new Date(date).toLocaleDateString("uk-UA")}
    </p>
    <p>${content}</p>
    <div class="tags">
      ${tags.map(t => `<span class="tag">#${t}</span>`).join("")}
    </div>
  </article>`;

// 4) Рендер списку + лічильник
const renderAll = (list = articles) => {
  postsContainer.innerHTML = list.map(renderArticle).join("");
  counterEl.textContent = `Кількість статей: ${list.length}`;
};

// 5) Унікальні категорії і кнопки
const getCategories = () =>
  Array.from(new Set(articles.map(a => a.category))).sort();

const renderCategoryButtons = () => {
  // видалимо попередні, якщо вже були
  toolbar.querySelectorAll("[data-filter]").forEach(b => b.remove());

  const cats = getCategories();
  
  // Вставляємо кнопки категорій після кнопки "Усі"
  cats.reverse().forEach(cat => { // reverse, щоб вони додались у правильному порядку
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = cat;
    btn.dataset.filter = cat;
    btn.setAttribute("aria-pressed", "false");
    btnAll.insertAdjacentElement("afterend", btn);
  });
};

// 6) Фільтрація (filter)
const filterByCategory = (category) =>
  articles.filter(a => a.category.toLowerCase() === category.toLowerCase());

// 7) Пошук (find) за назвою
const findByTitle = (query) =>
  articles.find(a => a.title.toLowerCase().includes(query.toLowerCase()));

// 8) Події: фільтри (делегування)
toolbar.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");
  if (!btn) return;

  // скидаємо активні стани
  toolbar.querySelectorAll(".btn[aria-pressed]").forEach(b => b.setAttribute("aria-pressed", "false"));

  if (btn.id === "btnAll") {
    btn.setAttribute("aria-pressed", "true");
    renderAll(articles);
    return;
  }

  if (btn.dataset.filter) {
    btn.setAttribute("aria-pressed", "true");
    const list = filterByCategory(btn.dataset.filter);
    renderAll(list);
  }
});

// 9) Події: пошук (find)
const doFind = () => {
  const q = (searchInput.value || "").trim();
  if (!q) return;

  const found = findByTitle(q);
  if (found) {
    // Показуємо всі, підсвічуємо знайдений
    renderAll(articles);
    const node = [...postsContainer.children].find(
      el => el.querySelector("h2").textContent === found.title
    );
    if (node) {
      node.style.outline = "3px solid #e53935"; // Використаємо ваш колір
      node.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => (node.style.outline = ""), 1600);
    }
    console.log("Знайдено:", found);
  } else {
    postsContainer.innerHTML = `<p>На жаль, нічого не знайдено за запитом "${q}"</p>`;
    counterEl.textContent = "Кількість статей: 0";
    console.log("Нічого не знайдено за запитом:", q);
  }
};

searchBtn.addEventListener("click", doFind);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") doFind();
});

// 10) Ініціалізація
renderCategoryButtons();
renderAll(articles);