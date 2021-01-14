<template>
    <div class="projects page">
        <div class="projectComponent">
        <div class="sns">
            <a href="http://secure-shore-42537.herokuapp.com/login" target="_blank">
            <Test 
            title="sns"
            info="A basic sns website.A work in progress"
            />
             </a>
        </div>
        <div class="login">
            <a href="https://login-system1125.herokuapp.com/" target="_blank">
            <Test
             title="login"
              info="Login system made with PHP"
              />
                </a>
            
        </div>
        <div class="expend">
            <a href="https://github.com/sabi1125/expenditure-tracker" target="_blank">
            <Test
             title="expend" 
            info="Expenditure tracker made in Python"
            />
              </a>
            
        </div>
    </div>
    </div>
</template>


<script>
import Test from "../components/Test";



export default {
  
  name: 'Projects',
  
  components:{
    Test
    }
    }
</script>

<style>

.projects{
    position: absolute;
  height: 100%;
  width: 100%;
  background-color: #F2CC8F;
}
.projects h1{
    font-size: 3em;
    font-style: inherit;
    text-transform: capitalize;
}
.projects a{
    color: #2c3e50;
}
.projects p{
    font-weight: lighter;
    font-size: 1.2em;
    width: 100%;
}

.projectComponent{
     display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.sns{
    right: 300px;
    position: relative;
    animation: 0.5s slide ease;
}
.login{
    position: relative;
    animation: 1.5s slide ease;

}
.expend{
    
    position: relative;
    left: 300px;
    animation: 2s slide ease;

}




@keyframes slide {
    0%{
        transform: translateX(-100px);
    }
    50%{
        transform: translateX(20px);
    }
    100%{
        transform: translateX(0);
    }


    

}





@media(max-width:900px){

.projects h1{
    font-size: 2em;
    font-style: inherit;
    text-transform: capitalize;
}
.projects p{
    font-weight: lighter;
    font-size: 1.2em;
    width: 100%;
}



.sns{
    position: sticky;
    right: 0;
}
.expend{
    
    position: sticky;
    left: 0;
}
}

</style>

