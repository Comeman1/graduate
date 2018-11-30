<template>
<!-- 众筹社区 部分-->
    <div class="Com_box">
      <el-container class="container">
    <div class="block">
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
    <el-carousel height="250px" >
      <el-carousel-item v-for="(item,index) in banner" :key="index">
        <img class="image" :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="rightAdvert">
        <div class="topTitle">公告</div>
        <div class="AdvImg">
          <div class="advText" >
            <span>众筹0元测评</span>
            </div>
        </div>
        <div class="advDescription">
          <p>这是一个为各类尖儿货爱好者提供各种新奇产品的平台，只要申请就能得到自己心仪产品的试用机会哦！
             <router-link to="">>>点击查看</router-link>
          </p>
          </div>
  </div>
  </el-container>
    <!-- 社区留言部分 -->
  <div class="CommunityMessage">
        <div class="message">
          <div class="hd">
            <span class="titletext">精彩话题</span>
              <ul>
                <li class="active">众筹大家谈</li>
                <li>大咖测评</li>
              </ul>
          </div>
          <div class="messageframe">
            <ul>
              <li>
                <com-message  v-for="items in message" :key="items.id" :items="items"></com-message>
              </li>
            </ul>
          </div>
        </div>
        <!-- 右边社区导航部分 -->
        <div class="rightnav">
            <div class="rightAside">
              <el-tabs class="tab" v-model="activeName2" type="card" @tab-click="handleClick">
                  <el-tab-pane label="热门板块" name="first">
                    <div class="tabscont">
                      <ul>
                        <li class="line">
                          <router-link to="/">活动专区</router-link>
                        </li>
                        <li>
                          <router-link to="/">测评报告</router-link>
                        </li>
                        <li class="line">
                          <router-link to="/">众筹知识库</router-link>
                        </li>
                        <li>
                          <router-link to="/">奇思妙想</router-link>
                        </li>
                        <li class="line">
                          <router-link to="/">众筹故事</router-link>
                        </li>
                        <li>
                          <router-link to="/">探窑</router-link>
                        </li>
                        <li>
                          <router-link to="/">众筹交流</router-link>
                        </li>
                      </ul>
                      <router-link class="sayMore" to="/">查看更多模块>></router-link>
                    </div>
                    <div class="adver">
                        <router-link to="/">
                        <img  src="https://zbbs.jd.com/data/attachment/portal/201612/26/113857yrasi8b5cbfmaw8x.jpg" alt="">
                        </router-link>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="热门圈子" name="second">
                    <div class="other">
                      <ul>
                        <li class="line">
                          <router-link to="/">众筹新品体验师</router-link>
                        </li>
                         <li>
                          <router-link to="/">其他>></router-link>
                        </li>
                      </ul>
                    </div>
                     <div class="adver" >
                        <router-link to="/">
                        <img src="https://zbbs.jd.com/data/attachment/portal/201612/26/113857yrasi8b5cbfmaw8x.jpg" alt="">
                        </router-link>
                    </div>
                  </el-tab-pane>
             </el-tabs>
            </div>
            <div class="hotActive">
              <div class="top">热门活动</div>
              <div class="organized">
                <ul class="">
                  <li class="projectImg">
                <img src="https://zbbs.jd.com/data/attachment/block/a4/a4d284d6b949cfc4627c9d31a537dd45.jpg" alt="">
                  </li>
                  <li class="activedes">
                    【抢楼赢大奖】可自拍的APP智能伞
                  </li>
                  <li class="profont">
                    5个
                  </li>
                  <li class="join">
                   <router-link to="/">参加</router-link> 
                  </li>
                </ul>
              </div>
               <div class="organized">
                <ul class="">
                  <li class="projectImg">
                <img src="https://zbbs.jd.com/data/attachment/block/a4/a4d284d6b949cfc4627c9d31a537dd45.jpg" alt="">
                  </li>
                  <li class="activedes">
                    【抢楼赢大奖】可自拍的APP智能伞
                  </li>
                  <li class="profont">
                    5个
                  </li>
                  <li class="join">
                   <router-link to="/">参加</router-link> 
                  </li>
                </ul>
              </div>
            </div>
            <div class="show_community_person">
                  <div class="title">
                    社区名人榜
                  </div>
                  <div class="headImage"> 
                    <ul>
                      <li>
                        <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=353848&size=small" alt="">
                        </router-link>
                      </li>
                      <li>
                         <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=353848&size=small" alt="">
                        </router-link>
                      </li>
                      <li>
                         <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=353848&size=small" alt="">
                        </router-link>
                      </li>
                      <li>
                         <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=353848&size=small" alt="">
                        </router-link>
                      </li>
                      <li>
                         <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=353848&size=small" alt="">
                        </router-link>
                      </li>
                      <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=353848&size=small" alt="">
                        </router-link>
                        </li>
                      <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=353848&size=small" alt="">
                        </router-link>
                        </li>
                      <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=353848&size=small" alt="">
                        </router-link>
                        </li>
                      <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=142154&size=small" alt="">
                        </router-link>
                        </li>
                      <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=329500&size=small" alt="">
                        </router-link>
                        </li>
                      <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=353848&size=small" alt="">
                        </router-link>
                        </li>
                      <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=76196&size=small" alt="">
                        </router-link>
                        </li>
                      <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=353848&size=small" alt="">
                        </router-link>
                        </li>
                      <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=2656&size=small" alt="">
                        </router-link>
                        </li>
                      <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=353848&size=small" alt="">
                        </router-link>
                        </li>
                      
                        <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=76196&size=small" alt="">
                        </router-link>
                        </li>
                      <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=353848&size=small" alt="">
                        </router-link>
                        </li>
                      <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=2656&size=small" alt="">
                        </router-link>
                        </li>
                      <li> <router-link to="/">
                        <img src="https://zbbs.jd.com/uc_server/avatar.php?uid=353848&size=small" alt="">
                        </router-link>
                        </li>
                        <li >
                          <router-link to="/" style="color:#409eff;font-size:14px;">更多</router-link>
                        </li>
                          <li >
                          <router-link to="/" style="color:#409eff;font-size:14px;">更多</router-link>
                        </li>
                    </ul>
                  </div>
            </div>
        </div>
  </div>
  <!-- 底部图片展示部分 -->
  <div class="footnav">
      <div class="otherlink">
          <span class="Tname">奇思妙想</span>
          <router-link to="/">查看更多>></router-link>
      </div>
      <div class="gallery">
        <div class="portal">
          <router-link to="/" target="_blank"  >
            <img src="https://zbbs.jd.com/data/attachment/portal/201610/08/093220ud4evp7vg67wv7u4.jpg" alt="">
          </router-link>
          <router-link to="/" target="_blank" class="mask"  title="轻盈又优雅的儿童玩具">
            <h4>轻盈又优雅的儿童玩具</h4>
          </router-link>
        </div>
        <div class="small">
        <router-link to="/" target="_blank">
        <img src="https://zbbs.jd.com/data/attachment/portal/201610/08/092900i19mb99q9foojlgy.jpg" alt="">
        </router-link>
        <router-link to="/" target="_blank"  title="可折叠的旅行箱" class="smallmask">
        <h4>可折叠的行李箱</h4>
        </router-link>
        </div>
         <div class="smallmask1">
        <router-link to="/" target="_blank" >
        <img src="https://zbbs.jd.com/data/attachment/portal/201610/08/093527hddeditxzxly5e35.jpg" alt="">
        </router-link>
        <router-link to="/" target="_blank"  title="环保创可贴" class="smar">
        <h4>环保创可贴</h4>
        </router-link>
        </div>
      <div class="smallmask2">
        <router-link to="/" target="_blank" >
        <img src="https://zbbs.jd.com/data/attachment/portal/201610/08/094529j6x5vt5g41mt8514.jpg" alt="">
        </router-link>
        <router-link to="/" target="_blank" class="mark2" title="无厘头又可爱的猫咪照片"> 
        <h4>无厘头又可爱的猫咪照片</h4>
        </router-link>
        </div>
      </div>
  </div>
    </div>
</template>

<script>
import ComMessage from "./indexContent/ComMessage";
export default {
  name: "Community",
  components: {
    ComMessage
  },
  data() {
    return {
      banner:[
         {url:'https://zbbs.jd.com/data/attachment/block/27/27e733a176314ccbe1e6b4c1460871c2.jpg'},
         {url:'https://zbbs.jd.com/data/attachment/block/d2/d27cddd9ad8bbefa8e9e750daf555a4e.jpg'},
         {url:'https://zbbs.jd.com/data/attachment/block/27/27e733a176314ccbe1e6b4c1460871c2.jpg'},
         {url:'https://zbbs.jd.com/data/attachment/block/d2/d27cddd9ad8bbefa8e9e750daf555a4e.jpg'}
      ],
      message: [
        {
          id: 1,
          url:
            "https://zbbs.jd.com/data/attachment/portal/201709/26/143524pngajpdu5cyj3kqq.jpg",
          title: "小钱包：梦想再小也是梦想",
          authorPic:
            "https://zbbs.jd.com/uc_server/avatar.php?uid=1643862&size=small",
          author: "安逸A***ZAR",
          date: "2017-09-18",
          viewsNum: "38",
          reply: "9",
          explain:
            "这款小钱包叫Yozone钱包，中文名直接就是叫有种钱包。哈哈，有种钱包叫有种钱包"
        },
        {
          id: 2,
          url:
            "https://zbbs.jd.com/data/attachment/portal/201709/26/142940oj22rqkp08pr20c1.jpg",
          title: "小钱包：梦想再小也是梦想",
          authorPic:
            "https://zbbs.jd.com/uc_server/avatar.php?uid=1643862&size=small",
          author: "安逸A***ZAR",
          date: "2017-09-18",
          viewsNum: "38",
          reply: "9",
          explain:
            "这款小钱包叫Yozone钱包，中文名直接就是叫有种钱包。哈哈，有种钱包叫有种钱包"
        },
        {
          id: 3,
          url:
            "https://zbbs.jd.com/data/attachment/portal/201709/26/145301bb958wacbnumw3fm.jpg",
          title: "小钱包：梦想再小也是梦想",
          authorPic:
            "https://zbbs.jd.com/uc_server/avatar.php?uid=1643862&size=small",
          author: "安逸A***ZAR",
          date: "2017-09-18",
          viewsNum: "38",
          reply: "9",
          explain:
            "这款小钱包叫Yozone钱包，中文名直接就是叫有种钱包。哈哈，有种钱包叫有种钱包"
        },
        {
          id: 4,
          url:
            "https://zbbs.jd.com/data/attachment/portal/201709/26/150152pfdjplllb22zlhfl.jpg",
          title: "小钱包：梦想再小也是梦想",
          authorPic:
            "https://zbbs.jd.com/uc_server/avatar.php?uid=1643862&size=small",
          author: "安逸A***ZAR",
          date: "2017-09-18",
          viewsNum: "38",
          reply: "9",
          explain:
            "这款小钱包叫Yozone钱包，中文名直接就是叫有种钱包。哈哈，有种钱包叫有种钱包"
        },
        {
          id: 5,
          url:
            "https://zbbs.jd.com/data/attachment/portal/201709/26/143524pngajpdu5cyj3kqq.jpg",
          title: "小钱包：梦想再小也是梦想",
          authorPic:
            "https://zbbs.jd.com/uc_server/avatar.php?uid=1643862&size=small",
          author: "安逸A***ZAR",
          date: "2017-09-18",
          viewsNum: "38",
          reply: "9",
          explain:
            "这款小钱包叫Yozone钱包，中文名直接就是叫有种钱包。哈哈，有种钱包叫有种钱包"
        }
      ],
      activeName2: "first"
    };
  },
  methods: {
    handleClick(tab, event) {}
  }
};
</script>

<style scoped>
.Com_box {
  background-color: #eceff1;
  width: 1349px;
  overflow: hidden;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.container {
  width: 1042px;
  height: 100%;
  margin: auto;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* .image{
      width:100%;
      height:100%
  } */
.el-carousel {
  width: 700px;
  height: 100%;
  border-radius: 5px;
}
.rightAdvert {
  width: 300px;
  height: 249px;
  border: 1px solid #ccc;
  margin-left: 20px;
  position: relative;
  border-radius: 5px;
}
.topTitle {
  width: 300px;
  height: 40px;
  background-color: #71aaf8;
  color: #fff;
  line-height: 40px;
  font-size: 20px;
}
.AdvImg {
  width: 300px;
  height: 150px;
  background: url("https://zbbs.jd.com/data/attachment/block/be/be8bd15da084e69e6d4c63a4ce15efed.jpg");
}
.AdvImg .advText {
  width: 295px;
  height: 30px;
  background-color: #000;
  line-height: 30px;
  text-align: left;
  position: absolute;
  top: 65%;
  left: 0;
  opacity: 0.5;
  padding-left: 5px;
}
.advText span {
  color: #fff;
  font-size: 16px;
}
.advDescription {
  width: 295px;
  height: 60px;
  font-size: 14px;
  word-break: break-all;
  text-overflow: ellipsis;
  text-align: left;
  padding-left: 5px;
}
.CommunityMessage {
  width: 1042px;
  height: 1060px;
  margin: 30px auto;
}
.message {
  width: 700px;
  height: 1050px;
  background-color: #fff;
  float: left;
}
.message::after {
  content: "";
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
.hd {
  width: 680px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  text-align: left;
  padding-left: 20px;
}
.hd::after {
  content: "";
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
.titletext {
  float: left;
}
.hd ul {
  /* width:224px; */
  /* height:40px; */
  margin-left: 400px;
}
.active {
  background-color: rgb(186, 194, 240);
}
.hd ul > li {
  display: inline-block;
  padding: 0 5px 0 5px;
  border-radius: 5px;
}

.rightnav {
  width: 298px;
  height: 1048px;
  margin-left: 720px;
}
.rightAside {
  width: 100%;
  min-height: 100px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.tabscont {
  width: 280px;
  height: 200px;
  margin: auto;
}
.tabscont ul > li {
  float: left;
  width: 136px;
  height: 40px;
  border-bottom: 1px solid #ddd;
  line-height: 40px;
  text-align: center;
}
.tabscont::after {
  content: "";
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
.tabscont ul > li > a {
  color: #409eff;
}
.line {
  border-right: 1px solid #ddd;
}
.sayMore {
  color: #409eff;
  font-size: 12px;
  margin-top: 25px;
  display: inline-block;
}
.adver {
  width: 300px;
  height: 149px;
  /* margin-left: -10px; */
}
.other {
  width: 235px;
  height: 50px;
  margin: 50px auto;
}
.other ul > li {
  float: left;
  border-bottom: 1px solid #ddd;
  text-align: center;
  padding: 5px;
}
.other ul > li > a {
  color: #409eff;
}
.hotActive {
  width: 300px;
  height: 340px;
  border: 1px solid #ddd;
  background-color: #fff;
  margin-top: 30px;
}
.top {
  width: 280px;
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 20px;
  border-bottom: 1px solid #ddd;
}
.organized {
  width: 280;
  height: 120px;
}
.organized .projectImg {
  width: 100px;
  height: 90px;
  float: left;
}
.projectImg::after {
  content: "";
  clear: both;
}
.projectImg img {
  display: inline-block;
  padding: 10px 10px 20px 10px;
}
.organized .activedes {
  width: 140px;
  height: 40px;
  font-weight: bold;
  font-size: 12px;
  text-align: left;
  margin: 10px 0 10px 140px;
}
.profont {
  width: 140px;
  height: 40px;
  margin-left: 140px;
  font-size: 12px;
  text-align: left;
}
.join {
  width: 60px;
  height: 20px;
  background-color: #409eff;
  margin-left: 140px;
  line-height: 20px;
  text-align: center;
  border-radius: 4px;
}
.join > a {
  color: #fff;
}
.show_community_person {
  width: 300px;
  height: 249px;
  border: 1px solid #ddd;
  margin-top: 20px;
  background-color: #fff;
}
.title {
  width: 280px;
  height: 40px;
  padding-left: 20px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  text-align: left;
}
.headImage {
  width: 280px;
  height: 180px;
  overflow: hidden;
  margin: 5px 5px 0 20px;
}
.headImage > ul > li {
  width: 41px;
  height: 41px;
  line-height: 35px;
  overflow: hidden;
  text-align: center;
  margin: 0 6px 5px 0;
  float: left;
  transition: all;
}
.headImage > ul::after {
  content: "";
  clear: both;
}
.headImage ul > li > a:hover img {
  width: 37px;
  height: 37px;
  border: 2px solid #1badb6;
}
.footnav {
  width: 1040px;
  height: 400px;
  margin: 30px auto;
}
.otherlink {
  width: 1020px;
  height: 60px;
  background-color: #fff;
  line-height: 60px;
  text-align: left;
  padding-left: 20px;
}
.otherlink .Tname {
  font-size: 20px;
}
.otherlink a {
  margin-left: 800px;
  color: #409eff;
}
.gallery {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: left;
  margin-top: 20px;
}
.portal {
  width: 616px;
  height: 270px;
  /* overflow: hidden; */
  float: left;
}
.portal::after{
  content:"";
  clear:both;
}
.portal .mask {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 616px;
  height: 270px;
  text-align: center;
  line-height: 270px;
  transition: all 0.2s ease-in-out;
  background: rgba(148, 186, 204, 0);
  opacity: 0;
}
 h4 {
  color: #fff;
  text-shadow: 0 1px 2px #000;
}
.portal:hover .mask {
  background: rgba(56, 56, 56, 0.6);
  background-size: 31px 25px;
  opacity: 1;
  filter: alpha(opacity=100);
}
.small{
  width:202px;
  height: 130px;
  margin-left:625px;
}
.small .smallmask{
  display:block;
  position:absolute;
  top:0;
  left:0;
  width:202px;
  height: 130px;
  transition: all 0.2s ease-in-out;
  background:rgba(148, 186, 204, 0);
  text-align: center;
  line-height: 100px;
  margin-left:625px;
  opacity: 0;
}
.small:hover  .smallmask{
  background: rgba(56, 56, 56, 0.6);
  opacity: 1;
  filter: alpha(opacity=100);
}
.smallmask1{
  width:202px;
  height: 130px;
  margin:10px 0 0 625px;
}
.smallmask1 .smar{
  display:block;
  position:absolute;
  top:0;
  left:0;
  width:202px;
  height: 130px;
  transition: all 0.2s ease-in-out;
  background:rgba(148, 186, 204, 0);
  text-align: center;
  line-height: 100px;
  margin:140px 0 10px 625px;
  opacity: 0;
}
.smallmask1:hover  .smar {
  background: rgba(56, 56, 56, 0.6);
  opacity: 1;
  filter: alpha(opacity=100);
}
.smallmask2{
    width:202px;
    height: 270px;
   position:absolute;
   top:0;
   right:0;
}
 .smallmask2 .mark2{
  display:block;
  position:absolute;
  top:0;
  left:0;
  width:202px;
  height:270px;
  transition: all 0.2s ease-in-out;
  background:rgba(148, 186, 204, 0);
  text-align: center;
  line-height: 220px;
  opacity: 0;
}
 .smallmask2:hover  .mark2{
   background: rgba(56, 56, 56, 0.6);
  opacity: 1;
  filter: alpha(opacity=100);
 }
</style>
