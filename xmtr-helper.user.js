// ==UserScript==
// @name               xmtr IPMap Helper
// @name:en            xmtr IPMap Helper
// @name:zh-CN         xmtr IPMap 助手
// @name:ja            xmtr IPMap ヘルパー
// @name:zh-TW         xmtr IPMap 助手
// @name:zh-HK         xmtr IPMap 助手
// @name:zh-MO         xmtr IPMap 助手
// @namespace          https://xmsl.dev/
// @version            0.0.2
// @description        Adds an "Open in xmtr IPMap" button to traceroute and MTR results on looking glass sites.
// @description:en     Adds an "Open in xmtr IPMap" button to traceroute and MTR results on looking glass sites.
// @description:zh-CN  在 Looking Glass 网站的 traceroute 与 MTR 结果旁添加「在 xmtr IPMap 中打开」按钮。
// @description:ja     Looking Glass サイトの traceroute・MTR の結果に「xmtr IPMap で開く」ボタンを追加します。
// @description:zh-TW  在 Looking Glass 網站的 traceroute 與 MTR 結果旁新增「在 xmtr IPMap 中開啟」按鈕。
// @description:zh-HK  在 Looking Glass 網站的 traceroute 與 MTR 結果旁添加「在 xmtr IPMap 中打開」按鈕。
// @description:zh-MO  在 Looking Glass 網站的 traceroute 與 MTR 結果旁添加「在 xmtr IPMap 中打開」按鈕。
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
// @connect            xmsl.dev
// @connect            *.xmsl.dev
// @connect            api.globalping.io
// @grant              GM.xmlHttpRequest
// @grant              GM_addStyle
// @grant              GM_xmlhttpRequest
// @run-at             document-idle
// ==/UserScript==

(function() {
	"use strict";
	var __commonJSMin$1 = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod, mod.exports), cb = null), mod.exports);
	var require_global_this = __commonJSMin$1(((exports, module, this$1) => {
		var check = function(it) {
			return it && it.Math === Math && it;
		};
		module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof this$1 == "object" && this$1) || (function() {
			return this;
		})() || Function("return this")();
	}));
	var require_fails = __commonJSMin$1(((exports, module) => {
		module.exports = function(exec) {
			try {
				return !!exec();
			} catch (error) {
				return true;
			}
		};
	}));
	var require_descriptors = __commonJSMin$1(((exports, module) => {
		module.exports = !require_fails()(function() {
			return Object.defineProperty({}, 1, { get: function() {
				return 7;
			} })[1] !== 7;
		});
	}));
	var require_function_bind_native = __commonJSMin$1(((exports, module) => {
		module.exports = !require_fails()(function() {
			var test = function() {}.bind();
			return typeof test != "function" || test.hasOwnProperty("prototype");
		});
	}));
	var require_function_call = __commonJSMin$1(((exports, module) => {
		var NATIVE_BIND = require_function_bind_native();
		var call = Function.prototype.call;
		module.exports = NATIVE_BIND ? call.bind(call) : function() {
			return call.apply(call, arguments);
		};
	}));
	var require_object_property_is_enumerable = __commonJSMin$1(((exports) => {
		var $propertyIsEnumerable = {}.propertyIsEnumerable;
		var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		exports.f = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1) ? function propertyIsEnumerable(V) {
			var descriptor = getOwnPropertyDescriptor(this, V);
			return !!descriptor && descriptor.enumerable;
		} : $propertyIsEnumerable;
	}));
	var require_create_property_descriptor = __commonJSMin$1(((exports, module) => {
		module.exports = function(bitmap, value) {
			return {
				enumerable: !(bitmap & 1),
				configurable: !(bitmap & 2),
				writable: !(bitmap & 4),
				value
			};
		};
	}));
	var require_function_uncurry_this = __commonJSMin$1(((exports, module) => {
		var NATIVE_BIND = require_function_bind_native();
		var FunctionPrototype = Function.prototype;
		var call = FunctionPrototype.call;
		var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
		module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
			return function() {
				return call.apply(fn, arguments);
			};
		};
	}));
	var require_classof_raw = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var toString = uncurryThis({}.toString);
		var stringSlice = uncurryThis("".slice);
		module.exports = function(it) {
			return stringSlice(toString(it), 8, -1);
		};
	}));
	var require_indexed_object = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var fails = require_fails();
		var classof = require_classof_raw();
		var $Object = Object;
		var split = uncurryThis("".split);
		module.exports = fails(function() {
			return !$Object("z").propertyIsEnumerable(0);
		}) ? function(it) {
			return classof(it) === "String" ? split(it, "") : $Object(it);
		} : $Object;
	}));
	var require_is_null_or_undefined = __commonJSMin$1(((exports, module) => {
		module.exports = function(it) {
			return it === null || it === void 0;
		};
	}));
	var require_require_object_coercible = __commonJSMin$1(((exports, module) => {
		var isNullOrUndefined = require_is_null_or_undefined();
		var $TypeError = TypeError;
		module.exports = function(it) {
			if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
			return it;
		};
	}));
	var require_to_indexed_object = __commonJSMin$1(((exports, module) => {
		var IndexedObject = require_indexed_object();
		var requireObjectCoercible = require_require_object_coercible();
		module.exports = function(it) {
			return IndexedObject(requireObjectCoercible(it));
		};
	}));
	var require_is_callable = __commonJSMin$1(((exports, module) => {
		var documentAll = typeof document == "object" && document.all;
		module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
			return typeof argument == "function" || argument === documentAll;
		} : function(argument) {
			return typeof argument == "function";
		};
	}));
	var require_is_object = __commonJSMin$1(((exports, module) => {
		var isCallable = require_is_callable();
		module.exports = function(it) {
			return typeof it == "object" ? it !== null : isCallable(it);
		};
	}));
	var require_get_built_in = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		var isCallable = require_is_callable();
		var aFunction = function(argument) {
			return isCallable(argument) ? argument : void 0;
		};
		module.exports = function(namespace, method) {
			return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
		};
	}));
	var require_object_is_prototype_of = __commonJSMin$1(((exports, module) => {
		module.exports = require_function_uncurry_this()({}.isPrototypeOf);
	}));
	var require_environment_user_agent = __commonJSMin$1(((exports, module) => {
		var navigator = require_global_this().navigator;
		var userAgent = navigator && navigator.userAgent;
		module.exports = userAgent ? String(userAgent) : "";
	}));
	var require_environment_v8_version = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		var userAgent = require_environment_user_agent();
		var process = globalThis.process;
		var Deno = globalThis.Deno;
		var versions = process && process.versions || Deno && Deno.version;
		var v8 = versions && versions.v8;
		var match;
		var version;
		if (v8) {
			match = v8.split(".");
			version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
		}
		if (!version && userAgent) {
			match = userAgent.match(/Edge\/(\d+)/);
			if (!match || match[1] >= 74) {
				match = userAgent.match(/Chrome\/(\d+)/);
				if (match) version = +match[1];
			}
		}
		module.exports = version;
	}));
	var require_symbol_constructor_detection = __commonJSMin$1(((exports, module) => {
		var V8_VERSION = require_environment_v8_version();
		var fails = require_fails();
		var $String = require_global_this().String;
		module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
			var symbol = Symbol("symbol detection");
			return !$String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
		});
	}));
	var require_use_symbol_as_uid = __commonJSMin$1(((exports, module) => {
		module.exports = require_symbol_constructor_detection() && !Symbol.sham && typeof Symbol.iterator == "symbol";
	}));
	var require_is_symbol = __commonJSMin$1(((exports, module) => {
		var getBuiltIn = require_get_built_in();
		var isCallable = require_is_callable();
		var isPrototypeOf = require_object_is_prototype_of();
		var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
		var $Object = Object;
		module.exports = USE_SYMBOL_AS_UID ? function(it) {
			return typeof it == "symbol";
		} : function(it) {
			var $Symbol = getBuiltIn("Symbol");
			return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
		};
	}));
	var require_try_to_string = __commonJSMin$1(((exports, module) => {
		var $String = String;
		module.exports = function(argument) {
			try {
				return $String(argument);
			} catch (error) {
				return "Object";
			}
		};
	}));
	var require_a_callable = __commonJSMin$1(((exports, module) => {
		var isCallable = require_is_callable();
		var tryToString = require_try_to_string();
		var $TypeError = TypeError;
		module.exports = function(argument) {
			if (isCallable(argument)) return argument;
			throw new $TypeError(tryToString(argument) + " is not a function");
		};
	}));
	var require_get_method = __commonJSMin$1(((exports, module) => {
		var aCallable = require_a_callable();
		var isNullOrUndefined = require_is_null_or_undefined();
		module.exports = function(V, P) {
			var func = V[P];
			return isNullOrUndefined(func) ? void 0 : aCallable(func);
		};
	}));
	var require_ordinary_to_primitive = __commonJSMin$1(((exports, module) => {
		var call = require_function_call();
		var isCallable = require_is_callable();
		var isObject = require_is_object();
		var $TypeError = TypeError;
		module.exports = function(input, pref) {
			var fn, val;
			if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
			if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
			if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
			throw new $TypeError("Can't convert object to primitive value");
		};
	}));
	var require_is_pure = __commonJSMin$1(((exports, module) => {
		module.exports = false;
	}));
	var require_define_global_property = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		var defineProperty = Object.defineProperty;
		module.exports = function(key, value) {
			try {
				defineProperty(globalThis, key, {
					value,
					configurable: true,
					writable: true
				});
			} catch (error) {
				globalThis[key] = value;
			}
			return value;
		};
	}));
	var require_shared_store = __commonJSMin$1(((exports, module) => {
		var IS_PURE = require_is_pure();
		var globalThis = require_global_this();
		var defineGlobalProperty = require_define_global_property();
		var SHARED = "__core-js_shared__";
		var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
		(store.versions || (store.versions = [])).push({
			version: "3.51.0",
			mode: IS_PURE ? "pure" : "global",
			copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
			license: "https://github.com/zloirock/core-js/blob/v3.51.0/LICENSE",
			source: "https://github.com/zloirock/core-js"
		});
	}));
	var require_shared = __commonJSMin$1(((exports, module) => {
		var store = require_shared_store();
		var create = Object.create || Object;
		module.exports = function(key, value) {
			return store[key] || (store[key] = value || create(null));
		};
	}));
	var require_to_object = __commonJSMin$1(((exports, module) => {
		var requireObjectCoercible = require_require_object_coercible();
		var $Object = Object;
		module.exports = function(argument) {
			return $Object(requireObjectCoercible(argument));
		};
	}));
	var require_has_own_property = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var toObject = require_to_object();
		var hasOwnProperty = uncurryThis({}.hasOwnProperty);
		module.exports = Object.hasOwn || function hasOwn(it, key) {
			return hasOwnProperty(toObject(it), key);
		};
	}));
	var require_uid = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var id = 0;
		var postfix = Math.random();
		var toString = uncurryThis(1.1.toString);
		module.exports = function(key) {
			return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
		};
	}));
	var require_well_known_symbol = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		var shared = require_shared();
		var hasOwn = require_has_own_property();
		var uid = require_uid();
		var NATIVE_SYMBOL = require_symbol_constructor_detection();
		var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
		var Symbol = globalThis.Symbol;
		var WellKnownSymbolsStore = shared("wks");
		var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
		module.exports = function(name) {
			if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
			return WellKnownSymbolsStore[name];
		};
	}));
	var require_to_primitive = __commonJSMin$1(((exports, module) => {
		var call = require_function_call();
		var isObject = require_is_object();
		var isSymbol = require_is_symbol();
		var getMethod = require_get_method();
		var ordinaryToPrimitive = require_ordinary_to_primitive();
		var wellKnownSymbol = require_well_known_symbol();
		var $TypeError = TypeError;
		var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
		module.exports = function(input, pref) {
			if (!isObject(input) || isSymbol(input)) return input;
			var exoticToPrim = getMethod(input, TO_PRIMITIVE);
			var result;
			if (exoticToPrim) {
				if (pref === void 0) pref = "default";
				result = call(exoticToPrim, input, pref);
				if (!isObject(result) || isSymbol(result)) return result;
				throw new $TypeError("Can't convert object to primitive value");
			}
			if (pref === void 0) pref = "number";
			return ordinaryToPrimitive(input, pref);
		};
	}));
	var require_to_property_key = __commonJSMin$1(((exports, module) => {
		var toPrimitive = require_to_primitive();
		var isSymbol = require_is_symbol();
		module.exports = function(argument) {
			var key = toPrimitive(argument, "string");
			return isSymbol(key) ? key : key + "";
		};
	}));
	var require_document_create_element = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		var isObject = require_is_object();
		var document = globalThis.document;
		var EXISTS = isObject(document) && isObject(document.createElement);
		module.exports = function(it) {
			return EXISTS ? document.createElement(it) : {};
		};
	}));
	var require_ie8_dom_define = __commonJSMin$1(((exports, module) => {
		var DESCRIPTORS = require_descriptors();
		var fails = require_fails();
		var createElement = require_document_create_element();
		module.exports = !DESCRIPTORS && !fails(function() {
			return Object.defineProperty(createElement("div"), "a", { get: function() {
				return 7;
			} }).a !== 7;
		});
	}));
	var require_object_get_own_property_descriptor = __commonJSMin$1(((exports) => {
		var DESCRIPTORS = require_descriptors();
		var call = require_function_call();
		var propertyIsEnumerableModule = require_object_property_is_enumerable();
		var createPropertyDescriptor = require_create_property_descriptor();
		var toIndexedObject = require_to_indexed_object();
		var toPropertyKey = require_to_property_key();
		var hasOwn = require_has_own_property();
		var IE8_DOM_DEFINE = require_ie8_dom_define();
		var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
			O = toIndexedObject(O);
			P = toPropertyKey(P);
			if (IE8_DOM_DEFINE) try {
				return $getOwnPropertyDescriptor(O, P);
			} catch (error) {}
			if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
		};
	}));
	var require_v8_prototype_define_bug = __commonJSMin$1(((exports, module) => {
		var DESCRIPTORS = require_descriptors();
		var fails = require_fails();
		module.exports = DESCRIPTORS && fails(function() {
			return Object.defineProperty(function() {}, "prototype", {
				value: 42,
				writable: false
			}).prototype !== 42;
		});
	}));
	var require_an_object = __commonJSMin$1(((exports, module) => {
		var isObject = require_is_object();
		var $String = String;
		var $TypeError = TypeError;
		module.exports = function(argument) {
			if (isObject(argument)) return argument;
			throw new $TypeError($String(argument) + " is not an object");
		};
	}));
	var require_object_define_property = __commonJSMin$1(((exports) => {
		var DESCRIPTORS = require_descriptors();
		var IE8_DOM_DEFINE = require_ie8_dom_define();
		var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
		var anObject = require_an_object();
		var toPropertyKey = require_to_property_key();
		var $TypeError = TypeError;
		var $defineProperty = Object.defineProperty;
		var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		var ENUMERABLE = "enumerable";
		var CONFIGURABLE = "configurable";
		var WRITABLE = "writable";
		exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
			anObject(O);
			P = toPropertyKey(P);
			anObject(Attributes);
			if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
				var current = $getOwnPropertyDescriptor(O, P);
				if (current && current[WRITABLE]) {
					O[P] = Attributes.value;
					Attributes = {
						configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
						enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
						writable: false
					};
				}
			}
			return $defineProperty(O, P, Attributes);
		} : $defineProperty : function defineProperty(O, P, Attributes) {
			anObject(O);
			P = toPropertyKey(P);
			anObject(Attributes);
			if (IE8_DOM_DEFINE) try {
				return $defineProperty(O, P, Attributes);
			} catch (error) {}
			if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
			if ("value" in Attributes) O[P] = Attributes.value;
			return O;
		};
	}));
	var require_create_non_enumerable_property = __commonJSMin$1(((exports, module) => {
		var DESCRIPTORS = require_descriptors();
		var definePropertyModule = require_object_define_property();
		var createPropertyDescriptor = require_create_property_descriptor();
		module.exports = DESCRIPTORS ? function(object, key, value) {
			return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
		} : function(object, key, value) {
			object[key] = value;
			return object;
		};
	}));
	var require_function_name = __commonJSMin$1(((exports, module) => {
		var DESCRIPTORS = require_descriptors();
		var hasOwn = require_has_own_property();
		var FunctionPrototype = Function.prototype;
		var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
		var EXISTS = hasOwn(FunctionPrototype, "name");
		module.exports = {
			EXISTS,
			PROPER: EXISTS && function something() {}.name === "something",
			CONFIGURABLE: EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable)
		};
	}));
	var require_inspect_source = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var isCallable = require_is_callable();
		var store = require_shared_store();
		var functionToString = uncurryThis(Function.toString);
		if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
			return functionToString(it);
		};
		module.exports = store.inspectSource;
	}));
	var require_weak_map_basic_detection = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		var isCallable = require_is_callable();
		var WeakMap = globalThis.WeakMap;
		module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
	}));
	var require_shared_key = __commonJSMin$1(((exports, module) => {
		var shared = require_shared();
		var uid = require_uid();
		var keys = shared("keys");
		module.exports = function(key) {
			return keys[key] || (keys[key] = uid(key));
		};
	}));
	var require_hidden_keys = __commonJSMin$1(((exports, module) => {
		module.exports = {};
	}));
	var require_internal_state = __commonJSMin$1(((exports, module) => {
		var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
		var globalThis = require_global_this();
		var isObject = require_is_object();
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		var hasOwn = require_has_own_property();
		var shared = require_shared_store();
		var sharedKey = require_shared_key();
		var hiddenKeys = require_hidden_keys();
		var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
		var TypeError = globalThis.TypeError;
		var WeakMap = globalThis.WeakMap;
		var set;
		var get;
		var has;
		var enforce = function(it) {
			return has(it) ? get(it) : set(it, {});
		};
		var getterFor = function(TYPE) {
			return function(it) {
				var state;
				if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError("Incompatible receiver, " + TYPE + " required");
				return state;
			};
		};
		if (NATIVE_WEAK_MAP || shared.state) {
			var store = shared.state || (shared.state = new WeakMap());
			store.get = store.get;
			store.has = store.has;
			store.set = store.set;
			set = function(it, metadata) {
				if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
				metadata.facade = it;
				store.set(it, metadata);
				return metadata;
			};
			get = function(it) {
				return store.get(it) || {};
			};
			has = function(it) {
				return store.has(it);
			};
		} else {
			var STATE = sharedKey("state");
			hiddenKeys[STATE] = true;
			set = function(it, metadata) {
				if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
				metadata.facade = it;
				createNonEnumerableProperty(it, STATE, metadata);
				return metadata;
			};
			get = function(it) {
				return hasOwn(it, STATE) ? it[STATE] : {};
			};
			has = function(it) {
				return hasOwn(it, STATE);
			};
		}
		module.exports = {
			set,
			get,
			has,
			enforce,
			getterFor
		};
	}));
	var require_make_built_in = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var fails = require_fails();
		var isCallable = require_is_callable();
		var hasOwn = require_has_own_property();
		var DESCRIPTORS = require_descriptors();
		var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
		var inspectSource = require_inspect_source();
		var InternalStateModule = require_internal_state();
		var enforceInternalState = InternalStateModule.enforce;
		var getInternalState = InternalStateModule.get;
		var $String = String;
		var defineProperty = Object.defineProperty;
		var stringSlice = uncurryThis("".slice);
		var replace = uncurryThis("".replace);
		var join = uncurryThis([].join);
		var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
			return defineProperty(function() {}, "length", { value: 8 }).length !== 8;
		});
		var TEMPLATE = String(String).split("String");
		var makeBuiltIn = module.exports = function(value, name, options) {
			if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
			if (options && options.getter) name = "get " + name;
			if (options && options.setter) name = "set " + name;
			if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
				if (DESCRIPTORS) defineProperty(value, "name", {
					value: name,
					configurable: true
				});
				else value.name = name;
			}
			if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", { value: options.arity });
			try {
				if (options && hasOwn(options, "constructor") && options.constructor) {
					if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
				} else if (value.prototype) value.prototype = void 0;
			} catch (error) {}
			var state = enforceInternalState(value);
			if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
			return value;
		};
		Function.prototype.toString = makeBuiltIn(function toString() {
			return isCallable(this) && getInternalState(this).source || inspectSource(this);
		}, "toString");
	}));
	var require_define_built_in = __commonJSMin$1(((exports, module) => {
		var isCallable = require_is_callable();
		var definePropertyModule = require_object_define_property();
		var makeBuiltIn = require_make_built_in();
		var defineGlobalProperty = require_define_global_property();
		module.exports = function(O, key, value, options) {
			if (!options) options = {};
			var simple = options.enumerable;
			var name = options.name !== void 0 ? options.name : key;
			if (isCallable(value)) makeBuiltIn(value, name, options);
			if (options.global) {
				if (simple) O[key] = value;
				else defineGlobalProperty(key, value);
			} else {
				try {
					if (!options.unsafe) delete O[key];
					else if (O[key]) simple = true;
				} catch (error) {}
				if (simple) O[key] = value;
				else definePropertyModule.f(O, key, {
					value,
					enumerable: false,
					configurable: !options.nonConfigurable,
					writable: !options.nonWritable
				});
			}
			return O;
		};
	}));
	var require_math_trunc = __commonJSMin$1(((exports, module) => {
		var ceil = Math.ceil;
		var floor = Math.floor;
		module.exports = Math.trunc || function trunc(x) {
			var n = +x;
			return (n > 0 ? floor : ceil)(n);
		};
	}));
	var require_to_integer_or_infinity = __commonJSMin$1(((exports, module) => {
		var trunc = require_math_trunc();
		module.exports = function(argument) {
			var number = +argument;
			return number !== number || number === 0 ? 0 : trunc(number);
		};
	}));
	var require_to_absolute_index = __commonJSMin$1(((exports, module) => {
		var toIntegerOrInfinity = require_to_integer_or_infinity();
		var max = Math.max;
		var min = Math.min;
		module.exports = function(index, length) {
			var integer = toIntegerOrInfinity(index);
			return integer < 0 ? max(integer + length, 0) : min(integer, length);
		};
	}));
	var require_to_length = __commonJSMin$1(((exports, module) => {
		var toIntegerOrInfinity = require_to_integer_or_infinity();
		var min = Math.min;
		module.exports = function(argument) {
			var len = toIntegerOrInfinity(argument);
			return len > 0 ? min(len, 9007199254740991) : 0;
		};
	}));
	var require_length_of_array_like = __commonJSMin$1(((exports, module) => {
		var toLength = require_to_length();
		module.exports = function(obj) {
			return toLength(obj.length);
		};
	}));
	var require_array_includes = __commonJSMin$1(((exports, module) => {
		var toIndexedObject = require_to_indexed_object();
		var toAbsoluteIndex = require_to_absolute_index();
		var lengthOfArrayLike = require_length_of_array_like();
		var createMethod = function(IS_INCLUDES) {
			return function($this, el, fromIndex) {
				var O = toIndexedObject($this);
				var length = lengthOfArrayLike(O);
				if (length === 0) return !IS_INCLUDES && -1;
				var index = toAbsoluteIndex(fromIndex, length);
				var value;
				if (IS_INCLUDES && el !== el) while (length > index) {
					value = O[index++];
					if (value !== value) return true;
				}
				else for (; length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
				return !IS_INCLUDES && -1;
			};
		};
		module.exports = {
			includes: createMethod(true),
			indexOf: createMethod(false)
		};
	}));
	var require_object_keys_internal = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var hasOwn = require_has_own_property();
		var toIndexedObject = require_to_indexed_object();
		var indexOf = require_array_includes().indexOf;
		var hiddenKeys = require_hidden_keys();
		var push = uncurryThis([].push);
		module.exports = function(object, names) {
			var O = toIndexedObject(object);
			var i = 0;
			var result = [];
			var key;
			for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
			while (names.length > i) if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
			return result;
		};
	}));
	var require_enum_bug_keys = __commonJSMin$1(((exports, module) => {
		module.exports = [
			"constructor",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"toLocaleString",
			"toString",
			"valueOf"
		];
	}));
	var require_object_get_own_property_names = __commonJSMin$1(((exports) => {
		var internalObjectKeys = require_object_keys_internal();
		var hiddenKeys = require_enum_bug_keys().concat("length", "prototype");
		exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
			return internalObjectKeys(O, hiddenKeys);
		};
	}));
	var require_object_get_own_property_symbols = __commonJSMin$1(((exports) => {
		exports.f = Object.getOwnPropertySymbols;
	}));
	var require_own_keys = __commonJSMin$1(((exports, module) => {
		var getBuiltIn = require_get_built_in();
		var uncurryThis = require_function_uncurry_this();
		var getOwnPropertyNamesModule = require_object_get_own_property_names();
		var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
		var anObject = require_an_object();
		var concat = uncurryThis([].concat);
		module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
			var keys = getOwnPropertyNamesModule.f(anObject(it));
			var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
			return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
		};
	}));
	var require_copy_constructor_properties = __commonJSMin$1(((exports, module) => {
		var hasOwn = require_has_own_property();
		var ownKeys = require_own_keys();
		var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
		var definePropertyModule = require_object_define_property();
		module.exports = function(target, source, exceptions) {
			var keys = ownKeys(source);
			var defineProperty = definePropertyModule.f;
			var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
			}
		};
	}));
	var require_is_forced = __commonJSMin$1(((exports, module) => {
		var fails = require_fails();
		var isCallable = require_is_callable();
		var replacement = /#|\.prototype\./;
		var isForced = function(feature, detection) {
			var value = data[normalize(feature)];
			return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
		};
		var normalize = isForced.normalize = function(string) {
			return String(string).replace(replacement, ".").toLowerCase();
		};
		var data = isForced.data = {};
		var NATIVE = isForced.NATIVE = "N";
		var POLYFILL = isForced.POLYFILL = "P";
		module.exports = isForced;
	}));
	var require_export = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		var defineBuiltIn = require_define_built_in();
		var defineGlobalProperty = require_define_global_property();
		var copyConstructorProperties = require_copy_constructor_properties();
		var isForced = require_is_forced();
		module.exports = function(options, source) {
			var TARGET = options.target;
			var GLOBAL = options.global;
			var STATIC = options.stat;
			var FORCED, target, key, targetProperty, sourceProperty, descriptor;
			if (GLOBAL) target = globalThis;
			else if (STATIC) target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
			else target = globalThis[TARGET] && globalThis[TARGET].prototype;
			if (target) for (key in source) {
				sourceProperty = source[key];
				if (options.dontCallGetSet) {
					descriptor = getOwnPropertyDescriptor(target, key);
					targetProperty = descriptor && descriptor.value;
				} else targetProperty = target[key];
				FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
				if (!FORCED && targetProperty !== void 0) {
					if (typeof sourceProperty == typeof targetProperty) continue;
					copyConstructorProperties(sourceProperty, targetProperty);
				}
				if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
				defineBuiltIn(target, key, sourceProperty, options);
			}
		};
	}));
	var require_to_string_tag_support = __commonJSMin$1(((exports, module) => {
		var TO_STRING_TAG = require_well_known_symbol()("toStringTag");
		var test = {};
		test[TO_STRING_TAG] = "z";
		module.exports = String(test) === "[object z]";
	}));
	var require_classof = __commonJSMin$1(((exports, module) => {
		var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
		var isCallable = require_is_callable();
		var classofRaw = require_classof_raw();
		var TO_STRING_TAG = require_well_known_symbol()("toStringTag");
		var $Object = Object;
		var CORRECT_ARGUMENTS = classofRaw(function() {
			return arguments;
		}()) === "Arguments";
		var tryGet = function(it, key) {
			try {
				return it[key];
			} catch (error) {}
		};
		module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
			var O, tag, result;
			return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
		};
	}));
	var require_to_string = __commonJSMin$1(((exports, module) => {
		var classof = require_classof();
		var $String = String;
		module.exports = function(argument) {
			if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
			return $String(argument);
		};
	}));
	var require_define_built_in_accessor = __commonJSMin$1(((exports, module) => {
		var makeBuiltIn = require_make_built_in();
		var defineProperty = require_object_define_property();
		module.exports = function(target, name, descriptor) {
			if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
			if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
			return defineProperty.f(target, name, descriptor);
		};
	}));
	var require_es_symbol_description = __commonJSMin$1((() => {
		var $ = require_export();
		var DESCRIPTORS = require_descriptors();
		var globalThis = require_global_this();
		var call = require_function_call();
		var uncurryThis = require_function_uncurry_this();
		var hasOwn = require_has_own_property();
		var isCallable = require_is_callable();
		var isPrototypeOf = require_object_is_prototype_of();
		var toString = require_to_string();
		var defineBuiltInAccessor = require_define_built_in_accessor();
		var copyConstructorProperties = require_copy_constructor_properties();
		var NativeSymbol = globalThis.Symbol;
		var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;
		if (DESCRIPTORS && isCallable(NativeSymbol) && (!("description" in SymbolPrototype) || NativeSymbol().description !== void 0)) {
			var EmptyStringDescriptionStore = {};
			var SymbolWrapper = function Symbol() {
				var description = arguments.length < 1 || arguments[0] === void 0 ? void 0 : toString(arguments[0]);
				var result = isPrototypeOf(SymbolPrototype, this) ? new NativeSymbol(description) : description === void 0 ? NativeSymbol() : NativeSymbol(description);
				if (description === "") EmptyStringDescriptionStore[result] = true;
				return result;
			};
			copyConstructorProperties(SymbolWrapper, NativeSymbol);
			var nativeFor = SymbolWrapper["for"];
			SymbolWrapper["for"] = { "for": function(key) {
				var stringKey = toString(key);
				var symbol = call(nativeFor, this, stringKey);
				if (stringKey === "") EmptyStringDescriptionStore[symbol] = true;
				return symbol;
			} }["for"];
			SymbolWrapper.prototype = SymbolPrototype;
			SymbolPrototype.constructor = SymbolWrapper;
			var NATIVE_SYMBOL = String(NativeSymbol("description detection")) === "Symbol(description detection)";
			var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
			var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
			var regexp = /^Symbol\((.*)\)[^)]+$/;
			var replace = uncurryThis("".replace);
			var stringSlice = uncurryThis("".slice);
			defineBuiltInAccessor(SymbolPrototype, "description", {
				configurable: true,
				get: function description() {
					var symbol = thisSymbolValue(this);
					if (hasOwn(EmptyStringDescriptionStore, symbol)) return "";
					var string = symbolDescriptiveString(symbol);
					var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, "$1");
					return desc === "" ? void 0 : desc;
				}
			});
			$({
				global: true,
				constructor: true,
				forced: true
			}, { Symbol: SymbolWrapper });
		}
	}));
	var require_function_apply = __commonJSMin$1(((exports, module) => {
		var NATIVE_BIND = require_function_bind_native();
		var FunctionPrototype = Function.prototype;
		var apply = FunctionPrototype.apply;
		var call = FunctionPrototype.call;
		module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
			return call.apply(apply, arguments);
		});
	}));
	var require_function_uncurry_this_accessor = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var aCallable = require_a_callable();
		module.exports = function(object, key, method) {
			try {
				return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
			} catch (error) {}
		};
	}));
	var require_is_possible_prototype = __commonJSMin$1(((exports, module) => {
		var isObject = require_is_object();
		module.exports = function(argument) {
			return isObject(argument) || argument === null;
		};
	}));
	var require_a_possible_prototype = __commonJSMin$1(((exports, module) => {
		var isPossiblePrototype = require_is_possible_prototype();
		var $String = String;
		var $TypeError = TypeError;
		module.exports = function(argument) {
			if (isPossiblePrototype(argument)) return argument;
			throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
		};
	}));
	var require_object_set_prototype_of = __commonJSMin$1(((exports, module) => {
		var uncurryThisAccessor = require_function_uncurry_this_accessor();
		var isObject = require_is_object();
		var requireObjectCoercible = require_require_object_coercible();
		var aPossiblePrototype = require_a_possible_prototype();
		module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
			var CORRECT_SETTER = false;
			var test = {};
			var setter;
			try {
				setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
				setter(test, []);
				CORRECT_SETTER = test instanceof Array;
			} catch (error) {}
			return function setPrototypeOf(O, proto) {
				requireObjectCoercible(O);
				aPossiblePrototype(proto);
				if (!isObject(O)) return O;
				if (CORRECT_SETTER) setter(O, proto);
				else O.__proto__ = proto;
				return O;
			};
		}() : void 0);
	}));
	var require_proxy_accessor = __commonJSMin$1(((exports, module) => {
		var defineProperty = require_object_define_property().f;
		module.exports = function(Target, Source, key) {
			key in Target || defineProperty(Target, key, {
				configurable: true,
				get: function() {
					return Source[key];
				},
				set: function(it) {
					Source[key] = it;
				}
			});
		};
	}));
	var require_inherit_if_required = __commonJSMin$1(((exports, module) => {
		var isCallable = require_is_callable();
		var isObject = require_is_object();
		var setPrototypeOf = require_object_set_prototype_of();
		module.exports = function($this, dummy, Wrapper) {
			var NewTarget, NewTargetPrototype;
			if (setPrototypeOf && isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
			return $this;
		};
	}));
	var require_normalize_string_argument = __commonJSMin$1(((exports, module) => {
		var toString = require_to_string();
		module.exports = function(argument, $default) {
			return argument === void 0 ? arguments.length < 2 ? "" : $default : toString(argument);
		};
	}));
	var require_install_error_cause = __commonJSMin$1(((exports, module) => {
		var isObject = require_is_object();
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		module.exports = function(O, options) {
			if (isObject(options) && "cause" in options) createNonEnumerableProperty(O, "cause", options.cause);
		};
	}));
	var require_error_stack_clear = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var $Error = Error;
		var replace = uncurryThis("".replace);
		var TEST = (function(arg) {
			return String(new $Error(arg).stack);
		})("zxcasd");
		var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
		var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
		module.exports = function(stack, dropEntries) {
			if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace) while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
			return stack;
		};
	}));
	var require_error_stack_installable = __commonJSMin$1(((exports, module) => {
		var fails = require_fails();
		var createPropertyDescriptor = require_create_property_descriptor();
		module.exports = !fails(function() {
			var error = new Error("a");
			if (!("stack" in error)) return true;
			Object.defineProperty(error, "stack", createPropertyDescriptor(1, 7));
			return error.stack !== 7;
		});
	}));
	var require_error_stack_install = __commonJSMin$1(((exports, module) => {
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		var clearErrorStack = require_error_stack_clear();
		var ERROR_STACK_INSTALLABLE = require_error_stack_installable();
		var captureStackTrace = Error.captureStackTrace;
		module.exports = function(error, C, stack, dropEntries) {
			if (ERROR_STACK_INSTALLABLE) {
				if (captureStackTrace) captureStackTrace(error, C);
				else createNonEnumerableProperty(error, "stack", clearErrorStack(stack, dropEntries));
			}
		};
	}));
	var require_wrap_error_constructor_with_cause = __commonJSMin$1(((exports, module) => {
		var getBuiltIn = require_get_built_in();
		var hasOwn = require_has_own_property();
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		var isPrototypeOf = require_object_is_prototype_of();
		var setPrototypeOf = require_object_set_prototype_of();
		var copyConstructorProperties = require_copy_constructor_properties();
		var proxyAccessor = require_proxy_accessor();
		var inheritIfRequired = require_inherit_if_required();
		var normalizeStringArgument = require_normalize_string_argument();
		var installErrorCause = require_install_error_cause();
		var installErrorStack = require_error_stack_install();
		var DESCRIPTORS = require_descriptors();
		var IS_PURE = require_is_pure();
		module.exports = function(FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
			var STACK_TRACE_LIMIT = "stackTraceLimit";
			var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
			var path = FULL_NAME.split(".");
			var ERROR_NAME = path[path.length - 1];
			var OriginalError = getBuiltIn.apply(null, path);
			if (!OriginalError) return;
			var OriginalErrorPrototype = OriginalError.prototype;
			if (!IS_PURE && hasOwn(OriginalErrorPrototype, "cause")) delete OriginalErrorPrototype.cause;
			if (!FORCED) return OriginalError;
			var BaseError = getBuiltIn("Error");
			var WrappedError = wrapper(function(a, b) {
				var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, void 0);
				var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
				if (message !== void 0) createNonEnumerableProperty(result, "message", message);
				installErrorStack(result, WrappedError, result.stack, 2);
				if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
				if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
				return result;
			});
			WrappedError.prototype = OriginalErrorPrototype;
			if (ERROR_NAME !== "Error") {
				if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
				else copyConstructorProperties(WrappedError, BaseError, { name: true });
			} else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
				proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
				proxyAccessor(WrappedError, OriginalError, "prepareStackTrace");
			}
			copyConstructorProperties(WrappedError, OriginalError);
			if (!IS_PURE) try {
				if (OriginalErrorPrototype.name !== ERROR_NAME) createNonEnumerableProperty(OriginalErrorPrototype, "name", ERROR_NAME);
				OriginalErrorPrototype.constructor = WrappedError;
			} catch (error) {}
			return WrappedError;
		};
	}));
	var require_es_error_cause = __commonJSMin$1((() => {
		var $ = require_export();
		var globalThis = require_global_this();
		var apply = require_function_apply();
		var wrapErrorConstructorWithCause = require_wrap_error_constructor_with_cause();
		var WEB_ASSEMBLY = "WebAssembly";
		var WebAssembly = globalThis[WEB_ASSEMBLY];
		var FORCED = new Error("e", { cause: 7 }).cause !== 7;
		var exportGlobalErrorCauseWrapper = function(ERROR_NAME, wrapper) {
			var O = {};
			O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
			$({
				global: true,
				constructor: true,
				arity: 1,
				forced: FORCED
			}, O);
		};
		var exportWebAssemblyErrorCauseWrapper = function(ERROR_NAME, wrapper) {
			if (WebAssembly && WebAssembly[ERROR_NAME]) {
				var O = {};
				O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + "." + ERROR_NAME, wrapper, FORCED);
				$({
					target: WEB_ASSEMBLY,
					stat: true,
					constructor: true,
					arity: 1,
					forced: FORCED
				}, O);
			}
		};
		exportGlobalErrorCauseWrapper("Error", function(init) {
			return function Error(message) {
				return apply(init, this, arguments);
			};
		});
		exportGlobalErrorCauseWrapper("EvalError", function(init) {
			return function EvalError(message) {
				return apply(init, this, arguments);
			};
		});
		exportGlobalErrorCauseWrapper("RangeError", function(init) {
			return function RangeError(message) {
				return apply(init, this, arguments);
			};
		});
		exportGlobalErrorCauseWrapper("ReferenceError", function(init) {
			return function ReferenceError(message) {
				return apply(init, this, arguments);
			};
		});
		exportGlobalErrorCauseWrapper("SyntaxError", function(init) {
			return function SyntaxError(message) {
				return apply(init, this, arguments);
			};
		});
		exportGlobalErrorCauseWrapper("TypeError", function(init) {
			return function TypeError(message) {
				return apply(init, this, arguments);
			};
		});
		exportGlobalErrorCauseWrapper("URIError", function(init) {
			return function URIError(message) {
				return apply(init, this, arguments);
			};
		});
		exportWebAssemblyErrorCauseWrapper("CompileError", function(init) {
			return function CompileError(message) {
				return apply(init, this, arguments);
			};
		});
		exportWebAssemblyErrorCauseWrapper("LinkError", function(init) {
			return function LinkError(message) {
				return apply(init, this, arguments);
			};
		});
		exportWebAssemblyErrorCauseWrapper("RuntimeError", function(init) {
			return function RuntimeError(message) {
				return apply(init, this, arguments);
			};
		});
	}));
	var require_is_array = __commonJSMin$1(((exports, module) => {
		var classof = require_classof_raw();
		module.exports = Array.isArray || function isArray(argument) {
			return classof(argument) === "Array";
		};
	}));
	var require_does_not_exceed_safe_integer = __commonJSMin$1(((exports, module) => {
		var $TypeError = TypeError;
		var MAX_SAFE_INTEGER = 9007199254740991;
		module.exports = function(it) {
			if (it > MAX_SAFE_INTEGER) throw new $TypeError("Maximum allowed index exceeded");
			return it;
		};
	}));
	var require_function_uncurry_this_clause = __commonJSMin$1(((exports, module) => {
		var classofRaw = require_classof_raw();
		var uncurryThis = require_function_uncurry_this();
		module.exports = function(fn) {
			if (classofRaw(fn) === "Function") return uncurryThis(fn);
		};
	}));
	var require_function_bind_context = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this_clause();
		var aCallable = require_a_callable();
		var NATIVE_BIND = require_function_bind_native();
		var bind = uncurryThis(uncurryThis.bind);
		module.exports = function(fn, that) {
			aCallable(fn);
			return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
				return fn.apply(that, arguments);
			};
		};
	}));
	var require_create_property = __commonJSMin$1(((exports, module) => {
		var DESCRIPTORS = require_descriptors();
		var definePropertyModule = require_object_define_property();
		var createPropertyDescriptor = require_create_property_descriptor();
		module.exports = function(object, key, value) {
			if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
			else object[key] = value;
		};
	}));
	var require_flatten_into_array = __commonJSMin$1(((exports, module) => {
		var isArray = require_is_array();
		var lengthOfArrayLike = require_length_of_array_like();
		var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
		var bind = require_function_bind_context();
		var createProperty = require_create_property();
		var flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
			var targetIndex = start;
			var sourceIndex = 0;
			var mapFn = mapper ? bind(mapper, thisArg) : false;
			var element, elementLen;
			while (sourceIndex < sourceLen) {
				if (sourceIndex in source) {
					element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
					if (depth > 0 && isArray(element)) {
						elementLen = lengthOfArrayLike(element);
						targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
					} else {
						doesNotExceedSafeInteger(targetIndex + 1);
						createProperty(target, targetIndex, element);
					}
					targetIndex++;
				}
				sourceIndex++;
			}
			return targetIndex;
		};
		module.exports = flattenIntoArray;
	}));
	var require_is_constructor = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var fails = require_fails();
		var isCallable = require_is_callable();
		var classof = require_classof();
		var getBuiltIn = require_get_built_in();
		var inspectSource = require_inspect_source();
		var noop = function() {};
		var construct = getBuiltIn("Reflect", "construct");
		var constructorRegExp = /^\s*(?:class|function)\b/;
		var exec = uncurryThis(constructorRegExp.exec);
		var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
		var isConstructorModern = function isConstructor(argument) {
			if (!isCallable(argument)) return false;
			try {
				construct(noop, [], argument);
				return true;
			} catch (error) {
				return false;
			}
		};
		var isConstructorLegacy = function isConstructor(argument) {
			if (!isCallable(argument)) return false;
			switch (classof(argument)) {
				case "AsyncFunction":
				case "GeneratorFunction":
				case "AsyncGeneratorFunction": return false;
			}
			try {
				return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
			} catch (error) {
				return true;
			}
		};
		isConstructorLegacy.sham = true;
		module.exports = !construct || fails(function() {
			var called;
			return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
				called = true;
			}) || called;
		}) ? isConstructorLegacy : isConstructorModern;
	}));
	var require_array_species_constructor = __commonJSMin$1(((exports, module) => {
		var isArray = require_is_array();
		var isConstructor = require_is_constructor();
		var isObject = require_is_object();
		var SPECIES = require_well_known_symbol()("species");
		var $Array = Array;
		module.exports = function(originalArray) {
			var C;
			if (isArray(originalArray)) {
				C = originalArray.constructor;
				if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = void 0;
				else if (isObject(C)) {
					C = C[SPECIES];
					if (C === null) C = void 0;
				}
			}
			return C === void 0 ? $Array : C;
		};
	}));
	var require_array_species_create = __commonJSMin$1(((exports, module) => {
		var arraySpeciesConstructor = require_array_species_constructor();
		module.exports = function(originalArray, length) {
			return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
		};
	}));
	var require_es_array_flat_map = __commonJSMin$1((() => {
		var $ = require_export();
		var flattenIntoArray = require_flatten_into_array();
		var aCallable = require_a_callable();
		var toObject = require_to_object();
		var lengthOfArrayLike = require_length_of_array_like();
		var arraySpeciesCreate = require_array_species_create();
		$({
			target: "Array",
			proto: true
		}, { flatMap: function flatMap(callbackfn) {
			var O = toObject(this);
			var sourceLen = lengthOfArrayLike(O);
			var A;
			aCallable(callbackfn);
			A = arraySpeciesCreate(O, 0);
			flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
			return A;
		} });
	}));
	var require_object_keys = __commonJSMin$1(((exports, module) => {
		var internalObjectKeys = require_object_keys_internal();
		var enumBugKeys = require_enum_bug_keys();
		module.exports = Object.keys || function keys(O) {
			return internalObjectKeys(O, enumBugKeys);
		};
	}));
	var require_object_define_properties = __commonJSMin$1(((exports) => {
		var DESCRIPTORS = require_descriptors();
		var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
		var definePropertyModule = require_object_define_property();
		var anObject = require_an_object();
		var toIndexedObject = require_to_indexed_object();
		var objectKeys = require_object_keys();
		exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
			anObject(O);
			var props = toIndexedObject(Properties);
			var keys = objectKeys(Properties);
			var length = keys.length;
			var index = 0;
			var key;
			while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
			return O;
		};
	}));
	var require_html = __commonJSMin$1(((exports, module) => {
		module.exports = require_get_built_in()("document", "documentElement");
	}));
	var require_object_create = __commonJSMin$1(((exports, module) => {
		var anObject = require_an_object();
		var definePropertiesModule = require_object_define_properties();
		var enumBugKeys = require_enum_bug_keys();
		var hiddenKeys = require_hidden_keys();
		var html = require_html();
		var documentCreateElement = require_document_create_element();
		var sharedKey = require_shared_key();
		var GT = ">";
		var LT = "<";
		var PROTOTYPE = "prototype";
		var SCRIPT = "script";
		var IE_PROTO = sharedKey("IE_PROTO");
		var EmptyConstructor = function() {};
		var scriptTag = function(content) {
			return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
		};
		var NullProtoObjectViaActiveX = function(activeXDocument) {
			activeXDocument.write(scriptTag(""));
			activeXDocument.close();
			var temp = activeXDocument.parentWindow.Object;
			activeXDocument = null;
			return temp;
		};
		var NullProtoObjectViaIFrame = function() {
			var iframe = documentCreateElement("iframe");
			var JS = "java" + SCRIPT + ":";
			var iframeDocument;
			iframe.style.display = "none";
			html.appendChild(iframe);
			iframe.src = String(JS);
			iframeDocument = iframe.contentWindow.document;
			iframeDocument.open();
			iframeDocument.write(scriptTag("document.F=Object"));
			iframeDocument.close();
			return iframeDocument.F;
		};
		var activeXDocument;
		var NullProtoObject = function() {
			try {
				activeXDocument = new ActiveXObject("htmlfile");
			} catch (error) {}
			NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
			var length = enumBugKeys.length;
			while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
			return NullProtoObject();
		};
		hiddenKeys[IE_PROTO] = true;
		module.exports = Object.create || function create(O, Properties) {
			var result;
			if (O !== null) {
				EmptyConstructor[PROTOTYPE] = anObject(O);
				result = new EmptyConstructor();
				EmptyConstructor[PROTOTYPE] = null;
				result[IE_PROTO] = O;
			} else result = NullProtoObject();
			return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
		};
	}));
	var require_add_to_unscopables = __commonJSMin$1(((exports, module) => {
		var wellKnownSymbol = require_well_known_symbol();
		var create = require_object_create();
		var defineProperty = require_object_define_property().f;
		var UNSCOPABLES = wellKnownSymbol("unscopables");
		var ArrayPrototype = Array.prototype;
		if (ArrayPrototype[UNSCOPABLES] === void 0) defineProperty(ArrayPrototype, UNSCOPABLES, {
			configurable: true,
			value: create(null)
		});
		module.exports = function(key) {
			ArrayPrototype[UNSCOPABLES][key] = true;
		};
	}));
	var require_es_array_includes = __commonJSMin$1((() => {
		var $ = require_export();
		var $includes = require_array_includes().includes;
		var fails = require_fails();
		var addToUnscopables = require_add_to_unscopables();
		var BROKEN_ON_SPARSE = fails(function() {
			return !Array(1).includes();
		});
		var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails(function() {
			return [, 1].includes(void 0, 1);
		});
		$({
			target: "Array",
			proto: true,
			forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX
		}, { includes: function includes(el) {
			return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
		} });
		addToUnscopables("includes");
	}));
	var require_iterators = __commonJSMin$1(((exports, module) => {
		module.exports = Object.create ? Object.create(null) : {};
	}));
	var require_correct_prototype_getter = __commonJSMin$1(((exports, module) => {
		module.exports = !require_fails()(function() {
			function F() {}
			F.prototype.constructor = null;
			return Object.getPrototypeOf(new F()) !== F.prototype;
		});
	}));
	var require_object_get_prototype_of = __commonJSMin$1(((exports, module) => {
		var hasOwn = require_has_own_property();
		var isCallable = require_is_callable();
		var toObject = require_to_object();
		var sharedKey = require_shared_key();
		var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
		var IE_PROTO = sharedKey("IE_PROTO");
		var $Object = Object;
		var ObjectPrototype = $Object.prototype;
		module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
			var object = toObject(O);
			if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
			var constructor = object.constructor;
			if (isCallable(constructor) && object instanceof constructor) return constructor.prototype;
			return object instanceof $Object ? ObjectPrototype : null;
		};
	}));
	var require_iterators_core = __commonJSMin$1(((exports, module) => {
		var fails = require_fails();
		var isCallable = require_is_callable();
		var isObject = require_is_object();
		var create = require_object_create();
		var getPrototypeOf = require_object_get_prototype_of();
		var defineBuiltIn = require_define_built_in();
		var wellKnownSymbol = require_well_known_symbol();
		var IS_PURE = require_is_pure();
		var ITERATOR = wellKnownSymbol("iterator");
		var BUGGY_SAFARI_ITERATORS = false;
		var IteratorPrototype;
		var PrototypeOfArrayIteratorPrototype;
		var arrayIterator;
		if ([].keys) {
			arrayIterator = [].keys();
			if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
			else {
				PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
				if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
			}
		}
		if (!isObject(IteratorPrototype) || fails(function() {
			var test = {};
			return IteratorPrototype[ITERATOR].call(test) !== test;
		})) IteratorPrototype = {};
		else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
		if (!isCallable(IteratorPrototype[ITERATOR])) defineBuiltIn(IteratorPrototype, ITERATOR, function() {
			return this;
		});
		module.exports = {
			IteratorPrototype,
			BUGGY_SAFARI_ITERATORS
		};
	}));
	var require_set_to_string_tag = __commonJSMin$1(((exports, module) => {
		var defineProperty = require_object_define_property().f;
		var hasOwn = require_has_own_property();
		var TO_STRING_TAG = require_well_known_symbol()("toStringTag");
		module.exports = function(target, TAG, STATIC) {
			if (target && !STATIC) target = target.prototype;
			if (target && !hasOwn(target, TO_STRING_TAG)) defineProperty(target, TO_STRING_TAG, {
				configurable: true,
				value: TAG
			});
		};
	}));
	var require_iterator_create_constructor = __commonJSMin$1(((exports, module) => {
		var IteratorPrototype = require_iterators_core().IteratorPrototype;
		var create = require_object_create();
		var createPropertyDescriptor = require_create_property_descriptor();
		var setToStringTag = require_set_to_string_tag();
		var Iterators = require_iterators();
		var returnThis = function() {
			return this;
		};
		module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
			var TO_STRING_TAG = NAME + " Iterator";
			IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
			setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
			Iterators[TO_STRING_TAG] = returnThis;
			return IteratorConstructor;
		};
	}));
	var require_iterator_define = __commonJSMin$1(((exports, module) => {
		var $ = require_export();
		var call = require_function_call();
		var IS_PURE = require_is_pure();
		var FunctionName = require_function_name();
		var isCallable = require_is_callable();
		var createIteratorConstructor = require_iterator_create_constructor();
		var getPrototypeOf = require_object_get_prototype_of();
		var setPrototypeOf = require_object_set_prototype_of();
		var setToStringTag = require_set_to_string_tag();
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		var defineBuiltIn = require_define_built_in();
		var wellKnownSymbol = require_well_known_symbol();
		var Iterators = require_iterators();
		var IteratorsCore = require_iterators_core();
		var PROPER_FUNCTION_NAME = FunctionName.PROPER;
		var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
		var IteratorPrototype = IteratorsCore.IteratorPrototype;
		var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
		var ITERATOR = wellKnownSymbol("iterator");
		var KEYS = "keys";
		var VALUES = "values";
		var ENTRIES = "entries";
		var returnThis = function() {
			return this;
		};
		module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
			createIteratorConstructor(IteratorConstructor, NAME, next);
			var getIterationMethod = function(KIND) {
				if (KIND === DEFAULT && defaultIterator) return defaultIterator;
				if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
				switch (KIND) {
					case KEYS: return function keys() {
						return new IteratorConstructor(this, KIND);
					};
					case VALUES: return function values() {
						return new IteratorConstructor(this, KIND);
					};
					case ENTRIES: return function entries() {
						return new IteratorConstructor(this, KIND);
					};
				}
				return function() {
					return new IteratorConstructor(this);
				};
			};
			var TO_STRING_TAG = NAME + " Iterator";
			var INCORRECT_VALUES_NAME = false;
			var IterablePrototype = Iterable.prototype;
			var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
			var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
			var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
			var CurrentIteratorPrototype, methods, KEY;
			if (anyNativeIterator) {
				CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
				if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
					if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
						if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
						else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
					}
					setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
					if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
				}
			}
			if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
				if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) createNonEnumerableProperty(IterablePrototype, "name", VALUES);
				else {
					INCORRECT_VALUES_NAME = true;
					defaultIterator = function values() {
						return call(nativeIterator, this);
					};
				}
			}
			if (DEFAULT) {
				methods = {
					values: getIterationMethod(VALUES),
					keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
					entries: getIterationMethod(ENTRIES)
				};
				if (FORCED) {
					for (KEY in methods) if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
				} else $({
					target: NAME,
					proto: true,
					forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
				}, methods);
			}
			if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
			Iterators[NAME] = defaultIterator;
			return methods;
		};
	}));
	var require_create_iter_result_object = __commonJSMin$1(((exports, module) => {
		module.exports = function(value, done) {
			return {
				value,
				done
			};
		};
	}));
	var require_es_array_iterator = __commonJSMin$1(((exports, module) => {
		var toIndexedObject = require_to_indexed_object();
		var addToUnscopables = require_add_to_unscopables();
		var Iterators = require_iterators();
		var InternalStateModule = require_internal_state();
		var defineProperty = require_object_define_property().f;
		var defineIterator = require_iterator_define();
		var createIterResultObject = require_create_iter_result_object();
		var IS_PURE = require_is_pure();
		var DESCRIPTORS = require_descriptors();
		var ARRAY_ITERATOR = "Array Iterator";
		var setInternalState = InternalStateModule.set;
		var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
		module.exports = defineIterator(Array, "Array", function(iterated, kind) {
			setInternalState(this, {
				type: ARRAY_ITERATOR,
				target: toIndexedObject(iterated),
				index: 0,
				kind
			});
		}, function() {
			var state = getInternalState(this);
			var target = state.target;
			var index = state.index++;
			if (!target || index >= target.length) {
				state.target = null;
				return createIterResultObject(void 0, true);
			}
			switch (state.kind) {
				case "keys": return createIterResultObject(index, false);
				case "values": return createIterResultObject(target[index], false);
			}
			return createIterResultObject([index, target[index]], false);
		}, "values");
		var values = Iterators.Arguments = Iterators.Array;
		addToUnscopables("keys");
		addToUnscopables("values");
		addToUnscopables("entries");
		if (!IS_PURE && DESCRIPTORS && values.name !== "values") try {
			defineProperty(values, "name", { value: "values" });
		} catch (error) {}
	}));
	var require_array_set_length = __commonJSMin$1(((exports, module) => {
		var DESCRIPTORS = require_descriptors();
		var isArray = require_is_array();
		var $TypeError = TypeError;
		var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		module.exports = DESCRIPTORS && !function() {
			if (this !== void 0) return true;
			try {
				Object.defineProperty([], "length", { writable: false }).length = 1;
			} catch (error) {
				return error instanceof TypeError;
			}
		}() ? function(O, length) {
			if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) throw new $TypeError("Cannot set read only .length");
			return O.length = length;
		} : function(O, length) {
			return O.length = length;
		};
	}));
	var require_es_array_push = __commonJSMin$1((() => {
		var $ = require_export();
		var toObject = require_to_object();
		var lengthOfArrayLike = require_length_of_array_like();
		var setArrayLength = require_array_set_length();
		var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
		var INCORRECT_TO_LENGTH = require_fails()(function() {
			return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
		});
		var properErrorOnNonWritableLength = function() {
			try {
				Object.defineProperty([], "length", { writable: false }).push();
			} catch (error) {
				return error instanceof TypeError;
			}
		};
		$({
			target: "Array",
			proto: true,
			arity: 1,
			forced: INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength()
		}, { push: function push(item) {
			var O = toObject(this);
			var len = lengthOfArrayLike(O);
			var argCount = arguments.length;
			doesNotExceedSafeInteger(len + argCount);
			for (var i = 0; i < argCount; i++) {
				O[len] = arguments[i];
				len++;
			}
			setArrayLength(O, len);
			return len;
		} });
	}));
	var require_array_reduce = __commonJSMin$1(((exports, module) => {
		var aCallable = require_a_callable();
		var toObject = require_to_object();
		var IndexedObject = require_indexed_object();
		var lengthOfArrayLike = require_length_of_array_like();
		var $TypeError = TypeError;
		var REDUCE_EMPTY = "Reduce of empty array with no initial value";
		var createMethod = function(IS_RIGHT) {
			return function(that, callbackfn, argumentsLength, memo) {
				var O = toObject(that);
				var self = IndexedObject(O);
				var length = lengthOfArrayLike(O);
				aCallable(callbackfn);
				if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
				var index = IS_RIGHT ? length - 1 : 0;
				var i = IS_RIGHT ? -1 : 1;
				if (argumentsLength < 2) while (true) {
					if (index in self) {
						memo = self[index];
						index += i;
						break;
					}
					index += i;
					if (IS_RIGHT ? index < 0 : length <= index) throw new $TypeError(REDUCE_EMPTY);
				}
				for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) memo = callbackfn(memo, self[index], index, O);
				return memo;
			};
		};
		module.exports = {
			left: createMethod(false),
			right: createMethod(true)
		};
	}));
	var require_array_method_is_strict = __commonJSMin$1(((exports, module) => {
		var fails = require_fails();
		module.exports = function(METHOD_NAME, argument) {
			var method = [][METHOD_NAME];
			return !!method && fails(function() {
				method.call(null, argument || function() {
					return 1;
				}, 1);
			});
		};
	}));
	var require_environment = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		var userAgent = require_environment_user_agent();
		var classof = require_classof_raw();
		var userAgentStartsWith = function(string) {
			return userAgent.slice(0, string.length) === string;
		};
		module.exports = (function() {
			if (userAgentStartsWith("Bun/")) return "BUN";
			if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
			if (userAgentStartsWith("Deno/")) return "DENO";
			if (userAgentStartsWith("Node.js/")) return "NODE";
			if (globalThis.Bun && typeof Bun.version == "string") return "BUN";
			if (globalThis.Deno && typeof Deno.version == "object") return "DENO";
			if (classof(globalThis.process) === "process") return "NODE";
			if (globalThis.window && globalThis.document) return "BROWSER";
			return "REST";
		})();
	}));
	var require_environment_is_node = __commonJSMin$1(((exports, module) => {
		module.exports = require_environment() === "NODE";
	}));
	var require_es_array_reduce = __commonJSMin$1((() => {
		var $ = require_export();
		var $reduce = require_array_reduce().left;
		var arrayMethodIsStrict = require_array_method_is_strict();
		var CHROME_VERSION = require_environment_v8_version();
		$({
			target: "Array",
			proto: true,
			forced: !require_environment_is_node() && CHROME_VERSION > 79 && CHROME_VERSION < 83 || !arrayMethodIsStrict("reduce")
		}, { reduce: function reduce(callbackfn) {
			var length = arguments.length;
			return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
		} });
	}));
	var require_es_array_reverse = __commonJSMin$1((() => {
		var $ = require_export();
		var uncurryThis = require_function_uncurry_this();
		var isArray = require_is_array();
		var nativeReverse = uncurryThis([].reverse);
		var test = [1, 2];
		$({
			target: "Array",
			proto: true,
			forced: String(test) === String(test.reverse())
		}, { reverse: function reverse() {
			if (isArray(this)) this.length = this.length;
			return nativeReverse(this);
		} });
	}));
	var require_es_array_unscopables_flat_map = __commonJSMin$1((() => {
		require_add_to_unscopables()("flatMap");
	}));
	var require_delete_property_or_throw = __commonJSMin$1(((exports, module) => {
		var tryToString = require_try_to_string();
		var $TypeError = TypeError;
		module.exports = function(O, P) {
			if (!delete O[P]) throw new $TypeError("Cannot delete property " + tryToString(P) + " of " + tryToString(O));
		};
	}));
	var require_es_array_unshift = __commonJSMin$1((() => {
		var $ = require_export();
		var toObject = require_to_object();
		var lengthOfArrayLike = require_length_of_array_like();
		var setArrayLength = require_array_set_length();
		var deletePropertyOrThrow = require_delete_property_or_throw();
		var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
		var INCORRECT_RESULT = [].unshift(0) !== 1;
		var properErrorOnNonWritableLength = function() {
			try {
				Object.defineProperty([], "length", { writable: false }).unshift();
			} catch (error) {
				return error instanceof TypeError;
			}
		};
		$({
			target: "Array",
			proto: true,
			arity: 1,
			forced: INCORRECT_RESULT || !properErrorOnNonWritableLength()
		}, { unshift: function unshift(item) {
			var O = toObject(this);
			var len = lengthOfArrayLike(O);
			var argCount = arguments.length;
			if (argCount) {
				doesNotExceedSafeInteger(len + argCount);
				var k = len;
				while (k--) {
					var to = k + argCount;
					if (k in O) O[to] = O[k];
					else deletePropertyOrThrow(O, to);
				}
				for (var j = 0; j < argCount; j++) O[j] = arguments[j];
			}
			return setArrayLength(O, len + argCount);
		} });
	}));
	var require_an_instance = __commonJSMin$1(((exports, module) => {
		var isPrototypeOf = require_object_is_prototype_of();
		var $TypeError = TypeError;
		module.exports = function(it, Prototype) {
			if (isPrototypeOf(Prototype, it)) return it;
			throw new $TypeError("Incorrect invocation");
		};
	}));
	var require_es_iterator_constructor = __commonJSMin$1((() => {
		var $ = require_export();
		var globalThis = require_global_this();
		var anInstance = require_an_instance();
		var anObject = require_an_object();
		var isCallable = require_is_callable();
		var getPrototypeOf = require_object_get_prototype_of();
		var defineBuiltInAccessor = require_define_built_in_accessor();
		var createProperty = require_create_property();
		var fails = require_fails();
		var hasOwn = require_has_own_property();
		var wellKnownSymbol = require_well_known_symbol();
		var IteratorPrototype = require_iterators_core().IteratorPrototype;
		var DESCRIPTORS = require_descriptors();
		var IS_PURE = require_is_pure();
		var CONSTRUCTOR = "constructor";
		var ITERATOR = "Iterator";
		var TO_STRING_TAG = wellKnownSymbol("toStringTag");
		var $TypeError = TypeError;
		var NativeIterator = globalThis[ITERATOR];
		var FORCED = IS_PURE || !isCallable(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails(function() {
			NativeIterator({});
		});
		var IteratorConstructor = function Iterator() {
			anInstance(this, IteratorPrototype);
			if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError("Abstract class Iterator not directly constructable");
		};
		var defineIteratorPrototypeAccessor = function(key, value) {
			if (DESCRIPTORS) defineBuiltInAccessor(IteratorPrototype, key, {
				configurable: true,
				get: function() {
					return value;
				},
				set: function(replacement) {
					anObject(this);
					if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
					if (hasOwn(this, key)) this[key] = replacement;
					else createProperty(this, key, replacement);
				}
			});
			else IteratorPrototype[key] = value;
		};
		if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
		if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
		IteratorConstructor.prototype = IteratorPrototype;
		$({
			global: true,
			constructor: true,
			forced: FORCED
		}, { Iterator: IteratorConstructor });
	}));
	var require_get_iterator_direct = __commonJSMin$1(((exports, module) => {
		module.exports = function(obj) {
			return {
				iterator: obj,
				next: obj.next,
				done: false
			};
		};
	}));
	var require_define_built_ins = __commonJSMin$1(((exports, module) => {
		var defineBuiltIn = require_define_built_in();
		module.exports = function(target, src, options) {
			for (var key in src) defineBuiltIn(target, key, src[key], options);
			return target;
		};
	}));
	var require_iterator_close = __commonJSMin$1(((exports, module) => {
		var call = require_function_call();
		var anObject = require_an_object();
		var getMethod = require_get_method();
		module.exports = function(iterator, kind, value) {
			var innerResult, innerError;
			anObject(iterator);
			try {
				innerResult = getMethod(iterator, "return");
				if (!innerResult) {
					if (kind === "throw") throw value;
					return value;
				}
				innerResult = call(innerResult, iterator);
			} catch (error) {
				innerError = true;
				innerResult = error;
			}
			if (kind === "throw") throw value;
			if (innerError) throw innerResult;
			anObject(innerResult);
			return value;
		};
	}));
	var require_iterator_close_all = __commonJSMin$1(((exports, module) => {
		var iteratorClose = require_iterator_close();
		module.exports = function(iters, kind, value) {
			for (var i = iters.length - 1; i >= 0; i--) {
				if (iters[i] === void 0) continue;
				try {
					value = iteratorClose(iters[i].iterator, kind, value);
				} catch (error) {
					kind = "throw";
					value = error;
				}
			}
			if (kind === "throw") throw value;
			return value;
		};
	}));
	var require_iterator_cleanup_state = __commonJSMin$1(((exports, module) => {
		module.exports = function(state) {
			state.iterator = state.next = state.nextHandler = state.mapper = state.predicate = state.inner = state.iterables = state.iters = state.openIters = state.padding = state.finishResults = state.buffer = null;
		};
	}));
	var require_iterator_create_proxy = __commonJSMin$1(((exports, module) => {
		var call = require_function_call();
		var create = require_object_create();
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		var defineBuiltIns = require_define_built_ins();
		var wellKnownSymbol = require_well_known_symbol();
		var InternalStateModule = require_internal_state();
		var getMethod = require_get_method();
		var IteratorPrototype = require_iterators_core().IteratorPrototype;
		var createIterResultObject = require_create_iter_result_object();
		var iteratorClose = require_iterator_close();
		var iteratorCloseAll = require_iterator_close_all();
		var cleanupState = require_iterator_cleanup_state();
		var TO_STRING_TAG = wellKnownSymbol("toStringTag");
		var ITERATOR_HELPER = "IteratorHelper";
		var WRAP_FOR_VALID_ITERATOR = "WrapForValidIterator";
		var NORMAL = "normal";
		var THROW = "throw";
		var setInternalState = InternalStateModule.set;
		var createIteratorProxyPrototype = function(IS_ITERATOR) {
			var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);
			return defineBuiltIns(create(IteratorPrototype), {
				next: function next() {
					var state = getInternalState(this);
					if (IS_ITERATOR) return state.nextHandler();
					if (state.done) return createIterResultObject(void 0, true);
					try {
						var result = state.nextHandler();
						if (state.done) cleanupState(state);
						return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
					} catch (error) {
						state.done = true;
						cleanupState(state);
						throw error;
					}
				},
				"return": function() {
					var state = getInternalState(this);
					var iterator = state.iterator;
					var inner = state.inner;
					var openIters = state.openIters;
					var done = state.done;
					state.done = true;
					if (IS_ITERATOR) {
						var returnMethod = getMethod(iterator, "return");
						return returnMethod ? call(returnMethod, iterator) : createIterResultObject(void 0, true);
					}
					cleanupState(state);
					if (done) return createIterResultObject(void 0, true);
					if (inner) try {
						iteratorClose(inner.iterator, NORMAL);
					} catch (error) {
						return iteratorClose(iterator, THROW, error);
					}
					if (openIters) try {
						iteratorCloseAll(openIters, NORMAL);
					} catch (error) {
						if (iterator) return iteratorClose(iterator, THROW, error);
						throw error;
					}
					if (iterator) iteratorClose(iterator, NORMAL);
					return createIterResultObject(void 0, true);
				}
			});
		};
		var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
		var IteratorHelperPrototype = createIteratorProxyPrototype(false);
		createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, "Iterator Helper");
		module.exports = function(nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
			var IteratorProxy = function Iterator(record, state) {
				if (state) {
					state.iterator = record.iterator;
					state.next = record.next;
				} else state = record;
				state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
				state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
				state.nextHandler = nextHandler;
				state.counter = 0;
				state.done = false;
				setInternalState(this, state);
			};
			IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;
			return IteratorProxy;
		};
	}));
	var require_call_with_safe_iteration_closing = __commonJSMin$1(((exports, module) => {
		var anObject = require_an_object();
		var iteratorClose = require_iterator_close();
		module.exports = function(iterator, fn, value, ENTRIES) {
			try {
				return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
			} catch (error) {
				iteratorClose(iterator, "throw", error);
			}
		};
	}));
	var require_iterator_helper_throws_on_invalid_iterator = __commonJSMin$1(((exports, module) => {
		module.exports = function(methodName, argument) {
			var method = typeof Iterator == "function" && Iterator.prototype[methodName];
			if (method) try {
				method.call({ next: null }, argument).next();
			} catch (error) {
				return true;
			}
		};
	}));
	var require_iterator_helper_without_closing_on_early_error = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		module.exports = function(METHOD_NAME, ExpectedError) {
			var Iterator = globalThis.Iterator;
			var IteratorPrototype = Iterator && Iterator.prototype;
			var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];
			var CLOSED = false;
			if (method) try {
				method.call({
					next: function() {
						return { done: true };
					},
					"return": function() {
						CLOSED = true;
					}
				}, -1);
			} catch (error) {
				if (!(error instanceof ExpectedError)) CLOSED = false;
			}
			if (!CLOSED) return method;
		};
	}));
	var require_es_iterator_filter = __commonJSMin$1((() => {
		var $ = require_export();
		var call = require_function_call();
		var aCallable = require_a_callable();
		var anObject = require_an_object();
		var getIteratorDirect = require_get_iterator_direct();
		var createIteratorProxy = require_iterator_create_proxy();
		var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
		var IS_PURE = require_is_pure();
		var iteratorClose = require_iterator_close();
		var iteratorHelperThrowsOnInvalidIterator = require_iterator_helper_throws_on_invalid_iterator();
		var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
		var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("filter", function() {});
		var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("filter", TypeError);
		var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;
		var IteratorProxy = createIteratorProxy(function() {
			var iterator = this.iterator;
			var predicate = this.predicate;
			var next = this.next;
			var result, done, value;
			while (true) {
				result = anObject(call(next, iterator));
				done = this.done = !!result.done;
				if (done) return;
				value = result.value;
				if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
			}
		});
		$({
			target: "Iterator",
			proto: true,
			real: true,
			forced: FORCED
		}, { filter: function filter(predicate) {
			anObject(this);
			try {
				aCallable(predicate);
			} catch (error) {
				iteratorClose(this, "throw", error);
			}
			if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);
			return new IteratorProxy(getIteratorDirect(this), { predicate });
		} });
	}));
	var require_is_array_iterator_method = __commonJSMin$1(((exports, module) => {
		var wellKnownSymbol = require_well_known_symbol();
		var Iterators = require_iterators();
		var ITERATOR = wellKnownSymbol("iterator");
		var ArrayPrototype = Array.prototype;
		module.exports = function(it) {
			return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
		};
	}));
	var require_get_iterator_method_internal = __commonJSMin$1(((exports, module) => {
		var classof = require_classof_raw();
		var isNullOrUndefined = require_is_null_or_undefined();
		var getMethod = require_get_method();
		var ITERATOR = require_well_known_symbol()("iterator");
		var ArrayPrototype = Array.prototype;
		module.exports = function(it) {
			if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || (classof(it) === "Arguments" ? ArrayPrototype[ITERATOR] : void 0);
		};
	}));
	var require_get_iterator_internal = __commonJSMin$1(((exports, module) => {
		var call = require_function_call();
		var isCallable = require_is_callable();
		var anObject = require_an_object();
		var tryToString = require_try_to_string();
		var getIteratorMethod = require_get_iterator_method_internal();
		var $TypeError = TypeError;
		module.exports = function(argument, usingIterator) {
			var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
			if (isCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
			throw new $TypeError(tryToString(argument) + " is not iterable");
		};
	}));
	var require_iterate = __commonJSMin$1(((exports, module) => {
		var bind = require_function_bind_context();
		var call = require_function_call();
		var anObject = require_an_object();
		var tryToString = require_try_to_string();
		var isArrayIteratorMethod = require_is_array_iterator_method();
		var lengthOfArrayLike = require_length_of_array_like();
		var isPrototypeOf = require_object_is_prototype_of();
		var getIterator = require_get_iterator_internal();
		var getIteratorMethod = require_get_iterator_method_internal();
		var iteratorClose = require_iterator_close();
		var $TypeError = TypeError;
		var Result = function(stopped, result) {
			this.stopped = stopped;
			this.result = result;
		};
		var ResultPrototype = Result.prototype;
		module.exports = function(iterable, unboundFunction, options) {
			var that = options && options.that;
			var AS_ENTRIES = !!(options && options.AS_ENTRIES);
			var IS_RECORD = !!(options && options.IS_RECORD);
			var IS_ITERATOR = !!(options && options.IS_ITERATOR);
			var INTERRUPTED = !!(options && options.INTERRUPTED);
			var fn = bind(unboundFunction, that);
			var iterator, iterFn, index, length, result, next, step;
			var stop = function(condition) {
				var $iterator = iterator;
				iterator = void 0;
				if ($iterator) iteratorClose($iterator, "normal");
				return new Result(true, condition);
			};
			var callFn = function(value) {
				if (AS_ENTRIES) {
					anObject(value);
					return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
				}
				return INTERRUPTED ? fn(value, stop) : fn(value);
			};
			if (IS_RECORD) iterator = iterable.iterator;
			else if (IS_ITERATOR) iterator = iterable;
			else {
				iterFn = getIteratorMethod(iterable);
				if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
				if (isArrayIteratorMethod(iterFn)) {
					for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
						result = callFn(iterable[index]);
						if (result && isPrototypeOf(ResultPrototype, result)) return result;
					}
					return new Result(false);
				}
				iterator = getIterator(iterable, iterFn);
			}
			next = IS_RECORD ? iterable.next : iterator.next;
			while (!(step = call(next, iterator)).done) {
				var value = step.value;
				try {
					result = callFn(value);
				} catch (error) {
					if (iterator) iteratorClose(iterator, "throw", error);
					else throw error;
				}
				if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
			}
			return new Result(false);
		};
	}));
	var require_es_iterator_find = __commonJSMin$1((() => {
		var $ = require_export();
		var call = require_function_call();
		var iterate = require_iterate();
		var aCallable = require_a_callable();
		var anObject = require_an_object();
		var getIteratorDirect = require_get_iterator_direct();
		var iteratorClose = require_iterator_close();
		var findWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error()("find", TypeError);
		$({
			target: "Iterator",
			proto: true,
			real: true,
			forced: findWithoutClosingOnEarlyError
		}, { find: function find(predicate) {
			anObject(this);
			try {
				aCallable(predicate);
			} catch (error) {
				iteratorClose(this, "throw", error);
			}
			if (findWithoutClosingOnEarlyError) return call(findWithoutClosingOnEarlyError, this, predicate);
			var record = getIteratorDirect(this);
			var counter = 0;
			return iterate(record, function(value, stop) {
				if (predicate(value, counter++)) return stop(value);
			}, {
				IS_RECORD: true,
				INTERRUPTED: true
			}).result;
		} });
	}));
	var require_get_iterator_flattenable = __commonJSMin$1(((exports, module) => {
		var call = require_function_call();
		var anObject = require_an_object();
		var getIteratorDirect = require_get_iterator_direct();
		var getIteratorMethod = require_get_iterator_method_internal();
		module.exports = function(obj, stringHandling) {
			if (!stringHandling || typeof obj !== "string") anObject(obj);
			var method = getIteratorMethod(obj);
			return getIteratorDirect(anObject(method !== void 0 ? call(method, obj) : obj));
		};
	}));
	var require_es_iterator_flat_map = __commonJSMin$1((() => {
		var $ = require_export();
		var call = require_function_call();
		var aCallable = require_a_callable();
		var anObject = require_an_object();
		var getIteratorDirect = require_get_iterator_direct();
		var getIteratorFlattenable = require_get_iterator_flattenable();
		var createIteratorProxy = require_iterator_create_proxy();
		var iteratorClose = require_iterator_close();
		var fails = require_fails();
		var IS_PURE = require_is_pure();
		var iteratorHelperThrowsOnInvalidIterator = require_iterator_helper_throws_on_invalid_iterator();
		var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
		var THROWS_ON_ITERATOR_WITHOUT_RETURN = !IS_PURE && fails(function() {
			return [1].values().flatMap(function() {
				return [1];
			}).find(function() {
				return true;
			}) !== 1;
		});
		var FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !THROWS_ON_ITERATOR_WITHOUT_RETURN && !iteratorHelperThrowsOnInvalidIterator("flatMap", function() {});
		var flatMapWithoutClosingOnEarlyError = !IS_PURE && !THROWS_ON_ITERATOR_WITHOUT_RETURN && !FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("flatMap", TypeError);
		var FORCED = IS_PURE || THROWS_ON_ITERATOR_WITHOUT_RETURN || FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || flatMapWithoutClosingOnEarlyError;
		var IteratorProxy = createIteratorProxy(function() {
			var iterator = this.iterator;
			var mapper = this.mapper;
			var result, inner;
			while (true) {
				if (inner = this.inner) try {
					result = anObject(call(inner.next, inner.iterator));
					if (!result.done) return result.value;
					this.inner = null;
				} catch (error) {
					iteratorClose(iterator, "throw", error);
				}
				result = anObject(call(this.next, iterator));
				if (this.done = !!result.done) return;
				try {
					this.inner = getIteratorFlattenable(mapper(result.value, this.counter++), false);
				} catch (error) {
					iteratorClose(iterator, "throw", error);
				}
			}
		});
		$({
			target: "Iterator",
			proto: true,
			real: true,
			forced: FORCED
		}, { flatMap: function flatMap(mapper) {
			anObject(this);
			try {
				aCallable(mapper);
			} catch (error) {
				iteratorClose(this, "throw", error);
			}
			if (flatMapWithoutClosingOnEarlyError) return call(flatMapWithoutClosingOnEarlyError, this, mapper);
			return new IteratorProxy(getIteratorDirect(this), {
				mapper,
				inner: null
			});
		} });
	}));
	var require_es_iterator_for_each = __commonJSMin$1((() => {
		var $ = require_export();
		var call = require_function_call();
		var iterate = require_iterate();
		var aCallable = require_a_callable();
		var anObject = require_an_object();
		var getIteratorDirect = require_get_iterator_direct();
		var iteratorClose = require_iterator_close();
		var forEachWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error()("forEach", TypeError);
		$({
			target: "Iterator",
			proto: true,
			real: true,
			forced: forEachWithoutClosingOnEarlyError
		}, { forEach: function forEach(fn) {
			anObject(this);
			try {
				aCallable(fn);
			} catch (error) {
				iteratorClose(this, "throw", error);
			}
			if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);
			var record = getIteratorDirect(this);
			var counter = 0;
			iterate(record, function(value) {
				fn(value, counter++);
			}, { IS_RECORD: true });
		} });
	}));
	var require_es_iterator_map = __commonJSMin$1((() => {
		var $ = require_export();
		var call = require_function_call();
		var aCallable = require_a_callable();
		var anObject = require_an_object();
		var getIteratorDirect = require_get_iterator_direct();
		var createIteratorProxy = require_iterator_create_proxy();
		var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
		var iteratorClose = require_iterator_close();
		var iteratorHelperThrowsOnInvalidIterator = require_iterator_helper_throws_on_invalid_iterator();
		var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
		var IS_PURE = require_is_pure();
		var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("map", function() {});
		var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("map", TypeError);
		var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;
		var IteratorProxy = createIteratorProxy(function() {
			var iterator = this.iterator;
			var result = anObject(call(this.next, iterator));
			if (!(this.done = !!result.done)) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
		});
		$({
			target: "Iterator",
			proto: true,
			real: true,
			forced: FORCED
		}, { map: function map(mapper) {
			anObject(this);
			try {
				aCallable(mapper);
			} catch (error) {
				iteratorClose(this, "throw", error);
			}
			if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);
			return new IteratorProxy(getIteratorDirect(this), { mapper });
		} });
	}));
	var require_es_iterator_reduce = __commonJSMin$1((() => {
		var $ = require_export();
		var iterate = require_iterate();
		var aCallable = require_a_callable();
		var anObject = require_an_object();
		var getIteratorDirect = require_get_iterator_direct();
		var iteratorClose = require_iterator_close();
		var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
		var apply = require_function_apply();
		var fails = require_fails();
		var $TypeError = TypeError;
		var FAILS_ON_INITIAL_UNDEFINED = fails(function() {
			[].keys().reduce(function() {}, void 0);
		});
		var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError("reduce", $TypeError);
		$({
			target: "Iterator",
			proto: true,
			real: true,
			forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError
		}, { reduce: function reduce(reducer) {
			anObject(this);
			try {
				aCallable(reducer);
			} catch (error) {
				iteratorClose(this, "throw", error);
			}
			var noInitial = arguments.length < 2;
			var accumulator = noInitial ? void 0 : arguments[1];
			if (reduceWithoutClosingOnEarlyError) return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
			var record = getIteratorDirect(this);
			var counter = 0;
			iterate(record, function(value) {
				if (noInitial) {
					noInitial = false;
					accumulator = value;
				} else accumulator = reducer(accumulator, value, counter);
				counter++;
			}, { IS_RECORD: true });
			if (noInitial) throw new $TypeError("Reduce of empty iterator with no initial value");
			return accumulator;
		} });
	}));
	var require_es_iterator_some = __commonJSMin$1((() => {
		var $ = require_export();
		var call = require_function_call();
		var iterate = require_iterate();
		var aCallable = require_a_callable();
		var anObject = require_an_object();
		var getIteratorDirect = require_get_iterator_direct();
		var iteratorClose = require_iterator_close();
		var someWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error()("some", TypeError);
		$({
			target: "Iterator",
			proto: true,
			real: true,
			forced: someWithoutClosingOnEarlyError
		}, { some: function some(predicate) {
			anObject(this);
			try {
				aCallable(predicate);
			} catch (error) {
				iteratorClose(this, "throw", error);
			}
			if (someWithoutClosingOnEarlyError) return call(someWithoutClosingOnEarlyError, this, predicate);
			var record = getIteratorDirect(this);
			var counter = 0;
			return iterate(record, function(value, stop) {
				if (predicate(value, counter++)) return stop();
			}, {
				IS_RECORD: true,
				INTERRUPTED: true
			}).stopped;
		} });
	}));
	var require_parse_json_string = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var hasOwn = require_has_own_property();
		var $SyntaxError = SyntaxError;
		var $parseInt = parseInt;
		var fromCharCode = String.fromCharCode;
		var at = uncurryThis("".charAt);
		var slice = uncurryThis("".slice);
		var exec = uncurryThis(/./.exec);
		var codePoints = {
			"\\\"": "\"",
			"\\\\": "\\",
			"\\/": "/",
			"\\b": "\b",
			"\\f": "\f",
			"\\n": "\n",
			"\\r": "\r",
			"\\t": "	"
		};
		var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
		var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;
		module.exports = function(source, i) {
			var unterminated = true;
			var value = "";
			while (i < source.length) {
				var chr = at(source, i);
				if (chr === "\\") {
					var twoChars = slice(source, i, i + 2);
					if (hasOwn(codePoints, twoChars)) {
						value += codePoints[twoChars];
						i += 2;
					} else if (twoChars === "\\u") {
						i += 2;
						var fourHexDigits = slice(source, i, i + 4);
						if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError("Bad Unicode escape at: " + i);
						value += fromCharCode($parseInt(fourHexDigits, 16));
						i += 4;
					} else throw new $SyntaxError("Unknown escape sequence: \"" + twoChars + "\"");
				} else if (chr === "\"") {
					unterminated = false;
					i++;
					break;
				} else {
					if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError("Bad control character in string literal at: " + i);
					value += chr;
					i++;
				}
			}
			if (unterminated) throw new $SyntaxError("Unterminated string at: " + i);
			return {
				value,
				end: i
			};
		};
	}));
	var require_es_json_parse = __commonJSMin$1((() => {
		var $ = require_export();
		var DESCRIPTORS = require_descriptors();
		var globalThis = require_global_this();
		var getBuiltIn = require_get_built_in();
		var uncurryThis = require_function_uncurry_this();
		var call = require_function_call();
		var isCallable = require_is_callable();
		var isObject = require_is_object();
		var isArray = require_is_array();
		var hasOwn = require_has_own_property();
		var toString = require_to_string();
		var lengthOfArrayLike = require_length_of_array_like();
		var createProperty = require_create_property();
		var fails = require_fails();
		var parseJSONString = require_parse_json_string();
		var NATIVE_SYMBOL = require_symbol_constructor_detection();
		var JSON = globalThis.JSON;
		var Number = globalThis.Number;
		var SyntaxError = globalThis.SyntaxError;
		var nativeParse = JSON && JSON.parse;
		var enumerableOwnProperties = getBuiltIn("Object", "keys");
		var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		var at = uncurryThis("".charAt);
		var slice = uncurryThis("".slice);
		var exec = uncurryThis(/./.exec);
		var push = uncurryThis([].push);
		var IS_DIGIT = /^\d$/;
		var IS_NON_ZERO_DIGIT = /^[1-9]$/;
		var IS_NUMBER_START = /^[\d-]$/;
		var IS_WHITESPACE = /^[\t\n\r ]$/;
		var PRIMITIVE = 0;
		var OBJECT = 1;
		var $parse = function(source, reviver) {
			source = toString(source);
			var context = new Context(source, 0);
			var root = context.parse();
			var value = root.value;
			var endIndex = context.skip(IS_WHITESPACE, root.end);
			if (endIndex < source.length) throw new SyntaxError("Unexpected extra character: \"" + at(source, endIndex) + "\" after the parsed data at: " + endIndex);
			return isCallable(reviver) ? internalize({ "": value }, "", reviver, root) : value;
		};
		var internalize = function(holder, name, reviver, node) {
			var val = holder[name];
			var unmodified = node && val === node.value;
			var context = unmodified && typeof node.source == "string" ? { source: node.source } : {};
			var elementRecordsLen, keys, len, i, P;
			if (isObject(val)) {
				var nodeIsArray = isArray(val);
				var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
				if (nodeIsArray) {
					elementRecordsLen = nodes.length;
					len = lengthOfArrayLike(val);
					for (i = 0; i < len; i++) internalizeProperty(val, i, internalize(val, "" + i, reviver, i < elementRecordsLen ? nodes[i] : void 0));
				} else {
					keys = enumerableOwnProperties(val);
					len = lengthOfArrayLike(keys);
					for (i = 0; i < len; i++) {
						P = keys[i];
						internalizeProperty(val, P, internalize(val, P, reviver, hasOwn(nodes, P) ? nodes[P] : void 0));
					}
				}
			}
			return call(reviver, holder, name, val, context);
		};
		var internalizeProperty = function(object, key, value) {
			if (DESCRIPTORS) {
				var descriptor = getOwnPropertyDescriptor(object, key);
				if (descriptor && !descriptor.configurable) return;
			}
			if (value === void 0) delete object[key];
			else createProperty(object, key, value);
		};
		var Node = function(value, end, source, nodes) {
			this.value = value;
			this.end = end;
			this.source = source;
			this.nodes = nodes;
		};
		var Context = function(source, index) {
			this.source = source;
			this.index = index;
		};
		Context.prototype = {
			fork: function(nextIndex) {
				return new Context(this.source, nextIndex);
			},
			parse: function() {
				var source = this.source;
				var i = this.skip(IS_WHITESPACE, this.index);
				var fork = this.fork(i);
				var chr = at(source, i);
				if (exec(IS_NUMBER_START, chr)) return fork.number();
				switch (chr) {
					case "{": return fork.object();
					case "[": return fork.array();
					case "\"": return fork.string();
					case "t": return fork.keyword(true);
					case "f": return fork.keyword(false);
					case "n": return fork.keyword(null);
				}
				throw new SyntaxError("Unexpected character: \"" + chr + "\" at: " + i);
			},
			node: function(type, value, start, end, nodes) {
				return new Node(value, end, type ? null : slice(this.source, start, end), nodes);
			},
			object: function() {
				var source = this.source;
				var i = this.index + 1;
				var expectKeypair = false;
				var object = {};
				var nodes = {};
				var closed = false;
				while (i < source.length) {
					i = this.until(["\"", "}"], i);
					if (at(source, i) === "}" && !expectKeypair) {
						i++;
						closed = true;
						break;
					}
					var result = this.fork(i).string();
					var key = result.value;
					i = result.end;
					i = this.until([":"], i) + 1;
					i = this.skip(IS_WHITESPACE, i);
					result = this.fork(i).parse();
					createProperty(nodes, key, result);
					createProperty(object, key, result.value);
					i = this.until([",", "}"], result.end);
					var chr = at(source, i);
					if (chr === ",") {
						expectKeypair = true;
						i++;
					} else if (chr === "}") {
						i++;
						closed = true;
						break;
					}
				}
				if (!closed) throw new SyntaxError("Unterminated object at: " + i);
				return this.node(OBJECT, object, this.index, i, nodes);
			},
			array: function() {
				var source = this.source;
				var i = this.index + 1;
				var expectElement = false;
				var array = [];
				var nodes = [];
				var closed = false;
				while (i < source.length) {
					i = this.skip(IS_WHITESPACE, i);
					if (at(source, i) === "]" && !expectElement) {
						i++;
						closed = true;
						break;
					}
					var result = this.fork(i).parse();
					push(nodes, result);
					push(array, result.value);
					i = this.until([",", "]"], result.end);
					if (at(source, i) === ",") {
						expectElement = true;
						i++;
					} else if (at(source, i) === "]") {
						i++;
						closed = true;
						break;
					}
				}
				if (!closed) throw new SyntaxError("Unterminated array at: " + i);
				return this.node(OBJECT, array, this.index, i, nodes);
			},
			string: function() {
				var index = this.index;
				var parsed = parseJSONString(this.source, this.index + 1);
				return this.node(PRIMITIVE, parsed.value, index, parsed.end);
			},
			number: function() {
				var source = this.source;
				var startIndex = this.index;
				var i = startIndex;
				if (at(source, i) === "-") i++;
				if (at(source, i) === "0") i++;
				else if (exec(IS_NON_ZERO_DIGIT, at(source, i))) i = this.skip(IS_DIGIT, i + 1);
				else throw new SyntaxError("Failed to parse number at: " + i);
				if (at(source, i) === ".") {
					var fractionStartIndex = i + 1;
					i = this.skip(IS_DIGIT, fractionStartIndex);
					if (fractionStartIndex === i) throw new SyntaxError("Failed to parse number's fraction at: " + i);
				}
				if (at(source, i) === "e" || at(source, i) === "E") {
					i++;
					if (at(source, i) === "+" || at(source, i) === "-") i++;
					var exponentStartIndex = i;
					i = this.skip(IS_DIGIT, i);
					if (exponentStartIndex === i) throw new SyntaxError("Failed to parse number's exponent value at: " + i);
				}
				return this.node(PRIMITIVE, Number(slice(source, startIndex, i)), startIndex, i);
			},
			keyword: function(value) {
				var keyword = "" + value;
				var index = this.index;
				var endIndex = index + keyword.length;
				if (slice(this.source, index, endIndex) !== keyword) throw new SyntaxError("Failed to parse value at: " + index);
				return this.node(PRIMITIVE, value, index, endIndex);
			},
			skip: function(regex, i) {
				var source = this.source;
				for (; i < source.length; i++) if (!exec(regex, at(source, i))) break;
				return i;
			},
			until: function(array, i) {
				i = this.skip(IS_WHITESPACE, i);
				var chr = at(this.source, i);
				for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
				throw new SyntaxError("Unexpected character: \"" + chr + "\" at: " + i);
			}
		};
		var NO_SOURCE_SUPPORT = fails(function() {
			var unsafeInt = "9007199254740993";
			var source;
			nativeParse(unsafeInt, function(key, value, context) {
				source = context.source;
			});
			return source !== unsafeInt;
		});
		var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails(function() {
			return 1 / nativeParse("-0 	") !== -Infinity;
		});
		$({
			target: "JSON",
			stat: true,
			forced: NO_SOURCE_SUPPORT
		}, { parse: function parse(text, reviver) {
			return PROPER_BASE_PARSE && !isCallable(reviver) ? nativeParse(text) : $parse(text, reviver);
		} });
	}));
	var require_is_raw_json = __commonJSMin$1(((exports, module) => {
		var isObject = require_is_object();
		var getInternalState = require_internal_state().get;
		module.exports = function isRawJSON(O) {
			if (!isObject(O)) return false;
			var state = getInternalState(O);
			return !!state && state.type === "RawJSON";
		};
	}));
	var require_this_number_value = __commonJSMin$1(((exports, module) => {
		module.exports = require_function_uncurry_this()(1.1.valueOf);
	}));
	var require_native_raw_json = __commonJSMin$1(((exports, module) => {
		module.exports = !require_fails()(function() {
			var unsafeInt = "9007199254740993";
			var raw = JSON.rawJSON(unsafeInt);
			return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
		});
	}));
	var require_es_json_stringify = __commonJSMin$1((() => {
		var $ = require_export();
		var getBuiltIn = require_get_built_in();
		var call = require_function_call();
		var uncurryThis = require_function_uncurry_this();
		var fails = require_fails();
		var isArray = require_is_array();
		var isCallable = require_is_callable();
		var isObject = require_is_object();
		var create = require_object_create();
		var isRawJSON = require_is_raw_json();
		var isSymbol = require_is_symbol();
		var classof = require_classof_raw();
		var thisNumberValue = require_this_number_value();
		var includes = require_array_includes().includes;
		var hasOwn = require_has_own_property();
		var toString = require_to_string();
		var parseJSONString = require_parse_json_string();
		var uid = require_uid();
		var NATIVE_SYMBOL = require_symbol_constructor_detection();
		var NATIVE_RAW_JSON = require_native_raw_json();
		var $String = String;
		var $TypeError = TypeError;
		var $stringify = getBuiltIn("JSON", "stringify");
		var $BigInt = getBuiltIn("BigInt");
		var stringValueOf = uncurryThis("".valueOf);
		var booleanValueOf = uncurryThis(true.valueOf);
		var bigIntValueOf = $BigInt && uncurryThis($BigInt.prototype.valueOf);
		var exec = uncurryThis(/./.exec);
		var charAt = uncurryThis("".charAt);
		var charCodeAt = uncurryThis("".charCodeAt);
		var replace = uncurryThis("".replace);
		var slice = uncurryThis("".slice);
		var push = uncurryThis([].push);
		var pop = uncurryThis([].pop);
		var numberToString = uncurryThis(1.1.toString);
		var surrogates = /[\uD800-\uDFFF]/g;
		var leadingSurrogates = /^[\uD800-\uDBFF]$/;
		var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
		var digits = /^\d+$/;
		var RAW_MARK = uid();
		var KEY_MARK = uid();
		var END_MARK = uid();
		var RAW_MARK_LENGTH = RAW_MARK.length;
		var KEY_MARK_LENGTH = KEY_MARK.length;
		var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function() {
			var symbol = getBuiltIn("Symbol")("stringify detection");
			return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
		});
		var ILL_FORMED_UNICODE = fails(function() {
			return $stringify("\udf06\ud834") !== "\"\\udf06\\ud834\"" || $stringify("\udead") !== "\"\\udead\"";
		});
		var isRawJSONValue = NATIVE_RAW_JSON ? getBuiltIn("JSON", "isRawJSON") : isRawJSON;
		var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function(it, replacer, space) {
			return $stringify(it, function(key, value) {
				var replaced = call(replacer, this, key, value);
				if (!isSymbol(replaced)) return replaced;
			}, space);
		} : $stringify;
		var fixIllFormedJSON = function(match, offset, string) {
			var prev = charAt(string, offset - 1);
			var next = charAt(string, offset + 1);
			if (exec(leadingSurrogates, match) && !exec(trailingSurrogates, next) || exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev)) return "\\u" + numberToString(charCodeAt(match, 0), 16);
			return match;
		};
		var getPropertyList = function(replacer) {
			if (!isArray(replacer)) return;
			var rawLength = replacer.length;
			var propertyList = [];
			var addedKeys = create(null);
			for (var i = 0; i < rawLength; i++) {
				var element = replacer[i];
				var key;
				if (typeof element == "string") key = element;
				else if (typeof element == "number" || classof(element) === "Number" || classof(element) === "String") key = toString(element);
				else continue;
				if (!hasOwn(addedKeys, key)) {
					addedKeys[key] = true;
					push(propertyList, key);
				}
			}
			return propertyList;
		};
		var hasInternalSlot = function(valueOf, it) {
			try {
				valueOf(it);
				return true;
			} catch (error) {
				return false;
			}
		};
		var isBoxedPrimitive = function(it) {
			var kind = classof(it);
			return kind === "Number" && hasInternalSlot(thisNumberValue, it) || kind === "String" && hasInternalSlot(stringValueOf, it) || kind === "Boolean" && hasInternalSlot(booleanValueOf, it) || !!bigIntValueOf && kind === "BigInt" && hasInternalSlot(bigIntValueOf, it);
		};
		var isSerializedAsObject = function(it) {
			if (!isObject(it) || isCallable(it) || isArray(it)) return false;
			try {
				return !isBoxedPrimitive(it);
			} catch (error) {
				return true;
			}
		};
		var createElementHolder = function(holder, key) {
			return { toJSON: function() {
				var element = holder[key];
				if (isObject(element) || typeof element == "bigint") {
					var elementToJSON = element.toJSON;
					if (isCallable(elementToJSON)) element = call(elementToJSON, element, key);
				}
				return element;
			} };
		};
		var getKeyPrefix = function(propertyList) {
			for (var i = 0, length = propertyList.length; i < length; i++) if (exec(digits, propertyList[i])) return KEY_MARK;
			return "";
		};
		var createOrderedObject = function(value, propertyList, keyPrefix) {
			var ordered = create(null);
			for (var i = 0, length = propertyList.length; i < length; i++) {
				var key = propertyList[i];
				ordered[keyPrefix + key] = createElementHolder(value, key);
			}
			ordered[END_MARK] = null;
			return ordered;
		};
		if ($stringify) $({
			target: "JSON",
			stat: true,
			arity: 3,
			forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON
		}, { stringify: function stringify(text, replacer, space) {
			var replacerFunction = isCallable(replacer) ? replacer : void 0;
			var propertyList = replacerFunction ? void 0 : getPropertyList(replacer);
			var keyPrefix = propertyList && getKeyPrefix(propertyList);
			var rawStrings = [];
			var openObjects = [];
			var parentOrdered = [];
			var currentOrdered;
			var marked = false;
			var root = true;
			var json = stringifyWithProperSymbolsConversion(text, function(key, value) {
				key = $String(key);
				if (propertyList) {
					if (key === END_MARK) {
						pop(openObjects);
						currentOrdered = pop(parentOrdered);
						return;
					}
					if (root) root = false;
					else if (this !== currentOrdered && !isArray(this) && !includes(propertyList, key)) return;
				} else if (replacerFunction) value = call(replacerFunction, this, key, value);
				if (isRawJSONValue(value)) {
					if (NATIVE_RAW_JSON) return value;
					marked = true;
					return RAW_MARK + (push(rawStrings, value.rawJSON) - 1);
				}
				if (propertyList && isSerializedAsObject(value)) {
					if (includes(openObjects, value)) throw new $TypeError("Converting circular structure to JSON");
					var ordered = createOrderedObject(value, propertyList, keyPrefix);
					push(openObjects, value);
					push(parentOrdered, currentOrdered);
					currentOrdered = ordered;
					if (keyPrefix) marked = true;
					return ordered;
				}
				return value;
			}, space);
			if (typeof json != "string") return json;
			if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);
			if (!marked) return json;
			var result = "";
			var length = json.length;
			for (var i = 0; i < length; i++) {
				var chr = charAt(json, i);
				if (chr === "\"") {
					var end = parseJSONString(json, ++i).end - 1;
					var string = slice(json, i, end);
					if (slice(string, 0, RAW_MARK_LENGTH) === RAW_MARK) result += rawStrings[slice(string, RAW_MARK_LENGTH)];
					else if (slice(string, 0, KEY_MARK_LENGTH) === KEY_MARK) result += "\"" + slice(string, KEY_MARK_LENGTH) + "\"";
					else result += "\"" + string + "\"";
					i = end;
				} else result += chr;
			}
			return result;
		} });
	}));
	var require_array_slice = __commonJSMin$1(((exports, module) => {
		module.exports = require_function_uncurry_this()([].slice);
	}));
	var require_object_get_own_property_names_external = __commonJSMin$1(((exports, module) => {
		var classof = require_classof_raw();
		var toIndexedObject = require_to_indexed_object();
		var $getOwnPropertyNames = require_object_get_own_property_names().f;
		var arraySlice = require_array_slice();
		var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
		var getWindowNames = function(it) {
			try {
				return $getOwnPropertyNames(it);
			} catch (error) {
				return arraySlice(windowNames);
			}
		};
		module.exports.f = function getOwnPropertyNames(it) {
			return windowNames && classof(it) === "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
		};
	}));
	var require_array_buffer_non_extensible = __commonJSMin$1(((exports, module) => {
		module.exports = require_fails()(function() {
			if (typeof ArrayBuffer == "function") {
				var buffer = new ArrayBuffer(8);
				if (Object.isExtensible(buffer)) Object.defineProperty(buffer, "a", { value: 8 });
			}
		});
	}));
	var require_object_is_extensible = __commonJSMin$1(((exports, module) => {
		var fails = require_fails();
		var isObject = require_is_object();
		var classof = require_classof_raw();
		var ARRAY_BUFFER_NON_EXTENSIBLE = require_array_buffer_non_extensible();
		var $isExtensible = Object.isExtensible;
		module.exports = fails(function() {
			$isExtensible(1);
		}) || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
			if (!isObject(it)) return false;
			if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === "ArrayBuffer") return false;
			return $isExtensible ? $isExtensible(it) : true;
		} : $isExtensible;
	}));
	var require_freezing = __commonJSMin$1(((exports, module) => {
		module.exports = !require_fails()(function() {
			return Object.isExtensible(Object.preventExtensions({}));
		});
	}));
	var require_internal_metadata = __commonJSMin$1(((exports, module) => {
		var $ = require_export();
		var uncurryThis = require_function_uncurry_this();
		var hiddenKeys = require_hidden_keys();
		var isObject = require_is_object();
		var hasOwn = require_has_own_property();
		var defineProperty = require_object_define_property().f;
		var getOwnPropertyNamesModule = require_object_get_own_property_names();
		var getOwnPropertyNamesExternalModule = require_object_get_own_property_names_external();
		var isExtensible = require_object_is_extensible();
		var uid = require_uid();
		var FREEZING = require_freezing();
		var REQUIRED = false;
		var METADATA = uid("meta");
		var id = 0;
		var setMetadata = function(it) {
			defineProperty(it, METADATA, { value: {
				objectID: "O" + id++,
				weakData: {}
			} });
		};
		var fastKey = function(it, create) {
			if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
			if (!hasOwn(it, METADATA)) {
				if (!isExtensible(it)) return "F";
				if (!create) return "E";
				setMetadata(it);
			}
			return it[METADATA].objectID;
		};
		var getWeakData = function(it, create) {
			if (!hasOwn(it, METADATA)) {
				if (!isExtensible(it)) return true;
				if (!create) return false;
				setMetadata(it);
			}
			return it[METADATA].weakData;
		};
		var onFreeze = function(it) {
			if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
			return it;
		};
		var enable = function() {
			meta.enable = function() {};
			REQUIRED = true;
			var getOwnPropertyNames = getOwnPropertyNamesModule.f;
			var splice = uncurryThis([].splice);
			var test = {};
			test[METADATA] = 1;
			if (getOwnPropertyNames(test).length) {
				getOwnPropertyNamesModule.f = function(it) {
					var result = getOwnPropertyNames(it);
					for (var i = 0, length = result.length; i < length; i++) if (result[i] === METADATA) {
						splice(result, i, 1);
						break;
					}
					return result;
				};
				$({
					target: "Object",
					stat: true,
					forced: true
				}, { getOwnPropertyNames: getOwnPropertyNamesExternalModule.f });
			}
		};
		var meta = module.exports = {
			enable,
			fastKey,
			getWeakData,
			onFreeze
		};
		hiddenKeys[METADATA] = true;
	}));
	var require_check_correctness_of_iteration = __commonJSMin$1(((exports, module) => {
		var ITERATOR = require_well_known_symbol()("iterator");
		var SAFE_CLOSING = false;
		try {
			var called = 0;
			var iteratorWithReturn = {
				next: function() {
					return { done: !!called++ };
				},
				"return": function() {
					SAFE_CLOSING = true;
				}
			};
			iteratorWithReturn[ITERATOR] = function() {
				return this;
			};
			Array.from(iteratorWithReturn, function() {
				throw 2;
			});
		} catch (error) {}
		module.exports = function(exec, SKIP_CLOSING) {
			try {
				if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
			} catch (error) {
				return false;
			}
			var ITERATION_SUPPORT = false;
			try {
				var object = {};
				object[ITERATOR] = function() {
					return { next: function() {
						return { done: ITERATION_SUPPORT = true };
					} };
				};
				exec(object);
			} catch (error) {}
			return ITERATION_SUPPORT;
		};
	}));
	var require_collection = __commonJSMin$1(((exports, module) => {
		var $ = require_export();
		var globalThis = require_global_this();
		var uncurryThis = require_function_uncurry_this();
		var isForced = require_is_forced();
		var defineBuiltIn = require_define_built_in();
		var InternalMetadataModule = require_internal_metadata();
		var iterate = require_iterate();
		var anInstance = require_an_instance();
		var isCallable = require_is_callable();
		var isNullOrUndefined = require_is_null_or_undefined();
		var isObject = require_is_object();
		var fails = require_fails();
		var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
		var setToStringTag = require_set_to_string_tag();
		var inheritIfRequired = require_inherit_if_required();
		module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
			var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
			var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
			var ADDER = IS_MAP ? "set" : "add";
			var NativeConstructor = globalThis[CONSTRUCTOR_NAME];
			var NativePrototype = NativeConstructor && NativeConstructor.prototype;
			var Constructor = NativeConstructor;
			var exported = {};
			var fixMethod = function(KEY) {
				var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
				defineBuiltIn(NativePrototype, KEY, KEY === "add" ? function add(value) {
					uncurriedNativeMethod(this, value === 0 ? 0 : value);
					return this;
				} : KEY === "delete" ? function(key) {
					return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
				} : KEY === "get" ? function get(key) {
					return IS_WEAK && !isObject(key) ? void 0 : uncurriedNativeMethod(this, key === 0 ? 0 : key);
				} : KEY === "has" ? function has(key) {
					return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
				} : function set(key, value) {
					uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
					return this;
				});
			};
			if (isForced(CONSTRUCTOR_NAME, !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
				new NativeConstructor().entries().next();
			})))) {
				Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
				InternalMetadataModule.enable();
			} else if (isForced(CONSTRUCTOR_NAME, true)) {
				var instance = new Constructor();
				var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
				var THROWS_ON_PRIMITIVES = fails(function() {
					instance.has(1);
				});
				var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
					new NativeConstructor(iterable);
				});
				var BUGGY_ZERO = !IS_WEAK && fails(function() {
					var $instance = new NativeConstructor();
					var index = 5;
					while (index--) $instance[ADDER](index, index);
					return !$instance.has(-0);
				});
				if (!ACCEPT_ITERABLES) {
					Constructor = wrapper(function(dummy, iterable) {
						anInstance(dummy, NativePrototype);
						var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
						if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
							that,
							AS_ENTRIES: IS_MAP
						});
						return that;
					});
					Constructor.prototype = NativePrototype;
					NativePrototype.constructor = Constructor;
				}
				if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
					fixMethod("delete");
					fixMethod("has");
					IS_MAP && fixMethod("get");
				}
				if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
				if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
			}
			exported[CONSTRUCTOR_NAME] = Constructor;
			$({
				global: true,
				constructor: true,
				forced: Constructor !== NativeConstructor
			}, exported);
			setToStringTag(Constructor, CONSTRUCTOR_NAME);
			if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
			return Constructor;
		};
	}));
	var require_set_species = __commonJSMin$1(((exports, module) => {
		var getBuiltIn = require_get_built_in();
		var defineBuiltInAccessor = require_define_built_in_accessor();
		var wellKnownSymbol = require_well_known_symbol();
		var DESCRIPTORS = require_descriptors();
		var SPECIES = wellKnownSymbol("species");
		module.exports = function(CONSTRUCTOR_NAME) {
			var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
			if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) defineBuiltInAccessor(Constructor, SPECIES, {
				configurable: true,
				get: function() {
					return this;
				}
			});
		};
	}));
	var require_collection_strong = __commonJSMin$1(((exports, module) => {
		var create = require_object_create();
		var defineBuiltInAccessor = require_define_built_in_accessor();
		var defineBuiltIns = require_define_built_ins();
		var bind = require_function_bind_context();
		var anInstance = require_an_instance();
		var isNullOrUndefined = require_is_null_or_undefined();
		var iterate = require_iterate();
		var defineIterator = require_iterator_define();
		var createIterResultObject = require_create_iter_result_object();
		var setSpecies = require_set_species();
		var DESCRIPTORS = require_descriptors();
		var fastKey = require_internal_metadata().fastKey;
		var InternalStateModule = require_internal_state();
		var setInternalState = InternalStateModule.set;
		var internalStateGetterFor = InternalStateModule.getterFor;
		module.exports = {
			getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
				var Constructor = wrapper(function(that, iterable) {
					anInstance(that, Prototype);
					setInternalState(that, {
						type: CONSTRUCTOR_NAME,
						index: create(null),
						first: null,
						last: null,
						size: 0
					});
					if (!DESCRIPTORS) that.size = 0;
					if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
						that,
						AS_ENTRIES: IS_MAP
					});
				});
				var Prototype = Constructor.prototype;
				var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
				var define = function(that, key, value) {
					var state = getInternalState(that);
					var entry = getEntry(that, key);
					var previous, index;
					if (entry) entry.value = value;
					else {
						state.last = entry = {
							index: index = fastKey(key, true),
							key,
							value,
							previous: previous = state.last,
							next: null,
							removed: false
						};
						if (!state.first) state.first = entry;
						if (previous) previous.next = entry;
						if (DESCRIPTORS) state.size++;
						else that.size++;
						if (index !== "F") state.index[index] = entry;
					}
					return that;
				};
				var getEntry = function(that, key) {
					var state = getInternalState(that);
					var index = fastKey(key);
					var entry;
					if (index !== "F") return state.index[index];
					for (entry = state.first; entry; entry = entry.next) if (entry.key === key) return entry;
				};
				defineBuiltIns(Prototype, {
					clear: function clear() {
						var that = this;
						var state = getInternalState(that);
						var entry = state.first;
						while (entry) {
							entry.removed = true;
							if (entry.previous) entry.previous = entry.previous.next = null;
							entry = entry.next;
						}
						state.first = state.last = null;
						state.index = create(null);
						if (DESCRIPTORS) state.size = 0;
						else that.size = 0;
					},
					"delete": function(key) {
						var that = this;
						var state = getInternalState(that);
						var entry = getEntry(that, key);
						if (entry) {
							var next = entry.next;
							var prev = entry.previous;
							delete state.index[entry.index];
							entry.removed = true;
							if (prev) prev.next = next;
							if (next) next.previous = prev;
							if (state.first === entry) state.first = next;
							if (state.last === entry) state.last = prev;
							if (DESCRIPTORS) state.size--;
							else that.size--;
						}
						return !!entry;
					},
					forEach: function forEach(callbackfn) {
						var state = getInternalState(this);
						var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
						var entry;
						while (entry = entry ? entry.next : state.first) {
							boundFunction(entry.value, entry.key, this);
							while (entry && entry.removed) entry = entry.previous;
						}
					},
					has: function has(key) {
						return !!getEntry(this, key);
					}
				});
				defineBuiltIns(Prototype, IS_MAP ? {
					get: function get(key) {
						var entry = getEntry(this, key);
						return entry && entry.value;
					},
					set: function set(key, value) {
						return define(this, key === 0 ? 0 : key, value);
					}
				} : { add: function add(value) {
					return define(this, value = value === 0 ? 0 : value, value);
				} });
				if (DESCRIPTORS) defineBuiltInAccessor(Prototype, "size", {
					configurable: true,
					get: function() {
						return getInternalState(this).size;
					}
				});
				return Constructor;
			},
			setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
				var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
				var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
				var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
				defineIterator(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
					setInternalState(this, {
						type: ITERATOR_NAME,
						target: iterated,
						state: getInternalCollectionState(iterated),
						kind,
						last: null
					});
				}, function() {
					var state = getInternalIteratorState(this);
					var kind = state.kind;
					var entry = state.last;
					while (entry && entry.removed) entry = entry.previous;
					if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
						state.target = null;
						return createIterResultObject(void 0, true);
					}
					if (kind === "keys") return createIterResultObject(entry.key, false);
					if (kind === "values") return createIterResultObject(entry.value, false);
					return createIterResultObject([entry.key, entry.value], false);
				}, IS_MAP ? "entries" : "values", !IS_MAP, true);
				setSpecies(CONSTRUCTOR_NAME);
			}
		};
	}));
	var require_es_map_constructor = __commonJSMin$1((() => {
		require_collection()("Map", function(init) {
			return function Map() {
				return init(this, arguments.length ? arguments[0] : void 0);
			};
		}, require_collection_strong());
	}));
	var require_es_map = __commonJSMin$1((() => {
		require_es_map_constructor();
	}));
	var require_map_helpers = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var MapPrototype = Map.prototype;
		module.exports = {
			Map,
			set: uncurryThis(MapPrototype.set),
			get: uncurryThis(MapPrototype.get),
			has: uncurryThis(MapPrototype.has),
			remove: uncurryThis(MapPrototype["delete"]),
			proto: MapPrototype
		};
	}));
	var require_es_map_get_or_insert = __commonJSMin$1((() => {
		var $ = require_export();
		var MapHelpers = require_map_helpers();
		var IS_PURE = require_is_pure();
		var get = MapHelpers.get;
		var has = MapHelpers.has;
		var set = MapHelpers.set;
		$({
			target: "Map",
			proto: true,
			real: true,
			forced: IS_PURE
		}, { getOrInsert: function getOrInsert(key, value) {
			if (has(this, key)) return get(this, key);
			set(this, key, value);
			return value;
		} });
	}));
	var require_es_map_get_or_insert_computed = __commonJSMin$1((() => {
		var $ = require_export();
		var aCallable = require_a_callable();
		var MapHelpers = require_map_helpers();
		var IS_PURE = require_is_pure();
		var get = MapHelpers.get;
		var has = MapHelpers.has;
		var set = MapHelpers.set;
		$({
			target: "Map",
			proto: true,
			real: true,
			forced: IS_PURE
		}, { getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
			var hasKey = has(this, key);
			aCallable(callbackfn);
			if (hasKey) return get(this, key);
			if (key === 0 && 1 / key === -Infinity) key = 0;
			var value = callbackfn(key);
			set(this, key, value);
			return value;
		} });
	}));
	var require_path = __commonJSMin$1(((exports, module) => {
		module.exports = require_global_this();
	}));
	var require_a_constructor = __commonJSMin$1(((exports, module) => {
		var isConstructor = require_is_constructor();
		var tryToString = require_try_to_string();
		var $TypeError = TypeError;
		module.exports = function(argument) {
			if (isConstructor(argument)) return argument;
			throw new $TypeError(tryToString(argument) + " is not a constructor");
		};
	}));
	var require_species_constructor = __commonJSMin$1(((exports, module) => {
		var anObject = require_an_object();
		var aConstructor = require_a_constructor();
		var isNullOrUndefined = require_is_null_or_undefined();
		var SPECIES = require_well_known_symbol()("species");
		module.exports = function(O, defaultConstructor) {
			var C = anObject(O).constructor;
			var S;
			return C === void 0 || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
		};
	}));
	var require_validate_arguments_length = __commonJSMin$1(((exports, module) => {
		var $TypeError = TypeError;
		module.exports = function(passed, required) {
			if (passed < required) throw new $TypeError("Not enough arguments");
			return passed;
		};
	}));
	var require_environment_is_ios = __commonJSMin$1(((exports, module) => {
		var userAgent = require_environment_user_agent();
		module.exports = /ipad|iphone|ipod/i.test(userAgent) && /applewebkit/i.test(userAgent);
	}));
	var require_task = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		var apply = require_function_apply();
		var bind = require_function_bind_context();
		var isCallable = require_is_callable();
		var hasOwn = require_has_own_property();
		var fails = require_fails();
		var html = require_html();
		var arraySlice = require_array_slice();
		var createElement = require_document_create_element();
		var validateArgumentsLength = require_validate_arguments_length();
		var IS_IOS = require_environment_is_ios();
		var IS_NODE = require_environment_is_node();
		var set = globalThis.setImmediate;
		var clear = globalThis.clearImmediate;
		var process = globalThis.process;
		var Dispatch = globalThis.Dispatch;
		var Function = globalThis.Function;
		var MessageChannel = globalThis.MessageChannel;
		var String = globalThis.String;
		var counter = 0;
		var queue = {};
		var ONREADYSTATECHANGE = "onreadystatechange";
		var $location;
		var defer;
		var channel;
		var port;
		fails(function() {
			$location = globalThis.location;
		});
		var run = function(id) {
			if (hasOwn(queue, id)) {
				var fn = queue[id];
				delete queue[id];
				fn();
			}
		};
		var runner = function(id) {
			return function() {
				run(id);
			};
		};
		var eventListener = function(event) {
			run(event.data);
		};
		var globalPostMessageDefer = function(id) {
			globalThis.postMessage(String(id), $location.protocol + "//" + $location.host);
		};
		if (!set || !clear) {
			set = function setImmediate(handler) {
				validateArgumentsLength(arguments.length, 1);
				var fn = isCallable(handler) ? handler : Function(handler);
				var args = arraySlice(arguments, 1);
				queue[++counter] = function() {
					apply(fn, void 0, args);
				};
				defer(counter);
				return counter;
			};
			clear = function clearImmediate(id) {
				delete queue[id];
			};
			if (IS_NODE) defer = function(id) {
				process.nextTick(runner(id));
			};
			else if (Dispatch && Dispatch.now) defer = function(id) {
				Dispatch.now(runner(id));
			};
			else if (MessageChannel && !IS_IOS) {
				channel = new MessageChannel();
				port = channel.port2;
				channel.port1.onmessage = eventListener;
				defer = bind(port.postMessage, port);
			} else if (globalThis.addEventListener && isCallable(globalThis.postMessage) && !globalThis.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
				defer = globalPostMessageDefer;
				globalThis.addEventListener("message", eventListener, false);
			} else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
				html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
					html.removeChild(this);
					run(id);
				};
			};
			else defer = function(id) {
				setTimeout(runner(id), 0);
			};
		}
		module.exports = {
			set,
			clear
		};
	}));
	var require_safe_get_built_in = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		var DESCRIPTORS = require_descriptors();
		var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		module.exports = function(name) {
			if (!DESCRIPTORS) return globalThis[name];
			var descriptor = getOwnPropertyDescriptor(globalThis, name);
			return descriptor && descriptor.value;
		};
	}));
	var require_queue = __commonJSMin$1(((exports, module) => {
		var Queue = function() {
			this.head = null;
			this.tail = null;
		};
		Queue.prototype = {
			add: function(item) {
				var entry = {
					item,
					next: null
				};
				var tail = this.tail;
				if (tail) tail.next = entry;
				else this.head = entry;
				this.tail = entry;
			},
			get: function() {
				var entry = this.head;
				if (entry) {
					if ((this.head = entry.next) === null) this.tail = null;
					return entry.item;
				}
			}
		};
		module.exports = Queue;
	}));
	var require_environment_is_ios_pebble = __commonJSMin$1(((exports, module) => {
		var userAgent = require_environment_user_agent();
		module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != "undefined";
	}));
	var require_environment_is_webos_webkit = __commonJSMin$1(((exports, module) => {
		var userAgent = require_environment_user_agent();
		module.exports = /web0s(?!.*chrome)/i.test(userAgent);
	}));
	var require_microtask = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		var safeGetBuiltIn = require_safe_get_built_in();
		var bind = require_function_bind_context();
		var macrotask = require_task().set;
		var Queue = require_queue();
		var IS_IOS = require_environment_is_ios();
		var IS_IOS_PEBBLE = require_environment_is_ios_pebble();
		var IS_WEBOS_WEBKIT = require_environment_is_webos_webkit();
		var IS_NODE = require_environment_is_node();
		var MutationObserver = globalThis.MutationObserver || globalThis.WebKitMutationObserver;
		var document = globalThis.document;
		var process = globalThis.process;
		var Promise = globalThis.Promise;
		var microtask = safeGetBuiltIn("queueMicrotask");
		var notify;
		var toggle;
		var node;
		var promise;
		var then;
		if (!microtask) {
			var queue = new Queue();
			var flush = function() {
				var parent, fn;
				if (IS_NODE && (parent = process.domain)) parent.exit();
				while (fn = queue.get()) try {
					fn();
				} catch (error) {
					if (queue.head) notify();
					throw error;
				}
				if (parent) parent.enter();
			};
			if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
				toggle = true;
				node = document.createTextNode("");
				new MutationObserver(flush).observe(node, { characterData: true });
				notify = function() {
					node.data = toggle = !toggle;
				};
			} else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
				promise = Promise.resolve(void 0);
				promise.constructor = Promise;
				then = bind(promise.then, promise);
				notify = function() {
					then(flush);
				};
			} else if (IS_NODE) notify = function() {
				process.nextTick(flush);
			};
			else {
				macrotask = bind(macrotask, globalThis);
				notify = function() {
					macrotask(flush);
				};
			}
			microtask = function(fn) {
				if (!queue.head) notify();
				queue.add(fn);
			};
		}
		module.exports = microtask;
	}));
	var require_host_report_errors = __commonJSMin$1(((exports, module) => {
		module.exports = function(a, b) {
			try {
				arguments.length === 1 ? console.error(a) : console.error(a, b);
			} catch (error) {}
		};
	}));
	var require_perform = __commonJSMin$1(((exports, module) => {
		module.exports = function(exec) {
			try {
				return {
					error: false,
					value: exec()
				};
			} catch (error) {
				return {
					error: true,
					value: error
				};
			}
		};
	}));
	var require_promise_native_constructor = __commonJSMin$1(((exports, module) => {
		module.exports = require_global_this().Promise;
	}));
	var require_promise_constructor_detection = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		var NativePromiseConstructor = require_promise_native_constructor();
		var isCallable = require_is_callable();
		var isForced = require_is_forced();
		var inspectSource = require_inspect_source();
		var wellKnownSymbol = require_well_known_symbol();
		var ENVIRONMENT = require_environment();
		var IS_PURE = require_is_pure();
		var V8_VERSION = require_environment_v8_version();
		var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
		var SPECIES = wellKnownSymbol("species");
		var SUBCLASSING = false;
		var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis.PromiseRejectionEvent);
		module.exports = {
			CONSTRUCTOR: isForced("Promise", function() {
				var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
				var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
				if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
				if (IS_PURE && !(NativePromisePrototype["catch"] && NativePromisePrototype["finally"])) return true;
				if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
					var promise = new NativePromiseConstructor(function(resolve) {
						resolve(1);
					});
					var FakePromise = function(exec) {
						exec(function() {}, function() {});
					};
					var constructor = promise.constructor = {};
					constructor[SPECIES] = FakePromise;
					SUBCLASSING = promise.then(function() {}) instanceof FakePromise;
					if (!SUBCLASSING) return true;
				}
				return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === "BROWSER" || ENVIRONMENT === "DENO") && !NATIVE_PROMISE_REJECTION_EVENT;
			}),
			REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
			SUBCLASSING
		};
	}));
	var require_new_promise_capability = __commonJSMin$1(((exports, module) => {
		var aCallable = require_a_callable();
		var $TypeError = TypeError;
		var PromiseCapability = function(C) {
			var resolve, reject;
			this.promise = new C(function($$resolve, $$reject) {
				if (resolve !== void 0 || reject !== void 0) throw new $TypeError("Bad Promise constructor");
				resolve = $$resolve;
				reject = $$reject;
			});
			this.resolve = aCallable(resolve);
			this.reject = aCallable(reject);
		};
		module.exports.f = function(C) {
			return new PromiseCapability(C);
		};
	}));
	var require_es_promise_constructor = __commonJSMin$1((() => {
		var $ = require_export();
		var IS_PURE = require_is_pure();
		var IS_NODE = require_environment_is_node();
		var globalThis = require_global_this();
		var path = require_path();
		var call = require_function_call();
		var defineBuiltIn = require_define_built_in();
		var setPrototypeOf = require_object_set_prototype_of();
		var setToStringTag = require_set_to_string_tag();
		var setSpecies = require_set_species();
		var aCallable = require_a_callable();
		var isCallable = require_is_callable();
		var isObject = require_is_object();
		var anInstance = require_an_instance();
		var speciesConstructor = require_species_constructor();
		var task = require_task().set;
		var microtask = require_microtask();
		var hostReportErrors = require_host_report_errors();
		var perform = require_perform();
		var Queue = require_queue();
		var InternalStateModule = require_internal_state();
		var NativePromiseConstructor = require_promise_native_constructor();
		var PromiseConstructorDetection = require_promise_constructor_detection();
		var newPromiseCapabilityModule = require_new_promise_capability();
		var PROMISE = "Promise";
		var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
		var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
		var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
		var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
		var setInternalState = InternalStateModule.set;
		var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
		var PromiseConstructor = NativePromiseConstructor;
		var PromisePrototype = NativePromisePrototype;
		var TypeError = globalThis.TypeError;
		var document = globalThis.document;
		var process = globalThis.process;
		var newPromiseCapability = newPromiseCapabilityModule.f;
		var newGenericPromiseCapability = newPromiseCapability;
		var DISPATCH_EVENT = !!(document && document.createEvent && globalThis.dispatchEvent);
		var UNHANDLED_REJECTION = "unhandledrejection";
		var REJECTION_HANDLED = "rejectionhandled";
		var PENDING = 0;
		var FULFILLED = 1;
		var REJECTED = 2;
		var HANDLED = 1;
		var UNHANDLED = 2;
		var Internal;
		var OwnPromiseCapability;
		var PromiseWrapper;
		var nativeThen;
		var isThenable = function(it) {
			var then;
			return isObject(it) && isCallable(then = it.then) ? then : false;
		};
		var callReaction = function(reaction, state) {
			var value = state.value;
			var ok = state.state === FULFILLED;
			var handler = ok ? reaction.ok : reaction.fail;
			var resolve = reaction.resolve;
			var reject = reaction.reject;
			var domain = reaction.domain;
			var result, then, exited;
			try {
				if (handler) {
					if (!ok) {
						if (state.rejection === UNHANDLED) onHandleUnhandled(state);
						state.rejection = HANDLED;
					}
					if (handler === true) result = value;
					else {
						if (domain) domain.enter();
						result = handler(value);
						if (domain) {
							domain.exit();
							exited = true;
						}
					}
					if (result === reaction.promise) reject(new TypeError("Promise-chain cycle"));
					else if (then = isThenable(result)) call(then, result, resolve, reject);
					else resolve(result);
				} else reject(value);
			} catch (error) {
				if (domain && !exited) domain.exit();
				reject(error);
			}
		};
		var notify = function(state, isReject) {
			if (state.notified) return;
			state.notified = true;
			microtask(function() {
				var reactions = state.reactions;
				var reaction;
				while (reaction = reactions.get()) callReaction(reaction, state);
				state.notified = false;
				if (isReject && !state.rejection) onUnhandled(state);
			});
		};
		var dispatchEvent = function(name, promise, reason) {
			var event, handler;
			if (DISPATCH_EVENT) {
				event = document.createEvent("Event");
				event.promise = promise;
				event.reason = reason;
				event.initEvent(name, false, true);
				globalThis.dispatchEvent(event);
			} else event = {
				promise,
				reason
			};
			if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis["on" + name])) handler(event);
			else if (name === UNHANDLED_REJECTION) hostReportErrors("Unhandled promise rejection", reason);
		};
		var onUnhandled = function(state) {
			call(task, globalThis, function() {
				var promise = state.facade;
				var value = state.value;
				var IS_UNHANDLED = isUnhandled(state);
				var result;
				if (IS_UNHANDLED) {
					result = perform(function() {
						if (IS_NODE) process.emit("unhandledRejection", value, promise);
						else dispatchEvent(UNHANDLED_REJECTION, promise, value);
					});
					state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
					if (result.error) throw result.value;
				}
			});
		};
		var isUnhandled = function(state) {
			return state.rejection !== HANDLED && !state.parent;
		};
		var onHandleUnhandled = function(state) {
			call(task, globalThis, function() {
				var promise = state.facade;
				if (IS_NODE) process.emit("rejectionHandled", promise);
				else dispatchEvent(REJECTION_HANDLED, promise, state.value);
			});
		};
		var bind = function(fn, state, unwrap) {
			return function(value) {
				fn(state, value, unwrap);
			};
		};
		var internalReject = function(state, value, unwrap) {
			if (state.done) return;
			state.done = true;
			if (unwrap) state = unwrap;
			state.value = value;
			state.state = REJECTED;
			notify(state, true);
		};
		var internalResolve = function(state, value, unwrap) {
			if (state.done) return;
			state.done = true;
			if (unwrap) state = unwrap;
			try {
				if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
				var then = isThenable(value);
				if (then) microtask(function() {
					var wrapper = { done: false };
					try {
						call(then, value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
					} catch (error) {
						internalReject(wrapper, error, state);
					}
				});
				else {
					state.value = value;
					state.state = FULFILLED;
					notify(state, false);
				}
			} catch (error) {
				internalReject({ done: false }, error, state);
			}
		};
		if (FORCED_PROMISE_CONSTRUCTOR) {
			PromiseConstructor = function Promise(executor) {
				anInstance(this, PromisePrototype);
				aCallable(executor);
				call(Internal, this);
				var state = getInternalPromiseState(this);
				try {
					executor(bind(internalResolve, state), bind(internalReject, state));
				} catch (error) {
					internalReject(state, error);
				}
			};
			PromisePrototype = PromiseConstructor.prototype;
			Internal = function Promise(executor) {
				setInternalState(this, {
					type: PROMISE,
					done: false,
					notified: false,
					parent: false,
					reactions: new Queue(),
					rejection: false,
					state: PENDING,
					value: null
				});
			};
			Internal.prototype = defineBuiltIn(PromisePrototype, "then", function then(onFulfilled, onRejected) {
				var state = getInternalPromiseState(this);
				var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
				state.parent = true;
				reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
				reaction.fail = isCallable(onRejected) && onRejected;
				reaction.domain = IS_NODE ? process.domain : void 0;
				if (state.state === PENDING) state.reactions.add(reaction);
				else microtask(function() {
					callReaction(reaction, state);
				});
				return reaction.promise;
			});
			OwnPromiseCapability = function() {
				var promise = new Internal();
				var state = getInternalPromiseState(promise);
				this.promise = promise;
				this.resolve = bind(internalResolve, state);
				this.reject = bind(internalReject, state);
			};
			newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
				return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
			};
			if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
				nativeThen = NativePromisePrototype.then;
				if (!NATIVE_PROMISE_SUBCLASSING) defineBuiltIn(NativePromisePrototype, "then", function then(onFulfilled, onRejected) {
					var that = this;
					return new PromiseConstructor(function(resolve, reject) {
						call(nativeThen, that, resolve, reject);
					}).then(onFulfilled, onRejected);
				}, { unsafe: true });
				try {
					delete NativePromisePrototype.constructor;
				} catch (error) {}
				if (setPrototypeOf) setPrototypeOf(NativePromisePrototype, PromisePrototype);
			}
		}
		$({
			global: true,
			constructor: true,
			wrap: true,
			forced: FORCED_PROMISE_CONSTRUCTOR
		}, { Promise: PromiseConstructor });
		PromiseWrapper = path.Promise;
		setToStringTag(PromiseConstructor, PROMISE, false, true);
		setSpecies(PROMISE);
	}));
	var require_promise_statics_incorrect_iteration = __commonJSMin$1(((exports, module) => {
		var NativePromiseConstructor = require_promise_native_constructor();
		var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
		module.exports = require_promise_constructor_detection().CONSTRUCTOR || !checkCorrectnessOfIteration(function(iterable) {
			NativePromiseConstructor.all(iterable).then(void 0, function() {});
		});
	}));
	var require_es_promise_all = __commonJSMin$1((() => {
		var $ = require_export();
		var call = require_function_call();
		var aCallable = require_a_callable();
		var newPromiseCapabilityModule = require_new_promise_capability();
		var perform = require_perform();
		var iterate = require_iterate();
		$({
			target: "Promise",
			stat: true,
			forced: require_promise_statics_incorrect_iteration()
		}, { all: function all(iterable) {
			var C = this;
			var capability = newPromiseCapabilityModule.f(C);
			var resolve = capability.resolve;
			var reject = capability.reject;
			var result = perform(function() {
				var $promiseResolve = aCallable(C.resolve);
				var values = [];
				var counter = 0;
				var remaining = 1;
				iterate(iterable, function(promise) {
					var index = counter++;
					var alreadyCalled = false;
					remaining++;
					call($promiseResolve, C, promise).then(function(value) {
						if (alreadyCalled) return;
						alreadyCalled = true;
						values[index] = value;
						--remaining || resolve(values);
					}, reject);
				});
				--remaining || resolve(values);
			});
			if (result.error) reject(result.value);
			return capability.promise;
		} });
	}));
	var require_es_promise_catch = __commonJSMin$1((() => {
		var $ = require_export();
		var IS_PURE = require_is_pure();
		var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
		var NativePromiseConstructor = require_promise_native_constructor();
		var getBuiltIn = require_get_built_in();
		var isCallable = require_is_callable();
		var defineBuiltIn = require_define_built_in();
		var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
		$({
			target: "Promise",
			proto: true,
			forced: FORCED_PROMISE_CONSTRUCTOR,
			real: true
		}, { "catch": function(onRejected) {
			return this.then(void 0, onRejected);
		} });
		if (!IS_PURE && isCallable(NativePromiseConstructor)) {
			var method = getBuiltIn("Promise").prototype["catch"];
			if (NativePromisePrototype["catch"] !== method) defineBuiltIn(NativePromisePrototype, "catch", method, { unsafe: true });
		}
	}));
	var require_es_promise_race = __commonJSMin$1((() => {
		var $ = require_export();
		var call = require_function_call();
		var aCallable = require_a_callable();
		var newPromiseCapabilityModule = require_new_promise_capability();
		var perform = require_perform();
		var iterate = require_iterate();
		$({
			target: "Promise",
			stat: true,
			forced: require_promise_statics_incorrect_iteration()
		}, { race: function race(iterable) {
			var C = this;
			var capability = newPromiseCapabilityModule.f(C);
			var reject = capability.reject;
			var result = perform(function() {
				var $promiseResolve = aCallable(C.resolve);
				iterate(iterable, function(promise) {
					call($promiseResolve, C, promise).then(capability.resolve, reject);
				});
			});
			if (result.error) reject(result.value);
			return capability.promise;
		} });
	}));
	var require_es_promise_reject = __commonJSMin$1((() => {
		var $ = require_export();
		var newPromiseCapabilityModule = require_new_promise_capability();
		var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
		$({
			target: "Promise",
			stat: true,
			forced: FORCED_PROMISE_CONSTRUCTOR
		}, { reject: function reject(r) {
			var capability = newPromiseCapabilityModule.f(this);
			var capabilityReject = capability.reject;
			capabilityReject(r);
			return capability.promise;
		} });
	}));
	var require_promise_resolve = __commonJSMin$1(((exports, module) => {
		var anObject = require_an_object();
		var isObject = require_is_object();
		var newPromiseCapability = require_new_promise_capability();
		module.exports = function(C, x) {
			anObject(C);
			if (isObject(x) && x.constructor === C) return x;
			var promiseCapability = newPromiseCapability.f(C);
			var resolve = promiseCapability.resolve;
			resolve(x);
			return promiseCapability.promise;
		};
	}));
	var require_es_promise_resolve = __commonJSMin$1((() => {
		var $ = require_export();
		var getBuiltIn = require_get_built_in();
		var IS_PURE = require_is_pure();
		var NativePromiseConstructor = require_promise_native_constructor();
		var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
		var promiseResolve = require_promise_resolve();
		var PromiseConstructorWrapper = getBuiltIn("Promise");
		var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;
		$({
			target: "Promise",
			stat: true,
			forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR
		}, { resolve: function resolve(x) {
			return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
		} });
	}));
	var require_es_promise = __commonJSMin$1((() => {
		require_es_promise_constructor();
		require_es_promise_all();
		require_es_promise_catch();
		require_es_promise_race();
		require_es_promise_reject();
		require_es_promise_resolve();
	}));
	var require_is_regexp = __commonJSMin$1(((exports, module) => {
		var isObject = require_is_object();
		var classof = require_classof_raw();
		var MATCH = require_well_known_symbol()("match");
		module.exports = function(it) {
			var isRegExp;
			return isObject(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof(it) === "RegExp");
		};
	}));
	var require_regexp_flags_detection = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		var fails = require_fails();
		var RegExp = globalThis.RegExp;
		module.exports = { correct: !fails(function() {
			var INDICES_SUPPORT = true;
			try {
				RegExp(".", "d");
			} catch (error) {
				INDICES_SUPPORT = false;
			}
			var O = {};
			var calls = "";
			var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
			var addGetter = function(key, chr) {
				Object.defineProperty(O, key, { get: function() {
					calls += chr;
					return true;
				} });
			};
			var pairs = {
				dotAll: "s",
				global: "g",
				ignoreCase: "i",
				multiline: "m",
				sticky: "y"
			};
			if (INDICES_SUPPORT) pairs.hasIndices = "d";
			for (var key in pairs) addGetter(key, pairs[key]);
			return Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get.call(O) !== expected || calls !== expected;
		}) };
	}));
	var require_regexp_flags = __commonJSMin$1(((exports, module) => {
		var anObject = require_an_object();
		module.exports = function() {
			var that = anObject(this);
			var result = "";
			if (that.hasIndices) result += "d";
			if (that.global) result += "g";
			if (that.ignoreCase) result += "i";
			if (that.multiline) result += "m";
			if (that.dotAll) result += "s";
			if (that.unicode) result += "u";
			if (that.unicodeSets) result += "v";
			if (that.sticky) result += "y";
			return result;
		};
	}));
	var require_regexp_get_flags = __commonJSMin$1(((exports, module) => {
		var call = require_function_call();
		var hasOwn = require_has_own_property();
		var isPrototypeOf = require_object_is_prototype_of();
		var regExpFlagsDetection = require_regexp_flags_detection();
		var regExpFlagsGetterImplementation = require_regexp_flags();
		var RegExpPrototype = RegExp.prototype;
		module.exports = regExpFlagsDetection.correct ? function(it) {
			return it.flags;
		} : function(it) {
			return !regExpFlagsDetection.correct && isPrototypeOf(RegExpPrototype, it) && !hasOwn(it, "flags") ? call(regExpFlagsGetterImplementation, it) : it.flags;
		};
	}));
	var require_regexp_sticky_helpers = __commonJSMin$1(((exports, module) => {
		var fails = require_fails();
		var $RegExp = require_global_this().RegExp;
		var UNSUPPORTED_Y = fails(function() {
			var re = $RegExp("a", "y");
			re.lastIndex = 2;
			return re.exec("abcd") !== null;
		});
		var MISSED_STICKY = UNSUPPORTED_Y || fails(function() {
			return !$RegExp("a", "y").sticky;
		});
		module.exports = {
			BROKEN_CARET: UNSUPPORTED_Y || fails(function() {
				var re = $RegExp("^r", "gy");
				re.lastIndex = 2;
				return re.exec("str") !== null;
			}),
			MISSED_STICKY,
			UNSUPPORTED_Y
		};
	}));
	var require_regexp_unsupported_dot_all = __commonJSMin$1(((exports, module) => {
		var fails = require_fails();
		var $RegExp = require_global_this().RegExp;
		module.exports = fails(function() {
			var re = $RegExp(".", "s");
			return !(re.dotAll && re.test("\n") && re.flags === "s");
		});
	}));
	var require_regexp_unsupported_ncg = __commonJSMin$1(((exports, module) => {
		var fails = require_fails();
		var $RegExp = require_global_this().RegExp;
		module.exports = fails(function() {
			var re = $RegExp("(?<a>b)", "g");
			return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
		});
	}));
	var require_es_regexp_constructor = __commonJSMin$1((() => {
		var DESCRIPTORS = require_descriptors();
		var globalThis = require_global_this();
		var uncurryThis = require_function_uncurry_this();
		var isForced = require_is_forced();
		var inheritIfRequired = require_inherit_if_required();
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		var create = require_object_create();
		var getOwnPropertyNames = require_object_get_own_property_names().f;
		var isPrototypeOf = require_object_is_prototype_of();
		var isRegExp = require_is_regexp();
		var toString = require_to_string();
		var getRegExpFlags = require_regexp_get_flags();
		var stickyHelpers = require_regexp_sticky_helpers();
		var proxyAccessor = require_proxy_accessor();
		var defineBuiltIn = require_define_built_in();
		var fails = require_fails();
		var hasOwn = require_has_own_property();
		var enforceInternalState = require_internal_state().enforce;
		var setSpecies = require_set_species();
		var wellKnownSymbol = require_well_known_symbol();
		var UNSUPPORTED_DOT_ALL = require_regexp_unsupported_dot_all();
		var UNSUPPORTED_NCG = require_regexp_unsupported_ncg();
		var MATCH = wellKnownSymbol("match");
		var NativeRegExp = globalThis.RegExp;
		var RegExpPrototype = NativeRegExp.prototype;
		var SyntaxError = globalThis.SyntaxError;
		var exec = uncurryThis(RegExpPrototype.exec);
		var charAt = uncurryThis("".charAt);
		var replace = uncurryThis("".replace);
		var stringIndexOf = uncurryThis("".indexOf);
		var stringSlice = uncurryThis("".slice);
		var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
		var re1 = /a/g;
		var re2 = /a/g;
		var CORRECT_NEW = new NativeRegExp(re1) !== re1;
		var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
		var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
		var BASE_FORCED = DESCRIPTORS && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function() {
			re2[MATCH] = false;
			return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, "i")) !== "/a/i";
		}));
		var handleDotAll = function(string) {
			var length = string.length;
			var index = 0;
			var result = "";
			var brackets = false;
			var chr;
			for (; index < length; index++) {
				chr = charAt(string, index);
				if (chr === "\\") {
					result += chr + charAt(string, ++index);
					continue;
				}
				if (!brackets && chr === ".") result += "[\\s\\S]";
				else {
					if (chr === "[") brackets = true;
					else if (chr === "]") brackets = false;
					result += chr;
				}
			}
			return result;
		};
		var handleNCG = function(string) {
			var length = string.length;
			var index = 0;
			var result = "";
			var named = [];
			var names = create(null);
			var brackets = false;
			var ncg = false;
			var groupid = 0;
			var groupname = "";
			var chr;
			for (; index < length; index++) {
				chr = charAt(string, index);
				if (chr === "\\") {
					chr += charAt(string, ++index);
					if (!ncg && charAt(chr, 1) === "\\") {
						result += "\\x5c";
						continue;
					}
				} else if (chr === "]") brackets = false;
				else if (!brackets) switch (true) {
					case chr === "[":
						brackets = true;
						break;
					case chr === "(":
						result += chr;
						if (exec(IS_NCG, stringSlice(string, index + 1))) {
							index += 2;
							ncg = true;
							groupid++;
						} else if (charAt(string, index + 1) !== "?") groupid++;
						continue;
					case chr === ">" && ncg:
						if (groupname === "" || hasOwn(names, groupname)) throw new SyntaxError("Invalid capture group name");
						names[groupname] = true;
						named[named.length] = [groupname, groupid];
						ncg = false;
						groupname = "";
						continue;
				}
				if (ncg) groupname += chr;
				else result += chr;
			}
			for (var ni = 0; ni < named.length; ni++) {
				var backref = "\\k<" + named[ni][0] + ">";
				var numRef = "\\" + named[ni][1];
				while (stringIndexOf(result, backref) > -1) result = replace(result, backref, numRef);
			}
			return [result, named];
		};
		if (isForced("RegExp", BASE_FORCED)) {
			var RegExpWrapper = function RegExp(pattern, flags) {
				var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
				var patternIsRegExp = isRegExp(pattern);
				var flagsAreUndefined = flags === void 0;
				var groups = [];
				var rawPattern = pattern;
				var rawFlags, dotAll, sticky, handled, result, state;
				if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) return pattern;
				if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
					pattern = pattern.source;
					if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
				}
				pattern = pattern === void 0 ? "" : toString(pattern);
				flags = flags === void 0 ? "" : toString(flags);
				rawPattern = pattern;
				if (UNSUPPORTED_DOT_ALL && "dotAll" in re1) {
					dotAll = !!flags && stringIndexOf(flags, "s") > -1;
					if (dotAll) flags = replace(flags, /s/g, "");
				}
				rawFlags = flags;
				if (MISSED_STICKY && "sticky" in re1) {
					sticky = !!flags && stringIndexOf(flags, "y") > -1;
					if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, "");
				}
				if (UNSUPPORTED_NCG) {
					handled = handleNCG(pattern);
					pattern = handled[0];
					groups = handled[1];
				}
				result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
				if (dotAll || sticky || groups.length) {
					state = enforceInternalState(result);
					if (dotAll) {
						state.dotAll = true;
						state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
					}
					if (sticky) state.sticky = true;
					if (groups.length) state.groups = groups;
				}
				if (pattern !== rawPattern) try {
					createNonEnumerableProperty(result, "source", rawPattern === "" ? "(?:)" : rawPattern);
				} catch (error) {}
				return result;
			};
			for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
			RegExpPrototype.constructor = RegExpWrapper;
			RegExpWrapper.prototype = RegExpPrototype;
			defineBuiltIn(globalThis, "RegExp", RegExpWrapper, { constructor: true });
		}
		setSpecies("RegExp");
	}));
	var require_es_regexp_dot_all = __commonJSMin$1((() => {
		var DESCRIPTORS = require_descriptors();
		var UNSUPPORTED_DOT_ALL = require_regexp_unsupported_dot_all();
		var classof = require_classof_raw();
		var defineBuiltInAccessor = require_define_built_in_accessor();
		var getInternalState = require_internal_state().get;
		var RegExpPrototype = RegExp.prototype;
		var $TypeError = TypeError;
		if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) defineBuiltInAccessor(RegExpPrototype, "dotAll", {
			configurable: true,
			get: function dotAll() {
				if (this === RegExpPrototype) return;
				if (classof(this) === "RegExp") return !!getInternalState(this).dotAll;
				throw new $TypeError("Incompatible receiver, RegExp required");
			}
		});
	}));
	var require_regexp_exec = __commonJSMin$1(((exports, module) => {
		var call = require_function_call();
		var uncurryThis = require_function_uncurry_this();
		var toString = require_to_string();
		var regexpFlags = require_regexp_flags();
		var stickyHelpers = require_regexp_sticky_helpers();
		var shared = require_shared();
		var create = require_object_create();
		var getInternalState = require_internal_state().get;
		var UNSUPPORTED_DOT_ALL = require_regexp_unsupported_dot_all();
		var UNSUPPORTED_NCG = require_regexp_unsupported_ncg();
		var nativeReplace = shared("native-string-replace", String.prototype.replace);
		var nativeExec = RegExp.prototype.exec;
		var patchedExec = nativeExec;
		var charAt = uncurryThis("".charAt);
		var indexOf = uncurryThis("".indexOf);
		var replace = uncurryThis("".replace);
		var stringSlice = uncurryThis("".slice);
		var UPDATES_LAST_INDEX_WRONG = (function() {
			var re1 = /a/;
			var re2 = /b*/g;
			call(nativeExec, re1, "a");
			call(nativeExec, re2, "a");
			return re1.lastIndex !== 0 || re2.lastIndex !== 0;
		})();
		var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
		var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
		var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
		var setGroups = function(re, groups) {
			var object = re.groups = create(null);
			for (var i = 0; i < groups.length; i++) {
				var group = groups[i];
				object[group[0]] = re[group[1]];
			}
		};
		if (PATCH) patchedExec = function exec(string) {
			var re = this;
			var state = getInternalState(re);
			var str = toString(string);
			var raw = state.raw;
			var result, reCopy, lastIndex;
			if (raw) {
				raw.lastIndex = re.lastIndex;
				result = call(patchedExec, raw, str);
				re.lastIndex = raw.lastIndex;
				if (result && state.groups) setGroups(result, state.groups);
				return result;
			}
			var groups = state.groups;
			var sticky = UNSUPPORTED_Y && re.sticky;
			var flags = call(regexpFlags, re);
			var source = re.source;
			var charsAdded = 0;
			var strCopy = str;
			if (sticky) {
				flags = replace(flags, "y", "");
				if (indexOf(flags, "g") === -1) flags += "g";
				strCopy = stringSlice(str, re.lastIndex);
				var prevChar = re.lastIndex > 0 && charAt(str, re.lastIndex - 1);
				if (re.lastIndex > 0 && (!re.multiline || re.multiline && prevChar !== "\n" && prevChar !== "\r" && prevChar !== "\u2028" && prevChar !== "\u2029")) {
					source = "(?: (?:" + source + "))";
					strCopy = " " + strCopy;
					charsAdded++;
				}
				reCopy = new RegExp("^(?:" + source + ")", flags);
			}
			if (NPCG_INCLUDED) reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
			if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
			var match = call(nativeExec, sticky ? reCopy : re, strCopy);
			if (sticky) {
				if (match) {
					match.input = str;
					match[0] = stringSlice(match[0], charsAdded);
					match.index = re.lastIndex;
					re.lastIndex += match[0].length;
				} else re.lastIndex = 0;
			} else if (UPDATES_LAST_INDEX_WRONG && match) re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
			if (NPCG_INCLUDED && match && match.length > 1) call(nativeReplace, match[0], reCopy, function() {
				for (var i = 1; i < arguments.length - 2; i++) if (arguments[i] === void 0) match[i] = void 0;
			});
			if (match && groups) setGroups(match, groups);
			return match;
		};
		module.exports = patchedExec;
	}));
	var require_es_regexp_exec = __commonJSMin$1((() => {
		var $ = require_export();
		var exec = require_regexp_exec();
		$({
			target: "RegExp",
			proto: true,
			forced: /./.exec !== exec
		}, { exec });
	}));
	var require_es_set_constructor = __commonJSMin$1((() => {
		require_collection()("Set", function(init) {
			return function Set() {
				return init(this, arguments.length ? arguments[0] : void 0);
			};
		}, require_collection_strong());
	}));
	var require_es_set = __commonJSMin$1((() => {
		require_es_set_constructor();
	}));
	var require_set_helpers = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var SetPrototype = Set.prototype;
		module.exports = {
			Set,
			add: uncurryThis(SetPrototype.add),
			has: uncurryThis(SetPrototype.has),
			remove: uncurryThis(SetPrototype["delete"]),
			proto: SetPrototype
		};
	}));
	var require_a_set = __commonJSMin$1(((exports, module) => {
		var has = require_set_helpers().has;
		module.exports = function(it) {
			has(it);
			return it;
		};
	}));
	var require_iterate_simple = __commonJSMin$1(((exports, module) => {
		var call = require_function_call();
		module.exports = function(record, fn, ITERATOR_INSTEAD_OF_RECORD) {
			var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
			var next = record.next;
			var step, result;
			while (!(step = call(next, iterator)).done) {
				result = fn(step.value);
				if (result !== void 0) return result;
			}
		};
	}));
	var require_set_iterate = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var iterateSimple = require_iterate_simple();
		var SetHelpers = require_set_helpers();
		var Set = SetHelpers.Set;
		var SetPrototype = SetHelpers.proto;
		var forEach = uncurryThis(SetPrototype.forEach);
		var keys = uncurryThis(SetPrototype.keys);
		var next = keys(new Set()).next;
		module.exports = function(set, fn, interruptible) {
			return interruptible ? iterateSimple({
				iterator: keys(set),
				next
			}, fn) : forEach(set, fn);
		};
	}));
	var require_set_clone = __commonJSMin$1(((exports, module) => {
		var SetHelpers = require_set_helpers();
		var iterate = require_set_iterate();
		var Set = SetHelpers.Set;
		var add = SetHelpers.add;
		module.exports = function(set) {
			var result = new Set();
			iterate(set, function(it) {
				add(result, it);
			});
			return result;
		};
	}));
	var require_set_size = __commonJSMin$1(((exports, module) => {
		module.exports = require_function_uncurry_this_accessor()(require_set_helpers().proto, "size", "get") || function(set) {
			return set.size;
		};
	}));
	var require_get_set_record = __commonJSMin$1(((exports, module) => {
		var aCallable = require_a_callable();
		var anObject = require_an_object();
		var call = require_function_call();
		var toIntegerOrInfinity = require_to_integer_or_infinity();
		var getIteratorDirect = require_get_iterator_direct();
		var INVALID_SIZE = "Invalid size";
		var $RangeError = RangeError;
		var $TypeError = TypeError;
		var max = Math.max;
		var SetRecord = function(set, intSize) {
			this.set = set;
			this.size = max(intSize, 0);
			this.has = aCallable(set.has);
			this.keys = aCallable(set.keys);
		};
		SetRecord.prototype = {
			getIterator: function() {
				return getIteratorDirect(anObject(call(this.keys, this.set)));
			},
			includes: function(it) {
				return call(this.has, this.set, it);
			}
		};
		module.exports = function(obj) {
			anObject(obj);
			var numSize = +obj.size;
			if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
			var intSize = toIntegerOrInfinity(numSize);
			if (intSize < 0) throw new $RangeError(INVALID_SIZE);
			return new SetRecord(obj, intSize);
		};
	}));
	var require_set_difference = __commonJSMin$1(((exports, module) => {
		var aSet = require_a_set();
		var SetHelpers = require_set_helpers();
		var clone = require_set_clone();
		var size = require_set_size();
		var getSetRecord = require_get_set_record();
		var iterateSet = require_set_iterate();
		var iterateSimple = require_iterate_simple();
		var has = SetHelpers.has;
		var remove = SetHelpers.remove;
		module.exports = function difference(other) {
			var O = aSet(this);
			var otherRec = getSetRecord(other);
			var result = clone(O);
			if (size(result) <= otherRec.size) iterateSet(result, function(e) {
				if (otherRec.includes(e)) remove(result, e);
			});
			else iterateSimple(otherRec.getIterator(), function(e) {
				if (has(result, e)) remove(result, e);
			});
			return result;
		};
	}));
	var require_set_method_accept_set_like = __commonJSMin$1(((exports, module) => {
		var getBuiltIn = require_get_built_in();
		var createSetLike = function(size) {
			return {
				size,
				has: function() {
					return false;
				},
				keys: function() {
					return { next: function() {
						return { done: true };
					} };
				}
			};
		};
		var createSetLikeWithInfinitySize = function(size) {
			return {
				size,
				has: function() {
					return true;
				},
				keys: function() {
					throw new Error("e");
				}
			};
		};
		module.exports = function(name, callback) {
			var Set = getBuiltIn("Set");
			try {
				new Set()[name](createSetLike(0));
				try {
					new Set()[name](createSetLike(-1));
					return false;
				} catch (error2) {
					if (!callback) return true;
					try {
						new Set()[name](createSetLikeWithInfinitySize(-Infinity));
						return false;
					} catch (error) {
						return callback(new Set([1, 2])[name](createSetLikeWithInfinitySize(Infinity)));
					}
				}
			} catch (error) {
				return false;
			}
		};
	}));
	var require_es_set_difference_v2 = __commonJSMin$1((() => {
		var $ = require_export();
		var difference = require_set_difference();
		var fails = require_fails();
		$({
			target: "Set",
			proto: true,
			real: true,
			forced: !require_set_method_accept_set_like()("difference", function(result) {
				return result.size === 0;
			}) || fails(function() {
				var setLike = {
					size: 1,
					has: function() {
						return true;
					},
					keys: function() {
						var index = 0;
						return { next: function() {
							var done = index++ > 1;
							if (baseSet.has(1)) baseSet.clear();
							return {
								done,
								value: 2
							};
						} };
					}
				};
				var baseSet = new Set([
					1,
					2,
					3,
					4
				]);
				return baseSet.difference(setLike).size !== 3;
			})
		}, { difference });
	}));
	var require_set_intersection = __commonJSMin$1(((exports, module) => {
		var aSet = require_a_set();
		var SetHelpers = require_set_helpers();
		var size = require_set_size();
		var getSetRecord = require_get_set_record();
		var iterateSet = require_set_iterate();
		var iterateSimple = require_iterate_simple();
		var Set = SetHelpers.Set;
		var add = SetHelpers.add;
		var has = SetHelpers.has;
		module.exports = function intersection(other) {
			var O = aSet(this);
			var otherRec = getSetRecord(other);
			var result = new Set();
			if (size(O) > otherRec.size) iterateSimple(otherRec.getIterator(), function(e) {
				if (has(O, e)) add(result, e);
			});
			else iterateSet(O, function(e) {
				if (otherRec.includes(e)) add(result, e);
			});
			return result;
		};
	}));
	var require_es_set_intersection_v2 = __commonJSMin$1((() => {
		var $ = require_export();
		var fails = require_fails();
		var intersection = require_set_intersection();
		$({
			target: "Set",
			proto: true,
			real: true,
			forced: !require_set_method_accept_set_like()("intersection", function(result) {
				return result.size === 2 && result.has(1) && result.has(2);
			}) || fails(function() {
				return String(Array.from(new Set([
					1,
					2,
					3
				]).intersection(new Set([3, 2])))) !== "3,2";
			})
		}, { intersection });
	}));
	var require_set_is_disjoint_from = __commonJSMin$1(((exports, module) => {
		var aSet = require_a_set();
		var has = require_set_helpers().has;
		var size = require_set_size();
		var getSetRecord = require_get_set_record();
		var iterateSet = require_set_iterate();
		var iterateSimple = require_iterate_simple();
		var iteratorClose = require_iterator_close();
		module.exports = function isDisjointFrom(other) {
			var O = aSet(this);
			var otherRec = getSetRecord(other);
			if (size(O) <= otherRec.size) return iterateSet(O, function(e) {
				if (otherRec.includes(e)) return false;
			}, true) !== false;
			var iterator = otherRec.getIterator();
			return iterateSimple(iterator, function(e) {
				if (has(O, e)) return iteratorClose(iterator.iterator, "normal", false);
			}) !== false;
		};
	}));
	var require_es_set_is_disjoint_from_v2 = __commonJSMin$1((() => {
		var $ = require_export();
		var isDisjointFrom = require_set_is_disjoint_from();
		$({
			target: "Set",
			proto: true,
			real: true,
			forced: !require_set_method_accept_set_like()("isDisjointFrom", function(result) {
				return !result;
			})
		}, { isDisjointFrom });
	}));
	var require_set_is_subset_of = __commonJSMin$1(((exports, module) => {
		var aSet = require_a_set();
		var size = require_set_size();
		var iterate = require_set_iterate();
		var getSetRecord = require_get_set_record();
		module.exports = function isSubsetOf(other) {
			var O = aSet(this);
			var otherRec = getSetRecord(other);
			if (size(O) > otherRec.size) return false;
			return iterate(O, function(e) {
				if (!otherRec.includes(e)) return false;
			}, true) !== false;
		};
	}));
	var require_es_set_is_subset_of_v2 = __commonJSMin$1((() => {
		var $ = require_export();
		var isSubsetOf = require_set_is_subset_of();
		$({
			target: "Set",
			proto: true,
			real: true,
			forced: !require_set_method_accept_set_like()("isSubsetOf", function(result) {
				return result;
			})
		}, { isSubsetOf });
	}));
	var require_set_is_superset_of = __commonJSMin$1(((exports, module) => {
		var aSet = require_a_set();
		var has = require_set_helpers().has;
		var size = require_set_size();
		var getSetRecord = require_get_set_record();
		var iterateSimple = require_iterate_simple();
		var iteratorClose = require_iterator_close();
		module.exports = function isSupersetOf(other) {
			var O = aSet(this);
			var otherRec = getSetRecord(other);
			if (size(O) < otherRec.size) return false;
			var iterator = otherRec.getIterator();
			return iterateSimple(iterator, function(e) {
				if (!has(O, e)) return iteratorClose(iterator.iterator, "normal", false);
			}) !== false;
		};
	}));
	var require_es_set_is_superset_of_v2 = __commonJSMin$1((() => {
		var $ = require_export();
		var isSupersetOf = require_set_is_superset_of();
		$({
			target: "Set",
			proto: true,
			real: true,
			forced: !require_set_method_accept_set_like()("isSupersetOf", function(result) {
				return !result;
			})
		}, { isSupersetOf });
	}));
	var require_set_symmetric_difference = __commonJSMin$1(((exports, module) => {
		var aSet = require_a_set();
		var SetHelpers = require_set_helpers();
		var clone = require_set_clone();
		var getSetRecord = require_get_set_record();
		var iterateSimple = require_iterate_simple();
		var add = SetHelpers.add;
		var has = SetHelpers.has;
		var remove = SetHelpers.remove;
		module.exports = function symmetricDifference(other) {
			var O = aSet(this);
			var keysIter = getSetRecord(other).getIterator();
			var result = clone(O);
			iterateSimple(keysIter, function(e) {
				if (has(O, e)) remove(result, e);
				else add(result, e);
			});
			return result;
		};
	}));
	var require_set_method_get_keys_before_cloning_detection = __commonJSMin$1(((exports, module) => {
		module.exports = function(METHOD_NAME) {
			try {
				var baseSet = new Set();
				var result = baseSet[METHOD_NAME]({
					size: 0,
					has: function() {
						return true;
					},
					keys: function() {
						return Object.defineProperty({}, "next", { get: function() {
							baseSet.clear();
							baseSet.add(4);
							return function() {
								return { done: true };
							};
						} });
					}
				});
				return result.size === 1 && result.values().next().value === 4;
			} catch (error) {
				return false;
			}
		};
	}));
	var require_es_set_symmetric_difference_v2 = __commonJSMin$1((() => {
		var $ = require_export();
		var symmetricDifference = require_set_symmetric_difference();
		var setMethodGetKeysBeforeCloning = require_set_method_get_keys_before_cloning_detection();
		$({
			target: "Set",
			proto: true,
			real: true,
			forced: !require_set_method_accept_set_like()("symmetricDifference") || !setMethodGetKeysBeforeCloning("symmetricDifference")
		}, { symmetricDifference });
	}));
	var require_set_union = __commonJSMin$1(((exports, module) => {
		var aSet = require_a_set();
		var add = require_set_helpers().add;
		var clone = require_set_clone();
		var getSetRecord = require_get_set_record();
		var iterateSimple = require_iterate_simple();
		module.exports = function union(other) {
			var O = aSet(this);
			var keysIter = getSetRecord(other).getIterator();
			var result = clone(O);
			iterateSimple(keysIter, function(it) {
				add(result, it);
			});
			return result;
		};
	}));
	var require_es_set_union_v2 = __commonJSMin$1((() => {
		var $ = require_export();
		var union = require_set_union();
		var setMethodGetKeysBeforeCloning = require_set_method_get_keys_before_cloning_detection();
		$({
			target: "Set",
			proto: true,
			real: true,
			forced: !require_set_method_accept_set_like()("union") || !setMethodGetKeysBeforeCloning("union")
		}, { union });
	}));
	var require_string_multibyte = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var toIntegerOrInfinity = require_to_integer_or_infinity();
		var toString = require_to_string();
		var requireObjectCoercible = require_require_object_coercible();
		var charAt = uncurryThis("".charAt);
		var charCodeAt = uncurryThis("".charCodeAt);
		var stringSlice = uncurryThis("".slice);
		var createMethod = function(CONVERT_TO_STRING) {
			return function($this, pos) {
				var S = toString(requireObjectCoercible($this));
				var position = toIntegerOrInfinity(pos);
				var size = S.length;
				var first, second;
				if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
				first = charCodeAt(S, position);
				return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
			};
		};
		module.exports = {
			codeAt: createMethod(false),
			charAt: createMethod(true)
		};
	}));
	var require_advance_string_index = __commonJSMin$1(((exports, module) => {
		var charAt = require_string_multibyte().charAt;
		module.exports = function(S, index, unicode) {
			return index + (unicode ? charAt(S, index).length || 1 : 1);
		};
	}));
	var require_regexp_exec_abstract = __commonJSMin$1(((exports, module) => {
		var call = require_function_call();
		var anObject = require_an_object();
		var isCallable = require_is_callable();
		var classof = require_classof_raw();
		var regexpExec = require_regexp_exec();
		var $TypeError = TypeError;
		module.exports = function(R, S) {
			var exec = R.exec;
			if (isCallable(exec)) {
				var result = call(exec, R, S);
				if (result !== null) anObject(result);
				return result;
			}
			if (classof(R) === "RegExp") return call(regexpExec, R, S);
			throw new $TypeError("RegExp#exec called on incompatible receiver");
		};
	}));
	var require_es_string_match_all = __commonJSMin$1((() => {
		var $ = require_export();
		var call = require_function_call();
		var uncurryThis = require_function_uncurry_this_clause();
		var createIteratorConstructor = require_iterator_create_constructor();
		var createIterResultObject = require_create_iter_result_object();
		var requireObjectCoercible = require_require_object_coercible();
		var toLength = require_to_length();
		var toString = require_to_string();
		var anObject = require_an_object();
		var isObject = require_is_object();
		var classof = require_classof_raw();
		var isRegExp = require_is_regexp();
		var getRegExpFlags = require_regexp_get_flags();
		var getMethod = require_get_method();
		var defineBuiltIn = require_define_built_in();
		var fails = require_fails();
		var wellKnownSymbol = require_well_known_symbol();
		var speciesConstructor = require_species_constructor();
		var advanceStringIndex = require_advance_string_index();
		var regExpExec = require_regexp_exec_abstract();
		var InternalStateModule = require_internal_state();
		var IS_PURE = require_is_pure();
		var MATCH_ALL = wellKnownSymbol("matchAll");
		var REGEXP_STRING = "RegExp String";
		var REGEXP_STRING_ITERATOR = REGEXP_STRING + " Iterator";
		var setInternalState = InternalStateModule.set;
		var getInternalState = InternalStateModule.getterFor(REGEXP_STRING_ITERATOR);
		var RegExpPrototype = RegExp.prototype;
		var $TypeError = TypeError;
		var stringIndexOf = uncurryThis("".indexOf);
		var nativeMatchAll = uncurryThis("".matchAll);
		var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails(function() {
			nativeMatchAll("a", /./);
		});
		var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, $global, fullUnicode) {
			setInternalState(this, {
				type: REGEXP_STRING_ITERATOR,
				regexp,
				string,
				global: $global,
				unicode: fullUnicode,
				done: false
			});
		}, REGEXP_STRING, function next() {
			var state = getInternalState(this);
			if (state.done) return createIterResultObject(void 0, true);
			var R = state.regexp;
			var S = state.string;
			var match = regExpExec(R, S);
			if (match === null) {
				state.done = true;
				return createIterResultObject(void 0, true);
			}
			if (state.global) {
				if (toString(match[0]) === "") R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
				return createIterResultObject(match, false);
			}
			state.done = true;
			return createIterResultObject(match, false);
		});
		var $matchAll = function(string) {
			var R = anObject(this);
			var S = toString(string);
			var C = speciesConstructor(R, RegExp);
			var flags = toString(getRegExpFlags(R));
			var matcher = new C(C === RegExp ? R.source : R, flags);
			var $global = !!~stringIndexOf(flags, "g");
			var fullUnicode = !!~stringIndexOf(flags, "u") || !!~stringIndexOf(flags, "v");
			matcher.lastIndex = toLength(R.lastIndex);
			return new $RegExpStringIterator(matcher, S, $global, fullUnicode);
		};
		$({
			target: "String",
			proto: true,
			forced: WORKS_WITH_NON_GLOBAL_REGEX
		}, { matchAll: function matchAll(regexp) {
			var O = requireObjectCoercible(this);
			var flags, S, matcher, rx;
			if (isObject(regexp)) {
				if (isRegExp(regexp)) {
					flags = toString(requireObjectCoercible(getRegExpFlags(regexp)));
					if (!~stringIndexOf(flags, "g")) throw new $TypeError("`.matchAll` does not allow non-global regexes");
				}
				if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
				matcher = getMethod(regexp, MATCH_ALL);
				if (matcher === void 0 && IS_PURE && classof(regexp) === "RegExp") matcher = $matchAll;
				if (matcher) return call(matcher, regexp, O);
			} else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
			S = toString(O);
			rx = new RegExp(regexp, "g");
			return IS_PURE ? call($matchAll, rx, S) : rx[MATCH_ALL](S);
		} });
		IS_PURE || MATCH_ALL in RegExpPrototype || defineBuiltIn(RegExpPrototype, MATCH_ALL, $matchAll);
	}));
	var require_fix_regexp_well_known_symbol_logic = __commonJSMin$1(((exports, module) => {
		require_es_regexp_exec();
		var call = require_function_call();
		var defineBuiltIn = require_define_built_in();
		var regexpExec = require_regexp_exec();
		var fails = require_fails();
		var wellKnownSymbol = require_well_known_symbol();
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		var SPECIES = wellKnownSymbol("species");
		var RegExpPrototype = RegExp.prototype;
		module.exports = function(KEY, exec, FORCED, SHAM) {
			var SYMBOL = wellKnownSymbol(KEY);
			var DELEGATES_TO_SYMBOL = !fails(function() {
				var O = {};
				O[SYMBOL] = function() {
					return 7;
				};
				return ""[KEY](O) !== 7;
			});
			var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
				var execCalled = false;
				var re = /a/;
				if (KEY === "split") {
					var constructor = {};
					constructor[SPECIES] = function() {
						return re;
					};
					re = {
						constructor,
						flags: ""
					};
					re[SYMBOL] = /./[SYMBOL];
				}
				re.exec = function() {
					execCalled = true;
					return null;
				};
				re[SYMBOL]("");
				return !execCalled;
			});
			if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
				var nativeRegExpMethod = /./[SYMBOL];
				var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
					var $exec = regexp.exec;
					if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
						if (DELEGATES_TO_SYMBOL && !forceStringMethod) return {
							done: true,
							value: call(nativeRegExpMethod, regexp, str, arg2)
						};
						return {
							done: true,
							value: call(nativeMethod, str, regexp, arg2)
						};
					}
					return { done: false };
				});
				defineBuiltIn(String.prototype, KEY, methods[0]);
				defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
			}
			if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], "sham", true);
		};
	}));
	var require_get_substitution = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var toObject = require_to_object();
		var floor = Math.floor;
		var charAt = uncurryThis("".charAt);
		var replace = uncurryThis("".replace);
		var stringSlice = uncurryThis("".slice);
		var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
		var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
		module.exports = function(matched, str, position, captures, namedCaptures, replacement) {
			var tailPos = position + matched.length;
			var m = captures.length;
			var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
			if (namedCaptures !== void 0) {
				namedCaptures = toObject(namedCaptures);
				symbols = SUBSTITUTION_SYMBOLS;
			}
			return replace(replacement, symbols, function(match, ch) {
				var capture;
				switch (charAt(ch, 0)) {
					case "$": return "$";
					case "&": return matched;
					case "`": return stringSlice(str, 0, position);
					case "'": return stringSlice(str, tailPos);
					case "<":
						capture = namedCaptures[stringSlice(ch, 1, -1)];
						break;
					default:
						var n = +ch;
						if (n === 0) return match;
						if (n > m) {
							var f = floor(n / 10);
							if (f === 0) return match;
							if (f <= m) return captures[f - 1] === void 0 ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
							return match;
						}
						capture = captures[n - 1];
				}
				return capture === void 0 ? "" : capture;
			});
		};
	}));
	var require_es_string_replace = __commonJSMin$1((() => {
		var apply = require_function_apply();
		var call = require_function_call();
		var uncurryThis = require_function_uncurry_this();
		var fixRegExpWellKnownSymbolLogic = require_fix_regexp_well_known_symbol_logic();
		var fails = require_fails();
		var anObject = require_an_object();
		var isCallable = require_is_callable();
		var isObject = require_is_object();
		var toIntegerOrInfinity = require_to_integer_or_infinity();
		var toLength = require_to_length();
		var toString = require_to_string();
		var requireObjectCoercible = require_require_object_coercible();
		var advanceStringIndex = require_advance_string_index();
		var getMethod = require_get_method();
		var getSubstitution = require_get_substitution();
		var getRegExpFlags = require_regexp_get_flags();
		var regExpExec = require_regexp_exec_abstract();
		var REPLACE = require_well_known_symbol()("replace");
		var max = Math.max;
		var min = Math.min;
		var concat = uncurryThis([].concat);
		var push = uncurryThis([].push);
		var stringIndexOf = uncurryThis("".indexOf);
		var stringSlice = uncurryThis("".slice);
		var maybeToString = function(it) {
			return it === void 0 ? it : String(it);
		};
		var REPLACE_KEEPS_$0 = (function() {
			return "a".replace(/./, "$0") === "$0";
		})();
		var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function() {
			if (/./[REPLACE]) return /./[REPLACE]("a", "$0") === "";
			return false;
		})();
		fixRegExpWellKnownSymbolLogic("replace", function(_, nativeReplace, maybeCallNative) {
			var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
			return [function replace(searchValue, replaceValue) {
				var O = requireObjectCoercible(this);
				var replacer = isObject(searchValue) ? getMethod(searchValue, REPLACE) : void 0;
				return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace, toString(O), searchValue, replaceValue);
			}, function(string, replaceValue) {
				var rx = anObject(this);
				var S = toString(string);
				var functionalReplace = isCallable(replaceValue);
				if (!functionalReplace) replaceValue = toString(replaceValue);
				var flags = toString(getRegExpFlags(rx));
				if (typeof replaceValue == "string" && !~stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) && !~stringIndexOf(replaceValue, "$<") && !~stringIndexOf(flags, "y")) {
					var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
					if (res.done) return res.value;
				}
				var global = !!~stringIndexOf(flags, "g");
				var fullUnicode;
				if (global) {
					fullUnicode = !!~stringIndexOf(flags, "u") || !!~stringIndexOf(flags, "v");
					rx.lastIndex = 0;
				}
				var results = [];
				var result;
				while (true) {
					result = regExpExec(rx, S);
					if (result === null) break;
					push(results, result);
					if (!global) break;
					if (toString(result[0]) === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
				}
				var accumulatedResult = "";
				var nextSourcePosition = 0;
				for (var i = 0; i < results.length; i++) {
					result = results[i];
					var matched = toString(result[0]);
					var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
					var captures = [];
					var replacement;
					for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
					var namedCaptures = result.groups;
					if (functionalReplace) {
						var replacerArgs = concat([matched], captures, position, S);
						if (namedCaptures !== void 0) push(replacerArgs, namedCaptures);
						replacement = toString(apply(replaceValue, void 0, replacerArgs));
					} else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
					if (position >= nextSourcePosition) {
						accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
						nextSourcePosition = position + matched.length;
					}
				}
				return accumulatedResult + stringSlice(S, nextSourcePosition);
			}];
		}, !!fails(function() {
			var re = /./;
			re.exec = function() {
				var result = [];
				result.groups = { a: "7" };
				return result;
			};
			return "".replace(re, "$<a>") !== "7";
		}) || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
	}));
	var require_whitespaces = __commonJSMin$1(((exports, module) => {
		module.exports = "	\n\v\f\r \xA0              　\u2028\u2029﻿";
	}));
	var require_string_trim = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var requireObjectCoercible = require_require_object_coercible();
		var toString = require_to_string();
		var whitespaces = require_whitespaces();
		var replace = uncurryThis("".replace);
		var ltrim = RegExp("^[" + whitespaces + "]+");
		var rtrim = RegExp("(^|[^" + whitespaces + "])[" + whitespaces + "]+$");
		var createMethod = function(TYPE) {
			return function($this) {
				var string = toString(requireObjectCoercible($this));
				if (TYPE & 1) string = replace(string, ltrim, "");
				if (TYPE & 2) string = replace(string, rtrim, "$1");
				return string;
			};
		};
		module.exports = {
			start: createMethod(1),
			end: createMethod(2),
			trim: createMethod(3)
		};
	}));
	var require_string_trim_forced = __commonJSMin$1(((exports, module) => {
		var PROPER_FUNCTION_NAME = require_function_name().PROPER;
		var fails = require_fails();
		var whitespaces = require_whitespaces();
		var non = "​᠎";
		module.exports = function(METHOD_NAME) {
			return fails(function() {
				return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
			});
		};
	}));
	var require_es_string_trim = __commonJSMin$1((() => {
		var $ = require_export();
		var $trim = require_string_trim().trim;
		$({
			target: "String",
			proto: true,
			forced: require_string_trim_forced()("trim")
		}, { trim: function trim() {
			return $trim(this);
		} });
	}));
	var require_string_trim_start = __commonJSMin$1(((exports, module) => {
		var $trimStart = require_string_trim().start;
		module.exports = require_string_trim_forced()("trimStart") ? function trimStart() {
			return $trimStart(this);
		} : "".trimStart;
	}));
	var require_es_string_trim_left = __commonJSMin$1((() => {
		var $ = require_export();
		var trimStart = require_string_trim_start();
		$({
			target: "String",
			proto: true,
			name: "trimStart",
			forced: "".trimLeft !== trimStart
		}, { trimLeft: trimStart });
	}));
	var require_es_string_trim_start = __commonJSMin$1((() => {
		require_es_string_trim_left();
		var $ = require_export();
		var trimStart = require_string_trim_start();
		$({
			target: "String",
			proto: true,
			name: "trimStart",
			forced: "".trimStart !== trimStart
		}, { trimStart });
	}));
	var require_array_iteration = __commonJSMin$1(((exports, module) => {
		var bind = require_function_bind_context();
		var IndexedObject = require_indexed_object();
		var toObject = require_to_object();
		var lengthOfArrayLike = require_length_of_array_like();
		var arraySpeciesCreate = require_array_species_create();
		var createProperty = require_create_property();
		var createMethod = function(TYPE) {
			var IS_MAP = TYPE === 1;
			var IS_FILTER = TYPE === 2;
			var IS_SOME = TYPE === 3;
			var IS_EVERY = TYPE === 4;
			var IS_FIND_INDEX = TYPE === 6;
			var IS_FILTER_REJECT = TYPE === 7;
			var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
			return function($this, callbackfn, that) {
				var O = toObject($this);
				var self = IndexedObject(O);
				var length = lengthOfArrayLike(self);
				var boundFunction = bind(callbackfn, that);
				var index = 0;
				var resIndex = 0;
				var target = IS_MAP ? arraySpeciesCreate($this, length) : IS_FILTER || IS_FILTER_REJECT ? arraySpeciesCreate($this, 0) : void 0;
				var value, result;
				for (; length > index; index++) if (NO_HOLES || index in self) {
					value = self[index];
					result = boundFunction(value, index, O);
					if (TYPE) {
						if (IS_MAP) createProperty(target, index, result);
						else if (result) switch (TYPE) {
							case 3: return true;
							case 5: return value;
							case 6: return index;
							case 2: createProperty(target, resIndex++, value);
						}
						else switch (TYPE) {
							case 4: return false;
							case 7: createProperty(target, resIndex++, value);
						}
					}
				}
				return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
			};
		};
		module.exports = {
			forEach: createMethod(0),
			map: createMethod(1),
			filter: createMethod(2),
			some: createMethod(3),
			every: createMethod(4),
			find: createMethod(5),
			findIndex: createMethod(6),
			filterReject: createMethod(7)
		};
	}));
	var require_collection_weak = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var defineBuiltIns = require_define_built_ins();
		var getWeakData = require_internal_metadata().getWeakData;
		var anInstance = require_an_instance();
		var anObject = require_an_object();
		var isNullOrUndefined = require_is_null_or_undefined();
		var isObject = require_is_object();
		var iterate = require_iterate();
		var ArrayIterationModule = require_array_iteration();
		var hasOwn = require_has_own_property();
		var InternalStateModule = require_internal_state();
		var setInternalState = InternalStateModule.set;
		var internalStateGetterFor = InternalStateModule.getterFor;
		var find = ArrayIterationModule.find;
		var findIndex = ArrayIterationModule.findIndex;
		var splice = uncurryThis([].splice);
		var id = 0;
		var uncaughtFrozenStore = function(state) {
			return state.frozen || (state.frozen = new UncaughtFrozenStore());
		};
		var UncaughtFrozenStore = function() {
			this.entries = [];
		};
		var findUncaughtFrozen = function(store, key) {
			return find(store.entries, function(it) {
				return it[0] === key;
			});
		};
		UncaughtFrozenStore.prototype = {
			get: function(key) {
				var entry = findUncaughtFrozen(this, key);
				if (entry) return entry[1];
			},
			has: function(key) {
				return !!findUncaughtFrozen(this, key);
			},
			set: function(key, value) {
				var entry = findUncaughtFrozen(this, key);
				if (entry) entry[1] = value;
				else this.entries.push([key, value]);
			},
			"delete": function(key) {
				var index = findIndex(this.entries, function(it) {
					return it[0] === key;
				});
				if (~index) splice(this.entries, index, 1);
				return !!~index;
			}
		};
		module.exports = { getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
			var Constructor = wrapper(function(that, iterable) {
				anInstance(that, Prototype);
				setInternalState(that, {
					type: CONSTRUCTOR_NAME,
					id: id++,
					frozen: null
				});
				if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
					that,
					AS_ENTRIES: IS_MAP
				});
			});
			var Prototype = Constructor.prototype;
			var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
			var define = function(that, key, value) {
				var state = getInternalState(that);
				var data = getWeakData(anObject(key), true);
				if (data === true) uncaughtFrozenStore(state).set(key, value);
				else data[state.id] = value;
				return that;
			};
			defineBuiltIns(Prototype, {
				"delete": function(key) {
					var state = getInternalState(this);
					if (!isObject(key)) return false;
					var data = getWeakData(key);
					if (data === true) return uncaughtFrozenStore(state)["delete"](key);
					return data && hasOwn(data, state.id) && delete data[state.id];
				},
				has: function has(key) {
					var state = getInternalState(this);
					if (!isObject(key)) return false;
					var data = getWeakData(key);
					if (data === true) return uncaughtFrozenStore(state).has(key);
					return data && hasOwn(data, state.id);
				}
			});
			defineBuiltIns(Prototype, IS_MAP ? {
				get: function get(key) {
					var state = getInternalState(this);
					if (isObject(key)) {
						var data = getWeakData(key);
						if (data === true) return uncaughtFrozenStore(state).get(key);
						if (data) return data[state.id];
					}
				},
				set: function set(key, value) {
					return define(this, key, value);
				}
			} : { add: function add(value) {
				return define(this, value, true);
			} });
			return Constructor;
		} };
	}));
	var require_es_weak_map_constructor = __commonJSMin$1((() => {
		var FREEZING = require_freezing();
		var globalThis = require_global_this();
		var uncurryThis = require_function_uncurry_this();
		var defineBuiltIns = require_define_built_ins();
		var InternalMetadataModule = require_internal_metadata();
		var collection = require_collection();
		var collectionWeak = require_collection_weak();
		var isObject = require_is_object();
		var enforceInternalState = require_internal_state().enforce;
		var fails = require_fails();
		var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
		var $Object = Object;
		var isArray = Array.isArray;
		var isExtensible = $Object.isExtensible;
		var isFrozen = $Object.isFrozen;
		var isSealed = $Object.isSealed;
		var freeze = $Object.freeze;
		var seal = $Object.seal;
		var IS_IE11 = !globalThis.ActiveXObject && "ActiveXObject" in globalThis;
		var InternalWeakMap;
		var wrapper = function(init) {
			return function WeakMap() {
				return init(this, arguments.length ? arguments[0] : void 0);
			};
		};
		var $WeakMap = collection("WeakMap", wrapper, collectionWeak);
		var WeakMapPrototype = $WeakMap.prototype;
		var nativeSet = uncurryThis(WeakMapPrototype.set);
		var hasMSEdgeFreezingBug = function() {
			return FREEZING && fails(function() {
				var frozenArray = freeze([]);
				nativeSet(new $WeakMap(), frozenArray, 1);
				return !isFrozen(frozenArray);
			});
		};
		if (NATIVE_WEAK_MAP) {
			if (IS_IE11) {
				InternalWeakMap = collectionWeak.getConstructor(wrapper, "WeakMap", true);
				InternalMetadataModule.enable();
				var nativeDelete = uncurryThis(WeakMapPrototype["delete"]);
				var nativeHas = uncurryThis(WeakMapPrototype.has);
				var nativeGet = uncurryThis(WeakMapPrototype.get);
				defineBuiltIns(WeakMapPrototype, {
					"delete": function(key) {
						if (isObject(key) && !isExtensible(key)) {
							var state = enforceInternalState(this);
							if (!state.frozen) state.frozen = new InternalWeakMap();
							return nativeDelete(this, key) || state.frozen["delete"](key);
						}
						return nativeDelete(this, key);
					},
					has: function has(key) {
						if (isObject(key) && !isExtensible(key)) {
							var state = enforceInternalState(this);
							if (!state.frozen) state.frozen = new InternalWeakMap();
							return nativeHas(this, key) || state.frozen.has(key);
						}
						return nativeHas(this, key);
					},
					get: function get(key) {
						if (isObject(key) && !isExtensible(key)) {
							var state = enforceInternalState(this);
							if (!state.frozen) state.frozen = new InternalWeakMap();
							return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
						}
						return nativeGet(this, key);
					},
					set: function set(key, value) {
						if (isObject(key) && !isExtensible(key)) {
							var state = enforceInternalState(this);
							if (!state.frozen) state.frozen = new InternalWeakMap();
							nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
						} else nativeSet(this, key, value);
						return this;
					}
				});
			} else if (hasMSEdgeFreezingBug()) defineBuiltIns(WeakMapPrototype, { set: function set(key, value) {
				var arrayIntegrityLevel;
				if (isArray(key)) {
					if (isFrozen(key)) arrayIntegrityLevel = freeze;
					else if (isSealed(key)) arrayIntegrityLevel = seal;
				}
				nativeSet(this, key, value);
				if (arrayIntegrityLevel) arrayIntegrityLevel(key);
				return this;
			} });
		}
	}));
	var require_es_weak_map = __commonJSMin$1((() => {
		require_es_weak_map_constructor();
	}));
	var require_weak_map_helpers = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var WeakMapPrototype = WeakMap.prototype;
		module.exports = {
			WeakMap,
			set: uncurryThis(WeakMapPrototype.set),
			get: uncurryThis(WeakMapPrototype.get),
			has: uncurryThis(WeakMapPrototype.has),
			remove: uncurryThis(WeakMapPrototype["delete"])
		};
	}));
	var require_es_weak_map_get_or_insert = __commonJSMin$1((() => {
		var $ = require_export();
		var WeakMapHelpers = require_weak_map_helpers();
		var IS_PURE = require_is_pure();
		var get = WeakMapHelpers.get;
		var has = WeakMapHelpers.has;
		var set = WeakMapHelpers.set;
		$({
			target: "WeakMap",
			proto: true,
			real: true,
			forced: IS_PURE
		}, { getOrInsert: function getOrInsert(key, value) {
			if (has(this, key)) return get(this, key);
			set(this, key, value);
			return value;
		} });
	}));
	var require_a_weak_map = __commonJSMin$1(((exports, module) => {
		var has = require_weak_map_helpers().has;
		module.exports = function(it) {
			has(it);
			return it;
		};
	}));
	var require_a_weak_key = __commonJSMin$1(((exports, module) => {
		var WeakMapHelpers = require_weak_map_helpers();
		var weakmap = new WeakMapHelpers.WeakMap();
		var set = WeakMapHelpers.set;
		var remove = WeakMapHelpers.remove;
		module.exports = function(key) {
			set(weakmap, key, 1);
			remove(weakmap, key);
			return key;
		};
	}));
	var require_es_weak_map_get_or_insert_computed = __commonJSMin$1((() => {
		var $ = require_export();
		var aCallable = require_a_callable();
		var aWeakMap = require_a_weak_map();
		var aWeakKey = require_a_weak_key();
		var WeakMapHelpers = require_weak_map_helpers();
		var IS_PURE = require_is_pure();
		var get = WeakMapHelpers.get;
		var has = WeakMapHelpers.has;
		var set = WeakMapHelpers.set;
		$({
			target: "WeakMap",
			proto: true,
			real: true,
			forced: IS_PURE || !function() {
				try {
					if (WeakMap.prototype.getOrInsertComputed) new WeakMap().getOrInsertComputed(1, function() {
						throw 1;
					});
				} catch (error) {
					return error instanceof TypeError;
				}
			}()
		}, { getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
			if (!IS_PURE) aWeakMap(this);
			aWeakKey(key);
			aCallable(callbackfn);
			if (has(this, key)) return get(this, key);
			var value = callbackfn(key);
			set(this, key, value);
			return value;
		} });
	}));
	var require_dom_iterables = __commonJSMin$1(((exports, module) => {
		module.exports = {
			CSSRuleList: 0,
			CSSStyleDeclaration: 0,
			CSSValueList: 0,
			ClientRectList: 0,
			DOMRectList: 0,
			DOMStringList: 0,
			DOMTokenList: 1,
			DataTransferItemList: 0,
			FileList: 0,
			HTMLAllCollection: 0,
			HTMLCollection: 0,
			HTMLFormElement: 0,
			HTMLSelectElement: 0,
			MediaList: 0,
			MimeTypeArray: 0,
			NamedNodeMap: 0,
			NodeList: 1,
			PaintRequestList: 0,
			Plugin: 0,
			PluginArray: 0,
			SVGLengthList: 0,
			SVGNumberList: 0,
			SVGPathSegList: 0,
			SVGPointList: 0,
			SVGStringList: 0,
			SVGTransformList: 0,
			SourceBufferList: 0,
			StyleSheetList: 0,
			TextTrackCueList: 0,
			TextTrackList: 0,
			TouchList: 0
		};
	}));
	var require_dom_token_list_prototype = __commonJSMin$1(((exports, module) => {
		var classList = require_document_create_element()("span").classList;
		var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
		module.exports = DOMTokenListPrototype === Object.prototype ? void 0 : DOMTokenListPrototype;
	}));
	var require_array_for_each = __commonJSMin$1(((exports, module) => {
		var $forEach = require_array_iteration().forEach;
		module.exports = !require_array_method_is_strict()("forEach") ? function forEach(callbackfn) {
			return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
		} : [].forEach;
	}));
	var require_web_dom_collections_for_each = __commonJSMin$1((() => {
		var globalThis = require_global_this();
		var DOMIterables = require_dom_iterables();
		var DOMTokenListPrototype = require_dom_token_list_prototype();
		var forEach = require_array_for_each();
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		var handlePrototype = function(CollectionPrototype) {
			if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
				createNonEnumerableProperty(CollectionPrototype, "forEach", forEach);
			} catch (error) {
				CollectionPrototype.forEach = forEach;
			}
		};
		for (var COLLECTION_NAME in DOMIterables) if (DOMIterables[COLLECTION_NAME]) handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype);
		handlePrototype(DOMTokenListPrototype);
	}));
	var require_web_dom_collections_iterator = __commonJSMin$1((() => {
		var globalThis = require_global_this();
		var DOMIterables = require_dom_iterables();
		var DOMTokenListPrototype = require_dom_token_list_prototype();
		var ArrayIteratorMethods = require_es_array_iterator();
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		var setToStringTag = require_set_to_string_tag();
		var ITERATOR = require_well_known_symbol()("iterator");
		var ArrayValues = ArrayIteratorMethods.values;
		var handlePrototype = function(CollectionPrototype, COLLECTION_NAME) {
			if (CollectionPrototype) {
				if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
					createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
				} catch (error) {
					CollectionPrototype[ITERATOR] = ArrayValues;
				}
				setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
				if (DOMIterables[COLLECTION_NAME]) {
					for (var METHOD_NAME in ArrayIteratorMethods) if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
						createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
					} catch (error) {
						CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
					}
				}
			}
		};
		for (var COLLECTION_NAME in DOMIterables) handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype, COLLECTION_NAME);
		handlePrototype(DOMTokenListPrototype, "DOMTokenList");
	}));
	var require_es_string_iterator = __commonJSMin$1((() => {
		var charAt = require_string_multibyte().charAt;
		var toString = require_to_string();
		var InternalStateModule = require_internal_state();
		var defineIterator = require_iterator_define();
		var createIterResultObject = require_create_iter_result_object();
		var STRING_ITERATOR = "String Iterator";
		var setInternalState = InternalStateModule.set;
		var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
		defineIterator(String, "String", function(iterated) {
			setInternalState(this, {
				type: STRING_ITERATOR,
				string: toString(iterated),
				index: 0
			});
		}, function next() {
			var state = getInternalState(this);
			var string = state.string;
			var index = state.index;
			var point;
			if (index >= string.length) return createIterResultObject(void 0, true);
			point = charAt(string, index);
			state.index += point.length;
			return createIterResultObject(point, false);
		});
	}));
	var require_url_constructor_detection = __commonJSMin$1(((exports, module) => {
		var fails = require_fails();
		var wellKnownSymbol = require_well_known_symbol();
		var DESCRIPTORS = require_descriptors();
		var IS_PURE = require_is_pure();
		var ITERATOR = wellKnownSymbol("iterator");
		module.exports = !fails(function() {
			var url = new URL("b?a=1&b=2&c=3", "https://a");
			var params = url.searchParams;
			var params2 = new URLSearchParams("a=1&a=2&b=3");
			var result = "";
			url.pathname = "c%20d";
			params.forEach(function(value, key) {
				params["delete"]("b");
				result += key + value;
			});
			params2["delete"]("a", 2);
			params2["delete"]("b", void 0);
			return IS_PURE && (!url.toJSON || !params2.has("a", 1) || params2.has("a", 2) || !params2.has("a", void 0) || params2.has("b")) || !params.size && (IS_PURE || !DESCRIPTORS) || !params.sort || url.href !== "https://a/c%20d?a=1&c=3" || params.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !params[ITERATOR] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("https://тест").host !== "xn--e1aybc" || new URL("https://a#б").hash !== "#%D0%B1" || result !== "a1c3" || new URL("https://x", void 0).host !== "x";
		});
	}));
	var require_object_assign = __commonJSMin$1(((exports, module) => {
		var DESCRIPTORS = require_descriptors();
		var uncurryThis = require_function_uncurry_this();
		var call = require_function_call();
		var fails = require_fails();
		var objectKeys = require_object_keys();
		var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
		var propertyIsEnumerableModule = require_object_property_is_enumerable();
		var toObject = require_to_object();
		var IndexedObject = require_indexed_object();
		var $assign = Object.assign;
		var defineProperty = Object.defineProperty;
		var concat = uncurryThis([].concat);
		module.exports = !$assign || fails(function() {
			if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, "a", {
				enumerable: true,
				get: function() {
					defineProperty(this, "b", {
						value: 3,
						enumerable: false
					});
				}
			}), { b: 2 })).b !== 1) return true;
			var A = {};
			var B = {};
			var symbol = Symbol("assign detection");
			var alphabet = "abcdefghijklmnopqrst";
			A[symbol] = 7;
			alphabet.split("").forEach(function(chr) {
				B[chr] = chr;
			});
			return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join("") !== alphabet;
		}) ? function assign(target, source) {
			var T = toObject(target);
			var argumentsLength = arguments.length;
			var index = 1;
			var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
			var propertyIsEnumerable = propertyIsEnumerableModule.f;
			while (argumentsLength > index) {
				var S = IndexedObject(arguments[index++]);
				var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
				var length = keys.length;
				var j = 0;
				var key;
				while (length > j) {
					key = keys[j++];
					if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
				}
			}
			return T;
		} : $assign;
	}));
	var require_array_from = __commonJSMin$1(((exports, module) => {
		var bind = require_function_bind_context();
		var call = require_function_call();
		var toObject = require_to_object();
		var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
		var isArrayIteratorMethod = require_is_array_iterator_method();
		var isConstructor = require_is_constructor();
		var lengthOfArrayLike = require_length_of_array_like();
		var createProperty = require_create_property();
		var setArrayLength = require_array_set_length();
		var getIterator = require_get_iterator_internal();
		var getIteratorMethod = require_get_iterator_method_internal();
		var iteratorClose = require_iterator_close();
		var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
		var $Array = Array;
		module.exports = function from(arrayLike) {
			var IS_CONSTRUCTOR = isConstructor(this);
			var argumentsLength = arguments.length;
			var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
			var mapping = mapfn !== void 0;
			if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
			var O = toObject(arrayLike);
			var iteratorMethod = getIteratorMethod(O);
			var index = 0;
			var length, result, step, iterator, next, value;
			if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
				result = IS_CONSTRUCTOR ? new this() : [];
				iterator = getIterator(O, iteratorMethod);
				next = iterator.next;
				for (; !(step = call(next, iterator)).done; index++) {
					try {
						doesNotExceedSafeInteger(index);
					} catch (error) {
						iteratorClose(iterator, "throw", error);
					}
					value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
					try {
						createProperty(result, index, value);
					} catch (error) {
						iteratorClose(iterator, "throw", error);
					}
				}
			} else {
				length = lengthOfArrayLike(O);
				result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
				for (; length > index; index++) {
					value = mapping ? mapfn(O[index], index) : O[index];
					createProperty(result, index, value);
				}
			}
			setArrayLength(result, index);
			return result;
		};
	}));
	var require_string_punycode_to_ascii = __commonJSMin$1(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var maxInt = 2147483647;
		var base = 36;
		var tMin = 1;
		var tMax = 26;
		var skew = 38;
		var damp = 700;
		var initialBias = 72;
		var initialN = 128;
		var delimiter = "-";
		var regexNonASCII = /[^\0-\u007E]/;
		var regexSeparators = /[.\u3002\uFF0E\uFF61]/g;
		var OVERFLOW_ERROR = "Overflow: input needs wider integers to process";
		var baseMinusTMin = base - tMin;
		var $RangeError = RangeError;
		var exec = uncurryThis(regexSeparators.exec);
		var floor = Math.floor;
		var fromCharCode = String.fromCharCode;
		var charCodeAt = uncurryThis("".charCodeAt);
		var join = uncurryThis([].join);
		var push = uncurryThis([].push);
		var replace = uncurryThis("".replace);
		var split = uncurryThis("".split);
		var toLowerCase = uncurryThis("".toLowerCase);
		var ucs2decode = function(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			while (counter < length) {
				var value = charCodeAt(string, counter++);
				if (value >= 55296 && value <= 56319 && counter < length) {
					var extra = charCodeAt(string, counter++);
					if ((extra & 64512) === 56320) push(output, ((value & 1023) << 10) + (extra & 1023) + 65536);
					else {
						push(output, value);
						counter--;
					}
				} else push(output, value);
			}
			return output;
		};
		var digitToBasic = function(digit) {
			return digit + 22 + 75 * (digit < 26);
		};
		var adapt = function(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			while (delta > baseMinusTMin * tMax >> 1) {
				delta = floor(delta / baseMinusTMin);
				k += base;
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		};
		var encode = function(input) {
			var output = [];
			input = ucs2decode(input);
			var inputLength = input.length;
			var n = initialN;
			var delta = 0;
			var bias = initialBias;
			var i = 0, currentValue;
			for (; i < input.length; i++) {
				currentValue = input[i];
				if (currentValue < 128) push(output, fromCharCode(currentValue));
			}
			var basicLength = output.length;
			var handledCPCount = basicLength;
			if (basicLength) push(output, delimiter);
			while (handledCPCount < inputLength) {
				var m = maxInt;
				for (i = 0; i < input.length; i++) {
					currentValue = input[i];
					if (currentValue >= n && currentValue < m) m = currentValue;
				}
				var handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) throw new $RangeError(OVERFLOW_ERROR);
				delta += (m - n) * handledCPCountPlusOne;
				n = m;
				for (i = 0; i < input.length; i++) {
					currentValue = input[i];
					if (currentValue < n && ++delta > maxInt) throw new $RangeError(OVERFLOW_ERROR);
					if (currentValue === n) {
						var q = delta;
						var k = base;
						while (true) {
							var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
							if (q < t) break;
							var qMinusT = q - t;
							var baseMinusT = base - t;
							push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
							q = floor(qMinusT / baseMinusT);
							k += base;
						}
						push(output, fromCharCode(digitToBasic(q)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
						delta = 0;
						handledCPCount++;
					}
				}
				delta++;
				n++;
			}
			return join(output, "");
		};
		module.exports = function(input) {
			var encoded = [];
			var labels = split(replace(toLowerCase(input), regexSeparators, "."), ".");
			var i = 0, label;
			for (; i < labels.length; i++) {
				label = labels[i];
				push(encoded, exec(regexNonASCII, label) ? "xn--" + encode(label) : label);
			}
			return join(encoded, ".");
		};
	}));
	var require_es_string_from_code_point = __commonJSMin$1((() => {
		var $ = require_export();
		var uncurryThis = require_function_uncurry_this();
		var toAbsoluteIndex = require_to_absolute_index();
		var $RangeError = RangeError;
		var fromCharCode = String.fromCharCode;
		var $fromCodePoint = String.fromCodePoint;
		var join = uncurryThis([].join);
		$({
			target: "String",
			stat: true,
			arity: 1,
			forced: !!$fromCodePoint && $fromCodePoint.length !== 1
		}, { fromCodePoint: function fromCodePoint(x) {
			var elements = [];
			var length = arguments.length;
			var i = 0;
			var code;
			while (length > i) {
				code = +arguments[i];
				if (toAbsoluteIndex(code, 1114111) !== code) throw new $RangeError(code + " is not a valid code point");
				elements[i++] = code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320);
			}
			return join(elements, "");
		} });
	}));
	var require_url_percent_coding = __commonJSMin$1(((exports, module) => {
		require_es_string_from_code_point();
		var getBuiltIn = require_get_built_in();
		var uncurryThis = require_function_uncurry_this();
		var fromCharCode = String.fromCharCode;
		var fromCodePoint = getBuiltIn("String", "fromCodePoint");
		var $encodeURIComponent = encodeURIComponent;
		var $parseInt = parseInt;
		var charAt = uncurryThis("".charAt);
		var push = uncurryThis([].push);
		var replace = uncurryThis("".replace);
		var stringSlice = uncurryThis("".slice);
		var exec = uncurryThis(/./.exec);
		var FALLBACK_REPLACER = "�";
		var VALID_HEX = /^[0-9a-f]+$/i;
		var SURROGATE = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g;
		var parseHexOctet = function(string, start) {
			var substr = stringSlice(string, start, start + 2);
			if (!exec(VALID_HEX, substr)) return NaN;
			return $parseInt(substr, 16);
		};
		var getLeadingOnes = function(octet) {
			var count = 0;
			for (var mask = 128; mask > 0 && (octet & mask) !== 0; mask >>= 1) count++;
			return count;
		};
		var utf8Decode = function(octets) {
			var codePoint = null;
			var length = octets.length;
			switch (length) {
				case 1:
					codePoint = octets[0];
					break;
				case 2:
					codePoint = (octets[0] & 31) << 6 | octets[1] & 63;
					break;
				case 3:
					codePoint = (octets[0] & 15) << 12 | (octets[1] & 63) << 6 | octets[2] & 63;
					break;
				case 4: codePoint = (octets[0] & 7) << 18 | (octets[1] & 63) << 12 | (octets[2] & 63) << 6 | octets[3] & 63;
			}
			if (codePoint === null || codePoint > 1114111 || codePoint >= 55296 && codePoint <= 57343 || codePoint < (length > 3 ? 65536 : length > 2 ? 2048 : length > 1 ? 128 : 0)) return null;
			return codePoint;
		};
		var replaceLoneSurrogate = function(chunk) {
			return chunk.length === 2 ? chunk : FALLBACK_REPLACER;
		};
		var decode = function(input) {
			var length = input.length;
			var result = "";
			var i = 0;
			while (i < length) {
				var decodedChar = charAt(input, i);
				if (decodedChar === "%") {
					if (charAt(input, i + 1) === "%" || i + 3 > length) {
						result += "%";
						i++;
						continue;
					}
					var octet = parseHexOctet(input, i + 1);
					if (octet !== octet) {
						result += decodedChar;
						i++;
						continue;
					}
					i += 2;
					var byteSequenceLength = getLeadingOnes(octet);
					if (byteSequenceLength === 0) decodedChar = fromCharCode(octet);
					else {
						if (byteSequenceLength === 1 || byteSequenceLength > 4) {
							result += FALLBACK_REPLACER;
							i++;
							continue;
						}
						var octets = [octet];
						var sequenceIndex = 1;
						while (sequenceIndex < byteSequenceLength) {
							i++;
							if (i + 3 > length || charAt(input, i) !== "%") break;
							var nextByte = parseHexOctet(input, i + 1);
							if (nextByte !== nextByte || nextByte > 191 || nextByte < 128) break;
							if (sequenceIndex === 1) {
								if (octet === 224 && nextByte < 160) break;
								if (octet === 237 && nextByte > 159) break;
								if (octet === 240 && nextByte < 144) break;
								if (octet === 244 && nextByte > 143) break;
							}
							push(octets, nextByte);
							i += 2;
							sequenceIndex++;
						}
						if (octets.length !== byteSequenceLength) {
							result += FALLBACK_REPLACER;
							continue;
						}
						var codePoint = utf8Decode(octets);
						if (codePoint === null) {
							for (var replacement = 0; replacement < byteSequenceLength; replacement++) result += FALLBACK_REPLACER;
							i++;
							continue;
						} else decodedChar = fromCodePoint(codePoint);
					}
				}
				result += decodedChar;
				i++;
			}
			return result;
		};
		var encode = function(input) {
			try {
				return $encodeURIComponent(input);
			} catch (error) {
				return $encodeURIComponent(replace(input, SURROGATE, replaceLoneSurrogate));
			}
		};
		module.exports = {
			decode,
			encode
		};
	}));
	var require_array_sort = __commonJSMin$1(((exports, module) => {
		var arraySlice = require_array_slice();
		var floor = Math.floor;
		var sort = function(array, comparefn) {
			var length = array.length;
			if (length < 8) {
				var i = 1;
				var element, j;
				while (i < length) {
					j = i;
					element = array[i];
					while (j && comparefn(array[j - 1], element) > 0) array[j] = array[--j];
					if (j !== i++) array[j] = element;
				}
			} else {
				var middle = floor(length / 2);
				var left = sort(arraySlice(array, 0, middle), comparefn);
				var right = sort(arraySlice(array, middle), comparefn);
				var llength = left.length;
				var rlength = right.length;
				var lindex = 0;
				var rindex = 0;
				while (lindex < llength || rindex < rlength) array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
			}
			return array;
		};
		module.exports = sort;
	}));
	var require_web_url_search_params_constructor = __commonJSMin$1(((exports, module) => {
		require_es_array_iterator();
		var $ = require_export();
		var globalThis = require_global_this();
		var safeGetBuiltIn = require_safe_get_built_in();
		var call = require_function_call();
		var uncurryThis = require_function_uncurry_this();
		var DESCRIPTORS = require_descriptors();
		var USE_NATIVE_URL = require_url_constructor_detection();
		var percentCoding = require_url_percent_coding();
		var defineBuiltIn = require_define_built_in();
		var defineBuiltInAccessor = require_define_built_in_accessor();
		var defineBuiltIns = require_define_built_ins();
		var setToStringTag = require_set_to_string_tag();
		var createIteratorConstructor = require_iterator_create_constructor();
		var InternalStateModule = require_internal_state();
		var anInstance = require_an_instance();
		var isCallable = require_is_callable();
		var hasOwn = require_has_own_property();
		var bind = require_function_bind_context();
		var classof = require_classof();
		var anObject = require_an_object();
		var isObject = require_is_object();
		var $toString = require_to_string();
		var create = require_object_create();
		var createPropertyDescriptor = require_create_property_descriptor();
		var getIterator = require_get_iterator_internal();
		var getIteratorMethod = require_get_iterator_method_internal();
		var createIterResultObject = require_create_iter_result_object();
		var validateArgumentsLength = require_validate_arguments_length();
		var wellKnownSymbol = require_well_known_symbol();
		var arraySort = require_array_sort();
		var ITERATOR = wellKnownSymbol("iterator");
		var URL_SEARCH_PARAMS = "URLSearchParams";
		var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + "Iterator";
		var setInternalState = InternalStateModule.set;
		var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
		var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
		var percentDecode = percentCoding.decode;
		var percentEncode = percentCoding.encode;
		var nativeFetch = safeGetBuiltIn("fetch");
		var NativeRequest = safeGetBuiltIn("Request");
		var Headers = safeGetBuiltIn("Headers");
		var RequestPrototype = NativeRequest && NativeRequest.prototype;
		var HeadersPrototype = Headers && Headers.prototype;
		var TypeError = globalThis.TypeError;
		var charAt = uncurryThis("".charAt);
		var join = uncurryThis([].join);
		var push = uncurryThis([].push);
		var replace = uncurryThis("".replace);
		var shift = uncurryThis([].shift);
		var splice = uncurryThis([].splice);
		var split = uncurryThis("".split);
		var stringSlice = uncurryThis("".slice);
		var plus = /\+/g;
		var decodeQueryComponent = function(input) {
			return percentDecode(replace(input, plus, " "));
		};
		var find = /[!'()~]|%20/g;
		var replacements = {
			"!": "%21",
			"'": "%27",
			"(": "%28",
			")": "%29",
			"~": "%7E",
			"%20": "+"
		};
		var replacer = function(match) {
			return replacements[match];
		};
		var serialize = function(it) {
			return replace(percentEncode(it), find, replacer);
		};
		var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
			setInternalState(this, {
				type: URL_SEARCH_PARAMS_ITERATOR,
				target: getInternalParamsState(params).entries,
				index: 0,
				kind
			});
		}, URL_SEARCH_PARAMS, function next() {
			var state = getInternalIteratorState(this);
			var target = state.target;
			var index = state.index++;
			if (!target || index >= target.length) {
				state.target = null;
				return createIterResultObject(void 0, true);
			}
			var entry = target[index];
			switch (state.kind) {
				case "keys": return createIterResultObject(entry.key, false);
				case "values": return createIterResultObject(entry.value, false);
			}
			return createIterResultObject([entry.key, entry.value], false);
		}, true);
		var URLSearchParamsState = function(init) {
			this.entries = [];
			this.url = null;
			if (init !== void 0) {
				if (isObject(init)) this.parseObject(init);
				else this.parseQuery(typeof init == "string" ? charAt(init, 0) === "?" ? stringSlice(init, 1) : init : $toString(init));
			}
		};
		URLSearchParamsState.prototype = {
			type: URL_SEARCH_PARAMS,
			bindURL: function(url) {
				this.url = url;
				this.update();
			},
			parseObject: function(object) {
				var entries = this.entries;
				var iteratorMethod = getIteratorMethod(object);
				var iterator, next, step, entryIterator, entryNext, first, second;
				if (iteratorMethod) {
					iterator = getIterator(object, iteratorMethod);
					next = iterator.next;
					while (!(step = call(next, iterator)).done) {
						entryIterator = getIterator(anObject(step.value));
						entryNext = entryIterator.next;
						if ((first = call(entryNext, entryIterator)).done || (second = call(entryNext, entryIterator)).done || !call(entryNext, entryIterator).done) throw new TypeError("Expected sequence with length 2");
						push(entries, {
							key: $toString(first.value),
							value: $toString(second.value)
						});
					}
				} else for (var key in object) if (hasOwn(object, key)) push(entries, {
					key,
					value: $toString(object[key])
				});
			},
			parseQuery: function(query) {
				if (query) {
					var entries = this.entries;
					var attributes = split(query, "&");
					var index = 0;
					var attribute, entry;
					while (index < attributes.length) {
						attribute = attributes[index++];
						if (attribute.length) {
							entry = split(attribute, "=");
							push(entries, {
								key: decodeQueryComponent(shift(entry)),
								value: decodeQueryComponent(join(entry, "="))
							});
						}
					}
				}
			},
			serialize: function() {
				var entries = this.entries;
				var result = [];
				var index = 0;
				var entry;
				while (index < entries.length) {
					entry = entries[index++];
					push(result, serialize(entry.key) + "=" + serialize(entry.value));
				}
				return join(result, "&");
			},
			update: function() {
				this.entries.length = 0;
				this.parseQuery(this.url.query);
			},
			updateURL: function() {
				if (this.url) this.url.update();
			}
		};
		var URLSearchParamsConstructor = function URLSearchParams() {
			anInstance(this, URLSearchParamsPrototype);
			var init = arguments.length > 0 ? arguments[0] : void 0;
			var state = setInternalState(this, new URLSearchParamsState(init));
			if (!DESCRIPTORS) this.size = state.entries.length;
		};
		var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
		defineBuiltIns(URLSearchParamsPrototype, {
			append: function append(name, value) {
				var state = getInternalParamsState(this);
				validateArgumentsLength(arguments.length, 2);
				push(state.entries, {
					key: $toString(name),
					value: $toString(value)
				});
				if (!DESCRIPTORS) this.size++;
				state.updateURL();
			},
			"delete": function(name) {
				var state = getInternalParamsState(this);
				var length = validateArgumentsLength(arguments.length, 1);
				var entries = state.entries;
				var key = $toString(name);
				var $value = length < 2 ? void 0 : arguments[1];
				var value = $value === void 0 ? $value : $toString($value);
				var index = 0;
				while (index < entries.length) {
					var entry = entries[index];
					if (entry.key === key && (value === void 0 || entry.value === value)) splice(entries, index, 1);
					else index++;
				}
				if (!DESCRIPTORS) this.size = entries.length;
				state.updateURL();
			},
			get: function get(name) {
				var entries = getInternalParamsState(this).entries;
				validateArgumentsLength(arguments.length, 1);
				var key = $toString(name);
				var index = 0;
				for (; index < entries.length; index++) if (entries[index].key === key) return entries[index].value;
				return null;
			},
			getAll: function getAll(name) {
				var entries = getInternalParamsState(this).entries;
				validateArgumentsLength(arguments.length, 1);
				var key = $toString(name);
				var result = [];
				var index = 0;
				for (; index < entries.length; index++) if (entries[index].key === key) push(result, entries[index].value);
				return result;
			},
			has: function has(name) {
				var entries = getInternalParamsState(this).entries;
				var length = validateArgumentsLength(arguments.length, 1);
				var key = $toString(name);
				var $value = length < 2 ? void 0 : arguments[1];
				var value = $value === void 0 ? $value : $toString($value);
				var index = 0;
				while (index < entries.length) {
					var entry = entries[index++];
					if (entry.key === key && (value === void 0 || entry.value === value)) return true;
				}
				return false;
			},
			set: function set(name, value) {
				var state = getInternalParamsState(this);
				validateArgumentsLength(arguments.length, 2);
				var entries = state.entries;
				var found = false;
				var key = $toString(name);
				var val = $toString(value);
				var index = 0;
				var entry;
				for (; index < entries.length; index++) {
					entry = entries[index];
					if (entry.key === key) {
						if (found) splice(entries, index--, 1);
						else {
							found = true;
							entry.value = val;
						}
					}
				}
				if (!found) push(entries, {
					key,
					value: val
				});
				if (!DESCRIPTORS) this.size = entries.length;
				state.updateURL();
			},
			sort: function sort() {
				var state = getInternalParamsState(this);
				arraySort(state.entries, function(a, b) {
					return a.key > b.key ? 1 : -1;
				});
				state.updateURL();
			},
			forEach: function forEach(callback) {
				var entries = getInternalParamsState(this).entries;
				var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : void 0);
				var index = 0;
				var entry;
				while (index < entries.length) {
					entry = entries[index++];
					boundFunction(entry.value, entry.key, this);
				}
			},
			keys: function keys() {
				return new URLSearchParamsIterator(this, "keys");
			},
			values: function values() {
				return new URLSearchParamsIterator(this, "values");
			},
			entries: function entries() {
				return new URLSearchParamsIterator(this, "entries");
			}
		}, { enumerable: true });
		defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: "entries" });
		defineBuiltIn(URLSearchParamsPrototype, "toString", function toString() {
			return getInternalParamsState(this).serialize();
		}, { enumerable: true });
		if (DESCRIPTORS) defineBuiltInAccessor(URLSearchParamsPrototype, "size", {
			get: function size() {
				return getInternalParamsState(this).entries.length;
			},
			configurable: true,
			enumerable: true
		});
		setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
		$({
			global: true,
			constructor: true,
			forced: !USE_NATIVE_URL
		}, { URLSearchParams: URLSearchParamsConstructor });
		if (!USE_NATIVE_URL && isCallable(Headers)) {
			var headersHas = uncurryThis(HeadersPrototype.has);
			var headersSet = uncurryThis(HeadersPrototype.set);
			var wrapRequestOptions = function(init) {
				if (isObject(init)) {
					var body = init.body;
					var headers;
					if (classof(body) === URL_SEARCH_PARAMS) {
						headers = init.headers ? new Headers(init.headers) : new Headers();
						if (!headersHas(headers, "content-type")) headersSet(headers, "content-type", "application/x-www-form-urlencoded;charset=UTF-8");
						return create(init, {
							body: createPropertyDescriptor(0, $toString(body)),
							headers: createPropertyDescriptor(0, headers)
						});
					}
				}
				return init;
			};
			if (isCallable(nativeFetch)) $({
				global: true,
				enumerable: true,
				dontCallGetSet: true,
				forced: true
			}, { fetch: function fetch(input) {
				return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
			} });
			if (isCallable(NativeRequest)) {
				var RequestConstructor = function Request(input) {
					anInstance(this, RequestPrototype);
					return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
				};
				RequestPrototype.constructor = RequestConstructor;
				RequestConstructor.prototype = RequestPrototype;
				$({
					global: true,
					constructor: true,
					dontCallGetSet: true,
					forced: true
				}, { Request: RequestConstructor });
			}
		}
		module.exports = {
			URLSearchParams: URLSearchParamsConstructor,
			getState: getInternalParamsState
		};
	}));
	var require_web_url_constructor = __commonJSMin$1((() => {
		require_es_string_iterator();
		var $ = require_export();
		var DESCRIPTORS = require_descriptors();
		var USE_NATIVE_URL = require_url_constructor_detection();
		var globalThis = require_global_this();
		var bind = require_function_bind_context();
		var uncurryThis = require_function_uncurry_this();
		var defineBuiltIn = require_define_built_in();
		var defineBuiltInAccessor = require_define_built_in_accessor();
		var anInstance = require_an_instance();
		var hasOwn = require_has_own_property();
		var assign = require_object_assign();
		var arrayFrom = require_array_from();
		var arraySlice = require_array_slice();
		var codeAt = require_string_multibyte().codeAt;
		var toASCII = require_string_punycode_to_ascii();
		var percentCoding = require_url_percent_coding();
		var $toString = require_to_string();
		var setToStringTag = require_set_to_string_tag();
		var validateArgumentsLength = require_validate_arguments_length();
		var URLSearchParamsModule = require_web_url_search_params_constructor();
		var InternalStateModule = require_internal_state();
		var setInternalState = InternalStateModule.set;
		var getInternalURLState = InternalStateModule.getterFor("URL");
		var URLSearchParams = URLSearchParamsModule.URLSearchParams;
		var getInternalSearchParamsState = URLSearchParamsModule.getState;
		var percentDecode = percentCoding.decode;
		var percentEncode = percentCoding.encode;
		var NativeURL = globalThis.URL;
		var TypeError = globalThis.TypeError;
		var parseInt = globalThis.parseInt;
		var floor = Math.floor;
		var pow = Math.pow;
		var fromCharCode = String.fromCharCode;
		var charAt = uncurryThis("".charAt);
		var exec = uncurryThis(/./.exec);
		var join = uncurryThis([].join);
		var numberToString = uncurryThis(1.1.toString);
		var pop = uncurryThis([].pop);
		var push = uncurryThis([].push);
		var replace = uncurryThis("".replace);
		var shift = uncurryThis([].shift);
		var split = uncurryThis("".split);
		var stringIndexOf = uncurryThis("".indexOf);
		var stringSlice = uncurryThis("".slice);
		var toLowerCase = uncurryThis("".toLowerCase);
		var unshift = uncurryThis([].unshift);
		var INVALID_AUTHORITY = "Invalid authority";
		var INVALID_SCHEME = "Invalid scheme";
		var INVALID_HOST = "Invalid host";
		var INVALID_PORT = "Invalid port";
		var ALPHA = /[a-z]/i;
		var ALPHANUMERIC_PLUS_MINUS_DOT = /[\d+\-.a-z]/i;
		var DIGIT = /\d/;
		var HEX_START = /^0x/i;
		var OCT = /^[0-7]+$/;
		var DEC = /^\d+$/;
		var HEX = /^[\da-f]+$/i;
		var FORBIDDEN_DOMAIN_CODE_POINT = /[\u0000-\u0020#%/:<>?@[\\\]^|\u007F]/;
		var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
		var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
		var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
		var TAB_AND_NEW_LINE = /[\t\n\r]/g;
		var NON_ASCII = /[^\u0000-\u007F]/;
		var MAPPED_ONTO_FORBIDDEN = "¨¯´¸˘˙˚˛˜˝ͺ΄΅᾽᾿῀῁῍῎῏῝῞῟῭΅´῾‗‾⁇⁈⁉℀℁℅℆⩴゛゜ﱞﱟﱠﱡﱢﱣﷺﷻ︓︖﹇﹈﹉﹊﹋﹌﹕﹖﹟﹤﹥﹨﹪﹫ﹰﹲﹴﹶﹸﹺﹼﹾ￣";
		var EOF;
		var isIgnoredCodePoint = function(code) {
			return code === 173 || code === 847 || code === 8203 || code === 12644 || code === 65279 || code === 65440 || code >= 4447 && code <= 4448 || code >= 6068 && code <= 6069 || code >= 6155 && code <= 6159 || code >= 8288 && code <= 8292 || code >= 8298 && code <= 8303 || code >= 65024 && code <= 65039 || code >= 917760 && code <= 917999;
		};
		var isDisallowedCodePoint = function(code) {
			return code === 65533 || code >= 55296 && code <= 57343 || code >= 128 && code <= 159 || code >= 8206 && code <= 8207 || code >= 8232 && code <= 8233 || code >= 8234 && code <= 8238 || code >= 8293 && code <= 8297 || code >= 64976 && code <= 65007 || (code & 65534) === 65534 || code >= 57344 && code <= 63743 || code >= 983040 && code <= 1114109;
		};
		var mapCodePoint = function(code) {
			if (code >= 65281 && code <= 65374) return code - 65248;
			if (code === 160 || code === 5760 || code === 8239 || code === 8287 || code === 12288) return 32;
			if (code >= 8192 && code <= 8202) return 32;
			if (code <= 65535 && stringIndexOf(MAPPED_ONTO_FORBIDDEN, fromCharCode(code)) > -1) return 32;
			return code;
		};
		var domainToASCII = function(domain) {
			if (!exec(NON_ASCII, domain)) return domain === "" ? null : toASCII(domain);
			var codePoints = arrayFrom(domain);
			var result = "";
			var index = 0, code, mapped;
			for (; index < codePoints.length; index++) {
				code = codeAt(codePoints[index], 0);
				if (isDisallowedCodePoint(code)) return null;
				if (isIgnoredCodePoint(code)) continue;
				mapped = mapCodePoint(code);
				result += mapped === code ? codePoints[index] : fromCharCode(mapped);
			}
			return result === "" ? null : toASCII(result);
		};
		var endsInNumber = function(input) {
			var parts = split(input, ".");
			var last, hexPart;
			if (parts[parts.length - 1] === "") {
				if (parts.length === 1) return false;
				parts.length--;
			}
			last = parts[parts.length - 1];
			if (exec(DEC, last)) return true;
			if (exec(HEX_START, last)) {
				hexPart = stringSlice(last, 2);
				return hexPart === "" || !!exec(HEX, hexPart);
			}
			return false;
		};
		var parseIPv4 = function(input) {
			var parts = split(input, ".");
			var partsLength, numbers, index, part, radix, number, ipv4;
			if (parts.length && parts[parts.length - 1] === "") parts.length--;
			partsLength = parts.length;
			if (partsLength > 4) return null;
			numbers = [];
			for (index = 0; index < partsLength; index++) {
				part = parts[index];
				if (part === "") return null;
				radix = 10;
				if (part.length > 1 && charAt(part, 0) === "0") {
					radix = exec(HEX_START, part) ? 16 : 8;
					part = stringSlice(part, radix === 8 ? 1 : 2);
				}
				if (part === "") number = 0;
				else {
					if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return null;
					number = parseInt(part, radix);
				}
				push(numbers, number);
			}
			for (index = 0; index < partsLength; index++) {
				number = numbers[index];
				if (index === partsLength - 1) {
					if (number >= pow(256, 5 - partsLength)) return null;
				} else if (number > 255) return null;
			}
			ipv4 = pop(numbers);
			for (index = 0; index < numbers.length; index++) ipv4 += numbers[index] * pow(256, 3 - index);
			return ipv4;
		};
		var parseIPv6 = function(input) {
			var address = [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			];
			var pieceIndex = 0;
			var compress = null;
			var pointer = 0;
			var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
			var chr = function() {
				return charAt(input, pointer);
			};
			if (chr() === ":") {
				if (charAt(input, 1) !== ":") return;
				pointer += 2;
				pieceIndex++;
				compress = pieceIndex;
			}
			while (chr()) {
				if (pieceIndex === 8) return;
				if (chr() === ":") {
					if (compress !== null) return;
					pointer++;
					pieceIndex++;
					compress = pieceIndex;
					continue;
				}
				value = length = 0;
				while (length < 4 && exec(HEX, chr())) {
					value = value * 16 + parseInt(chr(), 16);
					pointer++;
					length++;
				}
				if (chr() === ".") {
					if (length === 0) return;
					pointer -= length;
					if (pieceIndex > 6) return;
					numbersSeen = 0;
					while (chr()) {
						ipv4Piece = null;
						if (numbersSeen > 0) {
							if (chr() === "." && numbersSeen < 4) pointer++;
							else return;
						}
						if (!exec(DIGIT, chr())) return;
						while (exec(DIGIT, chr())) {
							number = parseInt(chr(), 10);
							if (ipv4Piece === null) ipv4Piece = number;
							else if (ipv4Piece === 0) return;
							else ipv4Piece = ipv4Piece * 10 + number;
							if (ipv4Piece > 255) return;
							pointer++;
						}
						address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
						numbersSeen++;
						if (numbersSeen === 2 || numbersSeen === 4) pieceIndex++;
					}
					if (numbersSeen !== 4) return;
					break;
				} else if (chr() === ":") {
					pointer++;
					if (!chr()) return;
				} else if (chr()) return;
				address[pieceIndex++] = value;
			}
			if (compress !== null) {
				swaps = pieceIndex - compress;
				pieceIndex = 7;
				while (pieceIndex !== 0 && swaps > 0) {
					swap = address[pieceIndex];
					address[pieceIndex--] = address[compress + swaps - 1];
					address[compress + --swaps] = swap;
				}
			} else if (pieceIndex !== 8) return;
			return address;
		};
		var findLongestZeroSequence = function(ipv6) {
			var maxIndex = null;
			var maxLength = 1;
			var currStart = null;
			var currLength = 0;
			var index = 0;
			for (; index < 8; index++) if (ipv6[index] !== 0) {
				if (currLength > maxLength) {
					maxIndex = currStart;
					maxLength = currLength;
				}
				currStart = null;
				currLength = 0;
			} else {
				if (currStart === null) currStart = index;
				++currLength;
			}
			return currLength > maxLength ? currStart : maxIndex;
		};
		var serializeHost = function(host) {
			var result, index, compress, ignore0;
			if (typeof host == "number") {
				result = [];
				for (index = 0; index < 4; index++) {
					unshift(result, host % 256);
					host = floor(host / 256);
				}
				return join(result, ".");
			}
			if (typeof host == "object") {
				result = "";
				compress = findLongestZeroSequence(host);
				for (index = 0; index < 8; index++) {
					if (ignore0 && host[index] === 0) continue;
					if (ignore0) ignore0 = false;
					if (compress === index) {
						result += index ? ":" : "::";
						ignore0 = true;
					} else {
						result += numberToString(host[index], 16);
						if (index < 7) result += ":";
					}
				}
				return "[" + result + "]";
			}
			return host;
		};
		var C0ControlPercentEncodeSet = {};
		var queryPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
			" ": 1,
			"\"": 1,
			"#": 1,
			"<": 1,
			">": 1
		});
		var specialQueryPercentEncodeSet = assign({}, queryPercentEncodeSet, { "'": 1 });
		var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
			" ": 1,
			"\"": 1,
			"<": 1,
			">": 1,
			"`": 1
		});
		var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
			"#": 1,
			"?": 1,
			"{": 1,
			"}": 1,
			"^": 1
		});
		var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
			"/": 1,
			":": 1,
			";": 1,
			"=": 1,
			"@": 1,
			"[": 1,
			"\\": 1,
			"]": 1,
			"^": 1,
			"|": 1
		});
		var utf8PercentEncode = function(chr, set) {
			var code = codeAt(chr, 0);
			return code >= 32 && code < 127 && !hasOwn(set, chr) ? chr : chr === "'" && hasOwn(set, chr) ? "%27" : percentEncode(chr);
		};
		var specialSchemes = {
			ftp: 21,
			file: null,
			http: 80,
			https: 443,
			ws: 80,
			wss: 443
		};
		var isWindowsDriveLetter = function(string, normalized) {
			var second;
			return string.length === 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) === ":" || !normalized && second === "|");
		};
		var startsWithWindowsDriveLetter = function(string) {
			var third;
			return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (string.length === 2 || (third = charAt(string, 2)) === "/" || third === "\\" || third === "?" || third === "#");
		};
		var isSingleDot = function(segment) {
			return segment === "." || toLowerCase(segment) === "%2e";
		};
		var isDoubleDot = function(segment) {
			segment = toLowerCase(segment);
			return segment === ".." || segment === "%2e." || segment === ".%2e" || segment === "%2e%2e";
		};
		var SCHEME_START = {};
		var SCHEME = {};
		var NO_SCHEME = {};
		var SPECIAL_RELATIVE_OR_AUTHORITY = {};
		var PATH_OR_AUTHORITY = {};
		var RELATIVE = {};
		var RELATIVE_SLASH = {};
		var SPECIAL_AUTHORITY_SLASHES = {};
		var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
		var AUTHORITY = {};
		var HOST = {};
		var HOSTNAME = {};
		var PORT = {};
		var FILE = {};
		var FILE_SLASH = {};
		var FILE_HOST = {};
		var PATH_START = {};
		var PATH = {};
		var CANNOT_BE_A_BASE_URL_PATH = {};
		var QUERY = {};
		var FRAGMENT = {};
		var URLState = function(url, isBase, base) {
			var urlString = $toString(url);
			var baseState, failure, searchParams;
			if (isBase) {
				failure = this.parse(urlString);
				if (failure) throw new TypeError(failure);
				this.searchParams = null;
			} else {
				if (base !== void 0) baseState = new URLState(base, true);
				failure = this.parse(urlString, null, baseState);
				if (failure) throw new TypeError(failure);
				searchParams = getInternalSearchParamsState(new URLSearchParams());
				searchParams.bindURL(this);
				this.searchParams = searchParams;
			}
		};
		URLState.prototype = {
			type: "URL",
			parse: function(input, stateOverride, base) {
				var url = this;
				var state = stateOverride || SCHEME_START;
				var pointer = 0;
				var buffer = "";
				var seenAt = false;
				var seenBracket = false;
				var seenPasswordToken = false;
				var codePoints, chr, bufferCodePoints, failure;
				input = $toString(input);
				if (!stateOverride) {
					url.scheme = "";
					url.username = "";
					url.password = "";
					url.host = null;
					url.port = null;
					url.path = [];
					url.query = null;
					url.fragment = null;
					url.cannotBeABaseURL = false;
					input = replace(input, LEADING_C0_CONTROL_OR_SPACE, "");
					input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, "$1");
				}
				input = replace(input, TAB_AND_NEW_LINE, "");
				codePoints = arrayFrom(input);
				while (pointer <= codePoints.length) {
					chr = codePoints[pointer];
					switch (state) {
						case SCHEME_START:
							if (chr && exec(ALPHA, chr)) {
								buffer += toLowerCase(chr);
								state = SCHEME;
							} else if (!stateOverride) {
								state = NO_SCHEME;
								continue;
							} else return INVALID_SCHEME;
							break;
						case SCHEME:
							if (chr && exec(ALPHANUMERIC_PLUS_MINUS_DOT, chr)) buffer += toLowerCase(chr);
							else if (chr === ":") {
								if (stateOverride && (url.isSpecial() !== hasOwn(specialSchemes, buffer) || buffer === "file" && (url.includesCredentials() || url.port !== null) || url.scheme === "file" && url.host === "")) return;
								url.scheme = buffer;
								if (stateOverride) {
									if (url.isSpecial() && specialSchemes[url.scheme] === url.port) url.port = null;
									return;
								}
								buffer = "";
								if (url.scheme === "file") state = FILE;
								else if (url.isSpecial() && base && base.scheme === url.scheme) state = SPECIAL_RELATIVE_OR_AUTHORITY;
								else if (url.isSpecial()) state = SPECIAL_AUTHORITY_SLASHES;
								else if (codePoints[pointer + 1] === "/") {
									state = PATH_OR_AUTHORITY;
									pointer++;
								} else {
									url.cannotBeABaseURL = true;
									push(url.path, "");
									state = CANNOT_BE_A_BASE_URL_PATH;
								}
							} else if (!stateOverride) {
								buffer = "";
								state = NO_SCHEME;
								pointer = 0;
								continue;
							} else return INVALID_SCHEME;
							break;
						case NO_SCHEME:
							if (!base || base.cannotBeABaseURL && chr !== "#") return INVALID_SCHEME;
							if (base.cannotBeABaseURL && chr === "#") {
								url.scheme = base.scheme;
								url.path = arraySlice(base.path);
								url.query = base.query;
								url.fragment = "";
								url.cannotBeABaseURL = true;
								state = FRAGMENT;
								break;
							}
							state = base.scheme === "file" ? FILE : RELATIVE;
							continue;
						case SPECIAL_RELATIVE_OR_AUTHORITY:
							if (chr === "/" && codePoints[pointer + 1] === "/") {
								state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
								pointer++;
							} else {
								state = RELATIVE;
								continue;
							}
							break;
						case PATH_OR_AUTHORITY: if (chr === "/") {
							state = AUTHORITY;
							break;
						} else {
							state = PATH;
							continue;
						}
						case RELATIVE:
							url.scheme = base.scheme;
							if (chr === EOF) {
								url.username = base.username;
								url.password = base.password;
								url.host = base.host;
								url.port = base.port;
								url.path = arraySlice(base.path);
								url.query = base.query;
							} else if (chr === "/" || chr === "\\" && url.isSpecial()) state = RELATIVE_SLASH;
							else if (chr === "?") {
								url.username = base.username;
								url.password = base.password;
								url.host = base.host;
								url.port = base.port;
								url.path = arraySlice(base.path);
								url.query = "";
								state = QUERY;
							} else if (chr === "#") {
								url.username = base.username;
								url.password = base.password;
								url.host = base.host;
								url.port = base.port;
								url.path = arraySlice(base.path);
								url.query = base.query;
								url.fragment = "";
								state = FRAGMENT;
							} else {
								url.username = base.username;
								url.password = base.password;
								url.host = base.host;
								url.port = base.port;
								url.path = arraySlice(base.path);
								if (url.path.length) url.path.length--;
								state = PATH;
								continue;
							}
							break;
						case RELATIVE_SLASH:
							if (url.isSpecial() && (chr === "/" || chr === "\\")) state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
							else if (chr === "/") state = AUTHORITY;
							else {
								url.username = base.username;
								url.password = base.password;
								url.host = base.host;
								url.port = base.port;
								state = PATH;
								continue;
							}
							break;
						case SPECIAL_AUTHORITY_SLASHES:
							state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
							if (chr !== "/" || codePoints[pointer + 1] !== "/") continue;
							pointer++;
							break;
						case SPECIAL_AUTHORITY_IGNORE_SLASHES:
							if (chr !== "/" && chr !== "\\") {
								state = AUTHORITY;
								continue;
							}
							break;
						case AUTHORITY:
							if (chr === "@") {
								if (seenAt) buffer = "%40" + buffer;
								seenAt = true;
								bufferCodePoints = arrayFrom(buffer);
								for (var i = 0; i < bufferCodePoints.length; i++) {
									var codePoint = bufferCodePoints[i];
									if (codePoint === ":" && !seenPasswordToken) {
										seenPasswordToken = true;
										continue;
									}
									var encodedCodePoints = utf8PercentEncode(codePoint, userinfoPercentEncodeSet);
									if (seenPasswordToken) url.password += encodedCodePoints;
									else url.username += encodedCodePoints;
								}
								buffer = "";
							} else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial()) {
								if (seenAt && buffer === "") return INVALID_AUTHORITY;
								pointer -= arrayFrom(buffer).length + 1;
								buffer = "";
								state = HOST;
							} else buffer += chr;
							break;
						case HOST:
						case HOSTNAME:
							if (stateOverride && url.scheme === "file") {
								state = FILE_HOST;
								continue;
							} else if (chr === ":" && !seenBracket) {
								if (buffer === "") return INVALID_HOST;
								if (stateOverride === HOSTNAME) return;
								failure = url.parseHost(buffer);
								if (failure) return failure;
								buffer = "";
								state = PORT;
							} else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial()) {
								if (url.isSpecial() && buffer === "") return INVALID_HOST;
								if (stateOverride && buffer === "" && (url.includesCredentials() || url.port !== null)) return;
								failure = url.parseHost(buffer);
								if (failure) return failure;
								buffer = "";
								state = PATH_START;
								if (stateOverride) return;
								continue;
							} else {
								if (chr === "[") seenBracket = true;
								else if (chr === "]") seenBracket = false;
								buffer += chr;
							}
							break;
						case PORT:
							if (exec(DIGIT, chr)) buffer += chr;
							else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial() || stateOverride) {
								if (buffer !== "") {
									var port = parseInt(buffer, 10);
									if (port > 65535) return INVALID_PORT;
									url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
									buffer = "";
								}
								if (stateOverride) return;
								state = PATH_START;
								continue;
							} else return INVALID_PORT;
							break;
						case FILE:
							url.scheme = "file";
							url.host = "";
							if (chr === "/" || chr === "\\") state = FILE_SLASH;
							else if (base && base.scheme === "file") switch (chr) {
								case EOF:
									url.host = base.host;
									url.path = arraySlice(base.path);
									url.query = base.query;
									break;
								case "?":
									url.host = base.host;
									url.path = arraySlice(base.path);
									url.query = "";
									state = QUERY;
									break;
								case "#":
									url.host = base.host;
									url.path = arraySlice(base.path);
									url.query = base.query;
									url.fragment = "";
									state = FRAGMENT;
									break;
								default:
									url.host = base.host;
									if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ""))) {
										url.path = arraySlice(base.path);
										url.shortenPath();
									}
									state = PATH;
									continue;
							}
							else {
								state = PATH;
								continue;
							}
							break;
						case FILE_SLASH:
							if (chr === "/" || chr === "\\") {
								state = FILE_HOST;
								break;
							}
							if (base && base.scheme === "file") {
								url.host = base.host;
								if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), "")) && isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
							}
							state = PATH;
							continue;
						case FILE_HOST:
							if (chr === EOF || chr === "/" || chr === "\\" || chr === "?" || chr === "#") {
								if (!stateOverride && isWindowsDriveLetter(buffer)) state = PATH;
								else if (buffer === "") {
									url.host = "";
									if (stateOverride) return;
									state = PATH_START;
								} else {
									failure = url.parseHost(buffer);
									if (failure) return failure;
									if (url.host === "localhost") url.host = "";
									if (stateOverride) return;
									buffer = "";
									state = PATH_START;
								}
								continue;
							} else buffer += chr;
							break;
						case PATH_START:
							if (url.isSpecial()) {
								state = PATH;
								if (chr !== "/" && chr !== "\\") continue;
							} else if (!stateOverride && chr === "?") {
								url.query = "";
								state = QUERY;
							} else if (!stateOverride && chr === "#") {
								url.fragment = "";
								state = FRAGMENT;
							} else if (chr !== EOF) {
								state = PATH;
								if (chr !== "/") continue;
							}
							break;
						case PATH:
							if (chr === EOF || chr === "/" || chr === "\\" && url.isSpecial() || !stateOverride && (chr === "?" || chr === "#")) {
								if (isDoubleDot(buffer)) {
									url.shortenPath();
									if (chr !== "/" && !(chr === "\\" && url.isSpecial())) push(url.path, "");
								} else if (isSingleDot(buffer)) {
									if (chr !== "/" && !(chr === "\\" && url.isSpecial())) push(url.path, "");
								} else {
									if (url.scheme === "file" && !url.path.length && isWindowsDriveLetter(buffer)) {
										if (url.host !== null && url.host !== "") url.host = "";
										buffer = charAt(buffer, 0) + ":";
									}
									push(url.path, buffer);
								}
								buffer = "";
								if (url.scheme === "file" && (chr === EOF || chr === "?" || chr === "#")) while (url.path.length > 1 && url.path[0] === "") shift(url.path);
								if (chr === "?") {
									url.query = "";
									state = QUERY;
								} else if (chr === "#") {
									url.fragment = "";
									state = FRAGMENT;
								}
							} else buffer += utf8PercentEncode(chr, pathPercentEncodeSet);
							break;
						case CANNOT_BE_A_BASE_URL_PATH:
							if (chr === "?") {
								url.query = "";
								state = QUERY;
							} else if (chr === "#") {
								url.fragment = "";
								state = FRAGMENT;
							} else if (chr !== EOF) {
								if (chr === " ") url.path[0] += codePoints[pointer + 1] === "?" || codePoints[pointer + 1] === "#" ? "%20" : " ";
								else url.path[0] += utf8PercentEncode(chr, C0ControlPercentEncodeSet);
							}
							break;
						case QUERY:
							if (!stateOverride && chr === "#") {
								url.fragment = "";
								state = FRAGMENT;
							} else if (chr !== EOF) url.query += utf8PercentEncode(chr, url.isSpecial() ? specialQueryPercentEncodeSet : queryPercentEncodeSet);
							break;
						case FRAGMENT: if (chr !== EOF) url.fragment += utf8PercentEncode(chr, fragmentPercentEncodeSet);
					}
					pointer++;
				}
			},
			parseHost: function(input) {
				var result, codePoints, index;
				if (charAt(input, 0) === "[") {
					if (charAt(input, input.length - 1) !== "]") return INVALID_HOST;
					result = parseIPv6(stringSlice(input, 1, -1));
					if (!result) return INVALID_HOST;
					this.host = result;
				} else if (!this.isSpecial()) {
					if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
					result = "";
					codePoints = arrayFrom(input);
					for (index = 0; index < codePoints.length; index++) result += utf8PercentEncode(codePoints[index], C0ControlPercentEncodeSet);
					this.host = result;
				} else {
					input = domainToASCII(percentDecode(input));
					if (input === null || exec(FORBIDDEN_DOMAIN_CODE_POINT, input)) return INVALID_HOST;
					if (endsInNumber(input)) {
						result = parseIPv4(input);
						if (result === null) return INVALID_HOST;
						this.host = result;
					} else this.host = input;
				}
			},
			cannotHaveUsernamePasswordPort: function() {
				return this.host === null || this.host === "" || this.cannotBeABaseURL || this.scheme === "file";
			},
			includesCredentials: function() {
				return this.username !== "" || this.password !== "";
			},
			isSpecial: function() {
				return hasOwn(specialSchemes, this.scheme);
			},
			shortenPath: function() {
				var path = this.path;
				var pathSize = path.length;
				if (pathSize && (this.scheme !== "file" || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) path.length--;
			},
			serialize: function() {
				var url = this;
				var scheme = url.scheme;
				var username = url.username;
				var password = url.password;
				var host = url.host;
				var port = url.port;
				var path = url.path;
				var query = url.query;
				var fragment = url.fragment;
				var output = scheme + ":";
				if (host !== null) {
					output += "//";
					if (url.includesCredentials()) output += username + (password ? ":" + password : "") + "@";
					output += serializeHost(host);
					if (port !== null) output += ":" + port;
				} else if (scheme === "file") output += "//";
				if (host === null && !url.cannotBeABaseURL && path.length > 1 && path[0] === "") output += "/.";
				output += url.cannotBeABaseURL ? path[0] : path.length ? "/" + join(path, "/") : "";
				if (query !== null) output += "?" + query;
				if (fragment !== null) output += "#" + fragment;
				return output;
			},
			setHref: function(href) {
				var failure = this.parse(href);
				if (failure) throw new TypeError(failure);
				this.searchParams.update();
			},
			getOrigin: function() {
				var scheme = this.scheme;
				var port = this.port;
				if (scheme === "blob") try {
					return new URLConstructor(this.path[0]).origin;
				} catch (error) {
					return "null";
				}
				if (scheme === "file" || !this.isSpecial()) return "null";
				return scheme + "://" + serializeHost(this.host) + (port !== null ? ":" + port : "");
			},
			getProtocol: function() {
				return this.scheme + ":";
			},
			setProtocol: function(protocol) {
				this.parse($toString(protocol) + ":", SCHEME_START);
			},
			getUsername: function() {
				return this.username;
			},
			setUsername: function(username) {
				var codePoints = arrayFrom($toString(username));
				if (this.cannotHaveUsernamePasswordPort()) return;
				this.username = "";
				for (var i = 0; i < codePoints.length; i++) this.username += utf8PercentEncode(codePoints[i], userinfoPercentEncodeSet);
			},
			getPassword: function() {
				return this.password;
			},
			setPassword: function(password) {
				var codePoints = arrayFrom($toString(password));
				if (this.cannotHaveUsernamePasswordPort()) return;
				this.password = "";
				for (var i = 0; i < codePoints.length; i++) this.password += utf8PercentEncode(codePoints[i], userinfoPercentEncodeSet);
			},
			getHost: function() {
				var host = this.host;
				var port = this.port;
				return host === null ? "" : port === null ? serializeHost(host) : serializeHost(host) + ":" + port;
			},
			setHost: function(host) {
				if (this.cannotBeABaseURL) return;
				this.parse(host, HOST);
			},
			getHostname: function() {
				var host = this.host;
				return host === null ? "" : serializeHost(host);
			},
			setHostname: function(hostname) {
				if (this.cannotBeABaseURL) return;
				this.parse(hostname, HOSTNAME);
			},
			getPort: function() {
				var port = this.port;
				return port === null ? "" : $toString(port);
			},
			setPort: function(port) {
				if (this.cannotHaveUsernamePasswordPort()) return;
				port = $toString(port);
				if (port === "") this.port = null;
				else this.parse(port, PORT);
			},
			getPathname: function() {
				var path = this.path;
				return this.cannotBeABaseURL ? path[0] : path.length ? "/" + join(path, "/") : "";
			},
			setPathname: function(pathname) {
				if (this.cannotBeABaseURL) return;
				this.path = [];
				this.parse(pathname, PATH_START);
			},
			getSearch: function() {
				var query = this.query;
				return query ? "?" + query : "";
			},
			setSearch: function(search) {
				search = $toString(search);
				if (search === "") this.query = null;
				else {
					if (charAt(search, 0) === "?") search = stringSlice(search, 1);
					this.query = "";
					this.parse(search, QUERY);
				}
				this.searchParams.update();
			},
			getSearchParams: function() {
				return this.searchParams.facade;
			},
			getHash: function() {
				var fragment = this.fragment;
				return fragment ? "#" + fragment : "";
			},
			setHash: function(hash) {
				hash = $toString(hash);
				if (hash === "") {
					this.fragment = null;
					return;
				}
				if (charAt(hash, 0) === "#") hash = stringSlice(hash, 1);
				this.fragment = "";
				this.parse(hash, FRAGMENT);
			},
			update: function() {
				this.query = this.searchParams.serialize() || null;
			}
		};
		var URLConstructor = function URL(url) {
			var that = anInstance(this, URLPrototype);
			var state = setInternalState(that, new URLState(url, false, validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : void 0));
			if (!DESCRIPTORS) {
				that.href = state.serialize();
				that.origin = state.getOrigin();
				that.protocol = state.getProtocol();
				that.username = state.getUsername();
				that.password = state.getPassword();
				that.host = state.getHost();
				that.hostname = state.getHostname();
				that.port = state.getPort();
				that.pathname = state.getPathname();
				that.search = state.getSearch();
				that.searchParams = state.getSearchParams();
				that.hash = state.getHash();
			}
		};
		var URLPrototype = URLConstructor.prototype;
		var accessorDescriptor = function(getter, setter) {
			return {
				get: function() {
					return getInternalURLState(this)[getter]();
				},
				set: setter && function(value) {
					return getInternalURLState(this)[setter](value);
				},
				configurable: true,
				enumerable: true
			};
		};
		if (DESCRIPTORS) {
			defineBuiltInAccessor(URLPrototype, "href", accessorDescriptor("serialize", "setHref"));
			defineBuiltInAccessor(URLPrototype, "origin", accessorDescriptor("getOrigin"));
			defineBuiltInAccessor(URLPrototype, "protocol", accessorDescriptor("getProtocol", "setProtocol"));
			defineBuiltInAccessor(URLPrototype, "username", accessorDescriptor("getUsername", "setUsername"));
			defineBuiltInAccessor(URLPrototype, "password", accessorDescriptor("getPassword", "setPassword"));
			defineBuiltInAccessor(URLPrototype, "host", accessorDescriptor("getHost", "setHost"));
			defineBuiltInAccessor(URLPrototype, "hostname", accessorDescriptor("getHostname", "setHostname"));
			defineBuiltInAccessor(URLPrototype, "port", accessorDescriptor("getPort", "setPort"));
			defineBuiltInAccessor(URLPrototype, "pathname", accessorDescriptor("getPathname", "setPathname"));
			defineBuiltInAccessor(URLPrototype, "search", accessorDescriptor("getSearch", "setSearch"));
			defineBuiltInAccessor(URLPrototype, "searchParams", accessorDescriptor("getSearchParams"));
			defineBuiltInAccessor(URLPrototype, "hash", accessorDescriptor("getHash", "setHash"));
		}
		defineBuiltIn(URLPrototype, "toJSON", function toJSON() {
			return getInternalURLState(this).serialize();
		}, { enumerable: true });
		defineBuiltIn(URLPrototype, "toString", function toString() {
			return getInternalURLState(this).serialize();
		}, { enumerable: true });
		if (NativeURL) {
			var nativeCreateObjectURL = NativeURL.createObjectURL;
			var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
			if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, "createObjectURL", bind(nativeCreateObjectURL, NativeURL));
			if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, "revokeObjectURL", bind(nativeRevokeObjectURL, NativeURL));
		}
		setToStringTag(URLConstructor, "URL");
		$({
			global: true,
			constructor: true,
			forced: !USE_NATIVE_URL,
			sham: !DESCRIPTORS
		}, { URL: URLConstructor });
	}));
	var require_web_url = __commonJSMin$1((() => {
		require_web_url_constructor();
	}));
	var require_web_url_can_parse = __commonJSMin$1((() => {
		var $ = require_export();
		var getBuiltIn = require_get_built_in();
		var fails = require_fails();
		var validateArgumentsLength = require_validate_arguments_length();
		var toString = require_to_string();
		var USE_NATIVE_URL = require_url_constructor_detection();
		var URL = getBuiltIn("URL");
		var THROWS_WITHOUT_ARGUMENTS = USE_NATIVE_URL && fails(function() {
			URL.canParse();
		});
		var WRONG_ARITY = fails(function() {
			return URL.canParse.length !== 1;
		});
		$({
			target: "URL",
			stat: true,
			forced: !THROWS_WITHOUT_ARGUMENTS || WRONG_ARITY
		}, { canParse: function canParse(url) {
			var length = validateArgumentsLength(arguments.length, 1);
			var urlString = toString(url);
			var base = length < 2 || arguments[1] === void 0 ? void 0 : toString(arguments[1]);
			try {
				return !!new URL(urlString, base);
			} catch (error) {
				return false;
			}
		} });
	}));
	var require_get_built_in_prototype_method = __commonJSMin$1(((exports, module) => {
		var globalThis = require_global_this();
		module.exports = function(CONSTRUCTOR, METHOD) {
			var Constructor = globalThis[CONSTRUCTOR];
			var Prototype = Constructor && Constructor.prototype;
			return Prototype && Prototype[METHOD];
		};
	}));
	var require_web_url_to_json = __commonJSMin$1((() => {
		var $ = require_export();
		var call = require_function_call();
		var toString = require_get_built_in_prototype_method()("URL", "toString");
		$({
			target: "URL",
			proto: true,
			enumerable: true
		}, { toJSON: function toJSON() {
			return call(toString, this);
		} });
	}));
	var require_web_url_search_params = __commonJSMin$1((() => {
		require_web_url_search_params_constructor();
	}));
	var require_web_url_search_params_delete = __commonJSMin$1((() => {
		var defineBuiltIn = require_define_built_in();
		var uncurryThis = require_function_uncurry_this();
		var toString = require_to_string();
		var validateArgumentsLength = require_validate_arguments_length();
		var $URLSearchParams = URLSearchParams;
		var URLSearchParamsPrototype = $URLSearchParams.prototype;
		var append = uncurryThis(URLSearchParamsPrototype.append);
		var $delete = uncurryThis(URLSearchParamsPrototype["delete"]);
		var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
		var push = uncurryThis([].push);
		var params = new $URLSearchParams("a=1&a=2&b=3");
		params["delete"]("a", 1);
		params["delete"]("b", void 0);
		if (params + "" !== "a=2") defineBuiltIn(URLSearchParamsPrototype, "delete", function(name) {
			var length = arguments.length;
			var $value = length < 2 ? void 0 : arguments[1];
			if (length && $value === void 0) return $delete(this, name);
			var entries = [];
			forEach(this, function(v, k) {
				push(entries, {
					key: k,
					value: v
				});
			});
			validateArgumentsLength(length, 1);
			var key = toString(name);
			var value = toString($value);
			var index = 0;
			var entriesLength = entries.length;
			var entry;
			while (index < entriesLength) {
				entry = entries[index];
				$delete(this, entry.key);
				index++;
			}
			index = 0;
			while (index < entriesLength) {
				entry = entries[index++];
				if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
			}
		}, {
			enumerable: true,
			unsafe: true
		});
	}));
	var require_web_url_search_params_has = __commonJSMin$1((() => {
		var defineBuiltIn = require_define_built_in();
		var uncurryThis = require_function_uncurry_this();
		var toString = require_to_string();
		var validateArgumentsLength = require_validate_arguments_length();
		var $URLSearchParams = URLSearchParams;
		var URLSearchParamsPrototype = $URLSearchParams.prototype;
		var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
		var $has = uncurryThis(URLSearchParamsPrototype.has);
		var params = new $URLSearchParams("a=1");
		if (params.has("a", 2) || !params.has("a", void 0)) defineBuiltIn(URLSearchParamsPrototype, "has", function has(name) {
			var length = arguments.length;
			var $value = length < 2 ? void 0 : arguments[1];
			if (length && $value === void 0) return $has(this, name);
			var values = getAll(this, name);
			validateArgumentsLength(length, 1);
			var value = toString($value);
			var index = 0;
			while (index < values.length) if (values[index++] === value) return true;
			return false;
		}, {
			enumerable: true,
			unsafe: true
		});
	}));
	var require_web_url_search_params_size = __commonJSMin$1((() => {
		var DESCRIPTORS = require_descriptors();
		var uncurryThis = require_function_uncurry_this();
		var defineBuiltInAccessor = require_define_built_in_accessor();
		var URLSearchParamsPrototype = URLSearchParams.prototype;
		var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
		if (DESCRIPTORS && !("size" in URLSearchParamsPrototype)) defineBuiltInAccessor(URLSearchParamsPrototype, "size", {
			get: function size() {
				var count = 0;
				forEach(this, function() {
					count++;
				});
				return count;
			},
			configurable: true,
			enumerable: true
		});
	}));
	require_es_symbol_description();
	require_es_error_cause();
	require_es_array_flat_map();
	require_es_array_includes();
	require_es_array_iterator();
	require_es_array_push();
	require_es_array_reduce();
	require_es_array_reverse();
	require_es_array_unscopables_flat_map();
	require_es_array_unshift();
	require_es_iterator_constructor();
	require_es_iterator_filter();
	require_es_iterator_find();
	require_es_iterator_flat_map();
	require_es_iterator_for_each();
	require_es_iterator_map();
	require_es_iterator_reduce();
	require_es_iterator_some();
	require_es_json_parse();
	require_es_json_stringify();
	require_es_map();
	require_es_map_get_or_insert();
	require_es_map_get_or_insert_computed();
	require_es_promise();
	require_es_regexp_constructor();
	require_es_regexp_dot_all();
	require_es_regexp_exec();
	require_es_set();
	require_es_set_difference_v2();
	require_es_set_intersection_v2();
	require_es_set_is_disjoint_from_v2();
	require_es_set_is_subset_of_v2();
	require_es_set_is_superset_of_v2();
	require_es_set_symmetric_difference_v2();
	require_es_set_union_v2();
	require_es_string_match_all();
	require_es_string_replace();
	require_es_string_trim();
	require_es_string_trim_start();
	require_es_weak_map();
	require_es_weak_map_get_or_insert();
	require_es_weak_map_get_or_insert_computed();
	require_web_dom_collections_for_each();
	require_web_dom_collections_iterator();
	require_web_url();
	require_web_url_can_parse();
	require_web_url_to_json();
	require_web_url_search_params();
	require_web_url_search_params_delete();
	require_web_url_search_params_has();
	require_web_url_search_params_size();
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
			"scriptDescription": "Adds an \"Open in xmtr IPMap\" button to traceroute and MTR results on looking glass sites.",
			"open": "Open in xmtr IPMap",
			"uploading": "Uploading…",
			"retry": "Upload failed. Click to retry",
			"noAnsweredHop": "No hop on this route has answered yet.",
			"uploadStatus": "The upload failed with HTTP {status}.",
			"unreachable": "Could not reach {host}.",
			"timedOut": "{host} did not respond in time.",
			"noRequestApi": "This userscript manager does not allow cross-origin requests."
		},
		"zh-CN": {
			"scriptName": "xmtr IPMap 助手",
			"scriptDescription": "在 Looking Glass 网站的 traceroute 与 MTR 结果旁添加「在 xmtr IPMap 中打开」按钮。",
			"open": "在 xmtr IPMap 中打开",
			"uploading": "正在上传…",
			"retry": "上传失败，点击重试",
			"noAnsweredHop": "这条路由还没有任何一跳应答。",
			"uploadStatus": "上传失败（HTTP {status}）。",
			"unreachable": "无法连接 {host}。",
			"timedOut": "{host} 响应超时。",
			"noRequestApi": "这个用户脚本管理器不支持跨域请求。"
		},
		"ja": {
			"scriptName": "xmtr IPMap ヘルパー",
			"scriptDescription": "Looking Glass サイトの traceroute・MTR の結果に「xmtr IPMap で開く」ボタンを追加します。",
			"open": "xmtr IPMap で開く",
			"uploading": "アップロード中…",
			"retry": "アップロードに失敗しました。クリックで再試行",
			"noAnsweredHop": "このルートには、まだ応答したホップがありません。",
			"uploadStatus": "アップロードに失敗しました（HTTP {status}）。",
			"unreachable": "{host} に接続できませんでした。",
			"timedOut": "{host} から時間内に応答がありませんでした。",
			"noRequestApi": "このユーザースクリプトマネージャーはクロスオリジンリクエストに対応していません。"
		},
		"zh-TW": {
			"scriptName": "xmtr IPMap 助手",
			"scriptDescription": "在 Looking Glass 網站的 traceroute 與 MTR 結果旁新增「在 xmtr IPMap 中開啟」按鈕。",
			"open": "在 xmtr IPMap 中開啟",
			"uploading": "正在上傳…",
			"retry": "上傳失敗，點選重試",
			"noAnsweredHop": "這條路由還沒有任何一跳應答。",
			"uploadStatus": "上傳失敗（HTTP {status}）。",
			"unreachable": "無法連線 {host}。",
			"timedOut": "{host} 響應超時。",
			"noRequestApi": "這個使用者指令碼管理器不支援跨域請求。"
		},
		"zh-HK": {
			"scriptName": "xmtr IPMap 助手",
			"scriptDescription": "在 Looking Glass 網站的 traceroute 與 MTR 結果旁添加「在 xmtr IPMap 中打開」按鈕。",
			"open": "在 xmtr IPMap 中打開",
			"uploading": "正在上傳…",
			"retry": "上傳失敗，點擊重試",
			"noAnsweredHop": "這條路由還沒有任何一跳應答。",
			"uploadStatus": "上傳失敗（HTTP {status}）。",
			"unreachable": "無法連接 {host}。",
			"timedOut": "{host} 響應超時。",
			"noRequestApi": "這個用户腳本管理器不支持跨域請求。"
		},
		"zh-MO": {
			"scriptName": "xmtr IPMap 助手",
			"scriptDescription": "在 Looking Glass 網站的 traceroute 與 MTR 結果旁添加「在 xmtr IPMap 中打開」按鈕。",
			"open": "在 xmtr IPMap 中打開",
			"uploading": "正在上傳…",
			"retry": "上傳失敗，點擊重試",
			"noAnsweredHop": "這條路由還沒有任何一跳應答。",
			"uploadStatus": "上傳失敗（HTTP {status}）。",
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
	function url$1(message$1) {
		return {
			kind: "validation",
			type: "url",
			reference: url$1,
			async: false,
			expects: null,
			requirement(input) {
				try {
					if (URL.canParse) return URL.canParse(input);
					new URL(input);
					return true;
				} catch (_unused5) {
					return false;
				}
			},
			message: message$1,
			"~run"(dataset, config$1) {
				if (dataset.typed && !this.requirement(dataset.value)) _addIssue(this, "URL", dataset, config$1);
				return dataset;
			}
		};
	}
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
	function pipe(...pipe$1) {
		return _standardSchema(_objectSpread2(_objectSpread2({}, pipe$1[0]), {}, {
			pipe: pipe$1,
			"~run"(dataset, config$1) {
				for (const item of pipe$1) if (item.kind !== "metadata") {
					if (dataset.issues && (item.kind === "schema" || item.kind === "transformation")) {
						dataset.typed = false;
						break;
					}
					if (!dataset.issues || !config$1.abortEarly && !config$1.abortPipeEarly) dataset = item["~run"](dataset, config$1);
				}
				return dataset;
			}
		}));
	}
	function safeParse(schema, input, config$1) {
		const dataset = schema["~run"]({ value: input }, getGlobalConfig(config$1));
		return {
			typed: dataset.typed,
			success: !dataset.issues,
			output: dataset.value,
			issues: dataset.issues
		};
	}
	var GATEWAY = "https://stage-info-api.xmsl.dev";
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
	var UPLOAD_TIMEOUT_MS = 2e4;
	var acceptedSchema = object({
		id: string(),
		url: pipe(string(), url$1())
	});
	var problemSchema = object({
		title: optional(string()),
		detail: optional(string())
	});
	function uploadTrace(_x) {
		return _uploadTrace.apply(this, arguments);
	}
	function _uploadTrace() {
		_uploadTrace = _asyncToGenerator(function* (trace) {
			if (!trace.hops.some((hop) => hop.hosts.length > 0)) throw new Error(t("noAnsweredHop"));
			const response = yield gmRequest({
				method: "POST",
				url: `${GATEWAY}/api/v1/traces`,
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				data: JSON.stringify({ text: toMtrJson(trace) }),
				timeoutMs: UPLOAD_TIMEOUT_MS
			});
			const body = JSON.parse(response.text);
			if (response.status < 200 || response.status >= 300) {
				var _problem$output$detai;
				const problem = safeParse(problemSchema, body);
				const reason = problem.success ? (_problem$output$detai = problem.output.detail) !== null && _problem$output$detai !== void 0 ? _problem$output$detai : problem.output.title : void 0;
				throw new Error(reason !== null && reason !== void 0 ? reason : t("uploadStatus", { status: response.status }));
			}
			return parse(acceptedSchema, body).url;
		});
		return _uploadTrace.apply(this, arguments);
	}
	var BUTTON_HOST_ATTRIBUTE = "data-xmtr-helper";
	var mounted = new WeakMap();
	function openInIpmap(_x, _x2, _x3) {
		return _openInIpmap.apply(this, arguments);
	}
	function _openInIpmap() {
		_openInIpmap = _asyncToGenerator(function* (button, label, read) {
			if (button.disabled) return;
			const tab = window.open("about:blank", "_blank");
			button.disabled = true;
			button.dataset.state = "busy";
			button.removeAttribute("title");
			label.textContent = t("uploading");
			try {
				const url = yield uploadTrace(yield read());
				if (tab) {
					tab.opener = null;
					tab.location.href = url;
				} else window.open(url, "_blank", "noopener");
				delete button.dataset.state;
				label.textContent = t("open");
			} catch (error) {
				tab === null || tab === void 0 || tab.close();
				button.dataset.state = "failed";
				button.title = error instanceof Error ? error.message : String(error);
				label.textContent = t("retry");
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
		const columns = readColumns$2(headerTexts(table));
		if (columns.has("ttl") && columns.has("address")) {
			if (columns.has("loss") || columns.has("avg") && columns.has("best") && columns.has("worst")) return true;
		}
		return table.querySelector(".node-data-tbody") !== null || table.matches(".table_cont");
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
	var button_default$7 = "[data-xmtr-helper]>button{transition:background-color .1s ease-in-out}[data-xmtr-helper]>button:hover{background:#f9fafb}[data-xmtr-helper]>button:focus-visible{outline-offset:2px;outline:2px solid #17d4a7}[data-xmtr-helper]>button>svg{width:14px;height:14px;margin-right:6px}[data-xmtr-helper]>button[data-state=failed]{color:#a94442;border-color:#ebccd1}@media (prefers-reduced-motion:reduce){[data-xmtr-helper]>button{transition:none}}";
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
	var button_default$6 = "[data-xmtr-helper]{display:block}[data-xmtr-helper]>button{all:unset;box-sizing:border-box;color:#000;white-space:nowrap;cursor:default;background:#efefef;border:2px outset #000;border-radius:0;align-items:center;height:21.5px;margin:8px 0;padding:1px 6px;font:13.3333px Arial,sans-serif;display:inline-flex}[data-xmtr-helper]>button:hover{background:#efefef;border-color:#000}[data-xmtr-helper]>button>svg{width:14px;height:14px;margin-right:4px}[data-xmtr-helper]>button:active{border-style:inset}[data-xmtr-helper]>button:focus-visible{outline:-webkit-focus-ring-color auto 1px}[data-xmtr-helper]>button:disabled{color:rgba(16,16,16,.3);cursor:progress;background:rgba(239,239,239,.3);border-color:rgba(118,118,118,.3)}[data-xmtr-helper]>button[data-state=failed]{color:maroon;background:#efefef;border-color:maroon}";
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
	var button_default$3 = "[data-xmtr-helper]>button{all:unset;box-sizing:border-box;color:#f0f0f0;cursor:pointer;align-items:center;font:400 13px/21px Roboto Mono,Consolas,Courier New,Courier,monospace;display:inline-flex}[data-xmtr-helper]>button:before,[data-xmtr-helper]>button:after{color:gray}[data-xmtr-helper]>button:before{content:\"[\"}[data-xmtr-helper]>button:after{content:\"]\"}[data-xmtr-helper]>button>span{text-decoration:underline}[data-xmtr-helper]>button>svg{width:1.15em;height:1.15em;margin:0 .35em 0 .2em}[data-xmtr-helper]>button:focus-visible{outline-offset:2px;outline:2px solid #30e050}[data-xmtr-helper]>button[data-state=failed]{color:#f0e0e0;background:#600000;border:1px solid #703030;border-radius:3px;padding:0 4px}[data-xmtr-helper]>button[data-state=failed]:before,[data-xmtr-helper]>button[data-state=failed]:after{color:#f0e0e0}.xmtr-helper-actions{padding:3px 0 6px}";
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
				if (!isReportReady(block)) return;
				const actions = actionsFor(block);
				if (!actions) return;
				actions.append(button);
			}, APPEARANCE);
		});
	}
	var button_default$2 = "[data-xmtr-helper]>button>svg{width:12px;height:12px;margin-right:0}[data-xmtr-helper]>button[data-state=failed]{border-color:var(--destructive);color:var(--destructive)}";
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
	function start$2() {
		watchElements("table", (table) => {
			if (!isMtrTable(table)) return;
			const result = resultBlock$1(table);
			if (!isComplete(result)) return;
			mountOpenButton(result, () => readResult(result, new URL(location.href)), (button) => placeButton(result, button), {
				className: PILL,
				css: button_default$2
			});
		});
	}
	var button_default$1 = "[data-xmtr-helper]>button{margin:8px 16px 16px}[data-xmtr-helper]>button>svg{width:24px;height:24px;margin-right:10px}[data-xmtr-helper]>button[data-state=failed]{background-color:#f55656}[data-xmtr-helper]>button[data-state=failed]:hover,[data-xmtr-helper]>button[data-state=failed]:focus{background-color:#f77d7d}";
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
	var BUTTON = "btn btn--primary";
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
	var button_default = "[data-xmtr-helper]>button{all:unset;box-sizing:border-box;color:#222;white-space:nowrap;cursor:pointer;background:#efefef;border:2px outset #000;border-radius:0;align-items:center;height:28.5px;margin:8px 0;padding:1px 6px;font:16px sans-serif;display:inline-flex}[data-xmtr-helper]>button:hover{background:#efefef;border-color:#000}[data-xmtr-helper]>button:active{border-style:inset}[data-xmtr-helper]>button:focus-visible{outline:-webkit-focus-ring-color auto 1px}[data-xmtr-helper]>button>svg{width:16px;height:16px;margin-right:5px}[data-xmtr-helper]>button:disabled{color:rgba(16,16,16,.3);cursor:progress;background:rgba(239,239,239,.3);border-color:rgba(118,118,118,.3)}[data-xmtr-helper]>button[data-state=failed]{color:#db2828;background:#efefef;border-color:#db2828}";
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
	for (const handler of handlers) if (siteRunsOn(handler.site, url)) handler.start();
})();
