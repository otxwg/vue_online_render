


<script>
import Vue from 'vue/dist/vue.esm'
import ToolbarInLine from "./toolbarInLine.vue";
import { moduleMapper } from "../loader/index";
console.log(moduleMapper, "moduleMapper");
export default {
  //   components: {
  //     toolbarInLine,
  //   },
  props: ["btnInitData"],
  name: "Toolbar",
  render(h) {
    console.log(this.btnInitData,'this.btnInitData')
    const dataHtml = `<div>
    <el-row>
      <el-col v-if="btnBtn('').length > 0">
        <span v-for="(btn) in btnBtn('')" :key="btn.code">
          <el-button v-if="btn.btnParams.source === '本地'" @click="btn.action">
            {{ btn.btnParams.text }}
          </el-button>
          <!-- 在线按钮 -->
          <ToolbarInLine v-else :btn-obj="btn" :in-line-obj="inLineObj" />
        </span>
      </el-col>
    </el-row>
  </div>`;
    let datajs = `{data() {
    return {
     // 这里配置模拟重接口获取
      btns: [{ code: "saver", source: "本地",text:'本地按钮saver' },{ code: "send", source: "线上",text:'线上按钮send'}]
    }
  },
  mounted() {
  },
  created() {},
  watch: {},
  methods: {},
  computed: {
    btnBtn() {
      return () => {
        return this.buttons("");
      };
    },
    buttons() {
      return () => {
        if (this.btns.length > 0) {
          const list = this.btns.map((btn) => {
            const code = btn.code;
            if (code && btn.source === "本地") {
              console.log(this.moduleMapper);
              const modu = this.moduleMapper["saver"];
              console.log(modu, "modu");
              const { action } = modu;
              return {
                btnParams: {
                  ...btn,
                },
                action: () => {
                  if (action) {
                    action(this);
                  }
                },
              };
            } else if (btn.source === "线上") {
              const objData = this.btnInitData.find((bt) => {
                return bt.code == btn.code;
              });
              return {
                defaultValueCommon:btn.text,
                btnParams: {
                  ...btn,
                },
                btnInitObj: objData,
              };
            }
          });
          console.log(list, "list");
          return list;
        } else {
          return [];
        }
      };
    },
  }}`;
    datajs = eval("(" + datajs + ")");
    console.log(datajs,'toolbar-datajs')
    let compView=''
    let compJavascript=''
    const result = Vue.extend({
      components: {
        ToolbarInLine,
      },
      props: {
        inLineObj: {
          type: Object,
          default: () => {
            return { compView, compJavascript };
          },
        },
        moduleMapper: {
          type: Object,
          default: () => {
            return moduleMapper;
          },
        },
        btnInitData: {
          type: Array,
          default: () => {
            return this.btnInitData;
          },
        },
        
      },
      template: dataHtml,
      ...datajs,
    });

    return h(result);
  },
};
</script>