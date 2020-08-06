"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var export_js_manual_declaration_1 = __importDefault(require("../export-js-manual-declaration"));
// import * as firstStar from '../export-js-manual-declaration'; // tsc does not allow star import with given declaration in strict mode
var export_js_manual_declaration_2 = require("../export-js-manual-declaration");
// import second from '../export-js-no-types'; // tsc does not allow no types in strict mode
// import * as secondStar from '../export-js-no-types'; // tsc does not allow no types in strict mode
// import { add as secondNamed } from '../export-js-no-types'; // tsc does not allow no types in strict mode
var export_ts_default_export_1 = __importDefault(require("../export-ts-default-export"));
var thirdStar = __importStar(require("../export-ts-default-export"));
// import { add as thirdNamed } from '../export-ts-default-export'; // tsc detects that there is no named export
// import fourth from '../export-ts-named'; // tsc detects that there is no default export
var fourthStar = __importStar(require("../export-ts-named"));
var export_ts_named_1 = require("../export-ts-named");
assert_1.default.equal(export_js_manual_declaration_1.default.add(1, 2), 3);
// assert.equal(firstStar.add(1, 2), 3);
assert_1.default.equal(export_js_manual_declaration_2.add(1, 2), 3);
// assert.equal(second.add(1, 2), 3);
// assert.equal(secondStar.add(1, 2), 3);
// assert.equal(secondNamed(1, 2), 3);
assert_1.default.equal(export_ts_default_export_1.default(1, 2), 3);
assert_1.default.equal(thirdStar.default(1, 2), 3);
// assert.equal(thirdNamed(1, 2), 3);
// assert.equal(fourth(1, 2), 3);
assert_1.default.equal(fourthStar.add(1, 2), 3);
assert_1.default.equal(export_ts_named_1.add(1, 2), 3);
