const net = require('net');
let count = 0;
let users = {};

let server = net.createServer(function (conn) {
    count++;
    let nickname;

    // 页面tip
    conn.write(
        '\n > welcome to \033[92mnode-chat\033[39m!'
        + '\n > ' + count + ' other people are connected at this time.'
        + '\n > please write your name and press enter: '
    );

    conn.on('data', function (data) {
        // 删除回车符，否则会出现空行
        data = data.replace('\r\n', '');
        if (!nickname) {
            if (users[data]) {
                conn.write('\033[93m> nickname already in use. try again:\033[39m ');
                return;
            } else {
                nickname = data;
                users[nickname] = conn;
                // 将conn对象赋予用户，赋予用户可操作权限
             }
        } else {
             // 验证用户为已注册，则输入数据data为聊天信息
             for (var i in users) {
                   if (i != nickname) {
                       console.log('\033[96m > ' + nickname + ':\033[39m ' + data + '\n');
                   }
             }
          }
    })
});

server.listen(3000);
