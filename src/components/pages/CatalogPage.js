import { useState } from 'react';
import Header from '../header/header';
import About from '../about/about';
import Find from '../find/find';
import Catalog from '../catalog/catalog';
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const CatalogPage = () => {
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const onUpdateSearch = (term) => {
            setTerm(term);
        }

    const onSelectFilter = (filter) => {
        setFilter(filter);
        }

    return(
        <>
         <Header title='Our Coffee'/>
                <main className="page">
                    <ErrorBoundary>
                        <About page={0}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Find   onUpdateSearch = {onUpdateSearch}
                                onSelectFilter = {onSelectFilter}
                                filter = {filter}
                                />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Catalog term = {term}
                                filter = {filter}/>
                    </ErrorBoundary>
                </main>
        </>
    )
}

export default CatalogPage;
