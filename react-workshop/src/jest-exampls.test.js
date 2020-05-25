import { sum, divide } from './operate'

test('', () => {
    expect(2 + 2).toBe(4)
})

test('', () => {
    const data = {
        foo: 'foo',
        bar: 'bar'
    }
    delete data.bar
    expect(data).toEqual({foo:'foo'})
})

test('', () => {
    expect(sum(2, 2)).toBe(4)
})

test('', () => {
    expect(divide(2, 2)).toBe(1)
    // expect(divide(2, 0)).toThrow()
})