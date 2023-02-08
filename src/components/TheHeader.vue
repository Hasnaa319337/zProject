<template>
  <header>
    <!-- hidden navbar -->
    <transition>
      <div class="overlay" @close="hideSideNav" v-if="sideNavIsVisable">
        <div class="close" @click="hideSideNav"></div>
        <div class="list">
          <ul class="list">
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="/allCategories">CATEGORIES</router-link></li>
            <li><router-link to="/hotOffers">HOT OFFERS</router-link></li>
            <li><router-link to="/products">ALL PRODUCTS</router-link></li>
            <li><router-link to="/about">ABOUT US</router-link></li>
            <li><router-link to="/contact">CONTACT US</router-link></li>
          </ul>
        </div>
      </div>
    </transition>

    <!-- shown navbar -->
    <div class="container">
      <div class="contain">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/images/logo.0b6d3ab.svg" />
          </router-link>
        </div>

        <nav>
          <ul class="list">
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="/allCategories">CATEGORIES</router-link></li>
            <li><router-link to="/hotOffers">HOT OFFERS</router-link></li>
            <li><router-link to="/products">ALL PRODUCTS</router-link></li>
            <li><router-link to="/about">ABOUT US</router-link></li>
            <li><router-link to="/contact">CONTACT US</router-link></li>
          </ul>
        </nav>
        <div class="buttons">
          <div class="bag_div" v-if="currentUser.token">
            <button
              class="bag_icon"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-handbag"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"
                />
              </svg>
            </button>
            <span class="count_items">{{ currentItemcount }}</span>
          </div>

          <form action="" class="search-form">
            <img
              src="../assets/images/searchIcon.gif"
              alt="search-icon"
              class="icon"
            />

            <input
              class="headerSearch"
              type="text"
              placeholder="search"
              v-model="searchValue"
              @blur="returnMyWidth"
              @click="changeWidth"
              :style="{ width: myWidth + 'px' }"
            />
          </form>
          <router-link to="/auth/register" v-if="!currentUser.token">
            <main-button class="main">Register Now</main-button>
          </router-link>

          <main-button class="main" v-else @click="logout">LOGOUT</main-button>
        </div>
        <a class="bars" @click="showSideNav"
          ><img src="../assets/images/menu_FILL0_wght400_GRAD0_opsz48.png"
        /></a>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import mainButton from "./buttons/mainbutton.vue";

export default {
  components: { mainButton },
  data() {
    return {
      sideNavIsVisable: false,
      checkClick: false,
      myWidth: "170",
      searchValue: "",
    };
  },
  computed: {
    ...mapGetters({
      currentItemcount: "currentItemcount",
      currentUser: "AuthModules/currentUser",
    }),
  },

  methods: {
    showSideNav() {
      this.sideNavIsVisable = true;
    },
    hideSideNav() {
      this.sideNavIsVisable = false;
    },
    changeWidth() {
      this.myWidth = "220";
      console.log(this.currentItemcount);
    },
    returnMyWidth() {
      this.myWidth = "170";
      if (this.searchValue === "") return (this.myWidth = "170");
      else {
        return (this.myWidth = "220");
      }
    },
    logout() {
      this.$store.commit("AuthModules/Logout");
      this.$toast.success(`You Logout Successfully`);
    },
  },
};
</script>

<style scoped>
header {
  overflow: hidden;
  /* background-image: linear-gradient(45deg, #fefefe, #52004a); */
}
.contain {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
}
.logo {
  cursor: pointer;
}
.logo img {
  object-fit: cover;
  width: 55px;
}
router-link {
  color: var(--vt-c-gray);
  text-transform: uppercase;
  transition: all 0.3s linear;
  cursor: pointer;
}
.router-link-active,
.router-link-exact-active {
  color: var(--vt-c-volite);
}
.buttons {
  display: flex;
  align-items: center;

  justify-items: center;
}
.search-form {
  position: relative;
  margin-right: 10px;
}

.headerSearch {
  transform: scaleX(1.03);
  height: 50px;
  transition: 0.3s all ease-in-out;
}

.bars {
  cursor: pointer;
  display: none;
}

.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #000000bf;
  z-index: 100;
  display: none;
}

.close {
  z-index: 1;
  position: relative;
  width: 22px;
  height: 28px;
  margin: 20px 20px 0 auto;
  text-align: right;
  font-style: initial;
  letter-spacing: initial;
  font-weight: initial;
  display: block;
  cursor: pointer;
  color: #fff;
}
.close::before {
  content: "\2715";
  font-size: 28px !important;
}
.close:hover {
  animation: closeAnimation ease-in-out 0.8s;
  color: var(--vt-c-volite);
  transition: 0.3s all ease-in-out;
}

.v-enter-from {
  transform: translatex(-50px);
}
.v-enter-active {
  transition: 0.3s ease-out;
}
.v-enter-to {
  transform: translatex(0);
}
.v-leave-from {
  transform: translatex(0);
}

.v-leave-active {
  transition: 0.3s ease-in;
}
.v-leave-to {
  transform: translatex(-50px);
}

@media (max-width: 1200px) {
  .overlay {
    display: block;
    backdrop-filter: blur(5px);
  }
  .contain {
    display: grid;
    grid-template-columns: repeat(4, 50% 10% 32% 8%);
  }
  .bars {
    display: block;
  }
  .list {
    text-align: center;
    margin: auto;
    margin-top: 1.5rem;
  }
  ul {
    list-style: none;
  }
  li {
    font-size: 1.3rem;
    padding: 15px 0;
    display: block;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    cursor: pointer;
    color: #a1a1a1;
  }
  .contain nav .list {
    display: none;
  }
  .main {
    display: none;
  }
}

/* @keyframes closeAnimation {
  0% {
    transform: rotateZ(0);
  }
  25% {
    transform: rotateZ(90deg);
  }
  50% {
    transform: rotateZ(180deg);
  }
  75% {
    transform: rotateZ(270deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
} */
@media (max-width: 760px) {
  .bars img {
    width: 35px;
    margin-left: 25px;
    height: 45px;
  }
}
@media (max-width: 580px) {
  nav {
    display: none;
  }
  .contain {
    display: flex;
    /* grid-template-columns: repeat(3, 60%, 30%, 10%) !important; */
    /* grid-template-columns: repeat(4, 50% 10% 32% 8%); */
  }
}

.bag_icon {
  margin-right: 13px;
  border: 0;
  background: none;
  color: var(--vt-c-gray);
  transition: 0.5s all ease-in-out;
}
.bag_icon:hover {
  color: var(--vt-c-volite);
  transition: 0.5s all ease-in-out;
}
.count_items {
  min-width: 16px;
  height: 16px;
  font-size: 11px;
  background: #ecb737;
  color: var(--vt-c-volite);
  font-weight: 800;
  position: absolute;
  top: -1px;
  right: 12px;
  text-align: center;
  line-height: 15px;
  border-radius: 50%;
}
</style>
