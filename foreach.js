'use strict';

function _validatePostData(data) {
  let message;
  let params = [
    ['secret_id', 'String', true, '您在第一步获取的secret_id'],
    ['is_new', 'String', true, "是否新建博客，可选0、1两个值：''0'，编辑博客；‘1’，新建博客"],
    ['id', 'String', true, '博客的ID，即博客唯一ID，支持数字、大小写字母、下划线、中划线，保存后不可更改'],
    ['title', 'String', true, '博客标题，可以是任意字符'],
    ['image', 'String', false, '博客主题图片，如果有则显示，目前仅在博客列表页（首页）中显示'],
    ['from', 'String', false, '博客来源，博客文章在您的博客网站中的链接'],
    ['content', 'String', true, '博客Markwown源码'],
    ['htmlContent', 'String', true, '博客markdown编译之后的html内容，用以展示在文档内容页'],
    ['introContent', 'String', true, '博客html格式的介绍内容，用以展示再文档列表页'],
    ['category', 'String', true, '博客分类的id，文档分类必须从博客分类列表接口中获取']
  ]

  for (let i=0; i < params.length; i++) {
    let item = params[i];
    let key = item[0];

    if (item[2] && data[key] === undefined) {
      message = '缺少参数：' + key + '，该参数为' + item[3];
      break;
    }
  }

  return message;
}

console.log(_validatePostData({}));