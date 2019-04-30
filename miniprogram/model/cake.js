const cake = {
  tab: null,
  key: "cake",
  setCache: function(obj) {
    wx.setStorageSync(this.key, obj)
  },
  getCache: function() {
    return wx.getStorageSync(this.key)
  },
  getByName: function(nm) {
    var p = null;
    var dic = wx.getStorageSync(this.key)||{};
    if(nm in dic) {
      p = dic[num]
    }
    return p;
  }
}

// module.exports = {
//   cake
// }
module.exports = cake;