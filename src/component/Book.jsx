import React, { use } from 'react';
import { AssetsContext } from '../context/AssetsContext';


const Book = () => {
    const bookDataList = use(AssetsContext);
    const bookData = use(bookDataList);
    
    return (
        <div className='mt-5'>
            <h1 className='text-center font-bold text-4xl '>Books</h1>
        <div className='grid grid-cols-3 gap-30'>
                {
                bookData.map(data=><Products
                     id={data.bookId} 
                     name={data.bookname}
                     autor={data.author} 
                     image ={data.image} 
                     review={data.review} 
                     totalPages={data.totalPages} 
                     ratings={data.ratings} 
                     tags={data.tags} 
                     publisher={data.publisher} yearOfPublishing={data.yearOfPublishing} />)
            }
        </div>
            
        </div>
    );
};

export let Products = () => {

    return (
        <>
            <div>
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Book;