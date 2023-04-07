import React from 'react';
import { CompanyList } from './presentation/pages/CompanyList';
import { Provider } from 'inversify-react';
import 'reflect-metadata';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navigation } from './presentation/components/Navigation';
import { Footer } from './presentation/components/Footer';
import { Routes, Route } from 'react-router-dom';
import { CompanyDetail } from './presentation/pages/CompanyDetail';
import { container } from './core/infra/config/config';

function App() {
	return (
		<div>
			<ChakraProvider theme={theme} resetCSS={false}>
				<Provider container={container}>
					<Navigation />
					<Routes>
						<Route
							path="/remote-in-france"
							element={<CompanyList />}
						/>
						<Route
							path="remote-in-france/company/:companyId"
							element={<CompanyDetail />}
						/>
					</Routes>
					<Footer />
				</Provider>
			</ChakraProvider>
		</div>
	);
}

export default App;
