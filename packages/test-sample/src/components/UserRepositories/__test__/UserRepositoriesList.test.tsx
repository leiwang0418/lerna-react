import React from 'react';
import { render } from '../../../utils/test-utils';
import UserRepositoriesList from '../UserRepositoriesList';

describe('snaphost test', () => {
	it('renders the basic UserRepositoriesList', () => {
		const { container } = render(<UserRepositoriesList />);
		
		expect(container).toMatchSnapshot();
	});
});
