<template>
<div class="wraper">
    <!-- logo部分 -->
    <div id="Logo">
            <img src="../assets/Logo.jpg" alt="">
    </div>
    <!-- 右边导航部分 -->
  <div class="connectWay">
      <div class="tel">
          <span class="el-icon-phone"></span>
          <span>官方咨询电话</span>
          <i>1234-88888888</i>
      </div>
      <div class="otherComponent">
          <ul>
          <li><router-link to="/special">专题</router-link></li>
          <li class="phoneVers" @mouseover="Hover" @mouseout="leav()"><router-link to="/" class="el-icon-mobile-phone">手机版</router-link><i class="el-icon-caret-bottom"></i></li>
           <li class="weChat"><router-link to="/">微信公众号</router-link>
            <i class="el-icon-caret-bottom"></i></li>
          <li><router-link to="/Mypro">意见反馈</router-link></li>
          <li><router-link to="/startPrice">帮助中心</router-link></li>
          </ul>
      </div>
      <!-- 鼠标滑过二维码事件 -->
          <div v-show="display" class="AppCode">
        <em>扫码下载众筹app</em>
    </div>
    </div>

</div>

</template>
<script>
export default {
  name: "preciseLogo",
  data(){
      return{
          display:false
      }
  },
  methods:{
        Hover(){
           this.display=true;
        },
        leav(){
            this.display=false;
        }
  }
};
</script>
<style scoped>
.wraper {
  min-width: 1042px;
  height: 30px;
  background-color: #71aaf8;
}
#Logo > img {
  width: 190px;
  height: 90px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  cursor: pointer;
}
.connectWay {
  width: 1042px;
  height: 100%;
  margin: auto;
  position: relative;
}
.tel {
  width: 400px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  cursor: pointer;
}
.otherComponent {
  width: 429px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  top: 0;
  left: 710px;
}
.otherComponent ul li {

    display: inline-block;
    padding-left:10px;
}
.otherComponent a {
  font-size: 14px;
  color: #fbf7f7;
}
.otherComponent a:hover {
  color: #000;
}
.phoneVers:hover{
    background-color: #fff;
    color: #000;

}
.weChat:hover{background-color: #fff;}
.phoneVers:hover i{
    transform:rotate(180deg);
}
.weChat:hover i{
    color:#000;
    transform:rotate(180deg);
}
.el-icon-caret-bottom{
    color:#fbf7f7;
}
.AppCode{
    width:125px;
    height: 125px;
    border:1px;
    box-shadow: 0 0 3px 0 gray ;
    background: url('../assets/appCode.jpg') no-repeat;
    z-index:22;
    background-position: bottom;
    background-size: 100px 100px;
    position: absolute;
    top:30px;
    left:771px;
    background-color: #fff;
}
.AppCode em{
    display: inline-block;
    font-size:10px;
    color:#000;
    padding:5px;
}
</style>


