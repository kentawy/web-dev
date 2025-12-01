import { Post } from './types.js';

// 1. Отримання елементів DOM із кастингом типів (Type Assertions)
const postsContainer = document.querySelector("#blog-posts") as HTMLDivElement;
const postForm = document.querySelector("#post-form") as HTMLFormElement;
const titleInput = document.querySelector("#post-title") as HTMLInputElement;
const bodyInput = document.querySelector("#post-body") as HTMLTextAreaElement;
const clearBtn = document.querySelector("#btn-clear-posts") as HTMLButtonElement;
const counterEl = document.querySelector("#counter") as HTMLParagraphElement;

// Локальне сховище постів
let posts: Post[] = [];

// 2. Функція рендерингу одного поста (використання createElement)
const renderPost = (post: Post): HTMLElement => {
    // Створення контейнера статті
    const article = document.createElement('article');
    article.className = 'post';

    // Заголовок
    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    // Мета-дані (дата та автор)
    const meta = document.createElement('p');
    meta.className = 'meta';
    // Форматуємо дату
    const dateStr = post.createdAt instanceof Date 
        ? post.createdAt.toLocaleDateString("uk-UA") 
        : new Date(post.createdAt).toLocaleDateString("uk-UA");
        
    meta.innerHTML = `Автор: <b>${post.author || 'Я'}</b> | ${dateStr}`;

    // Текст поста
    const content = document.createElement('p');
    content.textContent = post.body;

    // Збираємо все до купи
    article.appendChild(h2);
    article.appendChild(meta);
    article.appendChild(content);

    // Якщо є категорія (для старих постів)
    if (post.category) {
        article.dataset.category = post.category;
    }

    return article;
};

// 3. Функція оновлення лічильника
const updateCounter = (): void => {
    // Рахуємо кількість дочірніх елементів у контейнері
    const count = postsContainer.children.length;
    counterEl.textContent = `Усього постів: ${count}`;
};

// 4. Функція відображення всіх постів
const renderAllPosts = (postsToRender: Post[]): void => {
    postsContainer.innerHTML = ''; // Очищення перед рендером
    
    postsToRender.forEach(post => {
        const postElem = renderPost(post);
        postsContainer.appendChild(postElem);
    });

    updateCounter();
};

// 5. Обробник додавання нового поста
postForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const newPost: Post = {
        id: Date.now(),
        title: titleInput.value,
        body: bodyInput.value,
        createdAt: new Date(),
        author: 'Студент', // Значення за замовчуванням
        category: 'General'
    };

    // Додаємо в масив
    posts.unshift(newPost); // Додаємо на початок

    // Створюємо елемент і додаємо в DOM (оптимізовано: не перемальовуємо все)
    const postElem = renderPost(newPost);
    postsContainer.prepend(postElem);

    // Оновлюємо лічильник
    updateCounter();

    // Очищуємо форму
    postForm.reset();
});

// 6. Обробник очищення постів
clearBtn.addEventListener('click', () => {
    posts = []; // Очищуємо масив даних
    postsContainer.innerHTML = ''; // Очищуємо DOM
    updateCounter();
});

// 7. Ініціалізація (Завантаження даних з JSON як у попередній лабі)
async function init() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data: any[] = await response.json();
        
        // Мапимо дані з JSON у наш інтерфейс Post
        posts = data.map(item => ({
            id: item.id,
            title: item.title,
            body: item.content, // В JSON було content, в інтерфейсі body
            createdAt: new Date(item.date),
            author: item.author,
            category: item.category	
        }));

        renderAllPosts(posts);

    } catch (error) {
        console.error('Error loading posts:', error);
        counterEl.textContent = 'Помилка завантаження даних';
    }
}

// Запуск
init();