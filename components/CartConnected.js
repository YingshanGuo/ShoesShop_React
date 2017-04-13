const React = require('react'); 
const ConnectedStore = require('./stores/ConnectedStore');
const Cart = require('./Cart');
const CartStore = require('./stores/CartStore');



//作废
class ConnectedCart extends React.Component {
  render() {
    console.log("ConnectedCart ing....");
    return (
      <ConnectedStore store={CartStore}  propNames={["cartItems"]}>
         {propValues => <Cart {...propValues}/>}
      </ConnectedStore>
    );
  }
}

module.exports = ConnectedCart;