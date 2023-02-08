import { createApp } from "vue";
// import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";

import store from '@/store/store'
// import {BootstrapVue} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/main.css";
import { MotionPlugin } from '@vueuse/motion'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// import 'mdb-vue-ui-kit/css/mdb.min.css';


// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



// axios

import "./axios.js";

// import axios from 'axios'
// import VueAxios from 'vue-axios'


// import axios from 'axios';
// axios.defaults.baseURL='https://backend.zahaaksa.com/api';


// vuetify
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'


// const vuetify = createVuetify({
//   components,
//   directives,
// })

// import store from './store/auth/index'
// routing components
import TheHome from "./components/TheHome.vue";
import allCategories from "./components/categories/allCategories.vue";
import CategorieDetails from '@/components/categories/CategorieDetails.vue';
import aboutUs from "../src/components/aboutUs.vue";
import contactUs from "../src/components/contactUs.vue";
import hotOffers from '../src/components/hotOffers.vue';
import products from '../src/components/products/products.vue';
import CartComponent from '../src/components/products/CartComponent.vue';
import CheckOut from '../src/components/products/CheckOut.vue';
import ProductDetails from '../src/components/products/ProductDetails.vue';


  // auth
import Login from '../src/views/auth/Login.vue';
import Register from '../src/views/auth/Register.vue';
import Verification from '../src/views/auth/Verification.vue';
import ResetPassword from '../src/views/auth/ResetPassword.vue';


import App from "./App.vue";

//toaster

import Toaster from "@meforma/vue-toaster";

// translation


// creating router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/allCategories", component: allCategories },
    {name:'CategorieDetails', path: "/CategorieDetails/:id", component: CategorieDetails, props:true },
    { path: "/hotOffers", component: hotOffers },
    { path: "/about", component: aboutUs },
    { path: "/contact", component: contactUs },
    {path: '/products' , component:products},
    {path: '/:auth/login' , component:Login},
    {path: '/:auth/register' , component:Register},
    {path: '/:auth/verification' , component:Verification},
    {path: '/:auth/reset_password' , component:ResetPassword},
    {path:'/cartcomponent',component:CartComponent},
    {path:'/checkout',component:CheckOut},
    {name:'ProductDetails' ,path: '/products/ProductDetails/:id' , component:ProductDetails, props:true  },
    
  ],
});



const app = createApp(App);
app.use(router);
app.use(store);
app.use(MotionPlugin);
// app.use(axios)
// app.use(BootstrapVue)
// app.use(BootstrapVueIcons)
// app.prototype.$axios = axios;


app.use(Toaster,{
  position: "bottom-right",
});

// vuetify
// app.use(vuetify);


app.mount("#app");
