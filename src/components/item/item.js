import './item.css';
import picture from '../../resources/img/item/aromatico.jpg';
import coffee from '../../resources/img/about/coffee-beans-black.svg';

const Item = () => {
    return (
        <section className="item">

                <div className="item__img">
                        <img src={picture} alt="coffee"/>
                </div>
                <div className="item__descr">
                    <h2 className="item__title title--article">About it</h2>
                    <div className="devider">
                        <div className="devider__img">
                            <img src={coffee} alt="coffee"/>
                        </div>
                    </div>
                        <div className="item__item item-descr">
                           <div className="item-descr__title">
                            <span  className="item-descr_bold">Country: </span>Brasil
                           </div>
                           <div className="item-descr__descr">
                            <span  className="item-descr_bold">Description: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           </div>
                           <div className="item-descr__price">
                                <span  className="item-descr_bold">Price: </span> 16.99$
                           </div>
                        </div>
                </div>

        </section>
    )
}
export default Item;
