const normalizeUrl = (inputUrl) => {
  if (typeof inputUrl !== 'string') {
    throw new TypeError('Input must be a string');
  }

  let url;
  try {
    url = new URL(inputUrl.trim());
  } catch (error) {
    throw new Error(`Invalid URL: ${error.message}`);
  }

  // 1. Hostname is automatically lowercased and IDN-encoded by URL class
  // 2. Default ports are automatically removed by URL class

  // 3. Normalize Path: Remove trailing slash if not root
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
  }

  // 4. Sort Query Parameters
  const params = Array.from(url.searchParams.entries());
  if (params.length > 0) {
    params.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
    
    // Clear and re-append sorted params
    url.search = '';
    params.forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  // 5. Remove trailing dot from hostname if present
  if (url.hostname.endsWith('.')) {
    url.hostname = url.hostname.slice(0, -1);
  }

  // URL.toString() handles RFC 3986 percent-encoding (uppercase hex)
  return url.toString();
};