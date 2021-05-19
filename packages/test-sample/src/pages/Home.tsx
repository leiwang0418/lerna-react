import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserSelection from './UserSelection';
import PublicRepositoriesList from './PublicRepositoriesList';
import { useSelector } from 'react-redux';
import { selectIsEditing } from './HomeSlice';

const Home: FC = () => {
	const isEditing = useSelector(selectIsEditing);
	return (
		<Router>
			<Switch>
				{isEditing && (
					<Route path="/" component={UserSelection} />
				)}
				<Route path="/" component={PublicRepositoriesList} />
			</Switch>
		</Router>
	);
};

export default Home;
