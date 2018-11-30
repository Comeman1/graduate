<template>
<!-- 登录模块 -->
    <div class="wraper">
         <div class="login">
             <div class="logo">
                <img src="../assets/Logo.jpg" alt="">
                </div>
                <div class="fram">
                   <p>
                        <img src="../assets/phone.png" alt="">
                        <input class="tel" type="text" name="" id="" placeholder="手机号"></p>
                     <p> 
                         <img class="key" src="../assets/pwd.png" alt="">
                         <input class="pwd" type="text" name="" id="" placeholder="密码"></p>
                </div>
               
         </div>
          <button class="btn">登录</button>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{

        }
    }
}
</script>
<style scoped>
 .login{
     width:100%;
     height: 300px;
     /* border-bottom:1px solid #ddd; */
 }
 .logo{
     width:80%;
     height: 100px;
     margin:100px auto;
 }
  .logo img{
      border:1px solid #eee;
      border-radius:10px;
  }
 .fram input{
     width:220px;
     height: 40px;
     padding-left:10px;
     /* border-bottom:1px solid #ccc; */
     border-top:none;
     border-left:none;
     border-right:none;
     outline: none;
 }
  .fram p{
      width:80%;
      position:relative;
      padding-left:50px;
      margin:auto;
      text-align: left;
  }
  .tel{
         border-bottom:1px solid #ccc; 
         position:absolute;
         top:-10px;
         left:98px;
  }
  .pwd{
 border-bottom:1px solid #ccc; 
         position:absolute;
         top:3px;
         left:95px;
  }
  .key{
      position:absolute;
      top:15px;
      left:46px;
  }
  .btn{
      width:60px;
      height: 30px;
      border:1px solid skyblue;
      background-color: skyblue;
      border-radius:5px;
      color:#fff;
      outline: none;
  }

</style>


