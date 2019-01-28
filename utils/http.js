const baseUrl = 'http://192.168.3.32:9108/';

const http = ({ url = '', param = {}, ...other } = {}) => {
  if (other.isShowLoading ){
    wx.showLoading({
      title: '请求中,请等待..'
    });
  };

  // let timeStart = Date.now();
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url),
      data: param,
      header: {
        'content-type': "application/x-www-form-urlencoded",
        'Token': ''
      },
      ...other,
      success:(res) => {
        setTimeout(()=>{
          //console.log('success');
          resolve(res.data)
        },1000);
      },
      fail:(res) => {
        //console.log('fail');
        reject(res) 
      },
      complete: (res) => {
        setTimeout(() => {
          //console.log('complete');
          if (other.isShowLoading) {
            wx.hideLoading(); 
          };
        }, 1000);
      }
    })
  })
}

const getUrl = (url) => {
  if (url.indexOf('://') == -1) {
    // https
    if (url.indexOf('/https/') > -1) {
      url = url.replace('/https/', 'https://info.ahies.com:9108/');
      return url;
    };

    // 孙祥喜个人电脑（临时）
    if (url.indexOf('/sxx/') > -1) {
      url = url.replace('/sxx/', 'http://192.168.2.226:9108/');
      return url;
    };
    // 骆雷个人电脑（临时）
    if (url.indexOf('/ll/') > -1) {
      url = url.replace('/ll/', 'http://192.168.3.45:9108/');
      return url;
    };

    if (url.indexOf('?') > -1) {
      url = baseUrl + url + '&timestamp=' + new Date().getTime();
    } else {
      url = baseUrl + url + '?timestamp=' + new Date().getTime();
    };
  }
  return url
}

// get方法
const _get = (url, param = {}) => {
  return http({
    url,
    param
  })
}

const _post = (url, param = {}, other = {} ) => {
  return http({
    url,
    param,
    method: 'post',
    isShowLoading: other.isShowLoading === false ? false : true
  })
}

// const _post = (url, param = {}, other = {}) => {
//   return http({
//     url,
//     param,
//     method: 'post'
//   })
// }

const _put = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'put'
  })
}

const _delete = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'delete'
  })
}
module.exports = {
  baseUrl,
  get:_get,
  post:_post,
  put:_put,
  delete:_delete
}