const https = require('https');

async function fetch(url) {
  if (typeof url !== 'string') {
    throw new Error(`url: ${url} is not valid and is required`);
  }

  return new Promise((resolve) => {
    https
      .get(url, (res) => {
        handleError(res.statusCode);

        let body;
        res
          .on('data', (chunk) => {
            body += chunk;
          })
          .on('end', () => {
            return resolve({ statusCode: res.statusCode, body });
          });
      })
      .on('error', (error) => {
        throw new Error(`request threw error: ${error.message}`);
      });
  });
}

function handleError(statusCode) {
  if (statusCode !== 200) {
    throw new Error(
      `the server responded with a none 200 statusCode; ${statusCode}`
    );
  }
}

module.exports = {
  fetch,
};
