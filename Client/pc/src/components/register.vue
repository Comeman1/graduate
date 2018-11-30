<template>
<!-- 志愿者申请申请 -->
    <div class="process">
            <div class="frame">
                <div class="substance">
               <div class="sidebar clearfix ">
                   <div class="notice"><router-link to="/lo">匿名用户，请登录</router-link></div>
                   <ul>
                       <li class="active" @click="exchan"><router-link to=""> 志愿者申请</router-link></li>
                       <li @click="display"> <router-link to=""> 我的消息</router-link></li>
                       <li> <router-link to="/mes"> 我的捐赠</router-link></li>
                       <li> <router-link to=""> 我的关注</router-link></li>
                       <li @click="change"> <router-link to=""> 我要回访</router-link></li>
                         <li> <router-link to="/Mypro"> 我的项目</router-link></li>
                   </ul>
               </div>
            <div class="maincomp">
                <volunteer v-show="isshow"></volunteer>
                <returnvisit v-show="noshow"></returnvisit>
                <mymsg v-show="block"></mymsg>
            </div>
            </div>      
            </div>
    </div>
</template>
<script>
import volunteer from './regCom/volunteer'
import returnvisit from './regCom/returnvisit'
import mymsg from './regCom/mymessage'
export default {
  name: "register",
  components:{
volunteer,
returnvisit,
mymsg
  },
  data() {
    return {
        isshow:true,
        noshow:false,
        block:false
    };
  },
  methods:{
        change(){
                this.isshow=false
                this.noshow=true
        },
        display(){
            this.block = true
            this.isshow=false
                this.noshow=false
        },
        exchan(){
            this.block = false
            this.isshow=true
           this.noshow=false
        }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.notice a{
    font-size:12px !important;
    color:#71aaf8 !important;
}
.clearfix::after{
    content: "";
    width:0;
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear: both;
}
.process{
    width:100%;
    height: 100%;
}
.frame {
  width: 1345px;
  height: 1000px;
  background-color: #eceff1;
}
.substance {
  width: 1024px;
  height: 100%;
  margin: auto;
  border: 1px solid transparent;
}
.sidebar {
  margin-top:30px;
  width: 220px;
  height: 290px;
  background-color: #fff;
  padding-top: 20px;
  border-radius: 3px;
  float:left;
  border: 1px solid #ddd;
}
.sidebar a{
    font-size:16px;
    color:#000;
}
.sidebar > ul > li {
  width: 220px;
  height: 45px;
  line-height: 45px;
  border-radius: 3px;
}
.sidebar > ul > li:first-child {
  background-color: #71aaf8;
  color:#fff;
}
.sidebar > ul > li:hover{
      background-color: #71aaf8;
      cursor: pointer;
      color:#fff;
}
.sidebar:hover .active{
     background-color: rgb(247, 236, 236);
     color:#000;
}
.maincomp{
    width:760px;
    height: 650px;
    /* background-color: #fff; */
    /* border:1px solid　#000; */
    margin:30px 0 0 245px;
    border-radius:3px;
}
</style>

