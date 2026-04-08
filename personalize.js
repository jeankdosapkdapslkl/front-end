const CART_STORAGE_KEY = "pcstore_cart";

const cpu = document.getElementById("cpu");
const gpu = document.getElementById("gpu");
const ram = document.getElementById("ram");
const storage = document.getElementById("storage");
const motherboard = document.getElementById("motherboard");
const psu = document.getElementById("psu");
const pcCase = document.getElementById("pc-case");
const cooler = document.getElementById("cooler");

const summaryCpu = document.getElementById("summaryCpu");
const summaryGpu = document.getElementById("summaryGpu");
const summaryRam = document.getElementById("summaryRam");
const summaryStorage = document.getElementById("summaryStorage");
const summaryMotherboard = document.getElementById("summaryMotherboard");
const summaryPsu = document.getElementById("summaryPsu");
const summaryCase = document.getElementById("summaryCase");
const summaryCooler = document.getElementById("summaryCooler");

const builderTotal = document.getElementById("builderTotal");
const addBuildToCartBtn = document.getElementById("addBuildToCartBtn");
const builderMessage = document.getElementById("builderMessage");

const allSelects = [cpu, gpu, ram, storage, motherboard, psu, pcCase, cooler];

function formatPrice(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function getOptionName(selectElement) {
    if (!selectElement) return "";
    return selectElement.options[selectElement.selectedIndex].text.split(" - ")[0].trim();
}

function calculateTotal() {
    const total =
        Number(cpu?.value || 0) +
        Number(gpu?.value || 0) +
        Number(ram?.value || 0) +
        Number(storage?.value || 0) +
        Number(motherboard?.value || 0) +
        Number(psu?.value || 0) +
        Number(pcCase?.value || 0) +
        Number(cooler?.value || 0);

    if (builderTotal) {
        builderTotal.textContent = formatPrice(total);
    }

    return total;
}

function updateSummary() {
    if (summaryCpu) summaryCpu.textContent = getOptionName(cpu);
    if (summaryGpu) summaryGpu.textContent = getOptionName(gpu);
    if (summaryRam) summaryRam.textContent = getOptionName(ram);
    if (summaryStorage) summaryStorage.textContent = getOptionName(storage);
    if (summaryMotherboard) summaryMotherboard.textContent = getOptionName(motherboard);
    if (summaryPsu) summaryPsu.textContent = getOptionName(psu);
    if (summaryCase) summaryCase.textContent = getOptionName(pcCase);
    if (summaryCooler) summaryCooler.textContent = getOptionName(cooler);

    calculateTotal();
}

function loadCart() {
    try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error("Erro ao carregar carrinho:", error);
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.error("Erro ao salvar carrinho:", error);
    }
}

function getBuildName() {
    return `PC Personalizado - ${getOptionName(cpu)} + ${getOptionName(gpu)}`;
}

function getBuildDescription() {
    return [
        getOptionName(ram),
        getOptionName(storage),
        getOptionName(motherboard),
        getOptionName(psu),
        getOptionName(pcCase),
        getOptionName(cooler)
    ].join(" | ");
}

function resetBuilder() {
    if (cpu) cpu.selectedIndex = 0;
    if (gpu) gpu.selectedIndex = 0;
    if (ram) ram.selectedIndex = 0;
    if (storage) storage.selectedIndex = 0;
    if (motherboard) motherboard.selectedIndex = 0;
    if (psu) psu.selectedIndex = 0;
    if (pcCase) pcCase.selectedIndex = 0;
    if (cooler) cooler.selectedIndex = 0;

    updateSummary();
}

function addBuildToCart() {
    const total = calculateTotal();
    const cart = loadCart();

    const buildProduct = {
        id: `build-${Date.now()}`,
        name: getBuildName(),
        description: getBuildDescription(),
        price: total,
        oldPrice: total + 400,
        rating: 5,
        reviews: 1,
        badge: "Personalizado",
        category: "pc",
        image: "imagens/foto12.png",
        quantity: 1
    };

    cart.push(buildProduct);
    saveCart(cart);

    if (builderMessage) {
        builderMessage.textContent = "Configuração adicionada ao carrinho com sucesso!";
        builderMessage.style.color = "#42d66b";
    }

    resetBuilder();
}

allSelects.forEach((selectElement) => {
    if (selectElement) {
        selectElement.addEventListener("change", updateSummary);
    }
});

if (addBuildToCartBtn) {
    addBuildToCartBtn.addEventListener("click", addBuildToCart);
}

document.addEventListener("DOMContentLoaded", () => {
    updateSummary();
});
