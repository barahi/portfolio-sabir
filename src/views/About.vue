<template>
  <div class="about page">
    <div class="aboutComponent">


      <img src="../assets/pp.jpg" alt="">
    <Test title="Sabir Barahi" >
      <template v-slot:info>
        <p>I'm a student currently stydying Computer Programming at 東京デザインテクノロジーセンター専門学校 in Japan. I've been living and studying here for 3 years now. I love to code,
          do projects and constantly learn new things.
        </p>
      </template>


      <template v-slot:info2>
        <p>
          I was born in Nepal the country of Mount Everest. My family has a Technical background and I was always around innovative people all my life. I'm naturally curious and love trying out new things. I love music and love playing guitar and singing.
          I grew up building the <a href="https://en.wikipedia.org/wiki/Rato_Machindranath_Jatra" style="color:white">Chariot of Machindranath.</a>  
        </p>
      </template>



    </Test>
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
  background: #293241;
  color: #faf9f9;
  height: 100%;
  width: 100%;
}

.about a{
  color:white;
}

.aboutComponent{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  animation: bounce 1s ease;
}

.aboutComponent h1{
padding: 20px;
  font-size: 2em;
  
}

.aboutComponent p{

  font-size: 1.4em;
  
}
.aboutComponent img{
  border: 5px whitesmoke solid;
  border-radius:50%;
  width: 15%;
}
@media(max-width:900px){
  .aboutComponent img{
    visibility: hidden;
  }
  
.aboutComponent p{

  font-size: 2em;
  
}
  
}

@keyframes bounce {
  0%{
    transform: translateY(-100px);
  }
  50%{
    transform: translateY(20px);
  }
  100%{
    transform: translateY(0);
    
  }
}

</style>


