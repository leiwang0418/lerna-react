import React, { FC, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import UserSelection from "./pages/UserSelection";
import PublicRepositoriesList from "./pages/PublicRepositoriesList";
import { useAppSelector } from "./store/hooks";
import { selectIsEditing } from "./pages/userSelectionSlice";

const App: FC = () => {
	const isEditing = useAppSelector(selectIsEditing);
	return (
		<Fragment>
			<Switch>
				{isEditing && <Route path="/" component={UserSelection} />}
				<Route path="/" component={PublicRepositoriesList} />
			</Switch>
		</Fragment>
	);
};

export default App;
