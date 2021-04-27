<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header style="visibility:hidden">
    <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px'}"
        style="margin-left:5vw"
      >
    </a-menu>
    </a-layout-header>
 <!--轮播图-->
    <a-carousel arrows style="padding: 3vw 5vw;overflow:hidden" >
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

    <!--布局 中间的内容-->
    <a-layout-content style="padding: 0 5vw;overflow:hidden" >
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px'}">
        <!--文章内容-->
        <!-- -->
        <h1>最新发布</h1>
        <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
          <a-list-item slot="renderItem" key="item.title" slot-scope="item" ><!--这里本来有,index 删了没事-->
            <template v-for="{ type, text } in actions" slot="actions">
              <span :key="type"><!--这里是为每个组件下面的图标赋值--->
                <a-icon :type="type" style="margin-right: 8px" />
                {{ text }}
              </span>
            </template>
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
