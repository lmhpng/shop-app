// ========== 模拟商品数据 ==========
const products = [
  { id: 1, name: "无线蓝牙耳机", category: "electronics", price: 299, desc: "高品质降噪蓝牙耳机，续航30小时，佩戴舒适", detail: "采用最新蓝牙5.3技术，支持主动降噪，40mm大动圈驱动单元，Hi-Res认证音质。人体工学设计，长时间佩戴不累。内置600mAh电池，续航可达30小时。", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" },
  { id: 2, name: "智能手表Pro", category: "electronics", price: 899, desc: "多功能运动智能手表，心率血氧监测", detail: "1.5英寸AMOLED高清屏幕，支持心率、血氧、睡眠监测。100+运动模式，5ATM防水。NFC支付，GPS定位，7天超长续航。", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" },
  { id: 3, name: "便携充电宝", category: "electronics", price: 159, desc: "20000mAh大容量，支持快充", detail: "20000mAh超大容量，支持22.5W快充和15W无线充电。双USB-C接口，可同时为3台设备充电。航空级铝合金外壳，轻薄便携。", img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop" },
  { id: 4, name: "机械键盘", category: "electronics", price: 459, desc: "RGB背光机械键盘，青轴手感", detail: "87键紧凑布局，Cherry MX青轴。全键无冲突，1680万色RGB灯效。PBT双色注塑键帽，耐磨不打油。支持有线/蓝牙/2.4G三模连接。", img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=300&fit=crop" },
  { id: 5, name: "纯棉T恤", category: "clothing", price: 89, desc: "100%纯棉面料，舒适透气", detail: "精选新疆长绒棉，200g重磅面料。预缩水处理，不易变形缩水。简约圆领设计，多色可选。适合春夏季节日常穿着。", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop" },
  { id: 6, name: "牛仔外套", category: "clothing", price: 359, desc: "经典版型牛仔夹克，百搭款", detail: "经典翻领设计，优质牛仔面料。金属纽扣细节，做旧水洗工艺。宽松版型，男女皆可穿着。春秋季百搭单品。", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=300&fit=crop" },
  { id: 7, name: "运动跑鞋", category: "clothing", price: 499, desc: "轻量缓震跑步鞋，透气网面", detail: "飞织网面鞋身，轻盈透气。全掌气垫缓震，回弹性能出色。橡胶大底，耐磨防滑。适合日常跑步和健身训练。", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop" },
  { id: 8, name: "羊毛围巾", category: "clothing", price: 199, desc: "100%羊毛，柔软保暖", detail: "精选澳洲美利奴羊毛，触感柔软亲肤。经典格纹设计，优雅大方。尺寸200x70cm，可做披肩使用。秋冬保暖必备单品。", img: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=400&h=300&fit=crop" },
  { id: 9, name: "有机坚果礼盒", category: "food", price: 128, desc: "6种坚果混合装，健康零食", detail: "精选6种优质坚果：巴旦木、腰果、核桃、夏威夷果、开心果、碧根果。每日坚果独立小包装，新鲜锁味。无添加、无油炸，健康美味。", img: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?w=400&h=300&fit=crop" },
  { id: 10, name: "精品咖啡豆", category: "food", price: 79, desc: "哥伦比亚单品咖啡豆，中度烘焙", detail: "哥伦比亚慧兰产区精品咖啡豆，海拔1800m种植。中度烘焙，风味均衡。带有焦糖、巧克力和柑橘风味。新鲜烘焙，250g装。", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop" },
  { id: 11, name: "手工曲奇饼干", category: "food", price: 49, desc: "黄油曲奇，酥脆可口", detail: "选用新西兰进口黄油，手工制作。经典黄油原味，酥脆掉渣。独立包装，方便携带。无防腐剂，保质期30天。200g/盒。", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop" },
  { id: 12, name: "龙井绿茶", category: "food", price: 168, desc: "明前龙井，清香回甘", detail: "杭州西湖产区明前龙井，手工采摘一芽一叶。传统炒制工艺，色绿香郁味甘形美。冲泡后汤色嫩绿明亮，滋味鲜爽。100g罐装。", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop" }
];

// ========== 购物车状态 ==========
let cart = JSON.parse(localStorage.getItem('shopCart') || '[]');

// ========== DOM 元素 ==========
const $ = (sel) => document.querySelector(sel);
const productGrid = $('#productGrid');
const cartBadge = $('#cartBadge');
const cartSidebar = $('#cartSidebar');
const cartOverlay = $('#cartOverlay');
const cartItems = $('#cartItems');
const cartTotal = $('#cartTotal');
const detailModal = $('#detailModal');
const detailBody = $('#detailBody');
const checkoutModal = $('#checkoutModal');
const toast = $('#toast');

// ========== 工具函数 ==========
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

function saveCart() {
  localStorage.setItem('shopCart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  cartBadge.textContent = count;
  cartBadge.style.display = count > 0 ? 'flex' : 'none';
}

// ========== 商品渲染 ==========
let currentCategory = 'all';
let currentSearch = '';

function renderProducts() {
  const filtered = products.filter(p => {
    const matchCat = currentCategory === 'all' || p.category === currentCategory;
    const matchSearch = p.name.includes(currentSearch) || p.desc.includes(currentSearch);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:#999;">没有找到相关商品</div>';
    return;
  }

  productGrid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="showDetail(${p.id})">
      <img class="product-img" src="${p.img}" alt="${p.name}">
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-price">¥${p.price.toFixed(2)}</div>
      </div>
    </div>
  `).join('');
}

// ========== 商品详情 ==========
function showDetail(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;
  detailBody.innerHTML = `
    <img class="detail-img" src="${p.img}" alt="${p.name}">
    <div class="detail-name">${p.name}</div>
    <div class="detail-desc">${p.detail}</div>
    <div class="detail-price">¥${p.price.toFixed(2)}</div>
    <button class="add-cart-btn" onclick="addToCart(${p.id})">加入购物车</button>
  `;
  detailModal.classList.add('open');
}

// ========== 购物车操作 ==========
function addToCart(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: p.id, name: p.name, price: p.price, img: p.img, qty: 1 });
  }
  saveCart();
  showToast(`已添加 "${p.name}" 到购物车`);
  detailModal.classList.remove('open');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(item => item.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  renderCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">购物车是空的</div>';
    cartTotal.textContent = '¥0.00';
    return;
  }
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">¥${item.price.toFixed(2)}</div>
      </div>
      <div class="cart-item-actions">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
        <span class="cart-item-qty">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        <button class="delete-btn" onclick="removeFromCart(${item.id})">&#10005;</button>
      </div>
    </div>
  `).join('');
  cartTotal.textContent = `¥${getCartTotal().toFixed(2)}`;
}

function openCart() {
  renderCart();
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
}

function closeCartPanel() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
}

// ========== 结算流程 ==========
function openCheckout() {
  if (cart.length === 0) {
    showToast('购物车是空的');
    return;
  }
  closeCartPanel();
  const summaryHTML = cart.map(item =>
    `<div class="order-summary-item"><span>${item.name} x${item.qty}</span><span>¥${(item.price * item.qty).toFixed(2)}</span></div>`
  ).join('') + `<div class="order-summary-total"><span>合计</span><span>¥${getCartTotal().toFixed(2)}</span></div>`;
  $('#orderSummary').innerHTML = summaryHTML;
  checkoutModal.classList.add('open');
}

function submitOrder(e) {
  e.preventDefault();
  const name = $('#name').value.trim();
  const phone = $('#phone').value.trim();
  const address = $('#address').value.trim();
  if (!name || !phone || !address) {
    showToast('请填写完整的收货信息');
    return;
  }
  checkoutModal.classList.remove('open');
  cart = [];
  saveCart();
  $('#checkoutForm').reset();
  showToast('下单成功！感谢您的购买');
}

// ========== 事件绑定 ==========
$('#cartIcon').addEventListener('click', openCart);
$('#closeCart').addEventListener('click', closeCartPanel);
cartOverlay.addEventListener('click', closeCartPanel);
$('#closeDetail').addEventListener('click', () => detailModal.classList.remove('open'));
$('#closeCheckout').addEventListener('click', () => checkoutModal.classList.remove('open'));
$('#checkoutBtn').addEventListener('click', openCheckout);
$('#checkoutForm').addEventListener('submit', submitOrder);

$('#searchInput').addEventListener('input', (e) => {
  currentSearch = e.target.value.trim();
  renderProducts();
});

document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    renderProducts();
  });
});

detailModal.addEventListener('click', (e) => {
  if (e.target === detailModal) detailModal.classList.remove('open');
});

checkoutModal.addEventListener('click', (e) => {
  if (e.target === checkoutModal) checkoutModal.classList.remove('open');
});

// ========== 初始化 ==========
renderProducts();
updateCartBadge();
