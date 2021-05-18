import { connect } from 'react-redux';
import UserSelectionForm from './UserSelectionForm';
import * as userSelectors from '../store/user/selectors';

interface State {
	user: { name: string };
}

const mapToProps = (state: State) => ({
	username: userSelectors.getUsername(state),
});

export default connect(mapToProps)(UserSelectionForm);

export type UserFormState = State;
