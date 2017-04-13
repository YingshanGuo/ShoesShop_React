const EventEmitter = require("events");
const LikeStore = require('./LikeStore');
const { likeItems } = LikeStore;
const ProductStore = require('./ProductStore');
const { productItems } = ProductStore;

let emitter = new EventEmitter();

function emitChange() {
    emitter.emit("change");
}

let _filterProducts = {
    "filterIcon": {
        imagePath: "img/heart.svg",
    },
};

let _filterProductItems = {

};
let _likeItems = likeItems();
let _productItems = productItems();

module.exports = {
    // 读方法
    filterProducts() {
        return _filterProducts["filterIcon"].imagePath;
    },
    filterProductItems() {
        if (_filterProducts["filterIcon"].imagePath == "img/heart.svg") {
            _filterProductItems = productItems();
        }
        return _filterProductItems;
    },

    shiftFilterProducts() {
        _filterProductItems = {};
        if (_filterProducts["filterIcon"].imagePath == "img/heart.svg") {
            _filterProducts["filterIcon"].imagePath = "img/heart-liked.svg";
            Object.keys(_likeItems).forEach(x => {
                if (_likeItems[x].imagePath == "img/heart-liked.svg") {
                    _filterProductItems[x] = _productItems[x];
                }

            });

            console.log("_filterProductItems", _filterProductItems);
        } else {
            _filterProducts["filterIcon"].imagePath = "img/heart.svg";
            _filterProductItems = _productItems;
        }
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