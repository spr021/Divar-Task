import React from 'react';

const MenuItem = (data) => {

    return (
        <>
            <h4 className=" h-auto flex flex-row justify-start items-center mx-2 my-2 text-yellow-600" >{data.text}</h4>
        </>
    );
}

export default MenuItem