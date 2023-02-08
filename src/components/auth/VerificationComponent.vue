<template>
  <section class="signin">
    <div class="container">
      <!-- second form -->
      <div class="container">
        <div class="left">
          <h1 class="text-center">Verify</h1>
          <p class="paragraph">Please Enter The Code That Sent To You</p>
          <!-- Verify -->
          <div>
            <!-- <OTP :digit-count="4"></OTP> -->
            <form @submit.prevent="verify">
              <input
                type="phone"
                name="phone"
                id="phone"
                v-model="phone"
                placeholder="Phone Number"
              />
              <input
                type="text"
                name="code"
                id="code"
                v-model="code"
                placeholder="code"
              />

              <button class="btn mainbtn text-center" type="submit">
                Verify
              </button>
            </form>
          </div>
        </div>

        <div class="right"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Mainbutton from "@/components/buttons/mainbutton.vue";
import TheHeader from "@/components/TheHeader.vue";
import OTP from "@/components/OTP.vue";
import axios from "axios";


export default {
  components: {
    Mainbutton,
    TheHeader,
    OTP,
  },

  data() {
    return {
      phone: localStorage.getItem('phone_number'),
      code: null,
    };
  },

  methods: {
    
    verify() {
      console.log(this.code);
      const verify_data = new FormData();
      verify_data.append("phone", this.phone);
      verify_data.append("verification_code", this.code);
      verify_data.append("device_type", "ios");
      verify_data.append("device_token", "asdasdasdasdasda");
      axios({
        method: "POST",
        url: "auth/email/verify",
        data: verify_data,
      })
        .then((response) => {
          if (response.data.status == true) {
            this.$router.push("/auth/login");
          }
        })
        .catch((error) => {
          console.log(error);
         
        });
    },
  },
};
</script>

<style scoped>
/* style form 2 */

@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,900&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  transition: 0.3s;
}

.signin {
  height: 60vh;
  /* background-image: url("../../assets/images/log5.jpg"); */
  background: url("https://v1.zahaaksa.com/_nuxt/img/authBgPattern.7b844e4.svg");
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: white;
  display: flex;
  width: 800px;
  border: 1px solid #4a1945;
  box-shadow: 8px 8px 0 0 #663061;
  position: relative;
}

.left,
.right {
  width: 400px;
}

.left {
  padding: 40px 60px;
}

form {
  display: flex;
  flex-direction: column;
}
form input {
  width: 100%;
  text-align: start;
  padding-left: 10px;
}
.accept {
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 0.9rem;
}

.accept input {
  width: 15px;
  margin-right: 10px;
}

img {
  height: 500px;
  padding: 40px 60px;
}

.left h1 {
  margin-bottom: 10px;
  color: var(--vt-c-volite);
  font-size: 23px;
  text-decoration: underline;
}

label {
  margin: 15px 0 5px;
  font-size: 0.9rem;
}

.left p {
  margin-bottom: 15px;
}

input {
  height: 40px;
  width: 100%;
  margin: 10px 0;
  text-align: start !important;
  padding-left: 10px;
}

.accept label {
  margin: 0;
}

.button {
  width: 100%;
  height: 45px;
  background-color: black;
  font-size: 1rem;
  margin-top: 30px;
  text-align: center;
}

div .right {
  background-image: url("@/assets/images/girl.png");
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 100%;
  border: 40px solid white;
}
.ploginlink {
  margin-top: 10px;
}
.loginlink {
  text-decoration: underline;
  color: #e7c708de;
}

.mainbtn {
  width: 100%;
  margin: 10px 0;
  height: 40px;
  padding: 8px 0;
}
.btn {
  height: 40px;
  width: 100%;
  margin: 10px 0;
}
.paragraph {
  color: var(--vt-c-gray);
  font-size: 15px;
  margin-top: 25px;
}
@media screen and (max-width: 820px) {
  .container {
    width: 350px;
  }
  .left {
    height: 100%;
    width: 100%;
  }
  .right {
    display: none;
  }
}
</style>
