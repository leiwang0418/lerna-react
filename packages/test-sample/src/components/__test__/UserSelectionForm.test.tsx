import React from 'react';
import { render, screen, act } from '../../util/test-utils';
import UserSelectionForm from '../UserSelectionForm';

describe('snapshot test', () => {
	it('render snapshot', () => {
		const { container } = render(<UserSelectionForm />);

		expect(container).toMatchSnapshot();

		expect(
			screen.getByPlaceholderText(/请输入GitHub用户名/i)
		).toBeInTheDocument();
		expect(screen.getByDisplayValue(/leiwang0418/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toHaveTextContent('查看仓库列表');
	});
});

// todo add act test
// describe('act test', () => {
// 	it('change value when clicked', () => {
// 		act(() => {
// 			render(<UserSelectionForm />);
// 		});
// 	})
// })
