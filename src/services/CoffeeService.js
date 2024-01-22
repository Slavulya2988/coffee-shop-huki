import { useHttp } from "../hooks/http.hook";

const  useCoffeeService = () => {

    const { request,  process, setProcess} = useHttp();

    const _apiBase = 'db/db.json';
    const _baseOffset = 6;


    const getAllProduct = async ( offset = _baseOffset) => {
        const res = await request(`${_apiBase}`);
        const resMassive = res.product.map(_transformDataCatalog);
        return resMassive.slice(0,offset);
    }

    const getProduct = async (id) => {
        const res = await request(`${_apiBase}`);
         return _transformDataCatalog(res.product[id-1]);

    }

    const  getAbout = async (id) => {
        const res = await request('db/db.json');
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
            id: resProduct.id,
            descr:  resProduct.descr
        }
    }

    return {
            getAllProduct,
            getProduct,
            getAbout,
            process,
            setProcess}
}

export default useCoffeeService;
