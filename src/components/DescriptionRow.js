import React from "react"
import Divider from "./Divider"

const DescriptionRow = ({ text, has_divider }) => {
  return (
    <>
      <div className="w-auto h-auto flex flex-col justify-start items-start p-1">
        <h2 className="font-semibold text-lg text-gray-600 pb-6 pr-2">
          {text}
        </h2>
      </div>
      {has_divider && <Divider />}
    </>
  )
}

export default DescriptionRow
