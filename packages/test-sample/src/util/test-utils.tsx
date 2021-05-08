import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import messages from '../locale';

const userLocale = "zh-CN";

const render = (
	ui: React.ReactElement,
	renderOptions?: Omit<RenderOptions, 'queries'>,
) => {
	
	const Wrapper: React.FC = ({ children }) => (
		<IntlProvider locale={userLocale} messages={messages[userLocale]}>{children}</IntlProvider>
	);

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';

export { render };
