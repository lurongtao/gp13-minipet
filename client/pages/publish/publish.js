Component({
  data: {
    address: '点击选择，要勾选哦~',
    isSubmit: false,
    isSucc: false,
    _staticData: {
      type: 'buy'
    }
  },

  pageLifetimes: {
    // show() {
    //   this.staticData = {
    //     type: 'buy'
    //   }
    // }
  },

  methods: {
    handleChooseLocationTap() {
      wx.chooseLocation({
        success: (result) => {
          let { address, longitude, latitude } = result
          this.setData({
            address,
          })
          this.data._staticData.longitude = longitude
          this.data._staticData.latitude = latitude
        }
      })
    },

    radioChange(e) {
      this.data._staticData.type = e.detail.value
      // this.setData({})
    },

    handleMessageInput(e) {
      this.data._staticData.message = e.detail.value
      // this.setData({})
    },

    handleContactInput(e) {
      this.data._staticData.contact = e.detail.value
      // this.setData({})
    },

    showToast(title) {
      wx.showToast({
        title,
        icon: 'none',
        duration: 2000
      })
    },
  
    handleSubmit() {
      let data = {
        address: this.data.address,
        ...this.data._staticData
      }

      if (this.data.address === '点击选择，要勾选哦~') {
        this.showToast('请选择地址')
        return
      }
      if (!this.data._staticData.message) {
        this.showToast('请填写说明')
        return
      }
      if (!this.data._staticData.contact) {
        this.showToast('请填写联系方式')
        return
      }

      console.log(data)

      wx.request({
        url: 'https://ik9hkddr.qcloud.la/index.php/trade/add_item', //仅为示例，并非真实的接口地址
        data,
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: (res) => {
          this.setData({
            isSubmit: true,
            isSucc: res.data.ret,
            // absComponent: 'success'
          })
        }
      })
    },

    handleBack() {
      if (this.data.isSucc) {
        wx.reLaunch({
          url: '/pages/index/index',
        })
      } else {
        this.setData({
          isSubmit: false
        })
      }
    }
  },

  options: {
    styleIsolation: 'shared'
  }

})