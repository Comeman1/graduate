<template>
<!-- 头部导航模块 -->
    <div class="headnav">
          <div class="nav">
<header class="topnav">
  <router-link to="/" class="content"><img  src="../../assets/content.png" alt=""></router-link>
  <span><router-link to="/foucs">关注</router-link></span>
    <span><router-link to="/">众筹</router-link></span>
    <span><router-link to="/nav">故事</router-link></span>
     <router-link to="/"><img class="search" src="../../assets/search.png" alt=""></router-link>
</header>

    </div>
    </div>
</template>
<script>
export default {
    name:'headnav',
    data(){
        return{
             selected: 'Welcome to Your Vue.js App',
      list:[],
      content:'11'
        }
    }
}
</script>
<style scoped>
.topnav{
  background-color: #515050;
  width:100%;
  height: 50px;
  line-height: 50px;
  position:relative;
}
.topnav span{
  display: inline-block;
  width:20%;
}
.topnav span a{
  color:#fff;
}
.titl{
    color:#fff;
}
.content{
  display:inline-block;
  width:16px;
  height: 16px;
  position:absolute;
  top:3px;
  left:15px;
}
.search{
  position: absolute;
  top:18px;
  right:20px;
}
</style>


