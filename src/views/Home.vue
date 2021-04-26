<template>
    <div class="Home">
        <header class="title">
            <router-link to='/fblog/frontend'>前端</router-link>
            <router-link to='/fblog/afterend'>后端</router-link>
            <router-link to='/fblog/life'>生活</router-link>
            <router-link to='/fblog/neighbor'>邻居</router-link>
            <!--这里增加个时间线-->
            <router-link to='/fblog/messageboard'>留言</router-link>
            <div class="search"></div>
        </header>
        <div class="sllideshow"></div>
        <div class="content">
            <article>
                <!--最近文章 放5篇-->
            </article>
            <aside>
                <!--简书的模式  推荐阅读  fix定位-->
            </aside>
        </div>
        <footer></footer>
        <router-view></router-view>
    </div> 
</template>
<script>

export default {
    name:"Home",
    data(){
        return{

        }
    },
    mounted(){
        console.log("Base_URL:",process.env.BASE_URL)//这个不行
        console.log("VUE_APP_API",process.env.VUE_APP_API)//这个会根据运行环境的不同改变
    },
    components:{

    }
}
</script>
<style scoped>
    .title{
        width:100%;
        height:200px;
        background-color: aquamarine;
    }
</style>