<template>
  <div class="hello">
    <!-- 头部导航组件模块 -->
    <headnav></headnav>
    <!-- 图片轮播模块mint-ui组件 -->
    <div>
      <mt-swipe class="page" :auto="4000">
        <mt-swipe-item>
          <img src="https://f10.baidu.com/it/u=2181741132,3342086439&fm=72" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://img1.imgtn.bdimg.com/it/u=1621894285,6669384&fm=200&gp=0.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://img3.imgtn.bdimg.com/it/u=2928407798,2887305503&fm=26&gp=0.jpg" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="content">
      <div class="getmore">
        <router-link to="/">获取更多</router-link>
      </div>
    </div>
    <div class="portio">
  <div class="block">
    <div class="slide-box">
        <div class="slide-item">   <div class="box">
              <img src="../assets/banner.jpg" alt="">
            </div>
            <div class="mark">
              <p>{{ list[0].title }}</p>
            </div>

        </div>
        <div class="slide-item">
           <div class="box">
              <img src="../assets/banner.jpg" alt="">
            </div>
            <div class="mark">
              <p>{{ list[0].title }}</p>
            </div>
        </div>
        <div class="slide-item">
                <div class="box">
              <img src="../assets/banner.jpg" alt="">
            </div>
            <div class="mark">
              <p>公益</p>
            </div>
        </div>
        <div class="slide-item">
           <div class="box">
              <img src="../assets/banner.jpg" alt="">
            </div>
            <div class="mark">
              <p>艺术</p>
            </div>
        </div>
        <div class="slide-item">
                <div class="box">
              <img src="../assets/banner.jpg" alt="">
            </div>
            <div class="mark">
              <p>农业</p>
            </div>
        </div>
        <div class="slide-item">
           <div class="box">
              <img src="../assets/banner.jpg" alt="">
            </div>
            <div class="mark">
              <p>{{ list[0].title }}</p>
            </div>
        </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import headnav from "@/components/headNav/head_nav";
export default {
  name: "HelloWorld",
  components: {
    headnav
  },
  data() {
    return {
      list:[
        { 
          id:1,
          url:'../assets/banner.jpg',
          title:'出版'
        },
        // {
        //   id:2,
        //    url:'../assets/banner.jpg',
        //   title:'出版'
        // },
        // {
        //   id:3,
        //    url:'../assets/banner.jpg',
        //   title:'出版'
        // },
        // {
        //   id:4,
        //    url:'../assets/banner.jpg',
        //   title:'出版'
        // },
        // {},
        // {},
        // {},
        // {}
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .hello{
  height: 200px;
} */
/* .clearfix::after {
  width: 0;
  height: 0;
  line-height: 0;
  visibility: hidden;
  clear: both;
} */
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.page {
  width: 100%;
  height: 200px;
}
.page img {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ddd;
  padding-top: 50px;
}
.getmore {
  width: 150px;
  height: 30px;
  margin: auto;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}
.getmore a {
  font-size: 18px;
}
.portio {
  width: 100%;
  height: 260px;
  background-color: #eee;
  padding-top: 20px;
}
/* .block>ul>li{
  width: 100%;
  height: 87px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  padding-top: 13px;
  text-align: left;
  position: relative;
  /* float: left; */
  /* margin-left: 10px;
  padding-left:10px;
  display:box;
} */ 
.block .box {
  width: 20%;
  height: 70px;
}
.box img {
  border-radius: 5px;
}

.mark {
  width: 25%;
  height: 75px;
  background-color: #000;
  line-height: 75px;
  text-align: center;
  position: absolute;
  top: 11px;
  left: 10px;
  opacity: 0.3;
  border: 1px solid #eee;
  border-radius: 5px;
}
.mark p {
  color: #fff;
}
.bot{
  margin-bottom: 50px;
}
 .slide-box {
            display: -webkit-box;
            overflow-x: scroll;
            -webkit-overflow-scrolling: touch;
            height: 87px;
            background-color: #fff;
            padding-top:10px;
            position:relative;
        }
 
        /* 隐藏下方的滚动条 */
        .slide-box::-webkit-scrollbar {
            background-color: transparent;
        }
 
        .slide-box {
            -ms-overflow-style: none;
        }
 
        .slide-box {
            overflow: -moz-scrollbars-none;
        }
 
 
        .slide-item {
            width: 25%;
            height: 80px;
            line-height: 80px;
            text-align: center;
            border:1px solid #eee;
            margin-left:10px;
        }
</style>
