<template>

 
    <el-container class="home-container" >
      <!-- 头部区 -->
      <el-header style="height:20%">
        <div class="header-left">
          <img src="../assets/logo.png" alt="logo">
          <h1>OnePiece.Online</h1>
        </div>
        <el-button round type="primary" @click="logout">exit</el-button>
      </el-header>
      <!-- 页面主体区域 -->
      <el-container> 
        <!-- 侧边栏 -->
        <el-aside width="isCollapse? '64px': '200px' ">
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <!-- 侧边栏菜单区域 -->
          <el-menu unique-opened router
            class="el-menu-vertical-demo"
            background-color="transparent"
            :collapse="isCollapse" :collapse-transition="false"
            >
            <!-- 一级菜单 -->
            <el-submenu :index="item.id +'' " v-for="item in menuList" :key="item.id">
              <!-- 一级菜单模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>{{item.authName}}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item :index="'/home/'+subItem.path" v-for="subItem in item.children" :key="subItem.id" style="padding-left:30px">
                <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{subItem.authName}}</span>
              </template>
              </el-menu-item>
          </el-submenu>
      </el-menu>
        
        </el-aside>
          <!--右侧内容主体  -->     
        <el-main style="padding:0;overflow:hidden;margin:0">  
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>


  
</template>

<script>
export default {
  name:'OPHome',
  data() {
    return {
      //左侧菜单数据
      menuList:[],
      isCollapse:false, 
    }
  },
  created(){
    this.getMenuList()
  },
  methods: {
    logout(){
      this.$router.replace('/start')
      window.sessionStorage.clear()  
    },
    // 获取所有的菜单
    async getMenuList(){
      const { data:res } = await this.$http.get('menus')
      if (res.meta.status !=200)return this.$message.error(res.meta.msg)
      this.menuList = res.data
      // console.log(res)
    },
    // getMenuList(){
    //   this.$http.get('menus')
    //   .then(res=>res.data)
    //   .then(res=>this.menuList = res.data)
    // },
    //点击按钮切换菜单折叠
    toggleCollapse(){
      this.isCollapse = !this.isCollapse  
    }
  },
}
</script>


<style lang="less" scoped>
.home-container{
  margin: 0;
  height: 100%;
}
.el-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border:10px red solid;
  border-radius: 10px;
  box-shadow: 0 7px 15px pink;
  background-image:url('../assets/banner.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .el-button{
    background-color:white;
    color: red;
    font-family:'Courier New', Courier, monospace;
    height: 60%;
    font-style: bold;
    font-size: 1.5em;
    font-weight: 900;
  }
}
.header-left{
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: space-between;
  
  img{
    height: 100%;
   
  }
  h1{
    margin:auto;
    font-size:2em;
    color: whitesmoke;
    font-style: italic;
    text-shadow: -1px 2px 0 black, 1px 3px 0 yellow; 
  }

}
.el-aside{
    background-color:whitesmoke;
    border:5px steelblue solid;
    border-radius: 5px;
    background-image:url('../assets/banner.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .toggle-button{
      background-color: steelblue;
      font-size: 1em;
      line-height: 1em;
      color: white;
      text-align: center;
      letter-spacing: 0.3em;
      cursor: pointer;
    }
    .el-menu{
      border-right: 0;
    }
}

.el-submenu{
  border:2px white solid;
  border-radius: 2px;
  box-sizing:border-box;
  .el-menu-item{
    border:2px white solid;
    box-sizing:border-box;
    padding: 0;
    margin:0;
  }
  span{
    width: 90%;
    color: whitesmoke;
    font-size: 2.5em;
    text-shadow: -2px 2px 0 black, 2px 2px 0 black; 
    font-weight: 900;
  }

}

</style>