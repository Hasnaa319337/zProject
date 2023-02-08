<template>
  <div>
    <!-- <div v-if="loading">
      <img src="./assets/images/Spinner.svg">
    </div> -->
    <!-- <div v-else> -->
    <the-header v-if="!$route.params.auth" />
    <sub-header v-else />
    <!-- <the-footer></the-footer> -->
    <main>
      <cart-component></cart-component>
      <router-view
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      ></router-view>
    </main>
    <!-- </div> -->
  </div>
</template>

<script>
import TheFooter from "../src/components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import CartComponent from "@/components/products/CartComponent.vue";
import SubHeader from "@/components/SubHeader.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      // loading: true,
    };
  },
  components: {
    TheHeader,
    TheFooter,
    CartComponent,
    SubHeader,
  },
  created() {
    // this.loading = true;
  },
  mounted() {
    AOS.init({
      // Global settings:
      offset: 120, // offset (in px) from the original trigger point
      delay: 300, // values from 0 to 3000, with step 50ms
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  },
};
</script>

<style></style>
