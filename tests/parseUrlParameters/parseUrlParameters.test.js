const runTests = () => {
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
  };

  // Test basic parsing
  const t1 = parseUrlParameters('http://test.com?a=1&b=2');
  assert(t1.a === '1' && t1.b === '2', 'Basic parsing failed');

  // Test duplicate keys (arrays)
  const t2 = parseUrlParameters('?item=apple&item=orange');
  assert(Array.isArray(t2.item) && t2.item[0] === 'apple', 'Duplicate key handling failed');

  // Test URI decoding
  const t3 = parseUrlParameters('?name=John%20Doe');
  assert(t3.name === 'John Doe', 'URI decoding failed');

  // Test no parameters
  const t4 = parseUrlParameters('https://example.com/path');
  assert(Object.keys(t4).length === 0, 'Should return empty object for no params');

  // Test hash exclusion
  const t5 = parseUrlParameters('?page=1#footer');
  assert(t5.page === '1' && !t5.footer, 'Hash fragment should be ignored');

  console.log('All tests passed');
};
runTests();