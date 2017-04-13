var React = require('react');
const CartStore = require("./stores/CartStore");
const { addChangeListener } = CartStore;
const { removeChangeListener } = CartStore;
const { addCartItem } = CartStore;
const ShoppingIcon = require ('./ShoppingIcon');
const LikeStore = require('./stores/LikeStore');
const { changeRedHeartIcon } = LikeStore;

let Product = React.createClass({
    componentDidMount(){
        addChangeListener(this.onUpdate); 
    },

    componentWillUnmount(){
        removeChangeListener(this.onUpdate); 
    },

    onUpdate() {
        this.forceUpdate();
    }, 
    // componentDidMount() {
    //     addChangeListener(this.forceUpdate.bind(this));     
    // },
    // onAddCartItemButton(productId){
    //     addCartItem(productId);
    //      console.log("Product productId  ",productId);
    // },
    onHeartClickButton(productId){
        changeRedHeartIcon(productId);
        console.log("productId",productId);
    },
    render(){
        // QuantityControl
    return (
        <div className="product">
            <div className="product__display">
                <div className="product__img-wrapper">
                    <img className="product__img" src={this.props.product.imagePath} />
                </div>
                
                    <ShoppingIcon product={this.props.product} />
                
                <div className="product__price">
                    {this.props.product.price}
                </div>
            </div>
            <div className="product__description">
                <div className="product__name">
                    {this.props.product.name}
                </div>
                <img className="product__heart" src={this.props.heartIcon.imagePath}  onClick={this.onHeartClickButton.bind(this,this.props.product.id)}/>
            </div>
        </div>
    )
}
    });
module.exports = Product;