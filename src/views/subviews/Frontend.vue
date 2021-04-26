<template>
    <a-layout>
      <a-layout-header class="header">
          <a-menu
            theme="dark"
            mode="horizontal"
            :default-selected-keys="['2']"
            :style="{ lineHeight: '64px' }"></a-menu>
      </a-layout-header>
      <a-layout>
        <a-layout-content >
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
                    
                    <a-list-item-meta :description="item.description">
                    <a slot="title" :href="item.href">{{ item.title }}</a>
                    </a-list-item-meta>
                    {{ item.content }}<!--这里是文章内容-->
                </a-list-item>
                </a-list>
            </div>
        </a-layout-content>


        <a-layout-sider style="visibility:hidden;width:300px">Sider</a-layout-sider>
        <!-- <div class="asdf"></div> -->
      </a-layout>
      
      <a-layout-footer>Footer</a-layout-footer>
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
    }
}
</script>
<style scoped>
 .asdf{
     width:200px;
     height:200px;
     background-color: aquamarine;
     display: fixed;
     right:0px;
     top:0px
 }
</style>