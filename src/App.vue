<template>
  <router-view />
  
</template>
<style scoped>


</style>
<script>
import { ref,onMounted } from "vue";

export default{
  name : "App",
  setup(){
    const isBeta = ref(true);

    onMounted(() => {
      if(isBeta){
        window.alert("hihi! 歡迎來到SMCL，目前網站正在開發! \n有任何意見或bug歡迎回報：service@smcl.app");
      }
    })

  
  }



}
</script>