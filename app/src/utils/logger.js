const _0x2ac912=_0x12a0;(function(_0x43f483,_0x1768f0){const _0x324b0a=_0x12a0,_0x433792=_0x43f483();while(!![]){try{const _0x3ef03a=-parseInt(_0x324b0a(0xb8))/0x1*(-parseInt(_0x324b0a(0xc2))/0x2)+parseInt(_0x324b0a(0xc9))/0x3*(-parseInt(_0x324b0a(0xb6))/0x4)+parseInt(_0x324b0a(0xc8))/0x5+-parseInt(_0x324b0a(0xb7))/0x6+-parseInt(_0x324b0a(0xbc))/0x7*(-parseInt(_0x324b0a(0xb9))/0x8)+-parseInt(_0x324b0a(0xc1))/0x9+parseInt(_0x324b0a(0xc0))/0xa*(parseInt(_0x324b0a(0xc3))/0xb);if(_0x3ef03a===_0x1768f0)break;else _0x433792['push'](_0x433792['shift']());}catch(_0x44b16f){_0x433792['push'](_0x433792['shift']());}}}(_0x508f,0x2f83b));import{createLogger,format,transports}from'winston';function _0x12a0(_0x476154,_0xdf2608){const _0x508f76=_0x508f();return _0x12a0=function(_0x12a036,_0x47df24){_0x12a036=_0x12a036-0xb2;let _0x10b25c=_0x508f76[_0x12a036];return _0x10b25c;},_0x12a0(_0x476154,_0xdf2608);}import _0xfc795 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x153062,message:_0x3f2731,timestamp:_0x5f1408})=>{return _0x5f1408+'\x20['+_0x153062+']:\x20'+_0x3f2731;});class Logger{constructor(){const _0x168eec=_0x12a0;this[_0x168eec(0xbe)]=createLogger({'level':_0x168eec(0xca),'format':combine(timestamp({'format':_0x168eec(0xbb)}),colorize(),customFormat),'transports':[new transports[(_0x168eec(0xbd))]({'filename':_0x168eec(0xb4)})],'exceptionHandlers':[new transports[(_0x168eec(0xbd))]({'filename':_0x168eec(0xb4)})],'rejectionHandlers':[new transports[(_0x168eec(0xbd))]({'filename':_0x168eec(0xb4)})]});}[_0x2ac912(0xb5)](_0x550baf){const _0x5c63b=_0x2ac912;this[_0x5c63b(0xbe)]['info'](_0x550baf);}['warn'](_0x225c11){const _0x4f8e83=_0x2ac912;this['logger'][_0x4f8e83(0xb3)](_0x225c11);}['error'](_0x34ddf5){const _0x1b89c9=_0x2ac912;this[_0x1b89c9(0xbe)][_0x1b89c9(0xc6)](_0x34ddf5);}[_0x2ac912(0xca)](_0x41d063){const _0x1e9ceb=_0x2ac912;this[_0x1e9ceb(0xbe)][_0x1e9ceb(0xca)](_0x41d063);}[_0x2ac912(0xba)](_0x1c77e5){const _0x5de5ca=_0x2ac912;this[_0x5de5ca(0xbe)][_0x5de5ca(0xc7)]=_0x1c77e5;}[_0x2ac912(0xc5)](){const _0x1728a4=_0x2ac912;_0xfc795[_0x1728a4(0xbf)](_0x1728a4(0xb4),0x0,_0x36ffa1=>{const _0x149b97=_0x1728a4;_0x36ffa1?this[_0x149b97(0xbe)][_0x149b97(0xc6)](_0x149b97(0xb2)+_0x36ffa1[_0x149b97(0xc4)]):this['logger']['info']('Log\x20file\x20cleared');});}}function _0x508f(){const _0x21f9f4=['setLevel','YYYY-MM-DD\x20HH:mm:ss','150647sWrlSO','File','logger','truncate','64470HlDVcP','1247535Cvijlx','111514VWwIBp','495hcYxuH','message','clear','error','level','351695QDMPrr','814551xgpFUB','debug','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','warn','log/app.log','info','4yyRDpu','1034520SdnrOq','4cAUQof','72MUDjcZ'];_0x508f=function(){return _0x21f9f4;};return _0x508f();}export default new Logger();
