import ReactDOM from 'react-dom';
import { render, screen } from '@test-utils';
import { bootstrapApp } from './index';

jest.mock('react-dom', () => ({
	render: jest.fn(),
}));

it('renders without crashing', () => {
	const container = document.createElement('div');
	bootstrapApp('zh', container);

	expect(ReactDOM.render).toBeCalled;
});
