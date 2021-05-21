import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl, defineMessage } from 'react-intl';
import UserRepositoriesList from '../components/UserRepositories/UserRepositoriesList';
import { useAppSelector } from '../store/hooks';
import { selectUsername } from './homeSlice';

const useStyles = makeStyles((theme) => ({
	header: {
		margin: theme.spacing(3, 0, 2, 0),
	},
}));

const message = defineMessage({
	defaultMessage: '{username}的公共仓库:',
	description: '仓库列表头信息',
});

const PublicRepositoriesList = () => {
	const classes = useStyles();
	const intl = useIntl();
	const username = useAppSelector(selectUsername);

	return (
		<Container maxWidth="md">
			<Typography
				variant="h3"
				component="h1"
				className={classes.header}
				gutterBottom
			>
				{intl.formatMessage(message, { username })}
			</Typography>
			<UserRepositoriesList />
		</Container>
	);
};

export default PublicRepositoriesList;
