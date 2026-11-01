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

(function(pako_browser_deflate) {
	"use strict";
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod, mod.exports), cb = null), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	var defaultAttributes = {
		xmlns: "http://www.w3.org/2000/svg",
		width: 24,
		height: 24,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		"stroke-width": 2,
		"stroke-linecap": "round",
		"stroke-linejoin": "round"
	};
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}
	function toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	function _defineProperty(e, r, t) {
		return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var createSVGElement = ([tag, attrs, children]) => {
		const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
		Object.keys(attrs).forEach((name) => {
			element.setAttribute(name, String(attrs[name]));
		});
		if (children === null || children === void 0 ? void 0 : children.length) children.forEach((child) => {
			const childElement = createSVGElement(child);
			element.appendChild(childElement);
		});
		return element;
	};
	var createElement = (iconNode, customAttrs = {}) => {
		return createSVGElement([
			"svg",
			_objectSpread2(_objectSpread2({}, defaultAttributes), customAttrs),
			iconNode
		]);
	};
	var Route = [
		["circle", {
			cx: "6",
			cy: "19",
			r: "3"
		}],
		["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }],
		["circle", {
			cx: "18",
			cy: "5",
			r: "3"
		}]
	];
	var TRADITIONAL_REGIONS = {
		tw: "zh-TW",
		hk: "zh-HK",
		mo: "zh-MO"
	};
	function localeOf(tag) {
		const [language, ...subtags] = tag.toLowerCase().split(/[-_]/);
		if (language === "en") return "en";
		if (language === "ja") return "ja";
		if (language !== "zh") return void 0;
		const script = subtags.find((subtag) => subtag.length === 4);
		const region = subtags.find((subtag) => subtag.length === 2);
		const traditionalRegion = region === void 0 ? void 0 : TRADITIONAL_REGIONS[region];
		if (script === "hans") return "zh-CN";
		if (traditionalRegion) return traditionalRegion;
		return script === "hant" ? "zh-TW" : "zh-CN";
	}
	function pickLocale(languages) {
		for (const tag of languages) {
			const locale = localeOf(tag);
			if (locale) return locale;
		}
		return "en";
	}
	var messages = {
		"en": {
			"scriptName": "xmtr IPMap Helper",
			"scriptDescription": "Adds an \"Open in xmsl.dev IPMap\" button to traceroute and MTR results on looking glass sites.",
			"open": "Open in xmsl.dev IPMap",
			"reading": "Reading the route…",
			"retry": "Could not open. Click to retry",
			"noAnsweredHop": "No hop on this route has answered yet.",
			"unreachable": "Could not reach {host}.",
			"timedOut": "{host} did not respond in time.",
			"noRequestApi": "This userscript manager does not allow cross-origin requests."
		},
		"zh-CN": {
			"scriptName": "xmtr IPMap 助手",
			"scriptDescription": "在 Looking Glass 网站的 traceroute 与 MTR 结果旁添加「在 xmsl.dev IPMap 中打开」按钮。",
			"open": "在 xmsl.dev IPMap 中打开",
			"reading": "正在读取路由…",
			"retry": "打开失败，点击重试",
			"noAnsweredHop": "这条路由还没有任何一跳应答。",
			"unreachable": "无法连接 {host}。",
			"timedOut": "{host} 响应超时。",
			"noRequestApi": "这个用户脚本管理器不支持跨域请求。"
		},
		"ja": {
			"scriptName": "xmtr IPMap ヘルパー",
			"scriptDescription": "Looking Glass サイトの traceroute・MTR の結果に「xmsl.dev IPMap で開く」ボタンを追加します。",
			"open": "xmsl.dev IPMap で開く",
			"reading": "ルートを読み込み中…",
			"retry": "開けませんでした。クリックで再試行",
			"noAnsweredHop": "このルートには、まだ応答したホップがありません。",
			"unreachable": "{host} に接続できませんでした。",
			"timedOut": "{host} から時間内に応答がありませんでした。",
			"noRequestApi": "このユーザースクリプトマネージャーはクロスオリジンリクエストに対応していません。"
		},
		"zh-TW": {
			"scriptName": "xmtr IPMap 助手",
			"scriptDescription": "在 Looking Glass 網站的 traceroute 與 MTR 結果旁新增「在 xmsl.dev IPMap 中開啟」按鈕。",
			"open": "在 xmsl.dev IPMap 中開啟",
			"reading": "正在讀取路由…",
			"retry": "開啟失敗，點選重試",
			"noAnsweredHop": "這條路由還沒有任何一跳應答。",
			"unreachable": "無法連線 {host}。",
			"timedOut": "{host} 響應超時。",
			"noRequestApi": "這個使用者指令碼管理器不支援跨域請求。"
		},
		"zh-HK": {
			"scriptName": "xmtr IPMap 助手",
			"scriptDescription": "在 Looking Glass 網站的 traceroute 與 MTR 結果旁添加「在 xmsl.dev IPMap 中打開」按鈕。",
			"open": "在 xmsl.dev IPMap 中打開",
			"reading": "正在讀取路由…",
			"retry": "打開失敗，點擊重試",
			"noAnsweredHop": "這條路由還沒有任何一跳應答。",
			"unreachable": "無法連接 {host}。",
			"timedOut": "{host} 響應超時。",
			"noRequestApi": "這個用户腳本管理器不支持跨域請求。"
		},
		"zh-MO": {
			"scriptName": "xmtr IPMap 助手",
			"scriptDescription": "在 Looking Glass 網站的 traceroute 與 MTR 結果旁添加「在 xmsl.dev IPMap 中打開」按鈕。",
			"open": "在 xmsl.dev IPMap 中打開",
			"reading": "正在讀取路由…",
			"retry": "打開失敗，點擊重試",
			"noAnsweredHop": "這條路由還沒有任何一跳應答。",
			"unreachable": "無法連接 {host}。",
			"timedOut": "{host} 響應超時。",
			"noRequestApi": "這個用户腳本管理器不支持跨域請求。"
		}
	}[pickLocale(navigator.languages)];
	function t(key, values = {}) {
		return messages[key].replace(/\{(\w+)\}/g, (placeholder, name) => {
			var _values$name;
			return String((_values$name = values[name]) !== null && _values$name !== void 0 ? _values$name : placeholder);
		});
	}
	var open_button_default = "[data-xmtr-helper]{vertical-align:middle;display:inline-flex}[data-xmtr-helper]>button{white-space:nowrap;cursor:pointer;align-items:center;display:inline-flex}[data-xmtr-helper]>button>svg{flex:none;width:1.15em;height:1.15em;margin-right:.35em}[data-xmtr-helper]>button:disabled{cursor:progress;opacity:.7}[data-xmtr-helper]>button[data-theme=default]{all:unset;box-sizing:border-box;color:#1d6fd8;white-space:nowrap;cursor:pointer;background:rgba(95,167,255,.08);border:1px solid rgba(95,167,255,.55);border-radius:6px;align-items:center;height:24px;padding:0 8px;font:500 12px/1 system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Cantarell,Helvetica Neue,PingFang SC,Microsoft YaHei,sans-serif;transition:background-color .15s ease-out,border-color .15s ease-out;display:inline-flex}[data-xmtr-helper]>button[data-theme=default]:hover{background:rgba(95,167,255,.16);border-color:rgba(95,167,255,.8)}[data-xmtr-helper]>button[data-theme=default]:focus-visible{outline-offset:2px;outline:2px solid #5fa7ff}[data-xmtr-helper]>button[data-theme=default]>svg{width:14px;height:14px;margin-right:4px}[data-xmtr-helper]>button[data-theme=default][data-state=failed]{color:#b91c1c;background:rgba(220,38,38,.08);border-color:rgba(220,38,38,.55)}@media (prefers-color-scheme:dark){[data-xmtr-helper]>button[data-theme=default]{color:#8cc0ff;background:rgba(95,167,255,.14)}[data-xmtr-helper]>button[data-theme=default][data-state=failed]{color:#fca5a5}}@media (prefers-reduced-motion:reduce){[data-xmtr-helper]>button[data-theme=default]{transition:none}}";
	var _GM = (() => typeof GM != "undefined" ? GM : void 0)();
	var _GM_addStyle = (() => typeof GM_addStyle != "undefined" ? GM_addStyle : void 0)();
	var _GM_xmlhttpRequest = (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
	var added = new Set();
	function addStyles(css) {
		var _document$head;
		if (added.has(css)) return;
		added.add(css);
		if (typeof _GM_addStyle === "function") {
			_GM_addStyle(css);
			return;
		}
		if ("adoptedStyleSheets" in Document.prototype && "replaceSync" in CSSStyleSheet.prototype) {
			const sheet = new CSSStyleSheet();
			sheet.replaceSync(css);
			document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
			return;
		}
		const style = document.createElement("style");
		style.textContent = css;
		((_document$head = document.head) !== null && _document$head !== void 0 ? _document$head : document.documentElement).appendChild(style);
	}
	function hostText(host) {
		if (host.ip === void 0) return host.hostname;
		return host.hostname && host.hostname !== host.ip ? `${host.hostname} (${host.ip})` : host.ip;
	}
	function hubStats(hop) {
		const stats = {};
		if (hop.lossPct !== void 0) stats["Loss%"] = hop.lossPct;
		if (hop.sent !== void 0) stats.Snt = hop.sent;
		if (hop.lastMs !== void 0) stats.Last = hop.lastMs;
		if (hop.avgMs !== void 0) stats.Avg = hop.avgMs;
		if (hop.bestMs !== void 0) stats.Best = hop.bestMs;
		if (hop.worstMs !== void 0) stats.Wrst = hop.worstMs;
		if (hop.stdevMs !== void 0) stats.StDev = hop.stdevMs;
		return stats;
	}
	function toMtrJson(trace) {
		const hubs = trace.hops.flatMap((hop) => {
			const stats = hubStats(hop);
			if (hop.hosts.length === 0) return [_objectSpread2({
				count: hop.ttl,
				host: "???",
				"Loss%": 100
			}, stats)];
			return hop.hosts.map((host) => _objectSpread2(_objectSpread2({
				count: hop.ttl,
				host: hostText(host)
			}, host.asn ? { ASN: `AS${host.asn}` } : {}), stats));
		});
		return JSON.stringify({ report: {
			mtr: _objectSpread2(_objectSpread2({}, trace.probe ? { src: trace.probe } : {}), {}, { dst: trace.target }),
			hubs
		} });
	}
	var IPMAP_UPLOAD_URL = "https://xmsl.dev/ipmap/upload";
	var siteName = location.hostname;
	function setSiteName(name) {
		siteName = name;
	}
	function toBase64Url(bytes) {
		var _bytes$index;
		let binary = "";
		for (let index = 0; index < bytes.length; index += 1) binary += String.fromCharCode((_bytes$index = bytes[index]) !== null && _bytes$index !== void 0 ? _bytes$index : 0);
		return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
	}
	function handoffUrl(trace, pageUrl = location.href) {
		if (!trace.hops.some((hop) => hop.hosts.length > 0)) throw new Error(t("noAnsweredHop"));
		const payload = {
			v: 1,
			site: {
				name: siteName,
				url: pageUrl
			},
			text: toMtrJson(trace)
		};
		return `${IPMAP_UPLOAD_URL}#${toBase64Url((0, pako_browser_deflate.deflate)(JSON.stringify(payload), { level: 9 }))}`;
	}
	function asyncGeneratorStep(n, t, e, r, o, a, c) {
		try {
			var i = n[a](c), u = i.value;
		} catch (n) {
			e(n);
			return;
		}
		i.done ? t(u) : Promise.resolve(u).then(r, o);
	}
	function _asyncToGenerator(n) {
		return function() {
			var t = this, e = arguments;
			return new Promise(function(r, o) {
				var a = n.apply(t, e);
				function _next(n) {
					asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
				}
				function _throw(n) {
					asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
				}
				_next(void 0);
			});
		};
	}
	var BUTTON_HOST_ATTRIBUTE = "data-xmtr-helper";
	var mounted = new WeakMap();
	function showFailure(button, label, error) {
		button.dataset.state = "failed";
		button.title = error instanceof Error ? error.message : String(error);
		label.textContent = t("retry");
	}
	function showReady(button, label) {
		delete button.dataset.state;
		button.removeAttribute("title");
		label.textContent = t("open");
	}
	function openInIpmap(_x, _x2, _x3) {
		return _openInIpmap.apply(this, arguments);
	}
	function _openInIpmap() {
		_openInIpmap = _asyncToGenerator(function* (button, label, read) {
			if (button.disabled) return;
			let pending;
			try {
				pending = read();
				if (!(pending instanceof Promise)) {
					window.open(handoffUrl(pending), "_blank", "noopener");
					showReady(button, label);
					return;
				}
			} catch (error) {
				showFailure(button, label, error);
				throw error;
			}
			const tab = window.open("about:blank", "_blank");
			button.disabled = true;
			button.dataset.state = "busy";
			label.textContent = t("reading");
			try {
				const url = handoffUrl(yield pending);
				if (tab) {
					tab.opener = null;
					tab.location.href = url;
				} else window.open(url, "_blank", "noopener");
				showReady(button, label);
			} catch (error) {
				tab === null || tab === void 0 || tab.close();
				showFailure(button, label, error);
				throw error;
			} finally {
				button.disabled = false;
			}
		});
		return _openInIpmap.apply(this, arguments);
	}
	function createOpenButton(read, appearance = {}) {
		addStyles(open_button_default);
		if (appearance.css) addStyles(appearance.css);
		const host = document.createElement("span");
		host.setAttribute(BUTTON_HOST_ATTRIBUTE, "");
		const button = document.createElement("button");
		button.type = "button";
		if (appearance.className) button.className = appearance.className;
		if (!appearance.className && !appearance.css) button.dataset.theme = "default";
		const icon = createElement(Route);
		icon.setAttribute("aria-hidden", "true");
		const label = document.createElement("span");
		label.textContent = t("open");
		button.appendChild(icon);
		button.appendChild(label);
		host.appendChild(button);
		button.addEventListener("click", (event) => {
			event.preventDefault();
			event.stopPropagation();
			openInIpmap(button, label, read);
		});
		return host;
	}
	function mountOpenButton(result, read, place, appearance) {
		const existing = mounted.get(result);
		if (existing === null || existing === void 0 ? void 0 : existing.isConnected) return;
		const button = existing !== null && existing !== void 0 ? existing : createOpenButton(read, appearance);
		mounted.set(result, button);
		place(button);
	}
	function watchElements(selector, found) {
		let scheduled = false;
		const scan = () => {
			scheduled = false;
			for (const element of document.querySelectorAll(selector)) found(element);
		};
		new MutationObserver(() => {
			if (scheduled) return;
			scheduled = true;
			requestAnimationFrame(scan);
		}).observe(document.documentElement, {
			childList: true,
			subtree: true
		});
		scan();
	}
	var button_default$12 = "[data-xmtr-helper]{vertical-align:top;margin-left:8px}[data-xmtr-helper]>button>svg{width:12px;height:12px;margin-right:4px}[data-xmtr-helper]>button[data-state=failed]{color:var(--red,#e5484d)}";
	var import_ipaddr = __toESM(__commonJSMin(((exports, module, this$1) => {
		(function(root) {
			"use strict";
			const ipv4Part = "(0?\\d+|0x[a-f0-9]+)";
			const ipv4Regexes = {
				fourOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, "i"),
				threeOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, "i"),
				twoOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}$`, "i"),
				longValue: new RegExp(`^${ipv4Part}$`, "i")
			};
			const octalRegex = new RegExp(`^0[0-7]+$`, "i");
			const hexRegex = new RegExp(`^0x[a-f0-9]+$`, "i");
			const zoneIndex = "%[0-9a-z]{1,}";
			const ipv6Part = "(?:[0-9a-f]+::?)+";
			const ipv6Regexes = {
				zoneIndex: new RegExp(zoneIndex, "i"),
				"native": new RegExp(`^(::)?(${ipv6Part})?([0-9a-f]+)?(::)?(${zoneIndex})?$`, "i"),
				deprecatedTransitional: new RegExp(`^(?:::)(${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?)$`, "i"),
				transitional: new RegExp(`^((?:${ipv6Part})|(?:::)(?:${ipv6Part})?)${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?$`, "i")
			};
			function expandIPv6(string, parts) {
				if (string.indexOf("::") !== string.lastIndexOf("::")) return null;
				let colonCount = 0;
				let lastColon = -1;
				let zoneId = (string.match(ipv6Regexes.zoneIndex) || [])[0];
				let replacement, replacementCount;
				if (zoneId) {
					zoneId = zoneId.substring(1);
					string = string.replace(/%.+$/, "");
				}
				while ((lastColon = string.indexOf(":", lastColon + 1)) >= 0) colonCount++;
				if (string.substr(0, 2) === "::") colonCount--;
				if (string.substr(-2, 2) === "::") colonCount--;
				if (colonCount >= parts) return null;
				replacementCount = parts - colonCount;
				replacement = ":";
				while (replacementCount--) replacement += "0:";
				string = string.replace("::", replacement);
				if (string[0] === ":") string = string.slice(1);
				if (string[string.length - 1] === ":") string = string.slice(0, -1);
				parts = (function() {
					const ref = string.split(":");
					const results = [];
					for (let i = 0; i < ref.length; i++) results.push(ref[i].length > 4 ? NaN : parseInt(ref[i], 16));
					return results;
				})();
				return {
					parts,
					zoneId
				};
			}
			function matchCIDR(first, second, partSize, cidrBits) {
				if (first.length !== second.length) throw new Error("ipaddr: cannot match CIDR for objects with different lengths");
				let part = 0;
				let shift;
				while (cidrBits > 0) {
					shift = partSize - cidrBits;
					if (shift < 0) shift = 0;
					if (first[part] >> shift !== second[part] >> shift) return false;
					cidrBits -= partSize;
					part += 1;
				}
				return true;
			}
			function parseIntAuto(string) {
				if (hexRegex.test(string)) return parseInt(string, 16);
				if (string[0] === "0" && !isNaN(parseInt(string[1], 10))) {
					if (octalRegex.test(string)) return parseInt(string, 8);
					throw new Error(`ipaddr: cannot parse ${string} as octal`);
				}
				return parseInt(string, 10);
			}
			function padPart(part, length) {
				while (part.length < length) part = `0${part}`;
				return part;
			}
			const ipaddr = {};
			ipaddr.IPv4 = (function() {
				function IPv4(octets) {
					if (octets.length !== 4) throw new Error("ipaddr: ipv4 octet count should be 4");
					let i, octet;
					for (i = 0; i < octets.length; i++) {
						octet = octets[i];
						if (!(0 <= octet && octet <= 255)) throw new Error("ipaddr: ipv4 octet should fit in 8 bits");
					}
					this.octets = octets;
				}
				IPv4.prototype.SpecialRanges = {
					unspecified: [[new IPv4([
						0,
						0,
						0,
						0
					]), 8]],
					broadcast: [[new IPv4([
						255,
						255,
						255,
						255
					]), 32]],
					multicast: [[new IPv4([
						224,
						0,
						0,
						0
					]), 4]],
					linkLocal: [[new IPv4([
						169,
						254,
						0,
						0
					]), 16]],
					loopback: [[new IPv4([
						127,
						0,
						0,
						0
					]), 8]],
					carrierGradeNat: [[new IPv4([
						100,
						64,
						0,
						0
					]), 10]],
					"private": [
						[new IPv4([
							10,
							0,
							0,
							0
						]), 8],
						[new IPv4([
							172,
							16,
							0,
							0
						]), 12],
						[new IPv4([
							192,
							168,
							0,
							0
						]), 16]
					],
					reserved: [
						[new IPv4([
							192,
							0,
							0,
							0
						]), 24],
						[new IPv4([
							192,
							0,
							2,
							0
						]), 24],
						[new IPv4([
							192,
							88,
							99,
							0
						]), 24],
						[new IPv4([
							198,
							18,
							0,
							0
						]), 15],
						[new IPv4([
							198,
							51,
							100,
							0
						]), 24],
						[new IPv4([
							203,
							0,
							113,
							0
						]), 24],
						[new IPv4([
							240,
							0,
							0,
							0
						]), 4]
					],
					as112: [[new IPv4([
						192,
						175,
						48,
						0
					]), 24], [new IPv4([
						192,
						31,
						196,
						0
					]), 24]],
					amt: [[new IPv4([
						192,
						52,
						193,
						0
					]), 24]]
				};
				IPv4.prototype.kind = function() {
					return "ipv4";
				};
				IPv4.prototype.match = function(other, cidrRange) {
					let ref;
					if (cidrRange === void 0) {
						ref = other;
						other = ref[0];
						cidrRange = ref[1];
					}
					if (other.kind() !== "ipv4") throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
					return matchCIDR(this.octets, other.octets, 8, cidrRange);
				};
				IPv4.prototype.prefixLengthFromSubnetMask = function() {
					let cidr = 0;
					let stop = false;
					const zerotable = {
						0: 8,
						128: 7,
						192: 6,
						224: 5,
						240: 4,
						248: 3,
						252: 2,
						254: 1,
						255: 0
					};
					let i, octet, zeros;
					for (i = 3; i >= 0; i -= 1) {
						octet = this.octets[i];
						if (octet in zerotable) {
							zeros = zerotable[octet];
							if (stop && zeros !== 0) return null;
							if (zeros !== 8) stop = true;
							cidr += zeros;
						} else return null;
					}
					return 32 - cidr;
				};
				IPv4.prototype.range = function() {
					return ipaddr.subnetMatch(this, this.SpecialRanges);
				};
				IPv4.prototype.toByteArray = function() {
					return this.octets.slice(0);
				};
				IPv4.prototype.toIPv4MappedAddress = function() {
					return ipaddr.IPv6.parse(`::ffff:${this.toString()}`);
				};
				IPv4.prototype.toNormalizedString = function() {
					return this.toString();
				};
				IPv4.prototype.toString = function() {
					return this.octets.join(".");
				};
				return IPv4;
			})();
			ipaddr.IPv4.broadcastAddressFromCIDR = function(string) {
				try {
					const cidr = this.parseCIDR(string);
					const ipInterfaceOctets = cidr[0].toByteArray();
					const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
					const octets = [];
					let i = 0;
					while (i < 4) {
						octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
						i++;
					}
					return new this(octets);
				} catch (e) {
					throw new Error("ipaddr: the address does not have IPv4 CIDR format", { cause: e });
				}
			};
			ipaddr.IPv4.isIPv4 = function(string) {
				return this.parser(string) !== null;
			};
			ipaddr.IPv4.isValid = function(string) {
				try {
					new this(this.parser(string));
					return true;
				} catch (_unused) {
					return false;
				}
			};
			ipaddr.IPv4.isValidCIDR = function(string) {
				try {
					this.parseCIDR(string);
					return true;
				} catch (_unused2) {
					return false;
				}
			};
			ipaddr.IPv4.isValidFourPartDecimal = function(string) {
				if (ipaddr.IPv4.isValid(string) && string.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) return true;
				else return false;
			};
			ipaddr.IPv4.isValidCIDRFourPartDecimal = function(string) {
				const match = string.match(/^(.+)\/(\d+)$/);
				if (!ipaddr.IPv4.isValidCIDR(string) || !match) return false;
				return ipaddr.IPv4.isValidFourPartDecimal(match[1]);
			};
			ipaddr.IPv4.networkAddressFromCIDR = function(string) {
				let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
				try {
					cidr = this.parseCIDR(string);
					ipInterfaceOctets = cidr[0].toByteArray();
					subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
					octets = [];
					i = 0;
					while (i < 4) {
						octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
						i++;
					}
					return new this(octets);
				} catch (e) {
					throw new Error("ipaddr: the address does not have IPv4 CIDR format", { cause: e });
				}
			};
			ipaddr.IPv4.parse = function(string) {
				const parts = this.parser(string);
				if (parts === null) throw new Error("ipaddr: string is not formatted like an IPv4 Address");
				return new this(parts);
			};
			ipaddr.IPv4.parseCIDR = function(string) {
				let match;
				if (match = string.match(/^(.+)\/(\d+)$/)) {
					const maskLength = parseInt(match[2]);
					if (maskLength >= 0 && maskLength <= 32) {
						const parsed = [this.parse(match[1]), maskLength];
						Object.defineProperty(parsed, "toString", { value: function() {
							return this.join("/");
						} });
						return parsed;
					}
				}
				throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range");
			};
			ipaddr.IPv4.parser = function(string) {
				let match, part, value;
				if (match = string.match(ipv4Regexes.fourOctet)) return (function() {
					const ref = match.slice(1, 6);
					const results = [];
					for (let i = 0; i < ref.length; i++) {
						part = ref[i];
						results.push(parseIntAuto(part));
					}
					return results;
				})();
				else if (match = string.match(ipv4Regexes.longValue)) {
					value = parseIntAuto(match[1]);
					if (value > 4294967295 || value < 0) throw new Error("ipaddr: address outside defined range");
					return (function() {
						const results = [];
						let shift = 0;
						for (; shift <= 24; shift += 8) results.push(value >> shift & 255);
						return results;
					})().reverse();
				} else if (match = string.match(ipv4Regexes.twoOctet)) return (function() {
					const ref = match.slice(1, 4);
					const results = [];
					value = parseIntAuto(ref[1]);
					if (value > 16777215 || value < 0) throw new Error("ipaddr: address outside defined range");
					results.push(parseIntAuto(ref[0]));
					results.push(value >> 16 & 255);
					results.push(value >> 8 & 255);
					results.push(value & 255);
					return results;
				})();
				else if (match = string.match(ipv4Regexes.threeOctet)) return (function() {
					const ref = match.slice(1, 5);
					const results = [];
					value = parseIntAuto(ref[2]);
					if (value > 65535 || value < 0) throw new Error("ipaddr: address outside defined range");
					results.push(parseIntAuto(ref[0]));
					results.push(parseIntAuto(ref[1]));
					results.push(value >> 8 & 255);
					results.push(value & 255);
					return results;
				})();
				else return null;
			};
			ipaddr.IPv4.subnetMaskFromPrefixLength = function(prefix) {
				prefix = parseInt(prefix);
				if (Number.isNaN(prefix) || prefix < 0 || prefix > 32) throw new Error("ipaddr: invalid IPv4 prefix length");
				const octets = [
					0,
					0,
					0,
					0
				];
				let j = 0;
				const filledOctetCount = Math.floor(prefix / 8);
				while (j < filledOctetCount) {
					octets[j] = 255;
					j++;
				}
				if (filledOctetCount < 4) octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
				return new this(octets);
			};
			ipaddr.IPv6 = (function() {
				function IPv6(parts, zoneId) {
					let i, part;
					if (parts.length === 16) {
						this.parts = [];
						for (i = 0; i <= 14; i += 2) this.parts.push(parts[i] << 8 | parts[i + 1]);
					} else if (parts.length === 8) this.parts = parts;
					else throw new Error("ipaddr: ipv6 part count should be 8 or 16");
					for (i = 0; i < this.parts.length; i++) {
						part = this.parts[i];
						if (!(0 <= part && part <= 65535)) throw new Error("ipaddr: ipv6 part should fit in 16 bits");
					}
					if (zoneId) this.zoneId = zoneId;
				}
				IPv6.prototype.SpecialRanges = {
					unspecified: [new IPv6([
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]), 128],
					linkLocal: [new IPv6([
						65152,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]), 10],
					multicast: [new IPv6([
						65280,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]), 8],
					loopback: [new IPv6([
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						1
					]), 128],
					uniqueLocal: [new IPv6([
						64512,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]), 7],
					ipv4Mapped: [new IPv6([
						0,
						0,
						0,
						0,
						0,
						65535,
						0,
						0
					]), 96],
					deprecatedSiteLocal: [new IPv6([
						65216,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]), 10],
					discard: [new IPv6([
						256,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]), 64],
					rfc6145: [new IPv6([
						0,
						0,
						0,
						0,
						65535,
						0,
						0,
						0
					]), 96],
					rfc6052: [[new IPv6([
						100,
						65435,
						0,
						0,
						0,
						0,
						0,
						0
					]), 96], [new IPv6([
						100,
						65435,
						1,
						0,
						0,
						0,
						0,
						0
					]), 48]],
					"6to4": [new IPv6([
						8194,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]), 16],
					teredo: [new IPv6([
						8193,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]), 32],
					benchmarking: [new IPv6([
						8193,
						2,
						0,
						0,
						0,
						0,
						0,
						0
					]), 48],
					amt: [new IPv6([
						8193,
						3,
						0,
						0,
						0,
						0,
						0,
						0
					]), 32],
					as112v6: [[new IPv6([
						8193,
						4,
						274,
						0,
						0,
						0,
						0,
						0
					]), 48], [new IPv6([
						9760,
						79,
						32768,
						0,
						0,
						0,
						0,
						0
					]), 48]],
					deprecatedOrchid: [new IPv6([
						8193,
						16,
						0,
						0,
						0,
						0,
						0,
						0
					]), 28],
					orchid2: [new IPv6([
						8193,
						32,
						0,
						0,
						0,
						0,
						0,
						0
					]), 28],
					droneRemoteIdProtocolEntityTags: [new IPv6([
						8193,
						48,
						0,
						0,
						0,
						0,
						0,
						0
					]), 28],
					segmentRouting: [new IPv6([
						24320,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]), 16],
					reserved: [
						[new IPv6([
							8193,
							0,
							0,
							0,
							0,
							0,
							0,
							0
						]), 23],
						[new IPv6([
							8193,
							3512,
							0,
							0,
							0,
							0,
							0,
							0
						]), 32],
						[new IPv6([
							16383,
							0,
							0,
							0,
							0,
							0,
							0,
							0
						]), 20]
					]
				};
				IPv6.prototype.isIPv4MappedAddress = function() {
					return this.range() === "ipv4Mapped";
				};
				IPv6.prototype.kind = function() {
					return "ipv6";
				};
				IPv6.prototype.match = function(other, cidrRange) {
					let ref;
					if (cidrRange === void 0) {
						ref = other;
						other = ref[0];
						cidrRange = ref[1];
					}
					if (other.kind() !== "ipv6") throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
					return matchCIDR(this.parts, other.parts, 16, cidrRange);
				};
				IPv6.prototype.prefixLengthFromSubnetMask = function() {
					let cidr = 0;
					let stop = false;
					const zerotable = {
						0: 16,
						32768: 15,
						49152: 14,
						57344: 13,
						61440: 12,
						63488: 11,
						64512: 10,
						65024: 9,
						65280: 8,
						65408: 7,
						65472: 6,
						65504: 5,
						65520: 4,
						65528: 3,
						65532: 2,
						65534: 1,
						65535: 0
					};
					let part, zeros;
					for (let i = 7; i >= 0; i -= 1) {
						part = this.parts[i];
						if (part in zerotable) {
							zeros = zerotable[part];
							if (stop && zeros !== 0) return null;
							if (zeros !== 16) stop = true;
							cidr += zeros;
						} else return null;
					}
					return 128 - cidr;
				};
				IPv6.prototype.range = function() {
					return ipaddr.subnetMatch(this, this.SpecialRanges);
				};
				IPv6.prototype.toByteArray = function() {
					let part;
					const bytes = [];
					const ref = this.parts;
					for (let i = 0; i < ref.length; i++) {
						part = ref[i];
						bytes.push(part >> 8);
						bytes.push(part & 255);
					}
					return bytes;
				};
				IPv6.prototype.toFixedLengthString = function() {
					const addr = (function() {
						const results = [];
						for (let i = 0; i < this.parts.length; i++) results.push(padPart(this.parts[i].toString(16), 4));
						return results;
					}).call(this).join(":");
					let suffix = "";
					if (this.zoneId) suffix = `%${this.zoneId}`;
					return addr + suffix;
				};
				IPv6.prototype.toIPv4Address = function() {
					if (!this.isIPv4MappedAddress()) throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
					const ref = this.parts.slice(-2);
					const high = ref[0];
					const low = ref[1];
					return new ipaddr.IPv4([
						high >> 8,
						high & 255,
						low >> 8,
						low & 255
					]);
				};
				IPv6.prototype.toNormalizedString = function() {
					const addr = (function() {
						const results = [];
						for (let i = 0; i < this.parts.length; i++) results.push(this.parts[i].toString(16));
						return results;
					}).call(this).join(":");
					let suffix = "";
					if (this.zoneId) suffix = `%${this.zoneId}`;
					return addr + suffix;
				};
				IPv6.prototype.toRFC5952String = function() {
					const regex = /((^|:)(0(:|$)){2,})/g;
					let suffix = "";
					if (this.zoneId) suffix = `%${this.zoneId}`;
					const normalized = this.toNormalizedString();
					const string = normalized.slice(0, normalized.length - suffix.length);
					let bestMatchIndex = 0;
					let bestMatchLength = -1;
					let bestMatchGroups = -1;
					let match;
					while (match = regex.exec(string)) {
						const groups = (match[0].match(/0/g) || []).length;
						if (groups > bestMatchGroups) {
							bestMatchGroups = groups;
							bestMatchIndex = match.index;
							bestMatchLength = match[0].length;
						}
					}
					if (bestMatchLength < 0) return string + suffix;
					return `${string.substring(0, bestMatchIndex)}::${string.substring(bestMatchIndex + bestMatchLength)}${suffix}`;
				};
				IPv6.prototype.toString = function() {
					return this.toRFC5952String();
				};
				return IPv6;
			})();
			ipaddr.IPv6.broadcastAddressFromCIDR = function(string) {
				try {
					const cidr = this.parseCIDR(string);
					const ipInterfaceOctets = cidr[0].toByteArray();
					const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
					const octets = [];
					let i = 0;
					while (i < 16) {
						octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
						i++;
					}
					return new this(octets);
				} catch (e) {
					throw new Error("ipaddr: the address does not have IPv6 CIDR format", { cause: e });
				}
			};
			ipaddr.IPv6.isIPv6 = function(string) {
				return this.parser(string) !== null;
			};
			ipaddr.IPv6.isValid = function(string) {
				if (typeof string === "string" && string.indexOf(":") === -1) return false;
				try {
					const addr = this.parser(string);
					new this(addr.parts, addr.zoneId);
					return true;
				} catch (_unused3) {
					return false;
				}
			};
			ipaddr.IPv6.isValidCIDR = function(string) {
				if (typeof string === "string" && string.indexOf(":") === -1) return false;
				try {
					this.parseCIDR(string);
					return true;
				} catch (_unused4) {
					return false;
				}
			};
			ipaddr.IPv6.networkAddressFromCIDR = function(string) {
				let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
				try {
					cidr = this.parseCIDR(string);
					ipInterfaceOctets = cidr[0].toByteArray();
					subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
					octets = [];
					i = 0;
					while (i < 16) {
						octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
						i++;
					}
					return new this(octets);
				} catch (e) {
					throw new Error("ipaddr: the address does not have IPv6 CIDR format", { cause: e });
				}
			};
			ipaddr.IPv6.parse = function(string) {
				const addr = this.parser(string);
				if (addr === null) throw new Error("ipaddr: string is not formatted like an IPv6 Address");
				return new this(addr.parts, addr.zoneId);
			};
			ipaddr.IPv6.parseCIDR = function(string) {
				let maskLength, match, parsed;
				if (match = string.match(/^(.+)\/(\d+)$/)) {
					maskLength = parseInt(match[2]);
					if (maskLength >= 0 && maskLength <= 128) {
						parsed = [this.parse(match[1]), maskLength];
						Object.defineProperty(parsed, "toString", { value: function() {
							return this.join("/");
						} });
						return parsed;
					}
				}
				throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range");
			};
			ipaddr.IPv6.parser = function(string) {
				let addr, i, match, octet, octets, zoneId;
				if (match = string.match(ipv6Regexes.deprecatedTransitional)) return this.parser(`::ffff:${match[1]}`);
				if (ipv6Regexes.native.test(string)) return expandIPv6(string, 8);
				if (match = string.match(ipv6Regexes.transitional)) {
					zoneId = match[6] || "";
					addr = match[1];
					if (!match[1].endsWith("::")) addr = addr.slice(0, -1);
					addr = expandIPv6(addr + zoneId, 6);
					if (addr && addr.parts) {
						octets = [
							parseInt(match[2]),
							parseInt(match[3]),
							parseInt(match[4]),
							parseInt(match[5])
						];
						for (i = 0; i < octets.length; i++) {
							octet = octets[i];
							if (!(0 <= octet && octet <= 255)) return null;
						}
						addr.parts.push(octets[0] << 8 | octets[1]);
						addr.parts.push(octets[2] << 8 | octets[3]);
						return {
							parts: addr.parts,
							zoneId: addr.zoneId
						};
					}
				}
				return null;
			};
			ipaddr.IPv6.subnetMaskFromPrefixLength = function(prefix) {
				prefix = parseInt(prefix);
				if (Number.isNaN(prefix) || prefix < 0 || prefix > 128) throw new Error("ipaddr: invalid IPv6 prefix length");
				const octets = [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				];
				let j = 0;
				const filledOctetCount = Math.floor(prefix / 8);
				while (j < filledOctetCount) {
					octets[j] = 255;
					j++;
				}
				if (filledOctetCount < 16) octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
				return new this(octets);
			};
			ipaddr.fromByteArray = function(bytes) {
				const length = bytes.length;
				if (length === 4) return new ipaddr.IPv4(bytes);
				else if (length === 16) return new ipaddr.IPv6(bytes);
				else throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
			};
			ipaddr.isValid = function(string) {
				return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
			};
			ipaddr.isValidCIDR = function(string) {
				return ipaddr.IPv6.isValidCIDR(string) || ipaddr.IPv4.isValidCIDR(string);
			};
			ipaddr.parse = function(string) {
				if (ipaddr.IPv6.isValid(string)) return ipaddr.IPv6.parse(string);
				else if (ipaddr.IPv4.isValid(string)) return ipaddr.IPv4.parse(string);
				else throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
			};
			ipaddr.parseCIDR = function(string) {
				try {
					return ipaddr.IPv6.parseCIDR(string);
				} catch (_unused5) {
					try {
						return ipaddr.IPv4.parseCIDR(string);
					} catch (e) {
						throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format", { cause: e });
					}
				}
			};
			ipaddr.process = function(string) {
				const addr = this.parse(string);
				if (addr.kind() === "ipv6" && addr.isIPv4MappedAddress()) return addr.toIPv4Address();
				else return addr;
			};
			ipaddr.subnetMatch = function(address, rangeList, defaultName) {
				let i, rangeName, rangeSubnets, subnet;
				if (defaultName === void 0 || defaultName === null) defaultName = "unicast";
				for (rangeName in rangeList) if (Object.prototype.hasOwnProperty.call(rangeList, rangeName)) {
					rangeSubnets = rangeList[rangeName];
					if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) rangeSubnets = [rangeSubnets];
					for (i = 0; i < rangeSubnets.length; i++) {
						subnet = rangeSubnets[i];
						if (address.kind() === subnet[0].kind() && address.match.apply(address, subnet)) return rangeName;
					}
				}
				return defaultName;
			};
			if (typeof module !== "undefined" && module.exports) module.exports = ipaddr;
			else root.ipaddr = ipaddr;
		})(this$1);
	}))(), 1);
	function parseNumber(text) {
		const match = text === null || text === void 0 ? void 0 : text.replace(/,/g, "").match(/-?\d+(?:\.\d+)?/);
		return match ? Number(match[0]) : void 0;
	}
	function normalizeIp(text) {
		const value = text === null || text === void 0 ? void 0 : text.trim().replace(/^\[|\]$/g, "");
		if (!value || !import_ipaddr.default.isValid(value)) return void 0;
		return import_ipaddr.default.process(value).toString();
	}
	function parseAsn(text) {
		const match = text === null || text === void 0 ? void 0 : text.match(/(?:^|\bAS)\s*(\d{1,10})\b/i);
		const asn = match ? Number(match[1]) : 0;
		return asn > 0 ? asn : void 0;
	}
	function cellText(element) {
		var _element$textContent$, _element$textContent;
		return (_element$textContent$ = element === null || element === void 0 || (_element$textContent = element.textContent) === null || _element$textContent === void 0 ? void 0 : _element$textContent.replace(/\s+/g, " ").trim()) !== null && _element$textContent$ !== void 0 ? _element$textContent$ : "";
	}
	var RESULT_SELECTOR$3 = "table";
	var HEADER_NAMES$2 = [
		["ttl", [
			"hop",
			"hops",
			"ttl",
			"跳数",
			"跳转",
			"序号",
			"编号"
		]],
		["address", [
			"ip",
			"host",
			"address",
			"addr",
			"地址",
			"主机",
			"解析ip",
			"ip地址"
		]],
		["hostname", [
			"ptr",
			"dns",
			"dns名称",
			"域名",
			"主机名",
			"rdns",
			"反向解析"
		]],
		["loss", [
			"loss",
			"丢包",
			"丢包率",
			"丢包比"
		]],
		["avg", [
			"avg",
			"average",
			"平均",
			"平均值",
			"平均时间",
			"平均延时"
		]],
		["best", [
			"best",
			"min",
			"minimum",
			"最小",
			"最小时间",
			"最快",
			"最短"
		]],
		["worst", [
			"worst",
			"wrst",
			"max",
			"maximum",
			"最大",
			"最大时间",
			"最慢",
			"最长"
		]]
	];
	var COLUMN_POSITIONS$2 = [
		["ttl", 0],
		["address", 1],
		["hostname", 2],
		["loss", 4],
		["worst", 5],
		["best", 6],
		["avg", 7]
	];
	var IGNORED_HEADER$2 = /位置|归属|地区|地域|国家|城市|运营商|比|比例|ratio|region|location|country|city|isp|bar/;
	function normalizeHeader$2(text) {
		return text.toLowerCase().replace(/[\s:：()（）%]/g, "");
	}
	function namesColumn$2(header, name) {
		if (/^[a-z]+$/.test(name)) return new RegExp(`(^|[^a-z])${name}([^a-z]|$)`).test(header);
		return header.includes(name);
	}
	function readColumns$4(headers) {
		const columns = new Map();
		const taken = new Set();
		const take = (column, index) => {
			columns.set(column, index);
			taken.add(index);
		};
		headers.forEach((header, index) => {
			const text = normalizeHeader$2(header);
			if (!text || IGNORED_HEADER$2.test(text)) return;
			for (const [column, names] of HEADER_NAMES$2) {
				if (columns.has(column) || !names.includes(text)) continue;
				take(column, index);
				return;
			}
		});
		headers.forEach((header, index) => {
			const text = normalizeHeader$2(header);
			if (!text || taken.has(index) || IGNORED_HEADER$2.test(text)) return;
			for (const [column, names] of HEADER_NAMES$2) {
				if (columns.has(column) || !names.some((name) => namesColumn$2(text, name))) continue;
				take(column, index);
				return;
			}
		});
		return columns;
	}
	function headerTexts$1(table) {
		const cells = [...table.querySelectorAll(":scope > thead > tr > th")];
		if (cells.length > 0) return cells.map((cell) => cellText(cell));
		const first = table.querySelector(":scope > tbody > tr:first-child, :scope > tr:first-child");
		return (first ? [...first.children].filter((cell) => cell.tagName === "TH") : []).map((cell) => cellText(cell));
	}
	function hopRows$1(table) {
		return [...table.querySelectorAll(":scope > thead > tr, :scope > tbody > tr, :scope > tfoot > tr, :scope > tr")];
	}
	function columnsOf$2(table) {
		const headers = headerTexts$1(table);
		const columns = headers.length > 0 ? readColumns$4(headers) : new Map();
		for (const [column, index] of COLUMN_POSITIONS$2) if (!columns.has(column)) columns.set(column, index);
		return columns;
	}
	function isResultTable$1(table) {
		if (!table.matches("table")) return false;
		const columns = readColumns$4(headerTexts$1(table));
		const times = columns.has("avg") || columns.has("best") && columns.has("worst");
		if (columns.has("ttl") && columns.has("address") && times) return true;
		return table.matches(".ce-idx-trace-table");
	}
	function resultBlock$5(table) {
		var _ref, _ref2, _table$closest;
		return (_ref = (_ref2 = (_table$closest = table.closest(".ce-idx-trace-detail")) !== null && _table$closest !== void 0 ? _table$closest : table.closest(".ce-idx-trace-detail-wrap")) !== null && _ref2 !== void 0 ? _ref2 : table.closest("[class*=\"trace-detail\"]")) !== null && _ref !== void 0 ? _ref : table;
	}
	var RUNNING_TEXT$3 = /正在追踪|追踪中|请稍候|检测中|Running/i;
	var NO_VALUE$2 = /^(?:[-–—*?.]+|n\/a|na|timeout|unknown|未知|无|请求超时|超时|无响应|未响应)$/i;
	var HOSTNAME$3 = /^(?=.{1,253}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+\.?$/i;
	function valueText$2(cell) {
		if (!cell) return void 0;
		const text = cellText(cell);
		if (!text || NO_VALUE$2.test(text)) return void 0;
		return text;
	}
	function readNumber$2(cell) {
		const text = valueText$2(cell);
		return text === void 0 ? void 0 : parseNumber(text);
	}
	function addressOf$2(text) {
		for (const token of text.split(/[\s,;]+/)) {
			const address = normalizeIp(token.replace(/[[\]<>]/g, ""));
			if (address) return address;
		}
	}
	function readHost$4(cell) {
		const text = valueText$2(cell);
		if (!text) return void 0;
		const address = addressOf$2(text);
		if (address) return { ip: address };
		const name = text.replace(/\.$/, "");
		return HOSTNAME$3.test(name) ? { hostname: name } : void 0;
	}
	function readHostname$3(cell) {
		const text = valueText$2(cell);
		if (!text || /\s/.test(text) || normalizeIp(text) !== void 0) return void 0;
		return text.replace(/\.$/, "");
	}
	function readHop$8(row, columns) {
		const cells = [...row.children].filter((cell) => cell.tagName === "TD");
		const cell = (column) => {
			const index = columns.get(column);
			return index === void 0 ? void 0 : cells[index];
		};
		const ttl = readNumber$2(cell("ttl"));
		if (ttl === void 0 || !Number.isInteger(ttl) || ttl < 1) return void 0;
		const address = readHost$4(cell("address"));
		const name = readHostname$3(cell("hostname"));
		const host = address ? _objectSpread2(_objectSpread2({}, address), name && address.ip ? { hostname: name } : {}) : name ? { hostname: name } : void 0;
		return {
			ttl,
			hosts: host ? [host] : [],
			lossPct: readNumber$2(cell("loss")),
			bestMs: readNumber$2(cell("best")),
			avgMs: readNumber$2(cell("avg")),
			worstMs: readNumber$2(cell("worst"))
		};
	}
	function summaryRow(block) {
		var _block$closest$previo, _block$closest;
		return (_block$closest$previo = (_block$closest = block.closest("tr")) === null || _block$closest === void 0 ? void 0 : _block$closest.previousElementSibling) !== null && _block$closest$previo !== void 0 ? _block$closest$previo : void 0;
	}
	var TITLE$1 = /Tracing route to\s+(\S+)/i;
	var TARGET_PARAMS$5 = [
		"url",
		"host",
		"target",
		"ip",
		"domain",
		"q"
	];
	function targetOf$2(value) {
		var _text$replace$split$;
		const text = value.trim();
		if (!text) return void 0;
		return ((_text$replace$split$ = text.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split(/[/?#]/)[0]) !== null && _text$replace$split$ !== void 0 ? _text$replace$split$ : "").replace(/:(\d+)$/, "") || void 0;
	}
	function targetFromQuery$2(search) {
		const query = new URLSearchParams(search);
		for (const name of TARGET_PARAMS$5) {
			const value = query.get(name);
			const target = value ? targetOf$2(value) : void 0;
			if (target) return target;
		}
	}
	function targetField$1(page) {
		return [...page.querySelectorAll("input")].filter((field) => field.type === "text" || field.type === "").find((field) => /域名|ip|host|目标|url/i.test(`${field.placeholder} ${field.name}`));
	}
	function targetValue(value) {
		var _ref3, _normalizeIp;
		const text = value.trim();
		if (!text) return void 0;
		return (_ref3 = (_normalizeIp = normalizeIp(text)) !== null && _normalizeIp !== void 0 ? _normalizeIp : targetOf$2(text)) !== null && _ref3 !== void 0 ? _ref3 : text;
	}
	function readTarget$9(page, block) {
		var _page$location$search, _page$location, _targetField;
		const scopes = [
			block.querySelector(".ce-idx-trace-detail-title, [class*=\"detail-title\"]"),
			block.closest("td"),
			block.parentElement,
			block
		];
		for (const scope of scopes) {
			var _TITLE$exec;
			const named = scope ? (_TITLE$exec = TITLE$1.exec(cellText(scope))) === null || _TITLE$exec === void 0 ? void 0 : _TITLE$exec[1] : void 0;
			const fromTitle = named ? targetValue(named) : void 0;
			if (fromTitle) return fromTitle;
		}
		const fromQuery = targetFromQuery$2((_page$location$search = (_page$location = page.location) === null || _page$location === void 0 ? void 0 : _page$location.search) !== null && _page$location$search !== void 0 ? _page$location$search : "");
		if (fromQuery) return fromQuery;
		const typed = (_targetField = targetField$1(page)) === null || _targetField === void 0 ? void 0 : _targetField.value;
		const fromField = typed ? targetValue(typed) : void 0;
		if (fromField) return fromField;
		throw new Error("The result names no target");
	}
	function readProbe$10(block) {
		const summary = summaryRow(block);
		const node = cellText(summary === null || summary === void 0 ? void 0 : summary.querySelector(".ce-idx-row-node-text, [class*=\"node-text\"], [class*=\"node-name\"]"));
		if (!node) return void 0;
		const line = cellText(summary === null || summary === void 0 ? void 0 : summary.querySelector(".ce-idx-cell-isp, [class*=\"cell-isp\"]"));
		return line && !node.includes(line) ? `${node} (${line})` : node;
	}
	function findTable(block) {
		return isResultTable$1(block) ? block : [...block.querySelectorAll("table")].find(isResultTable$1);
	}
	function hasHops$1(block) {
		const table = findTable(block);
		if (!table) return false;
		const columns = columnsOf$2(table);
		return hopRows$1(table).some((row) => readHop$8(row, columns) !== void 0);
	}
	function isRunning$5(block) {
		return RUNNING_TEXT$3.test(cellText(block));
	}
	function readResult$6(block) {
		const table = findTable(block);
		if (!table) throw new Error("The result has no hop table");
		const columns = columnsOf$2(table);
		const hops = hopRows$1(table).map((row) => readHop$8(row, columns)).filter((hop) => hop !== void 0);
		if (hops.length === 0) throw new Error("The result has no hops");
		return {
			target: readTarget$9(block.ownerDocument, block),
			probe: readProbe$10(block),
			hops
		};
	}
	var site$12 = {
		id: "17ce",
		name: "17CE 路由追踪",
		matches: ["*://www.17ce.com/*", "*://17ce.com/*"]
	};
	var _17ce_exports = __exportAll({
		site: () => site$12,
		start: () => start$12
	});
	var BUTTON_CLASS$3 = "ce-idx-btn-link";
	function placeButton$6(block, button) {
		const title = block.querySelector(".ce-idx-trace-detail-title, [class*=\"detail-title\"]");
		(title !== null && title !== void 0 ? title : block).append(button);
	}
	function start$12() {
		watchElements(RESULT_SELECTOR$3, (table) => {
			if (!isResultTable$1(table)) return;
			const block = resultBlock$5(table);
			if (!hasHops$1(block) || isRunning$5(block)) return;
			mountOpenButton(block, () => readResult$6(block), (button) => placeButton$6(block, button), {
				className: BUTTON_CLASS$3,
				css: button_default$12
			});
		});
	}
	var button_default$11 = "[data-xmtr-helper]{margin-right:8px}[data-xmtr-helper]>button>svg{width:12px;height:12px;margin-right:4px}[data-xmtr-helper]>button[data-state=failed]{color:#ef5735}";
	var RESULT_SELECTOR$2 = ".teamix-pro-card, .show-detection-data .next-card";
	var EXPAND_SELECTOR = "[class*=\"card-title-collapse\"], [class*=\"title-collapse\"]";
	var BLOCK_SELECTOR = ".show-detection-data";
	var TARGET_LABEL$2 = "检测目标";
	var TARGET_TEXT$1 = new RegExp(`${TARGET_LABEL$2}[：:]?\\s*(\\S+)`);
	var HEADER_NAMES$1 = [
		["ttl", [
			"hop",
			"hops",
			"ttl",
			"跳数",
			"跳转",
			"序号",
			"编号"
		]],
		["address", [
			"ip",
			"host",
			"hosts",
			"address",
			"addr",
			"地址",
			"主机",
			"解析ip",
			"ip地址",
			"目标地址"
		]],
		["loss", [
			"loss",
			"丢包",
			"丢包率",
			"丢包比"
		]],
		["sent", [
			"sent",
			"snt",
			"发送",
			"发送数",
			"发包",
			"包数",
			"数据包",
			"数据包量",
			"探测数"
		]],
		["last", [
			"last",
			"最近",
			"最新",
			"最近一次",
			"最近一次探测用时",
			"latest"
		]],
		["avg", [
			"avg",
			"average",
			"平均",
			"平均值",
			"平均时间",
			"平均延时",
			"平均耗时"
		]],
		["best", [
			"best",
			"min",
			"minimum",
			"最小",
			"最小时间",
			"最快",
			"最短"
		]],
		["worst", [
			"worst",
			"wrst",
			"max",
			"maximum",
			"最大",
			"最大时间",
			"最慢",
			"最长"
		]],
		["stdev", [
			"stdev",
			"stddev",
			"std",
			"标准差",
			"标准偏差",
			"抖动",
			"jitter"
		]]
	];
	var COLUMN_POSITIONS$1 = [
		["ttl", 0],
		["address", 1],
		["loss", 2],
		["sent", 3],
		["last", 4],
		["avg", 5],
		["best", 6],
		["worst", 7],
		["stdev", 8]
	];
	var IGNORED_HEADER$1 = /位置|归属|地区|地域|国家|城市|运营商|比|比例|ratio|region|location|country|city|isp|bar/;
	var TRACE_TOOL = /^(?:mtr|traceroute|路由追踪|路由跟踪)$/i;
	var MEASURING_TEXT = /正在拨测|拨测中|检测中|请稍候|Running/i;
	function normalizeHeader$1(text) {
		return text.toLowerCase().replace(/[\s:：()（）%]/g, "");
	}
	function namesColumn$1(header, name) {
		if (/^[a-z]+$/.test(name)) return new RegExp(`(^|[^a-z])${name}([^a-z]|$)`).test(header);
		return header.includes(name);
	}
	function readColumns$3(headers) {
		const columns = new Map();
		const taken = new Set();
		const take = (column, index) => {
			columns.set(column, index);
			taken.add(index);
		};
		headers.forEach(({ index, text: raw }) => {
			const text = normalizeHeader$1(raw);
			if (!text || IGNORED_HEADER$1.test(text)) return;
			for (const [column, names] of HEADER_NAMES$1) {
				if (columns.has(column) || !names.includes(text)) continue;
				take(column, index);
				return;
			}
		});
		headers.forEach(({ index, text: raw }) => {
			const text = normalizeHeader$1(raw);
			if (!text || taken.has(index) || IGNORED_HEADER$1.test(text)) return;
			for (const [column, names] of HEADER_NAMES$1) {
				if (columns.has(column) || !names.some((name) => namesColumn$1(text, name))) continue;
				take(column, index);
				return;
			}
		});
		return columns;
	}
	function headerCells(table) {
		const heads = [...table.querySelectorAll(".next-table-header th")];
		return (heads.length > 0 ? heads : [...table.querySelectorAll("thead th")]).map((cell, position) => {
			var _cell$querySelector;
			const marked = (_cell$querySelector = cell.querySelector("[data-next-table-col]")) === null || _cell$querySelector === void 0 ? void 0 : _cell$querySelector.getAttribute("data-next-table-col");
			const index = marked === null || marked === void 0 ? position : Number(marked);
			return {
				index: Number.isInteger(index) ? index : position,
				text: cellText(cell)
			};
		});
	}
	function columnsOf$1(table) {
		const headers = headerCells(table);
		const columns = headers.length > 0 ? readColumns$3(headers) : new Map();
		for (const [column, index] of COLUMN_POSITIONS$1) if (!columns.has(column)) columns.set(column, index);
		return columns;
	}
	function isTraceToolPage(page) {
		return [...page.querySelectorAll(".next-tabs-tab.active, [class*=\"tabs-tab\"][class*=\"active\"]")].some((tab) => TRACE_TOOL.test(cellText(tab)));
	}
	function isTraceTable$1(table) {
		const headers = headerCells(table);
		if (headers.length === 0) return true;
		const columns = readColumns$3(headers);
		if (!columns.has("ttl") || !columns.has("address")) return false;
		return columns.has("loss") || columns.has("avg") && columns.has("best") && columns.has("worst");
	}
	function isResultCard(card) {
		var _card$querySelector;
		const table = (_card$querySelector = card.querySelector(".next-table")) !== null && _card$querySelector !== void 0 ? _card$querySelector : card.querySelector("table");
		if (table) return isTraceTable$1(table);
		return isTraceToolPage(card.ownerDocument);
	}
	function isVisible$1(element) {
		var _element$getAttribute;
		if (element.hasAttribute("hidden")) return false;
		if (/display\s*:\s*none/i.test((_element$getAttribute = element.getAttribute("style")) !== null && _element$getAttribute !== void 0 ? _element$getAttribute : "")) return false;
		const view = element.ownerDocument.defaultView;
		return view === null || view.getComputedStyle(element).display !== "none";
	}
	function isMeasuring(page) {
		return [...page.querySelectorAll(".next-loading-tip-content-title, [class*=\"loading-tip\"], [class*=\"loading\"]")].some((element) => isVisible$1(element) && MEASURING_TEXT.test(cellText(element)));
	}
	function bodyRows$1(table) {
		var _table$querySelector, _ref, _body$querySelector;
		const body = (_table$querySelector = table.querySelector(".next-table-body")) !== null && _table$querySelector !== void 0 ? _table$querySelector : table;
		return [...((_ref = (_body$querySelector = body.querySelector(":scope > table")) !== null && _body$querySelector !== void 0 ? _body$querySelector : body.querySelector("table")) !== null && _ref !== void 0 ? _ref : table).querySelectorAll(":scope > tbody > tr, :scope > tr")];
	}
	function hasHops(card) {
		var _card$querySelector2;
		const table = (_card$querySelector2 = card.querySelector(".next-table")) !== null && _card$querySelector2 !== void 0 ? _card$querySelector2 : card.querySelector("table");
		return table !== null && bodyRows$1(table).length > 0;
	}
	var NO_VALUE$1 = /^(?:[-–—*?.]+|n\/a|na|timeout|unknown|未知|无|请求超时|超时|无响应|未响应)$/i;
	var HOSTNAME$2 = /^(?=.{1,253}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+\.?$/i;
	function valueText$1(cell) {
		if (!cell) return void 0;
		const text = cellText(cell);
		if (!text || NO_VALUE$1.test(text)) return void 0;
		return text;
	}
	function readNumber$1(cell) {
		const text = valueText$1(cell);
		return text === void 0 ? void 0 : parseNumber(text);
	}
	function beforeNote$1(text) {
		var _text$split$;
		return (_text$split$ = text.split(/[（(]/)[0]) !== null && _text$split$ !== void 0 ? _text$split$ : "";
	}
	function addressOf$1(text) {
		var _exec;
		for (const token of beforeNote$1(text).split(/[\s,;]+/)) {
			const address = normalizeIp(token.replace(/[[\]<>]/g, ""));
			if (address) return address;
		}
		const note = (_exec = /[（(]([^）)]*)[）)]/.exec(text)) === null || _exec === void 0 ? void 0 : _exec[1];
		return note ? normalizeIp(note.trim()) : void 0;
	}
	function hostnameOf$1(text, address) {
		var _exec2;
		const note = (_exec2 = /[（(]([^）)]*)[）)]/.exec(text)) === null || _exec2 === void 0 || (_exec2 = _exec2[1]) === null || _exec2 === void 0 ? void 0 : _exec2.trim();
		if (note && note !== address && normalizeIp(note) === void 0 && HOSTNAME$2.test(note)) return note.replace(/\.$/, "");
		for (const word of beforeNote$1(text).split(/[\s,;]+/)) {
			const name = word.replace(/[[\]<>]/g, "");
			if (!name || name === address || normalizeIp(name) !== void 0) continue;
			if (HOSTNAME$2.test(name)) return name.replace(/\.$/, "");
		}
	}
	function readHost$3(cell) {
		const text = valueText$1(cell);
		if (!text) return void 0;
		const address = addressOf$1(text);
		const hostname = hostnameOf$1(text, address);
		if (address) return _objectSpread2({ ip: address }, hostname ? { hostname } : {});
		return hostname ? { hostname } : void 0;
	}
	function readHop$7(row, columns) {
		const cells = [...row.children].filter((cell) => cell.tagName === "TD");
		const cell = (column) => {
			var _cells$find;
			const index = columns.get(column);
			if (index === void 0) return void 0;
			return (_cells$find = cells.find((item) => item.getAttribute("data-next-table-col") === String(index))) !== null && _cells$find !== void 0 ? _cells$find : cells[index];
		};
		const ttl = readNumber$1(cell("ttl"));
		if (ttl === void 0 || !Number.isInteger(ttl) || ttl < 1) return void 0;
		const host = readHost$3(cell("address"));
		return {
			ttl,
			hosts: host ? [host] : [],
			lossPct: readNumber$1(cell("loss")),
			sent: readNumber$1(cell("sent")),
			lastMs: readNumber$1(cell("last")),
			avgMs: readNumber$1(cell("avg")),
			bestMs: readNumber$1(cell("best")),
			worstMs: readNumber$1(cell("worst")),
			stdevMs: readNumber$1(cell("stdev"))
		};
	}
	var TARGET_PARAMS$4 = [
		"target",
		"host",
		"url",
		"ip",
		"domain",
		"q"
	];
	function targetOf$1(value) {
		var _text$replace$split$;
		const text = value.trim();
		if (!text) return void 0;
		return ((_text$replace$split$ = text.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split(/[/?#]/)[0]) !== null && _text$replace$split$ !== void 0 ? _text$replace$split$ : "").replace(/:(\d+)$/, "") || void 0;
	}
	function targetFromQuery$1(search) {
		const query = new URLSearchParams(search);
		for (const name of TARGET_PARAMS$4) {
			const value = query.get(name);
			const target = value ? targetOf$1(value) : void 0;
			if (target) return target;
		}
	}
	function targetField(page) {
		return [...page.querySelectorAll("input")].filter((field) => field.type === "text" || field.type === "").find((field) => /域名|ip|host|目标|url/i.test(`${field.placeholder} ${field.name}`));
	}
	function readTarget$8(page, card) {
		var _card$closest, _TARGET_TEXT$exec, _normalizeIp, _page$location$search, _page$location, _targetField, _normalizeIp2;
		const cell = [...((_card$closest = card.closest(BLOCK_SELECTOR)) !== null && _card$closest !== void 0 ? _card$closest : page).querySelectorAll(".round-info .detection-res > div, [class*=\"detection-res\"] > div")].find((element) => cellText(element).startsWith(TARGET_LABEL$2));
		const labelled = cellText(cell);
		const shown = cellText(cell === null || cell === void 0 ? void 0 : cell.querySelector("span[title], [title]")) || ((_TARGET_TEXT$exec = TARGET_TEXT$1.exec(labelled)) === null || _TARGET_TEXT$exec === void 0 ? void 0 : _TARGET_TEXT$exec[1]) || "";
		const target = shown ? (_normalizeIp = normalizeIp(shown)) !== null && _normalizeIp !== void 0 ? _normalizeIp : targetOf$1(shown) : void 0;
		if (target) return target;
		const fromQuery = targetFromQuery$1((_page$location$search = (_page$location = page.location) === null || _page$location === void 0 ? void 0 : _page$location.search) !== null && _page$location$search !== void 0 ? _page$location$search : "");
		if (fromQuery) return fromQuery;
		const typed = (_targetField = targetField(page)) === null || _targetField === void 0 ? void 0 : _targetField.value;
		const fromField = typed ? (_normalizeIp2 = normalizeIp(typed)) !== null && _normalizeIp2 !== void 0 ? _normalizeIp2 : targetOf$1(typed) : void 0;
		if (fromField) return fromField;
		throw new Error("The result shows no target address");
	}
	function readProbe$9(card) {
		var _cellText$split$;
		return ((_cellText$split$ = cellText(card.querySelector(".teamix-pro-card-title-name, [class*=\"title-name\"]")).split("IP:")[0]) === null || _cellText$split$ === void 0 ? void 0 : _cellText$split$.trim()) || void 0;
	}
	function readResult$5(card) {
		var _card$querySelector3;
		const table = (_card$querySelector3 = card.querySelector(".next-table")) !== null && _card$querySelector3 !== void 0 ? _card$querySelector3 : card.querySelector("table");
		if (!table) throw new Error("The result has no hops yet");
		const columns = columnsOf$1(table);
		const hops = bodyRows$1(table).map((row) => readHop$7(row, columns)).filter((hop) => hop !== void 0);
		if (hops.length === 0) throw new Error("The result has no hops");
		return {
			target: readTarget$8(card.ownerDocument, card),
			probe: readProbe$9(card),
			hops
		};
	}
	var site$11 = {
		id: "aliyun-boce",
		name: "阿里云拨测 MTR",
		matches: ["*://boce.aliyun.com/*"]
	};
	var aliyun_boce_exports = __exportAll({
		site: () => site$11,
		start: () => start$11
	});
	var BUTTON_CLASS$2 = "next-btn next-medium next-btn-primary next-btn-text";
	var HOP_TIMEOUT_MS = 2e3;
	function waitForHops(card) {
		if (hasHops(card)) return Promise.resolve();
		return new Promise((resolve, reject) => {
			const observer = new MutationObserver(() => {
				if (!hasHops(card)) return;
				observer.disconnect();
				clearTimeout(timer);
				resolve();
			});
			const timer = setTimeout(() => {
				observer.disconnect();
				reject(new Error("The result shows no hops"));
			}, HOP_TIMEOUT_MS);
			observer.observe(card, {
				childList: true,
				subtree: true
			});
		});
	}
	function readCard$1(_x) {
		return _readCard$1.apply(this, arguments);
	}
	function _readCard$1() {
		_readCard$1 = _asyncToGenerator(function* (card) {
			if (!hasHops(card)) {
				const toggle = card.querySelector(EXPAND_SELECTOR);
				if (!(toggle instanceof HTMLElement)) throw new Error("The result cannot be expanded");
				toggle.click();
				yield waitForHops(card);
			}
			return readResult$5(card);
		});
		return _readCard$1.apply(this, arguments);
	}
	function placeButton$5(card, button) {
		const actions = card.querySelector(".next-card-header-extra, [class*=\"card-header-extra\"]");
		if (!actions) {
			card.prepend(button);
			return;
		}
		actions.insertBefore(button, actions.firstChild);
	}
	function start$11() {
		watchElements(RESULT_SELECTOR$2, (card) => {
			if (isMeasuring(document)) return;
			if (!isResultCard(card)) return;
			mountOpenButton(card, () => readCard$1(card), (button) => placeButton$5(card, button), {
				className: BUTTON_CLASS$2,
				css: button_default$11
			});
		});
	}
	var button_default$10 = "[data-xmtr-helper]>button{color:inherit;background:#f9fafb;border:1px solid #d1d5db;margin-top:8px;padding:6px 12px;transition:background-color .15s ease-out,border-color .15s ease-out}[data-xmtr-helper]>button:hover{background:#f3f4f6;border-color:#9ca3af}div.bg-orange-400 [data-xmtr-helper]>button,div.bg-blue-500 [data-xmtr-helper]>button,div.bg-black [data-xmtr-helper]>button{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.55)}div.bg-orange-400 [data-xmtr-helper]>button:hover,div.bg-blue-500 [data-xmtr-helper]>button:hover,div.bg-black [data-xmtr-helper]>button:hover{background:rgba(255,255,255,.24);border-color:rgba(255,255,255,.85)}[data-xmtr-helper]>button:focus-visible{outline-offset:2px;outline:2px solid #fb923c}html.dark [data-xmtr-helper]>button:focus-visible{outline-color:#60a5fa}[data-xmtr-helper]>button:disabled{opacity:.6;cursor:progress}[data-xmtr-helper]>button[data-state=failed],div.bg-orange-400 [data-xmtr-helper]>button[data-state=failed],div.bg-blue-500 [data-xmtr-helper]>button[data-state=failed],div.bg-black [data-xmtr-helper]>button[data-state=failed]{color:#ef4444;background:#fef2f2;border-color:#ef4444}[data-xmtr-helper]>button>svg{width:16px;height:16px;margin-right:8px}@media (prefers-reduced-motion:reduce){[data-xmtr-helper]>button{transition:none}}";
	var HEADER = /^traceroute6?\s+to\s+(\S+)(?:\s+\(([^)]+)\))?(?:,|\s+from\s)/i;
	var WINDOWS_HEADER = /^tracing route to\s+(\S+?)(?:\s+\[([^\]]+)\])?(?:\s|$)/i;
	var HOP = /^(\d+)\s+(.+)$/;
	var AS_TAG$2 = /^\[AS(\d+)\]$/;
	var ANNOTATION$1 = /^![A-Za-z]+$/;
	var MPLS$1 = /\[MPLS:[^\]]*\]/g;
	var PROBE$1 = /(?:\d\s*ms)|(?:(?:^|\s)\*(?:\s|$))/i;
	var TIME_MS = /^(<)?(\d+(?:\.\d+)?)ms(![A-Za-z]+)?$/i;
	var BARE_TIME = /^(<)?(\d+(?:\.\d+)?)$/;
	var ADDRESS = /^(?:\((.+)\)|\[(.+)\])$/;
	var STAR = /^\*$/;
	function isAddressToken(token) {
		return /[.:]/.test(token) && normalizeIp(token) !== void 0;
	}
	function cleanLine(line) {
		return line.replace(MPLS$1, " ").replace(/^\s*(?:>|\$|#)\s?/, "").trim();
	}
	function round$2(value, digits) {
		const factor = 10 ** digits;
		return Math.round(value * factor) / factor;
	}
	function readTarget$7([, name, address]) {
		var _normalizeIp;
		const value = address !== null && address !== void 0 ? address : name;
		if (!value) throw new Error("The traceroute header names no target");
		return (_normalizeIp = normalizeIp(value)) !== null && _normalizeIp !== void 0 ? _normalizeIp : value;
	}
	function readTime(token) {
		const match = BARE_TIME.exec(token);
		return (match === null || match === void 0 ? void 0 : match[2]) === void 0 ? void 0 : Number(match[2]);
	}
	function hasHopPayload(rest) {
		if (/(?:^|\s)\*(?:\s|$)/.test(rest)) return true;
		return rest.split(/\s+/).some((token) => isAddressToken(token) || ADDRESS.test(token));
	}
	function readProbes(tokens, draft, line, strict) {
		let index = 0;
		while (index < tokens.length) {
			var _tokens$index, _tokens, _bracket$;
			const token = (_tokens$index = tokens[index]) !== null && _tokens$index !== void 0 ? _tokens$index : "";
			if (token === "") {
				index += 1;
				continue;
			}
			if (STAR.test(token)) {
				draft.probes += 1;
				index += 1;
				continue;
			}
			const tag = AS_TAG$2.exec(token);
			if ((tag === null || tag === void 0 ? void 0 : tag[1]) !== void 0) {
				const host = draft.hosts[draft.hosts.length - 1];
				if (!host) throw new Error("An AS tag precedes every address: " + line);
				host.asn = Number(tag[1]);
				index += 1;
				continue;
			}
			if (ANNOTATION$1.test(token)) {
				index += 1;
				continue;
			}
			const inline = TIME_MS.exec(token);
			if ((inline === null || inline === void 0 ? void 0 : inline[2]) !== void 0) {
				draft.probes += 1;
				draft.answered += 1;
				draft.times.push(Number(inline[2]));
				index += 1;
				continue;
			}
			const following = (_tokens = tokens[index + 1]) !== null && _tokens !== void 0 ? _tokens : "";
			if (following.toLowerCase() === "ms") {
				const ms = readTime(token);
				if (ms === void 0) throw new Error("Unrecognised probe time in: " + line);
				draft.probes += 1;
				draft.answered += 1;
				draft.times.push(ms);
				index += 2;
				continue;
			}
			const bracket = ADDRESS.exec(following);
			const address = (_bracket$ = bracket === null || bracket === void 0 ? void 0 : bracket[1]) !== null && _bracket$ !== void 0 ? _bracket$ : bracket === null || bracket === void 0 ? void 0 : bracket[2];
			if (address !== void 0) {
				const ip = normalizeIp(address);
				if (!ip || !/[.:]/.test(address)) throw new Error("Unrecognised address " + address + " in: " + line);
				if (!draft.hosts.some((host) => host.ip === ip)) draft.hosts.push(normalizeIp(token) === void 0 ? {
					ip,
					hostname: token
				} : { ip });
				index += 2;
				continue;
			}
			const ip = isAddressToken(token) ? normalizeIp(token) : void 0;
			if (!ip) {
				if (!strict || draft.probes > 0) return;
				throw new Error("Unrecognised probe in: " + line);
			}
			if (!draft.hosts.some((host) => host.ip === ip)) draft.hosts.push({ ip });
			index += 1;
		}
	}
	function startHop(drafts, ttl) {
		var _previous$ttl, _previous$ttl2;
		const previous = drafts[drafts.length - 1];
		if (ttl !== ((_previous$ttl = previous === null || previous === void 0 ? void 0 : previous.ttl) !== null && _previous$ttl !== void 0 ? _previous$ttl : 0) + 1) throw new Error(`Hop ${ttl} follows hop ${(_previous$ttl2 = previous === null || previous === void 0 ? void 0 : previous.ttl) !== null && _previous$ttl2 !== void 0 ? _previous$ttl2 : 0}, so a hop is missing`);
		const draft = {
			ttl,
			hosts: [],
			probes: 0,
			answered: 0,
			times: []
		};
		drafts.push(draft);
		return draft;
	}
	function toHop(draft) {
		const { ttl, hosts, probes, answered, times } = draft;
		if (probes === 0) throw new Error(`Hop ${ttl} carries no probe`);
		const hop = {
			ttl,
			hosts,
			sent: probes,
			lossPct: round$2((probes - answered) / probes * 100, 1)
		};
		const last = times[times.length - 1];
		if (last !== void 0) {
			hop.lastMs = last;
			hop.bestMs = Math.min(...times);
			hop.worstMs = Math.max(...times);
			hop.avgMs = round$2(times.reduce((sum, value) => sum + value, 0) / times.length, 3);
		}
		return hop;
	}
	function hasNumberedHops(lines) {
		let expected = 1;
		let found = 0;
		let address = false;
		for (const line of lines) {
			const hop = HOP.exec(line);
			const rest = hop === null || hop === void 0 ? void 0 : hop[2];
			if ((hop === null || hop === void 0 ? void 0 : hop[1]) === void 0 || rest === void 0) continue;
			if (Number(hop[1]) !== expected || !PROBE$1.test(rest) || !hasHopPayload(rest)) continue;
			if (found === 0) address = rest.split(/\s+/).some((token) => isAddressToken(token) || ADDRESS.test(token));
			expected += 1;
			found += 1;
		}
		return found >= 2 || found === 1 && address;
	}
	function isTracerouteText(text) {
		const lines = text.split("\n").map((line) => cleanLine(line)).filter((line) => line !== "");
		if (lines.some((line) => HEADER.test(line) || WINDOWS_HEADER.test(line))) return true;
		return hasNumberedHops(lines);
	}
	function parseTracerouteText(text, fallbackTarget) {
		let target;
		let draft;
		const drafts = [];
		for (const raw of text.split("\n")) {
			var _HEADER$exec;
			const line = cleanLine(raw);
			if (line === "") continue;
			const header = (_HEADER$exec = HEADER.exec(line)) !== null && _HEADER$exec !== void 0 ? _HEADER$exec : WINDOWS_HEADER.exec(line);
			if (header) {
				target = readTarget$7(header);
				continue;
			}
			const hop = HOP.exec(line);
			const rest = hop === null || hop === void 0 ? void 0 : hop[2];
			if ((hop === null || hop === void 0 ? void 0 : hop[1]) !== void 0 && rest !== void 0 && PROBE$1.test(rest) && hasHopPayload(rest)) {
				draft = startHop(drafts, Number(hop[1]));
				readProbes(rest.split(/\s+/), draft, line, true);
				continue;
			}
			if (!draft || !PROBE$1.test(line)) continue;
			readProbes(line.split(/\s+/), draft, line, false);
		}
		if (target === void 0 && fallbackTarget !== void 0 && fallbackTarget.trim() !== "") {
			var _normalizeIp2;
			target = (_normalizeIp2 = normalizeIp(fallbackTarget)) !== null && _normalizeIp2 !== void 0 ? _normalizeIp2 : fallbackTarget.trim();
		}
		if (target === void 0) throw new Error("The text holds no traceroute header");
		if (drafts.length === 0) throw new Error("The text holds no hop");
		return {
			target,
			hops: drafts.map((hop) => toHop(hop))
		};
	}
	var OUTPUT$1 = "pre";
	var LOCATION = "select[name=location], select[name=node], select[name=router], select[name=pop]";
	var DESTINATION = "input[name=destination], input[name=target], input[name=host], input[name=query], input[name=ip], input[name=d]";
	var TARGET_PARAMS$3 = [
		"destination",
		"target",
		"host",
		"ip",
		"d"
	];
	function outputOf(block) {
		return block.matches(OUTPUT$1) ? block : block.querySelector(OUTPUT$1);
	}
	function readOutput(block) {
		var _pre$textContent;
		const pre = outputOf(block);
		if (!pre) throw new Error("The result block holds no output");
		return (_pre$textContent = pre.textContent) !== null && _pre$textContent !== void 0 ? _pre$textContent : "";
	}
	function isTracerouteOutput(block) {
		var _pre$textContent2;
		const pre = outputOf(block);
		return pre !== null && isTracerouteText((_pre$textContent2 = pre.textContent) !== null && _pre$textContent2 !== void 0 ? _pre$textContent2 : "");
	}
	function readProbe$8(root) {
		const select = root.querySelector(LOCATION);
		const label = cellText(select instanceof HTMLSelectElement ? select.selectedOptions[0] : void 0);
		if (label === "") return void 0;
		const [country, city, facility] = label.split(/[·|]/).map((part) => part.trim()).filter((part) => part !== "");
		if (!country || !city) return label;
		return facility ? `${city}, ${country} · ${facility}` : `${city}, ${country}`;
	}
	function readTarget$6(page = document) {
		for (const input of page.querySelectorAll(DESTINATION)) {
			if (!(input instanceof HTMLInputElement)) continue;
			const value = (input.value || input.getAttribute("value") || "").trim();
			if (value !== "") return value;
		}
		const params = new URL(document.location.href).searchParams;
		for (const key of TARGET_PARAMS$3) {
			var _params$get;
			const value = (_params$get = params.get(key)) === null || _params$get === void 0 ? void 0 : _params$get.trim();
			if (value) return value;
		}
	}
	function readTrace$4(block, probe) {
		const trace = parseTracerouteText(readOutput(block), readTarget$6());
		return probe === void 0 ? trace : _objectSpread2(_objectSpread2({}, trace), {}, { probe });
	}
	var site$10 = {
		id: "aorta",
		name: "Liberty Global / Aorta Looking Glass",
		matches: ["*://lg.aorta.net/*"]
	};
	var aorta_exports = __exportAll({
		site: () => site$10,
		start: () => start$10
	});
	var OUTPUT = "#output";
	var BUTTON_CLASS$1 = "inline-flex items-center rounded-md text-sm font-medium shadow-sm";
	var RUNNING_MARK$1 = "[x-show*=\"inprogress\"], [class*=spinner], [class*=loading], [aria-busy=true], progress";
	var RUNNING_NOTICE = "[role=status], [aria-live], .notice, .alert, .status, [x-show], .spinner, .loading";
	var RUNNING_TEXT$2 = /(?:\brunning\b|\btracing\b|\bin progress\b|检测中|运行中)/i;
	var RUNNING_SHOW = /(?:^|[^!])\binprogress\b/;
	var NOTICE_LENGTH = 160;
	function visible(element) {
		return element instanceof HTMLElement && getComputedStyle(element).display !== "none";
	}
	function shownWhileRunning(element) {
		if (!visible(element)) return false;
		const expression = element.getAttribute("x-show");
		if (expression === null || !/\binprogress\b/.test(expression)) return true;
		return RUNNING_SHOW.test(expression);
	}
	function isRunning$4() {
		for (const mark of document.querySelectorAll(RUNNING_MARK$1)) if (shownWhileRunning(mark)) return true;
		for (const notice of document.querySelectorAll(RUNNING_NOTICE)) {
			if (!shownWhileRunning(notice)) continue;
			const text = (notice instanceof HTMLElement ? notice.innerText : "").replace(/\s+/g, " ").trim();
			if (text !== "" && text.length <= NOTICE_LENGTH && RUNNING_TEXT$2.test(text)) return true;
		}
		return false;
	}
	function isNewest(block) {
		const newest = document.querySelector(`${OUTPUT} pre`);
		return newest !== null && block.contains(newest);
	}
	function probeOf(block) {
		return isNewest(block) ? readProbe$8(document) : void 0;
	}
	function refresh(block) {
		const button = block.querySelector(`[${BUTTON_HOST_ATTRIBUTE}]`);
		if (!(button instanceof HTMLElement)) return;
		button.hidden = !isTracerouteOutput(block) || isRunning$4() && isNewest(block);
	}
	function start$10() {
		watchElements(OUTPUT, (block) => {
			if (!isTracerouteOutput(block)) return;
			mountOpenButton(block, () => readTrace$4(block, probeOf(block)), (button) => block.append(button), {
				className: BUTTON_CLASS$1,
				css: button_default$10
			});
			refresh(block);
		});
		window.addEventListener("inprogress", () => {
			setTimeout(() => {
				for (const block of document.querySelectorAll(OUTPUT)) refresh(block);
			}, 0);
		});
	}
	var button_default$9 = "[data-xmtr-helper]{margin-left:8px}[data-xmtr-helper]>button{font-family:inherit}[data-xmtr-helper]>button[data-state=failed]{color:#ef5656;border-color:#ef5656}";
	var RESULT_SELECTOR$1 = "table";
	var HEADER_NAMES = [
		["ttl", [
			"hop",
			"hops",
			"ttl",
			"跳数",
			"跳转",
			"序号",
			"编号"
		]],
		["address", [
			"ip",
			"host",
			"hosts",
			"address",
			"addr",
			"地址",
			"主机",
			"主机地址",
			"解析ip",
			"ip地址",
			"目标地址"
		]],
		["hostname", [
			"ptr",
			"dns",
			"dns名称",
			"域名",
			"主机名",
			"rdns",
			"反向解析",
			"ptr记录"
		]],
		["asn", [
			"as",
			"asn",
			"as号",
			"asn号",
			"自治系统"
		]],
		["loss", [
			"loss",
			"丢包",
			"丢包率",
			"丢包比"
		]],
		["sent", [
			"sent",
			"snt",
			"发送",
			"发送数",
			"发包",
			"包数",
			"数据包",
			"数据包量",
			"探测数"
		]],
		["last", [
			"last",
			"最近",
			"最新",
			"最近一次",
			"最近一次探测用时",
			"latest"
		]],
		["avg", [
			"avg",
			"average",
			"平均",
			"平均值",
			"平均时间",
			"平均延时",
			"平均耗时"
		]],
		["best", [
			"best",
			"min",
			"minimum",
			"最小",
			"最小时间",
			"最快",
			"最短",
			"最快时间"
		]],
		["worst", [
			"worst",
			"wrst",
			"max",
			"maximum",
			"最大",
			"最大时间",
			"最慢",
			"最长",
			"最慢时间"
		]],
		["stdev", [
			"stdev",
			"stddev",
			"std",
			"标准差",
			"标准偏差",
			"抖动",
			"jitter"
		]]
	];
	var COLUMN_POSITIONS = [
		["ttl", 0],
		["address", 1],
		["hostname", 2],
		["asn", 3],
		["loss", 4],
		["sent", 5],
		["last", 6],
		["best", 7],
		["worst", 8],
		["avg", 9]
	];
	var IGNORED_HEADER = /位置|归属|地区|地域|国家|城市|运营商|比|比例|ratio|region|location|country|city|isp|bar/;
	function normalizeHeader(text) {
		return text.toLowerCase().replace(/[\s:：()（）%]/g, "");
	}
	function namesColumn(header, name) {
		if (/^[a-z]+$/.test(name)) return new RegExp(`(^|[^a-z])${name}([^a-z]|$)`).test(header);
		return header.includes(name);
	}
	function readColumns$2(headers) {
		const columns = new Map();
		const taken = new Set();
		const take = (column, index) => {
			columns.set(column, index);
			taken.add(index);
		};
		headers.forEach((header, index) => {
			const text = normalizeHeader(header);
			if (!text || IGNORED_HEADER.test(text)) return;
			for (const [column, names] of HEADER_NAMES) {
				if (columns.has(column) || !names.includes(text)) continue;
				take(column, index);
				return;
			}
		});
		headers.forEach((header, index) => {
			const text = normalizeHeader(header);
			if (!text || taken.has(index) || IGNORED_HEADER.test(text)) return;
			for (const [column, names] of HEADER_NAMES) {
				if (columns.has(column) || !names.some((name) => namesColumn(text, name))) continue;
				take(column, index);
				return;
			}
		});
		return columns;
	}
	function headerTexts(table) {
		const cells = [...table.querySelectorAll(":scope > thead > tr > th")];
		if (cells.length > 0) return cells.map((cell) => cellText(cell));
		const first = table.querySelector(":scope > tbody > tr:first-child, :scope > tr:first-child");
		return (first ? [...first.children].filter((cell) => cell.tagName === "TH") : []).map((cell) => cellText(cell));
	}
	function hopRows(table) {
		return [...table.querySelectorAll(":scope > thead > tr, :scope > tbody > tr, :scope > tfoot > tr, :scope > tr")];
	}
	function columnsOf(table) {
		const headers = headerTexts(table);
		const columns = headers.length > 0 ? readColumns$2(headers) : new Map();
		for (const [column, index] of COLUMN_POSITIONS) if (!columns.has(column)) columns.set(column, index);
		return columns;
	}
	function isResultTable(table) {
		if (!table.matches("table")) return false;
		const headers = headerTexts(table);
		if (headers.length > 0) {
			const columns = readColumns$2(headers);
			if (!columns.has("ttl") || !columns.has("address")) return false;
			return columns.has("loss") || columns.has("avg") && columns.has("best") && columns.has("worst");
		}
		return (table.querySelector(":scope > .node-data-tbody") !== null || table.matches(".table_cont")) && !/\btable_cont_(?!route|trace)/.test(table.className);
	}
	function resultBlock$4(table) {
		var _ref, _table$closest;
		return (_ref = (_table$closest = table.closest(".box-g")) !== null && _table$closest !== void 0 ? _table$closest : table.closest(".data_cont")) !== null && _ref !== void 0 ? _ref : table;
	}
	var RUNNING_TEXT$1 = /(?:正在|仍在)?(?:检测|追踪|探测|拨测)中|Running|Tracing|请稍候/i;
	var PENDING_HOP = ".loadingRow, [class*=\"loading\"], [class*=\"skeleton\"]";
	var NO_VALUE = /^(?:[-–—*?.]+|n\/a|na|timeout|unknown|未知|无|请求超时|超时|无响应|未响应)$/i;
	var HOSTNAME$1 = /^(?=.{1,253}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+\.?$/i;
	function valueText(cell) {
		if (!cell) return void 0;
		const text = cellText(cell);
		if (!text || NO_VALUE.test(text)) return void 0;
		return text;
	}
	function readNumber(cell) {
		const text = valueText(cell);
		return text === void 0 ? void 0 : parseNumber(text);
	}
	function beforeNote(text) {
		var _text$split$;
		return (_text$split$ = text.split(/[（(]/)[0]) !== null && _text$split$ !== void 0 ? _text$split$ : "";
	}
	function addressOf(text) {
		var _exec;
		for (const token of beforeNote(text).split(/[\s,;]+/)) {
			const address = normalizeIp(token.replace(/[[\]<>]/g, ""));
			if (address) return address;
		}
		const note = (_exec = /[（(]([^）)]*)[）)]/.exec(text)) === null || _exec === void 0 ? void 0 : _exec[1];
		return note ? normalizeIp(note.trim()) : void 0;
	}
	function hostnameOf(text, address) {
		var _exec2;
		const note = (_exec2 = /[（(]([^）)]*)[）)]/.exec(text)) === null || _exec2 === void 0 || (_exec2 = _exec2[1]) === null || _exec2 === void 0 ? void 0 : _exec2.trim();
		if (note && note !== address && normalizeIp(note) === void 0 && HOSTNAME$1.test(note)) return note.replace(/\.$/, "");
		for (const word of beforeNote(text).split(/[\s,;]+/)) {
			const name = word.replace(/[[\]<>]/g, "");
			if (!name || name === address || normalizeIp(name) !== void 0) continue;
			if (HOSTNAME$1.test(name)) return name.replace(/\.$/, "");
		}
	}
	function readHost$2(cell) {
		const text = valueText(cell);
		if (!text) return void 0;
		const address = addressOf(text);
		const hostname = hostnameOf(text, address);
		if (address) return _objectSpread2({ ip: address }, hostname ? { hostname } : {});
		return hostname ? { hostname } : void 0;
	}
	function readHostname$2(cell) {
		const text = valueText(cell);
		if (!text || /\s/.test(text) || normalizeIp(text) !== void 0) return void 0;
		return text.replace(/\.$/, "");
	}
	function readHop$6(row, columns) {
		const cells = [...row.children].filter((cell) => cell.tagName === "TD");
		const cell = (column) => {
			const index = columns.get(column);
			return index === void 0 ? void 0 : cells[index];
		};
		const ttl = readNumber(cell("ttl"));
		if (ttl === void 0 || !Number.isInteger(ttl) || ttl < 1) return void 0;
		const address = readHost$2(cell("address"));
		const name = readHostname$2(cell("hostname"));
		const asn = parseAsn(valueText(cell("asn")));
		const base = address !== null && address !== void 0 ? address : name ? { hostname: name } : void 0;
		const host = base ? _objectSpread2(_objectSpread2(_objectSpread2({}, base), name && base.ip ? { hostname: name } : {}), asn ? { asn } : {}) : void 0;
		return {
			ttl,
			hosts: host ? [host] : [],
			lossPct: readNumber(cell("loss")),
			sent: readNumber(cell("sent")),
			lastMs: readNumber(cell("last")),
			avgMs: readNumber(cell("avg")),
			bestMs: readNumber(cell("best")),
			worstMs: readNumber(cell("worst")),
			stdevMs: readNumber(cell("stdev"))
		};
	}
	var TARGET_TEXT = /(?:检测目标|目标地址|路由查询结果|目标)[：:\s]+([^\s，,。;；]+)/;
	var TARGET_PARAMS$2 = [
		"host",
		"target",
		"url",
		"ip",
		"domain",
		"q"
	];
	function targetOf(value) {
		var _text$replace$split$;
		const text = value.trim();
		if (!text) return void 0;
		return ((_text$replace$split$ = text.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split(/[/?#]/)[0]) !== null && _text$replace$split$ !== void 0 ? _text$replace$split$ : "").replace(/:(\d+)$/, "") || void 0;
	}
	function targetFromQuery(search) {
		const query = new URLSearchParams(search);
		for (const name of TARGET_PARAMS$2) {
			const value = query.get(name);
			const target = value ? targetOf(value) : void 0;
			if (target) return target;
		}
	}
	function readTarget$5(page, block) {
		var _normalizeIp, _page$location$search, _page$location;
		const checked = page.querySelector(".check-host");
		const shown = checked ? (_normalizeIp = normalizeIp(cellText(checked))) !== null && _normalizeIp !== void 0 ? _normalizeIp : targetOf(cellText(checked)) : void 0;
		if (shown) return shown;
		for (const source of [page.querySelector(".one_info_text"), block]) {
			var _TARGET_TEXT$exec, _normalizeIp2;
			const match = (_TARGET_TEXT$exec = TARGET_TEXT.exec(cellText(source))) === null || _TARGET_TEXT$exec === void 0 ? void 0 : _TARGET_TEXT$exec[1];
			const target = match ? (_normalizeIp2 = normalizeIp(match)) !== null && _normalizeIp2 !== void 0 ? _normalizeIp2 : targetOf(match) : void 0;
			if (target) return target;
		}
		const fromQuery = targetFromQuery((_page$location$search = (_page$location = page.location) === null || _page$location === void 0 ? void 0 : _page$location.search) !== null && _page$location$search !== void 0 ? _page$location$search : "");
		if (fromQuery) return fromQuery;
		const field = page.querySelector("input[name=\"host\"], input[name=\"url\"], #host");
		const typed = field ? targetOf(field.value) : void 0;
		if (typed) return typed;
		throw new Error("The result shows no target address");
	}
	function readProbe$7(page, block) {
		var _exec3;
		const named = (_exec3 = /检测节点[：:]\s*([^\s，,。；;]+)/.exec(cellText(block))) === null || _exec3 === void 0 ? void 0 : _exec3[1];
		if (named) return named;
		return cellText(page.querySelector(".banner-node-list .on, .banner-node-list .active, .banner-node-list [aria-selected=\"true\"]")) || void 0;
	}
	function runProgress(page) {
		const text = cellText(page.querySelector(".tool-progress-bar-inner, [class*=\"progress\"] [class*=\"inner\"]"));
		return /^\d{1,3}%$/.test(text) ? text : "";
	}
	function isVisible(element) {
		var _element$getAttribute;
		if (!element || element.hasAttribute("hidden")) return false;
		if (/display\s*:\s*none/i.test((_element$getAttribute = element.getAttribute("style")) !== null && _element$getAttribute !== void 0 ? _element$getAttribute : "")) return false;
		const view = element.ownerDocument.defaultView;
		return view === null || view.getComputedStyle(element).display !== "none";
	}
	function isRunning$3(result) {
		const page = result.ownerDocument;
		const progress = parseNumber(runProgress(page));
		if (progress !== void 0 && progress < 100) return true;
		if (result.querySelector(PENDING_HOP)) return true;
		if (isVisible(page.querySelector("[class*=\"spinner\"]"))) return true;
		return RUNNING_TEXT$1.test(cellText(result)) || RUNNING_TEXT$1.test(cellText(page.querySelector(".one_info_text, [class*=\"progress\"]")));
	}
	function readResult$4(result) {
		const table = isResultTable(result) ? result : [...result.querySelectorAll("table")].find(isResultTable);
		if (!table) throw new Error("The result has no hop table");
		const columns = columnsOf(table);
		const hops = hopRows(table).map((row) => readHop$6(row, columns)).filter((hop) => hop !== void 0);
		if (hops.length === 0) throw new Error("The result has no hops");
		return {
			target: readTarget$5(result.ownerDocument, result),
			probe: readProbe$7(result.ownerDocument, result),
			hops
		};
	}
	var site$9 = {
		id: "boce",
		name: "拨测 Boce",
		matches: ["*://www.boce.com/*", "*://boce.com/*"]
	};
	var boce_exports = __exportAll({
		site: () => site$9,
		start: () => start$9
	});
	var BUTTON_CLASS = "btn btn-mini";
	var ACTIONS = ".one_info_text";
	function placeButton$4(result, button) {
		const page = result.ownerDocument;
		for (const host of page.querySelectorAll(`${ACTIONS} > [${BUTTON_HOST_ATTRIBUTE}]`)) if (host !== button) host.remove();
		const actions = page.querySelector(ACTIONS);
		const refresh = actions === null || actions === void 0 ? void 0 : actions.querySelector(".action_refresh");
		if (refresh) refresh.after(button);
		else if (actions) actions.append(button);
		else result.before(button);
	}
	function removeButtons(page) {
		for (const host of page.querySelectorAll(`[${BUTTON_HOST_ATTRIBUTE}]`)) host.remove();
	}
	function start$9() {
		watchElements(RESULT_SELECTOR$1, (table) => {
			if (!isResultTable(table)) return;
			const result = resultBlock$4(table);
			if (isRunning$3(result)) {
				removeButtons(result.ownerDocument);
				return;
			}
			mountOpenButton(result, () => readResult$4(result), (button) => placeButton$4(result, button), {
				className: BUTTON_CLASS,
				css: button_default$9
			});
		});
	}
	var button_default$8 = "[data-xmtr-helper]>button.btn02{border:0;border-radius:4px;height:28px;margin-left:8px;padding:0 12px;font-family:Microsoft YaHei,sans-serif;font-size:14px;line-height:1}[data-xmtr-helper]>button.btn02>svg{width:1em;height:1em;margin-right:.3em}[data-xmtr-helper]>button.btn02[data-state=failed],[data-xmtr-helper]>button.btn02[data-state=failed]:hover{opacity:1;background:#ff2626}";
	var NO_REPLY$6 = /^(?:[*?\-–—]+|n\/?a|timeout|unknown|未知|请求超时|超时|无响应)?$/i;
	var HEADERS$5 = [
		["location", /地理位置|所在地|位置|地区|location|geo/],
		["ttl", /^(?:序号|跳数|跳|hop|ttl|#|no\.?|节点)/],
		["hostname", /^(?:ptr|反向|主机名|hostname|r?dns|域名|domain)/],
		["asn", /^(?:as|asn|as号|自治域)/],
		["loss", /^(?:丢包|loss)/],
		["sent", /^(?:发包|发送|sent|snt)/],
		["stdev", /^(?:标准差|抖动|stdev|stddev|mdev)/],
		["last", /^(?:最新|当前|最近|last|cur)/],
		["best", /^(?:最快|最小|best|min)/],
		["worst", /^(?:最慢|最大|worst|wrst|max)/],
		["avg", /^(?:耗时|平均|时间|time|avg|average|mean)/],
		["ip", /ip|地址|host|address|主机/]
	];
	var CELL_POSITIONS$1 = {
		ttl: 0,
		ip: 1,
		location: 2,
		avg: 3
	};
	var LOADING = /(?:正在加载|加载中|检测中|正在检测|进行中|loading|running|tracing|queued)/i;
	function headerName$1(text) {
		return text.toLowerCase().replace(/[（(][^)）]*[)）]/g, "").replace(/[\s%：:]/g, "");
	}
	function fieldOf(header) {
		var _HEADERS$find;
		const name = headerName$1(header);
		return (_HEADERS$find = HEADERS$5.find(([, words]) => words.test(name))) === null || _HEADERS$find === void 0 ? void 0 : _HEADERS$find[0];
	}
	function blockRows(block) {
		return [...block.children].filter((row) => row.children.length > 0);
	}
	function cellsOf(row) {
		return [...row.children];
	}
	function headerRow$1(block) {
		return blockRows(block).find((row) => cellsOf(row).filter((cell) => fieldOf(cellText(cell)) !== void 0).length > 1);
	}
	function headerColumns$2(block) {
		const header = headerRow$1(block);
		if (!header) return void 0;
		const columns = new Map();
		cellsOf(header).forEach((cell, index) => {
			const field = fieldOf(cellText(cell));
			if (field !== void 0 && !columns.has(field)) columns.set(field, index);
		});
		return columns.size > 0 ? columns : void 0;
	}
	function fieldCell$1(row, field, columns) {
		const index = columns ? columns.get(field) : CELL_POSITIONS$1[field];
		return index === void 0 ? void 0 : cellsOf(row)[index];
	}
	function cellNumber$1(row, field, columns) {
		const text = cellText(fieldCell$1(row, field, columns));
		return NO_REPLY$6.test(text) ? void 0 : parseNumber(text);
	}
	function readAddress$1(text) {
		const value = text.trim();
		if (NO_REPLY$6.test(value)) return {};
		const whole = normalizeIp(value);
		if (whole) return { ip: whole };
		const parts = value.split(/[\s,;()[\]{}]+/).filter((part) => part !== "");
		const ip = parts.map((part) => normalizeIp(part)).find((part) => part !== void 0);
		const hostname = parts.find((part) => normalizeIp(part) === void 0 && /^[a-z0-9-]+(?:\.[a-z0-9-]+)+$/i.test(part));
		return _objectSpread2(_objectSpread2({}, ip ? { ip } : {}), hostname ? { hostname } : {});
	}
	function readHop$5(row, columns) {
		var _address$hostname;
		const ttl = cellNumber$1(row, "ttl", columns);
		if (ttl === void 0 || !Number.isInteger(ttl) || ttl <= 0) return void 0;
		const address = readAddress$1(cellText(fieldCell$1(row, "ip", columns)));
		const printed = cellText(fieldCell$1(row, "hostname", columns));
		const hostname = (_address$hostname = address.hostname) !== null && _address$hostname !== void 0 ? _address$hostname : NO_REPLY$6.test(printed) ? void 0 : printed;
		const asn = parseNumber(cellText(fieldCell$1(row, "asn", columns)));
		return {
			ttl,
			hosts: address.ip ? [_objectSpread2(_objectSpread2({ ip: address.ip }, hostname ? { hostname } : {}), asn ? { asn } : {})] : hostname ? [_objectSpread2({ hostname }, asn ? { asn } : {})] : [],
			lossPct: cellNumber$1(row, "loss", columns),
			sent: cellNumber$1(row, "sent", columns),
			lastMs: cellNumber$1(row, "last", columns),
			avgMs: cellNumber$1(row, "avg", columns),
			bestMs: cellNumber$1(row, "best", columns),
			worstMs: cellNumber$1(row, "worst", columns),
			stdevMs: cellNumber$1(row, "stdev", columns)
		};
	}
	function readHops$4(block, columns) {
		return blockRows(block).map((row) => readHop$5(row, columns)).filter((hop) => hop !== void 0);
	}
	function pageTarget$1(page) {
		var _URL$searchParams$get;
		const field = page.querySelector("#host, input[name=\"host\"]");
		const target = (field instanceof HTMLInputElement ? field.value.trim() : "") || ((_URL$searchParams$get = new URL(page.location.href).searchParams.get("host")) === null || _URL$searchParams$get === void 0 ? void 0 : _URL$searchParams$get.trim()) || "";
		return target === "" ? void 0 : target;
	}
	function showsLoading(block) {
		return blockRows(block).some((row) => {
			if (row instanceof HTMLElement && (row.style.display === "none" || row.hidden)) return false;
			return row.classList.contains("loadding") || LOADING.test(cellText(row));
		});
	}
	function isTraceBlock(block) {
		const columns = headerColumns$2(block);
		if (columns) return columns.has("ttl") && columns.has("ip");
		return readHops$4(block, void 0).length > 0;
	}
	function isFinished$2(block) {
		return readHops$4(block, headerColumns$2(block)).length > 0 && !showsLoading(block);
	}
	function headerLine(block) {
		var _block$querySelector;
		return (_block$querySelector = block.querySelector("p")) !== null && _block$querySelector !== void 0 ? _block$querySelector : blockRows(block).find((row) => /监测点|探针|检测点/.test(cellText(row)));
	}
	function readProbe$6(block) {
		const line = headerLine(block);
		if (!line) return void 0;
		const spans = [...line.querySelectorAll("span")];
		const named = spans.length > 1 ? cellText(spans[1]) : "";
		if (named !== "") return named;
		const text = cellText(line).replace(/^(?:监测点|探针|检测点)[:：]?\s*/, "").replace(/\s*我要赞助$/, "").trim();
		return text === "" ? void 0 : text;
	}
	function readResult$3(block, target) {
		if (target === "") throw new Error("No traced host on this page");
		const hops = readHops$4(block, headerColumns$2(block));
		if (hops.length === 0) throw new Error("This result has no hops");
		const probe = readProbe$6(block);
		return _objectSpread2(_objectSpread2({ target }, probe ? { probe } : {}), {}, { hops });
	}
	var site$8 = {
		id: "chinaz",
		name: "ChinaZ 路由追踪",
		matches: ["*://tool.chinaz.com/*"]
	};
	var chinaz_exports = __exportAll({
		site: () => site$8,
		start: () => start$8
	});
	var BLOCK$1 = "ul";
	var APPEARANCE$2 = {
		className: "btn02",
		css: button_default$8
	};
	function placeButton$3(result, button) {
		const header = headerLine(result);
		const name = header ? [...header.querySelectorAll("span")][1] : void 0;
		if (name) name.after(button);
		else if (header) header.append(button);
		else result.before(button);
	}
	function start$8() {
		watchElements(BLOCK$1, (result) => {
			if (!isTraceBlock(result) || !isFinished$2(result)) return;
			const target = pageTarget$1(document);
			if (target === void 0) return;
			mountOpenButton(result, () => {
				var _pageTarget;
				return readResult$3(result, (_pageTarget = pageTarget$1(document)) !== null && _pageTarget !== void 0 ? _pageTarget : target);
			}, (button) => placeButton$3(result, button), APPEARANCE$2);
		});
	}
	function gmRequest({ method, url, headers, data, timeoutMs }) {
		const send = typeof _GM_xmlhttpRequest === "function" ? _GM_xmlhttpRequest : _GM === null || _GM === void 0 ? void 0 : _GM.xmlHttpRequest;
		if (!send) throw new Error(t("noRequestApi"));
		const { host } = new URL(url);
		return new Promise((resolve, reject) => {
			send({
				method,
				url,
				headers,
				data,
				timeout: timeoutMs,
				onload: (response) => resolve({
					status: response.status,
					text: response.responseText
				}),
				onerror: () => reject(new Error(t("unreachable", { host }))),
				ontimeout: () => reject(new Error(t("timedOut", { host })))
			});
		});
	}
	var button_default$7 = "[data-xmtr-helper]>button{transition:background-color .1s ease-in-out}[data-xmtr-helper]>button:hover{background:#f9fafb}[data-xmtr-helper]>button:focus-visible{outline-offset:2px;outline:2px solid #17d4a7}[data-xmtr-helper]>button>svg{width:14px;height:14px;margin-right:6px}[data-xmtr-helper]>button[data-state=failed]{color:#a94442;border-color:#ebccd1}@media (prefers-reduced-motion:reduce){[data-xmtr-helper]>button{transition:none}}";
	var DEFAULT_CONFIG = {
		lang: void 0,
		message: void 0,
		abortEarly: void 0,
		abortPipeEarly: void 0
	};
	function getGlobalConfig(config$1) {
		var _config$1$lang, _config$1$abortEarly, _config$1$abortPipeEa;
		if (!config$1 && true) return DEFAULT_CONFIG;
		return {
			lang: (_config$1$lang = config$1 === null || config$1 === void 0 ? void 0 : config$1.lang) !== null && _config$1$lang !== void 0 ? _config$1$lang : void 0,
			message: config$1 === null || config$1 === void 0 ? void 0 : config$1.message,
			abortEarly: (_config$1$abortEarly = config$1 === null || config$1 === void 0 ? void 0 : config$1.abortEarly) !== null && _config$1$abortEarly !== void 0 ? _config$1$abortEarly : void 0,
			abortPipeEarly: (_config$1$abortPipeEa = config$1 === null || config$1 === void 0 ? void 0 : config$1.abortPipeEarly) !== null && _config$1$abortPipeEa !== void 0 ? _config$1$abortPipeEa : void 0
		};
	}
	function _stringify(input) {
		var _ref, _Object$getPrototypeO;
		const type = typeof input;
		if (type === "string") return `"${input}"`;
		if (type === "number" || type === "bigint" || type === "boolean") return `${input}`;
		if (type === "object" || type === "function") return (_ref = input && ((_Object$getPrototypeO = Object.getPrototypeOf(input)) === null || _Object$getPrototypeO === void 0 || (_Object$getPrototypeO = _Object$getPrototypeO.constructor) === null || _Object$getPrototypeO === void 0 ? void 0 : _Object$getPrototypeO.name)) !== null && _ref !== void 0 ? _ref : "null";
		return type;
	}
	function _addIssue(context, label, dataset, config$1, other) {
		var _ref2, _other$expected, _other$received, _ref3, _ref4, _ref5, _ref6, _other$message;
		const input = other && "input" in other ? other.input : dataset.value;
		const expected = (_ref2 = (_other$expected = other === null || other === void 0 ? void 0 : other.expected) !== null && _other$expected !== void 0 ? _other$expected : context.expects) !== null && _ref2 !== void 0 ? _ref2 : null;
		const received = (_other$received = other === null || other === void 0 ? void 0 : other.received) !== null && _other$received !== void 0 ? _other$received : _stringify(input);
		const issue = {
			kind: context.kind,
			type: context.type,
			input,
			expected,
			received,
			message: `Invalid ${label}: ${expected ? `Expected ${expected} but r` : "R"}eceived ${received}`,
			requirement: context.requirement,
			path: other === null || other === void 0 ? void 0 : other.path,
			issues: other === null || other === void 0 ? void 0 : other.issues,
			lang: config$1.lang,
			abortEarly: config$1.abortEarly,
			abortPipeEarly: config$1.abortPipeEarly
		};
		const isSchema = context.kind === "schema";
		const message$1 = (_ref3 = (_ref4 = (_ref5 = (_ref6 = (_other$message = other === null || other === void 0 ? void 0 : other.message) !== null && _other$message !== void 0 ? _other$message : context.message) !== null && _ref6 !== void 0 ? _ref6 : (context.reference, issue.lang, void 0)) !== null && _ref5 !== void 0 ? _ref5 : isSchema ? (issue.lang, void 0) : null) !== null && _ref4 !== void 0 ? _ref4 : config$1.message) !== null && _ref3 !== void 0 ? _ref3 : (issue.lang, void 0);
		if (message$1 !== void 0) issue.message = typeof message$1 === "function" ? message$1(issue) : message$1;
		if (isSchema) dataset.typed = false;
		if (dataset.issues) dataset.issues.push(issue);
		else dataset.issues = [issue];
	}
	function _isSameValueZero(value1, value2) {
		return value1 === value2 || Number.isNaN(value1) && Number.isNaN(value2);
	}
	function _joinExpects(values$1, separator) {
		var _list$;
		const list = [...new Set(values$1)];
		if (list.length > 1) return `(${list.join(` ${separator} `)})`;
		return (_list$ = list[0]) !== null && _list$ !== void 0 ? _list$ : "never";
	}
	function _standardSchema(schema) {
		schema["~standard"] = {
			version: 1,
			vendor: "valibot",
			validate: (value$1) => schema["~run"]({ value: value$1 }, getGlobalConfig())
		};
		return schema;
	}
	var ValiError = class extends Error {
		constructor(issues) {
			super(issues[0].message);
			this.name = "ValiError";
			this.issues = issues;
		}
	};
	var ABORT_EARLY_CONFIG = { abortEarly: true };
	function getFallback(schema, dataset, config$1) {
		return typeof schema.fallback === "function" ? schema.fallback(dataset, config$1) : schema.fallback;
	}
	function getDefault(schema, dataset, config$1) {
		return typeof schema.default === "function" ? schema.default(dataset, config$1) : schema.default;
	}
	function array(item, message$1) {
		return _standardSchema({
			kind: "schema",
			type: "array",
			reference: array,
			expects: "Array",
			async: false,
			item,
			message: message$1,
			"~run"(dataset, config$1) {
				const input = dataset.value;
				if (Array.isArray(input)) {
					dataset.typed = true;
					dataset.value = [];
					for (let key = 0; key < input.length; key++) {
						const value$1 = input[key];
						const itemDataset = this.item["~run"]({ value: value$1 }, config$1);
						if (itemDataset.issues) {
							const pathItem = {
								type: "array",
								origin: "value",
								input,
								key,
								value: value$1
							};
							for (const issue of itemDataset.issues) {
								var _dataset$issues2;
								if (issue.path) issue.path.unshift(pathItem);
								else issue.path = [pathItem];
								(_dataset$issues2 = dataset.issues) === null || _dataset$issues2 === void 0 || _dataset$issues2.push(issue);
							}
							if (!dataset.issues) dataset.issues = itemDataset.issues;
							if (config$1.abortEarly) {
								dataset.typed = false;
								break;
							}
						}
						if (!itemDataset.typed) dataset.typed = false;
						dataset.value.push(itemDataset.value);
					}
				} else _addIssue(this, "type", dataset, config$1);
				return dataset;
			}
		});
	}
	function literal(literal_, message$1) {
		return _standardSchema({
			kind: "schema",
			type: "literal",
			reference: literal,
			expects: _stringify(literal_),
			async: false,
			literal: literal_,
			message: message$1,
			"~run"(dataset, config$1) {
				if (_isSameValueZero(dataset.value, this.literal)) dataset.typed = true;
				else _addIssue(this, "type", dataset, config$1);
				return dataset;
			}
		});
	}
	function nullish(wrapped, default_) {
		return _standardSchema({
			kind: "schema",
			type: "nullish",
			reference: nullish,
			expects: `(${wrapped.expects} | null | undefined)`,
			async: false,
			wrapped,
			default: default_,
			"~run"(dataset, config$1) {
				if (dataset.value === null || dataset.value === void 0) {
					if (this.default !== void 0) dataset.value = getDefault(this, dataset, config$1);
					if (dataset.value === null || dataset.value === void 0) {
						dataset.typed = true;
						return dataset;
					}
				}
				return this.wrapped["~run"](dataset, config$1);
			}
		});
	}
	function number(message$1) {
		return _standardSchema({
			kind: "schema",
			type: "number",
			reference: number,
			expects: "number",
			async: false,
			message: message$1,
			"~run"(dataset, config$1) {
				if (typeof dataset.value === "number" && !isNaN(dataset.value)) dataset.typed = true;
				else _addIssue(this, "type", dataset, config$1);
				return dataset;
			}
		});
	}
	function object(entries$1, message$1) {
		return _standardSchema({
			kind: "schema",
			type: "object",
			reference: object,
			expects: "Object",
			async: false,
			entries: entries$1,
			message: message$1,
			"~run"(dataset, config$1) {
				const input = dataset.value;
				if (input && typeof input === "object") {
					dataset.typed = true;
					dataset.value = {};
					for (const key in this.entries) {
						const valueSchema = this.entries[key];
						if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && valueSchema.default !== void 0) {
							const value$1 = key in input ? input[key] : getDefault(valueSchema);
							const valueDataset = valueSchema["~run"]({ value: value$1 }, config$1);
							if (valueDataset.issues) {
								const pathItem = {
									type: "object",
									origin: "value",
									input,
									key,
									value: value$1
								};
								for (const issue of valueDataset.issues) {
									var _dataset$issues12;
									if (issue.path) issue.path.unshift(pathItem);
									else issue.path = [pathItem];
									(_dataset$issues12 = dataset.issues) === null || _dataset$issues12 === void 0 || _dataset$issues12.push(issue);
								}
								if (!dataset.issues) dataset.issues = valueDataset.issues;
								if (config$1.abortEarly) {
									dataset.typed = false;
									break;
								}
							}
							if (!valueDataset.typed) dataset.typed = false;
							dataset.value[key] = valueDataset.value;
						} else if (valueSchema.fallback !== void 0) dataset.value[key] = getFallback(valueSchema);
						else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
							_addIssue(this, "key", dataset, config$1, {
								input: void 0,
								expected: `"${key}"`,
								path: [{
									type: "object",
									origin: "key",
									input,
									key,
									value: input[key]
								}]
							});
							if (config$1.abortEarly) break;
						}
					}
				} else _addIssue(this, "type", dataset, config$1);
				return dataset;
			}
		});
	}
	function optional(wrapped, default_) {
		return _standardSchema({
			kind: "schema",
			type: "optional",
			reference: optional,
			expects: `(${wrapped.expects} | undefined)`,
			async: false,
			wrapped,
			default: default_,
			"~run"(dataset, config$1) {
				if (dataset.value === void 0) {
					if (this.default !== void 0) dataset.value = getDefault(this, dataset, config$1);
					if (dataset.value === void 0) {
						dataset.typed = true;
						return dataset;
					}
				}
				return this.wrapped["~run"](dataset, config$1);
			}
		});
	}
	function string(message$1) {
		return _standardSchema({
			kind: "schema",
			type: "string",
			reference: string,
			expects: "string",
			async: false,
			message: message$1,
			"~run"(dataset, config$1) {
				if (typeof dataset.value === "string") dataset.typed = true;
				else _addIssue(this, "type", dataset, config$1);
				return dataset;
			}
		});
	}
	function variant(key, options, message$1) {
		return _standardSchema({
			kind: "schema",
			type: "variant",
			reference: variant,
			expects: "Object",
			async: false,
			key,
			options,
			message: message$1,
			"~run"(dataset, config$1) {
				const input = dataset.value;
				if (input && typeof input === "object") {
					let outputDataset;
					let maxDiscriminatorPriority = 0;
					let invalidDiscriminatorKey = this.key;
					let expectedDiscriminators = [];
					const parseOptions = (variant$1, allKeys) => {
						for (const schema of variant$1.options) {
							if (schema.type === "variant") parseOptions(schema, new Set(allKeys).add(schema.key));
							else {
								let keysAreValid = true;
								let currentPriority = 0;
								for (const currentKey of allKeys) {
									const discriminatorSchema = schema.entries[currentKey];
									if (currentKey in input ? discriminatorSchema["~run"]({
										typed: false,
										value: input[currentKey]
									}, ABORT_EARLY_CONFIG).issues : discriminatorSchema.type !== "exact_optional" && discriminatorSchema.type !== "optional" && discriminatorSchema.type !== "nullish") {
										keysAreValid = false;
										if (invalidDiscriminatorKey !== currentKey && (maxDiscriminatorPriority < currentPriority || maxDiscriminatorPriority === currentPriority && currentKey in input && !(invalidDiscriminatorKey in input))) {
											maxDiscriminatorPriority = currentPriority;
											invalidDiscriminatorKey = currentKey;
											expectedDiscriminators = [];
										}
										if (invalidDiscriminatorKey === currentKey) expectedDiscriminators.push(schema.entries[currentKey].expects);
										break;
									}
									currentPriority++;
								}
								if (keysAreValid) {
									const optionDataset = schema["~run"]({ value: input }, config$1);
									if (!outputDataset || !outputDataset.typed && optionDataset.typed) outputDataset = optionDataset;
								}
							}
							if (outputDataset && !outputDataset.issues) break;
						}
					};
					parseOptions(this, new Set([this.key]));
					if (outputDataset) return outputDataset;
					_addIssue(this, "type", dataset, config$1, {
						input: input[invalidDiscriminatorKey],
						expected: _joinExpects(expectedDiscriminators, "|"),
						path: [{
							type: "object",
							origin: "value",
							input,
							key: invalidDiscriminatorKey,
							value: input[invalidDiscriminatorKey]
						}]
					});
				} else _addIssue(this, "type", dataset, config$1);
				return dataset;
			}
		});
	}
	function parse(schema, input, config$1) {
		const dataset = schema["~run"]({ value: input }, getGlobalConfig(config$1));
		if (dataset.issues) throw new ValiError(dataset.issues);
		return dataset.value;
	}
	var CONTROLS_SELECTOR = "[class*=\"metrics-controls\"]";
	var COLLAPSE_SELECTOR = "[class*=\"dropdown\"]";
	var ROUTE_TYPES = new Set(["traceroute", "mtr"]);
	var SUMMARY_SELECTOR = ".gp_map-block_test-details, [class*=\"test-details\"]";
	var CARD_TOKEN = /^(?:item-id-\d+|[\w-]*list[-_]item)$/;
	var INDEX_TOKEN = /^item-id-(\d+)$/;
	var INDEX_ATTRIBUTES = [
		"data-item-id",
		"data-result-index",
		"data-index"
	];
	var MTR_OUTPUT = /(?:^|\n)[^\n]*Loss%[^\n]*\bAvg\b/i;
	var RUNNING$4 = /\b(?:Loading|Running|Tracing|Measuring|检测中|正在检测)\b/i;
	var timingSchema = object({ rtt: optional(number()) });
	var probeSchema = object({
		city: nullish(string()),
		state: nullish(string()),
		country: nullish(string())
	});
	var measurementSchema = variant("type", [object({
		type: literal("traceroute"),
		target: optional(string()),
		results: array(object({
			probe: optional(probeSchema, {}),
			result: optional(object({
				status: optional(string(), "finished"),
				hops: optional(array(object({
					resolvedAddress: nullish(string()),
					resolvedHostname: nullish(string()),
					timings: optional(array(timingSchema), [])
				})), [])
			}), {
				status: "finished",
				hops: []
			})
		}))
	}), object({
		type: literal("mtr"),
		target: optional(string()),
		results: array(object({
			probe: optional(probeSchema, {}),
			result: optional(object({
				status: optional(string(), "finished"),
				hops: optional(array(object({
					resolvedAddress: nullish(string()),
					resolvedHostname: nullish(string()),
					asn: optional(array(number()), []),
					stats: optional(object({
						min: nullish(number()),
						max: nullish(number()),
						avg: nullish(number()),
						total: nullish(number()),
						loss: nullish(number()),
						stDev: nullish(number())
					})),
					timings: optional(array(timingSchema), [])
				})), [])
			}), {
				status: "finished",
				hops: []
			})
		}))
	})]);
	function parseMeasurement(value) {
		const { type } = parse(object({ type: string() }), value);
		if (type !== "traceroute" && type !== "mtr") throw new Error(`A Globalping ${type} measurement has no route`);
		return parse(measurementSchema, value);
	}
	function pageMeasurementType(root) {
		var _exec, _exec2;
		const summary = cellText(root.querySelector(SUMMARY_SELECTOR));
		const fromSummary = (_exec = /(?:^|\s)(traceroute6?|mtr|ping|dns|http)\s+test\b/i.exec(summary)) === null || _exec === void 0 ? void 0 : _exec[1];
		if (fromSummary) return fromSummary.toLowerCase();
		const title = cellText(root.querySelector("title"));
		const fromTitle = (_exec2 = /^\s*(traceroute6?|mtr|ping|dns|http)\b/i.exec(title)) === null || _exec2 === void 0 ? void 0 : _exec2[1];
		return fromTitle === null || fromTitle === void 0 ? void 0 : fromTitle.toLowerCase();
	}
	function resultCard(output) {
		var _output$parentElement, _output$parentElement2;
		const doc = output.ownerDocument;
		for (let node = output.parentElement; node && node !== doc.body && node !== doc.documentElement; node = node.parentElement) {
			var _node$getAttribute;
			if (((_node$getAttribute = node.getAttribute("class")) !== null && _node$getAttribute !== void 0 ? _node$getAttribute : "").split(/\s+/).some((token) => token.length > 0 && CARD_TOKEN.test(token))) return node;
		}
		const marked = output.closest("[data-item-id], [data-result-index], [data-index]");
		if (marked) return marked;
		const structural = output.closest("li, article, tr");
		if (structural) return structural;
		return (_output$parentElement = (_output$parentElement2 = output.parentElement) === null || _output$parentElement2 === void 0 ? void 0 : _output$parentElement2.parentElement) !== null && _output$parentElement !== void 0 ? _output$parentElement : output.parentElement;
	}
	function probeIndex(card) {
		var _card$getAttribute;
		for (const token of ((_card$getAttribute = card.getAttribute("class")) !== null && _card$getAttribute !== void 0 ? _card$getAttribute : "").split(/\s+/)) {
			const match = INDEX_TOKEN.exec(token);
			if ((match === null || match === void 0 ? void 0 : match[1]) !== void 0) return Number(match[1]);
		}
		for (const name of INDEX_ATTRIBUTES) {
			var _card$getAttribute2;
			const value = (_card$getAttribute2 = card.getAttribute(name)) === null || _card$getAttribute2 === void 0 ? void 0 : _card$getAttribute2.trim();
			if (value !== void 0 && /^\d+$/.test(value)) return Number(value);
		}
	}
	function outputText(card) {
		return cellText(card.querySelector("pre"));
	}
	function isRouteOutput(text) {
		return isTracerouteText(text) || MTR_OUTPUT.test(text);
	}
	function isResultReady(card) {
		var _pageMeasurementType;
		if (RUNNING$4.test(cellText(card))) return false;
		const output = outputText(card);
		if (output.length === 0) return false;
		if (isRouteOutput(output)) return true;
		return ROUTE_TYPES.has((_pageMeasurementType = pageMeasurementType(card.ownerDocument)) !== null && _pageMeasurementType !== void 0 ? _pageMeasurementType : "");
	}
	function measurementId(href) {
		var _exec3;
		const url = new URL(href);
		const fromQuery = url.searchParams.get("measurement");
		if (fromQuery) return fromQuery;
		return (_exec3 = /\/(?:measurements?|results?)\/([A-Za-z0-9]+)/.exec(url.pathname)) === null || _exec3 === void 0 ? void 0 : _exec3[1];
	}
	function readProbe$5(card, measurement) {
		const index = resolveIndex(card, measurement);
		const route = measurement.type === "mtr" ? mtrRoute(measurement, index) : tracerouteRoute(measurement, index);
		if (route.hops.length === 0) throw new Error(`Globalping reports this probe as ${route.status} and shows no hop`);
		const probe = probeLabel(route.probe);
		return _objectSpread2(_objectSpread2({ target: resolveTarget(card, measurement) }, probe === void 0 ? {} : { probe }), {}, { hops: route.hops });
	}
	function mtrRoute(measurement, index) {
		const entry = measurement.results[index];
		if (!entry) throw new Error(`Globalping returned no result for probe ${index + 1}`);
		return {
			probe: entry.probe,
			status: entry.result.status,
			hops: readMtrHops(entry.result.hops)
		};
	}
	function tracerouteRoute(measurement, index) {
		const entry = measurement.results[index];
		if (!entry) throw new Error(`Globalping returned no result for probe ${index + 1}`);
		return {
			probe: entry.probe,
			status: entry.result.status,
			hops: readTracerouteHops(entry.result.hops)
		};
	}
	function resolveIndex(card, measurement) {
		const index = probeIndex(card);
		if (index !== void 0 && index < measurement.results.length) return index;
		if (measurement.results.length === 1) return 0;
		const text = cellText(card);
		const found = measurement.results.map((entry, position) => ({
			position,
			label: probeLabel(entry.probe)
		})).filter((candidate) => candidate.label !== void 0 && text.includes(candidate.label));
		const only = found[0];
		if (found.length === 1 && only) return only.position;
		throw new Error("This Globalping result card names no probe");
	}
	function resolveTarget(card, measurement) {
		var _measurement$target, _exec4;
		const fromApi = (_measurement$target = measurement.target) === null || _measurement$target === void 0 ? void 0 : _measurement$target.trim();
		if (fromApi) return fromApi;
		const doc = card.ownerDocument;
		const fromTitle = (_exec4 = /^\s*(?:traceroute6?|mtr)\s+to\s+(\S+)/i.exec(doc.title)) === null || _exec4 === void 0 ? void 0 : _exec4[1];
		if (fromTitle) return fromTitle;
		const field = doc.querySelector("#targetInput, input[name=\"target\"], input[name=\"host\"]");
		if (field instanceof HTMLInputElement) {
			const value = field.value.trim();
			if (value) return value;
		}
		const param = doc.location ? new URL(doc.location.href).searchParams.get("target") : null;
		if (param) return param;
		throw new Error("The page shows no trace target");
	}
	function probeLabel(probe) {
		const parts = [
			probe.city,
			probe.state,
			probe.country
		].filter((part) => typeof part === "string" && part.length > 0);
		return parts.length > 0 ? parts.join(", ") : void 0;
	}
	function readTracerouteHops(hops) {
		return hops.map((hop, position) => _objectSpread2({
			ttl: position + 1,
			hosts: readHosts$2(hop.resolvedAddress, hop.resolvedHostname)
		}, timingStats(rtts(hop.timings))));
	}
	function readMtrHops(hops) {
		return hops.map((hop, position) => {
			var _stats$total, _stats$loss, _stats$avg, _stats$min, _stats$max, _stats$stDev;
			const stats = hop.stats;
			const timings = timingStats(rtts(hop.timings));
			return {
				ttl: position + 1,
				hosts: readHosts$2(hop.resolvedAddress, hop.resolvedHostname, hop.asn[0]),
				sent: (_stats$total = stats === null || stats === void 0 ? void 0 : stats.total) !== null && _stats$total !== void 0 ? _stats$total : void 0,
				lossPct: (_stats$loss = stats === null || stats === void 0 ? void 0 : stats.loss) !== null && _stats$loss !== void 0 ? _stats$loss : void 0,
				lastMs: timings.lastMs,
				avgMs: (_stats$avg = stats === null || stats === void 0 ? void 0 : stats.avg) !== null && _stats$avg !== void 0 ? _stats$avg : timings.avgMs,
				bestMs: (_stats$min = stats === null || stats === void 0 ? void 0 : stats.min) !== null && _stats$min !== void 0 ? _stats$min : timings.bestMs,
				worstMs: (_stats$max = stats === null || stats === void 0 ? void 0 : stats.max) !== null && _stats$max !== void 0 ? _stats$max : timings.worstMs,
				stdevMs: (_stats$stDev = stats === null || stats === void 0 ? void 0 : stats.stDev) !== null && _stats$stDev !== void 0 ? _stats$stDev : timings.stdevMs
			};
		});
	}
	function rtts(timings) {
		return timings.map((timing) => timing.rtt).filter((rtt) => typeof rtt === "number");
	}
	function readHosts$2(address, hostname, asn) {
		const ip = normalizeIp(address);
		if (!ip) return [];
		const host = { ip };
		if (hostname && hostname !== ip) host.hostname = hostname;
		if (asn) host.asn = asn;
		return [host];
	}
	function timingStats(values) {
		if (values.length === 0) return {};
		const avg = round$1(values.reduce((sum, value) => sum + value, 0) / values.length);
		const variance = values.reduce((sum, value) => sum + (value - avg) ** 2, 0) / values.length;
		const lastMs = values[values.length - 1];
		return _objectSpread2(_objectSpread2({}, lastMs === void 0 ? {} : { lastMs }), {}, {
			avgMs: avg,
			bestMs: Math.min(...values),
			worstMs: Math.max(...values),
			stdevMs: round$1(Math.sqrt(variance))
		});
	}
	function round$1(value) {
		return Math.round(value * 1e3) / 1e3;
	}
	var site$7 = {
		id: "globalping",
		name: "Globalping",
		matches: ["*://globalping.io/*"],
		connect: ["api.globalping.io"]
	};
	var globalping_exports = __exportAll({
		site: () => site$7,
		start: () => start$7
	});
	var API = "https://api.globalping.io/v1/measurements";
	var REQUEST_TIMEOUT_MS = 15e3;
	var CHIP_CLASS = "c-gp-results-raw-output_list_item_header_metrics-controls_metric";
	function fetchMeasurement(_x) {
		return _fetchMeasurement.apply(this, arguments);
	}
	function _fetchMeasurement() {
		_fetchMeasurement = _asyncToGenerator(function* (id) {
			const response = yield gmRequest({
				method: "GET",
				url: `${API}/${encodeURIComponent(id)}`,
				headers: { Accept: "application/json" },
				timeoutMs: REQUEST_TIMEOUT_MS
			});
			if (response.status < 200 || response.status >= 300) throw new Error(`Globalping API answered HTTP ${response.status}`);
			return JSON.parse(response.text);
		});
		return _fetchMeasurement.apply(this, arguments);
	}
	function readCard(_x2) {
		return _readCard.apply(this, arguments);
	}
	function _readCard() {
		_readCard = _asyncToGenerator(function* (card) {
			const id = measurementId(document.location.href);
			if (id === void 0) throw new Error("This page shows no Globalping measurement");
			return readProbe$5(card, parseMeasurement(yield fetchMeasurement(id)));
		});
		return _readCard.apply(this, arguments);
	}
	function placeButton$2(card, button) {
		const controls = card.querySelector(CONTROLS_SELECTOR);
		if (!controls) {
			card.prepend(button);
			return;
		}
		const collapse = controls.querySelector(COLLAPSE_SELECTOR);
		controls.insertBefore(button, collapse);
	}
	function start$7() {
		watchElements("pre", (output) => {
			const card = resultCard(output);
			if (!card || !isResultReady(card)) return;
			mountOpenButton(card, () => readCard(card), (button) => placeButton$2(card, button), {
				className: CHIP_CLASS,
				css: button_default$7
			});
		});
	}
	var button_default$6 = "[data-xmtr-helper]{margin:8px 0;display:block}[data-xmtr-helper]>button{cursor:default}[data-xmtr-helper]>button>svg{width:14px;height:14px;margin-right:4px}[data-xmtr-helper]>button[data-state=failed]{color:maroon}";
	var RESULT_SELECTOR = "#lg_return";
	var COMMAND = /\btraceroute6?\b(?:\s+ipv(?:4|6))?\s+(\S+)/i;
	var CAPTION_ROUTER = /^(\S+?)\s*>/;
	var TARGET_LABEL$1 = /^(?:target|destination|address|ip|host|目标|目的地址|目的)$/i;
	var TARGET_INPUT$1 = "input[name=ip], input[name=target], input[name=addr], input[name=address], input[name=host], input[name=destination]";
	var TARGET_PARAMS$1 = [
		"ip",
		"target",
		"addr",
		"address",
		"host",
		"destination",
		"d",
		"query"
	];
	var NO_REPLY$5 = /^(?:[*\-–—?]+|n\/?a|na|timeout|request timed out|timed out|请求超时|超时|unknown|无响应)$/i;
	var RUNNING_TEXT = /(?:\brunning\b|\btracing\b|\bin progress\b|检测中|运行中)/i;
	var RUNNING_MARK = "[class*=spinner], [class*=loading], [aria-busy=true], progress";
	var HOST_PAIR = /([^\s()]+)\s*\(([^()]+)\)/g;
	var AS_TAG$1 = /\[AS(\d{1,10})\]/;
	var HEADERS$4 = [
		["hop", /^(?:hop|hop\s*(?:#|no\.?|number)|#|ttl|序号|跳数|跳)$/i],
		["host", /^(?:host|host\s*name|hostname|ip|ip\s*address|address|addr|ip\/host|地址|主机|主机名|路由|节点|ptr)$/i],
		["loss", /^(?:loss|loss\s*%|%loss|丢包|丢包率|丢包%)$/i],
		["sent", /^(?:snt|sent|发送|发包|已发送)$/i],
		["last", /^(?:last|last\s*rtt|最近|最后|最近延迟)$/i],
		["avg", /^(?:avg|average|平均|平均延迟)$/i],
		["best", /^(?:best|min|fastest|最小|最快)$/i],
		["worst", /^(?:worst|wrst|max|slowest|最大|最慢)$/i],
		["stdev", /^(?:stdev|stddev|std|标准差)$/i],
		["asn", /^(?:as|asn|as\s*number|as号)$/i],
		["packet", /^(?:(?:packet|probe|rtt)|数据包|包)(?:\s*\d+)?$/i]
	];
	function round(value, digits) {
		const factor = 10 ** digits;
		return Math.round(value * factor) / factor;
	}
	function classify(text) {
		for (const [kind, pattern] of HEADERS$4) if (pattern.test(text)) return kind;
	}
	function headerRow(table) {
		const row = table.querySelector("thead tr");
		if (row) return row;
		const first = table.querySelector("tr");
		return (first === null || first === void 0 ? void 0 : first.querySelector("th")) ? first : void 0;
	}
	function readColumns$1(table) {
		const columns = {
			hop: 0,
			host: -1,
			packets: []
		};
		const row = headerRow(table);
		if (!row) return columns;
		const cells = [...row.children];
		for (let index = 0; index < cells.length; index += 1) {
			const kind = classify(cellText(cells[index]));
			if (kind === "packet") {
				columns.packets.push(index);
				continue;
			}
			if (kind === void 0) continue;
			if (kind === "hop") columns.hop = index;
			else if (kind === "host") columns.host = index;
			else if (columns[kind] === void 0) columns[kind] = index;
		}
		return columns;
	}
	function hasStatistic(columns) {
		return [
			columns.loss,
			columns.sent,
			columns.last,
			columns.avg,
			columns.best,
			columns.worst,
			columns.stdev
		].some((index) => index !== void 0);
	}
	function cellAt(cells, index) {
		return index === void 0 ? void 0 : cells[index];
	}
	function readHosts$1(cell) {
		const text = cellText(cell);
		if (text === "" || NO_REPLY$5.test(text)) return [];
		const asnMatch = AS_TAG$1.exec(text);
		const asn = (asnMatch === null || asnMatch === void 0 ? void 0 : asnMatch[1]) === void 0 ? void 0 : Number(asnMatch[1]);
		const pairs = [];
		for (const match of text.matchAll(HOST_PAIR)) {
			var _match$;
			const name = (_match$ = match[1]) !== null && _match$ !== void 0 ? _match$ : "";
			const ip = normalizeIp(match[2]);
			if (!ip) throw new Error(`Unrecognised hop address: ${text}`);
			pairs.push(name === ip ? { ip } : {
				ip,
				hostname: name
			});
		}
		if (pairs.length > 0) return withAsn(pairs, asn);
		const single = normalizeIp(text);
		if (single) return withAsn([{ ip: single }], asn);
		const tokens = text.split(/[\s,]+/).filter((token) => token !== "");
		const addresses = tokens.map((token) => normalizeIp(token)).filter((ip) => ip !== void 0);
		if (addresses.length > 0) {
			const names = tokens.filter((token) => normalizeIp(token) === void 0);
			const hostname = names.length === 1 ? names[0] : void 0;
			return withAsn(addresses.map((ip) => hostname === void 0 ? { ip } : {
				ip,
				hostname
			}), asn);
		}
		if (!/[\w.]/.test(text)) return [];
		return withAsn([{ hostname: text }], asn);
	}
	function withAsn(hosts, asn) {
		const first = hosts[0];
		if (asn === void 0 || first === void 0) return hosts;
		return [_objectSpread2(_objectSpread2({}, first), {}, { asn }), ...hosts.slice(1)];
	}
	function readHop$4(row, columns) {
		var _parseNumber, _parseNumber2, _parseNumber3, _parseNumber4, _parseNumber5, _parseNumber6;
		const cells = [...row.children];
		if (cells.length < 2) return void 0;
		const ttl = parseNumber(cellText(cellAt(cells, columns.hop)));
		if (ttl === void 0) return void 0;
		const hostIndex = columns.host < 0 ? cells.length - 1 : columns.host;
		const packets = columns.packets.length > 0 || hasStatistic(columns) ? columns.packets : cells.map((_cell, index) => index).filter((index) => index !== columns.hop && index !== hostIndex);
		const packetTexts = packets.map((index) => cellText(cellAt(cells, index)));
		const sent = (_parseNumber = parseNumber(cellText(cellAt(cells, columns.sent)))) !== null && _parseNumber !== void 0 ? _parseNumber : packetTexts.filter((text) => text !== "").length;
		const answered = packetTexts.filter((text) => !NO_REPLY$5.test(text)).map((text) => parseNumber(text)).filter((ms) => ms !== void 0);
		const hop = {
			ttl,
			hosts: readHosts$1(cellAt(cells, hostIndex))
		};
		if (sent > 0) hop.sent = sent;
		const calculatedLoss = packets.length > 0 && sent > 0 ? round((sent - answered.length) / sent * 100, 1) : void 0;
		const lossPct = (_parseNumber2 = parseNumber(cellText(cellAt(cells, columns.loss)))) !== null && _parseNumber2 !== void 0 ? _parseNumber2 : calculatedLoss;
		if (lossPct !== void 0) hop.lossPct = lossPct;
		const lastMs = (_parseNumber3 = parseNumber(cellText(cellAt(cells, columns.last)))) !== null && _parseNumber3 !== void 0 ? _parseNumber3 : answered[answered.length - 1];
		if (lastMs !== void 0) hop.lastMs = lastMs;
		const avgMs = (_parseNumber4 = parseNumber(cellText(cellAt(cells, columns.avg)))) !== null && _parseNumber4 !== void 0 ? _parseNumber4 : answered.length === 0 ? void 0 : round(answered.reduce((sum, ms) => sum + ms, 0) / answered.length, 3);
		if (avgMs !== void 0) hop.avgMs = avgMs;
		const bestMs = (_parseNumber5 = parseNumber(cellText(cellAt(cells, columns.best)))) !== null && _parseNumber5 !== void 0 ? _parseNumber5 : answered.length === 0 ? void 0 : Math.min(...answered);
		if (bestMs !== void 0) hop.bestMs = bestMs;
		const worstMs = (_parseNumber6 = parseNumber(cellText(cellAt(cells, columns.worst)))) !== null && _parseNumber6 !== void 0 ? _parseNumber6 : answered.length === 0 ? void 0 : Math.max(...answered);
		if (worstMs !== void 0) hop.worstMs = worstMs;
		const stdevMs = parseNumber(cellText(cellAt(cells, columns.stdev)));
		if (stdevMs !== void 0) hop.stdevMs = stdevMs;
		return hop;
	}
	function isHopTable(table) {
		const row = headerRow(table);
		if (!row) return false;
		const kinds = new Set([...row.children].map((cell) => classify(cellText(cell))));
		return kinds.has("hop") && (kinds.has("host") || kinds.has("packet"));
	}
	function hasNumberedRow(table) {
		var _table$querySelector;
		const row = (_table$querySelector = table.querySelector("tbody tr")) !== null && _table$querySelector !== void 0 ? _table$querySelector : table.querySelector("tr");
		return parseNumber(cellText(row === null || row === void 0 ? void 0 : row.querySelector("td, th"))) !== void 0;
	}
	function findHopTable(result) {
		const tables = [...result.querySelectorAll("table")];
		const byHeader = tables.find((table) => isHopTable(table));
		if (byHeader) return byHeader;
		const byClass = tables.find((table) => table.classList.contains("tablesorter") && hasNumberedRow(table));
		if (byClass) return byClass;
		return tables.find((table) => hasNumberedRow(table));
	}
	function readHops$3(result) {
		var _hops$, _hops, _answered$get;
		const table = findHopTable(result);
		if (!table) throw new Error("The result has no hop table");
		const columns = readColumns$1(table);
		const bodyRows = [...table.querySelectorAll("tbody tr")];
		const hops = (bodyRows.length > 0 ? bodyRows : [...table.querySelectorAll("tr")].filter((row) => row.closest("thead") === null)).map((row) => readHop$4(row, columns)).filter((hop) => hop !== void 0);
		const first = (_hops$ = hops[0]) === null || _hops$ === void 0 ? void 0 : _hops$.ttl;
		const last = (_hops = hops[hops.length - 1]) === null || _hops === void 0 ? void 0 : _hops.ttl;
		if (first === void 0 || last === void 0) return hops;
		const answered = new Map(hops.map((hop) => [hop.ttl, hop]));
		const filled = [];
		for (let ttl = first; ttl <= last; ttl += 1) filled.push((_answered$get = answered.get(ttl)) !== null && _answered$get !== void 0 ? _answered$get : {
			ttl,
			hosts: []
		});
		return filled;
	}
	function readBlockTarget(result) {
		for (const row of result.querySelectorAll("tr")) {
			var _normalizeIp;
			const label = cellText(row.querySelector("th")).replace(/[:：]\s*$/, "").trim();
			if (!TARGET_LABEL$1.test(label)) continue;
			const value = cellText(row.querySelector("td"));
			if (value !== "") return (_normalizeIp = normalizeIp(value)) !== null && _normalizeIp !== void 0 ? _normalizeIp : value;
		}
		for (const input of document.querySelectorAll(TARGET_INPUT$1)) {
			var _normalizeIp2;
			if (!(input instanceof HTMLInputElement)) continue;
			const value = (input.value || input.getAttribute("value") || "").trim();
			if (value !== "") return (_normalizeIp2 = normalizeIp(value)) !== null && _normalizeIp2 !== void 0 ? _normalizeIp2 : value;
		}
		const params = new URL(document.location.href).searchParams;
		for (const key of TARGET_PARAMS$1) {
			var _params$get, _normalizeIp3;
			const value = (_params$get = params.get(key)) === null || _params$get === void 0 ? void 0 : _params$get.trim();
			if (value) return (_normalizeIp3 = normalizeIp(value)) !== null && _normalizeIp3 !== void 0 ? _normalizeIp3 : value;
		}
	}
	function readRoute$1(result) {
		var _normalizeIp4, _CAPTION_ROUTER$exec;
		const caption = cellText(result.querySelector("caption"));
		const command = COMMAND.exec(caption);
		if (command === null && findHopTable(result) === void 0) return void 0;
		const named = command === null || command === void 0 ? void 0 : command[1];
		const target = named === void 0 ? readBlockTarget(result) : (_normalizeIp4 = normalizeIp(named)) !== null && _normalizeIp4 !== void 0 ? _normalizeIp4 : named;
		if (target === void 0 || target === "") return void 0;
		const probe = (_CAPTION_ROUTER$exec = CAPTION_ROUTER.exec(caption)) === null || _CAPTION_ROUTER$exec === void 0 ? void 0 : _CAPTION_ROUTER$exec[1];
		return probe === void 0 ? { target } : {
			probe,
			target
		};
	}
	function isRunningResult(result) {
		if (result.querySelector(RUNNING_MARK) !== null) return true;
		return RUNNING_TEXT.test(cellText(result));
	}
	function readTrace$3(result) {
		const route = readRoute$1(result);
		if (!route) throw new Error("This result is not a traceroute run");
		const hops = readHops$3(result);
		if (hops.length === 0) throw new Error("The result has no hops");
		return route.probe === void 0 ? {
			target: route.target,
			hops
		} : {
			target: route.target,
			probe: route.probe,
			hops
		};
	}
	var site$6 = {
		id: "he",
		name: "Hurricane Electric Looking Glass",
		matches: ["*://lg.he.net/*"]
	};
	var he_exports = __exportAll({
		site: () => site$6,
		start: () => start$6
	});
	function place$2(result, button) {
		const table = findHopTable(result);
		if (table) table.after(button);
		else result.append(button);
	}
	function start$6() {
		watchElements(RESULT_SELECTOR, (result) => {
			const mounted = result.querySelector(`[${BUTTON_HOST_ATTRIBUTE}]`);
			const show = readRoute$1(result) !== void 0 && !isRunningResult(result);
			if (mounted instanceof HTMLElement) mounted.hidden = !show;
			if (!show) return;
			mountOpenButton(result, () => readTrace$3(result), (button) => place$2(result, button), { css: button_default$6 });
		});
	}
	var button_default$5 = "[data-xmtr-helper]>button.badge{border:0;font-size:12px;line-height:17px}[data-xmtr-helper]>button.badge:hover{color:#dae6ff;background:#4680ff}[data-xmtr-helper]>button.badge>svg{width:1em;height:1em;margin-right:.25em}[data-xmtr-helper]>button.badge[data-state=failed],[data-xmtr-helper]>button.badge[data-state=failed]:hover{color:#ff5252;background:rgba(255,82,82,.2)}@media (prefers-reduced-motion:reduce){[data-xmtr-helper]>button.badge{transition:none}}";
	var NO_REPLY$4 = /^(?:[*?\-–—]+|n\/?a|timeout|unknown|请求超时|超时|无响应)?$/i;
	var HEADERS$3 = [
		["location", /地理位置|所在地|位置|地区|location|geo/],
		["ttl", /^(?:跳数|序号|跳|hop|ttl|#|no\.?|节点)/],
		["hostname", /^(?:ptr|反向|主机名|hostname|r?dns|域名|domain)/],
		["asn", /^(?:as|asn|as号|自治域)/],
		["loss", /^(?:丢包|loss)/],
		["sent", /^(?:发包|发送|sent|snt)/],
		["stdev", /^(?:标准差|抖动|stdev|stddev|mdev)/],
		["last", /^(?:最新|当前|最近|last|cur)/],
		["best", /^(?:最快|最小|best|min)/],
		["worst", /^(?:最慢|最大|worst|wrst|max)/],
		["avg", /^(?:平均|耗时|avg|average|mean)/],
		["ip", /ip|地址|host|address|主机/]
	];
	var CELL_IDS = {
		ip: "real_ip_",
		hostname: "ptr_",
		asn: "as_",
		loss: "loss_",
		sent: "send_",
		last: "last_ping_",
		best: "best_ping_",
		worst: "worst_ping_",
		avg: "avg_ping_"
	};
	var CELL_POSITIONS = {
		ttl: 0,
		ip: 1,
		hostname: 2,
		location: 3,
		asn: 4,
		loss: 5,
		sent: 6,
		last: 7,
		best: 8,
		worst: 9,
		avg: 10
	};
	function headerName(text) {
		return text.toLowerCase().replace(/[（(][^)）]*[)）]/g, "").replace(/[\s%：:]/g, "");
	}
	function headerColumns$1(table) {
		const header = [...table.querySelectorAll("tr")].find((row) => row.querySelectorAll("th").length > 1);
		if (!header) return void 0;
		const columns = new Map();
		[...header.children].forEach((cell, index) => {
			const name = headerName(cellText(cell));
			const match = HEADERS$3.find(([field, words]) => !columns.has(field) && words.test(name));
			if (match) columns.set(match[0], index);
		});
		return columns.size > 0 ? columns : void 0;
	}
	function bodyRows(block) {
		return [...block.querySelectorAll("tr")].filter((row) => row.closest("table") === block && row.closest("thead") === null && row.querySelector("th") === null);
	}
	function fieldCell(row, field, columns) {
		const index = columns === null || columns === void 0 ? void 0 : columns.get(field);
		if (index !== void 0) return row.children[index];
		const prefix = CELL_IDS[field];
		const byId = prefix === void 0 ? null : row.querySelector(`[id^="${prefix}"]`);
		if (byId) return byId;
		if (columns) return void 0;
		const position = CELL_POSITIONS[field];
		return position === void 0 ? void 0 : row.children[position];
	}
	function cellOf(row, field, columns) {
		return cellText(fieldCell(row, field, columns));
	}
	function cellNumber(row, field, columns) {
		const text = cellOf(row, field, columns);
		return NO_REPLY$4.test(text) ? void 0 : parseNumber(text);
	}
	function readAddress(text) {
		const value = text.trim();
		if (NO_REPLY$4.test(value)) return {};
		const whole = normalizeIp(value);
		if (whole) return { ip: whole };
		const parts = value.split(/[\s,;()[\]{}]+/).filter((part) => part !== "");
		const ip = parts.map((part) => normalizeIp(part)).find((part) => part !== void 0);
		const hostname = parts.find((part) => normalizeIp(part) === void 0 && /^[a-z0-9-]+(?:\.[a-z0-9-]+)+$/i.test(part));
		return _objectSpread2(_objectSpread2({}, ip ? { ip } : {}), hostname ? { hostname } : {});
	}
	function readHostname$1(row, columns) {
		const text = cellOf(row, "hostname", columns);
		return NO_REPLY$4.test(text) ? void 0 : text;
	}
	function readAsn$1(cell) {
		var _cell$firstElementChi, _cell$firstElementChi2;
		if (!cell) return void 0;
		const candidates = [(_cell$firstElementChi = (_cell$firstElementChi2 = cell.firstElementChild) === null || _cell$firstElementChi2 === void 0 || (_cell$firstElementChi2 = _cell$firstElementChi2.firstChild) === null || _cell$firstElementChi2 === void 0 ? void 0 : _cell$firstElementChi2.textContent) !== null && _cell$firstElementChi !== void 0 ? _cell$firstElementChi : "", cellText(cell)];
		for (const candidate of candidates) {
			const asn = parseAsn(candidate);
			if (asn !== void 0) return asn;
		}
	}
	function readHop$3(row, columns) {
		var _address$hostname;
		const ttl = cellNumber(row, "ttl", columns);
		if (ttl === void 0 || !Number.isInteger(ttl) || ttl <= 0) return void 0;
		const address = readAddress(cellOf(row, "ip", columns));
		const hostname = (_address$hostname = address.hostname) !== null && _address$hostname !== void 0 ? _address$hostname : readHostname$1(row, columns);
		const asn = readAsn$1(fieldCell(row, "asn", columns));
		return {
			ttl,
			hosts: address.ip ? [_objectSpread2(_objectSpread2({ ip: address.ip }, hostname ? { hostname } : {}), asn ? { asn } : {})] : hostname ? [_objectSpread2({ hostname }, asn ? { asn } : {})] : [],
			sent: cellNumber(row, "sent", columns),
			lossPct: cellNumber(row, "loss", columns),
			lastMs: cellNumber(row, "last", columns),
			avgMs: cellNumber(row, "avg", columns),
			bestMs: cellNumber(row, "best", columns),
			worstMs: cellNumber(row, "worst", columns),
			stdevMs: cellNumber(row, "stdev", columns)
		};
	}
	function labelledValue(block, label) {
		const pattern = new RegExp(`^${label.source}[:：]?\\s*(.+)$`);
		let shortest;
		for (const element of block.querySelectorAll("*")) {
			var _pattern$exec$, _pattern$exec;
			const value = ((_pattern$exec$ = (_pattern$exec = pattern.exec(cellText(element))) === null || _pattern$exec === void 0 ? void 0 : _pattern$exec[1]) !== null && _pattern$exec$ !== void 0 ? _pattern$exec$ : "").replace(/^[:：]+/, "").trim();
			if (value !== "" && (shortest === void 0 || value.length < shortest.length)) shortest = value;
		}
		return shortest;
	}
	function readProbe$4(block) {
		const segment = block.querySelector(".legacy-trace-node-segment");
		if (segment) {
			const label = [cellText(segment.querySelector(".legacy-trace-carrier")), cellText(segment.querySelector(".legacy-trace-node-name"))].filter((part) => part !== "").join(" ");
			if (label !== "") return label;
			const text = cellText(segment);
			if (text !== "") return text;
		}
		return labelledValue(block, /监测点|探针|检测点/);
	}
	function pageTarget() {
		const query = new URL(document.location.href).searchParams;
		for (const key of [
			"host",
			"ip",
			"target",
			"domain",
			"q"
		]) {
			var _query$get;
			const value = (_query$get = query.get(key)) === null || _query$get === void 0 ? void 0 : _query$get.trim();
			if (value) return value;
		}
		const field = document.querySelector("input#host, input[name=\"host\"], input[name=\"ip\"], input[name=\"target\"]");
		if (field instanceof HTMLInputElement) {
			const value = field.value.trim();
			if (value !== "") return value;
		}
	}
	function blockTarget(block) {
		return cellText(block.querySelector("#target_ip")) || labelledValue(block, /目标\s*(?:IP|地址)?/) || pageTarget();
	}
	var RUNNING$3 = /(?:检测中|正在检测|正在加载|加载中|进行中|running|tracing|loading|queued|waiting)/i;
	function readHops$2(block, columns) {
		return bodyRows(block).map((row) => readHop$3(row, columns)).filter((hop) => hop !== void 0);
	}
	function isTraceTable(table) {
		if (table.closest("table") !== table) return false;
		const columns = headerColumns$1(table);
		if (columns) return columns.has("ip") && (columns.has("ttl") || table.querySelector("tr[ttl]") !== null);
		return bodyRows(table).some((row) => parseNumber(cellText(row.children[0])) !== void 0);
	}
	function isFinished$1(block) {
		return readHops$2(block, headerColumns$1(block)).length > 0 && !RUNNING$3.test(cellText(block));
	}
	function readResult$2(block) {
		const target = blockTarget(block);
		if (target === void 0) throw new Error("This result has no target address");
		const hops = readHops$2(block, headerColumns$1(block));
		if (hops.length === 0) throw new Error("This result has no hops yet");
		const probe = readProbe$4(block);
		return _objectSpread2(_objectSpread2({ target }, probe ? { probe } : {}), {}, { hops });
	}
	var site$5 = {
		id: "itdog",
		name: "ITDOG",
		matches: ["*://www.itdog.cn/*", "*://itdog.cn/*"]
	};
	var itdog_exports = __exportAll({
		site: () => site$5,
		start: () => start$5
	});
	var TABLE = "table";
	function summaryLine(table) {
		const marked = table.querySelector(".legacy-trace-summary");
		if (marked) return marked;
		return [...table.querySelectorAll("tr")].find((row) => /目标\s*(?:IP|地址)/.test(cellText(row)));
	}
	var APPEARANCE$1 = {
		className: "badge badge-light-primary",
		css: button_default$5
	};
	function place$1(button, table) {
		const summary = summaryLine(table);
		if (!summary) {
			table.before(button);
			return;
		}
		button.style.marginLeft = "auto";
		button.style.alignSelf = "center";
		button.style.flex = "none";
		summary.append(button);
	}
	function start$5() {
		watchElements(TABLE, (table) => {
			if (!isTraceTable(table) || !isFinished$1(table)) return;
			mountOpenButton(table, () => readResult$2(table), (button) => place$1(button, table), APPEARANCE$1);
		});
	}
	var button_default$4 = "[data-xmtr-helper]>button{height:24px;padding:0 12px}[data-xmtr-helper]>button>svg{width:16px;height:16px;margin-right:6px}[data-xmtr-helper]>button[data-state=failed]{background-color:#e02424}[data-xmtr-helper]>button[data-state=failed]:hover{background-color:#f05252}";
	var HEADERS$2 = [
		["lossPct", /^(loss|loss%|丢包)/i],
		["sent", /^(snt|sent|发送)/i],
		["lastMs", /^(last|最近)/i],
		["avgMs", /^(avg|average|平均)/i],
		["bestMs", /^(best|min|最小|最快)/i],
		["worstMs", /^(wrst|worst|max|最大|最慢)/i],
		["stdevMs", /^(stdev|std\s*dev|标准差)/i]
	];
	var DEFAULT_STATS$1 = [
		"lossPct",
		"sent",
		"lastMs",
		"avgMs",
		"bestMs",
		"worstMs",
		"stdevMs"
	];
	var NO_REPLY$3 = new Set([
		"",
		"*",
		"-",
		"--",
		"—",
		"–",
		"???",
		"?",
		"n/a",
		"na",
		"timeout",
		"unknown",
		"请求超时",
		"超时"
	]);
	var NUMBER$1 = /^[<>=~]?\d[\d.,]*%?$/;
	var RUNNING$2 = /(running|tracing|please wait|in queue|queued|detecting|检测中|追踪中|请稍候)/i;
	var TITLE = /^(\S+)\s+(\S+)(?:\s+-\s+(.+))?$/;
	var PROBE = /^(.+?)(?:\s+AS(\d+))?\s+in\s+(.+)$/i;
	var ROW = /^\s*(\d+)\.\|--\s+(\S+)\s*(.*)$/;
	var HOP_OFFSET = 1;
	function isNoReply$2(text) {
		return NO_REPLY$3.has(text.trim().toLowerCase());
	}
	function titleLine(result) {
		const title = [...result.querySelectorAll("span, div, p, h1, h2, h3")].filter((element) => element.querySelector("pre") === null).map((element) => cellText(element)).find((text) => /^(mtr6?|ping6?|traceroute6?|tcptraceroute)\b/i.test(text));
		if (!title) throw new Error("The result shows no title line");
		return title;
	}
	function readHeader$1(text) {
		const line = text.split("\n").find((candidate) => /^\s*HOST:?\s/i.test(candidate));
		if (!line) return void 0;
		const names = [];
		for (const token of line.trim().split(/\s+/).slice(1)) for (const [name, pattern] of HEADERS$2) if (pattern.test(token)) {
			names.push(name);
			break;
		}
		return names.length > 0 ? names : void 0;
	}
	function readExtras(rest) {
		const asn = /^AS\s*(\d+)\b/i.exec(rest);
		const words = rest.trim().split(/\s+/).filter(Boolean);
		const last = words[words.length - 1];
		const hostname = last !== void 0 && !isNoReply$2(last) && !last.endsWith("...") ? last : void 0;
		return {
			asn: (asn === null || asn === void 0 ? void 0 : asn[1]) === void 0 ? void 0 : Number(asn[1]),
			hostname
		};
	}
	function readHost$1(text) {
		const value = text.trim();
		if (isNoReply$2(value)) return [];
		const address = normalizeIp(value);
		if (address) return [{ ip: address }];
		const grouped = /^(.*?)\s*\(([^()]*)\)$/.exec(value);
		if (grouped) {
			const [, name = "", inside = ""] = grouped;
			const inner = normalizeIp(inside);
			if (inner) return [_objectSpread2({ ip: inner }, name.trim() === "" ? {} : { hostname: name.trim() })];
			const outer = normalizeIp(name);
			if (outer) return [_objectSpread2({ ip: outer }, inside.trim() === "" ? {} : { hostname: inside.trim() })];
		}
		return [{ hostname: value }];
	}
	function readHop$2(line, stats) {
		const parsed = ROW.exec(line);
		const [, index, hostText, rest = ""] = parsed !== null && parsed !== void 0 ? parsed : [];
		if (index === void 0 || hostText === void 0) return void 0;
		const tokens = rest.split(/\s+/).filter(Boolean);
		const hop = {
			ttl: Number(index) + HOP_OFFSET,
			hosts: readHost$1(hostText)
		};
		let consumed = 0;
		while (consumed < stats.length) {
			const token = tokens[consumed];
			const name = stats[consumed];
			if (token === void 0 || name === void 0) break;
			if (!NUMBER$1.test(token) && !isNoReply$2(token)) break;
			const value = parseNumber(token);
			if (value !== void 0) hop[name] = value;
			consumed += 1;
		}
		const extras = readExtras(tokens.slice(consumed).join(" "));
		const host = hop.hosts[0];
		if (host) {
			if (extras.asn !== void 0) host.asn = extras.asn;
			if (extras.hostname !== void 0 && host.ip !== void 0) host.hostname = extras.hostname;
		}
		return hop;
	}
	function resultBlock$3(report) {
		const explicit = report.closest("div[id], section[id]");
		if (explicit) return explicit;
		let current = report.parentElement;
		while (current && current !== document.body) {
			if (/^(mtr6?|ping6?|traceroute6?)\b/i.test(cellText(current))) return current;
			current = current.parentElement;
		}
	}
	function reportText(result) {
		return [...result.querySelectorAll("pre")].map((pre) => {
			var _pre$textContent;
			return (_pre$textContent = pre.textContent) !== null && _pre$textContent !== void 0 ? _pre$textContent : "";
		}).find((text) => readHeader$1(text) !== void 0 || /^\s*\d+\.\|--/m.test(text));
	}
	function isFinished(result) {
		return !isRunning$2(result) && reportText(result) !== void 0;
	}
	function isRunning$2(result) {
		if (result.querySelector("[role=\"status\"], [class*=\"spinner\"], [class*=\"animate-spin\"]") !== null) return true;
		return RUNNING$2.test(cellText(result));
	}
	function actionsRow(result) {
		var _ref, _action$parentElement, _result$querySelector;
		const action = [...result.querySelectorAll("button[title]")].find((button) => {
			var _button$getAttribute;
			return /copy|download|share|hide/i.test((_button$getAttribute = button.getAttribute("title")) !== null && _button$getAttribute !== void 0 ? _button$getAttribute : "");
		});
		return (_ref = (_action$parentElement = action === null || action === void 0 ? void 0 : action.parentElement) !== null && _action$parentElement !== void 0 ? _action$parentElement : (_result$querySelector = result.querySelector("button[title]")) === null || _result$querySelector === void 0 ? void 0 : _result$querySelector.parentElement) !== null && _ref !== void 0 ? _ref : void 0;
	}
	function readTitle(result) {
		const parsed = TITLE.exec(titleLine(result));
		const [, type = "", candidate, rest] = parsed !== null && parsed !== void 0 ? parsed : [];
		const probe = rest === void 0 ? void 0 : PROBE.exec(rest);
		if (!probe) return {
			type,
			target: looksLikeTarget$1(candidate) ? candidate : void 0
		};
		const [, provider = "", asn, place = ""] = probe;
		if (place === "") return {
			type,
			target: candidate
		};
		return {
			type,
			target: candidate,
			probe: `${place} (${asn === void 0 ? provider : `${provider} AS${asn}`})`
		};
	}
	function looksLikeTarget$1(text) {
		if (text === void 0) return false;
		if (normalizeIp(text) !== void 0) return true;
		return /^[a-z0-9][a-z0-9-]*(\.[a-z0-9-]+)+$/i.test(text);
	}
	function readTarget$4(title, url) {
		var _ref2, _url$searchParams$get;
		if (title.target !== void 0) return title.target;
		const query = (_ref2 = (_url$searchParams$get = url === null || url === void 0 ? void 0 : url.searchParams.get("t")) !== null && _url$searchParams$get !== void 0 ? _url$searchParams$get : url === null || url === void 0 ? void 0 : url.searchParams.get("target")) !== null && _ref2 !== void 0 ? _ref2 : url === null || url === void 0 ? void 0 : url.searchParams.get("host");
		if (query) return query;
		const input = document.querySelector("input[placeholder*=\"google.com\"], input[type=\"search\"], input[type=\"text\"]");
		const value = input instanceof HTMLInputElement ? input.value.trim() : "";
		if (value !== "") return value;
		throw new Error("The result names no target");
	}
	function readResult$1(result, url) {
		var _readHeader;
		const title = readTitle(result);
		if (/^ping/i.test(title.type)) throw new Error(`This block holds a ${title.type} result, not an MTR result`);
		if (isRunning$2(result)) throw new Error("The probe has not finished yet");
		const text = reportText(result);
		if (!text) throw new Error("The result holds no MTR report");
		const stats = (_readHeader = readHeader$1(text)) !== null && _readHeader !== void 0 ? _readHeader : DEFAULT_STATS$1;
		const answered = text.split("\n").map((line) => readHop$2(line, stats)).filter((hop) => hop !== void 0);
		if (answered.length === 0) throw new Error("The result has no hops");
		const byTtl = new Map(answered.map((hop) => [hop.ttl, hop]));
		const lastTtl = Math.max(...byTtl.keys());
		const hops = [];
		for (let ttl = 1; ttl <= lastTtl; ttl += 1) {
			var _byTtl$get;
			hops.push((_byTtl$get = byTtl.get(ttl)) !== null && _byTtl$get !== void 0 ? _byTtl$get : {
				ttl,
				hosts: [],
				lossPct: 100
			});
		}
		const target = readTarget$4(title, url);
		return title.probe === void 0 ? {
			target,
			hops
		} : {
			target,
			probe: title.probe,
			hops
		};
	}
	var site$4 = {
		id: "mtr-tools",
		name: "MTR.tools",
		matches: ["*://mtr.tools/*"]
	};
	var mtr_tools_exports = __exportAll({
		site: () => site$4,
		start: () => start$4
	});
	var REPORT = "pre";
	var ACTION = "px-3 py-1 text-sm bg-blue-600 hover:bg-blue-500 rounded transition-colors";
	function placeButton$1(result, button) {
		var _actionsRow;
		(_actionsRow = actionsRow(result)) === null || _actionsRow === void 0 || _actionsRow.prepend(button);
	}
	function start$4() {
		watchElements(REPORT, (report) => {
			const result = resultBlock$3(report);
			if (!result || !isFinished(result)) return;
			mountOpenButton(result, () => readResult$1(result, new URL(location.href)), (button) => placeButton$1(result, button), {
				className: ACTION,
				css: button_default$4
			});
		});
	}
	var button_default$3 = "[data-xmtr-helper]>button{all:unset;box-sizing:border-box;color:#f0f0f0;font:400 13px Roboto Mono,Consolas,Courier New,Courier,monospace;line-height:inherit;cursor:pointer;align-items:baseline;display:inline-flex}[data-xmtr-helper]>button:before,[data-xmtr-helper]>button:after{color:gray}[data-xmtr-helper]>button:before{content:\"[\"}[data-xmtr-helper]>button:after{content:\"]\"}[data-xmtr-helper]>button>span{text-decoration:underline}[data-xmtr-helper]>button>svg{width:1.15em;height:1.15em;margin:0 .35em 0 .2em}[data-xmtr-helper]>button:focus-visible{outline-offset:2px;outline:2px solid #30e050}[data-xmtr-helper]>button[data-state=failed]{color:#f0e0e0;background:#600000;border:1px solid #703030;border-radius:3px;padding:0 4px}[data-xmtr-helper]>button[data-state=failed]:before,[data-xmtr-helper]>button[data-state=failed]:after{color:#f0e0e0}.mtr-report-actions [data-xmtr-helper],.mtr-report-actions [data-xmtr-helper]>button{display:inline}.mtr-report-actions [data-xmtr-helper]>button>svg{display:none}.xmtr-helper-actions{padding:3px 0 6px;line-height:21px}";
	var METADATA_SELECTOR = "#snapshot-metadata";
	var TARGET_SELECTOR = "[data-target-host-resolved], [data-target-host]";
	var REPORT_SELECTOR = "pre, [class*=\"mtr_report\"]";
	var PROBE_ROW_SELECTOR = "tr[data-pinger-id]";
	var TTL_PATTERN = /^\s*(\d+)\.?(?:\|--)?\s+/;
	var AS_HREF_PATTERN = /\/AS\d+$/;
	var NO_REPLY$2 = /^(?:\?{2,}|\*+|-{1,2}|N\/A|timeout|unknown|无响应|请求超时|超时)(?=\s|$)/i;
	var HOSTNAME = /^[A-Za-z][A-Za-z0-9._-]*$/;
	var PENDING = /^(?:Loading|collecting data|Tracing|Running|please wait|检测中|正在)/i;
	var COLUMN_NAMES = {
		loss: "lossPct",
		lost: "lossPct",
		丢包: "lossPct",
		丢包率: "lossPct",
		snt: "sent",
		sent: "sent",
		发送: "sent",
		last: "lastMs",
		最近: "lastMs",
		avg: "avgMs",
		平均: "avgMs",
		best: "bestMs",
		min: "bestMs",
		最小: "bestMs",
		最快: "bestMs",
		wrst: "worstMs",
		worst: "worstMs",
		max: "worstMs",
		最大: "worstMs",
		最慢: "worstMs",
		stdev: "stdevMs",
		标准差: "stdevMs"
	};
	var DEFAULT_COLUMNS = [
		"lossPct",
		"sent",
		"lastMs",
		"avgMs",
		"bestMs",
		"worstMs",
		"stdevMs"
	];
	function splitLines(root) {
		const lines = [];
		let line = [];
		let offset = 0;
		const push = (text, element) => {
			if (text.length === 0) return;
			line.push({
				text,
				start: offset,
				element
			});
			offset += text.length;
		};
		const flush = () => {
			if (line.length > 0) lines.push(line);
			line = [];
			offset = 0;
		};
		for (const node of root.childNodes) {
			var _node$textContent2;
			if (node.nodeType === Node.TEXT_NODE) {
				var _node$textContent;
				const parts = ((_node$textContent = node.textContent) !== null && _node$textContent !== void 0 ? _node$textContent : "").split("\n");
				for (const [index, part] of parts.entries()) {
					if (index > 0) flush();
					push(part, null);
				}
				continue;
			}
			if (!(node instanceof Element)) continue;
			if (node.localName === "br") {
				flush();
				continue;
			}
			push((_node$textContent2 = node.textContent) !== null && _node$textContent2 !== void 0 ? _node$textContent2 : "", node);
		}
		flush();
		return lines;
	}
	function lineContainer(element) {
		let current = element;
		for (;;) {
			var _only$textContent, _current$textContent;
			const only = current.children[0];
			const text = (_only$textContent = only === null || only === void 0 ? void 0 : only.textContent) !== null && _only$textContent !== void 0 ? _only$textContent : "";
			if (current.children.length !== 1 || !only || !text.includes("\n")) return current;
			if (text !== ((_current$textContent = current.textContent) !== null && _current$textContent !== void 0 ? _current$textContent : "")) return current;
			current = only;
		}
	}
	function isMtrText(text) {
		return text.split("\n").some((line) => isHeaderLine(line));
	}
	function reportElement(block) {
		for (const candidate of block.querySelectorAll(REPORT_SELECTOR)) {
			var _lineContainer$textCo;
			if (isMtrText((_lineContainer$textCo = lineContainer(candidate).textContent) !== null && _lineContainer$textCo !== void 0 ? _lineContainer$textCo : "")) return candidate;
		}
		return null;
	}
	function reportRoot(block) {
		const element = reportElement(block);
		return element ? lineContainer(element) : null;
	}
	function columnOf(token) {
		return COLUMN_NAMES[token.toLowerCase().replace(/%/g, "")];
	}
	function isHeaderLine(line) {
		return readColumns(line).length >= 2;
	}
	function readColumns(line) {
		const columns = [];
		let started = false;
		for (const token of line.trim().split(/\s+/)) {
			const column = columnOf(token);
			if (column !== void 0) {
				columns.push(column);
				started = true;
				continue;
			}
			if (started) break;
		}
		return columns;
	}
	function readStats(text, start, columns) {
		const tokens = text.slice(start).trim().split(/\s+/).filter((token) => token.length > 0);
		const stats = {};
		columns.forEach((column, index) => {
			const value = parseNumber(tokens[index]);
			if (value !== void 0) stats[column] = value;
		});
		return stats;
	}
	function hostsOf(value) {
		const pair = /^(.+?)\s+\(([^)]+)\)$/.exec(value);
		if ((pair === null || pair === void 0 ? void 0 : pair[1]) !== void 0 && pair[2] !== void 0) {
			const ip = normalizeIp(pair[2]);
			if (ip) return [{
				ip,
				hostname: pair[1]
			}];
		}
		const ip = normalizeIp(value);
		if (ip) return [{ ip }];
		return HOSTNAME.test(value) ? [{ hostname: value }] : [];
	}
	function readHost(parts, text, start) {
		var _exec;
		const rest = text.slice(start);
		const trimmed = rest.trimStart();
		const marker = NO_REPLY$2.exec(trimmed);
		if (marker) return {
			hosts: [],
			end: start + rest.length - trimmed.length + marker[0].length
		};
		const linked = parts.find((part) => {
			var _part$element, _part$element$getAttr;
			return part.start >= start && ((_part$element = part.element) === null || _part$element === void 0 ? void 0 : _part$element.localName) === "a" && !AS_HREF_PATTERN.test((_part$element$getAttr = part.element.getAttribute("href")) !== null && _part$element$getAttr !== void 0 ? _part$element$getAttr : "");
		});
		if (linked) return {
			hosts: hostsOf(linked.text.trim()),
			end: linked.start + linked.text.length
		};
		const pair = /^\S+\s+\([^)]+\)/.exec(trimmed);
		if ((pair === null || pair === void 0 ? void 0 : pair[0]) !== void 0) {
			const hosts = hostsOf(pair[0]);
			if (hosts.length > 0) return {
				hosts,
				end: start + rest.length - trimmed.length + pair[0].length
			};
		}
		const token = (_exec = /^(\[[^\]]+\]|\S+)/.exec(trimmed)) === null || _exec === void 0 ? void 0 : _exec[1];
		if (token === void 0) return null;
		return {
			hosts: hostsOf(token),
			end: start + rest.length - trimmed.length + token.length
		};
	}
	function readHostname(parts) {
		for (let index = parts.length - 1; index >= 0; index -= 1) {
			var _part$element2, _part$element$getAttr2;
			const part = parts[index];
			if ((part === null || part === void 0 || (_part$element2 = part.element) === null || _part$element2 === void 0 ? void 0 : _part$element2.localName) !== "span") continue;
			const title = (_part$element$getAttr2 = part.element.getAttribute("title")) === null || _part$element$getAttr2 === void 0 ? void 0 : _part$element$getAttr2.trim();
			if (title) return title;
			const text = part.text.trim();
			return text.length > 0 && !text.endsWith("...") && !text.endsWith("…") ? text : void 0;
		}
	}
	function readAsn(parts) {
		for (const part of parts) {
			var _part$element3, _part$element4;
			const href = (_part$element3 = part.element) === null || _part$element3 === void 0 ? void 0 : _part$element3.getAttribute("href");
			if (((_part$element4 = part.element) === null || _part$element4 === void 0 ? void 0 : _part$element4.localName) === "a" && href && AS_HREF_PATTERN.test(href)) return parseAsn(part.text);
		}
	}
	function readHop$1(parts, columns) {
		const text = parts.map((part) => part.text).join("");
		const head = TTL_PATTERN.exec(text);
		if ((head === null || head === void 0 ? void 0 : head[1]) === void 0) return null;
		const ttl = Number(head[1]);
		if (ttl === 0) return null;
		const host = readHost(parts, text, head[0].length);
		if (!host) return null;
		const hostname = readHostname(parts);
		const asn = readAsn(parts);
		const hop = {
			ttl,
			hosts: host.hosts.map((entry) => {
				var _entry$hostname, _entry$asn;
				const hostnameToUse = (_entry$hostname = entry.hostname) !== null && _entry$hostname !== void 0 ? _entry$hostname : hostname !== void 0 && hostname !== entry.ip ? hostname : void 0;
				const asnToUse = (_entry$asn = entry.asn) !== null && _entry$asn !== void 0 ? _entry$asn : asn;
				return _objectSpread2(_objectSpread2(_objectSpread2({}, entry), hostnameToUse === void 0 ? {} : { hostname: hostnameToUse }), asnToUse === void 0 ? {} : { asn: asnToUse });
			})
		};
		const stats = readStats(text, host.end, columns);
		if (stats.sent !== void 0) hop.sent = stats.sent;
		if (stats.lossPct !== void 0) hop.lossPct = stats.lossPct;
		if (stats.lastMs !== void 0) hop.lastMs = stats.lastMs;
		if (stats.avgMs !== void 0) hop.avgMs = stats.avgMs;
		if (stats.bestMs !== void 0) hop.bestMs = stats.bestMs;
		if (stats.worstMs !== void 0) hop.worstMs = stats.worstMs;
		if (stats.stdevMs !== void 0) hop.stdevMs = stats.stdevMs;
		return hop;
	}
	function readTarget$3(root, url) {
		var _root$querySelector, _metadata$getAttribut;
		const metadata = (_root$querySelector = root.querySelector(METADATA_SELECTOR)) !== null && _root$querySelector !== void 0 ? _root$querySelector : root.querySelector(TARGET_SELECTOR);
		const target = (_metadata$getAttribut = metadata === null || metadata === void 0 ? void 0 : metadata.getAttribute("data-target-host-resolved")) !== null && _metadata$getAttribut !== void 0 ? _metadata$getAttribut : metadata === null || metadata === void 0 ? void 0 : metadata.getAttribute("data-target-host");
		if (target === null || target === void 0 ? void 0 : target.trim()) return target.trim();
		const fromQuery = targetFromUrl(url);
		if (fromQuery) return fromQuery;
		const field = root.querySelector("#targetInput, input[name=\"target\"], input[name=\"host\"], #host");
		if (field instanceof HTMLInputElement && field.value.trim().length > 0) return field.value.trim();
		throw new Error("The page shows no trace target");
	}
	function targetFromUrl(href) {
		var _url$searchParams$get;
		if (href === void 0) return void 0;
		const url = new URL(href);
		const query = (_url$searchParams$get = url.searchParams.get("target")) !== null && _url$searchParams$get !== void 0 ? _url$searchParams$get : url.searchParams.get("host");
		if (query) return query;
		const segments = url.pathname.split("/").filter((segment) => segment.length > 0);
		const last = segments[segments.length - 1];
		if (last === void 0) return void 0;
		const value = decodeURIComponent(last);
		return /[.:]/.test(value) && !/\s/.test(value) ? value : void 0;
	}
	function probeRow(block) {
		const pingerId = block.getAttribute("data-pinger-id");
		if (!pingerId) return null;
		for (const row of block.ownerDocument.querySelectorAll(PROBE_ROW_SELECTOR)) if (row.getAttribute("data-pinger-id") === pingerId) return row;
		return null;
	}
	function readProbe$3(block) {
		var _row$getAttribute$tri, _row$getAttribute, _block$getAttribute, _row$getAttribute$tri2, _row$getAttribute2, _block$getAttribute2;
		const row = probeRow(block);
		const parts = [(_row$getAttribute$tri = row === null || row === void 0 || (_row$getAttribute = row.getAttribute("data-location")) === null || _row$getAttribute === void 0 ? void 0 : _row$getAttribute.trim()) !== null && _row$getAttribute$tri !== void 0 ? _row$getAttribute$tri : (_block$getAttribute = block.getAttribute("data-location")) === null || _block$getAttribute === void 0 ? void 0 : _block$getAttribute.trim(), (_row$getAttribute$tri2 = row === null || row === void 0 || (_row$getAttribute2 = row.getAttribute("data-provider")) === null || _row$getAttribute2 === void 0 ? void 0 : _row$getAttribute2.trim()) !== null && _row$getAttribute$tri2 !== void 0 ? _row$getAttribute$tri2 : (_block$getAttribute2 = block.getAttribute("data-provider")) === null || _block$getAttribute2 === void 0 ? void 0 : _block$getAttribute2.trim()].filter((part) => part !== void 0 && part.length > 0);
		return parts.length > 0 ? parts.join(", ") : void 0;
	}
	function isReportReady(block) {
		var _root$textContent;
		const root = reportRoot(block);
		if (!root) return false;
		const text = ((_root$textContent = root.textContent) !== null && _root$textContent !== void 0 ? _root$textContent : "").trim();
		if (text.length === 0 || PENDING.test(text)) return false;
		return splitLines(root).some((line) => {
			const head = TTL_PATTERN.exec(line.map((part) => part.text).join(""));
			return (head === null || head === void 0 ? void 0 : head[1]) !== void 0 && Number(head[1]) > 0;
		});
	}
	function resultBlock$2(element) {
		return element.closest("tr, [data-pinger-id], li, article");
	}
	function readHops$1(block) {
		const root = reportRoot(block);
		if (!root) throw new Error("The result holds no MTR report");
		const hops = [];
		let columns = DEFAULT_COLUMNS;
		for (const line of splitLines(root)) {
			const text = line.map((part) => part.text).join("");
			if (isHeaderLine(text)) {
				columns = readColumns(text);
				continue;
			}
			const hop = readHop$1(line, columns);
			if (hop) hops.push(hop);
		}
		if (hops.length === 0) throw new Error("The MTR report holds no hops");
		return hops;
	}
	function readTrace$2(block) {
		var _block$ownerDocument$;
		const probe = readProbe$3(block);
		return _objectSpread2(_objectSpread2({ target: readTarget$3(block.ownerDocument, (_block$ownerDocument$ = block.ownerDocument.location) === null || _block$ownerDocument$ === void 0 ? void 0 : _block$ownerDocument$.href) }, probe === void 0 ? {} : { probe }), {}, { hops: readHops$1(block) });
	}
	var site$3 = {
		id: "ping-pe",
		name: "ping.pe",
		matches: ["*://ping.pe/*", "*://*.ping.pe/*"]
	};
	var ping_pe_exports = __exportAll({
		site: () => site$3,
		start: () => start$3
	});
	var SITE_ACTIONS = ".mtr-report-actions";
	var ACTIONS_CLASS = "xmtr-helper-actions";
	var APPEARANCE = { css: button_default$3 };
	function actionsFor(block) {
		const added = block.querySelector("." + ACTIONS_CLASS);
		if (added) return added;
		const report = reportElement(block);
		if (!report) return null;
		const actions = block.ownerDocument.createElement("div");
		actions.className = ACTIONS_CLASS;
		report.before(actions);
		return actions;
	}
	function start$3() {
		watchElements("pre, [class*=\"mtr_report\"]", (report) => {
			const block = resultBlock$2(report);
			if (!block) return;
			mountOpenButton(block, () => readTrace$2(block), (button) => {
				var _actionsFor;
				if (!isReportReady(block)) return;
				const siteActions = block.querySelector(SITE_ACTIONS);
				if (siteActions) {
					siteActions.append(" ", button);
					return;
				}
				(_actionsFor = actionsFor(block)) === null || _actionsFor === void 0 || _actionsFor.append(button);
			}, APPEARANCE);
		});
	}
	var button_default$2 = "[data-xmtr-helper]>button>svg{width:12px;height:12px;margin-right:0}[data-xmtr-helper]>button>svg[data-icon=inline-start]{width:16px;height:16px}[data-xmtr-helper]>button[data-state=failed]{border-color:var(--destructive);color:var(--destructive)}";
	var NO_REPLY$1 = new Set([
		"",
		"*",
		"-",
		"--",
		"—",
		"–",
		"???",
		"?",
		"n/a",
		"na",
		"timeout",
		"unknown",
		"请求超时",
		"超时"
	]);
	var RUNNING$1 = /(tracing|running|pending|queued|detecting|检测中|追踪中|进行中|请稍候)/i;
	var STATUS = /^(complete|completed|finished|done|tracing|running|pending|queued|incomplete|failed|failure|error|完成|检测中|追踪中|进行中|失败|错误|超时)$/i;
	var FIXED = {
		hop: 0,
		host: 1,
		loss: 3,
		sent: 4,
		last: 5,
		avg: 6,
		best: 7,
		worst: 8,
		stdev: 9
	};
	var HEADERS$1 = [
		["stdev", /^(st\s*dev|std\s*dev|stddev|标准差)/i],
		["loss", /^(loss|丢包)/i],
		["sent", /^(sent|snt|发送)/i],
		["last", /^(last|最近)/i],
		["avg", /^(avg|average|平均)/i],
		["best", /^(best|min|最快|最小)/i],
		["worst", /^(worst|wrst|max|最慢|最大)/i],
		["host", /^(ip|host|address|地址|主机)/i],
		["hop", /^(hop|ttl|#|跳数|序号)/i]
	];
	function isNoReply$1(text) {
		return NO_REPLY$1.has(text.trim().toLowerCase());
	}
	function hostWithName(ip, name) {
		const hostname = name.trim();
		return hostname !== "" && normalizeIp(hostname) === void 0 ? {
			ip,
			hostname
		} : { ip };
	}
	function parseHost(text) {
		const value = text.trim();
		if (isNoReply$1(value)) return void 0;
		const address = normalizeIp(value);
		if (address) return { ip: address };
		const grouped = /^(.*?)\s*\(([^()]*)\)$/.exec(value);
		if (grouped) {
			const [, before = "", inside = ""] = grouped;
			const inner = normalizeIp(inside);
			if (inner) return hostWithName(inner, before);
			const outer = normalizeIp(before);
			if (outer) return hostWithName(outer, inside);
		}
		const words = value.split(/\s+/).filter(Boolean);
		const index = words.findIndex((word) => normalizeIp(word) !== void 0);
		const word = words[index];
		if (word !== void 0) {
			const ip = normalizeIp(word);
			if (ip) return hostWithName(ip, words.filter((_, position) => position !== index).join(" "));
		}
		return { hostname: value };
	}
	function hopNumber(text) {
		const match = /^(\d+)$/.exec(text.trim());
		const digits = match === null || match === void 0 ? void 0 : match[1];
		return digits === void 0 ? void 0 : Number(digits);
	}
	function headerColumns(table) {
		const headers = [...table.querySelectorAll("thead th")].map((header) => cellText(header));
		if (headers.length === 0) return void 0;
		const columns = {};
		headers.forEach((text, index) => {
			for (const [name, pattern] of HEADERS$1) if (columns[name] === void 0 && pattern.test(text)) {
				columns[name] = index;
				break;
			}
		});
		return columns.hop === void 0 || columns.loss === void 0 ? void 0 : columns;
	}
	function isMtrTable(table) {
		var _cells$;
		if (headerColumns(table)) return true;
		if (table.querySelector("thead th")) return false;
		const row = table.querySelector("tbody tr");
		if (!row) return false;
		const cells = [...row.querySelectorAll("td")].map((cell) => cellText(cell));
		return cells.length >= 6 && hopNumber((_cells$ = cells[0]) !== null && _cells$ !== void 0 ? _cells$ : "") !== void 0;
	}
	function resultTable(block) {
		return [...block.querySelectorAll("table")].find((table) => isMtrTable(table));
	}
	function headingOf(block) {
		var _ref, _badge$parentElement$, _badge$parentElement;
		const heading = block.querySelector(".mtr-heading");
		if (heading) return heading;
		const badge = statusBadge(block);
		if (badge) return (_ref = (_badge$parentElement$ = (_badge$parentElement = badge.parentElement) === null || _badge$parentElement === void 0 ? void 0 : _badge$parentElement.parentElement) !== null && _badge$parentElement$ !== void 0 ? _badge$parentElement$ : badge.parentElement) !== null && _ref !== void 0 ? _ref : void 0;
	}
	function statusBadge(block) {
		const explicit = block.querySelector("[data-slot*=\"badge\"], [class*=\"badge\"]");
		if (explicit) return explicit;
		return [...block.querySelectorAll("span, div")].find((element) => element.children.length === 0 && STATUS.test(cellText(element)));
	}
	function resultBlock$1(table) {
		var _table$parentElement;
		const explicit = table.closest(".mtr-result, [class*=\"mtr-result\"]");
		if (explicit) return explicit;
		let current = table.parentElement;
		while (current && current !== document.body) {
			if (current.querySelector("[data-slot*=\"badge\"], [class*=\"badge\"]")) return current;
			current = current.parentElement;
		}
		return (_table$parentElement = table.parentElement) !== null && _table$parentElement !== void 0 ? _table$parentElement : table;
	}
	function resultStatus(result) {
		return cellText(statusBadge(result));
	}
	function isRunning$1(result) {
		if (result.querySelector("[role=\"status\"], [class*=\"spinner\"], [class*=\"animate-spin\"]")) return true;
		const status = resultStatus(result);
		if (status !== "" && RUNNING$1.test(status)) return true;
		const heading = headingOf(result);
		return heading !== void 0 && RUNNING$1.test(cellText(heading));
	}
	function isComplete(result) {
		var _headerColumns;
		const table = resultTable(result);
		return table !== void 0 && !isRunning$1(result) && readHops(table, (_headerColumns = headerColumns(table)) !== null && _headerColumns !== void 0 ? _headerColumns : FIXED).length > 0;
	}
	function readHosts(cell) {
		if (!cell) return [];
		const leaves = [...cell.querySelectorAll("span")].filter((span) => span.querySelector("span") === null && !span.hasAttribute("aria-hidden"));
		const texts = (leaves.length > 0 ? leaves : [cell]).map((element) => cellText(element)).filter((text) => text !== "");
		const addresses = [];
		let hostname;
		for (const text of texts) {
			const host = parseHost(text);
			if (!host) continue;
			if (host.ip !== void 0) {
				addresses.push(host.ip);
				if (host.hostname !== void 0 && hostname === void 0) hostname = host.hostname;
			} else if (hostname === void 0) hostname = host.hostname;
		}
		if (addresses.length > 0) return addresses.map((ip) => hostname === void 0 ? { ip } : {
			ip,
			hostname
		});
		return hostname === void 0 ? [] : [{ hostname }];
	}
	function readHop(row, columns) {
		const cells = [...row.querySelectorAll("td")];
		const cell = (index) => index === void 0 ? void 0 : cells[index];
		const number = (index) => parseNumber(cellText(cell(index)));
		const position = hopNumber(cellText(cell(columns.hop)));
		if (position === void 0) return void 0;
		const hop = {
			ttl: position + 1,
			hosts: readHosts(cell(columns.host))
		};
		const lossPct = number(columns.loss);
		const sent = number(columns.sent);
		const lastMs = number(columns.last);
		const avgMs = number(columns.avg);
		const bestMs = number(columns.best);
		const worstMs = number(columns.worst);
		const stdevMs = number(columns.stdev);
		if (lossPct !== void 0) hop.lossPct = lossPct;
		if (sent !== void 0) hop.sent = sent;
		if (lastMs !== void 0) hop.lastMs = lastMs;
		if (avgMs !== void 0) hop.avgMs = avgMs;
		if (bestMs !== void 0) hop.bestMs = bestMs;
		if (worstMs !== void 0) hop.worstMs = worstMs;
		if (stdevMs !== void 0) hop.stdevMs = stdevMs;
		return hop;
	}
	function readHops(table, columns) {
		return [...table.querySelectorAll("tbody tr")].map((row) => readHop(row, columns)).filter((hop) => hop !== void 0);
	}
	function readTarget$2(result, url) {
		var _ref2, _url$searchParams$get;
		const heading = headingOf(result);
		if (heading) {
			const found = [...heading.querySelectorAll("span, a, code, strong, b")].map((element) => cellText(element)).find((text) => looksLikeTarget(text));
			if (found !== void 0) return found;
		}
		const query = (_ref2 = (_url$searchParams$get = url === null || url === void 0 ? void 0 : url.searchParams.get("t")) !== null && _url$searchParams$get !== void 0 ? _url$searchParams$get : url === null || url === void 0 ? void 0 : url.searchParams.get("target")) !== null && _ref2 !== void 0 ? _ref2 : url === null || url === void 0 ? void 0 : url.searchParams.get("host");
		if (query) return query;
		const input = document.querySelector("#target, input[name=\"target\"], input[name=\"host\"], input[type=\"search\"], input[type=\"text\"]");
		const value = input instanceof HTMLInputElement ? input.value.trim() : "";
		if (value !== "") return value;
		throw new Error("The result shows no target address");
	}
	function looksLikeTarget(text) {
		if (normalizeIp(text) !== void 0) return true;
		return /^[a-z0-9][a-z0-9-]*(\.[a-z0-9-]+)+$/i.test(text);
	}
	function readProbe$2(result) {
		const heading = headingOf(result);
		if (!heading) return void 0;
		const info = [...heading.children].find((child) => child.querySelector("img, a[href]") !== null);
		const location = info === null || info === void 0 ? void 0 : info.querySelector("span");
		const names = location ? [...location.querySelectorAll("span")].map((span) => cellText(span)).filter(Boolean) : [];
		const city = names[0];
		if (city === void 0) return void 0;
		const details = [cellText(info === null || info === void 0 ? void 0 : info.querySelector("a")), ...names.slice(1)].filter(Boolean);
		return details.length > 0 ? `${city} (${details.join(", ")})` : city;
	}
	function readResult(result, url) {
		var _headerColumns2;
		const table = resultTable(result);
		if (!table) throw new Error("The result has no MTR table");
		if (isRunning$1(result)) {
			const status = resultStatus(result);
			throw new Error(`The probe has not finished (status: ${status || "unknown"})`);
		}
		const hops = readHops(table, (_headerColumns2 = headerColumns(table)) !== null && _headerColumns2 !== void 0 ? _headerColumns2 : FIXED);
		if (hops.length === 0) throw new Error("The result has no hops");
		const probe = readProbe$2(result);
		const target = readTarget$2(result, url);
		return probe === void 0 ? {
			target,
			hops
		} : {
			target,
			probe,
			hops
		};
	}
	var site$2 = {
		id: "ping-sx",
		name: "ping.sx MTR",
		matches: ["*://ping.sx/*"]
	};
	var ping_sx_exports = __exportAll({
		site: () => site$2,
		start: () => start$2
	});
	var PILL = [
		"inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-none border py-0.5 px-2",
		"font-mono text-[0.6875rem] font-medium tracking-[0.02em] whitespace-nowrap transition-all",
		"outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
		"border-primary/50 bg-transparent text-primary hover:border-primary hover:bg-accent",
		"hover:text-accent-foreground h-5"
	].join(" ");
	function placeButton(result, button) {
		var _badge$parentElement;
		const badge = result.querySelector("[data-slot*=\"badge\"], [class*=\"badge\"]");
		const statusRow = (_badge$parentElement = badge === null || badge === void 0 ? void 0 : badge.parentElement) !== null && _badge$parentElement !== void 0 ? _badge$parentElement : headingOf(result);
		(statusRow !== null && statusRow !== void 0 ? statusRow : result).append(button);
	}
	function shareButtonOf(page) {
		for (const button of page.querySelectorAll("button, a[role=\"button\"]")) {
			var _button$textContent;
			if (/^\s*share(?:\s+report)?\s*$/i.test((_button$textContent = button.textContent) !== null && _button$textContent !== void 0 ? _button$textContent : "")) return button;
		}
	}
	function start$2() {
		watchElements("table", (table) => {
			if (!isMtrTable(table)) return;
			const result = resultBlock$1(table);
			if (!isComplete(result)) return;
			const read = () => readResult(result, new URL(location.href));
			mountOpenButton(result, read, (button) => placeButton(result, button), {
				className: PILL,
				css: button_default$2
			});
			const share = shareButtonOf(result.ownerDocument);
			if (share) {
				const place = (button) => {
					var _button$querySelector;
					(_button$querySelector = button.querySelector("svg")) === null || _button$querySelector === void 0 || _button$querySelector.setAttribute("data-icon", "inline-start");
					share.after(button);
				};
				mountOpenButton(share, read, place, {
					className: share.className,
					css: button_default$2
				});
			}
		});
	}
	var button_default$1 = "[data-xmtr-helper]>button{margin:8px 16px 16px}[data-xmtr-helper]>button>svg{width:19px;height:19px;margin-right:8px}[data-xmtr-helper]>button[data-state=failed]{background-color:#f55656}[data-xmtr-helper]>button[data-state=failed]:hover,[data-xmtr-helper]>button[data-state=failed]:focus{background-color:#f77d7d}";
	var HEADERS = [
		["lossPct", /^(loss|loss%|丢包)/i],
		["sent", /^(snt|sent|发送)/i],
		["lastMs", /^(last|最近)/i],
		["avgMs", /^(avg|average|平均)/i],
		["bestMs", /^(best|min|最小|最快)/i],
		["worstMs", /^(wrst|worst|max|最大|最慢)/i],
		["stdevMs", /^(stdev|std\s*dev|标准差)/i]
	];
	var DEFAULT_STATS = [
		"lossPct",
		"sent",
		"lastMs",
		"avgMs",
		"bestMs",
		"worstMs",
		"stdevMs"
	];
	var NO_REPLY = new Set([
		"",
		"*",
		"-",
		"--",
		"—",
		"–",
		"???",
		"?",
		"n/a",
		"na",
		"timeout",
		"unknown",
		"请求超时",
		"超时"
	]);
	var NUMBER = /^[<>=~]?\d[\d.,]*%?$/;
	var RUNNING = /(running|loading|tracing|please wait|in progress|检测中|请稍候)/i;
	var MTR_HEADER = /^\s*HOST:?\s/;
	var MTR_HOP = /^\s*(\d+)\.\|--\s+(\S+)\s*(.*)$/;
	var TRACEROUTE_HEADER = /^traceroute6?\s+to\s+(\S+)(?:\s+\(([^)]+)\))?/;
	var TRACEROUTE_HOP = /^(\d+)\s+(.+)$/;
	var AS_TAG = /^\[AS(\d+)\]$/i;
	var ANNOTATION = /^![A-Z]+$/;
	var MPLS = /^\[MPLS:/i;
	function isNoReply(text) {
		return NO_REPLY.has(text.trim().toLowerCase());
	}
	function resultText(element) {
		var _node$textContent;
		let text = "";
		for (const node of element.childNodes) text += node.nodeName === "BR" ? "\n" : (_node$textContent = node.textContent) !== null && _node$textContent !== void 0 ? _node$textContent : "";
		return text;
	}
	function resultLines(element) {
		return resultText(element).split("\n").map((line) => line.replace(/\s+/g, " ").trim()).filter((line) => line.length > 0);
	}
	function resultBlock(element) {
		const explicit = element.closest("#results");
		if (explicit) return explicit;
		let current = element.parentElement;
		while (current && current !== document.body) {
			if (current.querySelector("#command, pre") !== null) return current;
			current = current.parentElement;
		}
	}
	function resultElement(block) {
		var _ref, _block$querySelector;
		return (_ref = (_block$querySelector = block.querySelector("#response")) !== null && _block$querySelector !== void 0 ? _block$querySelector : block.querySelector("pre")) !== null && _ref !== void 0 ? _ref : void 0;
	}
	function commandText(block) {
		var _block$querySelector2;
		const command = (_block$querySelector2 = block.querySelector("#command")) !== null && _block$querySelector2 !== void 0 ? _block$querySelector2 : block.querySelector("[id*=\"command\"]");
		const legend = block.querySelector("#cli-legend");
		return (cellText(command) || cellText(legend)).replace(/^\$\s*/, "");
	}
	function readRoute(block) {
		var _TRACEROUTE_HEADER$ex;
		const [tool, ...args] = commandText(block).split(/\s+/).filter(Boolean);
		let target;
		for (let position = args.length - 1; position >= 0; position -= 1) {
			const arg = args[position];
			if (arg !== void 0 && !arg.startsWith("-")) {
				target = arg;
				break;
			}
		}
		if (tool === "mtr" || tool === "mtr6") return {
			tool: "mtr",
			target
		};
		if (tool === "traceroute" || tool === "traceroute6" || tool === "tcptraceroute") return {
			tool: "traceroute",
			target
		};
		if (tool !== void 0) return void 0;
		const result = resultElement(block);
		if (!result) return void 0;
		const header = resultLines(result).find((line) => TRACEROUTE_HEADER.test(line));
		if (header) return {
			tool: "traceroute",
			target: (_TRACEROUTE_HEADER$ex = TRACEROUTE_HEADER.exec(header)) === null || _TRACEROUTE_HEADER$ex === void 0 ? void 0 : _TRACEROUTE_HEADER$ex[2]
		};
		if (resultText(result).split("\n").some((line) => MTR_HEADER.test(line))) return { tool: "mtr" };
	}
	function readProbe$1(select) {
		var _ref2, _select$querySelector, _option$getAttribute;
		const option = (_ref2 = (_select$querySelector = select === null || select === void 0 ? void 0 : select.querySelector("option[selected]")) !== null && _select$querySelector !== void 0 ? _select$querySelector : select === null || select === void 0 ? void 0 : select.querySelector("option:checked")) !== null && _ref2 !== void 0 ? _ref2 : select === null || select === void 0 ? void 0 : select.querySelector("option");
		const name = cellText(option);
		if (!name) return void 0;
		const country = (_option$getAttribute = option === null || option === void 0 ? void 0 : option.getAttribute("data-country")) !== null && _option$getAttribute !== void 0 ? _option$getAttribute : option === null || option === void 0 ? void 0 : option.getAttribute("data-country-code");
		return country ? `${name}, ${country.toUpperCase()}` : name;
	}
	function readHeader(text) {
		const line = text.split("\n").find((candidate) => MTR_HEADER.test(candidate));
		if (!line) return void 0;
		const names = [];
		for (const token of line.trim().split(/\s+/).slice(1)) for (const [name, pattern] of HEADERS) if (pattern.test(token)) {
			names.push(name);
			break;
		}
		return names.length > 0 ? names : void 0;
	}
	function mtrHosts(text) {
		const value = text.trim();
		if (isNoReply(value)) return [];
		const address = normalizeIp(value);
		if (address) return [{ ip: address }];
		return [{ hostname: value }];
	}
	function readMtrHop(line, stats) {
		const parsed = MTR_HOP.exec(line);
		const [, index, hostText, rest = ""] = parsed !== null && parsed !== void 0 ? parsed : [];
		if (index === void 0 || hostText === void 0) return void 0;
		const tokens = rest.split(/\s+/).filter(Boolean);
		const hop = {
			ttl: Number(index),
			hosts: mtrHosts(hostText)
		};
		for (let position = 0; position < stats.length; position += 1) {
			const token = tokens[position];
			const name = stats[position];
			if (token === void 0 || name === void 0) break;
			if (!NUMBER.test(token) && !isNoReply(token)) break;
			const value = parseNumber(token);
			if (value !== void 0) hop[name] = value;
		}
		return hop;
	}
	function readTracerouteHop(line) {
		const match = TRACEROUTE_HOP.exec(line);
		const field = match === null || match === void 0 ? void 0 : match[2];
		if (!match || field === void 0) throw new Error(`Not a traceroute line: ${line}`);
		const tokens = field.split(/\s+/).filter(Boolean);
		const hosts = [];
		const times = [];
		let probes = 0;
		let answered = 0;
		let index = 0;
		while (index < tokens.length) {
			var _tokens$index;
			const token = (_tokens$index = tokens[index]) !== null && _tokens$index !== void 0 ? _tokens$index : "";
			if (token === "*") {
				probes += 1;
				index += 1;
				continue;
			}
			const asTag = AS_TAG.exec(token);
			if (asTag === null || asTag === void 0 ? void 0 : asTag[1]) {
				const host = hosts[hosts.length - 1];
				if (host) host.asn = Number(asTag[1]);
				index += 1;
				continue;
			}
			if (ANNOTATION.test(token) || MPLS.test(token)) {
				index += 1;
				continue;
			}
			if (tokens[index + 1] === "ms") {
				const ms = parseNumber(token);
				if (ms !== void 0) {
					probes += 1;
					answered += 1;
					times.push(ms);
					index += 2;
					continue;
				}
			}
			const following = tokens[index + 1];
			if (following !== void 0 && following.startsWith("(") && following.endsWith(")")) {
				const ip = normalizeIp(following.slice(1, -1));
				if (!ip) throw new Error(`Unrecognised traceroute address: ${line}`);
				if (!hosts.some((host) => host.ip === ip)) {
					const name = token.trim();
					hosts.push(normalizeIp(name) === void 0 ? {
						ip,
						hostname: name
					} : { ip });
				}
				index += 2;
				continue;
			}
			const ip = normalizeIp(token);
			if (ip) {
				if (!hosts.some((host) => host.ip === ip)) hosts.push({ ip });
				index += 1;
				continue;
			}
			if (isNoReply(token)) {
				probes += 1;
				index += 1;
				continue;
			}
			hosts.push({ hostname: token });
			index += 1;
		}
		if (probes === 0) throw new Error(`No probe in traceroute line: ${line}`);
		const hop = {
			ttl: Number(match[1]),
			hosts,
			sent: probes,
			lossPct: Math.round((probes - answered) / probes * 1e3) / 10
		};
		const last = times[times.length - 1];
		if (last !== void 0) {
			hop.lastMs = last;
			hop.bestMs = Math.min(...times);
			hop.worstMs = Math.max(...times);
			hop.avgMs = Math.round(times.reduce((sum, value) => sum + value, 0) / times.length * 1e3) / 1e3;
		}
		return hop;
	}
	function readTarget$1(route, block, url) {
		var _TRACEROUTE_HEADER$ex2, _normalizeIp, _url$searchParams$get;
		if (route.target !== void 0 && route.target !== "") return route.target;
		const result = resultElement(block);
		const header = result === void 0 ? void 0 : resultLines(result).find((line) => TRACEROUTE_HEADER.test(line));
		const fromHeader = header === void 0 ? void 0 : (_TRACEROUTE_HEADER$ex2 = TRACEROUTE_HEADER.exec(header)) === null || _TRACEROUTE_HEADER$ex2 === void 0 ? void 0 : _TRACEROUTE_HEADER$ex2[2];
		if (fromHeader !== void 0) return (_normalizeIp = normalizeIp(fromHeader)) !== null && _normalizeIp !== void 0 ? _normalizeIp : fromHeader;
		const query = (_url$searchParams$get = url === null || url === void 0 ? void 0 : url.searchParams.get("host")) !== null && _url$searchParams$get !== void 0 ? _url$searchParams$get : url === null || url === void 0 ? void 0 : url.searchParams.get("target");
		if (query) return query;
		const input = document.querySelector("#host, input[name=\"host\"], input[type=\"text\"]");
		const value = input instanceof HTMLInputElement ? input.value.trim() : "";
		if (value !== "") return value;
		throw new Error("The result names no target");
	}
	function isRunning(block) {
		var _block$querySelector3;
		const submit = (_block$querySelector3 = block.querySelector("#submit")) !== null && _block$querySelector3 !== void 0 ? _block$querySelector3 : document.querySelector("#submit");
		if (submit instanceof HTMLButtonElement) {
			if (submit.disabled) return true;
			if (RUNNING.test(cellText(submit))) return true;
		}
		if (block.querySelector("[role=\"status\"], [class*=\"spinner\"], [class*=\"animate-spin\"]") !== null) return true;
		return RUNNING.test(cellText(block.querySelector("#cli-legend")));
	}
	function isReady(block) {
		return readRoute(block) !== void 0 && !isRunning(block) && hopsOf(block).length > 0;
	}
	function hopsOf(block) {
		const route = readRoute(block);
		const result = resultElement(block);
		if (!route || !result) return [];
		return parseHops(result, route);
	}
	function parseHops(result, route) {
		const lines = resultLines(result);
		if (route.tool === "mtr") {
			var _readHeader;
			const stats = (_readHeader = readHeader(resultText(result))) !== null && _readHeader !== void 0 ? _readHeader : DEFAULT_STATS;
			return lines.flatMap((line) => {
				const hop = readMtrHop(line, stats);
				return hop === void 0 ? [] : [hop];
			});
		}
		return lines.flatMap((line) => {
			if (TRACEROUTE_HEADER.test(line) || line.startsWith("-- ")) return [];
			return [readTracerouteHop(line)];
		});
	}
	function readTrace$1(block, probe, url) {
		const route = readRoute(block);
		if (!route) throw new Error("This result is not a traceroute or mtr run");
		const result = resultElement(block);
		if (!result) throw new Error("The page shows no result");
		const hops = parseHops(result, route);
		if (hops.length === 0) throw new Error("The result has no hops");
		const target = readTarget$1(route, block, url);
		return probe === void 0 ? {
			target,
			hops
		} : {
			target,
			probe,
			hops
		};
	}
	var site$1 = {
		id: "vultr",
		name: "Vultr Looking Glass",
		matches: ["https://*.vultr.com/*"],
		accepts: (url) => url.hostname.endsWith("-ping.vultr.com")
	};
	var vultr_exports = __exportAll({
		site: () => site$1,
		start: () => start$1
	});
	var RESULT = "#results, #results_wrapper, #response";
	var BUTTON = "btn btn--primary btn--xs";
	function place(block, button) {
		const result = block.querySelector("#response");
		if (result) result.after(button);
		else block.append(button);
	}
	function start$1() {
		watchElements(RESULT, (element) => {
			const block = resultBlock(element);
			if (!block) return;
			const mounted = block.querySelector(`[${BUTTON_HOST_ATTRIBUTE}]`);
			if (!isReady(block)) {
				if (mounted instanceof HTMLElement) mounted.hidden = true;
				return;
			}
			if (mounted instanceof HTMLElement) mounted.hidden = false;
			mountOpenButton(block, () => readTrace$1(block, readProbe$1(document.querySelector("#serverlocation")), new URL(location.href)), (button) => place(block, button), {
				className: BUTTON,
				css: button_default$1
			});
		});
	}
	var button_default = "[data-xmtr-helper]>button{margin:8px 0}[data-xmtr-helper]>button>svg{width:1em;height:1em;margin-right:5px}[data-xmtr-helper]>button[data-state=failed]{color:#db2828}";
	var ROUTE_TOOL = /^traceroute6?$/i;
	var PROBE_LABEL = /^(?:router|node|server|location|pop)$/i;
	var COMMAND_LABEL = /^(?:command|query|tool)$/i;
	var TARGET_LABEL = /^(?:destination|target|address|ip|host)$/i;
	var TARGET_INPUT = "input[name=addr], input[name=address], input[name=target], input[name=host], input[name=destination], input[name=ip]";
	var TARGET_PARAMS = [
		"addr",
		"address",
		"ip",
		"target",
		"host",
		"destination",
		"query",
		"d"
	];
	var LABEL_ELEMENTS = "b, strong, th, dt, dd, label, span, td, legend";
	function labelledText(root, label) {
		for (const element of root.querySelectorAll(LABEL_ELEMENTS)) {
			var _inline$, _inline$2$trim, _inline$2, _element$nextSibling$, _element$nextSibling;
			const text = cellText(element);
			if (text === "") continue;
			const inline = /^([^:：]*?)\s*[:：]\s*(.*)$/.exec(text);
			const name = ((_inline$ = inline === null || inline === void 0 ? void 0 : inline[1]) !== null && _inline$ !== void 0 ? _inline$ : text).replace(/[:：]\s*$/, "").trim();
			if (!label.test(name)) continue;
			const value = (_inline$2$trim = inline === null || inline === void 0 || (_inline$2 = inline[2]) === null || _inline$2 === void 0 ? void 0 : _inline$2.trim()) !== null && _inline$2$trim !== void 0 ? _inline$2$trim : "";
			if (value !== "") return value;
			const next = (_element$nextSibling$ = (_element$nextSibling = element.nextSibling) === null || _element$nextSibling === void 0 || (_element$nextSibling = _element$nextSibling.textContent) === null || _element$nextSibling === void 0 ? void 0 : _element$nextSibling.trim()) !== null && _element$nextSibling$ !== void 0 ? _element$nextSibling$ : "";
			if (next !== "") return next;
			const sibling = cellText(element.nextElementSibling);
			if (sibling !== "") return sibling;
		}
	}
	function readProbe(block) {
		return labelledText(block, PROBE_LABEL);
	}
	function readCommand(block) {
		var _labelledText;
		const [tool] = ((_labelledText = labelledText(block, COMMAND_LABEL)) !== null && _labelledText !== void 0 ? _labelledText : "").replace(/\s+/g, " ").trim().split(" ");
		return tool !== void 0 && ROUTE_TOOL.test(tool) ? tool : void 0;
	}
	function readTarget(block, page = document) {
		var _labelledText2, _normalizeIp, _normalizeIp2;
		const argument = ((_labelledText2 = labelledText(block, COMMAND_LABEL)) !== null && _labelledText2 !== void 0 ? _labelledText2 : "").trim().split(/\s+/).slice(1).find((token) => token !== "" && !token.startsWith("-"));
		if (argument !== void 0) return (_normalizeIp = normalizeIp(argument)) !== null && _normalizeIp !== void 0 ? _normalizeIp : argument;
		const labelled = labelledText(block, TARGET_LABEL);
		if (labelled !== void 0) return (_normalizeIp2 = normalizeIp(labelled)) !== null && _normalizeIp2 !== void 0 ? _normalizeIp2 : labelled;
		for (const input of page.querySelectorAll(TARGET_INPUT)) {
			var _normalizeIp3;
			if (!(input instanceof HTMLInputElement)) continue;
			const value = (input.value || input.getAttribute("value") || "").trim();
			if (value !== "") return (_normalizeIp3 = normalizeIp(value)) !== null && _normalizeIp3 !== void 0 ? _normalizeIp3 : value;
		}
		const params = new URL(document.location.href).searchParams;
		for (const key of TARGET_PARAMS) {
			var _params$get, _normalizeIp4;
			const value = (_params$get = params.get(key)) === null || _params$get === void 0 ? void 0 : _params$get.trim();
			if (value) return (_normalizeIp4 = normalizeIp(value)) !== null && _normalizeIp4 !== void 0 ? _normalizeIp4 : value;
		}
	}
	function isRouteBlock(block) {
		var _pre$textContent;
		const pre = block.querySelector("pre");
		return pre !== null && isTracerouteText((_pre$textContent = pre.textContent) !== null && _pre$textContent !== void 0 ? _pre$textContent : "");
	}
	function readTrace(block) {
		var _pre$textContent2;
		const pre = block.querySelector("pre");
		if (!pre) throw new Error("The page shows no result");
		const text = (_pre$textContent2 = pre.textContent) !== null && _pre$textContent2 !== void 0 ? _pre$textContent2 : "";
		if (!isTracerouteText(text) && !readCommand(block)) throw new Error("This result is not a traceroute run");
		const trace = parseTracerouteText(text, readTarget(block));
		const probe = readProbe(block);
		return probe === void 0 ? trace : _objectSpread2(_objectSpread2({}, trace), {}, { probe });
	}
	var site = {
		id: "zayo",
		name: "Zayo Looking Glass",
		matches: ["*://lg.zayo.com/*"]
	};
	var zayo_exports = __exportAll({
		site: () => site,
		start: () => start
	});
	var TRACE = "pre";
	var BLOCK = "div, section, article, form, dl, dd, td";
	function start() {
		watchElements(TRACE, (pre) => {
			var _pre$closest;
			const block = (_pre$closest = pre.closest(BLOCK)) !== null && _pre$closest !== void 0 ? _pre$closest : pre.parentElement;
			if (!block || !isRouteBlock(block)) return;
			mountOpenButton(block, () => readTrace(block), (button) => pre.after(button), { css: button_default });
		});
	}
	var _MatchPattern = class MatchPattern {
		constructor(matchPattern) {
			if (matchPattern === "<all_urls>") {
				this.isAllUrls = true;
				this.protocolMatches = [...MatchPattern.PROTOCOLS];
				this.hostnameMatch = "*";
				this.pathnameMatch = "*";
			} else {
				const groups = /(.*):\/\/(.*?)(\/.*)/.exec(matchPattern);
				if (groups == null) throw new InvalidMatchPattern(matchPattern, "Incorrect format");
				const [_, protocol, hostname, pathname] = groups;
				validateProtocol(matchPattern, protocol);
				validateHostname(matchPattern, hostname);
				this.protocolMatches = protocol === "*" ? ["http", "https"] : [protocol];
				this.hostnameMatch = hostname;
				this.pathnameMatch = pathname;
			}
		}
		includes(url) {
			const u = typeof url === "string" ? new URL(url) : url instanceof Location ? new URL(url.href) : url;
			if (this.isAllUrls) return !this.isUnknownProtocol(u);
			return !!this.protocolMatches.find((protocol) => {
				if (protocol === "http") return this.isHttpMatch(u);
				if (protocol === "https") return this.isHttpsMatch(u);
				if (protocol === "file") return this.isFileMatch(u);
				if (protocol === "ftp") return this.isFtpMatch(u);
				if (protocol === "urn") return this.isUrnMatch(u);
			});
		}
		isHttpMatch(url) {
			return url.protocol === "http:" && this.isHostPathMatch(url);
		}
		isHttpsMatch(url) {
			return url.protocol === "https:" && this.isHostPathMatch(url);
		}
		isHostPathMatch(url) {
			if (!this.hostnameMatch || !this.pathnameMatch) return false;
			const hostnameMatchRegexs = [this.convertPatternToRegex(this.hostnameMatch), this.convertPatternToRegex(this.hostnameMatch.replace(/^\*\./, ""))];
			const pathnameMatchRegex = this.convertPatternToRegex(this.pathnameMatch);
			return !!hostnameMatchRegexs.find((regex) => regex.test(url.hostname)) && pathnameMatchRegex.test(url.pathname);
		}
		isUnknownProtocol(url) {
			return !this.protocolMatches.includes(url.protocol.slice(0, -1));
		}
		isPathMatch(url) {
			if (!this.pathnameMatch) return false;
			return this.convertPatternToRegex(this.pathnameMatch).test(url.pathname);
		}
		isFileMatch(url) {
			return url.protocol === "file:" && this.isPathMatch(url);
		}
		isFtpMatch(_url) {
			throw Error("Not implemented: ftp:// pattern matching. Open a PR to add support");
		}
		isUrnMatch(_url) {
			throw Error("Not implemented: urn:// pattern matching. Open a PR to add support");
		}
		convertPatternToRegex(pattern) {
			const starsReplaced = this.escapeForRegex(pattern).replace(/\\\*/g, ".*");
			return RegExp(`^${starsReplaced}$`);
		}
		escapeForRegex(string) {
			return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}
	};
	var MatchPattern = (_MatchPattern.PROTOCOLS = [
		"http",
		"https",
		"file",
		"ftp",
		"urn",
		"ws",
		"wss"
	], _MatchPattern);
	var InvalidMatchPattern = class extends Error {
		constructor(matchPattern, reason) {
			super(`Invalid match pattern "${matchPattern}": ${reason}`);
		}
	};
	function validateProtocol(matchPattern, protocol) {
		if (!MatchPattern.PROTOCOLS.includes(protocol) && protocol !== "*") throw new InvalidMatchPattern(matchPattern, `${protocol} not a valid protocol (${MatchPattern.PROTOCOLS.join(", ")})`);
	}
	function validateHostname(matchPattern, hostname) {
		if (hostname.includes(":")) throw new InvalidMatchPattern(matchPattern, `Hostname cannot include a port`);
		if (hostname.includes("*") && hostname.length > 1 && !hostname.startsWith("*.")) throw new InvalidMatchPattern(matchPattern, `If using a wildcard (*), it must go at the start of the hostname`);
	}
	function siteRunsOn(site, url) {
		var _site$accepts, _site$accepts2;
		return site.matches.some((pattern) => new MatchPattern(pattern).includes(url)) && ((_site$accepts = (_site$accepts2 = site.accepts) === null || _site$accepts2 === void 0 ? void 0 : _site$accepts2.call(site, url)) !== null && _site$accepts !== void 0 ? _site$accepts : true);
	}
	var handlers = Object.values([
		_17ce_exports,
		aliyun_boce_exports,
		aorta_exports,
		boce_exports,
		chinaz_exports,
		globalping_exports,
		he_exports,
		itdog_exports,
		mtr_tools_exports,
		ping_pe_exports,
		ping_sx_exports,
		vultr_exports,
		zayo_exports
	]);
	var url = new URL(location.href);
	for (const handler of handlers) {
		if (!siteRunsOn(handler.site, url)) continue;
		setSiteName(handler.site.name);
		handler.start();
	}
})(pako);
