'use strict';

const querystring = require('querystring');
const url_opera = require('url');

/**
 * 合并参数
 * @param  {String} url   URL
 * @param  {Object} query 当前请求的query，这里的query会自动encode，所以传进来的参数不用再encode了
 * @param  {Object} opt   配置
 *                  opt.isCover query中的参数是否覆盖url中的参数，默认为false
 * @return {String}       返回URL      
 */
function addQuery(url, query, opt) {
  opt = opt || {};
  query = query || {};

  const urlObj = url_opera.parse(url);
  const urlQue = querystring.parse(urlObj.query);
  const mergeQue = {};

  // 把页面url中的请求参数和数据连接中的请求参数合并
  if (opt.isCover) {
    Object.assign(mergeQue, urlQue, query);
  } else {
    Object.assign(mergeQue, query, urlQue);
  }

  // protocal + host + pathname
  const curProtocol = urlObj.protocol ? (urlObj.protocol + '//') : '';
  const curHost = urlObj.host || '';
  const curPathname = urlObj.pathname || '';
  const curOrigin = curProtocol + curHost + curPathname;

  // query
  const queStr = querystring.stringify(mergeQue);
  const curQuery = queStr ? ('?' + queStr) : '';

  // hash
  const curHash = urlObj.hash || ''

  // 合并url参数 
  const curUrl = `${curOrigin}${curQuery}${curHash}`;

  return curUrl;
}