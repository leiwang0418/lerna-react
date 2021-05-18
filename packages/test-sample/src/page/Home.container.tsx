import { connect } from 'react-redux';
import Home from './Home';
import * as userSelectors from '../store/user/selectors';

interface State {
	user: { isEditing: boolean };
}

export default connect((state: State) => ({
	isEditingUsername: userSelectors.isEditingUsername(state),
}))(Home);

export type UserState = State;
