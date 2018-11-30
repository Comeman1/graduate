<template>
<div class="mypro">
    <div class="allWrap">
      <div class="letterbox">
      <p class="commend">意见箱：</p>
      <form action="">
      <textarea name="" id="" cols="50" rows="10"></textarea>
      <input type="submit" name="提交" id="">
        </form>
        </div>
    </div>
    </div>
</template>
 
<script>
    export default {
        name: "Mypro",
      data(){
          return{
           
          }
      }
    }
</script>
 
<style scoped>
.mypro{width:80%;height: 450px; margin:auto; padding-top:100px;}
textarea{
  border:1px solid skyblue;
padding-left:10px;
}
.commend{
  color:#111;
  font-size:16px;
  text-align: left;
  padding:10px 0 20px 20px;
}
input{
  border:1px solid #ddd;
  outline:none;
  width:60px;
  height: 30px;
}
.letterbox{
  width:40%;
  height: 300px;
  border:5px solid skyblue;
  margin:auto;
  border-radius:5px;
}
</style>
