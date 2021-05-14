import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { useIntl, defineMessages } from 'react-intl';

interface Props {
	hasError?: boolean;
}

const messages = defineMessages({
	error: {
		defaultMessage: '加载用户仓库列表失败',
		description: '加载用户仓库列表错误',
	},
	test: {
		defaultMessage: '加载用户仓库列表失败',
		description: '加载用户仓库列表错误',
	},
});

const UserRepositoriesList: FC<Props> = ({ hasError }) => {
	const intl = useIntl();

	if (hasError) {
		return (
			<Typography variant="body1" color="error" gutterBottom>
				{intl.formatMessage(messages.error)}
			</Typography>
		);
	}

	return (
		<List>
			-----
			<Typography variant="body1" color="error" gutterBottom>
				{intl.formatMessage(messages.test)}
			</Typography>
		</List>
	);
};

UserRepositoriesList.propTypes = {
	hasError: PropTypes.bool,
};

export default UserRepositoriesList;
