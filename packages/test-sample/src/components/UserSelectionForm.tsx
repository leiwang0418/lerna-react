import React, { FC, useState } from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

const GitHubUserInputProps = {
	startAdornment: (
		<InputAdornment position="start">
			<AccountCircle />
		</InputAdornment>
	),
};

interface Props {
	username?: string;
	setUsername?: Function;
}

const useStyles = makeStyles((theme) => ({
	button: {
		marginTop: theme.spacing(1),
	},
}));

const UserSelectionForm: FC<Props> = ({ username, setUsername }) => {
	const classes = useStyles();
	const [newUsername, setNewUsername] = useState(username);
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		console.log('handleSubmit');
	};
	const handleChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		const value = e.currentTarget.value;
		console.log('handleChangeUsername:' + value);
		setNewUsername(value);
	};
	return (
		<form onSubmit={handleSubmit}>
			<Grid container alignItems="center">
				<Grid item xs={12}>
					<TextField
						label={intl.get('userSelection.usernameLabel')}
						placeholder={intl.get(
							'userSelection.usernamePlaceholder'
						)}
						InputProps={GitHubUserInputProps}
						required
						fullWidth
						value={newUsername}
						onChange={handleChangeUsername}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						fullWidth
						className={classes.button}
					>
						{intl.get('userSelection.submitButtonText')}
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

UserSelectionForm.defaultProps = {
	username: 'leiwang0418'
};

UserSelectionForm.propTypes = {
	username: PropTypes.string,
	setUsername: PropTypes.func,
};

export default UserSelectionForm;
