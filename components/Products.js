const React = require('react');
const { products }  = require('./stores/ProductStore');
const Product = require('./Product');
const LikeStore = require('./stores/LikeStore');
const { getLikeItems } = LikeStore;
const { addChangeListener } = LikeStore;
// const { filterProductItems } = LikeStore;
// const ProductStore = require('./stores/ProductStore');
// const { getProductItems } = ProductStore;
const filteredProducts = require('./stores/filteredProducts');
const { filterProductItems } = filteredProducts;
const ConnectedStore = require('./stores/ConnectedStore');

let Products = React.createClass({
    componentDidMount(){
        addChangeListener(this.onUpdate); 
    },

    componentWillUnmount(){
        removeChangeListener(this.onUpdate); 
    },

    onUpdate() {
        this.forceUpdate();
    },    

    render() {
        //let _likeItems=getLikeItems();
        //let products=getProductItems();   //待更换
        //let _filterProductItems=filterProductItems;
        let { likeItems,filterProductItems }=this.props;
        let proName = Object.keys(filterProductItems).map(pro => {
            
            return (
                <Product key={pro} product={filterProductItems[pro]}  heartIcon={likeItems[pro]}/>
            );
        });
        return (
            <div className="products">
                {proName}
            </div>
        );
    }
});

//module.exports = Products;


function MakeConnectedComponent(ViewComponent,store,...propNames) {
  return (outterProps) => {
      return (
          <ConnectedStore store={store} propNames={propNames}>
            {props => <ViewComponent {...outterProps} {...props} />}
          </ConnectedStore>
      );
  }
}

module.exports = MakeConnectedComponent(MakeConnectedComponent(Products,LikeStore,"likeItems"), filteredProducts, "filterProductItems");

