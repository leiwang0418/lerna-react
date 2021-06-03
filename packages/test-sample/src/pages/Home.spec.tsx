import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import * as hooks from '../store/hooks';

jest.mock('./UserSelection', () => () => <div>UserSelection</div>);
jest.mock('./PublicRepositoriesList', () => () => <div>PublicRepositoriesList</div>);

describe('snapshot test with mock', () => {
	const useSelectorMock = jest.spyOn(hooks, 'useAppSelector');

	test('renders the UserSelection', () => {
		useSelectorMock.mockReturnValue(true);
		const { container } = render(<Home />);

		expect(container).toMatchSnapshot();
	});

	test('renders the public repositories list', () => {
		useSelectorMock.mockReturnValue(false);
		const { container } = render(<Home />);

		expect(container).toMatchSnapshot();
	});
});
