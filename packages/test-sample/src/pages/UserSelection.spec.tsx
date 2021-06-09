import React from 'react';
import { render } from '@testing-library/react';

import UserSelection from './UserSelection';

jest.mock('../components/UserSelectionForm', () => () => <div>UserSelectionForm</div>);

describe('snapshot test with mock', () => {
	it('renders the basic selection page', () => {
		const { container } = render(<UserSelection />);

		expect(container).toMatchSnapshot();
	})
})
