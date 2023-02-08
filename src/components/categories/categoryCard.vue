<template>
  <div>
    <router-link :to="{name:'CategorieDetails'  ,params: { id: data.id },}">
      <div
        class="cat"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <img :src="data.img" @click="findid" />
        <h5 class="catname">{{ data.categorieName }}</h5>
      </div>
    </router-link>

    <!-- <CategorieDetails :data="data"/> -->
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    findid() {
      console.log(this.data.id);
    },
  },
  mounted() {
    this.id = this.$route.params.id;
  },
};
</script>

<style scoped>
a {
  position: relative;
  width: 300px;
  height: 380px;
  display: flex;
  border-radius: 4px;
  margin-block: 12px;
  overflow: hidden;
}
.cat {
  width: 100%;
}
.cat img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: all 0.5s linear;
}
.cat img:hover {
  transform: scale(1.06);
}
.cat .catname {
  margin: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 28px 10px;
  text-align: center;
  text-transform: uppercase;
  color: var(--vt-c-white);
  background-color: var(--vt-c-volite);
}
</style>
