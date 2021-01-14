<template>
  <div class="about page">
    <div class="aboutComponent">


      <img src="../assets/pp.jpg" alt="">
    <Test title="Sabir Barahi" >
      <template v-slot:info>
        <p>I am a student currently stydying Computer Programming at a school called 東京デザインテクノロジーセンター専門学校 in Japan.I have been living and studying here for 3 years now.I love to programme and code,
          love to do projects and constantly learn new things.
        </p>
      </template>


      <template v-slot:info2>
        <p>
          I was born in a country called Nepal the country of Mount everest.My family has a Technical background and I was always around innovative people all my life.I am naturally curious and love trying out new things I love music and love playing guitar and sing.
          I also grew up building the <a href="https://en.wikipedia.org/wiki/Rato_Machindranath_Jatra" style="color:white">Chariot of Machindranath.</a>  
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
.aboutComponent img{
  border: 5px whitesmoke solid;
  border-radius:50%;
  width: 15%;
}
@media(max-width:900px){
  .aboutComponent img{
    visibility: hidden;
  }
  
}

@keyframes bounce {
  0%{
    transform: translateY(-100px);
  }
  50%{
    transform: translateY(10px);
  }
  100%{
    transform: translateY(0);
    
  }
}

</style>


