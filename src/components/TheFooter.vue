<template>
  <footer>
    <div class="container">
       <div class="foot-divs row">
        <div class="socials col-lg-3 col-md-6 col-xs-12">
            <img  class="logoImage" src="../assets/images/logo.0b6d3ab.svg"/>
            <span class="address">As Sulay, Riyadh Saudi Arabia</span>
            <a class="email">sales@zahaaksa.com</a>
            <span class="phone">966599910168</span>
            <span class="phone">966599910168</span>
            <div class="social-images">
                <ul>
                    <li><a><img src="../assets/images/gmail.e97d341.svg" alt=""></a></li>
                    <li><a><img src="../assets/images/instagram.94a9fb4.svg" alt=""></a></li>
                    <li><a><img src="../assets/images/twitter.7e8817c.svg" alt=""></a></li>
                    <li><a><img src="../assets/images/facebook.cd7efd5.svg" alt=""></a></li>
                </ul>
            </div>
        </div>
        <div class="info col-lg-3 col-md-6 col-xs-12">
            <h2>INFORMATION</h2>
            <ul>
                <li><a href="">Terms & Conditions</a></li>
                <li><a href="">Privacy & Policy</a></li>
                <li><a href="">Return & Exchange</a></li>
                <li><a href="">Shipping & Delivery</a></li>
            </ul>
        </div>
        <div class="links col-lg-3 col-md-6 col-xs-12">
            <h2>QUICK LINKS</h2>
            <ul>
                <li><a href="">My Account</a></li>
                <li><a href="">FAQS</a></li>
               
            </ul>
        </div>
        <div class="letters col-lg-3 col-md-6 col-xs-12">
            <h2>Newsletter</h2>
            <form action="">
                <input type="email" placeholder="Your Email">
                <main-button>Subscribe</main-button>
            </form>
            <h2>Download The App</h2>
            <div class="download-imgs">
                <img src="../assets/images/apple-store.542a9c8.svg"/>
                <img src="../assets/images/google-play.7eb8447.svg" alt="">
            </div>
        </div>
       </div>
    </div>
    <div class="copyright">
        <p>Copyright © 2022 All Rights Reserved | Made With <img src="../assets/images/heart.png" class="icon"/> By <a href="">Alalmiya Alhura</a></p></div>

  </footer>
</template>

<script>
import MainButton from './buttons/mainbutton.vue';
export default {
components:{
    MainButton
}
}
</script>

<style scoped>
footer{
  background-color: #eaf1f9;
  padding-top: 60px;
}
.socials{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: 8px;
    color: var(--vt-c-volite);
}
.socials a{
    color: var(--vt-c-volite);
    text-decoration: none;
    cursor: pointer;
}
.socials a:hover{
    color: var(--vt-c-volite);
}
.socials .logoImage{
    margin-left: 20px;
    margin-bottom: 10px;
}
.socials .social-images ul{
    padding: 0;
    
}
.socials .social-images li{
    margin: 0;
    margin-right: 14px;
}
.socials .social-images img{
    width: 32px;
    
}
.socials .social-images img:hover{
transform: rotate(20deg) scale(1.03);
transition: .3s all ease-in-out;
}
h2{
    width: max-content;
    margin-bottom: 15px;
    color: var(--vt-c-volite);
    font-size: 18px;
    border-bottom: 1px solid var(--vt-c-volite);
    text-transform: uppercase;
    margin-top: 0;
    font-weight: 400;
}
.letters h2{
    border: none;
}
a{
    font-size: 16px;
    font-weight: 400;
}
li{
    padding: 8px 0;
}
.links li{
    float: none;
}
form{
    margin-bottom: 20px;
}
input{
    margin-right: 10px;
    text-align: start;
}
.download-imgs{
    display: flex;
    justify-items: center;
    justify-content: space-between;
    align-items: center;
}
.copyright{
    background-color: white;
    text-align: center;
    padding: 20px 0;
    color: var(--vt-c-gray);
    font-size: 17px;
}
.copyright a{
color: var(--vt-c-volite);
cursor: pointer;
font-weight: 700;
}
.copyright a:hover{
    color: #40a9ff;
}
.copyright p{
    margin: 0;
}
.copyright img{
    left: 0;
    position: relative;
    display: inline-block;
    top: 0;
}
.foot-divs div{
    margin-bottom: 20px;
} 

@media (max-width: 1400px) {
    .download-imgs{
        display: block;
    }
    .download-imgs img{
        margin-bottom: 10px;
    }
    
}
</style>