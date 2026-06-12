const normalizeUrl = (input) => {
  if (typeof input !== 'string' || !input.trim()) {
    throw new Error('Invalid input: URL must be a non-empty string');
  }

  let urlString = input.trim();

  if (!/^[a-z][a-z0-9+.-]*:/i.test(urlString)) {
    urlString = urlString.startsWith('//') ? `https:${urlString}` : `https://${urlString}`;
  }

  const url = new URL(urlString);

  url.protocol = url.protocol.toLowerCase();
  url.hostname = url.hostname.toLowerCase();

  if ((url.protocol === 'http:' && url.port === '80') || (url.protocol === 'https:' && url.port === '443')) {
    url.port = '';
  }

  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.replace(/\/$/, '');
  }

  const trackingParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid', 'ref'];
  const searchParams = Array.from(url.searchParams.entries());
  
  const filteredParams = searchParams
    .filter(([key]) => !trackingParams.includes(key.toLowerCase()))
    .sort((a, b) => a[0].localeCompare(b[0]));

  url.search = '';
  filteredParams.forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  return url.toString();
};