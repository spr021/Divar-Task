import React from "react"
import PersianToEnglishNumber from "../utils/PersianToEnglishNumber"

const PercentageScore = ({ percentage_score, score_color }) => {
  return (
    <div className="w-24 h-3 rounded-full bg-gray-300 relative">
      <div
        className="w-px h-full bg-white absolute z-10"
        style={{ right: "20%" }}
      />
      <div
        className="w-px h-full bg-white absolute z-10"
        style={{ right: "40%" }}
      />
      <div
        className="w-px h-full bg-white absolute z-10"
        style={{ right: "60%" }}
      />
      <div
        className="w-px h-full bg-white absolute z-10"
        style={{ right: "80%" }}
      />
      <div
        className={`w-24 h-3 rounded-l-full bg-${score_color} absolute left-0`}
        style={{ width: `${PersianToEnglishNumber(percentage_score)}%` }}
      />
    </div>
  )
}

export default PercentageScore
