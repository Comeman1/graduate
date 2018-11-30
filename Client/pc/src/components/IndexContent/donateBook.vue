<template>
    <div class="donateItem">
        <div class="BookAdd box">
            <img :src="item.url" alt="">
            <p class="addr">{{ item.des }}</p>
        </div>
        <div class="donateDetail box">
            <div class="txt">
                <h4 class="slogan">{{item.title}}</h4>
                <span class="el-icon-message tips"></span>
                <p class="story">{{item.txt}}</p>
                <p class="lookDe">
                    <router-link to="/">查看项目情况>></router-link>
                </p>
            </div>
        </div>
        <div class="condition box">
            <router-link to="/"  class="myButton">
          我要捐书
            </router-link>
            <ul>
                <li>需要
                   <span class="num">{{ item.num }}</span>
                    本书</li>
                <li>已捐:
                   <span class="num"> {{ item.num }}</span>
                </li>
                <li>剩余时间：{{ item.date }}</li>
                <li>参与捐书：{{ item.perNum }}人</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"donateBook",
      data(){
        return{
       
        }
    },
    props:["item"]
}
</script>
 <style scoped>

.donateItem {
    width:100%;
    height: 210px;
    border-bottom:1px dashed #ccc;
    margin-top:10px;
    display:flex;
}
.box {
     text-align: left;
}
.BookAdd {
    width:170px;
    height:190px;
    border:1px solid transparent;
    box-shadow:0 0 3px rgb(66, 59, 59);

}
.addr {
    font-size:12px;
    word-break: break-all;
    color:dimgray;
    line-height: 20px;
    text-overflow:ellipsis
}
.donateDetail {
    width:251px;
    height: 190px;
    margin-left:30px;
}
.slogan {
    width:150px;
    height: 35px;
    line-height: 35px;
    border-bottom:1px solid #ccc ;
    color:dimgray;
    padding-left:10px;
    text-align: left;
    white-space: nowrap;
    text-overflow:ellipsis
}
.txt .story {
    font-size:14px;
    word-break: break-all;
    line-height: 20px;
    text-overflow: ellipsis;
    padding-top:10px;
}
.tips {
    display: inline-block;
    position: absolute;
    top:55px;
    left:430px;
    color:#a0c7d4;
}
.lookDe {
    margin-top:30px;
}
.condition {
    width:150px;
    height: 150px;
    border:1px solid rgb(221, 209, 209);
    background-color: #e8eaee;
    border-radius:5px;
    margin:20px 0 0 20px;
    font-size:12px;
    text-align: center;
    box-shadow: 0 0 3px #ccc;
}
.myButton {
    display: inline-block;
    width:100px;
    height: 30px;
    color:#fff;
    line-height: 30px;
    border:1px solid #e8eaee;
    background-color: #0193c2;
    outline: none;
    font-size:14px;
    border-radius:5px;
    margin:10px 0 10px 0;
}
.num {
    color:rgb(250, 116, 7);
}
</style>


