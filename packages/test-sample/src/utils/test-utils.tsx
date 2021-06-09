import React, { FC } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import zh from "../compiled-lang/zh.json";
import { Provider } from "react-redux";
import { rootReducer } from "../store";

import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const configStore = () => {
	return createStore(combineReducers(rootReducer), applyMiddleware(thunk));
};

const customRender = (
	ui: React.ReactElement,
	{ locale = "zh", store = configStore(), ...renderOptions } = {}
) => {
	const Wrapper: FC = ({ children }) => (
		<IntlProvider locale={locale} messages={zh}>
			<Provider store={store}>
				<Router>{children}</Router>
			</Provider>
		</IntlProvider>
	);

	return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";

export { customRender as render };
export const store = configStore();
