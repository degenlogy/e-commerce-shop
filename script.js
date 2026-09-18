/**
 * NOVA — Modern Lifestyle E-Commerce Store
 * Fully Functional Vanilla JavaScript Engine
 */

// ==========================================================================
// 1. PRODUCT DATABASE
// ==========================================================================
const PRODUCTS = [
  {
    id: 1,
    name: "NOVA Runner X-1",
    category: "Sneakers",
    price: 139,
    oldPrice: 169,
    rating: 4.9,
    reviews: 142,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description: "Engineered with breathable dynamic mesh, lightweight foam rebound, and high-traction rubber outsoles for peak daily ergonomics."
  },
  {
    id: 2,
    name: "Chrono Minimal Watch",
    category: "Watches",
    price: 189,
    oldPrice: 220,
    rating: 4.8,
    reviews: 98,
    badge: "Staff Pick",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "Surgical-grade stainless steel casing, sapphire crystal face, and a Japanese quartz movement crafted for timeless simplicity."
  },
  {
    id: 3,
    name: "AeroStudio ANC Wireless",
    category: "Audio",
    price: 249,
    oldPrice: 299,
    rating: 5.0,
    reviews: 215,
    badge: "New Edition",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Custom 40mm beryllium drivers delivering high-fidelity acoustic performance with intelligent active noise cancellation and 36-hour battery."
  },
  {
    id: 4,
    name: "Commuter Shell Backpack",
    category: "Bags",
    price: 119,
    oldPrice: 149,
    rating: 4.7,
    reviews: 84,
    badge: "Waterproof",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description: "Cordura® weatherproof ballistic nylon, dedicated padded 16-inch laptop chamber, and ergonomic load-dispersing harness straps."
  },
  {
    id: 5,
    name: "Heavyweight Pima Tee",
    category: "Clothing",
    price: 48,
    oldPrice: null,
    rating: 4.9,
    reviews: 167,
    badge: "Organic",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    description: "100% Peruvian combed cotton woven to 260 GSM for a structured drape, pre-shrunk finish, and ultra-soft skin feel."
  },
  {
    id: 6,
    name: "Monolith Titanium Shades",
    category: "Accessories",
    price: 165,
    oldPrice: 195,
    rating: 4.8,
    reviews: 73,
    badge: "Polarized",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    description: "Ultralight aerospace titanium frame fitted with scratch-resistant category 3 polarized lenses providing 100% UVA/UVB shield."
  },
  {
    id: 7,
    name: "Apex Court Lows",
    category: "Sneakers",
    price: 125,
    oldPrice: 150,
    rating: 4.6,
    reviews: 62,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    description: "Classic court sneaker silhouette upgraded with full-grain Italian leather uppers and cushioned OrthoLite® insoles."
  },
  {
    id: 8,
    name: "Orbit Ceramic Watch",
    category: "Watches",
    price: 280,
    oldPrice: 340,
    rating: 4.9,
    reviews: 110,
    badge: "Limited Drop",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    description: "Scratch-proof matte black ceramic housing paired with automatic mechanical movement featuring a 42-hour power reserve."
  },
  {
    id: 9,
    name: "AirPod Vault Earbuds",
    category: "Audio",
    price: 149,
    oldPrice: 179,
    rating: 4.7,
    reviews: 94,
    badge: "IPX7",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    description: "True wireless earbuds with dual beamforming microphones, spatial audio calibration, and wireless charging case."
  },
  {
    id: 10,
    name: "Weekend Duffle 40L",
    category: "Bags",
    price: 155,
    oldPrice: 185,
    rating: 4.8,
    reviews: 58,
    badge: "Travel Ready",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=80",
    description: "Spacious airline carry-on compliant duffle bag with isolated ventilated footwear compartment and leather accents."
  },
  {
    id: 11,
    name: "Merino Wool Zip Overshirt",
    category: "Clothing",
    price: 135,
    oldPrice: 165,
    rating: 4.9,
    reviews: 49,
    badge: "Winter Warmth",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
    description: "Thermo-regulating 100% fine Merino wool woven into an overshirt silhouette featuring matte Japanese metal hardware."
  },
  {
    id: 12,
    name: "Minimalist Cardholder",
    category: "Accessories",
    price: 38,
    oldPrice: 48,
    rating: 4.7,
    reviews: 180,
    badge: "RFID Safe",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    description: "Hand-stitched vegetable-tanned full grain leather slim wallet equipped with RFID blocking interior shielding."
  }
];

// ==========================================================================
// 2. CENTRALIZED APPLICATION STATE
// ==========================================================================
const state = {
  products: PRODUCTS,
  cart: [],
  wishlist: [],
  activeCategory: "All",
  searchQuery: "",
  sortBy: "featured",
  maxPrice: 500,
  coupon: null, // e.g. { code: "NOVA20", discount: 0.20 }
  quickViewProduct: null,
  quickViewQty: 1
};

// ==========================================================================
// 3. STORAGE & PERSISTENCE
// ==========================================================================
const STORAGE_KEYS = {
  CART: "nova_ecommerce_cart_v1",
  WISHLIST: "nova_ecommerce_wishlist_v1"
};

function loadStoredData() {
  try {
    const storedCart = localStorage.getItem(STORAGE_KEYS.CART);
    if (storedCart) state.cart = JSON.parse(storedCart);

    const storedWishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
    if (storedWishlist) state.wishlist = JSON.parse(storedWishlist);
  } catch (e) {
    console.warn("Could not parse localStorage, resetting state.", e);
  }
}

function saveCartData() {
  try {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
  } catch (e) {
    console.error("Failed to save cart to localStorage", e);
  }
}

function saveWishlistData() {
  try {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(state.wishlist));
  } catch (e) {
    console.error("Failed to save wishlist to localStorage", e);
  }
}

// ==========================================================================
// 4. DOM ELEMENT REFERENCES
// ==========================================================================
const DOM = {
  // Navigation & Badges
  cartBadge: document.getElementById("cartBadge"),
  wishlistBadge: document.getElementById("wishlistBadge"),
  catalogProductCount: document.getElementById("catalogProductCount"),
  
  // Catalog Controls
  productGrid: document.getElementById("productGrid"),
  emptyState: document.getElementById("emptyState"),
  categoryPills: document.getElementById("categoryPills"),
  priceRangeSlider: document.getElementById("priceRangeSlider"),
  priceRangeValue: document.getElementById("priceRangeValue"),
  sortSelector: document.getElementById("sortSelector"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),

  // Drawers
  cartDrawer: document.getElementById("cartDrawer"),
  cartBackdrop: document.getElementById("cartBackdrop"),
  cartTriggerBtn: document.getElementById("cartTriggerBtn"),
  closeCartBtn: document.getElementById("closeCartBtn"),
  cartItemsContainer: document.getElementById("cartItemsContainer"),
  cartDrawerCount: document.getElementById("cartDrawerCount"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartDiscount: document.getElementById("cartDiscount"),
  discountRow: document.getElementById("discountRow"),
  cartShipping: document.getElementById("cartShipping"),
  cartTotal: document.getElementById("cartTotal"),
  shippingTrackerText: document.getElementById("shippingTrackerText"),
  shippingProgressFill: document.getElementById("shippingProgressFill"),
  couponInput: document.getElementById("couponInput"),
  applyCouponBtn: document.getElementById("applyCouponBtn"),
  couponStatus: document.getElementById("couponStatus"),
  proceedToCheckoutBtn: document.getElementById("proceedToCheckoutBtn"),

  // Wishlist Drawer
  wishlistDrawer: document.getElementById("wishlistDrawer"),
  wishlistBackdrop: document.getElementById("wishlistBackdrop"),
  wishlistTriggerBtn: document.getElementById("wishlistTriggerBtn"),
  closeWishlistBtn: document.getElementById("closeWishlistBtn"),
  wishlistItemsContainer: document.getElementById("wishlistItemsContainer"),
  wishlistDrawerCount: document.getElementById("wishlistDrawerCount"),

  // Mobile Menu
  mobileDrawer: document.getElementById("mobileDrawer"),
  mobileDrawerBackdrop: document.getElementById("mobileDrawerBackdrop"),
  mobileMenuBtn: document.getElementById("mobileMenuBtn"),
  closeMobileDrawerBtn: document.getElementById("closeMobileDrawerBtn"),

  // Search Overlay
  searchOverlay: document.getElementById("searchOverlay"),
  searchTriggerBtn: document.getElementById("searchTriggerBtn"),
  closeSearchBtn: document.getElementById("closeSearchBtn"),
  searchInput: document.getElementById("searchInput"),
  searchResultsContainer: document.getElementById("searchResultsContainer"),

  // Quick View Modal
  quickViewBackdrop: document.getElementById("quickViewBackdrop"),
  closeQuickViewBtn: document.getElementById("closeQuickViewBtn"),
  qvImage: document.getElementById("qvImage"),
  qvCategory: document.getElementById("qvCategory"),
  qvTitle: document.getElementById("qvTitle"),
  qvStars: document.getElementById("qvStars"),
  qvRating: document.getElementById("qvRating"),
  qvReviews: document.getElementById("qvReviews"),
  qvPrice: document.getElementById("qvPrice"),
  qvOldPrice: document.getElementById("qvOldPrice"),
  qvDiscountBadge: document.getElementById("qvDiscountBadge"),
  qvDescription: document.getElementById("qvDescription"),
  qvQtyMinus: document.getElementById("qvQtyMinus"),
  qvQtyPlus: document.getElementById("qvQtyPlus"),
  qvQtyDisplay: document.getElementById("qvQtyDisplay"),
  qvAddToCartBtn: document.getElementById("qvAddToCartBtn"),
  qvWishlistBtn: document.getElementById("qvWishlistBtn"),

  // Checkout Modal
  checkoutBackdrop: document.getElementById("checkoutBackdrop"),
  closeCheckoutBtn: document.getElementById("closeCheckoutBtn"),
  checkoutForm: document.getElementById("checkoutForm"),
  checkoutItemsList: document.getElementById("checkoutItemsList"),
  checkoutSubtotal: document.getElementById("checkoutSubtotal"),
  checkoutDiscountRow: document.getElementById("checkoutDiscountRow"),
  checkoutDiscount: document.getElementById("checkoutDiscount"),
  checkoutShipping: document.getElementById("checkoutShipping"),
  checkoutTotal: document.getElementById("checkoutTotal"),

  // Confirmation Modal
  confirmationBackdrop: document.getElementById("confirmationBackdrop"),
  confirmedOrderId: document.getElementById("confirmedOrderId"),
  confirmationSummaryBox: document.getElementById("confirmationSummaryBox"),
  closeConfirmationBtn: document.getElementById("closeConfirmationBtn"),

  // Account Modal
  accountBackdrop: document.getElementById("accountBackdrop"),
  accountTriggerBtn: document.getElementById("accountTriggerBtn"),
  closeAccountBtn: document.getElementById("closeAccountBtn"),
  tabSignInBtn: document.getElementById("tabSignInBtn"),
  tabSignUpBtn: document.getElementById("tabSignUpBtn"),
  accountForm: document.getElementById("accountForm"),
  accountSubmitBtn: document.getElementById("accountSubmitBtn"),

  // Newsletter
  newsletterForm: document.getElementById("newsletterForm"),
  newsletterEmail: document.getElementById("newsletterEmail"),
  newsletterFeedback: document.getElementById("newsletterFeedback"),

  // Toast Container
  toastContainer: document.getElementById("toastContainer")
};

// ==========================================================================
// 5. RENDERING: PRODUCT CATALOG
// ==========================================================================
function renderProducts() {
  const filtered = getFilteredProducts();

  DOM.catalogProductCount.textContent = `Showing ${filtered.length} of ${state.products.length} products`;

  if (filtered.length === 0) {
    DOM.productGrid.innerHTML = "";
    DOM.emptyState.hidden = false;
    return;
  }

  DOM.emptyState.hidden = true;
  DOM.productGrid.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.includes(product.id);
    const hasDiscount = product.oldPrice && product.oldPrice > product.price;

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-thumb-wrap">
          ${product.badge ? `<span class="product-badge">${escapeHtml(product.badge)}</span>` : ""}
          <button class="wishlist-heart-btn ${isWishlisted ? "active" : ""}" data-wishlist="${product.id}" aria-label="Toggle Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <img src="${product.image}" alt="${escapeHtml(product.name)}" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=600&q=80'">
          <button class="quickview-hover-btn" data-quickview="${product.id}">Quick View</button>
        </div>

        <div class="product-info">
          <span class="product-category-label">${escapeHtml(product.category)}</span>
          <h3 class="product-name">${escapeHtml(product.name)}</h3>
          
          <div class="product-rating">
            <span class="star-rating">★</span>
            <span class="font-mono"><strong>${product.rating.toFixed(1)}</strong></span>
            <span class="text-muted">(${product.reviews})</span>
          </div>

          <div class="product-price-row">
            <span class="current-price font-mono">$${product.price.toFixed(2)}</span>
            ${hasDiscount ? `<span class="old-price font-mono">$${product.oldPrice.toFixed(2)}</span>` : ""}
          </div>

          <button class="add-to-cart-btn" data-addcart="${product.id}">Add to Cart</button>
        </div>
      </article>
    `;
  }).join("");
}

function getFilteredProducts() {
  let list = [...state.products];

  // 1. Category Filter
  if (state.activeCategory && state.activeCategory !== "All") {
    list = list.filter(p => p.category.toLowerCase() === state.activeCategory.toLowerCase());
  }

  // 2. Max Price Filter
  list = list.filter(p => p.price <= state.maxPrice);

  // 3. Search Query Filter (if active inside main catalog)
  if (state.searchQuery.trim() !== "") {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // 4. Sorting
  switch (state.sortBy) {
    case "price-low":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      list.sort((a, b) => b.id - a.id);
      break;
    default:
      // "featured" default order
      list.sort((a, b) => a.id - b.id);
      break;
  }

  return list;
}

// ==========================================================================
// 6. CART MANAGEMENT & CALCULATIONS
// ==========================================================================
function addToCart(productId, quantity = 1) {
  const prod = state.products.find(p => p.id === productId);
  if (!prod) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      category: prod.category,
      quantity: quantity
    });
  }

  saveCartData();
  updateCartUI();
  showToast(`Added ${quantity} × ${prod.name} to cart`);
}

function updateCartItemQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCartData();
  updateCartUI();
}

function removeFromCart(productId) {
  const item = state.cart.find(i => i.id === productId);
  const name = item ? item.name : "Item";
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCartData();
  updateCartUI();
  showToast(`Removed ${name} from cart`);
}

function calculateTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountRate = state.coupon ? state.coupon.discount : 0;
  const discountAmount = subtotal * discountRate;
  
  // Free shipping over $100, else $10 (free if empty cart)
  let shipping = 0;
  if (subtotal > 0) {
    shipping = subtotal >= 100 ? 0 : 10;
  }

  const total = Math.max(0, subtotal - discountAmount + shipping);

  return { subtotal, discountAmount, shipping, total };
}

function updateCartUI() {
  // Update Total Badges
  const totalItemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  DOM.cartBadge.textContent = totalItemCount;
  DOM.cartDrawerCount.textContent = `${totalItemCount} item${totalItemCount === 1 ? "" : "s"}`;

  const { subtotal, discountAmount, shipping, total } = calculateTotals();

  // Free shipping tracker calculation
  if (subtotal >= 100 || subtotal === 0) {
    DOM.shippingTrackerText.textContent = subtotal === 0 
      ? "Add items to unlock free shipping" 
      : "🎉 You have unlocked Free Worldwide Shipping!";
    DOM.shippingProgressFill.style.width = subtotal === 0 ? "0%" : "100%";
  } else {
    const diff = (100 - subtotal).toFixed(2);
    const pct = Math.min(100, (subtotal / 100) * 100);
    DOM.shippingTrackerText.textContent = `Add $${diff} more to unlock free shipping`;
    DOM.shippingProgressFill.style.width = `${pct}%`;
  }

  // Render Items inside Drawer
  if (state.cart.length === 0) {
    DOM.cartItemsContainer.innerHTML = `
      <div class="empty-state" style="padding: 40px 0;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line></svg>
        <h4 style="margin: 12px 0 4px; font-size: 1.1rem;">Your cart is empty</h4>
        <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 16px;">Explore our catalog to add modern essentials.</p>
        <button class="btn btn-secondary btn-sm" onclick="closeCart()">Continue Shopping</button>
      </div>
    `;
    DOM.cartFooter.style.opacity = "0.4";
    DOM.cartFooter.style.pointerEvents = "none";
  } else {
    DOM.cartFooter.style.opacity = "1";
    DOM.cartFooter.style.pointerEvents = "auto";

    DOM.cartItemsContainer.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${escapeHtml(item.name)}" class="cart-item-img">
        <div>
          <strong class="cart-item-title">${escapeHtml(item.name)}</strong>
          <span class="cart-item-price">$${item.price.toFixed(2)}</span>
          <div class="quantity-picker">
            <button class="qty-btn" data-cartqty="${item.id}" data-delta="-1" aria-label="Decrease">&minus;</button>
            <span class="qty-number font-mono">${item.quantity}</span>
            <button class="qty-btn" data-cartqty="${item.id}" data-delta="1" aria-label="Increase">&plus;</button>
          </div>
        </div>
        <button class="cart-item-remove-btn" data-removecart="${item.id}">Remove</button>
      </div>
    `).join("");
  }

  // Update Summary Figures
  DOM.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (state.coupon && discountAmount > 0) {
    DOM.discountRow.hidden = false;
    DOM.cartDiscount.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    DOM.discountRow.hidden = true;
  }
  DOM.cartShipping.textContent = shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
  DOM.cartTotal.textContent = `$${total.toFixed(2)}`;
}

// ==========================================================================
// 7. WISHLIST MANAGEMENT
// ==========================================================================
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = state.products.find(p => p.id === productId);
  const name = product ? product.name : "Product";

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed ${name} from wishlist`);
  } else {
    state.wishlist.push(productId);
    showToast(`Added ${name} to wishlist`);
  }

  saveWishlistData();
  updateWishlistUI();
  renderProducts(); // Refresh heart icon states
}

function updateWishlistUI() {
  DOM.wishlistBadge.textContent = state.wishlist.length;
  DOM.wishlistDrawerCount.textContent = `${state.wishlist.length} saved`;

  const wishlistedProducts = state.products.filter(p => state.wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    DOM.wishlistItemsContainer.innerHTML = `
      <div class="empty-state" style="padding: 40px 0;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <h4 style="margin: 12px 0 4px; font-size: 1.1rem;">Your wishlist is empty</h4>
        <p class="text-muted" style="font-size: 0.85rem;">Save your favorite pieces for quick access later.</p>
      </div>
    `;
  } else {
    DOM.wishlistItemsContainer.innerHTML = wishlistedProducts.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${escapeHtml(item.name)}" class="cart-item-img">
        <div>
          <strong class="cart-item-title">${escapeHtml(item.name)}</strong>
          <span class="cart-item-price">$${item.price.toFixed(2)}</span>
          <div style="margin-top: 6px;">
            <button class="btn btn-sm btn-dark" data-addcart="${item.id}" style="padding: 4px 12px; font-size: 0.75rem;">Move to Cart</button>
          </div>
        </div>
        <button class="cart-item-remove-btn" data-removewish="${item.id}">Remove</button>
      </div>
    `).join("");
  }
}

// ==========================================================================
// 8. QUICK VIEW MODAL
// ==========================================================================
function openQuickView(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  state.quickViewProduct = product;
  state.quickViewQty = 1;

  DOM.qvImage.src = product.image;
  DOM.qvImage.alt = product.name;
  DOM.qvCategory.textContent = product.category;
  DOM.qvTitle.textContent = product.name;
  DOM.qvRating.textContent = product.rating.toFixed(1);
  DOM.qvReviews.textContent = `(${product.reviews} reviews)`;
  DOM.qvPrice.textContent = `$${product.price.toFixed(2)}`;
  
  if (product.oldPrice && product.oldPrice > product.price) {
    DOM.qvOldPrice.textContent = `$${product.oldPrice.toFixed(2)}`;
    DOM.qvOldPrice.hidden = false;
    DOM.qvDiscountBadge.hidden = false;
    const savePct = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    DOM.qvDiscountBadge.textContent = `Save ${savePct}%`;
  } else {
    DOM.qvOldPrice.hidden = true;
    DOM.qvDiscountBadge.hidden = true;
  }

  DOM.qvDescription.textContent = product.description;
  DOM.qvQtyDisplay.textContent = state.quickViewQty;

  // Heart status
  const isWish = state.wishlist.includes(product.id);
  DOM.qvWishlistBtn.classList.toggle("active", isWish);
  if (isWish) {
    DOM.qvWishlistBtn.querySelector("svg").setAttribute("fill", "#c92a2a");
    DOM.qvWishlistBtn.querySelector("svg").setAttribute("stroke", "#c92a2a");
  } else {
    DOM.qvWishlistBtn.querySelector("svg").setAttribute("fill", "none");
    DOM.qvWishlistBtn.querySelector("svg").setAttribute("stroke", "currentColor");
  }

  DOM.quickViewBackdrop.classList.add("open");
}

function closeQuickView() {
  DOM.quickViewBackdrop.classList.remove("open");
  state.quickViewProduct = null;
}

// ==========================================================================
// ========================================================================
// 9. CHECKOUT & ORDER COMPLETION
// ========================================================================
function openCheckout() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  closeCart();
  const { subtotal, discountAmount, shipping, total } = calculateTotals();

  DOM.checkoutItemsList.innerHTML = state.cart.map(item => `
    <div class="checkout-item">
      <img src="${item.image}" alt="${escapeHtml(item.name)}" class="checkout-item-img">
      <div class="checkout-item-info">
        <strong>${escapeHtml(item.name)}</strong>
        <span class="text-muted">Qty ${item.quantity}</span>
      </div>
      <span class="font-mono">$${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  `).join("");

  DOM.checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  DOM.checkoutShipping.textContent = shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
  DOM.checkoutTotal.textContent = `$${total.toFixed(2)}`;

  if (state.coupon && discountAmount > 0) {
    DOM.checkoutDiscountRow.hidden = false;
    DOM.checkoutDiscount.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    DOM.checkoutDiscountRow.hidden = true;
  }

  DOM.checkoutBackdrop.classList.add("open");
}

function closeCheckout() {
  DOM.checkoutBackdrop.classList.remove("open");
}

function completeOrder() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  const { subtotal, discountAmount, shipping, total } = calculateTotals();
  const orderId = `NOVA-${Math.floor(10000 + Math.random() * 90000)}`;

  DOM.confirmedOrderId.textContent = `Order #${orderId}`;
  DOM.confirmationSummaryBox.innerHTML = `
    <div class="summary-row"><span>Items</span><strong>${state.cart.reduce((n, item) => n + item.quantity, 0)}</strong></div>
    <div class="summary-row"><span>Subtotal</span><strong>$${subtotal.toFixed(2)}</strong></div>
    ${discountAmount > 0 ? `<div class="summary-row"><span class="text-success">Discount</span><strong class="text-success">-$${discountAmount.toFixed(2)}</strong></div>` : ""}
    <div class="summary-row"><span>Shipping</span><strong>${shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</strong></div>
    <div class="summary-row total-row"><strong>Total</strong><strong class="font-mono">$${total.toFixed(2)}</strong></div>
  `;

  state.cart = [];
  state.coupon = null;
  saveCartData();
  updateCartUI();
  if (DOM.couponInput) DOM.couponInput.value = "";
  if (DOM.couponStatus) DOM.couponStatus.textContent = "";

  closeCheckout();
  DOM.confirmationBackdrop.classList.add("open");
}

function closeConfirmation() {
  DOM.confirmationBackdrop.classList.remove("open");
}

// ========================================================================
// 10. DRAWERS, SEARCH & FILTERS
// ========================================================================
function openCart() {
  closeWishlist();
  DOM.cartDrawer.classList.add("open");
  DOM.cartBackdrop.classList.add("open");
}

function closeCart() {
  DOM.cartDrawer.classList.remove("open");
  DOM.cartBackdrop.classList.remove("open");
}

function openWishlist() {
  closeCart();
  DOM.wishlistDrawer.classList.add("open");
  DOM.wishlistBackdrop.classList.add("open");
}

function closeWishlist() {
  DOM.wishlistDrawer.classList.remove("open");
  DOM.wishlistBackdrop.classList.remove("open");
}

function openMobileMenu() {
  DOM.mobileDrawer.classList.add("open");
  DOM.mobileDrawerBackdrop.classList.add("open");
}

function closeMobileMenu() {
  DOM.mobileDrawer.classList.remove("open");
  DOM.mobileDrawerBackdrop.classList.remove("open");
}

function openSearch() {
  DOM.searchOverlay.classList.add("open");
  document.body.classList.add("modal-open");
  setTimeout(() => DOM.searchInput.focus(), 50);
  renderSearchResults();
}

function closeSearch() {
  DOM.searchOverlay.classList.remove("open");
  document.body.classList.remove("modal-open");
}

function renderSearchResults() {
  const query = DOM.searchInput.value.trim().toLowerCase();
  const results = query
    ? state.products.filter(p => `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(query))
    : state.products.slice(0, 6);

  if (!results.length) {
    DOM.searchResultsContainer.innerHTML = `<div class="search-empty">No products found for “${escapeHtml(query)}”.</div>`;
    return;
  }

  DOM.searchResultsContainer.innerHTML = results.map(product => `
    <button class="search-result-item" type="button" data-search-product="${product.id}">
      <img src="${product.image}" alt="${escapeHtml(product.name)}">
      <span><strong>${escapeHtml(product.name)}</strong><small>${escapeHtml(product.category)} · $${product.price.toFixed(2)}</small></span>
    </button>
  `).join("");
}

function setCategory(category) {
  state.activeCategory = category || "All";
  document.querySelectorAll("[data-filter]").forEach(el => {
    if (el.classList.contains("pill-btn")) el.classList.toggle("active", el.dataset.filter === state.activeCategory);
  });
  renderProducts();
}

function resetFilters() {
  state.activeCategory = "All";
  state.searchQuery = "";
  state.sortBy = "featured";
  state.maxPrice = 500;
  DOM.priceRangeSlider.value = "500";
  DOM.priceRangeValue.textContent = "$500";
  DOM.sortSelector.value = "featured";
  DOM.searchInput.value = "";
  document.querySelectorAll(".pill-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.filter === "All"));
  renderProducts();
}

function applyCoupon() {
  const code = DOM.couponInput.value.trim().toUpperCase();
  if (code === "NOVA20") {
    state.coupon = { code, discount: 0.20 };
    DOM.couponStatus.textContent = "20% discount applied.";
    DOM.couponStatus.className = "coupon-status text-success";
    updateCartUI();
    showToast("NOVA20 applied — 20% off!");
  } else if (!code) {
    DOM.couponStatus.textContent = "Enter a promo code.";
    DOM.couponStatus.className = "coupon-status text-danger";
  } else {
    state.coupon = null;
    DOM.couponStatus.textContent = "Invalid promo code.";
    DOM.couponStatus.className = "coupon-status text-danger";
    updateCartUI();
  }
}

// ========================================================================
// 11. ACCOUNT & FORM HELPERS
// ========================================================================
let accountMode = "signin";

function openAccount() {
  DOM.accountBackdrop.classList.add("open");
}

function closeAccount() {
  DOM.accountBackdrop.classList.remove("open");
}

function setAccountMode(mode) {
  accountMode = mode;
  const signup = mode === "signup";
  DOM.tabSignInBtn.classList.toggle("active", !signup);
  DOM.tabSignUpBtn.classList.toggle("active", signup);
  DOM.accountSubmitBtn.textContent = signup ? "Create NOVA Account" : "Sign In to NOVA";
}

function handleAccountSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("accEmail").value.trim();
  const password = document.getElementById("accPassword").value;
  if (!email || !password) {
    showToast("Please enter your email and password.");
    return;
  }
  showToast(accountMode === "signup" ? "Demo account created for this session." : "Demo sign-in successful.");
  closeAccount();
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  const email = DOM.newsletterEmail.value.trim();
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    DOM.newsletterFeedback.textContent = "Please enter a valid email address.";
    DOM.newsletterFeedback.className = "form-feedback text-danger";
    return;
  }
  DOM.newsletterFeedback.textContent = "You're subscribed. Welcome to NOVA!";
  DOM.newsletterFeedback.className = "form-feedback text-success";
  DOM.newsletterForm.reset();
}

function handlePaymentMethod(event) {
  if (event.target.name !== "paymentMethod") return;
  const cardPanel = document.getElementById("cardInputsPanel");
  if (cardPanel) cardPanel.hidden = event.target.value !== "card";
}

function handleCheckoutSubmit(event) {
  event.preventDefault();
  if (!DOM.checkoutForm.checkValidity()) {
    DOM.checkoutForm.reportValidity();
    return;
  }
  completeOrder();
}

// ========================================================================
// 12. EVENT WIRING
// ========================================================================
function bindEvents() {
  DOM.cartTriggerBtn.addEventListener("click", openCart);
  DOM.closeCartBtn.addEventListener("click", closeCart);
  DOM.cartBackdrop.addEventListener("click", closeCart);

  DOM.wishlistTriggerBtn.addEventListener("click", openWishlist);
  DOM.closeWishlistBtn.addEventListener("click", closeWishlist);
  DOM.wishlistBackdrop.addEventListener("click", closeWishlist);

  DOM.mobileMenuBtn.addEventListener("click", openMobileMenu);
  DOM.closeMobileDrawerBtn.addEventListener("click", closeMobileMenu);
  DOM.mobileDrawerBackdrop.addEventListener("click", closeMobileMenu);

  DOM.searchTriggerBtn.addEventListener("click", openSearch);
  DOM.closeSearchBtn.addEventListener("click", closeSearch);
  DOM.searchInput.addEventListener("input", () => {
    state.searchQuery = DOM.searchInput.value;
    renderSearchResults();
  });

  DOM.categoryPills.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    event.preventDefault();
    setCategory(button.dataset.filter);
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      setCategory(card.dataset.category);
      document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll(".nav-link[data-filter], .mobile-nav-item[data-filter], .footer-links a[data-filter]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      setCategory(link.dataset.filter);
      closeMobileMenu();
      document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    });
  });

  DOM.priceRangeSlider.addEventListener("input", event => {
    state.maxPrice = Number(event.target.value);
    DOM.priceRangeValue.textContent = `$${state.maxPrice}`;
    renderProducts();
  });

  DOM.sortSelector.addEventListener("change", event => {
    state.sortBy = event.target.value;
    renderProducts();
  });

  DOM.resetFiltersBtn.addEventListener("click", resetFilters);
  DOM.applyCouponBtn.addEventListener("click", applyCoupon);
  DOM.couponInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      applyCoupon();
    }
  });
  DOM.proceedToCheckoutBtn.addEventListener("click", openCheckout);

  DOM.productGrid.addEventListener("click", event => {
    const wishlist = event.target.closest("[data-wishlist]");
    if (wishlist) return toggleWishlist(Number(wishlist.dataset.wishlist));
    const add = event.target.closest("[data-addcart]");
    if (add) return addToCart(Number(add.dataset.addcart));
    const quick = event.target.closest("[data-quickview]");
    if (quick) return openQuickView(Number(quick.dataset.quickview));
  });

  DOM.wishlistItemsContainer.addEventListener("click", event => {
    const add = event.target.closest("[data-addcart]");
    if (add) return addToCart(Number(add.dataset.addcart));
    const remove = event.target.closest("[data-removewish]");
    if (remove) return toggleWishlist(Number(remove.dataset.removewish));
  });

  DOM.cartItemsContainer.addEventListener("click", event => {
    const qty = event.target.closest("[data-cartqty]");
    if (qty) return updateCartItemQty(Number(qty.dataset.cartqty), Number(qty.dataset.delta));
    const remove = event.target.closest("[data-removecart]");
    if (remove) return removeFromCart(Number(remove.dataset.removecart));
  });

  DOM.searchResultsContainer.addEventListener("click", event => {
    const item = event.target.closest("[data-search-product]");
    if (!item) return;
    openQuickView(Number(item.dataset.searchProduct));
    closeSearch();
  });

  DOM.closeQuickViewBtn.addEventListener("click", closeQuickView);
  DOM.quickViewBackdrop.addEventListener("click", event => {
    if (event.target === DOM.quickViewBackdrop) closeQuickView();
  });
  DOM.qvQtyMinus.addEventListener("click", () => {
    state.quickViewQty = Math.max(1, state.quickViewQty - 1);
    DOM.qvQtyDisplay.textContent = state.quickViewQty;
  });
  DOM.qvQtyPlus.addEventListener("click", () => {
    state.quickViewQty = Math.min(99, state.quickViewQty + 1);
    DOM.qvQtyDisplay.textContent = state.quickViewQty;
  });
  DOM.qvAddToCartBtn.addEventListener("click", () => {
    if (!state.quickViewProduct) return;
    addToCart(state.quickViewProduct.id, state.quickViewQty);
    closeQuickView();
    openCart();
  });
  DOM.qvWishlistBtn.addEventListener("click", () => {
    if (state.quickViewProduct) toggleWishlist(state.quickViewProduct.id);
  });

  DOM.closeCheckoutBtn.addEventListener("click", closeCheckout);
  DOM.checkoutBackdrop.addEventListener("click", event => {
    if (event.target === DOM.checkoutBackdrop) closeCheckout();
  });
  DOM.checkoutForm.addEventListener("submit", handleCheckoutSubmit);
  DOM.checkoutForm.addEventListener("change", handlePaymentMethod);

  DOM.closeConfirmationBtn.addEventListener("click", closeConfirmation);
  DOM.confirmationBackdrop.addEventListener("click", event => {
    if (event.target === DOM.confirmationBackdrop) closeConfirmation();
  });

  DOM.accountTriggerBtn.addEventListener("click", openAccount);
  DOM.closeAccountBtn.addEventListener("click", closeAccount);
  DOM.accountBackdrop.addEventListener("click", event => {
    if (event.target === DOM.accountBackdrop) closeAccount();
  });
  DOM.tabSignInBtn.addEventListener("click", () => setAccountMode("signin"));
  DOM.tabSignUpBtn.addEventListener("click", () => setAccountMode("signup"));
  DOM.accountForm.addEventListener("submit", handleAccountSubmit);

  DOM.newsletterForm.addEventListener("submit", handleNewsletterSubmit);

  document.addEventListener("click", event => {
    const qv = event.target.closest("[data-quickview]");
    if (qv && !qv.closest("#productGrid") && !qv.closest(".hero-floating-card")) return;
    if (qv && qv.closest(".hero-floating-card")) openQuickView(Number(qv.dataset.quickview));
  });

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    closeCart();
    closeWishlist();
    closeMobileMenu();
    closeSearch();
    closeQuickView();
    closeCheckout();
    closeConfirmation();
    closeAccount();
  });
}

// ========================================================================
// 13. UTILITIES & INITIALIZATION
// ========================================================================
function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  DOM.toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}

function initializeApp() {
  loadStoredData();

  // Sanitize persisted data so malformed localStorage cannot break rendering.
  state.cart = Array.isArray(state.cart) ? state.cart.filter(item => state.products.some(p => p.id === item.id) && Number(item.quantity) > 0).map(item => ({
    ...item,
    quantity: Math.max(1, Number(item.quantity) || 1)
  })) : [];
  state.wishlist = Array.isArray(state.wishlist) ? state.wishlist.filter(id => state.products.some(p => p.id === id)) : [];

  bindEvents();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setAccountMode("signin");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp, { once: true });
} else {
  initializeApp();
}
