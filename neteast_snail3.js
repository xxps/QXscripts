[rewrite_local]

^https:\/\/p\.du\.163\.com\/gain\/readtime\/info.json url script-response-body https://raw.githubusercontent.com/xxps/QXscripts/main/neteast_snail3.js

[mitm] 

hostname = p.du.163.com
info.json

var body = $response.body;
var obj = JSON.parse(body);
obj.tradeEndTime = 0;
body = JSON.stringify(obj);
$done({body})
