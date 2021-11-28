const initialState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "addHistoric":
      state.push(action.newHistoric);
      break;
    case "clearHistoric":
      state = [];
      break;
    default:
  }
  return state;
};
