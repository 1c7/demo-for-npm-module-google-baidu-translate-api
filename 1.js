const translate = require('google-baidu-translate-api')

console.log('开始运行');

translate('我是谁', 'en').then(res => {
  console.log(res.dist)
  // who am I

  console.log(res)
  // {
  //   type: 'google',
  //   from: 'zh-CN',
  //   to: 'en',
  //   src: '我是谁',
  //   dist: 'who am I',
  //   targets: [ 'who am I', 'who I am', 'Who am I?' ]
  // }
})

console.log('最后一行');

// translate.google('我是谁', 'en').then(console.log)
// translate.baidu('我是谁', 'en').then(console.log)