import React, { use, useContext, useState } from 'react';
import { AssetsContext } from '@/context/AssetsContext';
import { useNavigate } from 'react-router';
import { WishList } from '../context/Wish';

const ListBook = () => {
    let navigate = useNavigate()
    let data = use(AssetsContext);
    let listedBook = use(data);
    let filterData = listedBook;
    let { wish } = useContext(WishList)
    const [type, setType] = useState('');
    console.log(wish);

    if (type === "pages") {
        const shortData = [...listedBook].sort((a, b) => a.totalPages - b.totalPages)
        filterData = shortData
    }
    else if (type === "rating") {
        const rating = [...listedBook].sort((a, b) => a.rating - b.rating)
        filterData = rating
    } else if (type === "year") {
        const year = [...listedBook].sort((a, b) => a.rating - b.rating)
        filterData = year
    }
    return (
        <div>
            <div className='container bg-base-200 rounded-2xl p-10 text-4xl font-bold m-auto'>
                <p className='text-center'>Book</p>
            </div>
            <div className='container m-auto flex mt-8 justify-center'>
                <div className="dropdown dropdown-center">
                    <button className="btn m-1 bg-[#23be0a] text-white btn-wide w-full ">Short By {type}</button>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-50 p-2 shadow-sm">
                        <li onClick={() => setType("rating")}><a>Rating</a></li>
                        <li onClick={() => setType("pages")}><a>Number Of Pages</a></li>
                        <li onClick={() => setType("year")}><a>Publisher Year</a></li>
                    </ul>
                </div>
            </div>
            <div className="tabs tabs-active tabs-lift">
                {/* Tabs Of */}
            <input type="radio" name="my_tabs_3" className="tab" aria-label="Book list" defaultChecked />

                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        filterData.map((data) => {
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
                            } = data;
                            return (
                                <div key={bookId} className="card my-6 md:card-side bg-base-100 shadow">
                                    <figure className='h-70 p-5 md:w-50 bg-base-200'>
                                        <img src={image} alt="Movie" />
                                    </figure>
                                    <div className="card-body flex justify-between flex-col">
                                        <h2 className="card-title text-2xl">{bookName}</h2>
                                        <span>By : {author}</span>
                                        <div>
                                            <div className='flex gap-11 items-center'>
                                                <div>
                                                    <span className='font-bold'>Tags:  </span>
                                                    {tags.map(badgeName => <button key={badgeName} className="btn mx-2 hover:bg-[#f1fcf6] active:translate-0 active:border-b btn-sm rounded-4xl btn-soft shadow-none btn-success join-item">{badgeName}</button>)}
                                                </div>
                                                <ul>
                                                    <li>
                                                        <span className='fal fa-location-dot'></span>
                                                        <span> Year Of Publishing: {yearOfPublishing}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <br />
                                            <div>
                                                <ul className='text-[#131313] gap-5 flex'>
                                                    <li>
                                                        <span className='far fa-users'></span>
                                                        <span> Publisher: {publisher}</span>
                                                    </li>
                                                    <li>
                                                        <span className='far fa-file'></span>
                                                        <span> Page: {totalPages}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-actions border-t-2 pt-4 border-gray-300 justify-start">
                                            <button className='btn rounded-full btn-primary btn-soft'>Category: {category}</button>
                                            <button className='btn rounded-full btn-warning btn-soft'>Ratings: {rating}</button>
                                            <button onClick={() => navigate(`/book/${bookId}`)} className='btn rounded-full text-white bg-[#22bf0a]'>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist" />

                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {wish.length===0? "You are not added any wish":
                            wish.map((datas) => {
                                const {
                                    tags,
                                    bookId,
                                    image,
                                    author,
                                    // review,
                                    rating,
                                    bookName,
                                    category,
                                    publisher,
                                    totalPages,
                                    yearOfPublishing
                                } = datas;
                                return (
                                    <div key={bookId} className="card my-6 md:card-side bg-base-100 shadow">
                                        <figure className='h-70 p-5 md:w-50 bg-base-200'>
                                            <img src={image} alt="Movie" />
                                        </figure>
                                        <div className="card-body flex justify-between flex-col">
                                            <h2 className="card-title text-2xl">{bookName}</h2>
                                            <span>By : {author}</span>
                                            <div>
                                                <div className='flex gap-11 items-center'>
                                                    <div>
                                                        <span className='font-bold'>Tags:  </span>
                                                        {tags.map(badgeName => <button key={badgeName} className="btn mx-2 hover:bg-[#f1fcf6] active:translate-0 active:border-b btn-sm rounded-4xl btn-soft shadow-none btn-success join-item">{badgeName}</button>)}
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <span className='fal fa-location-dot'></span>
                                                            <span> Year Of Publishing: {yearOfPublishing}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <br />
                                                <div>
                                                    <ul className='text-[#131313] gap-5 flex'>
                                                        <li>
                                                            <span className='far fa-users'></span>
                                                            <span> Publisher: {publisher}</span>
                                                        </li>
                                                        <li>
                                                            <span className='far fa-file'></span>
                                                            <span> Page: {totalPages}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-actions border-t-2 pt-4 border-gray-300 justify-start">
                                                <button className='btn rounded-full btn-primary btn-soft'>Category: {category}</button>
                                                <button className='btn rounded-full btn-warning btn-soft'>Ratings: {rating}</button>
                                                <button onClick={() => navigate(`/book/${bookId}`)} className='btn rounded-full text-white bg-[#22bf0a]'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                </div>
            </div>
        </div>
    );
};

export default ListBook;