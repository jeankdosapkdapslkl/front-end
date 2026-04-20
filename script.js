// ================= LISTA DE PRODUTOS =================

// array com todos os produtos da loja
const products = [
    {
        id: 1, // id único do produto
        name: "PC Gamer RGB", // nome do produto
        description: "Setup gamer com visual RGB e ótimo desempenho.", // descrição
        price: 4999.99, // preço atual
        oldPrice: 5599.99, // preço antigo (para mostrar desconto)
        rating: 5, // nota do produto
        reviews: 124, // quantidade de avaliações
        badge: "Novo", // selo do produto
        category: "pc", // categoria do produto
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80" // imagem do produto
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

// ================= CONSTANTES =================

// chave usada pra salvar o carrinho no localStorage
const CART_STORAGE_KEY = "pcstore_cart";

// chave que indica se o usuário está logado
const LOGIN_STORAGE_KEY = "pcstore_logged_in";

// chave que guarda dados do usuário
const USER_STORAGE_KEY = "pcstore_user";

// ================= ESTADOS =================

// array que guarda os itens do carrinho
let cart = [];

// categoria atual selecionada
let currentCategory = "all";

// termo digitado na busca
let currentSearchTerm = "";

// ================= ELEMENTOS DO DOM =================

// pegando todos os elementos da página
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

// ================= FORMATAR PREÇO =================

// transforma número em moeda BRL
function formatPrice(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// ================= LOCAL STORAGE =================

// salva o carrinho no navegador
function saveCart() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.error("Erro ao salvar carrinho:", error);
    }
}

// carrega o carrinho salvo
function loadCart() {
    try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        cart = savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error("Erro ao carregar carrinho:", error);
        cart = [];
    }
}

// ================= LOGIN =================

// verifica se usuário está logado
function isUserLoggedIn() {
    return localStorage.getItem(LOGIN_STORAGE_KEY) === "true";
}

// redireciona pra tela de login
function redirectToLogin() {
    window.location.href = "login.html";
}

// função de logout
function handleLogout(event) {
    if (!isUserLoggedIn()) return;

    event.preventDefault();

    // remove dados do login
    localStorage.removeItem(LOGIN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);

    showToast("Você saiu da conta!");

    setTimeout(() => {
        window.location.reload();
    }, 700);
}

// muda botão "Minha conta" → "Sair"
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
// ================= RENDERIZAÇÃO DE ESTRELAS =================

// gera as estrelas de avaliação do produto
function renderStars(rating, reviews) {

    let stars = ""; // string que vai guardar as estrelas

    // loop de 1 até 5 estrelas
    for (let i = 1; i <= 5; i++) {

        // estrela cheia
        if (i <= Math.floor(rating)) {
            stars += `<i class="fas fa-star"></i>`;
        }

        // meia estrela
        else if (i - rating <= 0.5) {
            stars += `<i class="fas fa-star-half-alt"></i>`;
        }

        // estrela vazia
        else {
            stars += `<i class="far fa-star"></i>`;
        }
    }

    // retorna estrelas + quantidade de avaliações
    return `${stars}<span>(${reviews} avaliações)</span>`;
}


// ================= FILTRO DE PRODUTOS =================

// retorna lista filtrada
function getFilteredProducts() {

    return products.filter((product) => {

        // verifica se bate com categoria
        const matchesCategory =
            currentCategory === "all" || product.category === currentCategory;

        // pega termo de busca
        const term = currentSearchTerm.toLowerCase().trim();

        // verifica se bate com busca
        const matchesSearch =
            term === "" ||
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term) ||
            product.badge.toLowerCase().includes(term);

        // só retorna se passar nos dois filtros
        return matchesCategory && matchesSearch;
    });
}


// ================= RENDERIZAR PRODUTOS =================

// desenha os produtos na tela
function renderProducts() {

    if (!productsGrid) return; // se não existir elemento, para

    const filteredProducts = getFilteredProducts(); // pega filtrados

    // se não tiver produtos
    if (filteredProducts.length === 0) {

        productsGrid.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
                <i class="fas fa-box-open" style="font-size: 56px; color: #888; margin-bottom: 14px;"></i>
                <p style="font-size: 18px; color: #cfcfcf;">Nenhum produto encontrado.</p>
            </div>
        `;
        return;
    }

    // cria HTML dos produtos
    productsGrid.innerHTML = filteredProducts.map((product) => `
        <div class="product-card">

            <span class="product-badge">${product.badge}</span>

            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" 
                onerror="this.src='https://placehold.co/300x300/111111/cccccc?text=Imagem'">
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

    bindAddToCartButtons(); // ativa botões
}


// ================= BOTÕES ADD AO CARRINHO =================

// adiciona evento nos botões
function bindAddToCartButtons() {

    const buttons = document.querySelectorAll(".btn-add-to-cart");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const productId = Number(button.dataset.productId); // pega id
            addToCart(productId); // adiciona no carrinho
        });
    });
}


// ================= BOTÕES DE DESTAQUE =================

// botões especiais (ex: home destaque)
function bindHighlightButtons() {

    highlightButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const highlightId = button.dataset.highlightId;

            // adiciona cadeira
            if (highlightId === "cadeira") {
                addToCart(9);
            }

            // adiciona pc destaque
            if (highlightId === "pc-destaque") {
                addToCart(10);
            }
        });
    });
}


// ================= ADICIONAR AO CARRINHO =================

function addToCart(productId) {

    const product = products.find((p) => p.id === productId); // acha produto

    if (!product) return;

    // verifica se já existe no carrinho
    const itemInCart = cart.find((item) => item.id === productId);

    if (itemInCart) {
        itemInCart.quantity += 1; // aumenta quantidade
    } else {
        cart.push({ ...product, quantity: 1 }); // adiciona novo
    }

    saveCart(); // salva
    updateCart(); // atualiza UI
    showToast(`${product.name} adicionado ao carrinho!`); // aviso
}


// ================= REMOVER DO CARRINHO =================

function removeFromCart(productId) {

    const item = cart.find((product) => product.id === productId);

    // remove item
    cart = cart.filter((product) => product.id !== productId);

    saveCart();
    updateCart();

    if (item) {
        showToast(`${item.name} removido do carrinho!`);
    }
}


// ================= ALTERAR QUANTIDADE =================

function changeQuantity(productId, amount) {

    const item = cart.find((product) => product.id === productId);

    if (!item) return;

    item.quantity += amount;

    // se zerar, remove
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();
    updateCart();
}
// ================= ATUALIZAR CARRINHO =================

function updateCart() {

    // soma total de itens (quantidade)
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // atualiza contador do carrinho no ícone
    if (cartCount) {
        cartCount.textContent = totalItems;
    }

    // se elementos não existirem, para
    if (!cartItems || !cartEmpty || !cartFooter || !cartTotal) return;

    // se carrinho vazio
    if (cart.length === 0) {

        cartItems.innerHTML = ""; // limpa lista
        cartEmpty.style.display = "block"; // mostra mensagem vazio
        cartFooter.style.display = "none"; // esconde footer
        cartTotal.textContent = formatPrice(0); // total 0
        return;
    }

    // se tiver itens
    cartEmpty.style.display = "none"; // esconde mensagem
    cartFooter.style.display = "block"; // mostra footer

    // monta HTML dos itens do carrinho
    cartItems.innerHTML = cart.map((item) => `
        <div class="cart-item">

            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" 
                onerror="this.src='https://placehold.co/80x80/111111/cccccc?text=Img'">
            </div>

            <div class="cart-item-details">
                <h4>${item.name}</h4>

                <div class="cart-item-price">
                    ${formatPrice(item.price)}
                </div>

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

    // calcula valor total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // atualiza total na tela
    cartTotal.textContent = formatPrice(total);

    bindCartButtons(); // ativa botões do carrinho
}


// ================= BOTÕES DO CARRINHO =================

function bindCartButtons() {

    const decreaseButtons = document.querySelectorAll('[data-action="decrease"]');
    const increaseButtons = document.querySelectorAll('[data-action="increase"]');
    const removeButtons = document.querySelectorAll('[data-action="remove"]');

    // diminuir quantidade
    decreaseButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productId = Number(button.dataset.productId);
            changeQuantity(productId, -1);
        });
    });

    // aumentar quantidade
    increaseButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productId = Number(button.dataset.productId);
            changeQuantity(productId, 1);
        });
    });

    // remover item
    removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productId = Number(button.dataset.productId);
            removeFromCart(productId);
        });
    });
}


// ================= TOAST (MENSAGEM) =================

let toastTimeout; // controle de tempo

function showToast(message) {

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message; // define mensagem
    toast.style.display = "flex"; // mostra toast

    clearTimeout(toastTimeout); // limpa timeout anterior

    toastTimeout = setTimeout(() => {
        toast.style.display = "none"; // esconde depois de 2.2s
    }, 2200);
}


// ================= MODAL DO CARRINHO =================

function openCartModal() {

    if (!cartModal) return;

    cartModal.style.display = "block"; // mostra modal
    document.body.style.overflow = "hidden"; // trava scroll
}

function closeCartModal() {

    if (!cartModal) return;

    cartModal.style.display = "none"; // esconde modal
    document.body.style.overflow = "auto"; // libera scroll
}


// ================= MODAL DE SUCESSO =================

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


// ================= FINALIZAR COMPRA =================

function finalizePurchase() {

    cart = []; // limpa carrinho
    saveCart();
    updateCart();

    closeCartModal(); // fecha carrinho
    openSuccessModal(); // abre sucesso
}


// ================= CATEGORIA ATIVA =================

function setActiveCategory(category) {

    categoryCards.forEach((card) => {

        const isActive = card.dataset.category === category;

        // aplica estilo visual
        card.style.outline = isActive ? "2px solid #ff9100" : "none";
        card.style.transform = isActive ? "translateY(-2px)" : "none";
    });
}


// ================= RESETAR FILTROS =================

function resetFilters() {

    currentCategory = "all";
    currentSearchTerm = "";

    if (searchInput) {
        searchInput.value = "";
    }

    setActiveCategory("");
    renderProducts();
}


// ================= EVENTOS =================

// abrir carrinho
if (cartIcon) {
    cartIcon.addEventListener("click", (event) => {
        event.preventDefault();
        openCartModal();
    });
}

// fechar carrinho
if (closeModal) {
    closeModal.addEventListener("click", closeCartModal);
}

// fechar sucesso
if (successCloseBtn) {
    successCloseBtn.addEventListener("click", closeSuccessModal);
}

// clique fora do modal
window.addEventListener("click", (event) => {

    if (event.target === cartModal) {
        closeCartModal();
    }

    if (event.target === successModal) {
        closeSuccessModal();
    }
});

// continuar comprando
if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener("click", closeCartModal);
}

// busca
if (searchInput) {
    searchInput.addEventListener("input", () => {
        currentSearchTerm = searchInput.value.trim();
        renderProducts();
    });
}

// categorias
if (categoryCards.length > 0) {
    categoryCards.forEach((card) => {
        card.addEventListener("click", () => {
            currentCategory = card.dataset.category || "all";
            setActiveCategory(currentCategory);
            renderProducts();
        });
    });
}

// ver todos
if (viewAllBtn) {
    viewAllBtn.addEventListener("click", (event) => {
        event.preventDefault();
        resetFilters();
    });
}

// finalizar compra
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


// ================= INICIALIZAÇÃO =================

document.addEventListener("DOMContentLoaded", () => {

    loadCart(); // carrega carrinho
    renderProducts(); // renderiza produtos
    updateCart(); // atualiza carrinho
    updateAccountButton(); // atualiza botão conta
    bindHighlightButtons(); // ativa destaques
});