const user = {
  userid: 0,// 用户id
  sessionid: "", //秘钥
  jzb: 0,
  exp: 0,
  phone: "",
  levels: 0,
  headimg: "",
  key: "userkey",
  setCache: function (obj) {
    wx.setStorageSync(this.key, obj)
  },
  getCache: function () {
    return wx.getStorageSync(this.key)
  },
  clear: function () {
    wx.removeStorageSync(this.key)
  },
  isLogin: function (tp) {
    var ret = false;
    if (this.userid > 0) {
      ret = true;
    } else {
      if(tp == true) {
        wx.navigateTo({
          url: '../pages/phone/phone',
        })
      }
    }
    return ret;

  },

}

module.exports = {
  user
}
