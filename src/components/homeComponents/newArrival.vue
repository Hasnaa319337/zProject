<template>
  <section class="arrival">
    <div class="row">
      <div
        class="col-lg-6 col-md-12 col-xs-12 arrivalCard"
        data-aos="slide-right"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <img
          class="imgBK"
          src="../../assets/images/arrival1.png"
          alt="arrival1"
        />
        <div class="heads">
          <h3>New Arrivals !</h3>
          <h5>Arabian Abaya Is Available! 30% Discount</h5>
          <mainbutton>Shop Now</mainbutton>
        </div>
      </div>
      <div
        class="col-lg-6 col-md-12 col-xs-12 arrivalCard"
        data-aos="slide-left"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <img
          class="imgBK"
          src="../../assets/images/arrival2.png"
          alt="arrival1"
        />
        <div class="heads">
          <h3>New Arrivals !</h3>
          <h5>Arabian Abaya Is Available! 30% Discount</h5>
          <mainbutton>Shop Now</mainbutton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Mainbutton from "../buttons/mainbutton.vue";
export default {
  components: {
    Mainbutton,
  },
};
</script>

<style scoped>
.arrival {
  overflow: hidden;
  position: relative;
  margin: 20px 20px;
}
h5 {
  font-size: 20px;
  width: 56%;
  margin-bottom: 24px;
}
.arrivalCard {
  margin-bottom: 30px;
  overflow: hidden;
}
.heads {
  background: none;
}
.arrivalCard img {
  border-radius: 10px;
}
@media (max-width: 1170px) {
  h3 {
    width: 100%;
    font-size: 28px;
  }
  h5 {
    font-size: 19px;
  }
}
</style>
