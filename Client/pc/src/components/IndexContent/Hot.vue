<template>
             <!-- 每个项目简述展示 -->
     <div class="contentCard">
               <ul>
                 <li class="imgDisplay">
                    <router-link to="/projectdetails">
                   <img class="images" :src="items.BookImg" alt="">
                    </router-link>
                 </li>
               <li class="titleInfo">
                 <router-link to="/">
                   {{ items.title }}
                 </router-link>
               </li>
               <li class="textContent">
                 <span>
                    {{ items.textContent }}
                 </span>
               </li>
               <li class="address">
                 <span class="el-icon-edit-outline"> </span>
                 <router-link to="/">{{ items.province }}</router-link>
                 <router-link to="/">{{ items.city }}</router-link>
                 <router-link to="/">{{ items.goods }}</router-link>
                 <router-link to="/">{{ items.company }}</router-link>
                 <router-link to="/">定制</router-link>
               </li>
               </ul>
               <div class="progress">
                 <el-progress :text-inside="true" :stroke-width="6" :percentage="num" :show-text="false"></el-progress>
               </div>
               <div class="selectInfo clearfix">
               <ul>
                 <li>
                   <span class="money">￥{{ items.money }}</span>
                   <p>已筹款</p>
                 </li>
                 <li>
                    <span class="num">{{ items.num }}</span>
                   <p>支持数</p>
                 </li>
                 <li>
                   <span class="num">{{num }}%</span>
                   <p>筹款进度</p>
                 </li>
               </ul>
               </div>
               
        </div>
</template>
<script>
export default {
    name:'Hot',
    data(){
        return{
       num:60
        }
    },
    props:['items']
}
</script>
<style >
*{
    margin:0;
    padding:0;
}
a {
  text-decoration: none;
  display: inline-block;
  color: #000;
}

a:hover {
  color: #0193c2;
}
ul,
li {
  list-style-type: none;
}
.imgDisplay {
    width: 320px;
    height: 240px;
}
.images {
  display:inline-block;
 width: 320px;
 height: 240px;
 margin-left:-7px;
}
.contentCard {
  width: 320px;
  height: 485px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin:30px 0 0 40px;
}

.imgDisplay > img {
  width: 100%;
  height: 100%;
}

.titleInfo a {
  font-size: 13px;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;
  vertical-align: left;
  word-break: break-all;
  max-height: 40px;
  line-height: 20px;
  color: #000;
}

.titleInfo a:hover {
  text-decoration: underline;
  color: #000;
}

.textContent {
  width: 295px;
  height: 60px;
  margin: auto;
}
.textContent span {
  width: 100%;
  height: 100%;
  color: #888888;
  line-height: 20px;
  margin-top: 6px;
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  display: box;
  -webkit-box-orient: vertical;
  vertical-align: left;
  word-break: break-all;
}
.address {
  margin-top:10px;
  width: 282px;
  height: 20px;
  text-align: left;
  padding: 16px 0px 0px 0px;
  border-top: 1px dashed #dcdcdc;
  line-height: 20px;
  margin:10px auto;
}
.address span,
a {
  display: inline-block;
  height: 20px;
  margin-left: 7px;
  font-size: 11px;
  color: #999999;
}
.selectInfo {
   width: 282px;
    height: 40px;
    line-height: 20px;
}

.selectInfo>ul>li {
  width:60px;
  height: 40px;
 float:left;
 margin-left:20px;
 color: #999999;
 font-size: 11px;
}
.selectInfo .num{
  color:#000000;
}

.selectInfo .money{
  color:orange;
}

.progress {
  width:282px;
  height: 20px;
  margin:10px 30px;
}
.el-progress{
  width:270px;
}
.clear{
    clear:both;
}
</style>

