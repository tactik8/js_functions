const extractDomain = (url) => {
  if (typeof url !== 'string' || url.trim().length === 0) {
    throw new Error('Invalid input: URL must be a non-empty string');
  }

  let cleanedUrl = url.trim();

  // Check if the URL has a protocol; if not, prepend 'http://' to allow URL parsing
  const protocolRegex = /^[a-z]+:\/\//i;
  if (!protocolRegex.test(cleanedUrl)) {
    cleanedUrl = `http://${cleanedUrl}`;
  }

  try {
    const urlObject = new URL(cleanedUrl);
    return urlObject.hostname;
  } catch (err) {
    throw new Error('Invalid URL: Could not extract domain');
  }
};