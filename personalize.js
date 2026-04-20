// CHAVE usada para salvar o carrinho no localStorage
const CART_STORAGE_KEY = "pcstore_cart";

// SELECTS dos componentes do PC (inputs do builder)
const cpu = document.getElementById("cpu"); // seletor de processador
const gpu = document.getElementById("gpu"); // seletor de placa de vídeo
const ram = document.getElementById("ram"); // seletor de memória RAM
const storage = document.getElementById("storage"); // seletor de armazenamento
const motherboard = document.getElementById("motherboard"); // seletor de placa-mãe
const psu = document.getElementById("psu"); // seletor da fonte
const pcCase = document.getElementById("pc-case"); // seletor do gabinete
const cooler = document.getElementById("cooler"); // seletor do cooler

// ELEMENTOS do resumo (lado direito)
const summaryCpu = document.getElementById("summaryCpu"); // mostra CPU escolhida
const summaryGpu = document.getElementById("summaryGpu"); // mostra GPU escolhida
const summaryRam = document.getElementById("summaryRam"); // mostra RAM
const summaryStorage = document.getElementById("summaryStorage"); // mostra armazenamento
const summaryMotherboard = document.getElementById("summaryMotherboard"); // mostra placa-mãe
const summaryPsu = document.getElementById("summaryPsu"); // mostra fonte
const summaryCase = document.getElementById("summaryCase"); // mostra gabinete
const summaryCooler = document.getElementById("summaryCooler"); // mostra cooler

// ELEMENTOS de total e ações
const builderTotal = document.getElementById("builderTotal"); // campo do preço total
const addBuildToCartBtn = document.getElementById("addBuildToCartBtn"); // botão adicionar ao carrinho
const builderMessage = document.getElementById("builderMessage"); // mensagem de feedback

// ARRAY com todos os selects (facilita loops)
const allSelects = [cpu, gpu, ram, storage, motherboard, psu, pcCase, cooler];

// FUNÇÃO para formatar preço em Real (R$)
function formatPrice(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// FUNÇÃO para pegar o nome do item selecionado (sem o preço)
function getOptionName(selectElement) {
    if (!selectElement) return ""; // se não existir, retorna vazio
    return selectElement.options[selectElement.selectedIndex].text.split(" - ")[0].trim(); 
    // pega o texto do option e remove o preço (separado por " - ")
}

// FUNÇÃO que calcula o total do PC
function calculateTotal() {
    const total =
        Number(cpu?.value || 0) + // soma CPU
        Number(gpu?.value || 0) + // soma GPU
        Number(ram?.value || 0) + // soma RAM
        Number(storage?.value || 0) + // soma armazenamento
        Number(motherboard?.value || 0) + // soma placa-mãe
        Number(psu?.value || 0) + // soma fonte
        Number(pcCase?.value || 0) + // soma gabinete
        Number(cooler?.value || 0); // soma cooler

    // atualiza o total na tela
    if (builderTotal) {
        builderTotal.textContent = formatPrice(total);
    }

    return total; // retorna valor total
}

// FUNÇÃO que atualiza o resumo do lado direito
function updateSummary() {
    if (summaryCpu) summaryCpu.textContent = getOptionName(cpu);
    if (summaryGpu) summaryGpu.textContent = getOptionName(gpu);
    if (summaryRam) summaryRam.textContent = getOptionName(ram);
    if (summaryStorage) summaryStorage.textContent = getOptionName(storage);
    if (summaryMotherboard) summaryMotherboard.textContent = getOptionName(motherboard);
    if (summaryPsu) summaryPsu.textContent = getOptionName(psu);
    if (summaryCase) summaryCase.textContent = getOptionName(pcCase);
    if (summaryCooler) summaryCooler.textContent = getOptionName(cooler);

    calculateTotal(); // recalcula total sempre que muda algo
}

// FUNÇÃO para carregar o carrinho do localStorage
function loadCart() {
    try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY); // pega do navegador
        return savedCart ? JSON.parse(savedCart) : []; // converte JSON ou retorna vazio
    } catch (error) {
        console.error("Erro ao carregar carrinho:", error);
        return []; // evita quebrar o site
    }
}

// FUNÇÃO para salvar carrinho no localStorage
function saveCart(cart) {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart)); // salva como JSON
    } catch (error) {
        console.error("Erro ao salvar carrinho:", error);
    }
}

// FUNÇÃO que gera nome do PC personalizado
function getBuildName() {
    return `PC Personalizado - ${getOptionName(cpu)} + ${getOptionName(gpu)}`;
    // ex: "PC Personalizado - Ryzen 5 + RTX 3060"
}

// FUNÇÃO que gera descrição completa
function getBuildDescription() {
    return [
        getOptionName(ram),
        getOptionName(storage),
        getOptionName(motherboard),
        getOptionName(psu),
        getOptionName(pcCase),
        getOptionName(cooler)
    ].join(" | "); // junta tudo com separador
}

// FUNÇÃO que reseta o builder (zera seleções)
function resetBuilder() {
    if (cpu) cpu.selectedIndex = 0;
    if (gpu) gpu.selectedIndex = 0;
    if (ram) ram.selectedIndex = 0;
    if (storage) storage.selectedIndex = 0;
    if (motherboard) motherboard.selectedIndex = 0;
    if (psu) psu.selectedIndex = 0;
    if (pcCase) pcCase.selectedIndex = 0;
    if (cooler) cooler.selectedIndex = 0;

    updateSummary(); // atualiza resumo após reset
}

// FUNÇÃO principal: adiciona o PC ao carrinho
function addBuildToCart() {
    const total = calculateTotal(); // pega valor total
    const cart = loadCart(); // carrega carrinho atual

    // cria objeto do produto personalizado
    const buildProduct = {
        id: `build-${Date.now()}`, // id único baseado no tempo
        name: getBuildName(), // nome gerado
        description: getBuildDescription(), // descrição
        price: total, // preço atual
        oldPrice: total + 400, // preço antigo (simulação de desconto)
        rating: 5, // avaliação fixa
        reviews: 1, // número de avaliações
        badge: "Personalizado", // selo
        category: "pc", // categoria
        image: "imagens/foto12.png", // imagem do produto
        quantity: 1 // quantidade inicial
    };

    cart.push(buildProduct); // adiciona no carrinho
    saveCart(cart); // salva no navegador

    // mostra mensagem de sucesso
    if (builderMessage) {
        builderMessage.textContent = "Configuração adicionada ao carrinho com sucesso!";
        builderMessage.style.color = "#42d66b";
    }

    resetBuilder(); // limpa seleção após adicionar
}

// EVENTO: sempre que mudar um select, atualiza resumo
allSelects.forEach((selectElement) => {
    if (selectElement) {
        selectElement.addEventListener("change", updateSummary);
    }
});

// EVENTO: botão adicionar ao carrinho
if (addBuildToCartBtn) {
    addBuildToCartBtn.addEventListener("click", addBuildToCart);
}

// EVENTO: quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    updateSummary(); // inicia com valores atualizados
});