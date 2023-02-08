<template>
  <div>
    <section class="checkout">
      <div class="container">
        <h3 class="text-center">YOUR ORDER PRODUCTS</h3>
        <div class="choose_product">
          <div class="cart_item" v-for="item in cart" :key="item.id">
            <div class="product_image img-fluid">
              <img :src="item.img" :alt="item.name" />
            </div>

            <div class="product_details">
              <h6>{{ item.name }}</h6>
              <h6>{{ item.qty }} Pieces</h6>

              <span>{{ item.priceAfter }} R.S</span>
            </div>
          </div>

          <div class="prices">
            <div class="price_content">
              <h5>SubTotal</h5>
              <hr />
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
              <hr />
              <span> 25 R.S </span>
            </div>
            <div class="price_content">
              <h5>Total</h5>
              <hr />
              <span> {{ total_price + 25 }} R.S </span>
            </div>
          </div>
        </div>

        <!-- progress bar -->
        <!-- <div class="progress-container">
          <div class="progress" id="progress"></div>
          <div class="circle active">Address</div>
          <div class="circle">Payment</div>
          <div class="circle">Done</div>
        </div> -->
        <h3 class="checkhead text-center">CHECKOUT</h3>
        <div class="progressbar">
          <div class="div_step">
            <span class="step1 circle active" ref="step1"></span>
            <div>Address</div>
          </div>
          <hr />

          <div class="div_step">
            <span class="step2 circle" ref="step2"></span>
            <div>Payment</div>
          </div>
          <hr />
          <div class="div_step">
            <span class="step3 circle" ref="step3"></span>
            <div>Done</div>
          </div>
        </div>

        <form action="" class="shipping_form" @submit.prevent="submitForm">
          <!-- shipping block -->
          <div class="shipping">
            <h3>Saved Shipping Addresses</h3>
            <div class="radio">
              <div
                class="form_shipping"
                data-aos="slide-right"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    v-model="mansoura"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    <h4>Mansoura</h4>
                    <p>
                      Saudi Ariba - Riyadh - Velit in lorem elige - Suscipit est
                      volupt
                    </p>
                  </label>
                </div>
              </div>

              <div
                class="form_shipping"
                data-aos="slide-left"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    v-model="home"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    <h4>Home</h4>
                    <p>Saudi Ariba - Riyadh - 100 - king khaled Road</p>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!--  Shipping Data -->
          <!-- <div class="shipping_date">
            <h3>Confirm Shipping Data</h3>

            <div class="form_divs">
              <div class="form-control">
                <input type="text" id="username" required v-model="username" />
                <label for="username">Receiver Name</label>
              </div>
              <div class="form-control">
                <input
                  type="text"
                  id="username"
                  required
                  v-model="usernumber"
                />
                <label for="username">Receiver Phone</label>
              </div>
            </div>
          </div> -->

          <div class="form_divs">
            <!-- name -->
            <div class="formm form-control">
              <input
                type="text"
                name="user-name"
                id="username"
                v-model.trim="username"
                required
              />
              <label for="name" class="label-name">
                <span class="content-name">Receiver Name</span>
              </label>
            </div>

            <!-- phone number-->
            <div class="formm form-control">
              <input
                type="tel"
                name="phone"
                id="username"
                v-model.number="usernumber"
                required
              />
              <label for="name" class="label-name">
                <span class="content-name">Receiver Phone </span>
              </label>
            </div>
          </div>

          <button class="formbtn">
            <mainbutton class="mainbtn">Next</mainbutton>
            
          </button>
        </form>

      
      </div>
    </section>
  </div>
</template>

<script>
import CartComponent from "./CartComponent.vue";
import TheHeader from "../TheHeader.vue";

import Mainbutton from "../buttons/mainbutton.vue";
export default {
  components: { CartComponent, TheHeader, Mainbutton },
  data() {
    return {
      // item: {},
      home: "",
      mansoura: "",
      username: "",
      usernumber:null,
     
    };
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    total_price() {
      let price = 0;
      this.$store.getters.cart.map((el) => {
        price += el["qty"] * el["priceAfter"] * this.initialQuantity;
      });
      return price;
    },
  },
  methods: {
    submitForm() {
      this.username = this.username;
      this.usernumber = this.usernumber;
      if (this.username && this.usernumber && (this.home || this.mansoura))  {
  
        this.$refs.step1.classList.add('done')
        this.$refs.step2.classList.add('active')

      }
      console.log(this.item);
    },
  },
};
</script>

<style scoped>
.checkout{
  overflow-x: hidden;
}
.product_image img {
  height: 150px;

  object-fit: contain;
  margin-bottom: 11px;
}

.choose_product {
  margin: auto;
  text-align: center;
  font-size: 13px;
  color: var(--vt-c-volite);
  font-weight: 600;
}
h3 {
  margin-bottom: 20px;
  color: var(--vt-c-volite);
  font-size: 22px;
}
.prices {
  margin-top: 30px;
}
.price_content {
  display: grid;
  grid-template-columns: repeat(3, 10% 80% 10%);
  column-gap: 5ox;
  margin-top: 10px 0;
  font-weight: 900;
}
.price_content h5 {
  text-align: start;
  font-size: 17px;
}
.price_content span {
  text-align: end;
  font-size: 15px;
}
hr {
  color: rgb(139, 137, 137);
}
.checkhead {
  margin: 55px 0;
}
.cart_item {
  margin: 45px 0;
}

.mainbtn {
  margin-right: 10px;
}
.mainbtn:active {
  transform: scale(0.9);
  background-color: var(--button-active-color);
}

.mainbtn:focus {
  outline: none;
}
.shipping {
  margin: 50px 0;
}
.shipping h3 {
  margin-bottom: 25px;

  font-size: 25px;
  text-align: start;
  color: var(--vt-c-volite);

  font-weight: 400;
  text-shadow: 0.3px 0.3px 1px #52004a21;
}
.radio {
  border: 0;
  width: 100%;
}
.radio,
.form_divs {
  display: flex;
  align-items: center;
  justify-items: start;
  justify-content: space-between;
  column-gap: 20px;
}
.form_shipping {
  background: rgb(224 182 220 / 30%);
  width: 100%;
  border-radius: 4px;
  padding: 50px 25px;
}
.shipping h4 {
  color: var(--vt-c-volite);
  margin-bottom: 13px;
}
.shipping label p {
  color: #52004a85;
}
.form_shipping .form-check input {
  position: absolute;

  width: 30px;
  height: 30px;

  border-radius: 50%;
  top: -30px;
  right: 0px;
  border: 1px solid var(--vt-c-volite);
}
.form_shipping .form-check input:checked,
.form_shipping .form-check input:active {
  background-color: var(--vt-c-volite);
  box-shadow: none;
}
.shipping_form .form-control {
  position: relative;
}
.shipping_form input {
  width: 100%;
  border: none;
  text-align: start;
}
.shipping_date label {
  left: 10px;
  right: auto;
  position: absolute;
  top: 15px;
  color: var(--vt-c-gray);
  transition: all 0.4s ease-in-out;
}
.shipping_date input:focus + label,
.shipping_date input:active + label {
  color: #7a096f;
  top: -12px;
  font-weight: 600;
  font-size: 13px;
  background-color: white;
  padding: 0 3px;
}

/* true form */
.formm {
  position: relative;
  height: 55px;
  /* overflow: hidden; */

  border-radius: 10px;
  z-index: 1;
  margin-bottom: 20px;
}

.formm input,
textarea {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  border: none;
}

.formm label {
  position: absolute;
  bottom: 7px;
  left: 0%;
  width: 100%;
  height: 100%;
  pointer-events: none;
  color: var(--vt-c-gray);
  transition: all 0.4s ease-in-out;
}

/* El último hijo */
.formm label::after {
  content: "";
  position: absolute;
  left: 0px;
  bottom: -1px;
  height: 100%;
  width: 100%;
  /* border-bottom: 5px solid  var(--vt-c-volite); */
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.content-name {
  position: absolute;
  bottom: 8px;
  left: 10px;
  transition: all 0.3s ease;
  font-size: 16px;
  padding-left: 10px;
  z-index: 2;
}
.lastform .content-name {
  top: 20%;
}

.formm input:focus + .label-name .content-name,
.formm input:valid + .label-name .content-name {
  transform: translateY(-180%);
  background: #fff;
  z-index: 4;
  font-size: 12px;
  color: var(--vt-c-volite);
  outline: none;
  transition: 0.3s all ease-in-out;
}
.formbtn {
  border: 0;
  background: 0;
  display: block;
  margin: auto;
  margin-top: 20px;
}

/* style  progress bar */
.progressbar {
  display: flex;
  align-items: center;
  justify-items: center;
}
.progressbar hr {
  color: #888;
  width: 100%;
  border: 1px solid #888;
  text-align: center;
  margin: -18px -4px 0;
}
.circle {
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  border: 1px solid #888;
  justify-content: center;
  transition: 0.4s ease;
  width: 3rem;
  height: 3rem;
  position: relative;
  color: #ecb737;
}


.div_step div {
  color: rgba(0, 0, 0, 0.38);
  font-size: 17px;
  font-weight: 600;
}
.circle::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  background: #fff;
  width: 25px;
  height: 25px;
  border-radius: 100px;
  margin: auto;
}
.active {
  background: #ecb737;
  border-color: #ecb737;
}
.done{
  background: var(--vt-c-volite);
  border-color: var(--vt-c-volite);
}
</style>
