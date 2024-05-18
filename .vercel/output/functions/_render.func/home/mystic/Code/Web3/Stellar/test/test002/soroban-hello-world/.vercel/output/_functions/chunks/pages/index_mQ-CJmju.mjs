/* empty css                          */
import require$$0 from 'axios';
import require$$1$1 from 'toml';
import require$$1$2 from '@stellar/stellar-base';
import require$$2 from 'urijs';
import require$$0$1 from 'randombytes/browser.js';
import require$$0$2 from 'bignumber.js';
import require$$1$3 from 'urijs/src/URITemplate.js';
import require$$4 from 'eventsource';
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_bIMeGSqA.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { ContractSpec } from '@stellar/stellar-sdk';
import { Buffer as Buffer$1 } from 'buffer';

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/mystic/Code/Web3/Stellar/test/test002/soroban-hello-world/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Game = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Game;
  return renderTemplate`${maybeRenderHead()}<div class=" h-[70vh] bg-white w-[90vw] "> Web GL game</div>`;
}, "/home/mystic/Code/Web3/Stellar/test/test002/soroban-hello-world/src/components/Game.astro", void 0);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var contract_client = {};

var assembled_transaction = {};

var lib = {exports: {}};

var errors$1 = {};

function _typeof$y(o) { "@babel/helpers - typeof"; return _typeof$y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$y(o); }
Object.defineProperty(errors$1, "__esModule", {
  value: true
});
errors$1.NotFoundError = errors$1.NetworkError = errors$1.BadResponseError = errors$1.BadRequestError = errors$1.AccountRequiresMemoError = void 0;
function _classCallCheck$t(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$t(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$u(descriptor.key), descriptor); } }
function _createClass$t(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$t(Constructor.prototype, protoProps); if (staticProps) _defineProperties$t(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$u(t) { var i = _toPrimitive$u(t, "string"); return "symbol" == _typeof$y(i) ? i : i + ""; }
function _toPrimitive$u(t, r) { if ("object" != _typeof$y(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$y(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper$j(t, o, e) { return o = _getPrototypeOf$j(o), _possibleConstructorReturn$j(t, _isNativeReflectConstruct$j() ? Reflect.construct(o, e || [], _getPrototypeOf$j(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$j(self, call) { if (call && (_typeof$y(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$j(self); }
function _assertThisInitialized$j(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits$j(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$j(subClass, superClass); }
function _wrapNativeSuper$3(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper$3 = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction$3(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct$3(Class, arguments, _getPrototypeOf$j(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf$j(Wrapper, Class); }; return _wrapNativeSuper$3(Class); }
function _construct$3(t, e, r) { if (_isNativeReflectConstruct$j()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf$j(p, r.prototype), p; }
function _isNativeReflectConstruct$j() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$j = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction$3(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf$j(o, p) { _setPrototypeOf$j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$j(o, p); }
function _getPrototypeOf$j(o) { _getPrototypeOf$j = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$j(o); }
var NetworkError = errors$1.NetworkError = function (_Error) {
  function NetworkError(message, response) {
    var _this;
    _classCallCheck$t(this, NetworkError);
    var trueProto = (this instanceof NetworkError ? this.constructor : void 0).prototype;
    _this = _callSuper$j(this, NetworkError, [message]);
    _this.__proto__ = trueProto;
    _this.constructor = NetworkError;
    _this.response = response;
    return _this;
  }
  _inherits$j(NetworkError, _Error);
  return _createClass$t(NetworkError, [{
    key: "getResponse",
    value: function getResponse() {
      return this.response;
    }
  }]);
}(_wrapNativeSuper$3(Error));
errors$1.NotFoundError = function (_NetworkError) {
  function NotFoundError(message, response) {
    var _this2;
    _classCallCheck$t(this, NotFoundError);
    var trueProto = (this instanceof NotFoundError ? this.constructor : void 0).prototype;
    _this2 = _callSuper$j(this, NotFoundError, [message, response]);
    _this2.__proto__ = trueProto;
    _this2.constructor = NotFoundError;
    _this2.name = "NotFoundError";
    return _this2;
  }
  _inherits$j(NotFoundError, _NetworkError);
  return _createClass$t(NotFoundError);
}(NetworkError);
errors$1.BadRequestError = function (_NetworkError2) {
  function BadRequestError(message, response) {
    var _this3;
    _classCallCheck$t(this, BadRequestError);
    var trueProto = (this instanceof BadRequestError ? this.constructor : void 0).prototype;
    _this3 = _callSuper$j(this, BadRequestError, [message, response]);
    _this3.__proto__ = trueProto;
    _this3.constructor = BadRequestError;
    _this3.name = "BadRequestError";
    return _this3;
  }
  _inherits$j(BadRequestError, _NetworkError2);
  return _createClass$t(BadRequestError);
}(NetworkError);
errors$1.BadResponseError = function (_NetworkError3) {
  function BadResponseError(message, response) {
    var _this4;
    _classCallCheck$t(this, BadResponseError);
    var trueProto = (this instanceof BadResponseError ? this.constructor : void 0).prototype;
    _this4 = _callSuper$j(this, BadResponseError, [message, response]);
    _this4.__proto__ = trueProto;
    _this4.constructor = BadResponseError;
    _this4.name = "BadResponseError";
    return _this4;
  }
  _inherits$j(BadResponseError, _NetworkError3);
  return _createClass$t(BadResponseError);
}(NetworkError);
errors$1.AccountRequiresMemoError = function (_Error2) {
  function AccountRequiresMemoError(message, accountId, operationIndex) {
    var _this5;
    _classCallCheck$t(this, AccountRequiresMemoError);
    var trueProto = (this instanceof AccountRequiresMemoError ? this.constructor : void 0).prototype;
    _this5 = _callSuper$j(this, AccountRequiresMemoError, [message]);
    _this5.__proto__ = trueProto;
    _this5.constructor = AccountRequiresMemoError;
    _this5.name = "AccountRequiresMemoError";
    _this5.accountId = accountId;
    _this5.operationIndex = operationIndex;
    return _this5;
  }
  _inherits$j(AccountRequiresMemoError, _Error2);
  return _createClass$t(AccountRequiresMemoError);
}(_wrapNativeSuper$3(Error));

var config$1 = {};

Object.defineProperty(config$1, "__esModule", {
  value: true
});
config$1.Config = void 0;
function _typeof$x(o) { "@babel/helpers - typeof"; return _typeof$x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$x(o); }
function _classCallCheck$s(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$s(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$t(descriptor.key), descriptor); } }
function _createClass$s(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$s(Constructor.prototype, protoProps); if (staticProps) _defineProperties$s(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$t(t) { var i = _toPrimitive$t(t, "string"); return "symbol" == _typeof$x(i) ? i : i + ""; }
function _toPrimitive$t(t, r) { if ("object" != _typeof$x(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$x(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var defaultConfig = {
  allowHttp: false,
  timeout: 0
};
var config = Object.assign({}, defaultConfig);
config$1.Config = function () {
  function Config() {
    _classCallCheck$s(this, Config);
  }
  return _createClass$s(Config, null, [{
    key: "setAllowHttp",
    value: function setAllowHttp(value) {
      config.allowHttp = value;
    }
  }, {
    key: "setTimeout",
    value: function setTimeout(value) {
      config.timeout = value;
    }
  }, {
    key: "isAllowHttp",
    value: function isAllowHttp() {
      return config.allowHttp;
    }
  }, {
    key: "getTimeout",
    value: function getTimeout() {
      return config.timeout;
    }
  }, {
    key: "setDefault",
    value: function setDefault() {
      config = Object.assign({}, defaultConfig);
    }
  }]);
}();

var utils$2 = {};

Object.defineProperty(utils$2, "__esModule", {
  value: true
});
utils$2.Utils = void 0;
function _typeof$w(o) { "@babel/helpers - typeof"; return _typeof$w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$w(o); }
function _classCallCheck$r(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$r(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$s(descriptor.key), descriptor); } }
function _createClass$r(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$r(Constructor.prototype, protoProps); if (staticProps) _defineProperties$r(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$s(t) { var i = _toPrimitive$s(t, "string"); return "symbol" == _typeof$w(i) ? i : i + ""; }
function _toPrimitive$s(t, r) { if ("object" != _typeof$w(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$w(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
utils$2.Utils = function () {
  function Utils() {
    _classCallCheck$r(this, Utils);
  }
  return _createClass$r(Utils, null, [{
    key: "validateTimebounds",
    value: function validateTimebounds(transaction) {
      var gracePeriod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!transaction.timeBounds) {
        return false;
      }
      var now = Math.floor(Date.now() / 1000);
      var _transaction$timeBoun = transaction.timeBounds,
        minTime = _transaction$timeBoun.minTime,
        maxTime = _transaction$timeBoun.maxTime;
      return now >= Number.parseInt(minTime, 10) - gracePeriod && now <= Number.parseInt(maxTime, 10) + gracePeriod;
    }
  }]);
}();

var stellartoml = {};

Object.defineProperty(stellartoml, "__esModule", {
  value: true
});
stellartoml.STELLAR_TOML_MAX_SIZE = stellartoml.Resolver = stellartoml.Api = void 0;
var _axios$5 = _interopRequireDefault$8(require$$0);
var _toml = _interopRequireDefault$8(require$$1$1);
var _config$2 = config$1;
function _interopRequireDefault$8(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof$v(o) { "@babel/helpers - typeof"; return _typeof$v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$v(o); }
function _regeneratorRuntime$a() { _regeneratorRuntime$a = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof$v(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof$v(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep$a(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator$a(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep$a(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep$a(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck$q(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$q(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$r(descriptor.key), descriptor); } }
function _createClass$q(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$q(Constructor.prototype, protoProps); if (staticProps) _defineProperties$q(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$r(t) { var i = _toPrimitive$r(t, "string"); return "symbol" == _typeof$v(i) ? i : i + ""; }
function _toPrimitive$r(t, r) { if ("object" != _typeof$v(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$v(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var STELLAR_TOML_MAX_SIZE = stellartoml.STELLAR_TOML_MAX_SIZE = 100 * 1024;
var CancelToken = _axios$5.default.CancelToken;
stellartoml.Resolver = function () {
  function Resolver() {
    _classCallCheck$q(this, Resolver);
  }
  return _createClass$q(Resolver, null, [{
    key: "resolve",
    value: (function () {
      var _resolve = _asyncToGenerator$a(_regeneratorRuntime$a().mark(function _callee(domain) {
        var opts,
          allowHttp,
          timeout,
          protocol,
          _args = arguments;
        return _regeneratorRuntime$a().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              opts = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              allowHttp = typeof opts.allowHttp === "undefined" ? _config$2.Config.isAllowHttp() : opts.allowHttp;
              timeout = typeof opts.timeout === "undefined" ? _config$2.Config.getTimeout() : opts.timeout;
              protocol = allowHttp ? "http" : "https";
              return _context.abrupt("return", _axios$5.default.get("".concat(protocol, "://").concat(domain, "/.well-known/stellar.toml"), {
                maxContentLength: STELLAR_TOML_MAX_SIZE,
                cancelToken: timeout ? new CancelToken(function (cancel) {
                  return setTimeout(function () {
                    return cancel("timeout of ".concat(timeout, "ms exceeded"));
                  }, timeout);
                }) : undefined,
                timeout: timeout
              }).then(function (response) {
                try {
                  var tomlObject = _toml.default.parse(response.data);
                  return Promise.resolve(tomlObject);
                } catch (e) {
                  return Promise.reject(new Error("stellar.toml is invalid - Parsing error on line ".concat(e.line, ", column ").concat(e.column, ": ").concat(e.message)));
                }
              }).catch(function (err) {
                if (err.message.match(/^maxContentLength size/)) {
                  throw new Error("stellar.toml file exceeds allowed size of ".concat(STELLAR_TOML_MAX_SIZE));
                } else {
                  throw err;
                }
              }));
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function resolve(_x) {
        return _resolve.apply(this, arguments);
      }
      return resolve;
    }())
  }]);
}();

var federation = {};

var server$2 = {};

Object.defineProperty(server$2, "__esModule", {
  value: true
});
server$2.FederationServer = server$2.FEDERATION_RESPONSE_MAX_SIZE = void 0;
var _axios$4 = _interopRequireDefault$7(require$$0);
var _stellarBase$6 = require$$1$2;
var _urijs$4 = _interopRequireDefault$7(require$$2);
var _config$1 = config$1;
var _errors$4 = errors$1;
var _stellartoml = stellartoml;
function _interopRequireDefault$7(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof$u(o) { "@babel/helpers - typeof"; return _typeof$u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$u(o); }
function _slicedToArray$2(arr, i) { return _arrayWithHoles$3(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$5(arr, i) || _nonIterableRest$3(); }
function _nonIterableRest$3() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }
function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit$2(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles$3(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime$9() { _regeneratorRuntime$9 = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof$u(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof$u(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep$9(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator$9(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep$9(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep$9(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck$p(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$p(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$q(descriptor.key), descriptor); } }
function _createClass$p(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$p(Constructor.prototype, protoProps); if (staticProps) _defineProperties$p(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$q(t) { var i = _toPrimitive$q(t, "string"); return "symbol" == _typeof$u(i) ? i : i + ""; }
function _toPrimitive$q(t, r) { if ("object" != _typeof$u(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$u(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FEDERATION_RESPONSE_MAX_SIZE = server$2.FEDERATION_RESPONSE_MAX_SIZE = 100 * 1024;
server$2.FederationServer = function () {
  function FederationServer(serverURL, domain) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck$p(this, FederationServer);
    this.serverURL = (0, _urijs$4.default)(serverURL);
    this.domain = domain;
    var allowHttp = typeof opts.allowHttp === "undefined" ? _config$1.Config.isAllowHttp() : opts.allowHttp;
    this.timeout = typeof opts.timeout === "undefined" ? _config$1.Config.getTimeout() : opts.timeout;
    if (this.serverURL.protocol() !== "https" && !allowHttp) {
      throw new Error("Cannot connect to insecure federation server");
    }
  }
  return _createClass$p(FederationServer, [{
    key: "resolveAddress",
    value: (function () {
      var _resolveAddress = _asyncToGenerator$9(_regeneratorRuntime$9().mark(function _callee(address) {
        var stellarAddress, url;
        return _regeneratorRuntime$9().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              stellarAddress = address;
              if (!(address.indexOf("*") < 0)) {
                _context.next = 5;
                break;
              }
              if (this.domain) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return", Promise.reject(new Error("Unknown domain. Make sure `address` contains a domain (ex. `bob*stellar.org`) or pass `domain` parameter when instantiating the server object.")));
            case 4:
              stellarAddress = "".concat(address, "*").concat(this.domain);
            case 5:
              url = this.serverURL.query({
                type: "name",
                q: stellarAddress
              });
              return _context.abrupt("return", this._sendRequest(url));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function resolveAddress(_x) {
        return _resolveAddress.apply(this, arguments);
      }
      return resolveAddress;
    }())
  }, {
    key: "resolveAccountId",
    value: (function () {
      var _resolveAccountId = _asyncToGenerator$9(_regeneratorRuntime$9().mark(function _callee2(accountId) {
        var url;
        return _regeneratorRuntime$9().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              url = this.serverURL.query({
                type: "id",
                q: accountId
              });
              return _context2.abrupt("return", this._sendRequest(url));
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function resolveAccountId(_x2) {
        return _resolveAccountId.apply(this, arguments);
      }
      return resolveAccountId;
    }())
  }, {
    key: "resolveTransactionId",
    value: (function () {
      var _resolveTransactionId = _asyncToGenerator$9(_regeneratorRuntime$9().mark(function _callee3(transactionId) {
        var url;
        return _regeneratorRuntime$9().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              url = this.serverURL.query({
                type: "txid",
                q: transactionId
              });
              return _context3.abrupt("return", this._sendRequest(url));
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function resolveTransactionId(_x3) {
        return _resolveTransactionId.apply(this, arguments);
      }
      return resolveTransactionId;
    }())
  }, {
    key: "_sendRequest",
    value: function () {
      var _sendRequest2 = _asyncToGenerator$9(_regeneratorRuntime$9().mark(function _callee4(url) {
        var timeout;
        return _regeneratorRuntime$9().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              timeout = this.timeout;
              return _context4.abrupt("return", _axios$4.default.get(url.toString(), {
                maxContentLength: FEDERATION_RESPONSE_MAX_SIZE,
                timeout: timeout
              }).then(function (response) {
                if (typeof response.data.memo !== "undefined" && typeof response.data.memo !== "string") {
                  throw new Error("memo value should be of type string");
                }
                return response.data;
              }).catch(function (response) {
                if (response instanceof Error) {
                  if (response.message.match(/^maxContentLength size/)) {
                    throw new Error("federation response exceeds allowed size of ".concat(FEDERATION_RESPONSE_MAX_SIZE));
                  } else {
                    return Promise.reject(response);
                  }
                } else {
                  return Promise.reject(new _errors$4.BadResponseError("Server query failed. Server responded: ".concat(response.status, " ").concat(response.statusText), response.data));
                }
              }));
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function _sendRequest(_x4) {
        return _sendRequest2.apply(this, arguments);
      }
      return _sendRequest;
    }()
  }], [{
    key: "resolve",
    value: (function () {
      var _resolve = _asyncToGenerator$9(_regeneratorRuntime$9().mark(function _callee5(value) {
        var opts,
          addressParts,
          _addressParts,
          domain,
          federationServer,
          _args5 = arguments;
        return _regeneratorRuntime$9().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              opts = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
              if (!(value.indexOf("*") < 0)) {
                _context5.next = 5;
                break;
              }
              if (_stellarBase$6.StrKey.isValidEd25519PublicKey(value)) {
                _context5.next = 4;
                break;
              }
              return _context5.abrupt("return", Promise.reject(new Error("Invalid Account ID")));
            case 4:
              return _context5.abrupt("return", Promise.resolve({
                account_id: value
              }));
            case 5:
              addressParts = value.split("*");
              _addressParts = _slicedToArray$2(addressParts, 2), domain = _addressParts[1];
              if (!(addressParts.length !== 2 || !domain)) {
                _context5.next = 9;
                break;
              }
              return _context5.abrupt("return", Promise.reject(new Error("Invalid Stellar address")));
            case 9:
              _context5.next = 11;
              return FederationServer.createForDomain(domain, opts);
            case 11:
              federationServer = _context5.sent;
              return _context5.abrupt("return", federationServer.resolveAddress(value));
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function resolve(_x5) {
        return _resolve.apply(this, arguments);
      }
      return resolve;
    }())
  }, {
    key: "createForDomain",
    value: (function () {
      var _createForDomain = _asyncToGenerator$9(_regeneratorRuntime$9().mark(function _callee6(domain) {
        var opts,
          tomlObject,
          _args6 = arguments;
        return _regeneratorRuntime$9().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              opts = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
              _context6.next = 3;
              return _stellartoml.Resolver.resolve(domain, opts);
            case 3:
              tomlObject = _context6.sent;
              if (tomlObject.FEDERATION_SERVER) {
                _context6.next = 6;
                break;
              }
              return _context6.abrupt("return", Promise.reject(new Error("stellar.toml does not contain FEDERATION_SERVER field")));
            case 6:
              return _context6.abrupt("return", new FederationServer(tomlObject.FEDERATION_SERVER, domain, opts));
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function createForDomain(_x6) {
        return _createForDomain.apply(this, arguments);
      }
      return createForDomain;
    }())
  }]);
}();

var api$1 = {};

Object.defineProperty(api$1, "__esModule", {
  value: true
});
api$1.Api = void 0;

(function (exports) {

	function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Api = void 0;
	Object.defineProperty(exports, "FEDERATION_RESPONSE_MAX_SIZE", {
	  enumerable: true,
	  get: function get() {
	    return _server.FEDERATION_RESPONSE_MAX_SIZE;
	  }
	});
	Object.defineProperty(exports, "Server", {
	  enumerable: true,
	  get: function get() {
	    return _server.FederationServer;
	  }
	});
	var _server = server$2;
	var _Api = _interopRequireWildcard(api$1);
	exports.Api = _Api;
	function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
	function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; } 
} (federation));

var webauth = {};

var utils$1 = {};

var errors = {};

function _typeof$t(o) { "@babel/helpers - typeof"; return _typeof$t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$t(o); }
Object.defineProperty(errors, "__esModule", {
  value: true
});
errors.InvalidChallengeError = void 0;
function _defineProperties$o(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$p(descriptor.key), descriptor); } }
function _createClass$o(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$o(Constructor.prototype, protoProps); if (staticProps) _defineProperties$o(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$p(t) { var i = _toPrimitive$p(t, "string"); return "symbol" == _typeof$t(i) ? i : i + ""; }
function _toPrimitive$p(t, r) { if ("object" != _typeof$t(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$t(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck$o(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper$i(t, o, e) { return o = _getPrototypeOf$i(o), _possibleConstructorReturn$i(t, _isNativeReflectConstruct$i() ? Reflect.construct(o, e || [], _getPrototypeOf$i(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$i(self, call) { if (call && (_typeof$t(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$i(self); }
function _assertThisInitialized$i(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits$i(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$i(subClass, superClass); }
function _wrapNativeSuper$2(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper$2 = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction$2(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct$2(Class, arguments, _getPrototypeOf$i(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf$i(Wrapper, Class); }; return _wrapNativeSuper$2(Class); }
function _construct$2(t, e, r) { if (_isNativeReflectConstruct$i()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf$i(p, r.prototype), p; }
function _isNativeReflectConstruct$i() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$i = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction$2(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf$i(o, p) { _setPrototypeOf$i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$i(o, p); }
function _getPrototypeOf$i(o) { _getPrototypeOf$i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$i(o); }
errors.InvalidChallengeError = function (_Error) {
  function InvalidChallengeError(message) {
    var _this;
    _classCallCheck$o(this, InvalidChallengeError);
    var trueProto = (this instanceof InvalidChallengeError ? this.constructor : void 0).prototype;
    _this = _callSuper$i(this, InvalidChallengeError, [message]);
    _this.__proto__ = trueProto;
    _this.constructor = InvalidChallengeError;
    _this.name = "InvalidChallengeError";
    return _this;
  }
  _inherits$i(InvalidChallengeError, _Error);
  return _createClass$o(InvalidChallengeError);
}(_wrapNativeSuper$2(Error));

Object.defineProperty(utils$1, "__esModule", {
  value: true
});
utils$1.buildChallengeTx = buildChallengeTx;
utils$1.gatherTxSigners = gatherTxSigners;
utils$1.readChallengeTx = readChallengeTx;
utils$1.verifyChallengeTxSigners = verifyChallengeTxSigners;
utils$1.verifyChallengeTxThreshold = verifyChallengeTxThreshold;
utils$1.verifyTxSignedBy = verifyTxSignedBy;
var _randombytes = _interopRequireDefault$6(require$$0$1);
var _stellarBase$5 = require$$1$2;
var _utils$2 = utils$2;
var _errors$3 = errors;
function _interopRequireDefault$6(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread$1(); }
function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$4(arr); }
function _createForOfIteratorHelper$3(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _typeof$s(o) { "@babel/helpers - typeof"; return _typeof$s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$s(o); }
function _toArray(arr) { return _arrayWithHoles$2(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableRest$2(); }
function _nonIterableRest$2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }
function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles$2(arr) { if (Array.isArray(arr)) return arr; }
function buildChallengeTx(serverKeypair, clientAccountID, homeDomain) {
  var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 300;
  var networkPassphrase = arguments.length > 4 ? arguments[4] : undefined;
  var webAuthDomain = arguments.length > 5 ? arguments[5] : undefined;
  var memo = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
  var clientDomain = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
  var clientSigningKey = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
  if (clientAccountID.startsWith("M") && memo) {
    throw Error("memo cannot be used if clientAccountID is a muxed account");
  }
  var account = new _stellarBase$5.Account(serverKeypair.publicKey(), "-1");
  var now = Math.floor(Date.now() / 1000);
  var value = (0, _randombytes.default)(48).toString("base64");
  var builder = new _stellarBase$5.TransactionBuilder(account, {
    fee: _stellarBase$5.BASE_FEE,
    networkPassphrase: networkPassphrase,
    timebounds: {
      minTime: now,
      maxTime: now + timeout
    }
  }).addOperation(_stellarBase$5.Operation.manageData({
    name: "".concat(homeDomain, " auth"),
    value: value,
    source: clientAccountID
  })).addOperation(_stellarBase$5.Operation.manageData({
    name: "web_auth_domain",
    value: webAuthDomain,
    source: account.accountId()
  }));
  if (clientDomain) {
    if (!clientSigningKey) {
      throw Error("clientSigningKey is required if clientDomain is provided");
    }
    builder.addOperation(_stellarBase$5.Operation.manageData({
      name: "client_domain",
      value: clientDomain,
      source: clientSigningKey
    }));
  }
  if (memo) {
    builder.addMemo(_stellarBase$5.Memo.id(memo));
  }
  var transaction = builder.build();
  transaction.sign(serverKeypair);
  return transaction.toEnvelope().toXDR("base64").toString();
}
function readChallengeTx(challengeTx, serverAccountID, networkPassphrase, homeDomains, webAuthDomain) {
  var _transaction$timeBoun;
  if (serverAccountID.startsWith("M")) {
    throw Error("Invalid serverAccountID: multiplexed accounts are not supported.");
  }
  var transaction;
  try {
    transaction = new _stellarBase$5.Transaction(challengeTx, networkPassphrase);
  } catch (_unused) {
    try {
      transaction = new _stellarBase$5.FeeBumpTransaction(challengeTx, networkPassphrase);
    } catch (_unused2) {
      throw new _errors$3.InvalidChallengeError("Invalid challenge: unable to deserialize challengeTx transaction string");
    }
    throw new _errors$3.InvalidChallengeError("Invalid challenge: expected a Transaction but received a FeeBumpTransaction");
  }
  var sequence = Number.parseInt(transaction.sequence, 10);
  if (sequence !== 0) {
    throw new _errors$3.InvalidChallengeError("The transaction sequence number should be zero");
  }
  if (transaction.source !== serverAccountID) {
    throw new _errors$3.InvalidChallengeError("The transaction source account is not equal to the server's account");
  }
  if (transaction.operations.length < 1) {
    throw new _errors$3.InvalidChallengeError("The transaction should contain at least one operation");
  }
  var _transaction$operatio = _toArray(transaction.operations),
    operation = _transaction$operatio[0],
    subsequentOperations = _transaction$operatio.slice(1);
  if (!operation.source) {
    throw new _errors$3.InvalidChallengeError("The transaction's operation should contain a source account");
  }
  var clientAccountID = operation.source;
  var memo = null;
  if (transaction.memo.type !== _stellarBase$5.MemoNone) {
    if (clientAccountID.startsWith("M")) {
      throw new _errors$3.InvalidChallengeError("The transaction has a memo but the client account ID is a muxed account");
    }
    if (transaction.memo.type !== _stellarBase$5.MemoID) {
      throw new _errors$3.InvalidChallengeError("The transaction's memo must be of type `id`");
    }
    memo = transaction.memo.value;
  }
  if (operation.type !== "manageData") {
    throw new _errors$3.InvalidChallengeError("The transaction's operation type should be 'manageData'");
  }
  if (transaction.timeBounds && Number.parseInt((_transaction$timeBoun = transaction.timeBounds) === null || _transaction$timeBoun === void 0 ? void 0 : _transaction$timeBoun.maxTime, 10) === _stellarBase$5.TimeoutInfinite) {
    throw new _errors$3.InvalidChallengeError("The transaction requires non-infinite timebounds");
  }
  if (!_utils$2.Utils.validateTimebounds(transaction, 60 * 5)) {
    throw new _errors$3.InvalidChallengeError("The transaction has expired");
  }
  if (operation.value === undefined) {
    throw new _errors$3.InvalidChallengeError("The transaction's operation values should not be null");
  }
  if (!operation.value) {
    throw new _errors$3.InvalidChallengeError("The transaction's operation value should not be null");
  }
  if (Buffer.from(operation.value.toString(), "base64").length !== 48) {
    throw new _errors$3.InvalidChallengeError("The transaction's operation value should be a 64 bytes base64 random string");
  }
  if (!homeDomains) {
    throw new _errors$3.InvalidChallengeError("Invalid homeDomains: a home domain must be provided for verification");
  }
  var matchedHomeDomain;
  if (typeof homeDomains === "string") {
    if ("".concat(homeDomains, " auth") === operation.name) {
      matchedHomeDomain = homeDomains;
    }
  } else if (Array.isArray(homeDomains)) {
    matchedHomeDomain = homeDomains.find(function (domain) {
      return "".concat(domain, " auth") === operation.name;
    });
  } else {
    throw new _errors$3.InvalidChallengeError("Invalid homeDomains: homeDomains type is ".concat(_typeof$s(homeDomains), " but should be a string or an array"));
  }
  if (!matchedHomeDomain) {
    throw new _errors$3.InvalidChallengeError("Invalid homeDomains: the transaction's operation key name does not match the expected home domain");
  }
  var _iterator = _createForOfIteratorHelper$3(subsequentOperations),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var op = _step.value;
      if (op.type !== "manageData") {
        throw new _errors$3.InvalidChallengeError("The transaction has operations that are not of type 'manageData'");
      }
      if (op.source !== serverAccountID && op.name !== "client_domain") {
        throw new _errors$3.InvalidChallengeError("The transaction has operations that are unrecognized");
      }
      if (op.name === "web_auth_domain") {
        if (op.value === undefined) {
          throw new _errors$3.InvalidChallengeError("'web_auth_domain' operation value should not be null");
        }
        if (op.value.compare(Buffer.from(webAuthDomain))) {
          throw new _errors$3.InvalidChallengeError("'web_auth_domain' operation value does not match ".concat(webAuthDomain));
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (!verifyTxSignedBy(transaction, serverAccountID)) {
    throw new _errors$3.InvalidChallengeError("Transaction not signed by server: '".concat(serverAccountID, "'"));
  }
  return {
    tx: transaction,
    clientAccountID: clientAccountID,
    matchedHomeDomain: matchedHomeDomain,
    memo: memo
  };
}
function verifyChallengeTxThreshold(challengeTx, serverAccountID, networkPassphrase, threshold, signerSummary, homeDomains, webAuthDomain) {
  var signers = signerSummary.map(function (signer) {
    return signer.key;
  });
  var signersFound = verifyChallengeTxSigners(challengeTx, serverAccountID, networkPassphrase, signers, homeDomains, webAuthDomain);
  var weight = 0;
  var _loop = function _loop() {
    var _signerSummary$find;
    var signer = _signersFound[_i];
    var sigWeight = ((_signerSummary$find = signerSummary.find(function (s) {
      return s.key === signer;
    })) === null || _signerSummary$find === void 0 ? void 0 : _signerSummary$find.weight) || 0;
    weight += sigWeight;
  };
  for (var _i = 0, _signersFound = signersFound; _i < _signersFound.length; _i++) {
    _loop();
  }
  if (weight < threshold) {
    throw new _errors$3.InvalidChallengeError("signers with weight ".concat(weight, " do not meet threshold ").concat(threshold, "\""));
  }
  return signersFound;
}
function verifyChallengeTxSigners(challengeTx, serverAccountID, networkPassphrase, signers, homeDomains, webAuthDomain) {
  var _readChallengeTx = readChallengeTx(challengeTx, serverAccountID, networkPassphrase, homeDomains, webAuthDomain),
    tx = _readChallengeTx.tx;
  var serverKP;
  try {
    serverKP = _stellarBase$5.Keypair.fromPublicKey(serverAccountID);
  } catch (err) {
    throw new Error("Couldn't infer keypair from the provided 'serverAccountID': " + err.message);
  }
  var clientSigners = new Set();
  var _iterator2 = _createForOfIteratorHelper$3(signers),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _signer = _step2.value;
      if (_signer === serverKP.publicKey()) {
        continue;
      }
      if (_signer.charAt(0) !== "G") {
        continue;
      }
      clientSigners.add(_signer);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  if (clientSigners.size === 0) {
    throw new _errors$3.InvalidChallengeError("No verifiable client signers provided, at least one G... address must be provided");
  }
  var clientSigningKey;
  var _iterator3 = _createForOfIteratorHelper$3(tx.operations),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var op = _step3.value;
      if (op.type === "manageData" && op.name === "client_domain") {
        if (clientSigningKey) {
          throw new _errors$3.InvalidChallengeError("Found more than one client_domain operation");
        }
        clientSigningKey = op.source;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var allSigners = [serverKP.publicKey()].concat(_toConsumableArray$1(Array.from(clientSigners)));
  if (clientSigningKey) {
    allSigners.push(clientSigningKey);
  }
  var signersFound = gatherTxSigners(tx, allSigners);
  var serverSignatureFound = false;
  var clientSigningKeySignatureFound = false;
  for (var _i2 = 0, _signersFound2 = signersFound; _i2 < _signersFound2.length; _i2++) {
    var signer = _signersFound2[_i2];
    if (signer === serverKP.publicKey()) {
      serverSignatureFound = true;
    }
    if (signer === clientSigningKey) {
      clientSigningKeySignatureFound = true;
    }
  }
  if (!serverSignatureFound) {
    throw new _errors$3.InvalidChallengeError("Transaction not signed by server: '" + serverKP.publicKey() + "'");
  }
  if (clientSigningKey && !clientSigningKeySignatureFound) {
    throw new _errors$3.InvalidChallengeError("Transaction not signed by the source account of the 'client_domain' " + "ManageData operation");
  }
  if (signersFound.length === 1) {
    throw new _errors$3.InvalidChallengeError("None of the given signers match the transaction signatures");
  }
  if (signersFound.length !== tx.signatures.length) {
    throw new _errors$3.InvalidChallengeError("Transaction has unrecognized signatures");
  }
  signersFound.splice(signersFound.indexOf(serverKP.publicKey()), 1);
  if (clientSigningKey) {
    signersFound.splice(signersFound.indexOf(clientSigningKey), 1);
  }
  return signersFound;
}
function verifyTxSignedBy(transaction, accountID) {
  return gatherTxSigners(transaction, [accountID]).length !== 0;
}
function gatherTxSigners(transaction, signers) {
  var hashedSignatureBase = transaction.hash();
  var txSignatures = _toConsumableArray$1(transaction.signatures);
  var signersFound = new Set();
  var _iterator4 = _createForOfIteratorHelper$3(signers),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var signer = _step4.value;
      if (txSignatures.length === 0) {
        break;
      }
      var keypair = void 0;
      try {
        keypair = _stellarBase$5.Keypair.fromPublicKey(signer);
      } catch (err) {
        throw new _errors$3.InvalidChallengeError("Signer is not a valid address: " + err.message);
      }
      for (var i = 0; i < txSignatures.length; i++) {
        var decSig = txSignatures[i];
        if (!decSig.hint().equals(keypair.signatureHint())) {
          continue;
        }
        if (keypair.verify(hashedSignatureBase, decSig.signature())) {
          signersFound.add(signer);
          txSignatures.splice(i, 1);
          break;
        }
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return Array.from(signersFound);
}

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _exportNames = {
	  InvalidChallengeError: true
	};
	Object.defineProperty(exports, "InvalidChallengeError", {
	  enumerable: true,
	  get: function get() {
	    return _errors.InvalidChallengeError;
	  }
	});
	var _utils = utils$1;
	Object.keys(_utils).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
	  if (key in exports && exports[key] === _utils[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _utils[key];
	    }
	  });
	});
	var _errors = errors; 
} (webauth));

var friendbot = {};

Object.defineProperty(friendbot, "__esModule", {
  value: true
});
friendbot.Api = void 0;

var horizon = {exports: {}};

var horizon_api = {};

Object.defineProperty(horizon_api, "__esModule", {
  value: true
});
horizon_api.HorizonApi = void 0;
var HorizonApi;
(function (_HorizonApi) {
  var LiquidityPoolType = function (LiquidityPoolType) {
    LiquidityPoolType["constantProduct"] = "constant_product";
    return LiquidityPoolType;
  }({});
  _HorizonApi.LiquidityPoolType = LiquidityPoolType;
  var OperationResponseType = function (OperationResponseType) {
    OperationResponseType["createAccount"] = "create_account";
    OperationResponseType["payment"] = "payment";
    OperationResponseType["pathPayment"] = "path_payment_strict_receive";
    OperationResponseType["createPassiveOffer"] = "create_passive_sell_offer";
    OperationResponseType["manageOffer"] = "manage_sell_offer";
    OperationResponseType["setOptions"] = "set_options";
    OperationResponseType["changeTrust"] = "change_trust";
    OperationResponseType["allowTrust"] = "allow_trust";
    OperationResponseType["accountMerge"] = "account_merge";
    OperationResponseType["inflation"] = "inflation";
    OperationResponseType["manageData"] = "manage_data";
    OperationResponseType["bumpSequence"] = "bump_sequence";
    OperationResponseType["manageBuyOffer"] = "manage_buy_offer";
    OperationResponseType["pathPaymentStrictSend"] = "path_payment_strict_send";
    OperationResponseType["createClaimableBalance"] = "create_claimable_balance";
    OperationResponseType["claimClaimableBalance"] = "claim_claimable_balance";
    OperationResponseType["beginSponsoringFutureReserves"] = "begin_sponsoring_future_reserves";
    OperationResponseType["endSponsoringFutureReserves"] = "end_sponsoring_future_reserves";
    OperationResponseType["revokeSponsorship"] = "revoke_sponsorship";
    OperationResponseType["clawback"] = "clawback";
    OperationResponseType["clawbackClaimableBalance"] = "clawback_claimable_balance";
    OperationResponseType["setTrustLineFlags"] = "set_trust_line_flags";
    OperationResponseType["liquidityPoolDeposit"] = "liquidity_pool_deposit";
    OperationResponseType["liquidityPoolWithdraw"] = "liquidity_pool_withdraw";
    OperationResponseType["invokeHostFunction"] = "invoke_host_function";
    OperationResponseType["bumpFootprintExpiration"] = "bump_footprint_expiration";
    OperationResponseType["restoreFootprint"] = "restore_footprint";
    return OperationResponseType;
  }({});
  _HorizonApi.OperationResponseType = OperationResponseType;
  var OperationResponseTypeI = function (OperationResponseTypeI) {
    OperationResponseTypeI[OperationResponseTypeI["createAccount"] = 0] = "createAccount";
    OperationResponseTypeI[OperationResponseTypeI["payment"] = 1] = "payment";
    OperationResponseTypeI[OperationResponseTypeI["pathPayment"] = 2] = "pathPayment";
    OperationResponseTypeI[OperationResponseTypeI["createPassiveOffer"] = 3] = "createPassiveOffer";
    OperationResponseTypeI[OperationResponseTypeI["manageOffer"] = 4] = "manageOffer";
    OperationResponseTypeI[OperationResponseTypeI["setOptions"] = 5] = "setOptions";
    OperationResponseTypeI[OperationResponseTypeI["changeTrust"] = 6] = "changeTrust";
    OperationResponseTypeI[OperationResponseTypeI["allowTrust"] = 7] = "allowTrust";
    OperationResponseTypeI[OperationResponseTypeI["accountMerge"] = 8] = "accountMerge";
    OperationResponseTypeI[OperationResponseTypeI["inflation"] = 9] = "inflation";
    OperationResponseTypeI[OperationResponseTypeI["manageData"] = 10] = "manageData";
    OperationResponseTypeI[OperationResponseTypeI["bumpSequence"] = 11] = "bumpSequence";
    OperationResponseTypeI[OperationResponseTypeI["manageBuyOffer"] = 12] = "manageBuyOffer";
    OperationResponseTypeI[OperationResponseTypeI["pathPaymentStrictSend"] = 13] = "pathPaymentStrictSend";
    OperationResponseTypeI[OperationResponseTypeI["createClaimableBalance"] = 14] = "createClaimableBalance";
    OperationResponseTypeI[OperationResponseTypeI["claimClaimableBalance"] = 15] = "claimClaimableBalance";
    OperationResponseTypeI[OperationResponseTypeI["beginSponsoringFutureReserves"] = 16] = "beginSponsoringFutureReserves";
    OperationResponseTypeI[OperationResponseTypeI["endSponsoringFutureReserves"] = 17] = "endSponsoringFutureReserves";
    OperationResponseTypeI[OperationResponseTypeI["revokeSponsorship"] = 18] = "revokeSponsorship";
    OperationResponseTypeI[OperationResponseTypeI["clawback"] = 19] = "clawback";
    OperationResponseTypeI[OperationResponseTypeI["clawbackClaimableBalance"] = 20] = "clawbackClaimableBalance";
    OperationResponseTypeI[OperationResponseTypeI["setTrustLineFlags"] = 21] = "setTrustLineFlags";
    OperationResponseTypeI[OperationResponseTypeI["liquidityPoolDeposit"] = 22] = "liquidityPoolDeposit";
    OperationResponseTypeI[OperationResponseTypeI["liquidityPoolWithdraw"] = 23] = "liquidityPoolWithdraw";
    OperationResponseTypeI[OperationResponseTypeI["invokeHostFunction"] = 24] = "invokeHostFunction";
    OperationResponseTypeI[OperationResponseTypeI["bumpFootprintExpiration"] = 25] = "bumpFootprintExpiration";
    OperationResponseTypeI[OperationResponseTypeI["restoreFootprint"] = 26] = "restoreFootprint";
    return OperationResponseTypeI;
  }({});
  _HorizonApi.OperationResponseTypeI = OperationResponseTypeI;
  var TransactionFailedResultCodes = function (TransactionFailedResultCodes) {
    TransactionFailedResultCodes["TX_FAILED"] = "tx_failed";
    TransactionFailedResultCodes["TX_BAD_SEQ"] = "tx_bad_seq";
    TransactionFailedResultCodes["TX_BAD_AUTH"] = "tx_bad_auth";
    TransactionFailedResultCodes["TX_BAD_AUTH_EXTRA"] = "tx_bad_auth_extra";
    TransactionFailedResultCodes["TX_FEE_BUMP_INNER_SUCCESS"] = "tx_fee_bump_inner_success";
    TransactionFailedResultCodes["TX_FEE_BUMP_INNER_FAILED"] = "tx_fee_bump_inner_failed";
    TransactionFailedResultCodes["TX_NOT_SUPPORTED"] = "tx_not_supported";
    TransactionFailedResultCodes["TX_SUCCESS"] = "tx_success";
    TransactionFailedResultCodes["TX_TOO_EARLY"] = "tx_too_early";
    TransactionFailedResultCodes["TX_TOO_LATE"] = "tx_too_late";
    TransactionFailedResultCodes["TX_MISSING_OPERATION"] = "tx_missing_operation";
    TransactionFailedResultCodes["TX_INSUFFICIENT_BALANCE"] = "tx_insufficient_balance";
    TransactionFailedResultCodes["TX_NO_SOURCE_ACCOUNT"] = "tx_no_source_account";
    TransactionFailedResultCodes["TX_INSUFFICIENT_FEE"] = "tx_insufficient_fee";
    TransactionFailedResultCodes["TX_INTERNAL_ERROR"] = "tx_internal_error";
    return TransactionFailedResultCodes;
  }({});
  _HorizonApi.TransactionFailedResultCodes = TransactionFailedResultCodes;
})(HorizonApi || (horizon_api.HorizonApi = HorizonApi = {}));

var server_api = {};

Object.defineProperty(server_api, "__esModule", {
  value: true
});
server_api.ServerApi = void 0;
var _horizon_api = horizon_api;
var ServerApi;
(function (_ServerApi) {
  var TradeType = function (TradeType) {
    TradeType["all"] = "all";
    TradeType["liquidityPools"] = "liquidity_pool";
    TradeType["orderbook"] = "orderbook";
    return TradeType;
  }({});
  _ServerApi.TradeType = TradeType;
  _horizon_api.HorizonApi.OperationResponseType;
  _horizon_api.HorizonApi.OperationResponseTypeI;
})(ServerApi || (server_api.ServerApi = ServerApi = {}));

var account_response = {};

Object.defineProperty(account_response, "__esModule", {
  value: true
});
account_response.AccountResponse = void 0;
var _stellarBase$4 = require$$1$2;
function _typeof$r(o) { "@babel/helpers - typeof"; return _typeof$r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$r(o); }
function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$1(); }
function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }
function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit$1(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck$n(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$n(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$o(descriptor.key), descriptor); } }
function _createClass$n(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$n(Constructor.prototype, protoProps); if (staticProps) _defineProperties$n(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$o(t) { var i = _toPrimitive$o(t, "string"); return "symbol" == _typeof$r(i) ? i : i + ""; }
function _toPrimitive$o(t, r) { if ("object" != _typeof$r(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$r(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
account_response.AccountResponse = function () {
  function AccountResponse(response) {
    var _this = this;
    _classCallCheck$n(this, AccountResponse);
    this._baseAccount = new _stellarBase$4.Account(response.account_id, response.sequence);
    Object.entries(response).forEach(function (_ref) {
      var _ref2 = _slicedToArray$1(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      _this[key] = value;
    });
  }
  return _createClass$n(AccountResponse, [{
    key: "accountId",
    value: function accountId() {
      return this._baseAccount.accountId();
    }
  }, {
    key: "sequenceNumber",
    value: function sequenceNumber() {
      return this._baseAccount.sequenceNumber();
    }
  }, {
    key: "incrementSequenceNumber",
    value: function incrementSequenceNumber() {
      this._baseAccount.incrementSequenceNumber();
      this.sequence = this._baseAccount.sequenceNumber();
    }
  }]);
}();

var server$1 = {};

var call_builder = {};

var horizon_axios_client = {};

const name = "@stellar/stellar-sdk";
const version$2 = "11.3.0";
const description = "A library for working with the Stellar network, including communication with the Horizon and Soroban RPC servers.";
const keywords = [
	"stellar"
];
const homepage = "https://github.com/stellar/js-stellar-sdk";
const bugs = {
	url: "https://github.com/stellar/js-stellar-sdk/issues"
};
const repository = {
	type: "git",
	url: "https://github.com/stellar/js-stellar-sdk.git"
};
const license = "Apache-2.0";
const author = "Stellar Development Foundation <hello@stellar.org>";
const main = "./lib/index.js";
const types$1 = "./lib/index.d.ts";
const browser = "./dist/stellar-sdk.min.js";
const files = [
	"/types",
	"/lib",
	"/dist"
];
const scripts = {
	build: "cross-env NODE_ENV=development yarn _build",
	"build:prod": "cross-env NODE_ENV=production yarn _build",
	"build:node": "yarn _babel && yarn build:ts",
	"build:ts": "tsc -p ./config/tsconfig.json",
	"build:test": "tsc -p ./test/unit/tsconfig.json",
	"build:browser": "webpack -c config/webpack.config.browser.js",
	"build:docs": "cross-env NODE_ENV=docs yarn _babel",
	clean: "rm -rf lib/ dist/ coverage/ .nyc_output/ jsdoc/ test/e2e/.soroban",
	docs: "yarn build:docs && jsdoc -c ./config/.jsdoc.json --verbose",
	test: "yarn build:test && yarn test:node && yarn test:integration && yarn test:browser",
	"test:e2e": "./test/e2e/initialize.sh && ava",
	"test:node": "yarn _nyc mocha --recursive 'test/unit/**/*.js'",
	"test:integration": "yarn _nyc mocha --recursive 'test/integration/**/*.js'",
	"test:browser": "karma start config/karma.conf.js",
	fmt: "yarn eslint -c .eslintrc.js src/ --fix && yarn _prettier",
	preversion: "yarn clean && yarn fmt && yarn build:prod && yarn test",
	prepare: "yarn build:prod",
	_build: "yarn build:node && yarn build:test && yarn build:browser",
	_babel: "babel --extensions '.ts' --out-dir lib/ src/",
	_nyc: "nyc --nycrc-path config/.nycrc",
	_prettier: "prettier --ignore-path config/.prettierignore --write './test/**/*.js'"
};
const husky = {
	hooks: {
		"pre-commit": "lint-staged"
	}
};
const mocha = {
	reporter: "spec",
	require: [
		"@babel/register",
		"test/test-nodejs.js"
	],
	exclude: [
		"test/test-browser.js"
	],
	sort: true,
	recursive: true,
	timeout: 30000
};
const nyc = {
	instrument: false,
	sourceMap: false,
	reporter: [
		"text-summary"
	]
};
const devDependencies = {
	"@babel/cli": "^7.24.1",
	"@babel/core": "^7.24.3",
	"@babel/eslint-parser": "^7.24.1",
	"@babel/eslint-plugin": "^7.22.10",
	"@babel/preset-env": "^7.24.3",
	"@babel/preset-typescript": "^7.24.1",
	"@babel/register": "^7.23.7",
	"@definitelytyped/dtslint": "^0.1.2",
	"@istanbuljs/nyc-config-babel": "3.0.0",
	"@stellar/tsconfig": "^1.0.2",
	"@types/chai": "^4.3.14",
	"@types/detect-node": "^2.0.0",
	"@types/eventsource": "^1.1.12",
	"@types/json-schema": "^7.0.15",
	"@types/lodash": "^4.17.0",
	"@types/mocha": "^10.0.2",
	"@types/node": "^20.11.30",
	"@types/randombytes": "^2.0.1",
	"@types/sinon": "^17.0.2",
	"@types/urijs": "^1.19.20",
	"@typescript-eslint/parser": "^6.20.0",
	ava: "^5.3.1",
	"axios-mock-adapter": "^1.22.0",
	"babel-loader": "^9.1.3",
	"babel-plugin-istanbul": "^6.1.1",
	buffer: "^6.0.3",
	chai: "^4.3.10",
	"chai-as-promised": "^7.1.1",
	"chai-http": "^4.3.0",
	"cross-env": "^7.0.3",
	dotenv: "^16.4.5",
	eslint: "^8.57.0",
	"eslint-config-airbnb-base": "^15.0.0",
	"eslint-config-prettier": "^9.0.0",
	"eslint-plugin-import": "^2.29.1",
	"eslint-plugin-node": "^11.1.0",
	"eslint-plugin-prefer-import": "^0.0.1",
	"eslint-plugin-prettier": "^5.1.2",
	"eslint-webpack-plugin": "^4.1.0",
	ghooks: "^2.0.4",
	husky: "^8.0.3",
	jsdoc: "^4.0.2",
	"json-schema-faker": "^0.5.6",
	karma: "^6.4.3",
	"karma-chai": "^0.1.0",
	"karma-chrome-launcher": "^3.1.0",
	"karma-coverage": "^2.2.1",
	"karma-firefox-launcher": "^2.1.3",
	"karma-mocha": "^2.0.0",
	"karma-sinon-chai": "^2.0.2",
	"karma-webpack": "^5.0.1",
	"lint-staged": "^15.2.2",
	lodash: "^4.17.21",
	minami: "^1.1.1",
	mocha: "^10.3.0",
	"node-polyfill-webpack-plugin": "^3.0.0",
	nyc: "^15.1.0",
	prettier: "^3.2.5",
	randombytes: "^2.1.0",
	sinon: "^17.0.1",
	"sinon-chai": "^3.7.0",
	taffydb: "^2.7.3",
	"terser-webpack-plugin": "^5.3.10",
	"ts-node": "^10.9.2",
	typescript: "^5.4.3",
	webpack: "^5.91.0",
	"webpack-cli": "^5.0.1"
};
const dependencies = {
	"@stellar/stellar-base": "^11.0.1",
	axios: "^1.6.8",
	"bignumber.js": "^9.1.2",
	eventsource: "^2.0.2",
	randombytes: "^2.1.0",
	toml: "^3.0.0",
	urijs: "^1.19.1"
};
const ava = {
	files: [
		"./test/e2e/src/test-*"
	],
	require: [
		"dotenv/config"
	],
	timeout: "2m"
};
const require$$1 = {
	name: name,
	version: version$2,
	description: description,
	keywords: keywords,
	homepage: homepage,
	bugs: bugs,
	repository: repository,
	license: license,
	author: author,
	main: main,
	types: types$1,
	browser: browser,
	files: files,
	scripts: scripts,
	husky: husky,
	"lint-staged": {
	"**/*.{js,json,ts}": [
		"yarn fmt"
	]
},
	mocha: mocha,
	nyc: nyc,
	devDependencies: devDependencies,
	dependencies: dependencies,
	ava: ava
};

Object.defineProperty(horizon_axios_client, "__esModule", {
  value: true
});
horizon_axios_client.default = horizon_axios_client.SERVER_TIME_MAP = horizon_axios_client.AxiosClient = void 0;
horizon_axios_client.getCurrentServerTime = getCurrentServerTime;
horizon_axios_client.version = void 0;
var _axios$3 = _interopRequireDefault$5(require$$0);
var _urijs$3 = _interopRequireDefault$5(require$$2);
function _interopRequireDefault$5(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var version$1 = horizon_axios_client.version = require$$1.version;
var SERVER_TIME_MAP = horizon_axios_client.SERVER_TIME_MAP = {};
var AxiosClient$1 = horizon_axios_client.AxiosClient = _axios$3.default.create({
  headers: {
    "X-Client-Name": "js-stellar-sdk",
    "X-Client-Version": version$1
  }
});
function _toSeconds(ms) {
  return Math.floor(ms / 1000);
}
AxiosClient$1.interceptors.response.use(function interceptorHorizonResponse(response) {
  var hostname = (0, _urijs$3.default)(response.config.url).hostname();
  var serverTime = _toSeconds(Date.parse(response.headers.date));
  var localTimeRecorded = _toSeconds(new Date().getTime());
  if (!isNaN(serverTime)) {
    SERVER_TIME_MAP[hostname] = {
      serverTime: serverTime,
      localTimeRecorded: localTimeRecorded
    };
  }
  return response;
});
horizon_axios_client.default = AxiosClient$1;
function getCurrentServerTime(hostname) {
  var entry = SERVER_TIME_MAP[hostname];
  if (!entry || !entry.localTimeRecorded || !entry.serverTime) {
    return null;
  }
  var serverTime = entry.serverTime,
    localTimeRecorded = entry.localTimeRecorded;
  var currentTime = _toSeconds(new Date().getTime());
  if (currentTime - localTimeRecorded > 60 * 5) {
    return null;
  }
  return currentTime - localTimeRecorded + serverTime;
}

function _typeof$q(o) { "@babel/helpers - typeof"; return _typeof$q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$q(o); }
Object.defineProperty(call_builder, "__esModule", {
  value: true
});
call_builder.CallBuilder = void 0;
var _urijs$2 = _interopRequireDefault$4(require$$2);
var _URITemplate = _interopRequireDefault$4(require$$1$3);
var _errors$2 = errors$1;
var _horizon_axios_client$1 = horizon_axios_client;
var _ref, _anyGlobal$EventSourc, _anyGlobal$window;
function _interopRequireDefault$4(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _regeneratorRuntime$8() { _regeneratorRuntime$8 = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof$q(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof$q(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep$8(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator$8(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep$8(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep$8(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck$m(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$m(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$n(descriptor.key), descriptor); } }
function _createClass$m(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$m(Constructor.prototype, protoProps); if (staticProps) _defineProperties$m(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$n(t) { var i = _toPrimitive$n(t, "string"); return "symbol" == _typeof$q(i) ? i : i + ""; }
function _toPrimitive$n(t, r) { if ("object" != _typeof$q(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$q(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var JOINABLE = ["transaction"];
var anyGlobal = commonjsGlobal;
var EventSource = (_ref = (_anyGlobal$EventSourc = anyGlobal.EventSource) !== null && _anyGlobal$EventSourc !== void 0 ? _anyGlobal$EventSourc : (_anyGlobal$window = anyGlobal.window) === null || _anyGlobal$window === void 0 ? void 0 : _anyGlobal$window.EventSource) !== null && _ref !== void 0 ? _ref : require$$4;
call_builder.CallBuilder = function () {
  function CallBuilder(serverUrl) {
    var neighborRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    _classCallCheck$m(this, CallBuilder);
    this.url = serverUrl.clone();
    this.filter = [];
    this.originalSegments = this.url.segment() || [];
    this.neighborRoot = neighborRoot;
  }
  return _createClass$m(CallBuilder, [{
    key: "call",
    value: function call() {
      var _this = this;
      this.checkFilter();
      return this._sendNormalRequest(this.url).then(function (r) {
        return _this._parseResponse(r);
      });
    }
  }, {
    key: "stream",
    value: function stream() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.checkFilter();
      this.url.setQuery("X-Client-Name", "js-stellar-sdk");
      this.url.setQuery("X-Client-Version", _horizon_axios_client$1.version);
      var es;
      var timeout;
      var createTimeout = function createTimeout() {
        timeout = setTimeout(function () {
          var _es;
          (_es = es) === null || _es === void 0 || _es.close();
          es = createEventSource();
        }, options.reconnectTimeout || 15 * 1000);
      };
      var createEventSource = function createEventSource() {
        try {
          es = new EventSource(_this2.url.toString());
        } catch (err) {
          if (options.onerror) {
            options.onerror(err);
          }
        }
        createTimeout();
        if (!es) {
          return es;
        }
        var closed = false;
        var onClose = function onClose() {
          if (closed) {
            return;
          }
          clearTimeout(timeout);
          es.close();
          createEventSource();
          closed = true;
        };
        var onMessage = function onMessage(message) {
          if (message.type === "close") {
            onClose();
            return;
          }
          var result = message.data ? _this2._parseRecord(JSON.parse(message.data)) : message;
          if (result.paging_token) {
            _this2.url.setQuery("cursor", result.paging_token);
          }
          clearTimeout(timeout);
          createTimeout();
          if (typeof options.onmessage !== "undefined") {
            options.onmessage(result);
          }
        };
        var onError = function onError(error) {
          if (options.onerror) {
            options.onerror(error);
          }
        };
        if (es.addEventListener) {
          es.addEventListener("message", onMessage.bind(_this2));
          es.addEventListener("error", onError.bind(_this2));
          es.addEventListener("close", onClose.bind(_this2));
        } else {
          es.onmessage = onMessage.bind(_this2);
          es.onerror = onError.bind(_this2);
        }
        return es;
      };
      createEventSource();
      return function () {
        var _es2;
        clearTimeout(timeout);
        (_es2 = es) === null || _es2 === void 0 || _es2.close();
      };
    }
  }, {
    key: "cursor",
    value: function cursor(_cursor) {
      this.url.setQuery("cursor", _cursor);
      return this;
    }
  }, {
    key: "limit",
    value: function limit(recordsNumber) {
      this.url.setQuery("limit", recordsNumber.toString());
      return this;
    }
  }, {
    key: "order",
    value: function order(direction) {
      this.url.setQuery("order", direction);
      return this;
    }
  }, {
    key: "join",
    value: function join(include) {
      this.url.setQuery("join", include);
      return this;
    }
  }, {
    key: "forEndpoint",
    value: function forEndpoint(endpoint, param) {
      if (this.neighborRoot === "") {
        throw new Error("Invalid usage: neighborRoot not set in constructor");
      }
      this.filter.push([endpoint, param, this.neighborRoot]);
      return this;
    }
  }, {
    key: "checkFilter",
    value: function checkFilter() {
      if (this.filter.length >= 2) {
        throw new _errors$2.BadRequestError("Too many filters specified", this.filter);
      }
      if (this.filter.length === 1) {
        var newSegment = this.originalSegments.concat(this.filter[0]);
        this.url.segment(newSegment);
      }
    }
  }, {
    key: "_requestFnForLink",
    value: function _requestFnForLink(link) {
      var _this3 = this;
      return _asyncToGenerator$8(_regeneratorRuntime$8().mark(function _callee() {
        var opts,
          uri,
          template,
          r,
          _args = arguments;
        return _regeneratorRuntime$8().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              opts = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              if (link.templated) {
                template = (0, _URITemplate.default)(link.href);
                uri = (0, _urijs$2.default)(template.expand(opts));
              } else {
                uri = (0, _urijs$2.default)(link.href);
              }
              _context.next = 4;
              return _this3._sendNormalRequest(uri);
            case 4:
              r = _context.sent;
              return _context.abrupt("return", _this3._parseResponse(r));
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
    }
  }, {
    key: "_parseRecord",
    value: function _parseRecord(json) {
      var _this4 = this;
      if (!json._links) {
        return json;
      }
      var _loop = function _loop() {
        var key = _Object$keys[_i];
        var n = json._links[key];
        var included = false;
        if (typeof json[key] !== "undefined") {
          json["".concat(key, "_attr")] = json[key];
          included = true;
        }
        if (included && JOINABLE.indexOf(key) >= 0) {
          var record = _this4._parseRecord(json[key]);
          json[key] = _asyncToGenerator$8(_regeneratorRuntime$8().mark(function _callee2() {
            return _regeneratorRuntime$8().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", record);
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
        } else {
          json[key] = _this4._requestFnForLink(n);
        }
      };
      for (var _i = 0, _Object$keys = Object.keys(json._links); _i < _Object$keys.length; _i++) {
        _loop();
      }
      return json;
    }
  }, {
    key: "_sendNormalRequest",
    value: function () {
      var _sendNormalRequest2 = _asyncToGenerator$8(_regeneratorRuntime$8().mark(function _callee3(initialUrl) {
        var url;
        return _regeneratorRuntime$8().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              url = initialUrl;
              if (url.authority() === "") {
                url = url.authority(this.url.authority());
              }
              if (url.protocol() === "") {
                url = url.protocol(this.url.protocol());
              }
              return _context3.abrupt("return", _horizon_axios_client$1.AxiosClient.get(url.toString()).then(function (response) {
                return response.data;
              }).catch(this._handleNetworkError));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function _sendNormalRequest(_x) {
        return _sendNormalRequest2.apply(this, arguments);
      }
      return _sendNormalRequest;
    }()
  }, {
    key: "_parseResponse",
    value: function _parseResponse(json) {
      if (json._embedded && json._embedded.records) {
        return this._toCollectionPage(json);
      }
      return this._parseRecord(json);
    }
  }, {
    key: "_toCollectionPage",
    value: function _toCollectionPage(json) {
      var _this5 = this;
      for (var i = 0; i < json._embedded.records.length; i += 1) {
        json._embedded.records[i] = this._parseRecord(json._embedded.records[i]);
      }
      return {
        records: json._embedded.records,
        next: function () {
          var _next2 = _asyncToGenerator$8(_regeneratorRuntime$8().mark(function _callee4() {
            var r;
            return _regeneratorRuntime$8().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _this5._sendNormalRequest((0, _urijs$2.default)(json._links.next.href));
                case 2:
                  r = _context4.sent;
                  return _context4.abrupt("return", _this5._toCollectionPage(r));
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function next() {
            return _next2.apply(this, arguments);
          }
          return next;
        }(),
        prev: function () {
          var _prev = _asyncToGenerator$8(_regeneratorRuntime$8().mark(function _callee5() {
            var r;
            return _regeneratorRuntime$8().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return _this5._sendNormalRequest((0, _urijs$2.default)(json._links.prev.href));
                case 2:
                  r = _context5.sent;
                  return _context5.abrupt("return", _this5._toCollectionPage(r));
                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          function prev() {
            return _prev.apply(this, arguments);
          }
          return prev;
        }()
      };
    }
  }, {
    key: "_handleNetworkError",
    value: (function () {
      var _handleNetworkError2 = _asyncToGenerator$8(_regeneratorRuntime$8().mark(function _callee6(error) {
        return _regeneratorRuntime$8().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(error.response && error.response.status && error.response.statusText)) {
                _context6.next = 8;
                break;
              }
              _context6.t0 = error.response.status;
              _context6.next = _context6.t0 === 404 ? 4 : 5;
              break;
            case 4:
              return _context6.abrupt("return", Promise.reject(new _errors$2.NotFoundError(error.response.statusText, error.response.data)));
            case 5:
              return _context6.abrupt("return", Promise.reject(new _errors$2.NetworkError(error.response.statusText, error.response.data)));
            case 6:
              _context6.next = 9;
              break;
            case 8:
              return _context6.abrupt("return", Promise.reject(new Error(error.message)));
            case 9:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function _handleNetworkError(_x2) {
        return _handleNetworkError2.apply(this, arguments);
      }
      return _handleNetworkError;
    }())
  }]);
}();

var account_call_builder = {};

function _typeof$p(o) { "@babel/helpers - typeof"; return _typeof$p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$p(o); }
Object.defineProperty(account_call_builder, "__esModule", {
  value: true
});
account_call_builder.AccountCallBuilder = void 0;
var _call_builder$g = call_builder;
function _classCallCheck$l(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$l(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$m(descriptor.key), descriptor); } }
function _createClass$l(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$l(Constructor.prototype, protoProps); if (staticProps) _defineProperties$l(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$m(t) { var i = _toPrimitive$m(t, "string"); return "symbol" == _typeof$p(i) ? i : i + ""; }
function _toPrimitive$m(t, r) { if ("object" != _typeof$p(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$p(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper$h(t, o, e) { return o = _getPrototypeOf$h(o), _possibleConstructorReturn$h(t, _isNativeReflectConstruct$h() ? Reflect.construct(o, e || [], _getPrototypeOf$h(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$h(self, call) { if (call && (_typeof$p(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$h(self); }
function _assertThisInitialized$h(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$h() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$h = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$h(o) { _getPrototypeOf$h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$h(o); }
function _inherits$h(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$h(subClass, superClass); }
function _setPrototypeOf$h(o, p) { _setPrototypeOf$h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$h(o, p); }
account_call_builder.AccountCallBuilder = function (_CallBuilder) {
  function AccountCallBuilder(serverUrl) {
    var _this;
    _classCallCheck$l(this, AccountCallBuilder);
    _this = _callSuper$h(this, AccountCallBuilder, [serverUrl]);
    _this.url.segment("accounts");
    return _this;
  }
  _inherits$h(AccountCallBuilder, _CallBuilder);
  return _createClass$l(AccountCallBuilder, [{
    key: "accountId",
    value: function accountId(id) {
      var builder = new _call_builder$g.CallBuilder(this.url.clone());
      builder.filter.push([id]);
      return builder;
    }
  }, {
    key: "forSigner",
    value: function forSigner(id) {
      this.url.setQuery("signer", id);
      return this;
    }
  }, {
    key: "forAsset",
    value: function forAsset(asset) {
      this.url.setQuery("asset", "".concat(asset));
      return this;
    }
  }, {
    key: "sponsor",
    value: function sponsor(id) {
      this.url.setQuery("sponsor", id);
      return this;
    }
  }, {
    key: "forLiquidityPool",
    value: function forLiquidityPool(id) {
      this.url.setQuery("liquidity_pool", id);
      return this;
    }
  }]);
}(_call_builder$g.CallBuilder);

var assets_call_builder = {};

function _typeof$o(o) { "@babel/helpers - typeof"; return _typeof$o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$o(o); }
Object.defineProperty(assets_call_builder, "__esModule", {
  value: true
});
assets_call_builder.AssetsCallBuilder = void 0;
var _call_builder$f = call_builder;
function _classCallCheck$k(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$k(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$l(descriptor.key), descriptor); } }
function _createClass$k(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$k(Constructor.prototype, protoProps); if (staticProps) _defineProperties$k(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$l(t) { var i = _toPrimitive$l(t, "string"); return "symbol" == _typeof$o(i) ? i : i + ""; }
function _toPrimitive$l(t, r) { if ("object" != _typeof$o(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$o(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper$g(t, o, e) { return o = _getPrototypeOf$g(o), _possibleConstructorReturn$g(t, _isNativeReflectConstruct$g() ? Reflect.construct(o, e || [], _getPrototypeOf$g(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$g(self, call) { if (call && (_typeof$o(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$g(self); }
function _assertThisInitialized$g(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$g() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$g = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$g(o) { _getPrototypeOf$g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$g(o); }
function _inherits$g(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$g(subClass, superClass); }
function _setPrototypeOf$g(o, p) { _setPrototypeOf$g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$g(o, p); }
assets_call_builder.AssetsCallBuilder = function (_CallBuilder) {
  function AssetsCallBuilder(serverUrl) {
    var _this;
    _classCallCheck$k(this, AssetsCallBuilder);
    _this = _callSuper$g(this, AssetsCallBuilder, [serverUrl]);
    _this.url.segment("assets");
    return _this;
  }
  _inherits$g(AssetsCallBuilder, _CallBuilder);
  return _createClass$k(AssetsCallBuilder, [{
    key: "forCode",
    value: function forCode(value) {
      this.url.setQuery("asset_code", value);
      return this;
    }
  }, {
    key: "forIssuer",
    value: function forIssuer(value) {
      this.url.setQuery("asset_issuer", value);
      return this;
    }
  }]);
}(_call_builder$f.CallBuilder);

var claimable_balances_call_builder = {};

function _typeof$n(o) { "@babel/helpers - typeof"; return _typeof$n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$n(o); }
Object.defineProperty(claimable_balances_call_builder, "__esModule", {
  value: true
});
claimable_balances_call_builder.ClaimableBalanceCallBuilder = void 0;
var _call_builder$e = call_builder;
function _classCallCheck$j(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$j(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$k(descriptor.key), descriptor); } }
function _createClass$j(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$j(Constructor.prototype, protoProps); if (staticProps) _defineProperties$j(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$k(t) { var i = _toPrimitive$k(t, "string"); return "symbol" == _typeof$n(i) ? i : i + ""; }
function _toPrimitive$k(t, r) { if ("object" != _typeof$n(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$n(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper$f(t, o, e) { return o = _getPrototypeOf$f(o), _possibleConstructorReturn$f(t, _isNativeReflectConstruct$f() ? Reflect.construct(o, e || [], _getPrototypeOf$f(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$f(self, call) { if (call && (_typeof$n(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$f(self); }
function _assertThisInitialized$f(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$f() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$f = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$f(o) { _getPrototypeOf$f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$f(o); }
function _inherits$f(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$f(subClass, superClass); }
function _setPrototypeOf$f(o, p) { _setPrototypeOf$f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$f(o, p); }
claimable_balances_call_builder.ClaimableBalanceCallBuilder = function (_CallBuilder) {
  function ClaimableBalanceCallBuilder(serverUrl) {
    var _this;
    _classCallCheck$j(this, ClaimableBalanceCallBuilder);
    _this = _callSuper$f(this, ClaimableBalanceCallBuilder, [serverUrl]);
    _this.url.segment("claimable_balances");
    return _this;
  }
  _inherits$f(ClaimableBalanceCallBuilder, _CallBuilder);
  return _createClass$j(ClaimableBalanceCallBuilder, [{
    key: "claimableBalance",
    value: function claimableBalance(claimableBalanceId) {
      var builder = new _call_builder$e.CallBuilder(this.url.clone());
      builder.filter.push([claimableBalanceId]);
      return builder;
    }
  }, {
    key: "sponsor",
    value: function sponsor(_sponsor) {
      this.url.setQuery("sponsor", _sponsor);
      return this;
    }
  }, {
    key: "claimant",
    value: function claimant(_claimant) {
      this.url.setQuery("claimant", _claimant);
      return this;
    }
  }, {
    key: "asset",
    value: function asset(_asset) {
      this.url.setQuery("asset", _asset.toString());
      return this;
    }
  }]);
}(_call_builder$e.CallBuilder);

var effect_call_builder = {};

function _typeof$m(o) { "@babel/helpers - typeof"; return _typeof$m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$m(o); }
Object.defineProperty(effect_call_builder, "__esModule", {
  value: true
});
effect_call_builder.EffectCallBuilder = void 0;
var _call_builder$d = call_builder;
function _classCallCheck$i(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$i(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$j(descriptor.key), descriptor); } }
function _createClass$i(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$i(Constructor.prototype, protoProps); if (staticProps) _defineProperties$i(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$j(t) { var i = _toPrimitive$j(t, "string"); return "symbol" == _typeof$m(i) ? i : i + ""; }
function _toPrimitive$j(t, r) { if ("object" != _typeof$m(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$m(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper$e(t, o, e) { return o = _getPrototypeOf$e(o), _possibleConstructorReturn$e(t, _isNativeReflectConstruct$e() ? Reflect.construct(o, e || [], _getPrototypeOf$e(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$e(self, call) { if (call && (_typeof$m(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$e(self); }
function _assertThisInitialized$e(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$e() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$e = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$e(o) { _getPrototypeOf$e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$e(o); }
function _inherits$e(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$e(subClass, superClass); }
function _setPrototypeOf$e(o, p) { _setPrototypeOf$e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$e(o, p); }
effect_call_builder.EffectCallBuilder = function (_CallBuilder) {
  function EffectCallBuilder(serverUrl) {
    var _this;
    _classCallCheck$i(this, EffectCallBuilder);
    _this = _callSuper$e(this, EffectCallBuilder, [serverUrl, "effects"]);
    _this.url.segment("effects");
    return _this;
  }
  _inherits$e(EffectCallBuilder, _CallBuilder);
  return _createClass$i(EffectCallBuilder, [{
    key: "forAccount",
    value: function forAccount(accountId) {
      return this.forEndpoint("accounts", accountId);
    }
  }, {
    key: "forLedger",
    value: function forLedger(sequence) {
      return this.forEndpoint("ledgers", sequence.toString());
    }
  }, {
    key: "forTransaction",
    value: function forTransaction(transactionId) {
      return this.forEndpoint("transactions", transactionId);
    }
  }, {
    key: "forOperation",
    value: function forOperation(operationId) {
      return this.forEndpoint("operations", operationId);
    }
  }, {
    key: "forLiquidityPool",
    value: function forLiquidityPool(poolId) {
      return this.forEndpoint("liquidity_pools", poolId);
    }
  }]);
}(_call_builder$d.CallBuilder);

var friendbot_builder = {};

function _typeof$l(o) { "@babel/helpers - typeof"; return _typeof$l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$l(o); }
Object.defineProperty(friendbot_builder, "__esModule", {
  value: true
});
friendbot_builder.FriendbotBuilder = void 0;
var _call_builder$c = call_builder;
function _defineProperties$h(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$i(descriptor.key), descriptor); } }
function _createClass$h(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$h(Constructor.prototype, protoProps); if (staticProps) _defineProperties$h(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$i(t) { var i = _toPrimitive$i(t, "string"); return "symbol" == _typeof$l(i) ? i : i + ""; }
function _toPrimitive$i(t, r) { if ("object" != _typeof$l(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$l(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck$h(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper$d(t, o, e) { return o = _getPrototypeOf$d(o), _possibleConstructorReturn$d(t, _isNativeReflectConstruct$d() ? Reflect.construct(o, e || [], _getPrototypeOf$d(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$d(self, call) { if (call && (_typeof$l(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$d(self); }
function _assertThisInitialized$d(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$d() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$d = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$d(o) { _getPrototypeOf$d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$d(o); }
function _inherits$d(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$d(subClass, superClass); }
function _setPrototypeOf$d(o, p) { _setPrototypeOf$d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$d(o, p); }
friendbot_builder.FriendbotBuilder = function (_CallBuilder) {
  function FriendbotBuilder(serverUrl, address) {
    var _this;
    _classCallCheck$h(this, FriendbotBuilder);
    _this = _callSuper$d(this, FriendbotBuilder, [serverUrl]);
    _this.url.segment("friendbot");
    _this.url.setQuery("addr", address);
    return _this;
  }
  _inherits$d(FriendbotBuilder, _CallBuilder);
  return _createClass$h(FriendbotBuilder);
}(_call_builder$c.CallBuilder);

var ledger_call_builder = {};

function _typeof$k(o) { "@babel/helpers - typeof"; return _typeof$k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$k(o); }
Object.defineProperty(ledger_call_builder, "__esModule", {
  value: true
});
ledger_call_builder.LedgerCallBuilder = void 0;
var _call_builder$b = call_builder;
function _classCallCheck$g(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$g(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$h(descriptor.key), descriptor); } }
function _createClass$g(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$g(Constructor.prototype, protoProps); if (staticProps) _defineProperties$g(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$h(t) { var i = _toPrimitive$h(t, "string"); return "symbol" == _typeof$k(i) ? i : i + ""; }
function _toPrimitive$h(t, r) { if ("object" != _typeof$k(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$k(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper$c(t, o, e) { return o = _getPrototypeOf$c(o), _possibleConstructorReturn$c(t, _isNativeReflectConstruct$c() ? Reflect.construct(o, e || [], _getPrototypeOf$c(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$c(self, call) { if (call && (_typeof$k(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$c(self); }
function _assertThisInitialized$c(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$c() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$c = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$c(o) { _getPrototypeOf$c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$c(o); }
function _inherits$c(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$c(subClass, superClass); }
function _setPrototypeOf$c(o, p) { _setPrototypeOf$c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$c(o, p); }
ledger_call_builder.LedgerCallBuilder = function (_CallBuilder) {
  function LedgerCallBuilder(serverUrl) {
    var _this;
    _classCallCheck$g(this, LedgerCallBuilder);
    _this = _callSuper$c(this, LedgerCallBuilder, [serverUrl]);
    _this.url.segment("ledgers");
    return _this;
  }
  _inherits$c(LedgerCallBuilder, _CallBuilder);
  return _createClass$g(LedgerCallBuilder, [{
    key: "ledger",
    value: function ledger(sequence) {
      this.filter.push(["ledgers", sequence.toString()]);
      return this;
    }
  }]);
}(_call_builder$b.CallBuilder);

var liquidity_pool_call_builder = {};

function _typeof$j(o) { "@babel/helpers - typeof"; return _typeof$j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$j(o); }
Object.defineProperty(liquidity_pool_call_builder, "__esModule", {
  value: true
});
liquidity_pool_call_builder.LiquidityPoolCallBuilder = void 0;
var _call_builder$a = call_builder;
function _classCallCheck$f(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$f(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$g(descriptor.key), descriptor); } }
function _createClass$f(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$f(Constructor.prototype, protoProps); if (staticProps) _defineProperties$f(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$g(t) { var i = _toPrimitive$g(t, "string"); return "symbol" == _typeof$j(i) ? i : i + ""; }
function _toPrimitive$g(t, r) { if ("object" != _typeof$j(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$j(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper$b(t, o, e) { return o = _getPrototypeOf$b(o), _possibleConstructorReturn$b(t, _isNativeReflectConstruct$b() ? Reflect.construct(o, e || [], _getPrototypeOf$b(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$b(self, call) { if (call && (_typeof$j(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$b(self); }
function _assertThisInitialized$b(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$b() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$b = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$b(o) { _getPrototypeOf$b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$b(o); }
function _inherits$b(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$b(subClass, superClass); }
function _setPrototypeOf$b(o, p) { _setPrototypeOf$b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$b(o, p); }
liquidity_pool_call_builder.LiquidityPoolCallBuilder = function (_CallBuilder) {
  function LiquidityPoolCallBuilder(serverUrl) {
    var _this;
    _classCallCheck$f(this, LiquidityPoolCallBuilder);
    _this = _callSuper$b(this, LiquidityPoolCallBuilder, [serverUrl]);
    _this.url.segment("liquidity_pools");
    return _this;
  }
  _inherits$b(LiquidityPoolCallBuilder, _CallBuilder);
  return _createClass$f(LiquidityPoolCallBuilder, [{
    key: "forAssets",
    value: function forAssets() {
      for (var _len = arguments.length, assets = new Array(_len), _key = 0; _key < _len; _key++) {
        assets[_key] = arguments[_key];
      }
      var assetList = assets.map(function (asset) {
        return asset.toString();
      }).join(",");
      this.url.setQuery("reserves", assetList);
      return this;
    }
  }, {
    key: "forAccount",
    value: function forAccount(id) {
      this.url.setQuery("account", id);
      return this;
    }
  }, {
    key: "liquidityPoolId",
    value: function liquidityPoolId(id) {
      if (!id.match(/[a-fA-F0-9]{64}/)) {
        throw new TypeError("".concat(id, " does not look like a liquidity pool ID"));
      }
      var builder = new _call_builder$a.CallBuilder(this.url.clone());
      builder.filter.push([id.toLowerCase()]);
      return builder;
    }
  }]);
}(_call_builder$a.CallBuilder);

var offer_call_builder = {};

function _typeof$i(o) { "@babel/helpers - typeof"; return _typeof$i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$i(o); }
Object.defineProperty(offer_call_builder, "__esModule", {
  value: true
});
offer_call_builder.OfferCallBuilder = void 0;
var _call_builder$9 = call_builder;
function _classCallCheck$e(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$e(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$f(descriptor.key), descriptor); } }
function _createClass$e(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$e(Constructor.prototype, protoProps); if (staticProps) _defineProperties$e(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$f(t) { var i = _toPrimitive$f(t, "string"); return "symbol" == _typeof$i(i) ? i : i + ""; }
function _toPrimitive$f(t, r) { if ("object" != _typeof$i(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$i(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper$a(t, o, e) { return o = _getPrototypeOf$a(o), _possibleConstructorReturn$a(t, _isNativeReflectConstruct$a() ? Reflect.construct(o, e || [], _getPrototypeOf$a(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$a(self, call) { if (call && (_typeof$i(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$a(self); }
function _assertThisInitialized$a(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$a() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$a = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$a(o) { _getPrototypeOf$a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$a(o); }
function _inherits$a(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$a(subClass, superClass); }
function _setPrototypeOf$a(o, p) { _setPrototypeOf$a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$a(o, p); }
offer_call_builder.OfferCallBuilder = function (_CallBuilder) {
  function OfferCallBuilder(serverUrl) {
    var _this;
    _classCallCheck$e(this, OfferCallBuilder);
    _this = _callSuper$a(this, OfferCallBuilder, [serverUrl, "offers"]);
    _this.url.segment("offers");
    return _this;
  }
  _inherits$a(OfferCallBuilder, _CallBuilder);
  return _createClass$e(OfferCallBuilder, [{
    key: "offer",
    value: function offer(offerId) {
      var builder = new _call_builder$9.CallBuilder(this.url.clone());
      builder.filter.push([offerId]);
      return builder;
    }
  }, {
    key: "forAccount",
    value: function forAccount(id) {
      return this.forEndpoint("accounts", id);
    }
  }, {
    key: "buying",
    value: function buying(asset) {
      if (!asset.isNative()) {
        this.url.setQuery("buying_asset_type", asset.getAssetType());
        this.url.setQuery("buying_asset_code", asset.getCode());
        this.url.setQuery("buying_asset_issuer", asset.getIssuer());
      } else {
        this.url.setQuery("buying_asset_type", "native");
      }
      return this;
    }
  }, {
    key: "selling",
    value: function selling(asset) {
      if (!asset.isNative()) {
        this.url.setQuery("selling_asset_type", asset.getAssetType());
        this.url.setQuery("selling_asset_code", asset.getCode());
        this.url.setQuery("selling_asset_issuer", asset.getIssuer());
      } else {
        this.url.setQuery("selling_asset_type", "native");
      }
      return this;
    }
  }, {
    key: "sponsor",
    value: function sponsor(id) {
      this.url.setQuery("sponsor", id);
      return this;
    }
  }, {
    key: "seller",
    value: function seller(_seller) {
      this.url.setQuery("seller", _seller);
      return this;
    }
  }]);
}(_call_builder$9.CallBuilder);

var operation_call_builder = {};

function _typeof$h(o) { "@babel/helpers - typeof"; return _typeof$h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$h(o); }
Object.defineProperty(operation_call_builder, "__esModule", {
  value: true
});
operation_call_builder.OperationCallBuilder = void 0;
var _call_builder$8 = call_builder;
function _classCallCheck$d(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$d(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$e(descriptor.key), descriptor); } }
function _createClass$d(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$d(Constructor.prototype, protoProps); if (staticProps) _defineProperties$d(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$e(t) { var i = _toPrimitive$e(t, "string"); return "symbol" == _typeof$h(i) ? i : i + ""; }
function _toPrimitive$e(t, r) { if ("object" != _typeof$h(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$h(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper$9(t, o, e) { return o = _getPrototypeOf$9(o), _possibleConstructorReturn$9(t, _isNativeReflectConstruct$9() ? Reflect.construct(o, e || [], _getPrototypeOf$9(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$9(self, call) { if (call && (_typeof$h(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$9(self); }
function _assertThisInitialized$9(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$9() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$9 = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$9(o) { _getPrototypeOf$9 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$9(o); }
function _inherits$9(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$9(subClass, superClass); }
function _setPrototypeOf$9(o, p) { _setPrototypeOf$9 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$9(o, p); }
operation_call_builder.OperationCallBuilder = function (_CallBuilder) {
  function OperationCallBuilder(serverUrl) {
    var _this;
    _classCallCheck$d(this, OperationCallBuilder);
    _this = _callSuper$9(this, OperationCallBuilder, [serverUrl, "operations"]);
    _this.url.segment("operations");
    return _this;
  }
  _inherits$9(OperationCallBuilder, _CallBuilder);
  return _createClass$d(OperationCallBuilder, [{
    key: "operation",
    value: function operation(operationId) {
      var builder = new _call_builder$8.CallBuilder(this.url.clone());
      builder.filter.push([operationId]);
      return builder;
    }
  }, {
    key: "forAccount",
    value: function forAccount(accountId) {
      return this.forEndpoint("accounts", accountId);
    }
  }, {
    key: "forClaimableBalance",
    value: function forClaimableBalance(claimableBalanceId) {
      return this.forEndpoint("claimable_balances", claimableBalanceId);
    }
  }, {
    key: "forLedger",
    value: function forLedger(sequence) {
      return this.forEndpoint("ledgers", sequence.toString());
    }
  }, {
    key: "forTransaction",
    value: function forTransaction(transactionId) {
      return this.forEndpoint("transactions", transactionId);
    }
  }, {
    key: "forLiquidityPool",
    value: function forLiquidityPool(poolId) {
      return this.forEndpoint("liquidity_pools", poolId);
    }
  }, {
    key: "includeFailed",
    value: function includeFailed(value) {
      this.url.setQuery("include_failed", value.toString());
      return this;
    }
  }]);
}(_call_builder$8.CallBuilder);

var orderbook_call_builder = {};

function _typeof$g(o) { "@babel/helpers - typeof"; return _typeof$g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$g(o); }
Object.defineProperty(orderbook_call_builder, "__esModule", {
  value: true
});
orderbook_call_builder.OrderbookCallBuilder = void 0;
var _call_builder$7 = call_builder;
function _defineProperties$c(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$d(descriptor.key), descriptor); } }
function _createClass$c(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$c(Constructor.prototype, protoProps); if (staticProps) _defineProperties$c(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$d(t) { var i = _toPrimitive$d(t, "string"); return "symbol" == _typeof$g(i) ? i : i + ""; }
function _toPrimitive$d(t, r) { if ("object" != _typeof$g(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$g(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck$c(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper$8(t, o, e) { return o = _getPrototypeOf$8(o), _possibleConstructorReturn$8(t, _isNativeReflectConstruct$8() ? Reflect.construct(o, e || [], _getPrototypeOf$8(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$8(self, call) { if (call && (_typeof$g(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$8(self); }
function _assertThisInitialized$8(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$8() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$8 = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$8(o) { _getPrototypeOf$8 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$8(o); }
function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$8(subClass, superClass); }
function _setPrototypeOf$8(o, p) { _setPrototypeOf$8 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$8(o, p); }
orderbook_call_builder.OrderbookCallBuilder = function (_CallBuilder) {
  function OrderbookCallBuilder(serverUrl, selling, buying) {
    var _this;
    _classCallCheck$c(this, OrderbookCallBuilder);
    _this = _callSuper$8(this, OrderbookCallBuilder, [serverUrl]);
    _this.url.segment("order_book");
    if (!selling.isNative()) {
      _this.url.setQuery("selling_asset_type", selling.getAssetType());
      _this.url.setQuery("selling_asset_code", selling.getCode());
      _this.url.setQuery("selling_asset_issuer", selling.getIssuer());
    } else {
      _this.url.setQuery("selling_asset_type", "native");
    }
    if (!buying.isNative()) {
      _this.url.setQuery("buying_asset_type", buying.getAssetType());
      _this.url.setQuery("buying_asset_code", buying.getCode());
      _this.url.setQuery("buying_asset_issuer", buying.getIssuer());
    } else {
      _this.url.setQuery("buying_asset_type", "native");
    }
    return _this;
  }
  _inherits$8(OrderbookCallBuilder, _CallBuilder);
  return _createClass$c(OrderbookCallBuilder);
}(_call_builder$7.CallBuilder);

var payment_call_builder = {};

function _typeof$f(o) { "@babel/helpers - typeof"; return _typeof$f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$f(o); }
Object.defineProperty(payment_call_builder, "__esModule", {
  value: true
});
payment_call_builder.PaymentCallBuilder = void 0;
var _call_builder$6 = call_builder;
function _classCallCheck$b(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$b(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$c(descriptor.key), descriptor); } }
function _createClass$b(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$b(Constructor.prototype, protoProps); if (staticProps) _defineProperties$b(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$c(t) { var i = _toPrimitive$c(t, "string"); return "symbol" == _typeof$f(i) ? i : i + ""; }
function _toPrimitive$c(t, r) { if ("object" != _typeof$f(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$f(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper$7(t, o, e) { return o = _getPrototypeOf$7(o), _possibleConstructorReturn$7(t, _isNativeReflectConstruct$7() ? Reflect.construct(o, e || [], _getPrototypeOf$7(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$7(self, call) { if (call && (_typeof$f(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$7(self); }
function _assertThisInitialized$7(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$7() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$7 = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$7(o) { _getPrototypeOf$7 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$7(o); }
function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$7(subClass, superClass); }
function _setPrototypeOf$7(o, p) { _setPrototypeOf$7 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$7(o, p); }
payment_call_builder.PaymentCallBuilder = function (_CallBuilder) {
  function PaymentCallBuilder(serverUrl) {
    var _this;
    _classCallCheck$b(this, PaymentCallBuilder);
    _this = _callSuper$7(this, PaymentCallBuilder, [serverUrl, "payments"]);
    _this.url.segment("payments");
    return _this;
  }
  _inherits$7(PaymentCallBuilder, _CallBuilder);
  return _createClass$b(PaymentCallBuilder, [{
    key: "forAccount",
    value: function forAccount(accountId) {
      return this.forEndpoint("accounts", accountId);
    }
  }, {
    key: "forLedger",
    value: function forLedger(sequence) {
      return this.forEndpoint("ledgers", sequence.toString());
    }
  }, {
    key: "forTransaction",
    value: function forTransaction(transactionId) {
      return this.forEndpoint("transactions", transactionId);
    }
  }]);
}(_call_builder$6.CallBuilder);

var strict_receive_path_call_builder = {};

function _typeof$e(o) { "@babel/helpers - typeof"; return _typeof$e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$e(o); }
Object.defineProperty(strict_receive_path_call_builder, "__esModule", {
  value: true
});
strict_receive_path_call_builder.StrictReceivePathCallBuilder = void 0;
var _call_builder$5 = call_builder;
function _defineProperties$a(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$b(descriptor.key), descriptor); } }
function _createClass$a(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$a(Constructor.prototype, protoProps); if (staticProps) _defineProperties$a(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$b(t) { var i = _toPrimitive$b(t, "string"); return "symbol" == _typeof$e(i) ? i : i + ""; }
function _toPrimitive$b(t, r) { if ("object" != _typeof$e(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$e(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper$6(t, o, e) { return o = _getPrototypeOf$6(o), _possibleConstructorReturn$6(t, _isNativeReflectConstruct$6() ? Reflect.construct(o, e || [], _getPrototypeOf$6(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$6(self, call) { if (call && (_typeof$e(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$6(self); }
function _assertThisInitialized$6(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$6() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$6 = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$6(o) { _getPrototypeOf$6 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$6(o); }
function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$6(subClass, superClass); }
function _setPrototypeOf$6(o, p) { _setPrototypeOf$6 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$6(o, p); }
strict_receive_path_call_builder.StrictReceivePathCallBuilder = function (_CallBuilder) {
  function StrictReceivePathCallBuilder(serverUrl, source, destinationAsset, destinationAmount) {
    var _this;
    _classCallCheck$a(this, StrictReceivePathCallBuilder);
    _this = _callSuper$6(this, StrictReceivePathCallBuilder, [serverUrl]);
    _this.url.segment("paths/strict-receive");
    if (typeof source === "string") {
      _this.url.setQuery("source_account", source);
    } else {
      var assets = source.map(function (asset) {
        if (asset.isNative()) {
          return "native";
        }
        return "".concat(asset.getCode(), ":").concat(asset.getIssuer());
      }).join(",");
      _this.url.setQuery("source_assets", assets);
    }
    _this.url.setQuery("destination_amount", destinationAmount);
    if (!destinationAsset.isNative()) {
      _this.url.setQuery("destination_asset_type", destinationAsset.getAssetType());
      _this.url.setQuery("destination_asset_code", destinationAsset.getCode());
      _this.url.setQuery("destination_asset_issuer", destinationAsset.getIssuer());
    } else {
      _this.url.setQuery("destination_asset_type", "native");
    }
    return _this;
  }
  _inherits$6(StrictReceivePathCallBuilder, _CallBuilder);
  return _createClass$a(StrictReceivePathCallBuilder);
}(_call_builder$5.CallBuilder);

var strict_send_path_call_builder = {};

function _typeof$d(o) { "@babel/helpers - typeof"; return _typeof$d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$d(o); }
Object.defineProperty(strict_send_path_call_builder, "__esModule", {
  value: true
});
strict_send_path_call_builder.StrictSendPathCallBuilder = void 0;
var _call_builder$4 = call_builder;
function _defineProperties$9(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$a(descriptor.key), descriptor); } }
function _createClass$9(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$9(Constructor.prototype, protoProps); if (staticProps) _defineProperties$9(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$a(t) { var i = _toPrimitive$a(t, "string"); return "symbol" == _typeof$d(i) ? i : i + ""; }
function _toPrimitive$a(t, r) { if ("object" != _typeof$d(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$d(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper$5(t, o, e) { return o = _getPrototypeOf$5(o), _possibleConstructorReturn$5(t, _isNativeReflectConstruct$5() ? Reflect.construct(o, e || [], _getPrototypeOf$5(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$5(self, call) { if (call && (_typeof$d(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$5(self); }
function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$5() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$5 = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$5(o) { _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$5(o); }
function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$5(subClass, superClass); }
function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }
strict_send_path_call_builder.StrictSendPathCallBuilder = function (_CallBuilder) {
  function StrictSendPathCallBuilder(serverUrl, sourceAsset, sourceAmount, destination) {
    var _this;
    _classCallCheck$9(this, StrictSendPathCallBuilder);
    _this = _callSuper$5(this, StrictSendPathCallBuilder, [serverUrl]);
    _this.url.segment("paths/strict-send");
    if (sourceAsset.isNative()) {
      _this.url.setQuery("source_asset_type", "native");
    } else {
      _this.url.setQuery("source_asset_type", sourceAsset.getAssetType());
      _this.url.setQuery("source_asset_code", sourceAsset.getCode());
      _this.url.setQuery("source_asset_issuer", sourceAsset.getIssuer());
    }
    _this.url.setQuery("source_amount", sourceAmount);
    if (typeof destination === "string") {
      _this.url.setQuery("destination_account", destination);
    } else {
      var assets = destination.map(function (asset) {
        if (asset.isNative()) {
          return "native";
        }
        return "".concat(asset.getCode(), ":").concat(asset.getIssuer());
      }).join(",");
      _this.url.setQuery("destination_assets", assets);
    }
    return _this;
  }
  _inherits$5(StrictSendPathCallBuilder, _CallBuilder);
  return _createClass$9(StrictSendPathCallBuilder);
}(_call_builder$4.CallBuilder);

var trade_aggregation_call_builder = {};

function _typeof$c(o) { "@babel/helpers - typeof"; return _typeof$c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$c(o); }
Object.defineProperty(trade_aggregation_call_builder, "__esModule", {
  value: true
});
trade_aggregation_call_builder.TradeAggregationCallBuilder = void 0;
var _call_builder$3 = call_builder;
var _errors$1 = errors$1;
function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$9(descriptor.key), descriptor); } }
function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); if (staticProps) _defineProperties$8(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$9(t) { var i = _toPrimitive$9(t, "string"); return "symbol" == _typeof$c(i) ? i : i + ""; }
function _toPrimitive$9(t, r) { if ("object" != _typeof$c(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$c(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper$4(t, o, e) { return o = _getPrototypeOf$4(o), _possibleConstructorReturn$4(t, _isNativeReflectConstruct$4() ? Reflect.construct(o, e || [], _getPrototypeOf$4(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$4(self, call) { if (call && (_typeof$c(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$4(self); }
function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$4() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$4 = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }
function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$4(subClass, superClass); }
function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }
var allowedResolutions = [60000, 300000, 900000, 3600000, 86400000, 604800000];
trade_aggregation_call_builder.TradeAggregationCallBuilder = function (_CallBuilder) {
  function TradeAggregationCallBuilder(serverUrl, base, counter, start_time, end_time, resolution, offset) {
    var _this;
    _classCallCheck$8(this, TradeAggregationCallBuilder);
    _this = _callSuper$4(this, TradeAggregationCallBuilder, [serverUrl]);
    _this.url.segment("trade_aggregations");
    if (!base.isNative()) {
      _this.url.setQuery("base_asset_type", base.getAssetType());
      _this.url.setQuery("base_asset_code", base.getCode());
      _this.url.setQuery("base_asset_issuer", base.getIssuer());
    } else {
      _this.url.setQuery("base_asset_type", "native");
    }
    if (!counter.isNative()) {
      _this.url.setQuery("counter_asset_type", counter.getAssetType());
      _this.url.setQuery("counter_asset_code", counter.getCode());
      _this.url.setQuery("counter_asset_issuer", counter.getIssuer());
    } else {
      _this.url.setQuery("counter_asset_type", "native");
    }
    if (typeof start_time !== "number" || typeof end_time !== "number") {
      throw new _errors$1.BadRequestError("Invalid time bounds", [start_time, end_time]);
    } else {
      _this.url.setQuery("start_time", start_time.toString());
      _this.url.setQuery("end_time", end_time.toString());
    }
    if (!_this.isValidResolution(resolution)) {
      throw new _errors$1.BadRequestError("Invalid resolution", resolution);
    } else {
      _this.url.setQuery("resolution", resolution.toString());
    }
    if (!_this.isValidOffset(offset, resolution)) {
      throw new _errors$1.BadRequestError("Invalid offset", offset);
    } else {
      _this.url.setQuery("offset", offset.toString());
    }
    return _this;
  }
  _inherits$4(TradeAggregationCallBuilder, _CallBuilder);
  return _createClass$8(TradeAggregationCallBuilder, [{
    key: "isValidResolution",
    value: function isValidResolution(resolution) {
      for (var _i = 0, _allowedResolutions = allowedResolutions; _i < _allowedResolutions.length; _i++) {
        var allowed = _allowedResolutions[_i];
        if (allowed === resolution) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "isValidOffset",
    value: function isValidOffset(offset, resolution) {
      var hour = 3600000;
      return !(offset > resolution || offset >= 24 * hour || offset % hour !== 0);
    }
  }]);
}(_call_builder$3.CallBuilder);

var trades_call_builder = {};

function _typeof$b(o) { "@babel/helpers - typeof"; return _typeof$b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$b(o); }
Object.defineProperty(trades_call_builder, "__esModule", {
  value: true
});
trades_call_builder.TradesCallBuilder = void 0;
var _call_builder$2 = call_builder;
function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$8(descriptor.key), descriptor); } }
function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$8(t) { var i = _toPrimitive$8(t, "string"); return "symbol" == _typeof$b(i) ? i : i + ""; }
function _toPrimitive$8(t, r) { if ("object" != _typeof$b(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$b(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper$3(t, o, e) { return o = _getPrototypeOf$3(o), _possibleConstructorReturn$3(t, _isNativeReflectConstruct$3() ? Reflect.construct(o, e || [], _getPrototypeOf$3(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$b(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$3(self); }
function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$3() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$3 = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }
function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$3(subClass, superClass); }
function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }
trades_call_builder.TradesCallBuilder = function (_CallBuilder) {
  function TradesCallBuilder(serverUrl) {
    var _this;
    _classCallCheck$7(this, TradesCallBuilder);
    _this = _callSuper$3(this, TradesCallBuilder, [serverUrl, "trades"]);
    _this.url.segment("trades");
    return _this;
  }
  _inherits$3(TradesCallBuilder, _CallBuilder);
  return _createClass$7(TradesCallBuilder, [{
    key: "forAssetPair",
    value: function forAssetPair(base, counter) {
      if (!base.isNative()) {
        this.url.setQuery("base_asset_type", base.getAssetType());
        this.url.setQuery("base_asset_code", base.getCode());
        this.url.setQuery("base_asset_issuer", base.getIssuer());
      } else {
        this.url.setQuery("base_asset_type", "native");
      }
      if (!counter.isNative()) {
        this.url.setQuery("counter_asset_type", counter.getAssetType());
        this.url.setQuery("counter_asset_code", counter.getCode());
        this.url.setQuery("counter_asset_issuer", counter.getIssuer());
      } else {
        this.url.setQuery("counter_asset_type", "native");
      }
      return this;
    }
  }, {
    key: "forOffer",
    value: function forOffer(offerId) {
      this.url.setQuery("offer_id", offerId);
      return this;
    }
  }, {
    key: "forType",
    value: function forType(tradeType) {
      this.url.setQuery("trade_type", tradeType);
      return this;
    }
  }, {
    key: "forAccount",
    value: function forAccount(accountId) {
      return this.forEndpoint("accounts", accountId);
    }
  }, {
    key: "forLiquidityPool",
    value: function forLiquidityPool(liquidityPoolId) {
      return this.forEndpoint("liquidity_pools", liquidityPoolId);
    }
  }]);
}(_call_builder$2.CallBuilder);

var transaction_call_builder = {};

function _typeof$a(o) { "@babel/helpers - typeof"; return _typeof$a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$a(o); }
Object.defineProperty(transaction_call_builder, "__esModule", {
  value: true
});
transaction_call_builder.TransactionCallBuilder = void 0;
var _call_builder$1 = call_builder;
function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$7(descriptor.key), descriptor); } }
function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$7(t) { var i = _toPrimitive$7(t, "string"); return "symbol" == _typeof$a(i) ? i : i + ""; }
function _toPrimitive$7(t, r) { if ("object" != _typeof$a(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$a(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper$2(t, o, e) { return o = _getPrototypeOf$2(o), _possibleConstructorReturn$2(t, _isNativeReflectConstruct$2() ? Reflect.construct(o, e || [], _getPrototypeOf$2(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$a(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$2(self); }
function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct$2() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }
function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$2(subClass, superClass); }
function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }
transaction_call_builder.TransactionCallBuilder = function (_CallBuilder) {
  function TransactionCallBuilder(serverUrl) {
    var _this;
    _classCallCheck$6(this, TransactionCallBuilder);
    _this = _callSuper$2(this, TransactionCallBuilder, [serverUrl, "transactions"]);
    _this.url.segment("transactions");
    return _this;
  }
  _inherits$2(TransactionCallBuilder, _CallBuilder);
  return _createClass$6(TransactionCallBuilder, [{
    key: "transaction",
    value: function transaction(transactionId) {
      var builder = new _call_builder$1.CallBuilder(this.url.clone());
      builder.filter.push([transactionId]);
      return builder;
    }
  }, {
    key: "forAccount",
    value: function forAccount(accountId) {
      return this.forEndpoint("accounts", accountId);
    }
  }, {
    key: "forClaimableBalance",
    value: function forClaimableBalance(claimableBalanceId) {
      return this.forEndpoint("claimable_balances", claimableBalanceId);
    }
  }, {
    key: "forLedger",
    value: function forLedger(sequence) {
      return this.forEndpoint("ledgers", sequence.toString());
    }
  }, {
    key: "forLiquidityPool",
    value: function forLiquidityPool(poolId) {
      return this.forEndpoint("liquidity_pools", poolId);
    }
  }, {
    key: "includeFailed",
    value: function includeFailed(value) {
      this.url.setQuery("include_failed", value.toString());
      return this;
    }
  }]);
}(_call_builder$1.CallBuilder);

Object.defineProperty(server$1, "__esModule", {
  value: true
});
server$1.Server = server$1.SUBMIT_TRANSACTION_TIMEOUT = void 0;
var _bignumber = _interopRequireDefault$3(require$$0$2);
var _stellarBase$3 = require$$1$2;
var _urijs$1 = _interopRequireDefault$3(require$$2);
var _call_builder = call_builder;
var _config = config$1;
var _errors = errors$1;
var _account_call_builder = account_call_builder;
var _account_response = account_response;
var _assets_call_builder = assets_call_builder;
var _claimable_balances_call_builder = claimable_balances_call_builder;
var _effect_call_builder = effect_call_builder;
var _friendbot_builder = friendbot_builder;
var _ledger_call_builder = ledger_call_builder;
var _liquidity_pool_call_builder = liquidity_pool_call_builder;
var _offer_call_builder = offer_call_builder;
var _operation_call_builder = operation_call_builder;
var _orderbook_call_builder = orderbook_call_builder;
var _payment_call_builder = payment_call_builder;
var _strict_receive_path_call_builder = strict_receive_path_call_builder;
var _strict_send_path_call_builder = strict_send_path_call_builder;
var _trade_aggregation_call_builder = trade_aggregation_call_builder;
var _trades_call_builder = trades_call_builder;
var _transaction_call_builder = transaction_call_builder;
var _horizon_axios_client = _interopRequireWildcard$1(horizon_axios_client);
function _getRequireWildcardCache$1(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache$1 = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard$1(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof$9(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache$1(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault$3(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof$9(o) { "@babel/helpers - typeof"; return _typeof$9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$9(o); }
function _regeneratorRuntime$7() { _regeneratorRuntime$7 = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof$9(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof$9(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep$7(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator$7(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep$7(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep$7(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$6(descriptor.key), descriptor); } }
function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$6(t) { var i = _toPrimitive$6(t, "string"); return "symbol" == _typeof$9(i) ? i : i + ""; }
function _toPrimitive$6(t, r) { if ("object" != _typeof$9(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$9(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SUBMIT_TRANSACTION_TIMEOUT = server$1.SUBMIT_TRANSACTION_TIMEOUT = 60 * 1000;
var STROOPS_IN_LUMEN = 10000000;
var ACCOUNT_REQUIRES_MEMO = "MQ==";
function _getAmountInLumens(amt) {
  return new _bignumber.default(amt).div(STROOPS_IN_LUMEN).toString();
}
server$1.Server = function () {
  function Server(serverURL) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck$5(this, Server);
    this.serverURL = (0, _urijs$1.default)(serverURL);
    var allowHttp = typeof opts.allowHttp === "undefined" ? _config.Config.isAllowHttp() : opts.allowHttp;
    var customHeaders = {};
    if (opts.appName) {
      customHeaders["X-App-Name"] = opts.appName;
    }
    if (opts.appVersion) {
      customHeaders["X-App-Version"] = opts.appVersion;
    }
    if (opts.authToken) {
      customHeaders["X-Auth-Token"] = opts.authToken;
    }
    if (Object.keys(customHeaders).length > 0) {
      _horizon_axios_client.default.interceptors.request.use(function (config) {
        config.headers = Object.assign(config.headers, customHeaders);
        return config;
      });
    }
    if (this.serverURL.protocol() !== "https" && !allowHttp) {
      throw new Error("Cannot connect to insecure horizon server");
    }
  }
  return _createClass$5(Server, [{
    key: "fetchTimebounds",
    value: (function () {
      var _fetchTimebounds = _asyncToGenerator$7(_regeneratorRuntime$7().mark(function _callee(seconds) {
        var _isRetry,
          currentTime,
          _args = arguments;
        return _regeneratorRuntime$7().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _isRetry = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
              currentTime = (0, _horizon_axios_client.getCurrentServerTime)(this.serverURL.hostname());
              if (!currentTime) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return", {
                minTime: 0,
                maxTime: currentTime + seconds
              });
            case 4:
              if (!_isRetry) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return", {
                minTime: 0,
                maxTime: Math.floor(new Date().getTime() / 1000) + seconds
              });
            case 6:
              _context.next = 8;
              return _horizon_axios_client.default.get((0, _urijs$1.default)(this.serverURL).toString());
            case 8:
              _context.next = 10;
              return this.fetchTimebounds(seconds, true);
            case 10:
              return _context.abrupt("return", _context.sent);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function fetchTimebounds(_x) {
        return _fetchTimebounds.apply(this, arguments);
      }
      return fetchTimebounds;
    }())
  }, {
    key: "fetchBaseFee",
    value: (function () {
      var _fetchBaseFee = _asyncToGenerator$7(_regeneratorRuntime$7().mark(function _callee2() {
        var response;
        return _regeneratorRuntime$7().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.feeStats();
            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", parseInt(response.last_ledger_base_fee, 10) || 100);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function fetchBaseFee() {
        return _fetchBaseFee.apply(this, arguments);
      }
      return fetchBaseFee;
    }())
  }, {
    key: "feeStats",
    value: (function () {
      var _feeStats = _asyncToGenerator$7(_regeneratorRuntime$7().mark(function _callee3() {
        var cb;
        return _regeneratorRuntime$7().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              cb = new _call_builder.CallBuilder((0, _urijs$1.default)(this.serverURL));
              cb.filter.push(["fee_stats"]);
              return _context3.abrupt("return", cb.call());
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function feeStats() {
        return _feeStats.apply(this, arguments);
      }
      return feeStats;
    }())
  }, {
    key: "submitTransaction",
    value: (function () {
      var _submitTransaction = _asyncToGenerator$7(_regeneratorRuntime$7().mark(function _callee4(transaction) {
        var opts,
          tx,
          _args4 = arguments;
        return _regeneratorRuntime$7().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              opts = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {
                skipMemoRequiredCheck: false
              };
              if (opts.skipMemoRequiredCheck) {
                _context4.next = 4;
                break;
              }
              _context4.next = 4;
              return this.checkMemoRequired(transaction);
            case 4:
              tx = encodeURIComponent(transaction.toEnvelope().toXDR().toString("base64"));
              return _context4.abrupt("return", _horizon_axios_client.default.post((0, _urijs$1.default)(this.serverURL).segment("transactions").toString(), "tx=".concat(tx), {
                timeout: SUBMIT_TRANSACTION_TIMEOUT
              }).then(function (response) {
                if (!response.data.result_xdr) {
                  return response.data;
                }
                var responseXDR = _stellarBase$3.xdr.TransactionResult.fromXDR(response.data.result_xdr, "base64");
                var results = responseXDR.result().value();
                var offerResults;
                var hasManageOffer;
                if (results.length) {
                  offerResults = results.map(function (result, i) {
                    if (result.value().switch().name !== "manageBuyOffer" && result.value().switch().name !== "manageSellOffer") {
                      return null;
                    }
                    hasManageOffer = true;
                    var amountBought = new _bignumber.default(0);
                    var amountSold = new _bignumber.default(0);
                    var offerSuccess = result.value().value().success();
                    var offersClaimed = offerSuccess.offersClaimed().map(function (offerClaimedAtom) {
                      var offerClaimed = offerClaimedAtom.value();
                      var sellerId = "";
                      switch (offerClaimedAtom.switch()) {
                        case _stellarBase$3.xdr.ClaimAtomType.claimAtomTypeV0():
                          sellerId = _stellarBase$3.StrKey.encodeEd25519PublicKey(offerClaimed.sellerEd25519());
                          break;
                        case _stellarBase$3.xdr.ClaimAtomType.claimAtomTypeOrderBook():
                          sellerId = _stellarBase$3.StrKey.encodeEd25519PublicKey(offerClaimed.sellerId().ed25519());
                          break;
                        default:
                          throw new Error("Invalid offer result type: " + offerClaimedAtom.switch());
                      }
                      var claimedOfferAmountBought = new _bignumber.default(offerClaimed.amountBought().toString());
                      var claimedOfferAmountSold = new _bignumber.default(offerClaimed.amountSold().toString());
                      amountBought = amountBought.plus(claimedOfferAmountSold);
                      amountSold = amountSold.plus(claimedOfferAmountBought);
                      var sold = _stellarBase$3.Asset.fromOperation(offerClaimed.assetSold());
                      var bought = _stellarBase$3.Asset.fromOperation(offerClaimed.assetBought());
                      var assetSold = {
                        type: sold.getAssetType(),
                        assetCode: sold.getCode(),
                        issuer: sold.getIssuer()
                      };
                      var assetBought = {
                        type: bought.getAssetType(),
                        assetCode: bought.getCode(),
                        issuer: bought.getIssuer()
                      };
                      return {
                        sellerId: sellerId,
                        offerId: offerClaimed.offerId().toString(),
                        assetSold: assetSold,
                        amountSold: _getAmountInLumens(claimedOfferAmountSold),
                        assetBought: assetBought,
                        amountBought: _getAmountInLumens(claimedOfferAmountBought)
                      };
                    });
                    var effect = offerSuccess.offer().switch().name;
                    var currentOffer;
                    if (typeof offerSuccess.offer().value === "function" && offerSuccess.offer().value()) {
                      var offerXDR = offerSuccess.offer().value();
                      currentOffer = {
                        offerId: offerXDR.offerId().toString(),
                        selling: {},
                        buying: {},
                        amount: _getAmountInLumens(offerXDR.amount().toString()),
                        price: {
                          n: offerXDR.price().n(),
                          d: offerXDR.price().d()
                        }
                      };
                      var selling = _stellarBase$3.Asset.fromOperation(offerXDR.selling());
                      currentOffer.selling = {
                        type: selling.getAssetType(),
                        assetCode: selling.getCode(),
                        issuer: selling.getIssuer()
                      };
                      var buying = _stellarBase$3.Asset.fromOperation(offerXDR.buying());
                      currentOffer.buying = {
                        type: buying.getAssetType(),
                        assetCode: buying.getCode(),
                        issuer: buying.getIssuer()
                      };
                    }
                    return {
                      offersClaimed: offersClaimed,
                      effect: effect,
                      operationIndex: i,
                      currentOffer: currentOffer,
                      amountBought: _getAmountInLumens(amountBought),
                      amountSold: _getAmountInLumens(amountSold),
                      isFullyOpen: !offersClaimed.length && effect !== "manageOfferDeleted",
                      wasPartiallyFilled: !!offersClaimed.length && effect !== "manageOfferDeleted",
                      wasImmediatelyFilled: !!offersClaimed.length && effect === "manageOfferDeleted",
                      wasImmediatelyDeleted: !offersClaimed.length && effect === "manageOfferDeleted"
                    };
                  }).filter(function (result) {
                    return !!result;
                  });
                }
                return Object.assign({}, response.data, {
                  offerResults: hasManageOffer ? offerResults : undefined
                });
              }).catch(function (response) {
                if (response instanceof Error) {
                  return Promise.reject(response);
                }
                return Promise.reject(new _errors.BadResponseError("Transaction submission failed. Server responded: ".concat(response.status, " ").concat(response.statusText), response.data));
              }));
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function submitTransaction(_x2) {
        return _submitTransaction.apply(this, arguments);
      }
      return submitTransaction;
    }())
  }, {
    key: "accounts",
    value: function accounts() {
      return new _account_call_builder.AccountCallBuilder((0, _urijs$1.default)(this.serverURL));
    }
  }, {
    key: "claimableBalances",
    value: function claimableBalances() {
      return new _claimable_balances_call_builder.ClaimableBalanceCallBuilder((0, _urijs$1.default)(this.serverURL));
    }
  }, {
    key: "ledgers",
    value: function ledgers() {
      return new _ledger_call_builder.LedgerCallBuilder((0, _urijs$1.default)(this.serverURL));
    }
  }, {
    key: "transactions",
    value: function transactions() {
      return new _transaction_call_builder.TransactionCallBuilder((0, _urijs$1.default)(this.serverURL));
    }
  }, {
    key: "offers",
    value: function offers() {
      return new _offer_call_builder.OfferCallBuilder((0, _urijs$1.default)(this.serverURL));
    }
  }, {
    key: "orderbook",
    value: function orderbook(selling, buying) {
      return new _orderbook_call_builder.OrderbookCallBuilder((0, _urijs$1.default)(this.serverURL), selling, buying);
    }
  }, {
    key: "trades",
    value: function trades() {
      return new _trades_call_builder.TradesCallBuilder((0, _urijs$1.default)(this.serverURL));
    }
  }, {
    key: "operations",
    value: function operations() {
      return new _operation_call_builder.OperationCallBuilder((0, _urijs$1.default)(this.serverURL));
    }
  }, {
    key: "liquidityPools",
    value: function liquidityPools() {
      return new _liquidity_pool_call_builder.LiquidityPoolCallBuilder((0, _urijs$1.default)(this.serverURL));
    }
  }, {
    key: "strictReceivePaths",
    value: function strictReceivePaths(source, destinationAsset, destinationAmount) {
      return new _strict_receive_path_call_builder.StrictReceivePathCallBuilder((0, _urijs$1.default)(this.serverURL), source, destinationAsset, destinationAmount);
    }
  }, {
    key: "strictSendPaths",
    value: function strictSendPaths(sourceAsset, sourceAmount, destination) {
      return new _strict_send_path_call_builder.StrictSendPathCallBuilder((0, _urijs$1.default)(this.serverURL), sourceAsset, sourceAmount, destination);
    }
  }, {
    key: "payments",
    value: function payments() {
      return new _payment_call_builder.PaymentCallBuilder((0, _urijs$1.default)(this.serverURL));
    }
  }, {
    key: "effects",
    value: function effects() {
      return new _effect_call_builder.EffectCallBuilder((0, _urijs$1.default)(this.serverURL));
    }
  }, {
    key: "friendbot",
    value: function friendbot(address) {
      return new _friendbot_builder.FriendbotBuilder((0, _urijs$1.default)(this.serverURL), address);
    }
  }, {
    key: "assets",
    value: function assets() {
      return new _assets_call_builder.AssetsCallBuilder((0, _urijs$1.default)(this.serverURL));
    }
  }, {
    key: "loadAccount",
    value: (function () {
      var _loadAccount = _asyncToGenerator$7(_regeneratorRuntime$7().mark(function _callee5(accountId) {
        var res;
        return _regeneratorRuntime$7().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.accounts().accountId(accountId).call();
            case 2:
              res = _context5.sent;
              return _context5.abrupt("return", new _account_response.AccountResponse(res));
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function loadAccount(_x3) {
        return _loadAccount.apply(this, arguments);
      }
      return loadAccount;
    }())
  }, {
    key: "tradeAggregation",
    value: function tradeAggregation(base, counter, start_time, end_time, resolution, offset) {
      return new _trade_aggregation_call_builder.TradeAggregationCallBuilder((0, _urijs$1.default)(this.serverURL), base, counter, start_time, end_time, resolution, offset);
    }
  }, {
    key: "checkMemoRequired",
    value: (function () {
      var _checkMemoRequired = _asyncToGenerator$7(_regeneratorRuntime$7().mark(function _callee6(transaction) {
        var destinations, i, operation, destination, account;
        return _regeneratorRuntime$7().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (transaction instanceof _stellarBase$3.FeeBumpTransaction) {
                transaction = transaction.innerTransaction;
              }
              if (!(transaction.memo.type !== "none")) {
                _context6.next = 3;
                break;
              }
              return _context6.abrupt("return");
            case 3:
              destinations = new Set();
              i = 0;
            case 5:
              if (!(i < transaction.operations.length)) {
                _context6.next = 36;
                break;
              }
              operation = transaction.operations[i];
              _context6.t0 = operation.type;
              _context6.next = _context6.t0 === "payment" ? 10 : _context6.t0 === "pathPaymentStrictReceive" ? 10 : _context6.t0 === "pathPaymentStrictSend" ? 10 : _context6.t0 === "accountMerge" ? 10 : 11;
              break;
            case 10:
              return _context6.abrupt("break", 12);
            case 11:
              return _context6.abrupt("continue", 33);
            case 12:
              destination = operation.destination;
              if (!destinations.has(destination)) {
                _context6.next = 15;
                break;
              }
              return _context6.abrupt("continue", 33);
            case 15:
              destinations.add(destination);
              if (!destination.startsWith("M")) {
                _context6.next = 18;
                break;
              }
              return _context6.abrupt("continue", 33);
            case 18:
              _context6.prev = 18;
              _context6.next = 21;
              return this.loadAccount(destination);
            case 21:
              account = _context6.sent;
              if (!(account.data_attr["config.memo_required"] === ACCOUNT_REQUIRES_MEMO)) {
                _context6.next = 24;
                break;
              }
              throw new _errors.AccountRequiresMemoError("account requires memo", destination, i);
            case 24:
              _context6.next = 33;
              break;
            case 26:
              _context6.prev = 26;
              _context6.t1 = _context6["catch"](18);
              if (!(_context6.t1 instanceof _errors.AccountRequiresMemoError)) {
                _context6.next = 30;
                break;
              }
              throw _context6.t1;
            case 30:
              if (_context6.t1 instanceof _errors.NotFoundError) {
                _context6.next = 32;
                break;
              }
              throw _context6.t1;
            case 32:
              return _context6.abrupt("continue", 33);
            case 33:
              i++;
              _context6.next = 5;
              break;
            case 36:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[18, 26]]);
      }));
      function checkMemoRequired(_x4) {
        return _checkMemoRequired.apply(this, arguments);
      }
      return checkMemoRequired;
    }())
  }]);
}();

(function (module, exports) {

	function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _exportNames = {
	  Server: true,
	  AxiosClient: true,
	  SERVER_TIME_MAP: true,
	  getCurrentServerTime: true
	};
	Object.defineProperty(exports, "AxiosClient", {
	  enumerable: true,
	  get: function get() {
	    return _horizon_axios_client.default;
	  }
	});
	Object.defineProperty(exports, "SERVER_TIME_MAP", {
	  enumerable: true,
	  get: function get() {
	    return _horizon_axios_client.SERVER_TIME_MAP;
	  }
	});
	Object.defineProperty(exports, "Server", {
	  enumerable: true,
	  get: function get() {
	    return _server.Server;
	  }
	});
	exports.default = void 0;
	Object.defineProperty(exports, "getCurrentServerTime", {
	  enumerable: true,
	  get: function get() {
	    return _horizon_axios_client.getCurrentServerTime;
	  }
	});
	var _horizon_api = horizon_api;
	Object.keys(_horizon_api).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
	  if (key in exports && exports[key] === _horizon_api[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _horizon_api[key];
	    }
	  });
	});
	var _server_api = server_api;
	Object.keys(_server_api).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
	  if (key in exports && exports[key] === _server_api[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _server_api[key];
	    }
	  });
	});
	var _account_response = account_response;
	Object.keys(_account_response).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
	  if (key in exports && exports[key] === _account_response[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _account_response[key];
	    }
	  });
	});
	var _server = server$1;
	var _horizon_axios_client = _interopRequireWildcard(horizon_axios_client);
	function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
	function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
	exports.default = module.exports; 
} (horizon, horizon.exports));

var horizonExports = horizon.exports;

var soroban = {exports: {}};

var api = {};

Object.defineProperty(api, "__esModule", {
  value: true
});
api.Api = void 0;
var Api;
(function (_Api) {
  var GetTransactionStatus = function (GetTransactionStatus) {
    GetTransactionStatus["SUCCESS"] = "SUCCESS";
    GetTransactionStatus["NOT_FOUND"] = "NOT_FOUND";
    GetTransactionStatus["FAILED"] = "FAILED";
    return GetTransactionStatus;
  }({});
  _Api.GetTransactionStatus = GetTransactionStatus;
  function isSimulationError(sim) {
    return 'error' in sim;
  }
  _Api.isSimulationError = isSimulationError;
  function isSimulationSuccess(sim) {
    return 'transactionData' in sim;
  }
  _Api.isSimulationSuccess = isSimulationSuccess;
  function isSimulationRestore(sim) {
    return isSimulationSuccess(sim) && 'restorePreamble' in sim && !!sim.restorePreamble.transactionData;
  }
  _Api.isSimulationRestore = isSimulationRestore;
  function isSimulationRaw(sim) {
    return !sim._parsed;
  }
  _Api.isSimulationRaw = isSimulationRaw;
})(Api || (api.Api = Api = {}));

var server = {};

var axios = {};

Object.defineProperty(axios, "__esModule", {
  value: true
});
axios.version = axios.default = axios.AxiosClient = void 0;
var _axios$2 = _interopRequireDefault$2(require$$0);
function _interopRequireDefault$2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var version = axios.version = require$$1.version;
var AxiosClient = axios.AxiosClient = _axios$2.default.create({
  headers: {
    'X-Client-Name': 'js-soroban-client',
    'X-Client-Version': version
  }
});
axios.default = AxiosClient;

var jsonrpc$1 = {};

Object.defineProperty(jsonrpc$1, "__esModule", {
  value: true
});
jsonrpc$1.postObject = postObject;
var _axios$1 = _interopRequireDefault$1(axios);
function _interopRequireDefault$1(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof$8(o) { "@babel/helpers - typeof"; return _typeof$8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$8(o); }
function _regeneratorRuntime$6() { _regeneratorRuntime$6 = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof$8(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof$8(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep$6(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator$6(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep$6(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep$6(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function postObject(_x, _x2) {
  return _postObject.apply(this, arguments);
}
function _postObject() {
  _postObject = _asyncToGenerator$6(_regeneratorRuntime$6().mark(function _callee(url, method) {
    var param,
      response,
      _response$data,
      _args = arguments;
    return _regeneratorRuntime$6().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          param = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
          _context.next = 3;
          return _axios$1.default.post(url, {
            jsonrpc: "2.0",
            id: 1,
            method: method,
            params: param
          });
        case 3:
          response = _context.sent;
          if (!hasOwnProperty(response.data, "error")) {
            _context.next = 8;
            break;
          }
          throw response.data.error;
        case 8:
          return _context.abrupt("return", (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.result);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _postObject.apply(this, arguments);
}
function hasOwnProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}

var transaction = {};

var parsers = {};

Object.defineProperty(parsers, "__esModule", {
  value: true
});
parsers.parseRawEvents = parseRawEvents;
parsers.parseRawLedgerEntries = parseRawLedgerEntries;
parsers.parseRawSendTransaction = parseRawSendTransaction;
parsers.parseRawSimulation = parseRawSimulation;
var _stellarBase$2 = require$$1$2;
var _api$2 = api;
function _typeof$7(o) { "@babel/helpers - typeof"; return _typeof$7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$7(o); }
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty$4(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$4(obj, key, value) { key = _toPropertyKey$5(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$5(t) { var i = _toPrimitive$5(t, "string"); return "symbol" == _typeof$7(i) ? i : i + ""; }
function _toPrimitive$5(t, r) { if ("object" != _typeof$7(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$7(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function parseRawSendTransaction(r) {
  var errorResultXdr = r.errorResultXdr,
    diagnosticEventsXdr = r.diagnosticEventsXdr;
  delete r.errorResultXdr;
  delete r.diagnosticEventsXdr;
  if (!!errorResultXdr) {
    return _objectSpread$2(_objectSpread$2(_objectSpread$2({}, r), diagnosticEventsXdr !== undefined && diagnosticEventsXdr.length > 0 && {
      diagnosticEvents: diagnosticEventsXdr.map(function (evt) {
        return _stellarBase$2.xdr.DiagnosticEvent.fromXDR(evt, 'base64');
      })
    }), {}, {
      errorResult: _stellarBase$2.xdr.TransactionResult.fromXDR(errorResultXdr, 'base64')
    });
  }
  return _objectSpread$2({}, r);
}
function parseRawEvents(r) {
  var _r$events;
  return {
    latestLedger: r.latestLedger,
    events: ((_r$events = r.events) !== null && _r$events !== void 0 ? _r$events : []).map(function (evt) {
      var clone = _objectSpread$2({}, evt);
      delete clone.contractId;
      return _objectSpread$2(_objectSpread$2(_objectSpread$2({}, clone), evt.contractId !== '' && {
        contractId: new _stellarBase$2.Contract(evt.contractId)
      }), {}, {
        topic: evt.topic.map(function (topic) {
          return _stellarBase$2.xdr.ScVal.fromXDR(topic, 'base64');
        }),
        value: _stellarBase$2.xdr.ScVal.fromXDR(evt.value, 'base64')
      });
    })
  };
}
function parseRawLedgerEntries(raw) {
  var _raw$entries;
  return {
    latestLedger: raw.latestLedger,
    entries: ((_raw$entries = raw.entries) !== null && _raw$entries !== void 0 ? _raw$entries : []).map(function (rawEntry) {
      if (!rawEntry.key || !rawEntry.xdr) {
        throw new TypeError("invalid ledger entry: ".concat(JSON.stringify(rawEntry)));
      }
      return _objectSpread$2({
        lastModifiedLedgerSeq: rawEntry.lastModifiedLedgerSeq,
        key: _stellarBase$2.xdr.LedgerKey.fromXDR(rawEntry.key, 'base64'),
        val: _stellarBase$2.xdr.LedgerEntryData.fromXDR(rawEntry.xdr, 'base64')
      }, rawEntry.liveUntilLedgerSeq !== undefined && {
        liveUntilLedgerSeq: rawEntry.liveUntilLedgerSeq
      });
    })
  };
}
function parseRawSimulation(sim) {
  var _sim$events$map, _sim$events;
  var looksRaw = _api$2.Api.isSimulationRaw(sim);
  if (!looksRaw) {
    return sim;
  }
  var base = {
    _parsed: true,
    id: sim.id,
    latestLedger: sim.latestLedger,
    events: (_sim$events$map = (_sim$events = sim.events) === null || _sim$events === void 0 ? void 0 : _sim$events.map(function (evt) {
      return _stellarBase$2.xdr.DiagnosticEvent.fromXDR(evt, 'base64');
    })) !== null && _sim$events$map !== void 0 ? _sim$events$map : []
  };
  if (typeof sim.error === 'string') {
    return _objectSpread$2(_objectSpread$2({}, base), {}, {
      error: sim.error
    });
  }
  return parseSuccessful(sim, base);
}
function parseSuccessful(sim, partial) {
  var _sim$results$length, _sim$results;
  var success = _objectSpread$2(_objectSpread$2({}, partial), {}, {
    transactionData: new _stellarBase$2.SorobanDataBuilder(sim.transactionData),
    minResourceFee: sim.minResourceFee,
    cost: sim.cost
  }, ((_sim$results$length = (_sim$results = sim.results) === null || _sim$results === void 0 ? void 0 : _sim$results.length) !== null && _sim$results$length !== void 0 ? _sim$results$length : 0 > 0) && {
    result: sim.results.map(function (row) {
      var _row$auth;
      return {
        auth: ((_row$auth = row.auth) !== null && _row$auth !== void 0 ? _row$auth : []).map(function (entry) {
          return _stellarBase$2.xdr.SorobanAuthorizationEntry.fromXDR(entry, 'base64');
        }),
        retval: !!row.xdr ? _stellarBase$2.xdr.ScVal.fromXDR(row.xdr, 'base64') : _stellarBase$2.xdr.ScVal.scvVoid()
      };
    })[0]
  });
  if (!sim.restorePreamble || sim.restorePreamble.transactionData === '') {
    return success;
  }
  return _objectSpread$2(_objectSpread$2({}, success), {}, {
    restorePreamble: {
      minResourceFee: sim.restorePreamble.minResourceFee,
      transactionData: new _stellarBase$2.SorobanDataBuilder(sim.restorePreamble.transactionData)
    }
  });
}

Object.defineProperty(transaction, "__esModule", {
  value: true
});
transaction.assembleTransaction = assembleTransaction;
var _stellarBase$1 = require$$1$2;
var _api$1 = api;
var _parsers$1 = parsers;
function assembleTransaction(raw, simulation) {
  var _invokeOp$auth;
  if ('innerTransaction' in raw) {
    return assembleTransaction(raw.innerTransaction, simulation);
  }
  if (!isSorobanTransaction(raw)) {
    throw new TypeError('unsupported transaction: must contain exactly one ' + 'invokeHostFunction, extendFootprintTtl, or restoreFootprint ' + 'operation');
  }
  var success = (0, _parsers$1.parseRawSimulation)(simulation);
  if (!_api$1.Api.isSimulationSuccess(success)) {
    throw new Error("simulation incorrect: ".concat(JSON.stringify(success)));
  }
  var classicFeeNum = parseInt(raw.fee) || 0;
  var minResourceFeeNum = parseInt(success.minResourceFee) || 0;
  var txnBuilder = _stellarBase$1.TransactionBuilder.cloneFrom(raw, {
    fee: (classicFeeNum + minResourceFeeNum).toString(),
    sorobanData: success.transactionData.build(),
    networkPassphrase: raw.networkPassphrase
  });
  switch (raw.operations[0].type) {
    case 'invokeHostFunction':
      txnBuilder.clearOperations();
      var invokeOp = raw.operations[0];
      var existingAuth = (_invokeOp$auth = invokeOp.auth) !== null && _invokeOp$auth !== void 0 ? _invokeOp$auth : [];
      txnBuilder.addOperation(_stellarBase$1.Operation.invokeHostFunction({
        source: invokeOp.source,
        func: invokeOp.func,
        auth: existingAuth.length > 0 ? existingAuth : success.result.auth
      }));
      break;
  }
  return txnBuilder;
}
function isSorobanTransaction(tx) {
  if (tx.operations.length !== 1) {
    return false;
  }
  switch (tx.operations[0].type) {
    case 'invokeHostFunction':
    case 'extendFootprintTtl':
    case 'restoreFootprint':
      return true;
    default:
      return false;
  }
}

Object.defineProperty(server, "__esModule", {
  value: true
});
server.Server = server.SUBMIT_TRANSACTION_TIMEOUT = server.Durability = void 0;
var _urijs = _interopRequireDefault(require$$2);
var _stellarBase = require$$1$2;
var _axios = _interopRequireDefault(axios);
var jsonrpc = _interopRequireWildcard(jsonrpc$1);
var _api = api;
var _transaction = transaction;
var _parsers = parsers;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof$6(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof$6(o) { "@babel/helpers - typeof"; return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$6(o); }
function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }
function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty$3(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$3(obj, key, value) { key = _toPropertyKey$4(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime$5() { _regeneratorRuntime$5 = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof$6(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof$6(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator$5(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$4(descriptor.key), descriptor); } }
function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$4(t) { var i = _toPrimitive$4(t, "string"); return "symbol" == _typeof$6(i) ? i : i + ""; }
function _toPrimitive$4(t, r) { if ("object" != _typeof$6(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$6(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
server.SUBMIT_TRANSACTION_TIMEOUT = 60 * 1000;
var Durability = server.Durability = function (Durability) {
  Durability["Temporary"] = "temporary";
  Durability["Persistent"] = "persistent";
  return Durability;
}({});
server.Server = function () {
  function Server(serverURL) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck$4(this, Server);
    this.serverURL = (0, _urijs.default)(serverURL);
    if (opts.headers && Object.keys(opts.headers).length === 0) {
      _axios.default.interceptors.request.use(function (config) {
        config.headers = Object.assign(config.headers, opts.headers);
        return config;
      });
    }
    if (this.serverURL.protocol() !== 'https' && !opts.allowHttp) {
      throw new Error("Cannot connect to insecure Soroban RPC server if `allowHttp` isn't set");
    }
  }
  return _createClass$4(Server, [{
    key: "getAccount",
    value: (function () {
      var _getAccount = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee(address) {
        var ledgerKey, resp, accountEntry;
        return _regeneratorRuntime$5().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              ledgerKey = _stellarBase.xdr.LedgerKey.account(new _stellarBase.xdr.LedgerKeyAccount({
                accountId: _stellarBase.Keypair.fromPublicKey(address).xdrPublicKey()
              }));
              _context.next = 3;
              return this.getLedgerEntries(ledgerKey);
            case 3:
              resp = _context.sent;
              if (!(resp.entries.length === 0)) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return", Promise.reject({
                code: 404,
                message: "Account not found: ".concat(address)
              }));
            case 6:
              accountEntry = resp.entries[0].val.account();
              return _context.abrupt("return", new _stellarBase.Account(address, accountEntry.seqNum().toString()));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getAccount(_x) {
        return _getAccount.apply(this, arguments);
      }
      return getAccount;
    }())
  }, {
    key: "getHealth",
    value: (function () {
      var _getHealth = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee2() {
        return _regeneratorRuntime$5().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", jsonrpc.postObject(this.serverURL.toString(), 'getHealth'));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getHealth() {
        return _getHealth.apply(this, arguments);
      }
      return getHealth;
    }())
  }, {
    key: "getContractData",
    value: (function () {
      var _getContractData = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee3(contract, key) {
        var durability,
          scAddress,
          xdrDurability,
          contractKey,
          _args3 = arguments;
        return _regeneratorRuntime$5().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              durability = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : Durability.Persistent;
              if (!(typeof contract === 'string')) {
                _context3.next = 5;
                break;
              }
              scAddress = new _stellarBase.Contract(contract).address().toScAddress();
              _context3.next = 14;
              break;
            case 5:
              if (!(contract instanceof _stellarBase.Address)) {
                _context3.next = 9;
                break;
              }
              scAddress = contract.toScAddress();
              _context3.next = 14;
              break;
            case 9:
              if (!(contract instanceof _stellarBase.Contract)) {
                _context3.next = 13;
                break;
              }
              scAddress = contract.address().toScAddress();
              _context3.next = 14;
              break;
            case 13:
              throw new TypeError("unknown contract type: ".concat(contract));
            case 14:
              _context3.t0 = durability;
              _context3.next = _context3.t0 === Durability.Temporary ? 17 : _context3.t0 === Durability.Persistent ? 19 : 21;
              break;
            case 17:
              xdrDurability = _stellarBase.xdr.ContractDataDurability.temporary();
              return _context3.abrupt("break", 22);
            case 19:
              xdrDurability = _stellarBase.xdr.ContractDataDurability.persistent();
              return _context3.abrupt("break", 22);
            case 21:
              throw new TypeError("invalid durability: ".concat(durability));
            case 22:
              contractKey = _stellarBase.xdr.LedgerKey.contractData(new _stellarBase.xdr.LedgerKeyContractData({
                key: key,
                contract: scAddress,
                durability: xdrDurability
              }));
              return _context3.abrupt("return", this.getLedgerEntries(contractKey).then(function (r) {
                if (r.entries.length === 0) {
                  return Promise.reject({
                    code: 404,
                    message: "Contract data not found. Contract: ".concat(_stellarBase.Address.fromScAddress(scAddress).toString(), ", Key: ").concat(key.toXDR('base64'), ", Durability: ").concat(durability)
                  });
                }
                return r.entries[0];
              }));
            case 24:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getContractData(_x2, _x3) {
        return _getContractData.apply(this, arguments);
      }
      return getContractData;
    }())
  }, {
    key: "getLedgerEntries",
    value: (function () {
      var _getLedgerEntries2 = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee4() {
        var _args4 = arguments;
        return _regeneratorRuntime$5().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this._getLedgerEntries.apply(this, _args4).then(_parsers.parseRawLedgerEntries));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getLedgerEntries() {
        return _getLedgerEntries2.apply(this, arguments);
      }
      return getLedgerEntries;
    }())
  }, {
    key: "_getLedgerEntries",
    value: function () {
      var _getLedgerEntries3 = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee5() {
        var _len,
          keys,
          _key,
          _args5 = arguments;
        return _regeneratorRuntime$5().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              for (_len = _args5.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
                keys[_key] = _args5[_key];
              }
              return _context5.abrupt("return", jsonrpc.postObject(this.serverURL.toString(), 'getLedgerEntries', {
                keys: keys.map(function (k) {
                  return k.toXDR('base64');
                })
              }));
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function _getLedgerEntries() {
        return _getLedgerEntries3.apply(this, arguments);
      }
      return _getLedgerEntries;
    }()
  }, {
    key: "getTransaction",
    value: (function () {
      var _getTransaction2 = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee6(hash) {
        return _regeneratorRuntime$5().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this._getTransaction(hash).then(function (raw) {
                var foundInfo = {};
                if (raw.status !== _api.Api.GetTransactionStatus.NOT_FOUND) {
                  var _meta$v3$sorobanMeta;
                  var meta = _stellarBase.xdr.TransactionMeta.fromXDR(raw.resultMetaXdr, 'base64');
                  foundInfo = _objectSpread$1({
                    ledger: raw.ledger,
                    createdAt: raw.createdAt,
                    applicationOrder: raw.applicationOrder,
                    feeBump: raw.feeBump,
                    envelopeXdr: _stellarBase.xdr.TransactionEnvelope.fromXDR(raw.envelopeXdr, 'base64'),
                    resultXdr: _stellarBase.xdr.TransactionResult.fromXDR(raw.resultXdr, 'base64'),
                    resultMetaXdr: meta
                  }, meta.switch() === 3 && meta.v3().sorobanMeta() !== null && raw.status === _api.Api.GetTransactionStatus.SUCCESS && {
                    returnValue: (_meta$v3$sorobanMeta = meta.v3().sorobanMeta()) === null || _meta$v3$sorobanMeta === void 0 ? void 0 : _meta$v3$sorobanMeta.returnValue()
                  });
                }
                var result = _objectSpread$1({
                  status: raw.status,
                  latestLedger: raw.latestLedger,
                  latestLedgerCloseTime: raw.latestLedgerCloseTime,
                  oldestLedger: raw.oldestLedger,
                  oldestLedgerCloseTime: raw.oldestLedgerCloseTime
                }, foundInfo);
                return result;
              }));
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function getTransaction(_x4) {
        return _getTransaction2.apply(this, arguments);
      }
      return getTransaction;
    }())
  }, {
    key: "_getTransaction",
    value: function () {
      var _getTransaction3 = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee7(hash) {
        return _regeneratorRuntime$5().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", jsonrpc.postObject(this.serverURL.toString(), 'getTransaction', {
                hash: hash
              }));
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function _getTransaction(_x5) {
        return _getTransaction3.apply(this, arguments);
      }
      return _getTransaction;
    }()
  }, {
    key: "getEvents",
    value: (function () {
      var _getEvents2 = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee8(request) {
        return _regeneratorRuntime$5().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this._getEvents(request).then(_parsers.parseRawEvents));
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function getEvents(_x6) {
        return _getEvents2.apply(this, arguments);
      }
      return getEvents;
    }())
  }, {
    key: "_getEvents",
    value: function () {
      var _getEvents3 = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee9(request) {
        var _request$filters;
        return _regeneratorRuntime$5().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", jsonrpc.postObject(this.serverURL.toString(), 'getEvents', _objectSpread$1({
                filters: (_request$filters = request.filters) !== null && _request$filters !== void 0 ? _request$filters : [],
                pagination: _objectSpread$1(_objectSpread$1({}, request.cursor && {
                  cursor: request.cursor
                }), request.limit && {
                  limit: request.limit
                })
              }, request.startLedger && {
                startLedger: request.startLedger
              })));
            case 1:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function _getEvents(_x7) {
        return _getEvents3.apply(this, arguments);
      }
      return _getEvents;
    }()
  }, {
    key: "getNetwork",
    value: (function () {
      var _getNetwork = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee10() {
        return _regeneratorRuntime$5().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return jsonrpc.postObject(this.serverURL.toString(), 'getNetwork');
            case 2:
              return _context10.abrupt("return", _context10.sent);
            case 3:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function getNetwork() {
        return _getNetwork.apply(this, arguments);
      }
      return getNetwork;
    }())
  }, {
    key: "getLatestLedger",
    value: (function () {
      var _getLatestLedger = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee11() {
        return _regeneratorRuntime$5().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", jsonrpc.postObject(this.serverURL.toString(), 'getLatestLedger'));
            case 1:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function getLatestLedger() {
        return _getLatestLedger.apply(this, arguments);
      }
      return getLatestLedger;
    }())
  }, {
    key: "simulateTransaction",
    value: (function () {
      var _simulateTransaction2 = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee12(tx, addlResources) {
        return _regeneratorRuntime$5().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt("return", this._simulateTransaction(tx, addlResources).then(_parsers.parseRawSimulation));
            case 1:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function simulateTransaction(_x8, _x9) {
        return _simulateTransaction2.apply(this, arguments);
      }
      return simulateTransaction;
    }())
  }, {
    key: "_simulateTransaction",
    value: function () {
      var _simulateTransaction3 = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee13(transaction, addlResources) {
        return _regeneratorRuntime$5().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt("return", jsonrpc.postObject(this.serverURL.toString(), 'simulateTransaction', _objectSpread$1({
                transaction: transaction.toXDR()
              }, addlResources !== undefined && {
                resourceConfig: {
                  instructionLeeway: addlResources.cpuInstructions
                }
              })));
            case 1:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function _simulateTransaction(_x10, _x11) {
        return _simulateTransaction3.apply(this, arguments);
      }
      return _simulateTransaction;
    }()
  }, {
    key: "prepareTransaction",
    value: (function () {
      var _prepareTransaction = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee14(tx) {
        var simResponse;
        return _regeneratorRuntime$5().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return this.simulateTransaction(tx);
            case 2:
              simResponse = _context14.sent;
              if (!_api.Api.isSimulationError(simResponse)) {
                _context14.next = 5;
                break;
              }
              throw simResponse.error;
            case 5:
              return _context14.abrupt("return", (0, _transaction.assembleTransaction)(tx, simResponse).build());
            case 6:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function prepareTransaction(_x12) {
        return _prepareTransaction.apply(this, arguments);
      }
      return prepareTransaction;
    }())
  }, {
    key: "sendTransaction",
    value: (function () {
      var _sendTransaction2 = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee15(transaction) {
        return _regeneratorRuntime$5().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              return _context15.abrupt("return", this._sendTransaction(transaction).then(_parsers.parseRawSendTransaction));
            case 1:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function sendTransaction(_x13) {
        return _sendTransaction2.apply(this, arguments);
      }
      return sendTransaction;
    }())
  }, {
    key: "_sendTransaction",
    value: function () {
      var _sendTransaction3 = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee16(transaction) {
        return _regeneratorRuntime$5().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", jsonrpc.postObject(this.serverURL.toString(), 'sendTransaction', {
                transaction: transaction.toXDR()
              }));
            case 1:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function _sendTransaction(_x14) {
        return _sendTransaction3.apply(this, arguments);
      }
      return _sendTransaction;
    }()
  }, {
    key: "requestAirdrop",
    value: (function () {
      var _requestAirdrop = _asyncToGenerator$5(_regeneratorRuntime$5().mark(function _callee17(address, friendbotUrl) {
        var account, response, meta, sequence, _error$response, _error$response$detai;
        return _regeneratorRuntime$5().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              account = typeof address === 'string' ? address : address.accountId();
              _context17.t0 = friendbotUrl;
              if (_context17.t0) {
                _context17.next = 6;
                break;
              }
              _context17.next = 5;
              return this.getNetwork();
            case 5:
              _context17.t0 = _context17.sent.friendbotUrl;
            case 6:
              friendbotUrl = _context17.t0;
              if (friendbotUrl) {
                _context17.next = 9;
                break;
              }
              throw new Error('No friendbot URL configured for current network');
            case 9:
              _context17.prev = 9;
              _context17.next = 12;
              return _axios.default.post("".concat(friendbotUrl, "?addr=").concat(encodeURIComponent(account)));
            case 12:
              response = _context17.sent;
              meta = _stellarBase.xdr.TransactionMeta.fromXDR(response.data.result_meta_xdr, 'base64');
              sequence = findCreatedAccountSequenceInTransactionMeta(meta);
              return _context17.abrupt("return", new _stellarBase.Account(account, sequence));
            case 18:
              _context17.prev = 18;
              _context17.t1 = _context17["catch"](9);
              if (!(((_error$response = _context17.t1.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 400)) {
                _context17.next = 23;
                break;
              }
              if (!((_error$response$detai = _context17.t1.response.detail) !== null && _error$response$detai !== void 0 && _error$response$detai.includes('createAccountAlreadyExist'))) {
                _context17.next = 23;
                break;
              }
              return _context17.abrupt("return", this.getAccount(account));
            case 23:
              throw _context17.t1;
            case 24:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this, [[9, 18]]);
      }));
      function requestAirdrop(_x15, _x16) {
        return _requestAirdrop.apply(this, arguments);
      }
      return requestAirdrop;
    }())
  }]);
}();
function findCreatedAccountSequenceInTransactionMeta(meta) {
  var operations = [];
  switch (meta.switch()) {
    case 0:
      operations = meta.operations();
      break;
    case 1:
    case 2:
    case 3:
      operations = meta.value().operations();
      break;
    default:
      throw new Error('Unexpected transaction meta switch value');
  }
  var _iterator = _createForOfIteratorHelper$2(operations),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var op = _step.value;
      var _iterator2 = _createForOfIteratorHelper$2(op.changes()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var c = _step2.value;
          if (c.switch() !== _stellarBase.xdr.LedgerEntryChangeType.ledgerEntryCreated()) {
            continue;
          }
          var data = c.created().data();
          if (data.switch() !== _stellarBase.xdr.LedgerEntryType.account()) {
            continue;
          }
          return data.account().seqNum().toString();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  throw new Error('No account created in transaction');
}

(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _exportNames = {
	  Server: true,
	  Durability: true,
	  AxiosClient: true,
	  parseRawSimulation: true,
	  parseRawEvents: true
	};
	Object.defineProperty(exports, "AxiosClient", {
	  enumerable: true,
	  get: function get() {
	    return _axios.default;
	  }
	});
	Object.defineProperty(exports, "Durability", {
	  enumerable: true,
	  get: function get() {
	    return _server.Durability;
	  }
	});
	Object.defineProperty(exports, "Server", {
	  enumerable: true,
	  get: function get() {
	    return _server.Server;
	  }
	});
	exports.default = void 0;
	Object.defineProperty(exports, "parseRawEvents", {
	  enumerable: true,
	  get: function get() {
	    return _parsers.parseRawEvents;
	  }
	});
	Object.defineProperty(exports, "parseRawSimulation", {
	  enumerable: true,
	  get: function get() {
	    return _parsers.parseRawSimulation;
	  }
	});
	var _api = api;
	Object.keys(_api).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
	  if (key in exports && exports[key] === _api[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _api[key];
	    }
	  });
	});
	var _server = server;
	var _axios = _interopRequireDefault(axios);
	var _parsers = parsers;
	var _transaction = transaction;
	Object.keys(_transaction).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
	  if (key in exports && exports[key] === _transaction[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _transaction[key];
	    }
	  });
	});
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	exports.default = module.exports; 
} (soroban, soroban.exports));

var sorobanExports = soroban.exports;

var contract_spec = {};

var rust_types = {};

var result = {};

Object.defineProperty(result, "__esModule", {
  value: true
});
result.Ok = result.Err = void 0;
function _typeof$5(o) { "@babel/helpers - typeof"; return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$5(o); }
function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$3(descriptor.key), descriptor); } }
function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$3(t) { var i = _toPrimitive$3(t, "string"); return "symbol" == _typeof$5(i) ? i : i + ""; }
function _toPrimitive$3(t, r) { if ("object" != _typeof$5(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$5(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
result.Ok = function () {
  function Ok(value) {
    _classCallCheck$3(this, Ok);
    this.value = value;
  }
  return _createClass$3(Ok, [{
    key: "unwrapErr",
    value: function unwrapErr() {
      throw new Error("No error");
    }
  }, {
    key: "unwrap",
    value: function unwrap() {
      return this.value;
    }
  }, {
    key: "isOk",
    value: function isOk() {
      return true;
    }
  }, {
    key: "isErr",
    value: function isErr() {
      return false;
    }
  }]);
}();
result.Err = function () {
  function Err(error) {
    _classCallCheck$3(this, Err);
    this.error = error;
  }
  return _createClass$3(Err, [{
    key: "unwrapErr",
    value: function unwrapErr() {
      return this.error;
    }
  }, {
    key: "unwrap",
    value: function unwrap() {
      throw new Error(this.error.message);
    }
  }, {
    key: "isOk",
    value: function isOk() {
      return false;
    }
  }, {
    key: "isErr",
    value: function isErr() {
      return true;
    }
  }]);
}();

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _result = result;
	Object.keys(_result).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _result[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _result[key];
	    }
	  });
	}); 
} (rust_types));

var hasRequiredContract_spec;

function requireContract_spec () {
	if (hasRequiredContract_spec) return contract_spec;
	hasRequiredContract_spec = 1;

	Object.defineProperty(contract_spec, "__esModule", {
	  value: true
	});
	contract_spec.ContractSpec = void 0;
	var _2 = requireLib();
	var _rust_types = rust_types;
	function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
	function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
	function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
	function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
	function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
	function readObj(args, input) {
	  var inputName = input.name().toString();
	  var entry = Object.entries(args).find(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	      name = _ref2[0];
	      _ref2[1];
	    return name === inputName;
	  });
	  if (!entry) {
	    throw new Error("Missing field ".concat(inputName));
	  }
	  return entry[1];
	}
	contract_spec.ContractSpec = function () {
	  function ContractSpec(entries) {
	    _classCallCheck(this, ContractSpec);
	    _defineProperty(this, "entries", []);
	    if (entries.length == 0) {
	      throw new Error("Contract spec must have at least one entry");
	    }
	    var entry = entries[0];
	    if (typeof entry === "string") {
	      this.entries = entries.map(function (s) {
	        return _2.xdr.ScSpecEntry.fromXDR(s, "base64");
	      });
	    } else {
	      this.entries = entries;
	    }
	  }
	  return _createClass(ContractSpec, [{
	    key: "funcs",
	    value: function funcs() {
	      return this.entries.filter(function (entry) {
	        return entry.switch().value === _2.xdr.ScSpecEntryKind.scSpecEntryFunctionV0().value;
	      }).map(function (entry) {
	        return entry.functionV0();
	      });
	    }
	  }, {
	    key: "getFunc",
	    value: function getFunc(name) {
	      var entry = this.findEntry(name);
	      if (entry.switch().value !== _2.xdr.ScSpecEntryKind.scSpecEntryFunctionV0().value) {
	        throw new Error("".concat(name, " is not a function"));
	      }
	      return entry.functionV0();
	    }
	  }, {
	    key: "funcArgsToScVals",
	    value: function funcArgsToScVals(name, args) {
	      var _this = this;
	      var fn = this.getFunc(name);
	      return fn.inputs().map(function (input) {
	        return _this.nativeToScVal(readObj(args, input), input.type());
	      });
	    }
	  }, {
	    key: "funcResToNative",
	    value: function funcResToNative(name, val_or_base64) {
	      var val = typeof val_or_base64 === "string" ? _2.xdr.ScVal.fromXDR(val_or_base64, "base64") : val_or_base64;
	      var func = this.getFunc(name);
	      var outputs = func.outputs();
	      if (outputs.length === 0) {
	        var type = val.switch();
	        if (type.value !== _2.xdr.ScValType.scvVoid().value) {
	          throw new Error("Expected void, got ".concat(type.name));
	        }
	        return null;
	      }
	      if (outputs.length > 1) {
	        throw new Error("Multiple outputs not supported");
	      }
	      var output = outputs[0];
	      if (output.switch().value === _2.xdr.ScSpecType.scSpecTypeResult().value) {
	        return new _rust_types.Ok(this.scValToNative(val, output.result().okType()));
	      }
	      return this.scValToNative(val, output);
	    }
	  }, {
	    key: "findEntry",
	    value: function findEntry(name) {
	      var entry = this.entries.find(function (entry) {
	        return entry.value().name().toString() === name;
	      });
	      if (!entry) {
	        throw new Error("no such entry: ".concat(name));
	      }
	      return entry;
	    }
	  }, {
	    key: "nativeToScVal",
	    value: function nativeToScVal(val, ty) {
	      var _this2 = this;
	      var t = ty.switch();
	      var value = t.value;
	      if (t.value === _2.xdr.ScSpecType.scSpecTypeUdt().value) {
	        var udt = ty.udt();
	        return this.nativeToUdt(val, udt.name().toString());
	      }
	      if (value === _2.xdr.ScSpecType.scSpecTypeOption().value) {
	        var opt = ty.option();
	        if (val === undefined) {
	          return _2.xdr.ScVal.scvVoid();
	        }
	        return this.nativeToScVal(val, opt.valueType());
	      }
	      switch (_typeof(val)) {
	        case "object":
	          {
	            var _val$constructor$name, _val$constructor;
	            if (val === null) {
	              switch (value) {
	                case _2.xdr.ScSpecType.scSpecTypeVoid().value:
	                  return _2.xdr.ScVal.scvVoid();
	                default:
	                  throw new TypeError("Type ".concat(ty, " was not void, but value was null"));
	              }
	            }
	            if (val instanceof _2.xdr.ScVal) {
	              return val;
	            }
	            if (val instanceof _2.Address) {
	              if (ty.switch().value !== _2.xdr.ScSpecType.scSpecTypeAddress().value) {
	                throw new TypeError("Type ".concat(ty, " was not address, but value was Address"));
	              }
	              return val.toScVal();
	            }
	            if (val instanceof _2.Contract) {
	              if (ty.switch().value !== _2.xdr.ScSpecType.scSpecTypeAddress().value) {
	                throw new TypeError("Type ".concat(ty, " was not address, but value was Address"));
	              }
	              return val.address().toScVal();
	            }
	            if (val instanceof Uint8Array || Buffer.isBuffer(val)) {
	              var copy = Uint8Array.from(val);
	              switch (value) {
	                case _2.xdr.ScSpecType.scSpecTypeBytesN().value:
	                  {
	                    var bytes_n = ty.bytesN();
	                    if (copy.length !== bytes_n.n()) {
	                      throw new TypeError("expected ".concat(bytes_n.n(), " bytes, but got ").concat(copy.length));
	                    }
	                    return _2.xdr.ScVal.scvBytes(copy);
	                  }
	                case _2.xdr.ScSpecType.scSpecTypeBytes().value:
	                  return _2.xdr.ScVal.scvBytes(copy);
	                default:
	                  throw new TypeError("invalid type (".concat(ty, ") specified for Bytes and BytesN"));
	              }
	            }
	            if (Array.isArray(val)) {
	              switch (value) {
	                case _2.xdr.ScSpecType.scSpecTypeVec().value:
	                  {
	                    var vec = ty.vec();
	                    var elementType = vec.elementType();
	                    return _2.xdr.ScVal.scvVec(val.map(function (v) {
	                      return _this2.nativeToScVal(v, elementType);
	                    }));
	                  }
	                case _2.xdr.ScSpecType.scSpecTypeTuple().value:
	                  {
	                    var tup = ty.tuple();
	                    var valTypes = tup.valueTypes();
	                    if (val.length !== valTypes.length) {
	                      throw new TypeError("Tuple expects ".concat(valTypes.length, " values, but ").concat(val.length, " were provided"));
	                    }
	                    return _2.xdr.ScVal.scvVec(val.map(function (v, i) {
	                      return _this2.nativeToScVal(v, valTypes[i]);
	                    }));
	                  }
	                case _2.xdr.ScSpecType.scSpecTypeMap().value:
	                  {
	                    var map = ty.map();
	                    var keyType = map.keyType();
	                    var valueType = map.valueType();
	                    return _2.xdr.ScVal.scvMap(val.map(function (entry) {
	                      var key = _this2.nativeToScVal(entry[0], keyType);
	                      var val = _this2.nativeToScVal(entry[1], valueType);
	                      return new _2.xdr.ScMapEntry({
	                        key: key,
	                        val: val
	                      });
	                    }));
	                  }
	                default:
	                  throw new TypeError("Type ".concat(ty, " was not vec, but value was Array"));
	              }
	            }
	            if (val.constructor === Map) {
	              if (value !== _2.xdr.ScSpecType.scSpecTypeMap().value) {
	                throw new TypeError("Type ".concat(ty, " was not map, but value was Map"));
	              }
	              var scMap = ty.map();
	              var _map = val;
	              var entries = [];
	              var values = _map.entries();
	              var res = values.next();
	              while (!res.done) {
	                var _res$value = _slicedToArray(res.value, 2),
	                  k = _res$value[0],
	                  v = _res$value[1];
	                var _key = this.nativeToScVal(k, scMap.keyType());
	                var _val = this.nativeToScVal(v, scMap.valueType());
	                entries.push(new _2.xdr.ScMapEntry({
	                  key: _key,
	                  val: _val
	                }));
	                res = values.next();
	              }
	              return _2.xdr.ScVal.scvMap(entries);
	            }
	            if (((_val$constructor$name = (_val$constructor = val.constructor) === null || _val$constructor === void 0 ? void 0 : _val$constructor.name) !== null && _val$constructor$name !== void 0 ? _val$constructor$name : "") !== "Object") {
	              var _val$constructor2;
	              throw new TypeError("cannot interpret ".concat((_val$constructor2 = val.constructor) === null || _val$constructor2 === void 0 ? void 0 : _val$constructor2.name, " value as ScVal (").concat(JSON.stringify(val), ")"));
	            }
	            throw new TypeError("Received object ".concat(val, "  did not match the provided type ").concat(ty));
	          }
	        case "number":
	        case "bigint":
	          {
	            switch (value) {
	              case _2.xdr.ScSpecType.scSpecTypeU32().value:
	                return _2.xdr.ScVal.scvU32(val);
	              case _2.xdr.ScSpecType.scSpecTypeI32().value:
	                return _2.xdr.ScVal.scvI32(val);
	              case _2.xdr.ScSpecType.scSpecTypeU64().value:
	              case _2.xdr.ScSpecType.scSpecTypeI64().value:
	              case _2.xdr.ScSpecType.scSpecTypeU128().value:
	              case _2.xdr.ScSpecType.scSpecTypeI128().value:
	              case _2.xdr.ScSpecType.scSpecTypeU256().value:
	              case _2.xdr.ScSpecType.scSpecTypeI256().value:
	                {
	                  var intType = t.name.substring(10).toLowerCase();
	                  return new _2.XdrLargeInt(intType, val).toScVal();
	                }
	              default:
	                throw new TypeError("invalid type (".concat(ty, ") specified for integer"));
	            }
	          }
	        case "string":
	          return stringToScVal(val, t);
	        case "boolean":
	          {
	            if (value !== _2.xdr.ScSpecType.scSpecTypeBool().value) {
	              throw TypeError("Type ".concat(ty, " was not bool, but value was bool"));
	            }
	            return _2.xdr.ScVal.scvBool(val);
	          }
	        case "undefined":
	          {
	            if (!ty) {
	              return _2.xdr.ScVal.scvVoid();
	            }
	            switch (value) {
	              case _2.xdr.ScSpecType.scSpecTypeVoid().value:
	              case _2.xdr.ScSpecType.scSpecTypeOption().value:
	                return _2.xdr.ScVal.scvVoid();
	              default:
	                throw new TypeError("Type ".concat(ty, " was not void, but value was undefined"));
	            }
	          }
	        case "function":
	          return this.nativeToScVal(val(), ty);
	        default:
	          throw new TypeError("failed to convert typeof ".concat(_typeof(val), " (").concat(val, ")"));
	      }
	    }
	  }, {
	    key: "nativeToUdt",
	    value: function nativeToUdt(val, name) {
	      var entry = this.findEntry(name);
	      switch (entry.switch()) {
	        case _2.xdr.ScSpecEntryKind.scSpecEntryUdtEnumV0():
	          if (typeof val !== "number") {
	            throw new TypeError("expected number for enum ".concat(name, ", but got ").concat(_typeof(val)));
	          }
	          return this.nativeToEnum(val, entry.udtEnumV0());
	        case _2.xdr.ScSpecEntryKind.scSpecEntryUdtStructV0():
	          return this.nativeToStruct(val, entry.udtStructV0());
	        case _2.xdr.ScSpecEntryKind.scSpecEntryUdtUnionV0():
	          return this.nativeToUnion(val, entry.udtUnionV0());
	        default:
	          throw new Error("failed to parse udt ".concat(name));
	      }
	    }
	  }, {
	    key: "nativeToUnion",
	    value: function nativeToUnion(val, union_) {
	      var _this3 = this;
	      var entry_name = val.tag;
	      var case_ = union_.cases().find(function (entry) {
	        var case_ = entry.value().name().toString();
	        return case_ === entry_name;
	      });
	      if (!case_) {
	        throw new TypeError("no such enum entry: ".concat(entry_name, " in ").concat(union_));
	      }
	      var key = _2.xdr.ScVal.scvSymbol(entry_name);
	      switch (case_.switch()) {
	        case _2.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseVoidV0():
	          {
	            return _2.xdr.ScVal.scvVec([key]);
	          }
	        case _2.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0():
	          {
	            var types = case_.tupleCase().type();
	            if (Array.isArray(val.values)) {
	              if (val.values.length != types.length) {
	                throw new TypeError("union ".concat(union_, " expects ").concat(types.length, " values, but got ").concat(val.values.length));
	              }
	              var scvals = val.values.map(function (v, i) {
	                return _this3.nativeToScVal(v, types[i]);
	              });
	              scvals.unshift(key);
	              return _2.xdr.ScVal.scvVec(scvals);
	            }
	            throw new Error("failed to parse union case ".concat(case_, " with ").concat(val));
	          }
	        default:
	          throw new Error("failed to parse union ".concat(union_, " with ").concat(val));
	      }
	    }
	  }, {
	    key: "nativeToStruct",
	    value: function nativeToStruct(val, struct) {
	      var _this4 = this;
	      var fields = struct.fields();
	      if (fields.some(isNumeric)) {
	        if (!fields.every(isNumeric)) {
	          throw new Error("mixed numeric and non-numeric field names are not allowed");
	        }
	        return _2.xdr.ScVal.scvVec(fields.map(function (_, i) {
	          return _this4.nativeToScVal(val[i], fields[i].type());
	        }));
	      }
	      return _2.xdr.ScVal.scvMap(fields.map(function (field) {
	        var name = field.name().toString();
	        return new _2.xdr.ScMapEntry({
	          key: _this4.nativeToScVal(name, _2.xdr.ScSpecTypeDef.scSpecTypeSymbol()),
	          val: _this4.nativeToScVal(val[name], field.type())
	        });
	      }));
	    }
	  }, {
	    key: "nativeToEnum",
	    value: function nativeToEnum(val, enum_) {
	      if (enum_.cases().some(function (entry) {
	        return entry.value() === val;
	      })) {
	        return _2.xdr.ScVal.scvU32(val);
	      }
	      throw new TypeError("no such enum entry: ".concat(val, " in ").concat(enum_));
	    }
	  }, {
	    key: "scValStrToNative",
	    value: function scValStrToNative(scv, typeDef) {
	      return this.scValToNative(_2.xdr.ScVal.fromXDR(scv, "base64"), typeDef);
	    }
	  }, {
	    key: "scValToNative",
	    value: function scValToNative(scv, typeDef) {
	      var _this5 = this;
	      var t = typeDef.switch();
	      var value = t.value;
	      if (value === _2.xdr.ScSpecType.scSpecTypeUdt().value) {
	        return this.scValUdtToNative(scv, typeDef.udt());
	      }
	      switch (scv.switch().value) {
	        case _2.xdr.ScValType.scvVoid().value:
	          return void 0;
	        case _2.xdr.ScValType.scvU64().value:
	        case _2.xdr.ScValType.scvI64().value:
	        case _2.xdr.ScValType.scvU128().value:
	        case _2.xdr.ScValType.scvI128().value:
	        case _2.xdr.ScValType.scvU256().value:
	        case _2.xdr.ScValType.scvI256().value:
	          return (0, _2.scValToBigInt)(scv);
	        case _2.xdr.ScValType.scvVec().value:
	          {
	            if (value == _2.xdr.ScSpecType.scSpecTypeVec().value) {
	              var _scv$vec;
	              var vec = typeDef.vec();
	              return ((_scv$vec = scv.vec()) !== null && _scv$vec !== void 0 ? _scv$vec : []).map(function (elm) {
	                return _this5.scValToNative(elm, vec.elementType());
	              });
	            } else if (value == _2.xdr.ScSpecType.scSpecTypeTuple().value) {
	              var _scv$vec2;
	              var tuple = typeDef.tuple();
	              var valTypes = tuple.valueTypes();
	              return ((_scv$vec2 = scv.vec()) !== null && _scv$vec2 !== void 0 ? _scv$vec2 : []).map(function (elm, i) {
	                return _this5.scValToNative(elm, valTypes[i]);
	              });
	            }
	            throw new TypeError("Type ".concat(typeDef, " was not vec, but ").concat(scv, " is"));
	          }
	        case _2.xdr.ScValType.scvAddress().value:
	          return _2.Address.fromScVal(scv).toString();
	        case _2.xdr.ScValType.scvMap().value:
	          {
	            var _scv$map;
	            var map = (_scv$map = scv.map()) !== null && _scv$map !== void 0 ? _scv$map : [];
	            if (value == _2.xdr.ScSpecType.scSpecTypeMap().value) {
	              var type_ = typeDef.map();
	              var keyType = type_.keyType();
	              var valueType = type_.valueType();
	              var res = map.map(function (entry) {
	                return [_this5.scValToNative(entry.key(), keyType), _this5.scValToNative(entry.val(), valueType)];
	              });
	              return res;
	            }
	            throw new TypeError("ScSpecType ".concat(t.name, " was not map, but ").concat(JSON.stringify(scv, null, 2), " is"));
	          }
	        case _2.xdr.ScValType.scvBool().value:
	        case _2.xdr.ScValType.scvU32().value:
	        case _2.xdr.ScValType.scvI32().value:
	        case _2.xdr.ScValType.scvBytes().value:
	          return scv.value();
	        case _2.xdr.ScValType.scvString().value:
	        case _2.xdr.ScValType.scvSymbol().value:
	          {
	            var _scv$value;
	            if (value !== _2.xdr.ScSpecType.scSpecTypeString().value && value !== _2.xdr.ScSpecType.scSpecTypeSymbol().value) {
	              throw new Error("ScSpecType ".concat(t.name, " was not string or symbol, but ").concat(JSON.stringify(scv, null, 2), " is"));
	            }
	            return (_scv$value = scv.value()) === null || _scv$value === void 0 ? void 0 : _scv$value.toString();
	          }
	        case _2.xdr.ScValType.scvTimepoint().value:
	        case _2.xdr.ScValType.scvDuration().value:
	          return (0, _2.scValToBigInt)(_2.xdr.ScVal.scvU64(scv.u64()));
	        default:
	          throw new TypeError("failed to convert ".concat(JSON.stringify(scv, null, 2), " to native type from type ").concat(t.name));
	      }
	    }
	  }, {
	    key: "scValUdtToNative",
	    value: function scValUdtToNative(scv, udt) {
	      var entry = this.findEntry(udt.name().toString());
	      switch (entry.switch()) {
	        case _2.xdr.ScSpecEntryKind.scSpecEntryUdtEnumV0():
	          return this.enumToNative(scv);
	        case _2.xdr.ScSpecEntryKind.scSpecEntryUdtStructV0():
	          return this.structToNative(scv, entry.udtStructV0());
	        case _2.xdr.ScSpecEntryKind.scSpecEntryUdtUnionV0():
	          return this.unionToNative(scv, entry.udtUnionV0());
	        default:
	          throw new Error("failed to parse udt ".concat(udt.name().toString(), ": ").concat(entry));
	      }
	    }
	  }, {
	    key: "unionToNative",
	    value: function unionToNative(val, udt) {
	      var _this6 = this;
	      var vec = val.vec();
	      if (!vec) {
	        throw new Error("".concat(JSON.stringify(val, null, 2), " is not a vec"));
	      }
	      if (vec.length === 0 && udt.cases.length !== 0) {
	        throw new Error("".concat(val, " has length 0, but the there are at least one case in the union"));
	      }
	      var name = vec[0].sym().toString();
	      if (vec[0].switch().value != _2.xdr.ScValType.scvSymbol().value) {
	        throw new Error("{vec[0]} is not a symbol");
	      }
	      var entry = udt.cases().find(findCase(name));
	      if (!entry) {
	        throw new Error("failed to find entry ".concat(name, " in union {udt.name().toString()}"));
	      }
	      var res = {
	        tag: name
	      };
	      if (entry.switch().value === _2.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0().value) {
	        var tuple = entry.tupleCase();
	        var ty = tuple.type();
	        var values = ty.map(function (entry, i) {
	          return _this6.scValToNative(vec[i + 1], entry);
	        });
	        res.values = values;
	      }
	      return res;
	    }
	  }, {
	    key: "structToNative",
	    value: function structToNative(val, udt) {
	      var _this7 = this,
	        _val$map;
	      var res = {};
	      var fields = udt.fields();
	      if (fields.some(isNumeric)) {
	        var _val$vec;
	        var r = (_val$vec = val.vec()) === null || _val$vec === void 0 ? void 0 : _val$vec.map(function (entry, i) {
	          return _this7.scValToNative(entry, fields[i].type());
	        });
	        return r;
	      }
	      (_val$map = val.map()) === null || _val$map === void 0 || _val$map.forEach(function (entry, i) {
	        var field = fields[i];
	        res[field.name().toString()] = _this7.scValToNative(entry.val(), field.type());
	      });
	      return res;
	    }
	  }, {
	    key: "enumToNative",
	    value: function enumToNative(scv) {
	      if (scv.switch().value !== _2.xdr.ScValType.scvU32().value) {
	        throw new Error("Enum must have a u32 value");
	      }
	      var num = scv.u32();
	      return num;
	    }
	  }, {
	    key: "errorCases",
	    value: function errorCases() {
	      return this.entries.filter(function (entry) {
	        return entry.switch().value === _2.xdr.ScSpecEntryKind.scSpecEntryUdtErrorEnumV0().value;
	      }).flatMap(function (entry) {
	        return entry.value().cases();
	      });
	    }
	  }, {
	    key: "jsonSchema",
	    value: function jsonSchema(funcName) {
	      var definitions = {};
	      var _iterator = _createForOfIteratorHelper(this.entries),
	        _step;
	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var entry = _step.value;
	          switch (entry.switch().value) {
	            case _2.xdr.ScSpecEntryKind.scSpecEntryUdtEnumV0().value:
	              {
	                var _udt = entry.udtEnumV0();
	                definitions[_udt.name().toString()] = enumToJsonSchema(_udt);
	                break;
	              }
	            case _2.xdr.ScSpecEntryKind.scSpecEntryUdtStructV0().value:
	              {
	                var _udt2 = entry.udtStructV0();
	                definitions[_udt2.name().toString()] = structToJsonSchema(_udt2);
	                break;
	              }
	            case _2.xdr.ScSpecEntryKind.scSpecEntryUdtUnionV0().value:
	              var udt = entry.udtUnionV0();
	              definitions[udt.name().toString()] = unionToJsonSchema(udt);
	              break;
	            case _2.xdr.ScSpecEntryKind.scSpecEntryFunctionV0().value:
	              {
	                var fn = entry.functionV0();
	                var fnName = fn.name().toString();
	                var _functionToJsonSchema = functionToJsonSchema(fn),
	                  input = _functionToJsonSchema.input;
	                definitions[fnName] = input;
	                break;
	              }
	            case _2.xdr.ScSpecEntryKind.scSpecEntryUdtErrorEnumV0().value:
	              {}
	          }
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }
	      var res = {
	        $schema: "http://json-schema.org/draft-07/schema#",
	        definitions: _objectSpread(_objectSpread({}, PRIMITIVE_DEFINITONS), definitions)
	      };
	      if (funcName) {
	        res["$ref"] = "#/definitions/".concat(funcName);
	      }
	      return res;
	    }
	  }]);
	}();
	function stringToScVal(str, ty) {
	  switch (ty.value) {
	    case _2.xdr.ScSpecType.scSpecTypeString().value:
	      return _2.xdr.ScVal.scvString(str);
	    case _2.xdr.ScSpecType.scSpecTypeSymbol().value:
	      return _2.xdr.ScVal.scvSymbol(str);
	    case _2.xdr.ScSpecType.scSpecTypeAddress().value:
	      {
	        var addr = _2.Address.fromString(str);
	        return _2.xdr.ScVal.scvAddress(addr.toScAddress());
	      }
	    case _2.xdr.ScSpecType.scSpecTypeU64().value:
	      return new _2.XdrLargeInt("u64", str).toScVal();
	    case _2.xdr.ScSpecType.scSpecTypeI64().value:
	      return new _2.XdrLargeInt("i64", str).toScVal();
	    case _2.xdr.ScSpecType.scSpecTypeU128().value:
	      return new _2.XdrLargeInt("u128", str).toScVal();
	    case _2.xdr.ScSpecType.scSpecTypeI128().value:
	      return new _2.XdrLargeInt("i128", str).toScVal();
	    case _2.xdr.ScSpecType.scSpecTypeU256().value:
	      return new _2.XdrLargeInt("u256", str).toScVal();
	    case _2.xdr.ScSpecType.scSpecTypeI256().value:
	      return new _2.XdrLargeInt("i256", str).toScVal();
	    case _2.xdr.ScSpecType.scSpecTypeBytes().value:
	    case _2.xdr.ScSpecType.scSpecTypeBytesN().value:
	      return _2.xdr.ScVal.scvBytes(Buffer.from(str, "base64"));
	    default:
	      throw new TypeError("invalid type ".concat(ty.name, " specified for string value"));
	  }
	}
	function isNumeric(field) {
	  return /^\d+$/.test(field.name().toString());
	}
	function findCase(name) {
	  return function matches(entry) {
	    switch (entry.switch().value) {
	      case _2.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0().value:
	        {
	          var tuple = entry.tupleCase();
	          return tuple.name().toString() === name;
	        }
	      case _2.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseVoidV0().value:
	        {
	          var void_case = entry.voidCase();
	          return void_case.name().toString() === name;
	        }
	      default:
	        return false;
	    }
	  };
	}
	var PRIMITIVE_DEFINITONS = {
	  U32: {
	    type: "integer",
	    minimum: 0,
	    maximum: 4294967295
	  },
	  I32: {
	    type: "integer",
	    minimum: -2147483648,
	    maximum: 2147483647
	  },
	  U64: {
	    type: "string",
	    pattern: "^([1-9][0-9]*|0)$",
	    minLength: 1,
	    maxLength: 20
	  },
	  I64: {
	    type: "string",
	    pattern: "^(-?[1-9][0-9]*|0)$",
	    minLength: 1,
	    maxLength: 21
	  },
	  U128: {
	    type: "string",
	    pattern: "^([1-9][0-9]*|0)$",
	    minLength: 1,
	    maxLength: 39
	  },
	  I128: {
	    type: "string",
	    pattern: "^(-?[1-9][0-9]*|0)$",
	    minLength: 1,
	    maxLength: 40
	  },
	  U256: {
	    type: "string",
	    pattern: "^([1-9][0-9]*|0)$",
	    minLength: 1,
	    maxLength: 78
	  },
	  I256: {
	    type: "string",
	    pattern: "^(-?[1-9][0-9]*|0)$",
	    minLength: 1,
	    maxLength: 79
	  },
	  Address: {
	    type: "string",
	    format: "address",
	    description: "Address can be a public key or contract id"
	  },
	  ScString: {
	    type: "string",
	    description: "ScString is a string"
	  },
	  ScSymbol: {
	    type: "string",
	    description: "ScString is a string"
	  },
	  DataUrl: {
	    type: "string",
	    pattern: "^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+\\/]{3}=)?$"
	  }
	};
	function typeRef(typeDef) {
	  var t = typeDef.switch();
	  var value = t.value;
	  var ref;
	  switch (value) {
	    case _2.xdr.ScSpecType.scSpecTypeVal().value:
	      {
	        ref = "Val";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeBool().value:
	      {
	        return {
	          type: "boolean"
	        };
	      }
	    case _2.xdr.ScSpecType.scSpecTypeVoid().value:
	      {
	        return {
	          type: "null"
	        };
	      }
	    case _2.xdr.ScSpecType.scSpecTypeError().value:
	      {
	        ref = "Error";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeU32().value:
	      {
	        ref = "U32";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeI32().value:
	      {
	        ref = "I32";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeU64().value:
	      {
	        ref = "U64";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeI64().value:
	      {
	        ref = "I64";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeTimepoint().value:
	      {
	        throw new Error("Timepoint type not supported");
	      }
	    case _2.xdr.ScSpecType.scSpecTypeDuration().value:
	      {
	        throw new Error("Duration not supported");
	      }
	    case _2.xdr.ScSpecType.scSpecTypeU128().value:
	      {
	        ref = "U128";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeI128().value:
	      {
	        ref = "I128";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeU256().value:
	      {
	        ref = "U256";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeI256().value:
	      {
	        ref = "I256";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeBytes().value:
	      {
	        ref = "DataUrl";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeString().value:
	      {
	        ref = "ScString";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeSymbol().value:
	      {
	        ref = "ScSymbol";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeAddress().value:
	      {
	        ref = "Address";
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeOption().value:
	      {
	        var opt = typeDef.option();
	        return typeRef(opt.valueType());
	      }
	    case _2.xdr.ScSpecType.scSpecTypeResult().value:
	      {
	        break;
	      }
	    case _2.xdr.ScSpecType.scSpecTypeVec().value:
	      {
	        var arr = typeDef.vec();
	        var _ref3 = typeRef(arr.elementType());
	        return {
	          type: "array",
	          items: _ref3
	        };
	      }
	    case _2.xdr.ScSpecType.scSpecTypeMap().value:
	      {
	        var map = typeDef.map();
	        var items = [typeRef(map.keyType()), typeRef(map.valueType())];
	        return {
	          type: "array",
	          items: {
	            type: "array",
	            items: items,
	            minItems: 2,
	            maxItems: 2
	          }
	        };
	      }
	    case _2.xdr.ScSpecType.scSpecTypeTuple().value:
	      {
	        var tuple = typeDef.tuple();
	        var minItems = tuple.valueTypes().length;
	        var maxItems = minItems;
	        var _items = tuple.valueTypes().map(typeRef);
	        return {
	          type: "array",
	          items: _items,
	          minItems: minItems,
	          maxItems: maxItems
	        };
	      }
	    case _2.xdr.ScSpecType.scSpecTypeBytesN().value:
	      {
	        var _arr = typeDef.bytesN();
	        return {
	          $ref: "#/definitions/DataUrl",
	          maxLength: _arr.n()
	        };
	      }
	    case _2.xdr.ScSpecType.scSpecTypeUdt().value:
	      {
	        var udt = typeDef.udt();
	        ref = udt.name().toString();
	        break;
	      }
	  }
	  return {
	    $ref: "#/definitions/".concat(ref)
	  };
	}
	function isRequired(typeDef) {
	  return typeDef.switch().value != _2.xdr.ScSpecType.scSpecTypeOption().value;
	}
	function structToJsonSchema(udt) {
	  var fields = udt.fields();
	  if (fields.some(isNumeric)) {
	    if (!fields.every(isNumeric)) {
	      throw new Error("mixed numeric and non-numeric field names are not allowed");
	    }
	    var items = fields.map(function (_, i) {
	      return typeRef(fields[i].type());
	    });
	    return {
	      type: "array",
	      items: items,
	      minItems: fields.length,
	      maxItems: fields.length
	    };
	  }
	  var description = udt.doc().toString();
	  var _args_and_required = args_and_required(fields),
	    properties = _args_and_required.properties,
	    required = _args_and_required.required;
	  properties["additionalProperties"] = false;
	  return {
	    description: description,
	    properties: properties,
	    required: required,
	    type: "object"
	  };
	}
	function args_and_required(input) {
	  var properties = {};
	  var required = [];
	  var _iterator2 = _createForOfIteratorHelper(input),
	    _step2;
	  try {
	    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	      var arg = _step2.value;
	      var type_ = arg.type();
	      var name = arg.name().toString();
	      properties[name] = typeRef(type_);
	      if (isRequired(type_)) {
	        required.push(name);
	      }
	    }
	  } catch (err) {
	    _iterator2.e(err);
	  } finally {
	    _iterator2.f();
	  }
	  var res = {
	    properties: properties
	  };
	  if (required.length > 0) {
	    res.required = required;
	  }
	  return res;
	}
	function functionToJsonSchema(func) {
	  var _args_and_required2 = args_and_required(func.inputs()),
	    properties = _args_and_required2.properties,
	    required = _args_and_required2.required;
	  var args = {
	    additionalProperties: false,
	    properties: properties,
	    type: "object"
	  };
	  if ((required === null || required === void 0 ? void 0 : required.length) > 0) {
	    args.required = required;
	  }
	  var input = {
	    properties: {
	      args: args
	    }
	  };
	  var outputs = func.outputs();
	  var output = outputs.length > 0 ? typeRef(outputs[0]) : typeRef(_2.xdr.ScSpecTypeDef.scSpecTypeVoid());
	  var description = func.doc().toString();
	  if (description.length > 0) {
	    input.description = description;
	  }
	  input.additionalProperties = false;
	  output.additionalProperties = false;
	  return {
	    input: input,
	    output: output
	  };
	}
	function unionToJsonSchema(udt) {
	  var description = udt.doc().toString();
	  var cases = udt.cases();
	  var oneOf = [];
	  var _iterator3 = _createForOfIteratorHelper(cases),
	    _step3;
	  try {
	    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
	      var case_ = _step3.value;
	      switch (case_.switch().value) {
	        case _2.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseVoidV0().value:
	          {
	            var c = case_.voidCase();
	            var title = c.name().toString();
	            oneOf.push({
	              type: "object",
	              title: title,
	              properties: {
	                tag: title
	              },
	              additionalProperties: false,
	              required: ["tag"]
	            });
	            break;
	          }
	        case _2.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0().value:
	          {
	            var _c = case_.tupleCase();
	            var _title = _c.name().toString();
	            oneOf.push({
	              type: "object",
	              title: _title,
	              properties: {
	                tag: _title,
	                values: {
	                  type: "array",
	                  items: _c.type().map(typeRef)
	                }
	              },
	              required: ["tag", "values"],
	              additionalProperties: false
	            });
	          }
	      }
	    }
	  } catch (err) {
	    _iterator3.e(err);
	  } finally {
	    _iterator3.f();
	  }
	  var res = {
	    oneOf: oneOf
	  };
	  if (description.length > 0) {
	    res.description = description;
	  }
	  return res;
	}
	function enumToJsonSchema(udt) {
	  var description = udt.doc().toString();
	  var cases = udt.cases();
	  var oneOf = [];
	  var _iterator4 = _createForOfIteratorHelper(cases),
	    _step4;
	  try {
	    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
	      var case_ = _step4.value;
	      var title = case_.name().toString();
	      var _description = case_.doc().toString();
	      oneOf.push({
	        description: _description,
	        title: title,
	        enum: [case_.value()],
	        type: "number"
	      });
	    }
	  } catch (err) {
	    _iterator4.e(err);
	  } finally {
	    _iterator4.f();
	  }
	  var res = {
	    oneOf: oneOf
	  };
	  if (description.length > 0) {
	    res.description = description;
	  }
	  return res;
	}
	return contract_spec;
}

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib.exports;
	hasRequiredLib = 1;
	(function (module, exports) {

		function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var _exportNames = {
		  Config: true,
		  Utils: true,
		  StellarToml: true,
		  Federation: true,
		  WebAuth: true,
		  Friendbot: true,
		  Horizon: true,
		  SorobanRpc: true
		};
		Object.defineProperty(exports, "Config", {
		  enumerable: true,
		  get: function get() {
		    return _config.Config;
		  }
		});
		exports.StellarToml = exports.SorobanRpc = exports.Horizon = exports.Friendbot = exports.Federation = void 0;
		Object.defineProperty(exports, "Utils", {
		  enumerable: true,
		  get: function get() {
		    return _utils.Utils;
		  }
		});
		exports.default = exports.WebAuth = void 0;
		var _errors = errors$1;
		Object.keys(_errors).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
		  if (key in exports && exports[key] === _errors[key]) return;
		  Object.defineProperty(exports, key, {
		    enumerable: true,
		    get: function get() {
		      return _errors[key];
		    }
		  });
		});
		var _config = config$1;
		var _utils = utils$2;
		var _StellarToml = _interopRequireWildcard(stellartoml);
		exports.StellarToml = _StellarToml;
		var _Federation = _interopRequireWildcard(federation);
		exports.Federation = _Federation;
		var _WebAuth = _interopRequireWildcard(webauth);
		exports.WebAuth = _WebAuth;
		var _Friendbot = _interopRequireWildcard(friendbot);
		exports.Friendbot = _Friendbot;
		var _Horizon = _interopRequireWildcard(horizonExports);
		exports.Horizon = _Horizon;
		var _SorobanRpc = _interopRequireWildcard(sorobanExports);
		exports.SorobanRpc = _SorobanRpc;
		var _contract_spec = requireContract_spec();
		Object.keys(_contract_spec).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
		  if (key in exports && exports[key] === _contract_spec[key]) return;
		  Object.defineProperty(exports, key, {
		    enumerable: true,
		    get: function get() {
		      return _contract_spec[key];
		    }
		  });
		});
		var _stellarBase = require$$1$2;
		Object.keys(_stellarBase).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
		  if (key in exports && exports[key] === _stellarBase[key]) return;
		  Object.defineProperty(exports, key, {
		    enumerable: true,
		    get: function get() {
		      return _stellarBase[key];
		    }
		  });
		});
		function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
		function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
		exports.default = module.exports; 
	} (lib, lib.exports));
	return lib.exports;
}

var utils = {};

Object.defineProperty(utils, "__esModule", {
  value: true
});
utils.contractErrorPattern = utils.DEFAULT_TIMEOUT = void 0;
utils.implementsToString = implementsToString;
utils.withExponentialBackoff = withExponentialBackoff;
function _regeneratorRuntime$4() { _regeneratorRuntime$4 = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof$4(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof$4(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof$4(o) { "@babel/helpers - typeof"; return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$4(o); }
function asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator$4(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
utils.DEFAULT_TIMEOUT = 10;
function withExponentialBackoff(_x, _x2, _x3) {
  return _withExponentialBackoff.apply(this, arguments);
}
function _withExponentialBackoff() {
  _withExponentialBackoff = _asyncToGenerator$4(_regeneratorRuntime$4().mark(function _callee(fn, keepWaitingIf, timeoutInSeconds) {
    var exponentialFactor,
      verbose,
      attempts,
      count,
      waitUntil,
      waitTime,
      totalWaitTime,
      _args = arguments;
    return _regeneratorRuntime$4().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          exponentialFactor = _args.length > 3 && _args[3] !== undefined ? _args[3] : 1.5;
          verbose = _args.length > 4 && _args[4] !== undefined ? _args[4] : false;
          attempts = [];
          count = 0;
          _context.t0 = attempts;
          _context.next = 7;
          return fn();
        case 7:
          _context.t1 = _context.sent;
          _context.t0.push.call(_context.t0, _context.t1);
          if (keepWaitingIf(attempts[attempts.length - 1])) {
            _context.next = 11;
            break;
          }
          return _context.abrupt("return", attempts);
        case 11:
          waitUntil = new Date(Date.now() + timeoutInSeconds * 1000).valueOf();
          waitTime = 1000;
          totalWaitTime = waitTime;
        case 14:
          if (!(Date.now() < waitUntil && keepWaitingIf(attempts[attempts.length - 1]))) {
            _context.next = 30;
            break;
          }
          count++;
          if (verbose) {
            console.info("Waiting ".concat(waitTime, "ms before trying again (bringing the total wait time to ").concat(totalWaitTime, "ms so far, of total ").concat(timeoutInSeconds * 1000, "ms)"));
          }
          _context.next = 19;
          return new Promise(function (res) {
            return setTimeout(res, waitTime);
          });
        case 19:
          waitTime = waitTime * exponentialFactor;
          if (new Date(Date.now() + waitTime).valueOf() > waitUntil) {
            waitTime = waitUntil - Date.now();
            if (verbose) {
              console.info("was gonna wait too long; new waitTime: ".concat(waitTime, "ms"));
            }
          }
          totalWaitTime = waitTime + totalWaitTime;
          _context.t2 = attempts;
          _context.next = 25;
          return fn(attempts[attempts.length - 1]);
        case 25:
          _context.t3 = _context.sent;
          _context.t2.push.call(_context.t2, _context.t3);
          if (verbose && keepWaitingIf(attempts[attempts.length - 1])) {
            console.info("".concat(count, ". Called ").concat(fn, "; ").concat(attempts.length, " prev attempts. Most recent: ").concat(JSON.stringify(attempts[attempts.length - 1], null, 2)));
          }
          _context.next = 14;
          break;
        case 30:
          return _context.abrupt("return", attempts);
        case 31:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _withExponentialBackoff.apply(this, arguments);
}
utils.contractErrorPattern = /Error\(Contract, #(\d+)\)/;
function implementsToString(obj) {
  return _typeof$4(obj) === "object" && obj !== null && "toString" in obj;
}

var sent_transaction = {};

Object.defineProperty(sent_transaction, "__esModule", {
  value: true
});
sent_transaction.SentTransaction = void 0;
var _$2 = requireLib();
var _utils$1 = utils;
var _SentTransaction;
function _callSuper$1(t, o, e) { return o = _getPrototypeOf$1(o), _possibleConstructorReturn$1(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], _getPrototypeOf$1(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$1(self); }
function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf$1(subClass, superClass); }
function _wrapNativeSuper$1(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper$1 = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction$1(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct$1(Class, arguments, _getPrototypeOf$1(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf$1(Wrapper, Class); }; return _wrapNativeSuper$1(Class); }
function _construct$1(t, e, r) { if (_isNativeReflectConstruct$1()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf$1(p, r.prototype), p; }
function _isNativeReflectConstruct$1() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction$1(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }
function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }
function _typeof$3(o) { "@babel/helpers - typeof"; return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$3(o); }
function _regeneratorRuntime$3() { _regeneratorRuntime$3 = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof$3(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof$3(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator$3(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$2(descriptor.key), descriptor); } }
function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty$2(obj, key, value) { key = _toPropertyKey$2(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$2(t) { var i = _toPrimitive$2(t, "string"); return "symbol" == _typeof$3(i) ? i : i + ""; }
function _toPrimitive$2(t, r) { if ("object" != _typeof$3(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$3(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SentTransaction = sent_transaction.SentTransaction = function () {
  function SentTransaction(signTransaction, assembled) {
    var _this = this;
    _classCallCheck$2(this, SentTransaction);
    _defineProperty$2(this, "send", _asyncToGenerator$3(_regeneratorRuntime$3().mark(function _callee() {
      var _this$assembled$optio;
      var timeoutInSeconds, signature, hash;
      return _regeneratorRuntime$3().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            timeoutInSeconds = (_this$assembled$optio = _this.assembled.options.timeoutInSeconds) !== null && _this$assembled$optio !== void 0 ? _this$assembled$optio : _utils$1.DEFAULT_TIMEOUT;
            _context.next = 3;
            return _this.signTransaction(_this.assembled.built.toXDR(), {
              networkPassphrase: _this.assembled.options.networkPassphrase
            });
          case 3:
            signature = _context.sent;
            _this.signed = _$2.TransactionBuilder.fromXDR(signature, _this.assembled.options.networkPassphrase);
            _context.next = 7;
            return _this.server.sendTransaction(_this.signed);
          case 7:
            _this.sendTransactionResponse = _context.sent;
            if (!(_this.sendTransactionResponse.status !== "PENDING")) {
              _context.next = 10;
              break;
            }
            throw new SentTransaction.Errors.SendFailed('Sending the transaction to the network failed!\n' + JSON.stringify(_this.sendTransactionResponse, null, 2));
          case 10:
            hash = _this.sendTransactionResponse.hash;
            _context.next = 13;
            return (0, _utils$1.withExponentialBackoff)(function () {
              return _this.server.getTransaction(hash);
            }, function (resp) {
              return resp.status === _$2.SorobanRpc.Api.GetTransactionStatus.NOT_FOUND;
            }, timeoutInSeconds);
          case 13:
            _this.getTransactionResponseAll = _context.sent;
            _this.getTransactionResponse = _this.getTransactionResponseAll[_this.getTransactionResponseAll.length - 1];
            if (_this.getTransactionResponse.status === _$2.SorobanRpc.Api.GetTransactionStatus.NOT_FOUND) {
              console.error("Waited ".concat(timeoutInSeconds, " seconds for transaction to complete, but it did not. ") + "Returning anyway. Check the transaction status manually. " + "Sent transaction: ".concat(JSON.stringify(_this.sendTransactionResponse, null, 2), "\n") + "All attempts to get the result: ".concat(JSON.stringify(_this.getTransactionResponseAll, null, 2)));
            }
            return _context.abrupt("return", _this);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    this.signTransaction = signTransaction;
    this.assembled = assembled;
    if (!signTransaction) {
      throw new Error("You must provide a `signTransaction` function to send a transaction");
    }
    this.server = new _$2.SorobanRpc.Server(this.assembled.options.rpcUrl, {
      allowHttp: this.assembled.options.rpcUrl.startsWith("http://")
    });
  }
  return _createClass$2(SentTransaction, [{
    key: "result",
    get: function get() {
      if ("getTransactionResponse" in this && this.getTransactionResponse) {
        if ("returnValue" in this.getTransactionResponse) {
          return this.assembled.options.parseResultXdr(this.getTransactionResponse.returnValue);
        }
        throw new Error("Transaction failed! Cannot parse result.");
      }
      if (this.sendTransactionResponse) {
        var _this$sendTransaction;
        var errorResult = (_this$sendTransaction = this.sendTransactionResponse.errorResult) === null || _this$sendTransaction === void 0 ? void 0 : _this$sendTransaction.result();
        if (errorResult) {
          throw new SentTransaction.Errors.SendFailed("Transaction simulation looked correct, but attempting to send the transaction failed. Check `simulation` and `sendTransactionResponseAll` to troubleshoot. Decoded `sendTransactionResponse.errorResultXdr`: ".concat(errorResult));
        }
        throw new SentTransaction.Errors.SendResultOnly("Transaction was sent to the network, but not yet awaited. No result to show. Await transaction completion with `getTransaction(sendTransactionResponse.hash)`");
      }
      throw new Error("Sending transaction failed: ".concat(JSON.stringify(this.assembled)));
    }
  }]);
}();
_SentTransaction = SentTransaction;
_defineProperty$2(SentTransaction, "Errors", {
  SendFailed: function (_Error) {
    function SendFailedError() {
      _classCallCheck$2(this, SendFailedError);
      return _callSuper$1(this, SendFailedError, arguments);
    }
    _inherits$1(SendFailedError, _Error);
    return _createClass$2(SendFailedError);
  }(_wrapNativeSuper$1(Error)),
  SendResultOnly: function (_Error2) {
    function SendResultOnlyError() {
      _classCallCheck$2(this, SendResultOnlyError);
      return _callSuper$1(this, SendResultOnlyError, arguments);
    }
    _inherits$1(SendResultOnlyError, _Error2);
    return _createClass$2(SendResultOnlyError);
  }(_wrapNativeSuper$1(Error))
});
_defineProperty$2(SentTransaction, "init", function () {
  var _ref2 = _asyncToGenerator$3(_regeneratorRuntime$3().mark(function _callee2(signTransaction, assembled) {
    var tx;
    return _regeneratorRuntime$3().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          tx = new _SentTransaction(signTransaction, assembled);
          _context2.next = 3;
          return tx.send();
        case 3:
          return _context2.abrupt("return", _context2.sent);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}());

Object.defineProperty(assembled_transaction, "__esModule", {
  value: true
});
assembled_transaction.AssembledTransaction = void 0;
var _$1 = requireLib();
var _rust_types = rust_types;
var _utils = utils;
var _sent_transaction = sent_transaction;
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof$2(o) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime$2() { _regeneratorRuntime$2 = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof$2(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof$2(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator$2(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor); } }
function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty$1(obj, key, value) { key = _toPropertyKey$1(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$2(i) ? i : i + ""; }
function _toPrimitive$1(t, r) { if ("object" != _typeof$2(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$2(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AssembledTransaction = assembled_transaction.AssembledTransaction = function () {
  function AssembledTransaction(options) {
    var _this = this,
      _this$options$simulat,
      _this$options$allowHt;
    _classCallCheck$1(this, AssembledTransaction);
    _defineProperty$1(this, "simulate", _asyncToGenerator$2(_regeneratorRuntime$2().mark(function _callee() {
      return _regeneratorRuntime$2().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (_this.raw) {
              _context.next = 2;
              break;
            }
            throw new Error('Transaction has not yet been assembled; ' + 'call `AssembledTransaction.build` first.');
          case 2:
            _this.built = _this.raw.build();
            _context.next = 5;
            return _this.server.simulateTransaction(_this.built);
          case 5:
            _this.simulation = _context.sent;
            if (_$1.SorobanRpc.Api.isSimulationSuccess(_this.simulation)) {
              _this.built = _$1.SorobanRpc.assembleTransaction(_this.built, _this.simulation).build();
            }
            return _context.abrupt("return", _this);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    _defineProperty$1(this, "signAndSend", _asyncToGenerator$2(_regeneratorRuntime$2().mark(function _callee2() {
      var _ref3,
        _ref3$force,
        force,
        _ref3$signTransaction,
        signTransaction,
        typeChecked,
        _args2 = arguments;
      return _regeneratorRuntime$2().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _ref3 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref3$force = _ref3.force, force = _ref3$force === void 0 ? false : _ref3$force, _ref3$signTransaction = _ref3.signTransaction, signTransaction = _ref3$signTransaction === void 0 ? _this.options.signTransaction : _ref3$signTransaction;
            if (_this.built) {
              _context2.next = 3;
              break;
            }
            throw new Error("Transaction has not yet been simulated");
          case 3:
            if (!(!force && _this.isReadCall)) {
              _context2.next = 5;
              break;
            }
            throw new AssembledTransaction.Errors.NoSignatureNeeded("This is a read call. It requires no signature or sending. " + "Use `force: true` to sign and send anyway.");
          case 5:
            if (signTransaction) {
              _context2.next = 7;
              break;
            }
            throw new AssembledTransaction.Errors.NoSigner("You must provide a signTransaction function, either when calling " + "`signAndSend` or when initializing your ContractClient");
          case 7:
            _context2.next = 9;
            return _this.needsNonInvokerSigningBy();
          case 9:
            if (!_context2.sent.length) {
              _context2.next = 11;
              break;
            }
            throw new AssembledTransaction.Errors.NeedsMoreSignatures("Transaction requires more signatures. " + "See `needsNonInvokerSigningBy` for details.");
          case 11:
            typeChecked = _this;
            _context2.next = 14;
            return _sent_transaction.SentTransaction.init(signTransaction, typeChecked);
          case 14:
            return _context2.abrupt("return", _context2.sent);
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })));
    _defineProperty$1(this, "getStorageExpiration", _asyncToGenerator$2(_regeneratorRuntime$2().mark(function _callee3() {
      var entryRes;
      return _regeneratorRuntime$2().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _this.server.getLedgerEntries(new _$1.Contract(_this.options.contractId).getFootprint());
          case 2:
            entryRes = _context3.sent;
            if (!(!entryRes.entries || !entryRes.entries.length || !entryRes.entries[0].liveUntilLedgerSeq)) {
              _context3.next = 5;
              break;
            }
            throw new Error("failed to get ledger entry");
          case 5:
            return _context3.abrupt("return", entryRes.entries[0].liveUntilLedgerSeq);
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    })));
    _defineProperty$1(this, "needsNonInvokerSigningBy", _asyncToGenerator$2(_regeneratorRuntime$2().mark(function _callee4() {
      var _rawInvokeHostFunctio;
      var _ref6,
        _ref6$includeAlreadyS,
        includeAlreadySigned,
        rawInvokeHostFunctionOp,
        _args4 = arguments;
      return _regeneratorRuntime$2().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _ref6 = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {}, _ref6$includeAlreadyS = _ref6.includeAlreadySigned, includeAlreadySigned = _ref6$includeAlreadyS === void 0 ? false : _ref6$includeAlreadyS;
            if (_this.built) {
              _context4.next = 3;
              break;
            }
            throw new Error("Transaction has not yet been simulated");
          case 3:
            if ("operations" in _this.built) {
              _context4.next = 5;
              break;
            }
            throw new Error("Unexpected Transaction type; no operations: ".concat(JSON.stringify(_this.built)));
          case 5:
            rawInvokeHostFunctionOp = _this.built.operations[0];
            return _context4.abrupt("return", _toConsumableArray(new Set(((_rawInvokeHostFunctio = rawInvokeHostFunctionOp.auth) !== null && _rawInvokeHostFunctio !== void 0 ? _rawInvokeHostFunctio : []).filter(function (entry) {
              return entry.credentials().switch() === _$1.xdr.SorobanCredentialsType.sorobanCredentialsAddress() && (includeAlreadySigned || entry.credentials().address().signature().switch().name === "scvVoid");
            }).map(function (entry) {
              return _$1.StrKey.encodeEd25519PublicKey(entry.credentials().address().address().accountId().ed25519());
            }))));
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    })));
    _defineProperty$1(this, "signAuthEntries", _asyncToGenerator$2(_regeneratorRuntime$2().mark(function _callee6() {
      var _rawInvokeHostFunctio2;
      var _ref8,
        _ref8$expiration,
        expiration,
        _ref8$signAuthEntry,
        signAuthEntry,
        _ref8$publicKey,
        publicKey,
        needsNonInvokerSigningBy,
        rawInvokeHostFunctionOp,
        authEntries,
        _iterator,
        _step,
        _step$value,
        i,
        entry,
        pk,
        _args6 = arguments;
      return _regeneratorRuntime$2().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _ref8 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, _ref8$expiration = _ref8.expiration, expiration = _ref8$expiration === void 0 ? _this.getStorageExpiration() : _ref8$expiration, _ref8$signAuthEntry = _ref8.signAuthEntry, signAuthEntry = _ref8$signAuthEntry === void 0 ? _this.options.signAuthEntry : _ref8$signAuthEntry, _ref8$publicKey = _ref8.publicKey, publicKey = _ref8$publicKey === void 0 ? _this.options.publicKey : _ref8$publicKey;
            if (_this.built) {
              _context6.next = 3;
              break;
            }
            throw new Error("Transaction has not yet been assembled or simulated");
          case 3:
            _context6.next = 5;
            return _this.needsNonInvokerSigningBy();
          case 5:
            needsNonInvokerSigningBy = _context6.sent;
            if (needsNonInvokerSigningBy) {
              _context6.next = 8;
              break;
            }
            throw new AssembledTransaction.Errors.NoUnsignedNonInvokerAuthEntries("No unsigned non-invoker auth entries; maybe you already signed?");
          case 8:
            if (!(needsNonInvokerSigningBy.indexOf(publicKey !== null && publicKey !== void 0 ? publicKey : '') === -1)) {
              _context6.next = 10;
              break;
            }
            throw new AssembledTransaction.Errors.NoSignatureNeeded("No auth entries for public key \"".concat(publicKey, "\""));
          case 10:
            if (signAuthEntry) {
              _context6.next = 12;
              break;
            }
            throw new AssembledTransaction.Errors.NoSigner('You must provide `signAuthEntry` when calling `signAuthEntries`, ' + 'or when constructing the `ContractClient` or `AssembledTransaction`');
          case 12:
            rawInvokeHostFunctionOp = _this.built.operations[0];
            authEntries = (_rawInvokeHostFunctio2 = rawInvokeHostFunctionOp.auth) !== null && _rawInvokeHostFunctio2 !== void 0 ? _rawInvokeHostFunctio2 : [];
            _iterator = _createForOfIteratorHelper$1(authEntries.entries());
            _context6.prev = 15;
            _iterator.s();
          case 17:
            if ((_step = _iterator.n()).done) {
              _context6.next = 36;
              break;
            }
            _step$value = _slicedToArray(_step.value, 2), i = _step$value[0], entry = _step$value[1];
            if (!(entry.credentials().switch() !== _$1.xdr.SorobanCredentialsType.sorobanCredentialsAddress())) {
              _context6.next = 21;
              break;
            }
            return _context6.abrupt("continue", 34);
          case 21:
            pk = _$1.StrKey.encodeEd25519PublicKey(entry.credentials().address().address().accountId().ed25519());
            if (!(pk !== publicKey)) {
              _context6.next = 24;
              break;
            }
            return _context6.abrupt("continue", 34);
          case 24:
            _context6.t0 = _$1.authorizeEntry;
            _context6.t1 = entry;
            _context6.t2 = function () {
              var _ref9 = _asyncToGenerator$2(_regeneratorRuntime$2().mark(function _callee5(preimage) {
                return _regeneratorRuntime$2().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.t0 = Buffer;
                      _context5.next = 3;
                      return signAuthEntry(preimage.toXDR("base64"));
                    case 3:
                      _context5.t1 = _context5.sent;
                      return _context5.abrupt("return", _context5.t0.from.call(_context5.t0, _context5.t1, "base64"));
                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              }));
              return function (_x) {
                return _ref9.apply(this, arguments);
              };
            }();
            _context6.next = 29;
            return expiration;
          case 29:
            _context6.t3 = _context6.sent;
            _context6.t4 = _this.options.networkPassphrase;
            _context6.next = 33;
            return (0, _context6.t0)(_context6.t1, _context6.t2, _context6.t3, _context6.t4);
          case 33:
            authEntries[i] = _context6.sent;
          case 34:
            _context6.next = 17;
            break;
          case 36:
            _context6.next = 41;
            break;
          case 38:
            _context6.prev = 38;
            _context6.t5 = _context6["catch"](15);
            _iterator.e(_context6.t5);
          case 41:
            _context6.prev = 41;
            _iterator.f();
            return _context6.finish(41);
          case 44:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[15, 38, 41, 44]]);
    })));
    this.options = options;
    this.options.simulate = (_this$options$simulat = this.options.simulate) !== null && _this$options$simulat !== void 0 ? _this$options$simulat : true;
    this.server = new _$1.SorobanRpc.Server(this.options.rpcUrl, {
      allowHttp: (_this$options$allowHt = this.options.allowHttp) !== null && _this$options$allowHt !== void 0 ? _this$options$allowHt : false
    });
  }
  return _createClass$1(AssembledTransaction, [{
    key: "toJSON",
    value: function toJSON() {
      var _this$built;
      return JSON.stringify({
        method: this.options.method,
        tx: (_this$built = this.built) === null || _this$built === void 0 ? void 0 : _this$built.toXDR(),
        simulationResult: {
          auth: this.simulationData.result.auth.map(function (a) {
            return a.toXDR("base64");
          }),
          retval: this.simulationData.result.retval.toXDR("base64")
        },
        simulationTransactionData: this.simulationData.transactionData.toXDR("base64")
      });
    }
  }, {
    key: "simulationData",
    get: function get() {
      if (this.simulationResult && this.simulationTransactionData) {
        return {
          result: this.simulationResult,
          transactionData: this.simulationTransactionData
        };
      }
      var simulation = this.simulation;
      if (!simulation) {
        throw new AssembledTransaction.Errors.NotYetSimulated("Transaction has not yet been simulated");
      }
      if (_$1.SorobanRpc.Api.isSimulationError(simulation)) {
        throw new Error("Transaction simulation failed: \"".concat(simulation.error, "\""));
      }
      if (_$1.SorobanRpc.Api.isSimulationRestore(simulation)) {
        throw new AssembledTransaction.Errors.ExpiredState("You need to restore some contract state before you can invoke this method. ".concat(JSON.stringify(simulation, null, 2)));
      }
      if (!simulation.result) {
        throw new Error("Expected an invocation simulation, but got no 'result' field. Simulation: ".concat(JSON.stringify(simulation, null, 2)));
      }
      this.simulationResult = simulation.result;
      this.simulationTransactionData = simulation.transactionData.build();
      return {
        result: this.simulationResult,
        transactionData: this.simulationTransactionData
      };
    }
  }, {
    key: "result",
    get: function get() {
      try {
        return this.options.parseResultXdr(this.simulationData.result.retval);
      } catch (e) {
        if (!(0, _utils.implementsToString)(e)) throw e;
        var err = this.parseError(e.toString());
        if (err) return err;
        throw e;
      }
    }
  }, {
    key: "parseError",
    value: function parseError(errorMessage) {
      if (!this.options.errorTypes) return undefined;
      var match = errorMessage.match(_utils.contractErrorPattern);
      if (!match) return undefined;
      var i = parseInt(match[1], 10);
      var err = this.options.errorTypes[i];
      if (!err) return undefined;
      return new _rust_types.Err(err);
    }
  }, {
    key: "isReadCall",
    get: function get() {
      var authsCount = this.simulationData.result.auth.length;
      var writeLength = this.simulationData.transactionData.resources().footprint().readWrite().length;
      return authsCount === 0 && writeLength === 0;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(options, _ref10) {
      var tx = _ref10.tx,
        simulationResult = _ref10.simulationResult,
        simulationTransactionData = _ref10.simulationTransactionData;
      var txn = new AssembledTransaction(options);
      txn.built = _$1.TransactionBuilder.fromXDR(tx, options.networkPassphrase);
      txn.simulationResult = {
        auth: simulationResult.auth.map(function (a) {
          return _$1.xdr.SorobanAuthorizationEntry.fromXDR(a, "base64");
        }),
        retval: _$1.xdr.ScVal.fromXDR(simulationResult.retval, "base64")
      };
      txn.simulationTransactionData = _$1.xdr.SorobanTransactionData.fromXDR(simulationTransactionData, "base64");
      return txn;
    }
  }, {
    key: "build",
    value: (function () {
      var _build = _asyncToGenerator$2(_regeneratorRuntime$2().mark(function _callee7(options) {
        var _options$fee, _options$args, _options$timeoutInSec;
        var tx, contract, account;
        return _regeneratorRuntime$2().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              tx = new AssembledTransaction(options);
              contract = new _$1.Contract(options.contractId);
              _context7.next = 4;
              return tx.server.getAccount(options.publicKey);
            case 4:
              account = _context7.sent;
              tx.raw = new _$1.TransactionBuilder(account, {
                fee: (_options$fee = options.fee) !== null && _options$fee !== void 0 ? _options$fee : _$1.BASE_FEE,
                networkPassphrase: options.networkPassphrase
              }).addOperation(contract.call.apply(contract, [options.method].concat(_toConsumableArray((_options$args = options.args) !== null && _options$args !== void 0 ? _options$args : [])))).setTimeout((_options$timeoutInSec = options.timeoutInSeconds) !== null && _options$timeoutInSec !== void 0 ? _options$timeoutInSec : _utils.DEFAULT_TIMEOUT);
              if (!options.simulate) {
                _context7.next = 9;
                break;
              }
              _context7.next = 9;
              return tx.simulate();
            case 9:
              return _context7.abrupt("return", tx);
            case 10:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function build(_x2) {
        return _build.apply(this, arguments);
      }
      return build;
    }())
  }]);
}();
_defineProperty$1(AssembledTransaction, "Errors", {
  ExpiredState: function (_Error) {
    function ExpiredStateError() {
      _classCallCheck$1(this, ExpiredStateError);
      return _callSuper(this, ExpiredStateError, arguments);
    }
    _inherits(ExpiredStateError, _Error);
    return _createClass$1(ExpiredStateError);
  }(_wrapNativeSuper(Error)),
  NeedsMoreSignatures: function (_Error2) {
    function NeedsMoreSignaturesError() {
      _classCallCheck$1(this, NeedsMoreSignaturesError);
      return _callSuper(this, NeedsMoreSignaturesError, arguments);
    }
    _inherits(NeedsMoreSignaturesError, _Error2);
    return _createClass$1(NeedsMoreSignaturesError);
  }(_wrapNativeSuper(Error)),
  NoSignatureNeeded: function (_Error3) {
    function NoSignatureNeededError() {
      _classCallCheck$1(this, NoSignatureNeededError);
      return _callSuper(this, NoSignatureNeededError, arguments);
    }
    _inherits(NoSignatureNeededError, _Error3);
    return _createClass$1(NoSignatureNeededError);
  }(_wrapNativeSuper(Error)),
  NoUnsignedNonInvokerAuthEntries: function (_Error4) {
    function NoUnsignedNonInvokerAuthEntriesError() {
      _classCallCheck$1(this, NoUnsignedNonInvokerAuthEntriesError);
      return _callSuper(this, NoUnsignedNonInvokerAuthEntriesError, arguments);
    }
    _inherits(NoUnsignedNonInvokerAuthEntriesError, _Error4);
    return _createClass$1(NoUnsignedNonInvokerAuthEntriesError);
  }(_wrapNativeSuper(Error)),
  NoSigner: function (_Error5) {
    function NoSignerError() {
      _classCallCheck$1(this, NoSignerError);
      return _callSuper(this, NoSignerError, arguments);
    }
    _inherits(NoSignerError, _Error5);
    return _createClass$1(NoSignerError);
  }(_wrapNativeSuper(Error)),
  NotYetSimulated: function (_Error6) {
    function NotYetSimulatedError() {
      _classCallCheck$1(this, NotYetSimulatedError);
      return _callSuper(this, NotYetSimulatedError, arguments);
    }
    _inherits(NotYetSimulatedError, _Error6);
    return _createClass$1(NotYetSimulatedError);
  }(_wrapNativeSuper(Error)),
  FakeAccount: function (_Error7) {
    function FakeAccountError() {
      _classCallCheck$1(this, FakeAccountError);
      return _callSuper(this, FakeAccountError, arguments);
    }
    _inherits(FakeAccountError, _Error7);
    return _createClass$1(FakeAccountError);
  }(_wrapNativeSuper(Error))
});

var basic_node_signer = {};

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
Object.defineProperty(basic_node_signer, "__esModule", {
  value: true
});
basic_node_signer.basicNodeSigner = void 0;
var _ = requireLib();
function _regeneratorRuntime$1() { _regeneratorRuntime$1 = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof$1(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof$1(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator$1(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
basic_node_signer.basicNodeSigner = function basicNodeSigner(keypair, networkPassphrase) {
  return {
    signTransaction: function () {
      var _signTransaction = _asyncToGenerator$1(_regeneratorRuntime$1().mark(function _callee(tx) {
        var t;
        return _regeneratorRuntime$1().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              t = _.TransactionBuilder.fromXDR(tx, networkPassphrase);
              t.sign(keypair);
              return _context.abrupt("return", t.toXDR());
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function signTransaction(_x) {
        return _signTransaction.apply(this, arguments);
      }
      return signTransaction;
    }(),
    signAuthEntry: function () {
      var _signAuthEntry = _asyncToGenerator$1(_regeneratorRuntime$1().mark(function _callee2(entryXdr) {
        return _regeneratorRuntime$1().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", keypair.sign((0, _.hash)(Buffer.from(entryXdr, "base64"))).toString('base64'));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function signAuthEntry(_x2) {
        return _signAuthEntry.apply(this, arguments);
      }
      return signAuthEntry;
    }()
  };
};

var client = {};

Object.defineProperty(client, "__esModule", {
  value: true
});
client.ContractClient = void 0;
var _assembled_transaction = assembled_transaction;
var _excluded = ["method"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
client.ContractClient = _createClass(function ContractClient(spec, options) {
  var _this = this;
  _classCallCheck(this, ContractClient);
  _defineProperty(this, "txFromJSON", function (json) {
    var _JSON$parse = JSON.parse(json),
      method = _JSON$parse.method,
      tx = _objectWithoutProperties(_JSON$parse, _excluded);
    return _assembled_transaction.AssembledTransaction.fromJSON(_objectSpread(_objectSpread({}, _this.options), {}, {
      method: method,
      parseResultXdr: function parseResultXdr(result) {
        return _this.spec.funcResToNative(method, result);
      }
    }), tx);
  });
  this.spec = spec;
  this.options = options;
  var methods = this.spec.funcs();
  var _iterator = _createForOfIteratorHelper(methods),
    _step;
  try {
    var _loop = function _loop() {
      var method = _step.value;
      var name = method.name().toString();
      _this[name] = function () {
        var _ref = _asyncToGenerator(_regeneratorRuntime().mark(function _callee(args, options) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _assembled_transaction.AssembledTransaction.build(_objectSpread(_objectSpread(_objectSpread({
                  method: name,
                  args: spec.funcArgsToScVals(name, args)
                }, options), _this.options), {}, {
                  errorTypes: spec.errorCases().reduce(function (acc, curr) {
                    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, curr.value(), {
                      message: curr.doc().toString()
                    }));
                  }, {}),
                  parseResultXdr: function parseResultXdr(result) {
                    return spec.funcResToNative(name, result);
                  }
                }));
              case 2:
                return _context.abrupt("return", _context.sent);
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

var types = {};

requireLib();

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _assembled_transaction = assembled_transaction;
	Object.keys(_assembled_transaction).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _assembled_transaction[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _assembled_transaction[key];
	    }
	  });
	});
	var _basic_node_signer = basic_node_signer;
	Object.keys(_basic_node_signer).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _basic_node_signer[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _basic_node_signer[key];
	    }
	  });
	});
	var _client = client;
	Object.keys(_client).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _client[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _client[key];
	    }
	  });
	});
	var _sent_transaction = sent_transaction;
	Object.keys(_sent_transaction).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _sent_transaction[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _sent_transaction[key];
	    }
	  });
	});
	var _types = types;
	Object.keys(_types).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _types[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _types[key];
	    }
	  });
	});
	var _utils = utils;
	Object.keys(_utils).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _utils[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _utils[key];
	    }
	  });
	}); 
} (contract_client));

if (typeof window !== 'undefined') {
    //@ts-ignore Buffer exists
    window.Buffer = window.Buffer || Buffer$1;
}
const networks = {
    testnet: {
        networkPassphrase: "Test SDF Network ; September 2015",
        contractId: "CAITLVUUVLWVNBNJRVYDUVUE35SDHPSKT4KUQ2VOP4HSKVVTYH2VYOAH",
    }
};
class Client extends contract_client.ContractClient {
    options;
    constructor(options) {
        super(new ContractSpec(["AAAAAAAAAAAAAAAFaGVsbG8AAAAAAAABAAAAAAAAAAJ0bwAAAAAAEQAAAAEAAAPqAAAAEQ=="]), options);
        this.options = options;
    }
    fromJSON = {
        hello: (this.txFromJSON)
    };
}

const rpcUrl = "https://soroban-testnet.stellar.org:443";

const helloWorld = new Client({
  ...networks.testnet,
  rpcUrl,
  allowHttp: true,
  publicKey: "GBRPYHIL2CI3FNQ4BXLFMNDLFJUNPU2HY3ZMFSHONUCEOASW7QC7OX2H"
});

const $$Astro$2 = createAstro();
const $$ConnectFreighter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ConnectFreighter;
  return renderTemplate`${maybeRenderHead()}<div id="freighter-wrap" class="wrap" aria-live="polite" data-astro-cid-4rucvbus> <div class="ellipsis" data-astro-cid-4rucvbus> <button data-connect aria-controls="freighter-wrap" data-astro-cid-4rucvbus>Connect</button> </div> </div>  `;
}, "/home/mystic/Code/Web3/Stellar/test/test002/soroban-hello-world/src/components/ConnectFreighter.astro", void 0);

const $$Astro$1 = createAstro();
const $$Counter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Counter;
  return renderTemplate`${maybeRenderHead()}<strong>Incrementor</strong><br>
Current value: <strong id="current-value" aria-live="polite">???</strong> <!-- <br /> -->  <button data-increment aria-controls="current-value" class=" absolute top-1/3 right-3">Increment</button> `;
}, "/home/mystic/Code/Web3/Stellar/test/test002/soroban-hello-world/src/components/Counter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { result } = await helloWorld.hello({ to: "you" });
  const greeting = result.join(" ");
  return renderTemplate(_a || (_a = __template(["<script>var global = global || window;<\/script> ", " "])), renderComponent($$result, "Layout", $$Layout, { "title": greeting, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6> Play The Game And Make Earth a Better Place</h1> ${renderComponent($$result2, "ConnectFreighter", $$ConnectFreighter, { "class": " absolute top-10 right-10", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Game", $$Game, { "data-astro-cid-j7pv25f6": true })} <p class="instructions " data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Counter", $$Counter, { "data-astro-cid-j7pv25f6": true })} </p> </main> ` }));
}, "/home/mystic/Code/Web3/Stellar/test/test002/soroban-hello-world/src/pages/index.astro", void 0);

const $$file = "/home/mystic/Code/Web3/Stellar/test/test002/soroban-hello-world/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
