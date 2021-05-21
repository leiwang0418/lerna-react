import userReducer, {
	UserState,
	setUsername,
	selectUsername,
	selectIsEditing,
} from './homeSlice';
import { RootState } from '../store';

const initialState: UserState = {
	username: 'lei',
	isEditing: true,
};

describe('homeSlice initialState', () => {
	it('should handle initial state', () => {
		expect(userReducer(undefined, { type: 'unknown' })).toEqual({
			username: 'leiwang0418',
			isEditing: true,
		});
	});
});

describe('homeSlice reducer', () => {
	it('should handle setUsername', () => {
		const actual = userReducer(initialState, setUsername('lei wang'));
		expect(actual.username).toEqual('lei wang');
		expect(actual.isEditing).toEqual(false);
	});
});

describe('homeSlice selector', () => {
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
