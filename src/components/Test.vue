<template>

<div id="test">

<div class="title">
    <h1>{{ title }}</h1>
</div>


<div class="info">
    <p>{{ info }}</p>
</div>


<div class="bio">
<div class="bio1">
    <slot name="info"></slot>
</div>


<div class="bio2">
    <slot name="info2"></slot>
</div>

</div>




</div>


</template>



<script>
export default {
    props:["title","info"]
}
</script>







<style>
*{
margin: 0;
padding: 0;
}


.title h1{
    font-weight:lighter;
    font-size: 4em;
    font-style: italic;
    letter-spacing: 0.2em;
}
.info p{
    font-size:2.3em;
}



.bio{
    display: flex;
    width: 70%;
    justify-content: space-between;
    margin: 50px auto;
}

.bio .bio1{
    width: 100%;
}
.bio .bio1 p{
    
    margin: 20px auto;
}

.bio .bio2{
    width: 100%;

}

.bio .bio2 p{
    margin: 100px auto;
}


@media(max-width:900px){
    .title h1{
        font-size: 2em;
    }
    .info p{
        font-size: 1em;
    }
    .bio{
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
            width: 90%;

    }
    
    .bio .bio1{
    padding: 0;
    }

    .bio .bio2{
        padding: 0;
    }
    .bio .bio1 p{
        font-size: 0.8em;
        width: 100%;
        border: none;
    }
    .bio .bio2 p{
        font-size: 0.8em;
        width: 100%;
    }



}



</style>