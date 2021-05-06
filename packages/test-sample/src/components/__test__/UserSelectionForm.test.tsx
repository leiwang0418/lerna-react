import React from 'react';
import { render } from '@testing-library/react';
// import '../../util/localization';
import UserSelectionForm from '../UserSelectionForm';


// jest.import intl from 'react-intl-universal';
const intl = jest.genMockFromModule('react-intl-universal');

describe('snapshot test', () => {
	it('render snapshot', () => {
		const { container } = render(<UserSelectionForm />);

		// expect(container).toMatchSnapshot();
	});
});

// describe('act', () => {
	
// })
