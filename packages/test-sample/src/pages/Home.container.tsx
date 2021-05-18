import { connect } from 'react-redux';
import Home from './Home';
import * as userSelectors from '../store/user/selectors';

interface State {
	user: { isEditing: boolean };
}

const mapStateToProps = (state: State) => ({
	isEditingUsername: userSelectors.isEditingUsername(state),
});

export default connect(mapStateToProps)(Home);

export type UserState = State;
