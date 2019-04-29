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
          @click="write(item)"
        >{{item}}</div>
      </div>
      <div class="right">参考资料</div>
    </div>
    <button v-on:click="saveHtml">保存</button>
    <p id="p" v-show="false">123</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: `<p>hello world</p>`,
      editorOption: {},
      show: false,
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
      gaixie: { "texts": { "1": "马云是个老年人", "2": "马云是个年轻人", "3": "马云是个中年人" } }

    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill;
    },
    comGuanxi () {
      let guanxi = { "1": "马云是个老年人", "2": "马云是个年轻人", "3": "马云是个中年人" }
      let newGuanxi = []
      for (let i in guanxi) {
        newGuanxi.push(guanxi[i])
      }
      return newGuanxi
    }
  },
  mounted () {
    this.rewrite()
  },
  methods: {
    onEditorReady (editor) { // 准备编辑器
      console.log(editor);

    },
    onEditorBlur () {
      console.log(1);
    }, // 失去焦点事件
    onEditorFocus (editor) {
      console.log(editor);
    }, // 获得焦点事件
    onEditorChange () {
      console.log(3);
    }, // 内容改变事件
    saveHtml: function (event) {
      alert(this.content);
    },
    // 弹框
    rewrite () {
      document.getElementsByClassName('ql-editor')[0].addEventListener('mouseup', (event) => {
        console.log(event);
        //  {this.client.clientX, this.client.clientY} = event

        console.log(this.client);
        let text = window.getSelection()
        console.log(text.getRangeAt(0));
        if (text.toString()) {
          this.client.clientX = event.clientX + 10 + 'px'
          this.client.clientY = event.clientY + 10 + 'px'
          this.show = true
        } else {
          this.show = false
        }
        this.nodes.text = window.getSelection(0)
        console.log(window.getSelection().getRangeAt(0));

        // this.nodes.node = window.getSelection().getRangeAt(0)
        // let { startOffset, endOffset } = window.getSelection().getRangeAt(0)
        this.offset.startOffset = window.getSelection().getRangeAt(0).startOffset
        this.offset.endOffset = window.getSelection().getRangeAt(0).endOffset
        var range = window.getSelection().getRangeAt(0)
        var referenceNode = document.getElementById('p')

        range.selectNode(referenceNode);
        console.log(range.toString());
        
      })
    },
    // 改写
    write (item) {
      let a = [...this.nodes.text]
      // .splice( 
      //   this.offset.startOffset,
      //    this.offset.endOffset,
      //    item
      //   )

      console.log(this.nodes.text.toString());

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
