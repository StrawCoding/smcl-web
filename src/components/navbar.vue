<template>
<nav class="navbar">
    <div class="logo">
      <router-link to="/">
          <img src="/src/assets/img/middlePNG.svg" alt="">
          <h1>{{ web_title }}</h1>
      </router-link>
    </div>
    <div class="navbar-links">
      <router-link to="/">🏠首頁</router-link>
      <router-link to="/download">📩下載</router-link>
    </div>
    <div class="navbar-btn">
      <a href="#" @click="$emit('toggle-sidebar')" class="sidebar_toggle_bth">
        <i class="fa-solid fa-bars"></i>
      </a>
    </div>
  </nav>
</template>
<style scoped>
.navbar{
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100dvw;
  height: 70px;
  padding: 10px 15px;
  backdrop-filter: blur(10px);

  .logo>a{
    display: flex;
    text-decoration: none;

    img{
      height: 48px;
      border-radius: 10px;
    }

    h1{
      font-size: 30px ;
      margin-left: 10px;
      color: #B0BEC5;
      align-self: center;
    }
  }
  .navbar-links{
    display: flex;
    a{
      transition: all 200ms;
      color: #FFFFFF;
      text-decoration: none;
      margin: 0px 15px;
      font-size: 18px;
      display: flex;
      align-items: center;

      &:hover{
        color: #3DB8A5;
      }
    }
  }
  .navbar-btn{
    display: none;
    margin: 0px 15px;
    a{
      
      i{
        font-size: 32px;
        color: #FFFFFF;
      }
    }

  }

}

@media (max-width:750px) {
  .navbar{
    .navbar-links{
      display: none;
    }
    .navbar-btn{
      display: block;
    }
  }
}
</style>
<script>
import { ref, onMounted } from 'vue';

export default{
  name:"navbar",

  setup() {
    const web_title = ref("StrawMinecraftLauncher");
    const RWD = document.querySelector(".navbar-links");


    function renewSize(){
      if(window.innerWidth <= 750){
        web_title.value = "SMCL";
      }else{
        web_title.value = "StrawMinecraftLauncher";
      }
    }

    onMounted(() =>{
      window.addEventListener("resize", renewSize)
      renewSize();
    })

  
    return {
      web_title,
      RWD,
    }
  }
}
</script>