import React from 'react';
import { render } from '../../util/test-utils';
import UserSelectionForm from '../UserSelectionForm';

describe('snapshot test', () => {
	it('render snapshot', () => {
		const { container } = render(<UserSelectionForm />);

		expect(container).toMatchSnapshot();
	});
});

// todo add act test
// describe('act', () => {
	
// })
