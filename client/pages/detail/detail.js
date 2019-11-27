Page({
  data: {
    detailInfo: {}
  },

  onLoad(options) {
    wx.request({
      url: 'https://ik9hkddr.qcloud.la/index.php/trade/get_item',
      method: 'POST',
      data: {
        id: options.id
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: (result) => {
        this.setData({
          detailInfo: result.data.data
        })
      }
    })
  },

  handleBack() {
    wx.navigateBack({})
  }
})