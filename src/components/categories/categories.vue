<template>
  <section class="categories">
    <div class="container">
      <h2 class="head">categories</h2>
      <div class="cats">
        <div class="cat" v-for="(categorie, index) in categories" :key="index">
        
          <category-card :data="categorie" />

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import categoryCard from "../categories/categoryCard.vue";


export default {
  components: {
    categoryCard,

  },
  data() {
    return {
      catData: [],
    };
  },
  computed:{

    categories(){
      return this.$store.state.catData
    }
  },
  mounted() {
    fetch("http://localhost:3000/catData")
      .then((res) => res.json())
      .then((data) => (this.catData = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.categories {
  margin-bottom: 40px;
}
.cats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 13px;
}
</style>
