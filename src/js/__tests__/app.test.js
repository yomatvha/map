import ErrorRepository from '../app';

test('translateCheck', () => {
  const errorRepository = new ErrorRepository();
  const code = 404;
  const result = 'Error 404';
  errorRepository.errors.set(404, 'Error 404');
  const error = errorRepository.translate(code);
  expect(result).toEqual(error);
});

test('translateCheck', () => {
  const errorRepository = new ErrorRepository();
  const code = 404040;
  const result = 'Unknown error';
  errorRepository.errors.set(404, 'Error 404');
  const error = errorRepository.translate(code);
  expect(result).toEqual(error);
});
