<template>

<div>
  <hero></hero>
  <categories></categories>
  <sale></sale>
  <best-saller></best-saller>
  <new-arrival></new-arrival>

  <the-footer></the-footer>
</div>
</template>

<script>
import Categories from "../components/categories/categories.vue";
import BestSaller from "./homeComponents/bestSaller.vue";
import hero from "./homeComponents/hero.vue";
import NewArrival from "./homeComponents/newArrival.vue";
import Sale from "./homeComponents/sale.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    hero,
    Categories,
    Sale,
    NewArrival,
    BestSaller,
    TheHeader,
    TheFooter,
    
  },
};
</script>

<style></style>
