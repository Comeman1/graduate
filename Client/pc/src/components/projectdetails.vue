<template>
    <div class="dis">
        <div class="detailsbox">
                <div class="ball">
                    <img src="../assets/1.jpg" alt="">
                    <img src="../assets/2.jpg" alt="">
                       <img src="../assets/3.jpg" alt="">
                </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"prodet",
    data(){
        return{
            list:[
                {
                    url:"../assets/1.jpg"
                },
            ]
        }
    }
}
</script>
<style>
 .detailsbox{
     width:100%;
     height: 2000px;
     background-color: #eee;
 }
 .ball{
     width:70%;
     height: 970px;
     border:1px slid #ddd;
     background-color: #fff;
     margin:auto;
    padding-top:30px;
 }
</style>


