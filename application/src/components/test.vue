<template>
	<div class="news">
        <!-- 我是新闻组件 -->
        <!-- <ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in list" :key="item.id">{{ item }}</li>
</ul> -->
    </div>
</template>
<script>
export default{
    name:'test',
    data(){
        return{
            list:[],
            loading:''
        }
    },
    methods:{
        loadMore() {
  this.loading = false;
  setTimeout(() => {
    let last = this.list[this.list.length - 1];
    for (let i = 1; i <= 10; i++) {
      this.list.push(last + i);
    }
    this.loading = false;
  }, 2500);
}
    }
}
</script>
<style scoped>

</style>

