<!--  -->
<template>
  <div class="btn-inline">
    <el-button @click="btnClick(btnObj)">
      <span>{{ newCompValue(btnObj) }}</span>
    </el-button>
    <CommonTemplateData
      ref="commonTemplateData"
      :btn-data="btnObj"
      :code-props-data="codePropsData"
      :data-js="compData.compJavascript"
      :data-html="compData.compView"
    >
    </CommonTemplateData>
  </div>
</template>

<script>
import CommonTemplateData from "./btnTemplate.vue";
export default {
  props: ["btnObj"],
  components: {
    CommonTemplateData,
  },
  data() {
    return {
      btnthis: this,
      isNeedEdit: false,
      compEditValue: "",
      codePropsData: {},
      // 控件数据
      compData: {
        compCss: "",
        compJavascript: "",
        compView: "",
      },
    };
  },
  computed: {
    newCompValue() {
      return (val) => {
        console.log(val, "valvalvalvalvalvalval");
        if (this.isPromise(val.defaultValueCommon)) {
          return val.defaultValueCommonPromiss;
        } else {
          return val.defaultValueCommon;
        }
      };
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    isPromise(value) {
      return (
        value && Object.prototype.toString.call(value) === "[object Promise]"
      );
    },
    // 按钮点击
    btnClick(btn) {
      this.setComData(btn, this);
    },
    async getValue(btn) {
      console.log(btn, "btnbtnbtnbtnbtnbtnbtn");
    },
    // 默认设置
    // getSetting(btn, wfParams) {
    //   return this.defaultSetting(btn, wfParams)
    // },
    // 设置组件的值
    async setComData(btn) {
      console.log("setComData", "");
      this.codePropsData = {
        ...btn,
        compDataThis: this,
      };
      let jsCode = `{
            components: {},
            data() {
                return {
                saveActionCahce: {}
                }
            },
            computed: {},
            watch: {},
            created() {},
            mounted() {
            console.log('inline-btn在线按钮执行了')
            }}`;
      this.compData = {
        compJavascript: eval(`(${jsCode})`),
        compView: `<div class="">这里是在线按钮界面，可以软编码渲染</div>`,
      };
    },
  },
};
</script>
<style scoped lang="scss"></style>
