import React, { useEffect, useState } from "react"
import { WidgetService } from "../api/widget-service"
import Widgets from "../reducers/Widgets"

const Home = () => {
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
    WidgetService().then((data) => {
      setLoading(false)
      WidgetCreator(data)
    })
  }, [])

  return (
    <>
      <section className="App-intro">
        {loading ? "«در حال بارگذاری...»" : components}
      </section>
    </>
  )
}

export default Home
