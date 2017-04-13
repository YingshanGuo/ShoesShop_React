const React = require('react');
//const {cartItems,products} = require('../js/data');
const { products } = require('./stores/ProductStore');
const Ps = require("../node_modules/perfect-scrollbar/index");
const CartItem = require('./CartItem');
const ConnectedStore = require('./stores/ConnectedStore');
const CartStore = require('./stores/CartStore');
const ProductStore = require('./stores/ProductStore');
//const {getCartItems} = CartStore;
//const {addChangeListener} = CartStore;

let Cart = React.createClass({
    componentDidMount() {
        let $content = this.refs.content;
        Ps.initialize($content);
        //console.log("Cart     getCartItems",getCartItems());
        //addChangeListener(this.forceUpdate.bind(this));     
    },
    render() {
        //let  _cartItems=this.props.getCartItems;
        let {cartItems,productItems}=this.props;
        //let _cartItems=getCartItems();   // 已更换为CartStore的_cartItems 以及下行
        //console.log("_cartItems",_cartItems);
        let items = Object.keys(cartItems).map(cart => {
            return (
                <CartItem key={cart} cartItem={cartItems[cart]} proPrice={productItems[cart]}/>
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

//module.exports = Cart;
//不用
class ConnectedCart extends React.Component {
  render() {
    console.log("ConnectedCart ing....");
    return (
        <ConnectedStore store={ProductStore}  propNames={["productItems"]}>
            {propValues2 => 
            <ConnectedStore store={CartStore}  propNames={["cartItems"]}>
                {propValues1 => <Cart {...propValues1} {...propValues2}/>}
            </ConnectedStore>
            }
        </ConnectedStore>
    );
  }
}

function MakeConnectedComponent(ViewComponent,store,...propNames) {
  return (outterProps) => {
      return (
          <ConnectedStore store={store} propNames={propNames}>
            {props => <ViewComponent {...outterProps} {...props} />}
          </ConnectedStore>
      );
  }
}

module.exports = MakeConnectedComponent(MakeConnectedComponent(Cart,CartStore,"cartItems"), ProductStore, "productItems");

//module.exports = ConnectedCart;


