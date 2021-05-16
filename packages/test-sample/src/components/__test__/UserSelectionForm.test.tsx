import React from 'react';
import { render, screen, fireEvent } from '../../util/test-utils';
import UserSelectionForm from '../UserSelectionForm';

const username = 'leiwang0418';
const setUsername = jest.fn();

describe('snapshot test', () => {
	it('renders the basic UserSelectionForm', () => {
		const { container } = render(
			<UserSelectionForm username={username} setUsername={setUsername} />
		);

		expect(container).toMatchSnapshot();

		expect(
			screen.getByPlaceholderText(/请输入GitHub用户名/i)
		).toBeInTheDocument();
		expect(screen.getByDisplayValue(/leiwang0418/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toHaveTextContent('查看仓库列表');
	});
});

describe('act test', () => {
	const setup = () => {
		const utils = render(
			<UserSelectionForm username={username} setUsername={setUsername} />
		);
		const input = screen.getByDisplayValue(/leiwang0418/i);
		const submit = screen.getByRole('button');
		return {
			input,
			submit,
			...utils,
		};
	};

	it('change search value', () => {
		const { input, submit } = setup();
		fireEvent.change(input, { target: { value: 'lei' } });

		expect(screen.getByDisplayValue('lei') === input).toBe(true);
	});

	it('submit clicked', () => {
		const { input, submit } = setup();
		fireEvent.click(submit);

		expect(setUsername).toHaveBeenCalled();
	});
});
