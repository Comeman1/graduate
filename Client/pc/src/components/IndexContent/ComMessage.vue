<template>
     <div class="L">
                <div class="design">
                  <router-link to="/" title="小钱包：梦想再小也是梦想">
                  <img :src="items.url" alt="">
                  </router-link>
                </div>
                <h3 class="titl">{{ items.title }}</h3>
                <div class="personInfo">
                  <img class="authoPic" :src="items.authorPic" alt="">
                  <div class="cover">
                    <em class="author">{{ items.author }}</em>
                    <em class="el-icon-date"></em>
                    <em class="date">{{ items.date }}</em>
                    <em class="el-icon-view"></em>
                    <em class="views">{{ items.viewsNum }}次</em>
                    <em class="el-icon-message"></em>
                    <em class="replys">{{ items.reply }}次</em>
                  </div>
                </div>
                <div class="explain">
                <p>{{ items.explain }}</p>
              </div>
              </div>
</template>
<script>
export default {
    name:'ComMessage',
    data(){
        return{

        }
    },
    props:['items']
}
</script>
<style scoped>
.L {
  width: 650px;
  height: 165px;
  border-bottom: 1px dashed #ccc;
  margin: auto;
  position:relative;
   padding-top:10px;
}
.design {
  float: left;
  width: 190px;
  height: 130px;
  overflow: hidden;
}
.authoPic{
  display: inline-block;
  position: absolute;
  top:50px;
  left:210px;
  border-radius:50%;
  width:30px;
  height: 30px;
}
.titl{
font-weight: normal;
position: absolute;
top:10px;
left:210px;
font-size:16px;
cursor: pointer;
}
.titl:hover{
  opacity: 0.8;
}
.cover{
  position:absolute;
  top:55px;
  left:240px;
  font-size:12px;
}
.cover em{
  font-style: normal;
  margin-left:10px;
  color:grey;
}
.explain{
  width:450px;
  height: 50px;
  text-overflow: ellipsis;
  text-align: left;
  margin-top:80px;
  font-size:14px;
  margin-left:210px;
  color:grey;
}
</style>

