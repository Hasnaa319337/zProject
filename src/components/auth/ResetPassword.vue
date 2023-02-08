<template>
  <section class="signin">
    <div class="container">
      <!-- second form -->
      <div class="container">
        <div class="left">
          <h1 class="text-center">Reset Password</h1>
          <p class="text-center paragraph">
            Please Enter Your Phone Number Below To Recovery Your Password.
          </p>
          <!-- Verify -->
          <p>{{}}</p>
          <form @submit.prevent="handleForget">
            <input
              type="phone"
              name="phone"
              id="phone"
              v-model="form.phone"
              placeholder="Phone Number"
            />

            <!-- <input
                type="password"
                name="password"
                id="password"
                v-model="form.new_password"
                placeholder="New Password"
                v-if="forget"
              />

              <input
                type="password"
                name="confirm"
                id="confirm"
                v-model="form.confirm_new_password"
                placeholder="Confirm Password"
                v-if="forget"
              /> -->
            <input class="button mainbtn" type="submit" value="Send" />
          </form>
        </div>

        <div class="right"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Mainbutton from "@/components/buttons/mainbutton.vue";
import TheHeader from "@/components/TheHeader.vue";
import axios from "axios";

export default {
  components: {
    Mainbutton,
    TheHeader,
  },

  data() {
    return {
      form: {
        phone: null,
        new_password: null,
        confirm_new_password: null,
      },
    
    };
  },
  computed: {
    userToken() {
      return this.$store.getters.userToken;
    },
  },
  methods: {
    handleForget() {
      const form = new FormData();
      form.append("phone", this.form.phone);
      axios({
        method: "POST",
        url: "/auth/password/forget",
        data: form,
      })
        .then((res) => {
          if (res.data.status == true) {
            localStorage.setItem("phone_number", this.form.phone);
            this.$toast.success(`Code Sent Successfully`);
            this.$router.push("/auth/verification");
          }
        })
        .catch((err) => {
          console.log(err.response.data.msg);
          // console.log(err.request);
          this.$toast.error(`The select Phone Is Invalid`);
        });

      //  else {
      //   const form = new FormData();
      //   form.append("new_password", this.form.new_password);
      //   form.append(
      //     "new_password_confirmation",
      //     this.form.confirm_new_password
      //   );
      //   axios({
      //     method: "POST",
      //     url: "auth/password/reset",
      //     data: form,
      //   })
      //     .then((res) => {
      //       if (res.data.status == true) {
      //         this.$router.push("/auth/login");
      //       }
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // }
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
  height: 70vh;
  /* background-image: url("../../assets/images/log5.jpg"); */
  background: url("https://v1.zahaaksa.com/_nuxt/img/authBgPattern.7b844e4.svg");
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: white;
  display: flex;
  width: 900px;
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

form input {
  width: 100%;
  text-align: center !important;
  display: block;
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

  height: 100%;
  border: 40px solid white;
}
.paragraph {
  color: var(--vt-c-gray);
  font-size: 15px;
  margin-top: 25px;
}
.mainbtn {
  width: 100%;
  margin: 10px 0;
  height: 40px;
  padding: 8px 0;
  text-align: center !important;
}
.btn {
  height: 40px;
  width: 100%;
  margin: 10px 0;
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
