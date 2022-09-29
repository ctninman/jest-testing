
const { expect } = require('expect');
const sum = require('./sandbox')


beforeEach(() => {
	count = 1;
})


test('should return the sum of a and b', () => {
	expect(sum(2, 2)).toBe(4)
})

test('should return a message that says invalid numbers', () => {
	expect(sum(2)).toBe('invalid numbers')
})

test('should match object with passed in object', () => {
	const data = { firstName: 'tony'};
	data['lastName'] = 'kim';

	expect(data).toEqual({firstName: 'tony', lastName: 'kim'})
})

test('should test if a value is null', () => {
	const thisIsNull = null;
	
	expect(thisIsNull).toBeNull();
	expect(thisIsNull).not.toBeTruthy();
})

test('should return return a sum greater than 2', () => {
	expect(sum(2,2)).toBeGreaterThan(2)
})

test('should expect string to contain the word over', () => {
	expect('stackoverflow').toMatch(/over/)
})


test('should include the word cowboys in array', () => {
	const nflList =  ['broncos', 'chiefs', 'cowboys', 'eagles']
	expect(nflList).toContain('cowboys')
})

const returnsError = ()  => {
	throw new Error('you did something wrong');
}

test('should throw an error when invoked', () => {
	expect(() => returnsError()).toThrow(Error);
})


// ASYNCHRONOUS
test('should resolve to a value that says go broncos', () => {
	return expect(Promise.resolve('go broncos!')).resolves.toBe('go broncos!')
})

test('should resolve to a value that says go mavs', async () => {
	await expect(Promise.resolve('go mavs!')).resolves.toBe('go mavs!')
})

test('should reject to an error value', () => {
	return expect(Promise.reject(new Error('cowboys'))).rejects.toThrow('cowboys')
})

// test('should return data from the fetch function', () => {
// 	return fetchData().then(data => {
// 		expect(data).toEqual({'firstName': 'Tony', 'lastName': 'kim'})
// 	})
// })


// MOCk FUNCTIONS

test('should return undefined by default', () => {
	const mock = jest.fn()

	const result = mock('booo cowboys')

	expect(mock).toHaveBeenCalledWith('booo cowboys')
})