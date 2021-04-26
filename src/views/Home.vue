<template>
  <a-layout id="components-layout-demo-top" class="layout">

    <a-layout-header style="visibility:hidden">
    <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px'}"
        style="margin-left:5vw"
      >
      <a-menu-item  id="myFlag"  style="background-color:#001529;font-size:2.2rem">Fblog</a-menu-item>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper">首页</span>
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
        <span slot="title" class="submenu-title-wrapper">留言板</span>
      </a-sub-menu>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper">邻居</span>
      </a-sub-menu>
      <a-sub-menu >
        <span slot="title" class="submenu-title-wrapper">其他</span>
      </a-sub-menu>
      <a-input-search  placeholder="input search text" style="margin-left:15vw;width: 200px" @search="onSearch" /><!--缩小放大 样式就不见了-->
    </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 5vw;overflow:hidden" >
          <!--轮播图-->
          <a-breadcrumb style="margin: 3vw"></a-breadcrumb>
          <a-carousel arrows >
            <div
              slot="prevArrow"
              class="custom-slick-arrow"
              style="left: 10px;zIndex: 1"
            >
              <a-icon type="left-circle" />
            </div>
            <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
              <a-icon type="right-circle" />
            </div>
            <div><img src="../ScrollImage/1.png" alt=""></div>
            <div><img src="../ScrollImage/2.png" alt=""></div>
            <div><img src="../ScrollImage/3.png" alt=""></div>
          </a-carousel>


      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <!--文章内容-->
        <!-- -->
        <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
          <a-list-item slot="renderItem" key="item.title" slot-scope="item" ><!--这里本来有,index 删了没事-->
            <template v-for="{ type, text } in actions" slot="actions">
              <span :key="type"><!--这里是为每个组件下面的图标赋值--->
                <a-icon :type="type" style="margin-right: 8px" />
                {{ text }}
              </span>
            </template>
            <img
              slot="extra"
              width="272"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
            <a-list-item-meta :description="item.description">
              <a slot="title" :href="item.href">{{ item.title }}</a>
            </a-list-item-meta>
            {{ item.content }}<!--这里是文章内容-->
          </a-list-item>
        </a-list>
      </div>

      </a-layout-content>

    <a-layout-footer style="text-align: center">
      Use The Ant Design
    </a-layout-footer>
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
  components: {  },
    name:"Home",
    data(){
        return{
          frontend:["Javascript",'CSS','HTML'],
          afterend:["Node","Ko2"],
          frame:["Vue","Reject"],
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
            console.log('条了')
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
            console.log('条了')
            break;
          }
          case this.afterend[1]:{
            console.log('嗯嗯?')
            break;
          }
          case this.afterend[2]:{
            console.log('嘿嘿')
            break;
          }
        }
      },
      clickFrame(index){
        switch(index){
          case this.f[0]:{
            console.log('条了')
            break;
          }
          case this.afterend[1]:{
            console.log('嗯嗯?')
            break;
          }
        }
      },
      onSearch(){

      },
    },
    
}
</script>

<style scoped>

/* a-input-search{
  display: none;
} */
#components-layout-demo-top #myFlag{
  background-color: aquamarine;
}


.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 30vw;
  line-height: 160px;
  background: #566d99;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.ant-carousel img{
  background-size:cover;
  width:100%;
  height:100%;
}
</style>
