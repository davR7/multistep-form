import { ValidationError } from 'yup';

export function extractErrorYup(err: unknown) {
  if (err instanceof ValidationError && 'inner' in err) {
    return (
      err &&
      err.inner.reduce((acc, error) => {
        const path = error.path || '';
        const message = error.message || 'unknown error';
        return { ...acc, [path]: message };
      }, {})
    );
  }
  return {};
}
