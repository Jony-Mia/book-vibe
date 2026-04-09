import React, { createContext, Suspense } from 'react';
import Hero from '../component/Hero';
import Book from '../component/Book';
// let bookData = "Jony Mia";
import { AssetsContext } from '../context/AssetsContext';
import { ProductsAPI } from '../context/AssetsContext';

const Home = () => {
    let datas = ProductsAPI()
    return (
        <div className='font-inter'>

            <Hero />
            <Suspense fallback={<p>Loading.....</p>}>
                <AssetsContext.Provider value={datas} >
                    <Book />
                </AssetsContext.Provider>
            </Suspense>

        </div>
    );
};

export default Home;