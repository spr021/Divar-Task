import React from "react"
import Divider from "./Divider"

const TitleRow = ({ text, text_color, has_divider }) => {
  return (
    <>
      <h3 className={`text-${text_color} font-bold text-xl py-2`}>{text}</h3>
      {has_divider && <Divider />}
    </>
  )
}

export default TitleRow
