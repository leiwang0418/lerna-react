import React from 'react';
import Button from '.';
export default {
	title: 'Button'
};

export const basicButton = () => <Button> Basic Button</Button>;
export const coloredButton = () => (
	<>
		<Button type="primary"> Primary Button</Button>
		<Button type="secondary"> Secondary Button</Button>
	</>
);

export const disabledButton = () => <Button disabled> Primary Button</Button>;