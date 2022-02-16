import Vue from 'vue/dist/vue.esm'
// 表单保存控件
export default {
    code: 'saver',
    text: 'saver-本地按钮',
    action: async (_this) => {
        console.log(_this, '本地按钮btn-action执行了')
        // 可以挂在元素上
        new Vue({
            el: '#iframeDialog',
            render: function (h) {
                return h(
                    // eslint-disable-next-line
                   'div',
                   '这里是本地代码组件渲染'
                )
            }
        })
    },
}
