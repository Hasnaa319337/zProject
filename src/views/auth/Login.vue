<template>
  <section class="signin">
    <div class="container">
      <!-- second form -->
      <div class="container">
        <div class="left">
          <h1>Welcome back</h1>
          <form @submit.prevent="handleLogin">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="email" />

            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
            />

            <router-link to="/auth/reset_password" class="forgetlink"
              >Forget Password ?</router-link
            >

            <input class="button mainbtn" type="submit" value="Sign In" />

            <p class="text-center route_login">
              If you don't have an accont
              <router-link to="/auth/register" class="loginlink"
                >SIGN UP</router-link
              >
            </p>
          </form>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Mainbutton from "@/components/buttons/mainbutton.vue";
import axios from "axios";

export default {
  components: {
    Mainbutton,
  },

  data() {
    return {
      email: null,
      password: null,
      isauth: false,
    };
  },

  computed: {
    ...mapGetters({
      currentUser: "AuthModules/currentUser",
    }),
  },

  methods: {
    handleLogin() {
      const myData = new FormData();

      myData.append("email", this.email);
      myData.append("password", this.password);
      myData.append("device_type", "ios");
      myData.append("device_token", "hgjdashgjdjhaskjdasdas");

      axios({
        method: "POST",
        url: "auth/login",
        data: myData,
      })
        .then((response) => {
          if (response.data.status == true) {
            this.$store.commit("AuthModules/setCurrentUserData", {
              token: response.data.data.token,
              email: response.data.data.email,
              name: response.data.data.full_name,
            });
            this.$toast.success(`You Login Successfully`);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toast.error(error.response.data.msg);
        });
    },
  },
};
</script>

<style scoped>
/* style form */

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
  height: 35px;
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
  background-image: url("../../assets/images/girl.png");
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 100%;
  border: 40px solid white;
}

.route_login {
  margin: 20px 0;
}
.route_login .loginlink {
  text-decoration: underline;
  color: #e7c708de;
}
.forgetlink {
  text-align: end;
  text-align: end;
  margin: 15px 0 8px;
  color: black;
  font-size: 14px;
  text-transform: initial;
}
.mainbtn {
  margin-top: 12px;
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
