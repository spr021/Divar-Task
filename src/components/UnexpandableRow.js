import React from "react";
import Divider from "./Divider";

const UnexpandableRow = (data) => {
    return (
        <>
            <div
                className="w-auto h-auto flex flex-col justify-start items-start p-1 cursor-pointer"
            >
                <h3 className="font-bold text-xl dark-text">{data.title}</h3>
                <h3 className="mt-4 mb-2 secondary-text">{data.text}</h3>
            </div>
            {data.has_divider && <Divider />}
        </>
    );
};

export default UnexpandableRow;
