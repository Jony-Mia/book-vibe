import React, { useContext } from 'react';
import { WishList } from '../context/Wish';

const Wish = () => {
    let { wish, setWish } = useContext(WishList)
    const { id, name, autor, image, review, category, totalPages, ratings, tags, publisher, yearOfPublishing } = wish;
    console.log(wish);
    
    return (
        <div>
            
        </div>
    );
};

export default Wish;