<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monte seu PC - PCStore</title>
    <link rel="stylesheet" href="personalize.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <header class="builder-topbar">
        <div class="container builder-topbar-content">
            <a href="index.php" class="builder-logo">
                <img src="imagens/foto2.png" alt="PCSTORE">
            </a>

            <a href="index.php" class="builder-back-btn">
                <i class="fas fa-arrow-left"></i>
                <span>Voltar para loja</span>
            </a>
        </div>
    </header>

    <main class="builder-page">
        <div class="container">
            <section class="builder-hero">
                <h1>Monte seu PC</h1>
                <p>Escolha as peças e veja o preço total em tempo real.</p>
            </section>

            <section class="builder-layout">
                <div class="builder-form-card">
                    <div class="builder-grid">
                        <div class="builder-field">
                            <label for="cpu">Processador</label>
                            <select id="cpu">
                                <option value="899.99">Intel Core i5 - R$ 899,99</option>
                                <option value="1399.99">Intel Core i7 - R$ 1.399,99</option>
                                <option value="799.99">Ryzen 5 - R$ 799,99</option>
                                <option value="1299.99">Ryzen 7 - R$ 1.299,99</option>
                            </select>
                        </div>

                        <div class="builder-field">
                            <label for="gpu">Placa de Vídeo</label>
                            <select id="gpu">
                                <option value="1599.99">RTX 4060 - R$ 1.599,99</option>
                                <option value="2499.99">RTX 4070 - R$ 2.499,99</option>
                                <option value="1299.99">RX 7600 - R$ 1.299,99</option>
                                <option value="2099.99">RX 7700 XT - R$ 2.099,99</option>
                            </select>
                        </div>

                        <div class="builder-field">
                            <label for="ram">Memória RAM</label>
                            <select id="ram">
                                <option value="279.99">16GB DDR4 - R$ 279,99</option>
                                <option value="499.99">32GB DDR4 - R$ 499,99</option>
                                <option value="349.99">16GB DDR5 - R$ 349,99</option>
                                <option value="599.99">32GB DDR5 - R$ 599,99</option>
                            </select>
                        </div>

                        <div class="builder-field">
                            <label for="storage">Armazenamento</label>
                            <select id="storage">
                                <option value="249.99">SSD NVMe 500GB - R$ 249,99</option>
                                <option value="399.99">SSD NVMe 1TB - R$ 399,99</option>
                                <option value="649.99">SSD NVMe 2TB - R$ 649,99</option>
                            </select>
                        </div>

                        <div class="builder-field">
                            <label for="motherboard">Placa-Mãe</label>
                            <select id="motherboard">
                                <option value="599.99">B660 / B650 - R$ 599,99</option>
                                <option value="899.99">Z790 / X670 - R$ 899,99</option>
                            </select>
                        </div>

                        <div class="builder-field">
                            <label for="psu">Fonte</label>
                            <select id="psu">
                                <option value="299.99">650W Bronze - R$ 299,99</option>
                                <option value="449.99">750W Gold - R$ 449,99</option>
                                <option value="599.99">850W Gold - R$ 599,99</option>
                            </select>
                        </div>

                        <div class="builder-field">
                            <label for="case">Gabinete</label>
                            <select id="case">
                                <option value="299.99">Gabinete Mid Tower - R$ 299,99</option>
                                <option value="449.99">Gabinete RGB Premium - R$ 449,99</option>
                            </select>
                        </div>

                        <div class="builder-field">
                            <label for="cooler">Cooler</label>
                            <select id="cooler">
                                <option value="129.99">Air Cooler - R$ 129,99</option>
                                <option value="349.99">Water Cooler 240mm - R$ 349,99</option>
                            </select>
                        </div>
                    </div>
                </div>

                <aside class="builder-summary-card">
                    <h2>Sua configuração</h2>

                    <div class="summary-list">
                        <div class="summary-item">
                            <span>Processador</span>
                            <strong id="summaryCpu">Intel Core i5</strong>
                        </div>
                        <div class="summary-item">
                            <span>Placa de Vídeo</span>
                            <strong id="summaryGpu">RTX 4060</strong>
                        </div>
                        <div class="summary-item">
                            <span>Memória RAM</span>
                            <strong id="summaryRam">16GB DDR4</strong>
                        </div>
                        <div class="summary-item">
                            <span>Armazenamento</span>
                            <strong id="summaryStorage">SSD NVMe 500GB</strong>
                        </div>
                        <div class="summary-item">
                            <span>Placa-Mãe</span>
                            <strong id="summaryMotherboard">B660 / B650</strong>
                        </div>
                        <div class="summary-item">
                            <span>Fonte</span>
                            <strong id="summaryPsu">650W Bronze</strong>
                        </div>
                        <div class="summary-item">
                            <span>Gabinete</span>
                            <strong id="summaryCase">Gabinete Mid Tower</strong>
                        </div>
                        <div class="summary-item">
                            <span>Cooler</span>
                            <strong id="summaryCooler">Air Cooler</strong>
                        </div>
                    </div>

                    <div class="builder-total-box">
                        <span>Total do PC</span>
                        <strong id="builderTotal">R$ 0,00</strong>
                    </div>

                    <button id="addBuildToCartBtn" class="builder-add-btn">
                        Adicionar configuração ao carrinho
                    </button>

                    <p id="builderMessage" class="builder-message"></p>
                </aside>
            </section>
        </div>
    </main>

    <script src="personalize.js"></script>
</body>
</html>
