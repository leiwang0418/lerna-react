import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoreProvider from './components/StoreProvider';
import Home from './page/Home';

function App() {
	return (
		<CssBaseline>
			<StoreProvider>
				<Home />
			</StoreProvider>
		</CssBaseline>
	);
}

export default App;
