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
    data(){
        return{
          frontend:["JavaScript",'CSS','HTML'],
          afterend:["Node","Koa"],
          frame:["Vue","React"],
          buttonKey:1,
        }
    },
    methods:{
      clickFrontEnd(index){
        if(this.$router.history.current.path!=="/fblog/frontend")
        this.$router.replace("/fblog/frontend")
        switch(index){
          case this.frontend[0]:{
            this.$store.state.atricleType=this.frontend[0];
            sessionStorage.setItem("articleType",this.$store.state.atricleType) //保存当前的位置  防止刷新丢失
            //所谓commit  就是模仿了git中的commit 可以方便的在devtool中方便的查看更改过的内容
            //就用git 的想法来理解吧   实际上  上面的更改之后已经在state中可见了 这里通过commit一下就可以在devtool中查看了  后面的内容可以在commit中的事件传入
            // this.$store.commit("some",this.frontend[0])
            console.log(this.frontend[0],this.$store.state.atricleType)
            break;
          }
          case this.frontend[1]:{
            this.$store.state.atricleType=this.frontend[1];
            sessionStorage.setItem("articleType",this.$store.state.atricleType) //保存当前的位置  防止刷新丢失
            console.log(this.frontend[1],this.$store.state.atricleType)
            break;
          }
          case this.frontend[2]:{
            this.$store.state.atricleType=this.frontend[2];
            sessionStorage.setItem("articleType",this.$store.state.atricleType) //保存当前的位置  防止刷新丢失
            console.log(this.frontend[2],this.$store.state.atricleType)
            break;
          }
        }
      },
      clickAfterEnd(index){
        if(this.$router.history.current.path!=="/fblog/afterend")
            this.$router.replace("/fblog/afterend")
        switch(index){
          case this.afterend[0]:{
            this.$store.state.atricleType=this.afterend[0];
            sessionStorage.setItem("articleType",this.$store.state.atricleType) //保存当前的位置  防止刷新丢失
            console.log(this.afterend[0])
            break;
          }
          case this.afterend[1]:{
            this.$store.state.atricleType=this.afterend[1];
            sessionStorage.setItem("articleType",this.$store.state.atricleType) //保存当前的位置  防止刷新丢失
            console.log(this.afterend[0])
            break;
          }
        }
      },
      clickFrame(index){
        if(this.$router.history.current.path!=="/fblog/frame")
            this.$router.replace("/fblog/frame")
        switch(index){
          case this.frame[0]:{
            this.$store.state.atricleType=this.frame[0];
            sessionStorage.setItem("articleType",this.$store.state.atricleType) //保存当前的位置  防止刷新丢失
            console.log(this.frame[0])
            break;
          }
          case this.frame[1]:{
            this.$store.state.atricleType=this.frame[1];
            sessionStorage.setItem("articleType",this.$store.state.atricleType) //保存当前的位置  防止刷新丢失
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
      if(this.$router.history.current.path!=="/fblog/other")
      this.$router.push("/fblog/other")
      this.$store.state.atricleType="Other";
      sessionStorage.setItem("articleType",this.$store.state.atricleType) //保存当前的位置  防止刷新丢失
      console.log(msg)  
      },
      clickHome(){
        if(this.$router.history.current.path!=="/fblog/home")
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