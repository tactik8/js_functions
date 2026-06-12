const assert = require('assert');

// Test standard URL
assert.strictEqual(extractDomain('https://www.google.com'), 'google.com');

// Test URL without protocol
assert.strictEqual(extractDomain('example.com/test'), 'example.com');

// Test subdomain
assert.strictEqual(extractDomain('api.v1.example.co.uk'), 'api.v1.example.co.uk');

// Test IP address
assert.strictEqual(extractDomain('http://127.0.0.1:3000'), '127.0.0.1');

// Test invalid input
assert.throws(() => extractDomain(''), /Input must be a non-empty string/);
assert.throws(() => extractDomain(null), /Input must be a non-empty string/);