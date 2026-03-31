const products = [
    {
        id: 1,
        name: "PC Gamer RGB",
        description: "Setup gamer com visual RGB e ótimo desempenho.",
        price: 4999.99,
        oldPrice: 5599.99,
        rating: 5,
        reviews: 124,
        badge: "Novo",
        category: "pc",
        image: "img/produto-pc1.png"
    },
    {
        id: 2,
        name: "Kit Gamer RGB",
        description: "Teclado, mouse e headset para seu setup.",
        price: 399.99,
        oldPrice: 499.99,
        rating: 5,
        reviews: 89,
        badge: "Oferta",
        category: "perifericos",
        image: "img/produto-kit1.png"
    },
    {
        id: 3,
        name: "Gabinete Gamer",
        description: "Gabinete estiloso com lateral transparente.",
        price: 699.99,
        oldPrice: 899.99,
        rating: 4,
        reviews: 256,
        badge: "-20%",
        category: "hardware",
        image: "img/produto-gabinete1.png"
    },
    {
        id: 4,
        name: "Monitor Gamer",
        description: "Tela ideal para jogos e entretenimento.",
        price: 899.99,
        oldPrice: 1199.99,
        rating: 5,
        reviews: 342,
        badge: "Mais Vendido",
        category: "outros",
        image: "img/produto-monitor1.png"
    },
    {
        id: 5,
        name: "Placa Mãe",
        description: "Base sólida para upgrades e montagem.",
        price: 799.99,
        oldPrice: 999.99,
        rating: 4,
        reviews: 64,
        badge: "-24%",
        category: "upgrade",
        image: "img/produto-placamae1.png"
    },
    {
        id: 6,
        name: "Processador Intel",
        description: "Excelente desempenho para uso diário e jogos.",
        price: 1199.99,
        oldPrice: 1399.99,
        rating: 5,
        reviews: 91,
        badge: "Oferta",
        category: "upgrade",
        image: "img/produto-cpu1.png"
    },
    {
        id: 7,
        name: "Notebook Gamer",
        description: "Portátil e potente para produtividade e games.",
        price: 4299.99,
        oldPrice: 4899.99,
        rating: 4,
        reviews: 77,
        badge: "-15%",
        category: "pc",
        image: "img/produto-note1.png"
    },
    {
        id: 8,
        name: "Headset Gamer",
        description: "Áudio imersivo com conforto prolongado.",
        price: 249.99,
        oldPrice: 329.99,
        rating: 5,
        reviews: 115,
        badge: "Gamer",
        category: "perifericos",
        image: "img/produto-headset1.png"
    }
];

let cart = [];

const productsGrid = document.getElementById("productsGrid");
const cartCount = document.getElementById("cartCount");
const cartIcon = document.getElementById("cartIcon");
const cartModal = document.getElementById("cartModal");
const closeModal = document.querySelector(".close");
const cartItems = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartFooter = document.getElementById("cartFooter");
const cartTotal = document.getElementById("cartTotal");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");
const searchInput = document.getElementById("searchInput");
const continueShoppingBtn = document.getElementById("continueShoppingBtn");

function formatPrice(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function renderStars(rating, reviews) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += `<i class="fas fa-star"></i>`;
    }
    return `${stars}<span>(${reviews} avaliações)</span>`;
}

function renderProducts(list = products) {
    productsGrid.innerHTML = list.map(product => `
        <div class="product-card">
            <span class="product-badge">${product.badge}</span>

            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>

                <div class="price">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    <span class="old-price">${formatPrice(product.oldPrice)}</span>
                </div>

                <div class="rating">
                    ${renderStars(product.rating, product.reviews)}
                </div>

                <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `).join("");
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const itemInCart = cart.find(item => item.id === productId);

    if (itemInCart) {
        itemInCart.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showToast(`${product.name} adicionado ao carrinho!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function changeQuantity(productId, amount) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    updateCart();
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = "";
        cartEmpty.style.display = "block";
        cartFooter.style.display = "none";
        cartTotal.textContent = formatPrice(0);
        return;
    }

    cartEmpty.style.display = "none";
    cartFooter.style.display = "block";

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>

            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="cart-item-price">${formatPrice(item.price)}</div>

                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            </div>

            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join("");

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = formatPrice(total);
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.style.display = "flex";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2200);
}

cartIcon.addEventListener("click", (e) => {
    e.preventDefault();
    cartModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    cartModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = "none";
    }
});

continueShoppingBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
});

searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase().trim();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );

    renderProducts(filtered);
});

document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
        const category = card.dataset.category;
        const filtered = products.filter(product => product.category === category);
        renderProducts(filtered);
    });
});

document.getElementById("viewAllBtn").addEventListener("click", (e) => {
    e.preventDefault();
    renderProducts(products);
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) return;
    showToast("Compra finalizada com sucesso!");
    cart = [];
    updateCart();
    cartModal.style.display = "none";
});

renderProducts();
updateCart();
