<template>
  <nav class="navbar">
    <div>
      <a href="/">
          <img src="/public/middlePNG.png" alt="">
          <h1>StrawMinecraftLauncher</h1>
      </a>
    </div>
  </nav>
  <main class="main">
    <section></section>
    <section></section>
  </main>
</template>
<style scoped>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}
.navbar{
  display: flex;
  align-items: center;
  position: fixed;
  background-color: #1b1b1f;
  top: 0px;
  left: 0px;
  width: 100dvw;
  height: 64px;
  padding: 10px;

  &>div>a{
    display: flex;
    text-decoration: none;

    img{
      height: 40px;
      border-radius: 10px;
    }

    h1{
      margin-left: 10px;
      color: #FFFFF5DB;
      align-self: center;
    }
  }
}
.main{
  
  section{
    height: 100px;
    &:nth-child(2n+1){
      background-color: #103C3B;
    }
    &:nth-child(2n){
      background-color: #0F131A;
    }
  }
}



</style>
<script>

export default{
  name : "App",
  
  data(){
    return{
      
    }
  }
}
</script>