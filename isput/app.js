const VARIANT = 3;

const variants = [
    // Варіант 1
    [
        { id: 1, title: "Веб-розробка", subtitle: "Основи HTML та CSS", sortLabel: "Пріоритет", sortValue: 95, available: true },
        { id: 2, title: "JavaScript", subtitle: "Основи програмування", sortLabel: "Пріоритет", sortValue: 88, available: true },
        { id: 3, title: "React", subtitle: "Сучасні фреймворки", sortLabel: "Пріоритет", sortValue: 75, available: false },
        { id: 4, title: "Node.js", subtitle: "Серверна розробка", sortLabel: "Пріоритет", sortValue: 82, available: true }
    ],
    // Варіант 2
    [
        { id: 1, title: "Алгоритми", subtitle: "Структури даних", sortLabel: "Рівень", sortValue: 90, available: true },
        { id: 2, title: "Бази даних", subtitle: "SQL та NoSQL", sortLabel: "Рівень", sortValue: 85, available: true },
        { id: 3, title: "Машинне навчання", subtitle: "AI та ML", sortLabel: "Рівень", sortValue: 70, available: false },
        { id: 4, title: "Кібербезпека", subtitle: "Захист даних", sortLabel: "Рівень", sortValue: 78, available: true },
        { id: 5, title: "Cloud Computing", subtitle: "Хмарні технології", sortLabel: "Рівень", sortValue: 65, available: false }
    ],
    // Варіант 3
    [
        { id: 1, title: "Java", subtitle: "Об'єктно-орієнтоване програмування", sortLabel: "Оцінка", sortValue: 87, available: true },
        { id: 2, title: "C++", subtitle: "Системне програмування", sortLabel: "Оцінка", sortValue: 80, available: false },
        { id: 3, title: "Python", subtitle: "Основи програмування", sortLabel: "Оцінка", sortValue: 92, available: true },

   
    ],
    // Варіант 4
    [
        { id: 1, title: "Дизайн інтерфейсів", subtitle: "UI/UX дизайн", sortLabel: "Бал", sortValue: 88, available: true },
        { id: 2, title: "Графічний дизайн", subtitle: "Adobe Photoshop", sortLabel: "Бал", sortValue: 85, available: true },
        { id: 3, title: "3D моделювання", subtitle: "Blender", sortLabel: "Бал", sortValue: 72, available: false },
        { id: 4, title: "Відеомонтаж", subtitle: "Adobe Premiere", sortLabel: "Бал", sortValue: 79, available: true }
    ],
    // Варіант 5
    [
        { id: 1, title: "Мобільна розробка", subtitle: "Android Studio", sortLabel: "Важливість", sortValue: 91, available: true },
        { id: 2, title: "iOS розробка", subtitle: "Swift та Xcode", sortLabel: "Важливість", sortValue: 86, available: true },
        { id: 3, title: "Flutter", subtitle: "Крос-платформенна розробка", sortLabel: "Важливість", sortValue: 74, available: false },
        { id: 4, title: "React Native", subtitle: "Мобільні додатки", sortLabel: "Важливість", sortValue: 81, available: true },
        { id: 5, title: "Xamarin", subtitle: "Microsoft платформа", sortLabel: "Важливість", sortValue: 68, available: false }
    ],
    // Варіант 6
    [
        { id: 1, title: "Веб-дизайн", subtitle: "Сучасні тренди", sortLabel: "Рейтинг", sortValue: 89, available: true },
        { id: 2, title: "Адаптивність", subtitle: "Responsive design", sortLabel: "Рейтинг", sortValue: 84, available: true },
        { id: 3, title: "Анімації", subtitle: "CSS та JavaScript", sortLabel: "Рейтинг", sortValue: 77, available: false }
    ],
    // Варіант 7
    [
        { id: 1, title: "Git та GitHub", subtitle: "Система контролю версій", sortLabel: "Навичка", sortValue: 93, available: true },
        { id: 2, title: "Docker", subtitle: "Контейнеризація", sortLabel: "Навичка", sortValue: 76, available: false },
        { id: 3, title: "CI/CD", subtitle: "Автоматизація", sortLabel: "Навичка", sortValue: 83, available: true },
        { id: 4, title: "Kubernetes", subtitle: "Оркестрація", sortLabel: "Навичка", sortValue: 71, available: false }
    ],
    // Варіант 8
    [
        { id: 1, title: "TypeScript", subtitle: "Типізований JavaScript", sortLabel: "Прогрес", sortValue: 87, available: true },
        { id: 2, title: "Vue.js", subtitle: "Прогресивний фреймворк", sortLabel: "Прогрес", sortValue: 82, available: true },
        { id: 3, title: "Angular", subtitle: "Повнофункціональний фреймворк", sortLabel: "Прогрес", sortValue: 75, available: false },
        { id: 4, title: "Svelte", subtitle: "Компіляційний фреймворк", sortLabel: "Прогрес", sortValue: 79, available: true }
    ],
    // Варіант 9
    [
        { id: 1, title: "REST API", subtitle: "Архітектура веб-сервісів", sortLabel: "Значення", sortValue: 90, available: true },
        { id: 2, title: "GraphQL", subtitle: "Запити до API", sortLabel: "Значення", sortValue: 85, available: true },
        { id: 3, title: "WebSocket", subtitle: "Реал-тайм комунікація", sortLabel: "Значення", sortValue: 73, available: false },
        { id: 4, title: "gRPC", subtitle: "Високопродуктивний RPC", sortLabel: "Значення", sortValue: 80, available: true },
        { id: 5, title: "SOAP", subtitle: "Протокол обміну", sortLabel: "Значення", sortValue: 66, available: false }
    ],
    // Варіант 10
    [
        { id: 1, title: "MySQL", subtitle: "Реляційна БД", sortLabel: "Популярність", sortValue: 88, available: true },
        { id: 2, title: "PostgreSQL", subtitle: "Розширена БД", sortLabel: "Популярність", sortValue: 86, available: true },
        { id: 3, title: "MongoDB", subtitle: "NoSQL база даних", sortLabel: "Популярність", sortValue: 81, available: false }
    ],
    // Варіант 11
    [
        { id: 1, title: "Тестування", subtitle: "Unit та Integration тести", sortLabel: "Якість", sortValue: 91, available: true },
        { id: 2, title: "Jest", subtitle: "Фреймворк для тестування", sortLabel: "Якість", sortValue: 84, available: true },
        { id: 3, title: "Cypress", subtitle: "E2E тестування", sortLabel: "Якість", sortValue: 78, available: false },
        { id: 4, title: "Selenium", subtitle: "Автоматизація браузера", sortLabel: "Якість", sortValue: 82, available: true }
    ],
    // Варіант 12
    [
        { id: 1, title: "Linux", subtitle: "Операційна система", sortLabel: "Досвід", sortValue: 89, available: true },
        { id: 2, title: "Bash скрипти", subtitle: "Автоматизація задач", sortLabel: "Досвід", sortValue: 83, available: true },
        { id: 3, title: "DevOps", subtitle: "Розробка та експлуатація", sortLabel: "Досвід", sortValue: 76, available: false },
        { id: 4, title: "AWS", subtitle: "Хмарна платформа", sortLabel: "Досвід", sortValue: 80, available: true },
        { id: 5, title: "Azure", subtitle: "Microsoft Cloud", sortLabel: "Досвід", sortValue: 74, available: false }
    ],
    // Варіант 13
    [
        { id: 1, title: "SASS/SCSS", subtitle: "Препроцесор CSS", sortLabel: "Користь", sortValue: 87, available: true },
        { id: 2, title: "Tailwind CSS", subtitle: "Utility-first CSS", sortLabel: "Користь", sortValue: 85, available: true },
        { id: 3, title: "Bootstrap", subtitle: "CSS фреймворк", sortLabel: "Користь", sortValue: 79, available: false }
    ],
    // Варіант 14
    [
        { id: 1, title: "Webpack", subtitle: "Збірка модулів", sortLabel: "Ефективність", sortValue: 86, available: true },
        { id: 2, title: "Vite", subtitle: "Швидка збірка", sortLabel: "Ефективність", sortValue: 92, available: true },
        { id: 3, title: "Parcel", subtitle: "Нульова конфігурація", sortLabel: "Ефективність", sortValue: 77, available: false },
        { id: 4, title: "Rollup", subtitle: "Оптимізація бандлів", sortLabel: "Ефективність", sortValue: 81, available: true }
    ],
    // Варіант 15
    [
        { id: 1, title: "Redux", subtitle: "Управління станом", sortLabel: "Складність", sortValue: 88, available: true },
        { id: 2, title: "MobX", subtitle: "Реактивний стан", sortLabel: "Складність", sortValue: 82, available: true },
        { id: 3, title: "Zustand", subtitle: "Легкий state manager", sortLabel: "Складність", sortValue: 75, available: false },
        { id: 4, title: "Context API", subtitle: "React контекст", sortLabel: "Складність", sortValue: 79, available: true },
        { id: 5, title: "Jotai", subtitle: "Атомарний стан", sortLabel: "Складність", sortValue: 72, available: false }
    ],
    // Варіант 16
    [
        { id: 1, title: "PWA", subtitle: "Прогресивні веб-додатки", sortLabel: "Актуальність", sortValue: 90, available: true },
        { id: 2, title: "Service Workers", subtitle: "Офлайн функціональність", sortLabel: "Актуальність", sortValue: 84, available: true },
        { id: 3, title: "WebAssembly", subtitle: "Високопродуктивний код", sortLabel: "Актуальність", sortValue: 78, available: false }
    ],
    // Варіант 17
    [
        { id: 1, title: "Microservices", subtitle: "Архітектура сервісів", sortLabel: "Масштаб", sortValue: 91, available: true },
        { id: 2, title: "Monolith", subtitle: "Монолітна архітектура", sortLabel: "Масштаб", sortValue: 83, available: true },
        { id: 3, title: "Serverless", subtitle: "Безсерверна архітектура", sortLabel: "Масштаб", sortValue: 76, available: false },
        { id: 4, title: "Event-Driven", subtitle: "Подієво-орієнтована", sortLabel: "Масштаб", sortValue: 80, available: true }
    ],
    // Варіант 18
    [
        { id: 1, title: "Elasticsearch", subtitle: "Пошуковий движок", sortLabel: "Швидкість", sortValue: 89, available: true },
        { id: 2, title: "Redis", subtitle: "In-memory база даних", sortLabel: "Швидкість", sortValue: 87, available: true },
        { id: 3, title: "Memcached", subtitle: "Кешування", sortLabel: "Швидкість", sortValue: 81, available: false }
    ],
    // Варіант 19
    [
        { id: 1, title: "GraphQL", subtitle: "Мова запитів", sortLabel: "Гнучкість", sortValue: 88, available: true },
        { id: 2, title: "Apollo Client", subtitle: "GraphQL клієнт", sortLabel: "Гнучкість", sortValue: 85, available: true },
        { id: 3, title: "Relay", subtitle: "Facebook фреймворк", sortLabel: "Гнучкість", sortValue: 79, available: false },
        { id: 4, title: "Hasura", subtitle: "GraphQL движок", sortLabel: "Гнучкість", sortValue: 82, available: true }
    ],
    // Варіант 20
    [
        { id: 1, title: "Next.js", subtitle: "React фреймворк", sortLabel: "Продуктивність", sortValue: 92, available: true },
        { id: 2, title: "Nuxt.js", subtitle: "Vue фреймворк", sortLabel: "Продуктивність", sortValue: 86, available: true },
        { id: 3, title: "Gatsby", subtitle: "Статичні сайти", sortLabel: "Продуктивність", sortValue: 80, available: false },
        { id: 4, title: "Remix", subtitle: "Full-stack фреймворк", sortLabel: "Продуктивність", sortValue: 84, available: true },
        { id: 5, title: "SvelteKit", subtitle: "Svelte фреймворк", sortLabel: "Продуктивність", sortValue: 77, available: false }
    ],
    // Варіант 21
    [
        { id: 1, title: "JWT", subtitle: "JSON Web Tokens", sortLabel: "Безпека", sortValue: 90, available: true },
        { id: 2, title: "OAuth 2.0", subtitle: "Авторизація", sortLabel: "Безпека", sortValue: 88, available: true },
        { id: 3, title: "HTTPS", subtitle: "Захищене з'єднання", sortLabel: "Безпека", sortValue: 85, available: false }
    ],
    // Варіант 22
    [
        { id: 1, title: "WebGL", subtitle: "3D графіка", sortLabel: "Складність", sortValue: 87, available: true },
        { id: 2, title: "Three.js", subtitle: "3D бібліотека", sortLabel: "Складність", sortValue: 83, available: true },
        { id: 3, title: "Babylon.js", subtitle: "3D движок", sortLabel: "Складність", sortValue: 78, available: false },
        { id: 4, title: "A-Frame", subtitle: "VR фреймворк", sortLabel: "Складність", sortValue: 81, available: true }
    ],
    // Варіант 23
    [
        { id: 1, title: "D3.js", subtitle: "Візуалізація даних", sortLabel: "Потужність", sortValue: 91, available: true },
        { id: 2, title: "Chart.js", subtitle: "Графіки та діаграми", sortLabel: "Потужність", sortValue: 86, available: true },
        { id: 3, title: "Recharts", subtitle: "React графіки", sortLabel: "Потужність", sortValue: 80, available: false },
        { id: 4, title: "Plotly", subtitle: "Інтерактивні графіки", sortLabel: "Потужність", sortValue: 84, available: true }
    ],
    // Варіант 24
    [
        { id: 1, title: "WebRTC", subtitle: "Реал-тайм комунікація", sortLabel: "Технологія", sortValue: 89, available: true },
        { id: 2, title: "Socket.io", subtitle: "WebSocket бібліотека", sortLabel: "Технологія", sortValue: 87, available: true },
        { id: 3, title: "SignalR", subtitle: "Microsoft реал-тайм", sortLabel: "Технологія", sortValue: 82, available: false }
    ],
    // Варіант 25
    [
        { id: 1, title: "Storybook", subtitle: "Розробка компонентів", sortLabel: "Інструмент", sortValue: 88, available: true },
        { id: 2, title: "Figma", subtitle: "Дизайн інструмент", sortLabel: "Інструмент", sortValue: 92, available: true },
        { id: 3, title: "Sketch", subtitle: "UI дизайн", sortLabel: "Інструмент", sortValue: 79, available: false },
        { id: 4, title: "Adobe XD", subtitle: "Прототипування", sortLabel: "Інструмент", sortValue: 83, available: true },
        { id: 5, title: "InVision", subtitle: "Прототипи", sortLabel: "Інструмент", sortValue: 76, available: false }
    ],
    // Варіант 26
    [
        { id: 1, title: "ESLint", subtitle: "Лінтер JavaScript", sortLabel: "Якість коду", sortValue: 90, available: true },
        { id: 2, title: "Prettier", subtitle: "Форматування коду", sortLabel: "Якість коду", sortValue: 89, available: true },
        { id: 3, title: "TypeScript", subtitle: "Типізація", sortLabel: "Якість коду", sortValue: 85, available: false }
    ],
    // Варіант 27
    [
        { id: 1, title: "Nginx", subtitle: "Веб-сервер", sortLabel: "Надійність", sortValue: 91, available: true },
        { id: 2, title: "Apache", subtitle: "HTTP сервер", sortLabel: "Надійність", sortValue: 86, available: true },
        { id: 3, title: "Caddy", subtitle: "Автоматичний HTTPS", sortLabel: "Надійність", sortValue: 81, available: false },
        { id: 4, title: "Traefik", subtitle: "Reverse proxy", sortLabel: "Надійність", sortValue: 84, available: true }
    ],
    // Варіант 28
    [
        { id: 1, title: "Jest", subtitle: "Тестування JavaScript", sortLabel: "Покриття", sortValue: 88, available: true },
        { id: 2, title: "Mocha", subtitle: "Тестовий фреймворк", sortLabel: "Покриття", sortValue: 85, available: true },
        { id: 3, title: "Vitest", subtitle: "Швидке тестування", sortLabel: "Покриття", sortValue: 82, available: false },
        { id: 4, title: "Playwright", subtitle: "E2E тестування", sortLabel: "Покриття", sortValue: 79, available: true }
    ],
    // Варіант 29
    [
        { id: 1, title: "Firebase", subtitle: "Backend як сервіс", sortLabel: "Зручність", sortValue: 89, available: true },
        { id: 2, title: "Supabase", subtitle: "Open source Firebase", sortLabel: "Зручність", sortValue: 87, available: true },
        { id: 3, title: "Appwrite", subtitle: "Backend платформа", sortLabel: "Зручність", sortValue: 83, available: false }
    ],
    // Варіант 30
    [
        { id: 1, title: "TensorFlow.js", subtitle: "ML у браузері", sortLabel: "Інноваційність", sortValue: 92, available: true },
        { id: 2, title: "Brain.js", subtitle: "Нейронні мережі", sortLabel: "Інноваційність", sortValue: 86, available: true },
        { id: 3, title: "ML5.js", subtitle: "Доступне ML", sortLabel: "Інноваційність", sortValue: 80, available: false },
        { id: 4, title: "Synaptic", subtitle: "Архітектура нейромереж", sortLabel: "Інноваційність", sortValue: 84, available: true },
        { id: 5, title: "ConvNetJS", subtitle: "Глибоке навчання", sortLabel: "Інноваційність", sortValue: 77, available: false }
    ]
];

// ============================================
// ВИБІР ДАНИХ ЗА ВАРІАНТОМ
// ============================================
const data = variants[VARIANT - 1] || variants[0];

// ============================================
// ПОЧАТКОВИЙ СТАН
// ============================================
let isSorted = false;
let currentData = [...data];

// ============================================
// ОТРИМАННЯ ЕЛЕМЕНТІВ DOM
// ============================================
const titleEl = document.getElementById('title');
const subtitleEl = document.getElementById('subtitle');
const cardsContainer = document.getElementById('cards');
const sortBtn = document.getElementById('sortBtn');
const onlyAvailableCheckbox = document.getElementById('onlyAvailable');
const countEl = document.getElementById('count');
const emptyMessage = document.getElementById('empty-message');
// ============================================
// ОНОВЛЕННЯ ЗАГОЛОВКІВ
// ============================================
// TODO: Задайте правильні значення для titleEl та subtitleEl
titleEl.textContent = "Дмитренко Богдан Леонідович";
subtitleEl.textContent = `ІН-33-4, варіант ${VARIANT}`;

// ============================================
// ФУНКЦІЯ РЕНДЕРИНГУ КАРТОК
// ============================================
function renderCards() {
    // TODO: 1. Очистіть контейнер cardsContainer від попереднього вмісту
    cardsContainer.innerHTML = '';
    // TODO: 2. Створіть змінну для фільтрованих даних.
    const filteredData = currentData.filter(item => {
        if (onlyAvailableCheckbox.checked) {
            return item.available === true;
        }
        return true;
    });
    // TODO: 3. Обробіть "Порожній стан":
    if (filteredData.length === 0) {
        emptyMessage.style.display = 'block';
        emptyMessage.textContent = 'Немає результатів';
        cardsContainer.style.display = 'none';
    } else {
        emptyMessage.style.display = 'none';
        cardsContainer.style.display = 'grid'; 
    }
    // TODO: 4. Використовуючи цикл (наприклад, forEach), для кожного об'єкта:
    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = item.title;

        const subtitle = document.createElement('div');
        subtitle.className = 'card-subtitle';
        subtitle.textContent = item.subtitle;

        const sortInfo = document.createElement('div');
        sortInfo.className = 'card-sort';
        sortInfo.textContent = `${item.sortLabel}: ${item.sortValue}`;

        const status = document.createElement('div');
        status.className = `card-status ${item.available ? 'available' : 'not-available'}`;
        status.textContent = item.available ? 'Доступно' : 'Недоступно';

        card.appendChild(title);
        card.appendChild(subtitle);
        card.appendChild(sortInfo);
        card.appendChild(status);

        cardsContainer.appendChild(card);
    });
    // TODO: 5. Оновіть текст у countEl.
    countEl.textContent = `Показано: ${filteredData.length} елементів`;
}

// ============================================
// ФУНКЦІЯ СОРТУВАННЯ
// ============================================
function sortCards() {
    // TODO: Реалізуйте сортування масиву currentData за спаданням поля sortValue.
    // Використовуйте метод .sort().
    // Після сортування викличте функцію renderCards(), щоб оновити інтерфейс.
    currentData.sort((a, b) => b.sortValue - a.sortValue);
    isSorted = true;
    renderCards();
}

// ============================================
// ОБРОБНИКИ ПОДІЙ
// ============================================
// TODO: Додайте слухачі подій (addEventListener):
// 1. Для кнопки sortBtn на подію 'click' -> викликати sortCards
sortBtn.addEventListener('click', sortCards);
// 2. Для чекбокса onlyAvailableCheckbox на подію 'change' -> викликати renderCards
onlyAvailableCheckbox.addEventListener('change', renderCards);
// ============================================
// ПОЧАТКОВИЙ РЕНДЕРИНГ
// ============================================
renderCards();

