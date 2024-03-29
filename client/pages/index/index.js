Component({
  data: {
    longitude: 0,
    latitude: 0,
    markers: []
  },

  lifetimes: {
    attached() {
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

      wx.request({
        url: 'https://ik9hkddr.qcloud.la/index.php/trade/get_list',
        success: (result) => {
          let data = result.data.data

          let markers = data.map((value, index) => {
            return {
              iconPath: '/resources/' + value.type + '.png',
              id: value.id,
              latitude: value.latitude,
              longitude: value.longitude,
              width: 40,
              height: 40
            }
          })

          this.setData({
            markers
          })
        }
      })
    },
  },

  methods: {
    handleCenterTap() {
      this.map.moveToLocation()
    },

    handleMarkerTap(e) {
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + e.markerId,
      })
    },

    handleSearchTap() {
      wx.navigateTo({
        url: '/pages/search/search',
      })
    }
  }
})