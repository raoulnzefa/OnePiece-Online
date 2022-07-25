<template>
  <el-container class="main-container">
    <router-view></router-view>
    <!-- Header -->
    <el-header>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color = black
        text-color="white"
        active-text-color="#ffd04b">
    <el-menu-item index="1">商城简介</el-menu-item>
    <el-submenu index="2">
      <template slot="title"><span class="slot-font">使用指南</span></template>
      <el-menu-item index="2-1">注册指南</el-menu-item>
      <el-menu-item index="2-2">登陆指南</el-menu-item>
      <el-menu-item index="2-3">反馈问题</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title"><span class="slot-font">常见问题</span></template>
        <el-menu-item index="2-4-1">商场相关</el-menu-item>
        <el-menu-item index="2-4-2">账号丢失</el-menu-item>
        <el-menu-item index="2-4-3">无法访问</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3"> 充值中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.eating.work" target="_blank">作者博客</a></el-menu-item>
       </el-menu>
    </el-header>
    <!-- Main content -->
    <el-container>
        <!-- sideBar -->
        <el-aside width="33%">
          <h1 :style={opacity}>OnePiece.Online</h1>
        </el-aside>
        <!-- Main content -->
      <el-container class="main-content">
        <el-main>
          <h2> <strong>ONEPIECE</strong><br> <span style="color:#409EFF;" >主题 UI</span> <br>
            商城后台 </h2>
        <!--function buttons  -->
        <div class="buttons">
          <el-button type="primary" @click="showLogin">登 录 系 统</el-button>
          <el-button type="success">注 册 账 号</el-button>
          <el-button type="warning">配 置 信 息</el-button>
          <el-button type="danger">开 发 模 式</el-button>
        </div>
        <img :style={opacity:opacityBox} src="../assets/treasures.png" alt="treasures">
        </el-main>
        <el-footer>
          <h3>&copy; A demo-website made by Alex Liu from Group 1 , guided by professor Xiong. 2022.7</h3>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name:'OPHome',
  data(){
    return {opacity:1,
            opacityBox:1,
        activeIndex: '1',
        activeIndex2:'1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    showLogin(){
      this.$router.push({
        path:'/start/login'
      })
    },
  },

  mounted() {
    setInterval(()=>{
      this.opacity -= 0.007;
      this.opacityBox -= 0.004;
      if(this.opacity <= 0)
      this.opacity = 1;  
      if(this.opacityBox <= 0)
      this.opacityBox = 1;   
    },16);
  },
  
  // setInterval(()=>{
  //     this.opacityBox -= 0.007;
  //     if(this.opacityBox <= 0)
  //     this.opacityBox = 1;  
  //   },16)   ???
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
}
body{
  height: 100%;
}
.main-container{
  //position:fixed;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background:linear-gradient(pink,grey,white);
  
}
.el-header{
 margin-top:1%;
}
.el-aside{
  //width: 100%;
  overflow: hidden;
  height: 96%;
  background-image: url(../assets/luff.jpeg);
  background-repeat: no-repeat;
  background-size:cover;
  margin-top: 1%;
  margin-left: 2%;
  padding-bottom: 1%;
  background-position: center;
  border-radius: 2%;
  border:5px orange solid;
  box-shadow:0 0 10px yellow;
}
.main-content{
  margin-top:1%;
  width: 60%;
  margin-left: 2%;
}
.el-main{
  background-image: url(../assets/background.jpeg);
  background-repeat: no-repeat;
  background-size:cover;
  margin-right:2%;
  background-position: center;
  border:5px orange solid; //中间不能加逗号
  border-radius: 2%;
  display: flex;
  overflow: hidden;
  box-shadow:0 0 10px yellow;
}
.el-menu-demo{
  display: flex;
  justify-content: space-around;
  border-radius: 2%;
  opacity: 0.77;
}
.el-menu-item{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.2em;
  font-weight:888;
}
.slot-font{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.6em;
  font-weight:888;
}
h1{
  margin: 0;
  margin-top:1%;
  color:white;
  text-align: center;
  font-size: 3em;
  font-weight:888;
  text-shadow:0 0 10px pink,0 0 20px pink,0 0 30px red,0 0 40px red;
}
h2{
  width: 50%;
  font-size: 3em;
  color:darkolivegreen;
  font-style:italic;
  opacity: 0.88;
  padding-top: 5%;
  margin-left: 10%;
  text-shadow: -2px 2px 0 gold, 2px 2px 0 black; 
}
h3{
  font-style: italic;
  text-align: center;
  margin-top: 15px;
  color: grey;
}
.buttons{
  display:flex;
  flex-direction: column;
  height: 60%;
  width: 25%;
  justify-content: space-around;
  margin-left: 0;
  margin-top:5% ;
}
.el-button{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1em;
  border: black 1px solid;
  font-weight: 888;
}
img{
  height: 15%;
  width: 8%;
  position: relative;
  padding-top: 55%;
  margin-left:5%;
}
.el-button+.el-button, .el-checkbox.is-bordered+.el-checkbox.is-bordered{
    margin-left: 0px;
}
</style>