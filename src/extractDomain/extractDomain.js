const extractDomain = (url) => {
  if (typeof url !== 'string' || url.trim().length === 0) {
    throw new TypeError('Input must be a non-empty string');
  }

  let input = url.trim();

  if (!/^https?:\/\//i.test(input) && !/^\/\//.test(input)) {
    input = 'http://' + input;
  }

  try {
    const urlObj = new URL(input);
    let hostname = urlObj.hostname;

    if (hostname.startsWith('www.')) {
      hostname = hostname.slice(4);
    }

    return hostname;
  } catch (err) {
    throw new Error(`Failed to extract domain: ${err.message}`);
  }
};