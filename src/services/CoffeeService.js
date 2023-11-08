import { useHttp } from "../hooks/http.hook";

const  useCoffeeService = () => {

    const {loading, request, error} = useHttp();

    const _apiBase = 'db/db.json';
    const _baseOffset = 6;


    const getAllProduct = async ( offset = _baseOffset) => {
        const res = await request(`${_apiBase}`);
        const resMassive = res.product.map(_transformDataCatalog);
        return resMassive.slice(0,offset);
    }

    const getProduct = async (id) => {
        const res = await request(`${_apiBase}`);
        return _transformDataCatalog(res.product[id]);

    }

    const  getAbout = async (id) => {
        const res = await request(`${_apiBase}`);
        return _transformDataAbout(res.about[id]);
    }

    const  _transformDataAbout = (resIdPage) => {
        return {
            title: resIdPage.title,
            descr: resIdPage.descr,
            img:   resIdPage.urlImg
        }
    }

    const  _transformDataCatalog = (resProduct) => {
        return {
            name: resProduct.name,
            type: resProduct.type,
            weight: resProduct.weight,
            country: resProduct.country,
            price: resProduct.price,
            img: resProduct.urlImg,
            id: resProduct.id
        }
    }

    return {loading, error, getAllProduct, getProduct,  getAbout}
}

export default useCoffeeService;
