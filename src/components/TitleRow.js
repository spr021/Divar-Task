import React from 'react';

const TitleRow = (data) => {

    return (
        <>
            <h3 className={`text-${data.text_color} font-bold text-xl`}>{data.text}</h3>;
        </>
    );
}

export default TitleRow