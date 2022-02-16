<script>
import Vue from "vue/dist/vue.esm";
export default {
  name: "CommonTemplateData",
  // eslint-disable-next-line vue/require-prop-types
  props: ["dataJs", "dataHtml", "dataCss", "codePropsData", "btnData"],
  render(h) {
    // 设置样式
    // setCss(this.dataCss)
    // 这里是关键，将string字符串转换成模板
    // 难点是String中包含了自定义组件，使用v-html是解析不了的
    // console.log(this.dataHtml, "btnTemplate--html");
    // console.log(this.dataJs, "btnTemplate--dataJs");
    if (this.dataHtml) {
      const result = Vue.extend({
        props: {},
        template: this.dataHtml,
        // ...btnTemplateMethod(this).extendObj,
        // style: this.dataCss,
        ...this.dataJs,
      });
      return h(result, {});
    } else {
      return h("div", {});
    }
  },
};
</script>
