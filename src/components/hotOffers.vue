<template>

  <section class="hotOffers">
    <offer-card />
    <div class="offerContainer">
     <div class="container">
      <div class="row">
        <transition-group name="productAnimation" tag="">
          <product-card/>
       </transition-group>
          
         
        
      </div>
     </div>
    </div>
  </section>
  <the-footer></the-footer>
</template>

<script>
import offerCard from "./offerCard.vue";
import ProductCard from "./products/productCard.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
export default {
  components: { offerCard, ProductCard ,TheHeader,TheFooter},
  computed:{
   
  }
}
</script>

<style>
.hotOffers {
  overflow: hidden;
}
.hotOffers .offerContainer {
  margin: 0 20px;
}
.hotOffers .row {
  padding-block: 30px;
}
.productAnimation-enter-from{
    opacity: 0;
    transform: translateZ(0);
}
.productAnimation-enter-to{
    opacity: 1;
   transform:  translate3d(0,100px,0);
}
.productAnimation-enter-active{
    transition: all 1s ease-in-out  ;
    transition-delay: 0.5s;
}

</style>
