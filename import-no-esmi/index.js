"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert"); // note the difference here from having esmi enabled
// import first from '../export-js-manual-declaration'; // tsc complains about not having a default export
var firstStar = require("../export-js-manual-declaration");
var export_js_manual_declaration_1 = require("../export-js-manual-declaration");
// import second from '../export-js-no-types'; // tsc does not allow no types in strict mode
// import * as secondStar from '../export-js-no-types'; // tsc does not allow no types in strict mode
// import { add as secondNamed } from '../export-js-no-types'; // tsc does not allow no types in strict mode
var export_ts_default_export_1 = require("../export-ts-default-export");
var thirdStar = require("../export-ts-default-export");
// import { add as thirdNamed } from '../export-ts-default-export'; // tsc detects that there is no named export
// import fourth from '../export-ts-named'; // tsc detects that there is no default export
var fourthStar = require("../export-ts-named");
var export_ts_named_1 = require("../export-ts-named");
// assert.equal(first.add(1, 2), 3);
assert.equal(firstStar.add(1, 2), 3);
assert.equal(export_js_manual_declaration_1.add(1, 2), 3);
// assert.equal(second.add(1, 2), 3);
// assert.equal(secondStar.add(1, 2), 3);
// assert.equal(secondNamed(1, 2), 3);
assert.equal(export_ts_default_export_1.default(1, 2), 3);
assert.equal(thirdStar.default(1, 2), 3);
// assert.equal(thirdNamed(1, 2), 3);
// assert.equal(fourth(1, 2), 3);
assert.equal(fourthStar.add(1, 2), 3);
assert.equal(export_ts_named_1.add(1, 2), 3);
