const Reducer = (state, action) => {
  switch (action.type) {
    case "activate":
      return { ...state, activeItem: action.payload };

    case "add":
      return { ...state, cart: action.payload };

    case "remove":
      return { ...state, cart: action.payload };

    case "login":
      return { ...state, authorized: true };

    case "logout":
      return { ...state, authorized: false };

    default:
      return state;
  }
};
export default Reducer;
