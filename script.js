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

// product function to create a product

function product(title) {
  let elem = `
  <div class="product_card">
                    <h4 class="title fw-bold">${title}</h4>
                    <div class="company d-flex flex-column">
                        <span class="text-secondary">Company</span>
                        <span class="company_name">Undefined</span>
                    </div>
                    <a href="" class="whatsapp_order"><img src="images/whatsapp_order.svg" alt="Whatsapp Order"><span>Order Now</span></a>
                </div>
  `;
  return elem;
}

// product("title");

// set company name dynamically
document.querySelectorAll(".product_card").forEach((e) => {
  let wrapper = e.parentElement;
  let companyname = wrapper.getAttribute("data-company");
  e.querySelectorAll(".company_name").forEach((elem) => {
    elem.textContent = companyname;
  });
});
