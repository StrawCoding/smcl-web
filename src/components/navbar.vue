<template>
<nav class="navbar">
    <div class="logo">
      <a href="/">
          <img src="/public/middlePNG.png" alt="">
          <h1>StrawMinecraftLauncher</h1>
      </a>
    </div>
    <div class="navbar-links">
      <a href="/">🏠首頁</a>
      <a href="/download">📩下載</a>
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

}
</style>
<script>

export default{
    name:"navbar",
}
</script>