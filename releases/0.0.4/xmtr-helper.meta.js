// ==UserScript==
// @name               xmtr IPMap Helper
// @name:en            xmtr IPMap Helper
// @name:zh-CN         xmtr IPMap 助手
// @name:ja            xmtr IPMap ヘルパー
// @name:zh-TW         xmtr IPMap 助手
// @name:zh-HK         xmtr IPMap 助手
// @name:zh-MO         xmtr IPMap 助手
// @namespace          https://xmsl.dev/
// @version            0.0.4
// @description        Adds an "Open in xmsl.dev IPMap" button to traceroute and MTR results on looking glass sites.
// @description:en     Adds an "Open in xmsl.dev IPMap" button to traceroute and MTR results on looking glass sites.
// @description:zh-CN  在 Looking Glass 网站的 traceroute 与 MTR 结果旁添加「在 xmsl.dev IPMap 中打开」按钮。
// @description:ja     Looking Glass サイトの traceroute・MTR の結果に「xmsl.dev IPMap で開く」ボタンを追加します。
// @description:zh-TW  在 Looking Glass 網站的 traceroute 與 MTR 結果旁新增「在 xmsl.dev IPMap 中開啟」按鈕。
// @description:zh-HK  在 Looking Glass 網站的 traceroute 與 MTR 結果旁添加「在 xmsl.dev IPMap 中打開」按鈕。
// @description:zh-MO  在 Looking Glass 網站的 traceroute 與 MTR 結果旁添加「在 xmsl.dev IPMap 中打開」按鈕。
// @icon               https://xmsl.dev/favicon.ico
// @homepageURL        https://github.com/Alice39s/xmtr-helper-userscript
// @downloadURL        https://alice39s.github.io/xmtr-helper-userscript/xmtr-helper.user.js
// @updateURL          https://alice39s.github.io/xmtr-helper-userscript/xmtr-helper.meta.js
// @match              *://www.17ce.com/*
// @match              *://17ce.com/*
// @match              *://boce.aliyun.com/*
// @match              *://lg.aorta.net/*
// @match              *://www.boce.com/*
// @match              *://boce.com/*
// @match              *://tool.chinaz.com/*
// @match              *://globalping.io/*
// @match              *://lg.he.net/*
// @match              *://www.itdog.cn/*
// @match              *://itdog.cn/*
// @match              *://mtr.tools/*
// @match              *://ping.pe/*
// @match              *://*.ping.pe/*
// @match              *://ping.sx/*
// @match              https://*.vultr.com/*
// @match              *://lg.zayo.com/*
// @require            https://fastly.jsdelivr.net/npm/core-js-bundle@3.51.0/minified.js#sha256-Q3VXb08dPJxZgqOrxWWvFMs53LLkE+vvMSox+5TpRuw=
// @require            https://fastly.jsdelivr.net/npm/pako@3.0.3/dist/browser/pako_deflate.umd.min.js#sha256-Mh0i/Llv9N0SMNiyN3RqvJ7Q0gxtW5IChh+mX7MKqRA=
// @connect            xmsl.dev
// @connect            *.xmsl.dev
// @connect            api.globalping.io
// @grant              GM.xmlHttpRequest
// @grant              GM_addStyle
// @grant              GM_xmlhttpRequest
// @run-at             document-idle
// ==/UserScript==