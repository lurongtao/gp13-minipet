// components/test/test.js
Component({
  data: {
    x: 2,
    __y: 0
  },

  options: {
    pureDataPattern: /^__/ // 指定所有 _ 开头的数据字段为纯数据字段
  },

  // behaviors: [
  //   'wx://component-export'
  // ],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  // attached() {
  //   this.setData({
  //     x: 1
  //   })
  // },

  // export() {
  //   return {
  //     x: 0
  //   }
  // },

  // observers: {
  //   'x': function(value) {
  //     console.log(value)
  //   }
  // }
})
