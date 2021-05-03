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
                  <a-breadcrumb-item><a>{{this.$store.state.atricleType}}</a></a-breadcrumb-item>
                  <a-breadcrumb-item><a>articleTitle</a></a-breadcrumb-item>
                </a-breadcrumb>
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

        }
    },
    created(){
      
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