import axios from "axios";
import { createContext } from "react";

export const AssetsContext = createContext([])

export let ProductsAPI = async () => {
    let res = await axios.get('/booksData.json');
    return res.data;
}