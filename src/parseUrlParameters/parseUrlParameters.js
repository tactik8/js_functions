export const parseUrlParameters = (urlString) => {
  if (typeof urlString !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const queryString = urlString.includes('?') 
    ? urlString.split('?')[1].split('#')[0] 
    : (urlString.includes('=') && !urlString.includes('/') ? urlString : '');

  const params = new URLSearchParams(queryString);
  const result = {};

  for (const [key, value] of params.entries()) {
    if (Object.prototype.hasOwnProperty.call(result, key)) {
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      result[key] = value;
    }
  }

  return result;
};