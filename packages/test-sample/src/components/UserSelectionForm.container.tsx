import { connect } from 'react-redux';
import UserSelectionForm from './UserSelectionForm';
import * as userSelectors from '../store/user/selectors';
import * as userActions from '../store/user/actions';

interface State {
	user: { name: string };
}


const mapToProps = (state: State) => ({
	username: userSelectors.getUsername(state),
});

export default connect(mapToProps, userActions)(UserSelectionForm);

export type UserFormState = State;
