import { useState, useEffect } from 'react';
import './about.css';
import coffee from '../../resources/img/about/coffee-beans-black.svg';
import useCoffeeService from '../../services/CoffeeService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/error';


const About = (props) => {

    const [about, setAbout] = useState({});
    const {loading, error, getAbout} = useCoffeeService();

    useEffect(()=> {
        updateAbout();
    }, [props.page])

    const onAboutLoaded = (about) =>{
       setAbout(about);
    }

    const updateAbout = () => {

        // запит до серевера
        getAbout(props.page)
            .then(onAboutLoaded)
     }


        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const view = <View about={about}/> ;

        return(
           <>
            {errorMessage}
            {spinner}
            {view}
           </>
        )

};

const View = ({about}) => {
 const {img, title, descr} = about;
    return (
        <section className="about">
        <div className="about__container">
            <div className="about__content">
                <div className="about__img">
                    <img src={img} alt=""/>
                </div>
                <div className="about__descr">
                    <h2 className="about__title title--article">{title}</h2>
                    <div className="devider">
                        <div className="devider__img">
                            <img src={coffee} alt="coffee"/>
                        </div>
                    </div>
                    <div className="about__item">
                        {descr}
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;
