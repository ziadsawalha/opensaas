const TENANT_IDS: string[] = [
  '7b59bb80-7123-4ead-8573-141703b9a09a',
  '90b02525-0d38-415e-8e23-dc4d8c1c4cb0',
  'my-tenant-id',
  '06bd8912-4484-4a9d-be6a-c633b09f9852',
];

const USER_AGENTS: string[] = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
  'Mozilla/5.0 (Linux; U; Android 2.2) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:80.0) Gecko/20100101 Firefox/80.0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36 Edg/85.0.564.51',
];

const IPS: string[] = ['208.80.235.8', '185.159.83.104', '208.97.177.47', '45.33.45.6'];

const URLS: string[] = ['api/v1/metrics', 'api/v1/config', 'api/v1/graphql'];

const STATUS_CODES: number[] = [200, 204, 301, 400, 403, 404, 500, 504];

function getRandomElement(array: any[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomUserAgent(): string {
  return getRandomElement(USER_AGENTS);
}

function getRandomTenantID(): string {
  return getRandomElement(TENANT_IDS);
}

function getRandomIP(): string {
  return getRandomElement(IPS);
}

function getRandomUrl(): string {
  return getRandomElement(URLS);
}

function getRandomStatusCode(): number {
  return getRandomElement(STATUS_CODES);
}

function createRequest() {
  return {
    tenantId: getRandomTenantID(),
    url: getRandomUrl(),
    statusCode: getRandomStatusCode(),
    userAgent: getRandomUserAgent(),
    ip: getRandomIP(),
    createdAt: getRandomDate(lastYear, now),
    updatedAt: `${new Date()}`,
  };
}

const now = new Date();
const lastYear = new Date();
lastYear.setFullYear(now.getFullYear() - 1);

export const requestSeed = [...Array(4000).keys()].map(createRequest);
