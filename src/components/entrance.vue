  <!-- <div>
    <Toolbar></Toolbar>
    <slot name="exec"></slot>
    <slot></slot>
    <div>这里是表单页面</div>
  </div> -->

<script>
import Vue from "vue/dist/vue.esm";
import Toolbar from "./toolbar.vue";
export default {
  // components: { Toolbar },
  name: "HelloWorld",
  props: {
    wf: Object,
    btnInitData: Array,
  },
  mounted() {
    // console.log(this.wf);
    // console.log(this.$scopedSlots, "scopedSlots");
    // console.log(this.$slots, "slots");
    // console.log(this.btnInitData, "btnInitData");
  },
  render(h) {
    // console.log(h);
    const dataHtml = `<div>
      <Toolbar :btn-init-data="btnInitData">
      </Toolbar>
      <div id="iframeDialog"/>
      这里是表单页面</div>`;
    let dataJs = `{
        name: "entrance",
        data() {
          return {};
        },
        mounted() {
          console.log("toolbar-mounted");
        },
        created() {},
        watch: {},
        methods: {},
      }`;
    dataJs = eval("(" + dataJs + ")");
    // console.log(dataJs);
    const result = Vue.extend({
      components: {
        Toolbar,
      },
      props: {
        btnInitData: {
          type: Array,
          default: () => {
            return this.btnInitData;
          },
        },
      },
      template: dataHtml,
      ...dataJs,
    });
    // console.log(result, "result");
    return h(result, {
      on: this.$listeners,
      props: this.props,
      // 透传 scopedSlots
      scopedSlots: this.$scopedSlots,
      attrs: this.$attrs,
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
