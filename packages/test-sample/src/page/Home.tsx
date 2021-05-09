import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserSelection from './UserSelection';
import PublicRepositoriesList from './PublicRepositoriesList';

interface Props {
	isEditingUsername?: boolean;
}

const Home: FC<Props> = ({ isEditingUsername }) => (
	<Router>
		<Switch>
			{isEditingUsername && <Route path="/" component={UserSelection} />}
			<Route path="/" component={PublicRepositoriesList} />
		</Switch>
	</Router>
);

Home.defaultProps = {
	isEditingUsername: false
};

Home.propTypes = {
	isEditingUsername: PropTypes.bool
};

export default Home;
