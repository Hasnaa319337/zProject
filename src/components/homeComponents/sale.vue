<template>
  <section class="sale containBK">
    <div>
      <img
        class="imgBK"
        src="../../assets/images/largeOfferPannel.4dac09f.png"
        alt=""
      />
    </div>
    <div class="heads">
      <h3>50% Sale</h3>
      <h5>Arabian Abaya Is Available!</h5>
      <main-button>Shop Now</main-button>
    </div>
  </section>
</template>

<script>
import mainButton from "../buttons/mainbutton.vue";
export default {
  components: { mainButton },
};
</script>

<style scoped>
.sale {
  margin-bottom: 40px;
}
@media (max-width: 1000px) {
  h3 {
    width: 100%;
    font-size: 28px;
  }
  h5 {
    font-size: 19px;
    width: 100% ;
    margin: 10px 0;
  }
}
</style>
