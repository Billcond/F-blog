<template>
     <a-layout>
      <a-layout-header class="header">Header</a-layout-header>
      <a-layout>
        <a-layout-content>Content</a-layout-content>
        <a-layout-sider>Sider</a-layout-sider>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</template>
<script>
export default {
    name:"Afterend",
    data(){
        return{
            img:[""],

        }
    },
    methods:{
    }
}
</script>
<style scoped>
.outer{
    width:200px;
    height:300px;
    background-color: beige;
}
</style>