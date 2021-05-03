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
                </a-breadcrumb>
                
                <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
                <a-list-item slot="renderItem" key="item.title" slot-scope="item" ><!--这里本来有,index 删了没事-->
                    <template v-for="{ type, text } in actions" slot="actions">
                    <span :key="type"><!--这里是为每个组件下面的图标赋值--->
                        <a-icon :type="type" style="margin-right: 8px" />
                        {{ text }}
                    </span>
                    </template>
            
                    <a-list-item-meta :description="item.description">
                      <!--在这里改变文章的跳转路由-->
                    <a slot="title" @click="clickToArticle(item.title)">{{ item.title }}</a>
                    </a-list-item-meta>
                    {{ item.content }}<!--这里是文章内容-->
                </a-list-item>
                </a-list>
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
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://www.antdv.com/',//跳转连接
    title: `ant design vue part ${i}`,//第几个
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content://内容
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficientWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
listData.push({
    href: '1231',//跳转连接
    title: `新家的`,//第几个
    description:
      '顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶.',
    content://内容
      '顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶yp顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶efficiently.',
});
export default {
    name:"Frontend",
    data(){
        return{
            listData,
        pagination: {
        /*可以直接在这里该边下面的页码 */
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      actions: [///这里表示文章下面的属性
        { type: 'eye', text: '156' },
        { type: 'like-o', text: '2' },
        { type: 'message' , text: '3'},
        { type: 'history' ,text:"2020-4-26 20:00:00"}
      ],

        }
    },
    methods:{
      clickToArticle(title){
        //这里又是路由  也就是替换当前的内容 需要将当前的标题 和数据库中的内容传过去
        console.log('?????标题按??',title)
         this.$store.state.currentArticle = title;
        this.$router.replace("/fblog/article");
      }
    },
    created(){
      if(this.$store.state.allArticles.length==0){//说明刷新了  重新加载数据
          this.$store.state.javascriptArticles = JSON.parse(sessionStorage.getItem('javascriptArticles'))
          this.$store.state.cssArticles = JSON.parse(sessionStorage.getItem('cssArticles'));
          this.$store.state.htmlArticles = JSON.parse(sessionStorage.getItem('htmlArticles'));
          this.$store.state.nodeArticles = JSON.parse(sessionStorage.getItem('nodeArticles'));
          this.$store.state.koaArticles = JSON.parse(sessionStorage.getItem('koaArticles'));
          this.$store.state.vueArticles = JSON.parse(sessionStorage.getItem('vueArticles'));
          this.$store.state.reactArticles = JSON.parse(sessionStorage.getItem('reactArticles'));
          this.$store.state.otherArticles = JSON.parse(sessionStorage.getItem('otherArticles'));
          this.$store.state.allArticles = JSON.parse(sessionStorage.getItem('allArticles'));
          this.$store.state.atricleType = sessionStorage.getItem("articleType");//默认
        }
      if(this.$store.state.atricleType=="Koa"){
          this.listData=[];
          this.listData = this.$store.state.koaArticles;
          console.log(this.listData)
        }
        if(this.$store.state.atricleType=="Node"){
          this.listData=[];
          this.listData = this.$store.state.nodeArticles;
          console.log(this.listData)
        }
    },
    watch:{
      '$store.state.atricleType':function(){
        console.log("watch",this.$store.state.atricleType)
        if(this.$store.state.atricleType=="Koa"){
          this.listData=[];
          this.listData = this.$store.state.koaArticles;
          console.log(this.listData)
        }
        if(this.$store.state.atricleType=="Node"){
          this.listData=[];
          this.listData = this.$store.state.nodeArticles;
          console.log(this.listData)
        }
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