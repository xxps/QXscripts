[rewrite_local]

^https:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yywnds.js

[mitm] 

hostname = p.du.163.com
info.json

var body = $response.body;
var obj = JSON.parse(body);
obj.tradeEndTime = 1670734438;
body = JSON.stringify(obj);
$done({body})
