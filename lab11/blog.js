// 1) Дані (Тепер це пустий масив)
let articles = [];

// 2) Елементи DOM (Без змін)
const postsContainer = document.querySelector("#blog-posts");
const counterEl = document.querySelector("#counter");
const toolbar = document.querySelector("#toolbar");
const btnAll = document.querySelector("#btnAll");
const searchInput = document.querySelector("#searchTitle");
const searchBtn = document.querySelector("#searchBtn");

// 3) Рендер поста (Без змін)
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

// 4) Рендер списку + лічильник (Без змін)
const renderAll = (list = articles) => {
  postsContainer.innerHTML = list.map(renderArticle).join("");
  counterEl.textContent = `Кількість статей: ${list.length}`;
};

// 5) Унікальні категорії і кнопки (Без змін)
const getCategories = () =>
  Array.from(new Set(articles.map(a => a.category))).sort();

const renderCategoryButtons = () => {
  toolbar.querySelectorAll("[data-filter]").forEach(b => b.remove());
  const cats = getCategories();
  cats.reverse().forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = cat;
    btn.dataset.filter = cat;
    btn.setAttribute("aria-pressed", "false");
    btnAll.insertAdjacentElement("afterend", btn);
  });
};

// 6) Фільтрація (Без змін)
const filterByCategory = (category) =>
  articles.filter(a => a.category.toLowerCase() === category.toLowerCase());

// 7) Пошук (Без змін)
const findByTitle = (query) =>
  articles.find(a => a.title.toLowerCase().includes(query.toLowerCase()));

// 8) Події: фільтри (Без змін)
toolbar.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");
  if (!btn) return;

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

// 9) Події: пошук (Без змін)
const doFind = () => {
  const q = (searchInput.value || "").trim();
  if (!q) return;

  const found = findByTitle(q);
  if (found) {
    renderAll(articles);
    const node = [...postsContainer.children].find(
      el => el.querySelector("h2").textContent === found.title
    );
    if (node) {
      node.style.outline = "3px solid #e53935";
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

// 10) Ініціалізація (ОНОВЛЕНО ВІДПОВІДНО ДО ЛАБОРАТОРНОЇ РОБОТИ)
async function main() {
  try {
    // Показати статус "Завантаження..."
    postsContainer.innerHTML = "<p>Завантаження...</p>";
    counterEl.textContent = "";

    // Виклик fetch() до локального файлу
    const response = await fetch('data.json');

    // Перевірити response.ok та кинути помилку
    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status} ${response.statusText}`);
    }

    // Використати response.json()
    const data = await response.json();

    // Присвоюємо завантажені дані глобальній змінній, на яку розраховує решта коду
    articles = data;

    // "Успішно" - відобразити дані
    renderCategoryButtons();
    renderAll(articles);
    console.log("Дані успішно завантажено та відображено.");

  } catch (error) {
    // Обробка винятків у try...catch
    console.error('Помилка завантаження даних:', error);
    
    // Показати повідомлення про помилку
    postsContainer.innerHTML = `<p>Помилка: не вдалося завантажити дані. (${error.message})</p>`;
    counterEl.textContent = "Кількість статей: 0";
  }
}

// Запускаємо асинхронну ініціалізацію
main();