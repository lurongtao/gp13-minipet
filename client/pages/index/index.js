Page({
  data: {
    longitude: 0,
    latitude: 0,
    // markers: [
    //   {
    //     iconPath: "/resources/pin.png",
    //     id: 0,
    //     latitude: 23.099994,
    //     longitude: 113.324520,
    //     width: 50,
    //     height: 50
    //   }
    // ]
  },

  onReady() {
    this.map = wx.createMapContext("map")

    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        let { longitude, latitude } = res
        this.setData({
          longitude,
          latitude
        })
      }
    })
  },

  handleCenterTap() {
    this.map.moveToLocation()
  }
})