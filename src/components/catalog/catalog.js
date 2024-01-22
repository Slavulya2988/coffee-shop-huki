import {useState, useEffect, useMemo} from 'react';
import useCoffeeService from '../../services/CoffeeService';
import CatalogItem from '../catalog-item/catalog-item';
import Spinner from '../../components/spinner/spinner';
import ErrorMessage from '../../components/errorMessage/error';

import './catalog.css';

const setContent = (process, Component, newItemLoading) => {
    switch (process){
        case  'waiting':
            return  <Spinner/>;
        case  'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
        case 'confirm':
            return <Component/>;
        case 'error':
        return  <ErrorMessage/> ;
        default:
            throw new Error ('Unexpected process state');
    }
}

const Catalog = (props) => {

    const [coffeList, setCoffeList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(6);
    const [itemEnded, setItemEnded] = useState(false);

    const { getAllProduct, process, setProcess} = useCoffeeService();

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line
    }, []);

    const onRequest = (offset, initial) => {
            initial ? setNewItemLoading(false) : setNewItemLoading(true);
            getAllProduct(offset)
                .then(onCoffeeListLoaded)
                .then(() => setProcess('confirm'));

    }


    const onCoffeeListLoaded = (newCoffeeList) => {
        let eneded = false;
        if(newCoffeeList.length > 8){
            eneded = true;
        }

        setCoffeList(offset => newCoffeeList);
        setNewItemLoading(false);
        setOffset(offset + 3);
        setItemEnded(eneded);
    }


    /* рендерінг усіх карток */
    const renderCatalogItem = (arr) =>{

        const cards = arr.map((item, i) => {
            // const {id, ...itemProps} = item;

            return(
                <CatalogItem
                    key={i}
                    {...item}/>
            )
        });

        return(
            <div className="catalog__items">
                {cards}
            </div>
        )
    }

    /* search product*/
    const searchProduct = (massiv, term) => {
        if(term.length === 0){
            return massiv;
        }

        return massiv.filter(item => {
            return item.name.toLowerCase().indexOf(term) > -1
        })

    }
    /* filter */
    const filterProduct = (massiv, filter) => {
        if (filter === 'All') {
            return massiv;
        }
        return massiv.filter(item => {
                return item.country === filter
             })
        }


        const {term, filter} = props;

        const visibleItems = filterProduct(searchProduct(coffeList,term), filter);

        const elements = useMemo(() => {
            return setContent(process, () => renderCatalogItem(visibleItems), newItemLoading);
        }, [process])

           return (
            <div className="catalog">
                <div className="catalog__container">
                    {elements}
                <div className="catalog__control">
                    <button
                        className="catalog__button"
                        disabled={newItemLoading}
                        onClick={()=> onRequest(offset)}
                        style={{'display': itemEnded ? 'none' : '' }}
                    >Load more...</button>
                </div>
            </div>
        </div>
        )


}

export default Catalog;
