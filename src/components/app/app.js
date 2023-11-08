import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './app.css';
import {MainPage, CatalogPage, PleasurePage} from '../pages';

import Footer from '../footer/footer';

const App = () => {


    return (
        <Router>
            <div className="app">
                <div className="wrapper">
                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>

                    <Route exact path="/catalog">
                        <CatalogPage/>
                    </Route>

                    <Route exact path="/pleasure">
                        <PleasurePage/>
                    </Route>
                </Switch>
                <Footer/>
	            </div>
            </div>
        </Router>
        )

}

export default App;
