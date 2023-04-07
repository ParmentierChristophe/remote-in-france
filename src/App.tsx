import React from 'react';
import { CompanyList } from './presentation/pages/CompanyList';
import { Provider } from 'inversify-react';
import 'reflect-metadata';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navigation } from './presentation/components/Navigation';
import { Footer } from './presentation/components/Footer';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { CompanyDetail } from './presentation/pages/CompanyDetail';
import { container } from './core/infra/config/config';

function App() {
	return (
		<div>
			<HashRouter>
				<ChakraProvider theme={theme} resetCSS={false}>
					<Provider container={container}>
						<Navigation />
						<Routes>
							<Route path="/" element={<CompanyList />} />
							<Route
								path="company/:companyId"
								element={<CompanyDetail />}
							/>
						</Routes>
						<Footer />
					</Provider>
				</ChakraProvider>
			</HashRouter>
		</div>
	);
}

export default App;
