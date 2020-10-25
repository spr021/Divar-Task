import React from 'react';
import Divider from './Divider';

const FeatureRow = (data) => {


    return (
        <>

            <div className=" w-auto h-12 flex flex-row items-center p-1 ">
                <div className="ml-2">
                    <img className="w-8 h-8" src={data.icon.image_url_dark} alt={data.icon.icon_name} />
                </div>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: data.title }} />
                </div>
            </div>
            {data.has_divider && <Divider />}
        </>
    );
}

export default FeatureRow