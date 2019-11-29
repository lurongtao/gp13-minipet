const _ = require('underscore')

Page({
  data: {
    keyword: 'abc',
    list: []
  },

  handleInput: _.debounce(function (e) {
    console.log(e)
    this.setData({
      keyword: e.detail.value
    })
  }, 300),

  handleClick() {
    wx.request({
      url: 'https://ik9hkddr.qcloud.la/index.php/trade/get_search_list',
      method: 'POST',
      data: {
        keyword: this.data.keyword
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: (result) => {
        console.log(result)
        this.setData({
          list: result.data.data
        })
      }
    })
  },

  onReady() {
    // console.log(_)
  }
})