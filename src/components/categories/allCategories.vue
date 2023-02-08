<template>

  <div>
    <offer-card/>
  <categories/>
  <the-footer></the-footer>
  </div>
</template>

<script>
import Categories from './categories.vue'
import offerCard from '../offerCard.vue'
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
export default {
  components: { offerCard, Categories   , TheHeader,
    TheFooter },

}
</script>

<style>

</style>