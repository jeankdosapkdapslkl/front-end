<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PCStore - Loja Gamer</title>
    <link rel="stylesheet" href="indexEstilo.css?v=6">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>

  <header class="topbar">
  <div class="container topbar-content">
      <a href="#" class="site-logo">
          <img src="imagens/foto2.png" alt="PCSTORE">
      </a>

      <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="text" id="searchInput" placeholder="Buscar produtos...">
      </div>

      <div class="top-actions">
          <a href="#" class="account-btn">
              <img src="imagens/foto5.png" alt="Logo">
              <span>Minha Conta</span>
          </a>

          <a href="#" class="cart-btn" id="cartIcon">
              <i class="fas fa-shopping-cart"></i>
              <span>Carrinho</span>
              <span class="cart-count" id="cartCount">0</span>
          </a>
      </div>
  </div>
</header>

    <main class="page-wrap">
        <section class="hero-area">
            <div class="container">
                <div class="hero-main-banner">
                    <img src="imagens/foto3.png" alt="Banner principal">
                </div>


            </div>
        </section>

        <section class="categories-section">
            <div class="container">
                <div class="categories-grid">
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

        <section class="featured-products">
            <div class="container">
                <div class="section-header">
                    <h2>Produtos em Destaque</h2>
                    <a href="#" class="view-all" id="viewAllBtn">Ver todos <i class="fas fa-arrow-right"></i></a>
                </div>

                <div class="products-grid" id="productsGrid"></div>
            </div>
        </section>

        <section class="highlight-row">
            <div class="container highlight-grid">
                <div class="highlight-card">
                    <img src="img/cadeira-gamer.png" alt="Cadeira Gamer">
                    <div class="highlight-info">
                        <h3>Cadeira Gamer PCSTORE</h3>
                        <p>Elegância e conforto para suas sessões de jogo</p>
                        <strong>R$ 1.199,99</strong>
                    </div>
                </div>

                <div class="highlight-card">
                    <img src="img/pc-gamer-destaque.png" alt="PC Gamer">
                    <div class="highlight-info">
                        <h3>PC Gamer PCSTORE</h3>
                        <p>Desempenho médio para lazer e jogos</p>
                        <strong>R$ 4.999,99</strong>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="container footer-box">
                <div class="footer-logo-line">
                    <img src="img/logo-mini.png" alt="PCStore">
                    <h4>Sua loja de tecnologia e periféricos</h4>
                </div>

                <nav class="footer-menu">
                    <a href="#">Início</a>
                    <a href="#">Produtos</a>
                    <a href="#">Promoções</a>
                    <a href="#">Contato</a>
                    <a href="#">Carrinho</a>
                </nav>

                <div class="footer-social">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                </div>

                <p class="footer-email">Email: PCStore@gmail.com</p>
            </div>
        </footer>
    </main>

    <div id="cartModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2><i class="fas fa-shopping-cart"></i> Meu Carrinho</h2>
                <span class="close">&times;</span>
            </div>

            <div class="modal-body">
                <div id="cartItems"></div>

                <div id="cartEmpty" class="cart-empty">
                    <i class="fas fa-shopping-basket"></i>
                    <p>Seu carrinho está vazio</p>
                    <button class="btn-primary" id="continueShoppingBtn">Continuar comprando</button>
                </div>
            </div>

            <div class="modal-footer" id="cartFooter" style="display: none;">
                <div class="cart-summary">
                    <div class="cart-total">
                        <span>Total:</span>
                        <span id="cartTotal">R$ 0,00</span>
                    </div>
                    <button class="btn-checkout" id="checkoutBtn">Finalizar compra</button>
                </div>
            </div>
        </div>
    </div>

    <div id="toast" class="toast">
        <i class="fas fa-check-circle"></i>
        <span id="toastMessage">Produto adicionado ao carrinho!</span>
    </div>

    <script src="script.js"></script>
</body>
</html>
