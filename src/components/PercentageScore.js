import React from 'react';

const PercentageScore = (props) => {

    return (
        <>
            <div className="w-24 h-3 rounded-full bg-gray-300 relative">
                <div className="w-px h-full bg-white absolute z-10" style={{right: "20%"}} />
                <div className="w-px h-full bg-white absolute z-10" style={{right: "40%"}} />
                <div className="w-px h-full bg-white absolute z-10" style={{right: "60%"}} />
                <div className="w-px h-full bg-white absolute z-10" style={{right: "80%"}} />
                <div className={`w-24 h-3 rounded-l-full bg-${props.score_color} absolute left-0`} style={{ width: `${props.percentage_score}%` }} />
            </div>
        </>
    );
}

export default PercentageScore