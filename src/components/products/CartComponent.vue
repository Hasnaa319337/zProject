<template>
  <section class="cart">
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">My Cart</h5>
        <div class="close_button">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
      </div>
      <div class="offcanvas-body product_description">
        <empty-cart v-if="cart.length == 0" />
        <div class="choose_product" v-else>
          <div class="cart_item" v-for="item in cart" :key="item.id">
            <div class="row">
              <div class="col-lg-4">
                <div class="product_image img-fluid">
                  <img :src="item.img" :alt="item.name" />
                </div>
              </div>
              <div class="col-lg-8">
                <div class="product_details">
                  <!-- delet item -->
                  <!-- <div class="close_button">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      @click="removeItem"
                    ></button>
                  </div> -->

                  <h5>{{ item.name }}</h5>
                  <!-- <h6>{{ item.qty }} Pieces</h6> -->
                  <div class="rating">
                    <svg
                      v-for="rate in item.rate"
                      :key="rate"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      />
                    </svg>
                    <svg
                      v-for="rate in 5 - item.rate"
                      :key="rate"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                      />
                    </svg>
                  </div>

                  <span>{{ item.priceAfter }} R.S</span>

                  <div class="quantity_buttons">
                    <button
                      :disabled="initialQuantity <= 1"
                      @click="decreaseQuantity"
                      ref="decreasebutton"
                    >
                      -
                    </button>
                    <span>{{ initialQuantity }}</span>
                    <button
                      :disabled="initialQuantity >= item.quantity"
                      @click="increaseQuantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="cheack_coupon">
            <input type="text" placeholder="Check Coupon" />

            <mainbutton class="mainbtn">Apply</mainbutton>
          </div>
          <div class="prices">
            <div class="price_content">
              <h5>SubTotal</h5>
              <span> {{ total_price }} R.s</span>
            </div>
            <!-- <div class="price_content">
              <h5>Discount On Products</h5>
              <span> 15 R.S </span>
            </div>
            <div class="price_content">
              <h5>Discount Copoun</h5>
              <span> 15 R.S </span>
            </div> -->
            <div class="price_content">
              <h5>Shipping Price</h5>
              <span> 25 R.S </span>
            </div>
            <div class="price_content">
              <h5>Total</h5>
              <span> {{ total_price + 25 }} R.S </span>
            </div>
            <router-link to="/checkout">
              <mainbutton class="mainbtn checkout">Chechout</mainbutton>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import EmptyCart from "./EmptyCart.vue";
// import TheHeader from "@/components/TheHeader.vue";
import mainbutton from "../buttons/mainbutton.vue";
import { mapActions } from "vuex";
export default {
  // props:['initialQuantity'],
  components: { mainbutton, EmptyCart },
  data() {
    return {
      initialQuantity: 1,
    };
  },

  computed: {
    products() {
      return this.$store.getters.products;
    },
    cart() {
      return this.$store.getters.cart;
    },

    total_price() {
      let price = 0;
      this.$store.state.cart.map((el) => {
        price += el["qty"] * el["priceAfter"] * this.initialQuantity;
      });
      return price;
    },
  },
  mounted() {},
  methods: {
    increaseQuantity() {
      this.initialQuantity++;
    },
    decreaseQuantity() {
      this.initialQuantity--;
    },
    removeItem() {
      this.$store.dispatch("removeItem", this.details);
    },
  },
};
</script>

<style scoped>
#offcanvasRightLabel {
  color: var(--vt-c-volite);
}

.cart_item {
  padding-bottom: 20px;
  margin-bottom: 10px;
}
.close_button {
  background: #52004a49;
  color: var(--vt-c-volite);
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.close_button button {
  font-size: 10px;
}
.product_image {
  width: 100px;
  height: 145px;
}
.product_image img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.quantity_buttons {
  border: 1px solid #cccccc59;
  width: 52%;
  color: var(--vt-c-volite);
  margin-top: 15px;
  padding: 5px 12px;
  border-radius: 3px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
}
.quantity_buttons button {
  border: none;
  background-color: transparent;
  color: var(--vt-c-volite);
  /* cursor: no-drop; */
}
.cheack_coupon,
.price_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;

  padding: 12px 0;
}
.price_content,
.cart_item,
.offcanvas-header {
  border-bottom: 1px solid #ddddddd8;
}
.price_content h5 {
  font-size: 16px;
  font-weight: 400;
}
.price_content span {
  color: #959191;
}
.cheack_coupon input {
  width: 73%;
  text-align: start;
}
.checkout {
  margin: auto;
  display: block;
  margin-top: 20px;
}
button {
  outline: none;
}
</style>
