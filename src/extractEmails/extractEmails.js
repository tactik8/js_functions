export const extractEmails = (text) => {
  if (typeof text !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
  const matches = text.match(emailRegex);

  if (!matches) return [];

  const uniqueEmails = [...new Set(matches.map(email => email.toLowerCase()))];
  return uniqueEmails;
};