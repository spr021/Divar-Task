import React, { useState, useEffect } from "react";
import { WidgetService } from "./api/widget-service";
import { Widgets } from "./components/Widgets";

function App() {
    const [components, setComponents] = useState();
    const [loading, setLoading] = useState(true);

    const WidgetCreator = (data) => {
        const componentsContainer = [];
        data.map((item, index) =>
            componentsContainer.push(
                <Widgets key={index} type={item.widget_type} data={item.data} />
            )
        );
        setComponents(componentsContainer);
    };

    useEffect(() => {
        WidgetService().then((data) => {
          setLoading(false)
          WidgetCreator(data);
        });
    }, []);

    return (
        <div className="App">
            <div className="App-intro">
              { loading ? "«در حال بارگذاری...»" : components }
              </div>
        </div>
    );
}

export default App;
