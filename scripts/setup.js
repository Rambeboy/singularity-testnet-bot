const _0x191992=_0x2a5c;(function(_0xb6893f,_0x2f5718){const _0x462f33=_0x2a5c,_0x5f2a3c=_0xb6893f();while(!![]){try{const _0x478190=parseInt(_0x462f33(0xed))/0x1+-parseInt(_0x462f33(0x101))/0x2*(-parseInt(_0x462f33(0xf8))/0x3)+parseInt(_0x462f33(0xec))/0x4+-parseInt(_0x462f33(0xe8))/0x5*(parseInt(_0x462f33(0xef))/0x6)+-parseInt(_0x462f33(0xf3))/0x7+parseInt(_0x462f33(0xe5))/0x8*(parseInt(_0x462f33(0xf0))/0x9)+parseInt(_0x462f33(0xf6))/0xa*(-parseInt(_0x462f33(0xe2))/0xb);if(_0x478190===_0x2f5718)break;else _0x5f2a3c['push'](_0x5f2a3c['shift']());}catch(_0x397f81){_0x5f2a3c['push'](_0x5f2a3c['shift']());}}}(_0x45a6,0x58987));import _0x9da562 from'fs';import _0xb26a8e from'path';async function fileExists(_0x5ef467){const _0x4792a2=_0x2a5c;try{return await _0x9da562[_0x4792a2(0xf2)][_0x4792a2(0xfb)](_0x5ef467),!![];}catch{return![];}}async function copyFile(_0x1fc4a2,_0x4c44bb){const _0x2b2aca=_0x2a5c;try{await fileExists(_0x4c44bb)?console[_0x2b2aca(0xe6)](_0x2b2aca(0xf7)+_0x4c44bb+_0x2b2aca(0x102)):(await _0x9da562['promises'][_0x2b2aca(0x100)](_0x1fc4a2,_0x4c44bb),console[_0x2b2aca(0xe6)](_0x2b2aca(0xf9)+_0x1fc4a2+_0x2b2aca(0xff)+_0x4c44bb));}catch(_0x249a05){console['error'](_0x2b2aca(0xfd)+_0x1fc4a2+_0x2b2aca(0xff)+_0x4c44bb+':',_0x249a05);}}function _0x45a6(){const _0x3e5df2=['37735cElCWd','Error\x20creating\x20folder\x20','mkdir','accounts_tmp.js','1409556GRtpGE','706396suiNfa','config','114HLHYTP','6382710dIdQhB','Open\x20and\x20Configure\x0a-\x20accounts/accounts.js\x0a-\x20config/config.js\x0a\x20','promises','2131920tNkgQR','accounts.js','config.js','10ffkWjs','File\x20already\x20exists\x20at\x20','113754zmvvXm','Copied\x20','join','access','accounts','Error\x20copying\x20file\x20from\x20','config_tmp.js','\x20to\x20','copyFile','14IINZDE',',\x20skipping\x20copy.','Copying\x20Template\x20File','13448171Mfyooo','error','Created\x20folder:\x20','8PIVdyV','log','then'];_0x45a6=function(){return _0x3e5df2;};return _0x45a6();}async function createFolder(_0x1222e1){const _0x5094df=_0x2a5c;try{const _0x17105e=await _0x9da562[_0x5094df(0xf2)]['access'](_0x1222e1)[_0x5094df(0xe7)](()=>!![])['catch'](()=>![]);!_0x17105e&&(await _0x9da562[_0x5094df(0xf2)][_0x5094df(0xea)](_0x1222e1,{'recursive':!![]}),console[_0x5094df(0xe6)](_0x5094df(0xe4)+_0x1222e1));}catch(_0x45dd8){console[_0x5094df(0xe3)](_0x5094df(0xe9)+_0x1222e1+':',_0x45dd8);}}function _0x2a5c(_0xe766ec,_0x49e92a){const _0x45a6d1=_0x45a6();return _0x2a5c=function(_0x2a5cd1,_0x3bbf15){_0x2a5cd1=_0x2a5cd1-0xe1;let _0x2b1a1c=_0x45a6d1[_0x2a5cd1];return _0x2b1a1c;},_0x2a5c(_0xe766ec,_0x49e92a);}const copyOperations=[{'src':_0xb26a8e[_0x191992(0xfa)](_0x191992(0xee),_0x191992(0xfe)),'dest':_0xb26a8e[_0x191992(0xfa)]('config',_0x191992(0xf5))},{'src':_0xb26a8e[_0x191992(0xfa)]('accounts',_0x191992(0xeb)),'dest':_0xb26a8e['join'](_0x191992(0xfc),_0x191992(0xf4))}];((async()=>{const _0x7fc9bb=_0x191992;console['log'](_0x7fc9bb(0xe1)),await createFolder(_0x7fc9bb(0xfc));for(let {src:_0x38245e,dest:_0x5a051a}of copyOperations){await copyFile(_0x38245e,_0x5a051a);}console[_0x7fc9bb(0xe6)]('\x0aSetup\x20Complete'),console[_0x7fc9bb(0xe6)](_0x7fc9bb(0xf1));})());