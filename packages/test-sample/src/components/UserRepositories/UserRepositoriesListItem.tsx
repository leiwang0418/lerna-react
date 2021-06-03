import React, { FC, Fragment } from "react";
import PropTypes from "prop-types";
import {
	Divider,
	IconButton,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useIntl, defineMessage } from "react-intl";

export interface Props {
	name: string;
	description?: string;
	html_url: string;
}

const UserRepositoriesListItem: FC<Props> = ({
	name,
	description,
	html_url,
}) => {
	const intl = useIntl();

	return (
		<Fragment>
			<ListItem alignItems="flex-start">
				<ListItemText primary={name} secondary={description} />
				<ListItemSecondaryAction>
					<IconButton
						edge="end"
						aria-label={intl.formatMessage(message)}
						href={html_url}
						target="_blank"
					>
						<GitHubIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
			<Divider component="li" />
		</Fragment>
	);
};

const message = defineMessage({
	defaultMessage: "前往github查看",
	description: "前往github查看",
});

UserRepositoriesListItem.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string,
	html_url: PropTypes.string.isRequired,
};

export default UserRepositoriesListItem;
