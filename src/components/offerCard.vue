<template>
  <section class="offer containBK">
    <div>
      <img
        class="imgBK"
        src="../assets/images/largeOfferPannel.4dac09f.png"
        alt=""
      />
    </div>
    <div class="heads">
      <h3>{{ showurl() }}</h3>
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><span class="offerIcon"> >></span></li>
        <li>{{ showurl() }}</li>
      </ul>
    </div>
  </section>
</template>

<script>

export default{
  data() {
    return {

      myurl:  window.location.pathname,


    }
  },
  methods:{
    showurl:function (){
      return(
       this.myurl = this.myurl.replace('/' , '')
       
       )
    }
  },
  computed:{

  }
}
</script>

<style scoped>
.offer {
  overflow: hidden;
  margin-top: 10px;

  margin-bottom: 40px;
}
.offer .heads ul {
  width: 30%;
  color: var(--vt-c-volite);
}
.offer .heads li {
  margin: 0;
  margin-right: 7px;
  font-size: 18px;
}
.offer .heads li:last-of-type {
  font-weight: 700;
}
.offer .heads a {
  cursor: pointer;
  color: var(--vt-c-volite);
}
@media (max-width: 900px) {
  .heads h3 {
    font-size: 30px;
    width: 100%;
  }
  .offer .heads li {
    margin-right: 5px;
    font-size: 14px;
  }
}
@media (max-width: 690px) {
  .offer .heads li {
    padding: 0;
  }
}
</style>
