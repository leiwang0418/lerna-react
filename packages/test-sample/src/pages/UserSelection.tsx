import React from 'react';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserSelectionForm from '../components/UserSelectionForm';

const UserSelection = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="sm">
			<Paper className={classes.paper}>
				<UserSelectionForm />
			</Paper>
		</Container>
	);
};

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2)
	}
}));

export default UserSelection;
