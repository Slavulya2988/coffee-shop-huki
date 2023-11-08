import './catalogMain.css';
import coffee1 from '../../resources/img/catalog/coffee_1.jpg';
import coffee2 from '../../resources/img/catalog/coffee_2.jpg';
import coffee3 from '../../resources/img/catalog/coffee_3.jpg';

const CatalogMain = () => {
    return(
        <div className="catalog catalog_main">
            <div className="catalog__container">
                <h2 className="catalog__container title--article">Our best</h2>

                <div className="catalog__items">
                    <a href="#" className="catalog__item">
                        <div className="catalog__item-img">
                            <img src={coffee1} alt=""/>
                        </div>
                        <div className="catalog_item-header">
                            Solimo Coffee Beans 2 kg
                        </div>

                        <div className="catalog__item-price">
                            6.99$
                        </div>
                    </a>
                    <a href="#"  className="catalog__item">
                        <div className="catalog__item-img">
                            <img src={coffee2} alt=""/>
                        </div>
                        <div className="catalog_item-header">
                            AROMISTICO Coffee 1 kg
                        </div>

                        <div className="catalog__item-price">
                            6.99$
                        </div>
                    </a>
                    <a href="#"  className="catalog__item">
                        <div className="catalog__item-img">
                            <img src={coffee3} alt=""/>
                        </div>
                        <div className="catalog_item-header">
                            AROMISTICO Coffee 1 kg
                        </div>

                        <div className="catalog__item-price">
                            6.99$
                        </div>
                    </a>

                </div>
             </div>
        </div>
    )
}

export default CatalogMain;
