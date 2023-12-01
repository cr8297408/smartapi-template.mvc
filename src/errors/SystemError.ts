export class SystemError extends Error {
  code: string;
  statusCode: number;
  kind: 'client' | 'system' | 'validation' | 'unknown' | 'no-info';
}