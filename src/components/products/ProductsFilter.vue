<template>
  <section>
    <a class="bars" @click="showSideNav"
      ><img src="../../assets/images/sort.6756c63.svg"
    /></a>
    <div class="filtersection">
      <transition name="filtershow">
        <div class="overlay" @close="hideSideNav" v-if="sideNavIsVisable">
          <div class="close" @click="hideSideNav"></div>

          <div class="products_filter">
            <form @submit.prevent="myMethod">
              <div class="allfiltergroups">
                <!-- new contain  -->

                <MDBAccordion
                  v-model="activeItem"
                  stayOpen
                  class="MDBAccordionItem"
                >
                  <!-- categories box -->
                  <MDBAccordionItem
                    headerTitle=" Product type"
                    collapseId="stayOpen-collapseOne"
                  >
                    <div class="filter_list shown_list">
                      <ul class="filter_categorie_list">
                        <li class="filter_categorie">
                          <div class="filter_category_view">
                            <input
                              type="radio"
                              name="filter_categories"
                              id="sale_categories"
                              class="form-check-input"
                            />
                            <label for="sale_categories">Sale Upto 60%</label>
                          </div>
                        </li>
                        <li class="filter_categorie">
                          <div class="filter_category_view">
                            <input
                              type="radio"
                              name="filter_categories"
                              id="sale_categories"
                              class="form-check-input"
                            />
                            <label for="sale_categories">Jellabiya</label>
                          </div>
                        </li>
                        <li class="filter_categorie">
                          <div class="filter_category_view">
                            <input
                              type="radio"
                              name="filter_categories"
                              id="sale_categories"
                              class="form-check-input"
                            />
                            <label for="sale_categories">Faracha</label>
                          </div>
                        </li>
                        <li class="filter_categorie">
                          <div class="filter_category_view">
                            <input
                              type="radio"
                              name="filter_categories"
                              id="sale_categories"
                              class="form-check-input"
                            />
                            <label for="sale_categories">Cloche</label>
                          </div>
                        </li>
                        <li class="filter_categorie">
                          <div class="filter_category_view">
                            <input
                              type="radio"
                              name="filter_categories"
                              id="sale_categories"
                              class="form-check-input"
                            />
                            <label for="sale_categories">Abaya</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </MDBAccordionItem>

                  <!-- size box -->
                  <MDBAccordionItem
                    headerTitle="size"
                    collapseId="stayOpen-collapseTwo"
                  >
                    <div class="filter_list shown_list">
                      <div class="size_buttons">
                        <button v-for="size in sizedata" :key="size">
                          {{ size.TheSize }}
                        </button>
                      </div>
                    </div>
                  </MDBAccordionItem>

                  <!-- rate box -->
                  <MDBAccordionItem
                    headerTitle="Rate"
                    collapseId="stayOpen-collapseThree"
                  >
                    <div class="rate_list filter_list shown_list" v-if="up">
                      <div class="filter_rate_list">
                        <div class="filter_rate_view">
                          <SPAN class="span"></SPAN>
                          <SPAN class="span"></SPAN>
                          <SPAN class="span"></SPAN>
                          <SPAN class="span"></SPAN>
                          <SPAN class="span"></SPAN>
                        </div>
                      </div>
                    </div>
                  </MDBAccordionItem>


                </MDBAccordion>
              </div>

              <mainbutton class="btn" type="submit">Apply</mainbutton>
            </form>
            <div class="reset">
              <mainbutton class="btn">Reset</mainbutton>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div class="products_filter largefilter">
      <form @submit.prevent="myMethod">
        <div class="allfiltergroups">
          <!-- new contain  -->

          <MDBAccordion v-model="activeItem" stayOpen class="MDBAccordionItem">
            <!-- categories box -->
            <MDBAccordionItem
              headerTitle=" Product type"
              collapseId="stayOpen-collapseOne"
            >
              <div class="filter_list shown_list">
                <ul class="filter_categorie_list">
                  <li class="filter_categorie">
                    <div class="filter_category_view">
                      <input
                        type="radio"
                        name="filter_categories"
                        id="sale_categories"
                        class="form-check-input"
                      />
                      <label for="sale_categories">Sale Upto 60%</label>
                    </div>
                  </li>
                  <li class="filter_categorie">
                    <div class="filter_category_view">
                      <input
                        type="radio"
                        name="filter_categories"
                        id="sale_categories"
                        class="form-check-input"
                      />
                      <label for="sale_categories">Jellabiya</label>
                    </div>
                  </li>
                  <li class="filter_categorie">
                    <div class="filter_category_view">
                      <input
                        type="radio"
                        name="filter_categories"
                        id="sale_categories"
                        class="form-check-input"
                      />
                      <label for="sale_categories">Faracha</label>
                    </div>
                  </li>
                  <li class="filter_categorie">
                    <div class="filter_category_view">
                      <input
                        type="radio"
                        name="filter_categories"
                        id="sale_categories"
                        class="form-check-input"
                      />
                      <label for="sale_categories">Cloche</label>
                    </div>
                  </li>
                  <li class="filter_categorie">
                    <div class="filter_category_view">
                      <input
                        type="radio"
                        name="filter_categories"
                        id="sale_categories"
                        class="form-check-input"
                      />
                      <label for="sale_categories">Abaya</label>
                    </div>
                  </li>
                </ul>
              </div>
            </MDBAccordionItem>

            <!-- size box -->
            <MDBAccordionItem
              headerTitle="size"
              collapseId="stayOpen-collapseTwo"
            >
              <div class="filter_list shown_list">
                <div class="size_buttons">
                  <button v-for="size in sizedata" :key="size">
                    {{ size.TheSize }}
                  </button>
                </div>
              </div>
            </MDBAccordionItem>

            <!-- rate box -->
            <MDBAccordionItem
              headerTitle="Rate"
              collapseId="stayOpen-collapseThree"
            >
              <div class="rate_list filter_list shown_list" v-if="up">
                <div class="filter_rate_list">
                  <div class="filter_rate_view">
                    <SPAN class="span"></SPAN>
                    <SPAN class="span"></SPAN>
                    <SPAN class="span"></SPAN>
                    <SPAN class="span"></SPAN>
                    <SPAN class="span"></SPAN>
                  </div>
                </div>
              </div>
            </MDBAccordionItem>

            <!-- colors box -->
            <MDBAccordionItem
              headerTitle="colors"
              collapseId="stayOpen-collapseTwo"
            >
              <div class="filter_list shown_list">
                <div class="colors">
                  <input
                    v-for="color in colors"
                    :key="color"
                    type="color"
                    class="form-control form-control-color"
                    id="exampleColorInput"
                    :value="color"
                    title="Choose your color"
                  />
                </div>
              </div>
            </MDBAccordionItem>
          </MDBAccordion>
        </div>

        <mainbutton class="btn mainbtn" type="submit">Apply</mainbutton>
      </form>
      <div class="reset">
        <mainbutton class="btn mainbtn">Reset</mainbutton>
      </div>
    </div>
  </section>
</template>

<script>
import Mainbutton from "../buttons/mainbutton.vue";
import { MDBAccordion, MDBAccordionItem } from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  components: {
    Mainbutton,
  },
  data() {
    return {
      sideNavIsVisable: false,

      up: true,
      display_state: "",
      sizedata: [
        { TheSize: 50 },
        { TheSize: 52 },
        { TheSize: 54 },
        { TheSize: 56 },
        { TheSize: 58 },
        { TheSize: 60 },
        { TheSize: "xl" },
        { TheSize: "2xl" },
        { TheSize: "3xl" },
        { TheSize: "4xl" },
      ],
      colors: [
        "#563d7c",
        "#52004a",
        "#2c3e50",
        "#f8f8f8",
        "#b1f2c8",
        "#d5l9e4",
        "#c5c5c5",
      ],
    };
  },
  components: {
    MDBAccordion,
    MDBAccordionItem,
  },
  setup() {
    const activeItem = ref("stayOpen-collapseOne");
    return {
      activeItem,
    };
  },
  methods: {
    showlist(e) {
      this.up = !this.up;
      if (this.up === true) {
        this.display_state = "none";
      } else {
        this.display_state = "block";
      }
    },
    showSideNav() {
      this.sideNavIsVisable = true;
    },
    hideSideNav() {
      this.sideNavIsVisable = false;
    },
  },
};
</script>

<style >
/* filter section */
.filtersection {
  position: relative;
}
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  /* background-color: #000000bf; */
  background-color: rgba(225, 225, 225, 0.5);
  z-index: 100;
  display: none;
}
.close {
  z-index: 1;
  position: relative;
  width: 22px;
  height: 28px;
  margin: 20px 20px 25px auto;
  text-align: right;
  font-style: initial;
  letter-spacing: initial;
  font-weight: initial;
  display: block;
  cursor: pointer;
  color: red;
}
.close::before {
  content: "\2715";
  font-size: 28px !important;
}
.close:hover {
  animation: closeAnimation ease-in-out 0.8s;
}
.bars {
  cursor: pointer;
  display: none;
}
.filter_group_name {
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 1;
  min-height: 48px;
  border: none;
  outline: none;
  padding: 5px 24px;
  position: relative;
  width: 100%;
  color: var(--vt-c-volite);
  background: transparent;
  text-transform: uppercase;
  font-weight: 600;
  justify-content: space-between;
}

@media (max-width: 999px) {
  .largefilter {
    display: none;
  }
  .overlay {
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    min-height: 460vh;
    max-height: 100vh;
    padding: 25px;
    backdrop-filter: blur(5px);
    z-index: 4;
    transition: all 0.5s linear;
  }
  .ordercontain {
    background: white;
  }
  .bars {
    display: block;
    margin: 10px;
    width: 10px;
  }

  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    cursor: pointer;
    color: #a1a1a1;
  }
}
@media (max-width: 767px) {
  .overlay {
    display: block;
    min-height: 920vh;
  }
}
.filtershow-enter-from {
  transform: translatex(-50px);
}
.filtershow-enter-active {
  transition: 0.3s ease-out;
}
.filtershow-enter-to {
  transform: translatex(0);
}
.filtershow-leave-from {
  transform: translatex(0);
}

.filtershow-leave-active {
  transition: 0.3s ease-in;
}
.filtershow-leave-to {
  transform: translatex(-50px);
}
.up_down_icon img {
  width: 44px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.products_filter {
  margin: auto;
  width: 80%;
}

.filter_categorie_list {
  overflow: hidden;
  padding-left: 16px;
}
.filter_categorie {
  float: none;
  padding: 7px 0;
}
label {
  margin-left: 11px;
  font-size: 18px;
  font-family: initial;
}

.form-check-input:checked {
  background-color: var(--vt-c-volite);
  border-color: var(--vt-c-volite);
}
.up_down_icon img {
  width: 44px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.btn {
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid var(--vt-c-volite);
}
.ordercontain {
  border-radius: 4px;
  /* display: flex; */
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  width: 100%;
  border: 1px solid #cccccc87;
  margin-bottom: 10px;
  overflow: hidden;
}

/* size box */
.filter_size {
  /* float: left; */
  padding: 3px;
  width: 45px;
  height: 45px;
}
.filter_size_view {
  position: relative;
}
.filter_size_list {
  display: grid;
  grid-template-columns: repeat(5, 16%);
  padding-left: 9px;
  overflow: hidden;
}
.filter_size_view input {
  width: 47px;
  height: 42px;
  border-radius: 0;
  pointer-events: none;
  /* border: 1px solid var(--vt-c-volite); */
}
.filter_size_view input:active {
  border: 1px solid var(--vt-c-volite);
}
.filter_size_view label {
  position: absolute;
  top: 5px;
  left: 3px;
  cursor: pointer;
}

/* rate box */
.rate_list {
  margin-bottom: 20px;
}
.filter_rate_list {
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
}

.span {
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  width: 25px;
  height: 25px;

  font-size: 26px;
  background: #adb5bd;
  display: block;
  float: left;
  margin-right: 8px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
}
/* span:hover {
  background-color: #fdbc29;
  transition: 0.2s all ease-in-out;
} */

.filter_rate_view span:hover {
  background-color: #fdbc29;
}

/* new rate */
.rate {
  float: left;
  height: 46px;
  padding: 0 10px;
}
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}
.sizebox {
  color: black;
}
.rate:not(:checked) > label:before {
  content: "★ ";
}
.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}

.size_buttons {
  display: flexbox;
  justify-items: center;
  align-items: center;
  justify-content: center;
}
.size_buttons button {
  background: transparent;
  border: 1px solid #cccccc91;
  font-size: 17px;
  padding: 6px 13px;
  color: #000;
  width: 50px;
  margin-right: 3px;
  margin-bottom: 3px;
}
.size_buttons button:focus,
.colors input:focus {
  border: 1px solid var(--vt-c-volite);
  box-shadow: 0.1px 0.1px 1px var(--vt-c-volite);
}
.colors input {
  border: none;

  width: 45px;
  height: 34px;
  border-radius: 0 !important;
}
.colors {
  display: grid;
  grid-template-columns: repeat(5, auto);
}

.accordion-button:not(.collapsed) {
  color: var(--vt-c-volite);
  background: transparent;
}
.accordion-button {
  font-size: 16px;
  font-family: inherit;
}
.accordion-header {
  border-bottom: 0;
}
.accordion-button:focus {
  z-index: 3;
  border-color: none;
  outline: 0;
  box-shadow: none;
}
</style>
