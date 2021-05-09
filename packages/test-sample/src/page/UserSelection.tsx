import React, { useState } from 'react';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserSelectionForm from '../components/UserSelectionForm';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2)
	}
}));

const UserSelection = () => {
	const classes = useStyles();
	const [username, setUsername] = useState('');

	return (
		<Container maxWidth="sm">
			<Paper className={classes.paper}>
				<UserSelectionForm username={username} setUsername={setUsername} />
			</Paper>
		</Container>
	);
};

export default UserSelection;
