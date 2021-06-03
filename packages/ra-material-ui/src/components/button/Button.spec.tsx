import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';

import { Basic, WithArgs } from './Button.stories';

describe('Button test', () => {
	test('renders the button in the Basic state', () => {
		render(<Basic />);

		expect(screen.getByRole('button').textContent).toBe('Click me');
	});

	test('renders the button in the WithArgs state', () => {
		render(<WithArgs label={'no args'} />);

		expect(screen.getByRole('button').textContent).toBe('no args');
	});
});
