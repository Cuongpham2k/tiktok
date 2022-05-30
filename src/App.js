import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((a, index) => {
                       
                        const Page = a.components;
                        let Layout = DefaultLayout
                        if(a.layout){
                            Layout = a.layout
                        }else if(a.layout === null){
                            Layout = Fragment
                        }
                        return (
                            <Route
                                key={index}
                                path={a.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
