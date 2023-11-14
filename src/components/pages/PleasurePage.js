import { useState } from 'react';

import Header from '../header/header';
import About from '../about/about';
import Catalog from '../catalog/catalog';
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const PleasurePage = () => {
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('All');


    return(
        <>
            <Header title='For your pleasure' />
                <main className="page">
                    <ErrorBoundary>
                        <About page={2}/>
                    </ErrorBoundary>

                    <ErrorBoundary>
                        <Catalog term = {term}
                                 filter = {filter}/>
                    </ErrorBoundary>
                </main>
        </>
    )
}

export default PleasurePage;
