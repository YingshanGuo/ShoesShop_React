const React = require('react');
const {cartItems,products} = require('../js/data');
const CartStore = require("./stores/CartStore");
const {getCartItems} = CartStore;
const {addChangeListener} = CartStore;

let Checkout = React.createClass({
        componentDidMount() {
            addChangeListener(this.forceUpdate.bind(this));   
    },
    render() {
        let _cartItems=getCartItems();   // 已更换为CartStore的_cartItems 以及下行
        if(_cartItems==null){
            return(
                <div className="checkout">
                <hr className="checkout__divider" />
                <input type="text" className="checkout__coupon-input" placeholder="coupon code" />
                <div className="checkout__line">
                    <div className="checkout__line__label">
                        Discount
                    </div>
                    <div className="checkout__line__amount">
                        -$ 0
                    </div>
                </div>
                <div className="checkout__line">
                    <div className="checkout__line__label">
                        Subtotal
                    </div>
                    <div className="checkout__line__amount checkout__line__amount--strikeout">
                        $ 0
                    </div>
                </div>
                <div className="checkout__line">
                    <div className="checkout__line__amount checkout__line__amount--omg-savings">
                        $ 0
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
        }else{
        let totalCost = Object.keys(_cartItems).map(cart => _cartItems[cart]["quantity"] * products[cart]["price"]).reduce((a, b) => a + b, 0);

        // console.log("Checkout  totalCost", totalCost);
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
    }
});

module.exports = Checkout;