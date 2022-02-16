<template>
  <div id="app">
    <entrance :wf="wf" :btnInitData="btnInitData">
      <template #exec> 111</template>
      <template #default>222</template>
    </entrance>
  </div>
</template>

<script>
import entrance from "./components/entrance.vue";

export default {
  name: "App",
  components: {
    entrance,
  },
  data() {
    return {
      wf: { id: "520", name: "otxwg" },
      btnInitData: [
        // 模拟接口数据
        {
          source: "线上",
          btnComponentId: "send",
          code: "send",
          id: "send",
          dataJs: `{
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
          this.mountedSaveAction()
        },
        methods: {
          mountedSaveAction() {
          console.log('做点什么...')
          }
        }
      }`,
          dataHtml: `<div class="">这里是在线按钮相关界面，可以软编码渲染</div>`,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
