import HeaderMain from '../headerMain/hedaerMain';
import AboutMain from '../aboutMain/aboutMain';
import CatalogMain from '../catalogMain/catalogMain';

const MainPage = () => {
    return(
        <>
            <HeaderMain/>
            <main className="page">
            <AboutMain/>
            <CatalogMain/>
            </main>
        </>
    )
}

export default MainPage;
