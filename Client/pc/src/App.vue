<template>
  <div id="app">
    <preciseLogo></preciseLogo>
    <Head></Head>
    <router-view/>
    <div class="arrow" @click="Roof()"  :class="{show:isshow}" v-on:scroll="onScroll">
      <i class="el-icon-back"></i>
      <span>顶部</span>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Head from '@/components/Head';
import preciseLogo from '@/components/preciseLogo';
import Footer from "@/components/IndexContent/Footer";
export default {
  name: 'App',
  components:{
    Head,
    preciseLogo,
    Footer
  },
data(){
return{
    isshow:false,
    onScroll:50
  }
},
methods:{
    Roof(){
 document.documentElement.scrollTop=0
      }
},
mounted(){
  window.addEventListener("scroll",function(e){
// alert("滚动了");
//变量t就是滚动条滚动时，到顶部的距离
var t = window.scrollY;
console.log(t)
if(t < 150){
    this.isshow = true
}
})
}
}

</script>

<style>
div,ul,li,p,span{
  margin:0;
  padding:0;
}
a {
  text-decoration: none;
}
 ul,li{
     list-style-type: none;
 }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(210, 29%, 24%);
}
.arrow{
  width:50px;
  height: 30px;
  position: fixed;
  top:50%;
  right:30px;
  color:#fff;
  font-size:13px;
  line-height: 30px;
  background-color: #71aaf8;
  border-radius: 3px;
  cursor: pointer;
}
.arrow .el-icon-back{
  display: inline-block;
  transform:rotate(90deg);
}
.show{
  display:none;
}
</style>
