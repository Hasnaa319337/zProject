<template>
  <div>
    <section class="about">
      <offer-card />
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-xs-12 firstDiv"
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <h3>Zaha application:</h3>
            <p>
              is an online shopping platform that enables you to search and
              browse comfortably and easily among the latest models of abayas
              and galabiyas, where you can order what you think of the largest
              exclusive selection of abayas and jalabiyas with home delivery
              service.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              corporis, qui quibusdam tenetur libero quidem, vitae inventore
              facere repellendus temporibus blanditiis, reprehenderit
              dignissimos. Consectetur esse distinctio ducimus cupiditate earum
              officiis!
            </p>
            <p>
              is an online shopping platform that enables you to search and
              browse comfortably and easily among the latest models of abayas
              and galabiyas, where you can order what you think of the largest
              exclusive selection of abayas and jalabiyas with home delivery
              service.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              sequi quisquam explicabo iusto sapiente vitae natus quam mollitia
              maiores dignissimos minima ab expedita magnam autem, dolorum quos
              cum quo maxime.
            </p>
          </div>

          <div
            class="col-lg-6 col-md-6 col-xs-12 secondDiv"
            data-aos="slide-left"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <div class="aboutlogo">
              <img src="../assets/images/logo.0b6d3ab.svg" alt="" />
            </div>
          </div>
        </div>

   
      </div>
    </section>

    <div>{{ info }}</div>

    <the-footer></the-footer>
  </div>
</template>

<script>
import offerCard from "./offerCard.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import axios from "axios";

export default {
  components: {
    offerCard,
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      info: null,
      image: null,
    
    };
  },

  methods: {
    getAboutData() {
      axios({
        method: "GET",
        url: "/general/settings",
      })
        .then((res) => {
          // this.info = res.data.data.about;
          this.image = res.data.data.about_image;
          // console.log(this.info);
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
    
  
 

  created() {
    this.getAboutData();
    this.getCoursesData()
  },
};
</script>

<style scoped>
.about {
  margin-bottom: 20px;
  overflow-x: hidden;
}

p {
  font-size: 17px;
  width: 90%;
  font-weight: 400;
  color: black;
  text-align: justify;
}
.aboutlogo img {
  margin-left: 22%;
  display: block;
  margin-bottom: 20px;
  width: 50%;
}

h3 {
  font-weight: 400;
  margin: 20px 0;
}
@media (max-width: 990px) {
  p {
    width: 100%;
  }
}
</style>
