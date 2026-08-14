/* =====================================================
   THE TREND CART
   FINAL E-COMMERCE JAVASCRIPT
===================================================== */


/* ================= WHATSAPP ================= */

const WHATSAPP_NUMBER = "919336448752";


/*
   Apna email yahan change kar dena.
*/

const CONTACT_EMAIL = "your-email@example.com";


/* ================= PRODUCTS ================= */

const products = [

    {
        id: 1,
        name: "Anime Action Figure",
        category: "Anime Action Figures",
        price: 699,
        image: "images/anime-1.jpg",
        description:
            "Premium anime action figure with detailed design. Perfect for anime fans, collectors and gifting."
    },

    {
        id: 2,
        name: "Anime Character Figure",
        category: "Anime Action Figures",
        price: 799,
        image: "images/anime-2.jpg",
        description:
            "Stylish anime character figure made for collectors and anime lovers."
    },

    {
        id: 3,
        name: "Premium Artificial Rose",
        category: "Artificial Flowers",
        price: 399,
        image: "images/flower-1.jpg",
        description:
            "Beautiful artificial rose designed to add a premium decorative touch to your room or workspace."
    },

    {
        id: 4,
        name: "Artificial Flower Bouquet",
        category: "Artificial Flowers",
        price: 499,
        image: "images/flower-2.jpg",
        description:
            "Elegant artificial flower bouquet suitable for home decoration, gifting and special occasions."
    }

];


/* ================= CART ================= */

let cart = [];


/* ================= ELEMENTS ================= */

const productsGrid =
    document.getElementById("productsGrid");

const cartButton =
    document.getElementById("cartButton");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutButton =
    document.getElementById("checkoutButton");

const checkoutForm =
    document.getElementById("checkoutForm");

const checkoutTotal =
    document.getElementById("checkoutTotal");

const menuButton =
    document.getElementById("menuButton");

const navbar =
    document.getElementById("navbar");

const themeButton =
    document.getElementById("themeButton");


/* ================= MODAL ================= */

const productModal =
    document.getElementById("productModal");

const closeProductModal =
    document.getElementById("closeProductModal");

const modalImage =
    document.getElementById("modalImage");

const modalCategory =
    document.getElementById("modalCategory");

const modalName =
    document.getElementById("modalName");

const modalPrice =
    document.getElementById("modalPrice");

const modalDescription =
    document.getElementById("modalDescription");

const modalAddCart =
    document.getElementById("modalAddCart");

let currentModalProduct = null;


/* ================= PRICE ================= */

function formatPrice(price) {

    return "₹" + price.toLocaleString("en-IN");

}


/* ================= PRODUCT CARD ================= */

function createProductCard(product) {

    return `

        <article class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >

            </div>


            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>


                <h3 class="product-name">
                    ${product.name}
                </h3>


                <p class="product-price">
                    ${formatPrice(product.price)}
                </p>


                <div class="product-buttons">

                    <button
                        class="view-btn"
                        type="button"
                        onclick="viewProduct(${product.id})">

                        View Details

                    </button>


                    <button
                        class="product-btn"
                        type="button"
                        onclick="addToCart(${product.id})">

                        Add to Cart

                    </button>

                </div>

            </div>

        </article>

    `;
}


/* ================= DISPLAY PRODUCTS ================= */

function displayProducts(category = "All") {

    if (!productsGrid) return;

    let filteredProducts;

    if (category === "All") {

        filteredProducts = products;

    } else {

        filteredProducts =
            products.filter(
                product =>
                    product.category === category
            );

    }


    productsGrid.innerHTML = "";


    if (filteredProducts.length === 0) {

        productsGrid.innerHTML = `

            <div class="no-products">

                <h3>
                    No Products Found
                </h3>

                <p>
                    New products are coming soon.
                </p>

            </div>

        `;

        return;

    }


    filteredProducts.forEach(product => {

        productsGrid.insertAdjacentHTML(
            "beforeend",
            createProductCard(product)
        );

    });

}


/* ================= FILTER ================= */

document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const category =
                    this.dataset.category;

                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn => {

                        btn.classList.remove("active");

                    });


                this.classList.add("active");


                displayProducts(category);

            }
        );

    });


/* ================= ADD TO CART ================= */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    const existingProduct =
        cart.find(
            item => item.id === productId
        );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCart();


    /*
       IMPORTANT:
       Cart automatically open nahi hoga.
    */

}


/* ================= REMOVE ================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );


    updateCart();

}


/* ================= QUANTITY ================= */

function changeQuantity(productId, change) {

    const item =
        cart.find(
            product => product.id === productId
        );


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    updateCart();

}


/* ================= TOTAL ================= */

function getCartTotal() {

    return cart.reduce(

        (total, item) => {

            return total +
                item.price * item.quantity;

        },

        0

    );

}


function getCartItemCount() {

    return cart.reduce(

        (total, item) => {

            return total + item.quantity;

        },

        0

    );

}


/* ================= UPDATE CART ================= */

function updateCart() {

    if (!cartItems) return;


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Your Cart is Empty
                </h3>

                <p>
                    Add some products to your cart.
                </p>

            </div>

        `;

    } else {

        cart.forEach(item => {

            const cartProduct =
                document.createElement("div");


            cartProduct.className =
                "cart-product";


            cartProduct.innerHTML = `

                <div class="cart-product-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>


                <div class="cart-product-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        ${formatPrice(item.price)}
                    </p>


                    <div class="quantity-controls">

                        <button
                            type="button"
                            onclick="changeQuantity(${item.id}, -1)">
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            type="button"
                            onclick="changeQuantity(${item.id}, 1)">
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="remove-cart-item"
                    type="button"
                    onclick="removeFromCart(${item.id})">

                    ×

                </button>

            `;


            cartItems.appendChild(cartProduct);

        });

    }


    if (cartCount) {

        cartCount.textContent =
            getCartItemCount();

    }


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(getCartTotal());

    }


    if (checkoutTotal) {

        checkoutTotal.textContent =
            formatPrice(getCartTotal());

    }

}


/* ================= OPEN CART ================= */

function openCart() {

    cartSidebar.classList.add("active");

    cartOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* ================= CLOSE CART ================= */

function closeCartSidebar() {

    cartSidebar.classList.remove("active");

    cartOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


/* ================= CART EVENTS ================= */

cartButton.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartSidebar
);


cartOverlay.addEventListener(
    "click",
    closeCartSidebar
);


/* ================= CHECKOUT ================= */

checkoutButton.addEventListener(
    "click",
    function () {

        if (cart.length === 0) {

            alert(
                "Your cart is empty. Please add a product first."
            );

            return;

        }


        closeCartSidebar();


        document
            .getElementById("checkout")
            .scrollIntoView({

                behavior: "smooth"

            });

    }
);


/* ================= CHECKOUT FORM ================= */

checkoutForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        if (cart.length === 0) {

            alert(
                "Your cart is empty."
            );

            return;

        }


        const name =
            document
                .getElementById("customerName")
                .value
                .trim();


        const phone =
            document
                .getElementById("customerPhone")
                .value
                .trim();


        const email =
            document
                .getElementById("customerEmail")
                .value
                .trim();


        const address =
            document
                .getElementById("customerAddress")
                .value
                .trim();


        const city =
            document
                .getElementById("customerCity")
                .value
                .trim();


        const state =
            document
                .getElementById("customerState")
                .value
                .trim();


        const pincode =
            document
                .getElementById("customerPincode")
                .value
                .trim();


        /* PHONE */

        if (!/^[0-9]{10}$/.test(phone)) {

            alert(
                "Please enter a valid 10 digit mobile number."
            );

            return;

        }


        /* PINCODE */

        if (!/^[0-9]{6}$/.test(pincode)) {

            alert(
                "Please enter a valid 6 digit pincode."
            );

            return;

        }


        /* MESSAGE */

        let message =
            "🛍️ *NEW ORDER - THE TREND CART*\n\n";


        message +=
            "👤 *CUSTOMER DETAILS*\n";


        message +=
            `Name: ${name}\n`;


        message +=
            `Mobile: ${phone}\n`;


        if (email) {

            message +=
                `Email: ${email}\n`;

        }


        message +=
            `Address: ${address}\n`;


        message +=
            `City: ${city}\n`;


        message +=
            `State: ${state}\n`;


        message +=
            `Pincode: ${pincode}\n\n`;


        message +=
            "🛒 *ORDER DETAILS*\n\n";


        cart.forEach((item, index) => {

            const subtotal =
                item.price * item.quantity;


            message +=
                `${index + 1}. ${item.name}\n`;


            message +=
                `Qty: ${item.quantity}\n`;


            message +=
                `Price: ${formatPrice(item.price)}\n`;


            message +=
                `Subtotal: ${formatPrice(subtotal)}\n\n`;

        });


        message +=
            "━━━━━━━━━━━━━━\n";


        message +=
            `💰 *TOTAL: ${formatPrice(getCartTotal())}*`;


        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    }
);


/* ================= VIEW PRODUCT ================= */

function viewProduct(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    currentModalProduct = product;


    modalImage.src =
        product.image;


    modalImage.alt =
        product.name;


    modalCategory.textContent =
        product.category;


    modalName.textContent =
        product.name;


    modalPrice.textContent =
        formatPrice(product.price);


    modalDescription.textContent =
        product.description;


    productModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* ================= MODAL CLOSE ================= */

function closeProductDetails() {

    productModal.classList.remove("active");

    document.body.style.overflow = "";

}


closeProductModal.addEventListener(
    "click",
    closeProductDetails
);


productModal.addEventListener(
    "click",
    function (event) {

        if (event.target === productModal) {

            closeProductDetails();

        }

    }
);


/* ================= MODAL ADD CART ================= */

modalAddCart.addEventListener(
    "click",
    function () {

        if (!currentModalProduct) return;


        addToCart(
            currentModalProduct.id
        );


        closeProductDetails();

    }
);


/* ================= MOBILE MENU ================= */

menuButton.addEventListener(
    "click",
    function () {

        navbar.classList.toggle("active");

    }
);


/* Close menu after clicking link */

navbar
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            function () {

                navbar.classList.remove("active");

            }
        );

    });


/* ================= DARK MODE ================= */

function setTheme(isDark) {

    if (isDark) {

        document.body.classList.add("dark");

        themeButton.textContent = "☀️";

        localStorage.setItem(
            "trendCartTheme",
            "dark"
        );

    } else {

        document.body.classList.remove("dark");

        themeButton.textContent = "🌙";

        localStorage.setItem(
            "trendCartTheme",
            "light"
        );

    }

}


themeButton.addEventListener(
    "click",
    function () {

        const isDark =
            document.body.classList.contains("dark");

        setTheme(!isDark);

    }
);


/* ================= ESC KEY ================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeCartSidebar();

            closeProductDetails();

            navbar.classList.remove("active");

        }

    }
);


/* ================= EMAIL ================= */

/*
   Contact email ko actual email se replace karne ke liye
   HTML mein your-email@example.com ko change karna.
*/


const emailLink =
    document.querySelector(
        '.contact-item[href^="mailto:"]'
    );


if (emailLink) {

    emailLink.href =
        `mailto:${CONTACT_EMAIL}`;

}


/* ================= INITIALIZE ================= */

const savedTheme =
    localStorage.getItem(
        "trendCartTheme"
    );


if (savedTheme === "dark") {

    setTheme(true);

} else {

    setTheme(false);

}


displayProducts("All");

updateCart();