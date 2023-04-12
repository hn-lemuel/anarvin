class AddToCartButton extends HTMLElement {
  #productImgEl;
  #productTitleEl;
  #productQuantityEl;
  #productPriceEl;
  #modalEl;

  constructor() {
    super();
    this.#productImgEl = document.querySelector(".product-image");
    this.#productTitleEl = document.querySelector(".product-title");
    this.#productQuantityEl = document.querySelector(".product-quantity");
    this.#productPriceEl = document.querySelector(".product-price");
    this.#modalEl = document.querySelector(".cart-notification-modal");
    this.addEventListener("click", this._addToCart.bind(this));
  }

  _formatPrice(price) {
    price = price.replace(",", "");
    let numPrice = parseInt(price, 10) / 100;
    let formattedPrice = numPrice.toFixed(2);
    let priceWithCurrency = `$${formattedPrice}`;
    return priceWithCurrency;
  }

  async _addToCart(event) {
    event.preventDefault();
    let addToCartForm = document.querySelector("#product-form");
    let formData = new FormData(addToCartForm);
    const cart = "cart/add.js";

    try {
      const response = await fetch(`${window.Shopify.routes.root}${cart}`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      this._updateProductData(data);
      this._showCartNotification();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  _updateProductData(data) {
    const { featured_image, product_title, quantity, price } = data;
    this.#productImgEl.src =
      featured_image?.url ||
      "{{ 'product-1' | placeholder_svg_tag: 'w-20 h-20 object-cover border' }}";
    this.#productImgEl.alt = featured_image?.alt || "Product title";
    this.#productTitleEl.textContent = product_title;
    this.#productQuantityEl.textContent = quantity;
    this.#productPriceEl.textContent = this._formatPrice(
      price?.toString() || ""
    );
  }

  _showCartNotification() {
    this.#modalEl.classList.remove("hidden");
    const closeModalButton = (this.#modalEl = document.querySelector(
      ".cart-notification-modal"
    ));
    closeModalButton.addEventListener(
      "click",
      this._closeCartNotification.bind(this)
    );
  }

  _closeCartNotification() {
    console.log("is click");
    this.#modalEl.classList.add("hidden");
  }
}

customElements.define("add-to-cart-button", AddToCartButton);
