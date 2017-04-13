const React = require('react');
const CartStore = require("./stores/CartStore");
const {addCartItem} = CartStore;
const {getCartItems} = CartStore;
const QuantityControl = require("./QuantityControl");

let ShoppingIcon = React.createClass({
     onAddCartItemButton(productId){
        addCartItem(productId);
        // console.log("Product productId  ",productId);
    },
    render() {
        let CartItemQuantity=getCartItems();
        // console.log("dddd",[this.props.product.id]);
        if(CartItemQuantity[this.props.product.id]!=null){
            return (
                <QuantityControl Quantity={CartItemQuantity[this.props.product.id].quantity}  id={this.props.product.id}/>       
        )}else{
        return (   
                <div className="product__control"  onClick={this.onAddCartItemButton.bind(this,this.props.product.id)}>
                    <a className="product__add">
                        <img className="product__add__icon" src="img/cart-icon.svg" />
                    </a>
                </div> 
        );
        }
    }
});

module.exports = ShoppingIcon;