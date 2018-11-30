<template>
<!-- 申请志愿者 -->
    <div class="rep">
        <div> 
    <form  class="reginfo">
          <h4 style="padding:10px 0 20px 20px;">报名成为志愿者</h4>
     <fieldset >
       <legend>第一步：填写基本资料</legend>
       <ul>
           <li>
           <div class="fra">
               <span >姓名：</span>
               <input type="text" required value="">
               <em>*</em>
           </div>
           </li>
           <li>
            <span>性别：</span>   <el-radio v-model="radio" label="1">男</el-radio>
             <el-radio v-model="radio" label="2">女</el-radio>
           </li>
           <li>
             <div class="block" style="padding:5px;" >
                <span class="demonstration">出生年月：</span>
                <el-date-picker 
                v-model="value1"
                type="date"
                placeholder="选择日期">
             </el-date-picker>
             <em>*</em>
             </div>
           </li>
           <li>
               <div class="fra">
                <span>电话号码：</span>
                <input type="num" required>
                <em>*</em>
               </div>
           </li>
           <li>
               <div class="fra">
                    <span>邮箱：</span>
                    <input type="text" value="@" required>
                    <em>*</em>
               </div>
           </li>
           <li>
               <div class="fra">
                    <span>职业：</span>
                    <input type="text" required>
               </div>
           </li>
           <li>
               <div class="fra">
                    <span>我的地址：</span>
                    <select name="" id="" style=" width:60px;height: 40px;  border:1px solid #ddd;border-radius:4px;padding-left:10px;">
                        <option value="">北京</option>
                    </select>
                    <input type="text" required>
                    <em>*</em>
               </div>
           </li>
           <li>
                <div class="fra">
                    <span>邮编：</span>
                    <input type="num" required>
                   <em>*</em>
               </div>
           </li>
           <li>
               <div class="fon">
                   <span>备注：</span>
                   <textarea name="" id="" cols="40" rows="5" placeholder="此处可以写参加过的志愿者活动" style="margin-left:45px;border-radius:4px;
                   padding:5px;" required></textarea>
                    <em>*</em>
               </div>
           </li>
       </ul>
      </fieldset>
       <fieldset style="margin-top:20px;  height:300px" class=" clearfix">
    <legend>第二步：选择志愿服务类型<em>*</em></legend>
               <ul class="f">
                   <li>
                       <div >
                            <input type="radio" name="" id="">
                            <span>(1)线下活动</span>
                       </div>
                   </li>
                   <li>
                         <input type="radio" name="" id="">
                            <span>(2)线上传播（含传播和业务咨询）</span>
                   </li>
                   <li>
                        <input type="radio" name="" id="">
                            <span>(3)文案策划（公益海报制作）</span>
                   </li>
                   <li>
                         <input type="radio" name="" id="">
                            <span>(4)其他</span>
                            <input type="text">
                   </li>
               </ul>
               <ul class="t">
                   <li>
                       <p>协助各地区志愿协会参加活动，积极转发微博、微信公众平台发布的内容、积极参与线下活动</p>
                   </li>
                   <li>
                       <p>管理志愿者群，通过互动或私聊激活长期潜伏志愿者，对沟通多次并无反应者进行清退。主动与新进群的志愿者交流沟，解决疑问</p>
                   </li>
                   <li>
                       <p>擅长设计，制作宣传PPT等</p>
                   </li>
                   <li>
                       <p>申请者服务内容在以上未涵盖的，可自行填写。</p>
                   </li>
               </ul>
  </fieldset>
  <div class="b">
  <button>提交</button>
  </div>
</form>

        </div>
    </div>
</template>
<script>
export default {
  name: "volunteer",
  data() {
    return { radio: "1" ,value1:true};
  }
};
</script>
<style scoped>
*{
   margin:0;
   padding:0;
}
.clearfix::after {
  content: "";
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
.rep{
    width:100%;
    height: 1000px;
}
.reginfo {
  width: 520px;
  /* height: 1500px; */
  text-align: left;
  padding-left: 10px;
  border: 1px solid #ddd;
}
.fra {
  margin-bottom: 10px;
}
.fra > input {
  width: 210px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 10px;
}
.fon {
  position: relative;
}
.fon > span {
  position: absolute;
  top: 20px;
  left: 0;
}
em {
  color: red;
}
.f {
  float: left;
}
fieldset {
  width: 480px;
  height: 505px;
  padding-left: 20px;
  border-radius: 5px;
}
.f {
    padding-top:10px;
    width:80px;
    height: 470px;
}
.f li{
    margin-bottom:10px;
}
.t{
    width:350px;
    text-emphasis: ellipsis;
    word-wrap: break-all;
    margin-left:130px;
}
.t li{
    width: 100%;
    height: 50px;
    margin:15px 0 0 20px;
}
.b{
    width:480px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-top:10px;
}
.b button{
    width:50px;
    height: 30px;
    border:1px solid #71aaf8;
    border-radius: 5px;
    outline: none;
    background-color: #71aaf8;
    color:#fff;
}
</style>


