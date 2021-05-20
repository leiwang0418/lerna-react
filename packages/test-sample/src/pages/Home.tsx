import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserSelection from './UserSelection';
import PublicRepositoriesList from './PublicRepositoriesList';
import { useAppSelector } from '../store/hooks';
import { selectIsEditing } from './HomeSlice';

const Home: FC = () => {
	const isEditing = useAppSelector(selectIsEditing);
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
