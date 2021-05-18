import React, { FC } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import zh from '../compiled-lang/zh.json';

const render = (
	ui: React.ReactElement,
	{ locale = 'zh', ...renderOptions } = {}
) => {
	const Wrapper: FC = ({ children }) => (
		<IntlProvider locale={locale} messages={zh}>
			{children}
		</IntlProvider>
	);

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';

export { render };
