<template>
  <section class="hero">
    <carousel
      :items-to-show="1"
      :wrap-around="true"
      :transition="3000"
      :autoplay="true"
    >
      <slide v-for="slide in slides" :key="slide">
        <img :src="slide.img" alt="" class="img" />
      </slide>

      <template >
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      slides: [
        { img: "src/assets/images/bk1.jpg" },
        { img: "src/assets/images/bk2.jpg" },
        { img: "src/assets/images/bk3.jpg" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.hero {
  position: relative;
}
button {
  width: 65px;
  height: 65px;
  z-index: 2;
  display: block;
  font-family: "slick";
  font-size: 20px;
  line-height: 1;
  opacity: 0.75;
  color: white;
  position: absolute;
}
.left {
  left: 0;
}
.left::before {
  content: "←";
}
.right {
  right: 0;
}
.right::before {
  content: "→";
}
.img {
  width: 100%;

  object-fit: cover;
}
.hero li{
  padding-top:0 ;
  line-height: 0;
}
.carousel__prev, .carousel__next{
  background: var(  --vt-c-volite);
    border-radius: 50%;
    width: 40px;
    height: 40px;
}
.carousel__icon{

  color: white;
}
</style>
