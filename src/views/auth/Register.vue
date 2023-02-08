<template>
  <section class="signin">
    <div class="container">
      <!-- second form -->
      <div class="container">
        <div class="left">
          <h1>Sign Up</h1>
          <!-- <p>create a new account</p> -->
          <form @submit.prevent="handleSubmit" >
            <label for="name">Full Name</label>
            <input type="text" name="name" id="name" v-model="form.fullname" />

            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              v-model="form.username"
            />

            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="form.email" />

            <label for="phone">Phone Number</label>
            <input type="phone" name="phone" id="phone" v-model="form.phone" />

            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="form.password"
            />

            <label for="confirm">Confirm Password</label>

            <input
              type="password"
              name="confirm"
              id="confirm"
              v-model="form.confirmpassword"
            />

            <input class="button mainbtn" type="submit" value="Sign Up" />
          </form>

           
     
          <p class="text-center ploginlink">
            I have an account
            <router-link to="/auth/login" class="loginlink">LOGIN</router-link>
          </p>
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
import { useStore, mapGetters } from "vuex";
import { mapActions } from "vuex";
import VerificationComponent from "../../components/auth/VerificationComponent.vue";
import store from "../../store/store";
export default {
  components: {
    Mainbutton,
    TheHeader,
    VerificationComponent,
  },

  data() {
    return {
      form: {
        fullname: null,
        username: null,
        email: null,
        phone: null,
        password: null,
        confirmpassword: null,
      },
      showError: false,
      code: null,
    };
  },
  computed:{    
    ...mapGetters({
      
      currentUser: "AuthModules/currentUser"
    })    
  },
 
  methods: {
    handleSubmit() {
      const form = new FormData();
      form.append("full_name", this.form.fullname);
      form.append("user_name", this.form.username);
      form.append("email", this.form.email);
      form.append("phone", this.form.phone);
      form.append("password", this.form.password);
      form.append("password_confirmation", this.form.confirmpassword);
      form.append("device_type", "ios");
      form.append("device_token", "hgjdashgjdjhaskjdasdas");
      axios({
        method: "POST",
        url: "auth/register",
        data: form,
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.status == true) {
    
            localStorage.setItem("token", res.data.data.token);
          


            this.$toast.success(`You register Successfully`);
                    this.$router.push("/auth/verification");
          }
        })
        .catch((err) => {
          console.log(err);
          this.$toast.error(err.response.data.msg);
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
  height: 80vh;
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
.ploginlink {
  margin-top: 10px;
}
.loginlink {
  text-decoration: underline;
  color: #e7c708de;
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
