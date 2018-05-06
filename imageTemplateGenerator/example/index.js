const path = require('path');
const fs = require('fs');

const Itg = require('../index');

const bgPath = path.resolve('../images/temp.png');

// 通过模板、现在的数据生成图片
// 返回一个promise
Itg(bgPath, {
  logo: {
    size: '144,74',
    position: '+118+20',
    default: 'http://img002.qufenqi.com/products/ac/04/ac04decbbd372b5289e1bf1be30fad99.png'
  },
  tag: {
    size: '66,27',
    position: '+14+125',
    default: 'http://img003.qufenqi.com/products/57/2a/572ae45591109690e8093f90c87d8edc.png'
  },
  banner: {
    size: '240,200',
    position: '+66+155',
    default: ''
  },
  title: {
    size: '320,60',
    position: '+28+380',
    style: {
      fontSize: '14',
      color: '#333333'
    },
    default: '更多商品，敬请期待'
  },
  qrcode: {
    size: '91,91',
    position: '+93+528',
    default: 'http://img003.qufenqi.com/products/cb/9f/cb9fbcf2eddb111b08ec6c0795900060.png'
  }
}).then((temp) => {
  return temp.gen({
    banner: 'https://img002.qufenqi.com/products/e0/af/e0afcc5a1350f4966f963bc0bff6aafa.jpg',
    title: 'Apple iPhone X (A1865) 64GB 深空灰色 \n移动联通电信4G手机 ',
    qrcode: {
      method: 'GET',
      url: 'https://www.baidu.com/img/bd_logo1.png',
      // body: JSON.stringify(postData),
      // encoding - encoding to be used on setEncoding of response data. If null, the body is returned as a Buffer.
      // 参考：https://github.com/request/request#requestoptions-callback encoding配置
      encoding: null
    }
  })
}).then((image) => {
  fs.writeFile('./merged.png', image, function(err){ console.log(err, '~~~~~~~') });
}).catch((err) => {
  console.error(err);
})