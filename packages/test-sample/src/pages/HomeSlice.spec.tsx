import userReducer, {
	UserState,
	setUsername,
	selectUsername,
	selectIsEditing,
} from './HomeSlice';
import { RootState } from '../store';

const initialState: UserState = {
	username: 'lei',
	isEditing: true,
};

describe('HomeSlice initialState', () => {
	it('should handle initial state', () => {
		expect(userReducer(undefined, { type: 'unknown' })).toEqual({
			username: 'leiwang0418',
			isEditing: true,
		});
	});
});

describe('HomeSlice reducer', () => {
	it('should handle setUsername', () => {
		const actual = userReducer(initialState, setUsername('lei wang'));
		expect(actual.username).toEqual('lei wang');
		expect(actual.isEditing).toEqual(false);
	});
});

describe('HomeSlice selector', () => {
	const HomeState: RootState = {
		user: {
			username: 'lei',
			isEditing: true,
		},
	};

	it('should select username', () => {
		expect(selectUsername(HomeState)).toEqual('lei');
	});

	it('should select isEditing', () => {
		expect(selectIsEditing(HomeState)).toEqual(true);
	});
});
