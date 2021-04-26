<template>
  <div id="app">
    <a-layout-header style="position:fixed;width:100%;z-index:999">
    <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px'}"
        style="margin-left:5vw"
      >
      <a-menu-item  id="myFlag"  style="background-color:#001529;font-size:2.2rem">Fblog</a-menu-item>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper" @click="clickHome">首页</span>
      </a-sub-menu>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">前端</span>
          <a-menu-item v-for="(items,index) in frontend" :key="index" @click="clickFrontEnd(items)">{{items}}</a-menu-item>
      </a-sub-menu>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper">后端</span>
          <a-menu-item v-for="(items,index) in afterend" :key = "index" @click="clickAfterEnd(items)">{{items}}</a-menu-item>
      </a-sub-menu>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper">框架</span>
          <a-menu-item v-for="(items,index) in frame" :key = "index" @click="clickFrame(items)">{{items}}</a-menu-item>
      </a-sub-menu>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper" @click="clickMessageBoard">留言板</span>
      </a-sub-menu>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper" @click="clickNeighbor">邻居</span>
      </a-sub-menu>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper" @click="clickOther">其他</span>
      </a-sub-menu>
      <!-- <a-input-search  placeholder="input search text" style="margin-left:15vw;width: 200px" @search="onSearch" /> -->
      <!--缩小放大 样式就不见了-->
    </a-menu>
         
    </a-layout-header>
 <router-view/>
  </div>
</template>

<style>
.html,.body{
  margin:0;
  padding: 0;
  font-size: 16px;
}
</style>

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

export default {
  components: {  },
    name:"",
    data(){
        return{
          frontend:["Javascript",'CSS','HTML'],
          afterend:["Node","Ko2"],
          frame:["Vue","React"],
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
      clickFrontEnd(index){
        switch(index){
          case this.frontend[0]:{
            this.$router.replace("/fblog/frontend")
            break;
          }
          case this.frontend[1]:{
            
            console.log('嗯嗯?')
            break;
          }
          case this.frontend[2]:{
            console.log('嘿嘿')
            break;
          }
        }
      },
      clickAfterEnd(index){
        switch(index){
          case this.afterend[0]:{
            this.$router.replace("/fblog/afterend")
            console.log('条了')
            break;
          }
          case this.afterend[1]:{
            break;
          }
        }
      },
      clickFrame(index){
        switch(index){
          case this.frame[0]:{
            this.$router.replace("/fblog/frame")
            break;
          }
          case this.frame[1]:{
            break;
          }
        }
      },
      clickMessageBoard(){
        this.$router.replace("/fblog/messageboard")
      },
      clickNeighbor(){
        this.$router.replace("/fblog/neighbor")
      },
      clickOther(){//
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
