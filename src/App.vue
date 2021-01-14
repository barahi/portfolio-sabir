<template>

  <div id="nav">
    
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/projects">Projects</router-link>

  </div>

<transition name="pageTrans" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">

  <router-view/>

</transition>

  
</template>




<script>


export default {


}
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 100%;
  position: fixed;
  padding: 30px;
  z-index: 1;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fcca46;

}



</style>
