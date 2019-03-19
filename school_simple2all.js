const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const parseCsvSync = require('csv-parse/lib/sync')

function init(){
  const recordsList = getCsvFile();

  const shouldSwitchList = recordsList.filter((item) => {
    const simpleName = item.name;

    const isSimple = !/大学|学院|学校/.test(simpleName);
    return isSimple;
  })

  let times = 0;
  shouldSwitchList.forEach((item)=>{
    ((item) => {
      const simpleName = item.name;

      getFullName(simpleName, (err, name) => {
        times++;

        if (err) { 
          console.log(`获取 ${simpleName} 的信息失败: ${err}`) 
        } else {
          const isMatchSchool = !/公司/.test(name);
          if (name !== simpleName && isMatchSchool)
          item.name = name
        }

        if (times == shouldSwitchList.length) {
          console.log(JSON.stringify(shouldSwitchList));
        }
      })
    })(item)
  })
}

function getCsvFile(){
  const fileContent = fs.readFileSync('/Users/xiongweilie/Desktop/xn_schools.csv', { encoding: 'utf-8'});
  const records = parseCsvSync(fileContent, {
    columns: true,
    skip_empty_lines: true
  });

  return records;
}

function getFullName(simpleName, callback) {
  const keyword = simpleName;
  const uri = `https://baike.baidu.com/search/none?word=${encodeURIComponent(keyword)}&pn=0&rn=10&enc=utf8`;

  request({
    method: 'GET', 
    followRedirect: false,
    uri
  }, (err, res, body) => {
    if (err) return callback(err.toString());

    const $domList = cheerio.load(body)('.result-title');
    const fullName = $domList.text().split('_')[0];

    callback(null, fullName);
  });
}

function getFullName1(simpleName, callback) {
  const keyword = simpleName;
  const uri = `https://baike.baidu.com/search/word?word=${encodeURIComponent(keyword)}`;

  request({
    method: 'GET', 
    followRedirect: false,
    uri
  }, (err, res, body) => {
    if (err) return callback(err.toString());

    let location = res.headers.location
    if (!location) return callback('res.headers.location 字段不存在');

    let locationMatch = location.split('?')[0].match(/.item\/(.+)/);
    if (!locationMatch) return callback(`${location} 不符合规范`);

    let fullName = decodeURIComponent(locationMatch[1]);
    return callback(null, fullName);
  });
}

init();