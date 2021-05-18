import { render } from '../../utils/test-utils';
import PublicRepositoriesList from '../PublicRepositoriesList';

jest.mock('../../components/UserRepositories/UserRepositoriesList', () => () => <div />);

describe('snapshot test with mock', () => {
	it('renders the basic PublicRepositories List page', () => {
		const {container } = render(<PublicRepositoriesList />);

		expect(container).toMatchSnapshot();
	})
})
