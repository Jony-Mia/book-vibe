import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {
    let data = useLoaderData();
    console.log(data);
    
    return (
        <div>
            
        </div>
    );
};

export default User;