<template>
  <navbar_vue />
  <main class="main">
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
      height: 100dvh;
    }
  }
}
</style>
<script>
import navbar_vue from "../components/navbar.vue"
import footer_vue from "../components/footer.vue"

export default{
  name:"downlaod",
  components: {
    navbar_vue,
    footer_vue
  },
  data(){
    return{

    }
  }
}
</script>