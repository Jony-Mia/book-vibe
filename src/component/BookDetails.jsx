import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    let bookDetailsData = useLoaderData();
    let {bookId} = useParams();
    let findBook = bookDetailsData
    console.log(findBook);
    
    // console.log(bookId);
    
    return (
        <div>
            
        </div>
    );
};

export default BookDetails;