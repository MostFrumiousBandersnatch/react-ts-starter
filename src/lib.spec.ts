import {helloWorld} from "@root/lib"

describe('lib', () => {
  it('should greet the world', () => {
    expect(helloWorld()).toBe('Hello World!');
  })
})
