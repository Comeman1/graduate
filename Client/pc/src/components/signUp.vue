<template>
<!-- 注册模块 -->
    <div class="regist">
        <div class="signframe">
           <div class="new_sign">
               <span>新用户注册<small>（标注<em>*</em>为必填项）</small></span>
           </div>
           <div class="txt_region">
                 <p class="notice">注：账号注册开始只能注册为捐赠用户，如要成为某个学校的志愿者，先要申请加入该学校所属的公益组织成员，加入后再由公益组 织授权即可。</p>
         <form action="/loin" method="post"> 
        <div class="upload">
            <div  class="profi">
               <div class="left">
                    <span class="pro">头像：</span>
                    <img :src="loginInfo.file" class="pic_area" alt=" 请添加图片">
                    <p>提示：图片限制为2M以内。</p>
                </div>
                 <div class="up_file">
                            <input type="file" @click="upfile($event)" >
                            <button >上传</button>
                    </div>
                    </div>
                    <div class="email">
                        <p>注册邮箱：<input type="text" placeholder="@"  v-model="loginInfo.email" ><em>*</em></p>
                         <p>再输入一遍:<input type="text" placeholder="@" v-model="loginInfo.email"></p>
                  </div>
                  <div class="username">
                         <p>用户名：<input type="text" placeholder="请输入用户名" v-model="loginInfo.username"><em>*</em></p>
                     </div>
                       <div class="pwd">
                         <p>密码设置：<input type="text" placeholder="请输入用密码" v-model="loginInfo.password"><em>*</em></p>
                         <p>请再次输入密码：<input type="text" placeholder="请确认密码" v-model="loginInfo.password"><em>*</em></p>
                     </div>
                      <div class="otherinfo">
                         <span>性别：</span><input type="radio" name="gender" id="boy" v-model="loginInfo.checked"><label for="boy">帅哥</label>
                         <input style="margin-left:10px;" type="radio" name="gender" id="girl" v-model="loginInfo.checked"><label for="girl">美女</label>
                         <p class="tel">手机：<input class="in" type="num" v-model="loginInfo.tel"> <em>*</em><span class="smll">(请正确填写，以便网站与您联系)</span></p>
                         <p>qq/weChat:<input  class="in" type="num" v-model="loginInfo.other"></p>
                         <p>职业：<input  class="in" type="text" v-model="loginInfo.work"><em>*</em></p>
                  </div>
                  <div class="reason"  style="margin:20px 0 0 140px;">
                      <span class="sigal" >签名：</span>
                      <textarea name="" id="" cols="40" rows="5" placeholder="在此输入理由" v-model="loginInfo.info"></textarea><em>*</em>
                      <span style="color:red;font-size:14px;">(限100字以内)</span>
                  </div>
                  <div class="subm">
                      <input type="button" value="提交" @click="start"><input type="button" value="重置">
                  </div>
            </div>    
           </form>
           </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "signUp",
  data() {
    return {
      loginInfo:{
          file:'',
          email:'',
          username:'',
          checked:'',
          other:'',
          info:'',

      }
    };
  },
  methods:{
    update(event){
       this.loginInfo.file = event.target.file
    },
    upfile(event){
      this.loginInfo.file = event.target.file;
       console.log(event.target.file);
    },
    start(){
      
    }
  }
};
</script>

<style scoped>
.regist {
  width: 100%;
  height: 100%;
}
.signframe {
  width: 50%;
  height: 780px;
  border: 1px solid #ddd;
  border: 5px solid skyblue;
  border-radius: 10px;
  margin: auto;
}
.new_sign {
  width: 100%;
  height: 30px;
  background-color: skyblue;
  border-top-right-radius: 5px;
  font-size:16px;
  color:#000;
}
.txt_region .notice {
  color: red;
  font-size: 12px;
  word-break: break-all;
  text-align: left;
  padding: 20px 10px;
}
.email,
.profi,
.username,
.pwd,
.otherinfo,
.reason {
  margin: auto;
  width: 80%;
}
.profi {
  height: 160px;
  border-top: 1px dashed #ccc;
  border-bottom: 1px dashed #ccc;
}
.profi .left {
  width: 50%;
  height: 120px;
  padding: 5px;
  position: relative;
  cursor: pointer;
}
.profi .pro {
  display: inline-block;
  position: absolute;
  top: 30px;
  left: 20px;
}
.profi .pic_area {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
}
.left p {
  font-size: 12px;
  color: red;
}
.up_file input {
  border: none;
  outline: none;
  font-size: 12px;
}
.email {
  height: 60px;
  border-bottom: 1px dashed #ccc;
  padding: 5px;
}
.email p {
  padding-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
}
input {
  border-radius: 3px;
  height: 20px;
  width: 180px;
  outline: none;
  border: 1px solid #ccc;
  padding-left: 10px;
}
.username {
  height: 40px;
  border-bottom: 1px dashed #ccc;
  padding: 10px 0;
  line-height: 40px;
  font-size: 14px;
  color: #000;
}
.pwd {
  height: 60px;
  border-bottom: 1px dashed #ccc;
  padding: 5px 0;
  font-size: 14px;
  color: #000;
}
.pwd input {
  margin-bottom: 5px;
}
.otherinfo {
  font-size: 14px;
  color: #000;
  width: 480px;
}
.otherinfo input {
  margin-top: 10px;
  width: 15px;
  height: 15px;
}
.otherinfo .in {
  width: 180px;
  height: 20px;
}
.otherinfo .smll {
  font-size: 10px;
}
.otherinfo .tel {
  width: 420px;
  text-align: right;
  margin-left: 129px;
}
.sigal{
    display: inline-block;
    width:50px;
height: 50px;
position: relative;
top:-34px;
left:0;
font-size:14px;
color:#000;
}
.reason textarea{
    border-radius:5px;
    padding:5px 0 0 10px;
}
em{
    color:red;
    font-style: normal;
}
.subm input{
    width:80px;
    height: 30px;
    margin-left:10px;
    cursor: pointer;
    background-color: skyblue;
    color:#000;
    text-align:center;
}
.subm input:hover{
    background-color: rgb(70, 199, 250);
    opacity: 0.8;
    color:red;
}
</style>

