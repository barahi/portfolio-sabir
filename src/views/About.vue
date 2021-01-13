<template>
  <div class="about page">
    <div class="aboutComponent">


      <img src="../assets/pp.jpg" alt="">
    <Test 
    title="Sabir Barahi" 
    info = "I am currently studying in Japan as a Higher Diploma student in Computer Programming. I am originally from Nepal.Ever since I was a kid I was really fond of computers
    I loved playing games.I love playing guitar and singing a lot, I love Programming and sometimes spend long hours doing so and forget to do other things. 
    "
    
    />
</div>
  </div>
</template>

<script>
import Test from "../components/Test";



export default {
  
  name: 'About',
  
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
.about{
  position: absolute;
  background:#e07a5f;
  color: #3D405B;
  height: 100%;
  width: 100%;
}
.aboutComponent{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.aboutComponent h1{
padding: 20px;
  font-size: 1.7em;

  
}
.aboutComponent p{
  width: 50%;
  margin: 0 auto;
  padding:20px;
  font-size: 1.2em;
}

.aboutComponent img{
  border-radius:50%;
  max-width: 20%;
  animation: border 10s ease infinite;
}

@keyframes border {

  0%{
    border: 5px #1d3557 solid;
  }
  25%{
        border: 5px white solid;
  }
  50%{
        border: 5px #e63946 solid;
  }
  75%{
    border: 5px #355070 solid;
  }
  100%{
    border: 5px #1d3557 solid;

  }
}





</style>