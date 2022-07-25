<template>
 
 <div class="welcome" >
     <h1>Ready to go?</h1>
</div>

</template>

<script>
export default {
  name:"HomeWelcome"
}
</script>

<style lang="less" scoped>

.welcome{
  margin:0;
  height: 100%;
  width: 100%;
  border:8px lightyellow solid;
  border-radius: 15 px;
  background-image:url('../assets/back.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
}
h1{
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 4em;
  font-style: italic;
  color: whitesmoke;
  margin-top: 3%;
}
</style>
