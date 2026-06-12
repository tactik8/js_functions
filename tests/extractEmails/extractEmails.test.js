const assert = require('assert');

// Test 1: Standard extraction
const res1 = extractEmails('Hello test@me.com');
assert.deepStrictEqual(res1, ['test@me.com']);

// Test 2: Multiple and duplicates
const res2 = extractEmails('Contact a@b.com and A@B.COM');
assert.deepStrictEqual(res2, ['a@b.com']);

// Test 3: Complex addresses
const res3 = extractEmails('My email is john.doe+filter@sub.domain.org!');
assert.deepStrictEqual(res3, ['john.doe+filter@sub.domain.org']);

// Test 4: Empty/No results
assert.deepStrictEqual(extractEmails('No emails here'), []);

// Test 5: Error handling
assert.throws(() => extractEmails(null), /Input must be a string/);