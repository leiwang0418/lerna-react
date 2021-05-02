import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header render test', () => {
	test('renders the basic header', () => {
		const { container } = render(<Header />);
		const headerElement = screen.getByText(/请输入要查询的github账号:/i);
		expect(headerElement).toBeInTheDocument();
		
		expect(container).toMatchSnapshot();
	});
});
