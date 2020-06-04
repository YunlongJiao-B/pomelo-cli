
2020-06-04
================================================
更新：
   命令 
       srm serverid
       该命令会从connector中软删除（内存中删除 对应的server id）
node 8 版本以上
       npm install -g YunlongJiao-B/pomelo-admin
node 4.x 安装
       npm install -g YunlongJiao-B/pomelo-admin#0.4.x

pomelo-cli
========



pomelo-cli is a command-line tool for [pomelo](https://github.com/NetEase/pomelo).  
you can use pomelo-cli to connect to pomelo master and do lots of things.

##Installation
```
npm install -g YunlongJiao-B/pomelo-admin
```
##Usage
Use pomelo-cli to connect to pomelo master  

```
pomelo-cli -h host -P port -u username -p password  
```  

The default parameter of pomelo-cli is as follows:

```  
pomelo-cli -h 127.0.0.1 -P 3005 -u monitor -p monitor 
```  

After that, pomelo-cli will enter repl mode. You can type 'help' for more information. 
Enjoy it:
![pomelo-cli help](http://ww1.sinaimg.cn/mw690/b7bc844fgw1eaa5s16o2uj20hv0k4whw.jpg)

## Links
[user level control](https://github.com/NetEase/pomelo-admin#user-level-control)  
[commands wiki](https://github.com/NetEase/pomelo-cli/wiki/pomelo-cli-man-page)

## License

(The MIT License)

Copyright (c) 2012-2013 NetEase, Inc. and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
