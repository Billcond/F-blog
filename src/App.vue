<template>
  <div id="app" >
    <a-layout-header style="position:fixed;width:100%;z-index:999">
    <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px'}"
        style="margin-left:5vw"
      >
      <a-menu-item  id="myFlag"  style="background-color:#001529;font-size:2.2rem">Fblog</a-menu-item>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper"  @click="clickHome">首页</span>
      </a-sub-menu>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">前端</span>
          <a-menu-item  v-for="(items) in frontend" :key="items" @click="clickFrontEnd(items)">{{items}}</a-menu-item>
      </a-sub-menu>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper">后端</span>
          <a-menu-item v-for="(items) in afterend" :key = "items" @click="clickAfterEnd(items)">{{items}}</a-menu-item>
      </a-sub-menu>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper">框架</span>
          <a-menu-item v-for="(items) in frame" :key = "items" @click="clickFrame(items)">{{items}}</a-menu-item>
      </a-sub-menu>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper" @click="clickMessageBoard('messageboard')">留言板</span>
      </a-sub-menu>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper" @click="clickNeighbor('neighbor')">邻居</span>
      </a-sub-menu>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper" @click="clickOther('other')">其他</span>
      </a-sub-menu>
      <!-- <a-input-search  placeholder="input search text" style="margin-left:15vw;width: 200px" @search="onSearch" /> -->
      <!--缩小放大 样式就不见了-->
    </a-menu>  
    </a-layout-header>
    <router-view/>
  </div>
</template>



<script>
export default {
  components: {  },
    name:"",
    data(){
        return{
          frontend:["Javascript",'CSS','HTML'],
          afterend:["Node","Ko2"],
          frame:["Vue","React"],
          buttonKey:1,
        }
    },
    methods:{
      clickFrontEnd(index){
        switch(index){
          case this.frontend[0]:{
            this.$router.replace("/fblog/frontend")
            console.log(this.frontend[0])
            break;
          }
          case this.frontend[1]:{
            console.log(this.frontend[1])
            break;
          }
          case this.frontend[2]:{
            console.log(this.frontend[2])
            break;
          }
        }
      },
      clickAfterEnd(index){
        switch(index){
          case this.afterend[0]:{
            this.$router.replace("/fblog/afterend")
            console.log(this.afterend[0])
            break;
          }
          case this.afterend[1]:{
            console.log(this.afterend[0])
            break;
          }
        }
      },
      clickFrame(index){
        switch(index){
          case this.frame[0]:{
            this.$router.replace("/fblog/frame")
            console.log(this.frame[0])
            break;
          }
          case this.frame[1]:{
            console.log(this.frame[1])
            break;
          }
        }
      },
      clickMessageBoard(msg){
        console.log(msg)
        this.$router.replace("/fblog/messageboard")
      },
      clickNeighbor(msg){
        console.log(msg)
        this.$router.replace("/fblog/neighbor")
      },
      clickOther(msg){//
      console.log(msg)
        this.$router.push("/fblog/other")
      },
      clickHome(){
        this.$router.push("/fblog/home")
      }
      // clickOnSearch(){

      // },
    },
    
}
</script>
<style>
.html,.body{
  margin:0;
  padding: 0;
  font-size: 16px;
}
#app{
  /* width:100vw; 这里设置了100 就会横向有一个margin的占*/
  overflow: hidden;
}
</style>