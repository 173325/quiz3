const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();

app.get('/', (req, res) => {
  fs.createReadStream('city.csv')
    .pipe(csv())
    .on('data', (data) => {
      // 处理每一行的数据
      // 可以将数据存储在一个数组中，然后将数组传递给HTML页面
    })
    .on('end', () => {
      // 将处理后的数据传递给HTML页面进行显示
      const html = fs.readFileSync('index.html', 'utf8');
      // 在此处可以对HTML文件进行处理，将数据插入到相应的位置
      // 然后将处理后的HTML发送给客户端
      res.send(html);
    });
});

app.listen(3000, () => {
  console.log('服务器已启动，监听端口3000');
});
