<template>
<nav class="navbar">
    <div class="logo">
      <a href="/">
          <img src="/public/middlePNG.svg" alt="">
          <h1>{{ web_title }}</h1>
      </a>
    </div>
    <div class="navbar-links">
      <a href="/">🏠首頁</a>
      <a href="/download">📩下載</a>
    </div>
    <div class="navbar-bar">
      <i class="fa-solid fa-bars"></i>
    </div>
  </nav>
</template>
<style scoped>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Noto Sans TC", serif;
}
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
  .navbar-bar{
    display: none;
  }

}

@media (max-width:750px) {
  .navbar{
    .navbar-links{
      display: none;
    }
    .navbar-bar{
      display: block;
    }
  }
}
</style>
<script>
import { ref, onMounted, watch } from 'vue';

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
    })

  
    return {
      web_title,
      RWD,
    }
  }
}
</script>