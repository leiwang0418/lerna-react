import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import messages from '../compiled-lang/zh.json';

const render = (
	ui: React.ReactElement,
	{locale='zh', messages={messages}, ...renderOptions} = {}
) => {
	const Wrapper: React.FC = ({ children }) => (
		<IntlProvider locale={locale} messages={zh}>{children}</IntlProvider>
	);

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';

export { render };
