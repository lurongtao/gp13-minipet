const _ = require('underscore')
Component({
  data: {
    keyword: 'abc'
  },

  methods: {
    handleInput: _.debounce(function (e) {
      this.setData({
        keyword: e.detail.value
      })
    }, 300),

    handleClick() {
      this.triggerEvent('searchkeyword', this.data.keyword)
    }
  }
})
