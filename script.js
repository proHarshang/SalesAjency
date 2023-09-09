const preloader = document.getElementById("preloader");
const body = document.getElementsByTagName("body")[0];
const header_logo = document.getElementById("header_logo");
const lineAnim_header = document.querySelector("#header_logo .outer_img");

// preloader
window.addEventListener("load", function () {
  preloader.style.display = "none";
  body.style.overflowY = "auto";
  body.style.overflowX = "hidden";
  lineAnim_header.classList.add("lineAnim_header");
});

// setup nav
header_logo.style.height = lineAnim_header.offsetHeight - 50 + "px";
window.addEventListener("resize", function () {
  header_logo.style.height = lineAnim_header.offsetHeight - 50 + "px";
});

// grab perticular data of clicked element into the modal
let product_wrapper_in_modal = document.querySelector(
  ".product_wrapper_in_modal"
);
var all_product = document.getElementById("all_product");
all_product.addEventListener("show.bs.modal", function (event) {
  var button = event.relatedTarget;
  var name = button.getAttribute("data-name");
  var img = button.getAttribute("data-img");
  all_product.querySelector(".modal-header .modal-title").textContent = name;
  all_product.querySelector(".modal-header img").src = `images/${img}.webp`;
  all_product.querySelector(".modal-header img").alt = name;
  product_wrapper_in_modal.innerHTML = "";
  if (name === "Vasant Masala") {
    product_array.vasantMasala.forEach((e) => {
      let msg = `I want to order ${e} from ${name}`;
      product_wrapper_in_modal.innerHTML += `<div class="product_card">
                    <h4 class="title fw-bold">${e}</h4>
                    <div class="company d-flex flex-column">
                        <span class="text-secondary lh-1">Company</span>
                        <span class="company_name">${name}</span>
                    </div>
                    <a href="https://wa.me/919898490529?text=${msg}" target="_blank" class="whatsapp_order"><img src="images/whatsapp_order.svg" alt="Whatsapp Order"><span>Order Now</span></a>
                </div>`;
    });
  } else if (name === "Perfetti") {
    product_array.perfetti.forEach((e) => {
      let msg = `I want to order ${e} from ${name}`;
      product_wrapper_in_modal.innerHTML += `<div class="product_card">
                    <h4 class="title fw-bold">${e}</h4>
                    <div class="company d-flex flex-column">
                        <span class="text-secondary lh-1">Company</span>
                        <span class="company_name">${name}</span>
                    </div>
                    <a href="https://wa.me/919898490529?text=${msg}" target="_blank" class="whatsapp_order"><img src="images/whatsapp_order.svg" alt="Whatsapp Order"><span>Order Now</span></a>
                </div>`;
    });
  } else if (name === "Thames") {
    product_array.thames.forEach((e) => {
      let msg = `I want to order ${e} from ${name}`;
      // product_wrapper_in_modal.appendChild = product(e, name);
      product_wrapper_in_modal.innerHTML += `<div class="product_card">
                    <h4 class="title fw-bold">${e}</h4>
                    <div class="company d-flex flex-column">
                        <span class="text-secondary lh-1">Company</span>
                        <span class="company_name">${name}</span>
                    </div>
                    <a href="https://wa.me/919898490529?text=${msg}" target="_blank" class="whatsapp_order"><img src="images/whatsapp_order.svg" alt="Whatsapp Order"><span>Order Now</span></a>
                </div>`;
    });
  } else if (name === "Eveready") {
    product_array.eveready.forEach((e) => {
      let msg = `I want to order ${e} from ${name}`;
      product_wrapper_in_modal.innerHTML += `<div class="product_card">
                    <h4 class="title fw-bold">${e}</h4>
                    <div class="company d-flex flex-column">
                        <span class="text-secondary lh-1">Company</span>
                        <span class="company_name">${name}</span>
                    </div>
                    <a href="https://wa.me/919898490529?text=${msg}" target="_blank" class="whatsapp_order"><img src="images/whatsapp_order.svg" alt="Whatsapp Order"><span>Order Now</span></a>
                </div>`;
    });
  } else if (name === "Jivraj9") {
    product_array.jivraj9.forEach((e) => {
      let msg = `I want to order ${e} from ${name}`;
      product_wrapper_in_modal.innerHTML += `<div class="product_card">
                    <h4 class="title fw-bold">${e}</h4>
                    <div class="company d-flex flex-column">
                        <span class="text-secondary lh-1">Company</span>
                        <span class="company_name">${name}</span>
                    </div>
                    <a href="https://wa.me/919898490529?text=${msg}" target="_blank" class="whatsapp_order"><img src="images/whatsapp_order.svg" alt="Whatsapp Order"><span>Order Now</span></a>
                </div>`;
    });
  }
});
