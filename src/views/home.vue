<template>
  <!-- 接收navbar_vue的事件 -->
  <navbar_vue 
    @toggle-sidebar="sidebarOpen = !sidebarOpen; console.log(sidebarOpen);"
  />
  <!-- 傳入sidebarOpen -->
  <!-- :sidebar-open="sidebarOpen" 的 :sidebar-open只是一個用來傳入的模板 -->
  <sidebar_vue 
    v-bind:sidebar-open="sidebarOpen" 
  />
  <main class="main">
    <section class="hero">
      <div>
        <div class="hero-text">
          <h2>開源Mineraft啟動器</h2>
          <hr>
          <p>新時代Minecraft啟動器，現代介面、跨平台應用</p>
        </div>
        <div class="hero-btn">
          <router-link to="/download">啟動器下載</router-link>
          <a href="https://github.com/StrawCoding/smcl-web" target="_blank">Github</a>
        </div>
      </div>
    </section>
    <section></section>
  </main>
  <footer_vue />
</template>
<style scoped>
.main{
  section{
    background-color: #000000;  

    &:nth-child(1){
      padding-top: 80px;
      height: 100vh;
      display: flex;
      justify-content: center;

      .hero-text{
        justify-items: center;
        margin: 0px 35px;
        margin-top: 100px;

        h2{
          font-size: 48px;
          display: flex;
          color: #FFFFFF;
        }
        hr{
          display: none;
        }
        p{
          font-size: 28px;
          display: flex;
          color: #FFFFFF;
        }

      }
      .hero-btn{
        margin-top: 20px;
        display: flex;
        justify-content: space-around ;
        a{
          transition: all 300ms;
          color: #DCE2E5;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 15px;
          border: 2px solid;
          width: 125px;
          display: flex;
          justify-content: center;
          align-items: center;


          &:nth-child(1){
            border-color: #39A9DB;
            &:hover{
              background-color: #39A9DB;
              color: #000000;
            }
          }
          &:nth-child(2){
            border-color: #FDE047;
            &:hover{
              background-color: #FDE047;
              color: #000000;
            }
          }
        }
      }

    }
  }
}
@media (max-width:660px) {
  .main{
    section{
      &:nth-child(1){
        .hero-text{
          h2{
            font-size: 32px;
          }
          hr{
            width: 100%;
            display: block;
            margin: 3px 0px 10px 0px;

          }
          p{
            font-size: 24px;
          }
        }
      }
    }
  }
}



</style>
<script>
import {ref} from "vue";

import navbar_vue from "../components/navbar.vue";
import footer_vue from "../components/footer.vue";
import sidebar_vue from "../components/sidebar.vue"

export default{
  name : "home",
  
  components: {
    navbar_vue,
    footer_vue,
    sidebar_vue,
  },

  setup(){
    const sidebarOpen = ref(false);

    return{
      sidebarOpen,
    }
  }
}
</script>