<template>
<a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content style="margin-top:0vw;height:65vh;overflow:scroll"> 
          <div>
            <a-list
            v-if="comments.length"
            :data-source="comments"
            item-layout="horizontal"
            >
            <a-list-item slot="renderItem" slot-scope="item">
                <!--上面这行删除了,index-->
                <a-comment
                :author="item.author"
                :content="item.content"
                :datetime="item.datetime"
                />
            </a-list-item>
            </a-list>
            <a-comment>
                
            <!--评论框-->
            <div slot="content" style="width:80vw;position:fixed;right:10vw;bottom:0;">
                <a-form-item>
                <a-textarea :rows="2" :value="value" @change="handleChange" />
                </a-form-item>
                <a-form-item>
                <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit"
                style="left:65vw">
                    Add Comment
                </a-button>
                </a-form-item>
            </div>
            </a-comment>
        </div>
  </a-layout-content>
</a-layout>
 
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      comments: [{"author":"me","content":"首评","datetime":"2020/4/27 17:13"}],
      submitting: false,
      value: 'ewqrqwe',
      moment,
      authorName:'asdf'
    };
  },
  methods: {
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: this.authorName,
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.comments,
        ];
        this.value = '';
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  },
};
</script>