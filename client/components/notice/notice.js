// components/notice/notice.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isSucc: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleBack() {
      if (this.data.isSucc) {
        wx.reLaunch({
          url: '/pages/index/index',
        })
      } else {
        // this.setData({
        //   isSubmit: false
        // })
        this.triggerEvent('backtap', false)
      }
    }
  },

  options: {
    styleIsolation: 'shared'
  }
})
