<template>
	<div class=wraper>
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
			<el-menu-item class="HomePage" index="1"><router-link to="/">主页</router-link></el-menu-item>
			<el-menu-item index="2"><router-link to="/Book">图书募捐</router-link></el-menu-item>
			<el-menu-item index="3"><router-link to="/com">众筹社区</router-link></el-menu-item>
			<el-menu-item index="4" ><router-link to="/login" >开始众筹</router-link></el-menu-item>
			<el-menu-item index="5"   @click="login"><router-link to="/mes" >消息中心</router-link></el-menu-item>
			<el-submenu index="6">
				<template slot="title">主题公益</template>
				<el-menu-item index="6-1">
         <router-link to="/reg" >申请志愿者</router-link>
          </el-menu-item>
				<el-menu-item index="6-2">
          <router-link to="/reg"> 回访活动</router-link>
          </el-menu-item>
				<el-menu-item index="6-3">
          <router-link to="/"> 精准筹项目组</router-link>
          </el-menu-item>
			</el-submenu>
      <div class="login">
          <router-link to="/lo">登录</router-link><span>|</span><router-link to="/siup">注册</router-link>
          </div>
          <div :class="{tips:istip}">{{tip}}</div>
		</el-menu>
		<div class="line"></div>
	</div>

</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      activeIndex: "6",
      tip:'ok',
      istip:true
    }
  },
methods:{
    login(){
      if(this.tip == ''){
        alert("请登录！");
      this. istip=false
       window.history.back(-1);
      }
    }
   }
}
</script>

<style scoped>
 
.HomePage{
   margin-left:190px;
}
.el-submenu {
  padding-left: 15px;
  color: #000;
}
.wraper li {
   float: left;  
   list-style: none;
 } 
.wraper{
  position: relative;
}
.wraper a {
  width: 80px;
  height: 100%;
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-size: 16px;
  font-weight: 500;
}

.wraper a:hover {
  background-color: #71aaf8;
  color: #fff;
}
.login{
  padding-top:20px;
}
.tips{
  width:50px;
  height: 50px;
  background-color: skyblue;
  position:absolute;
  top:0;
  left:1250px;
  line-height:50px;
  overflow: hidden;
  border-radius:5px;
}
</style>