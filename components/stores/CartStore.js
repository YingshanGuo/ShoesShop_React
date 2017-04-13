const EventEmitter = require("events");

let emitter = new EventEmitter();

function emitChange() {
    emitter.emit("change");
}

let _cartItems = {
    // "jameson-vulc": {
    //     id: "jameson-vulc",
    //     quantity: 1,
    // },
};

module.exports = {
    // 读方法
    getCartItems() {
        return _cartItems;
    },
    cartItems() {
        return _cartItems;
    },

    // 写方法。这些就是 "action"
    addCartItem(productId) {
        if (_cartItems[productId] != null) {
            _cartItems[productId].quantity += 1
        } else {
            _cartItems[productId] = { id: productId, quantity: 1 };
            //console.log("CartStore    _cartItems", _cartItems);
        }
        emitter.emit("change");
    },

    decreaseCartItem(productId) {
        if (_cartItems[productId].quantity > 1) {
            _cartItems[productId].quantity -= 1;
        } else {
            delete _cartItems[productId];
        }
        emitter.emit("change");
    },

    removeCartItem(productId) {
        delete _cartItems[productId];
        emitter.emit("change");
    },

    addChangeListener(callback) {
        // console.log("收到添加监听");
        emitter.addListener("change", callback)
    },

    removeChangeListener(callback) {
        emitter.removeListener("change", callback)
    },
}