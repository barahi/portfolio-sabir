<template>

<div id="test">

<div class="title">
    <h1>{{ title }}</h1>
</div>


<div class="info">
    <p>{{ info }}</p>
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
    font-size: 2em;
}
</style>