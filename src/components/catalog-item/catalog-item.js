import './catalog-item.css';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


const  CatalogItem = (props) => {
        const {name, type, weight, country, price, img, id} = props;
    return (
        <Link to={`/catalog/${id}`}
            className="catalog__item"
            >
            <div className="catalog__item-img">
                <img src={img} alt="coffee"/>
            </div>
            <div className="catalog_item-header product">
                <p> <span>{name}</span></p>
                <p>{type}</p>
                <p>{weight}</p>
            </div>
            <div className="catalog__item-country">
                {country}
            </div>
            <div className="catalog__item-price">
                {price + '$'}
            </div>
        </Link>
    )

}

CatalogItem.propTypes = {
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default CatalogItem;
