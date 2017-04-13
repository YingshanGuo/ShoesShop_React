const Ps = require("../node_modules/perfect-scrollbar/index");
const React = require("../node_modules/react/react");


function Product(props) {
    return (
        <div className="product">
            <div className="product__display">
                <div className="product__img-wrapper">
                    <img className="product__img" src={props.product.imagePath} />
                </div>
                <div className="product__control">
                    <a className="product__add">
                        <img className="product__add__icon" src="img/cart-icon.svg" />
                    </a>
                </div>
                <div className="product__price">
                    {props.product.price}
                </div>
            </div>
            <div className="product__description">
                <div className="product__name">
                    {props.product.name}
                </div>
                <img className="product__heart" src="img/heart.svg" />
            </div>
        </div>
    )
}
function SiteTitle() {
    return (
        <div className="title">
            <h2>Buy Me Shoes</h2>
            <img className="title__heart" src="img/heart.svg" />
        </div>
    )
};

let Products = React.createClass({
    render() {
        // let product = {
        //   name: "Jameson Vulc",
        //   price: 64.99,
        //   imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
        //   gender: "man",     
        // };
        let proName = Object.keys(products).map(pro => {
            return (
                <Product key={pro} product={products[pro]}/>
            );
        });

        return (
            <div className="products">
                {proName}
            </div>
        );
    }
});

const Cart = React.createClass({
	componentDidMount() {
		let $content = document.querySelector(".cart");
		Ps.initialize($content);
	},
    render() {
        let cartName = Object.keys(cartItems).map(cart => {
            return (
                <CartItem key={cart} cartItem={cartItems[cart]} proPrice={products[cart]}/>
            )
        })
        return (
            <div className="cart">
                <h3 className="cart__title">Shopping Cart</h3>
                <div className="cart__content">
                    <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
                    {cartName}
                </div>
                {/*cart__content*/}
            </div>
        )
    }
});



function CartItem(props) {
    console.log(props);
    let ItemPrice = props.proPrice.price;
    if (props.cartItem.quantity >= 2) {
        ItemPrice = props.proPrice.price + '  x  ' + props.cartItem.quantity;
    }

    return (
        <div className="cart-item">
            <div className="cart-item__top-part">
                <div className="cart-item__image">
                    <img src={props.proPrice.imagePath} />
                </div>
                <div className="cart-item__top-part__middle">
                    <div className="cart-item__title">
                        {props.cartItem.id}
                    </div>
                    <div className="cart-item__price">
                        $ {ItemPrice}
                    </div>
                </div>
                <img className="cart-item__trash" src="img/trash-icon.svg" />
            </div>
            {/*cart-item__top-part*/}
            <div className="cart-item__qty">
                <QuantityControl  Quantity={props.cartItem.quantity} />
            </div>
        </div>
    )
};


const QuantityControl = React.createClass({
    render: function render() {
        console.log(this.props.Quantity);
        return (
            <div className="adjust-qty">
                <a className="adjust-qty__button">-</a>
                <div className="adjust-qty__number">{this.props.Quantity}</div>
                <a className="adjust-qty__button">+</a>
            </div>
        )
    }
});

const Checkout = React.createClass({
    render: function render() {
        let totalCost = Object.keys(cartItems).map(cart => cartItems[cart]["quantity"] * products[cart]["price"]).reduce((a, b) => a + b);

        console.log("totalCost", totalCost);
        return (
            <div className="checkout">
                <hr className="checkout__divider" />
                <input type="text" className="checkout__coupon-input" placeholder="coupon code" />
                <div className="checkout__line">
                    <div className="checkout__line__label">
                        Discount
                    </div>
                    <div className="checkout__line__amount">
                        -$ {(totalCost * 0.15).toFixed(2) }
                    </div>
                </div>
                <div className="checkout__line">
                    <div className="checkout__line__label">
                        Subtotal
                    </div>
                    <div className="checkout__line__amount checkout__line__amount--strikeout">
                        $ {(totalCost).toFixed(2) }
                    </div>
                </div>
                <div className="checkout__line">
                    <div className="checkout__line__amount checkout__line__amount--omg-savings">
                        ${(totalCost - totalCost * 0.15).toFixed(2) }
                    </div>
                </div>
                <a className="checkout__button">
                    <img className="checkout__button__icon" src="img/cart-icon.svg" />
                    <div className="checkout__button__label">
                        Checkout
                    </div>
                </a>
            </div>
        )
    }
});

let products = {
    "jameson-vulc": {
        id: "jameson-vulc",
        name: "Jameson Vulc",
        price: 64.99,
        imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
        gender: "man",
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        name: "Marana X Hook-Up",
        price: 79.99,
        imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
        gender: "man",
    },

    "jameson-e-lite": {
        id: "jameson-e-lite",
        name: "Jameson E-Lite",
        price: 69.99,
        imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
        gender: "man",
    },

    "jameson-e-lite-julian-davidson-4": {
        id: "jameson-e-lite-julian-davidson-4",
        name: "Jameson E-Lite Julian Davidson",
        price: 74.99,
        imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
        gender: "man",
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        name: "Scout Women's",
        imagePath: "img/shoes/scout-womens-6-teal-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        name: "Scout Women's Coco Ho",
        imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        name: "Jameson 2 Women's",
        imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "corby-womens-2": {
        id: "corby-womens-2",
        name: "Corby Women's",
        imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
        price: 44.99,
        gender: "woman",
    },
};

let cartItems = {
    "jameson-vulc": {
        id: "jameson-vulc",
        quantity: 1,
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        quantity: 2,
    },

    "scout-womens-6": {
      id: "scout-womens-6",
      quantity: 2,
    },

    "scout-womens-coco-ho-5": {
      id: "scout-womens-coco-ho-5",
      quantity: 1,
    },

    "jameson-2-womens-8": {
      id: "jameson-2-womens-8",
      quantity: 1,
    },
};

const App = React.createClass({
    displayName: "App",

    render: function render() {
        return (
            <div className="site">
                <div className="bg">
                    <div className="bg__img">
                    </div>
                </div>
                <div className="site__main">
                    <div className="site__left-sidebar">
                        <SiteTitle />
                    </div>
                    <div className="site__content">
                        <Products />
                        {/* Products */}
                        {/* site__content */}
                    </div>
                    <div className="site__right-sidebar">
                        <Cart />
                        <Checkout/>
                        {/* cart */}
                        {/* checkout */}
                    </div>
                    {/* site__right-sidebar */}
                    <a className="site__right-sidebar-toggle">
                        <img src="img/arrow-icon.svg" />
                    </a>
                </div>
            </div>
        )
    }
});


window.onload = function () {
    ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));
};