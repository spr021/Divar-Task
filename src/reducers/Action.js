const Action = ({ type, payload }, history) => {
  switch (type) {
    case "LOAD_PAGE":
      history.push({
        pathname: `/action/${payload.title ? payload.title : ""}`,
        state: { payload },
      })
      break
    default:
      return null
  }
}

export default Action
