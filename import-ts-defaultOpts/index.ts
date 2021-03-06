import assert from 'assert';

import first from '../export-js-manual-declaration';
// import * as firstStar from '../export-js-manual-declaration'; // tsc does not allow star import with given declaration in strict mode
import { add as firstNamed } from '../export-js-manual-declaration';

// import second from '../export-js-no-types'; // tsc does not allow no types in strict mode
// import * as secondStar from '../export-js-no-types'; // tsc does not allow no types in strict mode
// import { add as secondNamed } from '../export-js-no-types'; // tsc does not allow no types in strict mode

import third from '../export-ts-default-export';
import * as thirdStar from '../export-ts-default-export';
// import { add as thirdNamed } from '../export-ts-default-export'; // tsc detects that there is no named export

// import fourth from '../export-ts-named'; // tsc detects that there is no default export
import * as fourthStar from '../export-ts-named';
import { add as fourthNamed } from '../export-ts-named';

assert.equal(first.add(1, 2), 3);
// assert.equal(firstStar.add(1, 2), 3);
assert.equal(firstNamed(1, 2), 3);

// assert.equal(second.add(1, 2), 3);
// assert.equal(secondStar.add(1, 2), 3);
// assert.equal(secondNamed(1, 2), 3);

assert.equal(third(1, 2), 3);
assert.equal(thirdStar.default(1, 2), 3);
// assert.equal(thirdNamed(1, 2), 3);

// assert.equal(fourth(1, 2), 3);
assert.equal(fourthStar.add(1, 2), 3);
assert.equal(fourthNamed(1, 2), 3);
