<template>
<!-- 我的消息模块 -->
    <div class="Letter">
        <div class="sendbox">
           <ul >
               <li class="Amsg" v-for="(item,index) in List" :key="index.id">
                   <img class="headphoto" :src="item.url" alt="">
                   <span class="name">{{ item.name }}</span>
                   <p class="ques">{{ item.question }}</p>
               </li>
           </ul>     
        </div>
    </div>
</template>
<script>
export default {
    name:'mymsg',
    data(){
        return{
                List:[
                    {
                        id:1,
                        url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2069525161,394427108&fm=27&gp=0.jpg',
                        name:'昵称是：xxx',
                        question:'请问您这个项目现在还在用吗？'
                    },
                    {
                        id:2,
                        url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2069525161,394427108&fm=27&gp=0.jpg',
                        name:'昵称是：xxx',
                        question:'请问您这个项目现在还在用吗？'
                    },
                    {
                        id:3,
                        url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2069525161,394427108&fm=27&gp=0.jpg',
                        name:'昵称是：xxx',
                        question:'请问您这个项目现在还在用吗？'
                    },
                    {
                        id:4,
                        url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2069525161,394427108&fm=27&gp=0.jpg',
                        name:'昵称是：xxx',
                        question:'请问您这个项目现在还在用吗？'
                    }
                ]
        }
    }
}
</script>
<style scoped>
    .sendbox{
        width:60%;
        height: 400px;
        border:1px dashed #ddd;
                position: relative;
                border-radius:5px;

    }
    .Amsg{
        width:100%;
        height: 60px;
        /* line-height: 0px; */
        word-wrap: break-all;
        text-align:left;
        border-bottom:1px dashed #eee;
        padding:5px 0 0 20px;
    }
    .headphoto{
        width:50px;
        height: 50px;
        border-radius:50%;
        border:1px solid #ddd;
    }
    .sendbox .name{
            display: inline-block;
            position:absolute;
            top:10px;
            left:90px;
            font-size:12px;
    }
    .ques{
        position: absolute;
        top:30px;
        left:90px;
    }
</style>

