import { mul } from '../src';

test('multiply two numbers correctly', () => {
    const result = mul(2, 3);
    expect(result).toBe(6);
});
