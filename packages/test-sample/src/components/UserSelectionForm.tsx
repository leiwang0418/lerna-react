import React, { FC, useState } from 'react';
import { useIntl, defineMessages } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { useAppSelector, useAppDispatch } from '@hooks';
import { selectUsername, setUsername } from '../pages/userSelectionSlice';

const UserSelectionForm: FC = () => {
	const intl = useIntl();
	const classes = useStyles();
	const username = useAppSelector(selectUsername);
	const dispatch = useAppDispatch();

	const [newUsername, setNewUsername] = useState(username);

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		dispatch(setUsername(newUsername));
	};

	const handleChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		const value = e.currentTarget.value;
		setNewUsername(value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Grid container alignItems="center">
				<Grid item xs={12}>
					<TextField
						label={intl.formatMessage(messages.searchFiledLabel)}
						placeholder={intl.formatMessage(
							messages.searchFiledPlaceholder
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
						{intl.formatMessage(messages.submitText)}
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

const GitHubUserInputProps = {
	startAdornment: (
		<InputAdornment position="start">
			<AccountCircle />
		</InputAdornment>
	),
};

const useStyles = makeStyles((theme) => ({
	button: {
		marginTop: theme.spacing(1),
	},
}));

const messages = defineMessages({
	searchFiledLabel: {
		defaultMessage: 'GitHub?????????',
		description: '??????????????????label',
	},
	searchFiledPlaceholder: {
		defaultMessage: '?????????GitHub?????????',
		description: '??????????????????label????????????',
	},
	submitText: {
		defaultMessage: '??????????????????',
		description: '??????????????????????????????????????????',
	},
});

export default UserSelectionForm;
