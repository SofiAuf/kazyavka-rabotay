// Встав сюди своє посилання, але додай в кінці /products
// Наприклад: https://my-json-server.typicode.com/SofiAuf/kazyavka-rebotay/products
const API_URL = 'СЮДИ_ВСТАВ_СВОЄ_ПОСИЛАННЯ/products';

const grid = document.getElementById('products-grid');

async function getProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();

        // Очищаємо грін перед додаванням
        grid.innerHTML = '';

        products.forEach(product => {
            // Створюємо картку HTML
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <h3>${product.title}</h3>
                <img src="${product.image}" alt="${product.title}">
                <div class="price">Price: ${product.price}$</div>
                <p>${product.description}</p>
                <a href="#" class="seller-link">Seller profile</a>
                <button class="buy-btn">Buy</button>
            `;

            grid.appendChild(card);
        });

    } catch (error) {
        console.error('Помилка завантаження:', error);
    }
}

// Запускаємо функцію
getProducts();
