Page({
  data: {
    keyword: '',
    list: []
  },

  handleInput(e) {
    console.log(e)
    this.setData({
      keyword: e.detail.value
    })
  },

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
  }
})