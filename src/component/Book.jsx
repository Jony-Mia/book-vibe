import React, { use } from 'react';
import { AssetsContext } from '../context/AssetsContext';


const Book = () => {
    const bookDataList = use(AssetsContext);
    const bookData     = use(bookDataList);
    return (
        <div className='mt-5'>
            <h1 className='text-center font-bold text-4xl '>Books</h1>
        <div className='grid grid-cols-5 items-center gap-3'>
                {
                bookData.map(data=><Products
                    key={data.bookId}
                     id={data.bookId} 
                     name={data.bookName}
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

export let Products = ({id,name,autor,image,review,totalPages,ratings,tags,publisher,yearOfPublishing}) => {

    return (
        <>
            <div>
                <div className="card w-70 bg-base-100 shadow-sm">
                    <figure>
                        <img width={100} src={image} />
                    </figure>
                    <div className="card-body">
                        <p className="card-title"> {name}</p>
                        <p>By: {autor}</p>
                        <div className="card-actions justify-between">
                            <span>Fiction</span>
                            <span>5.00 <i className='fas fa-star'></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Book;