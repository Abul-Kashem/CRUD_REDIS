import React from 'react';
import notfound from '../Assets/Images/NotFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={notfound} style={{ width: '30%', margin: '80px 0 0 35%' }} alt="" />
        </div>
    );
};

export default NotFound;