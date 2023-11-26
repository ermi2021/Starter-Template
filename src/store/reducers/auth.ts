const initialState = {
  token: localStorage.getItem("yourTokenKey") || null,
};

const authReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default authReducer;
