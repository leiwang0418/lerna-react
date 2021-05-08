import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import messages from '../locale';

const userLocale = "zh-CN";

const render = (
	ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
	{ ...renderOptions } = {}
) => {
	
	const Wrapper: React.FC = ({ children }) => (
		<IntlProvider locale={userLocale} messages={messages[userLocale]}>{children}</IntlProvider>
	);

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';

export { render };
