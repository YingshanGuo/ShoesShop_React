const React = require('react');
const SiteTitle = require("./SiteTitle");
const Products = require("./Products");
const Cart = require("./Cart");
const Checkout = require("./Checkout");
//const ConnectedCart = require("./ConnectedCart");

const App = React.createClass({
    displayName: "App",
    render() {
        return (
            <div className="site">
                <div className="bg">
                    <div className="bg__img">
                    </div>
                </div>
                <div className="site__main">
                    <div className="site__left-sidebar">
                        <SiteTitle />
                    </div>
                    <div className="site__content">
                        <Products />
                    </div>
                    <div className="site__right-sidebar">
                        <Cart/>
                        <Checkout/>
                    </div>
                    <a className="site__right-sidebar-toggle">
                        <img src="img/arrow-icon.svg" />
                    </a>
                </div>
            </div>
        )
    }
});

module.exports = App;