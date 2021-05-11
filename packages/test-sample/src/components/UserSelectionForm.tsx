import React, { FC, useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessage } from 'react-intl';

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
	setUsername: Function;
}

const useStyles = makeStyles((theme) => ({
	button: {
		marginTop: theme.spacing(1),
	},
}));

const message = {
	searchFiled: {
		label: defineMessage({
			defaultMessage: 'GitHub用户名',
			description: '用户名查询框label',
		}),
		placeholder: defineMessage({
			defaultMessage: '请输入GitHub用户名',
			description: '用户名查询框label默认提示',
		}),
	},
	submitText: defineMessage({
		defaultMessage: '查看仓库列表',
		description: '查看仓库列表提交按钮显示内容',
	}),
};

const UserSelectionForm: FC<Props> = ({ username, setUsername }) => {
	const intl = useIntl();
	const classes = useStyles();
	const [newUsername, setNewUsername] = useState(username);

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		setUsername(newUsername);
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
						label={intl.formatMessage(message.searchFiled.label)}
						placeholder={intl.formatMessage(
							message.searchFiled.placeholder
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
						{intl.formatMessage(message.searchFiled.submitText)}
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

UserSelectionForm.defaultProps = {
	username: 'leiwang0418',
};

UserSelectionForm.propTypes = {
	username: PropTypes.string,
	setUsername: PropTypes.func.isRequired,
};

export default UserSelectionForm;
