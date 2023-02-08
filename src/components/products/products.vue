<template>
  <div>
    <section class="products">
      <offer-card />

      <div class="row">
        <div class="col-lg-3 col-md-12 col-xs-12">
          <products-filter />
        </div>

        <div class="col-lg-9 col-md-12 col-xs-12 myproducts">
          <product-card/>
        </div>
      </div>
    </section>
    <the-footer />
  </div>
</template>

<script>
import HotOffers from "../hotOffers.vue";
import OfferCard from "../offerCard.vue";
import ProductCard from "./productCard.vue";
import ProductsFilter from "./ProductsFilter.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    OfferCard,
    HotOffers,
    ProductCard,
    ProductsFilter,
    TheHeader,
    TheFooter,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.products {
  overflow: hidden;
}
.myproducts {
  margin: auto;
  width: 65%;
}
</style>
