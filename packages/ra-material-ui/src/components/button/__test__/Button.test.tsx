import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Basic, WithArgs } from '../Button.stories';

describe('Button test', () => {
	it('renders the button in the Basic state', () => {
		render(<Basic />);

		expect(screen.getByRole('button').textContent).toBe('Click me');
	});

	it('renders the button in the WithArgs state', () => {
		render(<WithArgs label={'no args'} />);

		expect(screen.getByRole('button').textContent).toBe('no args');
	});
});
