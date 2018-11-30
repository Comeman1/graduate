<template>
<div>
    <div class="pageBottom">
      <div class="bottomNav">
        <ul>
          <li>
            <router-link to="/startPrice">关于我们</router-link>
          <span>|</span>
          </li>
          <li>
            <router-link to="/startPrice">联系我们</router-link>
          <span>|</span>
            </li>
          <li>
            <router-link to="/startPrice">服务协议</router-link>
          <span>|</span>
            </li>
          <li>
             <router-link to="/startPrice">项目发起规范</router-link>
          <span>|</span>
            </li>
          <li>
            <router-link to="/startPrice">公司资质</router-link>
          <span>|</span>
            </li>
          <li>
             <router-link to="/startPrice">资质中心</router-link>
            </li>
        </ul>
      </div>
      <div class="clear"></div>
      <div class="copyRight">
        <ul>
          <li>
           <router-link to="/"> ©2015 贵州网信众筹网络科技有限公司 zhongchou.cn 版权所有 京xxx证000111号</router-link>
          <span>|</span>
            </li>
          <li>
            <router-link to="/">出版物经营许可证编号新出发（京）批字第直140141号</router-link>
          <span>|</span>
            </li>

          <li class="">
            <span style="color:#50abf2" class="el-icon-edit"></span>
            <router-link to="/">京公网安备11010502034903号</router-link>
            </li>
        </ul>
      </div>
      </div>  
       <div class="clear"></div>
       </div>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<style>
ul,li{
  list-style-type: none;
}
.pageBottom {
  width: 1350px;
  height: 140px;
  background-color: #24282f;
}
.bottomNav ul > li {
  float: left;
}
.bottomNav ul {
  height: 100%;
  margin-left: 250px;
}
.bottomNav {
  width: 1012px;
  height: 60px;
  margin: auto;
  line-height: 60px;
}
.copyRight {
  width: 100%;
  height: 20px;
  margin: auto;
  line-height: 20px;
  border-top: gray 1px solid;
}
.bottomNav ul > li a {
  font-size: 12px;
  padding: 20px;
  color: #939eb3;
}
.bottomNav ul > li a:hover {
  color: #50abf2;
}
.copyRight ul > li {
  float: left;
}
.copyRight ul {
  margin: 20px 0 0 200px;
}

.copyRight ul > li a {
  font-size: 12px;
  padding: 5px;
  color: #939eb3;
}
.clear {
  clear: both;
}
.copyRight ul > li a:hover {
  color: #50abf2;
}
</style>

