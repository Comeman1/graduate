<template>
<!-- 发起众筹模块 -->
<div class="process">
      <div class="frame">
        <div class="substance">
          <div class="sidebar ">
              <span style="color:#5196f7">最新爱心捐赠</span>
           <div class="List" @mouseout="start()">
             <div class="allData clearfix" :style="{top}" @mouseover="forbidden()"> 
                <ul v-for="(item,id) in items" :key="id">
         <li> 
            <router-link to="/"> {{item.trade}}</router-link>
             </li>
         <li>
              <router-link to="/">{{item.price}}</router-link>
             </li>
         <li>
              <router-link to="/">{{item.riseFall}}</router-link>
             </li>
         <li>
             <router-link to="/"> {{item.volume}}</router-link>
             </li>
         <li>
             <router-link to="/"> {{item.max}}</router-link>
             </li>
         <li>
            <router-link to="/">  {{item.min}}</router-link>
             </li>
      </ul>
      </div>
    </div>
	</div>
    <div class="maincomp clearfix">
                    <div class="con">
                      <div class="letter"> <router-link to="/"  class="tit"> 来自大山的信</router-link>
                      </div>
                        <ul>
                            <li v-for="(item,index) in info"  :key="index">
                                <span class="dot"></span>
                                {{ item.txt }}
                                </li>
                        </ul>
                        <div class="pic clearfix">
                            <img src="http://www.1kgbook.org/PicInfo/TeacherPic/Views/5c4b9eb9-5028-4899-b2c1-4d6cb382b2c4.JPG" alt="">
                        </div>
                        <div class="t_info">
                      <span >悦读时光, 暂时没有感谢信</span>
                        </div>
                    </div>  
                <div class="helped_pro">
                    <ul  style="float:left;" class="clearfix">
                        <li v-for="(item,index) in list" :key="index">
                            <router-link to="">{{ item.tet }}</router-link>
                        </li>	
                    </ul>
                    <ul>
                        <li v-for="(item,index) in list" :key="index">
                            <router-link to="">{{ item.tet }}</router-link>
                        </li>	
                    </ul>
                </div>
                 </div>
                  <div class="footimg">
                <img src="http://shgc.ghstf.org/images/2016-06/zy1466242372636.jpg" alt="">
            </div>
            </div>
           
         </div>      
 </div>
</template>
<script>
export default {
  name: "startPrice",
  data() {
    return {
        info:[
                {txt:'【我想对你说声谢谢】感恩遇见，感恩有你'},
                { txt:'【我想对你说声谢谢】感恩遇见，感恩有你'},
                { txt:'【我想对你说声谢谢】感恩遇见，感恩有你'},
                { txt:'【我想对你说声谢谢】感恩遇见，感恩有你'},
                 { txt:'【我想对你说声谢谢】感恩遇见，感恩有你'}
        ],
        list:[
            {
                tet:'来自	农民之子社区图书室'
            },
            {
                tet:'来自宝苑图书室信息'
            },
            {
                tet:'来自	河北省邢台市巨鹿县王虎寨镇西郗寨小学'
            },
            {
                tet:'来自	北京市昌平区金榜园小学'
            },
            {
                tet:'来自	农民之子社区图书室'
            },
            {
                tet:'来自宝苑图书室的信息'
            },
            {
                tet:'来自	河北省邢台市巨鹿县王虎寨镇西郗寨小学'
            },
            {
                tet:'来自	北京市昌平区金榜园小学'
            },
            {
                tet:'来自	农民之子社区图书室'
            },
            {
                tet:'来自宝苑图书室信息'
            },
            {
                tet:'来自	河北省邢台市巨鹿县王虎寨镇西郗寨小学'
            },
            {
                tet:'来自	北京市昌平区金榜园小学'
            },
            {
                tet:'来自宝苑图书室信息'
            }
        ],

      time: "",
      isA: true,
      isB: false,
      isC: false,
      isD: false,
      items: [
        {
          trade: "XXX",
          price: "捐献",
          riseFall: "100元",
          volume: "xxx",
          max: "捐献",
          min: "100元"
        },
        {
          trade: "XXX",
          price: "捐献",
          riseFall: "100元",
          volume: "xxx",
          max: "捐献",
          min: "100元"
        },
        {
          trade: "XXX",
          price: "捐献",
          riseFall: "100元",
          volume: "xxx",
          max: "捐献",
          min: "100元"
        },
        {
          trade: "XXX",
          price: "捐献",
          riseFall: "100元",
          volume: "xxx",
          max: "捐献",
          min: "100元"
        },
        {
          trade: "XXX",
          price: "捐献",
          riseFall: "100元",
          volume: "xxx",
          max: "捐献",
          min: "100元"
        },
        {
          trade: "XXX",
          price: "捐献",
          riseFall: "100元",
          volume: "xxx",
          max: "捐献",
          min: "100元"
        },
        {
          trade: "XXX",
          price: "捐献",
          riseFall: "100元",
          volume: "xxx",
          max: "捐献",
          min: "100元"
        },
        {
          trade: "XXX",
          price: "捐献",
          riseFall: "100元",
          volume: "xxx",
          max: "捐献",
          min: "100元"
        },
        {
          trade: "XXX",
          price: "捐献",
          riseFall: "100元",
          volume: "xxx",
          max: "捐献",
          min: "100元"
        },
        {
          trade: "XXX",
          price: "捐献",
          riseFall: "100元",
          volume: "xxx",
          max: "捐献",
          min: "100元"
        },
        {
          trade: "XXX",
          price: "捐献",
          riseFall: "100元",
          volume: "xxx",
          max: "捐献",
          min: "100元"
        }
      ],
      id: 0
    };
  },
  computed: {
    top: function() {
      return -this.id * 47 + "px";
    }
  },
  mounted() {
    this.times = setInterval(_ => {
      if (this.id < this.items.length) {
        this.id += 1;
        this.items.push(this.items[0]);
      } else {
        this.id = 0;
      }
    }, 1500);
  },
  methods: {
    times: function() {
      if (this.id < this.items.length) {
        this.id += 1;
        this.items.push(this.items[0]);
      } else {
        this.id = 0;
      }
    },
    forbidden: function() {
      clearInterval(this.times);
    },
    start: function() {
      this.time = setInterval(_ => {
        if (this.id < this.items.length) {
          this.id += 1;
          this.items.push(this.items[0]);
        } else {
          this.id = 0;
        }
      }, 1500);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.clearfix::after {
  content: "";
  width: 0;
  height: 0;
  line-height: 0;
  visibility: hidden;
  clear: both;
}
.process {
  width: 100%;
  height: 100%;
}
.frame {
  width: 1345px;
  height: 800px;
  background-color: #eceff1;
}
.substance {
  width: 1024px;
  height: 100%;
  margin: auto;
  border: 1px solid transparent;
}
.sidebar {
  margin-top: 30px;
  width: 220px;
  height: 360px;
  background-color: rgb(248, 248, 248);
  padding-top: 20px;
  border-radius: 3px;
  float: left;
  border: 1px solid #ddd;
  overflow: hidden;
}
.sidebar > ul > li {
  width: 220px;
  height: 45px;
  line-height: 45px;
  border-radius: 3px;
}
.sidebar > ul > li:first-child {
  background-color: #71aaf8;
  color: #fff;
}
.sidebar > ul > li:hover {
  background-color: #71aaf8;
  cursor: pointer;
  color: #fff;
}
.sidebar:hover .active {
  background-color: rgb(247, 236, 236);
  color: #000;
}
.maincomp {
  width: 780px;
  min-height: 350px;
  background-color: #fff;
  border: 1px solid　#ddd;
  margin-left: 245px;
  margin-top: 30px;
  border-radius: 3px;
}
#demo1 p {
  font-size: 12px;
}
.con {
  width: 300px;
  height: 300px;
  border: 1px solid #ddd;
  float:left;
  border-bottom:transparent;
}
.List {
  width: 100%;
  height: 329px;
  overflow: hidden;
  position: relative;
}
.allData {
  transition: top 1.5s;
  width: 100%;
  position: absolute;
  top: 0;
}
.allData ul {
  width: 100%;
  height: 46px;
  border-bottom: 1px solid rgba(78, 89, 133, 1);
}
.allData li {
  float: left;
  width: 16.65%;
  text-align: left;
  line-height: 46px;
}
.allData li a {
  font-size: 12px;
  color: #5196f7;
}
.con li{
    width:285px;
    height: 20px;
    font-size:16px;
    white-space: nowrap;
   text-overflow:ellipsis;
   overflow: hidden;
   line-height: 20px;
   padding:10px 0 0 10px;
   cursor: pointer;
}
.con li:hover{
    color:#5196f7;
}
.con .dot{
    display: inline-block;
    width:5px;
    height: 5px;
    background-color: #000;
    border-radius:50%;
}
.tit{
    font-size:24px;
    font-weight: bold;
    padding:20px 0 20px 0;
    color:#555;
    }
    .tit:hover{
        text-decoration: underline;
    }
    .letter{
        width:100%;
        border-bottom:1px dashed #ccc;
    }

 .pic{
     width:160px;
     height: 103px;
     padding:5px;
     float: left;
     /* overflow: hidden; */
 }   
 .t_info{
     width:120px;
     height: 40px;
     margin:30px 0 0 170px;
 }
 .helped_pro{
     height: 340px;
     width: 470px;
     border:1px solid #ccc;
     margin-left:310px;
     background:url('http://www.1kgbook.org/_include/_images/new_imgs/18.gif') no-repeat center;
     text-align: left;
 }
  .helped_pro li{
      width:150px;
      height: 20px;
      line-height: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
     padding:5px 0 0 20px;
  }
    .helped_pro li a{
        color:#555;
        font-size: 14px;
    }
        .helped_pro li a:hover{
            color:#5196f7;
        }
 .footimg img{

        width:1024px;
        height: 300px;
        cursor: pointer;
 }
</style>

