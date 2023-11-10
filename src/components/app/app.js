import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './app.css';
import {MainPage, CatalogPage, PleasurePage, Page404, ItemPage} from '../pages';

import { useCoffeeService } from '../services/CoffeeService';

import Footer from '../footer/footer';

const App = () => {
// отримання одного елемента у массиві по id
const {getProduct} = useCoffeeService();
const coffeeService = getProduct(0);
coffeeService.then(res => console.log(res));

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
                <Footer/>
	            </div>
            </div>
        </Router>
        )

}

export default App;
