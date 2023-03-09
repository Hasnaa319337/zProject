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

      <template>
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
        {
          img: "https://static.wixstatic.com/media/623504_e7942bb7e62340099341dbc32a52e206~mv2.png/v1/fill/w_1899,h_748,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/623504_e7942bb7e62340099341dbc32a52e206~mv2.png",
        },
        {
          img: "https://static.wixstatic.com/media/11062b_a6e1bb8d93704b859a65ba5d3dd3645a~mv2.jpg/v1/fill/w_1899,h_748,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_a6e1bb8d93704b859a65ba5d3dd3645a~mv2.jpg",
        },
        {
          img: "https://static.wixstatic.com/media/623504_e7942bb7e62340099341dbc32a52e206~mv2.png/v1/fill/w_1899,h_748,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/623504_e7942bb7e62340099341dbc32a52e206~mv2.png",
        },
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
.hero li {
  padding-top: 0;
  line-height: 0;
}
.carousel__prev,
.carousel__next {
  background: var(--vt-c-volite);
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.carousel__icon {
  color: white;
}
</style>
