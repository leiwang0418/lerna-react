import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useIntl, defineMessages } from 'react-intl';
import UserRepositoriesListItem from './UserRepositoriesListItem';

interface Repository {
	id: string;
}

interface Props {
	repositories?: Repository[];
	isFetching?: boolean;
	hasError?: boolean;
}

const messages = defineMessages({
	error: {
		defaultMessage: '加载用户仓库列表失败',
		description: '加载用户仓库列表错误'
	},
	empty: {
		defaultMessage: '未发现仓库数据',
		description: '仓库数据为空提示'
	}
});

const UserRepositoriesList: FC<Props> = ({ repositories, isFetching, hasError }) => {
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
			{!isFetching && (undefined === repositories || repositories.length === 0) && (
				<ListItem alignItems="flex-start">
					<ListItemText primary={intl.formatMessage(messages.empty)} />
				</ListItem>
			)}
			{undefined !== repositories &&
				repositories.map((repository) => <UserRepositoriesListItem {...repository} key={repository.id} />)}
		</List>
	);
};

UserRepositoriesList.propTypes = {
	repositories: PropTypes.array,
	isFetching: PropTypes.bool,
	hasError: PropTypes.bool
};

UserRepositoriesList.defaultProps = {
	repositories: []
};

export default UserRepositoriesList;
