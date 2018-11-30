<template>
    <div class="Bookbox" >
      <div style="height:420px" class="topBanner"></div>
    <div class="donate">
      <div>
        <div class="sideTitle side">
          <span class="el-icon-star-off">社会影响</span>
          <router-link to="/" class="more">+more</router-link>
          </div>
      <el-aside class="sideBar side">
        <ul>
          <li>
            <router-link to="/">书海工程开港台华人捐赠先河——中……</router-link>
              <span>{{date }}</span>
          </li>
          <li>
            <router-link to="/">书海工程开港台华人捐赠先河——中……</router-link>
            <span>{{date }}</span>
          </li>
          <li>
            <router-link to="/">书海工程开港台华人捐赠先河——中……</router-link>
              <span>{{date }}</span>
          </li>
          <li>
            <router-link to="/">书海工程开港台华人捐赠先河——中……</router-link>
             <span>{{date }}</span>
          </li>
          <li>
            <router-link to="/">书海工程开港台华人捐赠先河——中……</router-link>
             <span>{{date }}</span>
          </li>
           <li>
            <router-link to="/">书海工程开港台华人捐赠先河——中……</router-link>
             <span>{{date }}</span>
          </li>
          <li>
            <router-link to="/">书海工程开港台华人捐赠先河——中……</router-link>
             <span>{{date }}</span>
          </li>
           <li>
            <router-link to="/">书海工程开港台华人捐赠先河——中……</router-link>
             <span>{{date }}</span>
          </li>
          <li>
            <router-link to="/">书海工程开港台华人捐赠先河——中……</router-link>
             <span>{{date }}</span>
          </li>
        </ul>
      </el-aside>
       <el-aside class="add side">
        <div class="donateAddr">
          <span class="el-icon-goods">爱心捐赠</span>
          <router-link to="/" class="more">+more</router-link>
        </div>
        <div class="content">
          <ul>
            <li>
              <router-link to="/">书海工程开港台华人捐赠先河——中……</router-link>
            </li>
            <li>
              <router-link to="/">书海工程开港台华人捐赠先河——中……</router-link>
            </li>
          </ul>
        </div>
        <div class="donateBtn">
            <router-link to="/">
          <el-button  class="btn help" type="primary">我要受赠</el-button>
          </router-link>
        </div>
      </el-aside>
 
  <div>
      <el-main class="header">
        <div class="boxTitle">
          <span class="mainTxt">浏览捐书项目</span>
          <span class="iteClass">项目类型：</span>

          <div class="select">
              <el-select class="inputBox" size="small" v-model="value" placeholder="全部">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value" >
              </el-option>
           </el-select>
          </div>
        </div>
        <div class="book">
        <donateBook v-for="book in bookItem" :key="book.id" :item="book"></donateBook>
        </div>
      </el-main>
      </div>

  </div>
      <!-- 右边搜索部分 -->
    <div class="searchAddress" >
      <div class="topSearch">
        <div>
        <i class="el-icon-caret-right"></i>
        <span class="nav">安关键字搜索项目</span>
        </div>
        <input type="text" class="inputFrame" placeholder="希望小学">
        <button>搜索</button>
      </div>
      <div class="selectCity">
        <i class="el-icon-caret-right"></i>
        <span class="nav">按省份地区查询项目</span>
        <ul>
          <li>北京</li>
          <li>天津</li>
          <li>河北</li>
          <li>贵州</li>
          <li>四川</li>
        </ul>
        <ul>
          <li>辽宁</li>
          <li>吉林</li>
          <li>黑龙江</li>
          <li>上海</li>
          <li>江苏</li>
        </ul>
        <div>
          <router-link to="/" style="color:#0193c2;">点击查看全国省份</router-link>
        </div>
      </div>
      <div class="selectSchool">
          <i class="el-icon-caret-right"></i>
        <span class="nav">按学校类型查询项目</span>
        <ul>
          <li>学前班</li>
          <li>村小</li>
          <li>完小</li>
          <li>初中</li>
          <li>九年制学校</li>
          <li>高中</li>
          <li>其他图书室</li>
        </ul>
      </div>
    </div>
 </div>
 <hr/>
 <div class="pages">
   <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
 </div>
 </div>
</template>

<script>
import donateBook from "./IndexContent/donateBook";
export default {
  name: "Book",
  components: {
    donateBook
  },
  data() {
    return {
      date: "[8-27]",
      bookItem: [
        {
          id: 1,
          url:
            "http://www.1kgbook.org/PicInfo/TeacherPic/Views/6ce2c93b-3ff0-47eb-bc50-99512a741917.JPG",
          des:
            "河北省邢台市巨鹿县王虎寨镇西郗寨小学河北省邢台市巨鹿县王虎寨镇西郗寨小学村小",
          title: "阅读，激发心灵，帮助成长",
          txt: "这里有源自大师的传世美文，有几经岁月沉淀的思想......",
          num: 1212,
          date: "已过期",
          perNum: 100
        },
        {
          id: 2,
          url:
            "http://www.1kgbook.org/PicInfo/TeacherPic/Views/1ac0538f-d01e-4266-97aa-ae5d0b19b4d4.JPG",
          des:
            "贵州省毕节市纳雍县糯克小贵州省毕节市纳雍县王家寨糯克小学村小",
          title: "阅读，激发心灵，帮助成长",
          txt: "这里有源自大师的传世美文，有几经岁月沉淀的思想......",
          num: 1212,
          date: "已过期",
          perNum: 100
        },
        {
          id: 3,
          url:
            "http://www.1kgbook.org/PicInfo/TeacherPic/Views/6ce2c93b-3ff0-47eb-bc50-99512a741917.JPG",
          des:
            "河北省邢台市巨鹿县王虎寨镇西郗寨小学河北省邢台市巨鹿县王虎寨镇西郗寨小学村小",
          title: "民族的创造力源自孩童的好奇和认知",
          txt: "这里有源自大师的传世美文，有几经岁月沉淀的思想......",
          num: 1212,
          date: "已过期",
          perNum: 100
        }
      ],
      options: [
        {
          value: "选项1",
          label: "学校图书馆"
        },
        {
          value: "选项2",
          label: "公共图书馆"
        },
        {
          value: "选项3",
          label: "学生小书包"
        },
        {
          value: "选项4",
          label: "山村小书店"
        },
        {
          value: "选项5",
          label: "教师小书架"
        }
      ]
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.donate {
  /* width:940px; */
  height: 750px;
  position: relative;
  border-bottom:1px solid #ccc;
}
ul,
li {
  list-style-type: none;
}
.book {
  width: 650px;
  height: 800px;
  overflow: hidden;
}
.side {
  margin-left: 50px;
}
.sideTitle {
  width: 270px;
  height: 10px !important;
  text-align: left ;
  color: #0193c2;
  padding: 15px;
  border-bottom: 1px solid #0193c2;
  margin-top: 10px;
  overflow: hidden;
}
.topBanner {
  width: 1349px;
  height: 420px !important;
  background: url("../assets/banner1.jpg") no-repeat center center !important;
  background-size: 1349px 420px;
}
.sideBar {
  padding-top: 20px;
  width: 300px;
  height: 290px;
  border: 1px solid #ccc;
  overflow: hidden;
}
.sideBar a,span{
  font-size:13px;
  color:#ccc;
  margin-top:10px;
  display: inline-block;
}
.more {
  color: #0193c2;
  margin-left: 150px;
}
.add {
  padding-top: 20px;
  width: 300px;
  height: 250px;
}
.donateAddr {
  width: 280px;
  height: 20px;
  text-align: left;
  color: #0193c2;
  border-bottom: 1px solid #0193c2;
  margin-left: 5px;
  padding:5px;
}
.el-icon-goods,.el-icon-star-off{
  font-size:14px;
  color: #0193c2;
}

.content {
  width: 290px;
  height: 60px;
  border: 1px solid #ccc;
  padding: 20px 0 10px 0;
  line-height: 30px;
  margin-left: 5px;
  overflow: hidden;
}
.donateBtn {
  width: 290px;
  height: 90px;
  padding-top: 10px;
}
.btn {
  width: 290px;
  height: 60px;
  margin-top: 20px;
  font-size:30px;
}

.boxTitle {
  width: 650px;
  height: 35px;
  border-bottom: 1px solid #0193c2;
  text-align: left;
}

.header {
  position: absolute;
  top: 10px;
  left: 380px;
}
.select {
  display: inline-block;
}
.inputBox {
  width: 90px;
}
.mainTxt {
  font-size: 20px;
  color: #0193c2;
}
.iteClass {
  margin-left: 340px;
  font-size: 12px;
}
.searchAddress {
  width: 290px;
  height: 400px;
  border: 1px solid #ccc;
  background-color: #e8eaee;
  text-align: left;
  padding-left: 10px;
  position: absolute;
  top:50px;
  left:1040px;
}
.searchAddress .nav {
  font-size: 13px;
  font-weight: bold;
  padding: 30px 0 10px 0;
  display: inline-block;
}
.searchAddress .el-icon-caret-right {
  display: inline-block;
  width: 15px;
  height: 15px;
  color: #fff;
  background-color: #0193c2;
  border-radius: 4px;
}
.topSearch {
  width: 100%;
  height: 80px;
}
.inputFrame{
  width:150px;
  height: 30px;
  border:none;
  outline: none;
  padding-left:10px;
}
button{
  width:50px;
  height: 30px;
  border:none;
  outline: none;
  background-color: #0193c2;
  color:#fff;
  border-radius:5px;
  cursor:pointer;
}
.selectCity{
  width:270px;
  height: 100px;
  font-size:12px;
}
.selectCity ul>li{
  display:inline-block;
  margin-left:10px;
  line-height: 20px;
}
.selectCity,.selectSchool{
  cursor: pointer;
}
.selectCity ul>li:hover,.selectSchool ul>li:hover{
  color:#0193c2;
}
.nav{
  color:#000;
}
</style>


