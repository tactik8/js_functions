const assert = require('assert');

try {
  // Test: Basic functionality
  const t1 = appendQueryParams('https://test.com', { a: 1 });
  assert.strictEqual(t1, 'https://test.com/?a=1');

  // Test: Existing parameters
  const t2 = appendQueryParams('https://test.com?existing=true', { new: 'yes' });
  assert.strictEqual(t2, 'https://test.com/?existing=true&new=yes');

  // Test: Arrays
  const t3 = appendQueryParams('https://test.com', { list: [1, 2] });
  assert.strictEqual(t3, 'https://test.com/?list=1&list=2');

  // Test: Special characters
  const t4 = appendQueryParams('https://test.com', { query: 'hello world' });
  assert.strictEqual(t4, 'https://test.com/?query=hello+world');

  // Test: Null/Undefined handling
  const t5 = appendQueryParams('https://test.com', { val: null, other: undefined, keep: 0 });
  assert.strictEqual(t5, 'https://test.com/?keep=0');

  console.log('All tests passed!');
} catch (e) {
  console.error('Test failed:', e.message);
}