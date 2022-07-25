<template>
  <div class="container">
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-caret-right" >
      <el-breadcrumb-item :to="{ path: '/home' }"><span class="nav">首页</span></el-breadcrumb-item>
      <el-breadcrumb-item><span class="nav">用户管理</span></el-breadcrumb-item>
      <el-breadcrumb-item><span class="nav">用户列表</span></el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card >
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加成员</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表区域 -->
      <el-table :data = "userList" border stripe> 
        <el-table-column type="index"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="电话" prop="mobile"></el-table-column>
        <el-table-column label="角色" prop="role_name"></el-table-column>  
        <el-table-column label="状态" >
          <template slot-scope="scope">  
            <el-switch @change="userStateChanged(scope.row)"
              v-model="scope.row.mg_state" >
            </el-switch>
          </template>   
        </el-table-column>  
        <el-table-column label="操作" width="240px">
           <template >
            
            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            <el-button type="danger" icon="el-icon-delete"  size="mini"></el-button>
            <el-tooltip effect="dark" content="调整角色" placement="top" :enterable="false">
             <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
            </el-tooltip>
            
           </template>
        </el-table-column>  
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[1, 2, 5, 10]" 
      :page-size="queryInfo.pagesize"           
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    <!-- 一定注意引号里不要有多余的空格 -->
      </el-pagination>
    </el-card>

    <!-- 添加用户的对话框 -->
    <el-dialog
      title="提示"
      :visible.sync="addDialogVisible"
      width="50%">
      <!-- 内容主体区 -->
      <span>这是一段信息</span>
      <!-- 底部区 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDialogVisible  = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
    name:'MembersOn',
    data() {
      return {
        //获取列表参数对象
        queryInfo:{
          query:'',
          // 当前的页数
          pagenum:1,
          //当前每页显示多少条数据
          pagesize:2,
        },
        userList:[],
        total:0,
        // 控制添加对话框的显示与隐藏
        addDialogVisible:false

      }
    },
    created(){
      this.getUsers()
    },
    methods: {
       async getUsers(){
        const {data: res }= await this.$http.get('users',{params:this.queryInfo})
        if(res.meta.status!=200 ) {return this.$message.error('获取成员列表失败')}
        this.userList = res.data.users
        this.total = res.data.total   
      },
      //监听pagesize改变事件
      handleSizeChange(newSize){
        this.queryInfo.pagesize = newSize;
        this.getUsers() 
      },
      // 监听 页码值改变事件
      handleCurrentChange(newPage){
        this.queryInfo.pagenum =newPage;
        this.getUsers()
      },
      // 监听状态开关的改变
      async userStateChanged(userInfo){
        const {data:res} = await  this.$http.put(`users/${userInfo.id}/state/${userInfo.state}`)
        if(res.meta.status!== 200) {
          userInfo.mg_state  = !userInfo.mg_state
          return this.$message.error('更新用户状态失败')
        }
        this.$message.success('更新用户状态成功')
      }
    },
}
</script>

<style lang="less" scoped>
.container{
  height: 100%;
  border:10px steelblue solid;
  border-radius: 10px;
  background-image:url('../../assets/bar.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.el-breadcrumb{
  font-weight: 900;
  font-size: 1.5em;
  font-style: italic;
  height: 6%;
  margin-top: 1%;
  margin-left: 2%;
  margin-bottom: 1%;
}
.nav{
  color: red;
  text-shadow: -1px 1px 0 black, 1px 1px 0 black; 
}
/deep/.el-breadcrumb__separator{
  color: red;
}
.el-card{
  width: 90%;
  margin:auto;
  background-color: transparent;
}
.el-button{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 0.9em;
  font-weight: 800;
}
.el-table{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-top: 2%;
  font-size: 1.1em;
  font-weight: 800;
  color:steelblue ;
  font-style: italic;
}
.el-pagination{ 
  margin-top: 3%;
  font-size: 2em;
  /deep/span{
    color: steelblue;
    font-weight: 800;
    font-size: 0.5em !important;
  }
}
</style>