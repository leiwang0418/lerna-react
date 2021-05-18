import React from 'react';
import { render } from '@testing-library/react';

import Home from '../Home';

jest.mock('../UserSelection', () => () => <div />);
jest.mock('../PublicRepositoriesList', () => () => <div />);

describe('snapshot test with mock', () => {
	test('renders the UserSelection', () => {
		const { container } = render(<Home isEditingUsername={true} />);

		expect(container).toMatchSnapshot();
	});

	test('renders the public repositories list', () => {
		const { container } = render(<Home isEditingUsername={false} />);

		expect(container).toMatchSnapshot();
	});
});
