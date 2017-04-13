const React = require('react');
const filteredProducts = require('./stores/filteredProducts');
const { shiftFilterProducts } = filteredProducts;
const { filterProducts } = filteredProducts;
const { addChangeListener } = filteredProducts;

let SiteTitle= React.createClass({
    componentDidMount(){
        addChangeListener(this.forceUpdate.bind(this)); 
    },
    onShiftFilterProducts(){
        shiftFilterProducts();
    },
    render(){
        let _filterProducts=filterProducts(); 
    return (
        <div className="title">
            <h2>Buy Me Shoes</h2>
            <img className="title__heart" src={_filterProducts} onClick={this.onShiftFilterProducts}/>
        </div>
    )
    }
});


module.exports = SiteTitle;