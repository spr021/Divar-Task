const getData = () =>
  fetch("https://run.mocky.io/v3/e399a0d4-6b0b-4e0c-b71f-2ae7d8caecd7", {
    method: "GET",
  }).then((res) => res.json())

export const WidgetService = () => Promise.resolve(getData())
