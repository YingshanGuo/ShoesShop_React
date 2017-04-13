const React = require('react');
const ReactDOM = require('react-dom');
const App = require('../components/App');

window.myTest = () => {

   var products= {
        "jameson-vulc": {
            id: "jameson-vulc",
            name: "Jameson Vulc",
            price: 64.99,
            imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
            gender: "man",
        },

        "marana-x-hook-ups": {
            id: "marana-x-hook-ups",
            name: "Marana X Hook-Up",
            price: 79.99,
            imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
            gender: "man",
        },
   }
    function addProduct(id){
        products[id]=id;
    }
    addProduct("dfsdf");
  let [head, ...tail] = [1, 2, 3, 4];   
  console.log("tail: "+tail);
  console.log("products: ",products);
}

window.onload = function () {
    ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));
};