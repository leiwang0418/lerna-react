import React from 'react';
import { render, screen, fireEvent } from '../utils/test-utils';
import UserSelectionForm from './UserSelectionForm';

describe('snapshot test', () => {
	it('renders the basic UserSelectionForm', () => {
		const { container } = render(<UserSelectionForm />);

		expect(container).toMatchSnapshot();

		expect(
			screen.getByPlaceholderText(/请输入GitHub用户名/i)
		).toBeInTheDocument();
		expect(screen.getByDisplayValue(/leiwang0418/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toHaveTextContent('查看仓库列表');
	});
});

describe('act test', () => {
	it('change search value', () => {
		render(<UserSelectionForm />);
		const input = screen.getByDisplayValue(/leiwang0418/i);
		fireEvent.change(input, { target: { value: 'lei' } });

		expect(screen.getByDisplayValue('lei') === input).toBe(true);
	});

	it('submit clicked', () => {
		const mockSetUsername = jest.spyOn(require("../pages/userSelectionSlice"), 'setUsername');
		render(<UserSelectionForm />);
		const submit = screen.getByRole('button');
		fireEvent.click(submit);

		expect(mockSetUsername).toHaveBeenCalledTimes(1);
	});
});
