const React = require('react');
const CartStore = require("./CartStore");
const { getCartItems } = CartStore;
const { addChangeListener } = CartStore;

class ConnectedStore extends React.Component {

    componentDidMount() {
        let store = this.props.store;
        this.__onUpdate = this.forceUpdate.bind(this);
        store.addChangeListener(this.__onUpdate);
    }

    componentWillUnmount() {
        store.removeChangeListener(this.__onUpdate);
        this.__onUpdate = null;
    }

    render() {
        //console.log("store",this.props.store);
        let contentRenderFunction = this.props.children;
        let storeProps = {};
        this.props.propNames.forEach((key) => {
            return storeProps[key] = this.props.store[key]();
        });

        return contentRenderFunction(storeProps);
    }
}

module.exports = ConnectedStore;