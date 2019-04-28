<template>
  <div class="hello">
    <header>
      <div class="left">LOGO</div>
      <div class="right">
        <el-button type="primary btn">预览</el-button>
        <el-button
          type="success btn"
          style="margin-left: 50px"
        >保存</el-button>
      </div>
    </header>
    <main>

      <div class="left">
        <div style="margin-bottom:12px">
          <el-input
            v-model="input"
            placeholder="春节旅游"
            style=""
          >
            <i
              slot="suffix"
              class="el-input__icon el-icon-tickets"
              style="font-size:20px;maigin-right:100px"
            ></i>
          </el-input>

        </div>
        <div class="search toal">
          <div class="return">
            <i class="el-icon-back"></i>
            <i class="el-icon-right"></i>
          </div>
          <i class="el-icon-folder-checked"></i>
          <i class="el-icon-paperclip"></i>
          <i class="el-icon-reading"></i>
          <i
            class="el-icon-pie-chart"
            style="color:red"
          ></i>
        </div>
        <div class="search text">
          春游，古称 <span class="blue">踏青</span> ，是一种古老的传统族 <span class="blue">民俗</span> 文体活动，古时一般在上巳节，清明节。“三月三日气象新，长安水边多丽人。”杜甫描绘的
          就是唐代人们春游的盛况。 春季郊野，万木吐翠，芳草茵茵，百鸟争鸣，阳光和熙，空气清新，置身于这如诗如画的环境中，能使人心胸
          开阔，疲劳消除，精神振奋，还能促进细胞的新陈代谢，改善血液循环，增加腰腿肌肉的活动，加强心脏和肺的功能，可降低血脂、血压、
          防治心血管病，因而，春游具有特殊的保健作用.芳草茵茵，百鸟争明，阳光和熙，空气清新，置身于这如诗如画的环境中，能使人心胸
          开阔，疲劳消除，精神振奋，还能促进细胞的新陈代谢，改善血液循环，增加腰腿肌肉的活动，加强心脏和肺的功能，可降低血脂、血压、
          防治心血管病，因而，春游具有特殊的保健作用.芳草茵茵，<span class="red">百鸟争鸣</span>，阳光和熙，空气清新，置身于这如诗如画的环境中，能使人心胸
          开阔，疲劳消除，精神振奋，还能促进细胞的新陈代谢，改善血液循环，增加腰腿肌肉的活动，加强心脏和肺的功能，可降低血脂、血压、
          防治心血管病，因而，春游具有特殊的保健作用.芳草茵茵，百鸟争鸣，阳光和熙，空气清新，置身于这如诗如画的环境中，能使人心胸
          开阔，疲劳消除，精神振奋.
        </div>
        <div class="search">
          <div class="header">
            <i class="el-icon-copy-document blue"></i>
            <i class="el-icon-paperclip"></i>
            <i class="el-icon-reading"></i>
          </div>
          <div class="p1"></div>
          <el-input
            v-model="input"
            placeholder="标题输入"
            style=""
          >
          </el-input>
        </div>
        <div class="search">
          <div class="header">
            <i class="el-icon-copy-document blue"></i>
            <i class="el-icon-paperclip"></i>
            <i class="el-icon-reading"></i>
            <i class="el-icon-copy-document blue"></i>
            <i class="el-icon-paperclip"></i>
            <i class="el-icon-reading"></i>
            <i class="el-icon-copy-document blue"></i>
            <i class="el-icon-paperclip"></i>
            <i class="el-icon-reading"></i>
          </div>
          <div class="compile">
            <div class="title"><i class="el-icon-picture"></i></div>
            <div class="content">
              <div class="txt">
                <el-input
                  type="textarea"
                  style="height:100px"
                  placeholder="知人者智，自知者明。胜人者有力，自胜者强。"
                  v-model="textarea"
                  maxlength="250"
                  rows='4'
                  show-word-limit
                >
                </el-input>
                <div>
                  <el-input
                    size='mini'
                    style="width:200px;maegin-bottom:5px"
                    v-model="input"
                    placeholder="老子"
                  >老子</el-input>
                </div>
                <div>
                  <el-input
                    size='mini'
                    style="width:200px"
                    v-model="input"
                    placeholder="发表于2019年人民日报"
                  >发表于2019年人民日报</el-input>
                </div>

              </div>
            </div>
          </div>

        </div>
        <div class="search">
          <div class="header">
            <el-switch
              v-model="value2"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="自动播放"
            >
            </el-switch>

          </div>
          <div class="p3">
            <video controls="controls" src="./../assets/video.mp4"></video>
          </div>
          <el-input
            v-model="input"
            placeholder="标题输入"
            style=""
          >
          </el-input>
        </div>

        <div class="search">
          <div class="header">
            <i class="el-icon-copy-document blue"></i>
            <i class="el-icon-paperclip"></i>
            <i class="el-icon-reading"></i>
          </div>
          <div class="p2"></div>
          <el-input
            v-model="input"
            placeholder="标题输入"
            style=""
          >
          </el-input>

        </div>

        <div class="tool">
          <div>
            <i
              class="el-icon-circle-plus-outline"
              style="font-size:40px;color:#3367CC;margin-bottom:30px;"
            ></i>
          </div>
          <div>
            <i
              class="el-icon-rank"
              style="font-size:20px;margin-bottom:10px;"
            ></i>
          </div>
          <div>
            <i
              class="el-icon-copy-document"
              style="font-size:20px;margin-bottom:10px;"
            ></i>
          </div>
          <div>
            <i
              class="el-icon-delete"
              style="font-size:20px;margin-bottom:10px;"
            ></i>
          </div>
        </div>
      </div>
      <div class="right"></div>

    </main>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      input: '',
      value2:'',
      textarea: '知人者智，自知者明。胜人者有力，自胜者强。'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  margin-bottom: 12px;
  border: solid 1px #d2dae4;
  border-radius: 4px;
}
.search .p1 {
  width: 100%;
  height: 400px;
  background: url("./../assets/p1.jpg") no-repeat;
  background-size: cover;
  margin-bottom: 5px;
}
.search .p2 {
  width: 100%;
  height: 400px;
  background: url("./../assets/p2.jpg") no-repeat;
  background-size: cover;
  margin-bottom: 5px;
}
.search .p3 {
  width: 100%;
  height: 400px;
  margin-bottom: 5px;
}
.search  video {
  width: inherit;
  height: inherit;
  object-fit: fill
}
.search .compile {
  width: 100%;
  height: 250px;
  padding: 10px;
  box-sizing: border-box;
}
.compile .title {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* margin-bottom: 10px; */
}
.compile .content {
  padding-left: 15px;
}
.compile .content .txt {
  width: 850px;
  border-left: 5px solid #000;
  height: 170px;
  padding-left: 10px;
}
.compile .content div {
  text-align: left;
  margin-bottom: 5px;
}
.compile .title i {
  font-size: 30px;
  color: #999;
}
.search .header {
  height: 45px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
}
.search .header i {
  font-size: 18px;
  margin-right: 20px;
}
.search.toal {
  height: 55px;
  line-height: 55px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.search.text {
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  text-align: left;
  line-height: 28px;
}
.blue {
  color: #199efb;
}
.search.text .blue {
  color: #199efb;
  text-decoration: underline;
}
.search.text .red {
  color: red;
  text-decoration: underline;
}
.search.toal i {
  margin-right: 30px;
  font-size: 25px;
}

.search.toal .return {
  /* width: 100px; */
  font-size: 20px;
  color: #199efb;
  position: absolute;
  left: 20px;
  top: 3px;
}
.hello {
  background: #f1f3f7;
}
.btn {
  width: 130px !important;
}
header {
  width: 100%;
  height: 92px;
  line-height: 92px;
  background-color: #000000;
  box-shadow: -3px -2px 20px 6px #d2d2d2;
  /* display: flex */
  position: fixed;
  margin-bottom: 21px;
  top: 0;
  left: 0;
  z-index: 10;
}
header .left {
  width: 300px;
  height: 92px;
  line-height: 92px;
  text-align: center;
  font-size: 30px;
  color: #fff;
}
header .right {
  position: absolute;
  top: 0;
  right: 100px;
  display: inline-block;
  line-height: 92px;
  text-align: center;
  font-size: 30px;
  color: #fff;
}
main {
  width: 100%;
  margin: 0 auto;
  display: flex;
  background: #f1f3f7;
  position: relative;
  top: 112px;
  justify-content: center;
}
main .left {
  width: 1060px;
  background-color: #ffffff;
  border-radius: 6px;
  margin-right: 66px;
  min-height: 1000px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
}
main .right {
  width: 594px;
  background-color: #ffffff;
  border-radius: 6px;
  min-height: 1000px;
}
.tool {
  width: 60px;
  height: 200px;
  position: absolute;
  top: 50px;
  left: -60px;
}
</style>
