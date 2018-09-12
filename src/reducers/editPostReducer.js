const editPostReducer = (
  state = { key: 0, content: "", title: "" },
  action
) => {
  switch (action.type) {
    case "SET_EDIT_POST":
      return action.payload;
    default:
      return state;
  }
};

export default editPostReducer;
