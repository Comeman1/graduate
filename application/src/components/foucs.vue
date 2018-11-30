<template>
    <div class="banner">
         <!-- 头部导航组件模块 -->
        <headnav></headnav>
        <div class="exponent">
        <router-link to="/" > 
           <img src="../assets/heart.png" alt="">
           <div class="font">
           <span class="say">关注</span>
           <span>0</span>
           </div>
        </router-link>
         <router-link to="/"> 
           <img src="../assets/spon.png" alt="">
           <div class="font"> 
           <span class="say">支持</span>
           <span>0</span>
           </div>
         </router-link>
        </div>
        <div class="please">
            <span>请登录</span>
        </div>
    </div>
</template>
<script>
import headnav from '@/components/headNav/head_nav'
export default {
    name:'foucs',
      components:{
    headnav
  },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.exponent{
    width:100%;
    height:40px;
     text-align:left;
     padding:10px 0 0 10px;
} 
.clearfix::after{
        width:0;
        height: 0;
        line-height: 0;
        visibility: hidden;
        clear: both;
}
.exponent img{
    float:left;
}
.exponent a{
    display:inline-block;
    width:48%;
    height: 100%;
    font-size:10px;
}
.exponent a:first-child{
    border-right:1px solid #eee;
}
 .exponent  .say{
     display: block;
     font-size:8px;
 }
  .exponent .font{
      margin-left:40px;
  }
  .please{
      width:100%;
      height: 300px;
      line-height: 300px;
  }
</style>


