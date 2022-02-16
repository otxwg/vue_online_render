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
      // btnInitData:[{dataJs:'dataJs',dataHtml:'dataHtml'}]
      btnInitData: [// 模拟接口数据
        {
          source: "线上",
          btnComponentId: "send",
          code: "send",
          id:'send',
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
          // 控制ID_为空情况下只能保存一次
          mountedSaveAction() {
            const { wfParams } = this.codePropsData
            const { forms } = wfParams
            forms.forEach((item) => {
              // 初始化默认还没保存
              this.saveActionCahce[item.formUri] = true
            })
          },
        }
      }`,
          dataHtml: `<div class=""></div>`,
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
