import {createContext, useState} from 'react';

export const WishList = createContext([]);

const WishContext = ({children}) => {
    let [wish, setWish] = useState([])
    const wishData = {
        wish,
        setWish
    }
       console.log(wish);
    return (
        <WishList.Provider value={wishData}>
            {children}
        </WishList.Provider>
    );
};


export default WishContext;