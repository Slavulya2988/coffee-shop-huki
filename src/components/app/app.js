import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './app.css';
import {MainPage, CatalogPage, PleasurePage, ItemPage} from '../pages';

import Footer from '../footer/footer';

const Page404 = lazy(() => import('../pages/404'));

const App = () => {


    return (
        <Router>
            <div className="app">
                <div className="wrapper">
                <Suspense fallback={<span>Loading...</span>}>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>

                        <Route exact path="/catalog">
                            <CatalogPage/>
                        </Route>

                        <Route exact path="/catalog/:itemId">
                            <ItemPage/>
                        </Route>

                        <Route exact path="/pleasure">
                            <PleasurePage/>
                        </Route>

                        <Route path="*">
                            <Page404/>
                        </Route>

                    </Switch>
                </Suspense>
                <Footer/>
	            </div>
            </div>
        </Router>
        )

}

export default App;
