function makeCartScrollNicely() {
  var cart = document.querySelector(".cart__content");
  Ps.initialize(cart);
}

function addSidebarToggle() {
  // var $sidebar = document.querySelector(".site__right-sidebar");
  var $toggle = document.querySelector(".site__right-sidebar-toggle");
  $toggle.addEventListener("click",function() {
    document.body.classList.toggle("js-show-right-sidebar");
  });
}

window.onload = function() {
  makeCartScrollNicely();
  addSidebarToggle();
  console.log("page loaded");
}