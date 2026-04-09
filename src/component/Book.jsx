import React, { use } from 'react';
import { AssetsContext } from '../context/AssetsContext';


const Book = () => {
    const bookDataList = use(AssetsContext);
    const bookData = use(bookDataList);
    return (
        <div className='mt-5'>
            <h1 className='text-center font-bold my-3 text-4xl '>Books</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-3'>
                {
                    bookData.map(data => <Products
                        key={data.bookId}
                        id={data.bookId}
                        name={data.bookName}
                        autor={data.author}
                        image={data.image}
                        review={data.review}
                        totalPages={data.totalPages}
                        category={data.category}
                        ratings={data.rating}
                        tags={data.tags}
                        publisher={data.publisher} yearOfPublishing={data.yearOfPublishing} />)
                }
            </div>

        </div>
    );
};

export let Products = ({ id, name, autor, image, review,category, totalPages, ratings, tags, publisher, yearOfPublishing }) => {

    return (
        <>
            <div>
                <div className="card bg-base-100 p-2 shadow-sm">
                    <figure className='bg-base-200 p-4 rounded-2xl'>
                        <img width={100} src={image} />
                    </figure>
                    <div className="join m-auto space-x-2 my-3">
                       {tags.map(badgeName=> <button key={badgeName} className="btn btn-sm rounded-4xl btn-soft btn-success join-item">{badgeName}</button>)}
                       
                    </div>
                    <div className="card-body pt-2">
                        <p className="card-title text-xl font-inter line-clamp-1 "> {name}</p>
                        <p className='font-semibold text-[#1b1b1b]'>By: {autor}</p>
                        <div className="card-actions justify-between">
                            <span className='text-lg font-inter' >{category}</span>
                            <span className='text-lg font-inter' >{ratings} <i className="fa-regular fa-star"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Book;