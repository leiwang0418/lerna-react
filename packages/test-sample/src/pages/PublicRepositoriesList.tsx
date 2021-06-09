import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useIntl, defineMessage } from "react-intl";
import UserRepositoriesList from "../components/UserRepositories/UserRepositoriesList";
import { useAppSelector } from "@hooks";
import { selectUsername } from "./userSelectionSlice";

import {
	fetchRepositories,
	fetchError,
	getList,
	isFetching,
} from "./publicRepositoriesListSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";

const PublicRepositoriesList = () => {
	const dispatch = useAppDispatch();
	const classes = useStyles();
	const intl = useIntl();
	const username = useAppSelector(selectUsername);

	useEffect(() => {
		dispatch(fetchRepositories(username));
	}, [username, dispatch]);

	return (
		<Container maxWidth="md">
			<Typography
				variant="h3"
				component="h1"
				className={classes.header}
				gutterBottom
			>
				{intl.formatMessage(message, { username })}
			</Typography>
			<UserRepositoriesList
				isFetching={useAppSelector(isFetching)}
				repositories={useAppSelector(getList)}
				hasError={useAppSelector(fetchError)}
			/>
		</Container>
	);
};

const useStyles = makeStyles((theme) => ({
	header: {
		margin: theme.spacing(3, 0, 2, 0),
	},
}));

const message = defineMessage({
	defaultMessage: "{username}的公共仓库:",
	description: "仓库列表头信息",
});

export default PublicRepositoriesList;
