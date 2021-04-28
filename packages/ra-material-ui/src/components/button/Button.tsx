import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

const Button = ({ label = 'Hello', ...props }) => (
	<button {...props}>{label}</button>
);

export default Button;