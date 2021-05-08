import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';
import messages from './locale'

const userLocale = "zh-CN";
// const userLocale = "en-US";

ReactDOM.render(
	<React.StrictMode>
		<IntlProvider locale={userLocale} messages={messages[userLocale]}>
			<App />
		</IntlProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
