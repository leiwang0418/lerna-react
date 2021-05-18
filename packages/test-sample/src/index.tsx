import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';
import loadLocaleData from './utils/loadLocaleData';


export const bootstrapApp = async (locale: string, mainDiv: HTMLElement | null) => {
  const messages = await loadLocaleData(locale);
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
