const React = require('react');
const CartStore = require('./stores/CartStore');
const {addCartItem} = CartStore;
const {decreaseCartItem} = CartStore; 

let QuantityControl = React.createClass({
    decreaseButton(productId){
        decreaseCartItem(productId);
    },
    increaseButton(productId){
        addCartItem(productId);
    },
    render() {
        // console.log("QuantityControl this.props.Quantity  ",this.props.Quantity);
        return (
            <div className="adjust-qty" style="height:90px;">
                <a  onClick={this.decreaseButton.bind(this,this.props.id)} className="adjust-qty__button">-</a>
                <div className="adjust-qty__number">{this.props.Quantity}</div>
                <a  onClick={this.increaseButton.bind(this,this.props.id)} className="adjust-qty__button">+</a>
            </div>
        )
    }
});

module.exports = QuantityControl;