const config = require("./common/config.js")
const user = require("./model/user.js").user
const cart = require("./model/cart.js").cart
const cake = require("./model/cake.js").cake

App({
  version: config.version,
  user: user,
  cart: cart,
  cake: cake,

  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    var _this = this;
    // 读取缓存的用户信息。
    var obj = _this.user.getCache();
    if(obj != null) {
      // 读取到了，则填充进来。
      _this.user.userid = obj.userid;
      _this.user.sessionid = obj.sessionid;
      _this.user.jzb = obj.jzb;
      _this.user.exp = obj.exp;
      _this.user.phone = obj.phone;
      _this.user.levels = obj.levels;
      _this.user.headimg = obj.headimg;
    }
    this.globalData = {}
  },
  globalData: {
    userInfo: null
  },
  onShow: function() {
    var obj = this.user.getCache();
  }
})
