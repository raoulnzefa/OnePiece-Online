<template>
  <div class="loginContainer">
    <!-- 关闭登陆界面的按钮 -->
    <el-button @click="closeLogin" class="close-button" type="danger" icon="el-icon-close"></el-button>
    <!-- avatar area -->
    <div class="avatar-box">
      <img src="../assets/luffy.jpeg" alt="">
    </div>
    <!-- 信息 -->
    <h1>出发！向着伟大航路的尽头！</h1>
    <!-- form area -->
    <el-form ref="loginFormRef" label-width="0px" class="form" :model="loginForm" :rules="loginFormRules">
      <!-- 用户名 -->
      <el-form-item prop="username">
        <el-input  placeholder="请输入您的账号" v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input  placeholder="请输入您的密码" type="password" v-model="loginForm.password" prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <!-- 按钮区域 -->
      <el-form-item class="buttons">
        <el-button type="primary" round @click="login">确认登录</el-button>
        <el-button type="danger" round @click="resetLoginForm">重置信息</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'OPLogin',
  data() {
    return {
      // 登陆表单的数据绑定对象
      loginForm:{
        username:'',
        password:'',
      },
      // 表单的验证规则对象
      loginFormRules:{
        //验证用户名是否合法
        username:[{ required: true, message: '请输入用户名称!', trigger: 'blur' },
        {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}],
        //验证密码是否合法
        password:[{ required: true, message: '请输入登录密码!', trigger: 'blur' },
        {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}],
      }
    }
  },
  methods: {
    //关闭登录界面的按钮
    closeLogin(){
      this.$router.push('/start')
    },
    // 点击重置按钮 重置登录表单
    resetLoginForm(){
      this.$refs.loginFormRef.resetFields();
      // this.resetFields()  看到this 心里过一遍this的指向
    },
    login(){
      this.$refs.loginFormRef.validate( valid=>{
        if (!valid) return
        else{
          axios.post('https://mock.presstime.cn/mock/62ceb6ea4d5d850057863f9c/example/upload',this.loginForm)
            .then(res=>{
              if (res.status==200){
                this.$router.push('/home')
              }
            })
        }
        
      })
    }
  }
}
</script>

<style lang="less" scoped>
.loginContainer{
  position:absolute;
  top:10.5%; 
  width: 61%;
  height: 78.9%;
  left: 36%;
  // box-sizing: border-box;
  /* border-width: 10px;
  border-style: solid;
  border-color: black; */
  border: 10px skyblue solid;  
  // 合在一起写要注意如上顺序 否则值无效
  background-color: white;
  border-radius:22px;
  z-index: 5;
  background-image: url(../assets/map.jpeg);
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  overflow: hidden;
}
.close-button{
  position:absolute;
  right: 0;
}
.avatar-box{
  width: 30%;
  height: 40%;
  border: 2px black solid;
  border-radius: 50%;
  padding:2%;
  box-shadow:0 0 10px yellow;
  background-color:darkgoldenrod;

  margin: auto;
  margin-top:3%;
  margin-bottom: 0;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
 
}
h1{
  margin-top:5px;
  margin-bottom:5px;
  text-align: center;
  color: white;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 2em;
  font-weight:888;
  text-shadow: -1px 1px 0 gold, 2px 3px 0 black; 
}
.el-input{
  margin-bottom:2%;
  box-shadow:-2px 2px 4px darkgoldenrod ,2px 2px 4px black;
}
.buttons{
  display: flex;
  justify-content: space-around;
}
.el-button{
  font-size: 18px;
  font-style: bold;
  font-weight: 888;
  border:2px black solid;
}
.form{
  padding:0 20%;
}
/deep/.el-form-item.is-error .el-input__inner{
  border-color:blue;
  font-size:1em;
}
/deep/.el-form-item.is-error .el-input__validateIcon{
  color:blue;
}
/deep/.el-form-item__error{
  margin-top:0;
  padding-top:0;
  color:darkblue;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1.44em;
  font-weight: 888;
  opacity: 0.7;
  position: absolute;
  left: 36%;
}
</style>>
