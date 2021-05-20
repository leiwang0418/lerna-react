import React from 'react';
import { render, screen, fireEvent } from '../utils/test-utils';
import UserSelectionForm from './UserSelectionForm';


import { Provider, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store';


const setup = () => {
	const mockSetUsername = jest.spyOn(require("../pages/HomeSlice"), 'setUsername');
	const initialState = { user: { username: 'leiwang0418', isEditing: true } };
	const mockStore = configureStore();
	const store = mockStore(initialState);

	const { container } = render(
		<Provider store={store}>
			<UserSelectionForm />
		</Provider>
	);

	const input = screen.getByDisplayValue(/leiwang0418/i);
	const submit = screen.getByRole('button');

	return { input, submit, mockSetUsername, container };
};

describe('snapshot test', () => {
	it('renders the basic UserSelectionForm', () => {
		const { container } = setup();

		expect(container).toMatchSnapshot();

		expect(screen.getByPlaceholderText(/请输入GitHub用户名/i)).toBeInTheDocument();
		expect(screen.getByDisplayValue(/leiwang0418/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toHaveTextContent('查看仓库列表');
	});
});

describe('act test', () => {
	it('change search value', () => {
		const { input } = setup();
		fireEvent.change(input, { target: { value: 'lei' } });

		expect(screen.getByDisplayValue('lei') === input).toBe(true);
	});

	it('submit clicked', () => {
		const { mockSetUsername, input, submit } = setup();
		fireEvent.click(submit);

		expect(mockSetUsername).toHaveBeenCalled();
	});
});
