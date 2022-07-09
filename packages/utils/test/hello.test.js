import hello from '../src/hello';

describe('hello', () => {
    test('match output', () => {
        const result = hello();
        const output = 'hello world!'
        expect(result).toBe(output);
    })
})