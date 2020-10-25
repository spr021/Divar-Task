import React, { useState } from 'react';
import Divider from './Divider';
import PercentageScore from './PercentageScore';

const respons = {
    "widget_type": "DESCRIPTION_ROW",
    "data": {
        "title": "بدنه",
        "text": "کاپوت سنگ خوردگی دارد. به دلیل وجود فلاپ امکان بررسی رکاب ها وجود ندارد.",
        "has_divider": true
    }
}

const ScoreRow = (data) => {

    const [showDescription, setShowDescription] = useState(true)

    return (
        <>
            {showDescription ?
                <>
                    <div className=" w-auto h-12 flex flex-row justify-start items-center p-1 cursor-pointer " onClick={() => { setShowDescription(!showDescription) }}>
                        <div className=" w-full h-full flex flex-row justify-start items-center">
                            <div className="ml-2"><img className="w-8 h-8" src={data.icon.image_url_light} alt={data.icon.icon_name} /></div>
                            <div className=""><p dangerouslySetInnerHTML={{ __html: data.title }} /></div>
                        </div>
                        <div className=" w-48 h-full flex flex-row justify-end items-center">
                            <PercentageScore {...data} />
                            <i className=" text-3xl text-gray-500 fa fa-angle-left mb-1 mr-4" ></i>
                        </div>
                    </div>
                    {data.has_divider && <Divider />}
                </> :
                <>

                    <div className="w-auto h-auto flex flex-col justify-start items-start p-1 cursor-pointer" onClick={() => { setShowDescription(!showDescription) }}>
                        <div className="font-bold text-xl">{respons.data.title}</div>
                        <div className="mt-4 mb-2">{respons.data.text}</div>
                    </div>
                    {respons.data.has_divider && <Divider />}
                </>
            }

        </>
    );
}

export default ScoreRow