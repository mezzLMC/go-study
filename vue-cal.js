import {
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-DUPLCFWK.js";
import {
  __commonJS
} from "./chunk-XNAE4CLY.js";

// node_modules/vue-cal/dist/vuecal.common.js
var require_vuecal_common = __commonJS({
  "node_modules/vue-cal/dist/vuecal.common.js"(exports, module) {
    module.exports = function(modules) {
      function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var moduleId, chunkId, i2 = 0, resolves = [];
        for (; i2 < chunkIds.length; i2++) {
          chunkId = chunkIds[i2];
          if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
            resolves.push(installedChunks[chunkId][0]);
          }
          installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) {
          if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
            modules[moduleId] = moreModules[moduleId];
          }
        }
        if (parentJsonpFunction)
          parentJsonpFunction(data);
        while (resolves.length) {
          resolves.shift()();
        }
      }
      ;
      var installedModules = {};
      var installedChunks = {
        40: 0
      };
      function jsonpScriptSrc(chunkId) {
        return __webpack_require__.p + "vuecal.common." + ({ "0": "i18n/ar", "1": "i18n/bg", "2": "i18n/bn", "3": "i18n/bs", "4": "i18n/ca", "5": "i18n/cs", "6": "i18n/da", "7": "i18n/de", "8": "i18n/el", "9": "i18n/es", "10": "i18n/fa", "11": "i18n/fr", "12": "i18n/he", "13": "i18n/hr", "14": "i18n/hu", "15": "i18n/id", "16": "i18n/is", "17": "i18n/it", "18": "i18n/ja", "19": "i18n/ka", "20": "i18n/ko", "21": "i18n/lt", "22": "i18n/mn", "23": "i18n/nl", "24": "i18n/no", "25": "i18n/pl", "26": "i18n/pt-br", "27": "i18n/ro", "28": "i18n/ru", "29": "i18n/sk", "30": "i18n/sl", "31": "i18n/sq", "32": "i18n/sr", "33": "i18n/sv", "34": "i18n/tr", "35": "i18n/uk", "36": "i18n/vi", "37": "i18n/zh-cn", "38": "i18n/zh-hk", "39": "drag-and-drop" }[chunkId] || chunkId) + ".js";
      }
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.e = function requireEnsure(chunkId) {
        var promises = [];
        var installedChunkData = installedChunks[chunkId];
        if (installedChunkData !== 0) {
          if (installedChunkData) {
            promises.push(installedChunkData[2]);
          } else {
            var promise = new Promise(function(resolve, reject) {
              installedChunkData = installedChunks[chunkId] = [resolve, reject];
            });
            promises.push(installedChunkData[2] = promise);
            var script = document.createElement("script");
            var onScriptComplete;
            script.charset = "utf-8";
            script.timeout = 120;
            if (__webpack_require__.nc) {
              script.setAttribute("nonce", __webpack_require__.nc);
            }
            script.src = jsonpScriptSrc(chunkId);
            var error = new Error();
            onScriptComplete = function(event) {
              script.onerror = script.onload = null;
              clearTimeout(timeout);
              var chunk = installedChunks[chunkId];
              if (chunk !== 0) {
                if (chunk) {
                  var errorType = event && (event.type === "load" ? "missing" : event.type);
                  var realSrc = event && event.target && event.target.src;
                  error.message = "Loading chunk " + chunkId + " failed.\n(" + errorType + ": " + realSrc + ")";
                  error.name = "ChunkLoadError";
                  error.type = errorType;
                  error.request = realSrc;
                  chunk[1](error);
                }
                installedChunks[chunkId] = void 0;
              }
            };
            var timeout = setTimeout(function() {
              onScriptComplete({ type: "timeout", target: script });
            }, 12e4);
            script.onerror = script.onload = onScriptComplete;
            document.head.appendChild(script);
          }
        }
        return Promise.all(promises);
      };
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      __webpack_require__.oe = function(err) {
        console.error(err);
        throw err;
      };
      var jsonpArray = (typeof self !== "undefined" ? self : this)["webpackJsonpvuecal"] = (typeof self !== "undefined" ? self : this)["webpackJsonpvuecal"] || [];
      var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
      jsonpArray.push = webpackJsonpCallback;
      jsonpArray = jsonpArray.slice();
      for (var i = 0; i < jsonpArray.length; i++)
        webpackJsonpCallback(jsonpArray[i]);
      var parentJsonpFunction = oldJsonpFunction;
      return __webpack_require__(__webpack_require__.s = "fb15");
    }({
      "00ee": function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__("b622");
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var test = {};
        test[TO_STRING_TAG] = "z";
        module2.exports = String(test) === "[object z]";
      },
      "0366": function(module2, exports2, __webpack_require__) {
        var aFunction = __webpack_require__("1c0b");
        module2.exports = function(fn, that, length) {
          aFunction(fn);
          if (that === void 0)
            return fn;
          switch (length) {
            case 0:
              return function() {
                return fn.call(that);
              };
            case 1:
              return function(a) {
                return fn.call(that, a);
              };
            case 2:
              return function(a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function() {
            return fn.apply(that, arguments);
          };
        };
      },
      "057f": function(module2, exports2, __webpack_require__) {
        var toIndexedObject = __webpack_require__("fc6a");
        var nativeGetOwnPropertyNames = __webpack_require__("241c").f;
        var toString = {}.toString;
        var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        var getWindowNames = function(it) {
          try {
            return nativeGetOwnPropertyNames(it);
          } catch (error) {
            return windowNames.slice();
          }
        };
        module2.exports.f = function getOwnPropertyNames(it) {
          return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
        };
      },
      "06cf": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var propertyIsEnumerableModule = __webpack_require__("d1e7");
        var createPropertyDescriptor = __webpack_require__("5c6c");
        var toIndexedObject = __webpack_require__("fc6a");
        var toPrimitive = __webpack_require__("c04e");
        var has = __webpack_require__("5135");
        var IE8_DOM_DEFINE = __webpack_require__("0cfb");
        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        exports2.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
          O = toIndexedObject(O);
          P = toPrimitive(P, true);
          if (IE8_DOM_DEFINE)
            try {
              return nativeGetOwnPropertyDescriptor(O, P);
            } catch (error) {
            }
          if (has(O, P))
            return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
        };
      },
      "0a96": function(module2) {
        module2.exports = JSON.parse('{"weekDays":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"years":"Years","year":"Year","month":"Month","week":"Week","day":"Day","today":"Today","noEvent":"No Event","allDay":"All day","deleteEvent":"Delete","createEvent":"Create an event","dateFormat":"dddd MMMM D{S}, YYYY"}');
      },
      "0cfb": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var fails = __webpack_require__("d039");
        var createElement = __webpack_require__("cc12");
        module2.exports = !DESCRIPTORS && !fails(function() {
          return Object.defineProperty(createElement("div"), "a", {
            get: function() {
              return 7;
            }
          }).a != 7;
        });
      },
      "1148": function(module2, exports2, __webpack_require__) {
        "use strict";
        var toInteger = __webpack_require__("a691");
        var requireObjectCoercible = __webpack_require__("1d80");
        module2.exports = "".repeat || function repeat(count) {
          var str = String(requireObjectCoercible(this));
          var result = "";
          var n = toInteger(count);
          if (n < 0 || n == Infinity)
            throw RangeError("Wrong number of repetitions");
          for (; n > 0; (n >>>= 1) && (str += str))
            if (n & 1)
              result += str;
          return result;
        };
      },
      "1276": function(module2, exports2, __webpack_require__) {
        "use strict";
        var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
        var isRegExp = __webpack_require__("44e7");
        var anObject = __webpack_require__("825a");
        var requireObjectCoercible = __webpack_require__("1d80");
        var speciesConstructor = __webpack_require__("4840");
        var advanceStringIndex = __webpack_require__("8aa5");
        var toLength = __webpack_require__("50c4");
        var callRegExpExec = __webpack_require__("14c3");
        var regexpExec = __webpack_require__("9263");
        var fails = __webpack_require__("d039");
        var arrayPush = [].push;
        var min = Math.min;
        var MAX_UINT32 = 4294967295;
        var SUPPORTS_Y = !fails(function() {
          return !RegExp(MAX_UINT32, "y");
        });
        fixRegExpWellKnownSymbolLogic("split", 2, function(SPLIT, nativeSplit, maybeCallNative) {
          var internalSplit;
          if ("abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
            internalSplit = function(separator, limit) {
              var string = String(requireObjectCoercible(this));
              var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
              if (lim === 0)
                return [];
              if (separator === void 0)
                return [string];
              if (!isRegExp(separator)) {
                return nativeSplit.call(string, separator, lim);
              }
              var output = [];
              var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
              var lastLastIndex = 0;
              var separatorCopy = new RegExp(separator.source, flags + "g");
              var match, lastIndex, lastLength;
              while (match = regexpExec.call(separatorCopy, string)) {
                lastIndex = separatorCopy.lastIndex;
                if (lastIndex > lastLastIndex) {
                  output.push(string.slice(lastLastIndex, match.index));
                  if (match.length > 1 && match.index < string.length)
                    arrayPush.apply(output, match.slice(1));
                  lastLength = match[0].length;
                  lastLastIndex = lastIndex;
                  if (output.length >= lim)
                    break;
                }
                if (separatorCopy.lastIndex === match.index)
                  separatorCopy.lastIndex++;
              }
              if (lastLastIndex === string.length) {
                if (lastLength || !separatorCopy.test(""))
                  output.push("");
              } else
                output.push(string.slice(lastLastIndex));
              return output.length > lim ? output.slice(0, lim) : output;
            };
          } else if ("0".split(void 0, 0).length) {
            internalSplit = function(separator, limit) {
              return separator === void 0 && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
            };
          } else
            internalSplit = nativeSplit;
          return [
            function split(separator, limit) {
              var O = requireObjectCoercible(this);
              var splitter = separator == void 0 ? void 0 : separator[SPLIT];
              return splitter !== void 0 ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
            },
            function(regexp, limit) {
              var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
              if (res.done)
                return res.value;
              var rx = anObject(regexp);
              var S = String(this);
              var C = speciesConstructor(rx, RegExp);
              var unicodeMatching = rx.unicode;
              var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (SUPPORTS_Y ? "y" : "g");
              var splitter = new C(SUPPORTS_Y ? rx : "^(?:" + rx.source + ")", flags);
              var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
              if (lim === 0)
                return [];
              if (S.length === 0)
                return callRegExpExec(splitter, S) === null ? [S] : [];
              var p = 0;
              var q = 0;
              var A = [];
              while (q < S.length) {
                splitter.lastIndex = SUPPORTS_Y ? q : 0;
                var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                var e;
                if (z === null || (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                  q = advanceStringIndex(S, q, unicodeMatching);
                } else {
                  A.push(S.slice(p, q));
                  if (A.length === lim)
                    return A;
                  for (var i = 1; i <= z.length - 1; i++) {
                    A.push(z[i]);
                    if (A.length === lim)
                      return A;
                  }
                  q = p = e;
                }
              }
              A.push(S.slice(p));
              return A;
            }
          ];
        }, !SUPPORTS_Y);
      },
      "1332": function(module2, exports2, __webpack_require__) {
      },
      "13d5": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var $reduce = __webpack_require__("d58f").left;
        var arrayMethodIsStrict = __webpack_require__("a640");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var CHROME_VERSION = __webpack_require__("2d00");
        var IS_NODE = __webpack_require__("605d");
        var STRICT_METHOD = arrayMethodIsStrict("reduce");
        var USES_TO_LENGTH = arrayMethodUsesToLength("reduce", { 1: 0 });
        var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
        $({ target: "Array", proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
          reduce: function reduce(callbackfn) {
            return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "14c3": function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__("c6b6");
        var regexpExec = __webpack_require__("9263");
        module2.exports = function(R, S) {
          var exec = R.exec;
          if (typeof exec === "function") {
            var result = exec.call(R, S);
            if (typeof result !== "object") {
              throw TypeError("RegExp exec method returned something other than an Object or null");
            }
            return result;
          }
          if (classof(R) !== "RegExp") {
            throw TypeError("RegExp#exec called on incompatible receiver");
          }
          return regexpExec.call(R, S);
        };
      },
      "159b": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        var DOMIterables = __webpack_require__("fdbc");
        var forEach = __webpack_require__("17c2");
        var createNonEnumerableProperty = __webpack_require__("9112");
        for (var COLLECTION_NAME in DOMIterables) {
          var Collection = global[COLLECTION_NAME];
          var CollectionPrototype = Collection && Collection.prototype;
          if (CollectionPrototype && CollectionPrototype.forEach !== forEach)
            try {
              createNonEnumerableProperty(CollectionPrototype, "forEach", forEach);
            } catch (error) {
              CollectionPrototype.forEach = forEach;
            }
        }
      },
      "17c2": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $forEach = __webpack_require__("b727").forEach;
        var arrayMethodIsStrict = __webpack_require__("a640");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var STRICT_METHOD = arrayMethodIsStrict("forEach");
        var USES_TO_LENGTH = arrayMethodUsesToLength("forEach");
        module2.exports = !STRICT_METHOD || !USES_TO_LENGTH ? function forEach(callbackfn) {
          return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        } : [].forEach;
      },
      "19aa": function(module2, exports2) {
        module2.exports = function(it, Constructor, name) {
          if (!(it instanceof Constructor)) {
            throw TypeError("Incorrect " + (name ? name + " " : "") + "invocation");
          }
          return it;
        };
      },
      "1be4": function(module2, exports2, __webpack_require__) {
        var getBuiltIn = __webpack_require__("d066");
        module2.exports = getBuiltIn("document", "documentElement");
      },
      "1c0b": function(module2, exports2) {
        module2.exports = function(it) {
          if (typeof it != "function") {
            throw TypeError(String(it) + " is not a function");
          }
          return it;
        };
      },
      "1c7e": function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__("b622");
        var ITERATOR = wellKnownSymbol("iterator");
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
        } catch (error) {
        }
        module2.exports = function(exec, SKIP_CLOSING) {
          if (!SKIP_CLOSING && !SAFE_CLOSING)
            return false;
          var ITERATION_SUPPORT = false;
          try {
            var object = {};
            object[ITERATOR] = function() {
              return {
                next: function() {
                  return { done: ITERATION_SUPPORT = true };
                }
              };
            };
            exec(object);
          } catch (error) {
          }
          return ITERATION_SUPPORT;
        };
      },
      "1cdc": function(module2, exports2, __webpack_require__) {
        var userAgent = __webpack_require__("342f");
        module2.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);
      },
      "1d80": function(module2, exports2) {
        module2.exports = function(it) {
          if (it == void 0)
            throw TypeError("Can't call method on " + it);
          return it;
        };
      },
      "1dde": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        var wellKnownSymbol = __webpack_require__("b622");
        var V8_VERSION = __webpack_require__("2d00");
        var SPECIES = wellKnownSymbol("species");
        module2.exports = function(METHOD_NAME) {
          return V8_VERSION >= 51 || !fails(function() {
            var array = [];
            var constructor = array.constructor = {};
            constructor[SPECIES] = function() {
              return { foo: 1 };
            };
            return array[METHOD_NAME](Boolean).foo !== 1;
          });
        };
      },
      "2266": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("825a");
        var isArrayIteratorMethod = __webpack_require__("e95a");
        var toLength = __webpack_require__("50c4");
        var bind = __webpack_require__("0366");
        var getIteratorMethod = __webpack_require__("35a1");
        var iteratorClose = __webpack_require__("2a62");
        var Result = function(stopped, result) {
          this.stopped = stopped;
          this.result = result;
        };
        module2.exports = function(iterable, unboundFunction, options) {
          var that = options && options.that;
          var AS_ENTRIES = !!(options && options.AS_ENTRIES);
          var IS_ITERATOR = !!(options && options.IS_ITERATOR);
          var INTERRUPTED = !!(options && options.INTERRUPTED);
          var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
          var iterator, iterFn, index, length, result, next, step;
          var stop = function(condition) {
            if (iterator)
              iteratorClose(iterator);
            return new Result(true, condition);
          };
          var callFn = function(value) {
            if (AS_ENTRIES) {
              anObject(value);
              return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
            }
            return INTERRUPTED ? fn(value, stop) : fn(value);
          };
          if (IS_ITERATOR) {
            iterator = iterable;
          } else {
            iterFn = getIteratorMethod(iterable);
            if (typeof iterFn != "function")
              throw TypeError("Target is not iterable");
            if (isArrayIteratorMethod(iterFn)) {
              for (index = 0, length = toLength(iterable.length); length > index; index++) {
                result = callFn(iterable[index]);
                if (result && result instanceof Result)
                  return result;
              }
              return new Result(false);
            }
            iterator = iterFn.call(iterable);
          }
          next = iterator.next;
          while (!(step = next.call(iterator)).done) {
            try {
              result = callFn(step.value);
            } catch (error) {
              iteratorClose(iterator);
              throw error;
            }
            if (typeof result == "object" && result && result instanceof Result)
              return result;
          }
          return new Result(false);
        };
      },
      "23cb": function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__("a691");
        var max = Math.max;
        var min = Math.min;
        module2.exports = function(index, length) {
          var integer = toInteger(index);
          return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };
      },
      "23e7": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
        var createNonEnumerableProperty = __webpack_require__("9112");
        var redefine = __webpack_require__("6eeb");
        var setGlobal = __webpack_require__("ce4e");
        var copyConstructorProperties = __webpack_require__("e893");
        var isForced = __webpack_require__("94ca");
        module2.exports = function(options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED, target, key, targetProperty, sourceProperty, descriptor;
          if (GLOBAL) {
            target = global;
          } else if (STATIC) {
            target = global[TARGET] || setGlobal(TARGET, {});
          } else {
            target = (global[TARGET] || {}).prototype;
          }
          if (target)
            for (key in source) {
              sourceProperty = source[key];
              if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
              } else
                targetProperty = target[key];
              FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
              if (!FORCED && targetProperty !== void 0) {
                if (typeof sourceProperty === typeof targetProperty)
                  continue;
                copyConstructorProperties(sourceProperty, targetProperty);
              }
              if (options.sham || targetProperty && targetProperty.sham) {
                createNonEnumerableProperty(sourceProperty, "sham", true);
              }
              redefine(target, key, sourceProperty, options);
            }
        };
      },
      "241c": function(module2, exports2, __webpack_require__) {
        var internalObjectKeys = __webpack_require__("ca84");
        var enumBugKeys = __webpack_require__("7839");
        var hiddenKeys = enumBugKeys.concat("length", "prototype");
        exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return internalObjectKeys(O, hiddenKeys);
        };
      },
      "2532": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var notARegExp = __webpack_require__("5a34");
        var requireObjectCoercible = __webpack_require__("1d80");
        var correctIsRegExpLogic = __webpack_require__("ab13");
        $({ target: "String", proto: true, forced: !correctIsRegExpLogic("includes") }, {
          includes: function includes(searchString) {
            return !!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "25f0": function(module2, exports2, __webpack_require__) {
        "use strict";
        var redefine = __webpack_require__("6eeb");
        var anObject = __webpack_require__("825a");
        var fails = __webpack_require__("d039");
        var flags = __webpack_require__("ad6d");
        var TO_STRING = "toString";
        var RegExpPrototype = RegExp.prototype;
        var nativeToString = RegExpPrototype[TO_STRING];
        var NOT_GENERIC = fails(function() {
          return nativeToString.call({ source: "a", flags: "b" }) != "/a/b";
        });
        var INCORRECT_NAME = nativeToString.name != TO_STRING;
        if (NOT_GENERIC || INCORRECT_NAME) {
          redefine(RegExp.prototype, TO_STRING, function toString() {
            var R = anObject(this);
            var p = String(R.source);
            var rf = R.flags;
            var f = String(rf === void 0 && R instanceof RegExp && !("flags" in RegExpPrototype) ? flags.call(R) : rf);
            return "/" + p + "/" + f;
          }, { unsafe: true });
        }
      },
      "2626": function(module2, exports2, __webpack_require__) {
        "use strict";
        var getBuiltIn = __webpack_require__("d066");
        var definePropertyModule = __webpack_require__("9bf2");
        var wellKnownSymbol = __webpack_require__("b622");
        var DESCRIPTORS = __webpack_require__("83ab");
        var SPECIES = wellKnownSymbol("species");
        module2.exports = function(CONSTRUCTOR_NAME) {
          var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
          var defineProperty = definePropertyModule.f;
          if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
            defineProperty(Constructor, SPECIES, {
              configurable: true,
              get: function() {
                return this;
              }
            });
          }
        };
      },
      "2a62": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("825a");
        module2.exports = function(iterator) {
          var returnMethod = iterator["return"];
          if (returnMethod !== void 0) {
            return anObject(returnMethod.call(iterator)).value;
          }
        };
      },
      "2cf4": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        var fails = __webpack_require__("d039");
        var bind = __webpack_require__("0366");
        var html = __webpack_require__("1be4");
        var createElement = __webpack_require__("cc12");
        var IS_IOS = __webpack_require__("1cdc");
        var IS_NODE = __webpack_require__("605d");
        var location = global.location;
        var set = global.setImmediate;
        var clear = global.clearImmediate;
        var process = global.process;
        var MessageChannel = global.MessageChannel;
        var Dispatch = global.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = "onreadystatechange";
        var defer, channel, port;
        var run = function(id) {
          if (queue.hasOwnProperty(id)) {
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
        var listener = function(event) {
          run(event.data);
        };
        var post = function(id) {
          global.postMessage(id + "", location.protocol + "//" + location.host);
        };
        if (!set || !clear) {
          set = function setImmediate(fn) {
            var args = [];
            var i = 1;
            while (arguments.length > i)
              args.push(arguments[i++]);
            queue[++counter] = function() {
              (typeof fn == "function" ? fn : Function(fn)).apply(void 0, args);
            };
            defer(counter);
            return counter;
          };
          clear = function clearImmediate(id) {
            delete queue[id];
          };
          if (IS_NODE) {
            defer = function(id) {
              process.nextTick(runner(id));
            };
          } else if (Dispatch && Dispatch.now) {
            defer = function(id) {
              Dispatch.now(runner(id));
            };
          } else if (MessageChannel && !IS_IOS) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = listener;
            defer = bind(port.postMessage, port, 1);
          } else if (global.addEventListener && typeof postMessage == "function" && !global.importScripts && location && location.protocol !== "file:" && !fails(post)) {
            defer = post;
            global.addEventListener("message", listener, false);
          } else if (ONREADYSTATECHANGE in createElement("script")) {
            defer = function(id) {
              html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
                html.removeChild(this);
                run(id);
              };
            };
          } else {
            defer = function(id) {
              setTimeout(runner(id), 0);
            };
          }
        }
        module2.exports = {
          set,
          clear
        };
      },
      "2d00": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        var userAgent = __webpack_require__("342f");
        var process = global.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8;
        var match, version;
        if (v8) {
          match = v8.split(".");
          version = match[0] + match[1];
        } else if (userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);
          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match)
              version = match[1];
          }
        }
        module2.exports = version && +version;
      },
      "2f4d": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_weekdays_headings_vue_vue_type_style_index_0_id_f3db6496_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("43b5");
        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_weekdays_headings_vue_vue_type_style_index_0_id_f3db6496_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_weekdays_headings_vue_vue_type_style_index_0_id_f3db6496_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
      },
      "342f": function(module2, exports2, __webpack_require__) {
        var getBuiltIn = __webpack_require__("d066");
        module2.exports = getBuiltIn("navigator", "userAgent") || "";
      },
      "35a1": function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__("f5df");
        var Iterators = __webpack_require__("3f8c");
        var wellKnownSymbol = __webpack_require__("b622");
        var ITERATOR = wellKnownSymbol("iterator");
        module2.exports = function(it) {
          if (it != void 0)
            return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };
      },
      "37e8": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var definePropertyModule = __webpack_require__("9bf2");
        var anObject = __webpack_require__("825a");
        var objectKeys = __webpack_require__("df75");
        module2.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var keys = objectKeys(Properties);
          var length = keys.length;
          var index = 0;
          var key;
          while (length > index)
            definePropertyModule.f(O, key = keys[index++], Properties[key]);
          return O;
        };
      },
      "38cf": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var repeat = __webpack_require__("1148");
        $({ target: "String", proto: true }, {
          repeat
        });
      },
      "3bbe": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("861d");
        module2.exports = function(it) {
          if (!isObject(it) && it !== null) {
            throw TypeError("Can't set " + String(it) + " as a prototype");
          }
          return it;
        };
      },
      "3ca3": function(module2, exports2, __webpack_require__) {
        "use strict";
        var charAt = __webpack_require__("6547").charAt;
        var InternalStateModule = __webpack_require__("69f3");
        var defineIterator = __webpack_require__("7dd0");
        var STRING_ITERATOR = "String Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
        defineIterator(String, "String", function(iterated) {
          setInternalState(this, {
            type: STRING_ITERATOR,
            string: String(iterated),
            index: 0
          });
        }, function next() {
          var state = getInternalState(this);
          var string = state.string;
          var index = state.index;
          var point;
          if (index >= string.length)
            return { value: void 0, done: true };
          point = charAt(string, index);
          state.index += point.length;
          return { value: point, done: false };
        });
      },
      "3f8c": function(module2, exports2) {
        module2.exports = {};
      },
      "4160": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var forEach = __webpack_require__("17c2");
        $({ target: "Array", proto: true, forced: [].forEach != forEach }, {
          forEach
        });
      },
      "428f": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        module2.exports = global;
      },
      "43b5": function(module2, exports2, __webpack_require__) {
      },
      "44ad": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        var classof = __webpack_require__("c6b6");
        var split = "".split;
        module2.exports = fails(function() {
          return !Object("z").propertyIsEnumerable(0);
        }) ? function(it) {
          return classof(it) == "String" ? split.call(it, "") : Object(it);
        } : Object;
      },
      "44d2": function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__("b622");
        var create = __webpack_require__("7c73");
        var definePropertyModule = __webpack_require__("9bf2");
        var UNSCOPABLES = wellKnownSymbol("unscopables");
        var ArrayPrototype = Array.prototype;
        if (ArrayPrototype[UNSCOPABLES] == void 0) {
          definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
            configurable: true,
            value: create(null)
          });
        }
        module2.exports = function(key) {
          ArrayPrototype[UNSCOPABLES][key] = true;
        };
      },
      "44de": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        module2.exports = function(a, b) {
          var console2 = global.console;
          if (console2 && console2.error) {
            arguments.length === 1 ? console2.error(a) : console2.error(a, b);
          }
        };
      },
      "44e7": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("861d");
        var classof = __webpack_require__("c6b6");
        var wellKnownSymbol = __webpack_require__("b622");
        var MATCH = wellKnownSymbol("match");
        module2.exports = function(it) {
          var isRegExp;
          return isObject(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof(it) == "RegExp");
        };
      },
      "45fc": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var $some = __webpack_require__("b727").some;
        var arrayMethodIsStrict = __webpack_require__("a640");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var STRICT_METHOD = arrayMethodIsStrict("some");
        var USES_TO_LENGTH = arrayMethodUsesToLength("some");
        $({ target: "Array", proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
          some: function some(callbackfn) {
            return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "4840": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("825a");
        var aFunction = __webpack_require__("1c0b");
        var wellKnownSymbol = __webpack_require__("b622");
        var SPECIES = wellKnownSymbol("species");
        module2.exports = function(O, defaultConstructor) {
          var C = anObject(O).constructor;
          var S;
          return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? defaultConstructor : aFunction(S);
        };
      },
      "4930": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
          return !String(Symbol());
        });
      },
      "4a53": function(module2, exports2, __webpack_require__) {
        var map = {
          "./ar": [
            "cfcc",
            0
          ],
          "./ar.json": [
            "cfcc",
            0
          ],
          "./bg": [
            "1f0e",
            1
          ],
          "./bg.json": [
            "1f0e",
            1
          ],
          "./bn": [
            "d2d5",
            2
          ],
          "./bn.json": [
            "d2d5",
            2
          ],
          "./bs": [
            "e06f",
            3
          ],
          "./bs.json": [
            "e06f",
            3
          ],
          "./ca": [
            "aeaf",
            4
          ],
          "./ca.json": [
            "aeaf",
            4
          ],
          "./cs": [
            "442f",
            5
          ],
          "./cs.json": [
            "442f",
            5
          ],
          "./da": [
            "93f6",
            6
          ],
          "./da.json": [
            "93f6",
            6
          ],
          "./de": [
            "44ff",
            7
          ],
          "./de.json": [
            "44ff",
            7
          ],
          "./el": [
            "bac9",
            8
          ],
          "./el.json": [
            "bac9",
            8
          ],
          "./en": [
            "0a96"
          ],
          "./en.json": [
            "0a96"
          ],
          "./es": [
            "3541",
            9
          ],
          "./es.json": [
            "3541",
            9
          ],
          "./fa": [
            "e4ca",
            10
          ],
          "./fa.json": [
            "e4ca",
            10
          ],
          "./fr": [
            "d791",
            11
          ],
          "./fr.json": [
            "d791",
            11
          ],
          "./he": [
            "5f2c",
            12
          ],
          "./he.json": [
            "5f2c",
            12
          ],
          "./hr": [
            "2364",
            13
          ],
          "./hr.json": [
            "2364",
            13
          ],
          "./hu": [
            "0ade",
            14
          ],
          "./hu.json": [
            "0ade",
            14
          ],
          "./id": [
            "ad69",
            15
          ],
          "./id.json": [
            "ad69",
            15
          ],
          "./is": [
            "3ada",
            16
          ],
          "./is.json": [
            "3ada",
            16
          ],
          "./it": [
            "1412",
            17
          ],
          "./it.json": [
            "1412",
            17
          ],
          "./ja": [
            "e135",
            18
          ],
          "./ja.json": [
            "e135",
            18
          ],
          "./ka": [
            "2969",
            19
          ],
          "./ka.json": [
            "2969",
            19
          ],
          "./ko": [
            "03b7",
            20
          ],
          "./ko.json": [
            "03b7",
            20
          ],
          "./lt": [
            "a2f0",
            21
          ],
          "./lt.json": [
            "a2f0",
            21
          ],
          "./mn": [
            "956e",
            22
          ],
          "./mn.json": [
            "956e",
            22
          ],
          "./nl": [
            "9f37",
            23
          ],
          "./nl.json": [
            "9f37",
            23
          ],
          "./no": [
            "9efb",
            24
          ],
          "./no.json": [
            "9efb",
            24
          ],
          "./pl": [
            "e44c",
            25
          ],
          "./pl.json": [
            "e44c",
            25
          ],
          "./pt-br": [
            "dac8",
            26
          ],
          "./pt-br.json": [
            "dac8",
            26
          ],
          "./ro": [
            "0946",
            27
          ],
          "./ro.json": [
            "0946",
            27
          ],
          "./ru": [
            "d82c",
            28
          ],
          "./ru.json": [
            "d82c",
            28
          ],
          "./sk": [
            "1037",
            29
          ],
          "./sk.json": [
            "1037",
            29
          ],
          "./sl": [
            "c17e",
            30
          ],
          "./sl.json": [
            "c17e",
            30
          ],
          "./sq": [
            "09b8",
            31
          ],
          "./sq.json": [
            "09b8",
            31
          ],
          "./sr": [
            "65a6",
            32
          ],
          "./sr.json": [
            "65a6",
            32
          ],
          "./sv": [
            "1fd1",
            33
          ],
          "./sv.json": [
            "1fd1",
            33
          ],
          "./tr": [
            "20e4",
            34
          ],
          "./tr.json": [
            "20e4",
            34
          ],
          "./uk": [
            "7dc6",
            35
          ],
          "./uk.json": [
            "7dc6",
            35
          ],
          "./vi": [
            "5465",
            36
          ],
          "./vi.json": [
            "5465",
            36
          ],
          "./zh-cn": [
            "8035",
            37
          ],
          "./zh-cn.json": [
            "8035",
            37
          ],
          "./zh-hk": [
            "a5dc",
            38
          ],
          "./zh-hk.json": [
            "a5dc",
            38
          ]
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req)) {
            return Promise.resolve().then(function() {
              var e = new Error("Cannot find module '" + req + "'");
              e.code = "MODULE_NOT_FOUND";
              throw e;
            });
          }
          var ids = map[req], id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
            return __webpack_require__.t(id, 3);
          });
        }
        webpackAsyncContext.keys = function webpackAsyncContextKeys() {
          return Object.keys(map);
        };
        webpackAsyncContext.id = "4a53";
        module2.exports = webpackAsyncContext;
      },
      "4d64": function(module2, exports2, __webpack_require__) {
        var toIndexedObject = __webpack_require__("fc6a");
        var toLength = __webpack_require__("50c4");
        var toAbsoluteIndex = __webpack_require__("23cb");
        var createMethod = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++];
                if (value != value)
                  return true;
              }
            else
              for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el)
                  return IS_INCLUDES || index || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };
        module2.exports = {
          includes: createMethod(true),
          indexOf: createMethod(false)
        };
      },
      "4de4": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var $filter = __webpack_require__("b727").filter;
        var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
        var USES_TO_LENGTH = arrayMethodUsesToLength("filter");
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
          filter: function filter(callbackfn) {
            return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "4df4": function(module2, exports2, __webpack_require__) {
        "use strict";
        var bind = __webpack_require__("0366");
        var toObject = __webpack_require__("7b0b");
        var callWithSafeIterationClosing = __webpack_require__("9bdd");
        var isArrayIteratorMethod = __webpack_require__("e95a");
        var toLength = __webpack_require__("50c4");
        var createProperty = __webpack_require__("8418");
        var getIteratorMethod = __webpack_require__("35a1");
        module2.exports = function from(arrayLike) {
          var O = toObject(arrayLike);
          var C = typeof this == "function" ? this : Array;
          var argumentsLength = arguments.length;
          var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
          var mapping = mapfn !== void 0;
          var iteratorMethod = getIteratorMethod(O);
          var index = 0;
          var length, result, step, iterator, next, value;
          if (mapping)
            mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0, 2);
          if (iteratorMethod != void 0 && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
            iterator = iteratorMethod.call(O);
            next = iterator.next;
            result = new C();
            for (; !(step = next.call(iterator)).done; index++) {
              value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
              createProperty(result, index, value);
            }
          } else {
            length = toLength(O.length);
            result = new C(length);
            for (; length > index; index++) {
              value = mapping ? mapfn(O[index], index) : O[index];
              createProperty(result, index, value);
            }
          }
          result.length = index;
          return result;
        };
      },
      "50c4": function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__("a691");
        var min = Math.min;
        module2.exports = function(argument) {
          return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
        };
      },
      "5135": function(module2, exports2) {
        var hasOwnProperty = {}.hasOwnProperty;
        module2.exports = function(it, key) {
          return hasOwnProperty.call(it, key);
        };
      },
      "5319": function(module2, exports2, __webpack_require__) {
        "use strict";
        var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
        var anObject = __webpack_require__("825a");
        var toObject = __webpack_require__("7b0b");
        var toLength = __webpack_require__("50c4");
        var toInteger = __webpack_require__("a691");
        var requireObjectCoercible = __webpack_require__("1d80");
        var advanceStringIndex = __webpack_require__("8aa5");
        var regExpExec = __webpack_require__("14c3");
        var max = Math.max;
        var min = Math.min;
        var floor = Math.floor;
        var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
        var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;
        var maybeToString = function(it) {
          return it === void 0 ? it : String(it);
        };
        fixRegExpWellKnownSymbolLogic("replace", 2, function(REPLACE, nativeReplace, maybeCallNative, reason) {
          var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
          var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
          var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
          return [
            function replace(searchValue, replaceValue) {
              var O = requireObjectCoercible(this);
              var replacer = searchValue == void 0 ? void 0 : searchValue[REPLACE];
              return replacer !== void 0 ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
            },
            function(regexp, replaceValue) {
              if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === "string" && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
                var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
                if (res.done)
                  return res.value;
              }
              var rx = anObject(regexp);
              var S = String(this);
              var functionalReplace = typeof replaceValue === "function";
              if (!functionalReplace)
                replaceValue = String(replaceValue);
              var global = rx.global;
              if (global) {
                var fullUnicode = rx.unicode;
                rx.lastIndex = 0;
              }
              var results = [];
              while (true) {
                var result = regExpExec(rx, S);
                if (result === null)
                  break;
                results.push(result);
                if (!global)
                  break;
                var matchStr = String(result[0]);
                if (matchStr === "")
                  rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
              }
              var accumulatedResult = "";
              var nextSourcePosition = 0;
              for (var i = 0; i < results.length; i++) {
                result = results[i];
                var matched = String(result[0]);
                var position = max(min(toInteger(result.index), S.length), 0);
                var captures = [];
                for (var j = 1; j < result.length; j++)
                  captures.push(maybeToString(result[j]));
                var namedCaptures = result.groups;
                if (functionalReplace) {
                  var replacerArgs = [matched].concat(captures, position, S);
                  if (namedCaptures !== void 0)
                    replacerArgs.push(namedCaptures);
                  var replacement = String(replaceValue.apply(void 0, replacerArgs));
                } else {
                  replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                }
                if (position >= nextSourcePosition) {
                  accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                  nextSourcePosition = position + matched.length;
                }
              }
              return accumulatedResult + S.slice(nextSourcePosition);
            }
          ];
          function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
            var tailPos = position + matched.length;
            var m = captures.length;
            var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
            if (namedCaptures !== void 0) {
              namedCaptures = toObject(namedCaptures);
              symbols = SUBSTITUTION_SYMBOLS;
            }
            return nativeReplace.call(replacement, symbols, function(match, ch) {
              var capture;
              switch (ch.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return matched;
                case "`":
                  return str.slice(0, position);
                case "'":
                  return str.slice(tailPos);
                case "<":
                  capture = namedCaptures[ch.slice(1, -1)];
                  break;
                default:
                  var n = +ch;
                  if (n === 0)
                    return match;
                  if (n > m) {
                    var f = floor(n / 10);
                    if (f === 0)
                      return match;
                    if (f <= m)
                      return captures[f - 1] === void 0 ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                    return match;
                  }
                  capture = captures[n - 1];
              }
              return capture === void 0 ? "" : capture;
            });
          }
        });
      },
      "5530": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _objectSpread2;
        });
        var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4d3");
        var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
        var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4de4");
        var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
        var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4160");
        var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
        var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("e439");
        var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
        var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dbb4");
        var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__);
        var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("b64b");
        var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);
        var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("159b");
        var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
        var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ade3");
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread2(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["a"])(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
      },
      "5692": function(module2, exports2, __webpack_require__) {
        var IS_PURE = __webpack_require__("c430");
        var store = __webpack_require__("c6cd");
        (module2.exports = function(key, value) {
          return store[key] || (store[key] = value !== void 0 ? value : {});
        })("versions", []).push({
          version: "3.8.1",
          mode: IS_PURE ? "pure" : "global",
          copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      "56ef": function(module2, exports2, __webpack_require__) {
        var getBuiltIn = __webpack_require__("d066");
        var getOwnPropertyNamesModule = __webpack_require__("241c");
        var getOwnPropertySymbolsModule = __webpack_require__("7418");
        var anObject = __webpack_require__("825a");
        module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
          var keys = getOwnPropertyNamesModule.f(anObject(it));
          var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
        };
      },
      "5899": function(module2, exports2) {
        module2.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
      },
      "58a8": function(module2, exports2, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__("1d80");
        var whitespaces = __webpack_require__("5899");
        var whitespace = "[" + whitespaces + "]";
        var ltrim = RegExp("^" + whitespace + whitespace + "*");
        var rtrim = RegExp(whitespace + whitespace + "*$");
        var createMethod = function(TYPE) {
          return function($this) {
            var string = String(requireObjectCoercible($this));
            if (TYPE & 1)
              string = string.replace(ltrim, "");
            if (TYPE & 2)
              string = string.replace(rtrim, "");
            return string;
          };
        };
        module2.exports = {
          start: createMethod(1),
          end: createMethod(2),
          trim: createMethod(3)
        };
      },
      "5a34": function(module2, exports2, __webpack_require__) {
        var isRegExp = __webpack_require__("44e7");
        module2.exports = function(it) {
          if (isRegExp(it)) {
            throw TypeError("The method doesn't accept regular expressions");
          }
          return it;
        };
      },
      "5c6c": function(module2, exports2) {
        module2.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value
          };
        };
      },
      "605d": function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__("c6b6");
        var global = __webpack_require__("da84");
        module2.exports = classof(global.process) == "process";
      },
      "6062": function(module2, exports2, __webpack_require__) {
        "use strict";
        var collection = __webpack_require__("6d61");
        var collectionStrong = __webpack_require__("6566");
        module2.exports = collection("Set", function(init) {
          return function Set2() {
            return init(this, arguments.length ? arguments[0] : void 0);
          };
        }, collectionStrong);
      },
      "60da": function(module2, exports2, __webpack_require__) {
        "use strict";
        var DESCRIPTORS = __webpack_require__("83ab");
        var fails = __webpack_require__("d039");
        var objectKeys = __webpack_require__("df75");
        var getOwnPropertySymbolsModule = __webpack_require__("7418");
        var propertyIsEnumerableModule = __webpack_require__("d1e7");
        var toObject = __webpack_require__("7b0b");
        var IndexedObject = __webpack_require__("44ad");
        var nativeAssign = Object.assign;
        var defineProperty = Object.defineProperty;
        module2.exports = !nativeAssign || fails(function() {
          if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, "a", {
            enumerable: true,
            get: function() {
              defineProperty(this, "b", {
                value: 3,
                enumerable: false
              });
            }
          }), { b: 2 })).b !== 1)
            return true;
          var A = {};
          var B = {};
          var symbol = Symbol();
          var alphabet = "abcdefghijklmnopqrst";
          A[symbol] = 7;
          alphabet.split("").forEach(function(chr) {
            B[chr] = chr;
          });
          return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join("") != alphabet;
        }) ? function assign(target, source) {
          var T = toObject(target);
          var argumentsLength = arguments.length;
          var index = 1;
          var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          var propertyIsEnumerable = propertyIsEnumerableModule.f;
          while (argumentsLength > index) {
            var S = IndexedObject(arguments[index++]);
            var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
            var length = keys.length;
            var j = 0;
            var key;
            while (length > j) {
              key = keys[j++];
              if (!DESCRIPTORS || propertyIsEnumerable.call(S, key))
                T[key] = S[key];
            }
          }
          return T;
        } : nativeAssign;
      },
      "6547": function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__("a691");
        var requireObjectCoercible = __webpack_require__("1d80");
        var createMethod = function(CONVERT_TO_STRING) {
          return function($this, pos) {
            var S = String(requireObjectCoercible($this));
            var position = toInteger(pos);
            var size = S.length;
            var first, second;
            if (position < 0 || position >= size)
              return CONVERT_TO_STRING ? "" : void 0;
            first = S.charCodeAt(position);
            return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
          };
        };
        module2.exports = {
          codeAt: createMethod(false),
          charAt: createMethod(true)
        };
      },
      "6566": function(module2, exports2, __webpack_require__) {
        "use strict";
        var defineProperty = __webpack_require__("9bf2").f;
        var create = __webpack_require__("7c73");
        var redefineAll = __webpack_require__("e2cc");
        var bind = __webpack_require__("0366");
        var anInstance = __webpack_require__("19aa");
        var iterate = __webpack_require__("2266");
        var defineIterator = __webpack_require__("7dd0");
        var setSpecies = __webpack_require__("2626");
        var DESCRIPTORS = __webpack_require__("83ab");
        var fastKey = __webpack_require__("f183").fastKey;
        var InternalStateModule = __webpack_require__("69f3");
        var setInternalState = InternalStateModule.set;
        var internalStateGetterFor = InternalStateModule.getterFor;
        module2.exports = {
          getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
            var C = wrapper(function(that, iterable) {
              anInstance(that, C, CONSTRUCTOR_NAME);
              setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                index: create(null),
                first: void 0,
                last: void 0,
                size: 0
              });
              if (!DESCRIPTORS)
                that.size = 0;
              if (iterable != void 0)
                iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
            });
            var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
            var define = function(that, key, value) {
              var state = getInternalState(that);
              var entry = getEntry(that, key);
              var previous, index;
              if (entry) {
                entry.value = value;
              } else {
                state.last = entry = {
                  index: index = fastKey(key, true),
                  key,
                  value,
                  previous: previous = state.last,
                  next: void 0,
                  removed: false
                };
                if (!state.first)
                  state.first = entry;
                if (previous)
                  previous.next = entry;
                if (DESCRIPTORS)
                  state.size++;
                else
                  that.size++;
                if (index !== "F")
                  state.index[index] = entry;
              }
              return that;
            };
            var getEntry = function(that, key) {
              var state = getInternalState(that);
              var index = fastKey(key);
              var entry;
              if (index !== "F")
                return state.index[index];
              for (entry = state.first; entry; entry = entry.next) {
                if (entry.key == key)
                  return entry;
              }
            };
            redefineAll(C.prototype, {
              clear: function clear() {
                var that = this;
                var state = getInternalState(that);
                var data = state.index;
                var entry = state.first;
                while (entry) {
                  entry.removed = true;
                  if (entry.previous)
                    entry.previous = entry.previous.next = void 0;
                  delete data[entry.index];
                  entry = entry.next;
                }
                state.first = state.last = void 0;
                if (DESCRIPTORS)
                  state.size = 0;
                else
                  that.size = 0;
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
                  if (prev)
                    prev.next = next;
                  if (next)
                    next.previous = prev;
                  if (state.first == entry)
                    state.first = next;
                  if (state.last == entry)
                    state.last = prev;
                  if (DESCRIPTORS)
                    state.size--;
                  else
                    that.size--;
                }
                return !!entry;
              },
              forEach: function forEach(callbackfn) {
                var state = getInternalState(this);
                var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3);
                var entry;
                while (entry = entry ? entry.next : state.first) {
                  boundFunction(entry.value, entry.key, this);
                  while (entry && entry.removed)
                    entry = entry.previous;
                }
              },
              has: function has(key) {
                return !!getEntry(this, key);
              }
            });
            redefineAll(C.prototype, IS_MAP ? {
              get: function get(key) {
                var entry = getEntry(this, key);
                return entry && entry.value;
              },
              set: function set(key, value) {
                return define(this, key === 0 ? 0 : key, value);
              }
            } : {
              add: function add(value) {
                return define(this, value = value === 0 ? 0 : value, value);
              }
            });
            if (DESCRIPTORS)
              defineProperty(C.prototype, "size", {
                get: function() {
                  return getInternalState(this).size;
                }
              });
            return C;
          },
          setStrong: function(C, CONSTRUCTOR_NAME, IS_MAP) {
            var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
            var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
            var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
            defineIterator(C, CONSTRUCTOR_NAME, function(iterated, kind) {
              setInternalState(this, {
                type: ITERATOR_NAME,
                target: iterated,
                state: getInternalCollectionState(iterated),
                kind,
                last: void 0
              });
            }, function() {
              var state = getInternalIteratorState(this);
              var kind = state.kind;
              var entry = state.last;
              while (entry && entry.removed)
                entry = entry.previous;
              if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                state.target = void 0;
                return { value: void 0, done: true };
              }
              if (kind == "keys")
                return { value: entry.key, done: false };
              if (kind == "values")
                return { value: entry.value, done: false };
              return { value: [entry.key, entry.value], done: false };
            }, IS_MAP ? "entries" : "values", !IS_MAP, true);
            setSpecies(CONSTRUCTOR_NAME);
          }
        };
      },
      "65f0": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("861d");
        var isArray = __webpack_require__("e8b5");
        var wellKnownSymbol = __webpack_require__("b622");
        var SPECIES = wellKnownSymbol("species");
        module2.exports = function(originalArray, length) {
          var C;
          if (isArray(originalArray)) {
            C = originalArray.constructor;
            if (typeof C == "function" && (C === Array || isArray(C.prototype)))
              C = void 0;
            else if (isObject(C)) {
              C = C[SPECIES];
              if (C === null)
                C = void 0;
            }
          }
          return new (C === void 0 ? Array : C)(length === 0 ? 0 : length);
        };
      },
      "69f3": function(module2, exports2, __webpack_require__) {
        var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
        var global = __webpack_require__("da84");
        var isObject = __webpack_require__("861d");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var objectHas = __webpack_require__("5135");
        var shared = __webpack_require__("c6cd");
        var sharedKey = __webpack_require__("f772");
        var hiddenKeys = __webpack_require__("d012");
        var WeakMap = global.WeakMap;
        var set, get, has;
        var enforce = function(it) {
          return has(it) ? get(it) : set(it, {});
        };
        var getterFor = function(TYPE) {
          return function(it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw TypeError("Incompatible receiver, " + TYPE + " required");
            }
            return state;
          };
        };
        if (NATIVE_WEAK_MAP) {
          var store = shared.state || (shared.state = new WeakMap());
          var wmget = store.get;
          var wmhas = store.has;
          var wmset = store.set;
          set = function(it, metadata) {
            metadata.facade = it;
            wmset.call(store, it, metadata);
            return metadata;
          };
          get = function(it) {
            return wmget.call(store, it) || {};
          };
          has = function(it) {
            return wmhas.call(store, it);
          };
        } else {
          var STATE = sharedKey("state");
          hiddenKeys[STATE] = true;
          set = function(it, metadata) {
            metadata.facade = it;
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get = function(it) {
            return objectHas(it, STATE) ? it[STATE] : {};
          };
          has = function(it) {
            return objectHas(it, STATE);
          };
        }
        module2.exports = {
          set,
          get,
          has,
          enforce,
          getterFor
        };
      },
      "6d61": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var global = __webpack_require__("da84");
        var isForced = __webpack_require__("94ca");
        var redefine = __webpack_require__("6eeb");
        var InternalMetadataModule = __webpack_require__("f183");
        var iterate = __webpack_require__("2266");
        var anInstance = __webpack_require__("19aa");
        var isObject = __webpack_require__("861d");
        var fails = __webpack_require__("d039");
        var checkCorrectnessOfIteration = __webpack_require__("1c7e");
        var setToStringTag = __webpack_require__("d44e");
        var inheritIfRequired = __webpack_require__("7156");
        module2.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
          var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
          var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
          var ADDER = IS_MAP ? "set" : "add";
          var NativeConstructor = global[CONSTRUCTOR_NAME];
          var NativePrototype = NativeConstructor && NativeConstructor.prototype;
          var Constructor = NativeConstructor;
          var exported = {};
          var fixMethod = function(KEY) {
            var nativeMethod = NativePrototype[KEY];
            redefine(NativePrototype, KEY, KEY == "add" ? function add(value) {
              nativeMethod.call(this, value === 0 ? 0 : value);
              return this;
            } : KEY == "delete" ? function(key) {
              return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
            } : KEY == "get" ? function get(key) {
              return IS_WEAK && !isObject(key) ? void 0 : nativeMethod.call(this, key === 0 ? 0 : key);
            } : KEY == "has" ? function has(key) {
              return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
            } : function set(key, value) {
              nativeMethod.call(this, key === 0 ? 0 : key, value);
              return this;
            });
          };
          if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != "function" || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
            new NativeConstructor().entries().next();
          })))) {
            Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
            InternalMetadataModule.REQUIRED = true;
          } else if (isForced(CONSTRUCTOR_NAME, true)) {
            var instance = new Constructor();
            var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
            var THROWS_ON_PRIMITIVES = fails(function() {
              instance.has(1);
            });
            var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
              new NativeConstructor(iterable);
            });
            var BUGGY_ZERO = !IS_WEAK && fails(function() {
              var $instance = new NativeConstructor();
              var index = 5;
              while (index--)
                $instance[ADDER](index, index);
              return !$instance.has(-0);
            });
            if (!ACCEPT_ITERABLES) {
              Constructor = wrapper(function(dummy, iterable) {
                anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
                var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
                if (iterable != void 0)
                  iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
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
            if (BUGGY_ZERO || HASNT_CHAINING)
              fixMethod(ADDER);
            if (IS_WEAK && NativePrototype.clear)
              delete NativePrototype.clear;
          }
          exported[CONSTRUCTOR_NAME] = Constructor;
          $({ global: true, forced: Constructor != NativeConstructor }, exported);
          setToStringTag(Constructor, CONSTRUCTOR_NAME);
          if (!IS_WEAK)
            common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
          return Constructor;
        };
      },
      "6eeb": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var has = __webpack_require__("5135");
        var setGlobal = __webpack_require__("ce4e");
        var inspectSource = __webpack_require__("8925");
        var InternalStateModule = __webpack_require__("69f3");
        var getInternalState = InternalStateModule.get;
        var enforceInternalState = InternalStateModule.enforce;
        var TEMPLATE = String(String).split("String");
        (module2.exports = function(O, key, value, options) {
          var unsafe = options ? !!options.unsafe : false;
          var simple = options ? !!options.enumerable : false;
          var noTargetGet = options ? !!options.noTargetGet : false;
          var state;
          if (typeof value == "function") {
            if (typeof key == "string" && !has(value, "name")) {
              createNonEnumerableProperty(value, "name", key);
            }
            state = enforceInternalState(value);
            if (!state.source) {
              state.source = TEMPLATE.join(typeof key == "string" ? key : "");
            }
          }
          if (O === global) {
            if (simple)
              O[key] = value;
            else
              setGlobal(key, value);
            return;
          } else if (!unsafe) {
            delete O[key];
          } else if (!noTargetGet && O[key]) {
            simple = true;
          }
          if (simple)
            O[key] = value;
          else
            createNonEnumerableProperty(O, key, value);
        })(Function.prototype, "toString", function toString() {
          return typeof this == "function" && getInternalState(this).source || inspectSource(this);
        });
      },
      "7156": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("861d");
        var setPrototypeOf = __webpack_require__("d2bb");
        module2.exports = function($this, dummy, Wrapper) {
          var NewTarget, NewTargetPrototype;
          if (setPrototypeOf && typeof (NewTarget = dummy.constructor) == "function" && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype)
            setPrototypeOf($this, NewTargetPrototype);
          return $this;
        };
      },
      "7418": function(module2, exports2) {
        exports2.f = Object.getOwnPropertySymbols;
      },
      "746f": function(module2, exports2, __webpack_require__) {
        var path = __webpack_require__("428f");
        var has = __webpack_require__("5135");
        var wrappedWellKnownSymbolModule = __webpack_require__("e538");
        var defineProperty = __webpack_require__("9bf2").f;
        module2.exports = function(NAME) {
          var Symbol2 = path.Symbol || (path.Symbol = {});
          if (!has(Symbol2, NAME))
            defineProperty(Symbol2, NAME, {
              value: wrappedWellKnownSymbolModule.f(NAME)
            });
        };
      },
      "7839": function(module2, exports2) {
        module2.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf"
        ];
      },
      "7b0b": function(module2, exports2, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__("1d80");
        module2.exports = function(argument) {
          return Object(requireObjectCoercible(argument));
        };
      },
      "7b5b": function(module2, exports2, __webpack_require__) {
      },
      "7c73": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("825a");
        var defineProperties = __webpack_require__("37e8");
        var enumBugKeys = __webpack_require__("7839");
        var hiddenKeys = __webpack_require__("d012");
        var html = __webpack_require__("1be4");
        var documentCreateElement = __webpack_require__("cc12");
        var sharedKey = __webpack_require__("f772");
        var GT = ">";
        var LT = "<";
        var PROTOTYPE = "prototype";
        var SCRIPT = "script";
        var IE_PROTO = sharedKey("IE_PROTO");
        var EmptyConstructor = function() {
        };
        var scriptTag = function(content) {
          return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
        };
        var NullProtoObjectViaActiveX = function(activeXDocument2) {
          activeXDocument2.write(scriptTag(""));
          activeXDocument2.close();
          var temp = activeXDocument2.parentWindow.Object;
          activeXDocument2 = null;
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
            activeXDocument = document.domain && new ActiveXObject("htmlfile");
          } catch (error) {
          }
          NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
          var length = enumBugKeys.length;
          while (length--)
            delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
          return NullProtoObject();
        };
        hiddenKeys[IE_PROTO] = true;
        module2.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            EmptyConstructor[PROTOTYPE] = anObject(O);
            result = new EmptyConstructor();
            EmptyConstructor[PROTOTYPE] = null;
            result[IE_PROTO] = O;
          } else
            result = NullProtoObject();
          return Properties === void 0 ? result : defineProperties(result, Properties);
        };
      },
      "7db0": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var $find = __webpack_require__("b727").find;
        var addToUnscopables = __webpack_require__("44d2");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var FIND = "find";
        var SKIPS_HOLES = true;
        var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);
        if (FIND in [])
          Array(1)[FIND](function() {
            SKIPS_HOLES = false;
          });
        $({ target: "Array", proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
          find: function find(callbackfn) {
            return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables(FIND);
      },
      "7dd0": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var createIteratorConstructor = __webpack_require__("9ed3");
        var getPrototypeOf = __webpack_require__("e163");
        var setPrototypeOf = __webpack_require__("d2bb");
        var setToStringTag = __webpack_require__("d44e");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var redefine = __webpack_require__("6eeb");
        var wellKnownSymbol = __webpack_require__("b622");
        var IS_PURE = __webpack_require__("c430");
        var Iterators = __webpack_require__("3f8c");
        var IteratorsCore = __webpack_require__("ae93");
        var IteratorPrototype = IteratorsCore.IteratorPrototype;
        var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
        var ITERATOR = wellKnownSymbol("iterator");
        var KEYS = "keys";
        var VALUES = "values";
        var ENTRIES = "entries";
        var returnThis = function() {
          return this;
        };
        module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
          createIteratorConstructor(IteratorConstructor, NAME, next);
          var getIterationMethod = function(KIND) {
            if (KIND === DEFAULT && defaultIterator)
              return defaultIterator;
            if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
              return IterablePrototype[KIND];
            switch (KIND) {
              case KEYS:
                return function keys() {
                  return new IteratorConstructor(this, KIND);
                };
              case VALUES:
                return function values() {
                  return new IteratorConstructor(this, KIND);
                };
              case ENTRIES:
                return function entries() {
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
          var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
          var CurrentIteratorPrototype, methods, KEY;
          if (anyNativeIterator) {
            CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
            if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
              if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) {
                  setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                } else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") {
                  createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
                }
              }
              setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
              if (IS_PURE)
                Iterators[TO_STRING_TAG] = returnThis;
            }
          }
          if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
              return nativeIterator.call(this);
            };
          }
          if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
            createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
          }
          Iterators[NAME] = defaultIterator;
          if (DEFAULT) {
            methods = {
              values: getIterationMethod(VALUES),
              keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
              entries: getIterationMethod(ENTRIES)
            };
            if (FORCED)
              for (KEY in methods) {
                if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                  redefine(IterablePrototype, KEY, methods[KEY]);
                }
              }
            else
              $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
          }
          return methods;
        };
      },
      "7f9a": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        var inspectSource = __webpack_require__("8925");
        var WeakMap = global.WeakMap;
        module2.exports = typeof WeakMap === "function" && /native code/.test(inspectSource(WeakMap));
      },
      "81d5": function(module2, exports2, __webpack_require__) {
        "use strict";
        var toObject = __webpack_require__("7b0b");
        var toAbsoluteIndex = __webpack_require__("23cb");
        var toLength = __webpack_require__("50c4");
        module2.exports = function fill(value) {
          var O = toObject(this);
          var length = toLength(O.length);
          var argumentsLength = arguments.length;
          var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : void 0, length);
          var end = argumentsLength > 2 ? arguments[2] : void 0;
          var endPos = end === void 0 ? length : toAbsoluteIndex(end, length);
          while (endPos > index)
            O[index++] = value;
          return O;
        };
      },
      "825a": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("861d");
        module2.exports = function(it) {
          if (!isObject(it)) {
            throw TypeError(String(it) + " is not an object");
          }
          return it;
        };
      },
      "83ab": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        module2.exports = !fails(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      },
      "8418": function(module2, exports2, __webpack_require__) {
        "use strict";
        var toPrimitive = __webpack_require__("c04e");
        var definePropertyModule = __webpack_require__("9bf2");
        var createPropertyDescriptor = __webpack_require__("5c6c");
        module2.exports = function(object, key, value) {
          var propertyKey = toPrimitive(key);
          if (propertyKey in object)
            definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
          else
            object[propertyKey] = value;
        };
      },
      "857a": function(module2, exports2, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__("1d80");
        var quot = /"/g;
        module2.exports = function(string, tag, attribute, value) {
          var S = String(requireObjectCoercible(string));
          var p1 = "<" + tag;
          if (attribute !== "")
            p1 += " " + attribute + '="' + String(value).replace(quot, "&quot;") + '"';
          return p1 + ">" + S + "</" + tag + ">";
        };
      },
      "861d": function(module2, exports2) {
        module2.exports = function(it) {
          return typeof it === "object" ? it !== null : typeof it === "function";
        };
      },
      "8875": function(module2, exports2, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        (function(root, factory) {
          if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(typeof self !== "undefined" ? self : this, function() {
          function getCurrentScript() {
            var descriptor = Object.getOwnPropertyDescriptor(document, "currentScript");
            if (!descriptor && "currentScript" in document && document.currentScript) {
              return document.currentScript;
            }
            if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
              return document.currentScript;
            }
            try {
              throw new Error();
            } catch (err) {
              var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig, ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig, stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack), scriptLocation = stackDetails && stackDetails[1] || false, line = stackDetails && stackDetails[2] || false, currentLocation = document.location.href.replace(document.location.hash, ""), pageSource, inlineScriptSourceRegExp, inlineScriptSource, scripts = document.getElementsByTagName("script");
              if (scriptLocation === currentLocation) {
                pageSource = document.documentElement.outerHTML;
                inlineScriptSourceRegExp = new RegExp("(?:[^\\n]+?\\n){0," + (line - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i");
                inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, "$1").trim();
              }
              for (var i = 0; i < scripts.length; i++) {
                if (scripts[i].readyState === "interactive") {
                  return scripts[i];
                }
                if (scripts[i].src === scriptLocation) {
                  return scripts[i];
                }
                if (scriptLocation === currentLocation && scripts[i].innerHTML && scripts[i].innerHTML.trim() === inlineScriptSource) {
                  return scripts[i];
                }
              }
              return null;
            }
          }
          ;
          return getCurrentScript;
        });
      },
      "8925": function(module2, exports2, __webpack_require__) {
        var store = __webpack_require__("c6cd");
        var functionToString = Function.toString;
        if (typeof store.inspectSource != "function") {
          store.inspectSource = function(it) {
            return functionToString.call(it);
          };
        }
        module2.exports = store.inspectSource;
      },
      "8aa5": function(module2, exports2, __webpack_require__) {
        "use strict";
        var charAt = __webpack_require__("6547").charAt;
        module2.exports = function(S, index, unicode) {
          return index + (unicode ? charAt(S, index).length : 1);
        };
      },
      "8bbf": function(module2, exports2) {
        module2.exports = (init_vue_runtime_esm_bundler(), vue_runtime_esm_bundler_exports);
      },
      "90e3": function(module2, exports2) {
        var id = 0;
        var postfix = Math.random();
        module2.exports = function(key) {
          return "Symbol(" + String(key === void 0 ? "" : key) + ")_" + (++id + postfix).toString(36);
        };
      },
      "9112": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var definePropertyModule = __webpack_require__("9bf2");
        var createPropertyDescriptor = __webpack_require__("5c6c");
        module2.exports = DESCRIPTORS ? function(object, key, value) {
          return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
        } : function(object, key, value) {
          object[key] = value;
          return object;
        };
      },
      "9263": function(module2, exports2, __webpack_require__) {
        "use strict";
        var regexpFlags = __webpack_require__("ad6d");
        var stickyHelpers = __webpack_require__("9f7f");
        var nativeExec = RegExp.prototype.exec;
        var nativeReplace = String.prototype.replace;
        var patchedExec = nativeExec;
        var UPDATES_LAST_INDEX_WRONG = function() {
          var re1 = /a/;
          var re2 = /b*/g;
          nativeExec.call(re1, "a");
          nativeExec.call(re2, "a");
          return re1.lastIndex !== 0 || re2.lastIndex !== 0;
        }();
        var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;
        var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;
        if (PATCH) {
          patchedExec = function exec(str) {
            var re = this;
            var lastIndex, reCopy, match, i;
            var sticky = UNSUPPORTED_Y && re.sticky;
            var flags = regexpFlags.call(re);
            var source = re.source;
            var charsAdded = 0;
            var strCopy = str;
            if (sticky) {
              flags = flags.replace("y", "");
              if (flags.indexOf("g") === -1) {
                flags += "g";
              }
              strCopy = String(str).slice(re.lastIndex);
              if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== "\n")) {
                source = "(?: " + source + ")";
                strCopy = " " + strCopy;
                charsAdded++;
              }
              reCopy = new RegExp("^(?:" + source + ")", flags);
            }
            if (NPCG_INCLUDED) {
              reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
            }
            if (UPDATES_LAST_INDEX_WRONG)
              lastIndex = re.lastIndex;
            match = nativeExec.call(sticky ? reCopy : re, strCopy);
            if (sticky) {
              if (match) {
                match.input = match.input.slice(charsAdded);
                match[0] = match[0].slice(charsAdded);
                match.index = re.lastIndex;
                re.lastIndex += match[0].length;
              } else
                re.lastIndex = 0;
            } else if (UPDATES_LAST_INDEX_WRONG && match) {
              re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
            }
            if (NPCG_INCLUDED && match && match.length > 1) {
              nativeReplace.call(match[0], reCopy, function() {
                for (i = 1; i < arguments.length - 2; i++) {
                  if (arguments[i] === void 0)
                    match[i] = void 0;
                }
              });
            }
            return match;
          };
        }
        module2.exports = patchedExec;
      },
      "94ca": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        var replacement = /#|\.prototype\./;
        var isForced = function(feature, detection) {
          var value = data[normalize(feature)];
          return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
        };
        var normalize = isForced.normalize = function(string) {
          return String(string).replace(replacement, ".").toLowerCase();
        };
        var data = isForced.data = {};
        var NATIVE = isForced.NATIVE = "N";
        var POLYFILL = isForced.POLYFILL = "P";
        module2.exports = isForced;
      },
      "99af": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var fails = __webpack_require__("d039");
        var isArray = __webpack_require__("e8b5");
        var isObject = __webpack_require__("861d");
        var toObject = __webpack_require__("7b0b");
        var toLength = __webpack_require__("50c4");
        var createProperty = __webpack_require__("8418");
        var arraySpeciesCreate = __webpack_require__("65f0");
        var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
        var wellKnownSymbol = __webpack_require__("b622");
        var V8_VERSION = __webpack_require__("2d00");
        var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
        var MAX_SAFE_INTEGER = 9007199254740991;
        var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
        var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
          var array = [];
          array[IS_CONCAT_SPREADABLE] = false;
          return array.concat()[0] !== array;
        });
        var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
        var isConcatSpreadable = function(O) {
          if (!isObject(O))
            return false;
          var spreadable = O[IS_CONCAT_SPREADABLE];
          return spreadable !== void 0 ? !!spreadable : isArray(O);
        };
        var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
        $({ target: "Array", proto: true, forced: FORCED }, {
          concat: function concat(arg) {
            var O = toObject(this);
            var A = arraySpeciesCreate(O, 0);
            var n = 0;
            var i, k, length, len, E;
            for (i = -1, length = arguments.length; i < length; i++) {
              E = i === -1 ? O : arguments[i];
              if (isConcatSpreadable(E)) {
                len = toLength(E.length);
                if (n + len > MAX_SAFE_INTEGER)
                  throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                for (k = 0; k < len; k++, n++)
                  if (k in E)
                    createProperty(A, n, E[k]);
              } else {
                if (n >= MAX_SAFE_INTEGER)
                  throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                createProperty(A, n++, E);
              }
            }
            A.length = n;
            return A;
          }
        });
      },
      "9bdd": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("825a");
        var iteratorClose = __webpack_require__("2a62");
        module2.exports = function(iterator, fn, value, ENTRIES) {
          try {
            return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
          } catch (error) {
            iteratorClose(iterator);
            throw error;
          }
        };
      },
      "9bf2": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var IE8_DOM_DEFINE = __webpack_require__("0cfb");
        var anObject = __webpack_require__("825a");
        var toPrimitive = __webpack_require__("c04e");
        var nativeDefineProperty = Object.defineProperty;
        exports2.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPrimitive(P, true);
          anObject(Attributes);
          if (IE8_DOM_DEFINE)
            try {
              return nativeDefineProperty(O, P, Attributes);
            } catch (error) {
            }
          if ("get" in Attributes || "set" in Attributes)
            throw TypeError("Accessors not supported");
          if ("value" in Attributes)
            O[P] = Attributes.value;
          return O;
        };
      },
      "9ed3": function(module2, exports2, __webpack_require__) {
        "use strict";
        var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
        var create = __webpack_require__("7c73");
        var createPropertyDescriptor = __webpack_require__("5c6c");
        var setToStringTag = __webpack_require__("d44e");
        var Iterators = __webpack_require__("3f8c");
        var returnThis = function() {
          return this;
        };
        module2.exports = function(IteratorConstructor, NAME, next) {
          var TO_STRING_TAG = NAME + " Iterator";
          IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
          setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
          Iterators[TO_STRING_TAG] = returnThis;
          return IteratorConstructor;
        };
      },
      "9f7f": function(module2, exports2, __webpack_require__) {
        "use strict";
        var fails = __webpack_require__("d039");
        function RE(s, f) {
          return RegExp(s, f);
        }
        exports2.UNSUPPORTED_Y = fails(function() {
          var re = RE("a", "y");
          re.lastIndex = 2;
          return re.exec("abcd") != null;
        });
        exports2.BROKEN_CARET = fails(function() {
          var re = RE("^r", "gy");
          re.lastIndex = 2;
          return re.exec("str") != null;
        });
      },
      "a15b": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var IndexedObject = __webpack_require__("44ad");
        var toIndexedObject = __webpack_require__("fc6a");
        var arrayMethodIsStrict = __webpack_require__("a640");
        var nativeJoin = [].join;
        var ES3_STRINGS = IndexedObject != Object;
        var STRICT_METHOD = arrayMethodIsStrict("join", ",");
        $({ target: "Array", proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
          join: function join(separator) {
            return nativeJoin.call(toIndexedObject(this), separator === void 0 ? "," : separator);
          }
        });
      },
      "a434": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var toAbsoluteIndex = __webpack_require__("23cb");
        var toInteger = __webpack_require__("a691");
        var toLength = __webpack_require__("50c4");
        var toObject = __webpack_require__("7b0b");
        var arraySpeciesCreate = __webpack_require__("65f0");
        var createProperty = __webpack_require__("8418");
        var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice");
        var USES_TO_LENGTH = arrayMethodUsesToLength("splice", { ACCESSORS: true, 0: 0, 1: 2 });
        var max = Math.max;
        var min = Math.min;
        var MAX_SAFE_INTEGER = 9007199254740991;
        var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = "Maximum allowed length exceeded";
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
          splice: function splice(start, deleteCount) {
            var O = toObject(this);
            var len = toLength(O.length);
            var actualStart = toAbsoluteIndex(start, len);
            var argumentsLength = arguments.length;
            var insertCount, actualDeleteCount, A, k, from, to;
            if (argumentsLength === 0) {
              insertCount = actualDeleteCount = 0;
            } else if (argumentsLength === 1) {
              insertCount = 0;
              actualDeleteCount = len - actualStart;
            } else {
              insertCount = argumentsLength - 2;
              actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
            }
            if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
              throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
            }
            A = arraySpeciesCreate(O, actualDeleteCount);
            for (k = 0; k < actualDeleteCount; k++) {
              from = actualStart + k;
              if (from in O)
                createProperty(A, k, O[from]);
            }
            A.length = actualDeleteCount;
            if (insertCount < actualDeleteCount) {
              for (k = actualStart; k < len - actualDeleteCount; k++) {
                from = k + actualDeleteCount;
                to = k + insertCount;
                if (from in O)
                  O[to] = O[from];
                else
                  delete O[to];
              }
              for (k = len; k > len - actualDeleteCount + insertCount; k--)
                delete O[k - 1];
            } else if (insertCount > actualDeleteCount) {
              for (k = len - actualDeleteCount; k > actualStart; k--) {
                from = k + actualDeleteCount - 1;
                to = k + insertCount - 1;
                if (from in O)
                  O[to] = O[from];
                else
                  delete O[to];
              }
            }
            for (k = 0; k < insertCount; k++) {
              O[k + actualStart] = arguments[k + 2];
            }
            O.length = len - actualDeleteCount + insertCount;
            return A;
          }
        });
      },
      "a4d3": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var global = __webpack_require__("da84");
        var getBuiltIn = __webpack_require__("d066");
        var IS_PURE = __webpack_require__("c430");
        var DESCRIPTORS = __webpack_require__("83ab");
        var NATIVE_SYMBOL = __webpack_require__("4930");
        var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
        var fails = __webpack_require__("d039");
        var has = __webpack_require__("5135");
        var isArray = __webpack_require__("e8b5");
        var isObject = __webpack_require__("861d");
        var anObject = __webpack_require__("825a");
        var toObject = __webpack_require__("7b0b");
        var toIndexedObject = __webpack_require__("fc6a");
        var toPrimitive = __webpack_require__("c04e");
        var createPropertyDescriptor = __webpack_require__("5c6c");
        var nativeObjectCreate = __webpack_require__("7c73");
        var objectKeys = __webpack_require__("df75");
        var getOwnPropertyNamesModule = __webpack_require__("241c");
        var getOwnPropertyNamesExternal = __webpack_require__("057f");
        var getOwnPropertySymbolsModule = __webpack_require__("7418");
        var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
        var definePropertyModule = __webpack_require__("9bf2");
        var propertyIsEnumerableModule = __webpack_require__("d1e7");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var redefine = __webpack_require__("6eeb");
        var shared = __webpack_require__("5692");
        var sharedKey = __webpack_require__("f772");
        var hiddenKeys = __webpack_require__("d012");
        var uid = __webpack_require__("90e3");
        var wellKnownSymbol = __webpack_require__("b622");
        var wrappedWellKnownSymbolModule = __webpack_require__("e538");
        var defineWellKnownSymbol = __webpack_require__("746f");
        var setToStringTag = __webpack_require__("d44e");
        var InternalStateModule = __webpack_require__("69f3");
        var $forEach = __webpack_require__("b727").forEach;
        var HIDDEN = sharedKey("hidden");
        var SYMBOL = "Symbol";
        var PROTOTYPE = "prototype";
        var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(SYMBOL);
        var ObjectPrototype = Object[PROTOTYPE];
        var $Symbol = global.Symbol;
        var $stringify = getBuiltIn("JSON", "stringify");
        var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        var nativeDefineProperty = definePropertyModule.f;
        var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
        var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
        var AllSymbols = shared("symbols");
        var ObjectPrototypeSymbols = shared("op-symbols");
        var StringToSymbolRegistry = shared("string-to-symbol-registry");
        var SymbolToStringRegistry = shared("symbol-to-string-registry");
        var WellKnownSymbolsStore = shared("wks");
        var QObject = global.QObject;
        var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
        var setSymbolDescriptor = DESCRIPTORS && fails(function() {
          return nativeObjectCreate(nativeDefineProperty({}, "a", {
            get: function() {
              return nativeDefineProperty(this, "a", { value: 7 }).a;
            }
          })).a != 7;
        }) ? function(O, P, Attributes) {
          var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
          if (ObjectPrototypeDescriptor)
            delete ObjectPrototype[P];
          nativeDefineProperty(O, P, Attributes);
          if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
            nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
          }
        } : nativeDefineProperty;
        var wrap = function(tag, description) {
          var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
          setInternalState(symbol, {
            type: SYMBOL,
            tag,
            description
          });
          if (!DESCRIPTORS)
            symbol.description = description;
          return symbol;
        };
        var isSymbol = USE_SYMBOL_AS_UID ? function(it) {
          return typeof it == "symbol";
        } : function(it) {
          return Object(it) instanceof $Symbol;
        };
        var $defineProperty = function defineProperty(O, P, Attributes) {
          if (O === ObjectPrototype)
            $defineProperty(ObjectPrototypeSymbols, P, Attributes);
          anObject(O);
          var key = toPrimitive(P, true);
          anObject(Attributes);
          if (has(AllSymbols, key)) {
            if (!Attributes.enumerable) {
              if (!has(O, HIDDEN))
                nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
              O[HIDDEN][key] = true;
            } else {
              if (has(O, HIDDEN) && O[HIDDEN][key])
                O[HIDDEN][key] = false;
              Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
            }
            return setSymbolDescriptor(O, key, Attributes);
          }
          return nativeDefineProperty(O, key, Attributes);
        };
        var $defineProperties = function defineProperties(O, Properties) {
          anObject(O);
          var properties = toIndexedObject(Properties);
          var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
          $forEach(keys, function(key) {
            if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key))
              $defineProperty(O, key, properties[key]);
          });
          return O;
        };
        var $create = function create(O, Properties) {
          return Properties === void 0 ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(V) {
          var P = toPrimitive(V, true);
          var enumerable = nativePropertyIsEnumerable.call(this, P);
          if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P))
            return false;
          return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
          var it = toIndexedObject(O);
          var key = toPrimitive(P, true);
          if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key))
            return;
          var descriptor = nativeGetOwnPropertyDescriptor(it, key);
          if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
            descriptor.enumerable = true;
          }
          return descriptor;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(O) {
          var names = nativeGetOwnPropertyNames(toIndexedObject(O));
          var result = [];
          $forEach(names, function(key) {
            if (!has(AllSymbols, key) && !has(hiddenKeys, key))
              result.push(key);
          });
          return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
          var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
          var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
          var result = [];
          $forEach(names, function(key) {
            if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
              result.push(AllSymbols[key]);
            }
          });
          return result;
        };
        if (!NATIVE_SYMBOL) {
          $Symbol = function Symbol2() {
            if (this instanceof $Symbol)
              throw TypeError("Symbol is not a constructor");
            var description = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]);
            var tag = uid(description);
            var setter = function(value) {
              if (this === ObjectPrototype)
                setter.call(ObjectPrototypeSymbols, value);
              if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                this[HIDDEN][tag] = false;
              setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
            };
            if (DESCRIPTORS && USE_SETTER)
              setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
            return wrap(tag, description);
          };
          redefine($Symbol[PROTOTYPE], "toString", function toString() {
            return getInternalState(this).tag;
          });
          redefine($Symbol, "withoutSetter", function(description) {
            return wrap(uid(description), description);
          });
          propertyIsEnumerableModule.f = $propertyIsEnumerable;
          definePropertyModule.f = $defineProperty;
          getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
          getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
          getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
          wrappedWellKnownSymbolModule.f = function(name) {
            return wrap(wellKnownSymbol(name), name);
          };
          if (DESCRIPTORS) {
            nativeDefineProperty($Symbol[PROTOTYPE], "description", {
              configurable: true,
              get: function description() {
                return getInternalState(this).description;
              }
            });
            if (!IS_PURE) {
              redefine(ObjectPrototype, "propertyIsEnumerable", $propertyIsEnumerable, { unsafe: true });
            }
          }
        }
        $({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
          Symbol: $Symbol
        });
        $forEach(objectKeys(WellKnownSymbolsStore), function(name) {
          defineWellKnownSymbol(name);
        });
        $({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
          "for": function(key) {
            var string = String(key);
            if (has(StringToSymbolRegistry, string))
              return StringToSymbolRegistry[string];
            var symbol = $Symbol(string);
            StringToSymbolRegistry[string] = symbol;
            SymbolToStringRegistry[symbol] = string;
            return symbol;
          },
          keyFor: function keyFor(sym) {
            if (!isSymbol(sym))
              throw TypeError(sym + " is not a symbol");
            if (has(SymbolToStringRegistry, sym))
              return SymbolToStringRegistry[sym];
          },
          useSetter: function() {
            USE_SETTER = true;
          },
          useSimple: function() {
            USE_SETTER = false;
          }
        });
        $({ target: "Object", stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
          create: $create,
          defineProperty: $defineProperty,
          defineProperties: $defineProperties,
          getOwnPropertyDescriptor: $getOwnPropertyDescriptor
        });
        $({ target: "Object", stat: true, forced: !NATIVE_SYMBOL }, {
          getOwnPropertyNames: $getOwnPropertyNames,
          getOwnPropertySymbols: $getOwnPropertySymbols
        });
        $({ target: "Object", stat: true, forced: fails(function() {
          getOwnPropertySymbolsModule.f(1);
        }) }, {
          getOwnPropertySymbols: function getOwnPropertySymbols(it) {
            return getOwnPropertySymbolsModule.f(toObject(it));
          }
        });
        if ($stringify) {
          var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function() {
            var symbol = $Symbol();
            return $stringify([symbol]) != "[null]" || $stringify({ a: symbol }) != "{}" || $stringify(Object(symbol)) != "{}";
          });
          $({ target: "JSON", stat: true, forced: FORCED_JSON_STRINGIFY }, {
            stringify: function stringify(it, replacer, space) {
              var args = [it];
              var index = 1;
              var $replacer;
              while (arguments.length > index)
                args.push(arguments[index++]);
              $replacer = replacer;
              if (!isObject(replacer) && it === void 0 || isSymbol(it))
                return;
              if (!isArray(replacer))
                replacer = function(key, value) {
                  if (typeof $replacer == "function")
                    value = $replacer.call(this, key, value);
                  if (!isSymbol(value))
                    return value;
                };
              args[1] = replacer;
              return $stringify.apply(null, args);
            }
          });
        }
        if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
          createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        }
        setToStringTag($Symbol, SYMBOL);
        hiddenKeys[HIDDEN] = true;
      },
      "a630": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var from = __webpack_require__("4df4");
        var checkCorrectnessOfIteration = __webpack_require__("1c7e");
        var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
          Array.from(iterable);
        });
        $({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
          from
        });
      },
      "a640": function(module2, exports2, __webpack_require__) {
        "use strict";
        var fails = __webpack_require__("d039");
        module2.exports = function(METHOD_NAME, argument) {
          var method = [][METHOD_NAME];
          return !!method && fails(function() {
            method.call(null, argument || function() {
              throw 1;
            }, 1);
          });
        };
      },
      "a691": function(module2, exports2) {
        var ceil = Math.ceil;
        var floor = Math.floor;
        module2.exports = function(argument) {
          return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
        };
      },
      "a9e3": function(module2, exports2, __webpack_require__) {
        "use strict";
        var DESCRIPTORS = __webpack_require__("83ab");
        var global = __webpack_require__("da84");
        var isForced = __webpack_require__("94ca");
        var redefine = __webpack_require__("6eeb");
        var has = __webpack_require__("5135");
        var classof = __webpack_require__("c6b6");
        var inheritIfRequired = __webpack_require__("7156");
        var toPrimitive = __webpack_require__("c04e");
        var fails = __webpack_require__("d039");
        var create = __webpack_require__("7c73");
        var getOwnPropertyNames = __webpack_require__("241c").f;
        var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
        var defineProperty = __webpack_require__("9bf2").f;
        var trim = __webpack_require__("58a8").trim;
        var NUMBER = "Number";
        var NativeNumber = global[NUMBER];
        var NumberPrototype = NativeNumber.prototype;
        var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;
        var toNumber = function(argument) {
          var it = toPrimitive(argument, false);
          var first, third, radix, maxCode, digits, length, index, code;
          if (typeof it == "string" && it.length > 2) {
            it = trim(it);
            first = it.charCodeAt(0);
            if (first === 43 || first === 45) {
              third = it.charCodeAt(2);
              if (third === 88 || third === 120)
                return NaN;
            } else if (first === 48) {
              switch (it.charCodeAt(1)) {
                case 66:
                case 98:
                  radix = 2;
                  maxCode = 49;
                  break;
                case 79:
                case 111:
                  radix = 8;
                  maxCode = 55;
                  break;
                default:
                  return +it;
              }
              digits = it.slice(2);
              length = digits.length;
              for (index = 0; index < length; index++) {
                code = digits.charCodeAt(index);
                if (code < 48 || code > maxCode)
                  return NaN;
              }
              return parseInt(digits, radix);
            }
          }
          return +it;
        };
        if (isForced(NUMBER, !NativeNumber(" 0o1") || !NativeNumber("0b1") || NativeNumber("+0x1"))) {
          var NumberWrapper = function Number2(value) {
            var it = arguments.length < 1 ? 0 : value;
            var dummy = this;
            return dummy instanceof NumberWrapper && (BROKEN_CLASSOF ? fails(function() {
              NumberPrototype.valueOf.call(dummy);
            }) : classof(dummy) != NUMBER) ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
          };
          for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), j = 0, key; keys.length > j; j++) {
            if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
              defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
            }
          }
          NumberWrapper.prototype = NumberPrototype;
          NumberPrototype.constructor = NumberWrapper;
          redefine(global, NUMBER, NumberWrapper);
        }
      },
      "ab13": function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__("b622");
        var MATCH = wellKnownSymbol("match");
        module2.exports = function(METHOD_NAME) {
          var regexp = /./;
          try {
            "/./"[METHOD_NAME](regexp);
          } catch (error1) {
            try {
              regexp[MATCH] = false;
              return "/./"[METHOD_NAME](regexp);
            } catch (error2) {
            }
          }
          return false;
        };
      },
      "ac1f": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var exec = __webpack_require__("9263");
        $({ target: "RegExp", proto: true, forced: /./.exec !== exec }, {
          exec
        });
      },
      "ad6d": function(module2, exports2, __webpack_require__) {
        "use strict";
        var anObject = __webpack_require__("825a");
        module2.exports = function() {
          var that = anObject(this);
          var result = "";
          if (that.global)
            result += "g";
          if (that.ignoreCase)
            result += "i";
          if (that.multiline)
            result += "m";
          if (that.dotAll)
            result += "s";
          if (that.unicode)
            result += "u";
          if (that.sticky)
            result += "y";
          return result;
        };
      },
      "ade3": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _defineProperty;
        });
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
      },
      "ae40": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var fails = __webpack_require__("d039");
        var has = __webpack_require__("5135");
        var defineProperty = Object.defineProperty;
        var cache = {};
        var thrower = function(it) {
          throw it;
        };
        module2.exports = function(METHOD_NAME, options) {
          if (has(cache, METHOD_NAME))
            return cache[METHOD_NAME];
          if (!options)
            options = {};
          var method = [][METHOD_NAME];
          var ACCESSORS = has(options, "ACCESSORS") ? options.ACCESSORS : false;
          var argument0 = has(options, 0) ? options[0] : thrower;
          var argument1 = has(options, 1) ? options[1] : void 0;
          return cache[METHOD_NAME] = !!method && !fails(function() {
            if (ACCESSORS && !DESCRIPTORS)
              return true;
            var O = { length: -1 };
            if (ACCESSORS)
              defineProperty(O, 1, { enumerable: true, get: thrower });
            else
              O[1] = 1;
            method.call(O, argument0, argument1);
          });
        };
      },
      "ae93": function(module2, exports2, __webpack_require__) {
        "use strict";
        var getPrototypeOf = __webpack_require__("e163");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var has = __webpack_require__("5135");
        var wellKnownSymbol = __webpack_require__("b622");
        var IS_PURE = __webpack_require__("c430");
        var ITERATOR = wellKnownSymbol("iterator");
        var BUGGY_SAFARI_ITERATORS = false;
        var returnThis = function() {
          return this;
        };
        var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
        if ([].keys) {
          arrayIterator = [].keys();
          if (!("next" in arrayIterator))
            BUGGY_SAFARI_ITERATORS = true;
          else {
            PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
            if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
              IteratorPrototype = PrototypeOfArrayIteratorPrototype;
          }
        }
        if (IteratorPrototype == void 0)
          IteratorPrototype = {};
        if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
          createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
        }
        module2.exports = {
          IteratorPrototype,
          BUGGY_SAFARI_ITERATORS
        };
      },
      "af03": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        module2.exports = function(METHOD_NAME) {
          return fails(function() {
            var test = ""[METHOD_NAME]('"');
            return test !== test.toLowerCase() || test.split('"').length > 3;
          });
        };
      },
      "b041": function(module2, exports2, __webpack_require__) {
        "use strict";
        var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
        var classof = __webpack_require__("f5df");
        module2.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
          return "[object " + classof(this) + "]";
        };
      },
      "b0c0": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var defineProperty = __webpack_require__("9bf2").f;
        var FunctionPrototype = Function.prototype;
        var FunctionPrototypeToString = FunctionPrototype.toString;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = "name";
        if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
          defineProperty(FunctionPrototype, NAME, {
            configurable: true,
            get: function() {
              try {
                return FunctionPrototypeToString.call(this).match(nameRE)[1];
              } catch (error) {
                return "";
              }
            }
          });
        }
      },
      "b48b": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_event_vue_vue_type_style_index_0_id_cdf79fc4_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7b5b");
        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_event_vue_vue_type_style_index_0_id_cdf79fc4_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_event_vue_vue_type_style_index_0_id_cdf79fc4_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
      },
      "b575": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
        var macrotask = __webpack_require__("2cf4").set;
        var IS_IOS = __webpack_require__("1cdc");
        var IS_NODE = __webpack_require__("605d");
        var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
        var document2 = global.document;
        var process = global.process;
        var Promise2 = global.Promise;
        var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, "queueMicrotask");
        var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
        var flush, head, last, notify, toggle, node, promise, then;
        if (!queueMicrotask) {
          flush = function() {
            var parent, fn;
            if (IS_NODE && (parent = process.domain))
              parent.exit();
            while (head) {
              fn = head.fn;
              head = head.next;
              try {
                fn();
              } catch (error) {
                if (head)
                  notify();
                else
                  last = void 0;
                throw error;
              }
            }
            last = void 0;
            if (parent)
              parent.enter();
          };
          if (!IS_IOS && !IS_NODE && MutationObserver && document2) {
            toggle = true;
            node = document2.createTextNode("");
            new MutationObserver(flush).observe(node, { characterData: true });
            notify = function() {
              node.data = toggle = !toggle;
            };
          } else if (Promise2 && Promise2.resolve) {
            promise = Promise2.resolve(void 0);
            then = promise.then;
            notify = function() {
              then.call(promise, flush);
            };
          } else if (IS_NODE) {
            notify = function() {
              process.nextTick(flush);
            };
          } else {
            notify = function() {
              macrotask.call(global, flush);
            };
          }
        }
        module2.exports = queueMicrotask || function(fn) {
          var task = { fn, next: void 0 };
          if (last)
            last.next = task;
          if (!head) {
            head = task;
            notify();
          }
          last = task;
        };
      },
      "b622": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        var shared = __webpack_require__("5692");
        var has = __webpack_require__("5135");
        var uid = __webpack_require__("90e3");
        var NATIVE_SYMBOL = __webpack_require__("4930");
        var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
        var WellKnownSymbolsStore = shared("wks");
        var Symbol2 = global.Symbol;
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
        module2.exports = function(name) {
          if (!has(WellKnownSymbolsStore, name)) {
            if (NATIVE_SYMBOL && has(Symbol2, name))
              WellKnownSymbolsStore[name] = Symbol2[name];
            else
              WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
          }
          return WellKnownSymbolsStore[name];
        };
      },
      "b64b": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var toObject = __webpack_require__("7b0b");
        var nativeKeys = __webpack_require__("df75");
        var fails = __webpack_require__("d039");
        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeKeys(1);
        });
        $({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES }, {
          keys: function keys(it) {
            return nativeKeys(toObject(it));
          }
        });
      },
      "b727": function(module2, exports2, __webpack_require__) {
        var bind = __webpack_require__("0366");
        var IndexedObject = __webpack_require__("44ad");
        var toObject = __webpack_require__("7b0b");
        var toLength = __webpack_require__("50c4");
        var arraySpeciesCreate = __webpack_require__("65f0");
        var push = [].push;
        var createMethod = function(TYPE) {
          var IS_MAP = TYPE == 1;
          var IS_FILTER = TYPE == 2;
          var IS_SOME = TYPE == 3;
          var IS_EVERY = TYPE == 4;
          var IS_FIND_INDEX = TYPE == 6;
          var IS_FILTER_OUT = TYPE == 7;
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          return function($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self2 = IndexedObject(O);
            var boundFunction = bind(callbackfn, that, 3);
            var length = toLength(self2.length);
            var index = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : void 0;
            var value, result;
            for (; length > index; index++)
              if (NO_HOLES || index in self2) {
                value = self2[index];
                result = boundFunction(value, index, O);
                if (TYPE) {
                  if (IS_MAP)
                    target[index] = result;
                  else if (result)
                    switch (TYPE) {
                      case 3:
                        return true;
                      case 5:
                        return value;
                      case 6:
                        return index;
                      case 2:
                        push.call(target, value);
                    }
                  else
                    switch (TYPE) {
                      case 4:
                        return false;
                      case 7:
                        push.call(target, value);
                    }
                }
              }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
          };
        };
        module2.exports = {
          forEach: createMethod(0),
          map: createMethod(1),
          filter: createMethod(2),
          some: createMethod(3),
          every: createMethod(4),
          find: createMethod(5),
          findIndex: createMethod(6),
          filterOut: createMethod(7)
        };
      },
      "bb2f": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        module2.exports = !fails(function() {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      "bee2": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _createClass;
        });
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
      },
      "c04e": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("861d");
        module2.exports = function(input, PREFERRED_STRING) {
          if (!isObject(input))
            return input;
          var fn, val;
          if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
            return val;
          if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input)))
            return val;
          if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
            return val;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      "c430": function(module2, exports2) {
        module2.exports = false;
      },
      "c4be": function(module2, exports2, __webpack_require__) {
      },
      "c6b6": function(module2, exports2) {
        var toString = {}.toString;
        module2.exports = function(it) {
          return toString.call(it).slice(8, -1);
        };
      },
      "c6cd": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        var setGlobal = __webpack_require__("ce4e");
        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || setGlobal(SHARED, {});
        module2.exports = store;
      },
      "c740": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var $findIndex = __webpack_require__("b727").findIndex;
        var addToUnscopables = __webpack_require__("44d2");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var FIND_INDEX = "findIndex";
        var SKIPS_HOLES = true;
        var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);
        if (FIND_INDEX in [])
          Array(1)[FIND_INDEX](function() {
            SKIPS_HOLES = false;
          });
        $({ target: "Array", proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
          findIndex: function findIndex(callbackfn) {
            return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables(FIND_INDEX);
      },
      "c8ba": function(module2, exports2) {
        var g;
        g = function() {
          return this;
        }();
        try {
          g = g || new Function("return this")();
        } catch (e) {
          if (typeof window === "object")
            g = window;
        }
        module2.exports = g;
      },
      "c8c4": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_header_vue_vue_type_style_index_0_id_d2bb7926_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c4be");
        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_header_vue_vue_type_style_index_0_id_d2bb7926_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_header_vue_vue_type_style_index_0_id_d2bb7926_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
      },
      "c96a": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var createHTML = __webpack_require__("857a");
        var forcedStringHTMLMethod = __webpack_require__("af03");
        $({ target: "String", proto: true, forced: forcedStringHTMLMethod("small") }, {
          small: function small() {
            return createHTML(this, "small", "", "");
          }
        });
      },
      "c975": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var $indexOf = __webpack_require__("4d64").indexOf;
        var arrayMethodIsStrict = __webpack_require__("a640");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var nativeIndexOf = [].indexOf;
        var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
        var STRICT_METHOD = arrayMethodIsStrict("indexOf");
        var USES_TO_LENGTH = arrayMethodUsesToLength("indexOf", { ACCESSORS: true, 1: 0 });
        $({ target: "Array", proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
          indexOf: function indexOf(searchElement) {
            return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "ca84": function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__("5135");
        var toIndexedObject = __webpack_require__("fc6a");
        var indexOf = __webpack_require__("4d64").indexOf;
        var hiddenKeys = __webpack_require__("d012");
        module2.exports = function(object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O)
            !has(hiddenKeys, key) && has(O, key) && result.push(key);
          while (names.length > i)
            if (has(O, key = names[i++])) {
              ~indexOf(result, key) || result.push(key);
            }
          return result;
        };
      },
      "caad": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var $includes = __webpack_require__("4d64").includes;
        var addToUnscopables = __webpack_require__("44d2");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var USES_TO_LENGTH = arrayMethodUsesToLength("indexOf", { ACCESSORS: true, 1: 0 });
        $({ target: "Array", proto: true, forced: !USES_TO_LENGTH }, {
          includes: function includes(el) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables("includes");
      },
      "cb29": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var fill = __webpack_require__("81d5");
        var addToUnscopables = __webpack_require__("44d2");
        $({ target: "Array", proto: true }, {
          fill
        });
        addToUnscopables("fill");
      },
      "cc12": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        var isObject = __webpack_require__("861d");
        var document2 = global.document;
        var EXISTS = isObject(document2) && isObject(document2.createElement);
        module2.exports = function(it) {
          return EXISTS ? document2.createElement(it) : {};
        };
      },
      "cca6": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var assign = __webpack_require__("60da");
        $({ target: "Object", stat: true, forced: Object.assign !== assign }, {
          assign
        });
      },
      "cdf9": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("825a");
        var isObject = __webpack_require__("861d");
        var newPromiseCapability = __webpack_require__("f069");
        module2.exports = function(C, x) {
          anObject(C);
          if (isObject(x) && x.constructor === C)
            return x;
          var promiseCapability = newPromiseCapability.f(C);
          var resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
        };
      },
      "ce4e": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        var createNonEnumerableProperty = __webpack_require__("9112");
        module2.exports = function(key, value) {
          try {
            createNonEnumerableProperty(global, key, value);
          } catch (error) {
            global[key] = value;
          }
          return value;
        };
      },
      "d012": function(module2, exports2) {
        module2.exports = {};
      },
      "d039": function(module2, exports2) {
        module2.exports = function(exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };
      },
      "d066": function(module2, exports2, __webpack_require__) {
        var path = __webpack_require__("428f");
        var global = __webpack_require__("da84");
        var aFunction = function(variable) {
          return typeof variable == "function" ? variable : void 0;
        };
        module2.exports = function(namespace, method) {
          return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
        };
      },
      "d1e7": function(module2, exports2, __webpack_require__) {
        "use strict";
        var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);
        exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
          var descriptor = getOwnPropertyDescriptor(this, V);
          return !!descriptor && descriptor.enumerable;
        } : nativePropertyIsEnumerable;
      },
      "d28b": function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__("746f");
        defineWellKnownSymbol("iterator");
      },
      "d2bb": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("825a");
        var aPossiblePrototype = __webpack_require__("3bbe");
        module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var CORRECT_SETTER = false;
          var test = {};
          var setter;
          try {
            setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
            setter.call(test, []);
            CORRECT_SETTER = test instanceof Array;
          } catch (error) {
          }
          return function setPrototypeOf(O, proto) {
            anObject(O);
            aPossiblePrototype(proto);
            if (CORRECT_SETTER)
              setter.call(O, proto);
            else
              O.__proto__ = proto;
            return O;
          };
        }() : void 0);
      },
      "d3b7": function(module2, exports2, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
        var redefine = __webpack_require__("6eeb");
        var toString = __webpack_require__("b041");
        if (!TO_STRING_TAG_SUPPORT) {
          redefine(Object.prototype, "toString", toString, { unsafe: true });
        }
      },
      "d44e": function(module2, exports2, __webpack_require__) {
        var defineProperty = __webpack_require__("9bf2").f;
        var has = __webpack_require__("5135");
        var wellKnownSymbol = __webpack_require__("b622");
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        module2.exports = function(it, TAG, STATIC) {
          if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
            defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
          }
        };
      },
      "d4ec": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _classCallCheck;
        });
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
      },
      "d58f": function(module2, exports2, __webpack_require__) {
        var aFunction = __webpack_require__("1c0b");
        var toObject = __webpack_require__("7b0b");
        var IndexedObject = __webpack_require__("44ad");
        var toLength = __webpack_require__("50c4");
        var createMethod = function(IS_RIGHT) {
          return function(that, callbackfn, argumentsLength, memo) {
            aFunction(callbackfn);
            var O = toObject(that);
            var self2 = IndexedObject(O);
            var length = toLength(O.length);
            var index = IS_RIGHT ? length - 1 : 0;
            var i = IS_RIGHT ? -1 : 1;
            if (argumentsLength < 2)
              while (true) {
                if (index in self2) {
                  memo = self2[index];
                  index += i;
                  break;
                }
                index += i;
                if (IS_RIGHT ? index < 0 : length <= index) {
                  throw TypeError("Reduce of empty array with no initial value");
                }
              }
            for (; IS_RIGHT ? index >= 0 : length > index; index += i)
              if (index in self2) {
                memo = callbackfn(memo, self2[index], index, O);
              }
            return memo;
          };
        };
        module2.exports = {
          left: createMethod(false),
          right: createMethod(true)
        };
      },
      "d784": function(module2, exports2, __webpack_require__) {
        "use strict";
        __webpack_require__("ac1f");
        var redefine = __webpack_require__("6eeb");
        var fails = __webpack_require__("d039");
        var wellKnownSymbol = __webpack_require__("b622");
        var regexpExec = __webpack_require__("9263");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var SPECIES = wellKnownSymbol("species");
        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
          var re = /./;
          re.exec = function() {
            var result = [];
            result.groups = { a: "7" };
            return result;
          };
          return "".replace(re, "$<a>") !== "7";
        });
        var REPLACE_KEEPS_$0 = function() {
          return "a".replace(/./, "$0") === "$0";
        }();
        var REPLACE = wellKnownSymbol("replace");
        var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
          if (/./[REPLACE]) {
            return /./[REPLACE]("a", "$0") === "";
          }
          return false;
        }();
        var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
          var re = /(?:)/;
          var originalExec = re.exec;
          re.exec = function() {
            return originalExec.apply(this, arguments);
          };
          var result = "ab".split(re);
          return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
        });
        module2.exports = function(KEY, length, exec, sham) {
          var SYMBOL = wellKnownSymbol(KEY);
          var DELEGATES_TO_SYMBOL = !fails(function() {
            var O = {};
            O[SYMBOL] = function() {
              return 7;
            };
            return ""[KEY](O) != 7;
          });
          var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
            var execCalled = false;
            var re = /a/;
            if (KEY === "split") {
              re = {};
              re.constructor = {};
              re.constructor[SPECIES] = function() {
                return re;
              };
              re.flags = "";
              re[SYMBOL] = /./[SYMBOL];
            }
            re.exec = function() {
              execCalled = true;
              return null;
            };
            re[SYMBOL]("");
            return !execCalled;
          });
          if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
            var nativeRegExpMethod = /./[SYMBOL];
            var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
              if (regexp.exec === regexpExec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                  return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
                }
                return { done: true, value: nativeMethod.call(str, regexp, arg2) };
              }
              return { done: false };
            }, {
              REPLACE_KEEPS_$0,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
            });
            var stringMethod = methods[0];
            var regexMethod = methods[1];
            redefine(String.prototype, KEY, stringMethod);
            redefine(RegExp.prototype, SYMBOL, length == 2 ? function(string, arg) {
              return regexMethod.call(string, this, arg);
            } : function(string) {
              return regexMethod.call(string, this);
            });
          }
          if (sham)
            createNonEnumerableProperty(RegExp.prototype[SYMBOL], "sham", true);
        };
      },
      "d81d": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var $map = __webpack_require__("b727").map;
        var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
        var USES_TO_LENGTH = arrayMethodUsesToLength("map");
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
          map: function map(callbackfn) {
            return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "da84": function(module2, exports2, __webpack_require__) {
        (function(global) {
          var check = function(it) {
            return it && it.Math == Math && it;
          };
          module2.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || function() {
            return this;
          }() || Function("return this")();
        }).call(this, __webpack_require__("c8ba"));
      },
      "dbb4": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var DESCRIPTORS = __webpack_require__("83ab");
        var ownKeys = __webpack_require__("56ef");
        var toIndexedObject = __webpack_require__("fc6a");
        var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
        var createProperty = __webpack_require__("8418");
        $({ target: "Object", stat: true, sham: !DESCRIPTORS }, {
          getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
            var O = toIndexedObject(object);
            var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
            var keys = ownKeys(O);
            var result = {};
            var index = 0;
            var key, descriptor;
            while (keys.length > index) {
              descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
              if (descriptor !== void 0)
                createProperty(result, key, descriptor);
            }
            return result;
          }
        });
      },
      "ddb0": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        var DOMIterables = __webpack_require__("fdbc");
        var ArrayIteratorMethods = __webpack_require__("e260");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var wellKnownSymbol = __webpack_require__("b622");
        var ITERATOR = wellKnownSymbol("iterator");
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var ArrayValues = ArrayIteratorMethods.values;
        for (var COLLECTION_NAME in DOMIterables) {
          var Collection = global[COLLECTION_NAME];
          var CollectionPrototype = Collection && Collection.prototype;
          if (CollectionPrototype) {
            if (CollectionPrototype[ITERATOR] !== ArrayValues)
              try {
                createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
              } catch (error) {
                CollectionPrototype[ITERATOR] = ArrayValues;
              }
            if (!CollectionPrototype[TO_STRING_TAG]) {
              createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
            }
            if (DOMIterables[COLLECTION_NAME])
              for (var METHOD_NAME in ArrayIteratorMethods) {
                if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
                  try {
                    createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                  } catch (error) {
                    CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                  }
              }
          }
        }
      },
      "de47": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_cell_vue_vue_type_style_index_0_id_16690b7a_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f578");
        var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_cell_vue_vue_type_style_index_0_id_16690b7a_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_cell_vue_vue_type_style_index_0_id_16690b7a_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
      },
      "df75": function(module2, exports2, __webpack_require__) {
        var internalObjectKeys = __webpack_require__("ca84");
        var enumBugKeys = __webpack_require__("7839");
        module2.exports = Object.keys || function keys(O) {
          return internalObjectKeys(O, enumBugKeys);
        };
      },
      "e01a": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var DESCRIPTORS = __webpack_require__("83ab");
        var global = __webpack_require__("da84");
        var has = __webpack_require__("5135");
        var isObject = __webpack_require__("861d");
        var defineProperty = __webpack_require__("9bf2").f;
        var copyConstructorProperties = __webpack_require__("e893");
        var NativeSymbol = global.Symbol;
        if (DESCRIPTORS && typeof NativeSymbol == "function" && (!("description" in NativeSymbol.prototype) || NativeSymbol().description !== void 0)) {
          var EmptyStringDescriptionStore = {};
          var SymbolWrapper = function Symbol2() {
            var description = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]);
            var result = this instanceof SymbolWrapper ? new NativeSymbol(description) : description === void 0 ? NativeSymbol() : NativeSymbol(description);
            if (description === "")
              EmptyStringDescriptionStore[result] = true;
            return result;
          };
          copyConstructorProperties(SymbolWrapper, NativeSymbol);
          var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
          symbolPrototype.constructor = SymbolWrapper;
          var symbolToString = symbolPrototype.toString;
          var native = String(NativeSymbol("test")) == "Symbol(test)";
          var regexp = /^Symbol\((.*)\)[^)]+$/;
          defineProperty(symbolPrototype, "description", {
            configurable: true,
            get: function description() {
              var symbol = isObject(this) ? this.valueOf() : this;
              var string = symbolToString.call(symbol);
              if (has(EmptyStringDescriptionStore, symbol))
                return "";
              var desc = native ? string.slice(7, -1) : string.replace(regexp, "$1");
              return desc === "" ? void 0 : desc;
            }
          });
          $({ global: true, forced: true }, {
            Symbol: SymbolWrapper
          });
        }
      },
      "e163": function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__("5135");
        var toObject = __webpack_require__("7b0b");
        var sharedKey = __webpack_require__("f772");
        var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");
        var IE_PROTO = sharedKey("IE_PROTO");
        var ObjectPrototype = Object.prototype;
        module2.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
          O = toObject(O);
          if (has(O, IE_PROTO))
            return O[IE_PROTO];
          if (typeof O.constructor == "function" && O instanceof O.constructor) {
            return O.constructor.prototype;
          }
          return O instanceof Object ? ObjectPrototype : null;
        };
      },
      "e177": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        module2.exports = !fails(function() {
          function F() {
          }
          F.prototype.constructor = null;
          return Object.getPrototypeOf(new F()) !== F.prototype;
        });
      },
      "e260": function(module2, exports2, __webpack_require__) {
        "use strict";
        var toIndexedObject = __webpack_require__("fc6a");
        var addToUnscopables = __webpack_require__("44d2");
        var Iterators = __webpack_require__("3f8c");
        var InternalStateModule = __webpack_require__("69f3");
        var defineIterator = __webpack_require__("7dd0");
        var ARRAY_ITERATOR = "Array Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
        module2.exports = defineIterator(Array, "Array", function(iterated, kind) {
          setInternalState(this, {
            type: ARRAY_ITERATOR,
            target: toIndexedObject(iterated),
            index: 0,
            kind
          });
        }, function() {
          var state = getInternalState(this);
          var target = state.target;
          var kind = state.kind;
          var index = state.index++;
          if (!target || index >= target.length) {
            state.target = void 0;
            return { value: void 0, done: true };
          }
          if (kind == "keys")
            return { value: index, done: false };
          if (kind == "values")
            return { value: target[index], done: false };
          return { value: [index, target[index]], done: false };
        }, "values");
        Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
      },
      "e2cc": function(module2, exports2, __webpack_require__) {
        var redefine = __webpack_require__("6eeb");
        module2.exports = function(target, src, options) {
          for (var key in src)
            redefine(target, key, src[key], options);
          return target;
        };
      },
      "e439": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var fails = __webpack_require__("d039");
        var toIndexedObject = __webpack_require__("fc6a");
        var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
        var DESCRIPTORS = __webpack_require__("83ab");
        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeGetOwnPropertyDescriptor(1);
        });
        var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;
        $({ target: "Object", stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
            return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
          }
        });
      },
      "e538": function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__("b622");
        exports2.f = wellKnownSymbol;
      },
      "e667": function(module2, exports2) {
        module2.exports = function(exec) {
          try {
            return { error: false, value: exec() };
          } catch (error) {
            return { error: true, value: error };
          }
        };
      },
      "e6cf": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var IS_PURE = __webpack_require__("c430");
        var global = __webpack_require__("da84");
        var getBuiltIn = __webpack_require__("d066");
        var NativePromise = __webpack_require__("fea9");
        var redefine = __webpack_require__("6eeb");
        var redefineAll = __webpack_require__("e2cc");
        var setToStringTag = __webpack_require__("d44e");
        var setSpecies = __webpack_require__("2626");
        var isObject = __webpack_require__("861d");
        var aFunction = __webpack_require__("1c0b");
        var anInstance = __webpack_require__("19aa");
        var inspectSource = __webpack_require__("8925");
        var iterate = __webpack_require__("2266");
        var checkCorrectnessOfIteration = __webpack_require__("1c7e");
        var speciesConstructor = __webpack_require__("4840");
        var task = __webpack_require__("2cf4").set;
        var microtask = __webpack_require__("b575");
        var promiseResolve = __webpack_require__("cdf9");
        var hostReportErrors = __webpack_require__("44de");
        var newPromiseCapabilityModule = __webpack_require__("f069");
        var perform = __webpack_require__("e667");
        var InternalStateModule = __webpack_require__("69f3");
        var isForced = __webpack_require__("94ca");
        var wellKnownSymbol = __webpack_require__("b622");
        var IS_NODE = __webpack_require__("605d");
        var V8_VERSION = __webpack_require__("2d00");
        var SPECIES = wellKnownSymbol("species");
        var PROMISE = "Promise";
        var getInternalState = InternalStateModule.get;
        var setInternalState = InternalStateModule.set;
        var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
        var PromiseConstructor = NativePromise;
        var TypeError2 = global.TypeError;
        var document2 = global.document;
        var process = global.process;
        var $fetch = getBuiltIn("fetch");
        var newPromiseCapability = newPromiseCapabilityModule.f;
        var newGenericPromiseCapability = newPromiseCapability;
        var DISPATCH_EVENT = !!(document2 && document2.createEvent && global.dispatchEvent);
        var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == "function";
        var UNHANDLED_REJECTION = "unhandledrejection";
        var REJECTION_HANDLED = "rejectionhandled";
        var PENDING = 0;
        var FULFILLED = 1;
        var REJECTED = 2;
        var HANDLED = 1;
        var UNHANDLED = 2;
        var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
        var FORCED = isForced(PROMISE, function() {
          var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
          if (!GLOBAL_CORE_JS_PROMISE) {
            if (V8_VERSION === 66)
              return true;
            if (!IS_NODE && !NATIVE_REJECTION_EVENT)
              return true;
          }
          if (IS_PURE && !PromiseConstructor.prototype["finally"])
            return true;
          if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor))
            return false;
          var promise = PromiseConstructor.resolve(1);
          var FakePromise = function(exec) {
            exec(function() {
            }, function() {
            });
          };
          var constructor = promise.constructor = {};
          constructor[SPECIES] = FakePromise;
          return !(promise.then(function() {
          }) instanceof FakePromise);
        });
        var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function(iterable) {
          PromiseConstructor.all(iterable)["catch"](function() {
          });
        });
        var isThenable = function(it) {
          var then;
          return isObject(it) && typeof (then = it.then) == "function" ? then : false;
        };
        var notify = function(state, isReject) {
          if (state.notified)
            return;
          state.notified = true;
          var chain = state.reactions;
          microtask(function() {
            var value = state.value;
            var ok = state.state == FULFILLED;
            var index = 0;
            while (chain.length > index) {
              var reaction = chain[index++];
              var handler = ok ? reaction.ok : reaction.fail;
              var resolve = reaction.resolve;
              var reject = reaction.reject;
              var domain = reaction.domain;
              var result, then, exited;
              try {
                if (handler) {
                  if (!ok) {
                    if (state.rejection === UNHANDLED)
                      onHandleUnhandled(state);
                    state.rejection = HANDLED;
                  }
                  if (handler === true)
                    result = value;
                  else {
                    if (domain)
                      domain.enter();
                    result = handler(value);
                    if (domain) {
                      domain.exit();
                      exited = true;
                    }
                  }
                  if (result === reaction.promise) {
                    reject(TypeError2("Promise-chain cycle"));
                  } else if (then = isThenable(result)) {
                    then.call(result, resolve, reject);
                  } else
                    resolve(result);
                } else
                  reject(value);
              } catch (error) {
                if (domain && !exited)
                  domain.exit();
                reject(error);
              }
            }
            state.reactions = [];
            state.notified = false;
            if (isReject && !state.rejection)
              onUnhandled(state);
          });
        };
        var dispatchEvent = function(name, promise, reason) {
          var event, handler;
          if (DISPATCH_EVENT) {
            event = document2.createEvent("Event");
            event.promise = promise;
            event.reason = reason;
            event.initEvent(name, false, true);
            global.dispatchEvent(event);
          } else
            event = { promise, reason };
          if (!NATIVE_REJECTION_EVENT && (handler = global["on" + name]))
            handler(event);
          else if (name === UNHANDLED_REJECTION)
            hostReportErrors("Unhandled promise rejection", reason);
        };
        var onUnhandled = function(state) {
          task.call(global, function() {
            var promise = state.facade;
            var value = state.value;
            var IS_UNHANDLED = isUnhandled(state);
            var result;
            if (IS_UNHANDLED) {
              result = perform(function() {
                if (IS_NODE) {
                  process.emit("unhandledRejection", value, promise);
                } else
                  dispatchEvent(UNHANDLED_REJECTION, promise, value);
              });
              state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
              if (result.error)
                throw result.value;
            }
          });
        };
        var isUnhandled = function(state) {
          return state.rejection !== HANDLED && !state.parent;
        };
        var onHandleUnhandled = function(state) {
          task.call(global, function() {
            var promise = state.facade;
            if (IS_NODE) {
              process.emit("rejectionHandled", promise);
            } else
              dispatchEvent(REJECTION_HANDLED, promise, state.value);
          });
        };
        var bind = function(fn, state, unwrap) {
          return function(value) {
            fn(state, value, unwrap);
          };
        };
        var internalReject = function(state, value, unwrap) {
          if (state.done)
            return;
          state.done = true;
          if (unwrap)
            state = unwrap;
          state.value = value;
          state.state = REJECTED;
          notify(state, true);
        };
        var internalResolve = function(state, value, unwrap) {
          if (state.done)
            return;
          state.done = true;
          if (unwrap)
            state = unwrap;
          try {
            if (state.facade === value)
              throw TypeError2("Promise can't be resolved itself");
            var then = isThenable(value);
            if (then) {
              microtask(function() {
                var wrapper = { done: false };
                try {
                  then.call(value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
                } catch (error) {
                  internalReject(wrapper, error, state);
                }
              });
            } else {
              state.value = value;
              state.state = FULFILLED;
              notify(state, false);
            }
          } catch (error) {
            internalReject({ done: false }, error, state);
          }
        };
        if (FORCED) {
          PromiseConstructor = function Promise2(executor) {
            anInstance(this, PromiseConstructor, PROMISE);
            aFunction(executor);
            Internal.call(this);
            var state = getInternalState(this);
            try {
              executor(bind(internalResolve, state), bind(internalReject, state));
            } catch (error) {
              internalReject(state, error);
            }
          };
          Internal = function Promise2(executor) {
            setInternalState(this, {
              type: PROMISE,
              done: false,
              notified: false,
              parent: false,
              reactions: [],
              rejection: false,
              state: PENDING,
              value: void 0
            });
          };
          Internal.prototype = redefineAll(PromiseConstructor.prototype, {
            then: function then(onFulfilled, onRejected) {
              var state = getInternalPromiseState(this);
              var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
              reaction.ok = typeof onFulfilled == "function" ? onFulfilled : true;
              reaction.fail = typeof onRejected == "function" && onRejected;
              reaction.domain = IS_NODE ? process.domain : void 0;
              state.parent = true;
              state.reactions.push(reaction);
              if (state.state != PENDING)
                notify(state, false);
              return reaction.promise;
            },
            "catch": function(onRejected) {
              return this.then(void 0, onRejected);
            }
          });
          OwnPromiseCapability = function() {
            var promise = new Internal();
            var state = getInternalState(promise);
            this.promise = promise;
            this.resolve = bind(internalResolve, state);
            this.reject = bind(internalReject, state);
          };
          newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
            return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
          };
          if (!IS_PURE && typeof NativePromise == "function") {
            nativeThen = NativePromise.prototype.then;
            redefine(NativePromise.prototype, "then", function then(onFulfilled, onRejected) {
              var that = this;
              return new PromiseConstructor(function(resolve, reject) {
                nativeThen.call(that, resolve, reject);
              }).then(onFulfilled, onRejected);
            }, { unsafe: true });
            if (typeof $fetch == "function")
              $({ global: true, enumerable: true, forced: true }, {
                fetch: function fetch(input) {
                  return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
                }
              });
          }
        }
        $({ global: true, wrap: true, forced: FORCED }, {
          Promise: PromiseConstructor
        });
        setToStringTag(PromiseConstructor, PROMISE, false, true);
        setSpecies(PROMISE);
        PromiseWrapper = getBuiltIn(PROMISE);
        $({ target: PROMISE, stat: true, forced: FORCED }, {
          reject: function reject(r) {
            var capability = newPromiseCapability(this);
            capability.reject.call(void 0, r);
            return capability.promise;
          }
        });
        $({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
          resolve: function resolve(x) {
            return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
          }
        });
        $({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
          all: function all(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var resolve = capability.resolve;
            var reject = capability.reject;
            var result = perform(function() {
              var $promiseResolve = aFunction(C.resolve);
              var values = [];
              var counter = 0;
              var remaining = 1;
              iterate(iterable, function(promise) {
                var index = counter++;
                var alreadyCalled = false;
                values.push(void 0);
                remaining++;
                $promiseResolve.call(C, promise).then(function(value) {
                  if (alreadyCalled)
                    return;
                  alreadyCalled = true;
                  values[index] = value;
                  --remaining || resolve(values);
                }, reject);
              });
              --remaining || resolve(values);
            });
            if (result.error)
              reject(result.value);
            return capability.promise;
          },
          race: function race(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var reject = capability.reject;
            var result = perform(function() {
              var $promiseResolve = aFunction(C.resolve);
              iterate(iterable, function(promise) {
                $promiseResolve.call(C, promise).then(capability.resolve, reject);
              });
            });
            if (result.error)
              reject(result.value);
            return capability.promise;
          }
        });
      },
      "e893": function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__("5135");
        var ownKeys = __webpack_require__("56ef");
        var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
        var definePropertyModule = __webpack_require__("9bf2");
        module2.exports = function(target, source) {
          var keys = ownKeys(source);
          var defineProperty = definePropertyModule.f;
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!has(target, key))
              defineProperty(target, key, getOwnPropertyDescriptor(source, key));
          }
        };
      },
      "e8b5": function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__("c6b6");
        module2.exports = Array.isArray || function isArray(arg) {
          return classof(arg) == "Array";
        };
      },
      "e95a": function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__("b622");
        var Iterators = __webpack_require__("3f8c");
        var ITERATOR = wellKnownSymbol("iterator");
        var ArrayPrototype = Array.prototype;
        module2.exports = function(it) {
          return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
        };
      },
      "f069": function(module2, exports2, __webpack_require__) {
        "use strict";
        var aFunction = __webpack_require__("1c0b");
        var PromiseCapability = function(C) {
          var resolve, reject;
          this.promise = new C(function($$resolve, $$reject) {
            if (resolve !== void 0 || reject !== void 0)
              throw TypeError("Bad Promise constructor");
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aFunction(resolve);
          this.reject = aFunction(reject);
        };
        module2.exports.f = function(C) {
          return new PromiseCapability(C);
        };
      },
      "f183": function(module2, exports2, __webpack_require__) {
        var hiddenKeys = __webpack_require__("d012");
        var isObject = __webpack_require__("861d");
        var has = __webpack_require__("5135");
        var defineProperty = __webpack_require__("9bf2").f;
        var uid = __webpack_require__("90e3");
        var FREEZING = __webpack_require__("bb2f");
        var METADATA = uid("meta");
        var id = 0;
        var isExtensible = Object.isExtensible || function() {
          return true;
        };
        var setMetadata = function(it) {
          defineProperty(it, METADATA, { value: {
            objectID: "O" + ++id,
            weakData: {}
          } });
        };
        var fastKey = function(it, create) {
          if (!isObject(it))
            return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
          if (!has(it, METADATA)) {
            if (!isExtensible(it))
              return "F";
            if (!create)
              return "E";
            setMetadata(it);
          }
          return it[METADATA].objectID;
        };
        var getWeakData = function(it, create) {
          if (!has(it, METADATA)) {
            if (!isExtensible(it))
              return true;
            if (!create)
              return false;
            setMetadata(it);
          }
          return it[METADATA].weakData;
        };
        var onFreeze = function(it) {
          if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA))
            setMetadata(it);
          return it;
        };
        var meta = module2.exports = {
          REQUIRED: false,
          fastKey,
          getWeakData,
          onFreeze
        };
        hiddenKeys[METADATA] = true;
      },
      "f578": function(module2, exports2, __webpack_require__) {
      },
      "f5df": function(module2, exports2, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
        var classofRaw = __webpack_require__("c6b6");
        var wellKnownSymbol = __webpack_require__("b622");
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var CORRECT_ARGUMENTS = classofRaw(function() {
          return arguments;
        }()) == "Arguments";
        var tryGet = function(it, key) {
          try {
            return it[key];
          } catch (error) {
          }
        };
        module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
          var O, tag, result;
          return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
        };
      },
      "f772": function(module2, exports2, __webpack_require__) {
        var shared = __webpack_require__("5692");
        var uid = __webpack_require__("90e3");
        var keys = shared("keys");
        module2.exports = function(key) {
          return keys[key] || (keys[key] = uid(key));
        };
      },
      "fb15": function(module2, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        if (typeof window !== "undefined") {
          var currentScript = window.document.currentScript;
          if (true) {
            var getCurrentScript = __webpack_require__("8875");
            currentScript = getCurrentScript();
            if (!("currentScript" in document)) {
              Object.defineProperty(document, "currentScript", { get: getCurrentScript });
            }
          }
          var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          if (src) {
            __webpack_require__.p = src[1];
          }
        }
        var setPublicPath = null;
        var es_regexp_exec = __webpack_require__("ac1f");
        var es_string_split = __webpack_require__("1276");
        var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
        var _hoisted_1 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("\xA0");
        var _hoisted_2 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
          class: "angle"
        }, null, -1);
        var _hoisted_3 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("\xA0");
        var _hoisted_4 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("\xA0");
        var _hoisted_5 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
          class: "angle"
        }, null, -1);
        var _hoisted_6 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("\xA0");
        var _hoisted_7 = {
          class: "default"
        };
        var _hoisted_8 = {
          key: 0,
          class: "vuecal__flex vuecal__body",
          grow: ""
        };
        var _hoisted_9 = {
          class: "vuecal__flex",
          row: "",
          grow: ""
        };
        var _hoisted_10 = {
          key: 0,
          class: "vuecal__time-column"
        };
        var _hoisted_11 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
          class: "vuecal__time-cell-line"
        }, null, -1);
        var _hoisted_12 = {
          class: "vuecal__time-cell-label"
        };
        var _hoisted_13 = {
          key: 1,
          class: "vuecal__flex vuecal__week-numbers",
          column: ""
        };
        var _hoisted_14 = {
          key: 2,
          class: "vuecal__cell-events-count"
        };
        var _hoisted_15 = {
          key: 3,
          class: "vuecal__no-event"
        };
        var _hoisted_16 = {
          key: 2,
          class: "vuecal__event-time"
        };
        var _hoisted_17 = {
          key: 0
        };
        var _hoisted_18 = {
          key: 1,
          class: "days-to-end"
        };
        var _hoisted_19 = {
          key: 0,
          class: "vuecal__scrollbar-check"
        };
        var _hoisted_20 = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", null, null, -1);
        function render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_vuecal_header = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vuecal-header");
          var _component_all_day_bar = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("all-day-bar");
          var _component_weekdays_headings = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("weekdays-headings");
          var _component_vuecal_cell = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vuecal-cell");
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
            class: ["vuecal__flex vuecal", $options.cssClasses],
            column: "",
            ref: "vuecal",
            lang: $props.locale
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_vuecal_header, {
            options: _ctx.$props,
            "edit-events": $options.editEvents,
            "view-props": {
              views: $options.views,
              weekDaysInHeader: $options.weekDaysInHeader
            },
            "week-days": $options.weekDays,
            "has-splits": $options.hasSplits,
            "day-splits": $options.daySplits,
            "switch-to-narrower-view": $options.switchToNarrowerView
          }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createSlots"])({
            "arrow-prev": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "arrow-prev", {}, function() {
                return [_hoisted_1, _hoisted_2, _hoisted_3];
              })];
            }),
            "arrow-next": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "arrow-next", {}, function() {
                return [_hoisted_4, _hoisted_5, _hoisted_6];
              })];
            }),
            "today-button": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "today-button", {}, function() {
                return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", _hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.texts.today), 1)];
              })];
            }),
            title: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "title", {
                title: $options.viewTitle,
                view: $data.view
              }, function() {
                return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.viewTitle), 1)];
              })];
            }),
            _: 2
          }, [_ctx.$slots["weekday-heading"] ? {
            name: "weekday-heading",
            fn: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function(_ref) {
              var heading = _ref.heading, view = _ref.view;
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "weekday-heading", {
                heading,
                view
              })];
            })
          } : void 0, _ctx.$slots["split-label"] ? {
            name: "split-label",
            fn: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function(_ref2) {
              var split = _ref2.split;
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "split-label", {
                split,
                view: $data.view.id
              })];
            })
          } : void 0]), 1032, ["options", "edit-events", "view-props", "week-days", "has-splits", "day-splits", "switch-to-narrower-view"]), !$props.hideBody ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
            name: "slide-fade--".concat($data.transitionDirection),
            appear: $props.transitions
          }, {
            default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function() {
              return [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                class: "vuecal__flex",
                style: {
                  "min-width": "100%"
                },
                key: $props.transitions ? $data.view.id : false,
                column: ""
              }, [$props.showAllDayEvents && $options.hasTimeColumn && (!$options.cellOrSplitMinWidth || $options.isDayView && !$props.minSplitWidth) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_all_day_bar, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
                key: 0
              }, $options.allDayBar), {
                event: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function(_ref3) {
                  var event = _ref3.event, view = _ref3.view;
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "event", {
                    view,
                    event
                  }, function() {
                    return [$options.editEvents.title && event.titleEditable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                      key: 0,
                      class: "vuecal__event-title vuecal__event-title--edit",
                      contenteditable: "",
                      onBlur: function onBlur($event) {
                        return $options.onEventTitleBlur($event, event);
                      },
                      innerHTML: event.title
                    }, null, 40, ["onBlur", "innerHTML"])) : event.title ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                      key: 1,
                      class: "vuecal__event-title",
                      innerHTML: event.title
                    }, null, 8, ["innerHTML"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), event.content && !$options.hasShortEvents && !$options.isShortMonthView ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                      key: 2,
                      class: "vuecal__event-content",
                      innerHTML: event.content
                    }, null, 8, ["innerHTML"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
                  })];
                }),
                _: 1
              }, 16)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
                class: ["vuecal__bg", {
                  vuecal__flex: !$options.hasTimeColumn
                }],
                column: ""
              }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_9, [$options.hasTimeColumn ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_10, [$props.showAllDayEvents && $options.cellOrSplitMinWidth && !($options.isDayView && !$props.minSplitWidth) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                key: 0,
                class: "vuecal__all-day-text",
                style: {
                  height: $options.allDayBar.height
                }
              }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.texts.allDay), 1)], 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.timeCells, function(cell, i) {
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                  class: "vuecal__time-cell",
                  key: i,
                  style: "height: ".concat($props.timeCellHeight, "px")
                }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "time-cell", {
                  hours: cell.hours,
                  minutes: cell.minutes
                }, function() {
                  return [_hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", _hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(cell.label), 1)];
                })], 4);
              }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.showWeekNumbers && $options.isMonthView ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_13, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(6, function(i) {
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
                  class: "vuecal__flex vuecal__week-number-cell",
                  key: i,
                  grow: ""
                }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "week-number-cell", {
                  week: $options.getWeekNumber(i - 1)
                }, function() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.getWeekNumber(i - 1)), 1)];
                })]);
              }), 64))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
                class: ["vuecal__flex vuecal__cells", "".concat($data.view.id, "-view")],
                grow: "",
                wrap: !$options.cellOrSplitMinWidth || !$options.isWeekView,
                column: !!$options.cellOrSplitMinWidth
              }, [$options.cellOrSplitMinWidth && $options.isWeekView ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_weekdays_headings, {
                key: 0,
                "transition-direction": $data.transitionDirection,
                "week-days": $options.weekDays,
                "switch-to-narrower-view": $options.switchToNarrowerView,
                style: $options.cellOrSplitMinWidth ? "min-width: ".concat($options.cellOrSplitMinWidth, "px") : ""
              }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createSlots"])({
                _: 2
              }, [_ctx.$slots["weekday-heading"] ? {
                name: "weekday-heading",
                fn: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function(_ref4) {
                  var heading = _ref4.heading, view = _ref4.view;
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "weekday-heading", {
                    heading,
                    view
                  })];
                })
              } : void 0, _ctx.$slots["split-label"] ? {
                name: "split-label",
                fn: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function(_ref5) {
                  var split = _ref5.split;
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "split-label", {
                    split,
                    view: $data.view.id
                  })];
                })
              } : void 0]), 1032, ["transition-direction", "week-days", "switch-to-narrower-view", "style"])) : $options.hasSplits && $props.stickySplitLabels && $props.minSplitWidth ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                key: 1,
                class: "vuecal__flex vuecal__split-days-headers",
                style: $options.cellOrSplitMinWidth ? "min-width: ".concat($options.cellOrSplitMinWidth, "px") : ""
              }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.daySplits, function(split, i) {
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                  class: ["day-split-header", split.class || false],
                  key: i
                }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "split-label", {
                  split,
                  view: $data.view.id
                }, function() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(split.label), 1)];
                })], 2);
              }), 128))], 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.showAllDayEvents && $options.hasTimeColumn && ($options.isWeekView && $options.cellOrSplitMinWidth || $options.isDayView && $options.hasSplits && $props.minSplitWidth) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_all_day_bar, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
                key: 2
              }, $options.allDayBar), {
                event: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function(_ref6) {
                  var event = _ref6.event, view = _ref6.view;
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "event", {
                    view,
                    event
                  }, function() {
                    return [$options.editEvents.title && event.titleEditable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                      key: 0,
                      class: "vuecal__event-title vuecal__event-title--edit",
                      contenteditable: "",
                      onBlur: function onBlur($event) {
                        return $options.onEventTitleBlur($event, event);
                      },
                      innerHTML: event.title
                    }, null, 40, ["onBlur", "innerHTML"])) : event.title ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                      key: 1,
                      class: "vuecal__event-title",
                      innerHTML: event.title
                    }, null, 8, ["innerHTML"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), event.content && !$options.hasShortEvents && !$options.isShortMonthView ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                      key: 2,
                      class: "vuecal__event-content",
                      innerHTML: event.content
                    }, null, 8, ["innerHTML"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
                  })];
                }),
                _: 1
              }, 16)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
                class: "vuecal__flex",
                ref: function ref(el) {
                  return $data.cellsEl = el;
                },
                grow: "",
                wrap: !$options.cellOrSplitMinWidth || !$options.isWeekView,
                style: $options.cellOrSplitMinWidth ? "min-width: ".concat($options.cellOrSplitMinWidth, "px") : ""
              }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.viewCells, function(cell, i) {
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vuecal_cell, {
                  key: i,
                  options: _ctx.$props,
                  "edit-events": $options.editEvents,
                  data: cell,
                  "cell-width": $props.hideWeekdays.length && ($options.isWeekView || $options.isMonthView) && $options.cellWidth,
                  "min-timestamp": $options.minTimestamp,
                  "max-timestamp": $options.maxTimestamp,
                  "cell-splits": $options.hasSplits && $options.daySplits || []
                }, {
                  "cell-content": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function(_ref7) {
                    var events = _ref7.events, split = _ref7.split, selectCell = _ref7.selectCell;
                    return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "cell-content", {
                      cell,
                      view: $data.view,
                      "go-narrower": selectCell,
                      events
                    }, function() {
                      return [split && !$props.stickySplitLabels ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                        key: 0,
                        class: "split-label",
                        innerHTML: split.label
                      }, null, 8, ["innerHTML"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), cell.content ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                        key: 1,
                        class: "vuecal__cell-date",
                        innerHTML: cell.content
                      }, null, 8, ["innerHTML"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), ($options.isMonthView && !$props.eventsOnMonthView || $options.isYearsOrYearView && $props.eventsCountOnYearView) && events.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "events-count", {
                        view: $data.view,
                        events
                      }, function() {
                        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(events.length), 1)];
                      })])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$options.cellOrSplitHasEvents(events, split) && $options.isWeekOrDayView ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_15, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "no-event", {}, function() {
                        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.texts.noEvent), 1)];
                      })])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
                    })];
                  }),
                  event: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function(_ref8) {
                    var event = _ref8.event, view = _ref8.view;
                    return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "event", {
                      view,
                      event
                    }, function() {
                      return [$options.editEvents.title && event.titleEditable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                        key: 0,
                        class: "vuecal__event-title vuecal__event-title--edit",
                        contenteditable: "",
                        onBlur: function onBlur($event) {
                          return $options.onEventTitleBlur($event, event);
                        },
                        innerHTML: event.title
                      }, null, 40, ["onBlur", "innerHTML"])) : event.title ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                        key: 1,
                        class: "vuecal__event-title",
                        innerHTML: event.title
                      }, null, 8, ["innerHTML"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.time && !event.allDay && !($options.isMonthView && (event.allDay || $props.showAllDayEvents === "short")) && !$options.isShortMonthView ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.utils.date.formatTime(event.start, $options.TimeFormat)), 1), event.endTimeMinutes ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", _hoisted_17, "\xA0- " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.utils.date.formatTime(event.end, $options.TimeFormat, null, true)), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), event.daysCount > 1 && (event.segments[cell.formattedDate] || {}).isFirstDay ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("small", _hoisted_18, "\xA0+" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(event.daysCount - 1) + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(($data.texts.day[0] || "").toLowerCase()), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), event.content && !($options.isMonthView && event.allDay && $props.showAllDayEvents === "short") && !$options.isShortMonthView ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                        key: 3,
                        class: "vuecal__event-content",
                        innerHTML: event.content
                      }, null, 8, ["innerHTML"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
                    })];
                  }),
                  "no-event": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function() {
                    return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "no-event", {}, function() {
                      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.texts.noEvent), 1)];
                    })];
                  }),
                  _: 2
                }, 1032, ["options", "edit-events", "data", "cell-width", "min-timestamp", "max-timestamp", "cell-splits"]);
              }), 128))], 12, ["wrap"])], 10, ["wrap", "column"])])], 2)]))];
            }),
            _: 1
          }, 8, ["name", "appear"]), !$data.ready ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_19, [_hoisted_20])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 10, ["lang"]);
        }
        var es_array_concat = __webpack_require__("99af");
        var es_array_fill = __webpack_require__("cb29");
        var es_array_filter = __webpack_require__("4de4");
        var es_array_find = __webpack_require__("7db0");
        var es_array_for_each = __webpack_require__("4160");
        var es_array_includes = __webpack_require__("caad");
        var es_array_index_of = __webpack_require__("c975");
        var es_array_join = __webpack_require__("a15b");
        var es_array_map = __webpack_require__("d81d");
        var es_array_reduce = __webpack_require__("13d5");
        var es_array_slice = __webpack_require__("fb6a");
        var es_array_some = __webpack_require__("45fc");
        var es_number_constructor = __webpack_require__("a9e3");
        var es_object_assign = __webpack_require__("cca6");
        var es_object_keys = __webpack_require__("b64b");
        var es_object_to_string = __webpack_require__("d3b7");
        var es_promise = __webpack_require__("e6cf");
        var es_string_includes = __webpack_require__("2532");
        var es_string_repeat = __webpack_require__("38cf");
        var es_string_replace = __webpack_require__("5319");
        var es_string_small = __webpack_require__("c96a");
        var web_dom_collections_for_each = __webpack_require__("159b");
        var defineProperty = __webpack_require__("ade3");
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return _arrayLikeToArray(arr);
        }
        var es_symbol = __webpack_require__("a4d3");
        var es_symbol_description = __webpack_require__("e01a");
        var es_symbol_iterator = __webpack_require__("d28b");
        var es_array_from = __webpack_require__("a630");
        var es_array_iterator = __webpack_require__("e260");
        var es_string_iterator = __webpack_require__("3ca3");
        var web_dom_collections_iterator = __webpack_require__("ddb0");
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
            return Array.from(iter);
        }
        var es_function_name = __webpack_require__("b0c0");
        var es_regexp_to_string = __webpack_require__("25f0");
        function _unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        var objectSpread2 = __webpack_require__("5530");
        var classCallCheck = __webpack_require__("d4ec");
        var createClass = __webpack_require__("bee2");
        var now, todayDate, todayF, date_self;
        var _dateObject = {};
        var _timeObject = {};
        var date_DateUtils = function() {
          function DateUtils(texts) {
            var noPrototypes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            Object(classCallCheck["a"])(this, DateUtils);
            Object(defineProperty["a"])(this, "texts", {});
            Object(defineProperty["a"])(this, "dateToMinutes", function(date) {
              return date.getHours() * 60 + date.getMinutes();
            });
            date_self = this;
            this._texts = texts;
            if (!noPrototypes && Date && !Date.prototype.addDays)
              this._initDatePrototypes();
          }
          Object(createClass["a"])(DateUtils, [{
            key: "_initDatePrototypes",
            value: function _initDatePrototypes() {
              Date.prototype.addDays = function(days) {
                return date_self.addDays(this, days);
              };
              Date.prototype.subtractDays = function(days) {
                return date_self.subtractDays(this, days);
              };
              Date.prototype.addHours = function(hours) {
                return date_self.addHours(this, hours);
              };
              Date.prototype.subtractHours = function(hours) {
                return date_self.subtractHours(this, hours);
              };
              Date.prototype.addMinutes = function(minutes) {
                return date_self.addMinutes(this, minutes);
              };
              Date.prototype.subtractMinutes = function(minutes) {
                return date_self.subtractMinutes(this, minutes);
              };
              Date.prototype.getWeek = function() {
                return date_self.getWeek(this);
              };
              Date.prototype.isToday = function() {
                return date_self.isToday(this);
              };
              Date.prototype.isLeapYear = function() {
                return date_self.isLeapYear(this);
              };
              Date.prototype.format = function() {
                var format = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "YYYY-MM-DD";
                return date_self.formatDate(this, format);
              };
              Date.prototype.formatTime = function() {
                var format = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "HH:mm";
                return date_self.formatTime(this, format);
              };
            }
          }, {
            key: "removePrototypes",
            value: function removePrototypes() {
              delete Date.prototype.addDays;
              delete Date.prototype.subtractDays;
              delete Date.prototype.addHours;
              delete Date.prototype.subtractHours;
              delete Date.prototype.addMinutes;
              delete Date.prototype.subtractMinutes;
              delete Date.prototype.getWeek;
              delete Date.prototype.isToday;
              delete Date.prototype.isLeapYear;
              delete Date.prototype.format;
              delete Date.prototype.formatTime;
            }
          }, {
            key: "updateTexts",
            value: function updateTexts(texts) {
              this._texts = texts;
            }
          }, {
            key: "_todayFormatted",
            value: function _todayFormatted() {
              if (todayDate !== new Date().getDate()) {
                now = new Date();
                todayDate = now.getDate();
                todayF = "".concat(now.getFullYear(), "-").concat(now.getMonth(), "-").concat(now.getDate());
              }
              return todayF;
            }
          }, {
            key: "addDays",
            value: function addDays(date, days) {
              var d = new Date(date.valueOf());
              d.setDate(d.getDate() + days);
              return d;
            }
          }, {
            key: "subtractDays",
            value: function subtractDays(date, days) {
              var d = new Date(date.valueOf());
              d.setDate(d.getDate() - days);
              return d;
            }
          }, {
            key: "addHours",
            value: function addHours(date, hours) {
              var d = new Date(date.valueOf());
              d.setHours(d.getHours() + hours);
              return d;
            }
          }, {
            key: "subtractHours",
            value: function subtractHours(date, hours) {
              var d = new Date(date.valueOf());
              d.setHours(d.getHours() - hours);
              return d;
            }
          }, {
            key: "addMinutes",
            value: function addMinutes(date, minutes) {
              var d = new Date(date.valueOf());
              d.setMinutes(d.getMinutes() + minutes);
              return d;
            }
          }, {
            key: "subtractMinutes",
            value: function subtractMinutes(date, minutes) {
              var d = new Date(date.valueOf());
              d.setMinutes(d.getMinutes() - minutes);
              return d;
            }
          }, {
            key: "getWeek",
            value: function getWeek(date) {
              var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
              var dayNum = d.getUTCDay() || 7;
              d.setUTCDate(d.getUTCDate() + 4 - dayNum);
              var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
              return Math.ceil(((d - yearStart) / 864e5 + 1) / 7);
            }
          }, {
            key: "isToday",
            value: function isToday(date) {
              return "".concat(date.getFullYear(), "-").concat(date.getMonth(), "-").concat(date.getDate()) === this._todayFormatted();
            }
          }, {
            key: "isLeapYear",
            value: function isLeapYear(date) {
              var year = date.getFullYear();
              return !(year % 400) || year % 100 && !(year % 4);
            }
          }, {
            key: "getPreviousFirstDayOfWeek",
            value: function getPreviousFirstDayOfWeek() {
              var date = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
              var weekStartsOnSunday = arguments.length > 1 ? arguments[1] : void 0;
              var prevFirstDayOfWeek = date && new Date(date.valueOf()) || new Date();
              var dayModifier = weekStartsOnSunday ? 7 : 6;
              prevFirstDayOfWeek.setDate(prevFirstDayOfWeek.getDate() - (prevFirstDayOfWeek.getDay() + dayModifier) % 7);
              return prevFirstDayOfWeek;
            }
          }, {
            key: "stringToDate",
            value: function stringToDate(date) {
              if (date instanceof Date)
                return date;
              if (date.length === 10)
                date += " 00:00";
              return new Date(date.replace(/-/g, "/"));
            }
          }, {
            key: "countDays",
            value: function countDays(start, end) {
              if (typeof start === "string")
                start = start.replace(/-/g, "/");
              if (typeof end === "string")
                end = end.replace(/-/g, "/");
              start = new Date(start).setHours(0, 0, 0, 0);
              end = new Date(end).setHours(0, 0, 1, 0);
              var timezoneDiffMs = (new Date(end).getTimezoneOffset() - new Date(start).getTimezoneOffset()) * 60 * 1e3;
              return Math.ceil((end - start - timezoneDiffMs) / (24 * 3600 * 1e3));
            }
          }, {
            key: "datesInSameTimeStep",
            value: function datesInSameTimeStep(date1, date2, timeStep) {
              return Math.abs(date1.getTime() - date2.getTime()) <= timeStep * 60 * 1e3;
            }
          }, {
            key: "formatDate",
            value: function formatDate(date) {
              var _this = this;
              var format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "YYYY-MM-DD";
              var texts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
              if (!texts)
                texts = this._texts;
              if (!format)
                format = "YYYY-MM-DD";
              if (format === "YYYY-MM-DD")
                return this.formatDateLite(date);
              _dateObject = {};
              _timeObject = {};
              var dateObj = {
                YYYY: function YYYY() {
                  return _this._hydrateDateObject(date, texts).YYYY;
                },
                YY: function YY() {
                  return _this._hydrateDateObject(date, texts).YY();
                },
                M: function M() {
                  return _this._hydrateDateObject(date, texts).M;
                },
                MM: function MM() {
                  return _this._hydrateDateObject(date, texts).MM();
                },
                MMM: function MMM() {
                  return _this._hydrateDateObject(date, texts).MMM();
                },
                MMMM: function MMMM() {
                  return _this._hydrateDateObject(date, texts).MMMM();
                },
                MMMMG: function MMMMG() {
                  return _this._hydrateDateObject(date, texts).MMMMG();
                },
                D: function D() {
                  return _this._hydrateDateObject(date, texts).D;
                },
                DD: function DD() {
                  return _this._hydrateDateObject(date, texts).DD();
                },
                S: function S() {
                  return _this._hydrateDateObject(date, texts).S();
                },
                d: function d() {
                  return _this._hydrateDateObject(date, texts).d;
                },
                dd: function dd() {
                  return _this._hydrateDateObject(date, texts).dd();
                },
                ddd: function ddd() {
                  return _this._hydrateDateObject(date, texts).ddd();
                },
                dddd: function dddd() {
                  return _this._hydrateDateObject(date, texts).dddd();
                },
                HH: function HH() {
                  return _this._hydrateTimeObject(date, texts).HH;
                },
                H: function H() {
                  return _this._hydrateTimeObject(date, texts).H;
                },
                hh: function hh() {
                  return _this._hydrateTimeObject(date, texts).hh;
                },
                h: function h() {
                  return _this._hydrateTimeObject(date, texts).h;
                },
                am: function am() {
                  return _this._hydrateTimeObject(date, texts).am;
                },
                AM: function AM() {
                  return _this._hydrateTimeObject(date, texts).AM;
                },
                mm: function mm() {
                  return _this._hydrateTimeObject(date, texts).mm;
                },
                m: function m() {
                  return _this._hydrateTimeObject(date, texts).m;
                }
              };
              return format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function(m, contents) {
                var result = dateObj[contents.replace(/\{|\}/g, "")];
                return result !== void 0 ? result() : contents;
              });
            }
          }, {
            key: "formatDateLite",
            value: function formatDateLite(date) {
              var m = date.getMonth() + 1;
              var d = date.getDate();
              return "".concat(date.getFullYear(), "-").concat(m < 10 ? "0" : "").concat(m, "-").concat(d < 10 ? "0" : "").concat(d);
            }
          }, {
            key: "formatTime",
            value: function formatTime(date) {
              var format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "HH:mm";
              var texts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
              var round = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
              var shouldRound = false;
              if (round) {
                var _ref = [date.getHours(), date.getMinutes(), date.getSeconds()], h = _ref[0], m = _ref[1], s = _ref[2];
                if (h + m + s === 23 + 59 + 59)
                  shouldRound = true;
              }
              if (date instanceof Date && format === "HH:mm")
                return shouldRound ? "24:00" : this.formatTimeLite(date);
              _timeObject = {};
              if (!texts)
                texts = this._texts;
              var timeObj = this._hydrateTimeObject(date, texts);
              var formatted = format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function(m2, contents) {
                var result = timeObj[contents.replace(/\{|\}/g, "")];
                return result !== void 0 ? result : contents;
              });
              return shouldRound ? formatted.replace("23:59", "24:00") : formatted;
            }
          }, {
            key: "formatTimeLite",
            value: function formatTimeLite(date) {
              var h = date.getHours();
              var m = date.getMinutes();
              return "".concat((h < 10 ? "0" : "") + h, ":").concat((m < 10 ? "0" : "") + m);
            }
          }, {
            key: "_nth",
            value: function _nth(d) {
              if (d > 3 && d < 21)
                return "th";
              switch (d % 10) {
                case 1:
                  return "st";
                case 2:
                  return "nd";
                case 3:
                  return "rd";
                default:
                  return "th";
              }
            }
          }, {
            key: "_hydrateDateObject",
            value: function _hydrateDateObject(date, texts) {
              var _this2 = this;
              if (_dateObject.D)
                return _dateObject;
              var YYYY = date.getFullYear();
              var M = date.getMonth() + 1;
              var D = date.getDate();
              var day = date.getDay();
              var dayNumber = (day - 1 + 7) % 7;
              _dateObject = {
                YYYY,
                YY: function YY() {
                  return YYYY.toString().substring(2);
                },
                M,
                MM: function MM() {
                  return (M < 10 ? "0" : "") + M;
                },
                MMM: function MMM() {
                  return texts.months[M - 1].substring(0, 3);
                },
                MMMM: function MMMM() {
                  return texts.months[M - 1];
                },
                MMMMG: function MMMMG() {
                  return (texts.monthsGenitive || texts.months)[M - 1];
                },
                D,
                DD: function DD() {
                  return (D < 10 ? "0" : "") + D;
                },
                S: function S() {
                  return _this2._nth(D);
                },
                d: dayNumber + 1,
                dd: function dd() {
                  return texts.weekDays[dayNumber][0];
                },
                ddd: function ddd() {
                  return texts.weekDays[dayNumber].substr(0, 3);
                },
                dddd: function dddd() {
                  return texts.weekDays[dayNumber];
                }
              };
              return _dateObject;
            }
          }, {
            key: "_hydrateTimeObject",
            value: function _hydrateTimeObject(date, texts) {
              if (_timeObject.am)
                return _timeObject;
              var H, m;
              if (date instanceof Date) {
                H = date.getHours();
                m = date.getMinutes();
              } else {
                H = Math.floor(date / 60);
                m = Math.floor(date % 60);
              }
              var h = H % 12 ? H % 12 : 12;
              var am = (texts || {
                am: "am",
                pm: "pm"
              })[H === 24 || H < 12 ? "am" : "pm"];
              _timeObject = {
                H,
                h,
                HH: (H < 10 ? "0" : "") + H,
                hh: (h < 10 ? "0" : "") + h,
                am,
                AM: am.toUpperCase(),
                m,
                mm: (m < 10 ? "0" : "") + m
              };
              return _timeObject;
            }
          }]);
          return DateUtils;
        }();
        var minutesInADay = 24 * 60;
        var cell_CellUtils = function CellUtils(vuecal) {
          var _this = this;
          Object(classCallCheck["a"])(this, CellUtils);
          Object(defineProperty["a"])(this, "_vuecal", null);
          Object(defineProperty["a"])(this, "selectCell", function() {
            var force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            var date = arguments.length > 1 ? arguments[1] : void 0;
            var split = arguments.length > 2 ? arguments[2] : void 0;
            _this._vuecal.$emit("cell-click", split ? {
              date,
              split
            } : date);
            if (_this._vuecal.clickToNavigate || force)
              _this._vuecal.switchToNarrowerView();
            else if (_this._vuecal.dblclickToNavigate && "ontouchstart" in window) {
              _this._vuecal.domEvents.dblTapACell.taps++;
              setTimeout(function() {
                return _this._vuecal.domEvents.dblTapACell.taps = 0;
              }, _this._vuecal.domEvents.dblTapACell.timeout);
              if (_this._vuecal.domEvents.dblTapACell.taps >= 2) {
                _this._vuecal.domEvents.dblTapACell.taps = 0;
                _this._vuecal.switchToNarrowerView();
                _this._vuecal.$emit("cell-dblclick", split ? {
                  date,
                  split
                } : date);
              }
            }
          });
          Object(defineProperty["a"])(this, "keyPressEnterCell", function(date, split) {
            _this._vuecal.$emit("cell-keypress-enter", split ? {
              date,
              split
            } : date);
            _this._vuecal.switchToNarrowerView();
          });
          Object(defineProperty["a"])(this, "getPosition", function(e) {
            var _this$_vuecal$cellsEl = _this._vuecal.cellsEl.getBoundingClientRect(), left = _this$_vuecal$cellsEl.left, top = _this$_vuecal$cellsEl.top;
            var _ref = "ontouchstart" in window && e.touches ? e.touches[0] : e, clientX = _ref.clientX, clientY = _ref.clientY;
            return {
              x: clientX - left,
              y: clientY - top
            };
          });
          Object(defineProperty["a"])(this, "minutesAtCursor", function(e) {
            var minutes = 0;
            var cursorCoords = {
              x: 0,
              y: 0
            };
            var _this$_vuecal$$props = _this._vuecal.$props, timeStep = _this$_vuecal$$props.timeStep, timeCellHeight = _this$_vuecal$$props.timeCellHeight, timeFrom = _this$_vuecal$$props.timeFrom;
            if (typeof e === "number")
              minutes = e;
            else if (_typeof(e) === "object") {
              cursorCoords = _this.getPosition(e);
              minutes = Math.round(cursorCoords.y * timeStep / parseInt(timeCellHeight) + timeFrom);
            }
            return {
              minutes: Math.max(Math.min(minutes, minutesInADay), 0),
              cursorCoords
            };
          });
          this._vuecal = vuecal;
        };
        var es_array_find_index = __webpack_require__("c740");
        var es_array_splice = __webpack_require__("a434");
        var es_set = __webpack_require__("6062");
        var defaultEventDuration = 2;
        var event_minutesInADay = 24 * 60;
        var event_ud;
        var _cellOverlaps, _comparisonArray;
        var event_EventUtils = function() {
          function EventUtils(vuecal, dateUtils) {
            Object(classCallCheck["a"])(this, EventUtils);
            Object(defineProperty["a"])(this, "_vuecal", null);
            Object(defineProperty["a"])(this, "eventDefaults", {
              _eid: null,
              start: "",
              startTimeMinutes: 0,
              end: "",
              endTimeMinutes: 0,
              title: "",
              content: "",
              background: false,
              allDay: false,
              segments: null,
              repeat: null,
              daysCount: 1,
              deletable: true,
              deleting: false,
              titleEditable: true,
              resizable: true,
              resizing: false,
              draggable: true,
              dragging: false,
              draggingStatic: false,
              focused: false,
              class: ""
            });
            this._vuecal = vuecal;
            event_ud = dateUtils;
          }
          Object(createClass["a"])(EventUtils, [{
            key: "createAnEvent",
            value: function createAnEvent(dateTime, duration, eventOptions) {
              var _this = this;
              if (typeof dateTime === "string")
                dateTime = event_ud.stringToDate(dateTime);
              if (!(dateTime instanceof Date))
                return false;
              var startTimeMinutes = event_ud.dateToMinutes(dateTime);
              duration = duration * 1 || defaultEventDuration * 60;
              var endTimeMinutes = startTimeMinutes + duration;
              var end = event_ud.addMinutes(new Date(dateTime), duration);
              if (eventOptions.end) {
                if (typeof eventOptions.end === "string")
                  eventOptions.end = event_ud.stringToDate(eventOptions.end);
                eventOptions.endTimeMinutes = event_ud.dateToMinutes(eventOptions.end);
              }
              var event = Object(objectSpread2["a"])(Object(objectSpread2["a"])({}, this.eventDefaults), {}, {
                _eid: "".concat(this._vuecal._.uid, "_").concat(this._vuecal.eventIdIncrement++),
                start: dateTime,
                startTimeMinutes,
                end,
                endTimeMinutes,
                segments: null
              }, eventOptions);
              if (typeof this._vuecal.onEventCreate === "function") {
                if (!this._vuecal.onEventCreate(event, function() {
                  return _this.deleteAnEvent(event);
                }))
                  return;
              }
              if (event.startDateF !== event.endDateF) {
                event.daysCount = event_ud.countDays(event.start, event.end);
              }
              this._vuecal.mutableEvents.push(event);
              this._vuecal.addEventsToView([event]);
              this._vuecal.emitWithEvent("event-create", event);
              this._vuecal.$emit("event-change", {
                event: this._vuecal.cleanupEvent(event),
                originalEvent: null
              });
              return event;
            }
          }, {
            key: "addEventSegment",
            value: function addEventSegment(e) {
              if (!e.segments) {
                e.segments = {};
                e.segments[event_ud.formatDateLite(e.start)] = {
                  start: e.start,
                  startTimeMinutes: e.startTimeMinutes,
                  endTimeMinutes: event_minutesInADay,
                  isFirstDay: true,
                  isLastDay: false
                };
              }
              var previousSegment = e.segments[event_ud.formatDateLite(e.end)];
              if (previousSegment) {
                previousSegment.isLastDay = false;
                previousSegment.endTimeMinutes = event_minutesInADay;
              } else {
              }
              var start = event_ud.addDays(e.end, 1);
              var formattedDate = event_ud.formatDateLite(start);
              start.setHours(0, 0, 0, 0);
              e.segments[formattedDate] = {
                start,
                startTimeMinutes: 0,
                endTimeMinutes: e.endTimeMinutes,
                isFirstDay: false,
                isLastDay: true
              };
              e.end = event_ud.addMinutes(start, e.endTimeMinutes);
              e.daysCount = Object.keys(e.segments).length;
              return formattedDate;
            }
          }, {
            key: "removeEventSegment",
            value: function removeEventSegment(e) {
              var segmentsCount = Object.keys(e.segments).length;
              if (segmentsCount <= 1)
                return event_ud.formatDateLite(e.end);
              delete e.segments[event_ud.formatDateLite(e.end)];
              segmentsCount--;
              var end = event_ud.subtractDays(e.end, 1);
              var formattedDate = event_ud.formatDateLite(end);
              var previousSegment = e.segments[formattedDate];
              if (!segmentsCount)
                e.segments = null;
              else if (previousSegment) {
                previousSegment.isLastDay = true;
                previousSegment.endTimeMinutes = e.endTimeMinutes;
              } else {
              }
              e.daysCount = segmentsCount || 1;
              e.end = end;
              return formattedDate;
            }
          }, {
            key: "createEventSegments",
            value: function createEventSegments(e, viewStartDate, viewEndDate) {
              var viewStartTimestamp = viewStartDate.getTime();
              var viewEndTimestamp = viewEndDate.getTime();
              var eventStart = e.start.getTime();
              var eventEnd = e.end.getTime();
              var repeatedEventStartFound = false;
              var timestamp, end, eventStartAtMidnight;
              if (!e.end.getHours() && !e.end.getMinutes())
                eventEnd -= 1e3;
              e.segments = {};
              if (!e.repeat) {
                timestamp = Math.max(viewStartTimestamp, eventStart);
                end = Math.min(viewEndTimestamp, eventEnd);
              } else {
                timestamp = viewStartTimestamp;
                end = Math.min(viewEndTimestamp, e.repeat.until ? event_ud.stringToDate(e.repeat.until).getTime() : viewEndTimestamp);
              }
              while (timestamp <= end) {
                var createSegment = false;
                var nextMidnight = event_ud.addDays(new Date(timestamp), 1).setHours(0, 0, 0, 0);
                var isFirstDay = void 0, isLastDay = void 0, start = void 0, formattedDate = void 0;
                if (e.repeat) {
                  var tmpDate = new Date(timestamp);
                  var tmpDateFormatted = event_ud.formatDateLite(tmpDate);
                  if (repeatedEventStartFound || e.occurrences && e.occurrences[tmpDateFormatted]) {
                    if (!repeatedEventStartFound) {
                      eventStart = e.occurrences[tmpDateFormatted].start;
                      eventStartAtMidnight = new Date(eventStart).setHours(0, 0, 0, 0);
                      eventEnd = e.occurrences[tmpDateFormatted].end;
                    }
                    repeatedEventStartFound = true;
                    createSegment = true;
                  }
                  isFirstDay = timestamp === eventStartAtMidnight;
                  isLastDay = tmpDateFormatted === event_ud.formatDateLite(new Date(eventEnd));
                  start = new Date(isFirstDay ? eventStart : timestamp);
                  formattedDate = event_ud.formatDateLite(start);
                  if (isLastDay)
                    repeatedEventStartFound = false;
                } else {
                  createSegment = true;
                  isFirstDay = timestamp === eventStart;
                  isLastDay = end === eventEnd && nextMidnight > end;
                  start = isFirstDay ? e.start : new Date(timestamp);
                  formattedDate = event_ud.formatDateLite(isFirstDay ? e.start : start);
                }
                if (createSegment) {
                  e.segments[formattedDate] = {
                    start,
                    startTimeMinutes: isFirstDay ? e.startTimeMinutes : 0,
                    endTimeMinutes: isLastDay ? e.endTimeMinutes : event_minutesInADay,
                    isFirstDay,
                    isLastDay
                  };
                }
                timestamp = nextMidnight;
              }
              return e;
            }
          }, {
            key: "deleteAnEvent",
            value: function deleteAnEvent(event) {
              this._vuecal.emitWithEvent("event-delete", event);
              this._vuecal.mutableEvents = this._vuecal.mutableEvents.filter(function(e) {
                return e._eid !== event._eid;
              });
              this._vuecal.view.events = this._vuecal.view.events.filter(function(e) {
                return e._eid !== event._eid;
              });
            }
          }, {
            key: "checkCellOverlappingEvents",
            value: function checkCellOverlappingEvents(cellEvents, options) {
              var _this2 = this;
              _comparisonArray = cellEvents.slice(0);
              _cellOverlaps = {};
              cellEvents.forEach(function(e) {
                _comparisonArray.shift();
                if (!_cellOverlaps[e._eid])
                  _cellOverlaps[e._eid] = {
                    overlaps: [],
                    start: e.start,
                    position: 0
                  };
                _cellOverlaps[e._eid].position = 0;
                _comparisonArray.forEach(function(e2) {
                  if (!_cellOverlaps[e2._eid])
                    _cellOverlaps[e2._eid] = {
                      overlaps: [],
                      start: e2.start,
                      position: 0
                    };
                  var eventIsInRange = _this2.eventInRange(e2, e.start, e.end);
                  var eventsInSameTimeStep = options.overlapsPerTimeStep ? event_ud.datesInSameTimeStep(e.start, e2.start, options.timeStep) : 1;
                  if (!e.background && !e.allDay && !e2.background && !e2.allDay && eventIsInRange && eventsInSameTimeStep) {
                    _cellOverlaps[e._eid].overlaps.push(e2._eid);
                    _cellOverlaps[e._eid].overlaps = _toConsumableArray(new Set(_cellOverlaps[e._eid].overlaps));
                    _cellOverlaps[e2._eid].overlaps.push(e._eid);
                    _cellOverlaps[e2._eid].overlaps = _toConsumableArray(new Set(_cellOverlaps[e2._eid].overlaps));
                    _cellOverlaps[e2._eid].position++;
                  } else {
                    var pos1, pos2;
                    if ((pos1 = (_cellOverlaps[e._eid] || {
                      overlaps: []
                    }).overlaps.indexOf(e2._eid)) > -1)
                      _cellOverlaps[e._eid].overlaps.splice(pos1, 1);
                    if ((pos2 = (_cellOverlaps[e2._eid] || {
                      overlaps: []
                    }).overlaps.indexOf(e._eid)) > -1)
                      _cellOverlaps[e2._eid].overlaps.splice(pos2, 1);
                    _cellOverlaps[e2._eid].position--;
                  }
                });
              });
              var longestStreak = 0;
              var _loop = function _loop2(id2) {
                var item = _cellOverlaps[id2];
                var overlapsRow = item.overlaps.map(function(id22) {
                  return {
                    id: id22,
                    start: _cellOverlaps[id22].start
                  };
                });
                overlapsRow.push({
                  id: id2,
                  start: item.start
                });
                overlapsRow.sort(function(a, b) {
                  return a.start < b.start ? -1 : a.start > b.start ? 1 : a.id > b.id ? -1 : 1;
                });
                item.position = overlapsRow.findIndex(function(e) {
                  return e.id === id2;
                });
                longestStreak = Math.max(_this2.getOverlapsStreak(item, _cellOverlaps), longestStreak);
              };
              for (var id in _cellOverlaps) {
                _loop(id);
              }
              return [_cellOverlaps, longestStreak];
            }
          }, {
            key: "getOverlapsStreak",
            value: function getOverlapsStreak(event) {
              var cellOverlaps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              var streak = event.overlaps.length + 1;
              var removeFromStreak = [];
              event.overlaps.forEach(function(id) {
                if (!removeFromStreak.includes(id)) {
                  var overlapsWithoutSelf = event.overlaps.filter(function(id2) {
                    return id2 !== id;
                  });
                  overlapsWithoutSelf.forEach(function(id3) {
                    if (!cellOverlaps[id3].overlaps.includes(id))
                      removeFromStreak.push(id3);
                  });
                }
              });
              removeFromStreak = _toConsumableArray(new Set(removeFromStreak));
              streak -= removeFromStreak.length;
              return streak;
            }
          }, {
            key: "eventInRange",
            value: function eventInRange(event, start, end) {
              if (event.allDay || !this._vuecal.time) {
                var _startTimestamp = new Date(event.start).setHours(0, 0, 0, 0);
                var _endTimestamp = new Date(event.end).setHours(23, 59, 0, 0);
                return _endTimestamp >= new Date(start).setHours(0, 0, 0, 0) && _startTimestamp <= new Date(end).setHours(0, 0, 0, 0);
              }
              var startTimestamp = event.start.getTime();
              var endTimestamp = event.end.getTime();
              return startTimestamp < end.getTime() && endTimestamp > start.getTime();
            }
          }]);
          return EventUtils;
        }();
        var headervue_type_template_id_d2bb7926_lang_pug_hoisted_1 = {
          class: "vuecal__header"
        };
        var headervue_type_template_id_d2bb7926_lang_pug_hoisted_2 = {
          key: 0,
          class: "vuecal__flex vuecal__menu",
          role: "tablist",
          "aria-label": "Calendar views navigation"
        };
        var headervue_type_template_id_d2bb7926_lang_pug_hoisted_3 = {
          key: 1,
          class: "vuecal__title-bar"
        };
        var headervue_type_template_id_d2bb7926_lang_pug_hoisted_4 = {
          class: "vuecal__flex vuecal__title",
          grow: ""
        };
        var headervue_type_template_id_d2bb7926_lang_pug_hoisted_5 = {
          key: 0,
          class: "vuecal__flex vuecal__split-days-headers"
        };
        function headervue_type_template_id_d2bb7926_lang_pug_render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_weekdays_headings = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("weekdays-headings");
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", headervue_type_template_id_d2bb7926_lang_pug_hoisted_1, [!$props.options.hideViewSelector ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", headervue_type_template_id_d2bb7926_lang_pug_hoisted_2, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.viewProps.views, function(v, id) {
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
              key: id
            }, [v.enabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("button", {
              key: 0,
              class: ["vuecal__view-btn", {
                "vuecal__view-btn--active": $options.view.id === id,
                "vuecal__view-btn--highlighted": _ctx.highlightedControl === id
              }],
              type: "button",
              onDragenter: function onDragenter($event) {
                return $props.editEvents.drag && $options.dnd && $options.dnd.viewSelectorDragEnter($event, id, _ctx.$data);
              },
              onDragleave: function onDragleave($event) {
                return $props.editEvents.drag && $options.dnd && $options.dnd.viewSelectorDragLeave($event, id, _ctx.$data);
              },
              onClick: function onClick($event) {
                return $options.switchView(id, null, true);
              },
              "aria-label": "".concat(v.label, " view")
            }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(v.label), 43, ["onDragenter", "onDragleave", "onClick", "aria-label"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64);
          }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !$props.options.hideTitleBar ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", headervue_type_template_id_d2bb7926_lang_pug_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
            class: ["vuecal__arrow vuecal__arrow--prev", {
              "vuecal__arrow--highlighted": _ctx.highlightedControl === "previous"
            }],
            type: "button",
            onClick: _cache[1] || (_cache[1] = function() {
              return $options.previous.apply($options, arguments);
            }),
            onDragenter: _cache[2] || (_cache[2] = function($event) {
              return $props.editEvents.drag && $options.dnd && $options.dnd.viewSelectorDragEnter($event, "previous", _ctx.$data);
            }),
            onDragleave: _cache[3] || (_cache[3] = function($event) {
              return $props.editEvents.drag && $options.dnd && $options.dnd.viewSelectorDragLeave($event, "previous", _ctx.$data);
            }),
            "aria-label": "Previous ".concat($options.view.id)
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "arrow-prev")], 42, ["aria-label"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", headervue_type_template_id_d2bb7926_lang_pug_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
            name: $props.options.transitions ? "slide-fade--".concat($options.transitionDirection) : ""
          }, {
            default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function() {
              return [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($options.broaderView ? "button" : "span"), {
                type: !!$options.broaderView && "button",
                key: "".concat($options.view.id).concat($options.view.startDate.toString()),
                onClick: _cache[4] || (_cache[4] = function($event) {
                  return !!$options.broaderView && $options.switchToBroaderView();
                }),
                "aria-label": !!$options.broaderView && "Go to ".concat($options.broaderView, " view")
              }, {
                default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "title")];
                }),
                _: 3
              }, 8, ["type", "aria-label"]))];
            }),
            _: 1
          }, 8, ["name"])]), $props.options.todayButton ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("button", {
            key: 0,
            class: ["vuecal__today-btn", {
              "vuecal__today-btn--highlighted": _ctx.highlightedControl === "today"
            }],
            type: "button",
            onClick: _cache[5] || (_cache[5] = function() {
              return $options.goToToday.apply($options, arguments);
            }),
            onDragenter: _cache[6] || (_cache[6] = function($event) {
              return $props.editEvents.drag && $options.dnd && $options.dnd.viewSelectorDragEnter($event, "today", _ctx.$data);
            }),
            onDragleave: _cache[7] || (_cache[7] = function($event) {
              return $props.editEvents.drag && $options.dnd && $options.dnd.viewSelectorDragLeave($event, "today", _ctx.$data);
            }),
            "aria-label": "Today"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "today-button")], 34)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
            class: ["vuecal__arrow vuecal__arrow--next", {
              "vuecal__arrow--highlighted": _ctx.highlightedControl === "next"
            }],
            type: "button",
            onClick: _cache[8] || (_cache[8] = function() {
              return $options.next.apply($options, arguments);
            }),
            onDragenter: _cache[9] || (_cache[9] = function($event) {
              return $props.editEvents.drag && $options.dnd && $options.dnd.viewSelectorDragEnter($event, "next", _ctx.$data);
            }),
            onDragleave: _cache[10] || (_cache[10] = function($event) {
              return $props.editEvents.drag && $options.dnd && $options.dnd.viewSelectorDragLeave($event, "next", _ctx.$data);
            }),
            "aria-label": "Next ".concat($options.view.id)
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "arrow-next")], 42, ["aria-label"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.viewProps.weekDaysInHeader ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_weekdays_headings, {
            key: 2,
            "week-days": $props.weekDays,
            "transition-direction": $options.transitionDirection,
            "switch-to-narrower-view": $props.switchToNarrowerView
          }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createSlots"])({
            _: 2
          }, [_ctx.$slots["weekday-heading"] ? {
            name: "weekday-heading",
            fn: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function(_ref) {
              var heading = _ref.heading, view = _ref.view;
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "weekday-heading", {
                heading,
                view
              })];
            })
          } : void 0, _ctx.$slots["split-label"] ? {
            name: "split-label",
            fn: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function(_ref2) {
              var split = _ref2.split;
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "split-label", {
                split,
                view: $options.view
              })];
            })
          } : void 0]), 1032, ["week-days", "transition-direction", "switch-to-narrower-view"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
            name: "slide-fade--".concat($options.transitionDirection)
          }, {
            default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function() {
              return [$options.showDaySplits ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", headervue_type_template_id_d2bb7926_lang_pug_hoisted_5, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.daySplits, function(split, i) {
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                  class: ["day-split-header", split.class || false],
                  key: i
                }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "split-label", {
                  split,
                  view: $options.view.id
                }, function() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(split.label), 1)];
                })], 2);
              }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
            }),
            _: 1
          }, 8, ["name"])]);
        }
        var weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_1 = {
          class: "vuecal__flex vuecal__weekdays-headings"
        };
        var weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_2 = {
          class: "vuecal__flex weekday-label",
          grow: ""
        };
        var weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_3 = {
          class: "full"
        };
        var weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_4 = {
          class: "small"
        };
        var weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_5 = {
          class: "xsmall"
        };
        var weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_6 = {
          key: 0
        };
        var weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_7 = {
          key: 0,
          class: "vuecal__flex vuecal__split-days-headers",
          grow: ""
        };
        function weekdays_headingsvue_type_template_id_f3db6496_lang_pug_render(_ctx, _cache, $props, $setup, $data, $options) {
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_1, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.headings, function(heading, i) {
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
              key: i
            }, [!heading.hide ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
              key: 0,
              class: ["vuecal__flex vuecal__heading", {
                today: heading.today,
                clickable: $options.cellHeadingsClickable
              }],
              style: $options.weekdayCellStyles,
              onClick: function onClick($event) {
                return $options.view.id === "week" && $options.selectCell(heading.date, $event);
              },
              onDblclick: _cache[1] || (_cache[1] = function($event) {
                return $options.view.id === "week" && $options.vuecal.dblclickToNavigate && $props.switchToNarrowerView();
              })
            }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
              name: "slide-fade--".concat($props.transitionDirection),
              appear: $options.vuecal.transitions
            }, {
              default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function() {
                return [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                  class: "vuecal__flex",
                  column: "",
                  key: $options.vuecal.transitions ? "".concat(i, "-").concat(heading.dayOfMonth) : false
                }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "weekday-heading", {
                  heading: $options.cleanupHeading(heading),
                  view: $options.view
                }, function() {
                  return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(heading.full), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(heading.small), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(heading.xsmall), 1), heading.dayOfMonth ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_6, "\xA0" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(heading.dayOfMonth), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
                })]), $options.vuecal.hasSplits && $options.vuecal.stickySplitLabels ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", weekdays_headingsvue_type_template_id_f3db6496_lang_pug_hoisted_7, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.vuecal.daySplits, function(split, i2) {
                  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                    class: ["day-split-header", split.class || false],
                    key: i2
                  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "split-label", {
                    split,
                    view: $options.view
                  }, function() {
                    return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(split.label), 1)];
                  })], 2);
                }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]))];
              }),
              _: 2
            }, 1032, ["name", "appear"])], 46, ["onClick"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64);
          }), 128))]);
        }
        var weekdays_headingsvue_type_script_lang_js = {
          inject: ["vuecal", "utils", "view"],
          props: {
            transitionDirection: {
              type: String,
              default: "right"
            },
            weekDays: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            switchToNarrowerView: {
              type: Function,
              default: function _default() {
              }
            }
          },
          methods: {
            selectCell: function selectCell(date, DOMEvent) {
              if (date.getTime() !== this.view.selectedDate.getTime()) {
                this.view.selectedDate = date;
              }
              this.utils.cell.selectCell(false, date, DOMEvent);
            },
            cleanupHeading: function cleanupHeading(heading) {
              return Object(objectSpread2["a"])({
                label: heading.full,
                date: heading.date
              }, heading.today ? {
                today: heading.today
              } : {});
            }
          },
          computed: {
            headings: function headings() {
              var _this = this;
              if (!["month", "week"].includes(this.view.id))
                return [];
              var todayFound = false;
              var headings2 = this.weekDays.map(function(cell, i) {
                var date = _this.utils.date.addDays(_this.view.startDate, i);
                return Object(objectSpread2["a"])({
                  hide: cell.hide,
                  full: cell.label,
                  small: cell.short || cell.label.substr(0, 3),
                  xsmall: cell.short || cell.label.substr(0, 1)
                }, _this.view.id === "week" ? {
                  dayOfMonth: (date.getDate() < 10 ? ("0"+date.getDate()) : date.getDate()) + "." + (date.getMonth() < 10 ? ("0"+(date.getMonth() + 1)) : (date.getMonth() + 1) ), //date number
                  date,
                  today: !todayFound && _this.utils.date.isToday(date) && !todayFound++
                } : {});
              });
              return headings2;
            },
            cellWidth: function cellWidth() {
              return 100 / (7 - this.weekDays.reduce(function(total, day) {
                return total + day.hide;
              }, 0));
            },
            weekdayCellStyles: function weekdayCellStyles() {
              return Object(objectSpread2["a"])({}, this.vuecal.hideWeekdays.length ? {
                width: "".concat(this.cellWidth, "%")
              } : {});
            },
            cellHeadingsClickable: function cellHeadingsClickable() {
              return this.view.id === "week" && (this.vuecal.clickToNavigate || this.vuecal.dblclickToNavigate);
            }
          }
        };
        var weekdays_headingsvue_type_style_index_0_id_f3db6496_lang_scss = __webpack_require__("2f4d");
        weekdays_headingsvue_type_script_lang_js.render = weekdays_headingsvue_type_template_id_f3db6496_lang_pug_render;
        var weekdays_headings = weekdays_headingsvue_type_script_lang_js;
        var headervue_type_script_lang_js = {
          inject: ["vuecal", "previous", "next", "switchView", "updateSelectedDate", "modules", "view"],
          components: {
            WeekdaysHeadings: weekdays_headings
          },
          props: {
            options: {
              type: Object,
              default: function _default() {
                return {};
              }
            },
            editEvents: {
              type: Object,
              required: true
            },
            hasSplits: {
              type: [Boolean, Number],
              default: false
            },
            daySplits: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            viewProps: {
              type: Object,
              default: function _default() {
                return {};
              }
            },
            weekDays: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            switchToNarrowerView: {
              type: Function,
              default: function _default() {
              }
            }
          },
          data: function data() {
            return {
              highlightedControl: null
            };
          },
          methods: {
            goToToday: function goToToday() {
              this.updateSelectedDate(new Date(new Date().setHours(0, 0, 0, 0)));
            },
            switchToBroaderView: function switchToBroaderView() {
              this.transitionDirection = "left";
              if (this.broaderView)
                this.switchView(this.broaderView);
            }
          },
          computed: {
            transitionDirection: {
              get: function get() {
                return this.vuecal.transitionDirection;
              },
              set: function set(direction) {
                this.vuecal.transitionDirection = direction;
              }
            },
            broaderView: function broaderView() {
              var enabledViews = this.vuecal.enabledViews;
              return enabledViews[enabledViews.indexOf(this.view.id) - 1];
            },
            showDaySplits: function showDaySplits() {
              return this.view.id === "day" && this.hasSplits && this.options.stickySplitLabels && !this.options.minSplitWidth;
            },
            dnd: function dnd() {
              return this.modules.dnd;
            }
          }
        };
        var headervue_type_style_index_0_id_d2bb7926_lang_scss = __webpack_require__("c8c4");
        headervue_type_script_lang_js.render = headervue_type_template_id_d2bb7926_lang_pug_render;
        var header = headervue_type_script_lang_js;
        var all_day_barvue_type_template_id_8ec5ab98_lang_pug_hoisted_1 = {
          key: 0,
          class: "vuecal__all-day-text",
          style: {
            "width": "3em"
          }
        };
        function all_day_barvue_type_template_id_8ec5ab98_lang_pug_render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_vuecal_cell = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("vuecal-cell");
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
            class: "vuecal__flex vuecal__all-day",
            style: $props.cellOrSplitMinWidth && {
              height: $props.height
            }
          }, [!$props.cellOrSplitMinWidth ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", all_day_barvue_type_template_id_8ec5ab98_lang_pug_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            class: ["vuecal__flex vuecal__cells", "".concat($options.view.id, "-view")],
            grow: "",
            style: $props.cellOrSplitMinWidth ? "min-width: ".concat($props.cellOrSplitMinWidth, "px") : ""
          }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.cells, function(cell, i) {
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_vuecal_cell, {
              key: i,
              options: $props.options,
              "edit-events": $options.editEvents,
              data: cell,
              "all-day": true,
              "cell-width": $props.options.hideWeekdays.length && ($options.vuecal.isWeekView || $options.vuecal.isMonthView) && $options.vuecal.cellWidth,
              "min-timestamp": $props.options.minTimestamp,
              "max-timestamp": $props.options.maxTimestamp,
              "cell-splits": $props.daySplits
            }, {
              event: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function(_ref) {
                var event = _ref.event, view = _ref.view;
                return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "event", {
                  view,
                  event
                })];
              }),
              _: 2
            }, 1032, ["options", "edit-events", "data", "cell-width", "min-timestamp", "max-timestamp", "cell-splits"]);
          }), 128))], 6)], 4);
        }
        var cellvue_type_template_id_16690b7a_lang_pug_hoisted_1 = {
          key: 1,
          class: "vuecal__cell-events"
        };
        function cellvue_type_template_id_16690b7a_lang_pug_render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_event = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("event");
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["TransitionGroup"], {
            class: ["vuecal__cell", $options.cellClasses],
            name: "slide-fade--".concat($options.transitionDirection),
            tag: "div",
            appear: $props.options.transitions,
            style: $options.cellStyles
          }, {
            default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function() {
              return [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.splitsCount ? $options.splits : 1, function(split, i) {
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                  class: ["vuecal__flex vuecal__cell-content", $options.splitsCount && $options.splitClasses(split)],
                  key: $props.options.transitions ? "".concat($options.view.id, "-").concat($props.data.content, "-").concat(i) : i,
                  "data-split": $options.splitsCount ? split.id : false,
                  column: "",
                  tabindex: "0",
                  "aria-label": $props.data.content,
                  onFocus: _cache[1] || (_cache[1] = function($event) {
                    return $options.onCellFocus($event);
                  }),
                  onKeypress: _cache[2] || (_cache[2] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(function($event) {
                    return $options.onCellkeyPressEnter($event);
                  }, ["enter"])),
                  onTouchstart: function onTouchstart($event) {
                    return !$options.isDisabled && $options.onCellTouchStart($event, $options.splitsCount ? split.id : null);
                  },
                  onMousedown: function onMousedown($event) {
                    return !$options.isDisabled && $options.onCellMouseDown($event, $options.splitsCount ? split.id : null);
                  },
                  onClick: _cache[3] || (_cache[3] = function($event) {
                    return !$options.isDisabled && $options.onCellClick($event);
                  }),
                  onDblclick: _cache[4] || (_cache[4] = function($event) {
                    return !$options.isDisabled && $options.onCellDblClick($event);
                  }),
                  onContextmenu: _cache[5] || (_cache[5] = function($event) {
                    return !$options.isDisabled && $props.options.cellContextmenu && $options.onCellContextMenu($event);
                  }),
                  onDragenter: _cache[6] || (_cache[6] = function($event) {
                    return !$options.isDisabled && $props.editEvents.drag && $options.dnd && $options.dnd.cellDragEnter($event, _ctx.$data, $props.data.startDate);
                  }),
                  onDragover: function onDragover($event) {
                    return !$options.isDisabled && $props.editEvents.drag && $options.dnd && $options.dnd.cellDragOver($event, _ctx.$data, $props.data.startDate, $options.splitsCount ? split.id : null);
                  },
                  onDragleave: _cache[7] || (_cache[7] = function($event) {
                    return !$options.isDisabled && $props.editEvents.drag && $options.dnd && $options.dnd.cellDragLeave($event, _ctx.$data, $props.data.startDate);
                  }),
                  onDrop: function onDrop($event) {
                    return !$options.isDisabled && $props.editEvents.drag && $options.dnd && $options.dnd.cellDragDrop($event, _ctx.$data, $props.data.startDate, $options.splitsCount ? split.id : null);
                  }
                }, [$options.isWeekOrDayView && !$props.allDay && $options.specialHours.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
                  key: 0
                }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.specialHours, function(block, i2) {
                  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                    class: ["vuecal__special-hours", "vuecal__special-hours--day".concat(block.day, " ").concat(block.class)],
                    style: "height: ".concat(block.height, "px;top: ").concat(block.top, "px")
                  }, null, 6);
                }), 256)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "cell-content", {
                  events: $options.events,
                  "select-cell": function selectCell($event) {
                    return $options.selectCell($event, true);
                  },
                  split: $options.splitsCount ? split : false
                }), $options.eventsCount && ($options.isWeekOrDayView || $options.view.id === "month" && $props.options.eventsOnMonthView) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", cellvue_type_template_id_16690b7a_lang_pug_hoisted_1, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.splitsCount ? split.events : $options.events, function(event, j) {
                  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_event, {
                    key: j,
                    "cell-formatted-date": $props.data.formattedDate,
                    event,
                    "all-day": $props.allDay,
                    "cell-events": $options.splitsCount ? split.events : $options.events,
                    overlaps: (($options.splitsCount ? split.overlaps[event._eid] : _ctx.cellOverlaps[event._eid]) || []).overlaps,
                    "event-position": (($options.splitsCount ? split.overlaps[event._eid] : _ctx.cellOverlaps[event._eid]) || []).position,
                    "overlaps-streak": $options.splitsCount ? split.overlapsStreak : _ctx.cellOverlapsStreak
                  }, {
                    event: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function(_ref) {
                      var event2 = _ref.event, view = _ref.view;
                      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "event", {
                        view,
                        event: event2
                      })];
                    }),
                    _: 2
                  }, 1032, ["cell-formatted-date", "event", "all-day", "cell-events", "overlaps", "event-position", "overlaps-streak"]);
                }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 42, ["data-split", "aria-label", "onTouchstart", "onMousedown", "onDragover", "onDrop"]);
              }), 128)), $options.timelineVisible ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                class: "vuecal__now-line",
                style: "top: ".concat($options.todaysTimePosition, "px"),
                key: $props.options.transitions ? "".concat($options.view.id, "-now-line") : "now-line",
                title: $options.utils.date.formatTime($options.vuecal.now)
              }, null, 12, ["title"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
            }),
            _: 1
          }, 8, ["class", "name", "appear", "style"]);
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function _iterableToArrayLimit(arr, i) {
          if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
            return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function eventvue_type_template_id_cdf79fc4_lang_pug_render(_ctx, _cache, $props, $setup, $data, $options) {
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
            class: ["vuecal__event", $options.eventClasses],
            style: $options.eventStyles,
            tabindex: "0",
            onFocus: _cache[5] || (_cache[5] = function() {
              return $options.focusEvent.apply($options, arguments);
            }),
            onKeypress: _cache[6] || (_cache[6] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function() {
              return $options.onEnterKeypress.apply($options, arguments);
            }, ["stop"]), ["enter"])),
            onMouseenter: _cache[7] || (_cache[7] = function() {
              return $options.onMouseEnter.apply($options, arguments);
            }),
            onMouseleave: _cache[8] || (_cache[8] = function() {
              return $options.onMouseLeave.apply($options, arguments);
            }),
            onTouchstart: _cache[9] || (_cache[9] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function() {
              return $options.onTouchStart.apply($options, arguments);
            }, ["stop"])),
            onMousedown: _cache[10] || (_cache[10] = function($event) {
              return $options.onMouseDown($event);
            }),
            onMouseup: _cache[11] || (_cache[11] = function() {
              return $options.onMouseUp.apply($options, arguments);
            }),
            onTouchend: _cache[12] || (_cache[12] = function() {
              return $options.onMouseUp.apply($options, arguments);
            }),
            onTouchmove: _cache[13] || (_cache[13] = function() {
              return $options.onTouchMove.apply($options, arguments);
            }),
            onDblclick: _cache[14] || (_cache[14] = function() {
              return $options.onDblClick.apply($options, arguments);
            }),
            draggable: $options.draggable,
            onDragstart: _cache[15] || (_cache[15] = function($event) {
              return $options.draggable && $options.onDragStart($event);
            }),
            onDragend: _cache[16] || (_cache[16] = function($event) {
              return $options.draggable && $options.onDragEnd();
            })
          }, [$options.vuecal.editEvents.delete && $props.event.deletable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
            key: 0,
            class: "vuecal__event-delete",
            onClick: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function() {
              return $options.deleteEvent.apply($options, arguments);
            }, ["stop"])),
            onTouchstart: _cache[2] || (_cache[2] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function() {
              return $options.touchDeleteEvent.apply($options, arguments);
            }, ["stop"]))
          }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.vuecal.texts.deleteEvent), 33)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "event", {
            event: $props.event,
            view: $options.view.id
          }), $options.resizable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
            key: 1,
            class: "vuecal__event-resize-handle",
            contenteditable: "false",
            onMousedown: _cache[3] || (_cache[3] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function() {
              return $options.onResizeHandleMouseDown.apply($options, arguments);
            }, ["stop", "prevent"])),
            onTouchstart: _cache[4] || (_cache[4] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function() {
              return $options.onResizeHandleMouseDown.apply($options, arguments);
            }, ["stop", "prevent"]))
          }, null, 32)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 46, ["draggable"]);
        }
        var eventvue_type_script_lang_js = {
          inject: ["vuecal", "utils", "modules", "view", "domEvents", "editEvents"],
          props: {
            cellFormattedDate: {
              type: String,
              default: ""
            },
            event: {
              type: Object,
              default: function _default() {
                return {};
              }
            },
            cellEvents: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            overlaps: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            eventPosition: {
              type: Number,
              default: 0
            },
            overlapsStreak: {
              type: Number,
              default: 0
            },
            allDay: {
              type: Boolean,
              default: false
            }
          },
          data: function data() {
            return {
              touch: {
                dragThreshold: 30,
                startX: 0,
                startY: 0,
                dragged: false
              }
            };
          },
          methods: {
            onMouseDown: function onMouseDown(e) {
              var _this = this;
              var touch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
              if ("ontouchstart" in window && !touch)
                return false;
              var _this$domEvents = this.domEvents, clickHoldAnEvent = _this$domEvents.clickHoldAnEvent, focusAnEvent = _this$domEvents.focusAnEvent, resizeAnEvent = _this$domEvents.resizeAnEvent, dragAnEvent = _this$domEvents.dragAnEvent;
              if (focusAnEvent._eid === this.event._eid && clickHoldAnEvent._eid === this.event._eid) {
                return true;
              }
              this.focusEvent();
              clickHoldAnEvent._eid = null;
              if (this.vuecal.editEvents.delete && this.event.deletable) {
                clickHoldAnEvent.timeoutId = setTimeout(function() {
                  if (!resizeAnEvent._eid && !dragAnEvent._eid) {
                    clickHoldAnEvent._eid = _this.event._eid;
                    _this.event.deleting = true;
                  }
                }, clickHoldAnEvent.timeout);
              }
            },
            onMouseUp: function onMouseUp(e) {
              if (this.domEvents.focusAnEvent._eid === this.event._eid && !this.touch.dragged) {
                this.domEvents.focusAnEvent.mousedUp = true;
              }
              this.touch.dragged = false;
            },
            onMouseEnter: function onMouseEnter(e) {
              e.preventDefault();
              this.vuecal.emitWithEvent("event-mouse-enter", this.event);
            },
            onMouseLeave: function onMouseLeave(e) {
              e.preventDefault();
              this.vuecal.emitWithEvent("event-mouse-leave", this.event);
            },
            onTouchMove: function onTouchMove(e) {
              if (typeof this.vuecal.onEventClick !== "function")
                return;
              var _e$touches$ = e.touches[0], clientX = _e$touches$.clientX, clientY = _e$touches$.clientY;
              var _this$touch = this.touch, startX = _this$touch.startX, startY = _this$touch.startY, dragThreshold = _this$touch.dragThreshold;
              if (Math.abs(clientX - startX) > dragThreshold || Math.abs(clientY - startY) > dragThreshold) {
                this.touch.dragged = true;
              }
            },
            onTouchStart: function onTouchStart(e) {
              this.touch.startX = e.touches[0].clientX;
              this.touch.startY = e.touches[0].clientY;
              this.onMouseDown(e, true);
            },
            onEnterKeypress: function onEnterKeypress(e) {
              if (typeof this.vuecal.onEventClick === "function")
                return this.vuecal.onEventClick(this.event, e);
            },
            onDblClick: function onDblClick(e) {
              if (typeof this.vuecal.onEventDblclick === "function")
                return this.vuecal.onEventDblclick(this.event, e);
            },
            onDragStart: function onDragStart(e) {
              this.dnd && this.dnd.eventDragStart(e, this.event);
            },
            onDragEnd: function onDragEnd() {
              this.dnd && this.dnd.eventDragEnd(this.event);
            },
            onResizeHandleMouseDown: function onResizeHandleMouseDown() {
              this.focusEvent();
              this.domEvents.dragAnEvent._eid = null;
              this.domEvents.resizeAnEvent = Object.assign(this.domEvents.resizeAnEvent, {
                _eid: this.event._eid,
                start: (this.segment || this.event).start,
                split: this.event.split || null,
                segment: !!this.segment && this.utils.date.formatDateLite(this.segment.start),
                originalEnd: new Date((this.segment || this.event).end),
                originalEndTimeMinutes: this.event.endTimeMinutes
              });
              this.event.resizing = true;
            },
            deleteEvent: function deleteEvent() {
              var touch = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
              if ("ontouchstart" in window && !touch)
                return false;
              this.utils.event.deleteAnEvent(this.event);
            },
            touchDeleteEvent: function touchDeleteEvent(event) {
              this.deleteEvent(true);
            },
            cancelDeleteEvent: function cancelDeleteEvent() {
              this.event.deleting = false;
            },
            focusEvent: function focusEvent() {
              var focusAnEvent = this.domEvents.focusAnEvent;
              var focusedEvent = focusAnEvent._eid;
              if (focusedEvent === this.event._eid)
                return;
              else if (focusedEvent) {
                var event = this.view.events.find(function(e) {
                  return e._eid === focusedEvent;
                });
                if (event)
                  event.focused = false;
              }
              this.vuecal.cancelDelete();
              this.vuecal.emitWithEvent("event-focus", this.event);
              focusAnEvent._eid = this.event._eid;
              this.event.focused = true;
            }
          },
          computed: {
            eventDimensions: function eventDimensions() {
              var _ref = this.segment || this.event, startTimeMinutes = _ref.startTimeMinutes, endTimeMinutes = _ref.endTimeMinutes;
              var minutesFromTop = startTimeMinutes - this.vuecal.timeFrom;
              var top = Math.max(Math.round(minutesFromTop * this.vuecal.timeCellHeight / this.vuecal.timeStep), 0);
              minutesFromTop = Math.min(endTimeMinutes, this.vuecal.timeTo) - this.vuecal.timeFrom;
              var bottom = Math.round(minutesFromTop * this.vuecal.timeCellHeight / this.vuecal.timeStep);
              var height = Math.max(bottom - top, 5);
              return {
                top,
                height
              };
            },
            eventStyles: function eventStyles() {
              if (this.event.allDay || !this.vuecal.time || !this.event.endTimeMinutes || this.view.id === "month" || this.allDay)
                return {};
              var width = 100 / Math.min(this.overlaps.length + 1, this.overlapsStreak);
              var left = 100 / (this.overlaps.length + 1) * this.eventPosition;
              if (this.vuecal.minEventWidth && width < this.vuecal.minEventWidth) {
                width = this.vuecal.minEventWidth;
                left = (100 - this.vuecal.minEventWidth) / this.overlaps.length * this.eventPosition;
              }
              var _this$eventDimensions = this.eventDimensions, top = _this$eventDimensions.top, height = _this$eventDimensions.height;
              return {
                top: "".concat(top, "px"),
                height: "".concat(height, "px"),
                width: "".concat(width, "%"),
                left: this.event.left && "".concat(this.event.left, "px") || "".concat(left, "%")
              };
            },
            eventClasses: function eventClasses() {
              var _ref3;
              var _ref2 = this.segment || {}, isFirstDay = _ref2.isFirstDay, isLastDay = _ref2.isLastDay;
              return _ref3 = {}, Object(defineProperty["a"])(_ref3, this.event.class, !!this.event.class), Object(defineProperty["a"])(_ref3, "vuecal__event--focus", this.event.focused), Object(defineProperty["a"])(_ref3, "vuecal__event--resizing", this.event.resizing), Object(defineProperty["a"])(_ref3, "vuecal__event--background", this.event.background), Object(defineProperty["a"])(_ref3, "vuecal__event--deletable", this.event.deleting), Object(defineProperty["a"])(_ref3, "vuecal__event--all-day", this.event.allDay), Object(defineProperty["a"])(_ref3, "vuecal__event--dragging", !this.event.draggingStatic && this.event.dragging), Object(defineProperty["a"])(_ref3, "vuecal__event--static", this.event.dragging && this.event.draggingStatic), Object(defineProperty["a"])(_ref3, "vuecal__event--multiple-days", !!this.segment), Object(defineProperty["a"])(_ref3, "event-start", this.segment && isFirstDay && !isLastDay), Object(defineProperty["a"])(_ref3, "event-middle", this.segment && !isFirstDay && !isLastDay), Object(defineProperty["a"])(_ref3, "event-end", this.segment && isLastDay && !isFirstDay), _ref3;
            },
            segment: function segment() {
              return this.event.segments && this.event.segments[this.cellFormattedDate] || null;
            },
            draggable: function draggable() {
              var _this$event = this.event, draggable2 = _this$event.draggable, background = _this$event.background, daysCount = _this$event.daysCount;
              return this.vuecal.editEvents.drag && draggable2 && !background && daysCount === 1;
            },
            resizable: function resizable() {
              var _this$vuecal = this.vuecal, editEvents = _this$vuecal.editEvents, time = _this$vuecal.time;
              return editEvents.resize && this.event.resizable && time && !this.allDay && (!this.segment || this.segment && this.segment.isLastDay) && this.view.id !== "month";
            },
            dnd: function dnd() {
              return this.modules.dnd;
            }
          }
        };
        var eventvue_type_style_index_0_id_cdf79fc4_lang_scss = __webpack_require__("b48b");
        eventvue_type_script_lang_js.render = eventvue_type_template_id_cdf79fc4_lang_pug_render;
        var vue_cal_event = eventvue_type_script_lang_js;
        var cellvue_type_script_lang_js = {
          inject: ["vuecal", "utils", "modules", "view", "domEvents"],
          components: {
            Event: vue_cal_event
          },
          props: {
            options: {
              type: Object,
              default: function _default() {
                return {};
              }
            },
            editEvents: {
              type: Object,
              required: true
            },
            data: {
              type: Object,
              required: true
            },
            cellSplits: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            minTimestamp: {
              type: [Number, null],
              default: null
            },
            maxTimestamp: {
              type: [Number, null],
              default: null
            },
            cellWidth: {
              type: [Number, Boolean],
              default: false
            },
            allDay: {
              type: Boolean,
              default: false
            }
          },
          data: function data() {
            return {
              cellOverlaps: {},
              cellOverlapsStreak: 1,
              timeAtCursor: null,
              highlighted: false,
              highlightedSplit: null
            };
          },
          methods: {
            getSplitAtCursor: function getSplitAtCursor(_ref) {
              var target = _ref.target;
              var targetIsSplit = target.classList.contains("vuecal__cell-split");
              var split = targetIsSplit ? target : this.vuecal.findAncestor(target, "vuecal__cell-split");
              if (split) {
                split = split.attributes["data-split"].value;
                if (parseInt(split).toString() === split.toString())
                  split = parseInt(split);
              }
              return split || null;
            },
            splitClasses: function splitClasses(split) {
              return Object(defineProperty["a"])({
                "vuecal__cell-split": true,
                "vuecal__cell-split--highlighted": this.highlightedSplit === split.id
              }, split.class, !!split.class);
            },
            checkCellOverlappingEvents: function checkCellOverlappingEvents() {
              if (this.options.time && this.eventsCount && !this.splitsCount) {
                if (this.eventsCount === 1) {
                  this.cellOverlaps = [];
                  this.cellOverlapsStreak = 1;
                } else {
                  var _this$utils$event$che = this.utils.event.checkCellOverlappingEvents(this.events, this.options);
                  var _this$utils$event$che2 = _slicedToArray(_this$utils$event$che, 2);
                  this.cellOverlaps = _this$utils$event$che2[0];
                  this.cellOverlapsStreak = _this$utils$event$che2[1];
                }
              }
            },
            isDOMElementAnEvent: function isDOMElementAnEvent(el) {
              return this.vuecal.isDOMElementAnEvent(el);
            },
            selectCell: function selectCell(DOMEvent) {
              var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
              var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
              this.utils.cell.selectCell(force, this.timeAtCursor, split);
              this.timeAtCursor = null;
            },
            onCellkeyPressEnter: function onCellkeyPressEnter(DOMEvent) {
              if (!this.isSelected)
                this.onCellFocus(DOMEvent);
              var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
              this.utils.cell.keyPressEnterCell(this.timeAtCursor, split);
              this.timeAtCursor = null;
            },
            onCellFocus: function onCellFocus(DOMEvent) {
              if (!this.isSelected) {
                this.isSelected = this.data.startDate;
                var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
                var date = this.timeAtCursor || this.data.startDate;
                this.vuecal.$emit("cell-focus", split ? {
                  date,
                  split
                } : date);
              }
            },
            onCellMouseDown: function onCellMouseDown(DOMEvent) {
              var split = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              var touch = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
              if ("ontouchstart" in window && !touch)
                return false;
              if (!this.isSelected)
                this.onCellFocus(DOMEvent);
              var _this$domEvents = this.domEvents, clickHoldACell = _this$domEvents.clickHoldACell, focusAnEvent = _this$domEvents.focusAnEvent;
              this.domEvents.cancelClickEventCreation = false;
              clickHoldACell.eventCreated = false;
              this.timeAtCursor = new Date(this.data.startDate);
              var _this$vuecal$minutesA = this.vuecal.minutesAtCursor(DOMEvent), minutes = _this$vuecal$minutesA.minutes, y = _this$vuecal$minutesA.cursorCoords.y;
              this.timeAtCursor.setMinutes(minutes);
              var mouseDownOnEvent = this.isDOMElementAnEvent(DOMEvent.target);
              if (!mouseDownOnEvent && focusAnEvent._eid) {
                (this.view.events.find(function(e) {
                  return e._eid === focusAnEvent._eid;
                }) || {}).focused = false;
              }
              if (this.editEvents.create && !mouseDownOnEvent)
                this.setUpEventCreation(DOMEvent, y);
            },
            setUpEventCreation: function setUpEventCreation(DOMEvent, startCursorY) {
              if (this.options.dragToCreateEvent && ["week", "day"].includes(this.view.id)) {
                var dragCreateAnEvent = this.domEvents.dragCreateAnEvent;
                dragCreateAnEvent.startCursorY = startCursorY;
                dragCreateAnEvent.split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
                dragCreateAnEvent.start = this.timeAtCursor;
                if (this.options.snapToTime) {
                  var timeMinutes = this.timeAtCursor.getHours() * 60 + this.timeAtCursor.getMinutes();
                  var plusHalfSnapTime = timeMinutes + this.options.snapToTime / 2;
                  timeMinutes = plusHalfSnapTime - plusHalfSnapTime % this.options.snapToTime;
                  dragCreateAnEvent.start.setHours(0, timeMinutes, 0, 0);
                }
              } else if (this.options.cellClickHold && ["month", "week", "day"].includes(this.view.id)) {
                this.setUpCellHoldTimer(DOMEvent);
              }
            },
            setUpCellHoldTimer: function setUpCellHoldTimer(DOMEvent) {
              var _this = this;
              var clickHoldACell = this.domEvents.clickHoldACell;
              clickHoldACell.cellId = "".concat(this.vuecal._.uid, "_").concat(this.data.formattedDate);
              clickHoldACell.split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
              clickHoldACell.timeoutId = setTimeout(function() {
                if (clickHoldACell.cellId && !_this.domEvents.cancelClickEventCreation) {
                  var _this$utils$event$cre = _this.utils.event.createAnEvent(_this.timeAtCursor, null, clickHoldACell.split ? {
                    split: clickHoldACell.split
                  } : {}), _eid = _this$utils$event$cre._eid;
                  clickHoldACell.eventCreated = _eid;
                }
              }, clickHoldACell.timeout);
            },
            onCellTouchStart: function onCellTouchStart(DOMEvent) {
              var split = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              this.onCellMouseDown(DOMEvent, split, true);
            },
            onCellClick: function onCellClick(DOMEvent) {
              if (!this.isDOMElementAnEvent(DOMEvent.target))
                this.selectCell(DOMEvent);
            },
            onCellDblClick: function onCellDblClick(DOMEvent) {
              var date = new Date(this.data.startDate);
              date.setMinutes(this.vuecal.minutesAtCursor(DOMEvent).minutes);
              var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
              this.vuecal.$emit("cell-dblclick", split ? {
                date,
                split
              } : date);
              if (this.options.dblclickToNavigate)
                this.vuecal.switchToNarrowerView();
            },
            onCellContextMenu: function onCellContextMenu(DOMEvent) {
              DOMEvent.stopPropagation();
              DOMEvent.preventDefault();
              var date = new Date(this.data.startDate);
              var _this$vuecal$minutesA2 = this.vuecal.minutesAtCursor(DOMEvent), cursorCoords = _this$vuecal$minutesA2.cursorCoords, minutes = _this$vuecal$minutesA2.minutes;
              date.setMinutes(minutes);
              var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
              this.vuecal.$emit("cell-contextmenu", Object(objectSpread2["a"])(Object(objectSpread2["a"])(Object(objectSpread2["a"])({
                date
              }, cursorCoords), split || {}), {}, {
                e: DOMEvent
              }));
            }
          },
          computed: {
            dnd: function dnd() {
              return this.modules.dnd;
            },
            nowInMinutes: function nowInMinutes() {
              return this.utils.date.dateToMinutes(this.vuecal.now);
            },
            isBeforeMinDate: function isBeforeMinDate() {
              return this.minTimestamp !== null && this.minTimestamp > this.data.endDate.getTime();
            },
            isAfterMaxDate: function isAfterMaxDate() {
              return this.maxTimestamp && this.maxTimestamp < this.data.startDate.getTime();
            },
            isDisabled: function isDisabled() {
              var disableDays = this.options.disableDays;
              var isYearsOrYearView = this.vuecal.isYearsOrYearView;
              if (disableDays.length && disableDays.includes(this.data.formattedDate) && !isYearsOrYearView)
                return true;
              return this.isBeforeMinDate || this.isAfterMaxDate;
            },
            isSelected: {
              get: function get() {
                var selected = false;
                var selectedDate = this.view.selectedDate;
                if (this.view.id === "years") {
                  selected = selectedDate.getFullYear() === this.data.startDate.getFullYear();
                } else if (this.view.id === "year") {
                  selected = selectedDate.getFullYear() === this.data.startDate.getFullYear() && selectedDate.getMonth() === this.data.startDate.getMonth();
                } else
                  selected = selectedDate.getTime() === this.data.startDate.getTime();
                return selected;
              },
              set: function set(date) {
                this.view.selectedDate = date;
              }
            },
            isWeekOrDayView: function isWeekOrDayView() {
              return ["week", "day"].includes(this.view.id);
            },
            transitionDirection: function transitionDirection() {
              return this.vuecal.transitionDirection;
            },
            specialHours: function specialHours() {
              var _this2 = this;
              return this.data.specialHours.map(function(block) {
                var from = block.from, to = block.to;
                from = Math.max(from, _this2.options.timeFrom);
                to = Math.min(to, _this2.options.timeTo);
                return Object(objectSpread2["a"])(Object(objectSpread2["a"])({}, block), {}, {
                  height: (to - from) * _this2.timeScale,
                  top: (from - _this2.options.timeFrom) * _this2.timeScale
                });
              });
            },
            events: function events() {
              var _this3 = this;
              var _this$data = this.data, cellStart = _this$data.startDate, cellEnd = _this$data.endDate;
              var events2 = [];
              if (!(["years", "year"].includes(this.view.id) && !this.options.eventsCountOnYearView)) {
                events2 = this.view.events.slice(0);
                if (this.view.id === "month") {
                  var _events;
                  (_events = events2).push.apply(_events, _toConsumableArray(this.view.outOfScopeEvents));
                }
                events2 = events2.filter(function(e) {
                  return _this3.utils.event.eventInRange(e, cellStart, cellEnd);
                });
                if (this.options.showAllDayEvents && this.view.id !== "month")
                  events2 = events2.filter(function(e) {
                    return !!e.allDay === _this3.allDay;
                  });
                if (this.options.time && this.isWeekOrDayView && !this.allDay) {
                  var _this$options = this.options, timeFrom = _this$options.timeFrom, timeTo = _this$options.timeTo;
                  events2 = events2.filter(function(e) {
                    var segment = e.daysCount > 1 && e.segments[_this3.data.formattedDate] || {};
                    var singleDayInRange = e.daysCount === 1 && e.startTimeMinutes < timeTo && e.endTimeMinutes > timeFrom;
                    var multipleDayInRange = e.daysCount > 1 && segment.startTimeMinutes < timeTo && segment.endTimeMinutes > timeFrom;
                    var recurrMultDayInRange = false;
                    return e.allDay || singleDayInRange || multipleDayInRange || recurrMultDayInRange;
                  });
                }
                if (this.options.time && this.isWeekOrDayView && !(this.options.showAllDayEvents && this.allDay)) {
                  events2.sort(function(a, b) {
                    return a.start < b.start ? -1 : 1;
                  });
                }
                if (!this.cellSplits.length)
                  this.$nextTick(this.checkCellOverlappingEvents);
              }
              return events2;
            },
            eventsCount: function eventsCount() {
              return this.events.length;
            },
            splits: function splits() {
              var _this4 = this;
              return this.cellSplits.map(function(item, i) {
                var events = _this4.events.filter(function(e) {
                  return e.split === item.id;
                });
                var _this4$utils$event$ch = _this4.utils.event.checkCellOverlappingEvents(events.filter(function(e) {
                  return !e.background && !e.allDay;
                }), _this4.options), _this4$utils$event$ch2 = _slicedToArray(_this4$utils$event$ch, 2), overlaps = _this4$utils$event$ch2[0], streak = _this4$utils$event$ch2[1];
                return Object(objectSpread2["a"])(Object(objectSpread2["a"])({}, item), {}, {
                  overlaps,
                  overlapsStreak: streak,
                  events
                });
              });
            },
            splitsCount: function splitsCount() {
              return this.splits.length;
            },
            cellClasses: function cellClasses() {
              var _ref3;
              return _ref3 = {}, Object(defineProperty["a"])(_ref3, this.data.class, !!this.data.class), Object(defineProperty["a"])(_ref3, "vuecal__cell--current", this.data.current), Object(defineProperty["a"])(_ref3, "vuecal__cell--today", this.data.today), Object(defineProperty["a"])(_ref3, "vuecal__cell--out-of-scope", this.data.outOfScope), Object(defineProperty["a"])(_ref3, "vuecal__cell--before-min", this.isDisabled && this.isBeforeMinDate), Object(defineProperty["a"])(_ref3, "vuecal__cell--after-max", this.isDisabled && this.isAfterMaxDate), Object(defineProperty["a"])(_ref3, "vuecal__cell--disabled", this.isDisabled), Object(defineProperty["a"])(_ref3, "vuecal__cell--selected", this.isSelected), Object(defineProperty["a"])(_ref3, "vuecal__cell--highlighted", this.highlighted), Object(defineProperty["a"])(_ref3, "vuecal__cell--has-splits", this.splitsCount), Object(defineProperty["a"])(_ref3, "vuecal__cell--has-events", this.eventsCount), _ref3;
            },
            cellStyles: function cellStyles() {
              return Object(objectSpread2["a"])({}, this.cellWidth ? {
                width: "".concat(this.cellWidth, "%")
              } : {});
            },
            timelineVisible: function timelineVisible() {
              var _this$options2 = this.options, time = _this$options2.time, timeTo = _this$options2.timeTo;
              return this.data.today && this.isWeekOrDayView && time && !this.allDay && this.nowInMinutes <= timeTo;
            },
            todaysTimePosition: function todaysTimePosition() {
              if (!this.data.today || !this.options.time)
                return;
              var minutesFromTop = this.nowInMinutes - this.options.timeFrom;
              return Math.round(minutesFromTop * this.timeScale);
            },
            timeScale: function timeScale() {
              return this.options.timeCellHeight / this.options.timeStep;
            }
          }
        };
        var cellvue_type_style_index_0_id_16690b7a_lang_scss = __webpack_require__("de47");
        cellvue_type_script_lang_js.render = cellvue_type_template_id_16690b7a_lang_pug_render;
        var vue_cal_cell = cellvue_type_script_lang_js;
        var all_day_barvue_type_script_lang_js = {
          inject: ["vuecal", "view", "editEvents"],
          components: {
            "vuecal-cell": vue_cal_cell
          },
          props: {
            options: {
              type: Object,
              required: true
            },
            cells: {
              type: Array,
              required: true
            },
            label: {
              type: String,
              required: true
            },
            daySplits: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            shortEvents: {
              type: Boolean,
              default: true
            },
            height: {
              type: String,
              default: ""
            },
            cellOrSplitMinWidth: {
              type: Number,
              default: null
            }
          },
          computed: {
            hasCellOrSplitWidth: function hasCellOrSplitWidth() {
              return !!(this.options.minCellWidth || this.daySplits.length && this.options.minSplitWidth);
            }
          }
        };
        all_day_barvue_type_script_lang_js.render = all_day_barvue_type_template_id_8ec5ab98_lang_pug_render;
        var all_day_bar = all_day_barvue_type_script_lang_js;
        var styles = __webpack_require__("1332");
        var vue_calvue_type_script_lang_js_minutesInADay = 24 * 60;
        var textsDefaults = {
          weekDays: Array(7).fill(""),
          weekDaysShort: [],
          months: Array(12).fill(""),
          years: "",
          year: "",
          month: "",
          week: "",
          day: "",
          today: "",
          noEvent: "",
          allDay: "",
          deleteEvent: "",
          createEvent: "",
          dateFormat: "dddd MMMM D, YYYY",
          am: "am",
          pm: "pm"
        };
        var validViews = ["years", "year", "month", "week", "day"];
        var vue_calvue_type_script_lang_js_dateUtils = new date_DateUtils(textsDefaults);
        var vue_calvue_type_script_lang_js = {
          name: "vue-cal",
          components: {
            "vuecal-cell": vue_cal_cell,
            "vuecal-header": header,
            WeekdaysHeadings: weekdays_headings,
            AllDayBar: all_day_bar
          },
          provide: function provide() {
            return {
              vuecal: this,
              utils: this.utils,
              modules: this.modules,
              previous: this.previous,
              next: this.next,
              switchView: this.switchView,
              updateSelectedDate: this.updateSelectedDate,
              editEvents: this.editEvents,
              view: this.view,
              domEvents: this.domEvents
            };
          },
          props: {
            activeView: {
              type: String,
              default: "week"
            },
            allDayBarHeight: {
              type: [String, Number],
              default: "25px"
            },
            cellClickHold: {
              type: Boolean,
              default: true
            },
            cellContextmenu: {
              type: Boolean,
              default: false
            },
            clickToNavigate: {
              type: Boolean,
              default: false
            },
            dblclickToNavigate: {
              type: Boolean,
              default: true
            },
            disableDatePrototypes: {
              type: Boolean,
              default: false
            },
            disableDays: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            disableViews: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            dragToCreateEvent: {
              type: Boolean,
              default: true
            },
            dragToCreateThreshold: {
              type: Number,
              default: 15
            },
            editableEvents: {
              type: [Boolean, Object],
              default: false
            },
            events: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            eventsCountOnYearView: {
              type: Boolean,
              default: false
            },
            eventsOnMonthView: {
              type: [Boolean, String],
              default: false
            },
            hideBody: {
              type: Boolean,
              default: false
            },
            hideTitleBar: {
              type: Boolean,
              default: false
            },
            hideViewSelector: {
              type: Boolean,
              default: false
            },
            hideWeekdays: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            hideWeekends: {
              type: Boolean,
              default: false
            },
            locale: {
              type: [String, Object],
              default: "en"
            },
            maxDate: {
              type: [String, Date],
              default: ""
            },
            minCellWidth: {
              type: Number,
              default: 0
            },
            minDate: {
              type: [String, Date],
              default: ""
            },
            minEventWidth: {
              type: Number,
              default: 0
            },
            minSplitWidth: {
              type: Number,
              default: 0
            },
            onEventClick: {
              type: [Function, null],
              default: null
            },
            onEventCreate: {
              type: [Function, null],
              default: null
            },
            onEventDblclick: {
              type: [Function, null],
              default: null
            },
            overlapsPerTimeStep: {
              type: Boolean,
              default: false
            },
            resizeX: {
              type: Boolean,
              default: false
            },
            selectedDate: {
              type: [String, Date],
              default: ""
            },
            showAllDayEvents: {
              type: [Boolean, String],
              default: false
            },
            showWeekNumbers: {
              type: [Boolean, String],
              default: false
            },
            snapToTime: {
              type: Number,
              default: 0
            },
            small: {
              type: Boolean,
              default: false
            },
            specialHours: {
              type: Object,
              default: function _default() {
                return {};
              }
            },
            splitDays: {
              type: Array,
              default: function _default() {
                return [];
              }
            },
            startWeekOnSunday: {
              type: Boolean,
              default: false
            },
            stickySplitLabels: {
              type: Boolean,
              default: false
            },
            time: {
              type: Boolean,
              default: true
            },
            timeCellHeight: {
              type: Number,
              default: 40
            },
            timeFormat: {
              type: String,
              default: ""
            },
            timeFrom: {
              type: Number,
              default: 0
            },
            timeStep: {
              type: Number,
              default: 60
            },
            timeTo: {
              type: Number,
              default: vue_calvue_type_script_lang_js_minutesInADay
            },
            todayButton: {
              type: Boolean,
              default: false
            },
            transitions: {
              type: Boolean,
              default: true
            },
            twelveHour: {
              type: Boolean,
              default: false
            },
            watchRealTime: {
              type: Boolean,
              default: false
            },
            xsmall: {
              type: Boolean,
              default: false
            }
          },
          data: function data() {
            return {
              ready: false,
              texts: Object(objectSpread2["a"])({}, textsDefaults),
              utils: {
                date: (this.disableDatePrototypes ? vue_calvue_type_script_lang_js_dateUtils.removePrototypes() : false) || vue_calvue_type_script_lang_js_dateUtils,
                cell: null,
                event: null
              },
              modules: {
                dnd: null
              },
              cellsEl: null,
              view: {
                id: "",
                title: "",
                startDate: null,
                endDate: null,
                firstCellDate: null,
                lastCellDate: null,
                selectedDate: null,
                events: []
              },
              eventIdIncrement: 1,
              now: new Date(),
              timeTickerIds: [null, null],
              domEvents: {
                resizeAnEvent: {
                  _eid: null,
                  start: null,
                  split: null,
                  segment: null,
                  originalEndTimeMinutes: 0,
                  originalEnd: null,
                  end: null,
                  startCell: null,
                  endCell: null
                },
                dragAnEvent: {
                  _eid: null
                },
                dragCreateAnEvent: {
                  startCursorY: null,
                  start: null,
                  split: null,
                  event: null
                },
                focusAnEvent: {
                  _eid: null,
                  mousedUp: false
                },
                clickHoldAnEvent: {
                  _eid: null,
                  timeout: 1200,
                  timeoutId: null
                },
                dblTapACell: {
                  taps: 0,
                  timeout: 500
                },
                clickHoldACell: {
                  cellId: null,
                  split: null,
                  timeout: 1200,
                  timeoutId: null,
                  eventCreated: false
                },
                cancelClickEventCreation: false
              },
              mutableEvents: [],
              transitionDirection: "right"
            };
          },
          methods: {
            loadLocale: function loadLocale(locale) {
              var _this = this;
              if (_typeof(this.locale) === "object") {
                this.texts = Object.assign({}, textsDefaults, locale);
                this.utils.date.updateTexts(this.texts);
                return;
              }
              if (this.locale === "en")
                this.texts = Object.assign({}, textsDefaults, __webpack_require__("0a96"));
              else {
                __webpack_require__("4a53")("./" + locale).then(function(response) {
                  _this.texts = Object.assign({}, textsDefaults, response.default);
                  _this.utils.date.updateTexts(_this.texts);
                });
              }
            },
            loadDragAndDrop: function loadDragAndDrop() {
              var _this2 = this;
              __webpack_require__.e(39).then(__webpack_require__.bind(null, "a691f")).then(function(response) {
                var DragAndDrop = response.DragAndDrop;
                _this2.modules.dnd = new DragAndDrop(_this2);
              }).catch(function() {
                return console.warn("Vue Cal: Missing drag & drop module.");
              });
            },
            validateView: function validateView(view) {
              if (!validViews.includes(view)) {
                console.error('Vue Cal: invalid active-view parameter provided: "'.concat(view, '".\nA valid view must be one of: ').concat(validViews.join(", "), "."));
                view = "week";
              }
              if (!this.enabledViews.includes(view)) {
                console.warn('Vue Cal: the provided active-view "'.concat(view, '" is disabled. Using the "').concat(this.enabledViews[0], '" view instead.'));
                view = this.enabledViews[0];
              }
              return view;
            },
            switchToNarrowerView: function switchToNarrowerView() {
              var date = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
              this.transitionDirection = "right";
              var view = this.enabledViews[this.enabledViews.indexOf(this.view.id) + 1];
              if (view)
                this.switchView(view, date);
            },
            switchView: function switchView(view) {
              var date = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              var fromViewSelector = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
              view = this.validateView(view);
              var ud = this.utils.date;
              var viewDateBeforeChange = this.view.startDate && this.view.startDate.getTime();
              if (this.transitions && fromViewSelector) {
                if (this.view.id === view)
                  return;
                var views = this.enabledViews;
                this.transitionDirection = views.indexOf(this.view.id) > views.indexOf(view) ? "left" : "right";
              }
              var oldView = this.view.id;
              this.view.events = [];
              this.view.id = view;
              this.view.firstCellDate = null;
              this.view.lastCellDate = null;
              if (!date)
                date = this.view.selectedDate || this.view.startDate;
              switch (view) {
                case "years": {
                  this.view.startDate = new Date(Math.floor(date.getFullYear() / 25) * 25 || 2e3, 0, 1);
                  this.view.endDate = new Date(this.view.startDate.getFullYear() + 25, 0, 1);
                  this.view.endDate.setSeconds(-1);
                  break;
                }
                case "year": {
                  this.view.startDate = new Date(date.getFullYear(), 0, 1);
                  this.view.endDate = new Date(date.getFullYear() + 1, 0, 1);
                  this.view.endDate.setSeconds(-1);
                  break;
                }
                case "month": {
                  this.view.startDate = new Date(date.getFullYear(), date.getMonth(), 1);
                  this.view.endDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
                  this.view.endDate.setSeconds(-1);
                  var startDate = new Date(this.view.startDate);
                  if (startDate.getDay() !== (this.startWeekOnSunday ? 0 : 1)) {
                    startDate = ud.getPreviousFirstDayOfWeek(startDate, this.startWeekOnSunday);
                  }
                  this.view.firstCellDate = startDate;
                  this.view.lastCellDate = ud.addDays(startDate, 41);
                  this.view.lastCellDate.setHours(23, 59, 59, 0);
                  if (this.hideWeekends) {
                    if ([0, 6].includes(this.view.firstCellDate.getDay())) {
                      var daysToAdd = this.view.firstCellDate.getDay() === 6 && !this.startWeekOnSunday ? 2 : 1;
                      this.view.firstCellDate = ud.addDays(this.view.firstCellDate, daysToAdd);
                    }
                    if ([0, 6].includes(this.view.startDate.getDay())) {
                      var _daysToAdd = this.view.startDate.getDay() === 6 ? 2 : 1;
                      this.view.startDate = ud.addDays(this.view.startDate, _daysToAdd);
                    }
                    if ([0, 6].includes(this.view.lastCellDate.getDay())) {
                      var daysToSubtract = this.view.lastCellDate.getDay() === 0 && !this.startWeekOnSunday ? 2 : 1;
                      this.view.lastCellDate = ud.subtractDays(this.view.lastCellDate, daysToSubtract);
                    }
                    if ([0, 6].includes(this.view.endDate.getDay())) {
                      var _daysToSubtract = this.view.endDate.getDay() === 0 ? 2 : 1;
                      this.view.endDate = ud.subtractDays(this.view.endDate, _daysToSubtract);
                    }
                  }
                  break;
                }
                case "week": {
                  date = ud.getPreviousFirstDayOfWeek(date, this.startWeekOnSunday);
                  var weekDaysCount = this.hideWeekends ? 5 : 7;
                  this.view.startDate = this.hideWeekends && this.startWeekOnSunday ? ud.addDays(date, 1) : date;
                  this.view.startDate.setHours(0, 0, 0, 0);
                  this.view.endDate = ud.addDays(date, weekDaysCount);
                  this.view.endDate.setSeconds(-1);
                  break;
                }
                case "day": {
                  this.view.startDate = date;
                  this.view.startDate.setHours(0, 0, 0, 0);
                  this.view.endDate = new Date(date);
                  this.view.endDate.setHours(23, 59, 59, 0);
                  break;
                }
              }
              this.addEventsToView();
              var viewDate = this.view.startDate && this.view.startDate.getTime();
              if (oldView === view && viewDate === viewDateBeforeChange)
                return;
              this.$emit("update:activeView", view);
              if (this.ready) {
                var _startDate = this.view.startDate;
                var params = Object(objectSpread2["a"])(Object(objectSpread2["a"])({
                  view,
                  startDate: _startDate,
                  endDate: this.view.endDate
                }, this.isMonthView ? {
                  firstCellDate: this.view.firstCellDate,
                  lastCellDate: this.view.lastCellDate,
                  outOfScopeEvents: this.view.outOfScopeEvents.map(this.cleanupEvent)
                } : {}), {}, {
                  events: this.view.events.map(this.cleanupEvent)
                }, this.isWeekView ? {
                  week: ud.getWeek(this.startWeekOnSunday ? ud.addDays(_startDate, 1) : _startDate)
                } : {});
                this.$emit("view-change", params);
              }
            },
            previous: function previous() {
              this.previousNext(false);
            },
            next: function next() {
              this.previousNext();
            },
            previousNext: function previousNext() {
              var next = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
              var ud = this.utils.date;
              this.transitionDirection = next ? "right" : "left";
              var modifier = next ? 1 : -1;
              var firstCellDate = null;
              var _this$view = this.view, startDate = _this$view.startDate, viewId = _this$view.id;
              switch (viewId) {
                case "years":
                  firstCellDate = new Date(startDate.getFullYear() + 25 * modifier, 0, 1);
                  break;
                case "year":
                  firstCellDate = new Date(startDate.getFullYear() + 1 * modifier, 1, 1);
                  break;
                case "month":
                  firstCellDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1 * modifier, 1);
                  break;
                case "week":
                  firstCellDate = ud[next ? "addDays" : "subtractDays"](ud.getPreviousFirstDayOfWeek(startDate, this.startWeekOnSunday), 7);
                  break;
                case "day":
                  firstCellDate = ud[next ? "addDays" : "subtractDays"](startDate, 1);
                  break;
              }
              if (firstCellDate)
                this.switchView(viewId, firstCellDate);
            },
            addEventsToView: function addEventsToView() {
              var _this$view$events, _this3 = this;
              var events = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
              var ue = this.utils.event;
              var _this$view2 = this.view, startDate = _this$view2.startDate, endDate = _this$view2.endDate, firstCellDate = _this$view2.firstCellDate, lastCellDate = _this$view2.lastCellDate;
              if (!events.length)
                this.view.events = [];
              events = events.length ? events : _toConsumableArray(this.mutableEvents);
              if (!events || this.isYearsOrYearView && !this.eventsCountOnYearView)
                return;
              var filteredEvents = events.filter(function(e) {
                return ue.eventInRange(e, startDate, endDate);
              });
              if (!this.isYearsOrYearView && !(this.isMonthView && !this.eventsOnMonthView)) {
                filteredEvents = filteredEvents.map(function(e) {
                  return e.daysCount > 1 ? ue.createEventSegments(e, firstCellDate || startDate, lastCellDate || endDate) : e;
                });
              }
              (_this$view$events = this.view.events).push.apply(_this$view$events, _toConsumableArray(filteredEvents));
              if (this.isMonthView) {
                this.view.outOfScopeEvents = [];
                events.forEach(function(e) {
                  if (ue.eventInRange(e, firstCellDate, startDate) || ue.eventInRange(e, endDate, lastCellDate)) {
                    if (!_this3.view.events.some(function(e2) {
                      return e2._eid === e._eid;
                    }))
                      _this3.view.outOfScopeEvents.push(e);
                  }
                });
              }
            },
            findAncestor: function findAncestor(el, Class) {
              while ((el = el.parentElement) && !el.classList.contains(Class)) {
              }
              return el;
            },
            isDOMElementAnEvent: function isDOMElementAnEvent(el) {
              return el.classList.contains("vuecal__event") || this.findAncestor(el, "vuecal__event");
            },
            onMouseMove: function onMouseMove(e) {
              var _this$domEvents = this.domEvents, resizeAnEvent = _this$domEvents.resizeAnEvent, dragAnEvent = _this$domEvents.dragAnEvent, dragCreateAnEvent = _this$domEvents.dragCreateAnEvent;
              if (resizeAnEvent._eid === null && dragAnEvent._eid === null && !dragCreateAnEvent.start)
                return;
              e.preventDefault();
              if (resizeAnEvent._eid)
                this.eventResizing(e);
              else if (this.dragToCreateEvent && dragCreateAnEvent.start)
                this.eventDragCreation(e);
            },
            onMouseUp: function onMouseUp(e) {
              var _this$domEvents2 = this.domEvents, focusAnEvent = _this$domEvents2.focusAnEvent, resizeAnEvent = _this$domEvents2.resizeAnEvent, clickHoldAnEvent = _this$domEvents2.clickHoldAnEvent, clickHoldACell = _this$domEvents2.clickHoldACell, dragCreateAnEvent = _this$domEvents2.dragCreateAnEvent;
              var isClickHoldingEvent = clickHoldAnEvent._eid;
              var wasResizing = resizeAnEvent._eid;
              var hasResized = false;
              var dragCreatedEvent = dragCreateAnEvent.event, dragCreateStarted = dragCreateAnEvent.start;
              var mouseUpOnEvent = this.isDOMElementAnEvent(e.target);
              var eventClicked = focusAnEvent.mousedUp;
              focusAnEvent.mousedUp = false;
              if (mouseUpOnEvent)
                this.domEvents.cancelClickEventCreation = true;
              if (clickHoldACell.eventCreated)
                return;
              if (wasResizing) {
                var originalEnd = resizeAnEvent.originalEnd, originalEndTimeMinutes = resizeAnEvent.originalEndTimeMinutes, endTimeMinutes = resizeAnEvent.endTimeMinutes;
                var event = this.view.events.find(function(e2) {
                  return e2._eid === resizeAnEvent._eid;
                });
                hasResized = endTimeMinutes && endTimeMinutes !== originalEndTimeMinutes;
                if (event && event.end.getTime() !== originalEnd.getTime()) {
                  var mutableEvent = this.mutableEvents.find(function(e2) {
                    return e2._eid === resizeAnEvent._eid;
                  });
                  mutableEvent.endTimeMinutes = event.endTimeMinutes;
                  mutableEvent.end = event.end;
                  var cleanEvent = this.cleanupEvent(event);
                  var originalEvent = Object(objectSpread2["a"])(Object(objectSpread2["a"])({}, this.cleanupEvent(event)), {}, {
                    end: originalEnd,
                    endTimeMinutes: event.originalEndTimeMinutes
                  });
                  this.$emit("event-duration-change", {
                    event: cleanEvent,
                    oldDate: resizeAnEvent.originalEnd,
                    originalEvent
                  });
                  this.$emit("event-change", {
                    event: cleanEvent,
                    originalEvent
                  });
                }
                if (event)
                  event.resizing = false;
                resizeAnEvent._eid = null;
                resizeAnEvent.start = null;
                resizeAnEvent.split = null;
                resizeAnEvent.segment = null;
                resizeAnEvent.originalEndTimeMinutes = null;
                resizeAnEvent.originalEnd = null;
                resizeAnEvent.endTimeMinutes = null;
                resizeAnEvent.startCell = null;
                resizeAnEvent.endCell = null;
              } else if (dragCreateStarted) {
                if (dragCreatedEvent) {
                  this.emitWithEvent("event-drag-create", dragCreatedEvent);
                  dragCreateAnEvent.event.resizing = false;
                }
                dragCreateAnEvent.start = null;
                dragCreateAnEvent.split = null;
                dragCreateAnEvent.event = null;
              }
              if (!mouseUpOnEvent && !wasResizing)
                this.unfocusEvent();
              if (clickHoldAnEvent.timeoutId && !isClickHoldingEvent) {
                clearTimeout(clickHoldAnEvent.timeoutId);
                clickHoldAnEvent.timeoutId = null;
              }
              if (clickHoldACell.timeoutId) {
                clearTimeout(clickHoldACell.timeoutId);
                clickHoldACell.timeoutId = null;
              }
              var eventClickHandler = typeof this.onEventClick === "function";
              if (eventClicked && !hasResized && !isClickHoldingEvent && !dragCreatedEvent && eventClickHandler) {
                var _event = this.view.events.find(function(e2) {
                  return e2._eid === focusAnEvent._eid;
                });
                if (!_event && this.isMonthView)
                  _event = this.view.outOfScopeEvents.find(function(e2) {
                    return e2._eid === focusAnEvent._eid;
                  });
                return _event && this.onEventClick(_event, e);
              }
            },
            onKeyUp: function onKeyUp(e) {
              if (e.keyCode === 27)
                this.cancelDelete();
            },
            eventResizing: function eventResizing(e) {
              var resizeAnEvent = this.domEvents.resizeAnEvent;
              var event = this.view.events.find(function(e2) {
                return e2._eid === resizeAnEvent._eid;
              }) || {
                segments: {}
              };
              var _this$minutesAtCursor = this.minutesAtCursor(e), minutes = _this$minutesAtCursor.minutes, cursorCoords = _this$minutesAtCursor.cursorCoords;
              var segment = event.segments && event.segments[resizeAnEvent.segment];
              var _this$utils = this.utils, ud = _this$utils.date, ue = _this$utils.event;
              var newEndTimeMins = Math.max(minutes, this.timeFrom + 1, (segment || event).startTimeMinutes + 1);
              event.endTimeMinutes = resizeAnEvent.endTimeMinutes = newEndTimeMins;
              if (this.snapToTime) {
                var plusHalfSnapTime = event.endTimeMinutes + this.snapToTime / 2;
                event.endTimeMinutes = plusHalfSnapTime - plusHalfSnapTime % this.snapToTime;
              }
              if (segment)
                segment.endTimeMinutes = event.endTimeMinutes;
              event.end.setHours(0, event.endTimeMinutes, event.endTimeMinutes === vue_calvue_type_script_lang_js_minutesInADay ? -1 : 0, 0);
              if (this.resizeX && this.isWeekView) {
                event.daysCount = ud.countDays(event.start, event.end);
                var cells = this.cellsEl;
                var cellWidth = cells.offsetWidth / cells.childElementCount;
                var endCell = Math.floor(cursorCoords.x / cellWidth);
                if (resizeAnEvent.startCell === null)
                  resizeAnEvent.startCell = endCell - (event.daysCount - 1);
                if (resizeAnEvent.endCell !== endCell) {
                  resizeAnEvent.endCell = endCell;
                  var newEnd = ud.addDays(event.start, endCell - resizeAnEvent.startCell);
                  var newDaysCount = Math.max(ud.countDays(event.start, newEnd), 1);
                  if (newDaysCount !== event.daysCount) {
                    var lastSegmentFormattedDate = null;
                    if (newDaysCount > event.daysCount)
                      lastSegmentFormattedDate = ue.addEventSegment(event);
                    else
                      lastSegmentFormattedDate = ue.removeEventSegment(event);
                    resizeAnEvent.segment = lastSegmentFormattedDate;
                    event.endTimeMinutes += 1e-3;
                  }
                }
              }
              this.$emit("event-resizing", {
                _eid: event._eid,
                end: event.end,
                endTimeMinutes: event.endTimeMinutes
              });
            },
            eventDragCreation: function eventDragCreation(e) {
              var dragCreateAnEvent = this.domEvents.dragCreateAnEvent;
              var start = dragCreateAnEvent.start, startCursorY = dragCreateAnEvent.startCursorY, split = dragCreateAnEvent.split;
              var timeAtCursor = new Date(start);
              var _this$minutesAtCursor2 = this.minutesAtCursor(e), minutes = _this$minutesAtCursor2.minutes, y = _this$minutesAtCursor2.cursorCoords.y;
              if (!dragCreateAnEvent.event && Math.abs(startCursorY - y) < this.dragToCreateThreshold)
                return;
              if (!dragCreateAnEvent.event) {
                dragCreateAnEvent.event = this.utils.event.createAnEvent(start, 1, {
                  split
                });
                if (!dragCreateAnEvent.event) {
                  dragCreateAnEvent.start = null;
                  dragCreateAnEvent.split = null;
                  dragCreateAnEvent.event = null;
                  return;
                }
                dragCreateAnEvent.event.resizing = true;
              } else {
                timeAtCursor.setHours(0, minutes, minutes === vue_calvue_type_script_lang_js_minutesInADay ? -1 : 0, 0);
                if (this.snapToTime) {
                  var timeMinutes = timeAtCursor.getHours() * 60 + timeAtCursor.getMinutes();
                  var plusHalfSnapTime = timeMinutes + this.snapToTime / 2;
                  timeMinutes = plusHalfSnapTime - plusHalfSnapTime % this.snapToTime;
                  timeAtCursor.setHours(0, timeMinutes, 0, 0);
                }
                var dragFromBottom = start < timeAtCursor;
                var event = dragCreateAnEvent.event;
                event.start = dragFromBottom ? start : timeAtCursor;
                event.end = dragFromBottom ? timeAtCursor : start;
                event.startTimeMinutes = event.start.getHours() * 60 + event.start.getMinutes();
                event.endTimeMinutes = event.end.getHours() * 60 + event.end.getMinutes();
              }
            },
            unfocusEvent: function unfocusEvent() {
              var _this$domEvents3 = this.domEvents, focusAnEvent = _this$domEvents3.focusAnEvent, clickHoldAnEvent = _this$domEvents3.clickHoldAnEvent;
              var event = this.view.events.find(function(e) {
                return e._eid === (focusAnEvent._eid || clickHoldAnEvent._eid);
              });
              focusAnEvent._eid = null;
              clickHoldAnEvent._eid = null;
              if (event) {
                event.focused = false;
                event.deleting = false;
              }
            },
            cancelDelete: function cancelDelete() {
              var clickHoldAnEvent = this.domEvents.clickHoldAnEvent;
              if (clickHoldAnEvent._eid) {
                var event = this.view.events.find(function(e) {
                  return e._eid === clickHoldAnEvent._eid;
                });
                if (event)
                  event.deleting = false;
                clickHoldAnEvent._eid = null;
                clickHoldAnEvent.timeoutId = null;
              }
            },
            onEventTitleBlur: function onEventTitleBlur(e, event) {
              if (event.title === e.target.innerHTML)
                return;
              var oldTitle = event.title;
              event.title = e.target.innerHTML;
              var cleanEvent = this.cleanupEvent(event);
              this.$emit("event-title-change", {
                event: cleanEvent,
                oldTitle
              });
              this.$emit("event-change", {
                event: cleanEvent,
                originalEvent: Object(objectSpread2["a"])(Object(objectSpread2["a"])({}, cleanEvent), {}, {
                  title: oldTitle
                })
              });
            },
            updateMutableEvents: function updateMutableEvents() {
              var _this4 = this;
              var ud = this.utils.date;
              this.mutableEvents = [];
              this.events.forEach(function(event) {
                var start = typeof event.start === "string" ? ud.stringToDate(event.start) : event.start;
                var startDateF = ud.formatDateLite(start);
                var startTimeMinutes = ud.dateToMinutes(start);
                var end = null;
                if (typeof event.end === "string" && event.end.includes("24:00")) {
                  end = new Date(event.end.replace(" 24:00", ""));
                  end.setHours(23, 59, 59, 0);
                } else
                  end = typeof event.end === "string" ? ud.stringToDate(event.end) : event.end;
                var endDateF = ud.formatDateLite(end);
                var endTimeMinutes = ud.dateToMinutes(end);
                if (!endTimeMinutes || endTimeMinutes === vue_calvue_type_script_lang_js_minutesInADay) {
                  if (!_this4.time || typeof event.end === "string" && event.end.length === 10) {
                    end.setHours(23, 59, 59, 0);
                  } else
                    end.setSeconds(end.getSeconds() - 1);
                  endDateF = ud.formatDateLite(end);
                  endTimeMinutes = vue_calvue_type_script_lang_js_minutesInADay;
                }
                var multipleDays = startDateF !== endDateF;
                event = Object.assign(Object(objectSpread2["a"])({}, _this4.utils.event.eventDefaults), event, {
                  _eid: "".concat(_this4._.uid, "_").concat(_this4.eventIdIncrement++),
                  segments: multipleDays ? {} : null,
                  start,
                  startTimeMinutes,
                  end,
                  endTimeMinutes,
                  daysCount: multipleDays ? ud.countDays(start, end) : 1,
                  class: event.class
                });
                _this4.mutableEvents.push(event);
              });
            },
            minutesAtCursor: function minutesAtCursor(e) {
              return this.utils.cell.minutesAtCursor(e);
            },
            createEvent: function createEvent(dateTime, duration) {
              var eventOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              return this.utils.event.createAnEvent(dateTime, duration, eventOptions);
            },
            cleanupEvent: function cleanupEvent(event) {
              event = Object(objectSpread2["a"])({}, event);
              var discardProps = ["segments", "deletable", "deleting", "titleEditable", "resizable", "resizing", "draggable", "dragging", "draggingStatic", "focused"];
              discardProps.forEach(function(prop) {
                if (prop in event)
                  delete event[prop];
              });
              if (!event.repeat)
                delete event.repeat;
              return event;
            },
            emitWithEvent: function emitWithEvent(eventName, event) {
              this.$emit(eventName, this.cleanupEvent(event));
            },
            updateSelectedDate: function updateSelectedDate(date) {
              if (date && typeof date === "string")
                date = this.utils.date.stringToDate(date);
              else
                date = new Date(date);
              if (date && date instanceof Date) {
                var selectedDate = this.view.selectedDate;
                if (selectedDate)
                  this.transitionDirection = selectedDate.getTime() > date.getTime() ? "left" : "right";
                date.setHours(0, 0, 0, 0);
                if (!selectedDate || selectedDate.getTime() !== date.getTime())
                  this.view.selectedDate = date;
                this.switchView(this.view.id);
              }
            },
            getWeekNumber: function getWeekNumber(weekFromFirstCell) {
              var ud = this.utils.date;
              var firstCellWeekNumber = this.firstCellDateWeekNumber;
              var currentWeekNumber = firstCellWeekNumber + weekFromFirstCell;
              var modifier = this.startWeekOnSunday ? 1 : 0;
              if (currentWeekNumber > 52) {
                return ud.getWeek(ud.addDays(this.view.firstCellDate, 7 * weekFromFirstCell + modifier));
              } else
                return currentWeekNumber;
            },
            timeTick: function timeTick() {
              this.now = new Date();
              this.timeTickerIds[1] = setTimeout(this.timeTick, 60 * 1e3);
            },
            updateDateTexts: function updateDateTexts() {
              this.utils.date.updateTexts(this.texts);
            },
            alignWithScrollbar: function alignWithScrollbar() {
              if (document.getElementById("vuecal-align-with-scrollbar"))
                return;
              var bg = this.$refs.vuecal.getElementsByClassName("vuecal__scrollbar-check")[0];
              var scrollbarWidth = bg.offsetWidth - bg.children[0].offsetWidth;
              if (scrollbarWidth) {
                var style = document.createElement("style");
                style.id = "vuecal-align-with-scrollbar";
                style.type = "text/css";
                style.innerHTML = ".vuecal__weekdays-headings,.vuecal__all-day {padding-right: ".concat(scrollbarWidth, "px}");
                document.head.appendChild(style);
              }
            },
            cellOrSplitHasEvents: function cellOrSplitHasEvents(events) {
              var split = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              return events.length && (!split && events.length || split && events.some(function(e) {
                return e.split === split.id;
              }));
            }
          },
          created: function created() {
            this.utils.cell = new cell_CellUtils(this);
            this.utils.event = new event_EventUtils(this, this.utils.date);
            this.loadLocale(this.locale);
            if (this.editEvents.drag)
              this.loadDragAndDrop();
            this.updateMutableEvents(this.events);
            this.view.id = this.currentView;
            if (this.selectedDate)
              this.updateSelectedDate(this.selectedDate);
            else {
              this.view.selectedDate = new Date();
              this.switchView(this.currentView);
            }
            if (this.time && this.watchRealTime) {
              this.timeTickerIds[0] = setTimeout(this.timeTick, (60 - this.now.getSeconds()) * 1e3);
            }
          },
          mounted: function mounted() {
            var ud = this.utils.date;
            var hasTouch = "ontouchstart" in window;
            var _this$editEvents = this.editEvents, resize = _this$editEvents.resize, drag = _this$editEvents.drag, create = _this$editEvents.create, deletable = _this$editEvents.delete, title = _this$editEvents.title;
            var hasEventClickHandler = this.onEventClick && typeof this.onEventClick === "function";
            if (resize || drag || create || deletable || title || hasEventClickHandler) {
              window.addEventListener(hasTouch ? "touchend" : "mouseup", this.onMouseUp);
            }
            if (resize || drag || create && this.dragToCreateEvent) {
              window.addEventListener(hasTouch ? "touchmove" : "mousemove", this.onMouseMove, {
                passive: false
              });
            }
            if (title)
              window.addEventListener("keyup", this.onKeyUp);
            if (hasTouch) {
              this.$refs.vuecal.oncontextmenu = function(e) {
                e.preventDefault();
                e.stopPropagation();
              };
            }
            if (!this.hideBody)
              this.alignWithScrollbar();
            var startDate = this.view.startDate;
            var params = Object(objectSpread2["a"])(Object(objectSpread2["a"])({
              view: this.view.id,
              startDate,
              endDate: this.view.endDate
            }, this.isMonthView ? {
              firstCellDate: this.view.firstCellDate,
              lastCellDate: this.view.lastCellDate
            } : {}), {}, {
              events: this.view.events.map(this.cleanupEvent)
            }, this.isWeekView ? {
              week: ud.getWeek(this.startWeekOnSunday ? ud.addDays(startDate, 1) : startDate)
            } : {});
            this.$emit("ready", params);
            this.ready = true;
          },
          beforeUnmount: function beforeUnmount() {
            var hasTouch = "ontouchstart" in window;
            window.removeEventListener(hasTouch ? "touchmove" : "mousemove", this.onMouseMove, {
              passive: false
            });
            window.removeEventListener(hasTouch ? "touchend" : "mouseup", this.onMouseUp);
            window.removeEventListener("keyup", this.onKeyUp);
            if (this.timeTickerIds[0])
              clearTimeout(this.timeTickerIds[0]);
            if (this.timeTickerIds[1])
              clearTimeout(this.timeTickerIds[1]);
            this.timeTickerIds = [null, null];
          },
          computed: {
            editEvents: function editEvents() {
              if (this.editableEvents && _typeof(this.editableEvents) === "object") {
                return {
                  title: !!this.editableEvents.title,
                  drag: !!this.editableEvents.drag,
                  resize: !!this.editableEvents.resize,
                  create: !!this.editableEvents.create,
                  delete: !!this.editableEvents.delete
                };
              }
              return {
                title: !!this.editableEvents,
                drag: !!this.editableEvents,
                resize: !!this.editableEvents,
                create: !!this.editableEvents,
                delete: !!this.editableEvents
              };
            },
            views: function views() {
              return {
                years: {
                  label: this.texts.years,
                  enabled: !this.disableViews.includes("years")
                },
                year: {
                  label: this.texts.year,
                  enabled: !this.disableViews.includes("year")
                },
                month: {
                  label: this.texts.month,
                  enabled: !this.disableViews.includes("month")
                },
                week: {
                  label: this.texts.week,
                  enabled: !this.disableViews.includes("week")
                },
                day: {
                  label: this.texts.day,
                  enabled: !this.disableViews.includes("day")
                }
              };
            },
            currentView: function currentView() {
              return this.validateView(this.activeView);
            },
            enabledViews: function enabledViews() {
              var _this5 = this;
              return Object.keys(this.views).filter(function(view) {
                return _this5.views[view].enabled;
              });
            },
            hasTimeColumn: function hasTimeColumn() {
              return this.time && this.isWeekOrDayView;
            },
            isShortMonthView: function isShortMonthView() {
              return this.isMonthView && this.eventsOnMonthView === "short";
            },
            firstCellDateWeekNumber: function firstCellDateWeekNumber() {
              var ud = this.utils.date;
              var date = this.view.firstCellDate;
              return ud.getWeek(this.startWeekOnSunday ? ud.addDays(date, 1) : date);
            },
            timeCells: function timeCells() {
              var timeCells2 = [];
              for (var i = this.timeFrom, max = this.timeTo; i < max; i += this.timeStep) {
                timeCells2.push({
                  hours: Math.floor(i / 60),
                  minutes: i % 60,
                  label: this.utils.date.formatTime(i, this.TimeFormat),
                  value: i
                });
              }
              return timeCells2;
            },
            TimeFormat: function TimeFormat() {
              return this.timeFormat || (this.twelveHour ? "h:mm{am}" : "HH:mm");
            },
            daySplits: function daySplits() {
              return (this.splitDays.filter(function(item) {
                return !item.hide;
              }) || []).map(function(item, i) {
                return Object(objectSpread2["a"])(Object(objectSpread2["a"])({}, item), {}, {
                  id: item.id || i + 1
                });
              });
            },
            hasSplits: function hasSplits() {
              return this.daySplits.length && this.isWeekOrDayView;
            },
            hasShortEvents: function hasShortEvents() {
              return this.showAllDayEvents === "short";
            },
            cellOrSplitMinWidth: function cellOrSplitMinWidth() {
              var minWidth = null;
              if (this.hasSplits && this.minSplitWidth)
                minWidth = this.visibleDaysCount * this.minSplitWidth * this.daySplits.length;
              else if (this.minCellWidth && this.isWeekView)
                minWidth = this.visibleDaysCount * this.minCellWidth;
              return minWidth;
            },
            allDayBar: function allDayBar() {
              var height = this.allDayBarHeight || null;
              if (height && !isNaN(height))
                height += "px";
              return {
                cells: this.viewCells,
                options: this.$props,
                label: this.texts.allDay,
                shortEvents: this.hasShortEvents,
                daySplits: this.hasSplits && this.daySplits || [],
                cellOrSplitMinWidth: this.cellOrSplitMinWidth,
                height
              };
            },
            minTimestamp: function minTimestamp() {
              var date = null;
              if (this.minDate && typeof this.minDate === "string")
                date = this.utils.date.stringToDate(this.minDate);
              else if (this.minDate && this.minDate instanceof Date)
                date = this.minDate;
              return date ? date.getTime() : null;
            },
            maxTimestamp: function maxTimestamp() {
              var date = null;
              if (this.maxDate && typeof this.maxDate === "string")
                date = this.utils.date.stringToDate(this.maxDate);
              else if (this.maxDate && this.minDate instanceof Date)
                date = this.maxDate;
              return date ? date.getTime() : null;
            },
            weekDays: function weekDays() {
              var _this6 = this;
              var _this$texts = this.texts, weekDays2 = _this$texts.weekDays, _this$texts$weekDaysS = _this$texts.weekDaysShort, weekDaysShort = _this$texts$weekDaysS === void 0 ? [] : _this$texts$weekDaysS;
              weekDays2 = weekDays2.slice(0).map(function(day, i) {
                return Object(objectSpread2["a"])(Object(objectSpread2["a"])({
                  label: day
                }, weekDaysShort.length ? {
                  short: weekDaysShort[i]
                } : {}), {}, {
                  hide: _this6.hideWeekends && i >= 5 || _this6.hideWeekdays.length && _this6.hideWeekdays.includes(i + 1)
                });
              });
              if (this.startWeekOnSunday)
                weekDays2.unshift(weekDays2.pop());
              return weekDays2;
            },
            weekDaysInHeader: function weekDaysInHeader() {
              return this.isMonthView || this.isWeekView && !this.minCellWidth && !(this.hasSplits && this.minSplitWidth);
            },
            months: function months() {
              return this.texts.months.map(function(month) {
                return {
                  label: month
                };
              });
            },
            specialDayHours: function specialDayHours() {
              var _this7 = this;
              if (!this.specialHours || !Object.keys(this.specialHours).length)
                return {};
              return Array(7).fill("").map(function(cell, i) {
                var day = _this7.specialHours[i + 1] || [];
                if (!Array.isArray(day))
                  day = [day];
                cell = [];
                day.forEach(function(_ref, j) {
                  var from = _ref.from, to = _ref.to, Class = _ref.class;
                  cell[j] = {
                    day: i + 1,
                    from: ![null, void 0].includes(from) ? from * 1 : null,
                    to: ![null, void 0].includes(to) ? to * 1 : null,
                    class: Class || ""
                  };
                });
                return cell;
              });
            },
            viewTitle: function viewTitle() {
              var ud = this.utils.date;
              var title = "";
              var date = this.view.startDate;
              var year = date.getFullYear();
              var month = date.getMonth();
              switch (this.view.id) {
                case "years": {
                  title = this.texts.years;
                  break;
                }
                case "year": {
                  title = year;
                  break;
                }
                case "month": {
                  title = "".concat(this.months[month].label, " ").concat(year);
                  break;
                }
                case "week": {
                  var lastDayOfWeek = this.view.endDate;
                  var y1 = date.getFullYear();
                  var m1 = this.texts.months[date.getMonth()];
                  if (this.xsmall)
                    m1 = m1.substring(0, 3);
                  var formattedMonthYear = "".concat(m1, " ").concat(y1);
                  if (lastDayOfWeek.getMonth() !== date.getMonth()) {
                    var y2 = lastDayOfWeek.getFullYear();
                    var m2 = this.texts.months[lastDayOfWeek.getMonth()];
                    if (this.xsmall)
                      m2 = m2.substring(0, 3);
                    if (y1 === y2)
                      formattedMonthYear = "".concat(m1, " - ").concat(m2, " ").concat(y1);
                    else {
                      if (this.small)
                        formattedMonthYear = "".concat(m1.substring(0, 3), " ").concat(y1, " - ").concat(m2.substring(0, 3), " ").concat(y2);
                      else
                        formattedMonthYear = "".concat(m1, " ").concat(y1, " - ").concat(m2, " ").concat(y2);
                    }
                  }
                  title = "".concat(this.texts.week, " ").concat(ud.getWeek(this.startWeekOnSunday ? ud.addDays(date, 1) : date), " (").concat(formattedMonthYear, ")");
                  break;
                }
                case "day": {
                  title = this.utils.date.formatDate(date, this.texts.dateFormat, this.texts);
                  break;
                }
              }
              return title;
            },
            viewCells: function viewCells() {
              var _this8 = this;
              var ud = this.utils.date;
              var cells = [];
              var fromYear = null;
              var todayFound = false;
              if (!this.watchRealTime)
                this.now = new Date();
              var now2 = this.now;
              switch (this.view.id) {
                case "years": {
                  fromYear = this.view.startDate.getFullYear();
                  cells = Array.apply(null, Array(25)).map(function(cell, i) {
                    var startDate2 = new Date(fromYear + i, 0, 1);
                    var endDate2 = new Date(fromYear + i + 1, 0, 1);
                    endDate2.setSeconds(-1);
                    return {
                      startDate: startDate2,
                      formattedDate: ud.formatDateLite(startDate2),
                      endDate: endDate2,
                      content: fromYear + i,
                      current: fromYear + i === now2.getFullYear()
                    };
                  });
                  break;
                }
                case "year": {
                  fromYear = this.view.startDate.getFullYear();
                  cells = Array.apply(null, Array(12)).map(function(cell, i) {
                    var startDate2 = new Date(fromYear, i, 1);
                    var endDate2 = new Date(fromYear, i + 1, 1);
                    endDate2.setSeconds(-1);
                    return {
                      startDate: startDate2,
                      formattedDate: ud.formatDateLite(startDate2),
                      endDate: endDate2,
                      content: _this8.xsmall ? _this8.months[i].label.substr(0, 3) : _this8.months[i].label,
                      current: i === now2.getMonth() && fromYear === now2.getFullYear()
                    };
                  });
                  break;
                }
                case "month": {
                  var month = this.view.startDate.getMonth();
                  var firstCellDate = new Date(this.view.firstCellDate);
                  todayFound = false;
                  cells = Array.apply(null, Array(42)).map(function(cell, i) {
                    var startDate2 = ud.addDays(firstCellDate, i);
                    var endDate2 = new Date(startDate2);
                    endDate2.setHours(23, 59, 59, 0);
                    var isToday = !todayFound && ud.isToday(startDate2) && !todayFound++;
                    return {
                      startDate: startDate2,
                      formattedDate: ud.formatDateLite(startDate2),
                      endDate: endDate2,
                      content: startDate2.getDate(),
                      today: isToday,
                      outOfScope: startDate2.getMonth() !== month,
                      class: "vuecal__cell--day".concat(startDate2.getDay() || 7)
                    };
                  });
                  if (this.hideWeekends || this.hideWeekdays.length) {
                    cells = cells.filter(function(cell) {
                      var day = cell.startDate.getDay() || 7;
                      return !(_this8.hideWeekends && day >= 6 || _this8.hideWeekdays.length && _this8.hideWeekdays.includes(day));
                    });
                  }
                  break;
                }
                case "week": {
                  todayFound = false;
                  var firstDayOfWeek = this.view.startDate;
                  var weekDays = this.weekDays;
                  cells = weekDays.map(function(cell, i) {
                    var startDate2 = ud.addDays(firstDayOfWeek, i);
                    var endDate2 = new Date(startDate2);
                    endDate2.setHours(23, 59, 59, 0);
                    var dayOfWeek2 = (startDate2.getDay() || 7) - 1;
                    return {
                      startDate: startDate2,
                      formattedDate: ud.formatDateLite(startDate2),
                      endDate: endDate2,
                      today: !todayFound && ud.isToday(startDate2) && !todayFound++,
                      specialHours: _this8.specialDayHours[dayOfWeek2] || []
                    };
                  }).filter(function(cell, i) {
                    return !weekDays[i].hide;
                  });
                  break;
                }
                case "day": {
                  var startDate = this.view.startDate;
                  var endDate = new Date(this.view.startDate);
                  endDate.setHours(23, 59, 59, 0);
                  var dayOfWeek = (startDate.getDay() || 7) - 1;
                  cells = [{
                    startDate,
                    formattedDate: ud.formatDateLite(startDate),
                    endDate,
                    today: ud.isToday(startDate),
                    specialHours: this.specialDayHours[dayOfWeek] || []
                  }];
                  break;
                }
              }
              return cells;
            },
            visibleDaysCount: function visibleDaysCount() {
              if (this.isDayView)
                return 1;
              return 7 - this.weekDays.reduce(function(total, day) {
                return total + day.hide;
              }, 0);
            },
            cellWidth: function cellWidth() {
              return 100 / this.visibleDaysCount;
            },
            cssClasses: function cssClasses() {
              var _ref2;
              var _this$domEvents4 = this.domEvents, resizeAnEvent = _this$domEvents4.resizeAnEvent, dragAnEvent = _this$domEvents4.dragAnEvent, dragCreateAnEvent = _this$domEvents4.dragCreateAnEvent;
              return _ref2 = {}, Object(defineProperty["a"])(_ref2, "vuecal--".concat(this.view.id, "-view"), true), Object(defineProperty["a"])(_ref2, "vuecal--".concat(this.locale), this.locale), Object(defineProperty["a"])(_ref2, "vuecal--no-time", !this.time), Object(defineProperty["a"])(_ref2, "vuecal--view-with-time", this.hasTimeColumn), Object(defineProperty["a"])(_ref2, "vuecal--week-numbers", this.showWeekNumbers && this.isMonthView), Object(defineProperty["a"])(_ref2, "vuecal--twelve-hour", this.twelveHour), Object(defineProperty["a"])(_ref2, "vuecal--click-to-navigate", this.clickToNavigate), Object(defineProperty["a"])(_ref2, "vuecal--hide-weekends", this.hideWeekends), Object(defineProperty["a"])(_ref2, "vuecal--split-days", this.hasSplits), Object(defineProperty["a"])(_ref2, "vuecal--sticky-split-labels", this.hasSplits && this.stickySplitLabels), Object(defineProperty["a"])(_ref2, "vuecal--overflow-x", this.minCellWidth && this.isWeekView || this.hasSplits && this.minSplitWidth), Object(defineProperty["a"])(_ref2, "vuecal--small", this.small), Object(defineProperty["a"])(_ref2, "vuecal--xsmall", this.xsmall), Object(defineProperty["a"])(_ref2, "vuecal--resizing-event", resizeAnEvent._eid), Object(defineProperty["a"])(_ref2, "vuecal--drag-creating-event", dragCreateAnEvent.event), Object(defineProperty["a"])(_ref2, "vuecal--dragging-event", dragAnEvent._eid), Object(defineProperty["a"])(_ref2, "vuecal--events-on-month-view", this.eventsOnMonthView), Object(defineProperty["a"])(_ref2, "vuecal--short-events", this.isMonthView && this.eventsOnMonthView === "short"), Object(defineProperty["a"])(_ref2, "vuecal--has-touch", typeof window !== "undefined" && "ontouchstart" in window), _ref2;
            },
            isYearsOrYearView: function isYearsOrYearView() {
              return ["years", "year"].includes(this.view.id);
            },
            isYearsView: function isYearsView() {
              return this.view.id === "years";
            },
            isYearView: function isYearView() {
              return this.view.id === "year";
            },
            isMonthView: function isMonthView() {
              return this.view.id === "month";
            },
            isWeekOrDayView: function isWeekOrDayView() {
              return ["week", "day"].includes(this.view.id);
            },
            isWeekView: function isWeekView() {
              return this.view.id === "week";
            },
            isDayView: function isDayView() {
              return this.view.id === "day";
            }
          },
          watch: {
            events: {
              handler: function handler(events, oldEvents) {
                this.updateMutableEvents(events);
                this.addEventsToView();
              },
              deep: true
            },
            locale: function locale(_locale) {
              this.loadLocale(_locale);
            },
            selectedDate: function selectedDate(date) {
              this.updateSelectedDate(date);
            },
            activeView: function activeView(newVal) {
              this.switchView(newVal);
            }
          }
        };
        vue_calvue_type_script_lang_js.render = render;
        var vue_cal = vue_calvue_type_script_lang_js;
        var entry_lib = __webpack_exports__["default"] = vue_cal;
      },
      "fb6a": function(module2, exports2, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__("23e7");
        var isObject = __webpack_require__("861d");
        var isArray = __webpack_require__("e8b5");
        var toAbsoluteIndex = __webpack_require__("23cb");
        var toLength = __webpack_require__("50c4");
        var toIndexedObject = __webpack_require__("fc6a");
        var createProperty = __webpack_require__("8418");
        var wellKnownSymbol = __webpack_require__("b622");
        var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
        var USES_TO_LENGTH = arrayMethodUsesToLength("slice", { ACCESSORS: true, 0: 0, 1: 2 });
        var SPECIES = wellKnownSymbol("species");
        var nativeSlice = [].slice;
        var max = Math.max;
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
          slice: function slice(start, end) {
            var O = toIndexedObject(this);
            var length = toLength(O.length);
            var k = toAbsoluteIndex(start, length);
            var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
            var Constructor, result, n;
            if (isArray(O)) {
              Constructor = O.constructor;
              if (typeof Constructor == "function" && (Constructor === Array || isArray(Constructor.prototype))) {
                Constructor = void 0;
              } else if (isObject(Constructor)) {
                Constructor = Constructor[SPECIES];
                if (Constructor === null)
                  Constructor = void 0;
              }
              if (Constructor === Array || Constructor === void 0) {
                return nativeSlice.call(O, k, fin);
              }
            }
            result = new (Constructor === void 0 ? Array : Constructor)(max(fin - k, 0));
            for (n = 0; k < fin; k++, n++)
              if (k in O)
                createProperty(result, n, O[k]);
            result.length = n;
            return result;
          }
        });
      },
      "fc6a": function(module2, exports2, __webpack_require__) {
        var IndexedObject = __webpack_require__("44ad");
        var requireObjectCoercible = __webpack_require__("1d80");
        module2.exports = function(it) {
          return IndexedObject(requireObjectCoercible(it));
        };
      },
      "fdbc": function(module2, exports2) {
        module2.exports = {
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
      },
      "fdbf": function(module2, exports2, __webpack_require__) {
        var NATIVE_SYMBOL = __webpack_require__("4930");
        module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
      },
      "fea9": function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__("da84");
        module2.exports = global.Promise;
      }
    })["default"];
  }
});

// dep:vue-cal
var vue_cal_default = require_vuecal_common();
export {
  vue_cal_default as default
};
//# sourceMappingURL=vue-cal.js.map
