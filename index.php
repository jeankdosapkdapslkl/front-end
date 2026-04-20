<!DOCTYPE html>
<html lang="pt-br">
<head>
    <!-- Configuração de charset -->
    <meta charset="UTF-8">

    <!-- Responsividade (mobile) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Título da página -->
    <title>PCStore - Loja Gamer</title>

    <!-- Seu CSS principal -->
    <link rel="stylesheet" href="indexEstilo.css?v=10">

    <!-- Ícones (Font Awesome) -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>

    <!-- ===== HEADER (TOPO DO SITE) ===== -->
    <header class="topbar">
        <div class="container topbar-content">

            <!-- Logo da loja -->
            <a href="#" class="site-logo">
                <img src="imagens/foto2.png" alt="PCSTORE">
            </a>

            <!-- Barra de busca -->
            <div class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" id="searchInput" placeholder="Buscar produtos...">
            </div>

            <!-- Ações do topo (conta + carrinho) -->
            <div class="top-actions">

                <!-- Botão de login/conta -->
                <a href="login.html" class="account-btn" id="accountBtn">
                    <img src="imagens/foto5.png" alt="Logo">
                    <span id="accountText">Minha Conta</span>
                </a>

                <!-- Botão do carrinho -->
                <a href="#" class="cart-btn" id="cartIcon">
                    <i class="fas fa-shopping-cart"></i>
                    <span>Carrinho</span>

                    <!-- Quantidade de itens -->
                    <span class="cart-count" id="cartCount">0</span>
                </a>

            </div>
        </div>
    </header>

    <main class="page-wrap">

        <!-- ===== BANNER PRINCIPAL ===== -->
        <section class="hero-area">
            <div class="container">
                <div class="hero-main-banner">

                    <!-- Banner clicável -->
                    <a href="personalize.php" class="hero-banner-link">
                        <img src="imagens/foto3.png" alt="Banner principal">
                    </a>

                </div>
            </div>
        </section>

        <!-- ===== CATEGORIAS ===== -->
        <section class="categories-section">
            <div class="container">
                <div class="categories-grid">

                    <!-- Card de categoria -->
                    <div class="category-card" data-category="hardware">
                        <img src="imagens/foto6.png" alt="Hardware">
                        <button>HARDWARE</button>
                    </div>

                    <div class="category-card" data-category="perifericos">
                        <img src="imagens/foto7.png" alt="Periféricos">
                        <button>PERIFERICOS</button>
                    </div>

                    <div class="category-card" data-category="pc">
                        <img src="imagens/foto8.png" alt="PC">
                        <button>PC</button>
                    </div>

                    <div class="category-card" data-category="upgrade">
                        <img src="imagens/foto9.png" alt="Upgrade">
                        <button>UPGRADE</button>
                    </div>

                    <div class="category-card" data-category="outros">
                        <img src="imagens/foto10.png" alt="Outros">
                        <button>OUTROS</button>
                    </div>

                </div>
            </div>
        </section>

        <!-- ===== PRODUTOS ===== -->
        <section class="featured-products">
            <div class="container">

                <!-- Título + botão -->
                <div class="section-header">
                    <h2>Produtos em Destaque</h2>
                    <a href="#" class="view-all" id="viewAllBtn">
                        Ver todos <i class="fas fa-arrow-right"></i>
                    </a>
                </div>

                <!-- Produtos gerados via JS -->
                <div class="products-grid" id="productsGrid"></div>

            </div>
        </section>

        <!-- ===== DESTAQUES ===== -->
        <section class="highlight-row">
            <div class="container highlight-grid">

                <!-- Produto destaque -->
                <div class="highlight-card">
                    <img src="imagens/foto11.png" alt="Cadeira Gamer">

                    <div class="highlight-info">
                        <h3>Cadeira Gamer PCSTORE</h3>
                        <p>Elegância e conforto para suas sessões de jogo</p>
                        <strong>R$ 1.199,99</strong>

                        <!-- Botão comprar -->
                        <button class="btn-highlight-cart" data-highlight-id="cadeira">
                            Comprar agora
                        </button>
                    </div>
                </div>

                <!-- Outro destaque -->
                <div class="highlight-card">
                    <img src="imagens/foto12.png" alt="PC Gamer">

                    <div class="highlight-info">
                        <h3>PC Gamer PCSTORE</h3>
                        <p>Desempenho médio para lazer e jogos</p>
                        <strong>R$ 4.999,99</strong>

                        <button class="btn-highlight-cart" data-highlight-id="pc-destaque">
                            Comprar agora
                        </button>
                    </div>
                </div>

            </div>
        </section>

        <!-- ===== RODAPÉ ===== -->
        <footer class="footer">
            <div class="container footer-box">

                <!-- Logo + frase -->
                <div class="footer-logo-line">
                    <img src="imagens/foto2.png" alt="PCStore">
                    <h4>Sua loja de tecnologia e periféricos</h4>
                </div>

                <!-- Menu -->
                <nav class="footer-menu">
                    <a href="#">Início</a>
                    <a href="#">Produtos</a>
                    <a href="#">Promoções</a>
                    <a href="#">Contato</a>
                    <a href="#">Carrinho</a>
                </nav>

                <!-- Redes sociais -->
                <div class="footer-social">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                </div>

                <!-- Email -->
                <p class="footer-email">Email: PCStore@gmail.com</p>
            </div>
        </footer>

    </main>

    <!-- ===== MODAL DO CARRINHO ===== -->
    <div id="cartModal" class="modal">
        <div class="modal-content">

            <!-- Cabeçalho -->
            <div class="modal-header">
                <h2><i class="fas fa-shopping-cart"></i> Meu Carrinho</h2>
                <span class="close">&times;</span>
            </div>

            <!-- Conteúdo -->
            <div class="modal-body">

                <!-- Lista de produtos -->
                <div id="cartItems"></div>

                <!-- Estado vazio -->
                <div id="cartEmpty" class="cart-empty">
                    <i class="fas fa-shopping-basket"></i>
                    <p>Seu carrinho está vazio</p>
                    <button class="btn-primary" id="continueShoppingBtn">
                        Continuar comprando
                    </button>
                </div>

            </div>

            <!-- Rodapé do carrinho -->
            <div class="modal-footer" id="cartFooter" style="display: none;">
                <div class="cart-summary">
                    <div class="cart-total">
                        <span>Total:</span>
                        <span id="cartTotal">R$ 0,00</span>
                    </div>

                    <!-- Finalizar compra -->
                    <button class="btn-checkout" id="checkoutBtn">
                        Finalizar compra
                    </button>
                </div>
            </div>

        </div>
    </div>

    <!-- ===== MODAL DE SUCESSO ===== -->
    <div id="successModal" class="success-modal">
        <div class="success-box">

            <!-- Ícone -->
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>

            <h2>Pedido finalizado!</h2>
            <p>Sua compra foi realizada com sucesso.</p>

            <!-- Texto extra -->
            <p class="success-extra">
                Obrigado pela compra. Volte sempre! ❤️
            </p>

            <!-- Botão fechar -->
            <button id="successCloseBtn" class="success-btn">
                Continuar comprando
            </button>

        </div>
    </div>

    <!-- ===== TOAST (NOTIFICAÇÃO) ===== -->
    <div id="toast" class="toast">
        <i class="fas fa-check-circle"></i>
        <span id="toastMessage">Produto adicionado ao carrinho!</span>
    </div>

    <!-- JS principal -->
    <script src="script.js"></script>

</body>
</html>