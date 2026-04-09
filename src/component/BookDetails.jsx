import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    let {
         tags, 
         bookId,
         image, 
         author, 
         review, 
         rating, 
         bookName,
         category, 
         publisher, 
         totalPages, 
         yearOfPublishing 
        } = useLoaderData();
    // let {bookId} = useParams();
    console.log(bookId,tags, bookName, author, image, rating, category, publisher, totalPages);
    
    return (
        <div>
            <div className='grid grid-cols-2 pt-10 container gap-5'>
                <div className='p-3 bg-base-200 '>
                    <img width={380} src={image} className='m-auto ' alt="" />
                </div>
                <div className='container m-auto'>
                    <h2 className='font-inter text-3xl font-bold'>{bookName}</h2>
                    <p className='text-gray-600 font-bold text-xl'>By: {author}</p>
                    
                    <p className='border-y-2 border-gray-300 text-2xl font-semibold py-4 mt-5 '>{category}</p>
                    
                    <p className='font-inter font-normal mt-5'> <span className='font-bold'>Review:</span> {review}</p>
                    <p className='border-b-2 border-gray-300 font-semibold py-4 mt-5 '> <span className='font-bold'>Tags:</span>
                    
                     {tags.map(badgeName => <button key={badgeName} className="btn mx-2 hover:bg-[#f1fcf6] active:translate-0 active:border-b btn-sm rounded-4xl btn-soft shadow-none btn-success join-item">{badgeName}</button>)}</p>
                    
                    <table className='table  py-4 mt-5 '>
                        <tr>
                            <td>Number of Pages</td>
                            <td>{totalPages}</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>{publisher}</td>
                        </tr>
                        <tr>
                            <td>Year of Publishing</td>
                            <td>{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td>Ratings</td>
                            <td>{rating}</td>
                        </tr>
                    </table>
                    <div className='space-x-4'>
                        <button className='btn btn-outline btn-neutral rounded-xl'>Read</button>
                        <button className='btn bg-[#50b1c9] rounded-xl'>Whishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BookDetails;