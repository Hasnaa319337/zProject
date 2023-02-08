<template>
  <section>
    <div class="row">
      <div
        class="productCard col-lg-3 col-md-6 col-xs-12"
        v-for="product in products"
        :key="product.name"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div class="productImg">
          <div class="slaePrecentage">
            <span>{{ product.slaePrestange }}%</span>
          </div>
          <div class="productColors">
            <span
              v-for="color in product.colors"
              :key="color"
              :style="{ background: color }"
            >
            </span>
          </div>
          <router-link
            :to="{
              name: 'ProductDetails',
              params: { id: product.id },
            }"
          >
            <img :src="product.img" alt="" />
          </router-link>
        </div>

        <div class="productInfo">
          <p></p>
          <h3 class="productName">{{ product.name }}</h3>
          <div class="productRate">
            <div class="rating">
              <svg
                v-for="rate in product.rate"
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
                v-for="rate in 5 - product.rate"
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
          </div>
          <div class="productPrice">
            <span class="priceAfter">{{ product.priceAfter }} R.S</span>
            <span class="priceBefore">{{ product.priceBefore }} R.S</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductDetails from "./ProductDetails.vue";

export default {
  data() {
    return {};
  },
  props: ["product"],
  components: {
    ProductDetails,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {},
  mounted() {
    this.id = this.$route.params.id;
  },
};
</script>

<style>
.productCard {
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  border-radius: 7px;
  /* transition-delay: 1000;
  transition: .3s all ease-in-out; */
}

.productCard .productImg {
  width: 100%;
  height: 450px;
}

.productImg .slaePrecentage {
  position: absolute;
  background-color: #b40000;
  border-radius: 35px 0 0 35px;
  position: absolute;
  z-index: 3;
  width: 55px;
  height: 35px;
  right: 0;
  top: 0;
  text-align: center;
  color: white;
  font-size: 15px;
  padding: 4px 0 0 15px;
}
.productImg .productColors {
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  margin: 2px 5px;

  transition: all 0.4s ease-in-out;
}
.productColors span {
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: scale(0);
  margin: 4px 3px;
  transition: .3s all ease-in-out;
}
.productImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
  z-index: 2;
}
.productImg img:hover {
  transform: scale(1.06);
  cursor: pointer;
}
.productImg:hover > .productColors span {
  transform: scale(1.06);
  transition: .6s all ease-in-out;
}
.productInfo {
  padding: 10px 5px;
}
.productInfo .productName {
  color: var(--vt-c-gray);
  font-size: 20px;
  font-weight: 400;
}

.productPrice {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.productPrice .priceAfter {
  font-size: 17px;
  margin-right: 11px;
}
.productPrice .priceBefore {
  font-size: 17px;
  text-decoration: line-through;
  color: var(--vt-c-gray);
}

/* rating */

.rating {
  /* width: 45%; */

  margin-bottom: 7px;
  display: flex;
  column-gap: 5px;
}
.rating svg {
  color: #f0d437;
  /* color: #ccccccd1; */
  width: 9%;
}
.yellow_star path {
  background: #b40000;
}

body[dir="rtl"] .productImg .slaePrecentage {
  border-radius: 0 35px 35px 0;
  left: 0;
  right: auto;

}
</style>
