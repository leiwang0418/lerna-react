import React, { FC, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Divider, IconButton, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useIntl, defineMessage } from 'react-intl';

interface Props {
	name?: string, 
	description?: string,
	html_url?: string
}

const UserRepositoriesListItem: FC<Props> = ({ name, description, html_url }) => {
	return (
		<Fragment>
		todo...
			<ListItem alignItems="flex-start">
				<ListItemText primary={name} secondary={description} />
			</ListItem>
		</Fragment>
		);
};

export default UserRepositoriesListItem;
