const React = require('react');
const QuantityControl = require("./QuantityControl");
const CartStore = require("./stores/CartStore");
const {removeCartItem} = CartStore;
const {addChangeListener} = CartStore;

let CartItem = React.createClass({
    componentDidMount:function() {
        // addChangeListener(this.forceUpdate.bind(this)); 
  },
    removeCartItemButton(productId){
      removeCartItem(productId);
  },
    render() {
    // console.log("CartItem        props  ",props);
    let ItemPrice = this.props.proPrice.price;
    if (this.props.cartItem.quantity >= 2) {
        ItemPrice = this.props.proPrice.price + '  x  ' + this.props.cartItem.quantity;
    }
    return (
        <div className="cart-item">
            <div className="cart-item__top-part">
                <div className="cart-item__image">
                    <img src={this.props.proPrice.imagePath} />
                </div>
                <div className="cart-item__top-part__middle">
                    <div className="cart-item__title">
                        {this.props.cartItem.id}
                    </div>
                    <div className="cart-item__price">
                        $ {ItemPrice}
                    </div>
                </div>
                <img onClick={this.removeCartItemButton.bind(this,this.props.cartItem.id)} className="cart-item__trash" src="img/trash-icon.svg" />
            </div>
            <div className="cart-item__qty">
                <QuantityControl  Quantity={this.props.cartItem.quantity} id={this.props.cartItem.id}/>
            </div>
        </div>
    )
}
});

module.exports = CartItem;