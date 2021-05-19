import React from 'react';
import { render } from '@testing-library/react';

import Home from '../Home';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

jest.mock('../UserSelection', () => () => <div />);
jest.mock('../PublicRepositoriesList', () => () => <div />);

describe('snapshot test with mock', () => {

	const setup = (isEditing: boolean) => {
		const initialState = { user: {isEditing: isEditing} };
		const mockStore = configureStore();
		const store = mockStore(initialState);

		const { container } = render(
			<Provider store={store}>
				<Home />
			</Provider>
		);

		return { container };
	};

	test('renders the UserSelection', () => {
		const { container } = setup(true);

		expect(container).toMatchSnapshot();
	});

	test('renders the public repositories list', () => {
		const { container } = setup(false);

		expect(container).toMatchSnapshot();
	});
});
