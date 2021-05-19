import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import {store} from './store';
import Home from './pages/Home';

function App() {
	return (
		<CssBaseline>
			<Provider store={store}>
				<Home />
			</Provider>
		</CssBaseline>
	);
}

export default App;
