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
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Teclado Mecanico",
        description: "Teclado Mecanico branco estiloso com custo beneficio.",
        price: 399.99,
        oldPrice: 499.99,
        rating: 5,
        reviews: 89,
        badge: "Oferta",
        category: "perifericos",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "Cadeira Gamer PCSTORE",
        description: "Elegância e conforto para suas sessões de jogo.",
        price: 1199.99,
        oldPrice: 1399.99,
        rating: 5,
        reviews: 58,
        badge: "Destaque",
        category: "outros",
        image: "imagens/foto11.png"
    },
    {
        id: 10,
        name: "PC Gamer PCSTORE",
        description: "Desempenho médio para lazer e jogos.",
        price: 3500.00,
        oldPrice: 4150.00,
        rating: 5,
        reviews: 41,
        badge: "Destaque",
        category: "pc",
        image: "imagens/foto12.png"
    }
];

const CART_STORAGE_KEY = "pcstore_cart";
const LOGIN_STORAGE_KEY = "pcstore_logged_in";
const USER_STORAGE_KEY = "pcstore_user";

let cart = [];
let currentCategory = "all";
let currentSearchTerm = "";

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
const checkoutBtn = document.getElementById("checkoutBtn");
const viewAllBtn = document.getElementById("viewAllBtn");
const categoryCards = document.querySelectorAll(".category-card");
const accountBtn = document.getElementById("accountBtn");
const accountText = document.getElementById("accountText");
const successModal = document.getElementById("successModal");
const successCloseBtn = document.getElementById("successCloseBtn");
const highlightButtons = document.querySelectorAll(".btn-highlight-cart");

function formatPrice(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function saveCart() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.error("Erro ao salvar carrinho:", error);
    }
}

function loadCart() {
    try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        cart = savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error("Erro ao carregar carrinho:", error);
        cart = [];
    }
}

function isUserLoggedIn() {
    return localStorage.getItem(LOGIN_STORAGE_KEY) === "true";
}

function redirectToLogin() {
    window.location.href = "login.html";
}

function handleLogout(event) {
    if (!isUserLoggedIn()) return;
    event.preventDefault();
    localStorage.removeItem(LOGIN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    showToast("Você saiu da conta!");
    setTimeout(() => {
        window.location.reload();
    }, 700);
}

function updateAccountButton() {
    if (!accountBtn || !accountText) return;

    if (isUserLoggedIn()) {
        accountText.textContent = "Sair";
        accountBtn.setAttribute("href", "#");
        accountBtn.onclick = handleLogout;
    } else {
        accountText.textContent = "Minha Conta";
        accountBtn.setAttribute("href", "login.html");
        accountBtn.onclick = null;
    }
}

function renderStars(rating, reviews) {
    let stars = "";

    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += `<i class="fas fa-star"></i>`;
        } else if (i - rating <= 0.5) {
            stars += `<i class="fas fa-star-half-alt"></i>`;
        } else {
            stars += `<i class="far fa-star"></i>`;
        }
    }

    return `${stars}<span>(${reviews} avaliações)</span>`;
}

function getFilteredProducts() {
    return products.filter((product) => {
        const matchesCategory =
            currentCategory === "all" || product.category === currentCategory;

        const term = currentSearchTerm.toLowerCase().trim();
        const matchesSearch =
            term === "" ||
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term) ||
            product.badge.toLowerCase().includes(term);

        return matchesCategory && matchesSearch;
    });
}

function renderProducts() {
    if (!productsGrid) return;

    const filteredProducts = getFilteredProducts();

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
                <i class="fas fa-box-open" style="font-size: 56px; color: #888; margin-bottom: 14px;"></i>
                <p style="font-size: 18px; color: #cfcfcf;">Nenhum produto encontrado.</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filteredProducts.map((product) => `
        <div class="product-card">
            <span class="product-badge">${product.badge}</span>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/300x300/111111/cccccc?text=Imagem'">
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
                <button class="btn-add-to-cart" data-product-id="${product.id}">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `).join("");

    bindAddToCartButtons();
}

function bindAddToCartButtons() {
    const buttons = document.querySelectorAll(".btn-add-to-cart");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const productId = Number(button.dataset.productId);
            addToCart(productId);
        });
    });
}

function bindHighlightButtons() {
    highlightButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const highlightId = button.dataset.highlightId;

            if (highlightId === "cadeira") {
                addToCart(9);
            }

            if (highlightId === "pc-destaque") {
                addToCart(10);
            }
        });
    });
}

function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const itemInCart = cart.find((item) => item.id === productId);

    if (itemInCart) {
        itemInCart.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCart();
    showToast(`${product.name} adicionado ao carrinho!`);
}

function removeFromCart(productId) {
    const item = cart.find((product) => product.id === productId);
    cart = cart.filter((product) => product.id !== productId);
    saveCart();
    updateCart();

    if (item) {
        showToast(`${item.name} removido do carrinho!`);
    }
}

function changeQuantity(productId, amount) {
    const item = cart.find((product) => product.id === productId);
    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();
    updateCart();
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCount) {
        cartCount.textContent = totalItems;
    }

    if (!cartItems || !cartEmpty || !cartFooter || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = "";
        cartEmpty.style.display = "block";
        cartFooter.style.display = "none";
        cartTotal.textContent = formatPrice(0);
        return;
    }

    cartEmpty.style.display = "none";
    cartFooter.style.display = "block";

    cartItems.innerHTML = cart.map((item) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/80x80/111111/cccccc?text=Img'">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" data-action="decrease" data-product-id="${item.id}">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-product-id="${item.id}">+</button>
                </div>
            </div>
            <button class="remove-item" data-action="remove" data-product-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join("");

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = formatPrice(total);

    bindCartButtons();
}

function bindCartButtons() {
    const decreaseButtons = document.querySelectorAll('[data-action="decrease"]');
    const increaseButtons = document.querySelectorAll('[data-action="increase"]');
    const removeButtons = document.querySelectorAll('[data-action="remove"]');

    decreaseButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productId = Number(button.dataset.productId);
            changeQuantity(productId, -1);
        });
    });

    increaseButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productId = Number(button.dataset.productId);
            changeQuantity(productId, 1);
        });
    });

    removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productId = Number(button.dataset.productId);
            removeFromCart(productId);
        });
    });
}

let toastTimeout;

function showToast(message) {
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.style.display = "flex";

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.style.display = "none";
    }, 2200);
}

function openCartModal() {
    if (!cartModal) return;
    cartModal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeCartModal() {
    if (!cartModal) return;
    cartModal.style.display = "none";
    document.body.style.overflow = "auto";
}

function openSuccessModal() {
    if (!successModal) return;
    successModal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeSuccessModal() {
    if (!successModal) return;
    successModal.style.display = "none";
    document.body.style.overflow = "auto";
}

function finalizePurchase() {
    cart = [];
    saveCart();
    updateCart();
    closeCartModal();
    openSuccessModal();
}

function setActiveCategory(category) {
    categoryCards.forEach((card) => {
        const isActive = card.dataset.category === category;
        card.style.outline = isActive ? "2px solid #ff9100" : "none";
        card.style.transform = isActive ? "translateY(-2px)" : "none";
    });
}

function resetFilters() {
    currentCategory = "all";
    currentSearchTerm = "";

    if (searchInput) {
        searchInput.value = "";
    }

    setActiveCategory("");
    renderProducts();
}

if (cartIcon) {
    cartIcon.addEventListener("click", (event) => {
        event.preventDefault();
        openCartModal();
    });
}

if (closeModal) {
    closeModal.addEventListener("click", closeCartModal);
}

if (successCloseBtn) {
    successCloseBtn.addEventListener("click", closeSuccessModal);
}

window.addEventListener("click", (event) => {
    if (event.target === cartModal) {
        closeCartModal();
    }

    if (event.target === successModal) {
        closeSuccessModal();
    }
});

if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener("click", closeCartModal);
}

if (searchInput) {
    searchInput.addEventListener("input", () => {
        currentSearchTerm = searchInput.value.trim();
        renderProducts();
    });
}

if (categoryCards.length > 0) {
    categoryCards.forEach((card) => {
        card.addEventListener("click", () => {
            currentCategory = card.dataset.category || "all";
            setActiveCategory(currentCategory);
            renderProducts();
        });
    });
}

if (viewAllBtn) {
    viewAllBtn.addEventListener("click", (event) => {
        event.preventDefault();
        resetFilters();
    });
}

if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("Seu carrinho está vazio!");
            return;
        }

        if (!isUserLoggedIn()) {
            showToast("Faça login para finalizar a compra!");
            setTimeout(() => {
                redirectToLogin();
            }, 900);
            return;
        }

        finalizePurchase();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadCart();
    renderProducts();
    updateCart();
    updateAccountButton();
    bindHighlightButtons();
});
