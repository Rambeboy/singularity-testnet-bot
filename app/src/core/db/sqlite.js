const _0x56d2d5=_0x2b54;(function(_0x25966b,_0x378688){const _0x4ee6fc=_0x2b54,_0x41a211=_0x25966b();while(!![]){try{const _0x40656a=-parseInt(_0x4ee6fc(0x194))/0x1+parseInt(_0x4ee6fc(0x18f))/0x2+parseInt(_0x4ee6fc(0x1a2))/0x3+-parseInt(_0x4ee6fc(0x18e))/0x4*(-parseInt(_0x4ee6fc(0x190))/0x5)+-parseInt(_0x4ee6fc(0x195))/0x6*(-parseInt(_0x4ee6fc(0x198))/0x7)+-parseInt(_0x4ee6fc(0x19e))/0x8*(-parseInt(_0x4ee6fc(0x199))/0x9)+parseInt(_0x4ee6fc(0x19f))/0xa*(-parseInt(_0x4ee6fc(0x188))/0xb);if(_0x40656a===_0x378688)break;else _0x41a211['push'](_0x41a211['shift']());}catch(_0x6462c5){_0x41a211['push'](_0x41a211['shift']());}}}(_0x314e,0xdd734));import _0x4119a0 from'sqlite3';import{open}from'sqlite';function _0x2b54(_0x107401,_0x20cbb8){const _0x314e2e=_0x314e();return _0x2b54=function(_0x2b547c,_0x50d2af){_0x2b547c=_0x2b547c-0x188;let _0x36857e=_0x314e2e[_0x2b547c];return _0x36857e;},_0x2b54(_0x107401,_0x20cbb8);}function _0x314e(){const _0x4c1483=['4075431mhlStm','getTodayTxLog','isSpenderExists','20422171lgFjTG','close','Database','run','INSERT\x20INTO\x20tx_log\x20(address,\x20tx_date,\x20type)\x20VALUES\x20(?,\x20?,\x20?)','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20*\x20FROM\x20approve_log\x0a\x20\x20\x20\x20\x20\x20WHERE\x20address\x20=\x20?\x20AND\x20token_address\x20=\x20?\x20AND\x20spender\x20=\x20?\x0a\x20\x20\x20\x20','40444bxlydl','1273228iiJWiG','260bNfFps','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20approve_log\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20address\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20token_address\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20spender\x20TEXT\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20','insertApprovalData','createTable','294999vrzShQ','246nydTRw','insertData','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20*\x20FROM\x20tx_log\x0a\x20\x20\x20\x20\x20\x20WHERE\x20DATE(tx_date)\x20=\x20?\x20AND\x20address\x20=\x20?\x20AND\x20type\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20ORDER\x20BY\x20tx_date\x20DESC\x0a\x20\x20\x20\x20','241003IHUJvC','4059hDBvHT','exec','toISOString','split','connectToDatabase','17432OwYiLB','20Jxyxxv','./database.db','all'];_0x314e=function(){return _0x4c1483;};return _0x314e();}class SQLITE{async['connectToDatabase'](){const _0x2557a1=_0x2b54;return open({'filename':_0x2557a1(0x1a0),'driver':_0x4119a0[_0x2557a1(0x18a)]});}async[_0x56d2d5(0x193)](){const _0x3299f7=_0x56d2d5,_0xb59ca6=await this[_0x3299f7(0x19d)]();await _0xb59ca6[_0x3299f7(0x19a)]('\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20tx_log\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20address\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20tx_date\x20DATE\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20type\x20TEXT\x0a\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20'),await _0xb59ca6[_0x3299f7(0x19a)](_0x3299f7(0x191)),await _0xb59ca6[_0x3299f7(0x189)]();}async[_0x56d2d5(0x196)](_0x356ffb,_0x42b749){const _0x2d2f5b=_0x56d2d5,_0x415bff=new Date()[_0x2d2f5b(0x19b)](),_0x4c74c4=await this[_0x2d2f5b(0x19d)]();await _0x4c74c4[_0x2d2f5b(0x18b)](_0x2d2f5b(0x18c),[_0x356ffb,_0x415bff,_0x42b749]),await _0x4c74c4['close']();}async[_0x56d2d5(0x192)](_0x59136d,_0x4de501,_0x15fedb){const _0x2442ae=_0x56d2d5,_0x3be860=await this['connectToDatabase']();await _0x3be860[_0x2442ae(0x18b)]('INSERT\x20INTO\x20approve_log\x20(address,token_address,\x20spender)\x20VALUES\x20(?,\x20?,\x20?)',[_0x59136d,_0x4de501,_0x15fedb]),await _0x3be860[_0x2442ae(0x189)]();}async[_0x56d2d5(0x1a3)](_0x3de0e7,_0xfb1b8b){const _0x24a5aa=_0x56d2d5,_0x1251d4=await this['connectToDatabase'](),_0x47ccd7=new Date()['toISOString']()[_0x24a5aa(0x19c)]('T')[0x0],_0x1fafc2=await _0x1251d4[_0x24a5aa(0x1a1)](_0x24a5aa(0x197),[_0x47ccd7,_0x3de0e7,_0xfb1b8b]);return await _0x1251d4[_0x24a5aa(0x189)](),_0x1fafc2;}async[_0x56d2d5(0x1a4)](_0x1c45d3,_0x781372,_0x4cb568){const _0xbc054a=_0x56d2d5,_0x5f5cdf=await this['connectToDatabase'](),_0x4613aa=await _0x5f5cdf[_0xbc054a(0x1a1)](_0xbc054a(0x18d),[_0x1c45d3,_0x781372,_0x4cb568]);return await _0x5f5cdf['close'](),_0x4613aa['length']>0x0;}}const sqlite=new SQLITE();await sqlite['createTable']();export default sqlite;
