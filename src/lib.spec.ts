import {greet} from '@root/lib';

describe('lib', () => {
  it('should greet the world', () => {
    expect(greet('World')).toBe('Hello World!');
  });

  it('should greet the world with respect', () => {
    expect(greet('world')).toBe('Hello World!');
  });
});
