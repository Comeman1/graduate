<template>
<!-- 个人中心模块 -->
    <div class="signalcenter">
        <div>
        <div class="via">
               <div class="photo">
                   <img class="pic" src="../../assets/myvia.png" alt="">
               </div>
               <p class="user">用户名</p>
               <p class="tips"><router-link to="/">暂无众筹</router-link></p>
               <router-link to="/" class="left-letter"><img src="../../assets/letter.png" alt=""></router-link>
        </div>
        <div class="userdata">
                    <div class="income">
                     <ul>
                            <li class="money redpack" >
                         <span class="icon">
                            <img src="../../assets/wan_money.png" alt="">
                        </span>
                        <router-link to="/" class="designation">
                            <p class="title">余额</p>
                            <p class="res-num">￥0</p>
                        </router-link>
                            </li>
                            <li class="money">
                         <span class="icon">
                            <img src="../../assets/coupon.png" alt="">
                        </span>
                        <router-link to="/" class="designation">
                            <p class="title">抵用券</p>
                            <p class="res-num">暂无</p>
                        </router-link> 
                            </li>
                            <li class="redpack">
                         <span class="icon">
                            <img src="../../assets/redpack.png" alt="">
                        </span>
                        <router-link to="/" class="designation">
                            <p class="title">红包</p>
                            <p class="res-num">暂无</p>
                        </router-link>
                            </li>
                            <li>
                         <span class="icon">
                            <img src="../../assets/shop.png" alt="">
                        </span>
                        <router-link to="/" class="designation">
                            <p class="title">积分</p>
                            <p class="res-num">0</p>
                        </router-link>
                            </li>
                     </ul>
                    </div>
                    <div class="items">
                        <ul>
                            <li>
                                <img class="foucsicon" src="../../assets/foucs.png" alt="">
                                <span>  <router-link to="/">关注</router-link></span>
                               <img class="arrow" src="../../assets/right-arrow.png" alt="">
                            </li>
                            <li class="mid">
                                 <img class="foucsicon" src="../../assets/orde.png" alt="">
                                <span>  <router-link to="/">订单</router-link></span>
                                <img class="arrow" src="../../assets/right-arrow.png" alt="">
                            </li>
                            <li>
                                 <img class="foucsicon" src="../../assets/sponsor.png" alt="">
                                <span>  <router-link to="/">发起</router-link></span>
                                <img class="arrow" src="../../assets/right-arrow.png" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="data">
                        <ul>
                            <li>
                                 <img class="foucsicon" src="../../assets/data.png" alt="">
                                <span>  <router-link to="/">个人资料</router-link></span>
                                <img class="arrow" src="../../assets/right-arrow.png" alt="">
                            </li>
                            <li>
                                 <img class="foucsicon" src="../../assets/set.png" alt="">
                                <span>   <router-link to="/">设置</router-link></span>
                                <img class="arrow" src="../../assets/right-arrow.png" alt="">
                            </li>
                        </ul>
                    </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{
                list:[]
        }
    }
}
</script>
<style  scoped>
.signalcenter{
    height: 600px;
    width:100%;
}

.via{
    width:100%;
    height: 175px;
    background: url('../../assets/timg.jpg') no-repeat center;
    padding-top:20px;
    position: relative;
    background-color: red;
}
.photo{
    width:63px;
    height: 63px;
    border:1px solid #ccc;
    border-radius:50%;
    padding:5px;
    margin:auto;
}
.via a{
        color:#fff;
}
.photo .pic{
    width:60px;
    height: 60px;
    border:1px solid #ccc;
    border-radius:50%;
    background-color: #ccc;
}
.user{
    padding:8px 0;
    color:#fff;
}
.tips{
    width:25%;
    height: 20px;
    border:1px solid #eee;
    margin:auto;
}
.tips a{
    font-size: 13px;
}
.left-letter{
    display: inline-block;
    position:absolute;
    top:30px;
    right:20px;
}
.userdata{
    width:100%;
    height: 480px;
    background-color: #eee;
}
.income{
    width:100%;
    height: 102px;
    text-align: left;
    background-color: #fff;

}
.income li{
    width:49%;
    height: 50px;
   float:left;
     position: relative;
}
.money{
    border-bottom:1px solid #ddd;
}
.redpack{
    border-right:1px solid #ddd;
}
.income::after{
    content:"";
    width:0;
    height: 0;
    visibility: hidden;
    clear: both;
}
.income .icon{
    width:10%;
    height: 16px;
    display: inline-block;
    position:absolute;
    top:20px;
    left:10px;
}
.income .designation{
    width:70%;
    height: 50px;
    display: inline-block;
    padding:8px 0 0 40px;
}
.income .designation .title{
        color:#515151;
}
 .income .designation .res-num{
     font-size:10px;
     color:#aaa;
 }
 .items{
     width:100%;
     height: 130px;
     background-color: #fff;
     margin-top:10px;
     text-align: left;

 }
  .items li {
      width:100%;
      height: 40px;
      line-height: 40px;
     padding-left:10px;
     position:relative;
  }
  .items .mid{
      border-top:1px solid #ddd;
      border-bottom:1px solid #ddd;
  }
   .items a,.data a{
       color:#515151;
   }
.foucsicon{
      padding-right:10px;
  }
    .arrow{
       position:absolute;
       top:11px;
       right:15px;
   }
   .data{
       width:100%;
       height: 100px;
       background-color: #fff;
       margin-top:20px;
       text-align:left;
   }
   .data li{
       width:100%;
       height: 50px;
        position:relative;
    line-height: 50px;
    padding-left:10px;

   }
   .data li:first-child{
       border-bottom:1px solid #ddd;
   }

</style>


