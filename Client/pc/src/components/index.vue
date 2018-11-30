<template>
<!-- 轮播部分 -->
<div class="container">
    <div class="slideShow">
<el-carousel :interval="4000"  height="300px" type="card">
    <el-carousel-item v-for="(item,index) in picList" :key="index">
      <img class="img" :src="item.url" alt="">
    </el-carousel-item>
     </el-carousel>
    </div>
    <!-- 分类导航 -->
    <div class="mianContent clearfix">
         <div class="theme">
           <h3>热门推荐</h3>
           </div> 
           <div class="nav ">
             <ul>
               <li>
                 <router-link to="/">最新上线</router-link>
                 </li>
               <li>/</li>
               <li>
                  <router-link to="/">公益</router-link>
               </li>
               <li>/</li>
               <li>
                  <router-link to="/">区块链</router-link>
               </li>
                <li>/</li>
                 <li>
                    <router-link to="/">娱乐</router-link>
                 </li>
                  <li>/</li>
                 <li>
                    <router-link to="/">农业</router-link>
                 </li>
                  <li>/</li>
                  <li>
                     <router-link to="/">疾病助力</router-link>
                  </li>
                  <li>/</li>
                   <li class="more">
                      <router-link to="/">更多>></router-link>
                   </li>
             </ul>
             </div>  
    </div>
    <!-- 展示部分 -->
    <div class="items">
      <Hot v-for="items in project" :key="items.id" :items="items"></Hot>
    </div>
    <div class="items">
      <Hot v-for="items in project" :key="items.id" :items="items"></Hot>
    </div>
<!-- 下拉获取更多项目部分 -->
    <div class="moreProject">
      <router-link to="/Lopro">浏览更多项目</router-link>
    </div>
    <div class="publicBenefit">
      <div class="commonWeal cleafix">
      <h3 class="fontTitle">公益众筹</h3>
 <ul>
    <li>
      <router-link to="/">最新上线</router-link>
          </li>
          <li>/</li>
            <li class="more">
      <router-link to="/more">更多>></router-link>
  </li>
 </ul>
        </div>  
    </div>
    <div class="items">
      <Hot v-for="items in project" :key="items.id" :items="items"></Hot>
    </div>
     <div class="publicBenefit">
      <div class="farming cleafix">
      <h3  class="fontTitle">农业众筹</h3>
 <ul>
    <li>
      <router-link to="/">最新上线</router-link>
          </li>
          <li>/</li>
            <li class="more">
      <router-link to="/more">更多>></router-link>
  </li>
 </ul>
        </div>  
    </div>
    <div class="items">
      <Hot v-for="items in project" :key="items.id" :items="items"></Hot>
    </div>
     <div class="moreProject">
      <router-link to="/Lopro">浏览更多项目</router-link>
    </div>
    
     <div class="publicBenefit">
      <div class="farming cleafix">
      <h3  class="fontTitle">娱乐众筹</h3>
 <ul>
    <li>
      <router-link to="/">最新上线</router-link>
          </li>
          <li>/</li>
            <li class="more">
      <router-link to="/more">更多>></router-link>
  </li>
 </ul>
        </div>  
    </div>
    <div class="items">
      <Hot v-for="items in project" :key="items.id" :items="items"></Hot>
    </div>
     <div class="moreProject" >
      <router-link to="/Lopro">浏览更多项目</router-link>
    </div>
    <div >   
         <div class="publicBenefit ">
      <div class="farming cleafix">
      <h3  class="fontTitle">专业扶贫</h3>
 <ul>
    <li>
      <router-link to="/">最新上线</router-link>
          </li>
          <li>/</li>
            <li class="more" >
      <router-link to="/more">更多>></router-link>
  </li>
 </ul>
        </div>  
    </div>
    <div class="items">
      <Hot v-for="items in project" :key="items.id" :items="items"></Hot>
    </div>
    </div>
    <!-- 底部成功案例部分 -->
    <div class="successfulCase">
      <div class="des">
        <span class="titleDes">成功案例</span>
        <span class="smalldes">他们已经成功了，你还等什么...</span>
        <ul class="classify">
          <li>
           <router-link to="/">奖励</router-link>
            </li>
          <li>/</li>
          <li>
           <router-link to="/"> 公益</router-link>
            </li>
        </ul>
      </div>
      <div class="example">
        <img class="caseLogo" src="http://zcr8.static.zhongchou.cn/avatar/004/61/03/35virtual_avatar_small.jpg" alt="">
        <div class="caseName">
        <span>侃球俱乐部</span>
        <router-link to="/">奖励众筹 "《永远20》，我们的NBA，我们的青春集结令"</router-link>
        </div>
        <p class="caseDetail">杨毅，著名篮球评论员，《体坛周报》副主编。个人微信公号《杨毅侃球》为体育领域最具影响力自媒体。 杨毅将20年关于青春、有关NBA黄金时代汇集成新书《永远20：我们的NBA》，涵盖了过去20年NBA最引人注目、对整个篮球世界影响最大的20个事件、人物或文化现象，阐述篮球世界以及社会的改变。</p>
        <!-- 人数和钱显示部分 -->
        
        <div class="numDis">
        <p>
          <span class="big_M">105万</span>
          <span>已筹资</span>
        </p>
        <p class="big_M">|</p>
        <p>
          <span class="big_M">14434人</span>
          <span>支持人数</span>
        </p>
        </div>
      </div>
       <div class="example">
         <img class="caseLogo" src="http://zcr8.static.zhongchou.cn/avatar/003/66/42/13virtual_avatar_small.jpg" alt="">
          <div class="caseName ">
        <span>天真蓝教育传媒</span>
        <router-link to="/">奖励众筹 "“六个口袋”亲子阅读计划——1000个家庭招募中"</router-link>
          </div>
        <p class="caseDetail">一群视阅读如信仰的年轻父母，TA们有1岁到10岁的孩子，为了自由呼吸的教育，发起成立了北京天真蓝教育文化传媒有限公司。计划征集1000个家庭，用6个月时间，以“游戏+阅读”的方式，让孩子在父母的陪伴下，在专家的指导下，爱上阅读，学会阅读。会阅读的孩子有更广阔的未来，有爱好的人精神世界更宽广。</p>
        <!-- 人数和钱显示部分 -->
        <div class="numDis">
        <p>
          <span class="big_M">105万</span>
          <span>已筹资</span>
        </p>
        <p class="big_M">|</p>
        <p>
          <span class="big_M">14434人</span>
          <span>支持人数</span>
        </p>
        </div>
       </div>
    </div>

    <div class="siteFooterBox">
      <div class="mainBox">
      <div class="elseBox">
        <i class="el-icon-info"></i>
        <router-link to="/">众筹网新手帮助</router-link>
      </div>
      <div class="elseBox">
        <i class="el-icon-success"></i>
        <router-link to="/startPrice">众筹网发起项目规范</router-link>
      </div>
      <div class="elseBox">
        <i class="el-icon-document"></i>
        <router-link to="/">众筹网或新闻头条报导</router-link>
      </div>
      <div class="line"></div>
      <div class="tel">
        <i class="el-icon-phone-outline"></i>
        <p>010-12324343</p>
      </div>
      <div class="code">
        <span>微信公众号</span>
      </div>
      </div>
    </div>

    </div>
</template>

<script>
import Hot from "./IndexContent/Hot";
export default {
  name: "index",
  components: {
    Hot
  },
  data() {
    return {
      picList: [
        {
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543154510&di=167e98b99ad8f5e6d96b343ff2937009&imgtype=jpg&er=1&src=http%3A%2F%2Fbpic.ooopic.com%2F16%2F61%2F42%2F16614285-1fcab4cabdd45465c167495978e0c542-6.jpg"
        },
        {
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542559796757&di=20668fe861a4da81cb4b6ab70437d9f1&imgtype=0&src=http%3A%2F%2Fpic100.huitu.com%2Fres%2F20171010%2F1412430_20171010191404911050_1.jpg"
        },
        {
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542559796749&di=c0fcebd8efeab4ec27e6f423242c5468&imgtype=0&src=http%3A%2F%2Fpic101.huitu.com%2Fres%2F20171124%2F1521520_20171124101845731020_1.jpg"
        }
      ],
      project: []
    }
  },
  methods:{
      show(){
      this.dropdown=true;
      }
  },
  mounted(){
    let _this = this
   _this.$http.get('/select', {
    params: {
      id: 1
    }
  })
  .then(function (response) {
    console.log(response.data);
    _this.project = response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
  }
};
</script>

<style scoped>
.show{
  display:none;
}
.hide{
  display:none;
}
.items {
   width: 1082px;
  display: flex;
  margin-left:115px;
}

* {
  margin: 0;
  padding: 0;
}
.theme h3 {
  font-size: 28px;
  font-weight: 600;
  margin: 20px auto;
}

.clearfix::after {
  content: "";
  width: 0;
  height: 0;
  line-height: 0;
  visibility: hidden;
  clear: both;
}

.img {
  background-color: #f4f0f1;
  width: 100%;
  height: 100%;
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
.el-carousel {
  border-bottom: 1px solid #ccc;
  background-color: #f4f0f1;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.nav {
  width: 450px;
  height: 18px;
  margin: 10px auto;
}
.nav > ul > li {
  height: 100%;
  line-height: 18px;
  vertical-align: center;
  font-size: 12px;
  float: left;
  margin-left: 10px;
}
.more a {
  color: #0193c2;
}
.moreProject {
  width: 1042px;
  height: 43px;
  background-color: #eae6e7;
  margin: 20px auto;
  border-radius: 5px;
  line-height: 43px;
  color: gray;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}
.moreProject:hover {
  background-color: lightgrey;
}
.commonWeal,
.farming {
  width: 150px;
  height: 60px;
  margin: auto;
}

.fontTitle {
  font-size: 30px;
}

.commonWeal > ul > li {
  float: left;
  margin-top: 10px;
  padding-left: 15px;
}
.farming > ul > li {
  float: left;
  margin-top: 10px;
  padding-left: 15px;
}

.farming {
  margin-top: 15px;
  padding-top: 10px;
}
.successfulCase {
  min-width: 1042px;
  height: 543px;
  background-color: #dbebfc;
  margin-top:30px;
}
.des {
  width: 1042px;
  height: 110px;
  border-bottom: 1px solid #c4bcbe;
  margin: auto;
  line-height: 110px;
  position: relative;
  top: 0;
  left: 0;
}

.des > .titleDes {
  display: inline-block;
  font-size: 30px;
  color: #000;
  position: absolute;
  top: 0;
  left: 0;
}
.des .smalldes {
  display: inline-block;
  font-size: 12px;
  color: #000;
  position: absolute;
  top: 10px;
  left: 130px;
}
.des .classify {
  width: 100px;
  height: 100px;
  font-size: 12px;
  position: absolute;
  top: 30px;
  left: 930px;
}
.des .classify > li {
  display: inline-block;
  padding: 5px;
}
.example {
  width: 1042px;
  height: 180px;
  border-bottom: 1px solid #c4bcbe;
  margin: auto;
  position: relative;
}
.example .caseLogo {
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 50px;
  left: 0;
}
.caseName {
  width: 600px;
  height: 20px;
  position: absolute;
  top: 50px;
  left: 20px;
}
.caseDetail {
  width:620px;
  line-height: 26px;
  height: 78px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  display: box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-all;
  position: absolute;
  top:75px;
  left:110px;
}
.numDis {
  width:300px;
  height: 70px;
  position: absolute;
  top:80px;
  right: 0;
}
.numDis p{
  display: inline-block;
  margin-left:20px;
}
.numDis p>span{
  display:block;
}
.numDis .big_M{
  font-size:30px;
}

.siteFooterBox{
  width:1349px;
  height: 170px;
  background-color: #f5f5f5;
  position:relative;
}

.mainBox{
  width:1042px;
  height: 116px;
  margin:auto;
}
.mainBox .elseBox{
  float:left;
  width:188px;
  height: 100px;
  margin:30px 50px 0 0;
}
.mainBox::after{
  content:"";
  width:0;
  height: 0;
  visibility: hidden;
  clear:both;
}
.elseBox>a{
  display: block;
  padding:10px;
}
.elseBox>i{
   display: inline-block;
  margin-top:20px;
  font-size:30px;
  color:#0193c2;
}

.elseBox:hover{
background-color: #fff;
}
.tel{
  width:230px;
  height: 106px;
  text-align:center;
  margin-left:700px;
}
.el-icon-phone-outline{
    margin-top:50px;
    font-size: 20px;
}
.line{
  width:1px;
  height:120px;
  background-color: #ccc;
  position: absolute;
  left:850px;
  top:20px;
}
.tel p{
  padding:10px;
  font-size:20px;
}
.code{
   width:125px;
    height: 125px;
    border:1px;
    background: url('../assets/appCode.jpg') no-repeat;
    z-index:22;
    background-position: bottom;
    background-size: 100px 100px;
    position: absolute;
    top:20px;
    left:1110px;
    background-color: #f5f5f5;
}
</style>

