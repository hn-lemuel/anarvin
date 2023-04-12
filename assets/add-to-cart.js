class AddToCartButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", this._addToCart.bind(this));
  }

  async _addToCart(event) {
    event.preventDefault();
    let addToCartForm = document.querySelector("#product-form");
    let formData = new FormData(addToCartForm);
    fetch(window.Shopify.routes.root + "cart/add.js", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  open() {
    this.style.display = "block";
  }

  close() {
    this.style.display = "none";
  }
}

customElements.define("add-to-cart-button", AddToCartButton);
