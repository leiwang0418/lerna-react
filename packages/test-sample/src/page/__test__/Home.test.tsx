import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';
import MockUserSelection from '../UserSelection';
import MockPublicRepositoriesList from '../PublicRepositoriesList';


jest.mock('../UserSelection', () => () => <div />);
jest.mock('../PublicRepositoriesList', () => () => <div />);

describe('snapshot test with mock', () => {
	test('renders the basic home', () => {
		const { container } = render(<Home />);

		expect(container).toMatchSnapshot();
	});
});
