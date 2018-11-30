<template>
<!-- 底部导航模块 -->
    <div class="bottomnav">
<mt-tabbar v-model="selected" class="bottom">
  <mt-tab-item id="tab1">
    <img class="icon" slot="icon" src="../../assets/start.png">
    <router-link to="/login">发起</router-link>
  </mt-tab-item>
  <mt-tab-item id="tab2">
    <img class="icon" slot="icon" src="../../assets/add.png">
      <router-link to="/">更多</router-link>
  </mt-tab-item>
  <mt-tab-item id="tab3">
    <img class="icon" slot="icon" src="../../assets/mine.png">
   <router-link to="/mine">
   我的
   </router-link>
  </mt-tab-item>
  <mt-tab-item id="tab4">
    <img class="icon" slot="icon" src="../../assets/message.png">
     <router-link to="/mine">消息</router-link>
  </mt-tab-item>
</mt-tabbar>
    </div>
</template>
<script>
export default {
    name:'bottom',
    data(){
        return{
            selected:''
        }
    }
}
</script>
<style scoped>
.bottom{
    position:fixed;
    width:100%;
    height: 70px;
}
a{
    color:#515151;
}

</style>


