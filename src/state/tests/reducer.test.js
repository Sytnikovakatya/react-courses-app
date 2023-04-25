import reducer from '../coursesSlice';

test('should return the initial state', () => {
	expect(reducer(undefined, { type: undefined })).toEqual([]);
});
