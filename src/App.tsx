import React from 'react';
import {CompanyList} from './presentation/pages/CompanyList';
import {Provider} from 'inversify-react';
import 'reflect-metadata';
import {ChakraProvider, theme} from '@chakra-ui/react';
import {Navigation} from './presentation/components/Navigation';
import {Footer} from './presentation/components/Footer';
import {Route, Routes} from 'react-router-dom';
import {CompanyDetail} from './presentation/pages/CompanyDetail';
import {container} from './core/infra/config/config';

function App() {
    return (
        <div>
            <ChakraProvider theme={theme} resetCSS={false}>
                <Provider container={container} standalone={true} key={container.id}>
                    <Navigation/>
                    <Routes>
                        <Route path="/" element={<CompanyList/>}/>
                        <Route
                            path="/company/:companyId"
                            element={<CompanyDetail/>}
                        />
                    </Routes>
                    <Footer data-testid="footer"/>
                </Provider>
            </ChakraProvider>
        </div>
    );
}

export default App;