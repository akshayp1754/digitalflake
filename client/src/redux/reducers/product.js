const initialState = [];

const productReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case "Product":
      return payload;
    default:
      return state;
  }
};

export default productReducer;
