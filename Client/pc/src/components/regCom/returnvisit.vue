<template>
<!-- 志愿者回访模块 -->
    <div class="returnvisit">
            <div class="visit">
                <div class="tp"></div>
                <form action="">
                    <fieldset>
                        <legend>请填写回访申请资料</legend>
                        <div class="inpu">
                            <ul>
                                <li>
                                    <p>真实姓名</p>
                                    <input type="text" required>
                                </li>
                                <li>
                                    <p>邮箱</p>
                                    <input type="text" value="@" required>
                                </li>
                                <li>
                                    <p>手机</p>
                                    <input type="text" required>
                                </li>
                                <li>
                                    <p>职业</p>
                                    <input type="text" required>
                                </li>
                                <li>
                                    <p>志愿回访的省份</p>
                                    <input type="text" required>
                                </li>
                                <li>
                                    <p>志愿回访的学校</p>
                                    <input type="text" required>
                                </li>
                                <li>
                                    <p>志愿回访的时间</p>
                                    <input type="date" required>
                                </li>
                                <li>
                                    <p>回访经历</p>
                                    <textarea type="text" cols="40" rows="5" required></textarea>
                                </li>
                            </ul>
                             <div class="authcode clearfix">
                                    <span>验证码:</span>
                                    <img :src="url" alt="">
                                </div>
                                <div class="fr">
                                    <input type="text" name="" id="">
                                    <p  @click="change"><router-link to="" style="padding:10px 0 0 5px;display:inline-block;"> 看不清，换一张</router-link></p>
                                </div>
                        </div>
                    </fieldset>
                </form>
            </div>
    </div>
</template>
<script>
export default {
    name:"returnvisit",
    data(){
        return{
                url:'https://yangfanbook.sina.com.cn/user/getvalidatecode?d=1',
                src:'https://yangfanbook.sina.com.cn/user/getvalidatecode?rand=1542877650442'
        }
    },
    methods:{
        change(){
                this.url=this.src
        }
    }

}
</script>
<style scoped>
.clearfix::after{
    content:"";
    width:0;
    height: 0;
    visibility: hidden;
    clear: both;
}
.visit{
    width:500px;
    height: 580px;
    text-align: left;
}
fieldset{
    width:480px;
    height: 550px;
    padding-left:30px;
}
.inpu ul>li{
    padding:5px 0;
}
.inpu input{
    border-radius:4px;
}
.inpu  p{
    padding-bottom:5px;
    font-size: 12px;
}
.authcode{
    width:60px;
    height: 50px;
    float:left;
    line-height: 30px;
    overflow: hidden;
}
</style>


