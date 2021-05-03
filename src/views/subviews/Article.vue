<template>
    <a-layout>
      <a-layout-header class="header">
          <a-menu
            theme="dark"
            mode="horizontal"
            :style="{ lineHeight: '64px' }"></a-menu>
      </a-layout-header>
      <a-layout>
        
        <a-layout-content >
            <div :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <!--文章内容-->
                <!-- -->
                <a-breadcrumb>
                  <a-breadcrumb-item><a href="/">Home</a></a-breadcrumb-item>
                  <a-breadcrumb-item><a @click="clickBackTo()">{{this.$store.state.atricleType}}</a></a-breadcrumb-item>
                  <a-breadcrumb-item><a>{{this.$store.state.currentArticle}}</a></a-breadcrumb-item>
                </a-breadcrumb>
                <div style="background:#ECECEC;">
                <a-card :title="title" :bordered="false" style="width: 100%">
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </a-card>
              </div>
            </div>
        </a-layout-content>
        <!--侧边栏-->
        <a-layout-sider class="side" style="flex:0 0 300px;max-width:300px;min-width:300px;width:300px">
          <a-card title="" style="position:fixed;top:20vh;width:100%">
            <p style="fontSize: 18px;color: rgba(0, 0, 0); marginBottom: 16px;fontWeight: 500">
              <b>阅读最多</b>
            </p>
            <a-card title="Inner card title">
              adsasfd
            </a-card>
            <a-card title="Inner card title" :style="{ marginTop: '16px' }">
              ?????
            </a-card>
          </a-card>
        </a-layout-sider>
      </a-layout>
      
      <a-layout-footer></a-layout-footer>
    </a-layout>
</template>

<script>

export default {
    name:"Article",
    data(){
        return{
          title:"asdf"
        }
    },
    methods:{
      clickBackTo(){
        console.log('应该返回上一层',this.$store.state.atricleType)
        let temp = this.$store.state.atricleType;
        switch(temp){
          case "JavaScript":{
            this.$router.replace('/fblog/frontend')
            console.log("BacktoJavascript")
            break;
          }
          case "CSS":{
            this.$router.replace('/fblog/frontend')
            console.log("BacktoCSS")
            break;
          }
          case "HTML":{
            this.$router.replace('/fblog/frontend')
            console.log("BacktoHTML")
            break;
          }
          case "Node":{
            this.$router.replace('/fblog/afterend')
            console.log("BacktNODE")
            break;
          }
          case "Koa":{
            this.$router.replace('/fblog/afterend')
            console.log("BacktoKOAt")
            break;
          }
          case "Vue":{
            this.$router.replace('/fblog/frame')
            console.log("BacktoVUE")
            break;
          }
          case "React":{
            this.$router.replace('/fblog/frame')
            console.log("BacktoREACT")
            break;
          }
          case "Other":{
            this.$router.replace('/fblog/other')
            console.log("BacktoOTHER")
            break;
          }
        }
      }
    },
    created(){
      this.title = this.$store.state.currentArticle
    },
    watch:{
      '$store.state.atricleType':function(){
        
      }
    }
}
</script>
<style scoped>
.side{
  background: rgb(240,242,245);
}
@media screen and (max-width:600px) {
  .side{
    display: none;
    ;
  }
}
</style>