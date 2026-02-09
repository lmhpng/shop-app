// ========== 模拟商品数据 ==========
const products = [
  { id: 1, name: "无线蓝牙耳机", category: "electronics", price: 299, desc: "高品质降噪蓝牙耳机，续航30小时，佩戴舒适", detail: "采用最新蓝牙5.3技术，支持主动降噪，40mm大动圈驱动单元，Hi-Res认证音质。人体工学设计，长时间佩戴不累。内置600mAh电池，续航可达30小时。", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop", rating: 4.5, reviews: [{user:"小明",rating:5,text:"音质很好，降噪效果不错",time:"2026-01-15"},{user:"小红",rating:4,text:"佩戴舒适，续航给力",time:"2026-01-20"}] },
  { id: 2, name: "智能手表Pro", category: "electronics", price: 899, desc: "多功能运动智能手表，心率血氧监测", detail: "1.5英寸AMOLED高清屏幕，支持心率、血氧、睡眠监测。100+运动模式，5ATM防水。NFC支付，GPS定位，7天超长续航。", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop", rating: 4.8, reviews: [{user:"阿杰",rating:5,text:"功能强大，屏幕清晰",time:"2026-01-18"},{user:"小丽",rating:5,text:"运动监测很准确",time:"2026-02-01"}] },
  { id: 3, name: "便携充电宝", category: "electronics", price: 159, desc: "20000mAh大容量，支持快充", detail: "20000mAh超大容量，支持22.5W快充和15W无线充电。双USB-C接口，可同时为3台设备充电。航空级铝合金外壳，轻薄便携。", img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop", rating: 4.3, reviews: [{user:"大伟",rating:4,text:"容量大，充电快",time:"2026-01-22"}] },
  { id: 4, name: "机械键盘", category: "electronics", price: 459, desc: "RGB背光机械键盘，青轴手感", detail: "87键紧凑布局，Cherry MX青轴。全键无冲突，1680万色RGB灯效。PBT双色注塑键帽，耐磨不打油。支持有线/蓝牙/2.4G三模连接。", img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=300&fit=crop", rating: 4.6, reviews: [{user:"键盘侠",rating:5,text:"手感一流，灯效炫酷",time:"2026-01-25"},{user:"程序员",rating:4,text:"打字很舒服，推荐",time:"2026-02-03"}] },
  { id: 5, name: "纯棉T恤", category: "clothing", price: 89, desc: "100%纯棉面料，舒适透气", detail: "精选新疆长绒棉，200g重磅面料。预缩水处理，不易变形缩水。简约圆领设计，多色可选。适合春夏季节日常穿着。", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop", rating: 4.2, reviews: [{user:"时尚达人",rating:4,text:"面料舒服，版型不错",time:"2026-01-28"}] },
  { id: 6, name: "牛仔外套", category: "clothing", price: 359, desc: "经典版型牛仔夹克，百搭款", detail: "经典翻领设计，优质牛仔面料。金属纽扣细节，做旧水洗工艺。宽松版型，男女皆可穿着。春秋季百搭单品。", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=300&fit=crop", rating: 4.4, reviews: [{user:"潮人",rating:5,text:"版型很好，百搭",time:"2026-02-01"}] },
  { id: 7, name: "运动跑鞋", category: "clothing", price: 499, desc: "轻量缓震跑步鞋，透气网面", detail: "飞织网面鞋身，轻盈透气。全掌气垫缓震，回弹性能出色。橡胶大底，耐磨防滑。适合日常跑步和健身训练。", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop", rating: 4.7, reviews: [{user:"跑步爱好者",rating:5,text:"缓震效果很好",time:"2026-01-30"},{user:"健身达人",rating:4,text:"透气性不错",time:"2026-02-05"}] },
  { id: 8, name: "羊毛围巾", category: "clothing", price: 199, desc: "100%羊毛，柔软保暖", detail: "精选澳洲美利奴羊毛，触感柔软亲肤。经典格纹设计，优雅大方。尺寸200x70cm，可做披肩使用。秋冬保暖必备单品。", img: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=400&h=300&fit=crop", rating: 4.1, reviews: [{user:"小雪",rating:4,text:"很暖和，手感好",time:"2026-01-12"}] },
  { id: 9, name: "有机坚果礼盒", category: "food", price: 128, desc: "6种坚果混合装，健康零食", detail: "精选6种优质坚果：巴旦木、腰果、核桃、夏威夷果、开心果、碧根果。每日坚果独立小包装，新鲜锁味。无添加、无油炸，健康美味。", img: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?w=400&h=300&fit=crop", rating: 4.5, reviews: [{user:"吃货",rating:5,text:"坚果很新鲜，包装精美",time:"2026-01-20"}] },
  { id: 10, name: "精品咖啡豆", category: "food", price: 79, desc: "哥伦比亚单品咖啡豆，中度烘焙", detail: "哥伦比亚慧兰产区精品咖啡豆，海拔1800m种植。中度烘焙，风味均衡。带有焦糖、巧克力和柑橘风味。新鲜烘焙，250g装。", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop", rating: 4.6, reviews: [{user:"咖啡控",rating:5,text:"香气浓郁，口感顺滑",time:"2026-02-02"}] },
  { id: 11, name: "手工曲奇饼干", category: "food", price: 49, desc: "黄油曲奇，酥脆可口", detail: "选用新西兰进口黄油，手工制作。经典黄油原味，酥脆掉渣。独立包装，方便携带。无防腐剂，保质期30天。200g/盒。", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop", rating: 4.3, reviews: [{user:"甜食控",rating:4,text:"酥脆好吃",time:"2026-01-25"}] },
  { id: 12, name: "龙井绿茶", category: "food", price: 168, desc: "明前龙井，清香回甘", detail: "杭州西湖产区明前龙井，手工采摘一芽一叶。传统炒制工艺，色绿香郁味甘形美。冲泡后汤色嫩绿明亮，滋味鲜爽。100g罐装。", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop", rating: 4.8, reviews: [{user:"茶友",rating:5,text:"茶香清雅，回甘明显",time:"2026-02-06"}] }
];

// 轮播图数据
const banners = [
  { img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=300&fit=crop", text: "新春特惠 全场8折" },
  { img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=300&fit=crop", text: "时尚服装 新品上市" },
  { img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=300&fit=crop", text: "数码好物 限时抢购" }
];

// 优惠码
const coupons = { "SAVE10": 0.9, "SAVE20": 0.8, "VIP50": 0.5 };

// ========== 状态 ==========
let cart = JSON.parse(localStorage.getItem('shopCart') || '[]');
let favorites = JSON.parse(localStorage.getItem('shopFav') || '[]');
let userReviews = JSON.parse(localStorage.getItem('shopReviews') || '{}');
let orders = JSON.parse(localStorage.getItem('shopOrders') || '[]');
let currentUser = JSON.parse(localStorage.getItem('shopUser') || 'null');
let currentCoupon = null;

// ========== DOM ==========
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const productGrid = $('#productGrid');
const cartBadge = $('#cartBadge');
const favBadge = $('#favBadge');
const cartSidebar = $('#cartSidebar');
const cartOverlay = $('#cartOverlay');
const favSidebar = $('#favSidebar');
const favOverlay = $('#favOverlay');
const cartItems = $('#cartItems');
const cartTotal = $('#cartTotal');
const detailModal = $('#detailModal');
const detailBody = $('#detailBody');
const checkoutModal = $('#checkoutModal');
const authModal = $('#authModal');
const orderModal = $('#orderModal');
const toast = $('#toast');
const flyItem = $('#flyItem');

// ========== 工具函数 ==========
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

function saveCart() { localStorage.setItem('shopCart', JSON.stringify(cart)); updateCartBadge(); }
function saveFav() { localStorage.setItem('shopFav', JSON.stringify(favorites)); updateFavBadge(); }
function saveReviews() { localStorage.setItem('shopReviews', JSON.stringify(userReviews)); }
function saveOrders() { localStorage.setItem('shopOrders', JSON.stringify(orders)); }
function saveUser() { localStorage.setItem('shopUser', JSON.stringify(currentUser)); }

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  cartBadge.textContent = count;
  cartBadge.style.display = count > 0 ? 'flex' : 'none';
}

function updateFavBadge() {
  favBadge.textContent = favorites.length;
  favBadge.style.display = favorites.length > 0 ? 'flex' : 'none';
}

function triggerBounce(el) {
  el.classList.remove('badge-bounce');
  void el.offsetWidth;
  el.classList.add('badge-bounce');
}

function renderStars(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    s += i <= Math.round(rating) ? '★' : '☆';
  }
  return s;
}

// ========== 深色模式 ==========
function initTheme() {
  const saved = localStorage.getItem('shopTheme');
  if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('shopTheme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('shopTheme', 'dark');
  }
}

// ========== 轮播图 ==========
let bannerIndex = 0;
let bannerTimer = null;

function initBanner() {
  const track = $('#bannerTrack');
  const dots = $('#bannerDots');
  track.innerHTML = banners.map(b =>
    `<div class="banner-slide" style="background-image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('${b.img}')">${b.text}</div>`
  ).join('');
  dots.innerHTML = banners.map((_, i) =>
    `<div class="banner-dot${i === 0 ? ' active' : ''}" data-index="${i}"></div>`
  ).join('');
  startBannerTimer();
}

function goToBanner(index) {
  bannerIndex = index;
  const slides = $$('.banner-slide');
  slides.forEach(s => s.style.transform = `translateX(-${bannerIndex * 100}%)`);
  $$('.banner-dot').forEach((d, i) => d.classList.toggle('active', i === bannerIndex));
}

function nextBanner() { goToBanner((bannerIndex + 1) % banners.length); }
function prevBanner() { goToBanner((bannerIndex - 1 + banners.length) % banners.length); }

function startBannerTimer() {
  clearInterval(bannerTimer);
  bannerTimer = setInterval(nextBanner, 4000);
}

// ========== 商品渲染 ==========
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'default';

function renderProducts() {
  let filtered = products.filter(p => {
    const matchCat = currentCategory === 'all' || p.category === currentCategory;
    const matchSearch = p.name.includes(currentSearch) || p.desc.includes(currentSearch);
    return matchCat && matchSearch;
  });

  if (currentSort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (currentSort === 'price-desc') filtered.sort((a, b) => b.price - a.price);

  if (filtered.length === 0) {
    productGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-secondary);">没有找到相关商品</div>';
    return;
  }

  productGrid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="showDetail(${p.id})">
      <button class="fav-btn ${favorites.includes(p.id) ? 'active' : ''}" onclick="event.stopPropagation();toggleFav(${p.id})">
        ${favorites.includes(p.id) ? '♥' : '♡'}
      </button>
      <img class="product-img" src="${p.img}" alt="${p.name}">
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-bottom">
          <div class="product-price">¥${p.price.toFixed(2)}</div>
          <div class="product-rating">${renderStars(p.rating)} ${p.rating}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ========== 商品详情 ==========
function showDetail(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;
  const allReviews = [...p.reviews, ...(userReviews[id] || [])];
  const isFav = favorites.includes(id);

  detailBody.innerHTML = `
    <img class="detail-img" id="detailImg_${id}" src="${p.img}" alt="${p.name}">
    <div class="detail-name">${p.name}</div>
    <div class="detail-desc">${p.detail}</div>
    <div class="detail-price">¥${p.price.toFixed(2)}</div>
    <div class="detail-rating">${renderStars(p.rating)} ${p.rating} 分</div>
    <button class="detail-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav(${p.id});showDetail(${p.id});">
      ${isFav ? '♥ 已收藏' : '♡ 收藏'}
    </button>
    <button class="add-cart-btn" onclick="addToCart(${p.id})">加入购物车</button>
    <div class="reviews-section">
      <div class="reviews-title">用户评价 (${allReviews.length})</div>
      ${allReviews.map(r => `
        <div class="review-item">
          <span class="review-user">${r.user}</span>
          <span class="review-rating">${renderStars(r.rating)}</span>
          <div class="review-text">${r.text}</div>
          <div class="review-time">${r.time}</div>
        </div>
      `).join('')}
      <div class="review-form">
        <div class="review-stars" id="reviewStars">
          <span data-star="1">☆</span><span data-star="2">☆</span><span data-star="3">☆</span><span data-star="4">☆</span><span data-star="5">☆</span>
        </div>
        <textarea id="reviewText" placeholder="写下你的评价..."></textarea>
        <button class="review-submit" onclick="submitReview(${p.id})">提交评价</button>
      </div>
    </div>
  `;
  detailModal.classList.add('open');

  // 评分星星交互
  let selectedRating = 0;
  $$('#reviewStars span').forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.dataset.star);
      $$('#reviewStars span').forEach((s, i) => {
        s.textContent = i < selectedRating ? '★' : '☆';
        s.classList.toggle('active', i < selectedRating);
      });
    });
    star.addEventListener('mouseenter', () => {
      const val = parseInt(star.dataset.star);
      $$('#reviewStars span').forEach((s, i) => {
        s.textContent = i < val ? '★' : '☆';
      });
    });
    star.addEventListener('mouseleave', () => {
      $$('#reviewStars span').forEach((s, i) => {
        s.textContent = i < selectedRating ? '★' : '☆';
      });
    });
  });

  window._currentReviewRating = selectedRating;
  window._getReviewRating = () => {
    let r = 0;
    $$('#reviewStars span').forEach((s, i) => { if (s.classList.contains('active')) r = i + 1; });
    return r;
  };
}

function submitReview(productId) {
  const rating = window._getReviewRating();
  const text = $('#reviewText').value.trim();
  if (!rating) { showToast('请选择评分'); return; }
  if (!text) { showToast('请输入评价内容'); return; }
  const userName = currentUser ? currentUser.nickname : '匿名用户';
  if (!userReviews[productId]) userReviews[productId] = [];
  userReviews[productId].push({ user: userName, rating, text, time: new Date().toISOString().slice(0, 10) });
  saveReviews();
  showToast('评价提交成功');
  showDetail(productId);
}

// ========== 收藏功能 ==========
function toggleFav(id) {
  const idx = favorites.indexOf(id);
  if (idx > -1) { favorites.splice(idx, 1); } else { favorites.push(id); }
  saveFav();
  triggerBounce(favBadge);
  renderProducts();
}

function renderFavList() {
  const favProducts = products.filter(p => favorites.includes(p.id));
  if (favProducts.length === 0) {
    $('#favItems').innerHTML = '<div class="fav-empty">还没有收藏商品</div>';
    return;
  }
  $('#favItems').innerHTML = favProducts.map(p => `
    <div class="fav-item" onclick="closeFavPanel();showDetail(${p.id});" style="cursor:pointer;">
      <img class="fav-item-img" src="${p.img}" alt="${p.name}">
      <div class="fav-item-info">
        <div class="fav-item-name">${p.name}</div>
        <div class="fav-item-price">¥${p.price.toFixed(2)}</div>
      </div>
      <button class="delete-btn" onclick="event.stopPropagation();toggleFav(${p.id});renderFavList();">&#10005;</button>
    </div>
  `).join('');
}

function openFav() { renderFavList(); favSidebar.classList.add('open'); favOverlay.classList.add('open'); }
function closeFavPanel() { favSidebar.classList.remove('open'); favOverlay.classList.remove('open'); }

// ========== 购物车 ==========
function addToCart(id) {
  const p = products.find(item => item.id === id);
  if (!p) return;
  const existing = cart.find(item => item.id === id);
  if (existing) { existing.qty++; } else { cart.push({ id: p.id, name: p.name, price: p.price, img: p.img, qty: 1 }); }
  saveCart();
  triggerBounce(cartBadge);
  // 飞入动画
  flyToCart(id);
  detailModal.classList.remove('open');
}

function flyToCart(id) {
  const imgEl = document.querySelector(`#detailImg_${id}`) || document.querySelector(`.product-card .product-img`);
  const cartEl = $('#cartIcon');
  if (!imgEl || !cartEl) return;
  const imgRect = imgEl.getBoundingClientRect();
  const cartRect = cartEl.getBoundingClientRect();
  const p = products.find(item => item.id === id);
  flyItem.style.backgroundImage = `url('${p.img}')`;
  flyItem.style.left = imgRect.left + imgRect.width / 2 - 25 + 'px';
  flyItem.style.top = imgRect.top + imgRect.height / 2 - 25 + 'px';
  flyItem.style.opacity = '1';
  flyItem.style.transform = 'scale(1)';
  flyItem.classList.remove('flying');
  void flyItem.offsetWidth;
  flyItem.classList.add('flying');
  flyItem.style.left = cartRect.left + cartRect.width / 2 - 25 + 'px';
  flyItem.style.top = cartRect.top + cartRect.height / 2 - 25 + 'px';
  flyItem.style.transform = 'scale(0.1)';
  flyItem.style.opacity = '0';
  setTimeout(() => { flyItem.classList.remove('flying'); flyItem.style.opacity = '0'; }, 600);
}

function removeFromCart(id) { cart = cart.filter(item => item.id !== id); saveCart(); renderCart(); }

function changeQty(id, delta) {
  const item = cart.find(item => item.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  renderCart();
}

function getCartTotal() { return cart.reduce((sum, item) => sum + item.price * item.qty, 0); }

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

function openCart() { renderCart(); cartSidebar.classList.add('open'); cartOverlay.classList.add('open'); }
function closeCartPanel() { cartSidebar.classList.remove('open'); cartOverlay.classList.remove('open'); }

// ========== 结算 & 优惠券 ==========
function applyCoupon() {
  const code = $('#couponInput').value.trim().toUpperCase();
  const msg = $('#couponMsg');
  if (coupons[code]) {
    currentCoupon = { code, discount: coupons[code] };
    msg.textContent = `优惠码 ${code} 已使用，享${currentCoupon.discount * 10}折优惠！`;
    msg.className = 'coupon-msg success';
    renderOrderSummary();
  } else {
    currentCoupon = null;
    msg.textContent = '无效的优惠码';
    msg.className = 'coupon-msg error';
    renderOrderSummary();
  }
}

function renderOrderSummary() {
  const subtotal = getCartTotal();
  const discount = currentCoupon ? subtotal * (1 - currentCoupon.discount) : 0;
  const total = subtotal - discount;
  let html = cart.map(item =>
    `<div class="order-summary-item"><span>${item.name} x${item.qty}</span><span>¥${(item.price * item.qty).toFixed(2)}</span></div>`
  ).join('');
  if (discount > 0) {
    html += `<div class="order-summary-discount"><span>优惠 (${currentCoupon.code})</span><span>-¥${discount.toFixed(2)}</span></div>`;
  }
  html += `<div class="order-summary-total"><span>合计</span><span>¥${total.toFixed(2)}</span></div>`;
  $('#orderSummary').innerHTML = html;
}

function openCheckout() {
  if (cart.length === 0) { showToast('购物车是空的'); return; }
  closeCartPanel();
  currentCoupon = null;
  $('#couponInput').value = '';
  $('#couponMsg').textContent = '';
  renderOrderSummary();
  checkoutModal.classList.add('open');
}

function submitOrder(e) {
  e.preventDefault();
  const name = $('#orderName').value.trim();
  const phone = $('#orderPhone').value.trim();
  const address = $('#orderAddress').value.trim();
  if (!name || !phone || !address) { showToast('请填写完整的收货信息'); return; }

  const subtotal = getCartTotal();
  const discount = currentCoupon ? subtotal * (1 - currentCoupon.discount) : 0;
  const total = subtotal - discount;

  const order = {
    id: 'ORD' + Date.now(),
    items: [...cart],
    subtotal, discount, total,
    coupon: currentCoupon ? currentCoupon.code : null,
    name, phone, address,
    time: new Date().toLocaleString('zh-CN')
  };
  orders.unshift(order);
  saveOrders();

  checkoutModal.classList.remove('open');
  cart = [];
  saveCart();
  currentCoupon = null;
  $('#checkoutForm').reset();
  showToast('下单成功！感谢您的购买');
}

// ========== 订单历史 ==========
function renderOrders() {
  if (orders.length === 0) {
    $('#orderList').innerHTML = '<div class="order-list-empty">暂无订单</div>';
    return;
  }
  $('#orderList').innerHTML = orders.map(o => `
    <div class="order-card">
      <div class="order-card-header">
        <span>${o.id}</span>
        <span>${o.time}</span>
      </div>
      <div class="order-card-items">
        ${o.items.map(i => `${i.name} x${i.qty}`).join('、')}
      </div>
      <div class="order-card-total">
        ${o.coupon ? `<span style="font-size:12px;color:var(--text-secondary);font-weight:normal;">优惠码: ${o.coupon}</span> ` : ''}
        ¥${o.total.toFixed(2)}
      </div>
    </div>
  `).join('');
}

function openOrders() { renderOrders(); orderModal.classList.add('open'); }

// ========== 登录注册 ==========
function updateUserUI() {
  const nameEl = $('#userName');
  if (currentUser) {
    nameEl.textContent = currentUser.nickname;
  } else {
    nameEl.textContent = '';
  }
}

function openAuth() {
  if (currentUser) {
    if (confirm(`当前登录：${currentUser.nickname}\n确定要退出登录吗？`)) {
      currentUser = null;
      saveUser();
      updateUserUI();
      showToast('已退出登录');
    }
    return;
  }
  authModal.classList.add('open');
}

function switchAuthTab(tab) {
  $$('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  $('#loginForm').style.display = tab === 'login' ? 'block' : 'none';
  $('#registerForm').style.display = tab === 'register' ? 'block' : 'none';
}

function handleLogin(e) {
  e.preventDefault();
  const username = $('#loginUsername').value.trim();
  const password = $('#loginPassword').value.trim();
  if (!username || !password) { showToast('请填写用户名和密码'); return; }
  const users = JSON.parse(localStorage.getItem('shopUsers') || '[]');
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) { showToast('用户名或密码错误'); return; }
  currentUser = { username: user.username, nickname: user.nickname };
  saveUser();
  updateUserUI();
  authModal.classList.remove('open');
  $('#loginForm').reset();
  showToast(`欢迎回来，${user.nickname}！`);
}

function handleRegister(e) {
  e.preventDefault();
  const username = $('#regUsername').value.trim();
  const password = $('#regPassword').value.trim();
  const nickname = $('#regNickname').value.trim();
  if (!username || !password || !nickname) { showToast('请填写完整信息'); return; }
  const users = JSON.parse(localStorage.getItem('shopUsers') || '[]');
  if (users.find(u => u.username === username)) { showToast('用户名已存在'); return; }
  users.push({ username, password, nickname });
  localStorage.setItem('shopUsers', JSON.stringify(users));
  currentUser = { username, nickname };
  saveUser();
  updateUserUI();
  authModal.classList.remove('open');
  $('#registerForm').reset();
  showToast(`注册成功，欢迎 ${nickname}！`);
}

// ========== 骨架屏 ==========
function hideSkeleton() {
  setTimeout(() => {
    $('#skeletonWrapper').style.display = 'none';
    $('#mainContent').style.display = 'block';
  }, 800);
}

// ========== 事件绑定 ==========
$('#themeToggle').addEventListener('click', toggleTheme);
$('#favIcon').addEventListener('click', openFav);
$('#closeFav').addEventListener('click', closeFavPanel);
favOverlay.addEventListener('click', closeFavPanel);
$('#cartIcon').addEventListener('click', openCart);
$('#closeCart').addEventListener('click', closeCartPanel);
cartOverlay.addEventListener('click', closeCartPanel);
$('#closeDetail').addEventListener('click', () => detailModal.classList.remove('open'));
$('#closeCheckout').addEventListener('click', () => checkoutModal.classList.remove('open'));
$('#checkoutBtn').addEventListener('click', openCheckout);
$('#checkoutForm').addEventListener('submit', submitOrder);
$('#couponApplyBtn').addEventListener('click', applyCoupon);
$('#userIcon').addEventListener('click', openAuth);
$('#closeAuth').addEventListener('click', () => authModal.classList.remove('open'));
$('#orderIcon').addEventListener('click', openOrders);
$('#closeOrder').addEventListener('click', () => orderModal.classList.remove('open'));
$('#loginForm').addEventListener('submit', handleLogin);
$('#registerForm').addEventListener('submit', handleRegister);

$$('.auth-tab').forEach(tab => {
  tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab));
});

$('#searchInput').addEventListener('input', (e) => {
  currentSearch = e.target.value.trim();
  renderProducts();
});

$('#sortSelect').addEventListener('change', (e) => {
  currentSort = e.target.value;
  renderProducts();
});

$$('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    renderProducts();
  });
});

$('#bannerPrev').addEventListener('click', () => { prevBanner(); startBannerTimer(); });
$('#bannerNext').addEventListener('click', () => { nextBanner(); startBannerTimer(); });
$('#bannerDots').addEventListener('click', (e) => {
  if (e.target.classList.contains('banner-dot')) {
    goToBanner(parseInt(e.target.dataset.index));
    startBannerTimer();
  }
});

[detailModal, checkoutModal, authModal, orderModal].forEach(modal => {
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });
});

// ========== 初始化 ==========
initTheme();
hideSkeleton();
initBanner();
renderProducts();
updateCartBadge();
updateFavBadge();
updateUserUI();
