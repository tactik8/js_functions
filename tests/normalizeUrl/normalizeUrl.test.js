const runTests = () => {
  const assertions = [
    { input: 'HTTP://google.com:80/', expected: 'http://google.com/' },
    { input: 'https://example.com/dir/?z=9&a=1', expected: 'https://example.com/dir?a=1&z=9' },
    { input: 'https://EXAMPLE.com/A/../B', expected: 'https://example.com/B' },
    { input: 'https://example.com/path/', expected: 'https://example.com/path' },
    { input: 'https://example.com/?q=val%20ue', expected: 'https://example.com/?q=val+ue' }
  ];

  assertions.forEach(({ input, expected }, index) => {
    const result = normalizeUrl(input);
    if (result !== expected) {
      throw new Error(`Test ${index} failed: Expected ${expected}, got ${result}`);
    }
  });

  console.log('All tests passed');
};

runTests();