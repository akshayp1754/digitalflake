const initialState = [];

const categoryReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case "Category":
      return payload;
    default:
      return state;
  }
};

export default categoryReducer;
