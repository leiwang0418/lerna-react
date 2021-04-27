import React from 'react';
import MatButton from '@material-ui/core/Button';

interface Props {
	type?: any;
	disabled?: boolean;
	children?: React.ReactNode;
}

function Button(props: Props) {
	const { type, disabled, children } = props;
	return (
		<MatButton variant="contained" color={type} disabled={disabled}>
			{children}
		</MatButton>
	);
}

export default Button;

export const a  = 123;