import { transformObjectInArrayOfKeyValue } from './transform-object-in-array-of-key-value';

describe('transformObjectInArrayOfKeyValue', () => {
  it('returns a list of objects with key and value', () => {
    const data = {
      login: 'pedromonad',
      name: 'Pedro Monad',
      email: 'pedrobarrostech@gmail.com'
    };

    expect(transformObjectInArrayOfKeyValue(data)).toEqual([
      { key: 'login', value: 'pedromonad' },
      { key: 'name', value: 'Pedro Monad' },
      { key: 'email', value: 'pedrobarrostech@gmail.com' }
    ]);
  });
});
