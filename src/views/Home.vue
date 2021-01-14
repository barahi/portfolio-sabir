<template>
  <div class="home page">
<!-- Add icon library -->

<div class="component">
    
    <Test 
    title="Hi! I'am Sabir Barahi"
    info = "And I am a Programmer"
    />

</div>

<div class="myLinks">


  <a href="https://www.github.com/sabi1125" >

<img alt="Vue logo" src="../assets/github.png">
  </a>
  <a href="mailto:sabir_barahi4@hotmail.com">
<img alt="Vue logo" src="../assets/email.png">
</a>
<a href="https://www.facebook.com/sabir.barahi.5">
<img alt="Vue logo" src="../assets/facebook.png">
</a>

</div>

  </div>
</template>

<script>
import Test from "../components/Test";



export default {
  
  name: 'Home',
  
  components:{
    Test
    }
    }
</script>








<style>
*{
  margin: 0;
  padding: 0;
}
.home{
  position: absolute;
  height: 100%;
  width: 100%;
}
.myLinks{
  position: absolute;
  bottom: 10vh;
  left: 20px;
  width: 4%;
  display: flex;
  flex-direction: column;
}
.myLinks img{
  margin: 3px;
  height: 40px;
  width: 40px;
  transition: 0.5s ease;
}
.myLinks img:hover{
  transform: scale(1.5);
}
.component{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.component h1{
  width: 100%;
}


@media(max-width:900px){
  .component{
    width: 100%;
  }
  .component h1{
    width: 100%;
    font-size: 1.7em;
  }
  .component p{
    font-size: 1.2em;
    margin-top: 10px;
  }
}

</style>

