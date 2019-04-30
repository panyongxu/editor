<template>
  <div class="edit_container">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    >
    </quill-editor>
    <div
      class="bg"
      v-if="show"
      :style="{left: client.clientX,top : client.clientY}"
    >
      <div class="left">
        <div
          v-for='(item) in comGuanxi'
          :key="item"
          v-on:click="write(item)"
        >{{item}}</div>
      </div>
      <div class="right">参考资料</div>
    </div>
    <div
      class="bg"
      v-if="show1"
      :style="{left: client.clientX,top : client.clientY}"
    >
      <div class="left">
        <div
          v-for='(item) in comTongyi'
          :key="item"
          v-on:click="redShow(item)"
        >{{item}}</div>
      </div>
      <div class="right">参考资料</div>
    </div>
    <!-- <button v-on:click="saveHtml">保存</button> -->

  </div>
</template>

<script>
import { setTimeout } from 'timers';
// 工具栏配置
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
  ["blockquote", "code-block"], // 引用  代码块
  [{ header: 1 }, { header: 2 }], // 1、2 级标题
  [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
  [{ script: "sub" }, { script: "super" }], // 上标/下标
  [{ indent: "-1" }, { indent: "+1" }], // 缩进
  // [{'direction': 'rtl'}],                         // 文本方向
  [{ size: ["small", false, "large", "huge"] }], // 字体大小
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
  [{ font: [] }], // 字体种类
  [{ align: [] }], // 对齐方式
  ["clean"], // 清除文本格式
  ["link", "image", "video"] // 链接、图片、视频
];

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
  },
  data () {

    return {
      editorOption: {
        placeholder: "",
        theme: "snow", // or 'bubble'
        placeholder: "您想说点什么？",
        modules: {
          toolbar: {
            container: toolbarOptions,
            // container: "#toolbar",
            handlers: {
              image: function (value) {
                if (value) {
                  // 触发input框选择图片文件
                  document.querySelector(".avatar-uploader input").click();
                } else {
                  this.quill.format("image", false);
                }
              },
              // link: function(value) {
              //   if (value) {
              //     var href = prompt('请输入url');
              //     this.quill.format("link", href);
              //   } else {
              //     this.quill.format("link", false);
              //   }
              // },
            }
          }
        }
      },
      show: false,
      show1:false,
      nodes: {
        text: '',
        node: null,
      },
      client: {
        clientX: '',
        clientY: ''
      },
      offset: {
        startOffset: '',
        endOffset: ''
      },
      content: '',
      Range: null,
      Quill: null,
      oldIndex: null,
      gaixie: { "texts": { "1": "马云是个老年人", "2": "马云是个年轻人", "3": "马云是个中年人" } }

    }
  },
  computed: {

    comGuanxi () {
      let guanxi = { "1": "马云是个老年人", "2": "马云是个年轻人", "3": "马云是个中年人" }
      let newGuanxi = []
      for (let i in guanxi) {
        newGuanxi.push(guanxi[i])
      }
      return newGuanxi
    },
    comTongyi () {
      let guanxi = {"梁溪":["北京","上海","杭州"]}
      let newGuanxi = []
      for (let i in guanxi) {
        newGuanxi = guanxi[i]
      }
      return newGuanxi
    }
  },
  created () {
    this.content = this.value;
  },
  mounted () {
    this.rewrite(1)
  },
  methods: {
    onEditorReady (editor) { // 准备编辑器
      console.log(editor);

    },
    onEditorBlur () {
      // console.log(1);
      // this.show = false
      // this.show1 = false
    }, // 失去焦点事件
    onEditorFocus (editor) {
      // console.log(editor);
      // this.show = false

    }, // 获得焦点事件
    onEditorChange () {
      // console.log(3);
      this.$emit('content', this.content)
    }, // 内容改变事件
    saveHtml: function (event) {
      alert(this.content)
    },
    // 改写
    write (item) {
      console.log(this.$refs.myQuillEditor.quill.hasFocus());

      this.$refs.myQuillEditor.quill.focus()
      document.execCommand('insertText', false, item);
      this.show = false
    },
    // 弹框
    rewrite (rewriteTime) {

      document.getElementsByClassName('ql-editor')[0].addEventListener('mouseup', (event) => {
        const quill = this.$refs.myQuillEditor.quill
        var range = quill.getSelection();
        this.oldIndex = JSON.parse(JSON.stringify(range.index))
        if (range) {
          this.client.clientX = event.clientX + 10 + 'px'
            this.client.clientY = event.clientY + 10 + 'px'
          if (range.length == 0) {
            console.log('User cursor is at index', range.index);
            let { tagName } = event.target
            
            if (tagName == 'SPAN' && quill.getFormat().color === 'red') {
              // console.log(window.getSelection().getRangeAt(0));
              var newIndex = range.index
              if (newIndex === this.oldIndex) {
                this.show1 = true
              } else {
                this.show1 = false
              }
              
            } else if (tagName == 'SPAN' && quill.getFormat().color === 'blue') {
              console.log('我是蓝色');
               var newIndex = range.index
              if (newIndex === this.oldIndex) {
                this.show1 = true
              } else {
                this.show1 = false
              }
              
            } else {
              this.show1 = false
            }
            this.show = false
          } else {
            
            setTimeout(() => {
              var newIndex = range.index
              if (newIndex === this.oldIndex) {
                this.show = true
              } else {
                this.show = false
              }


            }, rewriteTime * 1000);
          }
        } else {
          console.log('User cursor is not in editor');
          this.show = false
           this.show1 = false
        }


      })
    },
    redShow (item) {
      this.$refs.myQuillEditor.quill.focus()
      let co =  window.getSelection().getRangeAt(0)
      console.log(co);
      co.endContainer.data = item
      this.show1 = false
    },

    onQuill (quill) {
      console.log(quill);

      return quill
    }
  }
}
</script>

<style scoped>
.bg {
  min-width: 250px;
  background: #fafcff;
  position: fixed;
  top: 200px;
  left: 100px;
  padding: 10px 0;
  border: solid 1px #d2dae4;
  box-sizing: border-box;
}
.bg .right {
  width: 20px;
  text-align: center;
  position: absolute;
  margin: 0 auto;
  right: 0;
  top: 0;
  height: 100%;
  color: #fff;
  font-size: 14px;
  background: #96aac6;
  display: inline-block;
  vertical-align: middle;
}
.bg .left {
  min-width: 250px;
  text-align: left;
}
.bg .left div {
  min-width: 250px;
  line-height: 30px;
  padding-left: 20px;
  font-size: 14px;
  cursor: pointer;
}
</style>
<style >
.edit_container .ql-editor {
  font-size: 16px;
  line-height: 30px;
}
</style>