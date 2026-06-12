const runTests = () => {
  const tests = [
    { input: [1, 2], expected: [1, 2], label: 'Already an array' },
    { input: 'hello', expected: ['hello'], label: 'String input' },
    { input: 42, expected: [42], label: 'Number input' },
    { input: null, expected: [], label: 'Null input' },
    { input: undefined, expected: [], label: 'Undefined input' },
    { input: { a: 1 }, expected: [{ a: 1 }], label: 'Object input' }
  ];

  tests.forEach(({ input, expected, label }) => {
    const result = ensureArray(input);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`[${passed ? 'PASS' : 'FAIL'}] ${label}:`, { input, result });
    if (!passed) throw new Error(`Test failed for ${label}`);
  });
};

runTests();