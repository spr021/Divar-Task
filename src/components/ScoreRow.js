import React from "react"
import Divider from "./Divider"
import PercentageScore from "./PercentageScore"
import Action from "../Action"
import { useHistory } from "react-router-dom"

const ScoreRow = ({
  title,
  descriptive_score,
  percentage_score,
  score_color,
  image_url,
  image_color,
  action,
  has_divider,
  icon,
}) => {
  const history = useHistory()

  return (
    <div onClick={() => action && Action(action, history)}>
      <div
        className={`w-auto h-12 flex flex-row justify-start items-center p-1 ${
          action ? "cursor-pointer" : ""
        }`}
      >
        <div className=" w-full h-full flex flex-row justify-start items-center">
          <div className="ml-2">
            <img
              className="w-8 h-8"
              src={icon.image_url_light}
              alt={icon.icon_name}
            />
          </div>
          <div className="flex">
            <p
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
            {descriptive_score && <pre> : {descriptive_score}</pre>}
          </div>
        </div>
        <div className=" w-48 h-full flex flex-row justify-end items-center">
          <PercentageScore
            percentage_score={percentage_score || descriptive_score}
            score_color={score_color}
          />
          {action && (
            <i className=" text-3xl text-gray-500 fa fa-angle-left mb-1 mr-4"></i>
          )}
        </div>
      </div>
      {has_divider && <Divider />}
    </div>
  )
}

export default ScoreRow
