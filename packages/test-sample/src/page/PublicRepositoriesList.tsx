import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useIntl } from 'react-intl';

const useStyles = makeStyles((theme) => ({
	header: {
		margin: theme.spacing(3, 0, 2, 0)
	}
}));

const PublicRepositoriesList = () => {
	const classes = useStyles();
	const {formatMessage: f} = useIntl();
	const username = "test";
	return (
		<Container maxWidth="md">
			<Typography variant="h3" component="h1" className={classes.header} gutterBottom>
			{f({id: 'repositories.header'}, {username})}
			</Typography>
		</Container>
	);
};

export default PublicRepositoriesList;
