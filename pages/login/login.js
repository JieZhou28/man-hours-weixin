const CryptoJS = require('../../utils/crypto.js');
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
  },

  /**
   * 监听username，password值
  */
  changeUsername(e) {
    this.data.username = e.detail.value;
  },
  changePassword(e) {
    this.data.password = e.detail.value;
  },

  login: function () {
    wx.redirectTo({
      url: '/pages/index/index',
    });



    // 表单数据合法性判断
    // if (this.data.username.length == 0 || this.data.password.length == 0){
    //   wx.showModal({
    //     content: '用户名和密码不能为空',
    //     showCancel: false
    //   });
    //   return;
    // };
    
    // // 加密
    // const key = CryptoJS.enc.Utf8.parse("abcdefgabcdefg12");
    // const password = CryptoJS.AES.encrypt(this.data.password, key, {
    //   mode: CryptoJS.mode.ECB,
    //   padding: CryptoJS.pad.Pkcs7
    // }).toString();

    // // 网络请求
    // var params = {
    //   loginName: this.data.username,
    //   password: password
    // };
    // app.http.post('/https/ahies/system/authority/login/toLogin', params).then((res) => {
    //   if( res.status === 200 ){
    //     // 保存账户信息到本地缓存
    //     wx.setStorageSync('userInfo', res.data );

    //     // wx.showModal({
    //     //   content: res.message,
    //     //   showCancel: false
    //     // });

    //     // 页面跳转
    //     wx.redirectTo({
    //       url: '/pages/index/index',
    //     });
    //   }else{
    //     wx.showModal({
    //       content: res.message,
    //       showCancel: false
    //     });
    //   }
    // });
  }
})