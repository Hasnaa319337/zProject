<template>
  <section class="bestSaller">
    <div class="container">
      <h2 class="head">BEST SELLERS</h2>
      <div class="row">
      
          <product-card />
 
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "../products/productCard.vue";
export default {
  components: { ProductCard },
};
</script>

<style>
.bestSaller {
  margin-top: 70px;
}

</style>
