export const appendQueryParams = (url, params) => {
  if (typeof url !== 'string') {
    throw new TypeError('The URL must be a string');
  }

  if (!params || typeof params !== 'object' || Array.isArray(params)) {
    return url;
  }

  try {
    const urlObj = new URL(url);

    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === undefined) return;

      if (Array.isArray(value)) {
        value.forEach((val) => urlObj.searchParams.append(key, val));
      } else {
        urlObj.searchParams.append(key, value);
      }
    });

    return urlObj.toString();
  } catch (error) {
    throw new Error(`Invalid URL: ${url}`);
  }
};