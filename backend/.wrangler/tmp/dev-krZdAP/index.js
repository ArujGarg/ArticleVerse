var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/zod/lib/helpers/util.js
var require_util = __commonJS({
  "node_modules/zod/lib/helpers/util.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getParsedType = exports.ZodParsedType = exports.objectUtil = exports.util = void 0;
    var util;
    (function(util2) {
      util2.assertEqual = (val) => val;
      function assertIs(_arg) {
      }
      __name(assertIs, "assertIs");
      util2.assertIs = assertIs;
      function assertNever(_x) {
        throw new Error();
      }
      __name(assertNever, "assertNever");
      util2.assertNever = assertNever;
      util2.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
          obj[item] = item;
        }
        return obj;
      };
      util2.getValidEnumValues = (obj) => {
        const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
          filtered[k] = obj[k];
        }
        return util2.objectValues(filtered);
      };
      util2.objectValues = (obj) => {
        return util2.objectKeys(obj).map(function(e) {
          return obj[e];
        });
      };
      util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
        const keys = [];
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            keys.push(key);
          }
        }
        return keys;
      };
      util2.find = (arr, checker) => {
        for (const item of arr) {
          if (checker(item))
            return item;
        }
        return void 0;
      };
      util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
      function joinValues(array, separator = " | ") {
        return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
      }
      __name(joinValues, "joinValues");
      util2.joinValues = joinValues;
      util2.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
    })(util = exports.util || (exports.util = {}));
    var objectUtil;
    (function(objectUtil2) {
      objectUtil2.mergeShapes = (first, second) => {
        return {
          ...first,
          ...second
          // second overwrites first
        };
      };
    })(objectUtil = exports.objectUtil || (exports.objectUtil = {}));
    exports.ZodParsedType = util.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set"
    ]);
    var getParsedType = /* @__PURE__ */ __name((data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return exports.ZodParsedType.undefined;
        case "string":
          return exports.ZodParsedType.string;
        case "number":
          return isNaN(data) ? exports.ZodParsedType.nan : exports.ZodParsedType.number;
        case "boolean":
          return exports.ZodParsedType.boolean;
        case "function":
          return exports.ZodParsedType.function;
        case "bigint":
          return exports.ZodParsedType.bigint;
        case "symbol":
          return exports.ZodParsedType.symbol;
        case "object":
          if (Array.isArray(data)) {
            return exports.ZodParsedType.array;
          }
          if (data === null) {
            return exports.ZodParsedType.null;
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return exports.ZodParsedType.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return exports.ZodParsedType.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return exports.ZodParsedType.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return exports.ZodParsedType.date;
          }
          return exports.ZodParsedType.object;
        default:
          return exports.ZodParsedType.unknown;
      }
    }, "getParsedType");
    exports.getParsedType = getParsedType;
  }
});

// node_modules/zod/lib/ZodError.js
var require_ZodError = __commonJS({
  "node_modules/zod/lib/ZodError.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZodError = exports.quotelessJson = exports.ZodIssueCode = void 0;
    var util_1 = require_util();
    exports.ZodIssueCode = util_1.util.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite"
    ]);
    var quotelessJson = /* @__PURE__ */ __name((obj) => {
      const json = JSON.stringify(obj, null, 2);
      return json.replace(/"([^"]+)":/g, "$1:");
    }, "quotelessJson");
    exports.quotelessJson = quotelessJson;
    var ZodError = class extends Error {
      constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
          this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
          this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, actualProto);
        } else {
          this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
      }
      get errors() {
        return this.issues;
      }
      format(_mapper) {
        const mapper = _mapper || function(issue) {
          return issue.message;
        };
        const fieldErrors = { _errors: [] };
        const processError = /* @__PURE__ */ __name((error) => {
          for (const issue of error.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(mapper(issue));
            } else {
              let curr = fieldErrors;
              let i = 0;
              while (i < issue.path.length) {
                const el = issue.path[i];
                const terminal = i === issue.path.length - 1;
                if (!terminal) {
                  curr[el] = curr[el] || { _errors: [] };
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(mapper(issue));
                }
                curr = curr[el];
                i++;
              }
            }
          }
        }, "processError");
        processError(this);
        return fieldErrors;
      }
      static assert(value) {
        if (!(value instanceof ZodError)) {
          throw new Error(`Not a ZodError: ${value}`);
        }
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util_1.util.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
          if (sub.path.length > 0) {
            fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
            fieldErrors[sub.path[0]].push(mapper(sub));
          } else {
            formErrors.push(mapper(sub));
          }
        }
        return { formErrors, fieldErrors };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    __name(ZodError, "ZodError");
    exports.ZodError = ZodError;
    ZodError.create = (issues) => {
      const error = new ZodError(issues);
      return error;
    };
  }
});

// node_modules/zod/lib/locales/en.js
var require_en = __commonJS({
  "node_modules/zod/lib/locales/en.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require_util();
    var ZodError_1 = require_ZodError();
    var errorMap = /* @__PURE__ */ __name((issue, _ctx) => {
      let message;
      switch (issue.code) {
        case ZodError_1.ZodIssueCode.invalid_type:
          if (issue.received === util_1.ZodParsedType.undefined) {
            message = "Required";
          } else {
            message = `Expected ${issue.expected}, received ${issue.received}`;
          }
          break;
        case ZodError_1.ZodIssueCode.invalid_literal:
          message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util_1.util.jsonStringifyReplacer)}`;
          break;
        case ZodError_1.ZodIssueCode.unrecognized_keys:
          message = `Unrecognized key(s) in object: ${util_1.util.joinValues(issue.keys, ", ")}`;
          break;
        case ZodError_1.ZodIssueCode.invalid_union:
          message = `Invalid input`;
          break;
        case ZodError_1.ZodIssueCode.invalid_union_discriminator:
          message = `Invalid discriminator value. Expected ${util_1.util.joinValues(issue.options)}`;
          break;
        case ZodError_1.ZodIssueCode.invalid_enum_value:
          message = `Invalid enum value. Expected ${util_1.util.joinValues(issue.options)}, received '${issue.received}'`;
          break;
        case ZodError_1.ZodIssueCode.invalid_arguments:
          message = `Invalid function arguments`;
          break;
        case ZodError_1.ZodIssueCode.invalid_return_type:
          message = `Invalid function return type`;
          break;
        case ZodError_1.ZodIssueCode.invalid_date:
          message = `Invalid date`;
          break;
        case ZodError_1.ZodIssueCode.invalid_string:
          if (typeof issue.validation === "object") {
            if ("includes" in issue.validation) {
              message = `Invalid input: must include "${issue.validation.includes}"`;
              if (typeof issue.validation.position === "number") {
                message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
              }
            } else if ("startsWith" in issue.validation) {
              message = `Invalid input: must start with "${issue.validation.startsWith}"`;
            } else if ("endsWith" in issue.validation) {
              message = `Invalid input: must end with "${issue.validation.endsWith}"`;
            } else {
              util_1.util.assertNever(issue.validation);
            }
          } else if (issue.validation !== "regex") {
            message = `Invalid ${issue.validation}`;
          } else {
            message = "Invalid";
          }
          break;
        case ZodError_1.ZodIssueCode.too_small:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
          else
            message = "Invalid input";
          break;
        case ZodError_1.ZodIssueCode.too_big:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "bigint")
            message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
          else
            message = "Invalid input";
          break;
        case ZodError_1.ZodIssueCode.custom:
          message = `Invalid input`;
          break;
        case ZodError_1.ZodIssueCode.invalid_intersection_types:
          message = `Intersection results could not be merged`;
          break;
        case ZodError_1.ZodIssueCode.not_multiple_of:
          message = `Number must be a multiple of ${issue.multipleOf}`;
          break;
        case ZodError_1.ZodIssueCode.not_finite:
          message = "Number must be finite";
          break;
        default:
          message = _ctx.defaultError;
          util_1.util.assertNever(issue);
      }
      return { message };
    }, "errorMap");
    exports.default = errorMap;
  }
});

// node_modules/zod/lib/errors.js
var require_errors = __commonJS({
  "node_modules/zod/lib/errors.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getErrorMap = exports.setErrorMap = exports.defaultErrorMap = void 0;
    var en_1 = __importDefault(require_en());
    exports.defaultErrorMap = en_1.default;
    var overrideErrorMap = en_1.default;
    function setErrorMap(map) {
      overrideErrorMap = map;
    }
    __name(setErrorMap, "setErrorMap");
    exports.setErrorMap = setErrorMap;
    function getErrorMap() {
      return overrideErrorMap;
    }
    __name(getErrorMap, "getErrorMap");
    exports.getErrorMap = getErrorMap;
  }
});

// node_modules/zod/lib/helpers/parseUtil.js
var require_parseUtil = __commonJS({
  "node_modules/zod/lib/helpers/parseUtil.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isAsync = exports.isValid = exports.isDirty = exports.isAborted = exports.OK = exports.DIRTY = exports.INVALID = exports.ParseStatus = exports.addIssueToContext = exports.EMPTY_PATH = exports.makeIssue = void 0;
    var errors_1 = require_errors();
    var en_1 = __importDefault(require_en());
    var makeIssue = /* @__PURE__ */ __name((params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...issueData.path || []];
      const fullIssue = {
        ...issueData,
        path: fullPath
      };
      if (issueData.message !== void 0) {
        return {
          ...issueData,
          path: fullPath,
          message: issueData.message
        };
      }
      let errorMessage = "";
      const maps = errorMaps.filter((m) => !!m).slice().reverse();
      for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
        ...issueData,
        path: fullPath,
        message: errorMessage
      };
    }, "makeIssue");
    exports.makeIssue = makeIssue;
    exports.EMPTY_PATH = [];
    function addIssueToContext(ctx, issueData) {
      const overrideMap = (0, errors_1.getErrorMap)();
      const issue = (0, exports.makeIssue)({
        issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          overrideMap,
          overrideMap === en_1.default ? void 0 : en_1.default
          // then global default map
        ].filter((x) => !!x)
      });
      ctx.common.issues.push(issue);
    }
    __name(addIssueToContext, "addIssueToContext");
    exports.addIssueToContext = addIssueToContext;
    var ParseStatus = class {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid")
          this.value = "dirty";
      }
      abort() {
        if (this.value !== "aborted")
          this.value = "aborted";
      }
      static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
          if (s.status === "aborted")
            return exports.INVALID;
          if (s.status === "dirty")
            status.dirty();
          arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value
          });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
          const { key, value } = pair;
          if (key.status === "aborted")
            return exports.INVALID;
          if (value.status === "aborted")
            return exports.INVALID;
          if (key.status === "dirty")
            status.dirty();
          if (value.status === "dirty")
            status.dirty();
          if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
            finalObject[key.value] = value.value;
          }
        }
        return { status: status.value, value: finalObject };
      }
    };
    __name(ParseStatus, "ParseStatus");
    exports.ParseStatus = ParseStatus;
    exports.INVALID = Object.freeze({
      status: "aborted"
    });
    var DIRTY = /* @__PURE__ */ __name((value) => ({ status: "dirty", value }), "DIRTY");
    exports.DIRTY = DIRTY;
    var OK = /* @__PURE__ */ __name((value) => ({ status: "valid", value }), "OK");
    exports.OK = OK;
    var isAborted = /* @__PURE__ */ __name((x) => x.status === "aborted", "isAborted");
    exports.isAborted = isAborted;
    var isDirty = /* @__PURE__ */ __name((x) => x.status === "dirty", "isDirty");
    exports.isDirty = isDirty;
    var isValid = /* @__PURE__ */ __name((x) => x.status === "valid", "isValid");
    exports.isValid = isValid;
    var isAsync = /* @__PURE__ */ __name((x) => typeof Promise !== "undefined" && x instanceof Promise, "isAsync");
    exports.isAsync = isAsync;
  }
});

// node_modules/zod/lib/helpers/typeAliases.js
var require_typeAliases = __commonJS({
  "node_modules/zod/lib/helpers/typeAliases.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/zod/lib/helpers/errorUtil.js
var require_errorUtil = __commonJS({
  "node_modules/zod/lib/helpers/errorUtil.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorUtil = void 0;
    var errorUtil;
    (function(errorUtil2) {
      errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
    })(errorUtil = exports.errorUtil || (exports.errorUtil = {}));
  }
});

// node_modules/zod/lib/types.js
var require_types = __commonJS({
  "node_modules/zod/lib/types.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _ZodEnum_cache;
    var _ZodNativeEnum_cache;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boolean = exports.bigint = exports.array = exports.any = exports.coerce = exports.ZodFirstPartyTypeKind = exports.late = exports.ZodSchema = exports.Schema = exports.custom = exports.ZodReadonly = exports.ZodPipeline = exports.ZodBranded = exports.BRAND = exports.ZodNaN = exports.ZodCatch = exports.ZodDefault = exports.ZodNullable = exports.ZodOptional = exports.ZodTransformer = exports.ZodEffects = exports.ZodPromise = exports.ZodNativeEnum = exports.ZodEnum = exports.ZodLiteral = exports.ZodLazy = exports.ZodFunction = exports.ZodSet = exports.ZodMap = exports.ZodRecord = exports.ZodTuple = exports.ZodIntersection = exports.ZodDiscriminatedUnion = exports.ZodUnion = exports.ZodObject = exports.ZodArray = exports.ZodVoid = exports.ZodNever = exports.ZodUnknown = exports.ZodAny = exports.ZodNull = exports.ZodUndefined = exports.ZodSymbol = exports.ZodDate = exports.ZodBoolean = exports.ZodBigInt = exports.ZodNumber = exports.ZodString = exports.datetimeRegex = exports.ZodType = void 0;
    exports.NEVER = exports.void = exports.unknown = exports.union = exports.undefined = exports.tuple = exports.transformer = exports.symbol = exports.string = exports.strictObject = exports.set = exports.record = exports.promise = exports.preprocess = exports.pipeline = exports.ostring = exports.optional = exports.onumber = exports.oboolean = exports.object = exports.number = exports.nullable = exports.null = exports.never = exports.nativeEnum = exports.nan = exports.map = exports.literal = exports.lazy = exports.intersection = exports.instanceof = exports.function = exports.enum = exports.effect = exports.discriminatedUnion = exports.date = void 0;
    var errors_1 = require_errors();
    var errorUtil_1 = require_errorUtil();
    var parseUtil_1 = require_parseUtil();
    var util_1 = require_util();
    var ZodError_1 = require_ZodError();
    var ParseInputLazyPath = class {
      constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (this._key instanceof Array) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    };
    __name(ParseInputLazyPath, "ParseInputLazyPath");
    var handleResult = /* @__PURE__ */ __name((ctx, result) => {
      if ((0, parseUtil_1.isValid)(result)) {
        return { success: true, data: result.value };
      } else {
        if (!ctx.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error)
              return this._error;
            const error = new ZodError_1.ZodError(ctx.common.issues);
            this._error = error;
            return this._error;
          }
        };
      }
    }, "handleResult");
    function processCreateParams(params) {
      if (!params)
        return {};
      const { errorMap, invalid_type_error, required_error, description } = params;
      if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
      }
      if (errorMap)
        return { errorMap, description };
      const customMap = /* @__PURE__ */ __name((iss, ctx) => {
        var _a, _b;
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
          return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
          return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
          return { message: ctx.defaultError };
        return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
      }, "customMap");
      return { errorMap: customMap, description };
    }
    __name(processCreateParams, "processCreateParams");
    var ZodType = class {
      constructor(def) {
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
      }
      get description() {
        return this._def.description;
      }
      _getType(input) {
        return (0, util_1.getParsedType)(input.data);
      }
      _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: (0, util_1.getParsedType)(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
      _processInputParams(input) {
        return {
          status: new parseUtil_1.ParseStatus(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: (0, util_1.getParsedType)(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
      _parseSync(input) {
        const result = this._parse(input);
        if ((0, parseUtil_1.isAsync)(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
      _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
      }
      parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      safeParse(data, params) {
        var _a;
        const ctx = {
          common: {
            issues: [],
            async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
            contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
          },
          path: (params === null || params === void 0 ? void 0 : params.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: (0, util_1.getParsedType)(data)
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
      }
      async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      async safeParseAsync(data, params) {
        const ctx = {
          common: {
            issues: [],
            contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
            async: true
          },
          path: (params === null || params === void 0 ? void 0 : params.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: (0, util_1.getParsedType)(data)
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await ((0, parseUtil_1.isAsync)(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
      }
      refine(check, message) {
        const getIssueProperties = /* @__PURE__ */ __name((val) => {
          if (typeof message === "string" || typeof message === "undefined") {
            return { message };
          } else if (typeof message === "function") {
            return message(val);
          } else {
            return message;
          }
        }, "getIssueProperties");
        return this._refinement((val, ctx) => {
          const result = check(val);
          const setError = /* @__PURE__ */ __name(() => ctx.addIssue({
            code: ZodError_1.ZodIssueCode.custom,
            ...getIssueProperties(val)
          }), "setError");
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then((data) => {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
          if (!check(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(refinement) {
        return new ZodEffects({
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "refinement", refinement }
        });
      }
      superRefine(refinement) {
        return this._refinement(refinement);
      }
      optional() {
        return ZodOptional.create(this, this._def);
      }
      nullable() {
        return ZodNullable.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray.create(this, this._def);
      }
      promise() {
        return ZodPromise.create(this, this._def);
      }
      or(option) {
        return ZodUnion.create([this, option], this._def);
      }
      and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
      }
      transform(transform) {
        return new ZodEffects({
          ...processCreateParams(this._def),
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "transform", transform }
        });
      }
      default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
          ...processCreateParams(this._def),
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodDefault
        });
      }
      brand() {
        return new ZodBranded({
          typeName: ZodFirstPartyTypeKind.ZodBranded,
          type: this,
          ...processCreateParams(this._def)
        });
      }
      catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
          ...processCreateParams(this._def),
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodCatch
        });
      }
      describe(description) {
        const This = this.constructor;
        return new This({
          ...this._def,
          description
        });
      }
      pipe(target) {
        return ZodPipeline.create(this, target);
      }
      readonly() {
        return ZodReadonly.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    __name(ZodType, "ZodType");
    exports.ZodType = ZodType;
    exports.Schema = ZodType;
    exports.ZodSchema = ZodType;
    var cuidRegex = /^c[^\s-]{8,}$/i;
    var cuid2Regex = /^[0-9a-z]+$/;
    var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
    var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    var nanoidRegex = /^[a-z0-9_-]{21}$/i;
    var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    var emojiRegex;
    var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
    var dateRegex = new RegExp(`^${dateRegexSource}$`);
    function timeRegexSource(args) {
      let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
      if (args.precision) {
        regex = `${regex}\\.\\d{${args.precision}}`;
      } else if (args.precision == null) {
        regex = `${regex}(\\.\\d+)?`;
      }
      return regex;
    }
    __name(timeRegexSource, "timeRegexSource");
    function timeRegex(args) {
      return new RegExp(`^${timeRegexSource(args)}$`);
    }
    __name(timeRegex, "timeRegex");
    function datetimeRegex(args) {
      let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
      const opts = [];
      opts.push(args.local ? `Z?` : `Z`);
      if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
      regex = `${regex}(${opts.join("|")})`;
      return new RegExp(`^${regex}$`);
    }
    __name(datetimeRegex, "datetimeRegex");
    exports.datetimeRegex = datetimeRegex;
    function isValidIP(ip, version) {
      if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
      }
      return false;
    }
    __name(isValidIP, "isValidIP");
    var ZodString = class extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.string) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx2, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.string,
            received: ctx2.parsedType
          });
          return parseUtil_1.INVALID;
        }
        const status = new parseUtil_1.ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.length < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.length > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "length") {
            const tooBig = input.data.length > check.value;
            const tooSmall = input.data.length < check.value;
            if (tooBig || tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              if (tooBig) {
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              } else if (tooSmall) {
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              }
              status.dirty();
            }
          } else if (check.kind === "email") {
            if (!emailRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                validation: "email",
                code: ZodError_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "emoji") {
            if (!emojiRegex) {
              emojiRegex = new RegExp(_emojiRegex, "u");
            }
            if (!emojiRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                validation: "emoji",
                code: ZodError_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "uuid") {
            if (!uuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                validation: "uuid",
                code: ZodError_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "nanoid") {
            if (!nanoidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                validation: "nanoid",
                code: ZodError_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid") {
            if (!cuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                validation: "cuid",
                code: ZodError_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid2") {
            if (!cuid2Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                validation: "cuid2",
                code: ZodError_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ulid") {
            if (!ulidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                validation: "ulid",
                code: ZodError_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "url") {
            try {
              new URL(input.data);
            } catch (_a) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                validation: "url",
                code: ZodError_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "regex") {
            check.regex.lastIndex = 0;
            const testResult = check.regex.test(input.data);
            if (!testResult) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                validation: "regex",
                code: ZodError_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "trim") {
            input.data = input.data.trim();
          } else if (check.kind === "includes") {
            if (!input.data.includes(check.value, check.position)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_string,
                validation: { includes: check.value, position: check.position },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "toLowerCase") {
            input.data = input.data.toLowerCase();
          } else if (check.kind === "toUpperCase") {
            input.data = input.data.toUpperCase();
          } else if (check.kind === "startsWith") {
            if (!input.data.startsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_string,
                validation: { startsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "endsWith") {
            if (!input.data.endsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_string,
                validation: { endsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "datetime") {
            const regex = datetimeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_string,
                validation: "datetime",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "date") {
            const regex = dateRegex;
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_string,
                validation: "date",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "time") {
            const regex = timeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_string,
                validation: "time",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "duration") {
            if (!durationRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                validation: "duration",
                code: ZodError_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ip") {
            if (!isValidIP(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                validation: "ip",
                code: ZodError_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64") {
            if (!base64Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                validation: "base64",
                code: ZodError_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util_1.util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
          validation,
          code: ZodError_1.ZodIssueCode.invalid_string,
          ...errorUtil_1.errorUtil.errToObj(message)
        });
      }
      _addCheck(check) {
        return new ZodString({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      email(message) {
        return this._addCheck({ kind: "email", ...errorUtil_1.errorUtil.errToObj(message) });
      }
      url(message) {
        return this._addCheck({ kind: "url", ...errorUtil_1.errorUtil.errToObj(message) });
      }
      emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil_1.errorUtil.errToObj(message) });
      }
      uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil_1.errorUtil.errToObj(message) });
      }
      nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil_1.errorUtil.errToObj(message) });
      }
      cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil_1.errorUtil.errToObj(message) });
      }
      cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil_1.errorUtil.errToObj(message) });
      }
      ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil_1.errorUtil.errToObj(message) });
      }
      base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil_1.errorUtil.errToObj(message) });
      }
      ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil_1.errorUtil.errToObj(options) });
      }
      datetime(options) {
        var _a, _b;
        if (typeof options === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
          });
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
          offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
          local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
          ...errorUtil_1.errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
        });
      }
      date(message) {
        return this._addCheck({ kind: "date", message });
      }
      time(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "time",
            precision: null,
            message: options
          });
        }
        return this._addCheck({
          kind: "time",
          precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
          ...errorUtil_1.errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
        });
      }
      duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil_1.errorUtil.errToObj(message) });
      }
      regex(regex, message) {
        return this._addCheck({
          kind: "regex",
          regex,
          ...errorUtil_1.errorUtil.errToObj(message)
        });
      }
      includes(value, options) {
        return this._addCheck({
          kind: "includes",
          value,
          position: options === null || options === void 0 ? void 0 : options.position,
          ...errorUtil_1.errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
        });
      }
      startsWith(value, message) {
        return this._addCheck({
          kind: "startsWith",
          value,
          ...errorUtil_1.errorUtil.errToObj(message)
        });
      }
      endsWith(value, message) {
        return this._addCheck({
          kind: "endsWith",
          value,
          ...errorUtil_1.errorUtil.errToObj(message)
        });
      }
      min(minLength, message) {
        return this._addCheck({
          kind: "min",
          value: minLength,
          ...errorUtil_1.errorUtil.errToObj(message)
        });
      }
      max(maxLength, message) {
        return this._addCheck({
          kind: "max",
          value: maxLength,
          ...errorUtil_1.errorUtil.errToObj(message)
        });
      }
      length(len, message) {
        return this._addCheck({
          kind: "length",
          value: len,
          ...errorUtil_1.errorUtil.errToObj(message)
        });
      }
      /**
       * @deprecated Use z.string().min(1) instead.
       * @see {@link ZodString.min}
       */
      nonempty(message) {
        return this.min(1, errorUtil_1.errorUtil.errToObj(message));
      }
      trim() {
        return new ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }]
        });
      }
      toLowerCase() {
        return new ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }]
        });
      }
      toUpperCase() {
        return new ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }]
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    __name(ZodString, "ZodString");
    exports.ZodString = ZodString;
    ZodString.create = (params) => {
      var _a;
      return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params)
      });
    };
    function floatSafeRemainder(val, step) {
      const valDecCount = (val.toString().split(".")[1] || "").length;
      const stepDecCount = (step.toString().split(".")[1] || "").length;
      const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
      const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
      const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
      return valInt % stepInt / Math.pow(10, decCount);
    }
    __name(floatSafeRemainder, "floatSafeRemainder");
    var ZodNumber = class extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.number) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx2, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.number,
            received: ctx2.parsedType
          });
          return parseUtil_1.INVALID;
        }
        let ctx = void 0;
        const status = new parseUtil_1.ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "int") {
            if (!util_1.util.isInteger(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: "integer",
                received: "float",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_small,
                minimum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_big,
                maximum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (floatSafeRemainder(input.data, check.value) !== 0) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "finite") {
            if (!Number.isFinite(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.not_finite,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util_1.util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil_1.errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil_1.errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil_1.errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil_1.errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil_1.errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new ZodNumber({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      int(message) {
        return this._addCheck({
          kind: "int",
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      finite(message) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      safe(message) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: errorUtil_1.errorUtil.toString(message)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
      get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util_1.util.isInteger(ch.value));
      }
      get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
            return true;
          } else if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          } else if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return Number.isFinite(min) && Number.isFinite(max);
      }
    };
    __name(ZodNumber, "ZodNumber");
    exports.ZodNumber = ZodNumber;
    ZodNumber.create = (params) => {
      return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params)
      });
    };
    var ZodBigInt = class extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = BigInt(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.bigint) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx2, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.bigint,
            received: ctx2.parsedType
          });
          return parseUtil_1.INVALID;
        }
        let ctx = void 0;
        const status = new parseUtil_1.ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_small,
                type: "bigint",
                minimum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_big,
                type: "bigint",
                maximum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (input.data % check.value !== BigInt(0)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util_1.util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil_1.errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil_1.errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil_1.errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil_1.errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil_1.errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new ZodBigInt({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    __name(ZodBigInt, "ZodBigInt");
    exports.ZodBigInt = ZodBigInt;
    ZodBigInt.create = (params) => {
      var _a;
      return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params)
      });
    };
    var ZodBoolean = class extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.boolean) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.boolean,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        return (0, parseUtil_1.OK)(input.data);
      }
    };
    __name(ZodBoolean, "ZodBoolean");
    exports.ZodBoolean = ZodBoolean;
    ZodBoolean.create = (params) => {
      return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params)
      });
    };
    var ZodDate = class extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.date) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx2, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.date,
            received: ctx2.parsedType
          });
          return parseUtil_1.INVALID;
        }
        if (isNaN(input.data.getTime())) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx2, {
            code: ZodError_1.ZodIssueCode.invalid_date
          });
          return parseUtil_1.INVALID;
        }
        const status = new parseUtil_1.ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.getTime() < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_small,
                message: check.message,
                inclusive: true,
                exact: false,
                minimum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.getTime() > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_big,
                message: check.message,
                inclusive: true,
                exact: false,
                maximum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else {
            util_1.util.assertNever(check);
          }
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
      _addCheck(check) {
        return new ZodDate({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      min(minDate, message) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      max(maxDate, message) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil_1.errorUtil.toString(message)
        });
      }
      get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min != null ? new Date(min) : null;
      }
      get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max != null ? new Date(max) : null;
      }
    };
    __name(ZodDate, "ZodDate");
    exports.ZodDate = ZodDate;
    ZodDate.create = (params) => {
      return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
      });
    };
    var ZodSymbol = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.symbol) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.symbol,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        return (0, parseUtil_1.OK)(input.data);
      }
    };
    __name(ZodSymbol, "ZodSymbol");
    exports.ZodSymbol = ZodSymbol;
    ZodSymbol.create = (params) => {
      return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
      });
    };
    var ZodUndefined = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.undefined,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        return (0, parseUtil_1.OK)(input.data);
      }
    };
    __name(ZodUndefined, "ZodUndefined");
    exports.ZodUndefined = ZodUndefined;
    ZodUndefined.create = (params) => {
      return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
      });
    };
    var ZodNull = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.null) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.null,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        return (0, parseUtil_1.OK)(input.data);
      }
    };
    __name(ZodNull, "ZodNull");
    exports.ZodNull = ZodNull;
    ZodNull.create = (params) => {
      return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
      });
    };
    var ZodAny = class extends ZodType {
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(input) {
        return (0, parseUtil_1.OK)(input.data);
      }
    };
    __name(ZodAny, "ZodAny");
    exports.ZodAny = ZodAny;
    ZodAny.create = (params) => {
      return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
      });
    };
    var ZodUnknown = class extends ZodType {
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(input) {
        return (0, parseUtil_1.OK)(input.data);
      }
    };
    __name(ZodUnknown, "ZodUnknown");
    exports.ZodUnknown = ZodUnknown;
    ZodUnknown.create = (params) => {
      return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
      });
    };
    var ZodNever = class extends ZodType {
      _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, parseUtil_1.addIssueToContext)(ctx, {
          code: ZodError_1.ZodIssueCode.invalid_type,
          expected: util_1.ZodParsedType.never,
          received: ctx.parsedType
        });
        return parseUtil_1.INVALID;
      }
    };
    __name(ZodNever, "ZodNever");
    exports.ZodNever = ZodNever;
    ZodNever.create = (params) => {
      return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
      });
    };
    var ZodVoid = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.void,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        return (0, parseUtil_1.OK)(input.data);
      }
    };
    __name(ZodVoid, "ZodVoid");
    exports.ZodVoid = ZodVoid;
    ZodVoid.create = (params) => {
      return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
      });
    };
    var ZodArray = class extends ZodType {
      _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== util_1.ZodParsedType.array) {
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.array,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        if (def.exactLength !== null) {
          const tooBig = ctx.data.length > def.exactLength.value;
          const tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: tooBig ? ZodError_1.ZodIssueCode.too_big : ZodError_1.ZodIssueCode.too_small,
              minimum: tooSmall ? def.exactLength.value : void 0,
              maximum: tooBig ? def.exactLength.value : void 0,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all([...ctx.data].map((item, i) => {
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          })).then((result2) => {
            return parseUtil_1.ParseStatus.mergeArray(status, result2);
          });
        }
        const result = [...ctx.data].map((item, i) => {
          return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return parseUtil_1.ParseStatus.mergeArray(status, result);
      }
      get element() {
        return this._def.type;
      }
      min(minLength, message) {
        return new ZodArray({
          ...this._def,
          minLength: { value: minLength, message: errorUtil_1.errorUtil.toString(message) }
        });
      }
      max(maxLength, message) {
        return new ZodArray({
          ...this._def,
          maxLength: { value: maxLength, message: errorUtil_1.errorUtil.toString(message) }
        });
      }
      length(len, message) {
        return new ZodArray({
          ...this._def,
          exactLength: { value: len, message: errorUtil_1.errorUtil.toString(message) }
        });
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    __name(ZodArray, "ZodArray");
    exports.ZodArray = ZodArray;
    ZodArray.create = (schema, params) => {
      return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
      });
    };
    function deepPartialify(schema) {
      if (schema instanceof ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
          const fieldSchema = schema.shape[key];
          newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
          ...schema._def,
          shape: () => newShape
        });
      } else if (schema instanceof ZodArray) {
        return new ZodArray({
          ...schema._def,
          type: deepPartialify(schema.element)
        });
      } else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
      } else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
      } else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
      } else {
        return schema;
      }
    }
    __name(deepPartialify, "deepPartialify");
    var ZodObject = class extends ZodType {
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null)
          return this._cached;
        const shape = this._def.shape();
        const keys = util_1.util.objectKeys(shape);
        return this._cached = { shape, keys };
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.object) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx2, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.object,
            received: ctx2.parsedType
          });
          return parseUtil_1.INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
          for (const key in ctx.data) {
            if (!shapeKeys.includes(key)) {
              extraKeys.push(key);
            }
          }
        }
        const pairs = [];
        for (const key of shapeKeys) {
          const keyValidator = shape[key];
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (this._def.catchall instanceof ZodNever) {
          const unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            for (const key of extraKeys) {
              pairs.push({
                key: { status: "valid", value: key },
                value: { status: "valid", value: ctx.data[key] }
              });
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip") {
          } else {
            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
          }
        } else {
          const catchall = this._def.catchall;
          for (const key of extraKeys) {
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: catchall._parse(
                new ParseInputLazyPath(ctx, value, ctx.path, key)
                //, ctx.child(key), value, getParsedType(value)
              ),
              alwaysSet: key in ctx.data
            });
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then(async () => {
            const syncPairs = [];
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              syncPairs.push({
                key,
                value,
                alwaysSet: pair.alwaysSet
              });
            }
            return syncPairs;
          }).then((syncPairs) => {
            return parseUtil_1.ParseStatus.mergeObjectSync(status, syncPairs);
          });
        } else {
          return parseUtil_1.ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(message) {
        errorUtil_1.errorUtil.errToObj;
        return new ZodObject({
          ...this._def,
          unknownKeys: "strict",
          ...message !== void 0 ? {
            errorMap: (issue, ctx) => {
              var _a, _b, _c, _d;
              const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: (_d = errorUtil_1.errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
                };
              return {
                message: defaultError
              };
            }
          } : {}
        });
      }
      strip() {
        return new ZodObject({
          ...this._def,
          unknownKeys: "strip"
        });
      }
      passthrough() {
        return new ZodObject({
          ...this._def,
          unknownKeys: "passthrough"
        });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
        return new ZodObject({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...augmentation
          })
        });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
        const merged = new ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...merging._def.shape()
          }),
          typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema) {
        return this.augment({ [key]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index) {
        return new ZodObject({
          ...this._def,
          catchall: index
        });
      }
      pick(mask) {
        const shape = {};
        util_1.util.objectKeys(mask).forEach((key) => {
          if (mask[key] && this.shape[key]) {
            shape[key] = this.shape[key];
          }
        });
        return new ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      omit(mask) {
        const shape = {};
        util_1.util.objectKeys(this.shape).forEach((key) => {
          if (!mask[key]) {
            shape[key] = this.shape[key];
          }
        });
        return new ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      /**
       * @deprecated
       */
      deepPartial() {
        return deepPartialify(this);
      }
      partial(mask) {
        const newShape = {};
        util_1.util.objectKeys(this.shape).forEach((key) => {
          const fieldSchema = this.shape[key];
          if (mask && !mask[key]) {
            newShape[key] = fieldSchema;
          } else {
            newShape[key] = fieldSchema.optional();
          }
        });
        return new ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      required(mask) {
        const newShape = {};
        util_1.util.objectKeys(this.shape).forEach((key) => {
          if (mask && !mask[key]) {
            newShape[key] = this.shape[key];
          } else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while (newField instanceof ZodOptional) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        });
        return new ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      keyof() {
        return createZodEnum(util_1.util.objectKeys(this.shape));
      }
    };
    __name(ZodObject, "ZodObject");
    exports.ZodObject = ZodObject;
    ZodObject.create = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.strictCreate = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.lazycreate = (shape, params) => {
      return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    var ZodUnion = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
          for (const result of results) {
            if (result.result.status === "valid") {
              return result.result;
            }
          }
          for (const result of results) {
            if (result.result.status === "dirty") {
              ctx.common.issues.push(...result.ctx.common.issues);
              return result.result;
            }
          }
          const unionErrors = results.map((result) => new ZodError_1.ZodError(result.ctx.common.issues));
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_union,
            unionErrors
          });
          return parseUtil_1.INVALID;
        }
        __name(handleResults, "handleResults");
        if (ctx.common.async) {
          return Promise.all(options.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })).then(handleResults);
        } else {
          let dirty = void 0;
          const issues = [];
          for (const option of options) {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            const result = option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            });
            if (result.status === "valid") {
              return result;
            } else if (result.status === "dirty" && !dirty) {
              dirty = { result, ctx: childCtx };
            }
            if (childCtx.common.issues.length) {
              issues.push(childCtx.common.issues);
            }
          }
          if (dirty) {
            ctx.common.issues.push(...dirty.ctx.common.issues);
            return dirty.result;
          }
          const unionErrors = issues.map((issues2) => new ZodError_1.ZodError(issues2));
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_union,
            unionErrors
          });
          return parseUtil_1.INVALID;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    __name(ZodUnion, "ZodUnion");
    exports.ZodUnion = ZodUnion;
    ZodUnion.create = (types, params) => {
      return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
      });
    };
    var getDiscriminator = /* @__PURE__ */ __name((type) => {
      if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
      } else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
      } else if (type instanceof ZodLiteral) {
        return [type.value];
      } else if (type instanceof ZodEnum) {
        return type.options;
      } else if (type instanceof ZodNativeEnum) {
        return util_1.util.objectValues(type.enum);
      } else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
      } else if (type instanceof ZodUndefined) {
        return [void 0];
      } else if (type instanceof ZodNull) {
        return [null];
      } else if (type instanceof ZodOptional) {
        return [void 0, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodNullable) {
        return [null, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
      } else {
        return [];
      }
    }, "getDiscriminator");
    var ZodDiscriminatedUnion = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_1.ZodParsedType.object) {
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.object,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return parseUtil_1.INVALID;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
      static create(discriminator, options, params) {
        const optionsMap = /* @__PURE__ */ new Map();
        for (const type of options) {
          const discriminatorValues = getDiscriminator(type.shape[discriminator]);
          if (!discriminatorValues.length) {
            throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
          }
          for (const value of discriminatorValues) {
            if (optionsMap.has(value)) {
              throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
            }
            optionsMap.set(value, type);
          }
        }
        return new ZodDiscriminatedUnion({
          typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
          discriminator,
          options,
          optionsMap,
          ...processCreateParams(params)
        });
      }
    };
    __name(ZodDiscriminatedUnion, "ZodDiscriminatedUnion");
    exports.ZodDiscriminatedUnion = ZodDiscriminatedUnion;
    function mergeValues(a, b) {
      const aType = (0, util_1.getParsedType)(a);
      const bType = (0, util_1.getParsedType)(b);
      if (a === b) {
        return { valid: true, data: a };
      } else if (aType === util_1.ZodParsedType.object && bType === util_1.ZodParsedType.object) {
        const bKeys = util_1.util.objectKeys(b);
        const sharedKeys = util_1.util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
          const sharedValue = mergeValues(a[key], b[key]);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
      } else if (aType === util_1.ZodParsedType.array && bType === util_1.ZodParsedType.array) {
        if (a.length !== b.length) {
          return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
          const itemA = a[index];
          const itemB = b[index];
          const sharedValue = mergeValues(itemA, itemB);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
      } else if (aType === util_1.ZodParsedType.date && bType === util_1.ZodParsedType.date && +a === +b) {
        return { valid: true, data: a };
      } else {
        return { valid: false };
      }
    }
    __name(mergeValues, "mergeValues");
    var ZodIntersection = class extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = /* @__PURE__ */ __name((parsedLeft, parsedRight) => {
          if ((0, parseUtil_1.isAborted)(parsedLeft) || (0, parseUtil_1.isAborted)(parsedRight)) {
            return parseUtil_1.INVALID;
          }
          const merged = mergeValues(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_intersection_types
            });
            return parseUtil_1.INVALID;
          }
          if ((0, parseUtil_1.isDirty)(parsedLeft) || (0, parseUtil_1.isDirty)(parsedRight)) {
            status.dirty();
          }
          return { status: status.value, value: merged.data };
        }, "handleParsed");
        if (ctx.common.async) {
          return Promise.all([
            this._def.left._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }),
            this._def.right._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            })
          ]).then(([left, right]) => handleParsed(left, right));
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    };
    __name(ZodIntersection, "ZodIntersection");
    exports.ZodIntersection = ZodIntersection;
    ZodIntersection.create = (left, right, params) => {
      return new ZodIntersection({
        left,
        right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
      });
    };
    var ZodTuple = class extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_1.ZodParsedType.array) {
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.array,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return parseUtil_1.INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        const items = [...ctx.data].map((item, itemIndex) => {
          const schema = this._def.items[itemIndex] || this._def.rest;
          if (!schema)
            return null;
          return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x) => !!x);
        if (ctx.common.async) {
          return Promise.all(items).then((results) => {
            return parseUtil_1.ParseStatus.mergeArray(status, results);
          });
        } else {
          return parseUtil_1.ParseStatus.mergeArray(status, items);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(rest) {
        return new ZodTuple({
          ...this._def,
          rest
        });
      }
    };
    __name(ZodTuple, "ZodTuple");
    exports.ZodTuple = ZodTuple;
    ZodTuple.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
      });
    };
    var ZodRecord = class extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_1.ZodParsedType.object) {
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.object,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
          pairs.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (ctx.common.async) {
          return parseUtil_1.ParseStatus.mergeObjectAsync(status, pairs);
        } else {
          return parseUtil_1.ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(first, second, third) {
        if (second instanceof ZodType) {
          return new ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(third)
          });
        }
        return new ZodRecord({
          keyType: ZodString.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(second)
        });
      }
    };
    __name(ZodRecord, "ZodRecord");
    exports.ZodRecord = ZodRecord;
    var ZodMap = class extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_1.ZodParsedType.map) {
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.map,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
          return {
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
            value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
          };
        });
        if (ctx.common.async) {
          const finalMap = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return parseUtil_1.INVALID;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          });
        } else {
          const finalMap = /* @__PURE__ */ new Map();
          for (const pair of pairs) {
            const key = pair.key;
            const value = pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return parseUtil_1.INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        }
      }
    };
    __name(ZodMap, "ZodMap");
    exports.ZodMap = ZodMap;
    ZodMap.create = (keyType, valueType, params) => {
      return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
      });
    };
    var ZodSet = class extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_1.ZodParsedType.set) {
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.set,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
          const parsedSet = /* @__PURE__ */ new Set();
          for (const element of elements2) {
            if (element.status === "aborted")
              return parseUtil_1.INVALID;
            if (element.status === "dirty")
              status.dirty();
            parsedSet.add(element.value);
          }
          return { status: status.value, value: parsedSet };
        }
        __name(finalizeSet, "finalizeSet");
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
          return Promise.all(elements).then((elements2) => finalizeSet(elements2));
        } else {
          return finalizeSet(elements);
        }
      }
      min(minSize, message) {
        return new ZodSet({
          ...this._def,
          minSize: { value: minSize, message: errorUtil_1.errorUtil.toString(message) }
        });
      }
      max(maxSize, message) {
        return new ZodSet({
          ...this._def,
          maxSize: { value: maxSize, message: errorUtil_1.errorUtil.toString(message) }
        });
      }
      size(size, message) {
        return this.min(size, message).max(size, message);
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    __name(ZodSet, "ZodSet");
    exports.ZodSet = ZodSet;
    ZodSet.create = (valueType, params) => {
      return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
      });
    };
    var ZodFunction = class extends ZodType {
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_1.ZodParsedType.function) {
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.function,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        function makeArgsIssue(args, error) {
          return (0, parseUtil_1.makeIssue)({
            data: args,
            path: ctx.path,
            errorMaps: [
              ctx.common.contextualErrorMap,
              ctx.schemaErrorMap,
              (0, errors_1.getErrorMap)(),
              errors_1.defaultErrorMap
            ].filter((x) => !!x),
            issueData: {
              code: ZodError_1.ZodIssueCode.invalid_arguments,
              argumentsError: error
            }
          });
        }
        __name(makeArgsIssue, "makeArgsIssue");
        function makeReturnsIssue(returns, error) {
          return (0, parseUtil_1.makeIssue)({
            data: returns,
            path: ctx.path,
            errorMaps: [
              ctx.common.contextualErrorMap,
              ctx.schemaErrorMap,
              (0, errors_1.getErrorMap)(),
              errors_1.defaultErrorMap
            ].filter((x) => !!x),
            issueData: {
              code: ZodError_1.ZodIssueCode.invalid_return_type,
              returnTypeError: error
            }
          });
        }
        __name(makeReturnsIssue, "makeReturnsIssue");
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
          const me = this;
          return (0, parseUtil_1.OK)(async function(...args) {
            const error = new ZodError_1.ZodError([]);
            const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
              error.addIssue(makeArgsIssue(args, e));
              throw error;
            });
            const result = await Reflect.apply(fn, this, parsedArgs);
            const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
              error.addIssue(makeReturnsIssue(result, e));
              throw error;
            });
            return parsedReturns;
          });
        } else {
          const me = this;
          return (0, parseUtil_1.OK)(function(...args) {
            const parsedArgs = me._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError_1.ZodError([makeArgsIssue(args, parsedArgs.error)]);
            }
            const result = Reflect.apply(fn, this, parsedArgs.data);
            const parsedReturns = me._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError_1.ZodError([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...items) {
        return new ZodFunction({
          ...this._def,
          args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
      }
      returns(returnType) {
        return new ZodFunction({
          ...this._def,
          returns: returnType
        });
      }
      implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      static create(args, returns, params) {
        return new ZodFunction({
          args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
          returns: returns || ZodUnknown.create(),
          typeName: ZodFirstPartyTypeKind.ZodFunction,
          ...processCreateParams(params)
        });
      }
    };
    __name(ZodFunction, "ZodFunction");
    exports.ZodFunction = ZodFunction;
    var ZodLazy = class extends ZodType {
      get schema() {
        return this._def.getter();
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
    };
    __name(ZodLazy, "ZodLazy");
    exports.ZodLazy = ZodLazy;
    ZodLazy.create = (getter, params) => {
      return new ZodLazy({
        getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
      });
    };
    var ZodLiteral = class extends ZodType {
      _parse(input) {
        if (input.data !== this._def.value) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx, {
            received: ctx.data,
            code: ZodError_1.ZodIssueCode.invalid_literal,
            expected: this._def.value
          });
          return parseUtil_1.INVALID;
        }
        return { status: "valid", value: input.data };
      }
      get value() {
        return this._def.value;
      }
    };
    __name(ZodLiteral, "ZodLiteral");
    exports.ZodLiteral = ZodLiteral;
    ZodLiteral.create = (value, params) => {
      return new ZodLiteral({
        value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
      });
    };
    function createZodEnum(values, params) {
      return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params)
      });
    }
    __name(createZodEnum, "createZodEnum");
    var ZodEnum = class extends ZodType {
      constructor() {
        super(...arguments);
        _ZodEnum_cache.set(this, void 0);
      }
      _parse(input) {
        if (typeof input.data !== "string") {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          (0, parseUtil_1.addIssueToContext)(ctx, {
            expected: util_1.util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodError_1.ZodIssueCode.invalid_type
          });
          return parseUtil_1.INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
          __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          (0, parseUtil_1.addIssueToContext)(ctx, {
            received: ctx.data,
            code: ZodError_1.ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return parseUtil_1.INVALID;
        }
        return (0, parseUtil_1.OK)(input.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      extract(values, newDef = this._def) {
        return ZodEnum.create(values, {
          ...this._def,
          ...newDef
        });
      }
      exclude(values, newDef = this._def) {
        return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
          ...this._def,
          ...newDef
        });
      }
    };
    __name(ZodEnum, "ZodEnum");
    exports.ZodEnum = ZodEnum;
    _ZodEnum_cache = /* @__PURE__ */ new WeakMap();
    ZodEnum.create = createZodEnum;
    var ZodNativeEnum = class extends ZodType {
      constructor() {
        super(...arguments);
        _ZodNativeEnum_cache.set(this, void 0);
      }
      _parse(input) {
        const nativeEnumValues = util_1.util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== util_1.ZodParsedType.string && ctx.parsedType !== util_1.ZodParsedType.number) {
          const expectedValues = util_1.util.objectValues(nativeEnumValues);
          (0, parseUtil_1.addIssueToContext)(ctx, {
            expected: util_1.util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodError_1.ZodIssueCode.invalid_type
          });
          return parseUtil_1.INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
          __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util_1.util.getValidEnumValues(this._def.values)), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
          const expectedValues = util_1.util.objectValues(nativeEnumValues);
          (0, parseUtil_1.addIssueToContext)(ctx, {
            received: ctx.data,
            code: ZodError_1.ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return parseUtil_1.INVALID;
        }
        return (0, parseUtil_1.OK)(input.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    __name(ZodNativeEnum, "ZodNativeEnum");
    exports.ZodNativeEnum = ZodNativeEnum;
    _ZodNativeEnum_cache = /* @__PURE__ */ new WeakMap();
    ZodNativeEnum.create = (values, params) => {
      return new ZodNativeEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
      });
    };
    var ZodPromise = class extends ZodType {
      unwrap() {
        return this._def.type;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_1.ZodParsedType.promise && ctx.common.async === false) {
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.promise,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        const promisified = ctx.parsedType === util_1.ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return (0, parseUtil_1.OK)(promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    };
    __name(ZodPromise, "ZodPromise");
    exports.ZodPromise = ZodPromise;
    ZodPromise.create = (schema, params) => {
      return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
      });
    };
    var ZodEffects = class extends ZodType {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
          addIssue: (arg) => {
            (0, parseUtil_1.addIssueToContext)(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          },
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
          const processed = effect.transform(ctx.data, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(async (processed2) => {
              if (status.value === "aborted")
                return parseUtil_1.INVALID;
              const result = await this._def.schema._parseAsync({
                data: processed2,
                path: ctx.path,
                parent: ctx
              });
              if (result.status === "aborted")
                return parseUtil_1.INVALID;
              if (result.status === "dirty")
                return (0, parseUtil_1.DIRTY)(result.value);
              if (status.value === "dirty")
                return (0, parseUtil_1.DIRTY)(result.value);
              return result;
            });
          } else {
            if (status.value === "aborted")
              return parseUtil_1.INVALID;
            const result = this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return parseUtil_1.INVALID;
            if (result.status === "dirty")
              return (0, parseUtil_1.DIRTY)(result.value);
            if (status.value === "dirty")
              return (0, parseUtil_1.DIRTY)(result.value);
            return result;
          }
        }
        if (effect.type === "refinement") {
          const executeRefinement = /* @__PURE__ */ __name((acc) => {
            const result = effect.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          }, "executeRefinement");
          if (ctx.common.async === false) {
            const inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted")
              return parseUtil_1.INVALID;
            if (inner.status === "dirty")
              status.dirty();
            executeRefinement(inner.value);
            return { status: status.value, value: inner.value };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
              if (inner.status === "aborted")
                return parseUtil_1.INVALID;
              if (inner.status === "dirty")
                status.dirty();
              return executeRefinement(inner.value).then(() => {
                return { status: status.value, value: inner.value };
              });
            });
          }
        }
        if (effect.type === "transform") {
          if (ctx.common.async === false) {
            const base = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (!(0, parseUtil_1.isValid)(base))
              return base;
            const result = effect.transform(base.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
            }
            return { status: status.value, value: result };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
              if (!(0, parseUtil_1.isValid)(base))
                return base;
              return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
            });
          }
        }
        util_1.util.assertNever(effect);
      }
    };
    __name(ZodEffects, "ZodEffects");
    exports.ZodEffects = ZodEffects;
    exports.ZodTransformer = ZodEffects;
    ZodEffects.create = (schema, effect, params) => {
      return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
      });
    };
    ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
      return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
      });
    };
    var ZodOptional = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === util_1.ZodParsedType.undefined) {
          return (0, parseUtil_1.OK)(void 0);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    __name(ZodOptional, "ZodOptional");
    exports.ZodOptional = ZodOptional;
    ZodOptional.create = (type, params) => {
      return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
      });
    };
    var ZodNullable = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === util_1.ZodParsedType.null) {
          return (0, parseUtil_1.OK)(null);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    __name(ZodNullable, "ZodNullable");
    exports.ZodNullable = ZodNullable;
    ZodNullable.create = (type, params) => {
      return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
      });
    };
    var ZodDefault = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === util_1.ZodParsedType.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    __name(ZodDefault, "ZodDefault");
    exports.ZodDefault = ZodDefault;
    ZodDefault.create = (type, params) => {
      return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : () => params.default,
        ...processCreateParams(params)
      });
    };
    var ZodCatch = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const newCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          }
        };
        const result = this._def.innerType._parse({
          data: newCtx.data,
          path: newCtx.path,
          parent: {
            ...newCtx
          }
        });
        if ((0, parseUtil_1.isAsync)(result)) {
          return result.then((result2) => {
            return {
              status: "valid",
              value: result2.status === "valid" ? result2.value : this._def.catchValue({
                get error() {
                  return new ZodError_1.ZodError(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
              get error() {
                return new ZodError_1.ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    __name(ZodCatch, "ZodCatch");
    exports.ZodCatch = ZodCatch;
    ZodCatch.create = (type, params) => {
      return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params)
      });
    };
    var ZodNaN = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_1.ZodParsedType.nan) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.nan,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
        return { status: "valid", value: input.data };
      }
    };
    __name(ZodNaN, "ZodNaN");
    exports.ZodNaN = ZodNaN;
    ZodNaN.create = (params) => {
      return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
      });
    };
    exports.BRAND = Symbol("zod_brand");
    var ZodBranded = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      unwrap() {
        return this._def.type;
      }
    };
    __name(ZodBranded, "ZodBranded");
    exports.ZodBranded = ZodBranded;
    var ZodPipeline = class extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
          const handleAsync = /* @__PURE__ */ __name(async () => {
            const inResult = await this._def.in._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return parseUtil_1.INVALID;
            if (inResult.status === "dirty") {
              status.dirty();
              return (0, parseUtil_1.DIRTY)(inResult.value);
            } else {
              return this._def.out._parseAsync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          }, "handleAsync");
          return handleAsync();
        } else {
          const inResult = this._def.in._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return parseUtil_1.INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
      static create(a, b) {
        return new ZodPipeline({
          in: a,
          out: b,
          typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
      }
    };
    __name(ZodPipeline, "ZodPipeline");
    exports.ZodPipeline = ZodPipeline;
    var ZodReadonly = class extends ZodType {
      _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = /* @__PURE__ */ __name((data) => {
          if ((0, parseUtil_1.isValid)(data)) {
            data.value = Object.freeze(data.value);
          }
          return data;
        }, "freeze");
        return (0, parseUtil_1.isAsync)(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    __name(ZodReadonly, "ZodReadonly");
    exports.ZodReadonly = ZodReadonly;
    ZodReadonly.create = (type, params) => {
      return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
      });
    };
    function custom(check, params = {}, fatal) {
      if (check)
        return ZodAny.create().superRefine((data, ctx) => {
          var _a, _b;
          if (!check(data)) {
            const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
            const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
            const p2 = typeof p === "string" ? { message: p } : p;
            ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
          }
        });
      return ZodAny.create();
    }
    __name(custom, "custom");
    exports.custom = custom;
    exports.late = {
      object: ZodObject.lazycreate
    };
    var ZodFirstPartyTypeKind;
    (function(ZodFirstPartyTypeKind2) {
      ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind = exports.ZodFirstPartyTypeKind || (exports.ZodFirstPartyTypeKind = {}));
    var instanceOfType = /* @__PURE__ */ __name((cls, params = {
      message: `Input not instance of ${cls.name}`
    }) => custom((data) => data instanceof cls, params), "instanceOfType");
    exports.instanceof = instanceOfType;
    var stringType = ZodString.create;
    exports.string = stringType;
    var numberType = ZodNumber.create;
    exports.number = numberType;
    var nanType = ZodNaN.create;
    exports.nan = nanType;
    var bigIntType = ZodBigInt.create;
    exports.bigint = bigIntType;
    var booleanType = ZodBoolean.create;
    exports.boolean = booleanType;
    var dateType = ZodDate.create;
    exports.date = dateType;
    var symbolType = ZodSymbol.create;
    exports.symbol = symbolType;
    var undefinedType = ZodUndefined.create;
    exports.undefined = undefinedType;
    var nullType = ZodNull.create;
    exports.null = nullType;
    var anyType = ZodAny.create;
    exports.any = anyType;
    var unknownType = ZodUnknown.create;
    exports.unknown = unknownType;
    var neverType = ZodNever.create;
    exports.never = neverType;
    var voidType = ZodVoid.create;
    exports.void = voidType;
    var arrayType = ZodArray.create;
    exports.array = arrayType;
    var objectType = ZodObject.create;
    exports.object = objectType;
    var strictObjectType = ZodObject.strictCreate;
    exports.strictObject = strictObjectType;
    var unionType = ZodUnion.create;
    exports.union = unionType;
    var discriminatedUnionType = ZodDiscriminatedUnion.create;
    exports.discriminatedUnion = discriminatedUnionType;
    var intersectionType = ZodIntersection.create;
    exports.intersection = intersectionType;
    var tupleType = ZodTuple.create;
    exports.tuple = tupleType;
    var recordType = ZodRecord.create;
    exports.record = recordType;
    var mapType = ZodMap.create;
    exports.map = mapType;
    var setType = ZodSet.create;
    exports.set = setType;
    var functionType = ZodFunction.create;
    exports.function = functionType;
    var lazyType = ZodLazy.create;
    exports.lazy = lazyType;
    var literalType = ZodLiteral.create;
    exports.literal = literalType;
    var enumType = ZodEnum.create;
    exports.enum = enumType;
    var nativeEnumType = ZodNativeEnum.create;
    exports.nativeEnum = nativeEnumType;
    var promiseType = ZodPromise.create;
    exports.promise = promiseType;
    var effectsType = ZodEffects.create;
    exports.effect = effectsType;
    exports.transformer = effectsType;
    var optionalType = ZodOptional.create;
    exports.optional = optionalType;
    var nullableType = ZodNullable.create;
    exports.nullable = nullableType;
    var preprocessType = ZodEffects.createWithPreprocess;
    exports.preprocess = preprocessType;
    var pipelineType = ZodPipeline.create;
    exports.pipeline = pipelineType;
    var ostring = /* @__PURE__ */ __name(() => stringType().optional(), "ostring");
    exports.ostring = ostring;
    var onumber = /* @__PURE__ */ __name(() => numberType().optional(), "onumber");
    exports.onumber = onumber;
    var oboolean = /* @__PURE__ */ __name(() => booleanType().optional(), "oboolean");
    exports.oboolean = oboolean;
    exports.coerce = {
      string: (arg) => ZodString.create({ ...arg, coerce: true }),
      number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
      boolean: (arg) => ZodBoolean.create({
        ...arg,
        coerce: true
      }),
      bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
      date: (arg) => ZodDate.create({ ...arg, coerce: true })
    };
    exports.NEVER = parseUtil_1.INVALID;
  }
});

// node_modules/zod/lib/external.js
var require_external = __commonJS({
  "node_modules/zod/lib/external.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_errors(), exports);
    __exportStar(require_parseUtil(), exports);
    __exportStar(require_typeAliases(), exports);
    __exportStar(require_util(), exports);
    __exportStar(require_types(), exports);
    __exportStar(require_ZodError(), exports);
  }
});

// node_modules/zod/lib/index.js
var require_lib = __commonJS({
  "node_modules/zod/lib/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    var z = __importStar(require_external());
    exports.z = z;
    __exportStar(require_external(), exports);
    exports.default = z;
  }
});

// node_modules/@arujgarg/post-your-articles-common/dist/index.js
var require_dist = __commonJS({
  "node_modules/@arujgarg/post-your-articles-common/dist/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.updatePostInput = exports.createPostInput = exports.signinInput = exports.signupInput = void 0;
    var zod_1 = __importDefault(require_lib());
    exports.signupInput = zod_1.default.object({
      email: zod_1.default.string().email(),
      password: zod_1.default.string().min(6),
      name: zod_1.default.string().optional()
    });
    exports.signinInput = zod_1.default.object({
      email: zod_1.default.string().email(),
      password: zod_1.default.string().min(6)
    });
    exports.createPostInput = zod_1.default.object({
      title: zod_1.default.string(),
      content: zod_1.default.string()
    });
    exports.updatePostInput = zod_1.default.object({
      title: zod_1.default.string(),
      content: zod_1.default.string(),
      id: zod_1.default.number()
    });
  }
});

// node_modules/@prisma/client/runtime/edge.js
var require_edge = __commonJS({
  "node_modules/@prisma/client/runtime/edge.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    var ca = Object.create;
    var sr = Object.defineProperty;
    var pa = Object.getOwnPropertyDescriptor;
    var ma = Object.getOwnPropertyNames;
    var da = Object.getPrototypeOf;
    var fa = Object.prototype.hasOwnProperty;
    var Re = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "Re");
    var _e = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "_e");
    var ar = /* @__PURE__ */ __name((e, t) => {
      for (var r in t)
        sr(e, r, { get: t[r], enumerable: true });
    }, "ar");
    var ri = /* @__PURE__ */ __name((e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of ma(t))
          !fa.call(e, i) && i !== r && sr(e, i, { get: () => t[i], enumerable: !(n = pa(t, i)) || n.enumerable });
      return e;
    }, "ri");
    var Le = /* @__PURE__ */ __name((e, t, r) => (r = e != null ? ca(da(e)) : {}, ri(t || !e || !e.__esModule ? sr(r, "default", { value: e, enumerable: true }) : r, e)), "Le");
    var ga = /* @__PURE__ */ __name((e) => ri(sr({}, "__esModule", { value: true }), e), "ga");
    var y;
    var u = Re(() => {
      "use strict";
      y = { nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      }, env: {}, version: "", cwd: () => "/", stderr: {}, argv: ["/bin/node"] };
    });
    var b;
    var c = Re(() => {
      "use strict";
      b = globalThis.performance ?? (() => {
        let e = Date.now();
        return { now: () => Date.now() - e };
      })();
    });
    var E;
    var p = Re(() => {
      "use strict";
      E = /* @__PURE__ */ __name(() => {
      }, "E");
      E.prototype = E;
    });
    var m = Re(() => {
      "use strict";
    });
    var xi = _e((Ke) => {
      "use strict";
      d();
      u();
      c();
      p();
      m();
      var ai = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "ai"), ha = ai((e) => {
        "use strict";
        e.byteLength = l, e.toByteArray = g, e.fromByteArray = S;
        var t = [], r = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (o = 0, s = i.length; o < s; ++o)
          t[o] = i[o], r[i.charCodeAt(o)] = o;
        var o, s;
        r[45] = 62, r[95] = 63;
        function a(A) {
          var R = A.length;
          if (R % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var M = A.indexOf("=");
          M === -1 && (M = R);
          var N = M === R ? 0 : 4 - M % 4;
          return [M, N];
        }
        __name(a, "a");
        function l(A) {
          var R = a(A), M = R[0], N = R[1];
          return (M + N) * 3 / 4 - N;
        }
        __name(l, "l");
        function f(A, R, M) {
          return (R + M) * 3 / 4 - M;
        }
        __name(f, "f");
        function g(A) {
          var R, M = a(A), N = M[0], B = M[1], D = new n(f(A, N, B)), I = 0, ae = B > 0 ? N - 4 : N, J;
          for (J = 0; J < ae; J += 4)
            R = r[A.charCodeAt(J)] << 18 | r[A.charCodeAt(J + 1)] << 12 | r[A.charCodeAt(J + 2)] << 6 | r[A.charCodeAt(J + 3)], D[I++] = R >> 16 & 255, D[I++] = R >> 8 & 255, D[I++] = R & 255;
          return B === 2 && (R = r[A.charCodeAt(J)] << 2 | r[A.charCodeAt(J + 1)] >> 4, D[I++] = R & 255), B === 1 && (R = r[A.charCodeAt(J)] << 10 | r[A.charCodeAt(J + 1)] << 4 | r[A.charCodeAt(J + 2)] >> 2, D[I++] = R >> 8 & 255, D[I++] = R & 255), D;
        }
        __name(g, "g");
        function h(A) {
          return t[A >> 18 & 63] + t[A >> 12 & 63] + t[A >> 6 & 63] + t[A & 63];
        }
        __name(h, "h");
        function v(A, R, M) {
          for (var N, B = [], D = R; D < M; D += 3)
            N = (A[D] << 16 & 16711680) + (A[D + 1] << 8 & 65280) + (A[D + 2] & 255), B.push(h(N));
          return B.join("");
        }
        __name(v, "v");
        function S(A) {
          for (var R, M = A.length, N = M % 3, B = [], D = 16383, I = 0, ae = M - N; I < ae; I += D)
            B.push(v(A, I, I + D > ae ? ae : I + D));
          return N === 1 ? (R = A[M - 1], B.push(t[R >> 2] + t[R << 4 & 63] + "==")) : N === 2 && (R = (A[M - 2] << 8) + A[M - 1], B.push(t[R >> 10] + t[R >> 4 & 63] + t[R << 2 & 63] + "=")), B.join("");
        }
        __name(S, "S");
      }), ya = ai((e) => {
        e.read = function(t, r, n, i, o) {
          var s, a, l = o * 8 - i - 1, f = (1 << l) - 1, g = f >> 1, h = -7, v = n ? o - 1 : 0, S = n ? -1 : 1, A = t[r + v];
          for (v += S, s = A & (1 << -h) - 1, A >>= -h, h += l; h > 0; s = s * 256 + t[r + v], v += S, h -= 8)
            ;
          for (a = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; a = a * 256 + t[r + v], v += S, h -= 8)
            ;
          if (s === 0)
            s = 1 - g;
          else {
            if (s === f)
              return a ? NaN : (A ? -1 : 1) * (1 / 0);
            a = a + Math.pow(2, i), s = s - g;
          }
          return (A ? -1 : 1) * a * Math.pow(2, s - i);
        }, e.write = function(t, r, n, i, o, s) {
          var a, l, f, g = s * 8 - o - 1, h = (1 << g) - 1, v = h >> 1, S = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, A = i ? 0 : s - 1, R = i ? 1 : -1, M = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
          for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (l = isNaN(r) ? 1 : 0, a = h) : (a = Math.floor(Math.log(r) / Math.LN2), r * (f = Math.pow(2, -a)) < 1 && (a--, f *= 2), a + v >= 1 ? r += S / f : r += S * Math.pow(2, 1 - v), r * f >= 2 && (a++, f /= 2), a + v >= h ? (l = 0, a = h) : a + v >= 1 ? (l = (r * f - 1) * Math.pow(2, o), a = a + v) : (l = r * Math.pow(2, v - 1) * Math.pow(2, o), a = 0)); o >= 8; t[n + A] = l & 255, A += R, l /= 256, o -= 8)
            ;
          for (a = a << o | l, g += o; g > 0; t[n + A] = a & 255, A += R, a /= 256, g -= 8)
            ;
          t[n + A - R] |= M * 128;
        };
      }), en = ha(), He = ya(), ni = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      Ke.Buffer = T;
      Ke.SlowBuffer = va;
      Ke.INSPECT_MAX_BYTES = 50;
      var lr = 2147483647;
      Ke.kMaxLength = lr;
      T.TYPED_ARRAY_SUPPORT = wa();
      !T.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function wa() {
        try {
          let e = new Uint8Array(1), t = { foo: function() {
            return 42;
          } };
          return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
        } catch {
          return false;
        }
      }
      __name(wa, "wa");
      Object.defineProperty(T.prototype, "parent", { enumerable: true, get: function() {
        if (T.isBuffer(this))
          return this.buffer;
      } });
      Object.defineProperty(T.prototype, "offset", { enumerable: true, get: function() {
        if (T.isBuffer(this))
          return this.byteOffset;
      } });
      function xe(e) {
        if (e > lr)
          throw new RangeError('The value "' + e + '" is invalid for option "size"');
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, T.prototype), t;
      }
      __name(xe, "xe");
      function T(e, t, r) {
        if (typeof e == "number") {
          if (typeof t == "string")
            throw new TypeError('The "string" argument must be of type string. Received type number');
          return nn(e);
        }
        return li(e, t, r);
      }
      __name(T, "T");
      T.poolSize = 8192;
      function li(e, t, r) {
        if (typeof e == "string")
          return ba(e, t);
        if (ArrayBuffer.isView(e))
          return xa(e);
        if (e == null)
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        if (me(e, ArrayBuffer) || e && me(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (me(e, SharedArrayBuffer) || e && me(e.buffer, SharedArrayBuffer)))
          return ci(e, t, r);
        if (typeof e == "number")
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = e.valueOf && e.valueOf();
        if (n != null && n !== e)
          return T.from(n, t, r);
        let i = Pa(e);
        if (i)
          return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
          return T.from(e[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      }
      __name(li, "li");
      T.from = function(e, t, r) {
        return li(e, t, r);
      };
      Object.setPrototypeOf(T.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(T, Uint8Array);
      function ui(e) {
        if (typeof e != "number")
          throw new TypeError('"size" argument must be of type number');
        if (e < 0)
          throw new RangeError('The value "' + e + '" is invalid for option "size"');
      }
      __name(ui, "ui");
      function Ea(e, t, r) {
        return ui(e), e <= 0 ? xe(e) : t !== void 0 ? typeof r == "string" ? xe(e).fill(t, r) : xe(e).fill(t) : xe(e);
      }
      __name(Ea, "Ea");
      T.alloc = function(e, t, r) {
        return Ea(e, t, r);
      };
      function nn(e) {
        return ui(e), xe(e < 0 ? 0 : on(e) | 0);
      }
      __name(nn, "nn");
      T.allocUnsafe = function(e) {
        return nn(e);
      };
      T.allocUnsafeSlow = function(e) {
        return nn(e);
      };
      function ba(e, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"), !T.isEncoding(t))
          throw new TypeError("Unknown encoding: " + t);
        let r = pi(e, t) | 0, n = xe(r), i = n.write(e, t);
        return i !== r && (n = n.slice(0, i)), n;
      }
      __name(ba, "ba");
      function tn(e) {
        let t = e.length < 0 ? 0 : on(e.length) | 0, r = xe(t);
        for (let n = 0; n < t; n += 1)
          r[n] = e[n] & 255;
        return r;
      }
      __name(tn, "tn");
      function xa(e) {
        if (me(e, Uint8Array)) {
          let t = new Uint8Array(e);
          return ci(t.buffer, t.byteOffset, t.byteLength);
        }
        return tn(e);
      }
      __name(xa, "xa");
      function ci(e, t, r) {
        if (t < 0 || e.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return t === void 0 && r === void 0 ? n = new Uint8Array(e) : r === void 0 ? n = new Uint8Array(e, t) : n = new Uint8Array(e, t, r), Object.setPrototypeOf(n, T.prototype), n;
      }
      __name(ci, "ci");
      function Pa(e) {
        if (T.isBuffer(e)) {
          let t = on(e.length) | 0, r = xe(t);
          return r.length === 0 || e.copy(r, 0, 0, t), r;
        }
        if (e.length !== void 0)
          return typeof e.length != "number" || an(e.length) ? xe(0) : tn(e);
        if (e.type === "Buffer" && Array.isArray(e.data))
          return tn(e.data);
      }
      __name(Pa, "Pa");
      function on(e) {
        if (e >= lr)
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + lr.toString(16) + " bytes");
        return e | 0;
      }
      __name(on, "on");
      function va(e) {
        return +e != e && (e = 0), T.alloc(+e);
      }
      __name(va, "va");
      T.isBuffer = function(e) {
        return e != null && e._isBuffer === true && e !== T.prototype;
      };
      T.compare = function(e, t) {
        if (me(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)), me(t, Uint8Array) && (t = T.from(t, t.offset, t.byteLength)), !T.isBuffer(e) || !T.isBuffer(t))
          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t)
          return 0;
        let r = e.length, n = t.length;
        for (let i = 0, o = Math.min(r, n); i < o; ++i)
          if (e[i] !== t[i]) {
            r = e[i], n = t[i];
            break;
          }
        return r < n ? -1 : n < r ? 1 : 0;
      };
      T.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      T.concat = function(e, t) {
        if (!Array.isArray(e))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (e.length === 0)
          return T.alloc(0);
        let r;
        if (t === void 0)
          for (t = 0, r = 0; r < e.length; ++r)
            t += e[r].length;
        let n = T.allocUnsafe(t), i = 0;
        for (r = 0; r < e.length; ++r) {
          let o = e[r];
          if (me(o, Uint8Array))
            i + o.length > n.length ? (T.isBuffer(o) || (o = T.from(o)), o.copy(n, i)) : Uint8Array.prototype.set.call(n, o, i);
          else if (T.isBuffer(o))
            o.copy(n, i);
          else
            throw new TypeError('"list" argument must be an Array of Buffers');
          i += o.length;
        }
        return n;
      };
      function pi(e, t) {
        if (T.isBuffer(e))
          return e.length;
        if (ArrayBuffer.isView(e) || me(e, ArrayBuffer))
          return e.byteLength;
        if (typeof e != "string")
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
        let r = e.length, n = arguments.length > 2 && arguments[2] === true;
        if (!n && r === 0)
          return 0;
        let i = false;
        for (; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return rn(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return r * 2;
            case "hex":
              return r >>> 1;
            case "base64":
              return bi(e).length;
            default:
              if (i)
                return n ? -1 : rn(e).length;
              t = ("" + t).toLowerCase(), i = true;
          }
      }
      __name(pi, "pi");
      T.byteLength = pi;
      function Ta(e, t, r) {
        let n = false;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
          return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return Na(this, t, r);
            case "utf8":
            case "utf-8":
              return di(this, t, r);
            case "ascii":
              return Da(this, t, r);
            case "latin1":
            case "binary":
              return Ma(this, t, r);
            case "base64":
              return Oa(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Fa(this, t, r);
            default:
              if (n)
                throw new TypeError("Unknown encoding: " + e);
              e = (e + "").toLowerCase(), n = true;
          }
      }
      __name(Ta, "Ta");
      T.prototype._isBuffer = true;
      function Be(e, t, r) {
        let n = e[t];
        e[t] = e[r], e[r] = n;
      }
      __name(Be, "Be");
      T.prototype.swap16 = function() {
        let e = this.length;
        if (e % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e; t += 2)
          Be(this, t, t + 1);
        return this;
      };
      T.prototype.swap32 = function() {
        let e = this.length;
        if (e % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < e; t += 4)
          Be(this, t, t + 3), Be(this, t + 1, t + 2);
        return this;
      };
      T.prototype.swap64 = function() {
        let e = this.length;
        if (e % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t = 0; t < e; t += 8)
          Be(this, t, t + 7), Be(this, t + 1, t + 6), Be(this, t + 2, t + 5), Be(this, t + 3, t + 4);
        return this;
      };
      T.prototype.toString = function() {
        let e = this.length;
        return e === 0 ? "" : arguments.length === 0 ? di(this, 0, e) : Ta.apply(this, arguments);
      };
      T.prototype.toLocaleString = T.prototype.toString;
      T.prototype.equals = function(e) {
        if (!T.isBuffer(e))
          throw new TypeError("Argument must be a Buffer");
        return this === e ? true : T.compare(this, e) === 0;
      };
      T.prototype.inspect = function() {
        let e = "", t = Ke.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
      };
      ni && (T.prototype[ni] = T.prototype.inspect);
      T.prototype.compare = function(e, t, r, n, i) {
        if (me(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)), !T.isBuffer(e))
          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (t === void 0 && (t = 0), r === void 0 && (r = e ? e.length : 0), n === void 0 && (n = 0), i === void 0 && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length)
          throw new RangeError("out of range index");
        if (n >= i && t >= r)
          return 0;
        if (n >= i)
          return -1;
        if (t >= r)
          return 1;
        if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e)
          return 0;
        let o = i - n, s = r - t, a = Math.min(o, s), l = this.slice(n, i), f = e.slice(t, r);
        for (let g = 0; g < a; ++g)
          if (l[g] !== f[g]) {
            o = l[g], s = f[g];
            break;
          }
        return o < s ? -1 : s < o ? 1 : 0;
      };
      function mi(e, t, r, n, i) {
        if (e.length === 0)
          return -1;
        if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, an(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
          if (i)
            return -1;
          r = e.length - 1;
        } else if (r < 0)
          if (i)
            r = 0;
          else
            return -1;
        if (typeof t == "string" && (t = T.from(t, n)), T.isBuffer(t))
          return t.length === 0 ? -1 : ii(e, t, r, n, i);
        if (typeof t == "number")
          return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : ii(e, [t], r, n, i);
        throw new TypeError("val must be string, number or Buffer");
      }
      __name(mi, "mi");
      function ii(e, t, r, n, i) {
        let o = 1, s = e.length, a = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
          if (e.length < 2 || t.length < 2)
            return -1;
          o = 2, s /= 2, a /= 2, r /= 2;
        }
        function l(g, h) {
          return o === 1 ? g[h] : g.readUInt16BE(h * o);
        }
        __name(l, "l");
        let f;
        if (i) {
          let g = -1;
          for (f = r; f < s; f++)
            if (l(e, f) === l(t, g === -1 ? 0 : f - g)) {
              if (g === -1 && (g = f), f - g + 1 === a)
                return g * o;
            } else
              g !== -1 && (f -= f - g), g = -1;
        } else
          for (r + a > s && (r = s - a), f = r; f >= 0; f--) {
            let g = true;
            for (let h = 0; h < a; h++)
              if (l(e, f + h) !== l(t, h)) {
                g = false;
                break;
              }
            if (g)
              return f;
          }
        return -1;
      }
      __name(ii, "ii");
      T.prototype.includes = function(e, t, r) {
        return this.indexOf(e, t, r) !== -1;
      };
      T.prototype.indexOf = function(e, t, r) {
        return mi(this, e, t, r, true);
      };
      T.prototype.lastIndexOf = function(e, t, r) {
        return mi(this, e, t, r, false);
      };
      function Ca(e, t, r, n) {
        r = Number(r) || 0;
        let i = e.length - r;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        let o = t.length;
        n > o / 2 && (n = o / 2);
        let s;
        for (s = 0; s < n; ++s) {
          let a = parseInt(t.substr(s * 2, 2), 16);
          if (an(a))
            return s;
          e[r + s] = a;
        }
        return s;
      }
      __name(Ca, "Ca");
      function Aa(e, t, r, n) {
        return ur(rn(t, e.length - r), e, r, n);
      }
      __name(Aa, "Aa");
      function Ra(e, t, r, n) {
        return ur(Ua(t), e, r, n);
      }
      __name(Ra, "Ra");
      function Sa(e, t, r, n) {
        return ur(bi(t), e, r, n);
      }
      __name(Sa, "Sa");
      function Ia(e, t, r, n) {
        return ur(qa(t, e.length - r), e, r, n);
      }
      __name(Ia, "Ia");
      T.prototype.write = function(e, t, r, n) {
        if (t === void 0)
          n = "utf8", r = this.length, t = 0;
        else if (r === void 0 && typeof t == "string")
          n = t, r = this.length, t = 0;
        else if (isFinite(t))
          t = t >>> 0, isFinite(r) ? (r = r >>> 0, n === void 0 && (n = "utf8")) : (n = r, r = void 0);
        else
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let i = this.length - t;
        if ((r === void 0 || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length)
          throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        let o = false;
        for (; ; )
          switch (n) {
            case "hex":
              return Ca(this, e, t, r);
            case "utf8":
            case "utf-8":
              return Aa(this, e, t, r);
            case "ascii":
            case "latin1":
            case "binary":
              return Ra(this, e, t, r);
            case "base64":
              return Sa(this, e, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Ia(this, e, t, r);
            default:
              if (o)
                throw new TypeError("Unknown encoding: " + n);
              n = ("" + n).toLowerCase(), o = true;
          }
      };
      T.prototype.toJSON = function() {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };
      function Oa(e, t, r) {
        return t === 0 && r === e.length ? en.fromByteArray(e) : en.fromByteArray(e.slice(t, r));
      }
      __name(Oa, "Oa");
      function di(e, t, r) {
        r = Math.min(e.length, r);
        let n = [], i = t;
        for (; i < r; ) {
          let o = e[i], s = null, a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
          if (i + a <= r) {
            let l, f, g, h;
            switch (a) {
              case 1:
                o < 128 && (s = o);
                break;
              case 2:
                l = e[i + 1], (l & 192) === 128 && (h = (o & 31) << 6 | l & 63, h > 127 && (s = h));
                break;
              case 3:
                l = e[i + 1], f = e[i + 2], (l & 192) === 128 && (f & 192) === 128 && (h = (o & 15) << 12 | (l & 63) << 6 | f & 63, h > 2047 && (h < 55296 || h > 57343) && (s = h));
                break;
              case 4:
                l = e[i + 1], f = e[i + 2], g = e[i + 3], (l & 192) === 128 && (f & 192) === 128 && (g & 192) === 128 && (h = (o & 15) << 18 | (l & 63) << 12 | (f & 63) << 6 | g & 63, h > 65535 && h < 1114112 && (s = h));
            }
          }
          s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a;
        }
        return ka(n);
      }
      __name(di, "di");
      var oi = 4096;
      function ka(e) {
        let t = e.length;
        if (t <= oi)
          return String.fromCharCode.apply(String, e);
        let r = "", n = 0;
        for (; n < t; )
          r += String.fromCharCode.apply(String, e.slice(n, n += oi));
        return r;
      }
      __name(ka, "ka");
      function Da(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i)
          n += String.fromCharCode(e[i] & 127);
        return n;
      }
      __name(Da, "Da");
      function Ma(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i)
          n += String.fromCharCode(e[i]);
        return n;
      }
      __name(Ma, "Ma");
      function Na(e, t, r) {
        let n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        let i = "";
        for (let o = t; o < r; ++o)
          i += $a[e[o]];
        return i;
      }
      __name(Na, "Na");
      function Fa(e, t, r) {
        let n = e.slice(t, r), i = "";
        for (let o = 0; o < n.length - 1; o += 2)
          i += String.fromCharCode(n[o] + n[o + 1] * 256);
        return i;
      }
      __name(Fa, "Fa");
      T.prototype.slice = function(e, t) {
        let r = this.length;
        e = ~~e, t = t === void 0 ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), t < e && (t = e);
        let n = this.subarray(e, t);
        return Object.setPrototypeOf(n, T.prototype), n;
      };
      function H(e, t, r) {
        if (e % 1 !== 0 || e < 0)
          throw new RangeError("offset is not uint");
        if (e + t > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      __name(H, "H");
      T.prototype.readUintLE = T.prototype.readUIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
        let n = this[e], i = 1, o = 0;
        for (; ++o < t && (i *= 256); )
          n += this[e + o] * i;
        return n;
      };
      T.prototype.readUintBE = T.prototype.readUIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
        let n = this[e + --t], i = 1;
        for (; t > 0 && (i *= 256); )
          n += this[e + --t] * i;
        return n;
      };
      T.prototype.readUint8 = T.prototype.readUInt8 = function(e, t) {
        return e = e >>> 0, t || H(e, 1, this.length), this[e];
      };
      T.prototype.readUint16LE = T.prototype.readUInt16LE = function(e, t) {
        return e = e >>> 0, t || H(e, 2, this.length), this[e] | this[e + 1] << 8;
      };
      T.prototype.readUint16BE = T.prototype.readUInt16BE = function(e, t) {
        return e = e >>> 0, t || H(e, 2, this.length), this[e] << 8 | this[e + 1];
      };
      T.prototype.readUint32LE = T.prototype.readUInt32LE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
      };
      T.prototype.readUint32BE = T.prototype.readUInt32BE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
      };
      T.prototype.readBigUInt64LE = Se(function(e) {
        e = e >>> 0, We(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && xt(e, this.length - 8);
        let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
        return BigInt(n) + (BigInt(i) << BigInt(32));
      });
      T.prototype.readBigUInt64BE = Se(function(e) {
        e = e >>> 0, We(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && xt(e, this.length - 8);
        let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
        return (BigInt(n) << BigInt(32)) + BigInt(i);
      });
      T.prototype.readIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
        let n = this[e], i = 1, o = 0;
        for (; ++o < t && (i *= 256); )
          n += this[e + o] * i;
        return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n;
      };
      T.prototype.readIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
        let n = t, i = 1, o = this[e + --n];
        for (; n > 0 && (i *= 256); )
          o += this[e + --n] * i;
        return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o;
      };
      T.prototype.readInt8 = function(e, t) {
        return e = e >>> 0, t || H(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
      };
      T.prototype.readInt16LE = function(e, t) {
        e = e >>> 0, t || H(e, 2, this.length);
        let r = this[e] | this[e + 1] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      T.prototype.readInt16BE = function(e, t) {
        e = e >>> 0, t || H(e, 2, this.length);
        let r = this[e + 1] | this[e] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      T.prototype.readInt32LE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
      };
      T.prototype.readInt32BE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
      };
      T.prototype.readBigInt64LE = Se(function(e) {
        e = e >>> 0, We(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && xt(e, this.length - 8);
        let n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
        return (BigInt(n) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
      });
      T.prototype.readBigInt64BE = Se(function(e) {
        e = e >>> 0, We(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && xt(e, this.length - 8);
        let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
        return (BigInt(n) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r);
      });
      T.prototype.readFloatLE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), He.read(this, e, true, 23, 4);
      };
      T.prototype.readFloatBE = function(e, t) {
        return e = e >>> 0, t || H(e, 4, this.length), He.read(this, e, false, 23, 4);
      };
      T.prototype.readDoubleLE = function(e, t) {
        return e = e >>> 0, t || H(e, 8, this.length), He.read(this, e, true, 52, 8);
      };
      T.prototype.readDoubleBE = function(e, t) {
        return e = e >>> 0, t || H(e, 8, this.length), He.read(this, e, false, 52, 8);
      };
      function te(e, t, r, n, i, o) {
        if (!T.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length)
          throw new RangeError("Index out of range");
      }
      __name(te, "te");
      T.prototype.writeUintLE = T.prototype.writeUIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          te(this, e, t, r, s, 0);
        }
        let i = 1, o = 0;
        for (this[t] = e & 255; ++o < r && (i *= 256); )
          this[t + o] = e / i & 255;
        return t + r;
      };
      T.prototype.writeUintBE = T.prototype.writeUIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          te(this, e, t, r, s, 0);
        }
        let i = r - 1, o = 1;
        for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
          this[t + i] = e / o & 255;
        return t + r;
      };
      T.prototype.writeUint8 = T.prototype.writeUInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
      };
      T.prototype.writeUint16LE = T.prototype.writeUInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      T.prototype.writeUint16BE = T.prototype.writeUInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      T.prototype.writeUint32LE = T.prototype.writeUInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
      };
      T.prototype.writeUint32BE = T.prototype.writeUInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      function fi(e, t, r, n, i) {
        Ei(t, n, i, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, r;
      }
      __name(fi, "fi");
      function gi(e, t, r, n, i) {
        Ei(t, n, i, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r + 3] = s, s = s >> 8, e[r + 2] = s, s = s >> 8, e[r + 1] = s, s = s >> 8, e[r] = s, r + 8;
      }
      __name(gi, "gi");
      T.prototype.writeBigUInt64LE = Se(function(e, t = 0) {
        return fi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T.prototype.writeBigUInt64BE = Se(function(e, t = 0) {
        return gi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T.prototype.writeIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          te(this, e, t, r, a - 1, -a);
        }
        let i = 0, o = 1, s = 0;
        for (this[t] = e & 255; ++i < r && (o *= 256); )
          e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
        return t + r;
      };
      T.prototype.writeIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          te(this, e, t, r, a - 1, -a);
        }
        let i = r - 1, o = 1, s = 0;
        for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
          e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
        return t + r;
      };
      T.prototype.writeInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
      };
      T.prototype.writeInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      T.prototype.writeInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      T.prototype.writeInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
      };
      T.prototype.writeInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      T.prototype.writeBigInt64LE = Se(function(e, t = 0) {
        return fi(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      T.prototype.writeBigInt64BE = Se(function(e, t = 0) {
        return gi(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function hi(e, t, r, n, i, o) {
        if (r + n > e.length)
          throw new RangeError("Index out of range");
        if (r < 0)
          throw new RangeError("Index out of range");
      }
      __name(hi, "hi");
      function yi(e, t, r, n, i) {
        return t = +t, r = r >>> 0, i || hi(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), He.write(e, t, r, n, 23, 4), r + 4;
      }
      __name(yi, "yi");
      T.prototype.writeFloatLE = function(e, t, r) {
        return yi(this, e, t, true, r);
      };
      T.prototype.writeFloatBE = function(e, t, r) {
        return yi(this, e, t, false, r);
      };
      function wi(e, t, r, n, i) {
        return t = +t, r = r >>> 0, i || hi(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), He.write(e, t, r, n, 52, 8), r + 8;
      }
      __name(wi, "wi");
      T.prototype.writeDoubleLE = function(e, t, r) {
        return wi(this, e, t, true, r);
      };
      T.prototype.writeDoubleBE = function(e, t, r) {
        return wi(this, e, t, false, r);
      };
      T.prototype.copy = function(e, t, r, n) {
        if (!T.isBuffer(e))
          throw new TypeError("argument should be a Buffer");
        if (r || (r = 0), !n && n !== 0 && (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || e.length === 0 || this.length === 0)
          return 0;
        if (t < 0)
          throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length)
          throw new RangeError("Index out of range");
        if (n < 0)
          throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
        let i = n - r;
        return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i;
      };
      T.prototype.fill = function(e, t, r, n) {
        if (typeof e == "string") {
          if (typeof t == "string" ? (n = t, t = 0, r = this.length) : typeof r == "string" && (n = r, r = this.length), n !== void 0 && typeof n != "string")
            throw new TypeError("encoding must be a string");
          if (typeof n == "string" && !T.isEncoding(n))
            throw new TypeError("Unknown encoding: " + n);
          if (e.length === 1) {
            let o = e.charCodeAt(0);
            (n === "utf8" && o < 128 || n === "latin1") && (e = o);
          }
        } else
          typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
        if (t < 0 || this.length < t || this.length < r)
          throw new RangeError("Out of range index");
        if (r <= t)
          return this;
        t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
        let i;
        if (typeof e == "number")
          for (i = t; i < r; ++i)
            this[i] = e;
        else {
          let o = T.isBuffer(e) ? e : T.from(e, n), s = o.length;
          if (s === 0)
            throw new TypeError('The value "' + e + '" is invalid for argument "value"');
          for (i = 0; i < r - t; ++i)
            this[i + t] = o[i % s];
        }
        return this;
      };
      var Qe = {};
      function sn(e, t, r) {
        Qe[e] = class extends r {
          constructor() {
            super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
          }
          get code() {
            return e;
          }
          set code(n) {
            Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: n, writable: true });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      __name(sn, "sn");
      sn("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
        return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError);
      sn("ERR_INVALID_ARG_TYPE", function(e, t) {
        return `The "${e}" argument must be of type number. Received type ${typeof t}`;
      }, TypeError);
      sn("ERR_OUT_OF_RANGE", function(e, t, r) {
        let n = `The value of "${e}" is out of range.`, i = r;
        return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = si(String(r)) : typeof r == "bigint" && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = si(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n;
      }, RangeError);
      function si(e) {
        let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
        for (; r >= n + 4; r -= 3)
          t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      __name(si, "si");
      function _a(e, t, r) {
        We(t, "offset"), (e[t] === void 0 || e[t + r] === void 0) && xt(t, e.length - (r + 1));
      }
      __name(_a, "_a");
      function Ei(e, t, r, n, i, o) {
        if (e > r || e < t) {
          let s = typeof t == "bigint" ? "n" : "", a;
          throw o > 3 ? t === 0 || t === BigInt(0) ? a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}` : a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}` : a = `>= ${t}${s} and <= ${r}${s}`, new Qe.ERR_OUT_OF_RANGE("value", a, e);
        }
        _a(n, i, o);
      }
      __name(Ei, "Ei");
      function We(e, t) {
        if (typeof e != "number")
          throw new Qe.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      __name(We, "We");
      function xt(e, t, r) {
        throw Math.floor(e) !== e ? (We(e, r), new Qe.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new Qe.ERR_BUFFER_OUT_OF_BOUNDS() : new Qe.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
      }
      __name(xt, "xt");
      var La = /[^+/0-9A-Za-z-_]/g;
      function Ba(e) {
        if (e = e.split("=")[0], e = e.trim().replace(La, ""), e.length < 2)
          return "";
        for (; e.length % 4 !== 0; )
          e = e + "=";
        return e;
      }
      __name(Ba, "Ba");
      function rn(e, t) {
        t = t || 1 / 0;
        let r, n = e.length, i = null, o = [];
        for (let s = 0; s < n; ++s) {
          if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              } else if (s + 1 === n) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), i = r;
              continue;
            }
            r = (i - 55296 << 10 | r - 56320) + 65536;
          } else
            i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (i = null, r < 128) {
            if ((t -= 1) < 0)
              break;
            o.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0)
              break;
            o.push(r >> 6 | 192, r & 63 | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0)
              break;
            o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0)
              break;
            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
          } else
            throw new Error("Invalid code point");
        }
        return o;
      }
      __name(rn, "rn");
      function Ua(e) {
        let t = [];
        for (let r = 0; r < e.length; ++r)
          t.push(e.charCodeAt(r) & 255);
        return t;
      }
      __name(Ua, "Ua");
      function qa(e, t) {
        let r, n, i, o = [];
        for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
          r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
        return o;
      }
      __name(qa, "qa");
      function bi(e) {
        return en.toByteArray(Ba(e));
      }
      __name(bi, "bi");
      function ur(e, t, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
          t[i + r] = e[i];
        return i;
      }
      __name(ur, "ur");
      function me(e, t) {
        return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
      }
      __name(me, "me");
      function an(e) {
        return e !== e;
      }
      __name(an, "an");
      var $a = function() {
        let e = "0123456789abcdef", t = new Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = r * 16;
          for (let i = 0; i < 16; ++i)
            t[n + i] = e[r] + e[i];
        }
        return t;
      }();
      function Se(e) {
        return typeof BigInt > "u" ? Va : e;
      }
      __name(Se, "Se");
      function Va() {
        throw new Error("BigInt not supported");
      }
      __name(Va, "Va");
    });
    var w;
    var d = Re(() => {
      "use strict";
      w = Le(xi());
    });
    function ja() {
      return false;
    }
    __name(ja, "ja");
    var Ja;
    var Ga;
    var Ci;
    var Ai = Re(() => {
      "use strict";
      d();
      u();
      c();
      p();
      m();
      Ja = {}, Ga = { existsSync: ja, promises: Ja }, Ci = Ga;
    });
    function Ya(...e) {
      return e.join("/");
    }
    __name(Ya, "Ya");
    function Za(...e) {
      return e.join("/");
    }
    __name(Za, "Za");
    var qi;
    var Xa;
    var el;
    var vt;
    var $i = Re(() => {
      "use strict";
      d();
      u();
      c();
      p();
      m();
      qi = "/", Xa = { sep: qi }, el = { resolve: Ya, posix: Xa, join: Za, sep: qi }, vt = el;
    });
    var fr;
    var ji = Re(() => {
      "use strict";
      d();
      u();
      c();
      p();
      m();
      fr = /* @__PURE__ */ __name(class {
        constructor() {
          this.events = {};
        }
        on(t, r) {
          return this.events[t] || (this.events[t] = []), this.events[t].push(r), this;
        }
        emit(t, ...r) {
          return this.events[t] ? (this.events[t].forEach((n) => {
            n(...r);
          }), true) : false;
        }
      }, "fr");
    });
    var Gi = _e((ad, Ji) => {
      "use strict";
      d();
      u();
      c();
      p();
      m();
      Ji.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0)
          return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Wi = _e((Ed, Hi) => {
      "use strict";
      d();
      u();
      c();
      p();
      m();
      Hi.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var zi = _e((Cd, Ki) => {
      "use strict";
      d();
      u();
      c();
      p();
      m();
      var sl = Wi();
      Ki.exports = (e) => typeof e == "string" ? e.replace(sl(), "") : e;
    });
    var vn = _e((mh, fo) => {
      "use strict";
      d();
      u();
      c();
      p();
      m();
      fo.exports = function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        __name(e, "e");
        return function(t, r) {
          if (t === r)
            return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
            i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); )
            s++;
          if (i -= s, o -= s, i === 0 || o < 3)
            return o;
          var a = 0, l, f, g, h, v, S, A, R, M, N, B, D, I = [];
          for (l = 0; l < i; l++)
            I.push(l + 1), I.push(t.charCodeAt(s + l));
          for (var ae = I.length - 1; a < o - 3; )
            for (M = r.charCodeAt(s + (f = a)), N = r.charCodeAt(s + (g = a + 1)), B = r.charCodeAt(s + (h = a + 2)), D = r.charCodeAt(s + (v = a + 3)), S = a += 4, l = 0; l < ae; l += 2)
              A = I[l], R = I[l + 1], f = e(A, f, g, M, R), g = e(f, g, h, N, R), h = e(g, h, v, B, R), S = e(h, v, S, D, R), I[l] = S, v = h, h = g, g = f, f = A;
          for (; a < o; )
            for (M = r.charCodeAt(s + (f = a)), S = ++a, l = 0; l < ae; l += 2)
              A = I[l], I[l] = S = e(A, f, S, M, I[l + 1]), f = A;
          return S;
        };
      }();
    });
    var Vo = _e((ab, Ku) => {
      Ku.exports = { name: "@prisma/engines-version", version: "5.23.0-27.5dbef10bdbfb579e07d35cc85fb1518d357cb99e", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.34", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var jo = _e(() => {
      "use strict";
      d();
      u();
      c();
      p();
      m();
    });
    var Hc = {};
    ar(Hc, { Debug: () => mn, Decimal: () => fe, Extensions: () => ln, MetricsClient: () => pt, PrismaClientInitializationError: () => G, PrismaClientKnownRequestError: () => re, PrismaClientRustPanicError: () => ve, PrismaClientUnknownRequestError: () => ne, PrismaClientValidationError: () => Y, Public: () => un, Sql: () => oe, defineDmmfProperty: () => Uo, deserializeJsonResponse: () => et, dmmfToRuntimeDataModel: () => Bo, empty: () => Go, getPrismaClient: () => aa, getRuntime: () => Jr, join: () => Jo, makeStrictEnum: () => la, makeTypedQueryFactory: () => qo, objectEnumValues: () => Or, raw: () => Fn, serializeJsonQuery: () => _r, skip: () => Fr, sqltag: () => _n, warnEnvConflicts: () => void 0, warnOnce: () => Rt });
    module.exports = ga(Hc);
    d();
    u();
    c();
    p();
    m();
    var ln = {};
    ar(ln, { defineExtension: () => Pi, getExtensionContext: () => vi });
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    function Pi(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    __name(Pi, "Pi");
    d();
    u();
    c();
    p();
    m();
    function vi(e) {
      return e;
    }
    __name(vi, "vi");
    var un = {};
    ar(un, { validator: () => Ti });
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    function Ti(...e) {
      return (t) => t;
    }
    __name(Ti, "Ti");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var cn;
    var Ri;
    var Si;
    var Ii;
    var Oi = true;
    typeof y < "u" && ({ FORCE_COLOR: cn, NODE_DISABLE_COLORS: Ri, NO_COLOR: Si, TERM: Ii } = y.env || {}, Oi = y.stdout && y.stdout.isTTY);
    var Qa = { enabled: !Ri && Si == null && Ii !== "dumb" && (cn != null && cn !== "0" || Oi) };
    function V(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !Qa.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    __name(V, "V");
    var Jp = V(0, 0);
    var cr = V(1, 22);
    var pr = V(2, 22);
    var Gp = V(3, 23);
    var ki = V(4, 24);
    var Qp = V(7, 27);
    var Hp = V(8, 28);
    var Wp = V(9, 29);
    var Kp = V(30, 39);
    var ze = V(31, 39);
    var Di = V(32, 39);
    var Mi = V(33, 39);
    var Ni = V(34, 39);
    var zp = V(35, 39);
    var Fi = V(36, 39);
    var Yp = V(37, 39);
    var _i = V(90, 39);
    var Zp = V(90, 39);
    var Xp = V(40, 49);
    var em = V(41, 49);
    var tm = V(42, 49);
    var rm = V(43, 49);
    var nm = V(44, 49);
    var im = V(45, 49);
    var om = V(46, 49);
    var sm = V(47, 49);
    d();
    u();
    c();
    p();
    m();
    var Ha = 100;
    var Li = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var mr = [];
    var Bi = Date.now();
    var Wa = 0;
    var pn = typeof y < "u" ? y.env : {};
    globalThis.DEBUG ??= pn.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= pn.DEBUG_COLORS ? pn.DEBUG_COLORS === "true" : true;
    var Pt = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: (...e) => {
      let [t, r, ...n] = e;
      (console.warn ?? console.log)(`${t} ${r}`, ...n);
    }, formatters: {} };
    function Ka(e) {
      let t = { color: Li[Wa++ % Li.length], enabled: Pt.enabled(e), namespace: e, log: Pt.log, extend: () => {
      } }, r = /* @__PURE__ */ __name((...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t;
        if (n.length !== 0 && mr.push([o, ...n]), mr.length > Ha && mr.shift(), Pt.enabled(o) || i) {
          let l = n.map((g) => typeof g == "string" ? g : za(g)), f = `+${Date.now() - Bi}ms`;
          Bi = Date.now(), a(o, ...l, f);
        }
      }, "r");
      return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
    }
    __name(Ka, "Ka");
    var mn = new Proxy(Ka, { get: (e, t) => Pt[t], set: (e, t, r) => Pt[t] = r });
    function za(e, t = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i))
            return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint")
          return i.toString();
        return i;
      }, t);
    }
    __name(za, "za");
    function Ui() {
      mr.length = 0;
    }
    __name(Ui, "Ui");
    var X = mn;
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var Vi = "library";
    function Tt(e) {
      let t = tl();
      return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : Vi);
    }
    __name(Tt, "Tt");
    function tl() {
      let e = y.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    __name(tl, "tl");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var dr;
    ((t) => {
      let e;
      ((I) => (I.findUnique = "findUnique", I.findUniqueOrThrow = "findUniqueOrThrow", I.findFirst = "findFirst", I.findFirstOrThrow = "findFirstOrThrow", I.findMany = "findMany", I.create = "create", I.createMany = "createMany", I.createManyAndReturn = "createManyAndReturn", I.update = "update", I.updateMany = "updateMany", I.upsert = "upsert", I.delete = "delete", I.deleteMany = "deleteMany", I.groupBy = "groupBy", I.count = "count", I.aggregate = "aggregate", I.findRaw = "findRaw", I.aggregateRaw = "aggregateRaw"))(e = t.ModelAction ||= {});
    })(dr ||= {});
    var At = {};
    ar(At, { error: () => il, info: () => nl, log: () => rl, query: () => ol, should: () => Qi, tags: () => Ct, warn: () => dn });
    d();
    u();
    c();
    p();
    m();
    var Ct = { error: ze("prisma:error"), warn: Mi("prisma:warn"), info: Fi("prisma:info"), query: Ni("prisma:query") };
    var Qi = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS };
    function rl(...e) {
      console.log(...e);
    }
    __name(rl, "rl");
    function dn(e, ...t) {
      Qi.warn() && console.warn(`${Ct.warn} ${e}`, ...t);
    }
    __name(dn, "dn");
    function nl(e, ...t) {
      console.info(`${Ct.info} ${e}`, ...t);
    }
    __name(nl, "nl");
    function il(e, ...t) {
      console.error(`${Ct.error} ${e}`, ...t);
    }
    __name(il, "il");
    function ol(e, ...t) {
      console.log(`${Ct.query} ${e}`, ...t);
    }
    __name(ol, "ol");
    d();
    u();
    c();
    p();
    m();
    function Pe(e, t) {
      throw new Error(t);
    }
    __name(Pe, "Pe");
    d();
    u();
    c();
    p();
    m();
    function fn(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    __name(fn, "fn");
    d();
    u();
    c();
    p();
    m();
    var gn = /* @__PURE__ */ __name((e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {}), "gn");
    d();
    u();
    c();
    p();
    m();
    function Ye(e, t) {
      let r = {};
      for (let n of Object.keys(e))
        r[n] = t(e[n], n);
      return r;
    }
    __name(Ye, "Ye");
    d();
    u();
    c();
    p();
    m();
    function hn(e, t) {
      if (e.length === 0)
        return;
      let r = e[0];
      for (let n = 1; n < e.length; n++)
        t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    __name(hn, "hn");
    d();
    u();
    c();
    p();
    m();
    function _(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(_, "_");
    d();
    u();
    c();
    p();
    m();
    var Yi = /* @__PURE__ */ new Set();
    var Rt = /* @__PURE__ */ __name((e, t, ...r) => {
      Yi.has(e) || (Yi.add(e), dn(t, ...r));
    }, "Rt");
    var G = /* @__PURE__ */ __name(class e extends Error {
      constructor(t, r, n) {
        super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    }, "e");
    _(G, "PrismaClientInitializationError");
    d();
    u();
    c();
    p();
    m();
    var re = /* @__PURE__ */ __name(class extends Error {
      constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    }, "re");
    _(re, "PrismaClientKnownRequestError");
    d();
    u();
    c();
    p();
    m();
    var ve = /* @__PURE__ */ __name(class extends Error {
      constructor(t, r) {
        super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    }, "ve");
    _(ve, "PrismaClientRustPanicError");
    d();
    u();
    c();
    p();
    m();
    var ne = /* @__PURE__ */ __name(class extends Error {
      constructor(t, { clientVersion: r, batchRequestIdx: n }) {
        super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    }, "ne");
    _(ne, "PrismaClientUnknownRequestError");
    d();
    u();
    c();
    p();
    m();
    var Y = /* @__PURE__ */ __name(class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    }, "Y");
    _(Y, "PrismaClientValidationError");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var Ze = 9e15;
    var De = 1e9;
    var yn = "0123456789abcdef";
    var hr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var yr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var wn = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Ze, maxE: Ze, crypto: false };
    var ro;
    var Te;
    var F = true;
    var Er = "[DecimalError] ";
    var ke = Er + "Invalid argument: ";
    var no = Er + "Precision limit exceeded";
    var io = Er + "crypto unavailable";
    var oo = "[object Decimal]";
    var Z = Math.floor;
    var Q = Math.pow;
    var al = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var ll = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var ul = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var so = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var pe = 1e7;
    var k = 7;
    var cl = 9007199254740991;
    var pl = hr.length - 1;
    var En = yr.length - 1;
    var C = { toStringTag: oo };
    C.absoluteValue = C.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), O(e);
    };
    C.ceil = function() {
      return O(new this.constructor(this), this.e + 1, 2);
    };
    C.clampedTo = C.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s)
        return new i(NaN);
      if (e.gt(t))
        throw Error(ke + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    C.comparedTo = C.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, f = e.s;
      if (!s || !a)
        return !l || !f ? NaN : l !== f ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0])
        return s[0] ? l : a[0] ? -f : 0;
      if (l !== f)
        return l;
      if (o.e !== e.e)
        return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (s[t] !== a[t])
          return s[t] > a[t] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    C.cosine = C.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + k, n.rounding = 1, r = ml(n, po(n, r)), n.precision = e, n.rounding = t, O(Te == 2 || Te == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    C.cubeRoot = C.cbrt = function() {
      var e, t, r, n, i, o, s, a, l, f, g = this, h = g.constructor;
      if (!g.isFinite() || g.isZero())
        return new h(g);
      for (F = false, o = g.s * Q(g.s * g, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = K(g.d), e = g.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Q(r, 1 / 3), e = Z((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new h(r), n.s = g.s) : n = new h(o.toString()), s = (e = h.precision) + 3; ; )
        if (a = n, l = a.times(a).times(a), f = l.plus(g), n = q(f.plus(g).times(a), f.plus(l), s + 2, 1), K(a.d).slice(0, s) === (r = K(n.d)).slice(0, s))
          if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
            if (!i && (O(a, e + 1, 0), a.times(a).times(a).eq(g))) {
              n = a;
              break;
            }
            s += 4, i = 1;
          } else {
            (!+r || !+r.slice(1) && r.charAt(0) == "5") && (O(n, e + 1, 1), t = !n.times(n).times(n).eq(g));
            break;
          }
      return F = true, O(n, e, h.rounding, t);
    };
    C.decimalPlaces = C.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - Z(this.e / k)) * k, e = t[e], e)
          for (; e % 10 == 0; e /= 10)
            r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    C.dividedBy = C.div = function(e) {
      return q(this, new this.constructor(e));
    };
    C.dividedToIntegerBy = C.divToInt = function(e) {
      var t = this, r = t.constructor;
      return O(q(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    C.equals = C.eq = function(e) {
      return this.cmp(e) === 0;
    };
    C.floor = function() {
      return O(new this.constructor(this), this.e + 1, 3);
    };
    C.greaterThan = C.gt = function(e) {
      return this.cmp(e) > 0;
    };
    C.greaterThanOrEqualTo = C.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    C.hyperbolicCosine = C.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite())
        return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero())
        return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / xr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = Xe(s, 1, o.times(t), new s(1), true);
      for (var l, f = e, g = new s(8); f--; )
        l = o.times(o), o = a.minus(l.times(g.minus(l.times(g))));
      return O(o, s.precision = r, s.rounding = n, true);
    };
    C.hyperbolicSine = C.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero())
        return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
        i = Xe(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / xr(5, e)), i = Xe(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), f = new o(20); e--; )
          s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(f))));
      }
      return o.precision = t, o.rounding = r, O(i, t, r, true);
    };
    C.hyperbolicTangent = C.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, q(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    C.inverseCosine = C.acos = function() {
      var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
      return n !== -1 ? n === 0 ? t.isNeg() ? ce(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? ce(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = ce(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
    };
    C.inverseHyperbolicCosine = C.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, F = false, r = r.times(r).minus(1).sqrt().plus(r), F = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    C.inverseHyperbolicSine = C.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, F = false, r = r.times(r).plus(1).sqrt().plus(r), F = true, n.precision = e, n.rounding = t, r.ln());
    };
    C.inverseHyperbolicTangent = C.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? O(new o(i), e, t, true) : (o.precision = r = n - i.e, i = q(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    C.inverseSine = C.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = ce(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    C.inverseTangent = C.atan = function() {
      var e, t, r, n, i, o, s, a, l, f = this, g = f.constructor, h = g.precision, v = g.rounding;
      if (f.isFinite()) {
        if (f.isZero())
          return new g(f);
        if (f.abs().eq(1) && h + 4 <= En)
          return s = ce(g, h + 4, v).times(0.25), s.s = f.s, s;
      } else {
        if (!f.s)
          return new g(NaN);
        if (h + 4 <= En)
          return s = ce(g, h + 4, v).times(0.5), s.s = f.s, s;
      }
      for (g.precision = a = h + 10, g.rounding = 1, r = Math.min(28, a / k + 2 | 0), e = r; e; --e)
        f = f.div(f.times(f).plus(1).sqrt().plus(1));
      for (F = false, t = Math.ceil(a / k), n = 1, l = f.times(f), s = new g(f), i = f; e !== -1; )
        if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0)
          for (e = t; s.d[e] === o.d[e] && e--; )
            ;
      return r && (s = s.times(2 << r - 1)), F = true, O(s, g.precision = h, g.rounding = v, true);
    };
    C.isFinite = function() {
      return !!this.d;
    };
    C.isInteger = C.isInt = function() {
      return !!this.d && Z(this.e / k) > this.d.length - 2;
    };
    C.isNaN = function() {
      return !this.s;
    };
    C.isNegative = C.isNeg = function() {
      return this.s < 0;
    };
    C.isPositive = C.isPos = function() {
      return this.s > 0;
    };
    C.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    C.lessThan = C.lt = function(e) {
      return this.cmp(e) < 0;
    };
    C.lessThanOrEqualTo = C.lte = function(e) {
      return this.cmp(e) < 1;
    };
    C.logarithm = C.log = function(e) {
      var t, r, n, i, o, s, a, l, f = this, g = f.constructor, h = g.precision, v = g.rounding, S = 5;
      if (e == null)
        e = new g(10), t = true;
      else {
        if (e = new g(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
          return new g(NaN);
        t = e.eq(10);
      }
      if (r = f.d, f.s < 0 || !r || !r[0] || f.eq(1))
        return new g(r && !r[0] ? -1 / 0 : f.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t)
        if (r.length > 1)
          o = true;
        else {
          for (i = r[0]; i % 10 === 0; )
            i /= 10;
          o = i !== 1;
        }
      if (F = false, a = h + S, s = Oe(f, a), n = t ? wr(g, a + 10) : Oe(e, a), l = q(s, n, a, 1), St(l.d, i = h, v))
        do
          if (a += 10, s = Oe(f, a), n = t ? wr(g, a + 10) : Oe(e, a), l = q(s, n, a, 1), !o) {
            +K(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = O(l, h + 1, 0));
            break;
          }
        while (St(l.d, i += 10, v));
      return F = true, O(l, h, v);
    };
    C.minus = C.sub = function(e) {
      var t, r, n, i, o, s, a, l, f, g, h, v, S = this, A = S.constructor;
      if (e = new A(e), !S.d || !e.d)
        return !S.s || !e.s ? e = new A(NaN) : S.d ? e.s = -e.s : e = new A(e.d || S.s !== e.s ? S : NaN), e;
      if (S.s != e.s)
        return e.s = -e.s, S.plus(e);
      if (f = S.d, v = e.d, a = A.precision, l = A.rounding, !f[0] || !v[0]) {
        if (v[0])
          e.s = -e.s;
        else if (f[0])
          e = new A(S);
        else
          return new A(l === 3 ? -0 : 0);
        return F ? O(e, a, l) : e;
      }
      if (r = Z(e.e / k), g = Z(S.e / k), f = f.slice(), o = g - r, o) {
        for (h = o < 0, h ? (t = f, o = -o, s = v.length) : (t = v, r = g, s = f.length), n = Math.max(Math.ceil(a / k), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
          t.push(0);
        t.reverse();
      } else {
        for (n = f.length, s = v.length, h = n < s, h && (s = n), n = 0; n < s; n++)
          if (f[n] != v[n]) {
            h = f[n] < v[n];
            break;
          }
        o = 0;
      }
      for (h && (t = f, f = v, v = t, e.s = -e.s), s = f.length, n = v.length - s; n > 0; --n)
        f[s++] = 0;
      for (n = v.length; n > o; ) {
        if (f[--n] < v[n]) {
          for (i = n; i && f[--i] === 0; )
            f[i] = pe - 1;
          --f[i], f[n] += pe;
        }
        f[n] -= v[n];
      }
      for (; f[--s] === 0; )
        f.pop();
      for (; f[0] === 0; f.shift())
        --r;
      return f[0] ? (e.d = f, e.e = br(f, r), F ? O(e, a, l) : e) : new A(l === 3 ? -0 : 0);
    };
    C.modulo = C.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? O(new n(r), n.precision, n.rounding) : (F = false, n.modulo == 9 ? (t = q(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = q(r, e, 0, n.modulo, 1), t = t.times(e), F = true, r.minus(t));
    };
    C.naturalExponential = C.exp = function() {
      return bn(this);
    };
    C.naturalLogarithm = C.ln = function() {
      return Oe(this);
    };
    C.negated = C.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, O(e);
    };
    C.plus = C.add = function(e) {
      var t, r, n, i, o, s, a, l, f, g, h = this, v = h.constructor;
      if (e = new v(e), !h.d || !e.d)
        return !h.s || !e.s ? e = new v(NaN) : h.d || (e = new v(e.d || h.s === e.s ? h : NaN)), e;
      if (h.s != e.s)
        return e.s = -e.s, h.minus(e);
      if (f = h.d, g = e.d, a = v.precision, l = v.rounding, !f[0] || !g[0])
        return g[0] || (e = new v(h)), F ? O(e, a, l) : e;
      if (o = Z(h.e / k), n = Z(e.e / k), f = f.slice(), i = o - n, i) {
        for (i < 0 ? (r = f, i = -i, s = g.length) : (r = g, n = o, s = f.length), o = Math.ceil(a / k), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; )
          r.push(0);
        r.reverse();
      }
      for (s = f.length, i = g.length, s - i < 0 && (i = s, r = g, g = f, f = r), t = 0; i; )
        t = (f[--i] = f[i] + g[i] + t) / pe | 0, f[i] %= pe;
      for (t && (f.unshift(t), ++n), s = f.length; f[--s] == 0; )
        f.pop();
      return e.d = f, e.e = br(f, n), F ? O(e, a, l) : e;
    };
    C.precision = C.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(ke + e);
      return r.d ? (t = ao(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    C.round = function() {
      var e = this, t = e.constructor;
      return O(new t(e), e.e + 1, t.rounding);
    };
    C.sine = C.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + k, n.rounding = 1, r = fl(n, po(n, r)), n.precision = e, n.rounding = t, O(Te > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    C.squareRoot = C.sqrt = function() {
      var e, t, r, n, i, o, s = this, a = s.d, l = s.e, f = s.s, g = s.constructor;
      if (f !== 1 || !a || !a[0])
        return new g(!f || f < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (F = false, f = Math.sqrt(+s), f == 0 || f == 1 / 0 ? (t = K(a), (t.length + l) % 2 == 0 && (t += "0"), f = Math.sqrt(t), l = Z((l + 1) / 2) - (l < 0 || l % 2), f == 1 / 0 ? t = "5e" + l : (t = f.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new g(t)) : n = new g(f.toString()), r = (l = g.precision) + 3; ; )
        if (o = n, n = o.plus(q(s, o, r + 2, 1)).times(0.5), K(o.d).slice(0, r) === (t = K(n.d)).slice(0, r))
          if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
            if (!i && (O(o, l + 1, 0), o.times(o).eq(s))) {
              n = o;
              break;
            }
            r += 4, i = 1;
          } else {
            (!+t || !+t.slice(1) && t.charAt(0) == "5") && (O(n, l + 1, 1), e = !n.times(n).eq(s));
            break;
          }
      return F = true, O(n, l, g.rounding, e);
    };
    C.tangent = C.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = q(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, O(Te == 2 || Te == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    C.times = C.mul = function(e) {
      var t, r, n, i, o, s, a, l, f, g = this, h = g.constructor, v = g.d, S = (e = new h(e)).d;
      if (e.s *= g.s, !v || !v[0] || !S || !S[0])
        return new h(!e.s || v && !v[0] && !S || S && !S[0] && !v ? NaN : !v || !S ? e.s / 0 : e.s * 0);
      for (r = Z(g.e / k) + Z(e.e / k), l = v.length, f = S.length, l < f && (o = v, v = S, S = o, s = l, l = f, f = s), o = [], s = l + f, n = s; n--; )
        o.push(0);
      for (n = f; --n >= 0; ) {
        for (t = 0, i = l + n; i > n; )
          a = o[i] + S[n] * v[i - n - 1] + t, o[i--] = a % pe | 0, t = a / pe | 0;
        o[i] = (o[i] + t) % pe | 0;
      }
      for (; !o[--s]; )
        o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = br(o, r), F ? O(e, h.precision, h.rounding) : e;
    };
    C.toBinary = function(e, t) {
      return Pn(this, 2, e, t);
    };
    C.toDecimalPlaces = C.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (ie(e, 0, De), t === void 0 ? t = n.rounding : ie(t, 0, 8), O(r, e + r.e + 1, t));
    };
    C.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = de(n, true) : (ie(e, 0, De), t === void 0 ? t = i.rounding : ie(t, 0, 8), n = O(new i(n), e + 1, t), r = de(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    C.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = de(i) : (ie(e, 0, De), t === void 0 ? t = o.rounding : ie(t, 0, 8), n = O(new o(i), e + i.e + 1, t), r = de(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    C.toFraction = function(e) {
      var t, r, n, i, o, s, a, l, f, g, h, v, S = this, A = S.d, R = S.constructor;
      if (!A)
        return new R(S);
      if (f = r = new R(1), n = l = new R(0), t = new R(n), o = t.e = ao(A) - S.e - 1, s = o % k, t.d[0] = Q(10, s < 0 ? k + s : s), e == null)
        e = o > 0 ? t : f;
      else {
        if (a = new R(e), !a.isInt() || a.lt(f))
          throw Error(ke + a);
        e = a.gt(t) ? o > 0 ? t : f : a;
      }
      for (F = false, a = new R(K(A)), g = R.precision, R.precision = o = A.length * k * 2; h = q(a, t, 0, 1, 1), i = r.plus(h.times(n)), i.cmp(e) != 1; )
        r = n, n = i, i = f, f = l.plus(h.times(i)), l = i, i = t, t = a.minus(h.times(i)), a = i;
      return i = q(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(f)), r = r.plus(i.times(n)), l.s = f.s = S.s, v = q(f, n, o, 1).minus(S).abs().cmp(q(l, r, o, 1).minus(S).abs()) < 1 ? [f, n] : [l, r], R.precision = g, F = true, v;
    };
    C.toHexadecimal = C.toHex = function(e, t) {
      return Pn(this, 16, e, t);
    };
    C.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d)
          return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : ie(t, 0, 8), !r.d)
          return e.s ? r : e;
        if (!e.d)
          return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (F = false, r = q(r, e, 0, t, 1).times(e), F = true, O(r)) : (e.s = r.s, r = e), r;
    };
    C.toNumber = function() {
      return +this;
    };
    C.toOctal = function(e, t) {
      return Pn(this, 8, e, t);
    };
    C.toPower = C.pow = function(e) {
      var t, r, n, i, o, s, a = this, l = a.constructor, f = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0])
        return new l(Q(+a, f));
      if (a = new l(a), a.eq(1))
        return a;
      if (n = l.precision, o = l.rounding, e.eq(1))
        return O(a, n, o);
      if (t = Z(e.e / k), t >= e.d.length - 1 && (r = f < 0 ? -f : f) <= cl)
        return i = lo(l, a, r, n), e.s < 0 ? new l(1).div(i) : O(i, n, o);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1)
          return new l(NaN);
        if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
          return a.s = s, a;
      }
      return r = Q(+a, f), t = r == 0 || !isFinite(r) ? Z(f * (Math.log("0." + K(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (F = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = bn(e.times(Oe(a, n + r)), n), i.d && (i = O(i, n + 5, 1), St(i.d, n, o) && (t = n + 10, i = O(bn(e.times(Oe(a, t + r)), t), t + 5, 1), +K(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = O(i, n + 1, 0)))), i.s = s, F = true, l.rounding = o, O(i, n, o));
    };
    C.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = de(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ie(e, 1, De), t === void 0 ? t = i.rounding : ie(t, 0, 8), n = O(new i(n), e, t), r = de(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    C.toSignificantDigits = C.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (ie(e, 1, De), t === void 0 ? t = n.rounding : ie(t, 0, 8)), O(new n(r), e, t);
    };
    C.toString = function() {
      var e = this, t = e.constructor, r = de(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    C.truncated = C.trunc = function() {
      return O(new this.constructor(this), this.e + 1, 1);
    };
    C.valueOf = C.toJSON = function() {
      var e = this, t = e.constructor, r = de(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function K(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++)
          n = e[t] + "", r = k - n.length, r && (o += Ie(r)), o += n;
        s = e[t], n = s + "", r = k - n.length, r && (o += Ie(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return o + s;
    }
    __name(K, "K");
    function ie(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(ke + e);
    }
    __name(ie, "ie");
    function St(e, t, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10)
        --t;
      return --t < 0 ? (t += k, i = 0) : (i = Math.ceil((t + 1) / k), t %= k), o = Q(10, k - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == Q(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == Q(10, t - 3) - 1, s;
    }
    __name(St, "St");
    function gr(e, t, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; )
          i[o] *= t;
        for (i[0] += yn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
          i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    __name(gr, "gr");
    function ml(e, t) {
      var r, n, i;
      if (t.isZero())
        return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / xr(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = Xe(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    __name(ml, "ml");
    var q = function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; )
          s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      __name(e, "e");
      function t(n, i, o, s) {
        var a, l;
        if (o != s)
          l = o > s ? 1 : -1;
        else
          for (a = l = 0; a < o; a++)
            if (n[a] != i[a]) {
              l = n[a] > i[a] ? 1 : -1;
              break;
            }
        return l;
      }
      __name(t, "t");
      function r(n, i, o, s) {
        for (var a = 0; o--; )
          n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; )
          n.shift();
      }
      __name(r, "r");
      return function(n, i, o, s, a, l) {
        var f, g, h, v, S, A, R, M, N, B, D, I, ae, J, Yr, nr, bt, Zr, ue, ir, or = n.constructor, Xr = n.s == i.s ? 1 : -1, z = n.d, $ = i.d;
        if (!z || !z[0] || !$ || !$[0])
          return new or(!n.s || !i.s || (z ? $ && z[0] == $[0] : !$) ? NaN : z && z[0] == 0 || !$ ? Xr * 0 : Xr / 0);
        for (l ? (S = 1, g = n.e - i.e) : (l = pe, S = k, g = Z(n.e / S) - Z(i.e / S)), ue = $.length, bt = z.length, N = new or(Xr), B = N.d = [], h = 0; $[h] == (z[h] || 0); h++)
          ;
        if ($[h] > (z[h] || 0) && g--, o == null ? (J = o = or.precision, s = or.rounding) : a ? J = o + (n.e - i.e) + 1 : J = o, J < 0)
          B.push(1), A = true;
        else {
          if (J = J / S + 2 | 0, h = 0, ue == 1) {
            for (v = 0, $ = $[0], J++; (h < bt || v) && J--; h++)
              Yr = v * l + (z[h] || 0), B[h] = Yr / $ | 0, v = Yr % $ | 0;
            A = v || h < bt;
          } else {
            for (v = l / ($[0] + 1) | 0, v > 1 && ($ = e($, v, l), z = e(z, v, l), ue = $.length, bt = z.length), nr = ue, D = z.slice(0, ue), I = D.length; I < ue; )
              D[I++] = 0;
            ir = $.slice(), ir.unshift(0), Zr = $[0], $[1] >= l / 2 && ++Zr;
            do
              v = 0, f = t($, D, ue, I), f < 0 ? (ae = D[0], ue != I && (ae = ae * l + (D[1] || 0)), v = ae / Zr | 0, v > 1 ? (v >= l && (v = l - 1), R = e($, v, l), M = R.length, I = D.length, f = t(R, D, M, I), f == 1 && (v--, r(R, ue < M ? ir : $, M, l))) : (v == 0 && (f = v = 1), R = $.slice()), M = R.length, M < I && R.unshift(0), r(D, R, I, l), f == -1 && (I = D.length, f = t($, D, ue, I), f < 1 && (v++, r(D, ue < I ? ir : $, I, l))), I = D.length) : f === 0 && (v++, D = [0]), B[h++] = v, f && D[0] ? D[I++] = z[nr] || 0 : (D = [z[nr]], I = 1);
            while ((nr++ < bt || D[0] !== void 0) && J--);
            A = D[0] !== void 0;
          }
          B[0] || B.shift();
        }
        if (S == 1)
          N.e = g, ro = A;
        else {
          for (h = 1, v = B[0]; v >= 10; v /= 10)
            h++;
          N.e = h + g * S - 1, O(N, a ? o + N.e + 1 : o, s, A);
        }
        return N;
      };
    }();
    function O(e, t, r, n) {
      var i, o, s, a, l, f, g, h, v, S = e.constructor;
      e:
        if (t != null) {
          if (h = e.d, !h)
            return e;
          for (i = 1, a = h[0]; a >= 10; a /= 10)
            i++;
          if (o = t - i, o < 0)
            o += k, s = t, g = h[v = 0], l = g / Q(10, i - s - 1) % 10 | 0;
          else if (v = Math.ceil((o + 1) / k), a = h.length, v >= a)
            if (n) {
              for (; a++ <= v; )
                h.push(0);
              g = l = 0, i = 1, o %= k, s = o - k + 1;
            } else
              break e;
          else {
            for (g = a = h[v], i = 1; a >= 10; a /= 10)
              i++;
            o %= k, s = o - k + i, l = s < 0 ? 0 : g / Q(10, i - s - 1) % 10 | 0;
          }
          if (n = n || t < 0 || h[v + 1] !== void 0 || (s < 0 ? g : g % Q(10, i - s - 1)), f = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? g / Q(10, i - s) : 0 : h[v - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !h[0])
            return h.length = 0, f ? (t -= e.e + 1, h[0] = Q(10, (k - t % k) % k), e.e = -t || 0) : h[0] = e.e = 0, e;
          if (o == 0 ? (h.length = v, a = 1, v--) : (h.length = v + 1, a = Q(10, k - o), h[v] = s > 0 ? (g / Q(10, i - s) % Q(10, s) | 0) * a : 0), f)
            for (; ; )
              if (v == 0) {
                for (o = 1, s = h[0]; s >= 10; s /= 10)
                  o++;
                for (s = h[0] += a, a = 1; s >= 10; s /= 10)
                  a++;
                o != a && (e.e++, h[0] == pe && (h[0] = 1));
                break;
              } else {
                if (h[v] += a, h[v] != pe)
                  break;
                h[v--] = 0, a = 1;
              }
          for (o = h.length; h[--o] === 0; )
            h.pop();
        }
      return F && (e.e > S.maxE ? (e.d = null, e.e = NaN) : e.e < S.minE && (e.e = 0, e.d = [0])), e;
    }
    __name(O, "O");
    function de(e, t, r) {
      if (!e.isFinite())
        return co(e);
      var n, i = e.e, o = K(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Ie(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Ie(-i - 1) + o, r && (n = r - s) > 0 && (o += Ie(n))) : i >= s ? (o += Ie(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Ie(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Ie(n))), o;
    }
    __name(de, "de");
    function br(e, t) {
      var r = e[0];
      for (t *= k; r >= 10; r /= 10)
        t++;
      return t;
    }
    __name(br, "br");
    function wr(e, t, r) {
      if (t > pl)
        throw F = true, r && (e.precision = r), Error(no);
      return O(new e(hr), t, 1, true);
    }
    __name(wr, "wr");
    function ce(e, t, r) {
      if (t > En)
        throw Error(no);
      return O(new e(yr), t, r, true);
    }
    __name(ce, "ce");
    function ao(e) {
      var t = e.length - 1, r = t * k + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10)
          r--;
        for (t = e[0]; t >= 10; t /= 10)
          r++;
      }
      return r;
    }
    __name(ao, "ao");
    function Ie(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    __name(Ie, "Ie");
    function lo(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / k + 4);
      for (F = false; ; ) {
        if (r % 2 && (o = o.times(t), eo(o.d, s) && (i = true)), r = Z(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), eo(t.d, s);
      }
      return F = true, o;
    }
    __name(lo, "lo");
    function Xi(e) {
      return e.d[e.d.length - 1] & 1;
    }
    __name(Xi, "Xi");
    function uo(e, t, r) {
      for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
        if (n = new e(t[o]), n.s)
          i[r](n) && (i = n);
        else {
          i = n;
          break;
        }
      return i;
    }
    __name(uo, "uo");
    function bn(e, t) {
      var r, n, i, o, s, a, l, f = 0, g = 0, h = 0, v = e.constructor, S = v.rounding, A = v.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new v(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (t == null ? (F = false, l = A) : l = t, a = new v(0.03125); e.e > -2; )
        e = e.times(a), h += 5;
      for (n = Math.log(Q(2, h)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new v(1), v.precision = l; ; ) {
        if (o = O(o.times(e), l, 1), r = r.times(++g), a = s.plus(q(o, r, l, 1)), K(a.d).slice(0, l) === K(s.d).slice(0, l)) {
          for (i = h; i--; )
            s = O(s.times(s), l, 1);
          if (t == null)
            if (f < 3 && St(s.d, l - n, S, f))
              v.precision = l += 10, r = o = a = new v(1), g = 0, f++;
            else
              return O(s, v.precision = A, S, F = true);
          else
            return v.precision = A, s;
        }
        s = a;
      }
    }
    __name(bn, "bn");
    function Oe(e, t) {
      var r, n, i, o, s, a, l, f, g, h, v, S = 1, A = 10, R = e, M = R.d, N = R.constructor, B = N.rounding, D = N.precision;
      if (R.s < 0 || !M || !M[0] || !R.e && M[0] == 1 && M.length == 1)
        return new N(M && !M[0] ? -1 / 0 : R.s != 1 ? NaN : M ? 0 : R);
      if (t == null ? (F = false, g = D) : g = t, N.precision = g += A, r = K(M), n = r.charAt(0), Math.abs(o = R.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          R = R.times(e), r = K(R.d), n = r.charAt(0), S++;
        o = R.e, n > 1 ? (R = new N("0." + r), o++) : R = new N(n + "." + r.slice(1));
      } else
        return f = wr(N, g + 2, D).times(o + ""), R = Oe(new N(n + "." + r.slice(1)), g - A).plus(f), N.precision = D, t == null ? O(R, D, B, F = true) : R;
      for (h = R, l = s = R = q(R.minus(1), R.plus(1), g, 1), v = O(R.times(R), g, 1), i = 3; ; ) {
        if (s = O(s.times(v), g, 1), f = l.plus(q(s, new N(i), g, 1)), K(f.d).slice(0, g) === K(l.d).slice(0, g))
          if (l = l.times(2), o !== 0 && (l = l.plus(wr(N, g + 2, D).times(o + ""))), l = q(l, new N(S), g, 1), t == null)
            if (St(l.d, g - A, B, a))
              N.precision = g += A, f = s = R = q(h.minus(1), h.plus(1), g, 1), v = O(R.times(R), g, 1), i = a = 1;
            else
              return O(l, N.precision = D, B, F = true);
          else
            return N.precision = D, l;
        l = f, i += 2;
      }
    }
    __name(Oe, "Oe");
    function co(e) {
      return String(e.s * e.s / 0);
    }
    __name(co, "co");
    function xn(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
        ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
        ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % k, r < 0 && (n += k), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= k; n < i; )
            e.d.push(+t.slice(n, n += k));
          t = t.slice(n), n = k - t.length;
        } else
          n -= i;
        for (; n--; )
          t += "0";
        e.d.push(+t), F && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    __name(xn, "xn");
    function dl(e, t) {
      var r, n, i, o, s, a, l, f, g;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), so.test(t))
          return xn(e, t);
      } else if (t === "Infinity" || t === "NaN")
        return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (ll.test(t))
        r = 16, t = t.toLowerCase();
      else if (al.test(t))
        r = 2;
      else if (ul.test(t))
        r = 8;
      else
        throw Error(ke + t);
      for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = lo(n, new n(r), o, o * 2)), f = gr(t, r, pe), g = f.length - 1, o = g; f[o] === 0; --o)
        f.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = br(f, g), e.d = f, F = false, s && (e = q(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? Q(2, l) : Ue.pow(2, l))), F = true, e);
    }
    __name(dl, "dl");
    function fl(e, t) {
      var r, n = t.d.length;
      if (n < 3)
        return t.isZero() ? t : Xe(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / xr(5, r)), t = Xe(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
        i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
      return t;
    }
    __name(fl, "fl");
    function Xe(e, t, r, n, i) {
      var o, s, a, l, f = 1, g = e.precision, h = Math.ceil(g / k);
      for (F = false, l = r.times(r), a = new e(n); ; ) {
        if (s = q(a.times(l), new e(t++ * t++), g, 1), a = i ? n.plus(s) : n.minus(s), n = q(s.times(l), new e(t++ * t++), g, 1), s = a.plus(n), s.d[h] !== void 0) {
          for (o = h; s.d[o] === a.d[o] && o--; )
            ;
          if (o == -1)
            break;
        }
        o = a, a = n, n = s, s = o, f++;
      }
      return F = true, s.d.length = h + 1, s;
    }
    __name(Xe, "Xe");
    function xr(e, t) {
      for (var r = e; --t; )
        r *= e;
      return r;
    }
    __name(xr, "xr");
    function po(e, t) {
      var r, n = t.s < 0, i = ce(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o))
        return Te = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero())
        Te = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o))
          return Te = Xi(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Te = Xi(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    __name(po, "po");
    function Pn(e, t, r, n) {
      var i, o, s, a, l, f, g, h, v, S = e.constructor, A = r !== void 0;
      if (A ? (ie(r, 1, De), n === void 0 ? n = S.rounding : ie(n, 0, 8)) : (r = S.precision, n = S.rounding), !e.isFinite())
        g = co(e);
      else {
        for (g = de(e), s = g.indexOf("."), A ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (g = g.replace(".", ""), v = new S(1), v.e = g.length - s, v.d = gr(de(v), 10, i), v.e = v.d.length), h = gr(g, 10, i), o = l = h.length; h[--l] == 0; )
          h.pop();
        if (!h[0])
          g = A ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new S(e), e.d = h, e.e = o, e = q(e, v, r, n, 0, i), h = e.d, o = e.e, f = ro), s = h[r], a = i / 2, f = f || h[r + 1] !== void 0, f = n < 4 ? (s !== void 0 || f) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || f || n === 6 && h[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), h.length = r, f)
            for (; ++h[--r] > i - 1; )
              h[r] = 0, r || (++o, h.unshift(1));
          for (l = h.length; !h[l - 1]; --l)
            ;
          for (s = 0, g = ""; s < l; s++)
            g += yn.charAt(h[s]);
          if (A) {
            if (l > 1)
              if (t == 16 || t == 8) {
                for (s = t == 16 ? 4 : 3, --l; l % s; l++)
                  g += "0";
                for (h = gr(g, i, t), l = h.length; !h[l - 1]; --l)
                  ;
                for (s = 1, g = "1."; s < l; s++)
                  g += yn.charAt(h[s]);
              } else
                g = g.charAt(0) + "." + g.slice(1);
            g = g + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; )
              g = "0" + g;
            g = "0." + g;
          } else if (++o > l)
            for (o -= l; o--; )
              g += "0";
          else
            o < l && (g = g.slice(0, o) + "." + g.slice(o));
        }
        g = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + g;
      }
      return e.s < 0 ? "-" + g : g;
    }
    __name(Pn, "Pn");
    function eo(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    __name(eo, "eo");
    function gl(e) {
      return new this(e).abs();
    }
    __name(gl, "gl");
    function hl(e) {
      return new this(e).acos();
    }
    __name(hl, "hl");
    function yl(e) {
      return new this(e).acosh();
    }
    __name(yl, "yl");
    function wl(e, t) {
      return new this(e).plus(t);
    }
    __name(wl, "wl");
    function El(e) {
      return new this(e).asin();
    }
    __name(El, "El");
    function bl(e) {
      return new this(e).asinh();
    }
    __name(bl, "bl");
    function xl(e) {
      return new this(e).atan();
    }
    __name(xl, "xl");
    function Pl(e) {
      return new this(e).atanh();
    }
    __name(Pl, "Pl");
    function vl(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = ce(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? ce(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = ce(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(q(e, t, o, 1)), t = ce(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(q(e, t, o, 1)), r;
    }
    __name(vl, "vl");
    function Tl(e) {
      return new this(e).cbrt();
    }
    __name(Tl, "Tl");
    function Cl(e) {
      return O(e = new this(e), e.e + 1, 2);
    }
    __name(Cl, "Cl");
    function Al(e, t, r) {
      return new this(e).clamp(t, r);
    }
    __name(Al, "Al");
    function Rl(e) {
      if (!e || typeof e != "object")
        throw Error(Er + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, De, "rounding", 0, 8, "toExpNeg", -Ze, 0, "toExpPos", 0, Ze, "maxE", 0, Ze, "minE", -Ze, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3)
        if (r = o[t], i && (this[r] = wn[r]), (n = e[r]) !== void 0)
          if (Z(n) === n && n >= o[t + 1] && n <= o[t + 2])
            this[r] = n;
          else
            throw Error(ke + r + ": " + n);
      if (r = "crypto", i && (this[r] = wn[r]), (n = e[r]) !== void 0)
        if (n === true || n === false || n === 0 || n === 1)
          if (n)
            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[r] = true;
            else
              throw Error(io);
          else
            this[r] = false;
        else
          throw Error(ke + r + ": " + n);
      return this;
    }
    __name(Rl, "Rl");
    function Sl(e) {
      return new this(e).cos();
    }
    __name(Sl, "Sl");
    function Il(e) {
      return new this(e).cosh();
    }
    __name(Il, "Il");
    function mo(e) {
      var t, r, n;
      function i(o) {
        var s, a, l, f = this;
        if (!(f instanceof i))
          return new i(o);
        if (f.constructor = i, to(o)) {
          f.s = o.s, F ? !o.d || o.e > i.maxE ? (f.e = NaN, f.d = null) : o.e < i.minE ? (f.e = 0, f.d = [0]) : (f.e = o.e, f.d = o.d.slice()) : (f.e = o.e, f.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            f.s = 1 / o < 0 ? -1 : 1, f.e = 0, f.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, f.s = -1) : f.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10)
              s++;
            F ? s > i.maxE ? (f.e = NaN, f.d = null) : s < i.minE ? (f.e = 0, f.d = [0]) : (f.e = s, f.d = [o]) : (f.e = s, f.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (f.s = NaN), f.e = NaN, f.d = null;
            return;
          }
          return xn(f, o.toString());
        } else if (l !== "string")
          throw Error(ke + o);
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), f.s = -1) : (a === 43 && (o = o.slice(1)), f.s = 1), so.test(o) ? xn(f, o) : dl(f, o);
      }
      __name(i, "i");
      if (i.prototype = C, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Rl, i.clone = mo, i.isDecimal = to, i.abs = gl, i.acos = hl, i.acosh = yl, i.add = wl, i.asin = El, i.asinh = bl, i.atan = xl, i.atanh = Pl, i.atan2 = vl, i.cbrt = Tl, i.ceil = Cl, i.clamp = Al, i.cos = Sl, i.cosh = Il, i.div = Ol, i.exp = kl, i.floor = Dl, i.hypot = Ml, i.ln = Nl, i.log = Fl, i.log10 = Ll, i.log2 = _l, i.max = Bl, i.min = Ul, i.mod = ql, i.mul = $l, i.pow = Vl, i.random = jl, i.round = Jl, i.sign = Gl, i.sin = Ql, i.sinh = Hl, i.sqrt = Wl, i.sub = Kl, i.sum = zl, i.tan = Yl, i.tanh = Zl, i.trunc = Xl, e === void 0 && (e = {}), e && e.defaults !== true)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    __name(mo, "mo");
    function Ol(e, t) {
      return new this(e).div(t);
    }
    __name(Ol, "Ol");
    function kl(e) {
      return new this(e).exp();
    }
    __name(kl, "kl");
    function Dl(e) {
      return O(e = new this(e), e.e + 1, 3);
    }
    __name(Dl, "Dl");
    function Ml() {
      var e, t, r = new this(0);
      for (F = false, e = 0; e < arguments.length; )
        if (t = new this(arguments[e++]), t.d)
          r.d && (r = r.plus(t.times(t)));
        else {
          if (t.s)
            return F = true, new this(1 / 0);
          r = t;
        }
      return F = true, r.sqrt();
    }
    __name(Ml, "Ml");
    function to(e) {
      return e instanceof Ue || e && e.toStringTag === oo || false;
    }
    __name(to, "to");
    function Nl(e) {
      return new this(e).ln();
    }
    __name(Nl, "Nl");
    function Fl(e, t) {
      return new this(e).log(t);
    }
    __name(Fl, "Fl");
    function _l(e) {
      return new this(e).log(2);
    }
    __name(_l, "_l");
    function Ll(e) {
      return new this(e).log(10);
    }
    __name(Ll, "Ll");
    function Bl() {
      return uo(this, arguments, "lt");
    }
    __name(Bl, "Bl");
    function Ul() {
      return uo(this, arguments, "gt");
    }
    __name(Ul, "Ul");
    function ql(e, t) {
      return new this(e).mod(t);
    }
    __name(ql, "ql");
    function $l(e, t) {
      return new this(e).mul(t);
    }
    __name($l, "$l");
    function Vl(e, t) {
      return new this(e).pow(t);
    }
    __name(Vl, "Vl");
    function jl(e) {
      var t, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : ie(e, 1, De), n = Math.ceil(e / k), this.crypto)
        if (crypto.getRandomValues)
          for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
            i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
        else if (crypto.randomBytes) {
          for (t = crypto.randomBytes(n *= 4); o < n; )
            i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
          o = n / 4;
        } else
          throw Error(io);
      else
        for (; o < n; )
          a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= k, n && e && (i = Q(10, k - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)
        a.pop();
      if (o < 0)
        r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= k)
          a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10)
          n++;
        n < k && (r -= k - n);
      }
      return s.e = r, s.d = a, s;
    }
    __name(jl, "jl");
    function Jl(e) {
      return O(e = new this(e), e.e + 1, this.rounding);
    }
    __name(Jl, "Jl");
    function Gl(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    __name(Gl, "Gl");
    function Ql(e) {
      return new this(e).sin();
    }
    __name(Ql, "Ql");
    function Hl(e) {
      return new this(e).sinh();
    }
    __name(Hl, "Hl");
    function Wl(e) {
      return new this(e).sqrt();
    }
    __name(Wl, "Wl");
    function Kl(e, t) {
      return new this(e).sub(t);
    }
    __name(Kl, "Kl");
    function zl() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (F = false; r.s && ++e < t.length; )
        r = r.plus(t[e]);
      return F = true, O(r, this.precision, this.rounding);
    }
    __name(zl, "zl");
    function Yl(e) {
      return new this(e).tan();
    }
    __name(Yl, "Yl");
    function Zl(e) {
      return new this(e).tanh();
    }
    __name(Zl, "Zl");
    function Xl(e) {
      return O(e = new this(e), e.e + 1, 1);
    }
    __name(Xl, "Xl");
    C[Symbol.for("nodejs.util.inspect.custom")] = C.toString;
    C[Symbol.toStringTag] = "Decimal";
    var Ue = C.constructor = mo(wn);
    hr = new Ue(hr);
    yr = new Ue(yr);
    var fe = Ue;
    function et(e) {
      return e === null ? e : Array.isArray(e) ? e.map(et) : typeof e == "object" ? eu(e) ? tu(e) : Ye(e, et) : e;
    }
    __name(et, "et");
    function eu(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    __name(eu, "eu");
    function tu({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = w.Buffer.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new fe(t);
        case "Json":
          return JSON.parse(t);
        default:
          Pe(t, "Unknown tagged value");
      }
    }
    __name(tu, "tu");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    function tt(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(tt, "tt");
    d();
    u();
    c();
    p();
    m();
    function rt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    __name(rt, "rt");
    function Pr(e) {
      return e.toString() !== "Invalid Date";
    }
    __name(Pr, "Pr");
    d();
    u();
    c();
    p();
    m();
    function nt(e) {
      return Ue.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    __name(nt, "nt");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var ru = Le(Gi());
    var nu = { red: ze, gray: _i, dim: pr, bold: cr, underline: ki, highlightSource: (e) => e.highlight() };
    var iu = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function ou({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    __name(ou, "ou");
    function su({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(au(t))), i) {
        a.push("");
        let f = [i.toString()];
        o && (f.push(o), f.push(s.dim(")"))), a.push(f.join("")), o && a.push("");
      } else
        a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    __name(su, "su");
    function au(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    __name(au, "au");
    function vr(e) {
      let t = e.showColors ? nu : iu, r;
      return typeof $getTemplateParameters < "u" ? r = $getTemplateParameters(e, t) : r = ou(e), su(r, t);
    }
    __name(vr, "vr");
    d();
    u();
    c();
    p();
    m();
    var bo = Le(vn());
    d();
    u();
    c();
    p();
    m();
    function yo(e, t, r) {
      let n = wo(e), i = lu(n), o = cu(i);
      o ? Tr(o, t, r) : t.addErrorMessage(() => "Unknown error");
    }
    __name(yo, "yo");
    function wo(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? wo(t) : [t]);
    }
    __name(wo, "wo");
    function lu(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: uu(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    __name(lu, "lu");
    function uu(e, t) {
      return [...new Set(e.concat(t))];
    }
    __name(uu, "uu");
    function cu(e) {
      return hn(e, (t, r) => {
        let n = go(t), i = go(r);
        return n !== i ? n - i : ho(t) - ho(r);
      });
    }
    __name(cu, "cu");
    function go(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    __name(go, "go");
    function ho(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    __name(ho, "ho");
    d();
    u();
    c();
    p();
    m();
    var le = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    }, "le");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var it = /* @__PURE__ */ __name(class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++)
          n(r[o], this), o !== i && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    }, "it");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var Cr = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    }, "Cr");
    d();
    u();
    c();
    p();
    m();
    var Ar = /* @__PURE__ */ __name((e) => e, "Ar");
    var Rr = { bold: Ar, red: Ar, green: Ar, dim: Ar, enabled: false };
    var Eo = { bold: cr, red: ze, green: Di, dim: pr, enabled: true };
    var ot = { write(e) {
      e.writeLine(",");
    } };
    d();
    u();
    c();
    p();
    m();
    var ge = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    }, "ge");
    d();
    u();
    c();
    p();
    m();
    var Me = /* @__PURE__ */ __name(class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    }, "Me");
    var st = /* @__PURE__ */ __name(class extends Me {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new Cr(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new ge("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(ot, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    }, "st");
    var at = /* @__PURE__ */ __name(class e extends Me {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o)
          return;
        let s = o;
        for (let a of i) {
          let l;
          if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof st && (l = s.value.getField(Number(a))), !l)
            return;
          s = l;
        }
        return s;
      }
      getDeepFieldValue(r) {
        return r.length === 0 ? this : this.getDeepField(r)?.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        return this.getField(r)?.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof e))
            return;
          let o = n.getSubSelectionValue(i);
          if (!o)
            return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n)
          return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e))
            return;
          let a = s.getSelectionParent();
          if (!a)
            return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let r = this.getField("select")?.value.asObject();
        if (r)
          return { kind: "select", value: r };
        let n = this.getField("include")?.value.asObject();
        if (n)
          return { kind: "include", value: n };
      }
      getSubSelectionValue(r) {
        return this.getSelectionParent()?.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      asObject() {
        return this;
      }
      writeEmpty(r) {
        let n = new ge("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(ot, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    }, "e");
    d();
    u();
    c();
    p();
    m();
    var W = /* @__PURE__ */ __name(class extends Me {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new ge(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    }, "W");
    d();
    u();
    c();
    p();
    m();
    var It = /* @__PURE__ */ __name(class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(ot, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    }, "It");
    function Tr(e, t, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          mu(e, t);
          break;
        case "IncludeOnScalar":
          du(e, t);
          break;
        case "EmptySelection":
          fu(e, t, r);
          break;
        case "UnknownSelectionField":
          wu(e, t);
          break;
        case "InvalidSelectionValue":
          Eu(e, t);
          break;
        case "UnknownArgument":
          bu(e, t);
          break;
        case "UnknownInputField":
          xu(e, t);
          break;
        case "RequiredArgumentMissing":
          Pu(e, t);
          break;
        case "InvalidArgumentType":
          vu(e, t);
          break;
        case "InvalidArgumentValue":
          Tu(e, t);
          break;
        case "ValueTooLarge":
          Cu(e, t);
          break;
        case "SomeFieldsMissing":
          Au(e, t);
          break;
        case "TooManyFieldsGiven":
          Ru(e, t);
          break;
        case "Union":
          yo(e, t, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    __name(Tr, "Tr");
    function mu(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    __name(mu, "mu");
    function du(e, t) {
      let [r, n] = Ot(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i))
        for (let s of i.fields)
          s.isRelation && o.addSuggestion(new le(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${kt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    __name(du, "du");
    function fu(e, t, r) {
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          gu(e, t, i);
          return;
        }
        if (n.hasField("select")) {
          hu(e, t);
          return;
        }
      }
      if (r?.[tt(e.outputType.name)]) {
        yu(e, t);
        return;
      }
      t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    __name(fu, "fu");
    function gu(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields)
        r.addSuggestion(new le(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(gu, "gu");
    function hu(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), vo(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${kt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    __name(hu, "hu");
    function yu(e, t) {
      let r = new It();
      for (let i of e.outputType.fields)
        i.isRelation || r.addField(i.name, "false");
      let n = new le("omit", r).makeRequired();
      if (e.selectionPath.length === 0)
        t.arguments.addSuggestion(n);
      else {
        let [i, o] = Ot(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let l = a?.value.asObject() ?? new at();
          l.addSuggestion(n), a.value = l;
        }
      }
      t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(yu, "yu");
    function wu(e, t) {
      let r = To(e.selectionPath, t);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            vo(n, e.outputType);
            break;
          case "include":
            Su(n, e.outputType);
            break;
          case "omit":
            Iu(n, e.outputType);
            break;
        }
      }
      t.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(kt(n)), i.join(" ");
      });
    }
    __name(wu, "wu");
    function Eu(e, t) {
      let r = To(e.selectionPath, t);
      r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
    }
    __name(Eu, "Eu");
    function bu(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), Ou(n, e.arguments)), t.addErrorMessage((i) => xo(i, r, e.arguments.map((o) => o.name)));
    }
    __name(bu, "bu");
    function xu(e, t) {
      let [r, n] = Ot(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && Co(o, e.inputType);
      }
      t.addErrorMessage((o) => xo(o, n, e.inputType.fields.map((s) => s.name)));
    }
    __name(xu, "xu");
    function xo(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = Du(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(kt(e)), n.join(" ");
    }
    __name(xo, "xo");
    function Pu(e, t) {
      let r;
      t.addErrorMessage((l) => r?.value instanceof W && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n)
        return;
      let [i, o] = Ot(e.argumentPath), s = new It(), a = n.getDeepFieldValue(i)?.asObject();
      if (a)
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l of e.inputTypes[0].fields)
            s.addField(l.name, l.typeNames.join(" | "));
          a.addSuggestion(new le(o, s).makeRequired());
        } else {
          let l = e.inputTypes.map(Po).join(" | ");
          a.addSuggestion(new le(o, l).makeRequired());
        }
    }
    __name(Pu, "Pu");
    function Po(e) {
      return e.kind === "list" ? `${Po(e.elementType)}[]` : e.name;
    }
    __name(Po, "Po");
    function vu(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = Sr("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    __name(vu, "vu");
    function Tu(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = Sr("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    __name(Tu, "Tu");
    function Cu(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof W && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    __name(Cu, "Cu");
    function Au(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && Co(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Sr("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(kt(i)), o.join(" ");
      });
    }
    __name(Au, "Au");
    function Ru(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Sr("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    __name(Ru, "Ru");
    function vo(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new le(r.name, "true"));
    }
    __name(vo, "vo");
    function Su(e, t) {
      for (let r of t.fields)
        r.isRelation && !e.hasField(r.name) && e.addSuggestion(new le(r.name, "true"));
    }
    __name(Su, "Su");
    function Iu(e, t) {
      for (let r of t.fields)
        !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new le(r.name, "true"));
    }
    __name(Iu, "Iu");
    function Ou(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
    }
    __name(Ou, "Ou");
    function To(e, t) {
      let [r, n] = Ot(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
      if (!i)
        return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
      return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    __name(To, "To");
    function Co(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
    }
    __name(Co, "Co");
    function Ot(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    __name(Ot, "Ot");
    function kt({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    __name(kt, "kt");
    function Sr(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    __name(Sr, "Sr");
    var ku = 3;
    function Du(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, bo.default)(e, i);
        o > ku || o < r && (r = o, n = i);
      }
      return n;
    }
    __name(Du, "Du");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    function Ao(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(Ao, "Ao");
    d();
    u();
    c();
    p();
    m();
    var Dt = /* @__PURE__ */ __name(class {
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    }, "Dt");
    function lt(e) {
      return e instanceof Dt;
    }
    __name(lt, "lt");
    d();
    u();
    c();
    p();
    m();
    var Ir = Symbol();
    var Tn = /* @__PURE__ */ new WeakMap();
    var Ce = /* @__PURE__ */ __name(class {
      constructor(t) {
        t === Ir ? Tn.set(this, `Prisma.${this._getName()}`) : Tn.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Tn.get(this);
      }
    }, "Ce");
    var Mt = /* @__PURE__ */ __name(class extends Ce {
      _getNamespace() {
        return "NullTypes";
      }
    }, "Mt");
    var Nt = /* @__PURE__ */ __name(class extends Mt {
    }, "Nt");
    Cn(Nt, "DbNull");
    var Ft = /* @__PURE__ */ __name(class extends Mt {
    }, "Ft");
    Cn(Ft, "JsonNull");
    var _t = /* @__PURE__ */ __name(class extends Mt {
    }, "_t");
    Cn(_t, "AnyNull");
    var Or = { classes: { DbNull: Nt, JsonNull: Ft, AnyNull: _t }, instances: { DbNull: new Nt(Ir), JsonNull: new Ft(Ir), AnyNull: new _t(Ir) } };
    function Cn(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(Cn, "Cn");
    d();
    u();
    c();
    p();
    m();
    var Ro = ": ";
    var kr = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Ro.length;
      }
      write(t) {
        let r = new ge(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Ro).write(this.value);
      }
    }, "kr");
    var An = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    }, "An");
    function ut(e) {
      return new An(So(e));
    }
    __name(ut, "ut");
    function So(e) {
      let t = new at();
      for (let [r, n] of Object.entries(e)) {
        let i = new kr(r, Io(n));
        t.addField(i);
      }
      return t;
    }
    __name(So, "So");
    function Io(e) {
      if (typeof e == "string")
        return new W(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean")
        return new W(String(e));
      if (typeof e == "bigint")
        return new W(`${e}n`);
      if (e === null)
        return new W("null");
      if (e === void 0)
        return new W("undefined");
      if (nt(e))
        return new W(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return w.Buffer.isBuffer(e) ? new W(`Buffer.alloc(${e.byteLength})`) : new W(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Pr(e) ? e.toISOString() : "Invalid Date";
        return new W(`new Date("${t}")`);
      }
      return e instanceof Ce ? new W(`Prisma.${e._getName()}`) : lt(e) ? new W(`prisma.${Ao(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Mu(e) : typeof e == "object" ? So(e) : new W(Object.prototype.toString.call(e));
    }
    __name(Io, "Io");
    function Mu(e) {
      let t = new st();
      for (let r of e)
        t.addItem(Io(r));
      return t;
    }
    __name(Mu, "Mu");
    function Dr(e, t) {
      let r = t === "pretty" ? Eo : Rr, n = e.renderAllMessages(r), i = new it(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    __name(Dr, "Dr");
    function Mr({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = ut(e);
      for (let h of t)
        Tr(h, a, s);
      let { message: l, args: f } = Dr(a, r), g = vr({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: f });
      throw new Y(g, { clientVersion: o });
    }
    __name(Mr, "Mr");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var he = /* @__PURE__ */ __name(class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n)
          return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    }, "he");
    d();
    u();
    c();
    p();
    m();
    function Lt(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    __name(Lt, "Lt");
    d();
    u();
    c();
    p();
    m();
    function ye(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    __name(ye, "ye");
    d();
    u();
    c();
    p();
    m();
    function ko(e, t, r) {
      let n = ye(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : Nu({ ...e, ...Oo(t.name, e, t.result.$allModels), ...Oo(t.name, e, t.result[n]) });
    }
    __name(ko, "ko");
    function Nu(e) {
      let t = new he(), r = /* @__PURE__ */ __name((n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n])), "r");
      return Ye(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    __name(Nu, "Nu");
    function Oo(e, t, r) {
      return r ? Ye(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Fu(t, o, i) })) : {};
    }
    __name(Oo, "Oo");
    function Fu(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    __name(Fu, "Fu");
    function Do(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (e[n.name])
          for (let i of n.needs)
            r[i] = true;
      return r;
    }
    __name(Do, "Do");
    function Mo(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (!e[n.name])
          for (let i of n.needs)
            delete r[i];
      return r;
    }
    __name(Mo, "Mo");
    var Nr = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new he();
        this.modelExtensionsCache = new he();
        this.queryCallbacksCache = new he();
        this.clientExtensions = Lt(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
        this.batchCallbacks = Lt(() => {
          let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => ko(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = ye(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    }, "Nr");
    var ct = /* @__PURE__ */ __name(class e {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new Nr(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new Nr(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    }, "e");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var No = Symbol();
    var Bt = /* @__PURE__ */ __name(class {
      constructor(t) {
        if (t !== No)
          throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(t) {
        return t === void 0 ? Fr : t;
      }
    }, "Bt");
    var Fr = new Bt(No);
    function we(e) {
      return e instanceof Bt;
    }
    __name(we, "we");
    var _u = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var Fo = "explicitly `undefined` values are not allowed";
    function _r({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = ct.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: f, globalOmit: g }) {
      let h = new Rn({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: f, globalOmit: g });
      return { modelName: e, action: _u[t], query: Ut(r, h) };
    }
    __name(_r, "_r");
    function Ut({ select: e, include: t, ...r } = {}, n) {
      let i;
      return n.isPreviewFeatureOn("omitApi") && (i = r.omit, delete r.omit), { arguments: Lo(r, n), selection: Lu(e, t, i, n) };
    }
    __name(Ut, "Ut");
    function Lu(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.isPreviewFeatureOn("omitApi") && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), $u(e, n)) : Bu(n, t, r);
    }
    __name(Lu, "Lu");
    function Bu(e, t, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && Uu(n, t, e), e.isPreviewFeatureOn("omitApi") && qu(n, r, e), n;
    }
    __name(Bu, "Bu");
    function Uu(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        if (we(i))
          continue;
        let o = r.nestSelection(n);
        if (Sn(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          e[n] = Ut(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = Ut(i, o);
      }
    }
    __name(Uu, "Uu");
    function qu(e, t, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = Mo(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (we(a))
          continue;
        Sn(a, r.nestSelection(s));
        let l = r.findField(s);
        n?.[s] && !l || (e[s] = !a);
      }
    }
    __name(qu, "qu");
    function $u(e, t) {
      let r = {}, n = t.getComputedFields(), i = Do(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (we(s))
          continue;
        let a = t.nestSelection(o);
        Sn(s, a);
        let l = t.findField(o);
        if (!(n?.[o] && !l)) {
          if (s === false || s === void 0 || we(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            l?.kind === "object" ? r[o] = Ut({}, a) : r[o] = true;
            continue;
          }
          r[o] = Ut(s, a);
        }
      }
      return r;
    }
    __name($u, "$u");
    function _o(e, t) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (rt(e)) {
        if (Pr(e))
          return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (lt(e))
        return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e))
        return Vu(e, t);
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { $type: "Bytes", value: w.Buffer.from(r, n, i).toString("base64") };
      }
      if (ju(e))
        return e.values;
      if (nt(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Ce) {
        if (e !== Or.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Ju(e))
        return e.toJSON();
      if (typeof e == "object")
        return Lo(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    __name(_o, "_o");
    function Lo(e, t) {
      if (e.$type)
        return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n], o = t.nestArgument(n);
        we(i) || (i !== void 0 ? r[n] = _o(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: Fo }));
      }
      return r;
    }
    __name(Lo, "Lo");
    function Vu(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        if (o === void 0 || we(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(_o(o, i));
      }
      return r;
    }
    __name(Vu, "Vu");
    function ju(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    __name(ju, "ju");
    function Ju(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    __name(Ju, "Ju");
    function Sn(e, t) {
      e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: Fo });
    }
    __name(Sn, "Sn");
    var Rn = /* @__PURE__ */ __name(class e {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      throwValidationError(t) {
        Mr({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType))
          return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t) {
        return this.params.previewFeatures.includes(t);
      }
      getComputedFields() {
        if (this.params.modelName)
          return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        return this.modelOrType?.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[tt(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            Pe(this.params.action, "Unknown action");
        }
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    }, "e");
    d();
    u();
    c();
    p();
    m();
    var pt = /* @__PURE__ */ __name(class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return this._engine.metrics({ format: "json", ...t });
      }
    }, "pt");
    d();
    u();
    c();
    p();
    m();
    function Bo(e) {
      return { models: In(e.models), enums: In(e.enums), types: In(e.types) };
    }
    __name(Bo, "Bo");
    function In(e) {
      let t = {};
      for (let { name: r, ...n } of e)
        t[r] = n;
      return t;
    }
    __name(In, "In");
    function Uo(e, t) {
      let r = Lt(() => Gu(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    __name(Uo, "Uo");
    function Gu(e) {
      return { datamodel: { models: On(e.models), enums: On(e.enums), types: On(e.types) } };
    }
    __name(Gu, "Gu");
    function On(e) {
      return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
    }
    __name(On, "On");
    d();
    u();
    c();
    p();
    m();
    var kn = /* @__PURE__ */ new WeakMap();
    var Lr = "$$PrismaTypedSql";
    var Dn = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        kn.set(this, { sql: t, values: r }), Object.defineProperty(this, Lr, { value: Lr });
      }
      get sql() {
        return kn.get(this).sql;
      }
      get values() {
        return kn.get(this).values;
      }
    }, "Dn");
    function qo(e) {
      return (...t) => new Dn(e, t);
    }
    __name(qo, "qo");
    function $o(e) {
      return e != null && e[Lr] === Lr;
    }
    __name($o, "$o");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    function qt(e) {
      return { ok: false, error: e, map() {
        return qt(e);
      }, flatMap() {
        return qt(e);
      } };
    }
    __name(qt, "qt");
    var Mn = /* @__PURE__ */ __name(class {
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(t) {
        return this.registeredErrors[t];
      }
      registerNewError(t) {
        let r = 0;
        for (; this.registeredErrors[r] !== void 0; )
          r++;
        return this.registeredErrors[r] = { error: t }, r;
      }
    }, "Mn");
    var Nn = /* @__PURE__ */ __name((e) => {
      let t = new Mn(), r = Ee(t, e.transactionContext.bind(e)), n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: Ee(t, e.queryRaw.bind(e)), executeRaw: Ee(t, e.executeRaw.bind(e)), provider: e.provider, transactionContext: async (...i) => (await r(...i)).map((s) => Qu(t, s)) };
      return e.getConnectionInfo && (n.getConnectionInfo = Wu(t, e.getConnectionInfo.bind(e))), n;
    }, "Nn");
    var Qu = /* @__PURE__ */ __name((e, t) => {
      let r = Ee(e, t.startTransaction.bind(t));
      return { adapterName: t.adapterName, provider: t.provider, queryRaw: Ee(e, t.queryRaw.bind(t)), executeRaw: Ee(e, t.executeRaw.bind(t)), startTransaction: async (...n) => (await r(...n)).map((o) => Hu(e, o)) };
    }, "Qu");
    var Hu = /* @__PURE__ */ __name((e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: Ee(e, t.queryRaw.bind(t)), executeRaw: Ee(e, t.executeRaw.bind(t)), commit: Ee(e, t.commit.bind(t)), rollback: Ee(e, t.rollback.bind(t)) }), "Hu");
    function Ee(e, t) {
      return async (...r) => {
        try {
          return await t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return qt({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(Ee, "Ee");
    function Wu(e, t) {
      return (...r) => {
        try {
          return t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return qt({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(Wu, "Wu");
    var sa = Le(Vo());
    var Ak = Le(jo());
    ji();
    Ai();
    $i();
    d();
    u();
    c();
    p();
    m();
    var oe = /* @__PURE__ */ __name(class e {
      constructor(t, r) {
        if (t.length - 1 !== r.length)
          throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; )
              this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else
            this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `:${r}${this.strings[r++]}`;
        return n;
      }
      get text() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `$${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    }, "e");
    function Jo(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new oe([r, ...Array(e.length - 1).fill(t), n], e);
    }
    __name(Jo, "Jo");
    function Fn(e) {
      return new oe([e], []);
    }
    __name(Fn, "Fn");
    var Go = Fn("");
    function _n(e, ...t) {
      return new oe(e, t);
    }
    __name(_n, "_n");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    function $t(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    __name($t, "$t");
    d();
    u();
    c();
    p();
    m();
    function ee(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    __name(ee, "ee");
    d();
    u();
    c();
    p();
    m();
    function qe(e) {
      let t = new he();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    __name(qe, "qe");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var Br = { enumerable: true, configurable: true, writable: true };
    function Ur(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => Br, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    __name(Ur, "Ur");
    var Qo = Symbol.for("nodejs.util.inspect.custom");
    function be(e, t) {
      let r = zu(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s))
          return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s))
          return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = Ho(Reflect.ownKeys(o), r), a = Ho(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable)
          return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? { ...Br, ...l?.getPropertyDescriptor(s) } : Br : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[Qo] = function() {
        let o = { ...this };
        return delete o[Qo], o;
      }, i;
    }
    __name(be, "be");
    function zu(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n)
          t.set(i, r);
      }
      return t;
    }
    __name(zu, "zu");
    function Ho(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    __name(Ho, "Ho");
    d();
    u();
    c();
    p();
    m();
    function mt(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    __name(mt, "mt");
    d();
    u();
    c();
    p();
    m();
    function qr(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    __name(qr, "qr");
    d();
    u();
    c();
    p();
    m();
    function Wo(e) {
      if (e === void 0)
        return "";
      let t = ut(e);
      return new it(0, { colors: Rr }).write(t).toString();
    }
    __name(Wo, "Wo");
    d();
    u();
    c();
    p();
    m();
    var Yu = "P2037";
    function $r({ error: e, user_facing_error: t }, r, n) {
      return t.error_code ? new re(Zu(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new ne(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    __name($r, "$r");
    function Zu(e, t) {
      let r = e.message;
      return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === Yu && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
    }
    __name(Zu, "Zu");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var Ln = /* @__PURE__ */ __name(class {
      getLocation() {
        return null;
      }
    }, "Ln");
    function Ne(e) {
      return typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new Ln();
    }
    __name(Ne, "Ne");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var Ko = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function dt(e = {}) {
      let t = ec(e);
      return Object.entries(t).reduce((n, [i, o]) => (Ko[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    __name(dt, "dt");
    function ec(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    __name(ec, "ec");
    function Vr(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    __name(Vr, "Vr");
    function zo(e, t) {
      let r = Vr(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: dt })(e);
    }
    __name(zo, "zo");
    d();
    u();
    c();
    p();
    m();
    function tc(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? dt({ ...r, _count: t }) : dt({ ...r, _count: { _all: true } });
    }
    __name(tc, "tc");
    function rc(e = {}) {
      return typeof e.select == "object" ? (t) => Vr(e)(t)._count : (t) => Vr(e)(t)._count._all;
    }
    __name(rc, "rc");
    function Yo(e, t) {
      return t({ action: "count", unpacker: rc(e), argsMapper: tc })(e);
    }
    __name(Yo, "Yo");
    d();
    u();
    c();
    p();
    m();
    function nc(e = {}) {
      let t = dt(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      else
        typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    __name(nc, "nc");
    function ic(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    __name(ic, "ic");
    function Zo(e, t) {
      return t({ action: "groupBy", unpacker: ic(e), argsMapper: nc })(e);
    }
    __name(Zo, "Zo");
    function Xo(e, t, r) {
      if (t === "aggregate")
        return (n) => zo(n, r);
      if (t === "count")
        return (n) => Yo(n, r);
      if (t === "groupBy")
        return (n) => Zo(n, r);
    }
    __name(Xo, "Xo");
    d();
    u();
    c();
    p();
    m();
    function es(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = gn(r, (i) => i.name);
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol")
          return i[o];
        let s = n[o];
        if (s)
          return new Dt(e, o, s.type, s.isList, s.kind === "enum");
      }, ...Ur(Object.keys(n)) });
    }
    __name(es, "es");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var ts = /* @__PURE__ */ __name((e) => Array.isArray(e) ? e : e.split("."), "ts");
    var Bn = /* @__PURE__ */ __name((e, t) => ts(t).reduce((r, n) => r && r[n], e), "Bn");
    var rs = /* @__PURE__ */ __name((e, t, r) => ts(t).reduceRight((n, i, o, s) => Object.assign({}, Bn(e, s.slice(0, o)), { [i]: n }), r), "rs");
    function oc(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    __name(oc, "oc");
    function sc(e, t, r) {
      return t === void 0 ? e ?? {} : rs(t, r, e || true);
    }
    __name(sc, "sc");
    function Un(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l, f) => ({ ...l, [f.name]: f }), {});
      return (l) => {
        let f = Ne(e._errorFormat), g = oc(n, i), h = sc(l, o, g), v = r({ dataPath: g, callsite: f })(h), S = ac(e, t);
        return new Proxy(v, { get(A, R) {
          if (!S.includes(R))
            return A[R];
          let N = [a[R].type, r, R], B = [g, h];
          return Un(e, ...N, ...B);
        }, ...Ur([...S, ...Object.getOwnPropertyNames(v)]) });
      };
    }
    __name(Un, "Un");
    function ac(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    __name(ac, "ac");
    var lc = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var uc = ["aggregate", "count", "groupBy"];
    function qn(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [cc(e, t), mc(e, t), $t(r), ee("name", () => t), ee("$name", () => t), ee("$parent", () => e._appliedParent)];
      return be({}, n);
    }
    __name(qn, "qn");
    function cc(e, t) {
      let r = ye(t), n = Object.keys(dr.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = /* @__PURE__ */ __name((a) => (l) => {
          let f = Ne(e._errorFormat);
          return e._createPrismaPromise((g) => {
            let h = { args: l, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: g, callsite: f };
            return e._request({ ...h, ...a });
          });
        }, "s");
        return lc.includes(o) ? Un(e, t, s) : pc(i) ? Xo(e, i, s) : s({});
      } };
    }
    __name(cc, "cc");
    function pc(e) {
      return uc.includes(e);
    }
    __name(pc, "pc");
    function mc(e, t) {
      return qe(ee("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return es(t, r);
      }));
    }
    __name(mc, "mc");
    d();
    u();
    c();
    p();
    m();
    function ns(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    __name(ns, "ns");
    var $n = Symbol();
    function Vt(e) {
      let t = [dc(e), ee($n, () => e), ee("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push($t(r)), be(e, t);
    }
    __name(Vt, "Vt");
    function dc(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(ye), n = [...new Set(t.concat(r))];
      return qe({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = ns(i);
        if (e._runtimeDataModel.models[o] !== void 0)
          return qn(e, o);
        if (e._runtimeDataModel.models[i] !== void 0)
          return qn(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i))
          return { enumerable: false };
      } });
    }
    __name(dc, "dc");
    function is(e) {
      return e[$n] ? e[$n] : e;
    }
    __name(is, "is");
    function os(e) {
      if (typeof e == "function")
        return e(this);
      if (e.client?.__AccelerateEngine) {
        let r = e.client.__AccelerateEngine;
        this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
      }
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return Vt(t);
    }
    __name(os, "os");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    function ss({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o)
        return e;
      let s = [], a = [];
      for (let l of Object.values(o)) {
        if (n) {
          if (n[l.name])
            continue;
          let f = l.needs.filter((g) => n[g]);
          f.length > 0 && a.push(mt(f));
        } else if (r) {
          if (!r[l.name])
            continue;
          let f = l.needs.filter((g) => !r[g]);
          f.length > 0 && a.push(mt(f));
        }
        fc(e, l.needs) && s.push(gc(l, be(e, s)));
      }
      return s.length > 0 || a.length > 0 ? be(e, [...s, ...a]) : e;
    }
    __name(ss, "ss");
    function fc(e, t) {
      return t.every((r) => fn(e, r));
    }
    __name(fc, "fc");
    function gc(e, t) {
      return qe(ee(e.name, () => e.compute(t)));
    }
    __name(gc, "gc");
    d();
    u();
    c();
    p();
    m();
    function jr({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++)
          t[s] = jr({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && as({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && as({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    __name(jr, "jr");
    function as({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null || we(s))
          continue;
        let l = n.models[r].fields.find((g) => g.name === o);
        if (!l || l.kind !== "object" || !l.relationName)
          continue;
        let f = typeof s == "object" ? s : {};
        t[o] = jr({ visitor: i, result: t[o], args: f, modelName: l.type, runtimeDataModel: n });
      }
    }
    __name(as, "as");
    function ls({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : jr({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, l, f) => {
        let g = ye(l);
        return ss({ result: a, modelName: g, select: f.select, omit: f.select ? void 0 : { ...o?.[g], ...f.omit }, extensions: n });
      } });
    }
    __name(ls, "ls");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    function us(e) {
      if (e instanceof oe)
        return hc(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++)
          r[n] = jt(e[n]);
        return r;
      }
      let t = {};
      for (let r in e)
        t[r] = jt(e[r]);
      return t;
    }
    __name(us, "us");
    function hc(e) {
      return new oe(e.strings, e.values);
    }
    __name(hc, "hc");
    function jt(e) {
      if (typeof e != "object" || e == null || e instanceof Ce || lt(e))
        return e;
      if (nt(e))
        return new fe(e.toFixed());
      if (rt(e))
        return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e))
        return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; )
          r[t] = jt(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e)
          r === "__proto__" ? Object.defineProperty(t, r, { value: jt(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = jt(e[r]);
        return t;
      }
      Pe(e, "Unknown value");
    }
    __name(jt, "jt");
    function ps(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: us(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = gs(o, l), a.args = s, ps(e, a, r, n + 1);
        } });
      });
    }
    __name(ps, "ps");
    function ms(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return ps(e, t, s);
    }
    __name(ms, "ms");
    function ds(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? fs(r, n, 0, e) : e(r);
      };
    }
    __name(ds, "ds");
    function fs(e, t, r, n) {
      if (r === t.length)
        return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = gs(i, l), fs(a, t, r + 1, n);
      } });
    }
    __name(fs, "fs");
    var cs = /* @__PURE__ */ __name((e) => e, "cs");
    function gs(e = cs, t = cs) {
      return (r) => e(t(r));
    }
    __name(gs, "gs");
    d();
    u();
    c();
    p();
    m();
    var hs = X("prisma:client");
    var ys = { Vercel: "vercel", "Netlify CI": "netlify" };
    function ws({ postinstall: e, ciName: t, clientVersion: r }) {
      if (hs("checkPlatformCaching:postinstall", e), hs("checkPlatformCaching:ciName", t), e === true && t && t in ys) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ys[t]}-build`;
        throw console.error(n), new G(n, r);
      }
    }
    __name(ws, "ws");
    d();
    u();
    c();
    p();
    m();
    function Es(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    __name(Es, "Es");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var yc = "Cloudflare-Workers";
    var wc = "node";
    function bs() {
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === yc ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === wc ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    __name(bs, "bs");
    var Ec = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function Jr() {
      let e = bs();
      return { id: e, prettyName: Ec[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    __name(Jr, "Jr");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    function ft({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0)
        throw Jr().id === "workerd" ? new G(`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n) : new G(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0)
        throw new G("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    __name(ft, "ft");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var Gr = /* @__PURE__ */ __name(class extends Error {
      constructor(t, r) {
        super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    }, "Gr");
    var se = /* @__PURE__ */ __name(class extends Gr {
      constructor(t, r) {
        super(t, r), this.isRetryable = r.isRetryable ?? true;
      }
    }, "se");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    function L(e, t) {
      return { ...e, isRetryable: t };
    }
    __name(L, "L");
    var gt = /* @__PURE__ */ __name(class extends se {
      constructor(r) {
        super("This request must be retried", L(r, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    }, "gt");
    _(gt, "ForcedRetryError");
    d();
    u();
    c();
    p();
    m();
    var $e = /* @__PURE__ */ __name(class extends se {
      constructor(r, n) {
        super(r, L(n, false));
        this.name = "InvalidDatasourceError";
        this.code = "P6001";
      }
    }, "$e");
    _($e, "InvalidDatasourceError");
    d();
    u();
    c();
    p();
    m();
    var Ve = /* @__PURE__ */ __name(class extends se {
      constructor(r, n) {
        super(r, L(n, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    }, "Ve");
    _(Ve, "NotImplementedYetError");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var j = /* @__PURE__ */ __name(class extends se {
      constructor(t, r) {
        super(t, r), this.response = r.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let i = `(The request id was: ${n})`;
          this.message = this.message + " " + i;
        }
      }
    }, "j");
    var je = /* @__PURE__ */ __name(class extends j {
      constructor(r) {
        super("Schema needs to be uploaded", L(r, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    }, "je");
    _(je, "SchemaMissingError");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var Vn = "This request could not be understood by the server";
    var Jt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n, i) {
        super(n || Vn, L(r, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        i && (this.code = i);
      }
    }, "Jt");
    _(Jt, "BadRequestError");
    d();
    u();
    c();
    p();
    m();
    var Gt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n) {
        super("Engine not started: healthcheck timeout", L(r, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n;
      }
    }, "Gt");
    _(Gt, "HealthcheckTimeoutError");
    d();
    u();
    c();
    p();
    m();
    var Qt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n, i) {
        super(n, L(r, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i;
      }
    }, "Qt");
    _(Qt, "EngineStartupError");
    d();
    u();
    c();
    p();
    m();
    var Ht = /* @__PURE__ */ __name(class extends j {
      constructor(r) {
        super("Engine version is not supported", L(r, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    }, "Ht");
    _(Ht, "EngineVersionNotSupportedError");
    d();
    u();
    c();
    p();
    m();
    var jn = "Request timed out";
    var Wt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = jn) {
        super(n, L(r, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    }, "Wt");
    _(Wt, "GatewayTimeoutError");
    d();
    u();
    c();
    p();
    m();
    var bc = "Interactive transaction error";
    var Kt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = bc) {
        super(n, L(r, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    }, "Kt");
    _(Kt, "InteractiveTransactionError");
    d();
    u();
    c();
    p();
    m();
    var xc = "Request parameters are invalid";
    var zt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = xc) {
        super(n, L(r, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    }, "zt");
    _(zt, "InvalidRequestError");
    d();
    u();
    c();
    p();
    m();
    var Jn = "Requested resource does not exist";
    var Yt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = Jn) {
        super(n, L(r, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    }, "Yt");
    _(Yt, "NotFoundError");
    d();
    u();
    c();
    p();
    m();
    var Gn = "Unknown server error";
    var ht = /* @__PURE__ */ __name(class extends j {
      constructor(r, n, i) {
        super(n || Gn, L(r, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i;
      }
    }, "ht");
    _(ht, "ServerError");
    d();
    u();
    c();
    p();
    m();
    var Qn = "Unauthorized, check your connection string";
    var Zt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = Qn) {
        super(n, L(r, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    }, "Zt");
    _(Zt, "UnauthorizedError");
    d();
    u();
    c();
    p();
    m();
    var Hn = "Usage exceeded, retry again later";
    var Xt = /* @__PURE__ */ __name(class extends j {
      constructor(r, n = Hn) {
        super(n, L(r, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    }, "Xt");
    _(Xt, "UsageExceededError");
    async function Pc(e) {
      let t;
      try {
        t = await e.text();
      } catch {
        return { type: "EmptyError" };
      }
      try {
        let r = JSON.parse(t);
        if (typeof r == "string")
          switch (r) {
            case "InternalDataProxyError":
              return { type: "DataProxyError", body: r };
            default:
              return { type: "UnknownTextError", body: r };
          }
        if (typeof r == "object" && r !== null) {
          if ("is_panic" in r && "message" in r && "error_code" in r)
            return { type: "QueryEngineError", body: r };
          if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
            let n = Object.values(r)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
          }
        }
        return { type: "UnknownJsonError", body: r };
      } catch {
        return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
      }
    }
    __name(Pc, "Pc");
    async function er(e, t) {
      if (e.ok)
        return;
      let r = { clientVersion: t, response: e }, n = await Pc(e);
      if (n.type === "QueryEngineError")
        throw new re(n.body.message, { code: n.body.error_code, clientVersion: t });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError")
          throw new ht(r, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing")
            return new je(r);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
            throw new Ht(r);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new Qt(r, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new G(i, t, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new Gt(r, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new Kt(r, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body)
          throw new zt(r, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403)
        throw new Zt(r, yt(Qn, n));
      if (e.status === 404)
        return new Yt(r, yt(Jn, n));
      if (e.status === 429)
        throw new Xt(r, yt(Hn, n));
      if (e.status === 504)
        throw new Wt(r, yt(jn, n));
      if (e.status >= 500)
        throw new ht(r, yt(Gn, n));
      if (e.status >= 400)
        throw new Jt(r, yt(Vn, n));
    }
    __name(er, "er");
    function yt(e, t) {
      return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
    }
    __name(yt, "yt");
    d();
    u();
    c();
    p();
    m();
    function xs(e) {
      let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    __name(xs, "xs");
    d();
    u();
    c();
    p();
    m();
    var Ae = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function Ps(e) {
      let t = new TextEncoder().encode(e), r = "", n = t.byteLength, i = n % 3, o = n - i, s, a, l, f, g;
      for (let h = 0; h < o; h = h + 3)
        g = t[h] << 16 | t[h + 1] << 8 | t[h + 2], s = (g & 16515072) >> 18, a = (g & 258048) >> 12, l = (g & 4032) >> 6, f = g & 63, r += Ae[s] + Ae[a] + Ae[l] + Ae[f];
      return i == 1 ? (g = t[o], s = (g & 252) >> 2, a = (g & 3) << 4, r += Ae[s] + Ae[a] + "==") : i == 2 && (g = t[o] << 8 | t[o + 1], s = (g & 64512) >> 10, a = (g & 1008) >> 4, l = (g & 15) << 2, r += Ae[s] + Ae[a] + Ae[l] + "="), r;
    }
    __name(Ps, "Ps");
    d();
    u();
    c();
    p();
    m();
    function vs(e) {
      if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics")))
        throw new G("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    __name(vs, "vs");
    d();
    u();
    c();
    p();
    m();
    function vc(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    __name(vc, "vc");
    function Ts(e) {
      return new Date(vc(e));
    }
    __name(Ts, "Ts");
    d();
    u();
    c();
    p();
    m();
    var Cs = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.23.0-27.5dbef10bdbfb579e07d35cc85fb1518d357cb99e", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var tr = /* @__PURE__ */ __name(class extends se {
      constructor(r, n) {
        super(`Cannot fetch data from service:
${r}`, L(n, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    }, "tr");
    _(tr, "RequestError");
    async function Je(e, t, r = (n) => n) {
      let { clientVersion: n, ...i } = t, o = r(fetch);
      try {
        return await o(e, i);
      } catch (s) {
        let a = s.message ?? "Unknown error";
        throw new tr(a, { clientVersion: n, cause: s });
      }
    }
    __name(Je, "Je");
    var Cc = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var As = X("prisma:client:dataproxyEngine");
    async function Ac(e, t) {
      let r = Cs["@prisma/engines-version"], n = t.clientVersion ?? "unknown";
      if (y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
        return y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
        return n;
      let [i, o] = n?.split("-") ?? [];
      if (o === void 0 && Cc.test(i))
        return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
          return "0.0.0";
        let [s] = r.split("-") ?? [], [a, l, f] = s.split("."), g = Rc(`<=${a}.${l}.${f}`), h = await Je(g, { clientVersion: n });
        if (!h.ok)
          throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${h.status} ${h.statusText}, response body: ${await h.text() || "<empty body>"}`);
        let v = await h.text();
        As("length of body fetched from unpkg.com", v.length);
        let S;
        try {
          S = JSON.parse(v);
        } catch (A) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", v), A;
        }
        return S.version;
      }
      throw new Ve("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    __name(Ac, "Ac");
    async function Rs(e, t) {
      let r = await Ac(e, t);
      return As("version", r), r;
    }
    __name(Rs, "Rs");
    function Rc(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    __name(Rc, "Rc");
    var Ss = 3;
    var Wn = X("prisma:client:dataproxyEngine");
    var Kn = /* @__PURE__ */ __name(class {
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t, interactiveTransaction: r } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    }, "Kn");
    var rr = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.name = "DataProxyEngine";
        vs(t), this.config = t, this.env = { ...t.env, ...typeof y < "u" ? y.env : {} }, this.inlineSchema = Ps(t.inlineSchema), this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = t.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let [t, r] = this.extractHostAndApiKey();
          this.host = t, this.headerBuilder = new Kn({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Rs(t, this.config), Wn("host", this.host);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(t) {
        t?.logs?.length && t.logs.forEach((r) => {
          switch (r.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let n = typeof r.attributes.query == "string" ? r.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [i] = n.split("/* traceparent");
                n = i;
              }
              this.logEmitter.emit("query", { query: n, timestamp: Ts(r.timestamp), duration: Number(r.attributes.duration_ms), params: r.attributes.params, target: r.attributes.target });
            }
          }
        }), t?.traces?.length && this.tracingHelper.createEngineSpan({ span: true, spans: t.traces });
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(t) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
      }
      async uploadSchema() {
        let t = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(t, async () => {
          let r = await Je(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          r.ok || Wn("schema response status", r.status);
          let n = await er(r, this.clientVersion);
          if (n)
            throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
      }
      async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
        let o = n?.kind === "itx" ? n.options : void 0, s = qr(t, n);
        return (await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r })).map((l) => (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l ? this.convertProtocolErrorsToClientError(l.errors) : l));
      }
      requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
          let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
          o(s);
          let a = await Je(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
          a.ok || Wn("graphql response status", a.status), await this.handleError(await er(a, this.clientVersion));
          let l = await a.json();
          if (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l)
            throw this.convertProtocolErrorsToClientError(l.errors);
          return "batchResult" in l ? l.batchResult : l;
        } });
      }
      async transaction(t, r, n) {
        let i = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: async ({ logHttpCall: o }) => {
          if (t === "start") {
            let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
            o(a);
            let l = await Je(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
            await this.handleError(await er(l, this.clientVersion));
            let f = await l.json(), { extensions: g } = f;
            g && this.propagateResponseExtensions(g);
            let h = f.id, v = f["data-proxy"].endpoint;
            return { id: h, payload: { endpoint: v } };
          } else {
            let s = `${n.payload.endpoint}/${t}`;
            o(s);
            let a = await Je(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await er(a, this.clientVersion));
            let l = await a.json(), { extensions: f } = l;
            f && this.propagateResponseExtensions(f);
            return;
          }
        } });
      }
      extractHostAndApiKey() {
        let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = ft({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
        try {
          i = new URL(n);
        } catch {
          throw new $e(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        }
        let { protocol: o, host: s, searchParams: a } = i;
        if (o !== "prisma:" && o !== "prisma+postgres:")
          throw new $e(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        let l = a.get("api_key");
        if (l === null || l.length < 1)
          throw new $e(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
        return [s, l];
      }
      metrics() {
        throw new Ve("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(t) {
        for (let r = 0; ; r++) {
          let n = /* @__PURE__ */ __name((i) => {
            this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }, "n");
          try {
            return await t.callback({ logHttpCall: n });
          } catch (i) {
            if (!(i instanceof se) || !i.isRetryable)
              throw i;
            if (r >= Ss)
              throw i instanceof gt ? i.cause : i;
            this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${Ss} failed for ${t.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let o = await xs(r);
            this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(t) {
        if (t instanceof je)
          throw await this.uploadSchema(), new gt({ clientVersion: this.clientVersion, cause: t });
        if (t)
          throw t;
      }
      convertProtocolErrorsToClientError(t) {
        return t.length === 1 ? $r(t[0], this.config.clientVersion, this.config.activeProvider) : new ne(JSON.stringify(t), { clientVersion: this.config.clientVersion });
      }
      applyPendingMigrations() {
        throw new Error("Method not implemented.");
      }
    }, "rr");
    function Is({ copyEngine: e = true }, t) {
      let r;
      try {
        r = ft({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...y.env }, clientVersion: t.clientVersion });
      } catch {
      }
      let n = !!(r?.startsWith("prisma://") || r?.startsWith("prisma+postgres://"));
      e && n && Rt("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let i = Tt(t.generator), o = n || !e, s = !!t.adapter, a = i === "library", l = i === "binary";
      if (o && s || s) {
        let f;
        throw f = ["Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.", "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor."], new Y(f.join(`
`), { clientVersion: t.clientVersion });
      }
      if (o)
        return new rr(t);
      throw new Y("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
    }
    __name(Is, "Is");
    d();
    u();
    c();
    p();
    m();
    function Qr({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    __name(Qr, "Qr");
    d();
    u();
    c();
    p();
    m();
    var Os = /* @__PURE__ */ __name((e) => ({ command: e }), "Os");
    d();
    u();
    c();
    p();
    m();
    d();
    u();
    c();
    p();
    m();
    var ks = /* @__PURE__ */ __name((e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`), "ks");
    d();
    u();
    c();
    p();
    m();
    function wt(e) {
      try {
        return Ds(e, "fast");
      } catch {
        return Ds(e, "slow");
      }
    }
    __name(wt, "wt");
    function Ds(e, t) {
      return JSON.stringify(e.map((r) => Ns(r, t)));
    }
    __name(Ds, "Ds");
    function Ns(e, t) {
      if (Array.isArray(e))
        return e.map((r) => Ns(r, t));
      if (typeof e == "bigint")
        return { prisma__type: "bigint", prisma__value: e.toString() };
      if (rt(e))
        return { prisma__type: "date", prisma__value: e.toJSON() };
      if (fe.isDecimal(e))
        return { prisma__type: "decimal", prisma__value: e.toJSON() };
      if (w.Buffer.isBuffer(e))
        return { prisma__type: "bytes", prisma__value: e.toString("base64") };
      if (Sc(e))
        return { prisma__type: "bytes", prisma__value: w.Buffer.from(e).toString("base64") };
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { prisma__type: "bytes", prisma__value: w.Buffer.from(r, n, i).toString("base64") };
      }
      return typeof e == "object" && t === "slow" ? Fs(e) : e;
    }
    __name(Ns, "Ns");
    function Sc(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    __name(Sc, "Sc");
    function Fs(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(Ms);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = Ms(e[r]);
      return t;
    }
    __name(Fs, "Fs");
    function Ms(e) {
      return typeof e == "bigint" ? e.toString() : Fs(e);
    }
    __name(Ms, "Ms");
    d();
    u();
    c();
    p();
    m();
    var Ic = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var _s = Ic;
    var Oc = /^(\s*alter\s)/i;
    var Ls = X("prisma:client");
    function zn(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Oc.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    __name(zn, "zn");
    var Yn = /* @__PURE__ */ __name(({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if ($o(r))
        n = r.sql, i = { values: wt(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: wt(s || []), __prismaRawParameters__: true };
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            n = r.sql, i = { values: wt(r.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            n = r.text, i = { values: wt(r.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            n = ks(r), i = { values: wt(r.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return i?.values ? Ls(`prisma.${e}(${n}, ${i.values})`) : Ls(`prisma.${e}(${n})`), { query: n, parameters: i };
    }, "Yn");
    var Bs = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new oe(t, r);
    } };
    var Us = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    d();
    u();
    c();
    p();
    m();
    function Zn(e) {
      return function(r) {
        let n, i = /* @__PURE__ */ __name((o = e) => {
          try {
            return o === void 0 || o?.kind === "itx" ? n ??= qs(r(o)) : qs(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        }, "i");
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    __name(Zn, "Zn");
    function qs(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    __name(qs, "qs");
    d();
    u();
    c();
    p();
    m();
    var $s = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var Xn = /* @__PURE__ */ __name(class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      createEngineSpan(t) {
        return this.getGlobalTracingHelper().createEngineSpan(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        return globalThis.PRISMA_INSTRUMENTATION?.helper ?? $s;
      }
    }, "Xn");
    function Vs(e) {
      return e.includes("tracing") ? new Xn() : $s;
    }
    __name(Vs, "Vs");
    d();
    u();
    c();
    p();
    m();
    function js(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    __name(js, "js");
    d();
    u();
    c();
    p();
    m();
    function Js(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    __name(Js, "Js");
    d();
    u();
    c();
    p();
    m();
    var Hr = /* @__PURE__ */ __name(class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    }, "Hr");
    d();
    u();
    c();
    p();
    m();
    var Hs = Le(zi());
    d();
    u();
    c();
    p();
    m();
    function Wr(e) {
      return typeof e.batchRequestIdx == "number";
    }
    __name(Wr, "Wr");
    d();
    u();
    c();
    p();
    m();
    function Gs(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
        return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(ei(e.query.arguments)), t.push(ei(e.query.selection)), t.join("");
    }
    __name(Gs, "Gs");
    function ei(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${ei(n)})` : r;
      }).join(" ")})`;
    }
    __name(ei, "ei");
    d();
    u();
    c();
    p();
    m();
    var kc = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function ti(e) {
      return kc[e];
    }
    __name(ti, "ti");
    d();
    u();
    c();
    p();
    m();
    var Kr = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, y.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error)
              for (let i = 0; i < r.length; i++)
                r[i].reject(n);
            else
              for (let i = 0; i < r.length; i++) {
                let o = n[i];
                o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
              }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++)
              r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    }, "Kr");
    d();
    u();
    c();
    p();
    m();
    function Ge(e, t) {
      if (t === null)
        return t;
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = w.Buffer.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "decimal":
          return new fe(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "bigint-array":
          return t.map((r) => Ge("bigint", r));
        case "bytes-array":
          return t.map((r) => Ge("bytes", r));
        case "decimal-array":
          return t.map((r) => Ge("decimal", r));
        case "datetime-array":
          return t.map((r) => Ge("datetime", r));
        case "date-array":
          return t.map((r) => Ge("date", r));
        case "time-array":
          return t.map((r) => Ge("time", r));
        default:
          return t;
      }
    }
    __name(Ge, "Ge");
    function Qs(e) {
      let t = [], r = Dc(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++)
          o[e.columns[s]] = Ge(e.types[s], i[s]);
        t.push(o);
      }
      return t;
    }
    __name(Qs, "Qs");
    function Dc(e) {
      let t = {};
      for (let r = 0; r < e.columns.length; r++)
        t[e.columns[r]] = null;
      return t;
    }
    __name(Dc, "Dc");
    var Mc = X("prisma:client:request_handler");
    var zr = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new Kr({ batchLoader: ds(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((h) => h.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), f = n.some((h) => ti(h.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Nc(o), containsWrite: f, customDataProxyFetch: i })).map((h, v) => {
            if (h instanceof Error)
              return h;
            try {
              return this.mapQueryEngineResult(n[v], h);
            } catch (S) {
              return S;
            }
          });
        }), singleLoader: async (n) => {
          let i = n.transaction?.kind === "itx" ? Ws(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: ti(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : Gs(n.protocolQuery), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n?.data, o = this.unpack(i, t, r);
        return y.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (Mc(t), Fc(t, i))
          throw t;
        if (t instanceof re && _c(t)) {
          let f = Ks(t.meta);
          Mr({ args: o, errors: [f], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let l = t.message;
        if (n && (l = vr({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t.code) {
          let f = s ? { modelName: s, ...t.meta } : t.meta;
          throw new re(l, { code: t.code, clientVersion: this.client._clientVersion, meta: f, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic)
            throw new ve(l, this.client._clientVersion);
          if (t instanceof ne)
            throw new ne(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof G)
            throw new G(l, this.client._clientVersion);
          if (t instanceof ve)
            throw new ve(l, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Hs.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t))
          return t;
        let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((f) => f !== "select" && f !== "include"), a = Bn(o, s), l = i === "queryRaw" ? Qs(a) : et(a);
        return n ? n(l) : l;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    }, "zr");
    function Nc(e) {
      if (e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: Ws(e) };
        Pe(e, "Unknown transaction kind");
      }
    }
    __name(Nc, "Nc");
    function Ws(e) {
      return { id: e.id, payload: e.payload };
    }
    __name(Ws, "Ws");
    function Fc(e, t) {
      return Wr(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    __name(Fc, "Fc");
    function _c(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    __name(_c, "_c");
    function Ks(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(Ks) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    __name(Ks, "Ks");
    d();
    u();
    c();
    p();
    m();
    var zs = "6.0.1";
    var Ys = zs;
    d();
    u();
    c();
    p();
    m();
    var ra = Le(vn());
    d();
    u();
    c();
    p();
    m();
    var U = /* @__PURE__ */ __name(class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    }, "U");
    _(U, "PrismaClientConstructorValidationError");
    var Zs = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
    var Xs = ["pretty", "colorless", "minimal"];
    var ea = ["info", "query", "warn", "error"];
    var Bc = { datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new U(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = Et(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new U(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new U(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, adapter: (e, t) => {
      if (e === null)
        return;
      if (e === void 0)
        throw new U('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!Qr(t).includes("driverAdapters"))
        throw new U('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (Tt() === "binary")
        throw new U('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string")
        throw new U(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new U(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!Xs.includes(e)) {
          let t = Et(e, Xs);
          throw new U(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new U(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !ea.includes(r)) {
          let n = Et(r, ea);
          throw new U(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      __name(t, "t");
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = Et(i, o);
            throw new U(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i])
              n[i](o);
            else
              throw new U(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, transactionOptions: (e) => {
      if (!e)
        return;
      let t = e.maxWait;
      if (t != null && t <= 0)
        throw new U(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0)
        throw new U(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, omit: (e, t) => {
      if (typeof e != "object")
        throw new U('"omit" option is expected to be an object.');
      if (e === null)
        throw new U('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = qc(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find((f) => f.name === s);
          if (!l) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (l.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0)
        throw new U($c(e, r));
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object")
        throw new U(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = Et(r, t);
          throw new U(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    } };
    function na(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!Zs.includes(r)) {
          let i = Et(r, Zs);
          throw new U(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Bc[r](n, t);
      }
      if (e.datasourceUrl && e.datasources)
        throw new U('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    __name(na, "na");
    function Et(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = Uc(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    __name(Et, "Et");
    function Uc(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((i) => ({ value: i, distance: (0, ra.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    __name(Uc, "Uc");
    function qc(e, t) {
      return ta(t.models, e) ?? ta(t.types, e);
    }
    __name(qc, "qc");
    function ta(e, t) {
      let r = Object.keys(e).find((n) => tt(n) === t);
      if (r)
        return e[r];
    }
    __name(ta, "ta");
    function $c(e, t) {
      let r = ut(e);
      for (let o of t)
        switch (o.kind) {
          case "UnknownModel":
            r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
            break;
          case "UnknownField":
            r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
            break;
          case "RelationInOmit":
            r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
            break;
          case "InvalidFieldValue":
            r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
            break;
        }
      let { message: n, args: i } = Dr(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    __name($c, "$c");
    d();
    u();
    c();
    p();
    m();
    function ia(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = /* @__PURE__ */ __name(() => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, "a"), l = /* @__PURE__ */ __name((f) => {
          o || (o = true, r(f));
        }, "l");
        for (let f = 0; f < e.length; f++)
          e[f].then((g) => {
            n[f] = g, a();
          }, (g) => {
            if (!Wr(g)) {
              l(g);
              return;
            }
            g.batchRequestIdx === f ? l(g) : (i || (i = g), a());
          });
      });
    }
    __name(ia, "ia");
    var Fe = X("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Vc = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var jc = Symbol.for("prisma.client.transaction.id");
    var Jc = { id: 0, nextId() {
      return ++this.id;
    } };
    function aa(e) {
      class t {
        constructor(n) {
          this._originalClient = this;
          this._middlewares = new Hr();
          this._createPrismaPromise = Zn();
          this.$extends = os;
          e = n?.__internal?.configOverride?.(e) ?? e, ws(e), n && na(n, e);
          let i = new fr().on("error", () => {
          });
          this._extensions = ct.empty(), this._previewFeatures = Qr(e), this._clientVersion = e.clientVersion ?? Ys, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Vs(this._previewFeatures);
          let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && vt.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && vt.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
          if (n?.adapter) {
            s = Nn(n.adapter);
            let l = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
            if (s.provider !== l)
              throw new G(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
            if (n.datasources || n.datasourceUrl !== void 0)
              throw new G("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
          }
          let a = e.injectableEdgeEnv?.();
          try {
            let l = n ?? {}, f = l.__internal ?? {}, g = f.debug === true;
            g && X.enable("prisma:client");
            let h = vt.resolve(e.dirname, e.relativePath);
            Ci.existsSync(h) || (h = e.dirname), Fe("dirname", e.dirname), Fe("relativePath", e.relativePath), Fe("cwd", h);
            let v = f.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : y.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : y.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: h, dirname: e.dirname, enableDebugLogs: g, allowTriggerPanic: v.allowTriggerPanic, datamodelPath: vt.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: v.binaryPath ?? void 0, engineEndpoint: v.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && Js(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((S) => typeof S == "string" ? S === "query" : S.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Es(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2e3, timeout: l.transactionOptions?.timeout ?? 5e3, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: ft, getBatchRequestPayload: qr, prismaGraphQLToJSError: $r, PrismaClientUnknownRequestError: ne, PrismaClientInitializationError: G, PrismaClientKnownRequestError: re, debug: X("prisma:client:accelerateEngine"), engineVersion: sa.version, clientVersion: e.clientVersion } }, Fe("clientVersion", e.clientVersion), this._engine = Is(e, this._engineConfig), this._requestHandler = new zr(this, i), l.log)
              for (let S of l.log) {
                let A = typeof S == "string" ? S : S.emit === "stdout" ? S.level : null;
                A && this.$on(A, (R) => {
                  At.log(`${At.tags[A] ?? ""}`, R.message || R.query);
                });
              }
            this._metrics = new pt(this._engine);
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = Vt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Ui();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Yn({ clientMethod: i, activeProvider: a }), callsite: Ne(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = oa(n, i);
              return zn(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new Y("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (zn(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new Y(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Os, callsite: Ne(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Yn({ clientMethod: i, activeProvider: a }), callsite: Ne(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(o, "$queryRaw", ...oa(n, i));
            throw new Y("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql"))
              throw new Y("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Jc.nextId(), s = js(n.length), a = n.map((l, f) => {
            if (l?.[Symbol.toStringTag] !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let g = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, h = { kind: "batch", id: o, index: f, isolationLevel: g, lock: s };
            return l.requestTransaction?.(h) ?? l;
          });
          return ia(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
          try {
            let f = { kind: "itx", ...a };
            l = await n(this._createItxClient(f)), await this._engine.transaction("commit", o, a);
          } catch (f) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), f;
          }
          return l;
        }
        _createItxClient(n) {
          return Vt(be(is(this), [ee("_appliedParent", () => this._appliedParent._createItxClient(n)), ee("_createPrismaPromise", () => Zn(n)), ee(jc, () => n.id), mt(_s)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = /* @__PURE__ */ __name(() => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          }, "o") : o = /* @__PURE__ */ __name(() => this._transactionWithCallback({ callback: n, options: i }), "o") : o = /* @__PURE__ */ __name(() => this._transactionWithArray({ promises: n, options: i }), "o");
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? Vc, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = /* @__PURE__ */ __name(async (f) => {
            let g = this._middlewares.get(++a);
            if (g)
              return this._tracingHelper.runInChildSpan(s.middleware, (M) => g(f, (N) => (M?.end(), l(N))));
            let { runInTransaction: h, args: v, ...S } = f, A = { ...n, ...S };
            v && (A.args = i.middlewareArgsToRequestArgs(v)), n.transaction !== void 0 && h === false && delete A.transaction;
            let R = await ms(this, A);
            return A.model ? ls({ result: R, modelName: A.model, args: A.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : R;
          }, "l");
          return this._tracingHelper.runInChildSpan(s.operation, () => l(o));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: f, transaction: g, unpacker: h, otelParentCtx: v, customDataProxyFetch: S }) {
          try {
            n = f ? f(n) : n;
            let A = { name: "serialize" }, R = this._tracingHelper.runInChildSpan(A, () => _r({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return X.enabled("prisma:client") && (Fe("Prisma Client call:"), Fe(`prisma.${i}(${Wo(n)})`), Fe("Generated request:"), Fe(JSON.stringify(R, null, 2) + `
`)), g?.kind === "batch" && await g.lock, this._requestHandler.request({ protocolQuery: R, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: g, unpacker: h, otelParentCtx: v, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: S });
          } catch (A) {
            throw A.clientVersion = this._clientVersion, A;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new Y("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
      }
      __name(t, "t");
      return t;
    }
    __name(aa, "aa");
    function oa(e, t) {
      return Gc(e) ? [new oe(e, t), Bs] : [e, Us];
    }
    __name(oa, "oa");
    function Gc(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    __name(Gc, "Gc");
    d();
    u();
    c();
    p();
    m();
    var Qc = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function la(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!Qc.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    __name(la, "la");
    d();
    u();
    c();
    p();
    m();
  }
});

// node_modules/.prisma/client/edge.js
var require_edge2 = __commonJS({
  "node_modules/.prisma/client/edge.js"(exports) {
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw3,
      skip: skip2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2
    } = require_edge();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "6.0.1",
      engine: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw3;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      name: "name",
      email: "email",
      password: "password"
    };
    exports.Prisma.PostScalarFieldEnum = {
      id: "id",
      authorId: "authorId",
      title: "title",
      content: "content",
      published: "published"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.ModelName = {
      User: "User",
      Post: "Post"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "/Users/arujgarg/Desktop/dev/medium-project/backend/node_modules/@prisma/client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "darwin-arm64",
            "native": true
          }
        ],
        "previewFeatures": [],
        "sourceFilePath": "/Users/arujgarg/Desktop/dev/medium-project/backend/prisma/schema.prisma"
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../prisma",
      "clientVersion": "6.0.1",
      "engineVersion": "5dbef10bdbfb579e07d35cc85fb1518d357cb99e",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "postinstall": true,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": 'generator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id       Int     @id @default(autoincrement())\n  name     String?\n  email    String  @unique\n  password String\n  posts    Post[]\n}\n\nmodel Post {\n  id        Int     @id @default(autoincrement())\n  authorId  Int\n  title     String\n  content   String\n  published Boolean @default(false)\n  author    User    @relation(fields: [authorId], references: [id])\n}\n',
      "inlineSchemaHash": "0389fa5184cf28c81f1a0d9fb986ecc8c2270c95f135691ccaddafc21050d68b",
      "copyEngine": true
    };
    config.dirname = "/";
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","nativeType":null,"relationName":"PostToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Post":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"published","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"author","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"PostToUser","relationFromFields":["authorId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config.runtimeDataModel);
    config.engineWasm = void 0;
    config.injectableEdgeEnv = () => ({
      parsed: {
        DATABASE_URL: typeof globalThis !== "undefined" && globalThis["DATABASE_URL"] || typeof process !== "undefined" && process.env && process.env.DATABASE_URL || void 0
      }
    });
    if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0) {
      Debug2.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0);
    }
    var PrismaClient3 = getPrismaClient2(config);
    exports.PrismaClient = PrismaClient3;
    Object.assign(exports, Prisma);
  }
});

// node_modules/@prisma/client/edge.js
var require_edge3 = __commonJS({
  "node_modules/@prisma/client/edge.js"(exports, module) {
    init_modules_watch_stub();
    module.exports = {
      // https://github.com/prisma/prisma/pull/12907
      ...require_edge2()
    };
  }
});

// node_modules/@prisma/client/scripts/default-index.js
var require_default_index = __commonJS({
  "node_modules/@prisma/client/scripts/default-index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var default_index_exports = {};
    __export(default_index_exports, {
      Prisma: () => Prisma,
      PrismaClient: () => PrismaClient3,
      default: () => default_index_default
    });
    module.exports = __toCommonJS(default_index_exports);
    var prisma = {
      enginesVersion: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
    };
    var version = "6.0.1";
    var clientVersion = version;
    var PrismaClient3 = /* @__PURE__ */ __name(class {
      constructor() {
        throw new Error('@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.');
      }
    }, "PrismaClient");
    function defineExtension(ext) {
      if (typeof ext === "function") {
        return ext;
      }
      return (client) => client.$extends(ext);
    }
    __name(defineExtension, "defineExtension");
    function getExtensionContext(that) {
      return that;
    }
    __name(getExtensionContext, "getExtensionContext");
    var Prisma = {
      defineExtension,
      getExtensionContext,
      prismaVersion: { client: clientVersion, engine: prisma.enginesVersion }
    };
    var default_index_default = { Prisma };
  }
});

// .wrangler/tmp/bundle-pXN9ux/middleware-loader.entry.ts
init_modules_watch_stub();

// .wrangler/tmp/bundle-pXN9ux/middleware-insertion-facade.js
init_modules_watch_stub();

// src/index.ts
init_modules_watch_stub();

// node_modules/hono/dist/index.js
init_modules_watch_stub();

// node_modules/hono/dist/hono.js
init_modules_watch_stub();

// node_modules/hono/dist/hono-base.js
init_modules_watch_stub();

// node_modules/hono/dist/compose.js
init_modules_watch_stub();

// node_modules/hono/dist/context.js
init_modules_watch_stub();

// node_modules/hono/dist/request.js
init_modules_watch_stub();

// node_modules/hono/dist/utils/body.js
init_modules_watch_stub();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// node_modules/hono/dist/utils/url.js
init_modules_watch_stub();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p.at(-1) === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? decodeURIComponent_(value) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = /* @__PURE__ */ __name(class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : void 0;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw3 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw3[key]();
  };
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
}, "HonoRequest");

// node_modules/hono/dist/utils/html.js
init_modules_watch_stub();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = /* @__PURE__ */ __name((headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
}, "setHeaders");
var Context = /* @__PURE__ */ __name(class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      try {
        for (const [k, v] of this.#res.headers.entries()) {
          if (k === "content-type") {
            continue;
          }
          if (k === "set-cookie") {
            const cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (const cookie of cookies) {
              _res.headers.append("set-cookie", cookie);
            }
          } else {
            _res.headers.set(k, v);
          }
        }
      } catch (e) {
        if (e instanceof TypeError && e.message.includes("immutable")) {
          this.res = new Response(_res.body, {
            headers: _res.headers,
            status: _res.status
          });
          return;
        } else {
          throw e;
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  }
  newResponse = (...args) => this.#newResponse(...args);
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.#newResponse(data, arg, headers) : this.#newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number" ? this.#newResponse(text, arg, headers) : this.#newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number" ? this.#newResponse(body, arg, headers) : this.#newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
        return typeof arg === "number" ? this.#newResponse(html2, arg, headers) : this.#newResponse(html2, arg);
      });
    }
    return typeof arg === "number" ? this.#newResponse(html, arg, headers) : this.#newResponse(html, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", String(location));
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  };
}, "Context");

// node_modules/hono/dist/compose.js
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    const isContext = context instanceof Context;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (isContext) {
          context.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (!handler) {
        if (isContext && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && isContext && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// node_modules/hono/dist/router.js
init_modules_watch_stub();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = /* @__PURE__ */ __name(class extends Error {
}, "UnsupportedPathError");

// node_modules/hono/dist/hono-base.js
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = /* @__PURE__ */ __name(class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
}, "Hono");

// node_modules/hono/dist/router/reg-exp-router/index.js
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/node.js
init_modules_watch_stub();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = /* @__PURE__ */ __name(class {
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node();
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
}, "Node");

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_modules_watch_stub();
var Trie = /* @__PURE__ */ __name(class {
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
}, "Trie");

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = /* @__PURE__ */ __name(class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
}, "RegExpRouter");

// node_modules/hono/dist/router/smart-router/index.js
init_modules_watch_stub();

// node_modules/hono/dist/router/smart-router/router.js
init_modules_watch_stub();
var SmartRouter = /* @__PURE__ */ __name(class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
}, "SmartRouter");

// node_modules/hono/dist/router/trie-router/index.js
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/router.js
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/node.js
init_modules_watch_stub();
var Node2 = /* @__PURE__ */ __name(class {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = /* @__PURE__ */ Object.create(null);
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.#children).includes(p)) {
        curNode = curNode.#children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.#children[p] = new Node2();
      const pattern = getPattern(p);
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[p];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      score: this.#order
    };
    m[method] = handlerSet;
    curNode.#methods.push(m);
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
          const key = handlerSet.possibleKeys[i2];
          const processed = processedSet[handlerSet.score];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.score] = true;
        }
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = /* @__PURE__ */ Object.create(null);
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(
                ...this.#getHandlerSets(
                  nextNode.#children["*"],
                  method,
                  node.#params,
                  /* @__PURE__ */ Object.create(null)
                )
              );
            }
            handlerSets.push(
              ...this.#getHandlerSets(nextNode, method, node.#params, /* @__PURE__ */ Object.create(null))
            );
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(
                ...this.#getHandlerSets(astNode, method, node.#params, /* @__PURE__ */ Object.create(null))
              );
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
            continue;
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(
                  ...this.#getHandlerSets(child.#children["*"], method, params, node.#params)
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
}, "Node");

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = /* @__PURE__ */ __name(class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
}, "TrieRouter");

// node_modules/hono/dist/hono.js
var Hono2 = /* @__PURE__ */ __name(class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
}, "Hono");

// src/routes/user.ts
init_modules_watch_stub();
var import_post_your_articles_common = __toESM(require_dist());
var import_edge = __toESM(require_edge3());

// node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
init_modules_watch_stub();

// node_modules/@prisma/extension-accelerate/dist/esm/extension.js
init_modules_watch_stub();
var import_default_index2 = __toESM(require_default_index(), 1);

// node_modules/@prisma/extension-accelerate/dist/esm/semver.js
init_modules_watch_stub();
function compareSemVer(a, b) {
  const [major1 = 0, minor1 = 0, patch1 = 0] = a.split(".").map(Number);
  const [major2 = 0, minor2 = 0, patch2 = 0] = b.split(".").map(Number);
  const major = major2 - major1;
  const minor = minor2 - minor1;
  const patch = patch2 - patch1;
  return major || minor || patch;
}
__name(compareSemVer, "compareSemVer");

// node_modules/@prisma/extension-accelerate/dist/esm/user-agent.js
init_modules_watch_stub();
var import_default_index = __toESM(require_default_index(), 1);
function getUserAgent() {
  const prismaVersion = import_default_index.default.Prisma.prismaVersion;
  const parts = [
    getRuntimeSegment(),
    `PrismaEngine/${prismaVersion.engine}`,
    `PrismaClient/${prismaVersion.client}`
  ];
  return parts.join(" ");
}
__name(getUserAgent, "getUserAgent");
function getRuntimeSegment() {
  if (typeof navigator !== "undefined") {
    return "Cloudflare-Workers";
  } else if (typeof process !== "undefined" && typeof process.versions !== "undefined") {
    return `Node/${process.versions.node} (${process.platform}; ${process.arch})`;
  } else if ("EdgeRuntime" in globalThis) {
    return `Vercel-Edge-Runtime`;
  } else {
    return `UnknownRuntime`;
  }
}
__name(getRuntimeSegment, "getRuntimeSegment");

// node_modules/@prisma/extension-accelerate/dist/esm/extension.js
var EXTENSION_NAME = "@prisma/extension-accelerate";
var FETCH_FAILURE_MESSAGE = "Unable to connect to the Accelerate API. This may be due to a network or DNS issue. Please check your connection and the Accelerate connection string. For details, visit https://www.prisma.io/docs/accelerate/troubleshoot.";
function makeWithCacheHeaders(fetcher) {
  const userAgent = getUserAgent();
  let machineHint = void 0;
  return async (params) => {
    const { args } = params;
    const { cacheStrategy, __accelerateInfo = false, ...rest } = args;
    let info = null;
    const { __internalParams, query } = params;
    __internalParams.customDataProxyFetch = () => {
      return async (url, options) => {
        const cacheControl = new Array();
        if (typeof cacheStrategy?.ttl === "number") {
          cacheControl.push(`max-age=${cacheStrategy.ttl}`);
        }
        if (typeof cacheStrategy?.swr === "number") {
          cacheControl.push(`stale-while-revalidate=${cacheStrategy.swr}`);
        }
        const cacheTags = cacheStrategy?.tags?.join(",") ?? "";
        options.headers = {
          ...options.headers,
          "cache-control": cacheControl.length > 0 ? cacheControl.join(",") : `no-cache`,
          "user-agent": userAgent,
          ...cacheTags.length > 0 ? { "accelerate-cache-tags": cacheTags } : {}
        };
        if (machineHint) {
          options.headers["accelerate-query-engine-jwt"] = machineHint;
        }
        try {
          const response = await fetcher(url, options);
          info = {
            cacheStatus: response.headers.get("accelerate-cache-status"),
            lastModified: new Date(response.headers.get("last-modified") ?? ""),
            region: response.headers.get("cf-ray")?.split("-")[1] ?? "unspecified",
            requestId: response.headers.get("cf-ray") ?? "unspecified",
            signature: response.headers.get("accelerate-signature") ?? "unspecified"
          };
          machineHint = response.headers.get("accelerate-query-engine-jwt") ?? void 0;
          return response;
        } catch (e) {
          throw new Error(FETCH_FAILURE_MESSAGE);
        }
      };
    };
    if (__accelerateInfo) {
      const data = await query(rest, __internalParams);
      return { data, info };
    } else {
      return query(rest, __internalParams);
    }
  };
}
__name(makeWithCacheHeaders, "makeWithCacheHeaders");
function makeAccelerateExtension(fetcher) {
  const enableCtxParent = compareSemVer("5.1.0", import_default_index2.default.Prisma.prismaVersion.client) >= 0;
  return import_default_index2.default.Prisma.defineExtension((client) => {
    const withCacheHeaders = makeWithCacheHeaders(fetcher);
    const apiKeyPromise = client._engine.start().then(() => client._engine.apiKey?.());
    const xclient = client.$extends({
      name: EXTENSION_NAME,
      query: {
        $allModels: {
          // also apply withCacheHeaders to mutations for machine hint benefit
          $allOperations: withCacheHeaders
        }
      }
    });
    return xclient.$extends({
      name: EXTENSION_NAME,
      client: {
        $accelerate: {
          /**
           * Initiates an invalidation request for the specified cache tag values.
           *
           * A tag may only contain alphanumeric characters and underscores.
           * Each tag may contain a maximum of 64 characters.
           * A maximum of 5 tags may be invalidated per call.
           */
          invalidate: async (input) => {
            const apiKey = await apiKeyPromise;
            if (!apiKey) {
              return { requestId: "unspecified" };
            }
            let response;
            try {
              response = await fetcher(`https://accelerate.prisma-data.net/invalidate`, {
                method: "POST",
                headers: {
                  authorization: `Bearer ${apiKey}`,
                  "content-type": "application/json"
                },
                body: JSON.stringify(input)
              });
            } catch (e) {
              throw new Error(FETCH_FAILURE_MESSAGE);
            }
            if (!response?.ok) {
              const body = await response.text();
              throw new Error(`Failed to invalidate Accelerate cache. Response was ${response.status} ${response.statusText}. ${body}`);
            }
            void response.body?.cancel();
            return {
              requestId: response.headers.get("cf-ray") ?? "unspecified"
            };
          }
        }
      },
      model: {
        $allModels: {
          // TODO: these functions are repetitive. Is there a type we can use to generic this?
          // TODO: can we define these in a map that ensures query and model overrides stay in sync/
          aggregate(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.aggregate(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.aggregate({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          count(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.count(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.count({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirst(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirst(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirst({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirstOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirstOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirstOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findMany(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findMany(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findMany({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUnique(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUnique(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUnique({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUniqueOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUniqueOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUniqueOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          groupBy(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.groupBy(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.groupBy({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          }
        }
      }
    });
  });
}
__name(makeAccelerateExtension, "makeAccelerateExtension");

// node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
function withAccelerate() {
  return makeAccelerateExtension(globalThis.fetch);
}
__name(withAccelerate, "withAccelerate");

// node_modules/hono/dist/middleware/jwt/index.js
init_modules_watch_stub();

// node_modules/hono/dist/middleware/jwt/jwt.js
init_modules_watch_stub();

// node_modules/hono/dist/helper/cookie/index.js
init_modules_watch_stub();

// node_modules/hono/dist/utils/cookie.js
init_modules_watch_stub();

// node_modules/hono/dist/http-exception.js
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/index.js
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/jwt.js
init_modules_watch_stub();

// node_modules/hono/dist/utils/encode.js
init_modules_watch_stub();
var decodeBase64Url = /* @__PURE__ */ __name((str) => {
  return decodeBase64(str.replace(/_|-/g, (m) => ({ _: "/", "-": "+" })[m] ?? m));
}, "decodeBase64Url");
var encodeBase64Url = /* @__PURE__ */ __name((buf) => encodeBase64(buf).replace(/\/|\+/g, (m) => ({ "/": "_", "+": "-" })[m] ?? m), "encodeBase64Url");
var encodeBase64 = /* @__PURE__ */ __name((buf) => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0, len = bytes.length; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}, "encodeBase64");
var decodeBase64 = /* @__PURE__ */ __name((str) => {
  const binary = atob(str);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  const half = binary.length / 2;
  for (let i = 0, j = binary.length - 1; i <= half; i++, j--) {
    bytes[i] = binary.charCodeAt(i);
    bytes[j] = binary.charCodeAt(j);
  }
  return bytes;
}, "decodeBase64");

// node_modules/hono/dist/utils/jwt/jwa.js
init_modules_watch_stub();
var AlgorithmTypes = /* @__PURE__ */ ((AlgorithmTypes2) => {
  AlgorithmTypes2["HS256"] = "HS256";
  AlgorithmTypes2["HS384"] = "HS384";
  AlgorithmTypes2["HS512"] = "HS512";
  AlgorithmTypes2["RS256"] = "RS256";
  AlgorithmTypes2["RS384"] = "RS384";
  AlgorithmTypes2["RS512"] = "RS512";
  AlgorithmTypes2["PS256"] = "PS256";
  AlgorithmTypes2["PS384"] = "PS384";
  AlgorithmTypes2["PS512"] = "PS512";
  AlgorithmTypes2["ES256"] = "ES256";
  AlgorithmTypes2["ES384"] = "ES384";
  AlgorithmTypes2["ES512"] = "ES512";
  AlgorithmTypes2["EdDSA"] = "EdDSA";
  return AlgorithmTypes2;
})(AlgorithmTypes || {});

// node_modules/hono/dist/utils/jwt/jws.js
init_modules_watch_stub();

// node_modules/hono/dist/helper/adapter/index.js
init_modules_watch_stub();
var knownUserAgents = {
  deno: "Deno",
  bun: "Bun",
  workerd: "Cloudflare-Workers",
  node: "Node.js"
};
var getRuntimeKey = /* @__PURE__ */ __name(() => {
  const global = globalThis;
  const userAgentSupported = typeof navigator !== "undefined" && true;
  if (userAgentSupported) {
    for (const [runtimeKey, userAgent] of Object.entries(knownUserAgents)) {
      if (checkUserAgentEquals(userAgent)) {
        return runtimeKey;
      }
    }
  }
  if (typeof global?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global?.fastly !== void 0) {
    return "fastly";
  }
  if (global?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
}, "getRuntimeKey");
var checkUserAgentEquals = /* @__PURE__ */ __name((platform) => {
  const userAgent = "Cloudflare-Workers";
  return userAgent.startsWith(platform);
}, "checkUserAgentEquals");

// node_modules/hono/dist/utils/jwt/types.js
init_modules_watch_stub();
var JwtAlgorithmNotImplemented = /* @__PURE__ */ __name(class extends Error {
  constructor(alg) {
    super(`${alg} is not an implemented algorithm`);
    this.name = "JwtAlgorithmNotImplemented";
  }
}, "JwtAlgorithmNotImplemented");
var JwtTokenInvalid = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`invalid JWT token: ${token}`);
    this.name = "JwtTokenInvalid";
  }
}, "JwtTokenInvalid");
var JwtTokenNotBefore = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`token (${token}) is being used before it's valid`);
    this.name = "JwtTokenNotBefore";
  }
}, "JwtTokenNotBefore");
var JwtTokenExpired = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`token (${token}) expired`);
    this.name = "JwtTokenExpired";
  }
}, "JwtTokenExpired");
var JwtTokenIssuedAt = /* @__PURE__ */ __name(class extends Error {
  constructor(currentTimestamp, iat) {
    super(`Incorrect "iat" claim must be a older than "${currentTimestamp}" (iat: "${iat}")`);
    this.name = "JwtTokenIssuedAt";
  }
}, "JwtTokenIssuedAt");
var JwtHeaderInvalid = /* @__PURE__ */ __name(class extends Error {
  constructor(header) {
    super(`jwt header is invalid: ${JSON.stringify(header)}`);
    this.name = "JwtHeaderInvalid";
  }
}, "JwtHeaderInvalid");
var JwtTokenSignatureMismatched = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`token(${token}) signature mismatched`);
    this.name = "JwtTokenSignatureMismatched";
  }
}, "JwtTokenSignatureMismatched");
var CryptoKeyUsage = /* @__PURE__ */ ((CryptoKeyUsage2) => {
  CryptoKeyUsage2["Encrypt"] = "encrypt";
  CryptoKeyUsage2["Decrypt"] = "decrypt";
  CryptoKeyUsage2["Sign"] = "sign";
  CryptoKeyUsage2["Verify"] = "verify";
  CryptoKeyUsage2["DeriveKey"] = "deriveKey";
  CryptoKeyUsage2["DeriveBits"] = "deriveBits";
  CryptoKeyUsage2["WrapKey"] = "wrapKey";
  CryptoKeyUsage2["UnwrapKey"] = "unwrapKey";
  return CryptoKeyUsage2;
})(CryptoKeyUsage || {});

// node_modules/hono/dist/utils/jwt/utf8.js
init_modules_watch_stub();
var utf8Encoder = new TextEncoder();
var utf8Decoder = new TextDecoder();

// node_modules/hono/dist/utils/jwt/jws.js
async function signing(privateKey, alg, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPrivateKey(privateKey, algorithm);
  return await crypto.subtle.sign(algorithm, cryptoKey, data);
}
__name(signing, "signing");
async function verifying(publicKey, alg, signature, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPublicKey(publicKey, algorithm);
  return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
}
__name(verifying, "verifying");
function pemToBinary(pem) {
  return decodeBase64(pem.replace(/-+(BEGIN|END).*/g, "").replace(/\s/g, ""));
}
__name(pemToBinary, "pemToBinary");
async function importPrivateKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type !== "private" && key.type !== "secret") {
      throw new Error(
        `unexpected key type: CryptoKey.type is ${key.type}, expected private or secret`
      );
    }
    return key;
  }
  const usages = [CryptoKeyUsage.Sign];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PRIVATE")) {
    return await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPrivateKey, "importPrivateKey");
async function importPublicKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type === "public" || key.type === "secret") {
      return key;
    }
    key = await exportPublicJwkFrom(key);
  }
  if (typeof key === "string" && key.includes("PRIVATE")) {
    const privateKey = await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, true, [
      CryptoKeyUsage.Sign
    ]);
    key = await exportPublicJwkFrom(privateKey);
  }
  const usages = [CryptoKeyUsage.Verify];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PUBLIC")) {
    return await crypto.subtle.importKey("spki", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPublicKey, "importPublicKey");
async function exportPublicJwkFrom(privateKey) {
  if (privateKey.type !== "private") {
    throw new Error(`unexpected key type: ${privateKey.type}`);
  }
  if (!privateKey.extractable) {
    throw new Error("unexpected private key is unextractable");
  }
  const jwk = await crypto.subtle.exportKey("jwk", privateKey);
  const { kty } = jwk;
  const { alg, e, n } = jwk;
  const { crv, x, y } = jwk;
  return { kty, alg, e, n, crv, x, y, key_ops: [CryptoKeyUsage.Verify] };
}
__name(exportPublicJwkFrom, "exportPublicJwkFrom");
function getKeyAlgorithm(name) {
  switch (name) {
    case "HS256":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      };
    case "HS384":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-384"
        }
      };
    case "HS512":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-512"
        }
      };
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      };
    case "RS384":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-384"
        }
      };
    case "RS512":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-512"
        }
      };
    case "PS256":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-256"
        },
        saltLength: 32
      };
    case "PS384":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-384"
        },
        saltLength: 48
      };
    case "PS512":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-512"
        },
        saltLength: 64
      };
    case "ES256":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-256"
        },
        namedCurve: "P-256"
      };
    case "ES384":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-384"
        },
        namedCurve: "P-384"
      };
    case "ES512":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-512"
        },
        namedCurve: "P-521"
      };
    case "EdDSA":
      return {
        name: "Ed25519",
        namedCurve: "Ed25519"
      };
    default:
      throw new JwtAlgorithmNotImplemented(name);
  }
}
__name(getKeyAlgorithm, "getKeyAlgorithm");
function isCryptoKey(key) {
  const runtime = getRuntimeKey();
  if (runtime === "node" && !!crypto.webcrypto) {
    return key instanceof crypto.webcrypto.CryptoKey;
  }
  return key instanceof CryptoKey;
}
__name(isCryptoKey, "isCryptoKey");

// node_modules/hono/dist/utils/jwt/jwt.js
var encodeJwtPart = /* @__PURE__ */ __name((part) => encodeBase64Url(utf8Encoder.encode(JSON.stringify(part))).replace(/=/g, ""), "encodeJwtPart");
var encodeSignaturePart = /* @__PURE__ */ __name((buf) => encodeBase64Url(buf).replace(/=/g, ""), "encodeSignaturePart");
var decodeJwtPart = /* @__PURE__ */ __name((part) => JSON.parse(utf8Decoder.decode(decodeBase64Url(part))), "decodeJwtPart");
function isTokenHeader(obj) {
  if (typeof obj === "object" && obj !== null) {
    const objWithAlg = obj;
    return "alg" in objWithAlg && Object.values(AlgorithmTypes).includes(objWithAlg.alg) && (!("typ" in objWithAlg) || objWithAlg.typ === "JWT");
  }
  return false;
}
__name(isTokenHeader, "isTokenHeader");
var sign = /* @__PURE__ */ __name(async (payload, privateKey, alg = "HS256") => {
  const encodedPayload = encodeJwtPart(payload);
  const encodedHeader = encodeJwtPart({ alg, typ: "JWT" });
  const partialToken = `${encodedHeader}.${encodedPayload}`;
  const signaturePart = await signing(privateKey, alg, utf8Encoder.encode(partialToken));
  const signature = encodeSignaturePart(signaturePart);
  return `${partialToken}.${signature}`;
}, "sign");
var verify = /* @__PURE__ */ __name(async (token, publicKey, alg = "HS256") => {
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new JwtTokenInvalid(token);
  }
  const { header, payload } = decode(token);
  if (!isTokenHeader(header)) {
    throw new JwtHeaderInvalid(header);
  }
  const now = Date.now() / 1e3 | 0;
  if (payload.nbf && payload.nbf > now) {
    throw new JwtTokenNotBefore(token);
  }
  if (payload.exp && payload.exp <= now) {
    throw new JwtTokenExpired(token);
  }
  if (payload.iat && now < payload.iat) {
    throw new JwtTokenIssuedAt(now, payload.iat);
  }
  const headerPayload = token.substring(0, token.lastIndexOf("."));
  const verified = await verifying(
    publicKey,
    alg,
    decodeBase64Url(tokenParts[2]),
    utf8Encoder.encode(headerPayload)
  );
  if (!verified) {
    throw new JwtTokenSignatureMismatched(token);
  }
  return payload;
}, "verify");
var decode = /* @__PURE__ */ __name((token) => {
  try {
    const [h, p] = token.split(".");
    const header = decodeJwtPart(h);
    const payload = decodeJwtPart(p);
    return {
      header,
      payload
    };
  } catch {
    throw new JwtTokenInvalid(token);
  }
}, "decode");

// node_modules/hono/dist/utils/jwt/index.js
var Jwt = { sign, verify, decode };

// node_modules/hono/dist/middleware/jwt/jwt.js
var verify2 = Jwt.verify;
var decode2 = Jwt.decode;
var sign2 = Jwt.sign;

// src/routes/user.ts
var userRouter = new Hono2();
userRouter.post("/signup", async (c) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c.req.json();
  console.log(body);
  const { success } = import_post_your_articles_common.signupInput.safeParse(body);
  console.log(success);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs are incorrect"
    });
  }
  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password
      }
    });
    const token = await sign2({ id: user.id }, c.env.JWT_SECRET);
    return c.text(token);
  } catch (error) {
    c.status(411);
    console.log(error);
    return c.text("User already exists");
  }
});
userRouter.post("/signin", async (c) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const result = import_post_your_articles_common.signinInput.safeParse(body);
    console.log(import_post_your_articles_common.signinInput);
    console.log(body);
    console.log(result);
    if (!result.success) {
      c.status(411);
      return c.json({
        message: "Inputs not correct",
        error: result.error.issues
      });
    }
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password
      }
    });
    if (!user) {
      c.status(403);
      return c.json({
        error: "User not found"
      });
    }
    const jwt2 = await sign2({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt: jwt2 });
  } catch (error) {
    c.status(411);
    console.log(error);
    return c.text("incorrect credentials");
  }
});

// src/routes/post.ts
init_modules_watch_stub();
var import_post_your_articles_common2 = __toESM(require_dist());
var import_edge2 = __toESM(require_edge3());
var postRouter = new Hono2();
postRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization") || "";
  const user = await verify2(authHeader, c.env.JWT_SECRET);
  try {
    if (user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "you are not logged in"
      });
    }
  } catch (error) {
    c.status(403);
    return c.json({
      message: "you are not logged in"
    });
  }
});
postRouter.post("/", async (c) => {
  const userId = c.get("userId");
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = import_post_your_articles_common2.createPostInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct"
    });
  }
  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(userId)
    }
  });
  return c.json({
    id: post.id,
    post
  });
});
postRouter.put("/", async (c) => {
  const body = await c.req.json();
  const { success } = import_post_your_articles_common2.updatePostInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct"
    });
  }
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const post = await prisma.post.update({
    where: {
      id: body.id
    },
    data: {
      title: body.title,
      content: body.content
    }
  });
  return c.json({
    id: post.id,
    post
  });
});
postRouter.get("/bulk", async (c) => {
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const posts = await prisma.post.findMany();
  return c.json({
    posts
  });
});
postRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  try {
    const post = await prisma.post.findFirst({
      where: {
        id: Number(id)
      }
    });
    return c.json({
      post
    });
  } catch (error) {
    console.log(error);
    c.status(411);
    return c.json({
      message: "Error while fetching data"
    });
  }
});

// node_modules/hono/dist/middleware/cors/index.js
init_modules_watch_stub();
var cors = /* @__PURE__ */ __name((options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  return /* @__PURE__ */ __name(async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    __name(set, "set");
    const allowOrigin = findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.origin !== "*") {
      const existingVary = c.req.header("Vary");
      if (existingVary) {
        set("Vary", existingVary);
      } else {
        set("Vary", "Origin");
      }
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      if (opts.allowMethods?.length) {
        set("Access-Control-Allow-Methods", opts.allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
  }, "cors2");
}, "cors");

// src/index.ts
var app = new Hono2();
app.use("/*", cors());
app.route("/api/v1/user", userRouter);
app.route("/api/v1/post", postRouter);
var src_default = app;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-pXN9ux/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-pXN9ux/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map