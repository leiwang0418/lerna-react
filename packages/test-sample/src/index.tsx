import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';

function loadLocaleData(locale: string): Record<string, string> | Record<string, MessageFormatElement[]> | undefined {
	switch (locale) {
		case 'en':
			return import('../compiled-lang/en.json')
		default:
			return import('../compiled-lang/zh.json')
	}
}
// const loadLocaleData: Promise<Record<string, string>> = (locale: string) => {
// 	switch (locale) {
// 		case 'en':
// 			return import('../compiled-lang/zh.json')
// 		default:
// 			return import('../compiled-lang/zh.json')
// 	}
// }

async function bootstrapApp(locale: string, mainDiv: HTMLElement | null) {
	const messages = loadLocaleData(locale);

	ReactDOM.render(
		<React.StrictMode>
			<IntlProvider locale={locale} messages={messages}>
				<App />
			</IntlProvider>
		</React.StrictMode>,
		mainDiv
	);
}

bootstrapApp('zh', document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Record<string, string> | Record<string, MessageFormatElement[]> | undefined
