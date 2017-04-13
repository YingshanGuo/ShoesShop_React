const React = require('react');
const {cartItems,products} = require('../js/data');
const Ps = require("../node_modules/perfect-scrollbar/index");
const CartItem = require('./CartItem');
const CartStore = require("./stores/CartStore");
const {getCartItems} = CartStore;
const {addChangeListener} = CartStore;

let Cart = React.createClass({
    componentDidMount() {
        let $content = this.refs.content;
        Ps.initialize($content);
        console.log("Cart     getCartItems",getCartItems());
        addChangeListener(this.forceUpdate.bind(this));     
    },
    render() {
        let _cartItems=getCartItems();   // 已更换为CartStore的_cartItems 以及下行

        let items = Object.keys(_cartItems).map(cart => {
            return (
                <CartItem key={cart} cartItem={_cartItems[cart]} proPrice={products[cart]}/>
            )
        });

        return (
            <div className="cart">
                <h3 className="cart__title">Shopping Cart</h3>
                <div ref="content" className="cart__content">
                    <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
                    {items}
                </div>
            </div>
        );
    }
});

module.exports = Cart;