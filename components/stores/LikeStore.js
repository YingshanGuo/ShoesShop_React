const EventEmitter = require("events");

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

let _likeItems = {
    "jameson-vulc": {
        id: "jameson-vulc",
        imagePath: "img/heart.svg",
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        imagePath: "img/heart.svg",
    },

    "jameson-e-lite": {
        id: "jameson-e-lite",
        imagePath: "img/heart.svg",
    },

    "jameson-e-lite-julian-davidson-4": {
        id: "jameson-e-lite-julian-davidson-4",
        imagePath: "img/heart.svg",
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        imagePath: "img/heart.svg",
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        imagePath: "img/heart.svg",
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        imagePath: "img/heart.svg",
    },

    "corby-womens-2": {
        id: "corby-womens-2",
        imagePath: "img/heart.svg",
    },
};

module.exports = {
    // 读方法
    filterProducts() {
        return _filterProducts["filterIcon"].imagePath;
    },
    filterProductItems() {
        return _filterProductItems;
    },

    getLikeItems() {
        return _likeItems;
    },

    likeItems() {
        return _likeItems;
    },

    shiftFilterProducts() {
        if (_filterProducts["filterIcon"].imagePath == "img/heart.svg") {
            _filterProducts["filterIcon"].imagePath = "img/heart-liked.svg";
            Object.keys(_likeItems).forEach(x => {
                if (_likeItems[x].imagePath == "img/heart-liked.svg") {
                    _filterProductItems[x] = _likeItems[x];
                }
            });

            console.log("_filterProductItems", _filterProductItems);
        } else {
            _filterProducts["filterIcon"].imagePath = "img/heart.svg";
        }
        emitter.emit("change");
    },

    changeRedHeartIcon(productId) {
        //console.log(_likeItems);
        if (_likeItems[productId].imagePath == "img/heart.svg") {
            _likeItems[productId].imagePath = "img/heart-liked.svg";
            //console.log("换成heart-liked.svg ");
        } else {
            _likeItems[productId].imagePath = "img/heart.svg";
            //console.log("换成heart.svg 啦~~~~~");
        };
        console.log("更改后", _likeItems);
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