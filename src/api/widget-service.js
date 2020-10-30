//https://run.mocky.io/v3/2c12583d-9d78-4d16-ad6b-8cfbb455c0ec
//https://localhost:3000/api/v1/widgets
const getData = () =>
    fetch("https://localhost:3000/api/v1/widgets", {
        method: "GET",
    }).then((res) => res.json());

export const WidgetService = () => Promise.resolve(getData());
