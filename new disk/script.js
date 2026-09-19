/* =====================================================
   THE TREND CART
   FINAL FIXED E-COMMERCE JAVASCRIPT
===================================================== */


/* =====================================================
   SETTINGS
===================================================== */

const WHATSAPP_NUMBER = "918355940747";

const CONTACT_EMAIL =
    "thetrendcart46@gmail.com";


/* =====================================================
   PRODUCTS
===================================================== */

const products = [

    {
        id: 1,

        name: "Anime Gear 5 Luffy Action Figure",

        category: "Anime Action Figures",

        price: 500,

        image: "images/1.jpg",

        stock: 10,

        description:
            "Bring the legendary Gear 5 Luffy to life with this premium anime collectible figure! Designed with highly detailed finishing, dynamic pose, and an eye-catching white cloud effect, this figure is perfect for anime fans, collectors, gifting, and room/desk display."
    },


    {
        id: 2,

        name: "One Piece Anime Mini Figure Set – 4 Character Collection",

        category: "Anime Action Figures",

        price: 1000,

        image: "images/2.jpg",

        stock: 0,

        description:
            "Cute One Piece mini figures featuring Luffy, Nami, Zoro & Law. Perfect for car dashboards, desks, room decor, collection and gifting.",

        size: "Approx. 5–8 cm per figure",

        uses:
            "Car Dashboard, Office Desk, Study Table, Home Decor, Gaming Setup, Collection & Gifting"
    },


    {
        id: 3,

        name: "One Piece Anime Mini Figures – 4 Character Collection",

        category: "Anime Action Figures",

        price: 1200,

        image: "images/3.jpg",

        stock: 0,

        description:
            "Cute One Piece mini figures featuring Luffy, Nami, Zoro & Law. Perfect for anime collections, car dashboards, desks, room decor and gifting. Lightweight, detailed and easy to carry.",

        size: "Approx. 5–8 cm per figure",

        uses:
            "Bag, Keys, Car Dashboard, Desk, Room Decor, Collection & Gifting",

        features:
            "Premium Quality, Safe & Non-Toxic, Keychain Compatible, Easy to Carry, Collectible Design"
    },


    {
        id: 4,

        name: "Luffy Anime Keychain – Premium Rope Keychain",

        category: "Anime Action Figures",

        price: 199,

        image: "images/4.jpg",

        stock: 0,

        description:
            "Stylish Luffy keychain with a durable rope design. Lightweight and compact, perfect for keys, bags and car accessories. A great gift for One Piece and anime lovers.",

        size: "Approx. 8–10 cm",

        uses:
            "Keys, Backpack, School Bag, Car Keys, Bag Charm & Gifting",

        features:
            "Premium Quality, Strong & Durable, Lightweight, Compact Design, Perfect Gift"
    },


    {
        id: 5,

        name: "Doraemon & Friends Mini Figure Set – 6 Piece Collection",

        category: "Anime Action Figures",

        price: 1400,

        image: "images/5.jpg",

        stock: 10,

        description:
            "Premium 6-piece Doraemon & Friends mini figure collection with cute character designs. Perfect for home decor, desk display, play, collecting and gifting.",

        size: "Approx. 6–10 cm per figure",

        uses:
            "Home Decor, Office Desk, Study Table, Display, Collection, Play & Gifting",

        features:
            "6 Piece Collection, Premium Finish, Durable Material, Cute Design, Perfect for Collectors"
    },
    {
    id: 6,

    name: "Gear 5 Luffy Mini Figure Collection – 5 Unique Poses",

    category: "Anime Action Figures",

    price: 1300,

    image: "images/6.jpg",

    stock: 10,

    description:
        "Premium Gear 5 Luffy mini figure collection featuring 5 unique poses with detailed character designs. Perfect for anime fans, collectors, desk display, home decor and gifting.",

    size: "Approx. 6–10 cm per figure",

    uses:
        "Car Dashboard, Office Desk, Home Decor, Study Table, Display, Collection & Gifting",

    features:
        "5 Unique Poses, Premium Quality, Durable Material, Detailed Design, Sturdy Base, Perfect Gift for Anime Fans"
},
{
    id: 7,

    name: "Naruto Uzumaki Collectible Figure – Anime Ninja Figure",

    category: "Anime Action Figures",

    price: 400,

    image: "images/7.jpg",

    stock: 10,

    description:
        "Premium Naruto Uzumaki collectible figure featuring a detailed ninja design and sturdy display base. Perfect for anime fans, collectors, home decor and desk display.",

    size: "Approx. 15–18 cm",

    uses:
        "Office Desk, Study Table, Home Decor, Display, Collection & Gifting",

    features:
        "Detailed Naruto Design, Premium Quality, Durable Material, Sturdy Base, Collector Friendly, Perfect Gift for Anime Fans"
},
{
    id: 8,

    name: "Sleepy Dreamers Mini Figurine Set – Cute Sleeping Dolls",

    category: "Anime Action Figures",

    price: 599, 

    image: "images/8.jpg",

    stock: 10,

    description:
        "Cute Sleepy Dreamers mini figurine set featuring adorable sleeping characters with colorful blankets. Lightweight, compact and perfect for car dashboards, office desks, study tables, home decor, collection and gifting.",

    size: "Approx. 5–8 cm",

    uses:
        "Car Dashboard, Office Desk, Study Table, Home Decor, Display & Gifting",

    features:
        "Cute Sleeping Design, Premium Quality, Durable Material, Lightweight & Compact, Decorative, Perfect Gift"
},
  {
    id: 9,

    name: "Sinchan Food Set – Cute Anime Mini Figurine Set of 6",

    category: "Anime Action Figures",

    price: 1199,

    image: "images/9.jpg",

    stock: 10,

    description:
        "Cute Sinchan food-themed mini figurine set featuring 6 colorful and adorable designs. Perfect for car dashboards, office desks, home decor, study tables, collectors and gifting.",

    size: "Approx. 10 cm",

    uses:
        "Car Dashboard, Office Desk, Home Decor, Study Table, Collector's Item & Gifting",

    features:
        "Set of 6, Cute Anime Design, Premium Quality, Safe & Non-Toxic, Durable & Long Lasting, Decorative, Perfect Gift"
},         
  {
    id: 10,

    name: "Gear 5 Luffy Premium Figure – Helios Luffy Collectible",

    category: "Anime Action Figures",

    price: 600,

    image: "images/10.jpg",

    stock: 0,

    description:
        "Premium Gear 5 Luffy collectible figure featuring a dynamic design with detailed character styling, colorful effect elements and a sturdy display base. Perfect for anime fans, collectors, home decor and desk display.",

    size: "Approx. 20–25 cm",

    uses:
        "Car Dashboard, Office Desk, Home Decor, Collectors & Display",

    features:
        "Gear 5 Luffy Design, Premium Quality, Durable Material, Dynamic Design, Sturdy Base, Collector Friendly, Perfect Gift"
},
   {
    id: 11,

    name: "Shinchan Mini Figures Set – Cute Collectible Figures",

    category: "Anime Action Figures",

    price: 1200,

    image: "images/11.jpg",

    stock: 10,

    description:
        "Cute Shinchan mini figure set featuring 6 adorable characters with different expressions and poses. Each figure comes with a display base, making it perfect for desk decor, car dashboard, shelf display, collection and gifting.",

    size: "Mini Size",

    uses:
        "Desk Decor, Car Dashboard, Shelf Display, Collection & Gifting",

    features:
        "Set of 6, Cute Expressions, Premium Material, Multiple Poses, Display Bases, Collectible Decor Piece, Perfect Gift"
},
  
{
    id: 12,

    name: "One Piece Crew Figurine Set – 6 Pcs Premium Anime Figures",

    category: "Anime Action Figures",

    price: 1499,

    image: "images/12.jpg",

    stock: 10,

    description:
        "Premium One Piece inspired crew figurine set featuring 6 detailed anime character figures with individual display bases. Durable, collectible and perfect for anime fans, car dashboards, office desks, home decor and gifting.",

    size: "Mini Figurine Size",

    uses:
        "Car Dashboard, Office Desk, Home Decor, Collection & Gifting",

    features:
        "Set of 6, Premium Quality, Durable & Long Lasting, Detailed Finish, Individual Display Bases, Collector's Item, Perfect Gift"
},

   {
    id: 13,

    name: "Shinchan Mini Football Figures – 6 Unique Expressions Collectible Set",

    category: "Anime Action Figures",

    price: 1399,

    image: "images/13.jpg",

    stock: 10,

    description:
        "Cute Shinchan mini football-themed figurine set featuring 6 unique expressions and colorful football outfits. Each figure comes with a stable display base and is perfect for desks, shelves, car dashboards, home decor, collection and gifting.",

    size: "Mini Figurine Size",

    uses:
        "Desk Decor, Shelf Display, Car Dashboard, Home Decor, Collection & Gifting",

    features:
        "Set of 6, 6 Unique Expressions, Football Theme, Highly Detailed, Premium Material, Vibrant Colors, Sturdy & Durable, Stable Base, Collectible Decor Piece, Perfect Gift"
},
   {
    id: 14,

    name: "Ace Adventure Mini Figurine – Premium Anime Collectible Figure",

    category: "Anime Action Figures",

    price: 549,

    image: "images/14.jpg",

    stock: 10,

    description:
        "Premium Ace Adventure mini figurine featuring a detailed character design riding on a dynamic wave and ship-themed display base. A bold and collectible decorative piece perfect for anime fans, car dashboards, office desks, home decor and gifting.",

    size: "10 cm",

    uses:
        "Car Dashboard, Office Desk, Home Decor, Collection & Gifting",

    features:
        "Premium Quality, Detailed Design, Durable & Long Lasting, Dynamic Wave Display, Sturdy Base, Collectible Item, Perfect Gift"
}, 
    {
    id: 15,

    name: "Naruto Anime Keychain – Mini Character Keychain Collectible",

    category: "Anime Action Figures",

    price: 100,

    image: "images/15.jpg",

    stock: 10,

    description:
        "Stylish Naruto-themed character keychains featuring colorful mini anime figures with durable straps and metal key rings. Lightweight and easy to carry, perfect for bags, keys, gifts and anime collections.",

    size: "Mini Keychain Size",

    uses:
        "Bag Charm, Keys, Gifting & Collectibles",

    features:
        "Naruto Anime Design, Mini Character Figure, Premium Quality, Strong & Durable, Lightweight, Easy to Carry, Metal Key Ring, Perfect Gift"
},
   {
    id: 16,

    name: "Kakashi Hatake Premium Action Figure – Anime Collectible",

    category: "Anime Action Figures",

    price: 549,

    image: "images/16.jpg",

    stock: 10,

    description:
        "Premium Kakashi Hatake action figure featuring a dynamic ninja pose, detailed face sculpt, high-quality material and a sturdy display base. Perfect for Naruto and anime fans, collectors, home decor and gifting.",

    size: "Mini Action Figure Size",

    uses:
        "Home Decor, Desk Display, Collectibles & Gifting",

    features:
        "Kakashi Hatake Design, Premium Quality, Detailed Face Sculpt, High Quality Material, Strong & Durable, Dynamic Pose, Sturdy Base, Collector Friendly, Perfect Gift"
},
    {
    id: 17,

    name: "Shree Ganesh Bobble Figure – Premium Decorative Idol",

    category: "Home Decor & Spiritual Figures",

    price: 249,

    image: "images/17.jpg",

    stock: 10,

    description:
        "Premium Shree Ganesh bobble figure featuring a cute and expressive design with a detailed golden crown, traditional ornaments and a sturdy display base. Perfect for car dashboards, home decor, office desks and pooja rooms.",

    size: "Approx. 10–15 cm",

    uses:
        "Car Dashboard, Home Decor, Office Desk, Pooja Room, Display & Gifting",

    features:
        "Cute & Expressive Design, Premium Quality, Detailed Craftsmanship, Durable & Long Lasting, Fine Detailed Finish, Sturdy Build, Decorative Figure, Perfect Gift"
},
   {
    id: 18,

    name: "Shinchan Mini Figure Collection – Cute Anime Collectible Set",

    category: "Anime Action Figures",

    price: 699,

    image: "images/18.jpg",

    stock: 10,

    description:
        " Cute Shinchan mini figure collection featuring 6 adorable character designs in fun and colorful outfits. Lightweight, durable and perfect for desk, car dashboard and home decor, as well as collecting and gifting.",

    size: "Mini Figurine Size",

    uses:
        "Desk Decor, Car Dashboard, Home Decor, Display, Collection & Gifting",

    features:
        "Cute Shinchan Designs, Collection of 6, Premium Material, Lightweight & Durable, Bright & Vibrant Colors, Safe & Non-Toxic, Cute Decorative Figures, Perfect Gift"
},
     {
    id: 19,

    name: "Luffy & Shanks Premium Figure – Bond of Promises Collectible",

    category: "Anime Action Figures",

    price: 549,

    image: "images/19.jpg",

    stock: 10,

    description:
        "Premium Luffy and Shanks collectible figure featuring an emotional and detailed display scene on a sturdy base. Designed for One Piece fans and collectors, perfect for home decor, office desks, car dashboards and collector displays.",

    size: "Mini Action Figure Size",

    uses:
        "Home Decor, Office Desk, Car Dashboard, Collector's Display & Gifting",

    features:
        "Luffy & Shanks Design, Premium Quality, Durable Material, Exquisite Details, Detailed Finish, Sturdy Base, Collector's Item, Perfect Gift"
},
    {
    id: 20,

    name: "Spider-Man Mini Action Figures Set – Superhero Collectible Figures",

    category: "Superhero Action Figures",

    price: 599,

    image: "images/20.jpeg",

    stock: 10,

    description:
        "Set of Spider-Man mini action figures featuring multiple dynamic poses and detailed designs. Perfect for Spider-Man fans, collectors and kids, ideal for home decor, office desks, car dashboards and gifting.",

    size: "Mini Action Figure Size",

    uses:
        "Home Decor, Office Desk, Car Dashboard, Collector's Display & Gifting",

    features:
        "Spider-Man Design, Premium Look, Durable Material, Detailed Finish, Multiple Poses, Sturdy Base, Collectible Item, Perfect Gift"
}, 
    {
    id: 21,

    name: "Shinchan Mini Figures Set – Cute Collectible Action Figures",

    category: "Anime Action Figures",

    price: 1199,

    image: "images/21.png",

    stock: 10,

    description:
        "[Single 99]Set of cute Shinchan mini collectible figures featuring multiple fun poses and colorful outfits. Perfect for Shinchan fans, collectors, kids, home decor, office desks, car dashboards and gifting.",

    size: "Mini Action Figure Size",

    uses:
        "Home Decor, Office Desk, Car Dashboard, Collector's Display & Gifting",

    features:
        "Shinchan Design, Cute Expressions, Multiple Poses, Premium Look, Durable Material, Detailed Finish, Sturdy Base, Collectible Item, Perfect Gift"
}, 
    {
    id: 22,

    name: "Spider-Man Multi-Pose Action Figure Set – 4 Unique Collectible Figures",

    category: "Superhero Action Figures",

    price: 749,

    image: "images/22.jpeg",

    stock: 10,

    description:
        "Set of 4 Spider-Man collectible action figures featuring unique poses and detailed designs. Includes different Spider-Man poses with accessories, perfect for superhero fans, collectors, home decor, office desks, car dashboards and gifting.",

    size: "Mini Action Figure Size",

    uses:
        "Home Decor, Office Desk, Car Dashboard, Collector's Display & Gifting",

    features:
        "Spider-Man Design, 4 Unique Figures, Multiple Poses, Detailed Finish, Accessory Set, Durable Material, Sturdy Display, Collectible Item, Perfect Gift"
},
   {
    id: 23,

    name: "Spider-Man Superhero Action Figure – Premium Collectible Figure",

    category: "Superhero Action Figures",

    price: 749,

    image: "images/23.jpeg",

    stock: 10,

    description:
        "Premium Spider-Man superhero collectible figure featuring a detailed black and red design, extended spider legs and a sturdy display base. Perfect for Spider-Man fans, collectors, home decor, office desks, car dashboards and gifting.",

    size: "Mini Action Figure Size",

    uses:
        "Home Decor, Office Desk, Car Dashboard, Collector's Display & Gifting",

    features:
        "Spider-Man Design, Premium Collectible, Detailed Finish, Unique Spider Legs, Durable Material, Sturdy Base, Display Figure, Collector's Item, Perfect Gift"
},
    {
    id: 24,

    name: "Spider-Man & Venom Premium Collectible Figure – Display Statue",

    category: "Superhero Action Figures",

    price: 2999,

    image: "images/24.jpeg",

    stock: 10,

    description:
        "Premium Spider-Man and Venom collectible figure featuring a dramatic crouching pose on a detailed stone-style display base with web and symbiote effects. Perfect for Marvel fans, collectors, home decor, office desks and display collections.",

    size: "Large Display Figure",

    uses:
        "Home Decor, Office Desk, Collector's Display, Room Decoration & Gifting",

    features:
        "Spider-Man & Venom Design, Premium Collectible, Detailed Statue, Dynamic Pose, Symbiote Effects, Detailed Display Base, Durable Material, Collector's Item, Perfect Gift"
},
    {
    id: 25,

    name: "Premium Anime Figure – White Hair Collectible Action Figure",

    category: "Anime Action Figures",

    price: 500,

    image: "images/25.jpeg",

    stock: 10,

    description:
        "Premium anime collectible figure featuring a unique white-haired character design, expressive face and detailed finish. Made for anime fans and collectors, perfect for home decor, office desks, display collections and gifting.",

    size: "Mini Action Figure Size",

    uses:
        "Home Decor, Office Desk, Collector's Display, Room Decoration & Gifting",

    features:
        "Anime Character Design, Premium PVC Material, Amazing Details, Expressive Face, Durable & Sturdy Build, Detailed Finish, Collectible Item, Perfect Gift"
},
   {
    id: 26,

    name: "Luffy Gear 5 Joyboy Premium Anime Figure – One Piece Collectible",

    category: "Anime Action Figures",

    price: 599,

    image: "images/26.jpeg",

    stock: 10,

    description:
        "Premium Luffy Gear 5 Joyboy collectible figure featuring a highly detailed design, expressive face, flowing blue cloud effects and a premium display base. Perfect for One Piece fans, anime collectors and gifting.",

    size: "Premium Action Figure Size",

    uses:
        "Home Decor, Office Desk, Collector's Display, Room Decoration & Gifting",

    features:
        "Luffy Gear 5 Design, Joyboy Theme, Premium PVC Material, Detailed Finish, Premium Base, Durable Build, Collector's Item, Perfect Gift"
},
   {
    id: 27,

    name: "Naruto Premium Anime Figure – Detailed Collectible Action Figure",

    category: "Anime Action Figures",

    price: 549,

    image: "images/27.jpeg",

    stock: 10,

    description:
        "Premium Naruto collectible action figure featuring a detailed Naruto design, dynamic ninja pose and high-quality finish. Made for anime fans and collectors, perfect for decoration, display, gifting and collection.",

    size: "Premium Action Figure Size",

    uses:
        "Home Decor, Office Desk, Collector's Display, Room Decoration & Gifting",

    features:
        "Naruto Design, Premium PVC Material, Amazing Details, Detailed Finish, Durable & Sturdy Build, Collector's Item, Perfect Gift"
},
{
    id: 28,

    name: "Shinchan Tricycle Premium Collectible Figure – Cute Anime Character",

    category: "Anime Action Figures",

    price: 249,

    image: "images/28.jpeg",

    stock: 10,

    description:
        "Cute and adorable Shinchan tricycle collectible figure featuring a fun childhood-inspired design. Made with premium quality material and a durable build, perfect for home decoration, office desks, kids' rooms and gifting.",

    size: "Mini Collectible Figure Size",

    uses:
        "Home Decor, Office Desk, Kids Room, Collector's Display & Gifting",

    features:
        "Shinchan Tricycle Design, Cute & Funny Look, Premium Quality, Durable & Long Lasting, Adorable Collectible, Lightweight Design, Perfect Gift"
},
  {
    id: 29,

    name: "Shinchan Nap Time Premium Figure – Cute Collectible Anime Figure",

    category: "Anime Action Figures",

    price: 149,

    image: "images/29.jpeg",

    stock: 10,

    description:
        "Cute Shinchan Nap Time collectible figure featuring an adorable sleeping pose, vibrant colors and detailed finish. Perfect for anime fans, desk setup, room decoration, collection and gifting.",

    size: "Mini Collectible Figure Size",

    uses:
        "Desk Setup, Home Decor, Room Decoration, Collector's Display & Gifting",

    features:
        "Shinchan Nap Time Design, Cute & Funny Look, High Quality Material, Vibrant Colors, Detailed Finish, Durable & Adorable, Perfect Gift"
},
 {
    id: 30,

    name: "Naruto Anime Character Keychain Set – 2 Pcs",

    category: "Anime Action Figures",

    price: 199,

    image: "images/30.jpeg",

    stock: 10,

    description:
        "Naruto Anime Character Keychain Set featuring 2 adorable mini anime figures with vibrant colors and detailed design. Perfect for anime fans, backpack accessories, key collections and gifting. A stylish collectible set for Naruto lovers.",

    size: "Mini Figure Keychain Size",

    uses:
        "Keys, Backpacks, School Bags, Anime Collection & Gifting",

    features:
        "Naruto Anime-Inspired Design, Set of 2 Keychains, Cute Mini Figure Style, Vibrant Colors, Metal Key Rings, Collectible Anime Accessories, Perfect Gift for Anime Fans"
},
{
    id: 31,

    name: "Naruto Anime Character Keychain Set – 2 Pcs",

    category: "Anime Keychains",

    price: 199,

    image: "images/31.jpeg",

    stock: 10,

    description:
        "Naruto Anime Character Keychain Set featuring 2 detailed mini character figures inspired by the Naruto anime series. Includes two colorful character keychains with durable key rings, perfect for backpacks, school bags, keys, anime collections and gifting. A fun collectible accessory for Naruto anime fans.",

    size: "Mini Figure Keychain Size",

    uses:
        "Keys, Backpacks, School Bags, Anime Collection & Gifting",

    features:
        "Naruto Anime-Inspired Design, Set of 2 Keychains, Detailed Mini Character Figures, Vibrant Colors, Durable Key Rings, Collectible Anime Accessories, Perfect Gift for Anime Fans"
},
{
    id: 32,

    name: "Naruto Anime Character Keychain Set – 2 Pcs",

    category: "Anime Keychains",

    price: 199,

    image: "images/32.jpeg",

    stock: 10,

    description:
        "Naruto Anime Character Keychain Set featuring 2 detailed mini character figures. The set includes colorful anime-inspired keychains with durable metal key rings, perfect for keys, backpacks, school bags, anime collections and gifting. A stylish collectible accessory for Naruto fans.",

    size: "Mini Figure Keychain Size",

    uses:
        "Keys, Backpacks, School Bags, Anime Collection & Gifting",

    features:
        "Naruto Anime-Inspired Design, Set of 2 Keychains, Detailed Mini Character Figures, Vibrant Colors, Durable Metal Key Rings, Collectible Anime Accessories, Perfect Gift for Anime Fans"
},
{
    id: 33,

    name: "Naruto Anime Character Keychain Set – 2 Pcs",

    category: "Anime Keychains",

    price: 199,

    image: "images/33.jpeg",

    stock: 10,

    description:
        "Naruto Anime Character Keychain Set featuring 2 detailed mini character figures. The set includes colorful anime-inspired keychains with durable metal key rings, perfect for keys, backpacks, school bags, anime collections and gifting. A stylish collectible accessory for Naruto fans.",

    size: "Mini Figure Keychain Size",

    uses:
        "Keys, Backpacks, School Bags, Anime Collection & Gifting",

    features:
        "Naruto Anime-Inspired Design, Set of 2 Keychains, Detailed Mini Character Figures, Vibrant Colors, Durable Metal Key Rings, Collectible Anime Accessories, Perfect Gift for Anime Fans"
},
];


/* =====================================================
   CART
===================================================== */

let cart = [];


/* =====================================================
   ELEMENTS
===================================================== */

const productsGrid =
    document.getElementById("productsGrid");

const cartButton =
    document.getElementById("cartButton");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCartButton =
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


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navbar =
    document.getElementById("navbar");


/* =====================================================
   THEME
===================================================== */

const themeButton =
    document.getElementById("themeButton");


/* =====================================================
   TOAST
===================================================== */

const cartToast =
    document.getElementById("cartToast");

const cartToastMessage =
    document.getElementById("cartToastMessage");

let toastTimer;


/* =====================================================
   MODAL
===================================================== */

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


/* =====================================================
   PRICE
===================================================== */

function formatPrice(price) {

    return "₹" +
        Number(price).toLocaleString("en-IN");

}


/* =====================================================
   TOAST
===================================================== */

function showCartToast(message) {

    if (!cartToast ||
        !cartToastMessage) {

        return;
    }

    clearTimeout(toastTimer);

    cartToastMessage.textContent =
        message;

    cartToast.classList.add("active");

    toastTimer =
        setTimeout(function () {

            cartToast.classList.remove(
                "active"
            );

        }, 2200);

}


/* =====================================================
   GET PRODUCT QUANTITY
===================================================== */

function getProductQuantity(productId) {

    const item =
        cart.find(function (cartItem) {

            return cartItem.id === productId;

        });

    return item ? item.quantity : 0;

}


/* =====================================================
   PRODUCT CARD
===================================================== */

function createProductCard(product) {

    const quantity =
        getProductQuantity(product.id);

    const isOutOfStock =
        product.stock <= 0;


    let actionButton;


    /* OUT OF STOCK */

    if (isOutOfStock) {

        actionButton = `

            <button
                class="product-btn out-of-stock-btn"
                type="button"
                disabled>

                Out of Stock

            </button>

        `;

    }


    /* PRODUCT ALREADY IN CART */

    else if (quantity > 0) {

        actionButton = `

            <div class="product-quantity">

                <button
                    type="button"
                    data-card-minus="${product.id}">

                    −

                </button>

                <span>
                    ${quantity}
                </span>

                <button
                    type="button"
                    data-card-plus="${product.id}">

                    +

                </button>

            </div>

        `;

    }


    /* NORMAL ADD TO CART */

    else {

        actionButton = `

            <button
                class="product-btn"
                type="button"
                data-add-product="${product.id}">

                Add to Cart

            </button>

        `;

    }


    return `

        <article class="product-card ${
            isOutOfStock
                ? "out-of-stock"
                : ""
        }">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >

                ${
                    isOutOfStock
                        ? `
                            <span class="out-of-stock-badge">
                                OUT OF STOCK
                            </span>
                        `
                        : ""
                }

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
                        data-view-product="${product.id}">

                        View Details

                    </button>


                    ${actionButton}

                </div>

            </div>

        </article>

    `;

}


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(category = "All") {

    if (!productsGrid) {
        return;
    }


    let filteredProducts;


    if (category === "All") {

        filteredProducts =
            products;

    } else {

        filteredProducts =
            products.filter(
                function (product) {

                    return (
                        product.category ===
                        category
                    );

                }
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


    filteredProducts.forEach(
        function (product) {

            productsGrid.insertAdjacentHTML(
                "beforeend",
                createProductCard(product)
            );

        }
    );

}


/* =====================================================
   PRODUCT BUTTON EVENTS
===================================================== */

if (productsGrid) {

    productsGrid.addEventListener(
        "click",
        function (event) {


            /* ADD TO CART */

            const addButton =
                event.target.closest(
                    "[data-add-product]"
                );


            if (addButton) {

                const id =
                    Number(
                        addButton.dataset
                            .addProduct
                    );

                addToCart(id);

                return;
            }


            /* CARD PLUS */

            const cardPlus =
                event.target.closest(
                    "[data-card-plus]"
                );


            if (cardPlus) {

                const id =
                    Number(
                        cardPlus.dataset
                            .cardPlus
                    );

                changeQuantity(id, 1);

                return;
            }


            /* CARD MINUS */

            const cardMinus =
                event.target.closest(
                    "[data-card-minus]"
                );


            if (cardMinus) {

                const id =
                    Number(
                        cardMinus.dataset
                            .cardMinus
                    );

                changeQuantity(id, -1);

                return;
            }


            /* VIEW PRODUCT */

            const viewButton =
                event.target.closest(
                    "[data-view-product]"
                );


            if (viewButton) {

                const id =
                    Number(
                        viewButton.dataset
                            .viewProduct
                    );

                viewProduct(id);

            }

        }
    );

}


/* =====================================================
   FILTER BUTTONS
===================================================== */

document
    .querySelectorAll(".filter-btn")
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const category =
                        this.dataset.category;


                    document
                        .querySelectorAll(
                            ".filter-btn"
                        )
                        .forEach(
                            function (btn) {

                                btn.classList
                                    .remove(
                                        "active"
                                    );

                            }
                        );


                    this.classList.add(
                        "active"
                    );


                    displayProducts(
                        category
                    );

                }
            );

        }
    );


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productId) {

    const product =
        products.find(
            function (item) {

                return item.id === productId;

            }
        );


    if (!product) {
        return;
    }


    /* OUT OF STOCK */

    if (product.stock <= 0) {

        showCartToast(
            "This product is out of stock"
        );

        return;
    }


    const existingProduct =
        cart.find(
            function (item) {

                return item.id === productId;

            }
        );


    /* EXISTING PRODUCT */

    if (existingProduct) {

        if (
            existingProduct.quantity >=
            product.stock
        ) {

            showCartToast(
                "Only " +
                product.stock +
                " available"
            );

            return;
        }


        existingProduct.quantity++;


        showCartToast(
            product.name +
            " quantity updated"
        );

    }


    /* NEW PRODUCT */

    else {

        cart.push({

            ...product,

            quantity: 1

        });


        showCartToast(
            product.name +
            " added to cart"
        );

    }


    updateCart();

    refreshProductCards();

}


/* =====================================================
   REFRESH PRODUCT CARDS
===================================================== */

function refreshProductCards() {

    const activeFilter =
        document.querySelector(
            ".filter-btn.active"
        );


    const category =
        activeFilter
            ? activeFilter.dataset.category
            : "All";


    displayProducts(category);

}


/* =====================================================
   REMOVE
===================================================== */

function removeFromCart(productId) {

    cart =
        cart.filter(
            function (item) {

                return item.id !== productId;

            }
        );


    updateCart();

    refreshProductCards();

}


/* =====================================================
   QUANTITY
===================================================== */

function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            function (product) {

                return product.id ===
                    productId;

            }
        );


    if (!item) {

        if (change > 0) {

            addToCart(productId);

        }

        return;
    }


    /* PLUS */

    if (change > 0) {

        if (
            item.quantity >=
            item.stock
        ) {

            showCartToast(
                "Only " +
                item.stock +
                " available"
            );

            return;
        }

    }


    item.quantity += change;


    /* REMOVE WHEN ZERO */

    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;
    }


    updateCart();

    refreshProductCards();

}


/* =====================================================
   TOTAL
===================================================== */

function getCartTotal() {

    return cart.reduce(
        function (total, item) {

            return total +
                item.price *
                item.quantity;

        },
        0
    );

}


/* =====================================================
   ITEM COUNT
===================================================== */

function getCartItemCount() {

    return cart.reduce(
        function (total, item) {

            return total +
                item.quantity;

        },
        0
    );

}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    if (!cartItems) {
        return;
    }


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

        cart.forEach(
            function (item) {

                const cartProduct =
                    document.createElement(
                        "div"
                    );


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
                            ${formatPrice(
                                item.price
                            )}
                        </p>


                        <div class="quantity-controls">

                            <button
                                type="button"
                                data-minus="${item.id}">

                                −

                            </button>


                            <span>
                                ${item.quantity}
                            </span>


                            <button
                                type="button"
                                data-plus="${item.id}">

                                +

                            </button>

                        </div>

                    </div>


                    <button
                        class="remove-cart-item"
                        type="button"
                        data-remove="${item.id}">

                        ×

                    </button>

                `;


                cartItems.appendChild(
                    cartProduct
                );

            }
        );

    }


    if (cartCount) {

        cartCount.textContent =
            getCartItemCount();

    }


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(
                getCartTotal()
            );

    }


    if (checkoutTotal) {

        checkoutTotal.textContent =
            formatPrice(
                getCartTotal()
            );

    }

}


/* =====================================================
   CART ITEM EVENTS
===================================================== */

if (cartItems) {

    cartItems.addEventListener(
        "click",
        function (event) {


            const plus =
                event.target.closest(
                    "[data-plus]"
                );


            const minus =
                event.target.closest(
                    "[data-minus]"
                );


            const remove =
                event.target.closest(
                    "[data-remove]"
                );


            if (plus) {

                changeQuantity(
                    Number(
                        plus.dataset.plus
                    ),
                    1
                );

                return;
            }


            if (minus) {

                changeQuantity(
                    Number(
                        minus.dataset.minus
                    ),
                    -1
                );

                return;
            }


            if (remove) {

                removeFromCart(
                    Number(
                        remove.dataset.remove
                    )
                );

            }

        }
    );

}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    if (!cartSidebar ||
        !cartOverlay) {

        return;
    }


    cartSidebar.classList.add(
        "active"
    );


    cartOverlay.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCartSidebar() {

    if (!cartSidebar ||
        !cartOverlay) {

        return;
    }


    cartSidebar.classList.remove(
        "active"
    );


    cartOverlay.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* =====================================================
   CART BUTTON
===================================================== */

if (cartButton) {

    cartButton.addEventListener(
        "click",
        openCart
    );

}


if (closeCartButton) {

    closeCartButton.addEventListener(
        "click",
        closeCartSidebar
    );

}


if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCartSidebar
    );

}


/* =====================================================
   CHECKOUT BUTTON
===================================================== */

if (checkoutButton) {

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


            const checkout =
                document.getElementById(
                    "checkout"
                );


            if (checkout) {

                checkout.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }
    );

}


/* =====================================================
   CHECKOUT FORM
===================================================== */

if (checkoutForm) {

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
                    .getElementById(
                        "customerName"
                    )
                    .value
                    .trim();


            const phone =
                document
                    .getElementById(
                        "customerPhone"
                    )
                    .value
                    .trim();


            const email =
                document
                    .getElementById(
                        "customerEmail"
                    )
                    .value
                    .trim();


            const address =
                document
                    .getElementById(
                        "customerAddress"
                    )
                    .value
                    .trim();


            const city =
                document
                    .getElementById(
                        "customerCity"
                    )
                    .value
                    .trim();


            const state =
                document
                    .getElementById(
                        "customerState"
                    )
                    .value
                    .trim();


            const pincode =
                document
                    .getElementById(
                        "customerPincode"
                    )
                    .value
                    .trim();


            /* PHONE */

            if (
                !/^[0-9]{10}$/.test(
                    phone
                )
            ) {

                alert(
                    "Please enter a valid 10 digit mobile number."
                );

                return;
            }


            /* PINCODE */

            if (
                !/^[0-9]{6}$/.test(
                    pincode
                )
            ) {

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
                "Name: " +
                name +
                "\n";


            message +=
                "Mobile: " +
                phone +
                "\n";


            if (email) {

                message +=
                    "Email: " +
                    email +
                    "\n";

            }


            message +=
                "Address: " +
                address +
                "\n";


            message +=
                "City: " +
                city +
                "\n";


            message +=
                "State: " +
                state +
                "\n";


            message +=
                "Pincode: " +
                pincode +
                "\n\n";


            message +=
                "🛒 *ORDER DETAILS*\n\n";


            cart.forEach(
                function (item, index) {

                    const subtotal =
                        item.price *
                        item.quantity;


                    message +=
                        (index + 1) +
                        ". " +
                        item.name +
                        "\n";


                    message +=
                        "Qty: " +
                        item.quantity +
                        "\n";


                    message +=
                        "Price: " +
                        formatPrice(
                            item.price
                        ) +
                        "\n";


                    message +=
                        "Subtotal: " +
                        formatPrice(
                            subtotal
                        ) +
                        "\n\n";

                }
            );


            message +=
                "━━━━━━━━━━━━━━\n";


            message +=
                "💰 *TOTAL: " +
                formatPrice(
                    getCartTotal()
                ) +
                "*";


            const whatsappURL =
                "https://wa.me/" +
                WHATSAPP_NUMBER +
                "?text=" +
                encodeURIComponent(
                    message
                );


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =====================================================
   VIEW PRODUCT
===================================================== */

function viewProduct(productId) {

    const product =
        products.find(
            function (item) {

                return item.id === productId;

            }
        );


    if (!product) {
        return;
    }


    currentModalProduct =
        product;


    if (modalImage) {

        modalImage.src =
            product.image;

        modalImage.alt =
            product.name;

    }


    if (modalCategory) {

        modalCategory.textContent =
            product.category;

    }


    if (modalName) {

        modalName.textContent =
            product.name;

    }


    if (modalPrice) {

        modalPrice.textContent =
            formatPrice(
                product.price
            );

    }


    if (modalDescription) {

        let details =
            product.description;


        if (product.size) {

            details +=
                "\n\nProduct Size: " +
                product.size;

        }


        if (product.uses) {

            details +=
                "\n\nSuitable For: " +
                product.uses;

        }


        if (product.features) {

            details +=
                "\n\nFeatures: " +
                product.features;

        }


        if (product.stock <= 0) {

            details +=
                "\n\nStatus: OUT OF STOCK";

        }


        modalDescription.textContent =
            details;

    }


    if (modalAddCart) {

        if (product.stock <= 0) {

            modalAddCart.textContent =
                "Out of Stock";

            modalAddCart.disabled =
                true;

            modalAddCart.style.opacity =
                "0.5";

            modalAddCart.style.cursor =
                "not-allowed";

        } else {

            modalAddCart.textContent =
                "Add to Cart";

            modalAddCart.disabled =
                false;

            modalAddCart.style.opacity =
                "";

            modalAddCart.style.cursor =
                "";

        }

    }


    if (productModal) {

        productModal.classList.add(
            "active"
        );


        document.body.style.overflow =
            "hidden";

    }

}


/* =====================================================
   CLOSE PRODUCT
===================================================== */

function closeProductDetails() {

    if (!productModal) {
        return;
    }


    productModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


if (closeProductModal) {

    closeProductModal.addEventListener(
        "click",
        closeProductDetails
    );

}


if (productModal) {

    productModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                productModal
            ) {

                closeProductDetails();

            }

        }
    );

}


/* =====================================================
   MODAL ADD CART
===================================================== */

if (modalAddCart) {

    modalAddCart.addEventListener(
        "click",
        function () {


            if (!currentModalProduct) {
                return;
            }


            if (
                currentModalProduct.stock <= 0
            ) {

                return;
            }


            addToCart(
                currentModalProduct.id
            );


            closeProductDetails();

        }
    );

}


/* =====================================================
   MOBILE MENU
===================================================== */

function openMobileMenu() {

    if (!navbar ||
        !menuButton) {

        return;
    }


    navbar.classList.add(
        "active"
    );


    menuButton.textContent =
        "✕";


    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );


    menuButton.setAttribute(
        "aria-label",
        "Close Menu"
    );

}


function closeMobileMenu() {

    if (!navbar ||
        !menuButton) {

        return;
    }


    navbar.classList.remove(
        "active"
    );


    menuButton.textContent =
        "☰";


    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );


    menuButton.setAttribute(
        "aria-label",
        "Open Menu"
    );

}


function toggleMobileMenu() {

    if (!navbar ||
        !menuButton) {

        return;
    }


    if (
        navbar.classList.contains(
            "active"
        )
    ) {

        closeMobileMenu();

    } else {

        openMobileMenu();

    }

}


/* =====================================================
   MENU BUTTON
===================================================== */

if (menuButton) {

    menuButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            toggleMobileMenu();

        }
    );

}


/* =====================================================
   MOBILE MENU LINKS
===================================================== */

if (navbar) {

    navbar
        .querySelectorAll("a")
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();


                        const href =
                            this.getAttribute(
                                "href"
                            );


                        closeMobileMenu();


                        if (
                            href &&
                            href.startsWith("#")
                        ) {

                            const target =
                                document.querySelector(
                                    href
                                );


                            if (target) {

                                setTimeout(
                                    function () {

                                        target.scrollIntoView({

                                            behavior:
                                                "smooth",

                                            block:
                                                "start"

                                        });

                                    },
                                    100
                                );

                            }

                        }

                    }
                );

            }
        );

}


/* =====================================================
   CLICK OUTSIDE MOBILE MENU
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        if (
            !navbar ||
            !menuButton
        ) {

            return;
        }


        if (
            navbar.classList.contains(
                "active"
            ) &&
            !navbar.contains(
                event.target
            ) &&
            !menuButton.contains(
                event.target
            )
        ) {

            closeMobileMenu();

        }

    }
);


/* =====================================================
   DARK MODE
===================================================== */

function setTheme(isDark) {

    if (!themeButton) {
        return;
    }


    if (isDark) {

        document.body.classList.add(
            "dark"
        );


        themeButton.textContent =
            "☀️";


        localStorage.setItem(
            "trendCartTheme",
            "dark"
        );

    } else {

        document.body.classList.remove(
            "dark"
        );


        themeButton.textContent =
            "🌙";


        localStorage.setItem(
            "trendCartTheme",
            "light"
        );

    }

}


if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            const isDark =
                document.body.classList.contains(
                    "dark"
                );


            setTheme(!isDark);

        }
    );

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeCartSidebar();

            closeProductDetails();

            closeMobileMenu();

        }

    }
);


/* =====================================================
   EMAIL LINKS
===================================================== */

document
    .querySelectorAll(
        'a[href^="mailto:"]'
    )
    .forEach(
        function (link) {

            link.href =
                "mailto:" +
                CONTACT_EMAIL;

        }
    );


/* =====================================================
   INITIALIZE
===================================================== */

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