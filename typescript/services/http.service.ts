import { get } from 'https';

interface Response {
  statusCode: number;
  body: Buffer;
}

export function fetch(url: string): Promise<Response> {
  return new Promise((resolve) => {
    get(url, (res) => {
      handleError(res.statusCode);

      let body: Buffer = Buffer.from('');
      res
        .on('data', (chunk) => {
          body += chunk;
        })
        .on('end', () => {
          return resolve({ statusCode: res.statusCode, body });
        });
    }).on('error', (error) => {
      throw new Error(`request threw error: ${error.message}`);
    });
  });
}

function handleError(statusCode: number) {
  if (statusCode !== 200) {
    throw new Error(
      `the server responded with a none 200 statusCode; ${statusCode}`
    );
  }
}
