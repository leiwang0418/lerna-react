import React, { FC } from "react";
import { render, RenderOptions } from "@testing-library/react";

// const customRender = (
// 	ui: React.ReactElement,
// 	{...renderOptions } = {}
// ) => {
// 	const Wrapper: FC = ({ children }) => (
// 		<IntlProvider locale={locale} messages={zh}>
// 			<Provider store={store}>
// 				<Router>{children}</Router>
// 			</Provider>
// 		</IntlProvider>
// 	);

// 	return render(ui, { wrapper: Wrapper, ...renderOptions });
// };
const customRender = render;

export * from "@testing-library/react";

export { customRender as render };
