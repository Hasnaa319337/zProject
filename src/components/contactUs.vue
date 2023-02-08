<template>
  <div>
    <section class="contact">
      <offer-card />
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-xs-12"
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img
                src="../assets/images/contactUsImage.5baa0cb.png"
                alt=""
                class="imgBK"
              />
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-xs-12"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <h3 class="h">contact us</h3>
            <form @submit.prevent="getContactData">
              <div class="form-control">
                <input
                  type="text"
                  placeholder="Full Name"
                  v-model="name"
                  required
                />
              </div>

              <div class="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  v-model="email"
                  required
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="Phone Number"
                  v-model="phone"
                  required
                />
       
              </div>
              <div class="form-control">
                <textarea
                  rows="8"
                  cols="25"
                  placeholder="How Can We Help You?"
                  v-model="message"
                ></textarea>
              </div>
              <!-- <mainbutton class="formbutton" type="submit">send Message</mainbutton> -->
              <input class="button mainbtn text-center" type="submit" value="Send" />
            </form>
          </div>
        </div>
        <iframe
          id="if1"
          width="100%"
          height="254"
          style="visibility: visible"
          src="http://www.google.com/custom?q=&btnG=Search"
        ></iframe>
      </div>
    </section>
    <the-footer></the-footer>
  </div>
</template>

<script>
import mainbutton from "./buttons/mainbutton.vue";
import OfferCard from "./offerCard.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import axios from "axios";
export default {
  components: { mainbutton, OfferCard, TheHeader, TheFooter },
  data() {
    return {
      data: {
        name: null,
        email: null,
        phone: null,
        message: null,
      },
    };
  },
created(){
  
},
  methods: {
    getContactData() {
      const contactData = new FormData();
      contactData.append("fullname", this.name);
      contactData.append("email", this.email);
      contactData.append("phone", this.phone);
      contactData.append("content", this.message);
      contactData.append("device_type", "jhdsfj");
      contactData.append("device_token", "jhdsfj");

      axios({
        method: "POST",
        url: "https://outfit.phpv8.aait-d.com/website/contact",
        data: contactData,
      })
        .then((res) => {
          this.$toast.success(`Message Sent Successfully`);
        })
        .catch((err) => {
          console.log(err);
        });
    
    },
  },
};
</script>

<style scoped>
.contact {
  margin-bottom: 50px;
}
h3 {
  font-size: 33px;
  margin: 0;
  font-size: 33px;
  margin: 0;
  margin-bottom: 41px;
}
input,
textarea,
button {
  border: none;
  text-align: start;
}
.form-control {
  margin-bottom: 20px;
}
.formbutton {
  width: 100%;
}
iframe {
  border-radius: 6px;
  margin-top: 40px;
}

input,
textarea {
  width: 100%;
}
textarea {
  outline: none;
}

.h {
  font-style: italic;
    font-weight: 300;
    font-size: 38px;
    line-height: 34px;
    color: #000000e0;
    LETTER-SPACING: 4px;
    margin-bottom: 43px;
}
</style>
