import { createStore } from "vuex";
import axios from "axios";

import AuthModules from "./auth/auth.js";

export default createStore({
  modules: {
    AuthModules
  },
  
  state: {
    products: [
      {
        id: 1,
        name: "Abaya Linen Sadu",
        slaePrestange: 50,
        rate: 4,
        priceAfter: 200,
        priceBefore: 400,
        img: "http://127.0.0.1:5173/src/assets/images/jellabiya.jpg",
        state: "Avialable",
        description:
          "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves ",
        sizes: [50, 52, 54, 56],
        smallimages: [
          "http://127.0.0.1:5173/src/assets/images/jellabiya.jpg",
          "/src/assets/images/small2.jpg",
          "/src/assets/images/small3.jpg",
          "/src/assets/images/small4.jpg",
        ],
        quantity: 5,
        cat:1,
        colors:['#0d6efd' , '#ccc' , '#830a48']
      },

      {
        id: 2,
        name: "black cloche abaya",
        slaePrestange: 70,
        rate: 3,
        priceAfter: 100,
        priceBefore: 300,
        img: "/src/assets/images/dress2.jpg",
        state: "No Avialable",
        description:
          "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves ",
        sizes: [50, 52],
        smallimages: [
          "/src/assets/images/dress2.jpg",
          "/src/assets/images/small2.jpg",
          "/src/assets/images/small3.jpg",
          "/src/assets/images/small4.jpg",
        ],
        quantity: 3,
        cat:2,
        colors:['#000' , '#ffc107' , '#830a48']
      },

      {
        id: 3,
        name: "Zoom black abaya",
        slaePrestange: 20,
        rate: 1,
        priceAfter: 170,
        priceBefore: 250,
        img: "/src/assets/images/dress3.jpg",
        state: "No Avialable",
        description:
          "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves ",
        sizes: [50, 56],
        smallimages: [
          "/src/assets/images/dress3.jpg",
          "/src/assets/images/small2.jpg",
          "/src/assets/images/small3.jpg",
        ],
        quantity: 5,
        cat:1,
        colors:['#6610f2' , '#dc3545' , '#198754 ']
      },

      {
        id: 4,
        name: "Farasha Embroidery",
        slaePrestange: 62,
        rate: 2,
        priceAfter: 500,
        priceBefore: 760,
        img: "/src/assets/images/dress4.jpg",
        state: "Avialable",
        description:
          "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves ",
        sizes: [50, 52, 54, 56, 58],
        smallimages: [
          "/src/assets/images/dress4.jpg",
          "/src/assets/images/small2.jpg",
          "/src/assets/images/small3.jpg",
        ],
        quantity: 1,
        cat:3,
        colors:['#000' , '#ccc' , '#830a48']
      },

      {
        id: 5,
        name: "Butterfly Abaya Plain",
        slaePrestange: 75,
        rate: 1,
        priceAfter: 300,
        priceBefore: 630,
        img: "/src/assets/images/dress5.jpg",
        state: "Avialable",
        description:
          "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves ",
        sizes: [54, 56],
        smallimages: [
          "/src/assets/images/dress5.jpg",
          "/src/assets/images/small2.jpg",
          "/src/assets/images/small3.jpg",
        ],
        quantity: 4,
        cat:5,
        colors:['#000' , '#ccc' , '#830a48']
      },

      {
        id: 6,
        name: "Abaya Linen Sadu",
        slaePrestange: 50,
        rate: 4,
        priceAfter: 200,
        priceBefore: 400,
        img: "/src/assets/images/jellabiya.jpg",
        state: "No Avialable",
        description:
          "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves ",
        sizes: [50, 52, 54, 56],
        smallimages: [
          "/src/assets/images/jellabiya.jpg",
          "/src/assets/images/small2.jpg",
          "/src/assets/images/small3.jpg",
        ],
        quantity: 7,
        cat:4,
        colors:['#000' , '#ccc' , '#830a48']
      },

      {
        id: 7,
        name: "black cloche abaya",
        slaePrestange: 70,
        rate: 3,
        priceAfter: 100,
        priceBefore: 300,
        img: "/src/assets/images/dress2.jpg",
        state: "Avialable",
        description:
          "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves ",
        sizes: [52, 54, 56],
        smallimages: [
          "/src/assets/images/dress2.jpg",
          "/src/assets/images/small2.jpg",
          "/src/assets/images/small3.jpg",
        ],
        quantity: 5,
        cat:3,
        colors:['#000' , '#ccc' , '#830a48']
      },

      {
        id: 8,
        name: "Zoom black abaya",
        slaePrestange: 20,
        rate: 5,
        priceAfter: 170,
        priceBefore: 250,
        img: "/src/assets/images/dress3.jpg",
        state: "Avialable",
        description:
          "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves ",
        sizes: [50, 52, 54, 56],
        smallimages: [
          "/src/assets/images/dress3.jpg",
          "/src/assets/images/small2.jpg",
          "/src/assets/images/small3.jpg",
        ],
        quantity: 5,
        cat:2,
        colors:['#000' , '#ccc' , '#830a48']
      },

      {
        id: 9,
        name: "Farasha Embroidery ",
        slaePrestange: 62,
        rate: 2,
        priceAfter: 500,
        priceBefore: 760,
        img: "/src/assets/images/dress4.jpg",
        state: "No Avialable",
        description:
          "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves ",
        sizes: [50, 52, 54],
        smallimages: [
          "/src/assets/images/dress4.jpg",
          "/src/assets/images/small2.jpg",
          "/src/assets/images/small3.jpg",
        ],
        quantity: 5,
        cat:1,

        colors:['#000' , '#ccc' , '#830a48']
      },

      {
        id: 10,
        name: "Butterfly Abaya Plain",
        slaePrestange: 75,
        rate: 1,
        priceAfter: 300,
        priceBefore: 630,
        img: "/src/assets/images/dress5.jpg",
        state: "No Avialable",
        description:
          "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves ",
        sizes: [50, 52, 54, 56, 60],
        smallimages: [
          "/src/assets/images/dress5.jpg",
          "/src/assets/images/small2.jpg",
          "/src/assets/images/small3.jpg",
        ],
        quantity: 5,
        cat:3,
        colors:['#0d6efd' , '#ccc' , '#830a48']
      },
      {
        id: 11,
        name: "Butterfly Abaya Plain",
        slaePrestange: 75,
        rate: 1,
        priceAfter: 300,
        priceBefore: 630,
        img: "/src/assets/images/dress2.jpg",
        state: "Avialable",
        description:
          "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves ",
        sizes: [54, 56],
        smallimages: [
          "/src/assets/images/dress5.jpg",
          "/src/assets/images/small2.jpg",
          "/src/assets/images/small3.jpg",
        ],
        quantity: 4,
        cat:4,
        colors:['#000' , '#ffc107' , '#830a48']
      },
    ],
   cart:[],
  currentItemcount:0,


  //  authentaction state 
      // when you authenticate a user , you will need to store 2 things
      // first is token

      // second user information




  },
  getters: {
    products(state) {
      return state.products;
    },
    cart(state){
      return state.cart;
    },
    currentItemcount(state){
      return state.currentItemcount
    },

    // Authentacition Getters
    // isAuthenticated: state => !!state.user,    
    // StateToken: state => state.token,
    // StateUser: state => state.user,

 
},
actions:{
  addToCart(context,payload){
    context.commit('addItemToCart',payload)   
  },
  removeItem(context,payload){
    context.commit('removeItem',payload)   
  },


// authentaction Actions

//  Register Action
// async Register({dispatch}, form) {
//   await axios.post('auth/register', form)
//   let UserForm = new FormData()

//     UserForm.append("full_name", this.fullname);
//     UserForm.append("user_name", this.username);
//     UserForm.append("email", this.email);
//     UserForm.append("phone", this.phone);
//     UserForm.append("password", this.password);
//     UserForm.append("password_confirmation", this.confirmpassword);
//     UserForm.append("device_type", "ios");
//     UserForm.append("device_token", "hgjdashgjdjhaskjdasdas");
//   await dispatch('LogIn', UserForm)
// },








//signIn
async SignIn({dispatch},credentails){
  let response =await axios.post('auth/register',credentails)
  dispatch('attempt',response.data.token)
  console.log(response.data);
},

// async attempt({commit},token){
//   commit('SET_TOKEN',token)

//   try {

//   } catch (error) {
    
//   }
// },

  // login action
  // async LogIn({commit}, User) {
  //   await axios.post('login', User)
  //   await commit('setUser', User.get('username'))
  // },


  // logout action
  // async LogOut({commit}){
  //   let user = null
  //   commit('logout', user)
  // }


},
  mutations:{
    

    addItemToCart(state,payload){
      let item=payload
      item ={...item,qty:1}
      if(state.cart.length>0){
        let bool = state.cart.some(i=>i.id=== item.id)
        if(bool){
          let itemindex = state.cart.findIndex(el=>el.id ===item.id)
          state.cart[itemindex]['qty'] +=1
        }else{
          state.cart.push(item)
          state.currentItemcount++
        }
      }else{
        state.cart.push(item)
        state.currentItemcount++
      }
  
      
    },
    removeItem(state,payload){
      let bool = state.cart.some(i=>i.id=== payload.id)
      if(bool){
        let itemindex = state.cart.findIndex(el=>el.id ===payload.id)
        if (state.cart[itemindex]['qty'] !==0){
          state.cart[itemindex]['qty'] -=1 
        }
      }
    },


      // Authentaction Mutations
    // setUser(state, username){
    //     state.user = username
    // },

    // LogOut(state){
    //     state.user = null
    //     state.token = null
    // },
    SET_TOKEN(state,token){
      state.token=token
    }


  },
  


});
