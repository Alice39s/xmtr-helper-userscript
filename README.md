# xmtr IPMap Helper

A userscript that adds an **Open in xmtr IPMap** button to traceroute and MTR results on looking glass sites. The button uploads the result and opens the route on the [xmtr IPMap](https://xmsl.dev/ipmap) map.

**[Install the latest version](https://alice39s.github.io/xmtr-helper-userscript/xmtr-helper.user.js)**

This branch holds the built userscript. `xmtr-helper.user.js` and `xmtr-helper.meta.js` at the root are the latest release, and userscript managers check them for updates. `releases/<version>/` keeps every release.

## Requirements

- A userscript manager: [Tampermonkey](https://www.tampermonkey.net/), [Violentmonkey](https://violentmonkey.github.io/), [ScriptCat](https://docs.scriptcat.org/) or [Greasemonkey](https://www.greasespot.net/) 4.
- Chrome 55, Firefox 52 ESR, Safari 10.1, Edge 79 or later, which covers the browsers still found on Windows 7.

The first upload asks to allow requests to `xmsl.dev`, and to `api.globalping.io` on Globalping.

## Sites

Globalping, ping.pe, ping.sx, mtr.tools, the Vultr looking glass (`*-ping.vultr.com`), ITDOG, 站长工具, BOCE, 17CE, 阿里云拨测, and the looking glasses of Hurricane Electric, Zayo and Liberty Global.

## Languages

English, 简体中文, 繁體中文（台灣、香港、澳門） and 日本語, picked from the browser's language settings.

## 简体中文

在 Looking Glass 网站的 traceroute 与 MTR 结果旁添加「在 xmtr IPMap 中打开」按钮。点击后上传结果，并在 [xmtr IPMap](https://xmsl.dev/ipmap) 地图上打开这条路由。装好用户脚本管理器后，[点此安装最新版](https://alice39s.github.io/xmtr-helper-userscript/xmtr-helper.user.js)。
