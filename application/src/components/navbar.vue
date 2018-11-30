<template>
  <div class="page-navbar">
    <headNav class="top"></headNav>
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">进行中</mt-tab-item>
      <mt-tab-item id="2">众筹档案</mt-tab-item>
      <mt-tab-item id="3">视频</mt-tab-item>
    </mt-navbar>

    <!-- <div>
      <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
    </div> -->

    <mt-tab-container v-model="selected">
      <!-- 进行中模块 -->
      <mt-tab-container-item id="1">
        <!-- <mt-cell v-for="n in list" :title="n.name"  :key="n.id"/> -->
        <div class="info">
          <div class="person">
            <router-link to="/">
            <img class="via-photo" src="http://wx.qlogo.cn/mmopen/V24RC632f6iaVDBRG0OB2WyU7uug7cfYcHmfAmtpUMqTw6hCRAXiasd4cyDMdg5hZ8WL5xtmA7dv61yAGyFgOw2NXHtLhujINic/0" alt="">
            <span>{{ list[0].name }}</span>
            <span class="time">{{ list[0].time }}</span>
            </router-link>
          </div>
          <div class="proname">
            <span class="description">[ 众筹扶贫你我同行] 希望 梦想 纯手工蜂蜜核桃糖（ 第二季）</span>
            <img class="picture" src="http://zcr6.static.zhongchou.cn/attachment/201811/26/11/5bfb674138462_640x480_thumb_534x400.png" alt="">
          </div>
          <p style="text-align:left; padding:5px 0 5px 10px">礼盒纯手工蜂蜜核桃糖，送的不只是礼品</p>
          <div class="gallery">
            <router-link to="/">
            <img src="http://zcr4.static.zhongchou.cn/attachment/201811/27/22/5bfd5580aab621a_t7_2160x1080.jpg" alt="">
            <img src="http://zcr4.static.zhongchou.cn/attachment/201811/27/22/5bfd5584e7a571a_t7_2160x1080.jpg" alt="">
            <img src="http://zcr4.static.zhongchou.cn/attachment/201811/27/22/5bfd558c5a7d61a_t7_2160x1080.jpg" alt="">
            </router-link>
          </div>
            <p style="text-align:left; padding:5px 0 5px 10px">用户384n0550</p>
             <div class="proname">
            <span class="description">陇南农家妇女邀请您一起为留守老农药夫，哎一双劳保手套</span>
            <img class="picture" src="http://zcr3.static.zhongchou.cn/attachment/201810/29/15/5bd6b0c6e3fb61a_t6_209x209.jpg" alt="">
          </div>
          <p style="text-align:left; padding:5px 0 5px 10px">有谁见过这样一双手，这双手养育了两个女儿，辛苦了一生</p>
          <div class="gallery">
            <router-link to="/">
            <img src="http://zcr4.static.zhongchou.cn/attachment/201811/27/22/5bfd5580aab621a_t7_2160x1080.jpg" alt="">
            <img src="http://zcr4.static.zhongchou.cn/attachment/201811/27/22/5bfd5584e7a571a_t7_2160x1080.jpg" alt="">
            <img src="http://zcr4.static.zhongchou.cn/attachment/201811/27/22/5bfd558c5a7d61a_t7_2160x1080.jpg" alt="">
            </router-link>
          </div>
        </div>
      </mt-tab-container-item>
      <!-- 众筹档案模块 -->
    <mt-tab-container-item id="2">
       
       <div class="record">
            <div class="images">
              <div class="disImge">
              <img  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=278236720,2555225646&fm=26&gp=0.jpg" alt="">
              </div>
              <div class="picInfo">
                <p>被冷落在山沟上千年的高原羊，是时候给它一个”名分“了</p>
              </div>
            </div>
            <div class="images map"  v-for="item in gallery " :key="item.id">
              <div class="disImge" >
              <img v-lazy="item.url" alt="">
              </div>
              <div class="picInfo">
                <p>{{ item.title }}</p>
              </div>
            </div>
         </div>  
      </mt-tab-container-item>
     <!-- 视频模块 -->
      <mt-tab-container-item id="3">
        <div class="videobox" >
          <div class="vid">
            <div class="person">
            <router-link to="/">
            <img class="via-photo" :src="list[0].pic" alt="">
            <span>{{ list[0].othername }}</span>
            <span class="time">{{ list[0].class }}</span>
            </router-link>
          </div>
          <div class="player">
              <video class="play" controls >
                <source :src="list[0].url">
              </video>
          </div>
      <div class="video-description">
        <h4>{{ list[0].title }}</h4>
        <p>{{ list[0].content }}</p>
      </div>
        </div>
         <div class="vid" style="margin-top:20px;" v-for="item in list" :key="item.id">
            <div class="person">
            <router-link to="/">
            <img class="via-photo" :src="item.pic" alt="">
            <span>{{ item.othername }}</span>
            <span class="time">{{ item.class }}</span>
            </router-link>
          </div>
          <div class="player">
              <video class="play" controls >
                <source :src="item.url">
              </video>
          </div>
      <div class="video-description">
        <h4>{{ item.title }}</h4>
        <p>{{ item.content }}</p>
      </div>
        </div>
       </div>

         

      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>

import headNav from '@/components/headNav/head_nav'
export default {
  name: 'page-navbar',
components:{
headNav
},
  data() {
    return {
      selected: '1',
      list:[
        {
          id:1,
          pic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2496579759,1019997771&fm=26&gp=0.jpg',
          name:'浅夜、小烦。【陇上庄园】 _OPILBN',time:'15小时前',othername:'大集山生态农庄',class:"农业",
 url:'https://vdse.bdstatic.com//1b161535a27f98e4b2c2601e4dbffafb?authorization=bce-auth-v1/fb297a5cc0fb434c971b8fa103e8dd7b/2017-05-11T09:02:31Z/-1//a3118a4c1a9b15ecca9b82df91b3b639b4dfc3c4e327122b0882012f09f7a93b.mp4',       
  title:"领养生态猪吃放心猪肉",content:'散养黑猪生长周期长，导致我资金链断裂，场地和设施都完善筹到的钱将用来养更多的三养猪'
     },
      {
          id:2,
          pic:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=45508658,1713950397&fm=26&gp=0.jpg',
          name:'川肴传奇——萌魔雨',time:'15小时前',othername:'大集山生态农庄',class:"农业",
 url:'https://vdse.bdstatic.com//1b161535a27f98e4b2c2601e4dbffafb?authorization=bce-auth-v1/fb297a5cc0fb434c971b8fa103e8dd7b/2017-05-11T09:02:31Z/-1//a3118a4c1a9b15ecca9b82df91b3b639b4dfc3c4e327122b0882012f09f7a93b.mp4',       
  title:"【龙泉.昭化东西扶贫协作】萌魔域，臻魔芋！健康法师！",content:'希望通过众筹让更多人了解，品尝到我们产品，更加详细的了解到金魔芋背后的故事'
     },
      {
          id:3,
          pic:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3411339162,3963801641&fm=26&gp=0.jpg',
          name:'三国锦囊小酒',time:'15小时前',othername:'大集山生态农庄',class:"农业",
 url:'https://vdse.bdstatic.com//1b161535a27f98e4b2c2601e4dbffafb?authorization=bce-auth-v1/fb297a5cc0fb434c971b8fa103e8dd7b/2017-05-11T09:02:31Z/-1//a3118a4c1a9b15ecca9b82df91b3b639b4dfc3c4e327122b0882012f09f7a93b.mp4',       
  title:"【文创定制】一杯三国锦囊小酒致敬不凡的你",content:'三国锦囊小酒，由成都武侯祠&泸州老窖联合定制52都纯酿造，纯天然无添加。以刘关张为设计初衷，弘扬...'
     },
     {}        
      ],
        gallery:[
          { 
            id:1,
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1947777308,1525485374&fm=26&gp=0.jpg',
            title:'一代宗师林黛玉是如何从弱质量女子变成武学泰斗？'
          },
          {
             id:2,
            url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=961658536,1850041764&fm=26&gp=0.jpg',
            title:'六年级抽烟的孩子就有近十分之一'
          },
          {
             id:3,
            url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=138869538,2963095197&fm=26&gp=0.jpg',
            title:'以线代笔，用脚穿针的她织就陇县未来'
          },
             {
             id:4,
            url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1956846994,1353621911&fm=26&gp=0.jpg',
            title:'父母与孩子之间，隔着什么？'
          }
        ],
    }
      }
}
</script>
<style scoped>
.person{
  width:100%;
  height: 33px;
  border-top:1px solid #eee;
  /* line-height: 50px; */
  text-align: left;
  padding:8px 10px;
  position:relative;
}
.person .via-photo{
  display: inline-block;
  width:40px;
  height: 40px;
  border-radius:50%;
}
.person span{
  font-size:14px;
  display:inline-block;
  position: absolute;
  top:15px;
  left:60px;
  color:#515151;
  /* margin-left:10px; */
}
.person .time{
  left:310px;
}
.proname{
  width:100%;
  height: 50px;
  background-color: #eee;
  text-align: left;
  padding-left:10px;
  overflow: hidden;
  position:relative;
}
 .proname .description{
   width:70%;
   height: 40px;
   /* line-height: 25px; */
   display:inline-block;
   word-break: break-all;
   position:absolute;
   top:3px;
   left:10px;
 }
.picture{
  width:25%;
  height: 50px;
  margin-left:290px;
}
.gallery{
  widows: 98%;
  height: 100%;
  margin:auto;
}
.gallery img{
  width:98%;
  height: 200px;
}
.record{
  width:100%;
  height: 100%;
  border-top:1px solid #eee;
  background-color: #eee;
}
.images{
  width:100%;
  height: 260px;
  background-color: #fff;
  padding-top:20px;
}
.disImge img{
  width:95%;
  height: 200px;
  border-radius:5px;
}
.picInfo{
  width:100%;
  height: 50px;
  text-overflow: ellipsis;
  word-break: break-all;
  text-align: left;
  padding:0 10px;
  line-height: 20px;
}
.picInfo p{
  font-size:18px;
}
.map{
  margin-top:15px;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.videobox{
  border-bottom:1px solid #ddd;
  width:100%;
  height: 100%px;
  background-color: #eee;
}
.vid{
  width:100%;
  height: 390px;
  background-color: #fff;
  /* border:1px solid #ccc; */
}
.player{
  width:98%;
  height: 260px;
  padding-left:4px;
}
.play{
  width:98%;
  height: 260px;
  margin:auto;
}
.video-description{
  width:100%;
  height: 90px;
  text-align:left;
  text-overflow: hidden;
  padding:10px 0 0 10px;
}
</style>

