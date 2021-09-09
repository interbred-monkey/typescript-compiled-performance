import { fetch } from './services/http.service';

const URL = 'https://naotw.mudd-dev.com' as const;

async function main(): Promise<void> {
  try {
    const { statusCode, body } = await fetch(URL);
    console.log(`statusCode: ${statusCode}`);
    console.log(`body: ${body.toString('utf-8')}`);
  } catch (err: unknown) {
    console.log('error thrown', err);
  }
}

module.exports = main();
