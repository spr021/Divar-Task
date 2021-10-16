import React from "react"
import DescriptionRow from "../components/DescriptionRow"
import Divider from "../components/Divider"
import FeatureRow from "../components/FeatureRow"
import ImageCarouselRow from "../components/ImageCarouselRow"
import LegendTitleRow from "../components/LegendTitleRow"
import ScoreRow from "../components/ScoreRow"
import TitleRow from "../components/TitleRow"
import UnexpandableRow from "../components/UnexpandableRow"

const Widgets = (props) => {
  switch (props.type) {
    case "FEATURE_ROW":
      return <FeatureRow {...props.data} />
    case "SCORE_ROW":
      return <ScoreRow {...props.data} />
    case "TITLE_ROW":
      return <TitleRow {...props.data} />
    case "SECTION_DIVIDER_ROW":
      return <Divider />
    case "UNEXPANDABLE_ROW":
      return <UnexpandableRow {...props.data} />
    case "LEGEND_TITLE_ROW":
      return <LegendTitleRow {...props.data} />
    case "DESCRIPTION_ROW":
      return <DescriptionRow {...props.data} />
    case "IMAGE_CAROUSEL_ROW":
      return <ImageCarouselRow {...props.data} />
    default:
      return null
  }
}

export default Widgets
