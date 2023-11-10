import { useParams , Link} from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';

import useCoffeeService from '../../../services/CoffeeService';
import Spinner from '../../spinner/spinner';
import ErrorMessage from '../../errorMessage/error';

import './itemPage.css';
import coffee from '../../../resources/img/about/coffee-beans-black.svg';

const ItemPage = () => {

    const {itemId} = useParams();
    const [product, setProduct] = useState({});

    const {loading, error, getProduct} = useCoffeeService();

    useEffect(() => {
        updateProduct();
    }, [itemId]);

    const updateProduct = () => {
        getProduct(itemId)
            // .then(onProductLoaded)
            .then(res => {console.log(res)})
    }

    const onProductLoaded = (product) => {
        setProduct(product);
    }


    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const view = <View product={product}/> ;

    return (
        <>
            {/* {errorMessage}
            {spinner}
            {view} */}
        </>
    )
}

const View = ({product}) => {
    const { name, country, price, urlImg,  descr} = product;
    return (
        <section className="item">
            <div className="item__img">
                    <img src={urlImg} alt="coffee"/>
            </div>
            <div className="item__descr">
                <h2 className="item__title title--article">{name}</h2>
                <div className="devider">
                    <div className="devider__img">
                        <img src={coffee} alt="coffee"/>
                    </div>
                </div>
                    <div className="item__item item-descr">
                    <div className="item-descr__title">
                        <span  className="item-descr_bold">Country: </span>{country}
                    </div>
                    <div className="item-descr__descr">
                        <span  className="item-descr_bold">Description: </span>{descr}
                    </div>
                    <div className="item-descr__price">
                            <span  className="item-descr_bold">Price: </span> {price}$
                    </div>
                    </div>
                    <Link to="/catalog">Back to all</Link>
            </div>
        </section>
    );
}
export default ItemPage;
