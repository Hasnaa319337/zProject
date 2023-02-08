<template>

<div>
  <section class="product_details">
    <div class="container">
      <div class="row">
        <!-- images -->

        <div class="col-lg-4 col-md-6 col-xs-12">
          <div class="contain_images">
            <Carousel
              id="gallery"
              :items-to-show="1"
              :wrap-around="false"
              v-model="currentSlide"
            >
              <Slide v-for="image in product.smallimages" :key="image">
                <div class="carousel__item big_image">
                  <img class="img-fluid" :src="image" alt="" />
                </div>
              </Slide>
            </Carousel>

            <Carousel
              id="thumbnails"
              :items-to-show="4"
              :wrap-around="true"
              v-model="currentSlide"
              ref="carousel"
              class="small_images"
            >
              <Slide v-for="(image, index) in product.smallimages" :key="image">
                <div
                  class="carousel__item image"
                  @click="slideTo(index + 1 - 1)"
                >
                  <img
                    class="img-fluid small_img"
                    :src="image"
                    alt="image"
                    @click="changeopacity"
                    :style="{ opacity: newOpacity }"
                  />
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>

        <!-- details -->
        <div class="col-lg-8 col-md-6 col-xs-12">
          <div class="contain_details">
            <div class="offer_presentage">
              <span>{{ product.slaePrestange }}% OFF</span>
            </div>
            <div class="avialiable">
              <span>{{ product.state }}</span>
            </div>
            <h2>{{ product.name }}</h2>

            <div class="productPrice">
              <span class="priceAfter">{{ product.priceAfter }} R.S</span>
              <span class="priceBefore">{{ product.priceBefore }} R.S</span>
            </div>
            <div class="description">
              <h5>Description:</h5>

              <p>{{ product.description }}</p>
            </div>
            <div class="sizes">
              <h5>Sizes:</h5>
              <div class="size_buttons">
                <button v-for="size in product.sizes" :key="size">
                  {{ size }}
                </button>
              </div>
            </div>
            <div class="quantity">
              <h5>Quantity:</h5>
              <div class="quantity_buttons">
                <button
                  :disabled="(initialQuantity <= 1)"
                  @click="decreaseQuantity"
                  ref="decreasebutton"
                >
                  -
                </button>
                <span>{{ initialQuantity }}</span>
                <button
                  :disabled="initialQuantity >= product.quantity"
                  @click="increaseQuantity"
                >
                  +
                </button>
              </div>
            </div>
            <!-- v-if="currentUser.token" -->
            <mainbutton class="mainbtn back" @click="addToCart" 
              >Add To Cart</mainbutton
            >
            <!-- <mainbutton class="mainbtn back whshlist" @click="watchcounter"  >Add To wishlist</mainbutton> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <cart-component :initialQuantity="initialQuantity"></cart-component> -->
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="check-circle-fill" viewBox="0 0 16 16">
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
      ></path>
    </symbol>
    <symbol id="info-fill" viewBox="0 0 16 16">
      <path
        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      ></path>
    </symbol>
    <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
      <path
        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      ></path>
    </symbol>
  </svg>

  <div class="alert alert-success d-flex align-items-center" role="alert" :style="{display: display}">
    <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
      <use xlink:href="#check-circle-fill"></use>
    </svg>
    <div>An example success alert with an icon</div>
  </div>
  <the-footer></the-footer>
</div>

</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
//import "vue3-carousel/carousel.css";
import '../../../data/alert';
import mainbutton from "../buttons/mainbutton.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import { mapActions } from "vuex";
import CartComponent from "./CartComponent.vue";

export default {
  components: {
    mainbutton,
    Carousel,
    Slide,
    Navigation,
    TheHeader,
    TheFooter,
    CartComponent,
  },

  props: ["id"],

  data() {
    return {
      currentSlide: 0,
      newOpacity: 1,
      initialQuantity: 0,
      product: {
        required: true,
        type: Object,
      },
      
      details: this.$route.params,
      display:'none',
      
    };
  },

  computed: {
    products() {
      return this.$store.getters.products;
    },
  },

  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
    changeopacity() {
      this.newOpacity = 1;
    },
    increaseQuantity() {
      this.initialQuantity++;
    },
    decreaseQuantity() {
      if (this.initialQuantity == 1) {
        // this.$refs.decreasebutton.classList.add("stopmouse");
      } else {
        this.initialQuantity--;
      }
    },
    addToCart() {
      this.$store.dispatch("addToCart", this.details);
      // currentUser.token
      // if(this.$store.AuthModules.state.userToken){

      
      // this.$store.dispatch("addToCart", this.details);
      // }
      // else{
      //   this.$router.push('/:auth/login')
      // }
      // if (this.initialQuantity < this.product.quantity) {
      //   this.initialQuantity++;
      // } else {
      //   this.initialQuantity === this.products.quantity;
      // }
      // this.display = 'block'
    },
  
  },
  created() {
    // this.currentItemcount = this.$store.state.currentItemcount;
  },
  mounted() {
    this.product = this.products.find((product) => product.id == this.id);
    this.details = this.product;
  },
};
</script>

<style scoped>
.product_details {
  padding: 38px 0;
  overflow: hidden;
  margin-bottom: 23px;
}
.product_images {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
}
.big_image {
  width: 433px;
  height: auto;
  padding-bottom: 5px;
}

.carousel__slide {
  justify-content: start;
}
.image img {
  width: 80px;
  height: 95px;
  object-fit: cover;
  object-position: top;
}

.contain_details {
  padding-left: 10px;
  padding-top: 15px;
}
.offer_presentage,
.avialiable {
  display: inline-block;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: #b40000;
  border-radius: 3px;
  margin-right: 7px;
  font-size: 14px;
}
.offer_presentage span,
.avialiable span {
  color: #dfcece;
}
.productPrice span {
  font-size: 18px;
}
.priceAfter {
  color: #b40000;
}
h2,
h5 {
  font-size: 25px;
  font-weight: 600;
  margin-block: 22px;
  color: var(--vt-c-volite);
  text-shadow: 1px 1.2px #52004a70;
}
h5 {
  font-size: 18px;
}
.description h5,
.quantity h5 {
  margin-bottom: 10px;

  font-weight: 600;

  font-size: 23px;
}
.description p {
  margin-bottom: 16px;
  color: var(--vt-c-gray);
  font-size: 18px;
}

.quantity_buttons {
  border: 1px solid #cccccc59;
  width: 30%;
  color: var(--vt-c-volite);
  margin-top: 15px;
  padding: 5px 12px;
  border-radius: 3px;
  font-size: 20px;
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
.size_buttons {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: start;
  column-gap: 11px;
}
.size_buttons button {
  background: transparent;
  border: 1px solid #cccccc91;
  font-size: 17px;
  padding: 6px 13px;
  color: #52004a82;
}
.size_buttons button:focus {
  border: 1px solid var(--vt-c-volite);
}

.back {
  color: #ffbd39;
}
.mainbtn {
  margin-top: 15px;
  float: right;
}
.mainbtn:hover .back {
  color: var(--vt-c-volite) !important;
}
.stopmouse {
  cursor: no-drop;
}
.whshlist {
  margin-right: 10px;
}
.alert{
  width: 25%;
    margin: auto;
    display: none !important;
    bottom: 0;
}
</style>
