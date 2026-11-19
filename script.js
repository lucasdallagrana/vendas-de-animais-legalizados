// Banco de Dados do Plantel
const animals = [
  // GALINHAS
  {
    id: 1,
    name: "Galinha Caipira Poedeira (Embrapa 051)",
    scientific: "Gallus gallus domesticus",
    category: "galinhas",
    categoryLabel: "Galinha",
    price: 68.00,
    unit: "unidade",
    age: "16 semanas (início de postura)",
    temperament: "Dócil e rústica",
    doc: "GTA + Vacinação Completa",
    care: "Produz até 280 ovos vermelhos por ano. Ideal para criação solta em piquetes ou galinheiros ventilados.",
    desc: "Franga selecionada de alta rusticidade e excelente conversão alimentar, já vacinada contra Marek, Newcastle e Bouba Aviária.",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=700&q=80",
    featured: 1
  },
  {
    id: 2,
    name: "Galinha Brahma Light Ornamental",
    scientific: "Gallus gallus domesticus",
    category: "galinhas",
    categoryLabel: "Galinha",
    price: 185.00,
    unit: "unidade",
    age: "5 meses (jovem adulta)",
    temperament: "Extremamente calma",
    doc: "GTA + Anilha do Criatório",
    care: "Por ter penas nos pés, recomenda-se piso seco e poleiros baixos (máximo 40 cm do solo).",
    desc: "Conhecida como a 'rainha das galinhas' pelo porte majestoso, plumagem branca com colar preto e pés empenados.",
    image: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&w=700&q=80",
    featured: 3
  },
  {
    id: 3,
    name: "Galinha Sedosa do Japão (Silkie)",
    scientific: "Gallus gallus domesticus",
    category: "galinhas",
    categoryLabel: "Galinha",
    price: 160.00,
    unit: "unidade",
    age: "4 meses",
    temperament: "Mansa (excelente chocadeira)",
    doc: "GTA + Atestado Sanitário",
    care: "Plumagem macia como seda que não repele água; manter abrigo coberto em dias chuvosos.",
    desc: "Ave ornamental de plumagem sedosa, pele escura e cinco dedos. Muito procurada como pet e mãe adotiva de ovos.",
    image: "https://images.unsplash.com/photo-1594731884638-8197c3102d1d?auto=format&fit=crop&w=700&q=80",
    featured: 7
  },

  // GALOS
  {
    id: 4,
    name: "Galo Índio Gigante Reprodutor",
    scientific: "Gallus gallus domesticus",
    category: "galos",
    categoryLabel: "Galo",
    price: 390.00,
    unit: "unidade",
    age: "8 meses (1,08m de envergadura)",
    temperament: "Imponente e ativo",
    doc: "GTA + Registro Genealógico",
    care: "Requer espaço amplo para exercitar a musculatura e ração balanceada rica em cálcio e proteína.",
    desc: "Reprodutor de linhagem selecionada para melhoramento genético de plantel caipira, com excelente estrutura óssea e porte elevado.",
    image: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?auto=format&fit=crop&w=700&q=80",
    featured: 2
  },
  {
    id: 5,
    name: "Galo Rhode Island Red Puro",
    scientific: "Gallus gallus domesticus",
    category: "galos",
    categoryLabel: "Galo",
    price: 145.00,
    unit: "unidade",
    age: "6 meses",
    temperament: "Vigoroso e protetor",
    doc: "GTA + Vacinação em dia",
    care: "Excelente para cruzamento industrial ou caipira visando filhas de alta postura.",
    desc: "Plumagem vermelho-mogno brilhante, alta fertilidade e resistência climática comprovada.",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=700&q=80",
    featured: 8
  },
  {
    id: 6,
    name: "Galo Garnizé Nagasaki Ornamental",
    scientific: "Gallus gallus domesticus",
    category: "galos",
    categoryLabel: "Galo",
    price: 120.00,
    unit: "unidade",
    age: "5 meses (mini porte)",
    temperament: "Curioso e sociável",
    doc: "GTA + Anilha",
    care: "Ideal para chácaras e quintais pequenos devido ao porte compacto e baixo consumo de ração.",
    desc: "Pequeno notável de pernas curtas e cauda vertical em leque. Muito apreciado em criações ornamentais.",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=700&q=80",
    featured: 10
  },

  // CODORNAS
  {
    id: 7,
    name: "Lote 10 Codornas Japonesas Poedeiras",
    scientific: "Coturnix japonica",
    category: "codornas",
    categoryLabel: "Codorna",
    price: 135.00,
    unit: "lote c/ 10 aves",
    age: "45 dias (prontas p/ postura)",
    temperament: "Ativas e adaptáveis",
    doc: "GTA + Controle Sanitário",
    care: "Necessitam de ração específica para postura de codornas (20% proteína) e água limpa constante.",
    desc: "Lote composto por 10 fêmeas jovens no pico inicial de produção, capazes de botar até 300 ovos/ano cada.",
    image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?auto=format&fit=crop&w=700&q=80",
    featured: 4
  },
  {
    id: 8,
    name: "Trio Codorna Gigante Europeia (1M + 2F)",
    scientific: "Coturnix coturnix",
    category: "codornas",
    categoryLabel: "Codorna",
    price: 89.00,
    unit: "trio reprodutor",
    age: "50 dias (peso médio 320g)",
    temperament: "Calmas",
    doc: "GTA + Nota Fiscal",
    care: "Viveiro com altura máxima de 40 cm ou tela macia no teto para evitar impactos ao pular.",
    desc: "Linhagem de dupla aptidão (ovos grandes e carne nobre), ideal para iniciar sua própria matriz reprodutora.",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=700&q=80",
    featured: 9
  },
  {
    id: 9,
    name: "Casal Codorna Chinesa Ornamental",
    scientific: "Synoicus chinensis",
    category: "codornas",
    categoryLabel: "Codorna",
    price: 110.00,
    unit: "casal",
    age: "3 meses (menor galináceo)",
    temperament: "Tímidas e pacíficas",
    doc: "GTA + Anilha",
    care: "Perfeitas para o fundo de viveiros de pássaros exóticos, ajudando na limpeza de sementes caídas.",
    desc: "Menores codornas do mundo, com coloração azul-ardósia e castanha no macho. Muito ornamentais.",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=700&q=80",
    featured: 11
  },

  // TARTARUGAS & JABUTIS
  {
    id: 10,
    name: "Tartaruga Tigre d'Água Brasileira",
    scientific: "Trachemys dorbigni",
    category: "tartarugas",
    categoryLabel: "Tartaruga",
    price: 340.00,
    unit: "exemplar legalizado",
    age: "Filhote (5 a 7 cm de carapaça)",
    temperament: "Aquática e curiosa",
    doc: "Certificado IBAMA + Microchip + NF",
    care: "Exige aquaterrário com área seca, filtragem eficiente, termostato e lâmpada UVB 5.0.",
    desc: "Quelônio semiaquático nativo, nascido em criadouro comercial autorizado pelo IBAMA. Acompanha microchip e certificado de origem.",
    image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=700&q=80",
    featured: 5
  },
  {
    id: 11,
    name: "Jabuti-Piranga Legalizado",
    scientific: "Chelonoidis carbonarius",
    category: "tartarugas",
    categoryLabel: "Tartaruga / Jabuti",
    price: 690.00,
    unit: "exemplar legalizado",
    age: "Juvenil (8 a 10 cm)",
    temperament: "Terrestre, dócil e longevo",
    doc: "Certificado IBAMA + Microchip + NF",
    care: "Espécie 100% terrestre (não sabe nadar). Precisa de sol diário, abrigo seco e dieta rica em fibras e cálcio.",
    desc: "O quelônio terrestre mais querido do Brasil, com escamas vermelhas nas patas e casco escuro. Legalizado com nota e microchip.",
    image: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?auto=format&fit=crop&w=700&q=80",
    featured: 6
  },
  {
    id: 12,
    name: "Cágado-de-Barbicha (Quelônio Aquático)",
    scientific: "Phrynops geoffroanus",
    category: "tartarugas",
    categoryLabel: "Tartaruga / Cágado",
    price: 420.00,
    unit: "exemplar legalizado",
    age: "Juvenil (7 cm)",
    temperament: "Aquático e ativo",
    doc: "Certificado IBAMA + Microchip + NF",
    care: "Necessita de tanque ou lago ornamental com rampas de fácil acesso ao sol e alimentação variada.",
    desc: "Espécie brasileira de pescoço longo e barbilhões característicos sob o queixo. Procedência 100% legalizada.",
    image: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?auto=format&fit=crop&w=700&q=80",
    featured: 12
  }
];

// Estado da Aplicação
let state = {
  category: 'todos',
  search: '',
  sort: 'featured',
  cart: [],
  shippingCost: null
};

// Formatação Moeda BRL
const formatBRL = (val) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Renderizar Produtos
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');

  let filtered = animals.filter(item => {
    const matchCat = state.category === 'todos' || item.category === state.category;
    const term = state.search.toLowerCase().trim();
    const matchSearch = !term ||
      item.name.toLowerCase().includes(term) ||
      item.categoryLabel.toLowerCase().includes(term) ||
      item.desc.toLowerCase().includes(term);
    return matchCat && matchSearch;
  });

  // Ordenação
  if (state.sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (state.sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (state.sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
  else filtered.sort((a, b) => a.featured - b.featured);

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  grid.innerHTML = filtered.map(animal => {
    const isTurtle = animal.category === 'tartarugas';
    const badgeColor = isTurtle ? 'bg-emerald-700 text-white' : 'bg-brand-bark/85 text-white';
    return `
      <article class="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
        <div class="relative h-52 bg-stone-200 overflow-hidden cursor-pointer" onclick="openProductModal(${animal.id})">
          <img src="${animal.image}" alt="${animal.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${badgeColor} backdrop-blur-xs">
            ${animal.categoryLabel}
          </span>
          <button onclick="event.stopPropagation(); openProductModal(${animal.id})" class="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-brand-bark flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition cursor-pointer" title="Ver ficha técnica">
            <i class="fa-solid fa-eye text-sm"></i>
          </button>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <div class="flex items-center gap-1.5 text-[11px] font-semibold text-brand-green mb-1">
              <i class="fa-solid fa-certificate"></i>
              <span>${animal.doc}</span>
            </div>
            <h3 onclick="openProductModal(${animal.id})" class="font-serif font-bold text-lg text-brand-bark leading-snug hover:text-brand-terracotta transition cursor-pointer">
              ${animal.name}
            </h3>
            <p class="text-xs text-stone-500 mt-1.5 line-clamp-2 leading-relaxed">
              ${animal.desc}
            </p>
          </div>

          <div class="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
            <div>
              <span class="text-[11px] text-stone-400 block">por ${animal.unit}</span>
              <span class="font-serif font-bold text-xl text-brand-bark">${formatBRL(animal.price)}</span>
            </div>
            <button onclick="addToCart(${animal.id})" class="px-4 py-2.5 rounded-xl bg-brand-green hover:bg-brand-terracotta text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-xs cursor-pointer">
              <i class="fa-solid fa-plus"></i>
              <span>Comprar</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Filtrar por Categoria
function filterByCategory(cat) {
  state.category = cat;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.dataset.category === cat) {
      btn.classList.remove('bg-white', 'text-stone-700', 'border', 'border-stone-200');
      btn.classList.add('bg-brand-green', 'text-white', 'shadow-sm');
    } else {
      btn.classList.add('bg-white', 'text-stone-700', 'border', 'border-stone-200');
      btn.classList.remove('bg-brand-green', 'text-white', 'shadow-sm');
    }
  });
  renderProducts();
}

document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => filterByCategory(btn.dataset.category));
});

// Busca sincronizada Desktop & Mobile
const searchDesktop = document.getElementById('searchInputDesktop');
const searchMobile = document.getElementById('searchInputMobile');

function handleSearch(e) {
  state.search = e.target.value;
  searchDesktop.value = state.search;
  searchMobile.value = state.search;
  renderProducts();
}
searchDesktop.addEventListener('input', handleSearch);
searchMobile.addEventListener('input', handleSearch);

// Ordenação
document.getElementById('sortSelect').addEventListener('change', (e) => {
  state.sort = e.target.value;
  renderProducts();
});

function resetFilters() {
  state.search = '';
  searchDesktop.value = '';
  searchMobile.value = '';
  filterByCategory('todos');
}

// Modal de Detalhes
function openProductModal(id) {
  const animal = animals.find(a => a.id === id);
  if (!animal) return;

  document.getElementById('modalImg').src = animal.image;
  document.getElementById('modalBadge').textContent = animal.categoryLabel;
  document.getElementById('modalScientific').textContent = animal.scientific;
  document.getElementById('modalTitle').textContent = animal.name;
  document.getElementById('modalPrice').textContent = `${formatBRL(animal.price)} / ${animal.unit}`;
  document.getElementById('modalDesc').textContent = animal.desc;
  document.getElementById('modalAge').textContent = animal.age;
  document.getElementById('modalTemperament').textContent = animal.temperament;
  document.getElementById('modalDoc').textContent = animal.doc;
  document.getElementById('modalCare').textContent = animal.care;

  const addBtn = document.getElementById('modalAddBtn');
  addBtn.onclick = () => {
    addToCart(animal.id);
    closeProductModal();
  };

  const modal = document.getElementById('productModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Carrinho de Compras
function addToCart(id) {
  const animal = animals.find(a => a.id === id);
  if (!animal) return;

  const existing = state.cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...animal, qty: 1 });
  }

  updateCartUI();
  showToast(`${animal.name} adicionado ao carrinho!`);
}

function updateQty(id, delta) {
  const idx = state.cart.findIndex(item => item.id === id);
  if (idx === -1) return;

  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  updateCartUI();
}

function updateCartUI() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartBadge').textContent = totalItems;

  const container = document.getElementById('cartItemsContainer');
  const footer = document.getElementById('cartFooter');

  if (state.cart.length === 0) {
    footer.classList.add('hidden');
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center py-12">
        <div class="w-16 h-16 rounded-full bg-brand-sand text-stone-400 flex items-center justify-center text-2xl mb-3">
          <i class="fa-solid fa-basket-shopping"></i>
        </div>
        <p class="font-serif font-bold text-lg text-brand-bark">Seu carrinho está vazio</p>
        <p class="text-xs text-stone-500 mt-1 max-w-xs">Escolha galinhas, galos, codornas ou tartarugas legalizadas no catálogo para iniciar seu pedido.</p>
      </div>
    `;
    return;
  }

  footer.classList.remove('hidden');
  container.innerHTML = state.cart.map(item => `
    <div class="flex gap-3.5 bg-brand-cream/70 p-3.5 rounded-2xl border border-stone-200/80">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover shrink-0">
      <div class="flex-1 min-w-0">
        <h4 class="font-semibold text-sm text-brand-bark truncate">${item.name}</h4>
        <span class="text-xs text-stone-500 block">${formatBRL(item.price)} (${item.unit})</span>
        <div class="flex items-center justify-between mt-2">
          <div class="inline-flex items-center bg-white border border-stone-200 rounded-lg">
            <button onclick="updateQty(${item.id}, -1)" class="w-7 h-7 flex items-center justify-center text-stone-600 hover:text-brand-terracotta cursor-pointer">-</button>
            <span class="px-2.5 text-xs font-bold">${item.qty}</span>
            <button onclick="updateQty(${item.id}, 1)" class="w-7 h-7 flex items-center justify-center text-stone-600 hover:text-brand-green cursor-pointer">+</button>
          </div>
          <span class="font-bold text-sm text-brand-green">${formatBRL(item.price * item.qty)}</span>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  document.getElementById('cartSubtotal').textContent = formatBRL(subtotal);

  const shippingEl = document.getElementById('cartShipping');
  if (state.shippingCost !== null) {
    shippingEl.textContent = formatBRL(state.shippingCost);
    document.getElementById('cartTotal').textContent = formatBRL(subtotal + state.shippingCost);
  } else {
    shippingEl.textContent = 'A calcular';
    document.getElementById('cartTotal').textContent = formatBRL(subtotal);
  }
}

function toggleCart(open) {
  const overlay = document.getElementById('cartOverlay');
  if (open) {
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
  } else {
    overlay.classList.add('hidden');
    overlay.classList.remove('flex');
  }
}

// Simulador de Frete Carga Viva
function calculateShipping() {
  const cep = document.getElementById('cepInput').value.replace(/\D/g, '');
  const msg = document.getElementById('shippingMsg');
  if (cep.length < 8) {
    msg.textContent = 'Digite um CEP válido com 8 números.';
    msg.classList.remove('hidden', 'text-brand-green');
    msg.classList.add('text-brand-terracotta');
    return;
  }

  // Simulação baseada na região do CEP
  const firstDigit = parseInt(cep[0], 10);
  state.shippingCost = firstDigit <= 3 ? 65.00 : (firstDigit <= 7 ? 95.00 : 125.00);
  msg.textContent = `Transporte homologado + GTA disponível (Prazo: 2 a 4 dias úteis).`;
  msg.classList.remove('hidden', 'text-brand-terracotta');
  msg.classList.add('text-brand-green');
  updateCartUI();
}

// Máscara simples de CEP
document.getElementById('cepInput').addEventListener('input', (e) => {
  let v = e.target.value.replace(/\D/g, '');
  if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5, 8);
  e.target.value = v;
});

// Checkout
function openCheckoutModal() {
  toggleCart(false);
  document.getElementById('checkoutFormState').classList.remove('hidden');
  document.getElementById('checkoutSuccessState').classList.add('hidden');
  const modal = document.getElementById('checkoutModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function submitOrder(e) {
  e.preventDefault();
  const randomCode = Math.floor(1000 + Math.random() * 9000);
  document.getElementById('orderProtocol').textContent = `#GR-${randomCode}`;
  document.getElementById('checkoutFormState').classList.add('hidden');
  document.getElementById('checkoutSuccessState').classList.remove('hidden');
}

function finishAndReset() {
  state.cart = [];
  state.shippingCost = null;
  updateCartUI();
  closeCheckoutModal();
}

// Toast
let toastTimer;
function showToast(text) {
  const toast = document.getElementById('toast');
  document.getElementById('toastText').textContent = text;
  toast.classList.remove('translate-y-20', 'opacity-0');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2800);
}

// Fechar modais ao clicar fora
document.getElementById('productModal').addEventListener('click', (e) => {
  if (e.target.id === 'productModal') closeProductModal();
});
document.getElementById('cartOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'cartOverlay') toggleCart(false);
});

// Inicializar
renderProducts();
updateCartUI();