import React from 'react';
import Divider from './Divider';

const UnexpandableRow = (data) => {

    return (
        <>
            <div className="flex flex-row justify-between items-center pt-1 pb-1">
                <h3 className="dark-text">{data.title}</h3>
                <h3 className="secondary-text">{data.value}</h3>
            </div>
            {data.has_divider && <Divider />}
        </>
    );
}

export default UnexpandableRow