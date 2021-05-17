import React,{ FC, useMemo } from 'react';
import { Provider } from 'react-redux';
import createStore from '../store';

const StroeProvider: FC = ({children}) => {
	const store = useMemo(() => createStore(), []);

	return (
		<Provider store={store}>
			{children}
		</Provider>
		);
}

export default StroeProvider;