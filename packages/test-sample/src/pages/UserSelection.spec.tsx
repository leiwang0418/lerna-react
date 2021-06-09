import React from 'react';
import { render } from '@test-utils';

import UserSelection from './UserSelection';

jest.mock('../components/UserSelectionForm', () => () => <div>UserSelectionForm</div>);

describe('snapshot test with mock', () => {
	it('renders the basic selection page', () => {
		const { container } = render(<UserSelection />);

		expect(container).toMatchSnapshot();
	})
})
