import React, { useEffect, useState } from "react"
import Widgets from "../Widgets"
import { useLocation } from "react-router-dom"

const Action = () => {
  const location = useLocation()
  const [components, setComponents] = useState()
  const [loading, setLoading] = useState(true)

  const WidgetCreator = (data) => {
    const componentsContainer = []
    data.map((item, index) =>
      componentsContainer.push(
        <Widgets key={index} type={item.widget_type} data={item.data} />
      )
    )
    setComponents(componentsContainer)
  }

  useEffect(() => {
    setLoading(false)
    WidgetCreator(location.state.payload.widget_list)
  }, [location])

  return (
    <>
      <section className="App-intro">
        {loading ? "«در حال بارگذاری...»" : components}
      </section>
    </>
  )
}

export default Action
