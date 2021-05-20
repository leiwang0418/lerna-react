import userReducer, {UserState, setUsername} from './HomeSlice';

const initialState: UserState = {
	username: 'lei',
	isEditing: true
};


describe('HomeSlice reducer', () => {
	it('should handle setUsername', () => {
		const actual = userReducer(initialState, setUsername('lei wang'));
		console.log('actual', actual);
		expect(actual.username).toEqual("lei wang");
		expect(actual.isEditing).toEqual(false);
	})
})