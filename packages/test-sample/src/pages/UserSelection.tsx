import React, { useState } from 'react';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserSelectionForm from '../components/UserSelectionForm.container';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2)
	}
}));

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

export default UserSelection;
